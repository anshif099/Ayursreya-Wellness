"""Serve the downloaded Ayursreya Wellness mirror with Next.js-compatible URLs."""

from __future__ import annotations

import argparse
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, unquote, urlsplit


SITE_ROOT = (Path(__file__).resolve().parent / "www.ojastheeram.com").resolve()


class MirrorRequestHandler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".webp": "image/webp",
        ".woff2": "font/woff2",
    }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(SITE_ROOT), **kwargs)

    def _local_url(self) -> str:
        request = urlsplit(self.path)
        query = parse_qs(request.query)

        if request.path == "/favicon.ico" and (SITE_ROOT / "favicon.png").is_file():
            return "/favicon.png"

        # A static mirror has no Next.js image optimizer. Serve the downloaded
        # source image instead; the browser can display it at any requested size.
        if request.path == "/_next/image":
            image_url = query.get("url", [""])[0]
            image_path = urlsplit(unquote(image_url)).path
            if image_path.startswith("/"):
                candidate = (SITE_ROOT / image_path.lstrip("/")).resolve()
                if candidate.is_relative_to(SITE_ROOT) and candidate.is_file():
                    return "/" + candidate.relative_to(SITE_ROOT).as_posix()

        # Resolve clean Next.js routes such as /booking to booking.html.
        route = unquote(request.path)
        if route != "/" and not Path(route).suffix:
            candidate = (SITE_ROOT / route.lstrip("/")).with_suffix(".html")
            if candidate.is_file():
                return "/" + candidate.relative_to(SITE_ROOT).as_posix()

        return request.path

    def _redirect_rsc_request(self) -> bool:
        request = urlsplit(self.path)
        if "_rsc" not in parse_qs(request.query):
            return False

        # The mirror has complete HTML pages but no live React Server Component
        # endpoint. Redirecting the prefetch to clean HTML tells Next to use a
        # normal full-page navigation instead of showing its error boundary.
        self.send_response(307)
        self.send_header("Location", request.path)
        self.end_headers()
        return True

    def do_GET(self) -> None:
        if self._redirect_rsc_request():
            return
        self.path = self._local_url()
        super().do_GET()

    def do_HEAD(self) -> None:
        if self._redirect_rsc_request():
            return
        self.path = self._local_url()
        super().do_HEAD()

    def end_headers(self) -> None:
        # Prevent an earlier broken asset response from remaining in the browser.
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port", type=int, default=8000)
    args = parser.parse_args()

    server = ThreadingHTTPServer(("127.0.0.1", args.port), MirrorRequestHandler)
    print(f"Serving Ayursreya Wellness at http://localhost:{args.port}")
    print("Press Ctrl+C to stop.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
