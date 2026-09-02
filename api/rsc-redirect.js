module.exports = function handler(request, response) {
  const rawPath = Array.isArray(request.query.path)
    ? request.query.path.join("/")
    : request.query.path || "";

  const safePath = rawPath
    .split("/")
    .filter((segment) => segment && segment !== "." && segment !== "..")
    .map(encodeURIComponent)
    .join("/");

  response.setHeader("Cache-Control", "no-store");
  response.redirect(307, safePath ? `/${safePath}` : "/");
};
