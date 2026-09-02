(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 17067, e => {
    "use strict";
    e.s(["clinic", 0, {
        name: "Ayursreya Wellness",
        subtitle: "Ayurveda Wellness Clinic",
        tagline: "Holistic Healing for Mind & Body",
        description: "Experience authentic Ayurvedic therapies rooted in Kerala tradition. We provide holistic healing solutions for modern lifestyle diseases and long-term wellness.",
        phone: ["+91 00000 00000", "+91 00000 00001"],
        whatsapp: "910000000000",
        address: "Demo Location, Bengaluru, Karnataka, India"
    }])
}, 43432, e => {
    "use strict";
    let t = (0, e.i(75254).default)("phone", [
        ["path", {
            d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
            key: "9njp5v"
        }]
    ]);
    e.s(["Phone", 0, t], 43432)
}, 75254, e => {
    "use strict";
    var t = e.i(71645);
    let r = (...e) => e.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim(),
        a = e => {
            let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => r ? r.toUpperCase() : t.toLowerCase());
            return t.charAt(0).toUpperCase() + t.slice(1)
        };
    var i = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    let s = (0, t.createContext)({}),
        l = (0, t.forwardRef)(({
            color: e,
            size: a,
            strokeWidth: l,
            absoluteStrokeWidth: o,
            className: n = "",
            children: d,
            iconNode: c,
            ...h
        }, u) => {
            let {
                size: p = 24,
                strokeWidth: m = 2,
                absoluteStrokeWidth: f = !1,
                color: g = "currentColor",
                className: w = ""
            } = (0, t.useContext)(s) ? ? {}, y = o ? ? f ? 24 * Number(l ? ? m) / Number(a ? ? p) : l ? ? m;
            return (0, t.createElement)("svg", {
                ref: u,
                ...i,
                width: a ? ? p ? ? i.width,
                height: a ? ? p ? ? i.height,
                stroke: e ? ? g,
                strokeWidth: y,
                className: r("lucide", w, n),
                ...!d && !(e => {
                    for (let t in e)
                        if (t.startsWith("aria-") || "role" === t || "title" === t) return !0;
                    return !1
                })(h) && {
                    "aria-hidden": "true"
                },
                ...h
            }, [...c.map(([e, r]) => (0, t.createElement)(e, r)), ...Array.isArray(d) ? d : [d]])
        });
    e.s(["default", 0, (e, i) => {
        let s = (0, t.forwardRef)(({
            className: s,
            ...o
        }, n) => (0, t.createElement)(l, {
            ref: n,
            iconNode: i,
            className: r(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, s),
            ...o
        }));
        return s.displayName = a(e), s
    }], 75254)
}, 72520, e => {
    "use strict";
    let t = (0, e.i(75254).default)("arrow-right", [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }]
    ]);
    e.s(["ArrowRight", 0, t], 72520)
}, 63488, e => {
    "use strict";
    let t = (0, e.i(75254).default)("mail", [
        ["path", {
            d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
            key: "132q7q"
        }],
        ["rect", {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            key: "izxlao"
        }]
    ]);
    e.s(["Mail", 0, t], 63488)
}, 46897, e => {
    "use strict";
    let t = (0, e.i(75254).default)("map-pin", [
        ["path", {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]
    ]);
    e.s(["MapPin", 0, t], 46897)
}]);