// OpenLayers. See https://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/openlayers/master/LICENSE.md
// Version: v4.4.1
;(function (root, factory) {
    if (typeof exports === "object") {
        module.exports = factory();
    } else if (typeof define === "function" && define.amd) {
        define([], factory);
    } else {
        root.ol = factory();
    }
}(this, function () {
    var OPENLAYERS = {};
    var k, aa = this;

    function t(a, b) {
        var c = OPENLAYERS;
        a = a.split(".");
        c = c || aa;
        a[0] in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());)a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    };
    var ba, da;

    function ea(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function ha(a, b) {
        return 0 <= a.indexOf(b)
    }

    function ia(a, b, c) {
        var d = a.length;
        if (a[0] <= b)return 0;
        if (!(b <= a[d - 1]))if (0 < c)for (c = 1; c < d; ++c) {
            if (a[c] < b)return c - 1
        } else if (0 > c)for (c = 1; c < d; ++c) {
            if (a[c] <= b)return c
        } else for (c = 1; c < d; ++c) {
            if (a[c] == b)return c;
            if (a[c] < b)return a[c - 1] - b < b - a[c] ? c - 1 : c
        }
        return d - 1
    }

    function ja(a, b) {
        var c = Array.isArray(b) ? b : [b], d = c.length;
        for (b = 0; b < d; b++)a[a.length] = c[b]
    }

    function ka(a, b) {
        for (var c = a.length >>> 0, d, e = 0; e < c; e++)if (d = a[e], b(d, e, a))return d;
        return null
    }

    function ma(a, b) {
        var c = a.length;
        if (c !== b.length)return !1;
        for (var d = 0; d < c; d++)if (a[d] !== b[d])return !1;
        return !0
    }

    function na(a) {
        var b = oa, c = a.length, d = Array(a.length), e;
        for (e = 0; e < c; e++)d[e] = {index: e, value: a[e]};
        d.sort(function (a, c) {
            return b(a.value, c.value) || a.index - c.index
        });
        for (e = 0; e < a.length; e++)a[e] = d[e].value
    }

    function pa(a, b) {
        var c;
        return a.every(function (d, e) {
            c = e;
            return !b(d, e, a)
        }) ? -1 : c
    }

    function qa(a, b) {
        var c = b || ea;
        return a.every(function (b, e) {
            if (0 === e)return !0;
            b = c(a[e - 1], b);
            return !(0 < b || 0 === b)
        })
    };
    function v(a, b) {
        a.prototype = Object.create(b.prototype);
        a.prototype.constructor = a
    }

    function sa() {
    }

    function w(a) {
        return a.ep || (a.ep = ++ta)
    }

    var ta = 0;

    function ua(a) {
        this.message = "Assertion failed. See https://openlayers.org/en/v4.4.1/doc/errors/#" + a + " for details.";
        this.code = a;
        this.name = "AssertionError"
    }

    v(ua, Error);
    function wa(a, b) {
        if (!a)throw new ua(b);
    };
    function xa(a, b, c, d) {
        this.ba = a;
        this.da = b;
        this.ea = c;
        this.ga = d
    }

    function ya(a, b, c, d, e) {
        return void 0 !== e ? (e.ba = a, e.da = b, e.ea = c, e.ga = d, e) : new xa(a, b, c, d)
    }

    function za(a, b, c) {
        return a.ba <= b && b <= a.da && a.ea <= c && c <= a.ga
    }

    function Aa(a, b) {
        return a.ba == b.ba && a.ea == b.ea && a.da == b.da && a.ga == b.ga
    }

    function Ba(a, b) {
        return a.ba <= b.da && a.da >= b.ba && a.ea <= b.ga && a.ga >= b.ea
    };
    function Da(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    var Ea = function () {
        var a;
        "cosh" in Math ? a = Math.cosh : a = function (a) {
            a = Math.exp(a);
            return (a + 1 / a) / 2
        };
        return a
    }();

    function Fa(a) {
        wa(0 < a, 29);
        return Math.pow(2, Math.ceil(Math.log(a) / Math.LN2))
    }

    function Ga(a, b, c, d, e, f) {
        var g = e - c, h = f - d;
        if (0 !== g || 0 !== h) {
            var l = ((a - c) * g + (b - d) * h) / (g * g + h * h);
            1 < l ? (c = e, d = f) : 0 < l && (c += g * l, d += h * l)
        }
        return Ha(a, b, c, d)
    }

    function Ha(a, b, c, d) {
        a = c - a;
        b = d - b;
        return a * a + b * b
    }

    function Ia(a) {
        return a * Math.PI / 180
    }

    function Ja(a, b) {
        a %= b;
        return 0 > a * b ? a + b : a
    }

    function Ka(a, b, c) {
        return a + c * (b - a)
    };
    function La(a, b, c) {
        void 0 === c && (c = [0, 0]);
        c[0] = a[0] + 2 * b;
        c[1] = a[1] + 2 * b;
        return c
    }

    function Ma(a, b, c) {
        void 0 === c && (c = [0, 0]);
        c[0] = a[0] * b + .5 | 0;
        c[1] = a[1] * b + .5 | 0;
        return c
    }

    function Na(a, b) {
        if (Array.isArray(a))return a;
        void 0 === b ? b = [a, a] : b[0] = b[1] = a;
        return b
    };
    function Oa(a) {
        for (var b = Pa(), c = 0, d = a.length; c < d; ++c)Qa(b, a[c]);
        return b
    }

    function Ra(a, b, c) {
        return c ? (c[0] = a[0] - b, c[1] = a[1] - b, c[2] = a[2] + b, c[3] = a[3] + b, c) : [a[0] - b, a[1] - b, a[2] + b, a[3] + b]
    }

    function Sa(a, b) {
        return b ? (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b) : a.slice()
    }

    function Ta(a, b, c) {
        b = b < a[0] ? a[0] - b : a[2] < b ? b - a[2] : 0;
        a = c < a[1] ? a[1] - c : a[3] < c ? c - a[3] : 0;
        return b * b + a * a
    }

    function Ua(a, b) {
        return Va(a, b[0], b[1])
    }

    function Wa(a, b) {
        return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
    }

    function Va(a, b, c) {
        return a[0] <= b && b <= a[2] && a[1] <= c && c <= a[3]
    }

    function Xa(a, b) {
        var c = a[1], d = a[2], e = a[3], f = b[0];
        b = b[1];
        var g = 0;
        f < a[0] ? g |= 16 : f > d && (g |= 4);
        b < c ? g |= 8 : b > e && (g |= 2);
        0 === g && (g = 1);
        return g
    }

    function Pa() {
        return [Infinity, Infinity, -Infinity, -Infinity]
    }

    function Ya(a, b, c, d, e) {
        return e ? (e[0] = a, e[1] = b, e[2] = c, e[3] = d, e) : [a, b, c, d]
    }

    function Za(a) {
        return Ya(Infinity, Infinity, -Infinity, -Infinity, a)
    }

    function $a(a, b) {
        var c = a[0];
        a = a[1];
        return Ya(c, a, c, a, b)
    }

    function ab(a, b, c, d, e) {
        e = Za(e);
        return bb(e, a, b, c, d)
    }

    function cb(a, b) {
        return a[0] == b[0] && a[2] == b[2] && a[1] == b[1] && a[3] == b[3]
    }

    function db(a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[2] > a[2] && (a[2] = b[2]);
        b[1] < a[1] && (a[1] = b[1]);
        b[3] > a[3] && (a[3] = b[3]);
        return a
    }

    function Qa(a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[0] > a[2] && (a[2] = b[0]);
        b[1] < a[1] && (a[1] = b[1]);
        b[1] > a[3] && (a[3] = b[1])
    }

    function bb(a, b, c, d, e) {
        for (; c < d; c += e) {
            var f = a, g = b[c], h = b[c + 1];
            f[0] = Math.min(f[0], g);
            f[1] = Math.min(f[1], h);
            f[2] = Math.max(f[2], g);
            f[3] = Math.max(f[3], h)
        }
        return a
    }

    function eb(a, b, c) {
        var d;
        return (d = b.call(c, fb(a))) || (d = b.call(c, gb(a))) || (d = b.call(c, hb(a))) ? d : (d = b.call(c, ib(a))) ? d : !1
    }

    function jb(a) {
        var b = 0;
        kb(a) || (b = lb(a) * mb(a));
        return b
    }

    function fb(a) {
        return [a[0], a[1]]
    }

    function gb(a) {
        return [a[2], a[1]]
    }

    function nb(a) {
        return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
    }

    function ob(a, b, c, d, e) {
        var f = b * d[0] / 2;
        d = b * d[1] / 2;
        b = Math.cos(c);
        var g = Math.sin(c);
        c = f * b;
        f *= g;
        b *= d;
        var h = d * g, l = a[0], m = a[1];
        a = l - c + h;
        d = l - c - h;
        g = l + c - h;
        c = l + c + h;
        h = m - f - b;
        l = m - f + b;
        var n = m + f + b;
        f = m + f - b;
        return Ya(Math.min(a, d, g, c), Math.min(h, l, n, f), Math.max(a, d, g, c), Math.max(h, l, n, f), e)
    }

    function mb(a) {
        return a[3] - a[1]
    }

    function pb(a, b, c) {
        c = c ? c : Pa();
        qb(a, b) && (c[0] = a[0] > b[0] ? a[0] : b[0], c[1] = a[1] > b[1] ? a[1] : b[1], c[2] = a[2] < b[2] ? a[2] : b[2], c[3] = a[3] < b[3] ? a[3] : b[3]);
        return c
    }

    function ib(a) {
        return [a[0], a[3]]
    }

    function hb(a) {
        return [a[2], a[3]]
    }

    function lb(a) {
        return a[2] - a[0]
    }

    function qb(a, b) {
        return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
    }

    function kb(a) {
        return a[2] < a[0] || a[3] < a[1]
    }

    function rb(a, b) {
        var c = (a[2] - a[0]) / 2 * (b - 1);
        b = (a[3] - a[1]) / 2 * (b - 1);
        a[0] -= c;
        a[2] += c;
        a[1] -= b;
        a[3] += b
    }

    function sb(a, b, c) {
        a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
        b(a, a, 2);
        var d = [a[0], a[2], a[4], a[6]], e = [a[1], a[3], a[5], a[7]];
        b = Math.min.apply(null, d);
        a = Math.min.apply(null, e);
        d = Math.max.apply(null, d);
        e = Math.max.apply(null, e);
        return Ya(b, a, d, e, c)
    };
    var tb = "function" === typeof Object.assign ? Object.assign : function (a, b) {
        if (!a || null === a)throw new TypeError("Cannot convert undefined or null to object");
        for (var c = Object(a), d = 1, e = arguments.length; d < e; ++d) {
            var f = arguments[d];
            if (void 0 !== f && null !== f)for (var g in f)f.hasOwnProperty(g) && (c[g] = f[g])
        }
        return c
    };

    function ub(a) {
        for (var b in a)delete a[b]
    }

    function vb(a) {
        var b = [], c;
        for (c in a)b.push(a[c]);
        return b
    }

    function wb(a) {
        for (var b in a)return !1;
        return !b
    };
    /*

     Latitude/longitude spherical geodesy formulae taken from
     http://www.movable-type.co.uk/scripts/latlong.html
     Licensed under CC-BY-3.0.
     */
    function xb(a) {
        this.radius = a
    }

    xb.prototype.a = function (a) {
        return yb(a, this.radius)
    };
    xb.prototype.b = function (a, b) {
        return zb(a, b, this.radius)
    };
    xb.prototype.offset = function (a, b, c) {
        var d = Ia(a[1]);
        b /= this.radius;
        var e = Math.asin(Math.sin(d) * Math.cos(b) + Math.cos(d) * Math.sin(b) * Math.cos(c));
        return [180 * (Ia(a[0]) + Math.atan2(Math.sin(c) * Math.sin(b) * Math.cos(d), Math.cos(b) - Math.sin(d) * Math.sin(e))) / Math.PI, 180 * e / Math.PI]
    };
    function Ab(a, b) {
        var c = b || {}, d = c.radius || 6371008.8;
        c = c.projection || "EPSG:3857";
        a = a.clone().gb(c, "EPSG:4326");
        var e = a.S();
        c = 0;
        var f;
        switch (e) {
            case "Point":
            case "MultiPoint":
                break;
            case "LineString":
            case "LinearRing":
                b = a.V();
                c = Bb(b, d);
                break;
            case "MultiLineString":
            case "Polygon":
                b = a.V();
                a = 0;
                for (e = b.length; a < e; ++a)c += Bb(b[a], d);
                break;
            case "MultiPolygon":
                b = a.V();
                a = 0;
                for (e = b.length; a < e; ++a) {
                    var g = b[a];
                    var h = 0;
                    for (f = g.length; h < f; ++h)c += Bb(g[h], d)
                }
                break;
            case "GeometryCollection":
                d = a.pd();
                a = 0;
                for (e = d.length; a <
                e; ++a)c += Ab(d[a], b);
                break;
            default:
                throw Error("Unsupported geometry type: " + e);
        }
        return c
    }

    function Bb(a, b) {
        for (var c = 0, d = 0, e = a.length; d < e - 1; ++d)c += zb(a[d], a[d + 1], b);
        return c
    }

    function zb(a, b, c) {
        var d = Ia(a[1]), e = Ia(b[1]), f = (e - d) / 2;
        a = Ia(b[0] - a[0]) / 2;
        d = Math.sin(f) * Math.sin(f) + Math.sin(a) * Math.sin(a) * Math.cos(d) * Math.cos(e);
        return 2 * c * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d))
    }

    function Db(a, b) {
        var c = b || {}, d = c.radius || 6371008.8;
        c = c.projection || "EPSG:3857";
        a = a.clone().gb(c, "EPSG:4326");
        var e = a.S();
        c = 0;
        var f;
        switch (e) {
            case "Point":
            case "MultiPoint":
            case "LineString":
            case "MultiLineString":
            case "LinearRing":
                break;
            case "Polygon":
                b = a.V();
                c = Math.abs(yb(b[0], d));
                a = 1;
                for (e = b.length; a < e; ++a)c -= Math.abs(yb(b[a], d));
                break;
            case "MultiPolygon":
                b = a.V();
                a = 0;
                for (e = b.length; a < e; ++a) {
                    var g = b[a];
                    c += Math.abs(yb(g[0], d));
                    var h = 1;
                    for (f = g.length; h < f; ++h)c -= Math.abs(yb(g[h], d))
                }
                break;
            case "GeometryCollection":
                d =
                    a.pd();
                a = 0;
                for (e = d.length; a < e; ++a)c += Db(d[a], b);
                break;
            default:
                throw Error("Unsupported geometry type: " + e);
        }
        return c
    }

    function yb(a, b) {
        for (var c = 0, d = a.length, e = a[d - 1][0], f = a[d - 1][1], g = 0; g < d; g++) {
            var h = a[g][0], l = a[g][1];
            c += Ia(h - e) * (2 + Math.sin(Ia(f)) + Math.sin(Ia(l)));
            e = h;
            f = l
        }
        return c * b * b / 2
    };
    var Eb = {};
    Eb.degrees = 12741994 * Math.PI / 360;
    Eb.ft = .3048;
    Eb.m = 1;
    Eb["us-ft"] = 1200 / 3937;
    var Fb = null;

    function Gb(a) {
        this.sb = a.code;
        this.a = a.units;
        this.i = void 0 !== a.extent ? a.extent : null;
        this.se = void 0 !== a.worldExtent ? a.worldExtent : null;
        this.b = void 0 !== a.axisOrientation ? a.axisOrientation : "enu";
        this.c = void 0 !== a.global ? a.global : !1;
        this.g = !(!this.c || !this.i);
        this.j = a.getPointResolution;
        this.f = null;
        this.l = a.metersPerUnit;
        var b = a.code, c = Fb || window.proj4;
        "function" == typeof c && (b = c.defs(b), void 0 !== b && (void 0 !== b.axis && void 0 === a.axisOrientation && (this.b = b.axis), void 0 === a.metersPerUnit && (this.l = b.to_meter),
        void 0 === a.units && (this.a = b.units)))
    }

    k = Gb.prototype;
    k.Uk = function () {
        return this.sb
    };
    k.G = function () {
        return this.i
    };
    k.fo = function () {
        return this.a
    };
    k.Qc = function () {
        return this.l || Eb[this.a]
    };
    k.Cl = function () {
        return this.se
    };
    k.nm = function () {
        return this.c
    };
    k.eq = function (a) {
        this.c = a;
        this.g = !(!a || !this.i)
    };
    k.Qi = function (a) {
        this.i = a;
        this.g = !(!this.c || !a)
    };
    k.Lj = function (a) {
        this.se = a
    };
    k.cq = function (a) {
        this.j = a
    };
    function Hb(a) {
        Gb.call(this, {
            code: a,
            units: "m",
            extent: Ib,
            global: !0,
            worldExtent: Jb,
            getPointResolution: function (a, c) {
                return a / Ea(c[1] / 6378137)
            }
        })
    }

    v(Hb, Gb);
    var Kb = 6378137 * Math.PI, Ib = [-Kb, -Kb, Kb, Kb], Jb = [-180, -85, 180, 85],
        Lb = [new Hb("EPSG:3857"), new Hb("EPSG:102100"), new Hb("EPSG:102113"), new Hb("EPSG:900913"), new Hb("urn:ogc:def:crs:EPSG:6.18:3:3857"), new Hb("urn:ogc:def:crs:EPSG::3857"), new Hb("http://www.opengis.net/gml/srs/epsg.xml#3857")];

    function Mb(a, b, c) {
        var d = a.length;
        c = 1 < c ? c : 2;
        void 0 === b && (2 < c ? b = a.slice() : b = Array(d));
        for (var e = 0; e < d; e += c) {
            b[e] = Kb * a[e] / 180;
            var f = 6378137 * Math.log(Math.tan(Math.PI * (a[e + 1] + 90) / 360));
            f > Kb ? f = Kb : f < -Kb && (f = -Kb);
            b[e + 1] = f
        }
        return b
    }

    function Nb(a, b, c) {
        var d = a.length;
        c = 1 < c ? c : 2;
        void 0 === b && (2 < c ? b = a.slice() : b = Array(d));
        for (var e = 0; e < d; e += c)b[e] = 180 * a[e] / Kb, b[e + 1] = 360 * Math.atan(Math.exp(a[e + 1] / 6378137)) / Math.PI - 90;
        return b
    };
    function Ob(a, b) {
        Gb.call(this, {
            code: a,
            units: "degrees",
            extent: Pb,
            axisOrientation: b,
            global: !0,
            metersPerUnit: Qb,
            worldExtent: Pb
        })
    }

    v(Ob, Gb);
    var Pb = [-180, -90, 180, 90], Qb = 6378137 * Math.PI / 180,
        Rb = [new Ob("CRS:84"), new Ob("EPSG:4326", "neu"), new Ob("urn:ogc:def:crs:EPSG::4326", "neu"), new Ob("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new Ob("urn:ogc:def:crs:OGC:1.3:CRS84"), new Ob("urn:ogc:def:crs:OGC:2:84"), new Ob("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new Ob("urn:x-ogc:def:crs:EPSG:4326", "neu")];
    var Sb = {};
    var Tb = {};

    function Ub(a, b, c) {
        a = a.sb;
        b = b.sb;
        a in Tb || (Tb[a] = {});
        Tb[a][b] = c
    }

    function Vb(a, b) {
        var c;
        a in Tb && b in Tb[a] && (c = Tb[a][b]);
        return c
    };
    var Wb = new xb(6371008.8);

    function Yb(a, b, c, d) {
        a = Zb(a);
        var e = a.j;
        e ? b = e(b, c) : "degrees" == a.a && !d || "degrees" == d || (e = $b(a, Zb("EPSG:4326")), b = [c[0] - b / 2, c[1], c[0] + b / 2, c[1], c[0], c[1] - b / 2, c[0], c[1] + b / 2], b = e(b, b, 2), b = (Wb.b(b.slice(0, 2), b.slice(2, 4)) + Wb.b(b.slice(4, 6), b.slice(6, 8))) / 2, a = d ? Eb[d] : a.Qc(), void 0 !== a && (b /= a));
        return b
    }

    function ac(a) {
        a.forEach(bc);
        a.forEach(function (b) {
            a.forEach(function (a) {
                b !== a && Ub(b, a, cc)
            })
        })
    }

    function dc() {
        Rb.forEach(function (a) {
            Lb.forEach(function (b) {
                Ub(a, b, Mb);
                Ub(b, a, Nb)
            })
        })
    }

    function bc(a) {
        Sb[a.sb] = a;
        Ub(a, a, cc)
    }

    function ec(a) {
        return a ? "string" === typeof a ? Zb(a) : a : Zb("EPSG:3857")
    }

    function fc(a, b, c, d) {
        a = Zb(a);
        b = Zb(b);
        Ub(a, b, gc(c));
        Ub(b, a, gc(d))
    }

    function gc(a) {
        return function (b, c, d) {
            var e = b.length;
            d = void 0 !== d ? d : 2;
            c = void 0 !== c ? c : Array(e);
            var f;
            for (f = 0; f < e; f += d) {
                var g = a([b[f], b[f + 1]]);
                c[f] = g[0];
                c[f + 1] = g[1];
                for (g = d - 1; 2 <= g; --g)c[f + g] = b[f + g]
            }
            return c
        }
    }

    function Zb(a) {
        var b = null;
        if (a instanceof Gb) b = a; else if ("string" === typeof a && (b = Sb[a] || null, !b)) {
            var c = Fb || window.proj4;
            "function" == typeof c && void 0 !== c.defs(a) && (b = new Gb({code: a}), bc(b))
        }
        return b
    }

    function hc(a, b) {
        if (a === b)return !0;
        var c = a.a === b.a;
        return a.sb === b.sb ? c : $b(a, b) === cc && c
    }

    function ic(a, b) {
        a = Zb(a);
        b = Zb(b);
        return $b(a, b)
    }

    function $b(a, b) {
        var c = a.sb, d = b.sb, e = Vb(c, d);
        if (!e) {
            var f = Fb || window.proj4;
            if ("function" == typeof f) {
                var g = f.defs(c), h = f.defs(d);
                void 0 !== g && void 0 !== h && (g === h ? ac([b, a]) : (e = f(d, c), fc(b, a, e.forward, e.inverse)), e = Vb(c, d))
            }
        }
        e || (e = jc);
        return e
    }

    function jc(a, b) {
        if (void 0 !== b && a !== b) {
            for (var c = 0, d = a.length; c < d; ++c)b[c] = a[c];
            a = b
        }
        return a
    }

    function cc(a, b) {
        if (void 0 !== b) {
            for (var c = 0, d = a.length; c < d; ++c)b[c] = a[c];
            a = b
        } else a = a.slice();
        return a
    }

    function kc(a, b, c) {
        return ic(b, c)(a, void 0, a.length)
    }

    function lc(a, b, c) {
        b = ic(b, c);
        return sb(a, b)
    }

    function mc() {
        ac(Lb);
        ac(Rb);
        dc()
    }

    mc();
    function oc(a, b, c, d) {
        return void 0 !== d ? (d[0] = a, d[1] = b, d[2] = c, d) : [a, b, c]
    }

    function pc(a) {
        var b = a[0], c = Array(b), d = 1 << b - 1, e;
        for (e = 0; e < b; ++e) {
            var f = 48;
            a[1] & d && (f += 1);
            a[2] & d && (f += 2);
            c[e] = String.fromCharCode(f);
            d >>= 1
        }
        return c.join("")
    };
    function qc(a) {
        this.minZoom = void 0 !== a.minZoom ? a.minZoom : 0;
        this.b = a.resolutions;
        wa(qa(this.b, function (a, b) {
            return b - a
        }), 17);
        if (!a.origins)for (var b = 0,
                                c = this.b.length - 1; b < c; ++b)if (!d)var d = this.b[b] / this.b[b + 1]; else if (this.b[b] / this.b[b + 1] !== d) {
            d = void 0;
            break
        }
        this.l = d;
        this.maxZoom = this.b.length - 1;
        this.g = void 0 !== a.origin ? a.origin : null;
        this.c = null;
        void 0 !== a.origins && (this.c = a.origins, wa(this.c.length == this.b.length, 20));
        d = a.extent;
        void 0 === d || this.g || this.c || (this.g = ib(d));
        wa(!this.g && this.c || this.g &&
            !this.c, 18);
        this.i = null;
        void 0 !== a.tileSizes && (this.i = a.tileSizes, wa(this.i.length == this.b.length, 19));
        this.j = void 0 !== a.tileSize ? a.tileSize : this.i ? null : 256;
        wa(!this.j && this.i || this.j && !this.i, 22);
        this.s = void 0 !== d ? d : null;
        this.a = null;
        this.f = [0, 0];
        void 0 !== a.sizes ? this.a = a.sizes.map(function (a) {
            return new xa(Math.min(0, a[0]), Math.max(a[0] - 1, -1), Math.min(0, a[1]), Math.max(a[1] - 1, -1))
        }, this) : d && rc(this, d)
    }

    var sc = [0, 0, 0];
    k = qc.prototype;
    k.Wf = function (a, b, c) {
        a = tc(this, a, b);
        for (var d = a.ba, e = a.da; d <= e; ++d)for (var f = a.ea, g = a.ga; f <= g; ++f)c([b, d, f])
    };
    function uc(a, b, c, d, e) {
        var f = null, g = b[0] - 1;
        if (2 === a.l) {
            var h = b[1];
            var l = b[2]
        } else f = a.Ja(b, e);
        for (; g >= a.minZoom;) {
            2 === a.l ? (h = Math.floor(h / 2), l = Math.floor(l / 2), b = ya(h, h, l, l, d)) : b = tc(a, f, g, d);
            if (c.call(null, g, b))return !0;
            --g
        }
        return !1
    }

    k.G = function () {
        return this.s
    };
    k.hj = function () {
        return this.maxZoom
    };
    k.ij = function () {
        return this.minZoom
    };
    k.Cc = function (a) {
        return this.g ? this.g : this.c[a]
    };
    k.Qa = function (a) {
        return this.b[a]
    };
    k.jj = function () {
        return this.b
    };
    function vc(a, b, c, d) {
        if (b[0] < a.maxZoom) {
            if (2 === a.l)return a = 2 * b[1], b = 2 * b[2], ya(a, a + 1, b, b + 1, c);
            d = a.Ja(b, d);
            return tc(a, d, b[0] + 1, c)
        }
        return null
    }

    function wc(a, b, c) {
        var d = a.Cc(b), e = a.Qa(b);
        a = Na(a.eb(b), a.f);
        return Ya(d[0] + c.ba * a[0] * e, d[1] + c.ea * a[1] * e, d[0] + (c.da + 1) * a[0] * e, d[1] + (c.ga + 1) * a[1] * e, void 0)
    }

    function tc(a, b, c, d) {
        xc(a, b[0], b[1], c, !1, sc);
        var e = sc[1], f = sc[2];
        xc(a, b[2], b[3], c, !0, sc);
        return ya(e, sc[1], f, sc[2], d)
    }

    function yc(a, b) {
        var c = a.Cc(b[0]), d = a.Qa(b[0]);
        a = Na(a.eb(b[0]), a.f);
        return [c[0] + (b[1] + .5) * a[0] * d, c[1] + (b[2] + .5) * a[1] * d]
    }

    k.Ja = function (a, b) {
        var c = this.Cc(a[0]), d = this.Qa(a[0]), e = Na(this.eb(a[0]), this.f), f = c[0] + a[1] * e[0] * d;
        a = c[1] + a[2] * e[1] * d;
        return Ya(f, a, f + e[0] * d, a + e[1] * d, b)
    };
    k.Ne = function (a, b, c) {
        var d = a[0], e = a[1];
        a = this.wc(b);
        var f = b / this.Qa(a), g = this.Cc(a), h = Na(this.eb(a), this.f);
        d = f * Math.floor((d - g[0]) / b + 0) / h[0];
        b = f * Math.floor((e - g[1]) / b + .5) / h[1];
        d = Math.floor(d);
        b = Math.floor(b);
        return oc(a, d, b, c)
    };
    function xc(a, b, c, d, e, f) {
        var g = a.Cc(d), h = a.Qa(d);
        a = Na(a.eb(d), a.f);
        b = Math.floor((b - g[0]) / h + (e ? .5 : 0)) / a[0];
        c = Math.floor((c - g[1]) / h + (e ? 0 : .5)) / a[1];
        e ? (b = Math.ceil(b) - 1, c = Math.ceil(c) - 1) : (b = Math.floor(b), c = Math.floor(c));
        return oc(d, b, c, f)
    }

    k.lg = function (a, b, c) {
        return xc(this, a[0], a[1], b, !1, c)
    };
    k.eb = function (a) {
        return this.j ? this.j : this.i[a]
    };
    k.wc = function (a, b) {
        return Da(ia(this.b, a, b || 0), this.minZoom, this.maxZoom)
    };
    function rc(a, b) {
        for (var c = a.b.length, d = Array(c), e = a.minZoom; e < c; ++e)d[e] = tc(a, b, e);
        a.a = d
    };
    function zc(a) {
        var b = a.f;
        b || (b = Ac(a), a.f = b);
        return b
    }

    function Bc(a) {
        var b = {};
        tb(b, a ? a : {});
        void 0 === b.extent && (b.extent = Zb("EPSG:3857").G());
        b.resolutions = Cc(b.extent, b.maxZoom, b.tileSize);
        delete b.maxZoom;
        return new qc(b)
    }

    function Cc(a, b, c) {
        b = void 0 !== b ? b : 42;
        var d = mb(a);
        a = lb(a);
        c = Na(void 0 !== c ? c : 256);
        c = Math.max(a / c[0], d / c[1]);
        b += 1;
        d = Array(b);
        for (a = 0; a < b; ++a)d[a] = c / Math.pow(2, a);
        return d
    }

    function Ac(a, b, c) {
        a = Dc(a);
        b = Cc(a, b, c);
        return new qc({extent: a, origin: ib(a), resolutions: b, tileSize: c})
    }

    function Dc(a) {
        a = Zb(a);
        var b = a.G();
        b || (a = 180 * Eb.degrees / a.Qc(), b = Ya(-a, -a, a, a));
        return b
    };
    function Fc(a) {
        this.b = a.html;
        this.a = a.tileRanges ? a.tileRanges : null
    }

    Fc.prototype.g = function () {
        return this.b
    };
    function Gc(a) {
        function b(b) {
            var c = a.listener, e = a.Ah || a.target;
            a.Ch && Hc(a);
            return c.call(e, b)
        }

        return a.Bh = b
    }

    function Ic(a, b, c, d) {
        for (var e, f = 0,
                 g = a.length; f < g; ++f)if (e = a[f], e.listener === b && e.Ah === c)return d && (e.deleteIndex = f), e
    }

    function Jc(a, b) {
        return (a = a.kb) ? a[b] : void 0
    }

    function Kc(a) {
        var b = a.kb;
        b || (b = a.kb = {});
        return b
    }

    function Lc(a, b) {
        var c = Jc(a, b);
        if (c) {
            for (var d = 0, e = c.length; d < e; ++d)a.removeEventListener(b, c[d].Bh), ub(c[d]);
            c.length = 0;
            if (c = a.kb) delete c[b], 0 === Object.keys(c).length && delete a.kb
        }
    }

    function z(a, b, c, d, e) {
        var f = Kc(a), g = f[b];
        g || (g = f[b] = []);
        (f = Ic(g, c, d, !1)) ? e || (f.Ch = !1) : (f = {
            Ah: d,
            Ch: !!e,
            listener: c,
            target: a,
            type: b
        }, a.addEventListener(b, Gc(f)), g.push(f));
        return f
    }

    function Mc(a, b, c, d) {
        return z(a, b, c, d, !0)
    }

    function Nc(a, b, c, d) {
        (a = Jc(a, b)) && (c = Ic(a, c, d, !0)) && Hc(c)
    }

    function Hc(a) {
        if (a && a.target) {
            a.target.removeEventListener(a.type, a.Bh);
            var b = Jc(a.target, a.type);
            if (b) {
                var c = "deleteIndex" in a ? a.deleteIndex : b.indexOf(a);
                -1 !== c && b.splice(c, 1);
                0 === b.length && Lc(a.target, a.type)
            }
            ub(a)
        }
    }

    function Oc(a) {
        var b = Kc(a), c;
        for (c in b)Lc(a, c)
    };
    function Pc() {
    }

    Pc.prototype.nc = !1;
    function Qc(a) {
        a.nc || (a.nc = !0, a.la())
    }

    Pc.prototype.la = sa;
    function Rc(a) {
        this.type = a;
        this.target = null
    }

    Rc.prototype.preventDefault = Rc.prototype.stopPropagation = function () {
        this.zp = !0
    };
    function Sc(a) {
        a.stopPropagation()
    };
    function Tc() {
        this.Ua = {};
        this.ra = {};
        this.qa = {}
    }

    v(Tc, Pc);
    Tc.prototype.addEventListener = function (a, b) {
        var c = this.qa[a];
        c || (c = this.qa[a] = []);
        -1 === c.indexOf(b) && c.push(b)
    };
    Tc.prototype.b = function (a) {
        var b = "string" === typeof a ? new Rc(a) : a;
        a = b.type;
        b.target = this;
        var c = this.qa[a];
        if (c) {
            a in this.ra || (this.ra[a] = 0, this.Ua[a] = 0);
            ++this.ra[a];
            for (var d = 0, e = c.length; d < e; ++d)if (!1 === c[d].call(this, b) || b.zp) {
                var f = !1;
                break
            }
            --this.ra[a];
            if (0 === this.ra[a]) {
                b = this.Ua[a];
                for (delete this.Ua[a]; b--;)this.removeEventListener(a, sa);
                delete this.ra[a]
            }
            return f
        }
    };
    Tc.prototype.la = function () {
        Oc(this)
    };
    function Uc(a, b) {
        return b ? b in a.qa : 0 < Object.keys(a.qa).length
    }

    Tc.prototype.removeEventListener = function (a, b) {
        var c = this.qa[a];
        c && (b = c.indexOf(b), a in this.Ua ? (c[b] = sa, ++this.Ua[a]) : (c.splice(b, 1), 0 === c.length && delete this.qa[a]))
    };
    function Vc() {
        Tc.call(this);
        this.g = 0
    }

    v(Vc, Tc);
    k = Vc.prototype;
    k.u = function () {
        ++this.g;
        this.b("change")
    };
    k.L = function () {
        return this.g
    };
    k.J = function (a, b, c) {
        if (Array.isArray(a)) {
            for (var d = a.length, e = Array(d), f = 0; f < d; ++f)e[f] = z(this, a[f], b, c);
            return e
        }
        return z(this, a, b, c)
    };
    k.once = function (a, b, c) {
        if (Array.isArray(a)) {
            for (var d = a.length, e = Array(d), f = 0; f < d; ++f)e[f] = Mc(this, a[f], b, c);
            return e
        }
        return Mc(this, a, b, c)
    };
    k.K = function (a, b, c) {
        if (Array.isArray(a))for (var d = 0, e = a.length; d < e; ++d)Nc(this, a[d], b, c); else Nc(this, a, b, c)
    };
    function Wc(a) {
        Vc.call(this);
        w(this);
        this.O = {};
        void 0 !== a && this.H(a)
    }

    v(Wc, Vc);
    var Xc = {};

    function Yc(a) {
        return Xc.hasOwnProperty(a) ? Xc[a] : Xc[a] = "change:" + a
    }

    k = Wc.prototype;
    k.get = function (a) {
        var b;
        this.O.hasOwnProperty(a) && (b = this.O[a]);
        return b
    };
    k.P = function () {
        return Object.keys(this.O)
    };
    k.M = function () {
        return tb({}, this.O)
    };
    function Zc(a, b, c) {
        var d = Yc(b);
        a.b(new $c(d, b, c));
        a.b(new $c("propertychange", b, c))
    }

    k.set = function (a, b, c) {
        c ? this.O[a] = b : (c = this.O[a], this.O[a] = b, c !== b && Zc(this, a, c))
    };
    k.H = function (a, b) {
        for (var c in a)this.set(c, a[c], b)
    };
    k.R = function (a, b) {
        if (a in this.O) {
            var c = this.O[a];
            delete this.O[a];
            b || Zc(this, a, c)
        }
    };
    function $c(a, b, c) {
        Rc.call(this, a);
        this.key = b;
        this.oldValue = c
    }

    v($c, Rc);
    function ad(a, b) {
        Wc.call(this);
        this.c = !!(b || {}).unique;
        this.a = a ? a : [];
        if (this.c)for (a = 0, b = this.a.length; a < b; ++a)bd(this, this.a[a], a);
        cd(this)
    }

    v(ad, Wc);
    k = ad.prototype;
    k.clear = function () {
        for (; 0 < this.fc();)this.pop()
    };
    k.qg = function (a) {
        var b;
        var c = 0;
        for (b = a.length; c < b; ++c)this.push(a[c]);
        return this
    };
    k.forEach = function (a, b) {
        a = b ? a.bind(b) : a;
        b = this.a;
        for (var c = 0, d = b.length; c < d; ++c)a(b[c], c, b)
    };
    k.Em = function () {
        return this.a
    };
    k.item = function (a) {
        return this.a[a]
    };
    k.fc = function () {
        return this.get(dd)
    };
    k.Te = function (a, b) {
        this.c && bd(this, b);
        this.a.splice(a, 0, b);
        cd(this);
        this.b(new ed("add", b))
    };
    k.pop = function () {
        return this.Vg(this.fc() - 1)
    };
    k.push = function (a) {
        this.c && bd(this, a);
        var b = this.fc();
        this.Te(b, a);
        return this.fc()
    };
    k.remove = function (a) {
        var b = this.a, c;
        var d = 0;
        for (c = b.length; d < c; ++d)if (b[d] === a)return this.Vg(d)
    };
    k.Vg = function (a) {
        var b = this.a[a];
        this.a.splice(a, 1);
        cd(this);
        this.b(new ed("remove", b));
        return b
    };
    k.Zp = function (a, b) {
        var c = this.fc();
        if (a < c) this.c && bd(this, b, a), c = this.a[a], this.a[a] = b, this.b(new ed("remove", c)), this.b(new ed("add", b)); else {
            for (; c < a; ++c)this.Te(c, void 0);
            this.Te(a, b)
        }
    };
    function cd(a) {
        a.set(dd, a.a.length)
    }

    function bd(a, b, c) {
        for (var d = 0, e = a.a.length; d < e; ++d)if (a.a[d] === b && d !== c)throw new ua(58);
    }

    var dd = "length";

    function ed(a, b) {
        Rc.call(this, a);
        this.element = b
    }

    v(ed, Rc);
    function fd(a, b, c) {
        Rc.call(this, a);
        this.map = b;
        this.frameState = void 0 !== c ? c : null
    }

    v(fd, Rc);
    function gd(a, b, c, d, e) {
        fd.call(this, a, b, e);
        this.originalEvent = c;
        this.pixel = b.od(c);
        this.coordinate = b.Na(this.pixel);
        this.dragging = void 0 !== d ? d : !1
    }

    v(gd, fd);
    gd.prototype.preventDefault = function () {
        fd.prototype.preventDefault.call(this);
        this.originalEvent.preventDefault()
    };
    gd.prototype.stopPropagation = function () {
        fd.prototype.stopPropagation.call(this);
        this.originalEvent.stopPropagation()
    };
    var hd = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];

    function id(a, b) {
        var c, d, e = hd.length;
        for (d = 0; d < e; ++d)try {
            if (c = a.getContext(hd[d], b))return c
        } catch (f) {
        }
        return null
    };
    var jd, kd = "undefined" !== typeof navigator ? navigator.userAgent.toLowerCase() : "",
        md = -1 !== kd.indexOf("firefox"), nd = -1 !== kd.indexOf("safari") && -1 == kd.indexOf("chrom"),
        od = -1 !== kd.indexOf("webkit") && -1 == kd.indexOf("edge"), pd = -1 !== kd.indexOf("macintosh"),
        qd = window.devicePixelRatio || 1, rd = !1, sd = function () {
            if (!("HTMLCanvasElement" in window))return !1;
            try {
                var a = document.createElement("CANVAS").getContext("2d");
                return a ? (void 0 !== a.setLineDash && (rd = !0), !0) : !1
            } catch (b) {
                return !1
            }
        }(), td = "DeviceOrientationEvent" in
            window, ud = "geolocation" in navigator, vd = "ontouchstart" in window, wd = "PointerEvent" in window,
        yd = !!navigator.msPointerEnabled, zd = !1, Ad, Bd = [];
    if ("WebGLRenderingContext" in window)try {
        var Cd = id(document.createElement("CANVAS"), {failIfMajorPerformanceCaveat: !0});
        Cd && (zd = !0, Ad = Cd.getParameter(Cd.MAX_TEXTURE_SIZE), Bd = Cd.getSupportedExtensions())
    } catch (a) {
    }
    jd = zd;
    da = Bd;
    ba = Ad;
    var Dd = {
        Mq: "singleclick",
        Bq: "click",
        Cq: "dblclick",
        Fq: "pointerdrag",
        Iq: "pointermove",
        Eq: "pointerdown",
        Lq: "pointerup",
        Kq: "pointerover",
        Jq: "pointerout",
        Gq: "pointerenter",
        Hq: "pointerleave",
        Dq: "pointercancel"
    };

    function Ed(a, b, c, d, e) {
        gd.call(this, a, b, c.b, d, e);
        this.b = c
    }

    v(Ed, gd);
    function Fd(a, b) {
        this.b = a;
        this.i = b
    };
    function Gd(a) {
        Fd.call(this, a, {
            mousedown: this.qm,
            mousemove: this.rm,
            mouseup: this.um,
            mouseover: this.tm,
            mouseout: this.sm
        });
        this.a = a.g;
        this.g = []
    }

    v(Gd, Fd);
    function Hd(a, b) {
        a = a.g;
        var c = b.clientX;
        b = b.clientY;
        for (var d = 0, e = a.length, f; d < e && (f = a[d]); d++) {
            var g = Math.abs(b - f[1]);
            if (25 >= Math.abs(c - f[0]) && 25 >= g)return !0
        }
        return !1
    }

    function Id(a) {
        var b = Jd(a, a), c = b.preventDefault;
        b.preventDefault = function () {
            a.preventDefault();
            c()
        };
        b.pointerId = 1;
        b.isPrimary = !0;
        b.pointerType = "mouse";
        return b
    }

    k = Gd.prototype;
    k.qm = function (a) {
        if (!Hd(this, a)) {
            (1).toString() in this.a && this.cancel(a);
            var b = Id(a);
            this.a[(1).toString()] = a;
            Kd(this.b, "pointerdown", b, a)
        }
    };
    k.rm = function (a) {
        if (!Hd(this, a)) {
            var b = Id(a);
            Kd(this.b, "pointermove", b, a)
        }
    };
    k.um = function (a) {
        if (!Hd(this, a)) {
            var b = this.a[(1).toString()];
            b && b.button === a.button && (b = Id(a), Kd(this.b, "pointerup", b, a), delete this.a[(1).toString()])
        }
    };
    k.tm = function (a) {
        if (!Hd(this, a)) {
            var b = Id(a);
            Ld(this.b, b, a)
        }
    };
    k.sm = function (a) {
        if (!Hd(this, a)) {
            var b = Id(a);
            Md(this.b, b, a)
        }
    };
    k.cancel = function (a) {
        var b = Id(a);
        this.b.cancel(b, a);
        delete this.a[(1).toString()]
    };
    function Nd(a) {
        Fd.call(this, a, {
            MSPointerDown: this.zm,
            MSPointerMove: this.Am,
            MSPointerUp: this.Dm,
            MSPointerOut: this.Bm,
            MSPointerOver: this.Cm,
            MSPointerCancel: this.ym,
            MSGotPointerCapture: this.wm,
            MSLostPointerCapture: this.xm
        });
        this.a = a.g;
        this.g = ["", "unavailable", "touch", "pen", "mouse"]
    }

    v(Nd, Fd);
    function Od(a, b) {
        var c = b;
        "number" === typeof b.pointerType && (c = Jd(b, b), c.pointerType = a.g[b.pointerType]);
        return c
    }

    k = Nd.prototype;
    k.zm = function (a) {
        this.a[a.pointerId.toString()] = a;
        var b = Od(this, a);
        Kd(this.b, "pointerdown", b, a)
    };
    k.Am = function (a) {
        var b = Od(this, a);
        Kd(this.b, "pointermove", b, a)
    };
    k.Dm = function (a) {
        var b = Od(this, a);
        Kd(this.b, "pointerup", b, a);
        delete this.a[a.pointerId.toString()]
    };
    k.Bm = function (a) {
        var b = Od(this, a);
        Md(this.b, b, a)
    };
    k.Cm = function (a) {
        var b = Od(this, a);
        Ld(this.b, b, a)
    };
    k.ym = function (a) {
        var b = Od(this, a);
        this.b.cancel(b, a);
        delete this.a[a.pointerId.toString()]
    };
    k.xm = function (a) {
        this.b.b(new Pd("lostpointercapture", a, a))
    };
    k.wm = function (a) {
        this.b.b(new Pd("gotpointercapture", a, a))
    };
    function Qd(a) {
        Fd.call(this, a, {
            pointerdown: this.rp,
            pointermove: this.sp,
            pointerup: this.vp,
            pointerout: this.tp,
            pointerover: this.up,
            pointercancel: this.qp,
            gotpointercapture: this.Dl,
            lostpointercapture: this.om
        })
    }

    v(Qd, Fd);
    k = Qd.prototype;
    k.rp = function (a) {
        Rd(this.b, a)
    };
    k.sp = function (a) {
        Rd(this.b, a)
    };
    k.vp = function (a) {
        Rd(this.b, a)
    };
    k.tp = function (a) {
        Rd(this.b, a)
    };
    k.up = function (a) {
        Rd(this.b, a)
    };
    k.qp = function (a) {
        Rd(this.b, a)
    };
    k.om = function (a) {
        Rd(this.b, a)
    };
    k.Dl = function (a) {
        Rd(this.b, a)
    };
    function Pd(a, b, c) {
        Rc.call(this, a);
        this.b = b;
        a = c ? c : {};
        this.buttons = Sd(a);
        this.pressure = Td(a, this.buttons);
        this.bubbles = "bubbles" in a ? a.bubbles : !1;
        this.cancelable = "cancelable" in a ? a.cancelable : !1;
        this.view = "view" in a ? a.view : null;
        this.detail = "detail" in a ? a.detail : null;
        this.screenX = "screenX" in a ? a.screenX : 0;
        this.screenY = "screenY" in a ? a.screenY : 0;
        this.clientX = "clientX" in a ? a.clientX : 0;
        this.clientY = "clientY" in a ? a.clientY : 0;
        this.ctrlKey = "ctrlKey" in a ? a.ctrlKey : !1;
        this.altKey = "altKey" in a ? a.altKey : !1;
        this.shiftKey =
            "shiftKey" in a ? a.shiftKey : !1;
        this.metaKey = "metaKey" in a ? a.metaKey : !1;
        this.button = "button" in a ? a.button : 0;
        this.relatedTarget = "relatedTarget" in a ? a.relatedTarget : null;
        this.pointerId = "pointerId" in a ? a.pointerId : 0;
        this.width = "width" in a ? a.width : 0;
        this.height = "height" in a ? a.height : 0;
        this.tiltX = "tiltX" in a ? a.tiltX : 0;
        this.tiltY = "tiltY" in a ? a.tiltY : 0;
        this.pointerType = "pointerType" in a ? a.pointerType : "";
        this.isPrimary = "isPrimary" in a ? a.isPrimary : !1;
        b.preventDefault && (this.preventDefault = function () {
            b.preventDefault()
        })
    }

    v(Pd, Rc);
    function Sd(a) {
        if (a.buttons || Ud) a = a.buttons; else switch (a.which) {
            case 1:
                a = 1;
                break;
            case 2:
                a = 4;
                break;
            case 3:
                a = 2;
                break;
            default:
                a = 0
        }
        return a
    }

    function Td(a, b) {
        var c = 0;
        a.pressure ? c = a.pressure : c = b ? .5 : 0;
        return c
    }

    var Ud = !1;
    try {
        Ud = 1 === (new MouseEvent("click", {buttons: 1})).buttons
    } catch (a) {
    }
    ;
    function Vd(a, b) {
        Fd.call(this, a, {touchstart: this.vq, touchmove: this.uq, touchend: this.tq, touchcancel: this.sq});
        this.a = a.g;
        this.j = b;
        this.g = void 0;
        this.f = 0;
        this.c = void 0
    }

    v(Vd, Fd);
    k = Vd.prototype;
    k.xj = function () {
        this.f = 0;
        this.c = void 0
    };
    function Wd(a, b, c) {
        b = Jd(b, c);
        b.pointerId = c.identifier + 2;
        b.bubbles = !0;
        b.cancelable = !0;
        b.detail = a.f;
        b.button = 0;
        b.buttons = 1;
        b.width = c.webkitRadiusX || c.radiusX || 0;
        b.height = c.webkitRadiusY || c.radiusY || 0;
        b.pressure = c.webkitForce || c.force || .5;
        b.isPrimary = a.g === c.identifier;
        b.pointerType = "touch";
        b.clientX = c.clientX;
        b.clientY = c.clientY;
        b.screenX = c.screenX;
        b.screenY = c.screenY;
        return b
    }

    function Xd(a, b, c) {
        function d() {
            b.preventDefault()
        }

        var e = Array.prototype.slice.call(b.changedTouches), f = e.length, g;
        for (g = 0; g < f; ++g) {
            var h = Wd(a, b, e[g]);
            h.preventDefault = d;
            c.call(a, b, h)
        }
    }

    k.vq = function (a) {
        var b = a.touches, c = Object.keys(this.a), d = c.length;
        if (d >= b.length) {
            var e = [], f;
            for (f = 0; f < d; ++f) {
                var g = c[f];
                var h = this.a[g];
                var l;
                if (!(l = 1 == g))a:{
                    for (var m = b.length, n = 0; n < m; n++)if (l = b[n], l.identifier === g - 2) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                l || e.push(h.out)
            }
            for (f = 0; f < e.length; ++f)this.Pf(a, e[f])
        }
        b = a.changedTouches[0];
        c = Object.keys(this.a).length;
        if (0 === c || 1 === c && (1).toString() in this.a) this.g = b.identifier, void 0 !== this.c && clearTimeout(this.c);
        Yd(this, a);
        this.f++;
        Xd(this, a, this.mp)
    };
    k.mp = function (a, b) {
        this.a[b.pointerId] = {target: b.target, out: b, kj: b.target};
        var c = this.b;
        b.bubbles = !0;
        Kd(c, "pointerover", b, a);
        c = this.b;
        b.bubbles = !1;
        Kd(c, "pointerenter", b, a);
        Kd(this.b, "pointerdown", b, a)
    };
    k.uq = function (a) {
        a.preventDefault();
        Xd(this, a, this.vm)
    };
    k.vm = function (a, b) {
        var c = this.a[b.pointerId];
        if (c) {
            var d = c.out, e = c.kj;
            Kd(this.b, "pointermove", b, a);
            d && e !== b.target && (d.relatedTarget = b.target, b.relatedTarget = e, d.target = e, b.target ? (Md(this.b, d, a), Ld(this.b, b, a)) : (b.target = e, b.relatedTarget = null, this.Pf(a, b)));
            c.out = b;
            c.kj = b.target
        }
    };
    k.tq = function (a) {
        Yd(this, a);
        Xd(this, a, this.wq)
    };
    k.wq = function (a, b) {
        Kd(this.b, "pointerup", b, a);
        this.b.out(b, a);
        Zd(this.b, b, a);
        delete this.a[b.pointerId];
        b.isPrimary && (this.g = void 0, this.c = setTimeout(this.xj.bind(this), 200))
    };
    k.sq = function (a) {
        Xd(this, a, this.Pf)
    };
    k.Pf = function (a, b) {
        this.b.cancel(b, a);
        this.b.out(b, a);
        Zd(this.b, b, a);
        delete this.a[b.pointerId];
        b.isPrimary && (this.g = void 0, this.c = setTimeout(this.xj.bind(this), 200))
    };
    function Yd(a, b) {
        var c = a.j.g;
        b = b.changedTouches[0];
        if (a.g === b.identifier) {
            var d = [b.clientX, b.clientY];
            c.push(d);
            setTimeout(function () {
                var a = c.indexOf(d);
                -1 < a && c.splice(a, 1)
            }, 2500)
        }
    };
    function $d(a) {
        Tc.call(this);
        this.f = a;
        this.g = {};
        this.i = {};
        this.a = [];
        wd ? ae(this, new Qd(this)) : yd ? ae(this, new Nd(this)) : (a = new Gd(this), ae(this, a), vd && ae(this, new Vd(this, a)));
        a = this.a.length;
        for (var b, c = 0; c < a; c++)b = this.a[c], be(this, Object.keys(b.i))
    }

    v($d, Tc);
    function ae(a, b) {
        var c = Object.keys(b.i);
        c && (c.forEach(function (a) {
            var c = b.i[a];
            c && (this.i[a] = c.bind(b))
        }, a), a.a.push(b))
    }

    $d.prototype.c = function (a) {
        var b = this.i[a.type];
        b && b(a)
    };
    function be(a, b) {
        b.forEach(function (a) {
            z(this.f, a, this.c, this)
        }, a)
    }

    function ce(a, b) {
        b.forEach(function (a) {
            Nc(this.f, a, this.c, this)
        }, a)
    }

    function Jd(a, b) {
        for (var c = {}, d, e = 0, f = de.length; e < f; e++)d = de[e][0], c[d] = a[d] || b[d] || de[e][1];
        return c
    }

    function Zd(a, b, c) {
        b.bubbles = !1;
        Kd(a, "pointerleave", b, c)
    }

    $d.prototype.out = function (a, b) {
        a.bubbles = !0;
        Kd(this, "pointerout", a, b)
    };
    $d.prototype.cancel = function (a, b) {
        Kd(this, "pointercancel", a, b)
    };
    function Md(a, b, c) {
        a.out(b, c);
        var d = b.target, e = b.relatedTarget;
        d && e && d.contains(e) || Zd(a, b, c)
    }

    function Ld(a, b, c) {
        b.bubbles = !0;
        Kd(a, "pointerover", b, c);
        var d = b.target, e = b.relatedTarget;
        d && e && d.contains(e) || (b.bubbles = !1, Kd(a, "pointerenter", b, c))
    }

    function Kd(a, b, c, d) {
        a.b(new Pd(b, d, c))
    }

    function Rd(a, b) {
        a.b(new Pd(b.type, b, b))
    }

    $d.prototype.la = function () {
        for (var a = this.a.length, b, c = 0; c < a; c++)b = this.a[c], ce(this, Object.keys(b.i));
        Tc.prototype.la.call(this)
    };
    var de = [["bubbles", !1], ["cancelable", !1], ["view", null], ["detail", null], ["screenX", 0], ["screenY", 0], ["clientX", 0], ["clientY", 0], ["ctrlKey", !1], ["altKey", !1], ["shiftKey", !1], ["metaKey", !1], ["button", 0], ["relatedTarget", null], ["buttons", 0], ["pointerId", 0], ["width", 0], ["height", 0], ["pressure", 0], ["tiltX", 0], ["tiltY", 0], ["pointerType", ""], ["hwTimestamp", 0], ["isPrimary", !1], ["type", ""], ["target", null], ["currentTarget", null], ["which", 0]];

    function ee(a, b) {
        Tc.call(this);
        this.g = a;
        this.j = 0;
        this.l = !1;
        this.i = [];
        this.C = b ? b * qd : qd;
        this.c = null;
        a = this.g.a;
        this.O = 0;
        this.s = {};
        this.f = new $d(a);
        this.a = null;
        this.o = z(this.f, "pointerdown", this.Xl, this);
        this.v = z(this.f, "pointermove", this.Up, this)
    }

    v(ee, Tc);
    function fe(a, b) {
        var c = new Ed("click", a.g, b);
        a.b(c);
        0 !== a.j ? (clearTimeout(a.j), a.j = 0, c = new Ed("dblclick", a.g, b), a.b(c)) : a.j = setTimeout(function () {
            this.j = 0;
            var a = new Ed("singleclick", this.g, b);
            this.b(a)
        }.bind(a), 250)
    }

    function ge(a, b) {
        "pointerup" == b.type || "pointercancel" == b.type ? delete a.s[b.pointerId] : "pointerdown" == b.type && (a.s[b.pointerId] = !0);
        a.O = Object.keys(a.s).length
    }

    k = ee.prototype;
    k.ai = function (a) {
        ge(this, a);
        var b = new Ed("pointerup", this.g, a);
        this.b(b);
        !this.l && 0 === a.button && fe(this, this.c);
        0 === this.O && (this.i.forEach(Hc), this.i.length = 0, this.l = !1, this.c = null, Qc(this.a), this.a = null)
    };
    k.Xl = function (a) {
        ge(this, a);
        var b = new Ed("pointerdown", this.g, a);
        this.b(b);
        this.c = a;
        0 === this.i.length && (this.a = new $d(document), this.i.push(z(this.a, "pointermove", this.Tm, this), z(this.a, "pointerup", this.ai, this), z(this.f, "pointercancel", this.ai, this)))
    };
    k.Tm = function (a) {
        if (he(this, a)) {
            this.l = !0;
            var b = new Ed("pointerdrag", this.g, a, this.l);
            this.b(b)
        }
        a.preventDefault()
    };
    k.Up = function (a) {
        this.b(new Ed(a.type, this.g, a, !(!this.c || !he(this, a))))
    };
    function he(a, b) {
        return Math.abs(b.clientX - a.c.clientX) > a.C || Math.abs(b.clientY - a.c.clientY) > a.C
    }

    k.la = function () {
        this.v && (Hc(this.v), this.v = null);
        this.o && (Hc(this.o), this.o = null);
        this.i.forEach(Hc);
        this.i.length = 0;
        this.a && (Qc(this.a), this.a = null);
        this.f && (Qc(this.f), this.f = null);
        Tc.prototype.la.call(this)
    };
    function ie(a, b) {
        this.o = a;
        this.c = b;
        this.b = [];
        this.g = [];
        this.a = {}
    }

    ie.prototype.clear = function () {
        this.b.length = 0;
        this.g.length = 0;
        ub(this.a)
    };
    function je(a) {
        var b = a.b, c = a.g, d = b[0];
        1 == b.length ? (b.length = 0, c.length = 0) : (b[0] = b.pop(), c[0] = c.pop(), ke(a, 0));
        b = a.c(d);
        delete a.a[b];
        return d
    }

    ie.prototype.i = function (a) {
        wa(!(this.c(a) in this.a), 31);
        var b = this.o(a);
        return Infinity != b ? (this.b.push(a), this.g.push(b), this.a[this.c(a)] = !0, le(this, 0, this.b.length - 1), !0) : !1
    };
    function ke(a, b) {
        for (var c = a.b, d = a.g, e = c.length, f = c[b], g = d[b], h = b; b < e >> 1;) {
            var l = 2 * b + 1, m = 2 * b + 2;
            l = m < e && d[m] < d[l] ? m : l;
            c[b] = c[l];
            d[b] = d[l];
            b = l
        }
        c[b] = f;
        d[b] = g;
        le(a, h, b)
    }

    function le(a, b, c) {
        var d = a.b;
        a = a.g;
        for (var e = d[c], f = a[c]; c > b;) {
            var g = c - 1 >> 1;
            if (a[g] > f) d[c] = d[g], a[c] = a[g], c = g; else break
        }
        d[c] = e;
        a[c] = f
    }

    function me(a) {
        var b = a.o, c = a.b, d = a.g, e = 0, f = c.length, g;
        for (g = 0; g < f; ++g) {
            var h = c[g];
            var l = b(h);
            Infinity == l ? delete a.a[a.c(h)] : (d[e] = l, c[e++] = h)
        }
        c.length = e;
        d.length = e;
        for (b = (a.b.length >> 1) - 1; 0 <= b; b--)ke(a, b)
    };
    function ne(a, b) {
        ie.call(this, function (b) {
            return a.apply(null, b)
        }, function (a) {
            return a[0].fb()
        });
        this.v = b;
        this.j = 0;
        this.f = {}
    }

    v(ne, ie);
    ne.prototype.i = function (a) {
        var b = ie.prototype.i.call(this, a);
        b && z(a[0], "change", this.l, this);
        return b
    };
    ne.prototype.l = function (a) {
        a = a.target;
        var b = a.getState();
        if (2 === b || 3 === b || 4 === b || 5 === b) Nc(a, "change", this.l, this), a = a.fb(), a in this.f && (delete this.f[a], --this.j), this.v()
    };
    function oe(a, b, c) {
        for (var d = 0, e = !1, f, g,
                 h; a.j < b && d < c && 0 < a.b.length;)g = je(a)[0], h = g.fb(), f = g.getState(), 5 === f ? e = !0 : 0 !== f || h in a.f || (a.f[h] = !0, ++a.j, ++d, g.load());
        0 === d && e && a.v()
    };
    function pe(a) {
        return function (b) {
            if (b)return [Da(b[0], a[0], a[2]), Da(b[1], a[1], a[3])]
        }
    }

    function qe(a) {
        return a
    };
    function re(a) {
        return function (b, c, d) {
            if (void 0 !== b)return b = ia(a, b, d), b = Da(b + c, 0, a.length - 1), c = Math.floor(b), b != c && c < a.length - 1 ? a[c] / Math.pow(a[c] / a[c + 1], b - c) : a[c]
        }
    }

    function se(a, b, c) {
        return function (d, e, f) {
            if (void 0 !== d)return d = Math.max(Math.floor(Math.log(b / d) / Math.log(a) + (-f / 2 + .5)) + e, 0), void 0 !== c && (d = Math.min(d, c)), b / Math.pow(a, d)
        }
    };
    function te(a) {
        if (void 0 !== a)return 0
    }

    function ue(a, b) {
        if (void 0 !== a)return a + b
    }

    function ve(a) {
        var b = 2 * Math.PI / a;
        return function (a, d) {
            if (void 0 !== a)return a = Math.floor((a + d) / b + .5) * b
        }
    }

    function we() {
        var a = Ia(5);
        return function (b, c) {
            if (void 0 !== b)return Math.abs(b + c) <= a ? 0 : b + c
        }
    };
    function xe(a, b) {
        a = void 0 !== b ? a.toFixed(b) : "" + a;
        b = a.indexOf(".");
        b = -1 === b ? a.length : b;
        return 2 < b ? a : Array(3 - b).join("0") + a
    }

    function ye(a) {
        a = ("" + a).split(".");
        for (var b = ["1", "3"], c = 0; c < Math.max(a.length, b.length); c++) {
            var d = parseInt(a[c] || "0", 10), e = parseInt(b[c] || "0", 10);
            if (d > e)return 1;
            if (e > d)return -1
        }
        return 0
    };
    function ze(a, b) {
        a[0] += b[0];
        a[1] += b[1];
        return a
    }

    function Ae(a, b) {
        var c = b.xd(), d = b.wa();
        b = d[0];
        d = d[1];
        var e = a[0] - b;
        a = a[1] - d;
        0 === e && 0 === a && (e = 1);
        var f = Math.sqrt(e * e + a * a);
        return [b + c * e / f, d + c * a / f]
    }

    function Be(a, b) {
        var c = a[0];
        a = a[1];
        var d = b[0], e = b[1];
        b = d[0];
        d = d[1];
        var f = e[0];
        e = e[1];
        var g = f - b, h = e - d;
        c = 0 === g && 0 === h ? 0 : (g * (c - b) + h * (a - d)) / (g * g + h * h || 0);
        0 >= c ? (a = b, c = d) : 1 <= c ? (a = f, c = e) : (a = b + c * g, c = d + c * h);
        return [a, c]
    }

    function Ce(a, b, c) {
        b = Ja(b + 180, 360) - 180;
        var d = Math.abs(3600 * b);
        c = c || 0;
        var e = Math.pow(10, c), f = Math.floor(d / 3600), g = Math.floor((d - 3600 * f) / 60);
        d = Math.ceil((d - 3600 * f - 60 * g) * e) / e;
        60 <= d && (d = 0, g += 1);
        60 <= g && (g = 0, f += 1);
        return f + "\u00b0 " + xe(g) + "\u2032 " + xe(d, c) + "\u2033" + (0 == b ? "" : " " + a.charAt(0 > b ? 1 : 0))
    }

    function De(a, b, c) {
        return a ? b.replace("{x}", a[0].toFixed(c)).replace("{y}", a[1].toFixed(c)) : ""
    }

    function Ee(a, b) {
        for (var c = !0, d = a.length - 1; 0 <= d; --d)if (a[d] != b[d]) {
            c = !1;
            break
        }
        return c
    }

    function Fe(a, b) {
        var c = Math.cos(b);
        b = Math.sin(b);
        var d = a[1] * c + a[0] * b;
        a[0] = a[0] * c - a[1] * b;
        a[1] = d;
        return a
    }

    function Ge(a, b) {
        a[0] *= b;
        a[1] *= b
    }

    function He(a, b) {
        var c = a[0] - b[0];
        a = a[1] - b[1];
        return c * c + a * a
    }

    function Ie(a, b) {
        return Math.sqrt(He(a, b))
    }

    function Ke(a, b) {
        return He(a, Be(a, b))
    }

    function Le(a, b) {
        return De(a, "{x}, {y}", b)
    };
    function Me(a) {
        return Math.pow(a, 3)
    }

    function Ne(a) {
        return 1 - Me(1 - a)
    }

    function Oe(a) {
        return 3 * a * a - 2 * a * a * a
    }

    function Pe(a) {
        return a
    };
    function Qe() {
        return !0
    }

    function Re() {
        return !1
    };
    function Se(a, b, c, d, e, f) {
        for (var g = f ? f : [], h = 0; b < c; b += d) {
            var l = a[b], m = a[b + 1];
            g[h++] = e[0] * l + e[2] * m + e[4];
            g[h++] = e[1] * l + e[3] * m + e[5]
        }
        f && g.length != h && (g.length = h);
        return g
    }

    function Te(a, b, c, d, e, f, g) {
        for (var h = g ? g : [], l = 0,
                 m; b < c; b += d)for (h[l++] = a[b] + e, h[l++] = a[b + 1] + f, m = b + 2; m < b + d; ++m)h[l++] = a[m];
        g && h.length != l && (h.length = l);
        return h
    };
    var Ue = Array(6);

    function Ve() {
        return [1, 0, 0, 1, 0, 0]
    }

    function We(a) {
        return Xe(a, 1, 0, 0, 1, 0, 0)
    }

    function Ye(a, b) {
        var c = a[0], d = a[1], e = a[2], f = a[3], g = a[4], h = a[5], l = b[0], m = b[1], n = b[2], p = b[3],
            q = b[4];
        b = b[5];
        a[0] = c * l + e * m;
        a[1] = d * l + f * m;
        a[2] = c * n + e * p;
        a[3] = d * n + f * p;
        a[4] = c * q + e * b + g;
        a[5] = d * q + f * b + h;
        return a
    }

    function Xe(a, b, c, d, e, f, g) {
        a[0] = b;
        a[1] = c;
        a[2] = d;
        a[3] = e;
        a[4] = f;
        a[5] = g;
        return a
    }

    function Ze(a, b) {
        a[0] = b[0];
        a[1] = b[1];
        a[2] = b[2];
        a[3] = b[3];
        a[4] = b[4];
        a[5] = b[5];
        return a
    }

    function $e(a, b) {
        var c = b[0], d = b[1];
        b[0] = a[0] * c + a[2] * d + a[4];
        b[1] = a[1] * c + a[3] * d + a[5];
        return b
    }

    function af(a, b) {
        var c = Math.cos(b);
        b = Math.sin(b);
        Ye(a, Xe(Ue, c, b, -b, c, 0, 0))
    }

    function bf(a, b, c) {
        return Ye(a, Xe(Ue, b, 0, 0, c, 0, 0))
    }

    function cf(a, b, c) {
        Ye(a, Xe(Ue, 1, 0, 0, 1, b, c))
    }

    function df(a, b, c, d, e, f, g, h) {
        var l = Math.sin(f);
        f = Math.cos(f);
        a[0] = d * f;
        a[1] = e * l;
        a[2] = -d * l;
        a[3] = e * f;
        a[4] = g * d * f - h * d * l + b;
        a[5] = g * e * l + h * e * f + c;
        return a
    }

    function ef(a) {
        var b = a[0] * a[3] - a[1] * a[2];
        wa(0 !== b, 32);
        var c = a[0], d = a[1], e = a[2], f = a[3], g = a[4], h = a[5];
        a[0] = f / b;
        a[1] = -d / b;
        a[2] = -e / b;
        a[3] = c / b;
        a[4] = (e * h - f * g) / b;
        a[5] = -(c * h - d * g) / b;
        return a
    };
    function ff() {
        Wc.call(this);
        this.o = Pa();
        this.v = -1;
        this.i = {};
        this.l = this.f = 0;
        this.T = Ve()
    }

    v(ff, Wc);
    k = ff.prototype;
    k.Fb = function (a, b) {
        b = b ? b : [NaN, NaN];
        this.Lb(a[0], a[1], b, Infinity);
        return b
    };
    k.xb = function (a) {
        return this.Sc(a[0], a[1])
    };
    k.Sc = Re;
    k.G = function (a) {
        this.v != this.g && (this.o = this.Ee(this.o), this.v = this.g);
        var b = this.o;
        a ? (a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3]) : a = b;
        return a
    };
    k.Qb = function (a) {
        return this.$d(a * a)
    };
    k.gb = function (a, b) {
        var c = this.T;
        a = Zb(a);
        var d = "tile-pixels" == a.a ? function (d, f, g) {
            var e = a.G(), l = a.se;
            e = mb(l) / mb(e);
            df(c, l[0], l[3], e, -e, 0, 0, 0);
            Se(d, 0, d.length, g, c, f);
            return ic(a, b)(d, f, g)
        } : ic(a, b);
        this.Ic(d);
        return this
    };
    function gf() {
        ff.call(this);
        this.ka = "XY";
        this.a = 2;
        this.A = null
    }

    v(gf, ff);
    function hf(a) {
        var b;
        "XY" == a ? b = 2 : "XYZ" == a || "XYM" == a ? b = 3 : "XYZM" == a && (b = 4);
        return b
    }

    k = gf.prototype;
    k.Sc = Re;
    k.Ee = function (a) {
        return ab(this.A, 0, this.A.length, this.a, a)
    };
    k.bc = function () {
        return this.A.slice(0, this.a)
    };
    k.ca = function () {
        return this.A
    };
    k.cc = function () {
        return this.A.slice(this.A.length - this.a)
    };
    k.ec = function () {
        return this.ka
    };
    k.$d = function (a) {
        this.l != this.g && (ub(this.i), this.f = 0, this.l = this.g);
        if (0 > a || 0 !== this.f && a <= this.f)return this;
        var b = a.toString();
        if (this.i.hasOwnProperty(b))return this.i[b];
        var c = this.rd(a);
        if (c.ca().length < this.A.length)return this.i[b] = c;
        this.f = a;
        return this
    };
    k.rd = function () {
        return this
    };
    k.oa = function () {
        return this.a
    };
    function jf(a, b, c) {
        a.a = hf(b);
        a.ka = b;
        a.A = c
    }

    function mf(a, b, c, d) {
        if (b) c = hf(b); else {
            for (b = 0; b < d; ++b) {
                if (0 === c.length) {
                    a.ka = "XY";
                    a.a = 2;
                    return
                }
                c = c[0]
            }
            c = c.length;
            var e;
            2 == c ? e = "XY" : 3 == c ? e = "XYZ" : 4 == c && (e = "XYZM");
            b = e
        }
        a.ka = b;
        a.a = c
    }

    k.Ic = function (a) {
        this.A && (a(this.A, this.A, this.a), this.u())
    };
    k.rotate = function (a, b) {
        var c = this.ca();
        if (c) {
            var d = c.length, e = this.oa(), f = c ? c : [], g = Math.cos(a);
            a = Math.sin(a);
            var h = b[0];
            b = b[1];
            for (var l = 0, m = 0; m < d; m += e) {
                var n = c[m] - h, p = c[m + 1] - b;
                f[l++] = h + n * g - p * a;
                f[l++] = b + n * a + p * g;
                for (n = m + 2; n < m + e; ++n)f[l++] = c[n]
            }
            c && f.length != l && (f.length = l);
            this.u()
        }
    };
    k.scale = function (a, b, c) {
        var d = b;
        void 0 === d && (d = a);
        var e = c;
        e || (e = nb(this.G()));
        if (c = this.ca()) {
            b = c.length;
            var f = this.oa(), g = c ? c : [], h = e[0];
            e = e[1];
            for (var l = 0, m = 0; m < b; m += f) {
                var n = c[m] - h, p = c[m + 1] - e;
                g[l++] = h + a * n;
                g[l++] = e + d * p;
                for (n = m + 2; n < m + f; ++n)g[l++] = c[n]
            }
            c && g.length != l && (g.length = l);
            this.u()
        }
    };
    k.translate = function (a, b) {
        var c = this.ca();
        c && (Te(c, 0, c.length, this.oa(), a, b, c), this.u())
    };
    function nf(a, b, c, d) {
        for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d) {
            var h = a[b], l = a[b + 1];
            e += g * h - f * l;
            f = h;
            g = l
        }
        return e / 2
    }

    function of(a, b, c, d) {
        var e = 0, f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = c[g];
            e += nf(a, b, h, d);
            b = h
        }
        return e
    };
    function pf(a, b, c, d, e, f, g) {
        var h = a[b], l = a[b + 1], m = a[c] - h, n = a[c + 1] - l;
        if (0 !== m || 0 !== n)if (f = ((e - h) * m + (f - l) * n) / (m * m + n * n), 1 < f) b = c; else if (0 < f) {
            for (e = 0; e < d; ++e)g[e] = Ka(a[b + e], a[c + e], f);
            g.length = d;
            return
        }
        for (e = 0; e < d; ++e)g[e] = a[b + e];
        g.length = d
    }

    function qf(a, b, c, d, e) {
        var f = a[b], g = a[b + 1];
        for (b += d; b < c; b += d) {
            var h = a[b], l = a[b + 1];
            f = Ha(f, g, h, l);
            f > e && (e = f);
            f = h;
            g = l
        }
        return e
    }

    function rf(a, b, c, d, e) {
        var f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = c[g];
            e = qf(a, b, h, d, e);
            b = h
        }
        return e
    }

    function sf(a, b, c, d, e, f, g, h, l, m, n) {
        if (b == c)return m;
        if (0 === e) {
            var p = Ha(g, h, a[b], a[b + 1]);
            if (p < m) {
                for (n = 0; n < d; ++n)l[n] = a[b + n];
                l.length = d;
                return p
            }
            return m
        }
        for (var q = n ? n : [NaN, NaN],
                 r = b + d; r < c;)if (pf(a, r - d, r, d, g, h, q), p = Ha(g, h, q[0], q[1]), p < m) {
            m = p;
            for (n = 0; n < d; ++n)l[n] = q[n];
            l.length = d;
            r += d
        } else r += d * Math.max((Math.sqrt(p) - Math.sqrt(m)) / e | 0, 1);
        if (f && (pf(a, c - d, b, d, g, h, q), p = Ha(g, h, q[0], q[1]), p < m)) {
            m = p;
            for (n = 0; n < d; ++n)l[n] = q[n];
            l.length = d
        }
        return m
    }

    function tf(a, b, c, d, e, f, g, h, l, m, n) {
        n = n ? n : [NaN, NaN];
        var p;
        var q = 0;
        for (p = c.length; q < p; ++q) {
            var r = c[q];
            m = sf(a, b, r, d, e, f, g, h, l, m, n);
            b = r
        }
        return m
    };
    function uf(a, b) {
        var c = 0, d;
        var e = 0;
        for (d = b.length; e < d; ++e)a[c++] = b[e];
        return c
    }

    function vf(a, b, c, d) {
        var e;
        var f = 0;
        for (e = c.length; f < e; ++f) {
            var g = c[f], h;
            for (h = 0; h < d; ++h)a[b++] = g[h]
        }
        return b
    }

    function wf(a, b, c, d, e) {
        e = e ? e : [];
        var f = 0, g;
        var h = 0;
        for (g = c.length; h < g; ++h)b = vf(a, b, c[h], d), e[f++] = b;
        e.length = f;
        return e
    };
    function xf(a, b, c, d, e) {
        e = void 0 !== e ? e : [];
        for (var f = 0; b < c; b += d)e[f++] = a.slice(b, b + d);
        e.length = f;
        return e
    }

    function yf(a, b, c, d, e) {
        e = void 0 !== e ? e : [];
        var f = 0, g;
        var h = 0;
        for (g = c.length; h < g; ++h) {
            var l = c[h];
            e[f++] = xf(a, b, l, d, e[f]);
            b = l
        }
        e.length = f;
        return e
    }

    function zf(a, b, c, d, e) {
        e = void 0 !== e ? e : [];
        var f = 0, g;
        var h = 0;
        for (g = c.length; h < g; ++h) {
            var l = c[h];
            e[f++] = yf(a, b, l, d, e[f]);
            b = l[l.length - 1]
        }
        e.length = f;
        return e
    };
    function Af(a, b, c, d, e, f, g) {
        var h = (c - b) / d;
        if (3 > h) {
            for (; b < c; b += d)f[g++] = a[b], f[g++] = a[b + 1];
            return g
        }
        var l = Array(h);
        l[0] = 1;
        l[h - 1] = 1;
        c = [b, c - d];
        for (var m = 0, n; 0 < c.length;) {
            var p = c.pop(), q = c.pop(), r = 0, u = a[q], x = a[q + 1], B = a[p], A = a[p + 1];
            for (n = q + d; n < p; n += d) {
                var y = Ga(a[n], a[n + 1], u, x, B, A);
                y > r && (m = n, r = y)
            }
            r > e && (l[(m - b) / d] = 1, q + d < m && c.push(q, m), m + d < p && c.push(m, p))
        }
        for (n = 0; n < h; ++n)l[n] && (f[g++] = a[b + n * d], f[g++] = a[b + n * d + 1]);
        return g
    }

    function Bf(a, b, c, d, e, f, g, h) {
        var l;
        var m = 0;
        for (l = c.length; m < l; ++m) {
            var n = c[m];
            a:{
                var p = a, q = n, r = d, u = e, x = f, B = g;
                if (b != q) {
                    var A = u * Math.round(p[b] / u), y = u * Math.round(p[b + 1] / u);
                    b += r;
                    x[B++] = A;
                    x[B++] = y;
                    do {
                        var N = u * Math.round(p[b] / u);
                        g = u * Math.round(p[b + 1] / u);
                        b += r;
                        if (b == q) {
                            x[B++] = N;
                            x[B++] = g;
                            g = B;
                            break a
                        }
                    } while (N == A && g == y);
                    for (; b < q;) {
                        var ca = u * Math.round(p[b] / u);
                        var la = u * Math.round(p[b + 1] / u);
                        b += r;
                        if (ca != N || la != g) {
                            var fa = N - A, va = g - y, ra = ca - A, T = la - y;
                            fa * T == va * ra && (0 > fa && ra < fa || fa == ra || 0 < fa && ra > fa) && (0 > va && T < va || va ==
                            T || 0 < va && T > va) || (x[B++] = N, x[B++] = g, A = N, y = g);
                            N = ca;
                            g = la
                        }
                    }
                    x[B++] = N;
                    x[B++] = g
                }
                g = B
            }
            h.push(g);
            b = n
        }
        return g
    };
    function Cf(a, b) {
        gf.call(this);
        this.c = this.j = -1;
        this.na(a, b)
    }

    v(Cf, gf);
    k = Cf.prototype;
    k.clone = function () {
        var a = new Cf(null);
        Df(a, this.ka, this.A.slice());
        return a
    };
    k.Lb = function (a, b, c, d) {
        if (d < Ta(this.G(), a, b))return d;
        this.c != this.g && (this.j = Math.sqrt(qf(this.A, 0, this.A.length, this.a, 0)), this.c = this.g);
        return sf(this.A, 0, this.A.length, this.a, this.j, !0, a, b, c, d)
    };
    k.Cn = function () {
        return nf(this.A, 0, this.A.length, this.a)
    };
    k.V = function () {
        return xf(this.A, 0, this.A.length, this.a)
    };
    k.rd = function (a) {
        var b = [];
        b.length = Af(this.A, 0, this.A.length, this.a, a, b, 0);
        a = new Cf(null);
        Df(a, "XY", b);
        return a
    };
    k.S = function () {
        return "LinearRing"
    };
    k.Ya = function () {
    };
    k.na = function (a, b) {
        a ? (mf(this, b, a, 1), this.A || (this.A = []), this.A.length = vf(this.A, 0, a, this.a), this.u()) : Df(this, "XY", null)
    };
    function Df(a, b, c) {
        jf(a, b, c);
        a.u()
    };
    function C(a, b) {
        gf.call(this);
        this.na(a, b)
    }

    v(C, gf);
    k = C.prototype;
    k.clone = function () {
        var a = new C(null);
        a.aa(this.ka, this.A.slice());
        return a
    };
    k.Lb = function (a, b, c, d) {
        var e = this.A;
        a = Ha(a, b, e[0], e[1]);
        if (a < d) {
            d = this.a;
            for (b = 0; b < d; ++b)c[b] = e[b];
            c.length = d;
            return a
        }
        return d
    };
    k.V = function () {
        return this.A ? this.A.slice() : []
    };
    k.Ee = function (a) {
        return $a(this.A, a)
    };
    k.S = function () {
        return "Point"
    };
    k.Ya = function (a) {
        return Va(a, this.A[0], this.A[1])
    };
    k.na = function (a, b) {
        a ? (mf(this, b, a, 0), this.A || (this.A = []), this.A.length = uf(this.A, a), this.u()) : this.aa("XY", null)
    };
    k.aa = function (a, b) {
        jf(this, a, b);
        this.u()
    };
    function Ef(a, b, c, d, e) {
        return !eb(e, function (e) {
            return !Ff(a, b, c, d, e[0], e[1])
        })
    }

    function Ff(a, b, c, d, e, f) {
        for (var g = 0, h = a[c - d], l = a[c - d + 1]; b < c; b += d) {
            var m = a[b], n = a[b + 1];
            l <= f ? n > f && 0 < (m - h) * (f - l) - (e - h) * (n - l) && g++ : n <= f && 0 > (m - h) * (f - l) - (e - h) * (n - l) && g--;
            h = m;
            l = n
        }
        return 0 !== g
    }

    function Gf(a, b, c, d, e, f) {
        if (0 === c.length || !Ff(a, b, c[0], d, e, f))return !1;
        var g;
        b = 1;
        for (g = c.length; b < g; ++b)if (Ff(a, c[b - 1], c[b], d, e, f))return !1;
        return !0
    };
    function Hf(a, b, c, d, e, f, g) {
        var h, l = e[f + 1], m = [], n = c[0];
        var p = a[n - d];
        var q = a[n - d + 1];
        for (h = b; h < n; h += d) {
            var r = a[h];
            var u = a[h + 1];
            if (l <= q && u <= l || q <= l && l <= u) p = (l - q) / (u - q) * (r - p) + p, m.push(p);
            p = r;
            q = u
        }
        n = NaN;
        q = -Infinity;
        m.sort(ea);
        p = m[0];
        h = 1;
        for (u = m.length; h < u; ++h) {
            r = m[h];
            var x = Math.abs(r - p);
            x > q && (p = (p + r) / 2, Gf(a, b, c, d, p, l) && (n = p, q = x));
            p = r
        }
        isNaN(n) && (n = e[f]);
        return g ? (g.push(n, l, q), g) : [n, l, q]
    };
    function If(a, b, c, d, e, f) {
        for (var g = [a[b], a[b + 1]], h = [], l; b + d < c; b += d) {
            h[0] = a[b + d];
            h[1] = a[b + d + 1];
            if (l = e.call(f, g, h))return l;
            g[0] = h[0];
            g[1] = h[1]
        }
        return !1
    };
    function Jf(a, b, c, d, e) {
        var f = bb(Pa(), a, b, c, d);
        return qb(e, f) ? Wa(e, f) || f[0] >= e[0] && f[2] <= e[2] || f[1] >= e[1] && f[3] <= e[3] ? !0 : If(a, b, c, d, function (a, b) {
            var c = !1, d = Xa(e, a), f = Xa(e, b);
            if (1 === d || 1 === f) c = !0; else {
                var g = e[0], h = e[1], r = e[2], u = e[3], x = b[0];
                b = b[1];
                a = (b - a[1]) / (x - a[0]);
                f & 2 && !(d & 2) && (c = x - (b - u) / a, c = c >= g && c <= r);
                c || !(f & 4) || d & 4 || (c = b - (x - r) * a, c = c >= h && c <= u);
                c || !(f & 8) || d & 8 || (c = x - (b - h) / a, c = c >= g && c <= r);
                c || !(f & 16) || d & 16 || (c = b - (x - g) * a, c = c >= h && c <= u)
            }
            return c
        }) : !1
    }

    function Kf(a, b, c, d, e) {
        var f = c[0];
        if (!(Jf(a, b, f, d, e) || Ff(a, b, f, d, e[0], e[1]) || Ff(a, b, f, d, e[0], e[3]) || Ff(a, b, f, d, e[2], e[1]) || Ff(a, b, f, d, e[2], e[3])))return !1;
        if (1 === c.length)return !0;
        b = 1;
        for (f = c.length; b < f; ++b)if (Ef(a, c[b - 1], c[b], d, e))return !1;
        return !0
    };
    function Lf(a, b, c, d) {
        for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d) {
            var h = a[b], l = a[b + 1];
            e += (h - f) * (l + g);
            f = h;
            g = l
        }
        return 0 < e
    }

    function Mf(a, b, c, d) {
        var e = 0;
        d = void 0 !== d ? d : !1;
        var f;
        var g = 0;
        for (f = b.length; g < f; ++g) {
            var h = b[g];
            e = Lf(a, e, h, c);
            if (0 === g) {
                if (d && e || !d && !e)return !1
            } else if (d && !e || !d && e)return !1;
            e = h
        }
        return !0
    }

    function Of(a, b, c, d, e) {
        e = void 0 !== e ? e : !1;
        var f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = c[g], l = Lf(a, b, h, d);
            if (0 === g ? e && l || !e && !l : e && !l || !e && l) {
                l = a;
                for (var m = h, n = d; b < m - n;) {
                    var p;
                    for (p = 0; p < n; ++p) {
                        var q = l[b + p];
                        l[b + p] = l[m - n + p];
                        l[m - n + p] = q
                    }
                    b += n;
                    m -= n
                }
            }
            b = h
        }
        return b
    }

    function Pf(a, b, c, d) {
        var e = 0, f;
        var g = 0;
        for (f = b.length; g < f; ++g)e = Of(a, e, b[g], c, d);
        return e
    };
    function D(a, b) {
        gf.call(this);
        this.c = [];
        this.s = -1;
        this.C = null;
        this.I = this.D = this.B = -1;
        this.j = null;
        this.na(a, b)
    }

    v(D, gf);
    k = D.prototype;
    k.Ak = function (a) {
        this.A ? ja(this.A, a.ca()) : this.A = a.ca().slice();
        this.c.push(this.A.length);
        this.u()
    };
    k.clone = function () {
        var a = new D(null);
        a.aa(this.ka, this.A.slice(), this.c.slice());
        return a
    };
    k.Lb = function (a, b, c, d) {
        if (d < Ta(this.G(), a, b))return d;
        this.D != this.g && (this.B = Math.sqrt(rf(this.A, 0, this.c, this.a, 0)), this.D = this.g);
        return tf(this.A, 0, this.c, this.a, this.B, !0, a, b, c, d)
    };
    k.Sc = function (a, b) {
        return Gf(this.Ub(), 0, this.c, this.a, a, b)
    };
    k.Fn = function () {
        return of(this.Ub(), 0, this.c, this.a)
    };
    k.V = function (a) {
        if (void 0 !== a) {
            var b = this.Ub().slice();
            Of(b, 0, this.c, this.a, a)
        } else b = this.A;
        return yf(b, 0, this.c, this.a)
    };
    k.lb = function () {
        return this.c
    };
    function Qf(a) {
        if (a.s != a.g) {
            var b = nb(a.G());
            a.C = Hf(a.Ub(), 0, a.c, a.a, b, 0);
            a.s = a.g
        }
        return a.C
    }

    k.cl = function () {
        return new C(Qf(this), "XYM")
    };
    k.il = function () {
        return this.c.length
    };
    k.Th = function (a) {
        if (0 > a || this.c.length <= a)return null;
        var b = new Cf(null);
        Df(b, this.ka, this.A.slice(0 === a ? 0 : this.c[a - 1], this.c[a]));
        return b
    };
    k.Yd = function () {
        var a = this.ka, b = this.A, c = this.c, d = [], e = 0, f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = c[g], l = new Cf(null);
            Df(l, a, b.slice(e, h));
            d.push(l);
            e = h
        }
        return d
    };
    k.Ub = function () {
        if (this.I != this.g) {
            var a = this.A;
            Mf(a, this.c, this.a) ? this.j = a : (this.j = a.slice(), this.j.length = Of(this.j, 0, this.c, this.a));
            this.I = this.g
        }
        return this.j
    };
    k.rd = function (a) {
        var b = [], c = [];
        b.length = Bf(this.A, 0, this.c, this.a, Math.sqrt(a), b, 0, c);
        a = new D(null);
        a.aa("XY", b, c);
        return a
    };
    k.S = function () {
        return "Polygon"
    };
    k.Ya = function (a) {
        return Kf(this.Ub(), 0, this.c, this.a, a)
    };
    k.na = function (a, b) {
        a ? (mf(this, b, a, 2), this.A || (this.A = []), a = wf(this.A, 0, a, this.a, this.c), this.A.length = 0 === a.length ? 0 : a[a.length - 1], this.u()) : this.aa("XY", null, this.c)
    };
    k.aa = function (a, b, c) {
        jf(this, a, b);
        this.c = c;
        this.u()
    };
    function Rf(a, b, c, d) {
        var e = d ? d : 32;
        d = [];
        var f;
        for (f = 0; f < e; ++f)ja(d, a.offset(b, c, 2 * Math.PI * f / e));
        d.push(d[0], d[1]);
        a = new D(null);
        a.aa("XY", d, [d.length]);
        return a
    }

    function Sf(a) {
        var b = a[0], c = a[1], d = a[2];
        a = a[3];
        b = [b, c, b, a, d, a, d, c, b, c];
        c = new D(null);
        c.aa("XY", b, [b.length]);
        return c
    }

    function Tf(a, b, c) {
        var d = b ? b : 32, e = a.oa();
        b = a.ka;
        var f = new D(null, b);
        d = e * (d + 1);
        e = Array(d);
        for (var g = 0; g < d; g++)e[g] = 0;
        f.aa(b, e, [e.length]);
        Uf(f, a.wa(), a.xd(), c);
        return f
    }

    function Uf(a, b, c, d) {
        var e = a.ca(), f = a.ka, g = a.oa(), h = a.lb(), l = e.length / g - 1;
        d = d ? d : 0;
        for (var m, n,
                 p = 0; p <= l; ++p)n = p * g, m = d + 2 * Ja(p, l) * Math.PI / l, e[n] = b[0] + c * Math.cos(m), e[n + 1] = b[1] + c * Math.sin(m);
        a.aa(f, e, h)
    };
    function E(a) {
        Wc.call(this);
        a = tb({}, a);
        this.l = [0, 0];
        this.c = [];
        this.Gf = this.Gf.bind(this);
        this.v = ec(a.projection);
        Vf(this, a)
    }

    v(E, Wc);
    function Vf(a, b) {
        var c = {};
        c.center = void 0 !== b.center ? b.center : null;
        var d = void 0 !== b.minZoom ? b.minZoom : 0;
        var e = void 0 !== b.maxZoom ? b.maxZoom : 28;
        var f = void 0 !== b.zoomFactor ? b.zoomFactor : 2;
        if (void 0 !== b.resolutions) {
            e = b.resolutions;
            var g = e[0];
            var h = e[e.length - 1];
            e = re(e)
        } else {
            g = ec(b.projection);
            h = g.G();
            var l = (h ? Math.max(lb(h), mb(h)) : 360 * Eb.degrees / g.Qc()) / 256 / Math.pow(2, 0),
                m = l / Math.pow(2, 28);
            g = b.maxResolution;
            void 0 !== g ? d = 0 : g = l / Math.pow(f, d);
            h = b.minResolution;
            void 0 === h && (h = void 0 !== b.maxZoom ? void 0 !==
            b.maxResolution ? g / Math.pow(f, e) : l / Math.pow(f, e) : m);
            e = d + Math.floor(Math.log(g / h) / Math.log(f));
            h = g / Math.pow(f, e - d);
            e = se(f, g, e - d)
        }
        a.a = g;
        a.i = h;
        a.C = f;
        a.j = b.resolutions;
        a.o = d;
        (void 0 !== b.enableRotation ? b.enableRotation : 1) ? (d = b.constrainRotation, d = void 0 === d || !0 === d ? we() : !1 === d ? ue : "number" === typeof d ? ve(d) : ue) : d = te;
        a.f = {center: void 0 !== b.extent ? pe(b.extent) : qe, resolution: e, rotation: d};
        void 0 !== b.resolution ? c.resolution = b.resolution : void 0 !== b.zoom && (c.resolution = a.constrainResolution(a.a, b.zoom - a.o));
        c.rotation =
            void 0 !== b.rotation ? b.rotation : 0;
        a.H(c);
        a.D = b
    }

    function Wf(a, b) {
        var c = tb({}, a.D);
        void 0 !== c.resolution ? c.resolution = a.Oa() : c.zoom = a.Zh();
        c.center = a.wa();
        c.rotation = a.Pa();
        return tb({}, c, b)
    }

    k = E.prototype;
    k.animate = function (a) {
        var b = arguments.length;
        if (1 < b && "function" === typeof arguments[b - 1]) {
            var c = arguments[b - 1];
            --b
        }
        if (Xf(this)) {
            for (var d = Date.now(), e = this.wa().slice(), f = this.Oa(), g = this.Pa(), h = [], l = 0; l < b; ++l) {
                var m = arguments[l], n = {
                    start: d,
                    complete: !1,
                    anchor: m.anchor,
                    duration: void 0 !== m.duration ? m.duration : 1E3,
                    easing: m.easing || Oe
                };
                m.center && (n.me = e, n.qe = m.center, e = n.qe);
                void 0 !== m.zoom ? (n.oe = f, n.cd = this.constrainResolution(this.a, m.zoom - this.o, 0), f = n.cd) : m.resolution && (n.oe = f, n.cd = m.resolution, f =
                        n.cd);
                void 0 !== m.rotation && (n.Ef = g, n.re = g + (Ja(m.rotation - g + Math.PI, 2 * Math.PI) - Math.PI), g = n.re);
                n.callback = c;
                n.me && n.qe && !Ee(n.me, n.qe) || n.oe !== n.cd || n.Ef !== n.re ? d += n.duration : n.complete = !0;
                h.push(n)
            }
            this.c.push(h);
            Yf(this, 0, 1);
            this.Gf()
        } else b = arguments[b - 1], b.center && this.rb(b.center), void 0 !== b.zoom && this.Mj(b.zoom), void 0 !== b.rotation && this.ee(b.rotation), c && c(!0)
    };
    k.Oc = function () {
        return 0 < Zf(this)[0]
    };
    k.bl = function () {
        return 0 < Zf(this)[1]
    };
    k.kd = function () {
        Yf(this, 0, -Zf(this)[0]);
        for (var a = 0, b = this.c.length; a < b; ++a) {
            var c = this.c[a];
            c[0].callback && c[0].callback(!1)
        }
        this.c.length = 0
    };
    k.Gf = function () {
        void 0 !== this.s && (cancelAnimationFrame(this.s), this.s = void 0);
        if (this.Oc()) {
            for (var a = Date.now(), b = !1, c = this.c.length - 1; 0 <= c; --c) {
                for (var d = this.c[c], e = !0, f = 0, g = d.length; f < g; ++f) {
                    var h = d[f];
                    if (!h.complete) {
                        b = a - h.start;
                        b = 0 < h.duration ? b / h.duration : 1;
                        1 <= b ? (h.complete = !0, b = 1) : e = !1;
                        b = h.easing(b);
                        if (h.me) {
                            var l = h.me[0], m = h.me[1];
                            this.set("center", [l + b * (h.qe[0] - l), m + b * (h.qe[1] - m)])
                        }
                        h.oe && h.cd && (l = 1 === b ? h.cd : h.oe + b * (h.cd - h.oe), h.anchor && this.set("center", $f(this, l, h.anchor)), this.set("resolution",
                            l));
                        void 0 !== h.Ef && void 0 !== h.re && (b = 1 === b ? Ja(h.re + Math.PI, 2 * Math.PI) - Math.PI : h.Ef + b * (h.re - h.Ef), h.anchor && this.set("center", ag(this, b, h.anchor)), this.set("rotation", b));
                        b = !0;
                        if (!h.complete)break
                    }
                }
                e && (this.c[c] = null, Yf(this, 0, -1), (d = d[0].callback) && d(!0))
            }
            this.c = this.c.filter(Boolean);
            b && void 0 === this.s && (this.s = requestAnimationFrame(this.Gf))
        }
    };
    function ag(a, b, c) {
        var d = a.wa();
        if (void 0 !== d) {
            var e = [d[0] - c[0], d[1] - c[1]];
            Fe(e, b - a.Pa());
            ze(e, c)
        }
        return e
    }

    function $f(a, b, c) {
        var d, e = a.wa();
        a = a.Oa();
        void 0 !== e && void 0 !== a && (d = [c[0] - b * (c[0] - e[0]) / a, c[1] - b * (c[1] - e[1]) / a]);
        return d
    }

    function bg(a) {
        var b = [100, 100];
        a = '.ol-viewport[data-view="' + w(a) + '"]';
        if (a = document.querySelector(a)) a = getComputedStyle(a), b[0] = parseInt(a.width, 10), b[1] = parseInt(a.height, 10);
        return b
    }

    k.Jc = function (a) {
        return this.f.center(a)
    };
    k.constrainResolution = function (a, b, c) {
        return this.f.resolution(a, b || 0, c || 0)
    };
    k.constrainRotation = function (a, b) {
        return this.f.rotation(a, b || 0)
    };
    k.wa = function () {
        return this.get("center")
    };
    function Zf(a, b) {
        return void 0 !== b ? (b[0] = a.l[0], b[1] = a.l[1], b) : a.l.slice()
    }

    k.jd = function (a) {
        a = a || bg(this);
        var b = this.wa();
        wa(b, 1);
        var c = this.Oa();
        wa(void 0 !== c, 2);
        var d = this.Pa();
        wa(void 0 !== d, 3);
        return ob(b, c, d, a)
    };
    k.Ym = function () {
        return this.a
    };
    k.$m = function () {
        return this.i
    };
    k.Zm = function () {
        return this.Oe(this.i)
    };
    k.jq = function (a) {
        Vf(this, Wf(this, {maxZoom: a}))
    };
    k.an = function () {
        return this.Oe(this.a)
    };
    k.kq = function (a) {
        Vf(this, Wf(this, {minZoom: a}))
    };
    k.bn = function () {
        return this.v
    };
    k.Oa = function () {
        return this.get("resolution")
    };
    k.cn = function () {
        return this.j
    };
    k.Le = function (a, b) {
        b = b || bg(this);
        return Math.max(lb(a) / b[0], mb(a) / b[1])
    };
    function cg(a) {
        var b = a.a, c = Math.log(b / a.i) / Math.log(2);
        return function (a) {
            return b / Math.pow(2, a * c)
        }
    }

    k.Pa = function () {
        return this.get("rotation")
    };
    function dg(a) {
        var b = a.a, c = Math.log(b / a.i) / Math.log(2);
        return function (a) {
            return Math.log(b / a) / Math.log(2) / c
        }
    }

    k.getState = function () {
        var a = this.wa(), b = this.v, c = this.Oa(), d = this.Pa();
        return {center: a.slice(), projection: void 0 !== b ? b : null, resolution: c, rotation: d}
    };
    k.Zh = function () {
        var a, b = this.Oa();
        void 0 !== b && (a = this.Oe(b));
        return a
    };
    k.Oe = function (a) {
        if (a >= this.i && a <= this.a) {
            var b = this.o || 0;
            if (this.j) {
                var c = ia(this.j, a, 1);
                b += c;
                if (c == this.j.length - 1)return b;
                var d = this.j[c];
                c = d / this.j[c + 1]
            } else d = this.a, c = this.C;
            b += Math.log(d / a) / Math.log(c)
        }
        return b
    };
    k.Xh = function (a) {
        return this.constrainResolution(this.a, a - this.o, 0)
    };
    k.Vf = function (a, b) {
        b = b || {};
        var c = b.size;
        c || (c = bg(this));
        if (a instanceof gf)if ("Circle" === a.S()) {
            a = a.G();
            var d = Sf(a);
            d.rotate(this.Pa(), nb(a))
        } else d = a; else wa(Array.isArray(a), 24), wa(!kb(a), 25), d = Sf(a);
        var e = b.padding ? b.padding : [0, 0, 0, 0], f = void 0 !== b.constrainResolution ? b.constrainResolution : !0,
            g = void 0 !== b.nearest ? b.nearest : !1, h;
        void 0 !== b.minResolution ? h = b.minResolution : void 0 !== b.maxZoom ? h = this.constrainResolution(this.a, b.maxZoom - this.o, 0) : h = 0;
        var l = d.ca(), m = this.Pa();
        a = Math.cos(-m);
        m = Math.sin(-m);
        var n = Infinity, p = Infinity, q = -Infinity, r = -Infinity;
        d = d.oa();
        for (var u = 0, x = l.length; u < x; u += d) {
            var B = l[u] * a - l[u + 1] * m, A = l[u] * m + l[u + 1] * a;
            n = Math.min(n, B);
            p = Math.min(p, A);
            q = Math.max(q, B);
            r = Math.max(r, A)
        }
        c = this.Le([n, p, q, r], [c[0] - e[1] - e[3], c[1] - e[0] - e[2]]);
        c = isNaN(c) ? h : Math.max(c, h);
        f && (h = this.constrainResolution(c, 0, 0), !g && h < c && (h = this.constrainResolution(h, -1, 0)), c = h);
        m = -m;
        h = (n + q) / 2 + (e[1] - e[3]) / 2 * c;
        e = (p + r) / 2 + (e[0] - e[2]) / 2 * c;
        a = [h * a - e * m, e * a + h * m];
        e = b.callback ? b.callback : sa;
        void 0 !== b.duration ? this.animate({
            resolution: c,
            center: a, duration: b.duration, easing: b.easing
        }, e) : (this.$c(c), this.rb(a), setTimeout(e.bind(void 0, !0), 0))
    };
    k.Gk = function (a, b, c) {
        var d = this.Pa(), e = Math.cos(-d);
        d = Math.sin(-d);
        var f = a[0] * e - a[1] * d;
        a = a[1] * e + a[0] * d;
        var g = this.Oa();
        f += (b[0] / 2 - c[0]) * g;
        a += (c[1] - b[1] / 2) * g;
        d = -d;
        this.rb([f * e - a * d, a * e + f * d])
    };
    function Xf(a) {
        return !!a.wa() && void 0 !== a.Oa()
    }

    k.rotate = function (a, b) {
        void 0 !== b && (b = ag(this, a, b), this.rb(b));
        this.ee(a)
    };
    k.rb = function (a) {
        this.set("center", a);
        this.Oc() && this.kd()
    };
    function Yf(a, b, c) {
        a.l[b] += c;
        a.u()
    }

    k.$c = function (a) {
        this.set("resolution", a);
        this.Oc() && this.kd()
    };
    k.ee = function (a) {
        this.set("rotation", a);
        this.Oc() && this.kd()
    };
    k.Mj = function (a) {
        this.$c(this.Xh(a))
    };
    function eg(a, b) {
        var c = document.createElement("CANVAS");
        a && (c.width = a);
        b && (c.height = b);
        return c.getContext("2d")
    }

    function fg(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    }

    function gg(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    function hg(a) {
        Wc.call(this);
        var b = tb({}, a);
        b.opacity = void 0 !== a.opacity ? a.opacity : 1;
        b.visible = void 0 !== a.visible ? a.visible : !0;
        b.zIndex = void 0 !== a.zIndex ? a.zIndex : 0;
        b.maxResolution = void 0 !== a.maxResolution ? a.maxResolution : Infinity;
        b.minResolution = void 0 !== a.minResolution ? a.minResolution : 0;
        this.H(b);
        this.a = {layer: this, Ve: !0}
    }

    v(hg, Wc);
    k = hg.prototype;
    k.S = function () {
        return this.type
    };
    function ig(a) {
        a.a.opacity = Da(a.ic(), 0, 1);
        a.a.Oj = a.jg();
        a.a.visible = a.Tb();
        a.a.extent = a.G();
        a.a.zIndex = a.ya();
        a.a.maxResolution = a.gc();
        a.a.minResolution = Math.max(a.hc(), 0);
        return a.a
    }

    k.G = function () {
        return this.get("extent")
    };
    k.gc = function () {
        return this.get("maxResolution")
    };
    k.hc = function () {
        return this.get("minResolution")
    };
    k.ic = function () {
        return this.get("opacity")
    };
    k.Tb = function () {
        return this.get("visible")
    };
    k.ya = function () {
        return this.get("zIndex")
    };
    k.zc = function (a) {
        this.set("extent", a)
    };
    k.Ec = function (a) {
        this.set("maxResolution", a)
    };
    k.Fc = function (a) {
        this.set("minResolution", a)
    };
    k.Ac = function (a) {
        this.set("opacity", a)
    };
    k.Bc = function (a) {
        this.set("visible", a)
    };
    k.Xb = function (a) {
        this.set("zIndex", a)
    };
    function jg(a) {
        var b = a || {};
        a = tb({}, b);
        delete a.layers;
        b = b.layers;
        hg.call(this, a);
        this.i = [];
        this.c = {};
        z(this, Yc(kg), this.Ql, this);
        b ? Array.isArray(b) ? b = new ad(b.slice(), {unique: !0}) : wa(b instanceof ad, 43) : b = new ad(void 0, {unique: !0});
        this.Oi(b)
    }

    v(jg, hg);
    k = jg.prototype;
    k.Re = function () {
        this.u()
    };
    k.Ql = function () {
        this.i.forEach(Hc);
        this.i.length = 0;
        var a = this.yd();
        this.i.push(z(a, "add", this.Pl, this), z(a, "remove", this.Rl, this));
        for (var b in this.c)this.c[b].forEach(Hc);
        ub(this.c);
        a = a.a;
        var c;
        b = 0;
        for (c = a.length; b < c; b++) {
            var d = a[b];
            this.c[w(d).toString()] = [z(d, "propertychange", this.Re, this), z(d, "change", this.Re, this)]
        }
        this.u()
    };
    k.Pl = function (a) {
        a = a.element;
        var b = w(a).toString();
        this.c[b] = [z(a, "propertychange", this.Re, this), z(a, "change", this.Re, this)];
        this.u()
    };
    k.Rl = function (a) {
        a = w(a.element).toString();
        this.c[a].forEach(Hc);
        delete this.c[a];
        this.u()
    };
    k.yd = function () {
        return this.get(kg)
    };
    k.Oi = function (a) {
        this.set(kg, a)
    };
    k.fg = function (a) {
        var b = void 0 !== a ? a : [], c = b.length;
        this.yd().forEach(function (a) {
            a.fg(b)
        });
        a = ig(this);
        var d;
        for (d = b.length; c < d; c++) {
            var e = b[c];
            e.opacity *= a.opacity;
            e.visible = e.visible && a.visible;
            e.maxResolution = Math.min(e.maxResolution, a.maxResolution);
            e.minResolution = Math.max(e.minResolution, a.minResolution);
            void 0 !== a.extent && (e.extent = void 0 !== e.extent ? pb(e.extent, a.extent) : a.extent)
        }
        return b
    };
    k.jg = function () {
        return "ready"
    };
    var kg = "layers";
    var lg = [], mg = [];

    function ng(a, b) {
        switch (a) {
            case "MAP_RENDERER":
                a = lg;
                a.push(b);
                break;
            case "LAYER_RENDERER":
                a = mg;
                a.push(b);
                break;
            default:
                throw Error("Unsupported plugin type: " + a);
        }
    }

    function og(a) {
        for (var b = 0, c = a.length; b < c; ++b)ng("LAYER_RENDERER", a[b])
    };
    function F(a) {
        Wc.call(this);
        var b = pg(a);
        this.tb = void 0 !== a.loadTilesWhileAnimating ? a.loadTilesWhileAnimating : !1;
        this.Kb = void 0 !== a.loadTilesWhileInteracting ? a.loadTilesWhileInteracting : !1;
        this.Kd = void 0 !== a.pixelRatio ? a.pixelRatio : qd;
        this.gd = b.logos;
        this.U = function () {
            this.j = void 0;
            this.Xp.call(this, Date.now())
        }.bind(this);
        this.Va = Ve();
        this.Jf = Ve();
        this.ab = 0;
        this.C = this.D = this.B = this.f = this.c = null;
        this.a = document.createElement("DIV");
        this.a.className = "ol-viewport" + (vd ? " ol-touch" : "");
        this.a.style.position =
            "relative";
        this.a.style.overflow = "hidden";
        this.a.style.width = "100%";
        this.a.style.height = "100%";
        this.a.style.msTouchAction = "none";
        this.a.style.touchAction = "none";
        this.s = document.createElement("DIV");
        this.s.className = "ol-overlaycontainer";
        this.a.appendChild(this.s);
        this.v = document.createElement("DIV");
        this.v.className = "ol-overlaycontainer-stopevent";
        for (var c = "click dblclick mousedown touchstart MSPointerDown pointerdown mousewheel wheel".split(" "), d = 0,
                 e = c.length; d < e; ++d)z(this.v, c[d], Sc);
        this.a.appendChild(this.v);
        this.fa = new ee(this, a.moveTolerance);
        for (var f in Dd)z(this.fa, Dd[f], this.$h, this);
        this.sa = b.keyboardEventTarget;
        this.o = null;
        z(this.a, "wheel", this.sd, this);
        z(this.a, "mousewheel", this.sd, this);
        this.controls = b.controls || new ad;
        this.interactions = b.interactions || new ad;
        this.l = b.overlays;
        this.Eg = {};
        this.kc = b.pm.create(this.a, this);
        this.I = null;
        this.ta = [];
        this.ia = new ne(this.Al.bind(this), this.gm.bind(this));
        this.T = {};
        z(this, Yc("layergroup"), this.Nl, this);
        z(this, Yc("view"), this.hm, this);
        z(this, Yc("size"),
            this.bm, this);
        z(this, Yc("target"), this.fm, this);
        this.H(b.values);
        this.controls.forEach(function (a) {
            a.setMap(this)
        }, this);
        z(this.controls, "add", function (a) {
            a.element.setMap(this)
        }, this);
        z(this.controls, "remove", function (a) {
            a.element.setMap(null)
        }, this);
        this.interactions.forEach(function (a) {
            a.setMap(this)
        }, this);
        z(this.interactions, "add", function (a) {
            a.element.setMap(this)
        }, this);
        z(this.interactions, "remove", function (a) {
            a.element.setMap(null)
        }, this);
        this.l.forEach(this.yh, this);
        z(this.l, "add", function (a) {
                this.yh(a.element)
            },
            this);
        z(this.l, "remove", function (a) {
            var b = a.element.f;
            void 0 !== b && delete this.Eg[b.toString()];
            a.element.setMap(null)
        }, this)
    }

    v(F, Wc);
    k = F.prototype;
    k.Nf = function (a) {
        this.controls.push(a)
    };
    k.Of = function (a) {
        this.interactions.push(a)
    };
    k.Be = function (a) {
        this.dc().yd().push(a)
    };
    k.Ce = function (a) {
        this.l.push(a)
    };
    k.yh = function (a) {
        var b = a.f;
        void 0 !== b && (this.Eg[b.toString()] = a);
        a.setMap(this)
    };
    k.la = function () {
        Qc(this.fa);
        Qc(this.kc);
        Nc(this.a, "wheel", this.sd, this);
        Nc(this.a, "mousewheel", this.sd, this);
        this.i && (window.removeEventListener("resize", this.i, !1), this.i = void 0);
        this.j && (cancelAnimationFrame(this.j), this.j = void 0);
        this.vd(null);
        Wc.prototype.la.call(this)
    };
    k.Lc = function (a, b, c) {
        if (this.c)return a = this.Na(a), c = c ? c : {}, this.kc.Fa(a, this.c, void 0 !== c.hitTolerance ? c.hitTolerance * this.c.pixelRatio : 0, b, null, c.layerFilter ? c.layerFilter : Qe, null)
    };
    k.Zf = function (a, b) {
        var c = null;
        this.Lc(a, function (a) {
            c || (c = []);
            c.push(a)
        }, b);
        return c
    };
    k.tg = function (a, b, c, d, e) {
        if (this.c)return this.kc.Ri(a, this.c, b, void 0 !== c ? c : null, d ? d : Qe, void 0 !== e ? e : null)
    };
    k.og = function (a, b) {
        if (!this.c)return !1;
        a = this.Na(a);
        b = b ? b : {};
        return this.kc.Si(a, this.c, void 0 !== b.hitTolerance ? b.hitTolerance * this.c.pixelRatio : 0, b.layerFilter ? b.layerFilter : Qe, null)
    };
    k.Xd = function (a) {
        return this.Na(this.od(a))
    };
    k.od = function (a) {
        var b = this.a.getBoundingClientRect();
        a = a.changedTouches ? a.changedTouches[0] : a;
        return [a.clientX - b.left, a.clientY - b.top]
    };
    k.ae = function () {
        return this.get("target")
    };
    k.vc = function () {
        var a = this.ae();
        return void 0 !== a ? "string" === typeof a ? document.getElementById(a) : a : null
    };
    k.Na = function (a) {
        var b = this.c;
        return b ? $e(b.pixelToCoordinateTransform, a.slice()) : null
    };
    k.Yf = function () {
        return this.controls
    };
    k.ig = function () {
        return this.l
    };
    k.hg = function (a) {
        a = this.Eg[a.toString()];
        return void 0 !== a ? a : null
    };
    k.dg = function () {
        return this.interactions
    };
    k.dc = function () {
        return this.get("layergroup")
    };
    k.Ze = function () {
        return this.dc().yd()
    };
    k.Ha = function (a) {
        var b = this.c;
        return b ? $e(b.coordinateToPixelTransform, a.slice(0, 2)) : null
    };
    k.Ke = function () {
        return this.kc
    };
    k.yb = function () {
        return this.get("size")
    };
    k.$ = function () {
        return this.get("view")
    };
    k.mg = function () {
        return this.a
    };
    k.Al = function (a, b, c, d) {
        var e = this.c;
        if (!(e && b in e.wantedTiles && e.wantedTiles[b][a.fb()]))return Infinity;
        a = c[0] - e.focus[0];
        c = c[1] - e.focus[1];
        return 65536 * Math.log(d) + Math.sqrt(a * a + c * c) / d
    };
    k.sd = function (a, b) {
        a = new gd(b || a.type, this, a);
        this.$h(a)
    };
    k.$h = function (a) {
        if (this.c) {
            this.I = a.coordinate;
            a.frameState = this.c;
            var b = this.interactions.a, c;
            if (!1 !== this.b(a))for (c = b.length - 1; 0 <= c; c--) {
                var d = b[c];
                if (d.c() && !d.handleEvent(a))break
            }
        }
    };
    k.$l = function () {
        var a = this.c, b = this.ia;
        if (0 !== b.b.length) {
            var c = 16, d = c;
            if (a) {
                var e = a.viewHints;
                e[0] && (c = this.tb ? 8 : 0, d = 2);
                e[1] && (c = this.Kb ? 8 : 0, d = 2)
            }
            b.j < c && (me(b), oe(b, c, d))
        }
        b = this.ta;
        c = 0;
        for (d = b.length; c < d; ++c)b[c](this, a);
        b.length = 0
    };
    k.bm = function () {
        this.render()
    };
    k.fm = function () {
        var a;
        this.ae() && (a = this.vc());
        if (this.o) {
            for (var b = 0, c = this.o.length; b < c; ++b)Hc(this.o[b]);
            this.o = null
        }
        a ? (a.appendChild(this.a), a = this.sa ? this.sa : a, this.o = [z(a, "keydown", this.sd, this), z(a, "keypress", this.sd, this)], this.i || (this.i = this.Gc.bind(this), window.addEventListener("resize", this.i, !1))) : (gg(this.a), this.i && (window.removeEventListener("resize", this.i, !1), this.i = void 0));
        this.Gc()
    };
    k.gm = function () {
        this.render()
    };
    k.ci = function () {
        this.render()
    };
    k.hm = function () {
        this.B && (Hc(this.B), this.B = null);
        this.D && (Hc(this.D), this.D = null);
        var a = this.$();
        a && (this.a.setAttribute("data-view", w(a)), this.B = z(a, "propertychange", this.ci, this), this.D = z(a, "change", this.ci, this));
        this.render()
    };
    k.Nl = function () {
        this.C && (this.C.forEach(Hc), this.C = null);
        var a = this.dc();
        a && (this.C = [z(a, "propertychange", this.render, this), z(a, "change", this.render, this)]);
        this.render()
    };
    k.bh = function () {
        this.j && cancelAnimationFrame(this.j);
        this.U()
    };
    k.render = function () {
        void 0 === this.j && (this.j = requestAnimationFrame(this.U))
    };
    k.Wg = function (a) {
        return this.controls.remove(a)
    };
    k.Yg = function (a) {
        return this.interactions.remove(a)
    };
    k.Zg = function (a) {
        return this.dc().yd().remove(a)
    };
    k.$g = function (a) {
        return this.l.remove(a)
    };
    k.Xp = function (a) {
        var b, c = this.yb(), d = this.$(), e = Pa(), f = this.c, g = null;
        if (void 0 !== c && 0 < c[0] && 0 < c[1] && d && Xf(d)) {
            g = Zf(d, this.c ? this.c.viewHints : void 0);
            var h = this.dc().fg(), l = {};
            var m = 0;
            for (b = h.length; m < b; ++m)l[w(h[m].layer)] = h[m];
            m = d.getState();
            g = {
                animate: !1,
                attributions: {},
                coordinateToPixelTransform: this.Va,
                extent: e,
                focus: this.I ? this.I : m.center,
                index: this.ab++,
                layerStates: l,
                layerStatesArray: h,
                logos: tb({}, this.gd),
                pixelRatio: this.Kd,
                pixelToCoordinateTransform: this.Jf,
                postRenderFunctions: [],
                size: c,
                skippedFeatureUids: this.T,
                tileQueue: this.ia,
                time: a,
                usedTiles: {},
                viewState: m,
                viewHints: g,
                wantedTiles: {}
            }
        }
        g && (g.extent = ob(m.center, m.resolution, m.rotation, g.size, e));
        this.c = g;
        this.kc.ah(g);
        g && (g.animate && this.render(), Array.prototype.push.apply(this.ta, g.postRenderFunctions), !f || this.f && (kb(this.f) || cb(g.extent, this.f)) || (this.b(new fd("movestart", this, f)), this.f = Za(this.f)), !this.f || g.viewHints[0] || g.viewHints[1] || cb(g.extent, this.f) || (this.b(new fd("moveend", this, g)), Sa(g.extent, this.f)));
        this.b(new fd("postrender", this, g));
        setTimeout(this.$l.bind(this), 0)
    };
    k.Af = function (a) {
        this.set("layergroup", a)
    };
    k.le = function (a) {
        this.set("size", a)
    };
    k.vd = function (a) {
        this.set("target", a)
    };
    k.ih = function (a) {
        this.set("view", a)
    };
    k.Nj = function (a) {
        a = w(a).toString();
        this.T[a] = !0;
        this.render()
    };
    k.Gc = function () {
        var a = this.vc();
        if (a) {
            var b = getComputedStyle(a);
            this.le([a.offsetWidth - parseFloat(b.borderLeftWidth) - parseFloat(b.paddingLeft) - parseFloat(b.paddingRight) - parseFloat(b.borderRightWidth), a.offsetHeight - parseFloat(b.borderTopWidth) - parseFloat(b.paddingTop) - parseFloat(b.paddingBottom) - parseFloat(b.borderBottomWidth)])
        } else this.le(void 0)
    };
    k.Sj = function (a) {
        a = w(a).toString();
        delete this.T[a];
        this.render()
    };
    var qg = ["canvas", "webgl"];

    function pg(a) {
        var b = null;
        void 0 !== a.keyboardEventTarget && (b = "string" === typeof a.keyboardEventTarget ? document.getElementById(a.keyboardEventTarget) : a.keyboardEventTarget);
        var c = {}, d = {};
        if (void 0 === a.logo || "boolean" === typeof a.logo && a.logo) d["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"] =
            "https://openlayers.org/"; else {
            var e = a.logo;
            "string" === typeof e ? d[e] = "" : e instanceof HTMLElement ? d[w(e).toString()] = e : e && (wa("string" == typeof e.href, 44), wa("string" == typeof e.src, 45), d[e.src] = e.href)
        }
        e = a.layers instanceof jg ? a.layers : new jg({layers: a.layers});
        c.layergroup = e;
        c.target = a.target;
        c.view = void 0 !== a.view ? a.view : new E;
        var f;
        void 0 !== a.renderer ? (Array.isArray(a.renderer) ? f = a.renderer : "string" === typeof a.renderer ? f = [a.renderer] : wa(!1, 46), 0 <= f.indexOf("dom") && (f = f.concat(qg))) : f = qg;
        e = 0;
        var g =
            f.length;
        a:for (; e < g; ++e)for (var h = f[e], l = 0, m = lg.length; l < m; ++l) {
            var n = lg[l];
            if (n.handles(h)) {
                var p = n;
                break a
            }
        }
        if (!p)throw Error("Unable to create a map renderer for types: " + f.join(", "));
        if (void 0 !== a.controls)if (Array.isArray(a.controls))var q = new ad(a.controls.slice()); else wa(a.controls instanceof ad, 47), q = a.controls;
        if (void 0 !== a.interactions)if (Array.isArray(a.interactions))var r = new ad(a.interactions.slice()); else wa(a.interactions instanceof ad, 48), r = a.interactions;
        void 0 !== a.overlays ? Array.isArray(a.overlays) ?
            a = new ad(a.overlays.slice()) : (wa(a.overlays instanceof ad, 49), a = a.overlays) : a = new ad;
        return {controls: q, interactions: r, keyboardEventTarget: b, logos: d, overlays: a, pm: p, values: c}
    };
    function rg(a) {
        Wc.call(this);
        this.element = a.element ? a.element : null;
        this.a = this.T = null;
        this.v = [];
        this.render = a.render ? a.render : sa;
        a.target && this.i(a.target)
    }

    v(rg, Wc);
    rg.prototype.la = function () {
        gg(this.element);
        Wc.prototype.la.call(this)
    };
    rg.prototype.f = function () {
        return this.a
    };
    rg.prototype.setMap = function (a) {
        this.a && gg(this.element);
        for (var b = 0, c = this.v.length; b < c; ++b)Hc(this.v[b]);
        this.v.length = 0;
        if (this.a = a) (this.T ? this.T : a.v).appendChild(this.element), this.render !== sa && this.v.push(z(a, "postrender", this.render, this)), a.render()
    };
    rg.prototype.i = function (a) {
        this.T = "string" === typeof a ? document.getElementById(a) : a
    };
    function sg(a) {
        a = a ? a : {};
        this.I = document.createElement("UL");
        this.s = document.createElement("LI");
        this.I.appendChild(this.s);
        this.s.style.display = "none";
        this.c = void 0 !== a.collapsed ? a.collapsed : !0;
        this.l = void 0 !== a.collapsible ? a.collapsible : !0;
        this.l || (this.c = !1);
        var b = void 0 !== a.className ? a.className : "ol-attribution",
            c = void 0 !== a.tipLabel ? a.tipLabel : "Attributions",
            d = void 0 !== a.collapseLabel ? a.collapseLabel : "\u00bb";
        "string" === typeof d ? (this.C = document.createElement("span"), this.C.textContent = d) : this.C =
            d;
        d = void 0 !== a.label ? a.label : "i";
        "string" === typeof d ? (this.D = document.createElement("span"), this.D.textContent = d) : this.D = d;
        var e = this.l && !this.c ? this.C : this.D;
        d = document.createElement("button");
        d.setAttribute("type", "button");
        d.title = c;
        d.appendChild(e);
        z(d, "click", this.fn, this);
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control" + (this.c && this.l ? " ol-collapsed" : "") + (this.l ? "" : " ol-uncollapsible");
        c.appendChild(this.I);
        c.appendChild(d);
        rg.call(this, {
            element: c, render: a.render ?
                a.render : tg, target: a.target
        });
        this.B = !0;
        this.o = {};
        this.j = {};
        this.U = {}
    }

    v(sg, rg);
    function tg(a) {
        if (a = a.frameState) {
            var b, c, d, e, f, g = a.layerStatesArray, h = tb({}, a.attributions), l = {}, m = {},
                n = a.viewState.projection;
            var p = 0;
            for (b = g.length; p < b; p++)if (e = g[p].layer.ja()) {
                var q = w(e).toString();
                if (f = e.j) {
                    var r = 0;
                    for (c = f.length; r < c; r++) {
                        var u = f[r];
                        var x = w(u).toString();
                        if (!(x in h)) {
                            if (d = a.usedTiles[q]) {
                                var B = e.Xa(n);
                                a:{
                                    var A = void 0;
                                    var y, N = u, ca = B, la = n;
                                    if (N.a) {
                                        for (A in d)if (A in N.a) {
                                            B = d[A];
                                            var fa = 0;
                                            for (y = N.a[A].length; fa < y; ++fa) {
                                                var va = N.a[A][fa];
                                                if (Ba(va, B)) {
                                                    A = !0;
                                                    break a
                                                }
                                                var ra = tc(ca, Dc(la),
                                                    parseInt(A, 10)), T = ra.da - ra.ba + 1;
                                                if (B.ba < ra.ba || B.da > ra.da)if (Ba(va, new xa(Ja(B.ba, T), Ja(B.da, T), B.ea, B.ga)) || B.da - B.ba + 1 > T && Ba(va, ra)) {
                                                    A = !0;
                                                    break a
                                                }
                                            }
                                        }
                                        A = !1
                                    } else A = !0
                                }
                            } else A = !1;
                            A ? (x in l && delete l[x], A = u.b, A in m || (m[A] = !0, h[x] = u)) : l[x] = u
                        }
                    }
                }
            }
            b = [h, l];
            p = b[0];
            b = b[1];
            for (var U in this.o)U in p ? (this.j[U] || (this.o[U].style.display = "", this.j[U] = !0), delete p[U]) : U in b ? (this.j[U] && (this.o[U].style.display = "none", delete this.j[U]), delete b[U]) : (gg(this.o[U]), delete this.o[U], delete this.j[U]);
            for (U in p)r =
                document.createElement("LI"), r.innerHTML = p[U].b, this.I.appendChild(r), this.o[U] = r, this.j[U] = !0;
            for (U in b)r = document.createElement("LI"), r.innerHTML = b[U].b, r.style.display = "none", this.I.appendChild(r), this.o[U] = r;
            U = !wb(this.j) || !wb(a.logos);
            this.B != U && (this.element.style.display = U ? "" : "none", this.B = U);
            U && wb(this.j) ? this.element.classList.add("ol-logo-only") : this.element.classList.remove("ol-logo-only");
            a = a.logos;
            U = this.U;
            for (Ca in U)Ca in a || (gg(U[Ca]), delete U[Ca]);
            for (var Xb in a)if (b = a[Xb], b instanceof
                HTMLElement && (this.s.appendChild(b), U[Xb] = b), !(Xb in U)) {
                var Ca = new Image;
                Ca.src = Xb;
                "" === b ? p = Ca : (p = document.createElement("a"), p.href = b, p.appendChild(Ca));
                this.s.appendChild(p);
                U[Xb] = p
            }
            this.s.style.display = wb(a) ? "none" : ""
        } else this.B && (this.element.style.display = "none", this.B = !1)
    }

    k = sg.prototype;
    k.fn = function (a) {
        a.preventDefault();
        ug(this)
    };
    function ug(a) {
        a.element.classList.toggle("ol-collapsed");
        a.c ? fg(a.C, a.D) : fg(a.D, a.C);
        a.c = !a.c
    }

    k.en = function () {
        return this.l
    };
    k.hn = function (a) {
        this.l !== a && (this.l = a, this.element.classList.toggle("ol-uncollapsible"), !a && this.c && ug(this))
    };
    k.gn = function (a) {
        this.l && this.c !== a && ug(this)
    };
    k.dn = function () {
        return this.c
    };
    function vg(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-rotate", c = void 0 !== a.label ? a.label : "\u21e7";
        this.c = null;
        "string" === typeof c ? (this.c = document.createElement("span"), this.c.className = "ol-compass", this.c.textContent = c) : (this.c = c, this.c.classList.add("ol-compass"));
        var d = a.tipLabel ? a.tipLabel : "Reset rotation";
        c = document.createElement("button");
        c.className = b + "-reset";
        c.setAttribute("type", "button");
        c.title = d;
        c.appendChild(this.c);
        z(c, "click", vg.prototype.C, this);
        d = document.createElement("div");
        d.className = b + " ol-unselectable ol-control";
        d.appendChild(c);
        b = a.render ? a.render : wg;
        this.l = a.resetNorth ? a.resetNorth : void 0;
        rg.call(this, {element: d, render: b, target: a.target});
        this.o = void 0 !== a.duration ? a.duration : 250;
        this.j = void 0 !== a.autoHide ? a.autoHide : !0;
        this.s = void 0;
        this.j && this.element.classList.add("ol-hidden")
    }

    v(vg, rg);
    vg.prototype.C = function (a) {
        a.preventDefault();
        this.l ? this.l() : (a = this.a.$()) && void 0 !== a.Pa() && (0 < this.o ? a.animate({
                rotation: 0,
                duration: this.o,
                easing: Ne
            }) : a.ee(0))
    };
    function wg(a) {
        if (a = a.frameState) {
            a = a.viewState.rotation;
            if (a != this.s) {
                var b = "rotate(" + a + "rad)";
                if (this.j) {
                    var c = this.element.classList.contains("ol-hidden");
                    c || 0 !== a ? c && 0 !== a && this.element.classList.remove("ol-hidden") : this.element.classList.add("ol-hidden")
                }
                this.c.style.msTransform = b;
                this.c.style.webkitTransform = b;
                this.c.style.transform = b
            }
            this.s = a
        }
    };
    function xg(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-zoom", c = void 0 !== a.delta ? a.delta : 1,
            d = void 0 !== a.zoomInLabel ? a.zoomInLabel : "+",
            e = void 0 !== a.zoomOutLabel ? a.zoomOutLabel : "\u2212",
            f = void 0 !== a.zoomInTipLabel ? a.zoomInTipLabel : "Zoom in",
            g = void 0 !== a.zoomOutTipLabel ? a.zoomOutTipLabel : "Zoom out", h = document.createElement("button");
        h.className = b + "-in";
        h.setAttribute("type", "button");
        h.title = f;
        h.appendChild("string" === typeof d ? document.createTextNode(d) : d);
        z(h, "click", xg.prototype.j.bind(this,
            c));
        d = document.createElement("button");
        d.className = b + "-out";
        d.setAttribute("type", "button");
        d.title = g;
        d.appendChild("string" === typeof e ? document.createTextNode(e) : e);
        z(d, "click", xg.prototype.j.bind(this, -c));
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control";
        c.appendChild(h);
        c.appendChild(d);
        rg.call(this, {element: c, target: a.target});
        this.c = void 0 !== a.duration ? a.duration : 250
    }

    v(xg, rg);
    xg.prototype.j = function (a, b) {
        b.preventDefault();
        if (b = this.a.$()) {
            var c = b.Oa();
            c && (a = b.constrainResolution(c, a), 0 < this.c ? (b.Oc() && b.kd(), b.animate({
                resolution: a,
                duration: this.c,
                easing: Ne
            })) : b.$c(a))
        }
    };
    function yg(a) {
        a = a ? a : {};
        var b = new ad;
        (void 0 !== a.zoom ? a.zoom : 1) && b.push(new xg(a.zoomOptions));
        (void 0 !== a.rotate ? a.rotate : 1) && b.push(new vg(a.rotateOptions));
        (void 0 !== a.attribution ? a.attribution : 1) && b.push(new sg(a.attributionOptions));
        return b
    };
    function zg(a, b, c) {
        this.i = a;
        this.c = b;
        this.f = c;
        this.b = [];
        this.a = this.g = 0
    }

    function Ag(a) {
        a.b.length = 0;
        a.g = 0;
        a.a = 0
    }

    function Bg(a) {
        if (6 > a.b.length)return !1;
        var b = Date.now() - a.f, c = a.b.length - 3;
        if (a.b[c + 2] < b)return !1;
        for (var d = c - 3; 0 < d && a.b[d + 2] > b;)d -= 3;
        b = a.b[c + 2] - a.b[d + 2];
        if (b < 1E3 / 60)return !1;
        var e = a.b[c] - a.b[d];
        c = a.b[c + 1] - a.b[d + 1];
        a.g = Math.atan2(c, e);
        a.a = Math.sqrt(e * e + c * c) / b;
        return a.a > a.c
    };
    function Eg(a) {
        Wc.call(this);
        this.v = null;
        this.Ga(!0);
        this.handleEvent = a.handleEvent
    }

    v(Eg, Wc);
    Eg.prototype.c = function () {
        return this.get("active")
    };
    Eg.prototype.i = function () {
        return this.v
    };
    Eg.prototype.Ga = function (a) {
        this.set("active", a)
    };
    Eg.prototype.setMap = function (a) {
        this.v = a
    };
    function Fg(a, b, c, d) {
        if (void 0 !== b) {
            var e = a.Pa(), f = a.wa();
            void 0 !== e && f && 0 < d ? a.animate({rotation: b, anchor: c, duration: d, easing: Ne}) : a.rotate(b, c)
        }
    }

    function Gg(a, b, c, d) {
        var e = a.Oa();
        b = a.constrainResolution(e, b, 0);
        if (c && void 0 !== b && b !== e) {
            var f = a.wa();
            c = $f(a, b, c);
            c = a.Jc(c);
            c = [(b * f[0] - e * c[0]) / (b - e), (b * f[1] - e * c[1]) / (b - e)]
        }
        Hg(a, b, c, d)
    }

    function Hg(a, b, c, d) {
        if (b) {
            var e = a.Oa(), f = a.wa();
            void 0 !== e && f && b !== e && d ? a.animate({
                resolution: b,
                anchor: c,
                duration: d,
                easing: Ne
            }) : (c && (c = $f(a, b, c), a.rb(c)), a.$c(b))
        }
    };
    function Ig(a) {
        a = a ? a : {};
        this.a = a.delta ? a.delta : 1;
        Eg.call(this, {handleEvent: Jg});
        this.f = void 0 !== a.duration ? a.duration : 250
    }

    v(Ig, Eg);
    function Jg(a) {
        var b = !1, c = a.originalEvent;
        if ("dblclick" == a.type) {
            b = a.coordinate;
            c = c.shiftKey ? -this.a : this.a;
            var d = a.map.$();
            Gg(d, c, b, this.f);
            a.preventDefault();
            b = !0
        }
        return !b
    };
    function Kg(a) {
        a = a.originalEvent;
        return a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey
    }

    function Lg(a) {
        a = a.originalEvent;
        return a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey
    }

    function Mg(a) {
        a = a.originalEvent;
        return 0 == a.button && !(od && pd && a.ctrlKey)
    }

    function Ng(a) {
        return "pointermove" == a.type
    }

    function Og(a) {
        return "singleclick" == a.type
    }

    function Pg(a) {
        a = a.originalEvent;
        return !a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey
    }

    function Qg(a) {
        a = a.originalEvent;
        return !a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey
    }

    function Rg(a) {
        a = a.originalEvent.target.tagName;
        return "INPUT" !== a && "SELECT" !== a && "TEXTAREA" !== a
    }

    function Sg(a) {
        wa(a.b, 56);
        return "mouse" == a.b.pointerType
    }

    function Tg(a) {
        a = a.b;
        return a.isPrimary && 0 === a.button
    };
    function Ug(a) {
        a = a ? a : {};
        Eg.call(this, {handleEvent: a.handleEvent ? a.handleEvent : Vg});
        this.Wj = a.handleDownEvent ? a.handleDownEvent : Re;
        this.xk = a.handleDragEvent ? a.handleDragEvent : sa;
        this.Dk = a.handleMoveEvent ? a.handleMoveEvent : sa;
        this.Ek = a.handleUpEvent ? a.handleUpEvent : Re;
        this.C = !1;
        this.sa = {};
        this.l = []
    }

    v(Ug, Eg);
    function Wg(a) {
        for (var b = a.length, c = 0, d = 0, e = 0; e < b; e++)c += a[e].clientX, d += a[e].clientY;
        return [c / b, d / b]
    }

    function Vg(a) {
        if (!(a instanceof Ed))return !0;
        var b = !1, c = a.type;
        if ("pointerdown" === c || "pointerdrag" === c || "pointerup" === c) {
            c = a.b;
            var d = c.pointerId.toString();
            "pointerup" == a.type ? delete this.sa[d] : "pointerdown" == a.type ? this.sa[d] = c : d in this.sa && (this.sa[d] = c);
            this.l = vb(this.sa)
        }
        this.C ? "pointerdrag" == a.type ? this.xk(a) : "pointerup" == a.type && (this.C = this.Ek(a) && 0 < this.l.length) : "pointerdown" == a.type ? (this.C = a = this.Wj(a), b = this.bd(a)) : "pointermove" == a.type && this.Dk(a);
        return !b
    }

    Ug.prototype.bd = function (a) {
        return a
    };
    function Xg(a) {
        Ug.call(this, {handleDownEvent: Yg, handleDragEvent: Zg, handleUpEvent: $g});
        a = a ? a : {};
        this.a = a.kinetic;
        this.f = null;
        this.s = a.condition ? a.condition : Pg;
        this.j = !1
    }

    v(Xg, Ug);
    function Zg(a) {
        var b = this.l, c = Wg(b);
        if (b.length == this.o) {
            if (this.a && this.a.b.push(c[0], c[1], Date.now()), this.f) {
                var d = this.f[0] - c[0], e = c[1] - this.f[1];
                a = a.map.$();
                var f = a.getState();
                d = [d, e];
                Ge(d, f.resolution);
                Fe(d, f.rotation);
                ze(d, f.center);
                d = a.Jc(d);
                a.rb(d)
            }
        } else this.a && Ag(this.a);
        this.f = c;
        this.o = b.length
    }

    function $g(a) {
        var b = a.map;
        a = b.$();
        if (0 === this.l.length) {
            if (!this.j && this.a && Bg(this.a)) {
                var c = this.a;
                c = (c.c - c.a) / c.i;
                var d = this.a.g, e = a.wa();
                e = b.Ha(e);
                b = b.Na([e[0] - c * Math.cos(d), e[1] - c * Math.sin(d)]);
                a.animate({center: a.Jc(b), duration: 500, easing: Ne})
            }
            Yf(a, 1, -1);
            return !1
        }
        this.a && Ag(this.a);
        this.f = null;
        return !0
    }

    function Yg(a) {
        if (0 < this.l.length && this.s(a)) {
            var b = a.map.$();
            this.f = null;
            this.C || Yf(b, 1, 1);
            Zf(b)[0] && b.rb(a.frameState.viewState.center);
            this.a && Ag(this.a);
            this.j = 1 < this.l.length;
            return !0
        }
        return !1
    }

    Xg.prototype.bd = Re;
    function ah(a) {
        a = a ? a : {};
        Ug.call(this, {handleDownEvent: bh, handleDragEvent: ch, handleUpEvent: dh});
        this.f = a.condition ? a.condition : Lg;
        this.a = void 0;
        this.j = void 0 !== a.duration ? a.duration : 250
    }

    v(ah, Ug);
    function ch(a) {
        if (Sg(a)) {
            var b = a.map, c = b.$();
            if (c.f.rotation !== te) {
                b = b.yb();
                a = a.pixel;
                a = Math.atan2(b[1] / 2 - a[1], a[0] - b[0] / 2);
                if (void 0 !== this.a) {
                    b = a - this.a;
                    var d = c.Pa();
                    Fg(c, d - b)
                }
                this.a = a
            }
        }
    }

    function dh(a) {
        if (!Sg(a))return !0;
        a = a.map.$();
        Yf(a, 1, -1);
        var b = a.Pa(), c = this.j;
        b = a.constrainRotation(b, 0);
        Fg(a, b, void 0, c);
        return !1
    }

    function bh(a) {
        return Sg(a) && Mg(a) && this.f(a) ? (Yf(a.map.$(), 1, 1), this.a = void 0, !0) : !1
    }

    ah.prototype.bd = Re;
    function eh(a) {
        this.Mc = null;
        this.a = document.createElement("div");
        this.a.style.position = "absolute";
        this.a.className = "ol-box " + a;
        this.g = this.c = this.b = null
    }

    v(eh, Pc);
    eh.prototype.la = function () {
        this.setMap(null)
    };
    function fh(a) {
        var b = a.c, c = a.g;
        a = a.a.style;
        a.left = Math.min(b[0], c[0]) + "px";
        a.top = Math.min(b[1], c[1]) + "px";
        a.width = Math.abs(c[0] - b[0]) + "px";
        a.height = Math.abs(c[1] - b[1]) + "px"
    }

    eh.prototype.setMap = function (a) {
        if (this.b) {
            this.b.s.removeChild(this.a);
            var b = this.a.style;
            b.left = b.top = b.width = b.height = "inherit"
        }
        (this.b = a) && this.b.s.appendChild(this.a)
    };
    function gh(a) {
        var b = a.c, c = a.g;
        b = [b, [b[0], c[1]], c, [c[0], b[1]]].map(a.b.Na, a.b);
        b[4] = b[0].slice();
        a.Mc ? a.Mc.na([b]) : a.Mc = new D([b])
    }

    eh.prototype.W = function () {
        return this.Mc
    };
    function hh(a) {
        Ug.call(this, {handleDownEvent: ih, handleDragEvent: jh, handleUpEvent: kh});
        a = a ? a : {};
        this.a = new eh(a.className || "ol-dragbox");
        this.s = void 0 !== a.minArea ? a.minArea : 64;
        this.f = null;
        this.D = a.condition ? a.condition : Qe;
        this.o = a.boxEndCondition ? a.boxEndCondition : lh
    }

    v(hh, Ug);
    function lh(a, b, c) {
        a = c[0] - b[0];
        b = c[1] - b[1];
        return a * a + b * b >= this.s
    }

    function jh(a) {
        if (Sg(a)) {
            var b = this.a, c = a.pixel;
            b.c = this.f;
            b.g = c;
            gh(b);
            fh(b);
            this.b(new mh(nh, a.coordinate, a))
        }
    }

    hh.prototype.W = function () {
        return this.a.W()
    };
    hh.prototype.j = sa;
    function kh(a) {
        if (!Sg(a))return !0;
        this.a.setMap(null);
        this.o(a, this.f, a.pixel) && (this.j(a), this.b(new mh(oh, a.coordinate, a)));
        return !1
    }

    function ih(a) {
        if (Sg(a) && Mg(a) && this.D(a)) {
            this.f = a.pixel;
            this.a.setMap(a.map);
            var b = this.a, c = this.f;
            b.c = this.f;
            b.g = c;
            gh(b);
            fh(b);
            this.b(new mh(ph, a.coordinate, a));
            return !0
        }
        return !1
    }

    var ph = "boxstart", nh = "boxdrag", oh = "boxend";

    function mh(a, b, c) {
        Rc.call(this, a);
        this.coordinate = b;
        this.mapBrowserEvent = c
    }

    v(mh, Rc);
    function qh(a) {
        a = a ? a : {};
        var b = a.condition ? a.condition : Qg;
        this.B = void 0 !== a.duration ? a.duration : 200;
        this.I = void 0 !== a.out ? a.out : !1;
        hh.call(this, {condition: b, className: a.className || "ol-dragzoom"})
    }

    v(qh, hh);
    qh.prototype.j = function () {
        var a = this.v, b = a.$(), c = a.yb(), d = this.W().G();
        if (this.I) {
            var e = b.jd(c);
            d = [a.Ha(fb(d)), a.Ha(hb(d))];
            a = Za(void 0);
            var f;
            var g = 0;
            for (f = d.length; g < f; ++g)Qa(a, d[g]);
            d = b.Le(a, c);
            rb(e, 1 / d);
            d = e
        }
        c = b.constrainResolution(b.Le(d, c));
        e = nb(d);
        e = b.Jc(e);
        b.animate({resolution: c, center: e, duration: this.B, easing: Ne})
    };
    function rh(a) {
        Eg.call(this, {handleEvent: th});
        a = a || {};
        this.a = function (a) {
            return Pg(a) && Rg(a)
        };
        this.f = a.condition ? a.condition : this.a;
        this.j = void 0 !== a.duration ? a.duration : 100;
        this.l = void 0 !== a.pixelDelta ? a.pixelDelta : 128
    }

    v(rh, Eg);
    function th(a) {
        var b = !1;
        if ("keydown" == a.type) {
            var c = a.originalEvent.keyCode;
            if (this.f(a) && (40 == c || 37 == c || 39 == c || 38 == c)) {
                b = a.map.$();
                var d = b.Oa() * this.l, e = 0, f = 0;
                40 == c ? f = -d : 37 == c ? e = -d : 39 == c ? e = d : f = d;
                d = [e, f];
                Fe(d, b.Pa());
                c = this.j;
                if (e = b.wa()) d = b.Jc([e[0] + d[0], e[1] + d[1]]), c ? b.animate({
                    duration: c,
                    easing: Pe,
                    center: d
                }) : b.rb(d);
                a.preventDefault();
                b = !0
            }
        }
        return !b
    };
    function uh(a) {
        Eg.call(this, {handleEvent: vh});
        a = a ? a : {};
        this.f = a.condition ? a.condition : Rg;
        this.a = a.delta ? a.delta : 1;
        this.j = void 0 !== a.duration ? a.duration : 100
    }

    v(uh, Eg);
    function vh(a) {
        var b = !1;
        if ("keydown" == a.type || "keypress" == a.type) {
            var c = a.originalEvent.charCode;
            !this.f(a) || 43 != c && 45 != c || (b = 43 == c ? this.a : -this.a, c = a.map.$(), Gg(c, b, void 0, this.j), a.preventDefault(), b = !0)
        }
        return !b
    };
    function wh(a) {
        Eg.call(this, {handleEvent: xh});
        a = a || {};
        this.j = 0;
        this.C = void 0 !== a.duration ? a.duration : 250;
        this.sa = void 0 !== a.timeout ? a.timeout : 80;
        this.D = void 0 !== a.useAnchor ? a.useAnchor : !0;
        this.T = a.constrainResolution || !1;
        this.a = null;
        this.o = this.l = this.s = this.f = void 0
    }

    v(wh, Eg);
    function xh(a) {
        var b = a.type;
        if ("wheel" !== b && "mousewheel" !== b)return !0;
        a.preventDefault();
        b = a.map;
        var c = a.originalEvent;
        this.D && (this.a = a.coordinate);
        if ("wheel" == a.type) {
            var d = c.deltaY;
            md && c.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (d /= qd);
            c.deltaMode === WheelEvent.DOM_DELTA_LINE && (d *= 40)
        } else"mousewheel" == a.type && (d = -c.wheelDeltaY, nd && (d /= 3));
        if (0 === d)return !1;
        a = Date.now();
        void 0 === this.f && (this.f = a);
        if (!this.l || 400 < a - this.f) this.l = 4 > Math.abs(d) ? yh : zh;
        if (this.l === yh) {
            b = b.$();
            this.o ? clearTimeout(this.o) :
                Yf(b, 1, 1);
            this.o = setTimeout(this.B.bind(this), 400);
            c = b.Oa() * Math.pow(2, d / 300);
            var e = b.i, f = b.a, g = 0;
            c < e ? (c = Math.max(c, e / 1.5), g = 1) : c > f && (c = Math.min(c, 1.5 * f), g = -1);
            if (this.a) {
                var h = $f(b, c, this.a);
                b.rb(b.Jc(h))
            }
            b.$c(c);
            0 === g && this.T && b.animate({
                resolution: b.constrainResolution(c, 0 < d ? -1 : 1),
                easing: Ne,
                anchor: this.a,
                duration: this.C
            });
            0 < g ? b.animate({
                resolution: e,
                easing: Ne,
                anchor: this.a,
                duration: 500
            }) : 0 > g && b.animate({resolution: f, easing: Ne, anchor: this.a, duration: 500});
            this.f = a;
            return !1
        }
        this.j += d;
        d = Math.max(this.sa -
            (a - this.f), 0);
        clearTimeout(this.s);
        this.s = setTimeout(this.I.bind(this, b), d);
        return !1
    }

    wh.prototype.B = function () {
        this.o = void 0;
        Yf(this.v.$(), 1, -1)
    };
    wh.prototype.I = function (a) {
        a = a.$();
        a.Oc() && a.kd();
        Gg(a, -Da(this.j, -1, 1), this.a, this.C);
        this.l = void 0;
        this.j = 0;
        this.a = null;
        this.s = this.f = void 0
    };
    wh.prototype.U = function (a) {
        this.D = a;
        a || (this.a = null)
    };
    var yh = "trackpad", zh = "wheel";

    function Ah(a) {
        Ug.call(this, {handleDownEvent: Bh, handleDragEvent: Ch, handleUpEvent: Dh});
        a = a || {};
        this.f = null;
        this.j = void 0;
        this.a = !1;
        this.o = 0;
        this.D = void 0 !== a.threshold ? a.threshold : .3;
        this.s = void 0 !== a.duration ? a.duration : 250
    }

    v(Ah, Ug);
    function Ch(a) {
        var b = 0, c = this.l[0], d = this.l[1];
        c = Math.atan2(d.clientY - c.clientY, d.clientX - c.clientX);
        void 0 !== this.j && (b = c - this.j, this.o += b, !this.a && Math.abs(this.o) > this.D && (this.a = !0));
        this.j = c;
        a = a.map;
        c = a.$();
        if (c.f.rotation !== te) {
            d = a.a.getBoundingClientRect();
            var e = Wg(this.l);
            e[0] -= d.left;
            e[1] -= d.top;
            this.f = a.Na(e);
            this.a && (d = c.Pa(), a.render(), Fg(c, d + b, this.f))
        }
    }

    function Dh(a) {
        if (2 > this.l.length) {
            a = a.map.$();
            Yf(a, 1, -1);
            if (this.a) {
                var b = a.Pa(), c = this.f, d = this.s;
                b = a.constrainRotation(b, 0);
                Fg(a, b, c, d)
            }
            return !1
        }
        return !0
    }

    function Bh(a) {
        return 2 <= this.l.length ? (a = a.map, this.f = null, this.j = void 0, this.a = !1, this.o = 0, this.C || Yf(a.$(), 1, 1), !0) : !1
    }

    Ah.prototype.bd = Re;
    function Eh(a) {
        Ug.call(this, {handleDownEvent: Fh, handleDragEvent: Gh, handleUpEvent: Hh});
        a = a ? a : {};
        this.o = a.constrainResolution || !1;
        this.f = null;
        this.s = void 0 !== a.duration ? a.duration : 400;
        this.a = void 0;
        this.j = 1
    }

    v(Eh, Ug);
    function Gh(a) {
        var b = 1, c = this.l[0], d = this.l[1], e = c.clientX - d.clientX;
        c = c.clientY - d.clientY;
        e = Math.sqrt(e * e + c * c);
        void 0 !== this.a && (b = this.a / e);
        this.a = e;
        a = a.map;
        e = a.$();
        d = e.Oa();
        var f = e.a, g = e.i;
        c = d * b;
        c > f ? (b = f / d, c = f) : c < g && (b = g / d, c = g);
        1 != b && (this.j = b);
        b = a.a.getBoundingClientRect();
        d = Wg(this.l);
        d[0] -= b.left;
        d[1] -= b.top;
        this.f = a.Na(d);
        a.render();
        Hg(e, c, this.f)
    }

    function Hh(a) {
        if (2 > this.l.length) {
            a = a.map.$();
            Yf(a, 1, -1);
            var b = a.Oa();
            if (this.o || b < a.i || b > a.a) {
                var c = this.f, d = this.s;
                b = a.constrainResolution(b, 0, this.j - 1);
                Hg(a, b, c, d)
            }
            return !1
        }
        return !0
    }

    function Fh(a) {
        return 2 <= this.l.length ? (a = a.map, this.f = null, this.a = void 0, this.j = 1, this.C || Yf(a.$(), 1, 1), !0) : !1
    }

    Eh.prototype.bd = Re;
    function Ih(a) {
        a = a ? a : {};
        var b = new ad, c = new zg(-.005, .05, 100);
        (void 0 !== a.altShiftDragRotate ? a.altShiftDragRotate : 1) && b.push(new ah);
        (void 0 !== a.doubleClickZoom ? a.doubleClickZoom : 1) && b.push(new Ig({
            delta: a.zoomDelta,
            duration: a.zoomDuration
        }));
        (void 0 !== a.dragPan ? a.dragPan : 1) && b.push(new Xg({kinetic: c}));
        (void 0 !== a.pinchRotate ? a.pinchRotate : 1) && b.push(new Ah);
        (void 0 !== a.pinchZoom ? a.pinchZoom : 1) && b.push(new Eh({
            constrainResolution: a.constrainResolution,
            duration: a.zoomDuration
        }));
        if (void 0 !== a.keyboard ?
                a.keyboard : 1) b.push(new rh), b.push(new uh({delta: a.zoomDelta, duration: a.zoomDuration}));
        (void 0 !== a.mouseWheelZoom ? a.mouseWheelZoom : 1) && b.push(new wh({
            constrainResolution: a.constrainResolution,
            duration: a.zoomDuration
        }));
        (void 0 !== a.shiftDragZoom ? a.shiftDragZoom : 1) && b.push(new qh({duration: a.zoomDuration}));
        return b
    };
    function Jh(a, b, c, d, e) {
        Rc.call(this, a);
        this.vectorContext = b;
        this.frameState = c;
        this.context = d;
        this.glContext = e
    }

    v(Jh, Rc);
    var Kh = [0, 0, 0, 1], Lh = [], Mh = [0, 0, 0, 1];

    function Nh(a, b, c, d) {
        0 !== b && (a.translate(c, d), a.rotate(b), a.translate(-c, -d))
    };
    var Oh = /^#(?:[0-9a-f]{3}){1,2}$/i, Ph = /^([a-z]*)$/i;

    function Qh(a) {
        return Array.isArray(a) ? a : Rh(a)
    }

    function Sh(a) {
        if ("string" !== typeof a) {
            var b = a[0];
            b != (b | 0) && (b = b + .5 | 0);
            var c = a[1];
            c != (c | 0) && (c = c + .5 | 0);
            var d = a[2];
            d != (d | 0) && (d = d + .5 | 0);
            a = "rgba(" + b + "," + c + "," + d + "," + (void 0 === a[3] ? 1 : a[3]) + ")"
        }
        return a
    }

    var Rh = function () {
        var a = {}, b = 0;
        return function (c) {
            if (a.hasOwnProperty(c))var d = a[c]; else {
                if (1024 <= b) {
                    d = 0;
                    for (var e in a)0 === (d++ & 3) && (delete a[e], --b)
                }
                d = c;
                Ph.exec(d) && (e = document.createElement("div"), e.style.color = d, document.body.appendChild(e), d = getComputedStyle(e).color, document.body.removeChild(e));
                if (Oh.exec(d)) {
                    var f = d.length - 1;
                    wa(3 == f || 6 == f, 54);
                    var g = 3 == f ? 1 : 2;
                    f = parseInt(d.substr(1 + 0 * g, g), 16);
                    e = parseInt(d.substr(1 + 1 * g, g), 16);
                    d = parseInt(d.substr(1 + 2 * g, g), 16);
                    1 == g && (f = (f << 4) + f, e = (e << 4) + e, d = (d <<
                        4) + d);
                    f = [f, e, d, 1]
                } else 0 == d.indexOf("rgba(") ? (d = d.slice(5, -1).split(",").map(Number), f = Th(d)) : 0 == d.indexOf("rgb(") ? (d = d.slice(4, -1).split(",").map(Number), d.push(1), f = Th(d)) : wa(!1, 14);
                d = f;
                a[c] = d;
                ++b
            }
            return d
        }
    }();

    function Th(a) {
        var b = [];
        b[0] = Da(a[0] + .5 | 0, 0, 255);
        b[1] = Da(a[1] + .5 | 0, 0, 255);
        b[2] = Da(a[2] + .5 | 0, 0, 255);
        b[3] = Da(a[3], 0, 1);
        return b
    };
    function Uh(a) {
        return "string" === typeof a || a instanceof CanvasPattern || a instanceof CanvasGradient ? a : Sh(a)
    };
    function Vh() {
    }

    k = Vh.prototype;
    k.Fh = function () {
    };
    k.Eb = function () {
    };
    k.zd = function () {
    };
    k.$b = function () {
    };
    k.Ge = function () {
    };
    k.He = function () {
    };
    k.pc = function () {
    };
    k.qc = function () {
    };
    k.rc = function () {
    };
    k.sc = function () {
    };
    k.tc = function () {
    };
    k.uc = function () {
    };
    k.Rb = function () {
    };
    k.La = function () {
    };
    k.Wb = function () {
    };
    k.hb = function () {
    };
    function Wh(a, b, c, d, e) {
        this.g = a;
        this.f = b;
        this.c = c;
        this.O = d;
        this.Kb = e;
        this.N = this.b = this.a = this.Ua = this.T = this.I = null;
        this.sa = this.U = this.v = this.B = this.D = this.C = 0;
        this.fa = !1;
        this.i = this.kb = 0;
        this.ia = !1;
        this.qa = 0;
        this.pa = "";
        this.nc = this.ta = 0;
        this.Va = !1;
        this.l = this.ab = 0;
        this.ra = this.o = this.j = null;
        this.s = [];
        this.tb = Ve()
    }

    v(Wh, Vh);
    function Xh(a, b, c) {
        if (a.N) {
            b = Se(b, 0, c, 2, a.O, a.s);
            c = a.g;
            var d = a.tb, e = c.globalAlpha;
            1 != a.v && (c.globalAlpha = e * a.v);
            var f = a.kb;
            a.fa && (f += a.Kb);
            var g;
            var h = 0;
            for (g = b.length; h < g; h += 2) {
                var l = b[h] - a.C, m = b[h + 1] - a.D;
                a.ia && (l = Math.round(l), m = Math.round(m));
                if (0 !== f || 1 != a.i) {
                    var n = l + a.C, p = m + a.D;
                    df(d, n, p, a.i, a.i, f, -n, -p);
                    c.setTransform.apply(c, d)
                }
                c.drawImage(a.N, a.U, a.sa, a.qa, a.B, l, m, a.qa, a.B)
            }
            0 === f && 1 == a.i || c.setTransform(1, 0, 0, 1, 0, 0);
            1 != a.v && (c.globalAlpha = e)
        }
    }

    function Yh(a, b, c, d) {
        var e = 0;
        if (a.ra && "" !== a.pa) {
            a.j && Zh(a, a.j);
            a.o && $h(a, a.o);
            var f = a.ra, g = a.g, h = a.Ua, l = f.textAlign ? f.textAlign : "center";
            h ? (h.font != f.font && (h.font = g.font = f.font), h.textAlign != l && (h.textAlign = l), h.textBaseline != f.textBaseline && (h.textBaseline = g.textBaseline = f.textBaseline)) : (g.font = f.font, g.textAlign = l, g.textBaseline = f.textBaseline, a.Ua = {
                font: f.font,
                textAlign: l,
                textBaseline: f.textBaseline
            });
            b = Se(b, e, c, d, a.O, a.s);
            f = a.g;
            g = a.ab;
            for (a.Va && (g += a.Kb); e < c; e += d) {
                h = b[e] + a.ta;
                l = b[e + 1] + a.nc;
                if (0 !== g || 1 != a.l) {
                    var m = df(a.tb, h, l, a.l, a.l, g, -h, -l);
                    f.setTransform.apply(f, m)
                }
                a.o && f.strokeText(a.pa, h, l);
                a.j && f.fillText(a.pa, h, l)
            }
            0 === g && 1 == a.l || f.setTransform(1, 0, 0, 1, 0, 0)
        }
    }

    function ai(a, b, c, d, e, f) {
        var g = a.g;
        a = Se(b, c, d, e, a.O, a.s);
        g.moveTo(a[0], a[1]);
        b = a.length;
        f && (b -= 2);
        for (c = 2; c < b; c += 2)g.lineTo(a[c], a[c + 1]);
        f && g.closePath();
        return d
    }

    function bi(a, b, c, d, e) {
        var f;
        var g = 0;
        for (f = d.length; g < f; ++g)c = ai(a, b, c, d[g], e, !0);
        return c
    }

    k = Wh.prototype;
    k.$b = function (a) {
        if (qb(this.c, a.G())) {
            if (this.a || this.b) {
                this.a && Zh(this, this.a);
                this.b && $h(this, this.b);
                var b = this.O;
                var c = this.s, d = a.ca();
                b = d ? Se(d, 0, d.length, a.oa(), b, c) : null;
                c = b[2] - b[0];
                d = b[3] - b[1];
                c = Math.sqrt(c * c + d * d);
                d = this.g;
                d.beginPath();
                d.arc(b[0], b[1], c, 0, 2 * Math.PI);
                this.a && d.fill();
                this.b && d.stroke()
            }
            "" !== this.pa && Yh(this, a.wa(), 2, 2)
        }
    };
    k.zd = function (a) {
        this.La(a.Ca(), a.Da());
        this.Wb(a.Y());
        this.hb(a.Ia())
    };
    k.Eb = function (a) {
        switch (a.S()) {
            case "Point":
                this.tc(a);
                break;
            case "LineString":
                this.pc(a);
                break;
            case "Polygon":
                this.uc(a);
                break;
            case "MultiPoint":
                this.rc(a);
                break;
            case "MultiLineString":
                this.qc(a);
                break;
            case "MultiPolygon":
                this.sc(a);
                break;
            case "GeometryCollection":
                this.He(a);
                break;
            case "Circle":
                this.$b(a)
        }
    };
    k.Ge = function (a, b) {
        (a = (0, b.Za)(a)) && qb(this.c, a.G()) && (this.zd(b), this.Eb(a))
    };
    k.He = function (a) {
        a = a.a;
        var b;
        var c = 0;
        for (b = a.length; c < b; ++c)this.Eb(a[c])
    };
    k.tc = function (a) {
        var b = a.ca();
        a = a.oa();
        this.N && Xh(this, b, b.length);
        "" !== this.pa && Yh(this, b, b.length, a)
    };
    k.rc = function (a) {
        var b = a.ca();
        a = a.oa();
        this.N && Xh(this, b, b.length);
        "" !== this.pa && Yh(this, b, b.length, a)
    };
    k.pc = function (a) {
        if (qb(this.c, a.G())) {
            if (this.b) {
                $h(this, this.b);
                var b = this.g, c = a.ca();
                b.beginPath();
                ai(this, c, 0, c.length, a.oa(), !1);
                b.stroke()
            }
            "" !== this.pa && (a = ci(a), Yh(this, a, 2, 2))
        }
    };
    k.qc = function (a) {
        var b = a.G();
        if (qb(this.c, b)) {
            if (this.b) {
                $h(this, this.b);
                b = this.g;
                var c = a.ca(), d = 0, e = a.lb(), f = a.oa();
                b.beginPath();
                var g;
                var h = 0;
                for (g = e.length; h < g; ++h)d = ai(this, c, d, e[h], f, !1);
                b.stroke()
            }
            "" !== this.pa && (a = di(a), Yh(this, a, a.length, 2))
        }
    };
    k.uc = function (a) {
        if (qb(this.c, a.G())) {
            if (this.b || this.a) {
                this.a && Zh(this, this.a);
                this.b && $h(this, this.b);
                var b = this.g;
                b.beginPath();
                bi(this, a.Ub(), 0, a.lb(), a.oa());
                this.a && b.fill();
                this.b && b.stroke()
            }
            "" !== this.pa && (a = Qf(a), Yh(this, a, 2, 2))
        }
    };
    k.sc = function (a) {
        if (qb(this.c, a.G())) {
            if (this.b || this.a) {
                this.a && Zh(this, this.a);
                this.b && $h(this, this.b);
                var b = this.g, c = ei(a), d = 0, e = a.md(), f = a.oa(), g;
                b.beginPath();
                var h = 0;
                for (g = e.length; h < g; ++h)d = bi(this, c, d, e[h], f);
                this.a && b.fill();
                this.b && b.stroke()
            }
            "" !== this.pa && (a = fi(a), Yh(this, a, a.length, 2))
        }
    };
    function Zh(a, b) {
        var c = a.g, d = a.I;
        d ? d.fillStyle != b.fillStyle && (d.fillStyle = c.fillStyle = b.fillStyle) : (c.fillStyle = b.fillStyle, a.I = {fillStyle: b.fillStyle})
    }

    function $h(a, b) {
        var c = a.g, d = a.T;
        d ? (d.lineCap != b.lineCap && (d.lineCap = c.lineCap = b.lineCap), rd && (ma(d.lineDash, b.lineDash) || c.setLineDash(d.lineDash = b.lineDash), d.lineDashOffset != b.lineDashOffset && (d.lineDashOffset = c.lineDashOffset = b.lineDashOffset)), d.lineJoin != b.lineJoin && (d.lineJoin = c.lineJoin = b.lineJoin), d.lineWidth != b.lineWidth && (d.lineWidth = c.lineWidth = b.lineWidth), d.miterLimit != b.miterLimit && (d.miterLimit = c.miterLimit = b.miterLimit), d.strokeStyle != b.strokeStyle && (d.strokeStyle = c.strokeStyle = b.strokeStyle)) :
            (c.lineCap = b.lineCap, rd && (c.setLineDash(b.lineDash), c.lineDashOffset = b.lineDashOffset), c.lineJoin = b.lineJoin, c.lineWidth = b.lineWidth, c.miterLimit = b.miterLimit, c.strokeStyle = b.strokeStyle, a.T = {
                lineCap: b.lineCap,
                lineDash: b.lineDash,
                lineDashOffset: b.lineDashOffset,
                lineJoin: b.lineJoin,
                lineWidth: b.lineWidth,
                miterLimit: b.miterLimit,
                strokeStyle: b.strokeStyle
            })
    }

    k.La = function (a, b) {
        a ? (a = a.b, this.a = {fillStyle: Uh(a ? a : Kh)}) : this.a = null;
        if (b) {
            a = b.b;
            var c = b.f, d = b.g, e = b.i, f = b.j, g = b.c;
            b = b.l;
            this.b = {
                lineCap: void 0 !== c ? c : "round",
                lineDash: d ? d : Lh,
                lineDashOffset: e ? e : 0,
                lineJoin: void 0 !== f ? f : "round",
                lineWidth: this.f * (void 0 !== g ? g : 1),
                miterLimit: void 0 !== b ? b : 10,
                strokeStyle: Uh(a ? a : Mh)
            }
        } else this.b = null
    };
    k.Wb = function (a) {
        if (a) {
            var b = a.Nc(), c = a.Y(1), d = a.Uc(), e = a.jc();
            this.C = b[0];
            this.D = b[1];
            this.B = e[1];
            this.N = c;
            this.v = a.i;
            this.U = d[0];
            this.sa = d[1];
            this.fa = a.o;
            this.kb = a.f;
            this.i = a.a * this.f;
            this.ia = a.v;
            this.qa = e[0]
        } else this.N = null
    };
    k.hb = function (a) {
        if (a) {
            var b = a.Ca();
            b ? (b = b.b, this.j = {fillStyle: Uh(b ? b : Kh)}) : this.j = null;
            var c = a.Da();
            if (c) {
                b = c.b;
                var d = c.f, e = c.g, f = c.i, g = c.j, h = c.c;
                c = c.l;
                this.o = {
                    lineCap: void 0 !== d ? d : "round",
                    lineDash: e ? e : Lh,
                    lineDashOffset: f ? f : 0,
                    lineJoin: void 0 !== g ? g : "round",
                    lineWidth: void 0 !== h ? h : 1,
                    miterLimit: void 0 !== c ? c : 10,
                    strokeStyle: Uh(b ? b : Mh)
                }
            } else this.o = null;
            b = a.a;
            d = a.g;
            e = a.c;
            f = a.l;
            g = a.i;
            h = a.b;
            c = a.Ia();
            var l = a.f;
            a = a.j;
            this.ra = {
                font: void 0 !== b ? b : "10px sans-serif",
                textAlign: void 0 !== l ? l : "center",
                textBaseline: void 0 !==
                a ? a : "middle"
            };
            this.pa = void 0 !== c ? c : "";
            this.ta = void 0 !== d ? this.f * d : 0;
            this.nc = void 0 !== e ? this.f * e : 0;
            this.Va = void 0 !== f ? f : !1;
            this.ab = void 0 !== g ? g : 0;
            this.l = this.f * (void 0 !== h ? h : 1)
        } else this.pa = ""
    };
    function gi(a) {
        Vc.call(this);
        this.a = a
    }

    v(gi, Vc);
    gi.prototype.Fa = sa;
    gi.prototype.ef = Re;
    gi.prototype.Sf = function (a, b, c) {
        return function (d, e) {
            return hi(a, b, d, e, function (a) {
                c[d] || (c[d] = {});
                c[d][a.Ba.toString()] = a
            })
        }
    };
    gi.prototype.sa = function (a) {
        2 === a.target.getState() && ii(this)
    };
    function ji(a, b) {
        var c = b.getState();
        2 != c && 3 != c && z(b, "change", a.sa, a);
        0 == c && (b.load(), c = b.getState());
        return 2 == c
    }

    function ii(a) {
        var b = a.a;
        b.Tb() && "ready" == b.jg() && a.u()
    }

    function ki(a, b) {
        b.Yi() && a.postRenderFunctions.push(function (a, b, e) {
            b = w(a).toString();
            b in e.usedTiles && a.ld(e.viewState.projection, e.usedTiles[b])
        }.bind(null, b))
    }

    function li(a, b) {
        if (b) {
            var c;
            var d = 0;
            for (c = b.length; d < c; ++d) {
                var e = b[d];
                a[w(e).toString()] = e
            }
        }
    }

    function mi(a, b) {
        b = b.D;
        void 0 !== b && ("string" === typeof b ? a.logos[b] = "" : b && (wa("string" == typeof b.href, 44), wa("string" == typeof b.src, 45), a.logos[b.src] = b.href))
    }

    function ni(a, b, c, d) {
        b = w(b).toString();
        c = c.toString();
        b in a ? c in a[b] ? (a = a[b][c], d.ba < a.ba && (a.ba = d.ba), d.da > a.da && (a.da = d.da), d.ea < a.ea && (a.ea = d.ea), d.ga > a.ga && (a.ga = d.ga)) : a[b][c] = d : (a[b] = {}, a[b][c] = d)
    }

    function oi(a, b, c, d, e, f, g, h, l, m) {
        var n = w(b).toString();
        n in a.wantedTiles || (a.wantedTiles[n] = {});
        var p = a.wantedTiles[n];
        a = a.tileQueue;
        var q = c.minZoom, r, u, x;
        for (x = g; x >= q; --x) {
            var B = tc(c, f, x, B);
            var A = c.Qa(x);
            for (r = B.ba; r <= B.da; ++r)for (u = B.ea; u <= B.ga; ++u)if (g - x <= h) {
                var y = b.Tc(x, r, u, d, e);
                0 == y.getState() && (p[y.fb()] = !0, y.fb() in a.a || a.i([y, n, yc(c, y.Ba), A]));
                l && l.call(m, y)
            } else b.jh(x, r, u, e)
        }
    };
    function pi(a) {
        gi.call(this, a);
        this.T = Ve()
    }

    v(pi, gi);
    function qi(a, b, c) {
        var d = b.pixelRatio, e = b.size[0] * d, f = b.size[1] * d, g = b.viewState.rotation, h = ib(c), l = hb(c),
            m = gb(c);
        c = fb(c);
        $e(b.coordinateToPixelTransform, h);
        $e(b.coordinateToPixelTransform, l);
        $e(b.coordinateToPixelTransform, m);
        $e(b.coordinateToPixelTransform, c);
        a.save();
        Nh(a, -g, e / 2, f / 2);
        a.beginPath();
        a.moveTo(h[0] * d, h[1] * d);
        a.lineTo(l[0] * d, l[1] * d);
        a.lineTo(m[0] * d, m[1] * d);
        a.lineTo(c[0] * d, c[1] * d);
        a.clip();
        Nh(a, g, e / 2, f / 2)
    }

    function ri(a, b, c, d, e) {
        var f = a.a;
        if (Uc(f, b)) {
            var g = d.size[0] * d.pixelRatio, h = d.size[1] * d.pixelRatio, l = d.viewState.rotation;
            Nh(c, -l, g / 2, h / 2);
            a = e ? e : si(a, d, 0);
            f.b(new Jh(b, new Wh(c, d.pixelRatio, d.extent, a, d.viewState.rotation), d, c, null));
            Nh(c, l, g / 2, h / 2)
        }
    }

    pi.prototype.o = function (a, b, c, d) {
        if (this.Fa(a, b, 0, Qe, this))return c.call(d, this.a, null)
    };
    pi.prototype.qf = function (a, b, c, d) {
        ri(this, "postcompose", a, b, d)
    };
    function si(a, b, c) {
        var d = b.viewState, e = b.pixelRatio, f = e / d.resolution;
        return df(a.T, e * b.size[0] / 2, e * b.size[1] / 2, f, -f, -d.rotation, -d.center[0] + c, -d.center[1])
    };
    function vi(a) {
        pi.call(this, a);
        this.l = Ve();
        this.j = null
    }

    v(vi, pi);
    vi.prototype.v = function (a, b, c) {
        ri(this, "precompose", c, a, void 0);
        var d = this.Y();
        if (d) {
            var e = b.extent, f = void 0 !== e && !Wa(e, a.extent) && qb(e, a.extent);
            f && qi(c, a, e);
            e = this.s();
            var g = c.globalAlpha;
            c.globalAlpha = b.opacity;
            c.drawImage(d, 0, 0, +d.width, +d.height, Math.round(e[4]), Math.round(e[5]), Math.round(d.width * e[0]), Math.round(d.height * e[3]));
            c.globalAlpha = g;
            f && c.restore()
        }
        this.qf(c, a, b)
    };
    vi.prototype.Fa = function (a, b, c, d, e) {
        var f = this.a;
        return f.ja().Fa(a, b.viewState.resolution, b.viewState.rotation, c, b.skippedFeatureUids, function (a) {
            return d.call(e, a, f)
        })
    };
    vi.prototype.o = function (a, b, c, d) {
        if (this.Y()) {
            if (this.a.ja().Fa !== sa)return pi.prototype.o.apply(this, arguments);
            var e = $e(this.l, a.slice());
            Ge(e, b.viewState.resolution / this.i);
            this.j || (this.j = eg(1, 1));
            this.j.clearRect(0, 0, 1, 1);
            this.j.drawImage(this.Y(), e[0], e[1], 1, 1, 0, 0, 1, 1);
            e = this.j.getImageData(0, 0, 1, 1).data;
            if (0 < e[3])return c.call(d, this.a, e)
        }
    };
    function wi(a) {
        vi.call(this, a);
        this.N = null;
        this.c = Ve()
    }

    v(wi, vi);
    wi.handles = function (a, b) {
        return "canvas" === a && "IMAGE" === b.S()
    };
    wi.create = function (a, b) {
        return new wi(b)
    };
    wi.prototype.Y = function () {
        return this.N ? this.N.Y() : null
    };
    wi.prototype.s = function () {
        return this.c
    };
    wi.prototype.Ad = function (a, b) {
        var c = a.pixelRatio, d = a.size, e = a.viewState, f = e.center, g = e.resolution, h = this.a.ja(),
            l = a.viewHints, m = a.extent;
        void 0 !== b.extent && (m = pb(m, b.extent));
        l[0] || l[1] || kb(m) || (b = h.Y(m, g, c, e.projection)) && ji(this, b) && (this.N = b);
        if (this.N) {
            b = this.N;
            m = b.G();
            e = b.resolution;
            l = b.a;
            var n = c * e / (g * l);
            m = df(this.c, c * d[0] / 2, c * d[1] / 2, n, n, 0, l * (m[0] - f[0]) / e, l * (f[1] - m[3]) / e);
            df(this.l, c * d[0] / 2 - m[4], c * d[1] / 2 - m[5], c / g, -c / g, 0, -f[0], -f[1]);
            li(a.attributions, b.c);
            mi(a, h);
            this.i = e * c / l
        }
        return !!this.N
    };
    function xi(a) {
        var b = tb({}, a);
        delete b.source;
        hg.call(this, b);
        this.s = this.o = this.l = null;
        a.map && this.setMap(a.map);
        z(this, Yc("source"), this.dm, this);
        this.ad(a.source ? a.source : null)
    }

    v(xi, hg);
    function yi(a, b) {
        return a.visible && b >= a.minResolution && b < a.maxResolution
    }

    k = xi.prototype;
    k.fg = function (a) {
        a = a ? a : [];
        a.push(ig(this));
        return a
    };
    k.ja = function () {
        return this.get("source") || null
    };
    k.jg = function () {
        var a = this.ja();
        return a ? a.getState() : "undefined"
    };
    k.eo = function () {
        this.u()
    };
    k.dm = function () {
        this.s && (Hc(this.s), this.s = null);
        var a = this.ja();
        a && (this.s = z(a, "change", this.eo, this));
        this.u()
    };
    k.setMap = function (a) {
        this.l && (Hc(this.l), this.l = null);
        a || this.u();
        this.o && (Hc(this.o), this.o = null);
        a && (this.l = z(a, "precompose", function (a) {
            var b = ig(this);
            b.Ve = !1;
            b.zIndex = Infinity;
            a.frameState.layerStatesArray.push(b);
            a.frameState.layerStates[w(this)] = b
        }, this), this.o = z(this, "change", a.render, a), this.u())
    };
    k.ad = function (a) {
        this.set("source", a)
    };
    function zi() {
        this.b = {};
        this.a = 0
    }

    zi.prototype.clear = function () {
        this.b = {};
        this.a = 0
    };
    zi.prototype.get = function (a, b, c) {
        a = b + ":" + a + ":" + (c ? Sh(c) : "null");
        return a in this.b ? this.b[a] : null
    };
    zi.prototype.set = function (a, b, c, d) {
        this.b[b + ":" + a + ":" + (c ? Sh(c) : "null")] = d;
        ++this.a
    };
    var Ai = new zi;

    function Bi(a, b) {
        this.j = b;
        this.c = {};
        this.o = {}
    }

    v(Bi, Pc);
    function Ci(a) {
        var b = a.viewState, c = a.coordinateToPixelTransform, d = a.pixelToCoordinateTransform;
        df(c, a.size[0] / 2, a.size[1] / 2, 1 / b.resolution, -1 / b.resolution, -b.rotation, -b.center[0], -b.center[1]);
        ef(Ze(d, c))
    }

    k = Bi.prototype;
    k.la = function () {
        for (var a in this.c)Qc(this.c[a])
    };
    function Di() {
        if (32 < Ai.a) {
            var a = 0, b;
            for (b in Ai.b) {
                var c = Ai.b[b];
                0 !== (a++ & 3) || Uc(c) || (delete Ai.b[b], --Ai.a)
            }
        }
    }

    k.Fa = function (a, b, c, d, e, f, g) {
        function h(a, c) {
            var f = w(a).toString(), g = b.layerStates[w(c)].Ve;
            if (!(f in b.skippedFeatureUids) || g)return d.call(e, a, g ? c : null)
        }

        var l, m = b.viewState, n = m.resolution, p = m.projection;
        m = a;
        if (p.g) {
            p = p.G();
            var q = lb(p), r = a[0];
            if (r < p[0] || r > p[2]) m = [r + q * Math.ceil((p[0] - r) / q), a[1]]
        }
        p = b.layerStatesArray;
        for (q = p.length - 1; 0 <= q; --q) {
            var u = p[q];
            r = u.layer;
            if (yi(u, n) && f.call(g, r) && (u = Ei(this, r), r.ja() && (l = u.Fa(r.ja().C ? m : a, b, c, h, e)), l))return l
        }
    };
    k.Si = function (a, b, c, d, e) {
        return void 0 !== this.Fa(a, b, c, Qe, this, d, e)
    };
    function Ei(a, b) {
        var c = w(b).toString();
        if (c in a.c)return a.c[c];
        for (var d, e = a.S(), f = 0, g = mg.length; f < g; ++f) {
            var h = mg[f];
            if (h.handles(e, b)) {
                d = h.create(a, b);
                break
            }
        }
        if (d) a.c[c] = d, a.o[c] = z(d, "change", a.Ol, a); else throw Error("Unable to create renderer for layer: " + b.S());
        return d
    }

    k.Ol = function () {
        this.j.render()
    };
    k.ah = sa;
    k.Wp = function (a, b) {
        for (var c in this.c)if (!(b && c in b.layerStates)) {
            a = c;
            var d = this.c[a];
            delete this.c[a];
            Hc(this.o[a]);
            delete this.o[a];
            Qc(d)
        }
    };
    function Fi(a, b) {
        for (var c in a.c)if (!(c in b.layerStates)) {
            b.postRenderFunctions.push(a.Wp.bind(a));
            break
        }
    }

    function oa(a, b) {
        return a.zIndex - b.zIndex
    };
    function Gi(a, b) {
        Bi.call(this, 0, b);
        this.g = eg();
        this.b = this.g.canvas;
        this.b.style.width = "100%";
        this.b.style.height = "100%";
        this.b.style.display = "block";
        this.b.className = "ol-unselectable";
        a.insertBefore(this.b, a.childNodes[0] || null);
        this.a = !0;
        this.i = Ve()
    }

    v(Gi, Bi);
    Gi.handles = function (a) {
        return "canvas" === a
    };
    Gi.create = function (a, b) {
        return new Gi(a, b)
    };
    function Hi(a, b, c) {
        var d = a.j, e = a.g;
        if (Uc(d, b)) {
            var f = c.extent, g = c.pixelRatio, h = c.viewState.rotation, l = c.viewState,
                m = c.pixelRatio / l.resolution;
            a = df(a.i, a.b.width / 2, a.b.height / 2, m, -m, -l.rotation, -l.center[0], -l.center[1]);
            d.b(new Jh(b, new Wh(e, g, f, a, h), c, e, null))
        }
    }

    Gi.prototype.S = function () {
        return "canvas"
    };
    Gi.prototype.ah = function (a) {
        if (a) {
            var b = this.g, c = a.pixelRatio, d = Math.round(a.size[0] * c), e = Math.round(a.size[1] * c);
            this.b.width != d || this.b.height != e ? (this.b.width = d, this.b.height = e) : b.clearRect(0, 0, d, e);
            c = a.viewState.rotation;
            Ci(a);
            Hi(this, "precompose", a);
            var f = a.layerStatesArray;
            na(f);
            c && (b.save(), Nh(b, c, d / 2, e / 2));
            d = a.viewState.resolution;
            var g;
            e = 0;
            for (g = f.length; e < g; ++e) {
                var h = f[e];
                var l = h.layer;
                l = Ei(this, l);
                yi(h, d) && "ready" == h.Oj && l.Ad(a, h) && l.v(a, h, b)
            }
            c && b.restore();
            Hi(this, "postcompose", a);
            this.a ||
            (this.b.style.display = "", this.a = !0);
            Fi(this, a);
            a.postRenderFunctions.push(Di)
        } else this.a && (this.b.style.display = "none", this.a = !1)
    };
    Gi.prototype.Ri = function (a, b, c, d, e, f) {
        var g = b.viewState.resolution, h = b.layerStatesArray, l = h.length;
        a = $e(b.pixelToCoordinateTransform, a.slice());
        for (--l; 0 <= l; --l) {
            var m = h[l];
            var n = m.layer;
            if (yi(m, g) && e.call(f, n) && (m = Ei(this, n).o(a, b, c, d)))return m
        }
    };
    function Ii(a) {
        vi.call(this, a);
        this.context = null === this.context ? null : eg();
        this.c = null;
        this.f = [];
        this.B = Pa();
        this.ia = new xa(0, 0, 0, 0);
        this.O = Ve();
        this.I = 0
    }

    v(Ii, vi);
    Ii.handles = function (a, b) {
        return "canvas" === a && "TILE" === b.S()
    };
    Ii.create = function (a, b) {
        return new Ii(b)
    };
    function Ji(a, b) {
        b = b.getState();
        a = a.a.i();
        return 2 == b || 4 == b || 3 == b && !a
    }

    Ii.prototype.Ad = function (a, b) {
        var c = a.pixelRatio, d = a.size, e = a.viewState, f = e.projection, g = e.resolution;
        e = e.center;
        var h = this.a, l = h.ja(), m = l.g, n = l.Xa(f), p = n.wc(g, this.I), q = n.Qa(p), r = Math.round(g / q) || 1,
            u = a.extent;
        void 0 !== b.extent && (u = pb(u, b.extent));
        if (kb(u))return !1;
        var x = tc(n, u, p), B = wc(n, p, x), A = l.Rc(c), y = {};
        y[p] = {};
        var N = this.Sf(l, f, y), ca = this.B, la = this.ia, fa = !1, va, ra;
        for (va = x.ba; va <= x.da; ++va)for (ra = x.ea; ra <= x.ga; ++ra) {
            var T = l.Tc(p, va, ra, c, f);
            3 == T.getState() && (h.i() ? 0 < h.c() && (fa = !0) : Ki(T, 2));
            Ji(this,
                T) || (T = Li(T));
            if (Ji(this, T)) {
                var U = w(this);
                if (2 == T.getState()) {
                    y[p][T.Ba.toString()] = T;
                    var Xb = T.j ? -1 !== T.o[U] : !1;
                    fa || !Xb && -1 !== this.f.indexOf(T) || (fa = !0)
                }
                if (1 === Mi(T, U, a.time))continue
            }
            U = vc(n, T.Ba, la, ca);
            Xb = !1;
            U && (Xb = N(p + 1, U));
            Xb || uc(n, T.Ba, N, la, ca)
        }
        T = a.viewHints;
        T = T[0] || T[1];
        if (!(this.i && 16 < Date.now() - a.time && T || !fa && this.c && Wa(this.c, u) && this.xf == m && r == this.D && (T || q * c / A * r == this.i))) {
            if (T = this.context) ra = l.ce(p, c, f), va = Math.round((x.da - x.ba + 1) * ra[0] / r), ra = Math.round((x.ga - x.ea + 1) * ra[1] / r), fa = T.canvas,
                fa.width != va || fa.height != ra ? (this.D = r, fa.width = va, fa.height = ra) : (this.c && !cb(B, this.c) && T.clearRect(0, 0, va, ra), r = this.D);
            this.f.length = 0;
            fa = Object.keys(y).map(Number);
            fa.sort(function (a, b) {
                return a === p ? 1 : b === p ? -1 : a > b ? 1 : a < b ? -1 : 0
            });
            U = 0;
            for (Xb = fa.length; U < Xb; ++U) {
                la = fa[U];
                N = l.ce(la, c, f);
                T = n.Qa(la);
                var Ca = T / q;
                var Cb = A * l.ag(f);
                var nc = y[la];
                for (var xd in nc) {
                    T = nc[xd];
                    ra = n.Ja(T.Ba, ca);
                    va = (ra[0] - B[0]) / q * A / r;
                    ra = (B[3] - ra[3]) / q * A / r;
                    var Ec = N[0] * Ca / r;
                    var ld = N[1] * Ca / r;
                    this.Tf(T, a, b, va, ra, Ec, ld, Cb, p === la);
                    this.f.push(T)
                }
            }
            this.xf =
                m;
            this.i = q * c / A * r;
            this.c = B
        }
        b = this.i / g;
        b = df(this.O, c * d[0] / 2, c * d[1] / 2, b, b, 0, (this.c[0] - e[0]) / this.i * c, (e[1] - this.c[3]) / this.i * c);
        df(this.l, c * d[0] / 2 - b[4], c * d[1] / 2 - b[5], c / g, -c / g, 0, -e[0], -e[1]);
        ni(a.usedTiles, l, p, x);
        oi(a, l, n, c, f, u, p, h.c());
        ki(a, l);
        mi(a, l);
        return 0 < this.f.length
    };
    Ii.prototype.Tf = function (a, b, c, d, e, f, g, h, l) {
        if (c = a.Y(this.a)) {
            var m = w(this), n = l ? Mi(a, m, b.time) : 1;
            1 !== n || this.a.ja().gg(b.viewState.projection) || this.context.clearRect(d, e, f, g);
            var p = n !== this.context.globalAlpha;
            p && (this.context.save(), this.context.globalAlpha = n);
            this.context.drawImage(c, h, h, c.width - 2 * h, c.height - 2 * h, d, e, f, g);
            p && this.context.restore();
            1 !== n ? b.animate = !0 : l && a.j && (a.o[m] = -1)
        }
    };
    Ii.prototype.Y = function () {
        var a = this.context;
        return a ? a.canvas : null
    };
    Ii.prototype.s = function () {
        return this.O
    };
    function Ni() {
    };
    function Oi(a, b, c, d) {
        var e = a[b], f = a[b + 1], g = 0;
        for (b += d; b < c; b += d) {
            var h = a[b], l = a[b + 1];
            g += Math.sqrt((h - e) * (h - e) + (l - f) * (l - f));
            e = h;
            f = l
        }
        return g
    };
    function Pi(a, b, c, d, e) {
        this.ta = a;
        this.Ua = b;
        this.overlaps = e;
        this.pixelRatio = d;
        this.c = 0;
        this.resolution = c;
        this.ra = this.qa = null;
        this.a = [];
        this.coordinates = [];
        this.kb = {};
        this.U = Ve();
        this.b = [];
        this.B = null;
        this.ia = Ve();
        this.sa = Ve();
        this.fa = []
    }

    v(Pi, Vh);
    function Qi(a, b, c, d, e, f, g, h, l, m, n, p, q, r, u) {
        var x = a.ia;
        f *= q;
        g *= q;
        c -= f;
        d -= g;
        r && (c = Math.round(c), d = Math.round(d));
        0 !== p && (f = c + f, g = d + g, df(x, f, g, 1, 1, p, -f, -g), b.setTransform.apply(b, x));
        x = b.globalAlpha;
        1 != l && (b.globalAlpha = x * l);
        u = u + m > e.width ? e.width - m : u;
        h = h + n > e.height ? e.height - n : h;
        b.drawImage(e, m, n, u, h, c, d, u * q, h * q);
        1 != l && (b.globalAlpha = x);
        0 !== p && b.setTransform.apply(b, a.sa)
    }

    function Ri(a, b) {
        var c = a.pixelRatio;
        return 1 == c ? b : b.map(function (a) {
            return a * c
        })
    }

    function Si(a, b, c, d, e, f, g) {
        var h = a.coordinates.length, l = a.Xf();
        g && (c += e);
        g = [b[c], b[c + 1]];
        var m = [NaN, NaN], n = !0, p;
        for (p = c + e; p < d; p += e) {
            m[0] = b[p];
            m[1] = b[p + 1];
            var q = Xa(l, m);
            q !== r ? (n && (a.coordinates[h++] = g[0], a.coordinates[h++] = g[1]), a.coordinates[h++] = m[0], a.coordinates[h++] = m[1], n = !1) : 1 === q ? (a.coordinates[h++] = m[0], a.coordinates[h++] = m[1], n = !1) : n = !0;
            g[0] = m[0];
            g[1] = m[1];
            var r = q
        }
        if (f && n || p === c + e) a.coordinates[h++] = g[0], a.coordinates[h++] = g[1];
        return h
    }

    function Ti(a, b, c, d, e, f) {
        for (var g = 0, h = d.length; g < h; ++g) {
            var l = d[g];
            c = Si(a, b, c, l, e, !1, !1);
            f.push(c);
            c = l
        }
        return c
    }

    k = Pi.prototype;
    k.Fh = function (a, b, c) {
        Ui(this, b);
        var d = a.S(), e = a.oa(), f = this.coordinates.length, g;
        if ("MultiPolygon" == d) {
            d = ei(a);
            var h = [];
            for (var l = a.md(), m = g = 0, n = l.length; m < n; ++m) {
                var p = [];
                g = Ti(this, d, g, l[m], e, p);
                h.push(p)
            }
            this.a.push([4, f, h, a, c, zf])
        } else"Polygon" == d || "MultiLineString" == d ? (h = [], d = "Polygon" == d ? a.Ub() : a.ca(), Ti(this, d, 0, a.lb(), e, h), this.a.push([4, f, h, a, c, yf])) : "LineString" == d || "MultiPoint" == d ? (d = a.ca(), e = Si(this, d, 0, d.length, e, !1, !1), this.a.push([4, f, e, a, c, xf])) : "Point" == d && (d = a.ca(), this.coordinates.push(d[0],
                d[1]), e = this.coordinates.length, this.a.push([4, f, e, a, c]));
        Vi(this, b)
    };
    function Ui(a, b) {
        a.qa = [0, b, 0];
        a.a.push(a.qa);
        a.ra = [0, b, 0];
        a.b.push(a.ra)
    }

    k.Wa = function (a, b) {
        if (this.T) {
            var c = $e(this.U, this.T.slice());
            a.translate(c[0], c[1]);
            a.rotate(b)
        }
        a.fill();
        this.T && a.setTransform.apply(a, this.sa)
    };
    function Wi(a, b, c, d, e, f, g, h) {
        if (a.B && ma(c, a.U))var l = a.B; else a.B || (a.B = []), l = Se(a.coordinates, 0, a.coordinates.length, 2, c, a.B), Ze(a.U, c);
        c = !wb(e);
        for (var m = 0, n = f.length, p, q, r, u, x, B, A, y, N = 0, ca = 0, la = a.kb,
                 fa = {context: b, pixelRatio: a.pixelRatio, resolution: a.resolution, rotation: d},
                 va = a.a != f || a.overlaps ? 0 : 200; m < n;)switch (y = f[m], y[0]) {
            case 0:
                var ra = y[1];
                c && e[w(ra).toString()] || !ra.W() ? m = y[2] : void 0 === h || qb(h, ra.W().G()) ? ++m : m = y[2] + 1;
                break;
            case 1:
                N > va && (a.Wa(b, d), N = 0);
                ca > va && (b.stroke(), ca = 0);
                N || ca || (b.beginPath(),
                    x = B = NaN);
                ++m;
                break;
            case 2:
                p = y[1];
                q = l[p];
                A = l[p + 1];
                y = l[p + 2] - q;
                p = l[p + 3] - A;
                p = Math.sqrt(y * y + p * p);
                b.moveTo(q + p, A);
                b.arc(q, A, p, 0, 2 * Math.PI, !0);
                ++m;
                break;
            case 3:
                b.closePath();
                ++m;
                break;
            case 4:
                p = y[1];
                q = y[2];
                A = y[4];
                r = 6 == y.length ? y[5] : void 0;
                fa.geometry = y[3];
                fa.feature = ra;
                m in la || (la[m] = []);
                y = la[m];
                r ? r(l, p, q, 2, y) : (y[0] = l[p], y[1] = l[p + 1], y.length = 2);
                A(y, fa);
                ++m;
                break;
            case 6:
                p = y[1];
                q = y[2];
                A = y[3];
                r = y[4];
                u = y[5];
                var T = y[6], U = y[7], Xb = y[8], Ca = y[9], Cb = y[11], nc = y[12], xd = y[13], Ec = y[14];
                for (y[10] && (Cb += d); p < q; p += 2)Qi(a,
                    b, l[p], l[p + 1], A, r, u, T, U, Xb, Ca, Cb, nc, xd, Ec);
                ++m;
                break;
            case 5:
                U = y[1];
                Xb = y[2];
                p = y[3];
                q = y[4];
                u = y[5];
                xd = y[6];
                Cb = y[7];
                A = y[8];
                r = y[9];
                nc = y[10];
                y = y[11];
                Ec = Oi(l, U, Xb, 2);
                var ld = Cb(r);
                if (u || ld <= Ec) {
                    a:{
                        T = void 0;
                        u = l;
                        Ca = r;
                        nc = (Ec - ld) * nc;
                        ld = (Ec = a.fa) ? Ec : [];
                        var sh = u[U] > u[Xb - 2], kf = Ca.length, Je = u[U], Nf = u[U + 1];
                        U += 2;
                        for (var Cg = u[U], Dg = u[U + 1], pk = 0,
                                 ti = Math.sqrt(Math.pow(Cg - Je, 2) + Math.pow(Dg - Nf, 2)), ui = 0; ui < kf; ++ui) {
                            Ec = sh ? kf - ui - 1 : ui;
                            for (var Go = Cb(Ca[Ec]),
                                     lf = nc + Go / 2; U < Xb - 2 && pk + ti < lf;)Je = Cg, Nf = Dg, U += 2, Cg = u[U], Dg = u[U + 1], pk +=
                                ti, ti = Math.sqrt(Math.pow(Cg - Je, 2) + Math.pow(Dg - Nf, 2));
                            var qk = lf - pk;
                            lf = Math.atan2(Dg - Nf, Cg - Je);
                            sh && (lf += 0 < lf ? -Math.PI : Math.PI);
                            if (void 0 !== T && (T = lf - T, T += T > Math.PI ? -2 * Math.PI : T < -Math.PI ? 2 * Math.PI : 0, Math.abs(T) > xd)) {
                                T = null;
                                break a
                            }
                            T = lf;
                            qk /= ti;
                            ld[Ec] = [Ka(Je, Cg, qk), Ka(Nf, Dg, qk), lf];
                            nc += Go
                        }
                        T = ld
                    }
                    U = r.length;
                    if (T)for (Xb = p[p.length - 1].height, Ca = 0, Cb = p.length; Ca < Cb; ++Ca)nc = T[Ca % U], xd = p[Ca], r = xd.width / 2, u = q * xd.height + (.5 - q) * (xd.height - Xb) - A, Qi(a, b, nc[0], nc[1], xd, r, u, xd.height, 1, 0, 0, nc[2], y, !1, xd.width)
                }
                ++m;
                break;
            case 7:
                if (g && (ra = y[1], p = g(ra)))return p;
                ++m;
                break;
            case 8:
                va ? N++ : a.Wa(b, d);
                ++m;
                break;
            case 9:
                p = y[1];
                q = y[2];
                r = l[p];
                u = l[p + 1];
                A = r + .5 | 0;
                y = u + .5 | 0;
                if (A !== x || y !== B) b.moveTo(r, u), x = A, B = y;
                for (p += 2; p < q; p += 2)if (r = l[p], u = l[p + 1], A = r + .5 | 0, y = u + .5 | 0, p == q - 2 || A !== x || y !== B) b.lineTo(r, u), x = A, B = y;
                ++m;
                break;
            case 10:
                a.T = y[2];
                N && (a.Wa(b, d), N = 0, ca && (b.stroke(), ca = 0));
                b.fillStyle = y[1];
                ++m;
                break;
            case 11:
                ca && (b.stroke(), ca = 0);
                b.strokeStyle = y[1];
                b.lineWidth = y[2];
                b.lineCap = y[3];
                b.lineJoin = y[4];
                b.miterLimit = y[5];
                rd && (b.lineDashOffset =
                    y[7], b.setLineDash(y[6]));
                ++m;
                break;
            case 12:
                va ? ca++ : b.stroke();
                ++m;
                break;
            default:
                ++m
        }
        N && a.Wa(b, d);
        ca && b.stroke()
    }

    k.Ka = function (a, b, c, d) {
        Wi(this, a, b, c, d, this.a, void 0, void 0)
    };
    function Xi(a) {
        var b = a.b;
        b.reverse();
        var c, d = b.length, e = -1;
        for (c = 0; c < d; ++c) {
            var f = b[c];
            var g = f[0];
            if (7 == g) e = c; else if (0 == g) {
                f[2] = c;
                f = a.b;
                for (g = c; e < g;) {
                    var h = f[e];
                    f[e] = f[g];
                    f[g] = h;
                    ++e;
                    --g
                }
                e = -1
            }
        }
    }

    function Vi(a, b) {
        a.qa[2] = a.a.length;
        a.qa = null;
        a.ra[2] = a.b.length;
        a.ra = null;
        b = [7, b];
        a.a.push(b);
        a.b.push(b)
    }

    k.df = sa;
    k.Xf = function () {
        return this.Ua
    };
    function Yi(a, b, c, d, e) {
        Pi.call(this, a, b, c, d, e);
        this.N = this.I = null;
        this.O = this.s = this.v = this.o = this.l = this.D = this.C = this.j = this.f = this.i = this.g = void 0
    }

    v(Yi, Pi);
    Yi.prototype.tc = function (a, b) {
        if (this.N) {
            Ui(this, b);
            var c = a.ca(), d = this.coordinates.length;
            a = Si(this, c, 0, c.length, a.oa(), !1, !1);
            this.a.push([6, d, a, this.N, this.g, this.i, this.f, this.j, this.C, this.D, this.l, this.o, this.v * this.pixelRatio, this.s, this.O]);
            this.b.push([6, d, a, this.I, this.g, this.i, this.f, this.j, this.C, this.D, this.l, this.o, this.v, this.s, this.O]);
            Vi(this, b)
        }
    };
    Yi.prototype.rc = function (a, b) {
        if (this.N) {
            Ui(this, b);
            var c = a.ca(), d = this.coordinates.length;
            a = Si(this, c, 0, c.length, a.oa(), !1, !1);
            this.a.push([6, d, a, this.N, this.g, this.i, this.f, this.j, this.C, this.D, this.l, this.o, this.v * this.pixelRatio, this.s, this.O]);
            this.b.push([6, d, a, this.I, this.g, this.i, this.f, this.j, this.C, this.D, this.l, this.o, this.v, this.s, this.O]);
            Vi(this, b)
        }
    };
    Yi.prototype.df = function () {
        Xi(this);
        this.i = this.g = void 0;
        this.N = this.I = null;
        this.O = this.s = this.o = this.l = this.D = this.C = this.j = this.v = this.f = void 0
    };
    Yi.prototype.Wb = function (a) {
        var b = a.Nc(), c = a.jc(), d = a.Dg(1), e = a.Y(1), f = a.Uc();
        this.g = b[0];
        this.i = b[1];
        this.I = d;
        this.N = e;
        this.f = c[1];
        this.j = a.i;
        this.C = f[0];
        this.D = f[1];
        this.l = a.o;
        this.o = a.f;
        this.v = a.a;
        this.s = a.v;
        this.O = c[0]
    };
    function Zi(a, b, c, d, e) {
        Pi.call(this, a, b, c, d, e);
        this.i = null;
        this.g = {
            Sd: void 0,
            Md: void 0,
            Nd: null,
            Od: void 0,
            Pd: void 0,
            Qd: void 0,
            Rd: void 0,
            td: void 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineDashOffset: void 0,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }

    v(Zi, Pi);
    function $i(a, b, c, d, e) {
        var f = a.coordinates.length;
        b = Si(a, b, c, d, e, !1, !1);
        f = [9, f, b];
        a.a.push(f);
        a.b.push(f);
        return d
    }

    k = Zi.prototype;
    k.Xf = function () {
        this.i || (this.i = Sa(this.Ua), 0 < this.c && Ra(this.i, this.resolution * (this.c + 1) / 2, this.i));
        return this.i
    };
    function aj(a) {
        var b = a.g, c = b.strokeStyle, d = b.lineCap, e = b.lineDash, f = b.lineDashOffset, g = b.lineJoin,
            h = b.lineWidth, l = b.miterLimit;
        b.Sd == c && b.Md == d && ma(b.Nd, e) && b.Od == f && b.Pd == g && b.Qd == h && b.Rd == l || (void 0 != b.td && b.td != a.coordinates.length && (a.a.push([12]), b.td = a.coordinates.length), b.td = 0, a.a.push([11, c, h * a.pixelRatio, d, g, l, Ri(a, e), f * a.pixelRatio], [1]), b.Sd = c, b.Md = d, b.Nd = e, b.Od = f, b.Pd = g, b.Qd = h, b.Rd = l)
    }

    k.pc = function (a, b) {
        var c = this.g, d = c.lineWidth;
        void 0 !== c.strokeStyle && void 0 !== d && (aj(this), Ui(this, b), this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset], [1]), c = a.ca(), $i(this, c, 0, c.length, a.oa()), this.b.push([12]), Vi(this, b))
    };
    k.qc = function (a, b) {
        var c = this.g, d = c.lineWidth;
        if (void 0 !== c.strokeStyle && void 0 !== d) {
            aj(this);
            Ui(this, b);
            this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset], [1]);
            c = a.lb();
            d = a.ca();
            a = a.oa();
            var e = 0, f;
            var g = 0;
            for (f = c.length; g < f; ++g)e = $i(this, d, e, c[g], a);
            this.b.push([12]);
            Vi(this, b)
        }
    };
    k.df = function () {
        var a = this.g;
        void 0 != a.td && a.td != this.coordinates.length && this.a.push([12]);
        Xi(this);
        this.g = null
    };
    k.La = function (a, b) {
        a = b.b;
        this.g.strokeStyle = Uh(a ? a : Mh);
        a = b.f;
        this.g.lineCap = void 0 !== a ? a : "round";
        a = b.g;
        this.g.lineDash = a ? a : Lh;
        a = b.i;
        this.g.lineDashOffset = a ? a : 0;
        a = b.j;
        this.g.lineJoin = void 0 !== a ? a : "round";
        a = b.c;
        this.g.lineWidth = void 0 !== a ? a : 1;
        b = b.l;
        this.g.miterLimit = void 0 !== b ? b : 10;
        this.g.lineWidth > this.c && (this.c = this.g.lineWidth, this.i = null)
    };
    function bj(a, b, c, d, e) {
        Pi.call(this, a, b, c, d, e);
        this.i = null;
        this.g = {
            Dh: void 0,
            Sd: void 0,
            Md: void 0,
            Nd: null,
            Od: void 0,
            Pd: void 0,
            Qd: void 0,
            Rd: void 0,
            fillStyle: void 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineDashOffset: void 0,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }

    v(bj, Pi);
    function cj(a, b, c, d, e) {
        var f = a.g, g = void 0 !== f.fillStyle;
        f = void 0 != f.strokeStyle;
        var h = d.length, l = [1];
        a.a.push(l);
        a.b.push(l);
        for (l = 0; l < h; ++l) {
            var m = d[l], n = a.coordinates.length;
            c = Si(a, b, c, m, e, !0, !f);
            c = [9, n, c];
            a.a.push(c);
            a.b.push(c);
            f && (c = [3], a.a.push(c), a.b.push(c));
            c = m
        }
        b = [8];
        a.b.push(b);
        g && a.a.push(b);
        f && (g = [12], a.a.push(g), a.b.push(g));
        return c
    }

    k = bj.prototype;
    k.$b = function (a, b) {
        var c = this.g, d = c.strokeStyle;
        if (void 0 !== c.fillStyle || void 0 !== d) {
            dj(this, a);
            Ui(this, b);
            this.b.push([10, Sh(Kh)]);
            void 0 !== c.strokeStyle && this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset]);
            var e = a.ca();
            d = this.coordinates.length;
            Si(this, e, 0, e.length, a.oa(), !1, !1);
            a = [1];
            d = [2, d];
            this.a.push(a, d);
            this.b.push(a, d);
            a = [8];
            this.b.push(a);
            void 0 !== c.fillStyle && this.a.push(a);
            void 0 !== c.strokeStyle && (c = [12], this.a.push(c), this.b.push(c));
            Vi(this, b)
        }
    };
    k.uc = function (a, b) {
        var c = this.g;
        dj(this, a);
        Ui(this, b);
        this.b.push([10, Sh(Kh)]);
        void 0 !== c.strokeStyle && this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset]);
        c = a.lb();
        var d = a.Ub();
        cj(this, d, 0, c, a.oa());
        Vi(this, b)
    };
    k.sc = function (a, b) {
        var c = this.g, d = c.strokeStyle;
        if (void 0 !== c.fillStyle || void 0 !== d) {
            dj(this, a);
            Ui(this, b);
            this.b.push([10, Sh(Kh)]);
            void 0 !== c.strokeStyle && this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset]);
            c = a.md();
            d = ei(a);
            a = a.oa();
            var e = 0, f;
            var g = 0;
            for (f = c.length; g < f; ++g)e = cj(this, d, e, c[g], a);
            Vi(this, b)
        }
    };
    k.df = function () {
        Xi(this);
        this.g = null;
        var a = this.ta;
        if (0 !== a) {
            var b = this.coordinates, c;
            var d = 0;
            for (c = b.length; d < c; ++d)b[d] = a * Math.round(b[d] / a)
        }
    };
    k.Xf = function () {
        this.i || (this.i = Sa(this.Ua), 0 < this.c && Ra(this.i, this.resolution * (this.c + 1) / 2, this.i));
        return this.i
    };
    k.La = function (a, b) {
        var c = this.g;
        a ? (a = a.b, c.fillStyle = Uh(a ? a : Kh)) : c.fillStyle = void 0;
        b ? (a = b.b, c.strokeStyle = Uh(a ? a : Mh), a = b.f, c.lineCap = void 0 !== a ? a : "round", a = b.g, c.lineDash = a ? a.slice() : Lh, a = b.i, c.lineDashOffset = a ? a : 0, a = b.j, c.lineJoin = void 0 !== a ? a : "round", a = b.c, c.lineWidth = void 0 !== a ? a : 1, b = b.l, c.miterLimit = void 0 !== b ? b : 10, c.lineWidth > this.c && (this.c = c.lineWidth, this.i = null)) : (c.strokeStyle = void 0, c.lineCap = void 0, c.lineDash = null, c.lineDashOffset = void 0, c.lineJoin = void 0, c.lineWidth = void 0, c.miterLimit =
            void 0)
    };
    function dj(a, b) {
        var c = a.g, d = c.fillStyle, e = c.strokeStyle, f = c.lineCap, g = c.lineDash, h = c.lineDashOffset,
            l = c.lineJoin, m = c.lineWidth, n = c.miterLimit;
        if (void 0 !== d && ("string" !== typeof d || c.Dh != d)) {
            var p = [10, d];
            "string" !== typeof d && (b = b.G(), p.push([b[0], b[3]]));
            a.a.push(p);
            c.Dh = c.fillStyle
        }
        void 0 === e || c.Sd == e && c.Md == f && ma(c.Nd, g) && c.Od == h && c.Pd == l && c.Qd == m && c.Rd == n || (a.a.push([11, e, m * a.pixelRatio, f, l, n, Ri(a, g), h * a.pixelRatio]), c.Sd = e, c.Md = f, c.Nd = g, c.Od = h, c.Pd = l, c.Qd = m, c.Rd = n)
    };
    var ej = "Polygon Circle LineString Image Text Default".split(" "), fj = {
        left: 0,
        end: 0,
        center: .5,
        right: 1,
        start: 1,
        top: 0,
        middle: .5,
        hanging: .2,
        alphabetic: .8,
        ideographic: .8,
        bottom: 1
    };

    function gj(a) {
        this.highWaterMark = void 0 !== a ? a : 2048;
        this.c = 0;
        this.b = {};
        this.g = this.a = null
    }

    function hj(a) {
        return a.c > a.highWaterMark
    }

    k = gj.prototype;
    k.clear = function () {
        this.c = 0;
        this.b = {};
        this.g = this.a = null
    };
    k.forEach = function (a, b) {
        for (var c = this.a; c;)a.call(b, c.dd, c.xc, this), c = c.Nb
    };
    k.get = function (a) {
        a = this.b[a];
        wa(!!a, 15);
        if (a === this.g)return a.dd;
        a === this.a ? (this.a = this.a.Nb, this.a.Dd = null) : (a.Nb.Dd = a.Dd, a.Dd.Nb = a.Nb);
        a.Nb = null;
        a.Dd = this.g;
        this.g = this.g.Nb = a;
        return a.dd
    };
    k.pop = function () {
        var a = this.a;
        delete this.b[a.xc];
        a.Nb && (a.Nb.Dd = null);
        this.a = a.Nb;
        this.a || (this.g = null);
        --this.c;
        return a.dd
    };
    k.replace = function (a, b) {
        this.get(a);
        this.b[a].dd = b
    };
    k.set = function (a, b) {
        wa(!(a in this.b), 16);
        b = {xc: a, Nb: null, Dd: this.g, dd: b};
        this.g ? this.g.Nb = b : this.a = b;
        this.g = b;
        this.b[a] = b;
        ++this.c
    };
    function ij(a, b, c, d, e) {
        Pi.call(this, a, b, c, d, e);
        this.pa = "";
        this.l = this.o = 0;
        this.v = void 0;
        this.j = this.s = 0;
        this.f = this.g = this.i = null;
        for (this.C = this.O = this.D = ""; hj(jj);)jj.pop()
    }

    v(ij, Pi);
    var jj = new gj, kj = function () {
        var a;
        return function (b) {
            a || (a = document.createElement("span"), a.textContent = "M", a.style.visibility = "hidden", a.style.whiteSpace = "nowrap");
            a.style.font = b;
            document.body.appendChild(a);
            b = a.offsetHeight;
            document.body.removeChild(a);
            return b
        }
    }();

    function lj(a, b, c) {
        var d = this[c];
        d || (this[c] = d = a.measureText(c).width);
        return d * b
    }

    var mj = function () {
        var a;
        return function (b, c, d) {
            a || (a = eg(1, 1));
            a.font = b;
            b = c.length;
            var e = 0, f;
            for (f = 0; f < b; ++f) {
                var g = a.measureText(c[f]).width;
                e = Math.max(e, g);
                d.push(g)
            }
            return e
        }
    }();
    ij.prototype.Rb = function (a, b) {
        var c = this.i, d = this.g, e = this.f;
        if ("" !== this.pa && e && (c || d)) {
            var f = this.coordinates.length, g = a.S();
            c = null;
            var h = 2;
            d = 2;
            if ("line" === this.f.placement) {
                c = a.ca();
                d = a.oa();
                if ("LineString" == g)var l = [c.length]; else if ("MultiLineString" == g) l = a.lb(); else if ("Polygon" == g) l = a.lb().slice(0, 1); else if ("MultiPolygon" == g) {
                    var m = a.md();
                    l = [];
                    a = 0;
                    for (g = m.length; a < g; ++a)l.push(m[a][0])
                }
                Ui(this, b);
                a = e.textAlign;
                var n = 0;
                m = 0;
                for (g = l.length; m < g; ++m) {
                    if (void 0 == a) {
                        for (var p, q, r = void 0, u = void 0,
                                 x = h = q = p = void 0, B = n, A = n, y = 0, N = 0, ca = n; n < l[m]; n += d) {
                            var la = c[n], fa = c[n + 1];
                            void 0 !== q && (q = la - q, p = fa - p, h = Math.sqrt(q * q + p * p), void 0 !== u && (N += x, r = Math.acos((u * q + r * p) / (x * h)), r > e.maxAngle && (N > y && (y = N, B = ca, A = n), N = 0, ca = n - d)), x = h, u = q, r = p);
                            q = la;
                            p = fa
                        }
                        h = N + h > y ? [ca, n] : [B, A];
                        n = h[0];
                        h = h[1]
                    } else h = l[m];
                    h = Si(this, c, n, h, d, !1, !1);
                    n = l[m];
                    B = h;
                    A = this.pixelRatio;
                    u = !!this.i;
                    x = !!this.g;
                    y = this.f;
                    N = fj[y.textBaseline];
                    ca = [];
                    la = this.pa;
                    fa = this.pa.length;
                    if (x)for (r = 0; r < fa; ++r)ca.push(nj(this, la.charAt(r), !1, x));
                    if (u)for (r = 0; r < fa; ++r)ca.push(nj(this,
                        la.charAt(r), u, !1));
                    r = ca[0].getContext("2d");
                    u = this.l * A;
                    x = fj[y.textAlign || "center"];
                    la = {};
                    this.a.push([5, f, B, ca, N, y.exceedLength, y.maxAngle, lj.bind(la, r, A), u, this.pa, x, this.j]);
                    this.b.push([5, f, B, ca, N, y.exceedLength, y.maxAngle, lj.bind(la, r, 1), u, this.pa, x, this.j / A]);
                    f = h
                }
            } else {
                l = nj(this, this.pa, !!this.i, !!this.g);
                m = l.width / this.pixelRatio;
                switch (g) {
                    case "Point":
                    case "MultiPoint":
                        c = a.ca();
                        h = c.length;
                        break;
                    case "LineString":
                        c = ci(a);
                        break;
                    case "Circle":
                        c = a.wa();
                        break;
                    case "MultiLineString":
                        c = di(a);
                        h = c.length;
                        break;
                    case "Polygon":
                        c = Qf(a);
                        if (!e.exceedLength && c[2] / this.resolution < m)return;
                        d = 3;
                        break;
                    case "MultiPolygon":
                        n = fi(a);
                        c = [];
                        a = 0;
                        for (g = n.length; a < g; a += 3)(e.exceedLength || n[a + 2] / this.resolution >= m) && c.push(n[a], n[a + 1]);
                        h = c.length;
                        if (0 == h)return
                }
                h = Si(this, c, 0, h, d, !1, !1);
                Ui(this, b);
                e = f;
                c = h;
                m = this.f;
                g = this.g;
                d = this.pixelRatio;
                a = fj[m.textAlign || "center"];
                m = fj[m.textBaseline];
                g = g && g.lineWidth ? g.lineWidth : 0;
                a = a * l.width / d + 2 * (.5 - a) * g;
                m = m * l.height / d + 2 * (.5 - m) * g;
                this.a.push([6, e, c, l, (a - this.o) * d, (m - this.l) * d, l.height,
                    1, 0, 0, this.v, this.s, this.j, !0, l.width]);
                this.b.push([6, e, c, l, (a - this.o) * d, (m - this.l) * d, l.height, 1, 0, 0, this.v, this.s, this.j / d, !0, l.width])
            }
            Vi(this, b)
        }
    };
    function nj(a, b, c, d) {
        var e = (d ? a.C : "") + a.D + b + (c ? a.O : "");
        b = b.split("\n");
        var f = b.length;
        if (!jj.b.hasOwnProperty(e)) {
            var g = a.g, h = a.i, l = a.f, m = a.pixelRatio, n = fj[l.textAlign || "center"];
            a = d && g.lineWidth ? g.lineWidth : 0;
            var p = [], q = mj(l.font, b, p), r = kj(l.font);
            q = eg(Math.ceil((q + 2 * a) * m), Math.ceil((r * f + 2 * a) * m));
            var u = q.canvas;
            jj.set(e, u);
            q.scale(m, m);
            q.font = l.font;
            d && (q.strokeStyle = g.strokeStyle, q.lineWidth = g.lineWidth, q.lineCap = g.lineCap, q.lineJoin = g.lineJoin, q.miterLimit = g.miterLimit, rd && (q.setLineDash(g.lineDash),
                q.lineDashOffset = g.lineDashOffset));
            c && (q.fillStyle = h.fillStyle);
            q.textBaseline = "top";
            q.textAlign = "center";
            g = .5 - n;
            h = n * u.width / m + 2 * g * a;
            if (d)for (d = 0; d < f; ++d)q.strokeText(b[d], h + g * p[d], a + d * r);
            if (c)for (d = 0; d < f; ++d)q.fillText(b[d], h + g * p[d], a + d * r)
        }
        return jj.get(e)
    }

    ij.prototype.hb = function (a) {
        var b;
        if (a) {
            if (b = a.Ca()) {
                b = b.b;
                var c = Uh(b ? b : Kh);
                b = this.i;
                b || (b = this.i = {});
                b.fillStyle = c
            } else b = this.i = null;
            var d = a.Da();
            if (d) {
                c = d.b;
                var e = d.f;
                var f = d.g, g = d.i, h = d.j, l = d.c;
                d = d.l;
                f = f ? f.slice() : Lh;
                var m = Uh(c ? c : Mh);
                c = this.g;
                c || (c = this.g = {});
                c.lineCap = void 0 !== e ? e : "round";
                c.lineDash = f;
                c.lineDashOffset = void 0 !== g ? g : 0;
                c.lineJoin = void 0 !== h ? h : "round";
                c.lineWidth = void 0 !== l ? l : 1;
                c.miterLimit = void 0 !== d ? d : 10;
                c.strokeStyle = m
            } else c = this.g = null;
            g = a.a;
            h = a.g;
            l = a.c;
            d = a.l;
            f = a.i;
            m = a.b;
            var n =
                a.Ia(), p = a.f, q = a.j;
            e = this.f;
            e || (e = this.f = {});
            e.exceedLength = a.o;
            e.font = void 0 !== g ? g : "10px sans-serif";
            e.maxAngle = a.v;
            e.placement = a.s;
            e.textAlign = p;
            e.textBaseline = void 0 !== q ? q : "middle";
            this.pa = void 0 !== n ? n : "";
            this.o = void 0 !== h ? h : 0;
            this.l = void 0 !== l ? l : 0;
            this.v = void 0 !== d ? d : !1;
            this.s = void 0 !== f ? f : 0;
            this.j = void 0 !== m ? m : 1;
            this.C = c ? ("string" == typeof c.strokeStyle ? c.strokeStyle : w(c.strokeStyle)) + c.lineCap + c.lineDashOffset + "|" + c.lineWidth + c.lineJoin + c.miterLimit + "[" + c.lineDash.join() + "]" : "";
            this.D = e.font +
                e.textAlign;
            this.O = b ? "string" == typeof b.fillStyle ? b.fillStyle : "|" + w(b.fillStyle) : ""
        } else this.pa = ""
    };
    function oj(a, b, c, d, e, f) {
        this.s = a;
        this.g = b;
        this.l = e;
        this.o = d;
        this.v = c;
        this.i = f;
        this.a = {};
        this.f = eg(1, 1);
        this.j = Ve()
    }

    v(oj, Ni);
    var pj = {0: [[!0]]};

    function qj(a, b, c) {
        var d, e = Math.floor(a.length / 2);
        if (b >= e)for (d = e; d < b; d++)a[d][c] = !0; else if (b < e)for (d = b + 1; d < e; d++)a[d][c] = !0
    }

    function rj(a) {
        if (void 0 !== pj[a])return pj[a];
        for (var b = 2 * a + 1, c = Array(b), d = 0; d < b; d++)c[d] = Array(b);
        b = a;
        for (var e = d = 0; b >= d;)qj(c, a + b, a + d), qj(c, a + d, a + b), qj(c, a - d, a + b), qj(c, a - b, a + d), qj(c, a - b, a - d), qj(c, a - d, a - b), qj(c, a + d, a - b), qj(c, a + b, a - d), d++, e += 1 + 2 * d, 0 < 2 * (e - b) + 1 && (--b, e += 1 - 2 * b);
        return pj[a] = c
    }

    function sj(a) {
        for (var b in a.a) {
            var c = a.a[b], d;
            for (d in c)c[d].df()
        }
    }

    oj.prototype.Fa = function (a, b, c, d, e, f) {
        d = Math.round(d);
        var g = 2 * d + 1, h = df(this.j, d + .5, d + .5, 1 / b, -1 / b, -c, -a[0], -a[1]), l = this.f;
        l.canvas.width !== g || l.canvas.height !== g ? (l.canvas.width = g, l.canvas.height = g) : l.clearRect(0, 0, g, g);
        if (void 0 !== this.i) {
            var m = Pa();
            Qa(m, a);
            Ra(m, b * (this.i + d), m)
        }
        var n = rj(d);
        return tj(this, l, h, c, e, function (a) {
            for (var b = l.getImageData(0, 0, g, g).data,
                     c = 0; c < g; c++)for (var d = 0; d < g; d++)if (n[c][d] && 0 < b[4 * (d * g + c) + 3]) {
                if (a = f(a))return a;
                l.clearRect(0, 0, g, g);
                return
            }
        }, m)
    };
    function uj(a, b) {
        var c = a.g;
        a = c[0];
        var d = c[1], e = c[2];
        c = c[3];
        a = [a, d, a, c, e, c, e, d];
        Se(a, 0, 8, 2, b, a);
        return a
    }

    oj.prototype.b = function (a, b) {
        var c = void 0 !== a ? a.toString() : "0";
        a = this.a[c];
        void 0 === a && (a = {}, this.a[c] = a);
        c = a[b];
        void 0 === c && (c = new vj[b](this.s, this.g, this.v, this.o, this.l), a[b] = c);
        return c
    };
    oj.prototype.c = function () {
        return wb(this.a)
    };
    oj.prototype.Ka = function (a, b, c, d, e) {
        var f = Object.keys(this.a).map(Number);
        f.sort(ea);
        var g = uj(this, b);
        a.save();
        a.beginPath();
        a.moveTo(g[0], g[1]);
        a.lineTo(g[2], g[3]);
        a.lineTo(g[4], g[5]);
        a.lineTo(g[6], g[7]);
        a.clip();
        e = e ? e : ej;
        var h, l;
        g = 0;
        for (h = f.length; g < h; ++g) {
            var m = this.a[f[g].toString()];
            var n = 0;
            for (l = e.length; n < l; ++n) {
                var p = m[e[n]];
                void 0 !== p && p.Ka(a, b, c, d)
            }
        }
        a.restore()
    };
    function tj(a, b, c, d, e, f, g) {
        var h = Object.keys(a.a).map(Number);
        h.sort(function (a, b) {
            return b - a
        });
        var l, m;
        var n = 0;
        for (l = h.length; n < l; ++n) {
            var p = a.a[h[n].toString()];
            for (m = ej.length - 1; 0 <= m; --m) {
                var q = p[ej[m]];
                if (void 0 !== q && (q = Wi(q, b, c, d, e, q.b, f, g)))return q
            }
        }
    }

    var vj = {Circle: bj, Default: Pi, Image: Yi, LineString: Zi, Polygon: bj, Text: ij};

    function wj(a, b) {
        return w(a) - w(b)
    }

    function xj(a, b) {
        a = .5 * a / b;
        return a * a
    }

    function yj(a, b, c, d, e, f) {
        var g = !1, h;
        if (h = c.Y()) {
            var l = h.hf();
            2 == l || 3 == l ? h.Rj(e, f) : (0 == l && h.load(), h.ei(e, f), g = !0)
        }
        if (e = (0, c.Za)(b))if (d = e.$d(d), c.Ke()) zj(a, d, c, b); else(0, Aj[d.S()])(a, d, c, b);
        return g
    }

    function zj(a, b, c, d) {
        if ("GeometryCollection" == b.S()) {
            b = b.pd();
            for (var e = 0, f = b.length; e < f; ++e)zj(a, b[e], c, d)
        } else a.b(c.ya(), "Default").Fh(b, d, c.Ke())
    }

    var Aj = {
        Point: function (a, b, c, d) {
            var e = c.Y();
            if (e) {
                if (2 != e.hf())return;
                var f = a.b(c.ya(), "Image");
                f.Wb(e);
                f.tc(b, d)
            }
            if (e = c.Ia()) a = a.b(c.ya(), "Text"), a.hb(e), a.Rb(b, d)
        }, LineString: function (a, b, c, d) {
            var e = c.Da();
            if (e) {
                var f = a.b(c.ya(), "LineString");
                f.La(null, e);
                f.pc(b, d)
            }
            if (e = c.Ia()) a = a.b(c.ya(), "Text"), a.hb(e), a.Rb(b, d)
        }, Polygon: function (a, b, c, d) {
            var e = c.Ca(), f = c.Da();
            if (e || f) {
                var g = a.b(c.ya(), "Polygon");
                g.La(e, f);
                g.uc(b, d)
            }
            if (e = c.Ia()) a = a.b(c.ya(), "Text"), a.hb(e), a.Rb(b, d)
        }, MultiPoint: function (a, b,
                                 c, d) {
            var e = c.Y();
            if (e) {
                if (2 != e.hf())return;
                var f = a.b(c.ya(), "Image");
                f.Wb(e);
                f.rc(b, d)
            }
            if (e = c.Ia()) a = a.b(c.ya(), "Text"), a.hb(e), a.Rb(b, d)
        }, MultiLineString: function (a, b, c, d) {
            var e = c.Da();
            if (e) {
                var f = a.b(c.ya(), "LineString");
                f.La(null, e);
                f.qc(b, d)
            }
            if (e = c.Ia()) a = a.b(c.ya(), "Text"), a.hb(e), a.Rb(b, d)
        }, MultiPolygon: function (a, b, c, d) {
            var e = c.Ca(), f = c.Da();
            if (f || e) {
                var g = a.b(c.ya(), "Polygon");
                g.La(e, f);
                g.sc(b, d)
            }
            if (e = c.Ia()) a = a.b(c.ya(), "Text"), a.hb(e), a.Rb(b, d)
        }, GeometryCollection: function (a, b, c, d) {
            b = b.a;
            var e;
            var f = 0;
            for (e = b.length; f < e; ++f)(0, Aj[b[f].S()])(a, b[f], c, d)
        }, Circle: function (a, b, c, d) {
            var e = c.Ca(), f = c.Da();
            if (e || f) {
                var g = a.b(c.ya(), "Circle");
                g.La(e, f);
                g.$b(b, d)
            }
            if (e = c.Ia()) a = a.b(c.ya(), "Text"), a.hb(e), a.Rb(b, d)
        }
    };

    function Bj(a) {
        pi.call(this, a);
        this.c = !1;
        this.O = -1;
        this.s = NaN;
        this.j = Pa();
        this.i = this.l = null;
        this.f = eg()
    }

    v(Bj, pi);
    Bj.handles = function (a, b) {
        return "canvas" === a && "VECTOR" === b.S()
    };
    Bj.create = function (a, b) {
        return new Bj(b)
    };
    Bj.prototype.v = function (a, b, c) {
        var d = a.extent, e = a.pixelRatio, f = b.Ve ? a.skippedFeatureUids : {}, g = a.viewState, h = g.projection,
            l = g.rotation, m = h.G(), n = this.a.ja(), p = si(this, a, 0);
        ri(this, "precompose", c, a, p);
        var q = b.extent;
        (g = void 0 !== q) && qi(c, a, q);
        var r = this.i;
        if (r && !r.c()) {
            var u = q = 0, x = 1 !== b.opacity, B = Uc(this.a, "render");
            if (x || B) {
                var A = c.canvas.width;
                var y = c.canvas.height;
                if (l) {
                    var N = Math.round(Math.sqrt(A * A + y * y));
                    q = (N - A) / 2;
                    u = (N - y) / 2;
                    A = y = N
                }
                this.f.canvas.width = A;
                this.f.canvas.height = y;
                A = this.f
            } else A = c;
            y =
                A.globalAlpha;
            x || (A.globalAlpha = b.opacity);
            A != c && A.translate(q, u);
            N = a.size[0] * e;
            e *= a.size[1];
            Nh(A, -l, N / 2, e / 2);
            r.Ka(A, p, l, f);
            if (n.C && h.g && !Wa(m, d)) {
                h = d[0];
                n = lb(m);
                for (var ca = 0; h < m[0];)--ca, p = n * ca, p = si(this, a, p), r.Ka(A, p, l, f), h += n;
                ca = 0;
                for (h = d[2]; h > m[2];)++ca, p = n * ca, p = si(this, a, p), r.Ka(A, p, l, f), h -= n;
                p = si(this, a, 0)
            }
            Nh(A, l, N / 2, e / 2);
            A != c && (B && ri(this, "render", A, a, p), x ? (d = c.globalAlpha, c.globalAlpha = b.opacity, c.drawImage(A.canvas, -q, -u), c.globalAlpha = d) : c.drawImage(A.canvas, -q, -u), A.translate(-q, -u));
            x ||
            (A.globalAlpha = y)
        }
        g && c.restore();
        this.qf(c, a, b, p)
    };
    Bj.prototype.Fa = function (a, b, c, d, e) {
        if (this.i) {
            var f = this.a, g = {};
            return this.i.Fa(a, b.viewState.resolution, b.viewState.rotation, c, {}, function (a) {
                var b = w(a).toString();
                if (!(b in g))return g[b] = !0, d.call(e, a, f)
            })
        }
    };
    Bj.prototype.C = function () {
        ii(this)
    };
    Bj.prototype.Ad = function (a) {
        var b = this.a, c = b.ja();
        li(a.attributions, c.j);
        mi(a, c);
        var d = a.viewHints[0], e = a.viewHints[1], f = b.U, g = b.sa;
        if (!this.c && !f && d || !g && e)return !0;
        f = a.extent;
        var h = a.viewState;
        g = h.projection;
        var l = h.resolution, m = a.pixelRatio;
        d = b.g;
        var n = b.f;
        e = b.get(Cj);
        void 0 === e && (e = wj);
        f = Ra(f, n * l);
        n = h.projection.G();
        c.C && h.projection.g && !Wa(n, a.extent) && (a = Math.max(lb(f) / 2, lb(n)), f[0] = n[0] - a, f[2] = n[2] + a);
        if (!this.c && this.s == l && this.O == d && this.l == e && Wa(this.j, f))return !0;
        this.i = null;
        this.c = !1;
        var p = new oj(.5 * l / m, f, l, m, c.U, b.f);
        c.de(f, l, g);
        a = function (a) {
            var c = a.bb();
            if (c)var d = c.call(a, l); else(c = b.bb()) && (d = c(a, l));
            if (d) {
                if (d) {
                    c = !1;
                    if (Array.isArray(d))for (var e = 0,
                                                  f = d.length; e < f; ++e)c = yj(p, a, d[e], xj(l, m), this.C, this) || c; else c = yj(p, a, d, xj(l, m), this.C, this) || c;
                    a = c
                } else a = !1;
                this.c = this.c || a
            }
        }.bind(this);
        if (e) {
            var q = [];
            c.ac(f, function (a) {
                q.push(a)
            }, this);
            q.sort(e);
            c = 0;
            for (g = q.length; c < g; ++c)a(q[c])
        } else c.ac(f, a, this);
        sj(p);
        this.s = l;
        this.O = d;
        this.l = e;
        this.j = f;
        this.i = p;
        return !0
    };
    function Dj(a) {
        this.context = null;
        Ii.call(this, a);
        this.C = !1;
        this.U = Ve();
        this.I = "vector" == a.v ? 1 : 0
    }

    v(Dj, Ii);
    Dj.handles = function (a, b) {
        return "canvas" === a && "VECTOR_TILE" === b.S()
    };
    Dj.create = function (a, b) {
        return new Dj(b)
    };
    var Ej = {image: ["Polygon", "Circle", "LineString", "Image", "Text"], hybrid: ["Polygon", "LineString"]},
        Fj = {image: ["Default"], hybrid: ["Image", "Text", "Default"], vector: ej};
    k = Dj.prototype;
    k.Ad = function (a, b) {
        var c = this.a, d = c.g;
        this.fa != d && (this.f.length = 0, c = c.v, this.context || "vector" == c || (this.context = eg()), this.context && "vector" == c && (this.context = null));
        this.fa = d;
        return Ii.prototype.Ad.apply(this, arguments)
    };
    k.Tf = function (a, b, c, d, e, f, g, h, l) {
        var m = a, n = this.a, p = b.pixelRatio, q = b.viewState.projection, r = n.g, u = n.get(Cj) || null,
            x = Gj(m, n);
        if (x.Fe || x.xf != r || x.dh != u) {
            var B = n.ja(), A = B.tileGrid, y = B.Xa(q), N = y.Qa(m.Ba[0]);
            y = y.Ja(m.O);
            for (var ca = 0, la = m.a.length; ca < la; ++ca) {
                var fa = m.c[m.a[ca]];
                if (3 != fa.getState()) {
                    var va = A.Ja(fa.Ba), ra = pb(y, va), T = fa.s, U = !1;
                    hc(q, T) || (U = !0, fa.vg(q));
                    x.Fe = !1;
                    ra = new oj(0, ra, N, p, B.v, n.f);
                    var Xb = xj(N, p), Ca = fa.a;
                    u && u !== x.dh && Ca.sort(u);
                    for (var Cb, nc = 0, xd = Ca.length; nc < xd; ++nc) {
                        Cb = Ca[nc];
                        U && ("tile-pixels" ==
                        T.a && (T.Lj(va), T.Qi(fa.G())), Cb.W().gb(T, q));
                        var Ec = void 0, ld = Cb.bb();
                        ld ? Ec = ld.call(Cb, N) : (ld = n.bb()) && (Ec = ld(Cb, N));
                        if (Ec) {
                            ld = Xb;
                            var sh = ra;
                            if (Ec) {
                                var kf = !1;
                                if (Array.isArray(Ec))for (var Je = 0,
                                                               Nf = Ec.length; Je < Nf; ++Je)kf = yj(sh, Cb, Ec[Je], ld, this.Ti, this) || kf; else kf = yj(sh, Cb, Ec, ld, this.Ti, this) || kf;
                                Cb = kf
                            } else Cb = !1;
                            this.C = this.C || Cb;
                            x.Fe = x.Fe || Cb
                        }
                    }
                    sj(ra);
                    va = m.Ba.toString();
                    T = ra;
                    fa.f[w(n) + "," + va] = T
                }
            }
            x.xf = r;
            x.dh = u
        }
        if (this.context) {
            x = b;
            n = this.a;
            q = Gj(m, n);
            r = n.g;
            if ((p = Ej[n.v]) && q.eh !== r)for (q.eh = r, B = m.O, N =
                B[0], q = x.pixelRatio, y = n.ja(), A = y.Xa(x.viewState.projection), r = A.Qa(N), u = m.getContext(n), x = y.ce(N, q, x.viewState.projection), u.canvas.width = x[0], u.canvas.height = x[1], x = A.Ja(B), B = 0, A = m.a.length; B < A; ++B)N = m.c[m.a[B]], 3 != N.getState() && (y = q / r, ca = We(this.U), bf(ca, y, -y), cf(ca, -x[0], -x[3]), Hj(N, n, m.Ba.toString()).Ka(u, ca, 0, {}, p, !0));
            Ii.prototype.Tf.apply(this, arguments)
        }
    };
    k.Fa = function (a, b, c, d, e) {
        var f = b.viewState.resolution, g = b.viewState.rotation;
        c = void 0 == c ? 0 : c;
        var h = this.a, l = {}, m = this.f;
        b = h.ja().Xa(b.viewState.projection);
        var n;
        var p = 0;
        for (n = m.length; p < n; ++p) {
            var q = m[p];
            var r = q.Ba;
            r = b.Ja(r, this.B);
            var u = Ra(r, c * f, u);
            if (Ua(u, a)) {
                r = 0;
                for (var x = q.a.length; r < x; ++r) {
                    var B = q.c[q.a[r]];
                    if (3 != B.getState()) {
                        B = Hj(B, h, q.Ba.toString());
                        var A = A || B.Fa(a, f, g, c, {}, function (a) {
                                var b = w(a).toString();
                                if (!(b in l))return l[b] = !0, d.call(e, a, h)
                            })
                    }
                }
            }
        }
        return A
    };
    k.Ti = function () {
        ii(this)
    };
    k.qf = function (a, b, c) {
        var d = this.a, e = d.ja(), f = d.v, g = Fj[f], h = b.pixelRatio, l = b.viewState.rotation, m = b.size,
            n = Math.round(h * m[0] / 2);
        h = Math.round(h * m[1] / 2);
        m = this.f;
        e = e.Xa(b.viewState.projection);
        for (var p = [], q = [], r = m.length - 1; 0 <= r; --r) {
            var u = m[r];
            if (5 != u.getState())for (var x = u.Ba, B = e.Ja(x)[0] - e.Ja(u.O)[0], A = 0, y = u.a.length; A < y; ++A) {
                var N = u.c[u.a[A]];
                if (3 != N.getState()) {
                    var ca = Hj(N, d, x.toString()), la;
                    if (!(la = "vector" == f))a:{
                        la = void 0;
                        for (la in ca.a)for (var fa = ca.a[la], va = 0, ra = g.length; va < ra; ++va)if (g[va] in
                            fa) {
                            la = !0;
                            break a
                        }
                        la = !1
                    }
                    if (la) {
                        N = N.Ba[0];
                        la = si(this, b, B);
                        fa = uj(ca, la);
                        a.save();
                        a.globalAlpha = c.opacity;
                        Nh(a, -l, n, h);
                        va = 0;
                        for (ra = p.length; va < ra; ++va) {
                            var T = p[va];
                            N < q[va] && (a.beginPath(), a.moveTo(fa[0], fa[1]), a.lineTo(fa[2], fa[3]), a.lineTo(fa[4], fa[5]), a.lineTo(fa[6], fa[7]), a.moveTo(T[6], T[7]), a.lineTo(T[4], T[5]), a.lineTo(T[2], T[3]), a.lineTo(T[0], T[1]), a.clip())
                        }
                        ca.Ka(a, la, l, {}, g);
                        a.restore();
                        p.push(fa);
                        q.push(N)
                    }
                }
            }
        }
        Ii.prototype.qf.apply(this, arguments)
    };
    ng("MAP_RENDERER", Gi);
    og([wi, Ii, Bj, Dj]);
    function G(a) {
        a = tb({}, a);
        delete a.renderer;
        a.controls || (a.controls = yg());
        a.interactions || (a.interactions = Ih());
        F.call(this, a)
    }

    v(G, F);
    function Ij(a) {
        a = a ? a : {};
        this.c = void 0 !== a.className ? a.className : "ol-full-screen";
        var b = void 0 !== a.label ? a.label : "\u2922";
        this.l = "string" === typeof b ? document.createTextNode(b) : b;
        b = void 0 !== a.labelActive ? a.labelActive : "\u00d7";
        this.o = "string" === typeof b ? document.createTextNode(b) : b;
        var c = a.tipLabel ? a.tipLabel : "Toggle full-screen";
        b = document.createElement("button");
        b.className = this.c + "-" + Jj();
        b.setAttribute("type", "button");
        b.title = c;
        b.appendChild(this.l);
        z(b, "click", this.D, this);
        c = document.createElement("div");
        c.className = this.c + " ol-unselectable ol-control " + (Kj() ? "" : "ol-unsupported");
        c.appendChild(b);
        rg.call(this, {element: c, target: a.target});
        this.C = void 0 !== a.keys ? a.keys : !1;
        this.j = a.source
    }

    v(Ij, rg);
    Ij.prototype.D = function (a) {
        a.preventDefault();
        Kj() && (a = this.a) && (Jj() ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : (a = this.j ? "string" === typeof this.j ? document.getElementById(this.j) : this.j : a.vc(), this.C ? a.mozRequestFullScreenWithKeys ? a.mozRequestFullScreenWithKeys() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) :
            Lj(a) : Lj(a)))
    };
    Ij.prototype.s = function () {
        var a = this.element.firstElementChild, b = this.a;
        Jj() ? (a.className = this.c + "-true", fg(this.o, this.l)) : (a.className = this.c + "-false", fg(this.l, this.o));
        b && b.Gc()
    };
    Ij.prototype.setMap = function (a) {
        rg.prototype.setMap.call(this, a);
        a && this.v.push(z(document, Mj(), this.s, this))
    };
    function Kj() {
        var a = document.body;
        return !!(a.webkitRequestFullscreen || a.mozRequestFullScreen && document.mozFullScreenEnabled || a.msRequestFullscreen && document.msFullscreenEnabled || a.requestFullscreen && document.fullscreenEnabled)
    }

    function Jj() {
        return !!(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement)
    }

    function Lj(a) {
        a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen()
    }

    var Mj = function () {
        var a;
        return function () {
            if (!a) {
                var b = document.body;
                b.webkitRequestFullscreen ? a = "webkitfullscreenchange" : b.mozRequestFullScreen ? a = "mozfullscreenchange" : b.msRequestFullscreen ? a = "MSFullscreenChange" : b.requestFullscreen && (a = "fullscreenchange")
            }
            return a
        }
    }();

    function Nj(a) {
        a = a ? a : {};
        var b = document.createElement("DIV");
        b.className = void 0 !== a.className ? a.className : "ol-mouse-position";
        rg.call(this, {element: b, render: a.render ? a.render : Oj, target: a.target});
        z(this, Yc(Pj), this.jn, this);
        a.coordinateFormat && this.zj(a.coordinateFormat);
        a.projection && this.ri(a.projection);
        this.s = void 0 !== a.undefinedHTML ? a.undefinedHTML : "";
        this.o = b.innerHTML;
        this.l = this.j = this.c = null
    }

    v(Nj, rg);
    function Oj(a) {
        a = a.frameState;
        a ? this.c != a.viewState.projection && (this.c = a.viewState.projection, this.j = null) : this.c = null;
        Qj(this, this.l)
    }

    k = Nj.prototype;
    k.jn = function () {
        this.j = null
    };
    k.Oh = function () {
        return this.get(Rj)
    };
    k.pi = function () {
        return this.get(Pj)
    };
    k.Ul = function (a) {
        this.l = this.a.od(a);
        Qj(this, this.l)
    };
    k.Vl = function () {
        Qj(this, null);
        this.l = null
    };
    k.setMap = function (a) {
        rg.prototype.setMap.call(this, a);
        a && (a = a.a, this.v.push(z(a, "mousemove", this.Ul, this), z(a, "mouseout", this.Vl, this)))
    };
    k.zj = function (a) {
        this.set(Rj, a)
    };
    k.ri = function (a) {
        this.set(Pj, Zb(a))
    };
    function Qj(a, b) {
        var c = a.s;
        if (b && a.c) {
            if (!a.j) {
                var d = a.pi();
                a.j = d ? $b(a.c, d) : jc
            }
            if (b = a.a.Na(b)) a.j(b, b), c = (c = a.Oh()) ? c(b) : b.toString()
        }
        a.o && c == a.o || (a.element.innerHTML = c, a.o = c)
    }

    var Pj = "projection", Rj = "coordinateFormat";

    function Sj(a) {
        Wc.call(this);
        this.f = a.id;
        this.o = void 0 !== a.insertFirst ? a.insertFirst : !0;
        this.v = void 0 !== a.stopEvent ? a.stopEvent : !0;
        this.c = document.createElement("DIV");
        this.c.className = "ol-overlay-container ol-selectable";
        this.c.style.position = "absolute";
        this.autoPan = void 0 !== a.autoPan ? a.autoPan : !1;
        this.j = a.autoPanAnimation || {};
        this.l = void 0 !== a.autoPanMargin ? a.autoPanMargin : 20;
        this.a = {De: "", Ue: "", yf: "", Ff: "", visible: !0};
        this.i = null;
        z(this, Yc(Tj), this.Il, this);
        z(this, Yc(Uj), this.Sl, this);
        z(this, Yc(Vj),
            this.Wl, this);
        z(this, Yc(Wj), this.Yl, this);
        z(this, Yc(Xj), this.Zl, this);
        void 0 !== a.element && this.Aj(a.element);
        this.Fj(void 0 !== a.offset ? a.offset : [0, 0]);
        this.Ij(void 0 !== a.positioning ? a.positioning : "top-left");
        void 0 !== a.position && this.Ye(a.position)
    }

    v(Sj, Wc);
    k = Sj.prototype;
    k.Wd = function () {
        return this.get(Tj)
    };
    k.Um = function () {
        return this.f
    };
    k.Xe = function () {
        return this.get(Uj)
    };
    k.Uh = function () {
        return this.get(Vj)
    };
    k.ni = function () {
        return this.get(Wj)
    };
    k.Vh = function () {
        return this.get(Xj)
    };
    k.Il = function () {
        for (var a = this.c; a.lastChild;)a.removeChild(a.lastChild);
        (a = this.Wd()) && this.c.appendChild(a)
    };
    k.Sl = function () {
        this.i && (gg(this.c), Hc(this.i), this.i = null);
        var a = this.Xe();
        a && (this.i = z(a, "postrender", this.render, this), Yj(this), a = this.v ? a.v : a.s, this.o ? a.insertBefore(this.c, a.childNodes[0] || null) : a.appendChild(this.c))
    };
    k.render = function () {
        Yj(this)
    };
    k.Wl = function () {
        Yj(this)
    };
    k.Yl = function () {
        Yj(this);
        if (this.get(Wj) && this.autoPan) {
            var a = this.Xe();
            if (a && a.vc()) {
                var b = Zj(a.vc(), a.yb()), c = this.Wd(), d = c.offsetWidth, e = getComputedStyle(c);
                d += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10);
                e = c.offsetHeight;
                var f = getComputedStyle(c);
                e += parseInt(f.marginTop, 10) + parseInt(f.marginBottom, 10);
                var g = Zj(c, [d, e]);
                c = this.l;
                Wa(b, g) || (d = g[0] - b[0], e = b[2] - g[2], f = g[1] - b[1], g = b[3] - g[3], b = [0, 0], 0 > d ? b[0] = d - c : 0 > e && (b[0] = Math.abs(e) + c), 0 > f ? b[1] = f - c : 0 > g && (b[1] = Math.abs(g) + c), 0 === b[0] && 0 === b[1]) ||
                (c = a.$().wa(), c = a.Ha(c), b = [c[0] + b[0], c[1] + b[1]], a.$().animate({
                    center: a.Na(b),
                    duration: this.j.duration,
                    easing: this.j.easing
                }))
            }
        }
    };
    k.Zl = function () {
        Yj(this)
    };
    k.Aj = function (a) {
        this.set(Tj, a)
    };
    k.setMap = function (a) {
        this.set(Uj, a)
    };
    k.Fj = function (a) {
        this.set(Vj, a)
    };
    k.Ye = function (a) {
        this.set(Wj, a)
    };
    function Zj(a, b) {
        var c = a.getBoundingClientRect();
        a = c.left + window.pageXOffset;
        c = c.top + window.pageYOffset;
        return [a, c, a + b[0], c + b[1]]
    }

    k.Ij = function (a) {
        this.set(Xj, a)
    };
    function ak(a, b) {
        a.a.visible !== b && (a.c.style.display = b ? "" : "none", a.a.visible = b)
    }

    function Yj(a) {
        var b = a.Xe(), c = a.ni();
        if (b && b.c && c) {
            c = b.Ha(c);
            var d = b.yb();
            b = a.c.style;
            var e = a.Uh(), f = a.Vh();
            ak(a, !0);
            var g = e[0];
            e = e[1];
            if ("bottom-right" == f || "center-right" == f || "top-right" == f) "" !== a.a.Ue && (a.a.Ue = b.left = ""), g = Math.round(d[0] - c[0] - g) + "px", a.a.yf != g && (a.a.yf = b.right = g); else {
                "" !== a.a.yf && (a.a.yf = b.right = "");
                if ("bottom-center" == f || "center-center" == f || "top-center" == f) g -= a.c.offsetWidth / 2;
                g = Math.round(c[0] + g) + "px";
                a.a.Ue != g && (a.a.Ue = b.left = g)
            }
            if ("bottom-left" == f || "bottom-center" == f || "bottom-right" ==
                f) "" !== a.a.Ff && (a.a.Ff = b.top = ""), c = Math.round(d[1] - c[1] - e) + "px", a.a.De != c && (a.a.De = b.bottom = c); else {
                "" !== a.a.De && (a.a.De = b.bottom = "");
                if ("center-left" == f || "center-center" == f || "center-right" == f) e -= a.c.offsetHeight / 2;
                c = Math.round(c[1] + e) + "px";
                a.a.Ff != c && (a.a.Ff = b.top = c)
            }
        } else ak(a, !1)
    }

    var Tj = "element", Uj = "map", Vj = "offset", Wj = "position", Xj = "positioning";

    function bk(a) {
        function b(a) {
            a = h.Xd(a);
            l.a.$().rb(a);
            window.removeEventListener("mousemove", c);
            window.removeEventListener("mouseup", b)
        }

        function c(a) {
            a = h.Xd({clientX: a.clientX - n.offsetWidth / 2, clientY: a.clientY + n.offsetHeight / 2});
            m.Ye(a)
        }

        a = a ? a : {};
        this.j = void 0 !== a.collapsed ? a.collapsed : !0;
        this.l = void 0 !== a.collapsible ? a.collapsible : !0;
        this.l || (this.j = !1);
        var d = void 0 !== a.className ? a.className : "ol-overviewmap",
            e = void 0 !== a.tipLabel ? a.tipLabel : "Overview map", f = void 0 !== a.collapseLabel ? a.collapseLabel :
                "\u00ab";
        "string" === typeof f ? (this.s = document.createElement("span"), this.s.textContent = f) : this.s = f;
        f = void 0 !== a.label ? a.label : "\u00bb";
        "string" === typeof f ? (this.C = document.createElement("span"), this.C.textContent = f) : this.C = f;
        var g = this.l && !this.j ? this.s : this.C;
        f = document.createElement("button");
        f.setAttribute("type", "button");
        f.title = e;
        f.appendChild(g);
        z(f, "click", this.mn, this);
        this.D = document.createElement("DIV");
        this.D.className = "ol-overviewmap-map";
        var h = this.c = new F({
            controls: new ad, interactions: new ad,
            view: a.view
        });
        a.layers && a.layers.forEach(function (a) {
            h.Be(a)
        }, this);
        e = document.createElement("DIV");
        e.className = "ol-overviewmap-box";
        e.style.boxSizing = "border-box";
        this.o = new Sj({position: [0, 0], positioning: "bottom-left", element: e});
        this.c.Ce(this.o);
        e = document.createElement("div");
        e.className = d + " ol-unselectable ol-control" + (this.j && this.l ? " ol-collapsed" : "") + (this.l ? "" : " ol-uncollapsible");
        e.appendChild(this.D);
        e.appendChild(f);
        rg.call(this, {element: e, render: a.render ? a.render : ck, target: a.target});
        var l = this, m = this.o, n = this.o.Wd();
        n.addEventListener("mousedown", function () {
            window.addEventListener("mousemove", c);
            window.addEventListener("mouseup", b)
        })
    }

    v(bk, rg);
    k = bk.prototype;
    k.setMap = function (a) {
        var b = this.a;
        a !== b && (b && ((b = b.$()) && Nc(b, Yc("rotation"), this.Se, this), this.c.vd(null)), rg.prototype.setMap.call(this, a), a && (this.c.vd(this.D), this.v.push(z(a, "propertychange", this.Tl, this)), 0 === this.c.Ze().fc() && this.c.Af(a.dc()), a = a.$())) && (z(a, Yc("rotation"), this.Se, this), Xf(a) && (this.c.Gc(), dk(this)))
    };
    k.Tl = function (a) {
        "view" === a.key && ((a = a.oldValue) && Nc(a, Yc("rotation"), this.Se, this), a = this.a.$(), z(a, Yc("rotation"), this.Se, this))
    };
    k.Se = function () {
        this.c.$().ee(this.a.$().Pa())
    };
    function ck() {
        var a = this.a, b = this.c;
        if (a.c && b.c) {
            var c = a.yb();
            a = a.$().jd(c);
            var d = b.yb();
            c = b.$().jd(d);
            var e = b.Ha(ib(a)), f = b.Ha(gb(a));
            b = Math.abs(e[0] - f[0]);
            e = Math.abs(e[1] - f[1]);
            f = d[0];
            d = d[1];
            b < .1 * f || e < .1 * d || b > .75 * f || e > .75 * d ? dk(this) : Wa(c, a) || (a = this.c, c = this.a.$(), a.$().rb(c.wa()))
        }
        ek(this)
    }

    function dk(a) {
        var b = a.a;
        a = a.c;
        var c = b.yb();
        b = b.$().jd(c);
        a = a.$();
        rb(b, 1 / (.1 * Math.pow(2, Math.log(7.5) / Math.LN2 / 2)));
        a.Vf(b)
    }

    function ek(a) {
        var b = a.a, c = a.c;
        if (b.c && c.c) {
            var d = b.yb(), e = b.$(), f = c.$();
            c = e.Pa();
            b = a.o;
            var g = a.o.Wd(), h = e.jd(d);
            d = f.Oa();
            e = fb(h);
            f = hb(h);
            if (a = a.a.$().wa()) {
                var l = [e[0] - a[0], e[1] - a[1]];
                Fe(l, c);
                ze(l, a)
            }
            b.Ye(l);
            g && (g.style.width = Math.abs((e[0] - f[0]) / d) + "px", g.style.height = Math.abs((f[1] - e[1]) / d) + "px")
        }
    }

    k.mn = function (a) {
        a.preventDefault();
        fk(this)
    };
    function fk(a) {
        a.element.classList.toggle("ol-collapsed");
        a.j ? fg(a.s, a.C) : fg(a.C, a.s);
        a.j = !a.j;
        var b = a.c;
        a.j || b.c || (b.Gc(), dk(a), Mc(b, "postrender", function () {
            ek(this)
        }, a))
    }

    k.ln = function () {
        return this.l
    };
    k.pn = function (a) {
        this.l !== a && (this.l = a, this.element.classList.toggle("ol-uncollapsible"), !a && this.j && fk(this))
    };
    k.nn = function (a) {
        this.l && this.j !== a && fk(this)
    };
    k.kn = function () {
        return this.j
    };
    k.pl = function () {
        return this.c
    };
    function gk(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-scale-line";
        this.l = document.createElement("DIV");
        this.l.className = b + "-inner";
        this.c = document.createElement("DIV");
        this.c.className = b + " ol-unselectable";
        this.c.appendChild(this.l);
        this.s = null;
        this.o = void 0 !== a.minWidth ? a.minWidth : 64;
        this.j = !1;
        this.B = void 0;
        this.C = "";
        rg.call(this, {element: this.c, render: a.render ? a.render : hk, target: a.target});
        z(this, Yc(ik), this.U, this);
        this.I(a.units || "metric")
    }

    v(gk, rg);
    var jk = [1, 2, 5];
    gk.prototype.D = function () {
        return this.get(ik)
    };
    function hk(a) {
        (a = a.frameState) ? this.s = a.viewState : this.s = null;
        kk(this)
    }

    gk.prototype.U = function () {
        kk(this)
    };
    gk.prototype.I = function (a) {
        this.set(ik, a)
    };
    function kk(a) {
        var b = a.s;
        if (b) {
            var c = b.center, d = b.projection, e = a.D();
            b = Yb(d, b.resolution, c, "degrees" == e ? "degrees" : "m");
            var f = a.o * b;
            c = "";
            "degrees" == e ? (c = Eb.degrees, "degrees" == d.a ? f *= c : b /= c, f < c / 60 ? (c = "\u2033", b *= 3600) : f < c ? (c = "\u2032", b *= 60) : c = "\u00b0") : "imperial" == e ? .9144 > f ? (c = "in", b /= .0254) : 1609.344 > f ? (c = "ft", b /= .3048) : (c = "mi", b /= 1609.344) : "nautical" == e ? (b /= 1852, c = "nm") : "metric" == e ? .001 > f ? (c = "\u03bcm", b *= 1E6) : 1 > f ? (c = "mm", b *= 1E3) : 1E3 > f ? c = "m" : (c = "km", b /= 1E3) : "us" == e ? .9144 > f ? (c = "in", b *= 39.37) : 1609.344 >
            f ? (c = "ft", b /= .30480061) : (c = "mi", b /= 1609.3472) : wa(!1, 33);
            for (e = 3 * Math.floor(Math.log(a.o * b) / Math.log(10)); ;) {
                f = jk[(e % 3 + 3) % 3] * Math.pow(10, Math.floor(e / 3));
                d = Math.round(f / b);
                if (isNaN(d)) {
                    a.c.style.display = "none";
                    a.j = !1;
                    return
                }
                if (d >= a.o)break;
                ++e
            }
            b = f + " " + c;
            a.C != b && (a.l.innerHTML = b, a.C = b);
            a.B != d && (a.l.style.width = d + "px", a.B = d);
            a.j || (a.c.style.display = "", a.j = !0)
        } else a.j && (a.c.style.display = "none", a.j = !1)
    }

    var ik = "units";

    function lk(a) {
        a = a ? a : {};
        this.c = void 0;
        this.j = mk;
        this.C = this.o = 0;
        this.I = null;
        this.sa = !1;
        this.U = void 0 !== a.duration ? a.duration : 200;
        var b = void 0 !== a.className ? a.className : "ol-zoomslider", c = document.createElement("button");
        c.setAttribute("type", "button");
        c.className = b + "-thumb ol-unselectable";
        var d = document.createElement("div");
        d.className = b + " ol-unselectable ol-control";
        d.appendChild(c);
        this.l = new $d(d);
        z(this.l, "pointerdown", this.Hl, this);
        z(this.l, "pointermove", this.Fl, this);
        z(this.l, "pointerup", this.Gl,
            this);
        z(d, "click", this.El, this);
        z(c, "click", Sc);
        rg.call(this, {element: d, render: a.render ? a.render : nk})
    }

    v(lk, rg);
    lk.prototype.la = function () {
        Qc(this.l);
        rg.prototype.la.call(this)
    };
    var mk = 0;
    k = lk.prototype;
    k.setMap = function (a) {
        rg.prototype.setMap.call(this, a);
        a && a.render()
    };
    function nk(a) {
        if (a.frameState) {
            if (!this.sa) {
                var b = this.element, c = b.offsetWidth, d = b.offsetHeight, e = b.firstElementChild,
                    f = getComputedStyle(e);
                b = e.offsetWidth + parseFloat(f.marginRight) + parseFloat(f.marginLeft);
                e = e.offsetHeight + parseFloat(f.marginTop) + parseFloat(f.marginBottom);
                this.I = [b, e];
                c > d ? (this.j = 1, this.C = c - b) : (this.j = mk, this.o = d - e);
                this.sa = !0
            }
            a = a.frameState.viewState.resolution;
            a !== this.c && (this.c = a, ok(this, a))
        }
    }

    k.El = function (a) {
        var b = this.a.$();
        a = rk(this, Da(1 === this.j ? (a.offsetX - this.I[0] / 2) / this.C : (a.offsetY - this.I[1] / 2) / this.o, 0, 1));
        b.animate({resolution: b.constrainResolution(a), duration: this.U, easing: Ne})
    };
    k.Hl = function (a) {
        this.s || a.b.target !== this.element.firstElementChild || (Yf(this.a.$(), 1, 1), this.D = a.clientX, this.B = a.clientY, this.s = !0)
    };
    k.Fl = function (a) {
        if (this.s) {
            var b = this.element.firstElementChild;
            this.c = rk(this, Da(1 === this.j ? (a.clientX - this.D + parseInt(b.style.left, 10)) / this.C : (a.clientY - this.B + parseInt(b.style.top, 10)) / this.o, 0, 1));
            this.a.$().$c(this.c);
            ok(this, this.c);
            this.D = a.clientX;
            this.B = a.clientY
        }
    };
    k.Gl = function () {
        if (this.s) {
            var a = this.a.$();
            Yf(a, 1, -1);
            a.animate({resolution: a.constrainResolution(this.c), duration: this.U, easing: Ne});
            this.s = !1;
            this.B = this.D = void 0
        }
    };
    function ok(a, b) {
        b = 1 - dg(a.a.$())(b);
        var c = a.element.firstElementChild;
        1 == a.j ? c.style.left = a.C * b + "px" : c.style.top = a.o * b + "px"
    }

    function rk(a, b) {
        return cg(a.a.$())(1 - b)
    };
    function sk(a) {
        a = a ? a : {};
        this.c = a.extent ? a.extent : null;
        var b = void 0 !== a.className ? a.className : "ol-zoom-extent", c = void 0 !== a.label ? a.label : "E",
            d = void 0 !== a.tipLabel ? a.tipLabel : "Fit to extent", e = document.createElement("button");
        e.setAttribute("type", "button");
        e.title = d;
        e.appendChild("string" === typeof c ? document.createTextNode(c) : c);
        z(e, "click", this.j, this);
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control";
        c.appendChild(e);
        rg.call(this, {element: c, target: a.target})
    }

    v(sk, rg);
    sk.prototype.j = function (a) {
        a.preventDefault();
        a = this.a.$();
        var b = this.c ? this.c : a.v.G();
        a.Vf(b)
    };
    function tk(a) {
        Wc.call(this);
        a = a ? a : {};
        this.a = null;
        z(this, Yc(uk), this.Hm, this);
        this.rg(void 0 !== a.tracking ? a.tracking : !1)
    }

    v(tk, Wc);
    k = tk.prototype;
    k.la = function () {
        this.rg(!1);
        Wc.prototype.la.call(this)
    };
    k.kp = function (a) {
        if (null !== a.alpha) {
            var b = Ia(a.alpha);
            this.set(vk, b);
            "boolean" === typeof a.absolute && a.absolute ? this.set(wk, b) : "number" === typeof a.webkitCompassHeading && -1 != a.webkitCompassAccuracy && this.set(wk, Ia(a.webkitCompassHeading))
        }
        null !== a.beta && this.set(xk, Ia(a.beta));
        null !== a.gamma && this.set(yk, Ia(a.gamma));
        this.u()
    };
    k.Fm = function () {
        return this.get(vk)
    };
    k.Tk = function () {
        return this.get(xk)
    };
    k.Zk = function () {
        return this.get(yk)
    };
    k.Gm = function () {
        return this.get(wk)
    };
    k.ji = function () {
        return this.get(uk)
    };
    k.Hm = function () {
        if (td) {
            var a = this.ji();
            a && !this.a ? this.a = z(window, "deviceorientation", this.kp, this) : a || null === this.a || (Hc(this.a), this.a = null)
        }
    };
    k.rg = function (a) {
        this.set(uk, a)
    };
    var vk = "alpha", xk = "beta", yk = "gamma", wk = "heading", uk = "tracking";

    function zk(a) {
        this.i = a.opacity;
        this.o = a.rotateWithView;
        this.f = a.rotation;
        this.a = a.scale;
        this.v = a.snapToPixel
    }

    k = zk.prototype;
    k.jf = function () {
        return this.i
    };
    k.kf = function () {
        return this.o
    };
    k.lf = function () {
        return this.f
    };
    k.mf = function () {
        return this.a
    };
    k.Me = function () {
        return this.v
    };
    k.Bd = function (a) {
        this.i = a
    };
    k.nf = function (a) {
        this.f = a
    };
    k.Cd = function (a) {
        this.a = a
    };
    function Ak(a) {
        this.C = this.s = this.c = null;
        this.Wa = void 0 !== a.fill ? a.fill : null;
        this.qa = [0, 0];
        this.l = a.points;
        this.b = void 0 !== a.radius ? a.radius : a.radius1;
        this.g = a.radius2;
        this.j = void 0 !== a.angle ? a.angle : 0;
        this.Ta = void 0 !== a.stroke ? a.stroke : null;
        this.B = this.ra = this.D = null;
        this.O = a.atlasManager;
        Bk(this, this.O);
        zk.call(this, {
            opacity: 1,
            rotateWithView: void 0 !== a.rotateWithView ? a.rotateWithView : !1,
            rotation: void 0 !== a.rotation ? a.rotation : 0,
            scale: 1,
            snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0
        })
    }

    v(Ak, zk);
    k = Ak.prototype;
    k.clone = function () {
        var a = new Ak({
            fill: this.Ca() ? this.Ca().clone() : void 0,
            points: this.l,
            radius: this.b,
            radius2: this.g,
            angle: this.j,
            snapToPixel: this.v,
            stroke: this.Da() ? this.Da().clone() : void 0,
            rotation: this.f,
            rotateWithView: this.o,
            atlasManager: this.O
        });
        a.Bd(this.i);
        a.Cd(this.a);
        return a
    };
    k.Nc = function () {
        return this.D
    };
    k.dj = function () {
        return this.j
    };
    k.Ca = function () {
        return this.Wa
    };
    k.Dg = function () {
        return this.C
    };
    k.Y = function () {
        return this.s
    };
    k.Je = function () {
        return this.B
    };
    k.hf = function () {
        return 2
    };
    k.Uc = function () {
        return this.qa
    };
    k.ej = function () {
        return this.l
    };
    k.fj = function () {
        return this.b
    };
    k.Wh = function () {
        return this.g
    };
    k.jc = function () {
        return this.ra
    };
    k.Da = function () {
        return this.Ta
    };
    k.ei = function () {
    };
    k.load = function () {
    };
    k.Rj = function () {
    };
    function Bk(a, b) {
        var c = "", d = "", e = 0, f = null, g = 0, h = 0;
        if (a.Ta) {
            var l = a.Ta.b;
            null === l && (l = Mh);
            l = Uh(l);
            h = a.Ta.c;
            void 0 === h && (h = 1);
            f = a.Ta.g;
            g = a.Ta.i;
            rd || (f = null, g = 0);
            d = a.Ta.j;
            void 0 === d && (d = "round");
            c = a.Ta.f;
            void 0 === c && (c = "round");
            e = a.Ta.l;
            void 0 === e && (e = 10)
        }
        var m = 2 * (a.b + h) + 1;
        c = {strokeStyle: l, Pj: h, size: m, lineCap: c, lineDash: f, lineDashOffset: g, lineJoin: d, miterLimit: e};
        if (void 0 === b) {
            var n = eg(m, m);
            a.s = n.canvas;
            b = m = a.s.width;
            a.Hh(c, n, 0, 0);
            a.Wa ? a.C = a.s : (n = eg(c.size, c.size), a.C = n.canvas, a.Gh(c, n, 0, 0))
        } else m =
            Math.round(m), (d = !a.Wa) && (n = a.Gh.bind(a, c)), a.Ta ? (e = a.Ta, void 0 === e.a && (e.a = "s", e.a = e.b ? "string" === typeof e.b ? e.a + e.b : e.a + w(e.b).toString() : e.a + "-", e.a += "," + (void 0 !== e.f ? e.f.toString() : "-") + "," + (e.g ? e.g.toString() : "-") + "," + (void 0 !== e.i ? e.i : "-") + "," + (void 0 !== e.j ? e.j : "-") + "," + (void 0 !== e.l ? e.l.toString() : "-") + "," + (void 0 !== e.c ? e.c.toString() : "-")), e = e.a) : e = "-", a.Wa ? (f = a.Wa, void 0 === f.a && (f.a = f.b instanceof CanvasPattern || f.b instanceof CanvasGradient ? w(f.b).toString() : "f" + (f.b ? Sh(f.b) : "-")), f = f.a) :
            f = "-", a.c && e == a.c[1] && f == a.c[2] && a.b == a.c[3] && a.g == a.c[4] && a.j == a.c[5] && a.l == a.c[6] || (a.c = ["r" + e + f + (void 0 !== a.b ? a.b.toString() : "-") + (void 0 !== a.g ? a.g.toString() : "-") + (void 0 !== a.j ? a.j.toString() : "-") + (void 0 !== a.l ? a.l.toString() : "-"), e, f, a.b, a.g, a.j, a.l]), n = b.add(a.c[0], m, m, a.Hh.bind(a, c), n), a.s = n.image, a.qa = [n.offsetX, n.offsetY], b = n.image.width, a.C = d ? n.im : a.s;
        a.D = [m / 2, m / 2];
        a.ra = [m, m];
        a.B = [b, b]
    }

    k.Hh = function (a, b, c, d) {
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        var e = this.l;
        if (Infinity === e) b.arc(a.size / 2, a.size / 2, this.b, 0, 2 * Math.PI, !0); else {
            var f = void 0 !== this.g ? this.g : this.b;
            f !== this.b && (e *= 2);
            for (c = 0; c <= e; c++) {
                d = 2 * c * Math.PI / e - Math.PI / 2 + this.j;
                var g = 0 === c % 2 ? this.b : f;
                b.lineTo(a.size / 2 + g * Math.cos(d), a.size / 2 + g * Math.sin(d))
            }
        }
        this.Wa && (c = this.Wa.b, null === c && (c = Kh), b.fillStyle = Uh(c), b.fill());
        this.Ta && (b.strokeStyle = a.strokeStyle, b.lineWidth = a.Pj, a.lineDash && (b.setLineDash(a.lineDash),
            b.lineDashOffset = a.lineDashOffset), b.lineCap = a.lineCap, b.lineJoin = a.lineJoin, b.miterLimit = a.miterLimit, b.stroke());
        b.closePath()
    };
    k.Gh = function (a, b, c, d) {
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        c = this.l;
        if (Infinity === c) b.arc(a.size / 2, a.size / 2, this.b, 0, 2 * Math.PI, !0); else {
            d = void 0 !== this.g ? this.g : this.b;
            d !== this.b && (c *= 2);
            var e;
            for (e = 0; e <= c; e++) {
                var f = 2 * e * Math.PI / c - Math.PI / 2 + this.j;
                var g = 0 === e % 2 ? this.b : d;
                b.lineTo(a.size / 2 + g * Math.cos(f), a.size / 2 + g * Math.sin(f))
            }
        }
        b.fillStyle = Kh;
        b.fill();
        this.Ta && (b.strokeStyle = a.strokeStyle, b.lineWidth = a.Pj, a.lineDash && (b.setLineDash(a.lineDash), b.lineDashOffset = a.lineDashOffset),
            b.stroke());
        b.closePath()
    };
    function Ck(a) {
        a = a || {};
        Ak.call(this, {
            points: Infinity,
            fill: a.fill,
            radius: a.radius,
            snapToPixel: a.snapToPixel,
            stroke: a.stroke,
            atlasManager: a.atlasManager
        })
    }

    v(Ck, Ak);
    Ck.prototype.clone = function () {
        var a = new Ck({
            fill: this.Ca() ? this.Ca().clone() : void 0,
            stroke: this.Da() ? this.Da().clone() : void 0,
            radius: this.b,
            snapToPixel: this.v,
            atlasManager: this.O
        });
        a.Bd(this.i);
        a.Cd(this.a);
        return a
    };
    Ck.prototype.Zc = function (a) {
        this.b = a;
        Bk(this, this.O)
    };
    function Dk(a) {
        a = a || {};
        this.b = void 0 !== a.color ? a.color : null;
        this.a = void 0
    }

    Dk.prototype.clone = function () {
        var a = this.b;
        return new Dk({color: a && a.slice ? a.slice() : a || void 0})
    };
    Dk.prototype.g = function () {
        return this.b
    };
    Dk.prototype.c = function (a) {
        this.b = a;
        this.a = void 0
    };
    function Ek(a) {
        a = a || {};
        this.b = void 0 !== a.color ? a.color : null;
        this.f = a.lineCap;
        this.g = void 0 !== a.lineDash ? a.lineDash : null;
        this.i = a.lineDashOffset;
        this.j = a.lineJoin;
        this.l = a.miterLimit;
        this.c = a.width;
        this.a = void 0
    }

    k = Ek.prototype;
    k.clone = function () {
        var a = this.b;
        return new Ek({
            color: a && a.slice ? a.slice() : a || void 0,
            lineCap: this.f,
            lineDash: this.g ? this.g.slice() : void 0,
            lineDashOffset: this.i,
            lineJoin: this.j,
            miterLimit: this.l,
            width: this.c
        })
    };
    k.Wo = function () {
        return this.b
    };
    k.el = function () {
        return this.f
    };
    k.Xo = function () {
        return this.g
    };
    k.fl = function () {
        return this.i
    };
    k.gl = function () {
        return this.j
    };
    k.ml = function () {
        return this.l
    };
    k.Yo = function () {
        return this.c
    };
    k.Zo = function (a) {
        this.b = a;
        this.a = void 0
    };
    k.fq = function (a) {
        this.f = a;
        this.a = void 0
    };
    k.setLineDash = function (a) {
        this.g = a;
        this.a = void 0
    };
    k.gq = function (a) {
        this.i = a;
        this.a = void 0
    };
    k.hq = function (a) {
        this.j = a;
        this.a = void 0
    };
    k.lq = function (a) {
        this.l = a;
        this.a = void 0
    };
    k.pq = function (a) {
        this.c = a;
        this.a = void 0
    };
    function Fk(a) {
        a = a || {};
        this.Mc = null;
        this.Za = Gk;
        void 0 !== a.geometry && this.Sa(a.geometry);
        this.Wa = void 0 !== a.fill ? a.fill : null;
        this.N = void 0 !== a.image ? a.image : null;
        this.kc = a.renderer ? a.renderer : null;
        this.Ta = void 0 !== a.stroke ? a.stroke : null;
        this.pa = void 0 !== a.text ? a.text : null;
        this.Vj = a.zIndex
    }

    k = Fk.prototype;
    k.clone = function () {
        var a = this.W();
        a && a.clone && (a = a.clone());
        return new Fk({
            geometry: a,
            fill: this.Ca() ? this.Ca().clone() : void 0,
            image: this.Y() ? this.Y().clone() : void 0,
            stroke: this.Da() ? this.Da().clone() : void 0,
            text: this.Ia() ? this.Ia().clone() : void 0,
            zIndex: this.ya()
        })
    };
    k.Ke = function () {
        return this.kc
    };
    k.nq = function (a) {
        this.kc = a
    };
    k.W = function () {
        return this.Mc
    };
    k.$k = function () {
        return this.Za
    };
    k.Ca = function () {
        return this.Wa
    };
    k.zf = function (a) {
        this.Wa = a
    };
    k.Y = function () {
        return this.N
    };
    k.hh = function (a) {
        this.N = a
    };
    k.Da = function () {
        return this.Ta
    };
    k.Bf = function (a) {
        this.Ta = a
    };
    k.Ia = function () {
        return this.pa
    };
    k.Fd = function (a) {
        this.pa = a
    };
    k.ya = function () {
        return this.Vj
    };
    k.Sa = function (a) {
        "function" === typeof a ? this.Za = a : "string" === typeof a ? this.Za = function (b) {
            return b.get(a)
        } : a ? a && (this.Za = function () {
                return a
            }) : this.Za = Gk;
        this.Mc = a
    };
    k.Xb = function (a) {
        this.Vj = a
    };
    function Hk(a) {
        if ("function" !== typeof a) {
            if (Array.isArray(a))var b = a; else wa(a instanceof Fk, 41), b = [a];
            a = function () {
                return b
            }
        }
        return a
    }

    var Ik = null;

    function Jk() {
        if (!Ik) {
            var a = new Dk({color: "rgba(255,255,255,0.4)"}), b = new Ek({color: "#3399CC", width: 1.25});
            Ik = [new Fk({image: new Ck({fill: a, stroke: b, radius: 5}), fill: a, stroke: b})]
        }
        return Ik
    }

    function Kk() {
        var a = {}, b = [255, 255, 255, 1], c = [0, 153, 255, 1];
        a.Polygon = [new Fk({fill: new Dk({color: [255, 255, 255, .5]})})];
        a.MultiPolygon = a.Polygon;
        a.LineString = [new Fk({stroke: new Ek({color: b, width: 5})}), new Fk({stroke: new Ek({color: c, width: 3})})];
        a.MultiLineString = a.LineString;
        a.Circle = a.Polygon.concat(a.LineString);
        a.Point = [new Fk({
            image: new Ck({radius: 6, fill: new Dk({color: c}), stroke: new Ek({color: b, width: 1.5})}),
            zIndex: Infinity
        })];
        a.MultiPoint = a.Point;
        a.GeometryCollection = a.Polygon.concat(a.LineString,
            a.Point);
        return a
    }

    function Gk(a) {
        return a.W()
    };
    function Lk(a) {
        Wc.call(this);
        this.c = void 0;
        this.a = "geometry";
        this.f = null;
        this.j = void 0;
        this.i = null;
        z(this, Yc(this.a), this.Qe, this);
        void 0 !== a && (a instanceof ff || !a ? this.Sa(a) : this.H(a))
    }

    v(Lk, Wc);
    k = Lk.prototype;
    k.clone = function () {
        var a = new Lk(this.M());
        a.Yc(this.a);
        var b = this.W();
        b && a.Sa(b.clone());
        (b = this.f) && a.sg(b);
        return a
    };
    k.W = function () {
        return this.get(this.a)
    };
    k.Im = function () {
        return this.c
    };
    k.al = function () {
        return this.a
    };
    k.Jm = function () {
        return this.f
    };
    k.bb = function () {
        return this.j
    };
    k.Jl = function () {
        this.u()
    };
    k.Qe = function () {
        this.i && (Hc(this.i), this.i = null);
        var a = this.W();
        a && (this.i = z(a, "change", this.Jl, this));
        this.u()
    };
    k.Sa = function (a) {
        this.set(this.a, a)
    };
    k.sg = function (a) {
        this.j = (this.f = a) ? Mk(a) : void 0;
        this.u()
    };
    k.lc = function (a) {
        this.c = a;
        this.u()
    };
    k.Yc = function (a) {
        Nc(this, Yc(this.a), this.Qe, this);
        this.a = a;
        z(this, Yc(this.a), this.Qe, this);
        this.Qe()
    };
    function Mk(a) {
        var b;
        if ("function" === typeof a) 2 == a.length ? b = function (b) {
            return a(this, b)
        } : b = a; else {
            if (Array.isArray(a))var c = a; else wa(a instanceof Fk, 41), c = [a];
            b = function () {
                return c
            }
        }
        return b
    };
    var Nk = document.implementation.createDocument("", "", null);

    function Ok(a, b) {
        return Nk.createElementNS(a, b)
    }

    function Pk(a, b) {
        return Qk(a, b, []).join("")
    }

    function Qk(a, b, c) {
        if (a.nodeType == Node.CDATA_SECTION_NODE || a.nodeType == Node.TEXT_NODE) b ? c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : c.push(a.nodeValue); else for (a = a.firstChild; a; a = a.nextSibling)Qk(a, b, c);
        return c
    }

    function Rk(a) {
        return a instanceof Document
    }

    function Sk(a) {
        return a instanceof Node
    }

    function Tk(a) {
        return (new DOMParser).parseFromString(a, "application/xml")
    }

    function Uk(a, b) {
        return function (c, d) {
            c = a.call(b, c, d);
            void 0 !== c && ja(d[d.length - 1], c)
        }
    }

    function Vk(a, b) {
        return function (c, d) {
            c = a.call(void 0 !== b ? b : this, c, d);
            void 0 !== c && d[d.length - 1].push(c)
        }
    }

    function Wk(a, b) {
        return function (c, d) {
            c = a.call(void 0 !== b ? b : this, c, d);
            void 0 !== c && (d[d.length - 1] = c)
        }
    }

    function Xk(a) {
        return function (b, c) {
            var d = a.call(this, b, c);
            if (void 0 !== d) {
                c = c[c.length - 1];
                b = b.localName;
                var e;
                b in c ? e = c[b] : e = c[b] = [];
                e.push(d)
            }
        }
    }

    function H(a, b) {
        return function (c, d) {
            var e = a.call(this, c, d);
            void 0 !== e && (d[d.length - 1][void 0 !== b ? b : c.localName] = e)
        }
    }

    function I(a, b) {
        return function (c, d, e) {
            a.call(void 0 !== b ? b : this, c, d, e);
            e[e.length - 1].node.appendChild(c)
        }
    }

    function Yk(a) {
        var b, c;
        return function (d, e, f) {
            if (!b) {
                b = {};
                var g = {};
                g[d.localName] = a;
                b[d.namespaceURI] = g;
                c = Zk(d.localName)
            }
            $k(b, c, e, f)
        }
    }

    function Zk(a, b) {
        return function (c, d, e) {
            c = d[d.length - 1].node;
            d = a;
            void 0 === d && (d = e);
            e = b;
            void 0 === b && (e = c.namespaceURI);
            return Ok(e, d)
        }
    }

    var al = Zk();

    function bl(a, b) {
        for (var c = b.length, d = Array(c), e = 0; e < c; ++e)d[e] = a[b[e]];
        return d
    }

    function J(a, b, c) {
        c = void 0 !== c ? c : {};
        var d;
        var e = 0;
        for (d = a.length; e < d; ++e)c[a[e]] = b;
        return c
    }

    function cl(a, b, c, d) {
        for (b = b.firstElementChild; b; b = b.nextElementSibling) {
            var e = a[b.namespaceURI];
            void 0 !== e && (e = e[b.localName]) && e.call(d, b, c)
        }
    }

    function K(a, b, c, d, e) {
        d.push(a);
        cl(b, c, d, e);
        return d.pop()
    }

    function $k(a, b, c, d, e, f) {
        for (var g = (void 0 !== e ? e : c).length, h, l,
                 m = 0; m < g; ++m)h = c[m], void 0 !== h && (l = b.call(f, h, d, void 0 !== e ? e[m] : void 0), void 0 !== l && a[l.namespaceURI][l.localName].call(f, l, h, d))
    }

    function dl(a, b, c, d, e, f, g) {
        e.push(a);
        $k(b, c, d, e, f, g);
        e.pop()
    };
    function el(a, b, c, d) {
        return function (e, f, g) {
            var h = new XMLHttpRequest;
            h.open("GET", "function" === typeof a ? a(e, f, g) : a, !0);
            "arraybuffer" == b.S() && (h.responseType = "arraybuffer");
            h.onload = function () {
                if (!h.status || 200 <= h.status && 300 > h.status) {
                    var a = b.S();
                    if ("json" == a || "text" == a)var e = h.responseText; else"xml" == a ? (e = h.responseXML) || (e = Tk(h.responseText)) : "arraybuffer" == a && (e = h.response);
                    e ? c.call(this, b.Ma(e, {featureProjection: g}), b.pb(e), b.eg()) : d.call(this)
                } else d.call(this)
            }.bind(this);
            h.onerror = function () {
                d.call(this)
            }.bind(this);
            h.send()
        }
    }

    function fl(a, b) {
        return el(a, b, function (a) {
            this.Hc(a)
        }, sa)
    };
    function gl() {
        this.i = this.defaultDataProjection = null
    }

    function hl(a, b, c) {
        var d;
        c && (d = {
            dataProjection: c.dataProjection ? c.dataProjection : a.pb(b),
            featureProjection: c.featureProjection
        });
        return il(a, d)
    }

    function il(a, b) {
        return tb({dataProjection: a.defaultDataProjection, featureProjection: a.i}, b)
    }

    gl.prototype.eg = function () {
        return null
    };
    function jl(a, b, c) {
        var d = c ? Zb(c.featureProjection) : null, e = c ? Zb(c.dataProjection) : null, f;
        d && e && !hc(d, e) ? a instanceof ff ? f = (b ? a.clone() : a).gb(b ? d : e, b ? e : d) : f = lc(a, e, d) : f = a;
        if (b && c && void 0 !== c.decimals) {
            var g = Math.pow(10, c.decimals);
            f === a && (f = f.clone());
            f.Ic(function (a) {
                for (var b = 0, c = a.length; b < c; ++b)a[b] = Math.round(a[b] * g) / g;
                return a
            })
        }
        return f
    };
    function kl() {
        gl.call(this)
    }

    v(kl, gl);
    function ll(a) {
        return "string" === typeof a ? (a = JSON.parse(a)) ? a : null : null !== a ? a : null
    }

    k = kl.prototype;
    k.S = function () {
        return "json"
    };
    k.Vb = function (a, b) {
        return this.Wc(ll(a), hl(this, a, b))
    };
    k.Ma = function (a, b) {
        return this.Lg(ll(a), hl(this, a, b))
    };
    k.Xc = function (a, b) {
        return this.Pg(ll(a), hl(this, a, b))
    };
    k.pb = function (a) {
        return this.Sg(ll(a))
    };
    k.Hd = function (a, b) {
        return JSON.stringify(this.ed(a, b))
    };
    k.Yb = function (a, b) {
        return JSON.stringify(this.ue(a, b))
    };
    k.fd = function (a, b) {
        return JSON.stringify(this.we(a, b))
    };
    function ml(a, b, c, d, e, f) {
        var g = NaN, h = NaN, l = (c - b) / d;
        if (1 === l) g = a[b], h = a[b + 1]; else if (2 == l) g = (1 - e) * a[b] + e * a[b + d], h = (1 - e) * a[b + 1] + e * a[b + d + 1]; else if (0 !== l) {
            h = a[b];
            l = a[b + 1];
            var m = 0;
            g = [0];
            var n;
            for (n = b + d; n < c; n += d) {
                var p = a[n], q = a[n + 1];
                m += Math.sqrt((p - h) * (p - h) + (q - l) * (q - l));
                g.push(m);
                h = p;
                l = q
            }
            c = e * m;
            l = 0;
            m = g.length;
            for (n = !1; l < m;)e = l + (m - l >> 1), h = +ea(g[e], c), 0 > h ? l = e + 1 : (m = e, n = !h);
            e = n ? l : ~l;
            0 > e ? (c = (c - g[-e - 2]) / (g[-e - 1] - g[-e - 2]), b += (-e - 2) * d, g = Ka(a[b], a[b + d], c), h = Ka(a[b + 1], a[b + d + 1], c)) : (g = a[b + e * d], h = a[b + e * d + 1])
        }
        return f ?
            (f[0] = g, f[1] = h, f) : [g, h]
    }

    function nl(a, b, c, d, e, f) {
        if (c == b)return null;
        if (e < a[b + d - 1])return f ? (c = a.slice(b, b + d), c[d - 1] = e, c) : null;
        if (a[c - 1] < e)return f ? (c = a.slice(c - d, c), c[d - 1] = e, c) : null;
        if (e == a[b + d - 1])return a.slice(b, b + d);
        b /= d;
        for (c /= d; b < c;)f = b + c >> 1, e < a[(f + 1) * d - 1] ? c = f : b = f + 1;
        c = a[b * d - 1];
        if (e == c)return a.slice((b - 1) * d, (b - 1) * d + d);
        f = (e - c) / (a[(b + 1) * d - 1] - c);
        c = [];
        var g;
        for (g = 0; g < d - 1; ++g)c.push(Ka(a[(b - 1) * d + g], a[b * d + g], f));
        c.push(e);
        return c
    }

    function pl(a, b, c, d, e, f) {
        var g = 0;
        if (f)return nl(a, g, b[b.length - 1], c, d, e);
        if (d < a[c - 1])return e ? (a = a.slice(0, c), a[c - 1] = d, a) : null;
        if (a[a.length - 1] < d)return e ? (a = a.slice(a.length - c), a[c - 1] = d, a) : null;
        e = 0;
        for (f = b.length; e < f; ++e) {
            var h = b[e];
            if (g != h) {
                if (d < a[g + c - 1])break; else if (d <= a[h - 1])return nl(a, g, h, c, d, !1);
                g = h
            }
        }
        return null
    };
    function L(a, b) {
        gf.call(this);
        this.c = null;
        this.s = this.C = this.j = -1;
        this.na(a, b)
    }

    v(L, gf);
    k = L.prototype;
    k.yk = function (a) {
        this.A ? ja(this.A, a) : this.A = a.slice();
        this.u()
    };
    k.clone = function () {
        var a = new L(null);
        a.aa(this.ka, this.A.slice());
        return a
    };
    k.Lb = function (a, b, c, d) {
        if (d < Ta(this.G(), a, b))return d;
        this.s != this.g && (this.C = Math.sqrt(qf(this.A, 0, this.A.length, this.a, 0)), this.s = this.g);
        return sf(this.A, 0, this.A.length, this.a, this.C, !1, a, b, c, d)
    };
    k.Ok = function (a, b) {
        return If(this.A, 0, this.A.length, this.a, a, b)
    };
    k.An = function (a, b) {
        return "XYM" != this.ka && "XYZM" != this.ka ? null : nl(this.A, 0, this.A.length, this.a, a, void 0 !== b ? b : !1)
    };
    k.V = function () {
        return xf(this.A, 0, this.A.length, this.a)
    };
    k.Nh = function (a, b) {
        return ml(this.A, 0, this.A.length, this.a, a, b)
    };
    k.Bn = function () {
        return Oi(this.A, 0, this.A.length, this.a)
    };
    function ci(a) {
        a.j != a.g && (a.c = a.Nh(.5, a.c), a.j = a.g);
        return a.c
    }

    k.rd = function (a) {
        var b = [];
        b.length = Af(this.A, 0, this.A.length, this.a, a, b, 0);
        a = new L(null);
        a.aa("XY", b);
        return a
    };
    k.S = function () {
        return "LineString"
    };
    k.Ya = function (a) {
        return Jf(this.A, 0, this.A.length, this.a, a)
    };
    k.na = function (a, b) {
        a ? (mf(this, b, a, 1), this.A || (this.A = []), this.A.length = vf(this.A, 0, a, this.a), this.u()) : this.aa("XY", null)
    };
    k.aa = function (a, b) {
        jf(this, a, b);
        this.u()
    };
    function M(a, b) {
        gf.call(this);
        this.c = [];
        this.j = this.s = -1;
        this.na(a, b)
    }

    v(M, gf);
    k = M.prototype;
    k.zk = function (a) {
        this.A ? ja(this.A, a.ca().slice()) : this.A = a.ca().slice();
        this.c.push(this.A.length);
        this.u()
    };
    k.clone = function () {
        var a = new M(null);
        a.aa(this.ka, this.A.slice(), this.c.slice());
        return a
    };
    k.Lb = function (a, b, c, d) {
        if (d < Ta(this.G(), a, b))return d;
        this.j != this.g && (this.s = Math.sqrt(rf(this.A, 0, this.c, this.a, 0)), this.j = this.g);
        return tf(this.A, 0, this.c, this.a, this.s, !1, a, b, c, d)
    };
    k.Dn = function (a, b, c) {
        return "XYM" != this.ka && "XYZM" != this.ka || 0 === this.A.length ? null : pl(this.A, this.c, this.a, a, void 0 !== b ? b : !1, void 0 !== c ? c : !1)
    };
    k.V = function () {
        return yf(this.A, 0, this.c, this.a)
    };
    k.lb = function () {
        return this.c
    };
    k.hl = function (a) {
        if (0 > a || this.c.length <= a)return null;
        var b = new L(null);
        b.aa(this.ka, this.A.slice(0 === a ? 0 : this.c[a - 1], this.c[a]));
        return b
    };
    k.qd = function () {
        var a = this.A, b = this.c, c = this.ka, d = [], e = 0, f;
        var g = 0;
        for (f = b.length; g < f; ++g) {
            var h = b[g], l = new L(null);
            l.aa(c, a.slice(e, h));
            d.push(l);
            e = h
        }
        return d
    };
    function di(a) {
        var b = [], c = a.A, d = 0, e = a.c;
        a = a.a;
        var f;
        var g = 0;
        for (f = e.length; g < f; ++g) {
            var h = e[g];
            d = ml(c, d, h, a, .5);
            ja(b, d);
            d = h
        }
        return b
    }

    k.rd = function (a) {
        var b = [], c = [], d = this.A, e = this.c, f = this.a, g = 0, h = 0, l;
        var m = 0;
        for (l = e.length; m < l; ++m) {
            var n = e[m];
            h = Af(d, g, n, f, a, b, h);
            c.push(h);
            g = n
        }
        b.length = h;
        a = new M(null);
        a.aa("XY", b, c);
        return a
    };
    k.S = function () {
        return "MultiLineString"
    };
    k.Ya = function (a) {
        a:{
            var b = this.A, c = this.c, d = this.a, e = 0, f;
            var g = 0;
            for (f = c.length; g < f; ++g) {
                if (Jf(b, e, c[g], d, a)) {
                    a = !0;
                    break a
                }
                e = c[g]
            }
            a = !1
        }
        return a
    };
    k.na = function (a, b) {
        a ? (mf(this, b, a, 2), this.A || (this.A = []), a = wf(this.A, 0, a, this.a, this.c), this.A.length = 0 === a.length ? 0 : a[a.length - 1], this.u()) : this.aa("XY", null, this.c)
    };
    k.aa = function (a, b, c) {
        jf(this, a, b);
        this.c = c;
        this.u()
    };
    function ql(a, b) {
        var c = a.ka, d = [], e = [], f;
        var g = 0;
        for (f = b.length; g < f; ++g) {
            var h = b[g];
            0 === g && (c = h.ka);
            ja(d, h.ca());
            e.push(d.length)
        }
        a.aa(c, d, e)
    };
    function rl(a, b) {
        gf.call(this);
        this.na(a, b)
    }

    v(rl, gf);
    k = rl.prototype;
    k.Bk = function (a) {
        this.A ? ja(this.A, a.ca()) : this.A = a.ca().slice();
        this.u()
    };
    k.clone = function () {
        var a = new rl(null);
        a.aa(this.ka, this.A.slice());
        return a
    };
    k.Lb = function (a, b, c, d) {
        if (d < Ta(this.G(), a, b))return d;
        var e = this.A, f = this.a, g;
        var h = 0;
        for (g = e.length; h < g; h += f) {
            var l = Ha(a, b, e[h], e[h + 1]);
            if (l < d) {
                d = l;
                for (l = 0; l < f; ++l)c[l] = e[h + l];
                c.length = f
            }
        }
        return d
    };
    k.V = function () {
        return xf(this.A, 0, this.A.length, this.a)
    };
    k.sl = function (a) {
        var b = this.A ? this.A.length / this.a : 0;
        if (0 > a || b <= a)return null;
        b = new C(null);
        b.aa(this.ka, this.A.slice(a * this.a, (a + 1) * this.a));
        return b
    };
    k.fe = function () {
        var a = this.A, b = this.ka, c = this.a, d = [], e;
        var f = 0;
        for (e = a.length; f < e; f += c) {
            var g = new C(null);
            g.aa(b, a.slice(f, f + c));
            d.push(g)
        }
        return d
    };
    k.S = function () {
        return "MultiPoint"
    };
    k.Ya = function (a) {
        var b = this.A, c = this.a, d;
        var e = 0;
        for (d = b.length; e < d; e += c) {
            var f = b[e];
            var g = b[e + 1];
            if (Va(a, f, g))return !0
        }
        return !1
    };
    k.na = function (a, b) {
        a ? (mf(this, b, a, 1), this.A || (this.A = []), this.A.length = vf(this.A, 0, a, this.a), this.u()) : this.aa("XY", null)
    };
    k.aa = function (a, b) {
        jf(this, a, b);
        this.u()
    };
    function O(a, b) {
        gf.call(this);
        this.c = [];
        this.s = -1;
        this.C = null;
        this.I = this.D = this.B = -1;
        this.j = null;
        this.na(a, b)
    }

    v(O, gf);
    k = O.prototype;
    k.Ck = function (a) {
        if (this.A) {
            var b = this.A.length;
            ja(this.A, a.ca());
            a = a.lb().slice();
            var c;
            var d = 0;
            for (c = a.length; d < c; ++d)a[d] += b
        } else this.A = a.ca().slice(), a = a.lb().slice(), this.c.push();
        this.c.push(a);
        this.u()
    };
    k.clone = function () {
        for (var a = new O(null), b = this.c.length, c = Array(b), d = 0; d < b; ++d)c[d] = this.c[d].slice();
        a.aa(this.ka, this.A.slice(), c);
        return a
    };
    k.Lb = function (a, b, c, d) {
        if (d < Ta(this.G(), a, b))return d;
        if (this.D != this.g) {
            var e = this.c, f = 0, g = 0, h;
            var l = 0;
            for (h = e.length; l < h; ++l) {
                var m = e[l];
                g = rf(this.A, f, m, this.a, g);
                f = m[m.length - 1]
            }
            this.B = Math.sqrt(g);
            this.D = this.g
        }
        e = ei(this);
        f = this.c;
        g = this.a;
        l = this.B;
        h = 0;
        m = [NaN, NaN];
        var n;
        var p = 0;
        for (n = f.length; p < n; ++p) {
            var q = f[p];
            d = tf(e, h, q, g, l, !0, a, b, c, d, m);
            h = q[q.length - 1]
        }
        return d
    };
    k.Sc = function (a, b) {
        a:{
            var c = ei(this), d = this.c, e = 0;
            if (0 !== d.length) {
                var f;
                var g = 0;
                for (f = d.length; g < f; ++g) {
                    var h = d[g];
                    if (Gf(c, e, h, this.a, a, b)) {
                        a = !0;
                        break a
                    }
                    e = h[h.length - 1]
                }
            }
            a = !1
        }
        return a
    };
    k.En = function () {
        var a = ei(this), b = this.c, c = 0, d = 0, e;
        var f = 0;
        for (e = b.length; f < e; ++f) {
            var g = b[f];
            d += of(a, c, g, this.a);
            c = g[g.length - 1]
        }
        return d
    };
    k.V = function (a) {
        if (void 0 !== a) {
            var b = ei(this).slice();
            Pf(b, this.c, this.a, a)
        } else b = this.A;
        return zf(b, 0, this.c, this.a)
    };
    k.md = function () {
        return this.c
    };
    function fi(a) {
        if (a.s != a.g) {
            var b = a.A, c = a.c, d = a.a, e = 0, f = [], g;
            var h = 0;
            for (g = c.length; h < g; ++h) {
                var l = c[h];
                e = ab(b, e, l[0], d);
                f.push((e[0] + e[2]) / 2, (e[1] + e[3]) / 2);
                e = l[l.length - 1]
            }
            b = ei(a);
            c = a.c;
            d = a.a;
            h = 0;
            g = [];
            l = 0;
            for (e = c.length; l < e; ++l) {
                var m = c[l];
                g = Hf(b, h, m, d, f, 2 * l, g);
                h = m[m.length - 1]
            }
            a.C = g;
            a.s = a.g
        }
        return a.C
    }

    k.dl = function () {
        var a = new rl(null);
        a.aa("XYM", fi(this).slice());
        return a
    };
    function ei(a) {
        if (a.I != a.g) {
            var b = a.A;
            a:{
                var c = a.c;
                var d;
                var e = 0;
                for (d = c.length; e < d; ++e)if (!Mf(b, c[e], a.a, void 0)) {
                    c = !1;
                    break a
                }
                c = !0
            }
            c ? a.j = b : (a.j = b.slice(), a.j.length = Pf(a.j, a.c, a.a));
            a.I = a.g
        }
        return a.j
    }

    k.rd = function (a) {
        var b = [], c = [], d = this.A, e = this.c, f = this.a;
        a = Math.sqrt(a);
        var g = 0, h = 0, l;
        var m = 0;
        for (l = e.length; m < l; ++m) {
            var n = e[m], p = [];
            h = Bf(d, g, n, f, a, b, h, p);
            c.push(p);
            g = n[n.length - 1]
        }
        b.length = h;
        d = new O(null);
        d.aa("XY", b, c);
        return d
    };
    k.tl = function (a) {
        if (0 > a || this.c.length <= a)return null;
        if (0 === a)var b = 0; else b = this.c[a - 1], b = b[b.length - 1];
        a = this.c[a].slice();
        var c = a[a.length - 1];
        if (0 !== b) {
            var d;
            var e = 0;
            for (d = a.length; e < d; ++e)a[e] -= b
        }
        e = new D(null);
        e.aa(this.ka, this.A.slice(b, c), a);
        return e
    };
    k.Zd = function () {
        var a = this.ka, b = this.A, c = this.c, d = [], e = 0, f, g;
        var h = 0;
        for (f = c.length; h < f; ++h) {
            var l = c[h].slice(), m = l[l.length - 1];
            if (0 !== e) {
                var n = 0;
                for (g = l.length; n < g; ++n)l[n] -= e
            }
            n = new D(null);
            n.aa(a, b.slice(e, m), l);
            d.push(n);
            e = m
        }
        return d
    };
    k.S = function () {
        return "MultiPolygon"
    };
    k.Ya = function (a) {
        a:{
            var b = ei(this), c = this.c, d = this.a, e = 0, f;
            var g = 0;
            for (f = c.length; g < f; ++g) {
                var h = c[g];
                if (Kf(b, e, h, d, a)) {
                    a = !0;
                    break a
                }
                e = h[h.length - 1]
            }
            a = !1
        }
        return a
    };
    k.na = function (a, b) {
        if (a) {
            mf(this, b, a, 3);
            this.A || (this.A = []);
            b = this.A;
            var c = this.a, d = this.c, e = 0;
            d = d ? d : [];
            var f = 0, g;
            var h = 0;
            for (g = a.length; h < g; ++h)e = wf(b, e, a[h], c, d[f]), d[f++] = e, e = e[e.length - 1];
            d.length = f;
            0 === d.length ? this.A.length = 0 : (a = d[d.length - 1], this.A.length = 0 === a.length ? 0 : a[a.length - 1]);
            this.u()
        } else this.aa("XY", null, this.c)
    };
    k.aa = function (a, b, c) {
        jf(this, a, b);
        this.c = c;
        this.u()
    };
    function sl(a, b) {
        var c = a.ka, d = [], e = [], f;
        var g = 0;
        for (f = b.length; g < f; ++g) {
            var h = b[g];
            0 === g && (c = h.ka);
            var l = d.length;
            var m = h.lb();
            var n;
            var p = 0;
            for (n = m.length; p < n; ++p)m[p] += l;
            ja(d, h.ca());
            e.push(m)
        }
        a.aa(c, d, e)
    };
    function tl(a) {
        a = a ? a : {};
        gl.call(this);
        this.b = a.geometryName
    }

    v(tl, kl);
    function ul(a, b) {
        if (!a)return null;
        if ("number" === typeof a.x && "number" === typeof a.y)var c = "Point"; else if (a.points) c = "MultiPoint"; else if (a.paths) c = 1 === a.paths.length ? "LineString" : "MultiLineString"; else if (a.rings) {
            var d = a.rings, e = vl(a), f = [], g = [];
            c = [];
            var h;
            var l = 0;
            for (h = d.length; l < h; ++l)f.length = 0, vf(f, 0, d[l], e.length), Lf(f, 0, f.length, e.length) ? g.push([d[l]]) : c.push(d[l]);
            for (; c.length;) {
                d = c.shift();
                e = !1;
                for (l = g.length - 1; 0 <= l; l--)if (Wa((new Cf(g[l][0])).G(), (new Cf(d)).G())) {
                    g[l].push(d);
                    e = !0;
                    break
                }
                e ||
                g.push([d.reverse()])
            }
            a = tb({}, a);
            1 === g.length ? (c = "Polygon", a.rings = g[0]) : (c = "MultiPolygon", a.rings = g)
        }
        return jl((0, wl[c])(a), !1, b)
    }

    function vl(a) {
        var b = "XY";
        !0 === a.hasZ && !0 === a.hasM ? b = "XYZM" : !0 === a.hasZ ? b = "XYZ" : !0 === a.hasM && (b = "XYM");
        return b
    }

    function xl(a) {
        a = a.ka;
        return {hasZ: "XYZ" === a || "XYZM" === a, hasM: "XYM" === a || "XYZM" === a}
    }

    var wl = {
        Point: function (a) {
            return void 0 !== a.m && void 0 !== a.z ? new C([a.x, a.y, a.z, a.m], "XYZM") : void 0 !== a.z ? new C([a.x, a.y, a.z], "XYZ") : void 0 !== a.m ? new C([a.x, a.y, a.m], "XYM") : new C([a.x, a.y])
        }, LineString: function (a) {
            return new L(a.paths[0], vl(a))
        }, Polygon: function (a) {
            return new D(a.rings, vl(a))
        }, MultiPoint: function (a) {
            return new rl(a.points, vl(a))
        }, MultiLineString: function (a) {
            return new M(a.paths, vl(a))
        }, MultiPolygon: function (a) {
            return new O(a.rings, vl(a))
        }
    }, yl = {
        Point: function (a) {
            var b = a.V(), c;
            a = a.ka;
            "XYZ" === a ? c = {x: b[0], y: b[1], z: b[2]} : "XYM" === a ? c = {
                x: b[0],
                y: b[1],
                m: b[2]
            } : "XYZM" === a ? c = {x: b[0], y: b[1], z: b[2], m: b[3]} : "XY" === a ? c = {
                x: b[0],
                y: b[1]
            } : wa(!1, 34);
            return c
        }, LineString: function (a) {
            var b = xl(a);
            return {hasZ: b.hasZ, hasM: b.hasM, paths: [a.V()]}
        }, Polygon: function (a) {
            var b = xl(a);
            return {hasZ: b.hasZ, hasM: b.hasM, rings: a.V(!1)}
        }, MultiPoint: function (a) {
            var b = xl(a);
            return {hasZ: b.hasZ, hasM: b.hasM, points: a.V()}
        }, MultiLineString: function (a) {
            var b = xl(a);
            return {hasZ: b.hasZ, hasM: b.hasM, paths: a.V()}
        }, MultiPolygon: function (a) {
            var b =
                xl(a);
            a = a.V(!1);
            for (var c = [], d = 0; d < a.length; d++)for (var e = a[d].length - 1; 0 <= e; e--)c.push(a[d][e]);
            return {hasZ: b.hasZ, hasM: b.hasM, rings: c}
        }
    };
    k = tl.prototype;
    k.Wc = function (a, b) {
        var c = ul(a.geometry, b), d = new Lk;
        this.b && d.Yc(this.b);
        d.Sa(c);
        b && b.pg && a.attributes[b.pg] && d.lc(a.attributes[b.pg]);
        a.attributes && d.H(a.attributes);
        return d
    };
    k.Lg = function (a, b) {
        b = b ? b : {};
        if (a.features) {
            var c = [], d = a.features, e;
            b.pg = a.objectIdFieldName;
            a = 0;
            for (e = d.length; a < e; ++a)c.push(this.Wc(d[a], b));
            return c
        }
        return [this.Wc(a, b)]
    };
    k.Pg = function (a, b) {
        return ul(a, b)
    };
    k.Sg = function (a) {
        return a.spatialReference && a.spatialReference.wkid ? Zb("EPSG:" + a.spatialReference.wkid) : null
    };
    function zl(a, b) {
        return (0, yl[a.S()])(jl(a, !0, b), b)
    }

    k.we = function (a, b) {
        return zl(a, il(this, b))
    };
    k.ed = function (a, b) {
        b = il(this, b);
        var c = {}, d = a.W();
        d && (c.geometry = zl(d, b), b && b.featureProjection && (c.geometry.spatialReference = {wkid: Zb(b.featureProjection).sb.split(":").pop()}));
        b = a.M();
        delete b[a.a];
        c.attributes = wb(b) ? {} : b;
        return c
    };
    k.ue = function (a, b) {
        b = il(this, b);
        var c = [], d;
        var e = 0;
        for (d = a.length; e < d; ++e)c.push(this.ed(a[e], b));
        return {features: c}
    };
    function Al(a) {
        this.mc = a
    };
    function Bl(a, b) {
        this.mc = a;
        this.b = Array.prototype.slice.call(arguments, 1);
        wa(2 <= this.b.length, 57)
    }

    v(Bl, Al);
    function Cl(a) {
        var b = ["And"].concat(Array.prototype.slice.call(arguments));
        Bl.apply(this, b)
    }

    v(Cl, Bl);
    function Dl(a, b, c) {
        this.mc = "BBOX";
        this.geometryName = a;
        this.extent = b;
        this.srsName = c
    }

    v(Dl, Al);
    function El(a, b) {
        this.mc = a;
        this.b = b
    }

    v(El, Al);
    function Fl(a, b, c) {
        El.call(this, "During", a);
        this.a = b;
        this.g = c
    }

    v(Fl, El);
    function Gl(a, b, c, d) {
        El.call(this, a, b);
        this.g = c;
        this.a = d
    }

    v(Gl, El);
    function Hl(a, b, c) {
        Gl.call(this, "PropertyIsEqualTo", a, b, c)
    }

    v(Hl, Gl);
    function Il(a, b) {
        Gl.call(this, "PropertyIsGreaterThan", a, b)
    }

    v(Il, Gl);
    function Jl(a, b) {
        Gl.call(this, "PropertyIsGreaterThanOrEqualTo", a, b)
    }

    v(Jl, Gl);
    function Kl(a, b, c, d) {
        this.mc = a;
        this.geometryName = b || "the_geom";
        this.geometry = c;
        this.srsName = d
    }

    v(Kl, Al);
    function Ll(a, b, c) {
        Kl.call(this, "Intersects", a, b, c)
    }

    v(Ll, Kl);
    function Ml(a, b, c) {
        El.call(this, "PropertyIsBetween", a);
        this.a = b;
        this.g = c
    }

    v(Ml, El);
    function Nl(a, b, c, d, e, f) {
        El.call(this, "PropertyIsLike", a);
        this.c = b;
        this.f = void 0 !== c ? c : "*";
        this.i = void 0 !== d ? d : ".";
        this.g = void 0 !== e ? e : "!";
        this.a = f
    }

    v(Nl, El);
    function Ol(a) {
        El.call(this, "PropertyIsNull", a)
    }

    v(Ol, El);
    function Pl(a, b) {
        Gl.call(this, "PropertyIsLessThan", a, b)
    }

    v(Pl, Gl);
    function Ql(a, b) {
        Gl.call(this, "PropertyIsLessThanOrEqualTo", a, b)
    }

    v(Ql, Gl);
    function Rl(a) {
        this.mc = "Not";
        this.condition = a
    }

    v(Rl, Al);
    function Sl(a, b, c) {
        Gl.call(this, "PropertyIsNotEqualTo", a, b, c)
    }

    v(Sl, Gl);
    function Tl(a) {
        var b = ["Or"].concat(Array.prototype.slice.call(arguments));
        Bl.apply(this, b)
    }

    v(Tl, Bl);
    function Ul(a, b, c) {
        Kl.call(this, "Within", a, b, c)
    }

    v(Ul, Kl);
    function Vl(a) {
        var b = [null].concat(Array.prototype.slice.call(arguments));
        return new (Function.prototype.bind.apply(Cl, b))
    }

    function Wl(a, b, c) {
        return new Dl(a, b, c)
    };
    function Xl(a) {
        ff.call(this);
        this.a = a ? a : null;
        Yl(this)
    }

    v(Xl, ff);
    function Zl(a) {
        var b = [], c;
        var d = 0;
        for (c = a.length; d < c; ++d)b.push(a[d].clone());
        return b
    }

    function $l(a) {
        var b;
        if (a.a) {
            var c = 0;
            for (b = a.a.length; c < b; ++c)Nc(a.a[c], "change", a.u, a)
        }
    }

    function Yl(a) {
        var b;
        if (a.a) {
            var c = 0;
            for (b = a.a.length; c < b; ++c)z(a.a[c], "change", a.u, a)
        }
    }

    k = Xl.prototype;
    k.clone = function () {
        var a = new Xl(null);
        a.Dj(this.a);
        return a
    };
    k.Lb = function (a, b, c, d) {
        if (d < Ta(this.G(), a, b))return d;
        var e = this.a, f;
        var g = 0;
        for (f = e.length; g < f; ++g)d = e[g].Lb(a, b, c, d);
        return d
    };
    k.Sc = function (a, b) {
        var c = this.a, d;
        var e = 0;
        for (d = c.length; e < d; ++e)if (c[e].Sc(a, b))return !0;
        return !1
    };
    k.Ee = function (a) {
        Za(a);
        for (var b = this.a, c = 0, d = b.length; c < d; ++c)db(a, b[c].G());
        return a
    };
    k.pd = function () {
        return Zl(this.a)
    };
    k.$d = function (a) {
        this.l != this.g && (ub(this.i), this.f = 0, this.l = this.g);
        if (0 > a || 0 !== this.f && a < this.f)return this;
        var b = a.toString();
        if (this.i.hasOwnProperty(b))return this.i[b];
        var c = [], d = this.a, e = !1, f;
        var g = 0;
        for (f = d.length; g < f; ++g) {
            var h = d[g], l = h.$d(a);
            c.push(l);
            l !== h && (e = !0)
        }
        if (e)return a = new Xl(null), $l(a), a.a = c, Yl(a), a.u(), this.i[b] = a;
        this.f = a;
        return this
    };
    k.S = function () {
        return "GeometryCollection"
    };
    k.Ya = function (a) {
        var b = this.a, c;
        var d = 0;
        for (c = b.length; d < c; ++d)if (b[d].Ya(a))return !0;
        return !1
    };
    k.rotate = function (a, b) {
        for (var c = this.a, d = 0, e = c.length; d < e; ++d)c[d].rotate(a, b);
        this.u()
    };
    k.scale = function (a, b, c) {
        c || (c = nb(this.G()));
        for (var d = this.a, e = 0, f = d.length; e < f; ++e)d[e].scale(a, b, c);
        this.u()
    };
    k.Dj = function (a) {
        a = Zl(a);
        $l(this);
        this.a = a;
        Yl(this);
        this.u()
    };
    k.Ic = function (a) {
        var b = this.a, c;
        var d = 0;
        for (c = b.length; d < c; ++d)b[d].Ic(a);
        this.u()
    };
    k.translate = function (a, b) {
        var c = this.a, d;
        var e = 0;
        for (d = c.length; e < d; ++e)c[e].translate(a, b);
        this.u()
    };
    k.la = function () {
        $l(this);
        ff.prototype.la.call(this)
    };
    function am(a) {
        a = a ? a : {};
        gl.call(this);
        this.defaultDataProjection = Zb(a.defaultDataProjection ? a.defaultDataProjection : "EPSG:4326");
        a.featureProjection && (this.i = Zb(a.featureProjection));
        this.b = a.geometryName
    }

    v(am, kl);
    function bm(a, b) {
        return a ? jl((0, cm[a.type])(a), !1, b) : null
    }

    function dm(a, b) {
        return (0, em[a.S()])(jl(a, !0, b), b)
    }

    var cm = {
        Point: function (a) {
            return new C(a.coordinates)
        }, LineString: function (a) {
            return new L(a.coordinates)
        }, Polygon: function (a) {
            return new D(a.coordinates)
        }, MultiPoint: function (a) {
            return new rl(a.coordinates)
        }, MultiLineString: function (a) {
            return new M(a.coordinates)
        }, MultiPolygon: function (a) {
            return new O(a.coordinates)
        }, GeometryCollection: function (a, b) {
            a = a.geometries.map(function (a) {
                return bm(a, b)
            });
            return new Xl(a)
        }
    }, em = {
        Point: function (a) {
            return {type: "Point", coordinates: a.V()}
        }, LineString: function (a) {
            return {
                type: "LineString",
                coordinates: a.V()
            }
        }, Polygon: function (a, b) {
            if (b)var c = b.rightHanded;
            return {type: "Polygon", coordinates: a.V(c)}
        }, MultiPoint: function (a) {
            return {type: "MultiPoint", coordinates: a.V()}
        }, MultiLineString: function (a) {
            return {type: "MultiLineString", coordinates: a.V()}
        }, MultiPolygon: function (a, b) {
            if (b)var c = b.rightHanded;
            return {type: "MultiPolygon", coordinates: a.V(c)}
        }, GeometryCollection: function (a, b) {
            return {
                type: "GeometryCollection", geometries: a.a.map(function (a) {
                    var c = tb({}, b);
                    delete c.featureProjection;
                    return dm(a,
                        c)
                })
            }
        }, Circle: function () {
            return {type: "GeometryCollection", geometries: []}
        }
    };
    k = am.prototype;
    k.Wc = function (a, b) {
        a = "Feature" === a.type ? a : {type: "Feature", geometry: a};
        b = bm(a.geometry, b);
        var c = new Lk;
        this.b && c.Yc(this.b);
        c.Sa(b);
        void 0 !== a.id && c.lc(a.id);
        a.properties && c.H(a.properties);
        return c
    };
    k.Lg = function (a, b) {
        if ("FeatureCollection" === a.type) {
            var c = [];
            a = a.features;
            var d;
            var e = 0;
            for (d = a.length; e < d; ++e)c.push(this.Wc(a[e], b))
        } else c = [this.Wc(a, b)];
        return c
    };
    k.Pg = function (a, b) {
        return bm(a, b)
    };
    k.Sg = function (a) {
        a = a.crs;
        var b;
        a ? "name" == a.type ? b = Zb(a.properties.name) : "EPSG" == a.type ? b = Zb("EPSG:" + a.properties.code) : wa(!1, 36) : b = this.defaultDataProjection;
        return b
    };
    k.ed = function (a, b) {
        b = il(this, b);
        var c = {type: "Feature"}, d = a.c;
        void 0 !== d && (c.id = d);
        (d = a.W()) ? c.geometry = dm(d, b) : c.geometry = null;
        b = a.M();
        delete b[a.a];
        wb(b) ? c.properties = null : c.properties = b;
        return c
    };
    k.ue = function (a, b) {
        b = il(this, b);
        var c = [], d;
        var e = 0;
        for (d = a.length; e < d; ++e)c.push(this.ed(a[e], b));
        return {type: "FeatureCollection", features: c}
    };
    k.we = function (a, b) {
        return dm(a, il(this, b))
    };
    function fm() {
        this.g = new XMLSerializer;
        gl.call(this)
    }

    v(fm, gl);
    k = fm.prototype;
    k.S = function () {
        return "xml"
    };
    k.Vb = function (a, b) {
        return Rk(a) ? gm(this, a, b) : Sk(a) ? this.Kg(a, b) : "string" === typeof a ? (a = Tk(a), gm(this, a, b)) : null
    };
    function gm(a, b, c) {
        a = hm(a, b, c);
        return 0 < a.length ? a[0] : null
    }

    k.Kg = function () {
        return null
    };
    k.Ma = function (a, b) {
        return Rk(a) ? hm(this, a, b) : Sk(a) ? this.Dc(a, b) : "string" === typeof a ? (a = Tk(a), hm(this, a, b)) : []
    };
    function hm(a, b, c) {
        var d = [];
        for (b = b.firstChild; b; b = b.nextSibling)b.nodeType == Node.ELEMENT_NODE && ja(d, a.Dc(b, c));
        return d
    }

    k.Xc = function (a, b) {
        if (Rk(a))return null;
        if (Sk(a))return this.pj(a, b);
        "string" === typeof a && Tk(a);
        return null
    };
    k.pj = function () {
        return null
    };
    k.pb = function (a) {
        return Rk(a) ? this.Rg(a) : Sk(a) ? this.vf(a) : "string" === typeof a ? (a = Tk(a), this.Rg(a)) : null
    };
    k.Rg = function () {
        return this.defaultDataProjection
    };
    k.vf = function () {
        return this.defaultDataProjection
    };
    k.Hd = function (a, b) {
        return this.g.serializeToString(this.lh(a, b))
    };
    k.lh = function () {
        return null
    };
    k.Yb = function (a, b) {
        a = this.Zb(a, b);
        return this.g.serializeToString(a)
    };
    k.Zb = function () {
        return null
    };
    k.fd = function (a, b) {
        a = this.ve(a, b);
        return this.g.serializeToString(a)
    };
    k.ve = function () {
        return null
    };
    function im(a) {
        a = a ? a : {};
        this.featureType = a.featureType;
        this.featureNS = a.featureNS;
        this.srsName = a.srsName;
        this.schemaLocation = "";
        this.b = {};
        this.b["http://www.opengis.net/gml"] = {
            featureMember: Wk(im.prototype.je),
            featureMembers: Wk(im.prototype.je)
        };
        fm.call(this)
    }

    v(im, fm);
    var jm = /^[\s\xa0]*$/;
    k = im.prototype;
    k.je = function (a, b) {
        var c = a.localName, d = null;
        if ("FeatureCollection" == c) "http://www.opengis.net/wfs" === a.namespaceURI ? d = K([], this.b, a, b, this) : d = K(null, this.b, a, b, this); else if ("featureMembers" == c || "featureMember" == c) {
            var e = b[0], f = e.featureType, g = e.featureNS, h;
            if (!f && a.childNodes) {
                f = [];
                g = {};
                var l = 0;
                for (h = a.childNodes.length; l < h; ++l) {
                    var m = a.childNodes[l];
                    if (1 === m.nodeType) {
                        var n = m.nodeName.split(":").pop();
                        if (-1 === f.indexOf(n)) {
                            var p = "", q = 0;
                            m = m.namespaceURI;
                            for (var r in g) {
                                if (g[r] === m) {
                                    p = r;
                                    break
                                }
                                ++q
                            }
                            p ||
                            (p = "p" + q, g[p] = m);
                            f.push(p + ":" + n)
                        }
                    }
                }
                "featureMember" != c && (e.featureType = f, e.featureNS = g)
            }
            "string" === typeof g && (l = g, g = {}, g.p0 = l);
            e = {};
            f = Array.isArray(f) ? f : [f];
            for (var u in g) {
                n = {};
                l = 0;
                for (h = f.length; l < h; ++l)(-1 === f[l].indexOf(":") ? "p0" : f[l].split(":")[0]) === u && (n[f[l].split(":").pop()] = "featureMembers" == c ? Vk(this.Jg, this) : Wk(this.Jg, this));
                e[g[u]] = n
            }
            "featureMember" == c ? d = K(void 0, e, a, b) : d = K([], e, a, b)
        }
        null === d && (d = []);
        return d
    };
    k.sf = function (a, b) {
        var c = b[0];
        c.srsName = a.firstElementChild.getAttribute("srsName");
        c.srsDimension = a.firstElementChild.getAttribute("srsDimension");
        if (a = K(null, this.ph, a, b, this))return jl(a, !1, c)
    };
    k.Jg = function (a, b) {
        var c;
        (c = a.getAttribute("fid")) || (c = a.getAttributeNS("http://www.opengis.net/gml", "id") || "");
        var d = {}, e;
        for (a = a.firstElementChild; a; a = a.nextElementSibling) {
            var f = a.localName;
            if (0 === a.childNodes.length || 1 === a.childNodes.length && (3 === a.firstChild.nodeType || 4 === a.firstChild.nodeType)) {
                var g = Pk(a, !1);
                jm.test(g) && (g = void 0);
                d[f] = g
            } else"boundedBy" !== f && (e = f), d[f] = this.sf(a, b)
        }
        b = new Lk(d);
        e && b.Yc(e);
        c && b.lc(c);
        return b
    };
    k.uj = function (a, b) {
        if (a = this.rf(a, b))return b = new C(null), b.aa("XYZ", a), b
    };
    k.sj = function (a, b) {
        if (a = K([], this.dk, a, b, this))return new rl(a)
    };
    k.rj = function (a, b) {
        if (a = K([], this.ck, a, b, this))return b = new M(null), ql(b, a), b
    };
    k.tj = function (a, b) {
        if (a = K([], this.ek, a, b, this))return b = new O(null), sl(b, a), b
    };
    k.lj = function (a, b) {
        cl(this.hk, a, b, this)
    };
    k.di = function (a, b) {
        cl(this.ak, a, b, this)
    };
    k.mj = function (a, b) {
        cl(this.ik, a, b, this)
    };
    k.tf = function (a, b) {
        if (a = this.rf(a, b))return b = new L(null), b.aa("XYZ", a), b
    };
    k.Fp = function (a, b) {
        if (a = K(null, this.xe, a, b, this))return a
    };
    k.qj = function (a, b) {
        if (a = this.rf(a, b))return b = new Cf(null), Df(b, "XYZ", a), b
    };
    k.uf = function (a, b) {
        if ((a = K([null], this.Hf, a, b, this)) && a[0]) {
            b = new D(null);
            var c = a[0], d = [c.length], e;
            var f = 1;
            for (e = a.length; f < e; ++f)ja(c, a[f]), d.push(c.length);
            b.aa("XYZ", c, d);
            return b
        }
    };
    k.rf = function (a, b) {
        return K(null, this.xe, a, b, this)
    };
    k.dk = {"http://www.opengis.net/gml": {pointMember: Vk(im.prototype.lj), pointMembers: Vk(im.prototype.lj)}};
    k.ck = {
        "http://www.opengis.net/gml": {
            lineStringMember: Vk(im.prototype.di),
            lineStringMembers: Vk(im.prototype.di)
        }
    };
    k.ek = {"http://www.opengis.net/gml": {polygonMember: Vk(im.prototype.mj), polygonMembers: Vk(im.prototype.mj)}};
    k.hk = {"http://www.opengis.net/gml": {Point: Vk(im.prototype.rf)}};
    k.ak = {"http://www.opengis.net/gml": {LineString: Vk(im.prototype.tf)}};
    k.ik = {"http://www.opengis.net/gml": {Polygon: Vk(im.prototype.uf)}};
    k.ye = {"http://www.opengis.net/gml": {LinearRing: Wk(im.prototype.Fp)}};
    k.pj = function (a, b) {
        return (a = this.sf(a, [hl(this, a, b ? b : {})])) ? a : null
    };
    k.Dc = function (a, b) {
        var c = {featureType: this.featureType, featureNS: this.featureNS};
        b && tb(c, hl(this, a, b));
        return this.je(a, [c]) || []
    };
    k.vf = function (a) {
        return Zb(this.srsName ? this.srsName : a.firstElementChild.getAttribute("srsName"))
    };
    function km(a) {
        a = Pk(a, !1);
        return lm(a)
    }

    function lm(a) {
        if (a = /^\s*(true|1)|(false|0)\s*$/.exec(a))return void 0 !== a[1] || !1
    }

    function mm(a) {
        a = Pk(a, !1);
        a = Date.parse(a);
        return isNaN(a) ? void 0 : a / 1E3
    }

    function nm(a) {
        a = Pk(a, !1);
        return om(a)
    }

    function om(a) {
        if (a = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(a))return parseFloat(a[1])
    }

    function pm(a) {
        a = Pk(a, !1);
        return qm(a)
    }

    function qm(a) {
        if (a = /^\s*(\d+)\s*$/.exec(a))return parseInt(a[1], 10)
    }

    function P(a) {
        return Pk(a, !1).trim()
    }

    function rm(a, b) {
        sm(a, b ? "1" : "0")
    }

    function tm(a, b) {
        a.appendChild(Nk.createTextNode(b.toPrecision()))
    }

    function um(a, b) {
        a.appendChild(Nk.createTextNode(b.toString()))
    }

    function sm(a, b) {
        a.appendChild(Nk.createTextNode(b))
    };
    function vm(a) {
        a = a ? a : {};
        im.call(this, a);
        this.o = void 0 !== a.surface ? a.surface : !1;
        this.c = void 0 !== a.curve ? a.curve : !1;
        this.f = void 0 !== a.multiCurve ? a.multiCurve : !0;
        this.j = void 0 !== a.multiSurface ? a.multiSurface : !0;
        this.schemaLocation = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd";
        this.hasZ = void 0 !== a.hasZ ? a.hasZ : !1
    }

    v(vm, im);
    k = vm.prototype;
    k.Jp = function (a, b) {
        if (a = K([], this.bk, a, b, this))return b = new M(null), ql(b, a), b
    };
    k.Kp = function (a, b) {
        if (a = K([], this.fk, a, b, this))return b = new O(null), sl(b, a), b
    };
    k.Eh = function (a, b) {
        cl(this.Yj, a, b, this)
    };
    k.Qj = function (a, b) {
        cl(this.kk, a, b, this)
    };
    k.Np = function (a, b) {
        return K([null], this.gk, a, b, this)
    };
    k.Qp = function (a, b) {
        return K([null], this.jk, a, b, this)
    };
    k.Op = function (a, b) {
        return K([null], this.Hf, a, b, this)
    };
    k.Ip = function (a, b) {
        return K([null], this.xe, a, b, this)
    };
    k.mm = function (a, b) {
        (a = K(void 0, this.ye, a, b, this)) && b[b.length - 1].push(a)
    };
    k.Kk = function (a, b) {
        (a = K(void 0, this.ye, a, b, this)) && (b[b.length - 1][0] = a)
    };
    k.vj = function (a, b) {
        if ((a = K([null], this.lk, a, b, this)) && a[0]) {
            b = new D(null);
            var c = a[0], d = [c.length], e;
            var f = 1;
            for (e = a.length; f < e; ++f)ja(c, a[f]), d.push(c.length);
            b.aa("XYZ", c, d);
            return b
        }
    };
    k.nj = function (a, b) {
        if (a = K([null], this.Zj, a, b, this))return b = new L(null), b.aa("XYZ", a), b
    };
    k.Ep = function (a, b) {
        a = K([null], this.$j, a, b, this);
        return Ya(a[1][0], a[1][1], a[2][0], a[2][1])
    };
    k.Gp = function (a, b) {
        var c = Pk(a, !1), d = /^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/;
        a = [];
        for (var e; e = d.exec(c);)a.push(parseFloat(e[1])), c = c.substr(e[0].length);
        if ("" === c) {
            b = b[0].srsName;
            c = "enu";
            b && (c = Zb(b).b);
            if ("neu" === c)for (b = 0, c = a.length; b < c; b += 3)d = a[b], a[b] = a[b + 1], a[b + 1] = d;
            b = a.length;
            2 == b && a.push(0);
            if (0 !== b)return a
        }
    };
    k.Og = function (a, b) {
        var c = Pk(a, !1).replace(/^\s*|\s*$/g, "");
        b = b[0];
        var d = b.srsName, e = b.srsDimension;
        b = "enu";
        d && (b = Zb(d).b);
        c = c.split(/\s+/);
        d = 2;
        a.getAttribute("srsDimension") ? d = qm(a.getAttribute("srsDimension")) : a.getAttribute("dimension") ? d = qm(a.getAttribute("dimension")) : a.parentNode.getAttribute("srsDimension") ? d = qm(a.parentNode.getAttribute("srsDimension")) : e && (d = qm(e));
        for (var f, g = [], h = 0,
                 l = c.length; h < l; h += d)a = parseFloat(c[h]), e = parseFloat(c[h + 1]), f = 3 === d ? parseFloat(c[h + 2]) : 0, "en" === b.substr(0,
            2) ? g.push(a, e, f) : g.push(e, a, f);
        return g
    };
    k.xe = {"http://www.opengis.net/gml": {pos: Wk(vm.prototype.Gp), posList: Wk(vm.prototype.Og)}};
    k.Hf = {"http://www.opengis.net/gml": {interior: vm.prototype.mm, exterior: vm.prototype.Kk}};
    k.ph = {
        "http://www.opengis.net/gml": {
            Point: Wk(im.prototype.uj),
            MultiPoint: Wk(im.prototype.sj),
            LineString: Wk(im.prototype.tf),
            MultiLineString: Wk(im.prototype.rj),
            LinearRing: Wk(im.prototype.qj),
            Polygon: Wk(im.prototype.uf),
            MultiPolygon: Wk(im.prototype.tj),
            Surface: Wk(vm.prototype.vj),
            MultiSurface: Wk(vm.prototype.Kp),
            Curve: Wk(vm.prototype.nj),
            MultiCurve: Wk(vm.prototype.Jp),
            Envelope: Wk(vm.prototype.Ep)
        }
    };
    k.bk = {"http://www.opengis.net/gml": {curveMember: Vk(vm.prototype.Eh), curveMembers: Vk(vm.prototype.Eh)}};
    k.fk = {"http://www.opengis.net/gml": {surfaceMember: Vk(vm.prototype.Qj), surfaceMembers: Vk(vm.prototype.Qj)}};
    k.Yj = {"http://www.opengis.net/gml": {LineString: Vk(im.prototype.tf), Curve: Vk(vm.prototype.nj)}};
    k.kk = {"http://www.opengis.net/gml": {Polygon: Vk(im.prototype.uf), Surface: Vk(vm.prototype.vj)}};
    k.lk = {"http://www.opengis.net/gml": {patches: Wk(vm.prototype.Np)}};
    k.Zj = {"http://www.opengis.net/gml": {segments: Wk(vm.prototype.Qp)}};
    k.$j = {"http://www.opengis.net/gml": {lowerCorner: Vk(vm.prototype.Og), upperCorner: Vk(vm.prototype.Og)}};
    k.gk = {"http://www.opengis.net/gml": {PolygonPatch: Wk(vm.prototype.Op)}};
    k.jk = {"http://www.opengis.net/gml": {LineStringSegment: Wk(vm.prototype.Ip)}};
    function wm(a, b, c) {
        var d = c[c.length - 1];
        c = d.hasZ;
        a.setAttribute("srsDimension", c ? 3 : 2);
        d = d.srsName;
        b = b.V();
        for (var e = b.length, f = Array(e), g, h = 0; h < e; ++h) {
            g = b[h];
            var l = h, m = c, n = "enu";
            d && (n = Zb(d).b);
            n = "en" === n.substr(0, 2) ? g[0] + " " + g[1] : g[1] + " " + g[0];
            m && (n += " " + (g[2] || 0));
            f[l] = n
        }
        sm(a, f.join(" "))
    }

    k.Fi = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = Ok(a.namespaceURI, "pos");
        a.appendChild(d);
        c = c[c.length - 1];
        a = c.hasZ;
        d.setAttribute("srsDimension", a ? 3 : 2);
        var e = c.srsName;
        c = "enu";
        e && (c = Zb(e).b);
        b = b.V();
        c = "en" === c.substr(0, 2) ? b[0] + " " + b[1] : b[1] + " " + b[0];
        a && (c += " " + (b[2] || 0));
        sm(d, c)
    };
    var xm = {"http://www.opengis.net/gml": {lowerCorner: I(sm), upperCorner: I(sm)}};
    k = vm.prototype;
    k.wn = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        dl({node: a}, xm, al, [b[0] + " " + b[1], b[2] + " " + b[3]], c, ["lowerCorner", "upperCorner"], this)
    };
    k.Ci = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = Ok(a.namespaceURI, "posList");
        a.appendChild(d);
        wm(d, b, c)
    };
    k.vn = function (a, b) {
        a = b[b.length - 1];
        b = a.node;
        var c = a.exteriorWritten;
        void 0 === c && (a.exteriorWritten = !0);
        return Ok(b.namespaceURI, void 0 !== c ? "interior" : "exterior")
    };
    k.cf = function (a, b, c) {
        var d = c[c.length - 1], e = d.hasZ;
        d = d.srsName;
        "PolygonPatch" !== a.nodeName && d && a.setAttribute("srsName", d);
        "Polygon" === a.nodeName || "PolygonPatch" === a.nodeName ? (b = b.Yd(), dl({
            node: a,
            hasZ: e,
            srsName: d
        }, ym, this.vn, b, c, void 0, this)) : "Surface" === a.nodeName && (e = Ok(a.namespaceURI, "patches"), a.appendChild(e), a = Ok(e.namespaceURI, "PolygonPatch"), e.appendChild(a), this.cf(a, b, c))
    };
    k.bf = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        "LineStringSegment" !== a.nodeName && d && a.setAttribute("srsName", d);
        "LineString" === a.nodeName || "LineStringSegment" === a.nodeName ? (d = Ok(a.namespaceURI, "posList"), a.appendChild(d), wm(d, b, c)) : "Curve" === a.nodeName && (d = Ok(a.namespaceURI, "segments"), a.appendChild(d), a = Ok(d.namespaceURI, "LineStringSegment"), d.appendChild(a), this.bf(a, b, c))
    };
    k.Ei = function (a, b, c) {
        var d = c[c.length - 1], e = d.hasZ, f = d.srsName;
        d = d.surface;
        f && a.setAttribute("srsName", f);
        b = b.Zd();
        dl({node: a, hasZ: e, srsName: f, surface: d}, zm, this.l, b, c, void 0, this)
    };
    k.xn = function (a, b, c) {
        var d = c[c.length - 1], e = d.srsName;
        d = d.hasZ;
        e && a.setAttribute("srsName", e);
        b = b.fe();
        dl({node: a, hasZ: d, srsName: e}, Am, Zk("pointMember"), b, c, void 0, this)
    };
    k.Di = function (a, b, c) {
        var d = c[c.length - 1], e = d.hasZ, f = d.srsName;
        d = d.curve;
        f && a.setAttribute("srsName", f);
        b = b.qd();
        dl({node: a, hasZ: e, srsName: f, curve: d}, Bm, this.l, b, c, void 0, this)
    };
    k.Gi = function (a, b, c) {
        var d = Ok(a.namespaceURI, "LinearRing");
        a.appendChild(d);
        this.Ci(d, b, c)
    };
    k.Hi = function (a, b, c) {
        var d = this.a(b, c);
        d && (a.appendChild(d), this.cf(d, b, c))
    };
    k.yn = function (a, b, c) {
        var d = Ok(a.namespaceURI, "Point");
        a.appendChild(d);
        this.Fi(d, b, c)
    };
    k.Bi = function (a, b, c) {
        var d = this.a(b, c);
        d && (a.appendChild(d), this.bf(d, b, c))
    };
    k.wd = function (a, b, c) {
        var d = c[c.length - 1], e = tb({}, d);
        e.node = a;
        var f;
        Array.isArray(b) ? d.dataProjection ? f = lc(b, d.featureProjection, d.dataProjection) : f = b : f = jl(b, !0, d);
        dl(e, Cm, this.a, [f], c, void 0, this)
    };
    k.Ai = function (a, b, c) {
        var d = b.c;
        d && a.setAttribute("fid", d);
        d = c[c.length - 1];
        var e = d.featureNS, f = b.a;
        d.qb || (d.qb = {}, d.qb[e] = {});
        var g = b.M();
        b = [];
        var h = [];
        for (m in g) {
            var l = g[m];
            null !== l && (b.push(m), h.push(l), m == f || l instanceof ff ? m in d.qb[e] || (d.qb[e][m] = I(this.wd, this)) : m in d.qb[e] || (d.qb[e][m] = I(sm)))
        }
        var m = tb({}, d);
        m.node = a;
        dl(m, d.qb, Zk(void 0, e), h, c, b)
    };
    var zm = {"http://www.opengis.net/gml": {surfaceMember: I(vm.prototype.Hi), polygonMember: I(vm.prototype.Hi)}},
        Am = {"http://www.opengis.net/gml": {pointMember: I(vm.prototype.yn)}},
        Bm = {"http://www.opengis.net/gml": {lineStringMember: I(vm.prototype.Bi), curveMember: I(vm.prototype.Bi)}},
        ym = {"http://www.opengis.net/gml": {exterior: I(vm.prototype.Gi), interior: I(vm.prototype.Gi)}}, Cm = {
            "http://www.opengis.net/gml": {
                Curve: I(vm.prototype.bf),
                MultiCurve: I(vm.prototype.Di),
                Point: I(vm.prototype.Fi),
                MultiPoint: I(vm.prototype.xn),
                LineString: I(vm.prototype.bf),
                MultiLineString: I(vm.prototype.Di),
                LinearRing: I(vm.prototype.Ci),
                Polygon: I(vm.prototype.cf),
                MultiPolygon: I(vm.prototype.Ei),
                Surface: I(vm.prototype.cf),
                MultiSurface: I(vm.prototype.Ei),
                Envelope: I(vm.prototype.wn)
            }
        }, Dm = {
            MultiLineString: "lineStringMember",
            MultiCurve: "curveMember",
            MultiPolygon: "polygonMember",
            MultiSurface: "surfaceMember"
        };
    vm.prototype.l = function (a, b) {
        return Ok("http://www.opengis.net/gml", Dm[b[b.length - 1].node.nodeName])
    };
    vm.prototype.a = function (a, b) {
        var c = b[b.length - 1];
        b = c.multiSurface;
        var d = c.surface, e = c.curve;
        c = c.multiCurve;
        Array.isArray(a) ? a = "Envelope" : (a = a.S(), "MultiPolygon" === a && !0 === b ? a = "MultiSurface" : "Polygon" === a && !0 === d ? a = "Surface" : "LineString" === a && !0 === e ? a = "Curve" : "MultiLineString" === a && !0 === c && (a = "MultiCurve"));
        return Ok("http://www.opengis.net/gml", a)
    };
    vm.prototype.ve = function (a, b) {
        b = il(this, b);
        var c = Ok("http://www.opengis.net/gml", "geom"), d = {
            node: c,
            hasZ: this.hasZ,
            srsName: this.srsName,
            curve: this.c,
            surface: this.o,
            multiSurface: this.j,
            multiCurve: this.f
        };
        b && tb(d, b);
        this.wd(c, a, [d]);
        return c
    };
    vm.prototype.Zb = function (a, b) {
        b = il(this, b);
        var c = Ok("http://www.opengis.net/gml", "featureMembers");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
        var d = {
            srsName: this.srsName,
            hasZ: this.hasZ,
            curve: this.c,
            surface: this.o,
            multiSurface: this.j,
            multiCurve: this.f,
            featureNS: this.featureNS,
            featureType: this.featureType
        };
        b && tb(d, b);
        b = [d];
        var e = b[b.length - 1];
        d = e.featureType;
        var f = e.featureNS, g = {};
        g[f] = {};
        g[f][d] = I(this.Ai, this);
        e = tb({}, e);
        e.node = c;
        dl(e, g,
            Zk(d, f), a, b);
        return c
    };
    function Em(a) {
        a = a ? a : {};
        im.call(this, a);
        this.b["http://www.opengis.net/gml"].featureMember = Vk(im.prototype.je);
        this.schemaLocation = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd"
    }

    v(Em, im);
    k = Em.prototype;
    k.oj = function (a, b) {
        a = Pk(a, !1).replace(/^\s*|\s*$/g, "");
        var c = b[0].srsName;
        b = "enu";
        c && (c = Zb(c)) && (b = c.b);
        a = a.trim().split(/\s+/);
        for (var d, e, f = [], g = 0,
                 h = a.length; g < h; g++)e = a[g].split(/,+/), c = parseFloat(e[0]), d = parseFloat(e[1]), e = 3 === e.length ? parseFloat(e[2]) : 0, "en" === b.substr(0, 2) ? f.push(c, d, e) : f.push(d, c, e);
        return f
    };
    k.Cp = function (a, b) {
        a = K([null], this.Xj, a, b, this);
        return Ya(a[1][0], a[1][1], a[1][3], a[1][4])
    };
    k.km = function (a, b) {
        (a = K(void 0, this.ye, a, b, this)) && b[b.length - 1].push(a)
    };
    k.lp = function (a, b) {
        (a = K(void 0, this.ye, a, b, this)) && (b[b.length - 1][0] = a)
    };
    k.xe = {"http://www.opengis.net/gml": {coordinates: Wk(Em.prototype.oj)}};
    k.Hf = {"http://www.opengis.net/gml": {innerBoundaryIs: Em.prototype.km, outerBoundaryIs: Em.prototype.lp}};
    k.Xj = {"http://www.opengis.net/gml": {coordinates: Vk(Em.prototype.oj)}};
    k.ph = {
        "http://www.opengis.net/gml": {
            Point: Wk(im.prototype.uj),
            MultiPoint: Wk(im.prototype.sj),
            LineString: Wk(im.prototype.tf),
            MultiLineString: Wk(im.prototype.rj),
            LinearRing: Wk(im.prototype.qj),
            Polygon: Wk(im.prototype.uf),
            MultiPolygon: Wk(im.prototype.tj),
            Box: Wk(Em.prototype.Cp)
        }
    };
    k.wg = function (a, b) {
        var c = b[b.length - 1];
        b = c.multiSurface;
        var d = c.surface;
        c = c.multiCurve;
        Array.isArray(a) ? a = "Envelope" : (a = a.S(), "MultiPolygon" === a && !0 === b ? a = "MultiSurface" : "Polygon" === a && !0 === d ? a = "Surface" : "MultiLineString" === a && !0 === c && (a = "MultiCurve"));
        return Ok("http://www.opengis.net/gml", a)
    };
    k.si = function (a, b, c) {
        var d = c[c.length - 1], e = tb({}, d);
        e.node = a;
        var f;
        Array.isArray(b) ? d.dataProjection ? f = lc(b, d.featureProjection, d.dataProjection) : f = b : f = jl(b, !0, d);
        dl(e, Fm, this.wg, [f], c, void 0, this)
    };
    k.$e = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        "LineStringSegment" !== a.nodeName && d && a.setAttribute("srsName", d);
        "LineString" === a.nodeName || "LineStringSegment" === a.nodeName ? (d = Gm(a.namespaceURI), a.appendChild(d), Hm(d, b, c)) : "Curve" === a.nodeName && (d = Ok(a.namespaceURI, "segments"), a.appendChild(d), a = Ok(d.namespaceURI, "LineStringSegment"), d.appendChild(a), this.$e(a, b, c))
    };
    function Gm(a) {
        a = Ok(a, "coordinates");
        a.setAttribute("decimal", ".");
        a.setAttribute("cs", ",");
        a.setAttribute("ts", " ");
        return a
    }

    function Hm(a, b, c) {
        var d = c[c.length - 1];
        c = d.hasZ;
        d = d.srsName;
        b = b.V();
        for (var e = b.length, f = Array(e), g, h = 0; h < e; ++h)g = b[h], f[h] = Im(g, d, c);
        sm(a, f.join(" "))
    }

    k.af = function (a, b, c) {
        var d = c[c.length - 1], e = d.hasZ;
        d = d.srsName;
        "PolygonPatch" !== a.nodeName && d && a.setAttribute("srsName", d);
        "Polygon" === a.nodeName || "PolygonPatch" === a.nodeName ? (b = b.Yd(), dl({
            node: a,
            hasZ: e,
            srsName: d
        }, Jm, this.qn, b, c, void 0, this)) : "Surface" === a.nodeName && (e = Ok(a.namespaceURI, "patches"), a.appendChild(e), a = Ok(e.namespaceURI, "PolygonPatch"), e.appendChild(a), this.af(a, b, c))
    };
    k.qn = function (a, b) {
        a = b[b.length - 1];
        b = a.node;
        var c = a.exteriorWritten;
        void 0 === c && (a.exteriorWritten = !0);
        return Ok(b.namespaceURI, void 0 !== c ? "innerBoundaryIs" : "outerBoundaryIs")
    };
    k.yi = function (a, b, c) {
        var d = Ok(a.namespaceURI, "LinearRing");
        a.appendChild(d);
        this.ui(d, b, c)
    };
    function Im(a, b, c) {
        var d = "enu";
        b && (d = Zb(b).b);
        b = "en" === d.substr(0, 2) ? a[0] + "," + a[1] : a[1] + "," + a[0];
        c && (b += "," + (a[2] || 0));
        return b
    }

    k.vi = function (a, b, c) {
        var d = c[c.length - 1], e = d.hasZ, f = d.srsName;
        d = d.curve;
        f && a.setAttribute("srsName", f);
        b = b.qd();
        dl({node: a, hasZ: e, srsName: f, curve: d}, Km, this.a, b, c, void 0, this)
    };
    k.xi = function (a, b, c) {
        var d = c[c.length - 1];
        c = d.hasZ;
        var e = d.srsName;
        e && a.setAttribute("srsName", e);
        d = Gm(a.namespaceURI);
        a.appendChild(d);
        a = b.V();
        a = Im(a, e, c);
        sm(d, a)
    };
    k.sn = function (a, b, c) {
        var d = c[c.length - 1], e = d.hasZ;
        (d = d.srsName) && a.setAttribute("srsName", d);
        b = b.fe();
        dl({node: a, hasZ: e, srsName: d}, Lm, Zk("pointMember"), b, c, void 0, this)
    };
    k.tn = function (a, b, c) {
        var d = Ok(a.namespaceURI, "Point");
        a.appendChild(d);
        this.xi(d, b, c)
    };
    k.ti = function (a, b, c) {
        var d = this.wg(b, c);
        d && (a.appendChild(d), this.$e(d, b, c))
    };
    k.ui = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = Gm(a.namespaceURI);
        a.appendChild(d);
        Hm(d, b, c)
    };
    k.wi = function (a, b, c) {
        var d = c[c.length - 1], e = d.hasZ, f = d.srsName;
        d = d.surface;
        f && a.setAttribute("srsName", f);
        b = b.Zd();
        dl({node: a, hasZ: e, srsName: f, surface: d}, Mm, this.a, b, c, void 0, this)
    };
    k.zi = function (a, b, c) {
        var d = this.wg(b, c);
        d && (a.appendChild(d), this.af(d, b, c))
    };
    k.rn = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        dl({node: a}, Nm, al, [b[0] + " " + b[1], b[2] + " " + b[3]], c, ["lowerCorner", "upperCorner"], this)
    };
    var Fm = {
            "http://www.opengis.net/gml": {
                Curve: I(Em.prototype.$e),
                MultiCurve: I(Em.prototype.vi),
                Point: I(Em.prototype.xi),
                MultiPoint: I(Em.prototype.sn),
                LineString: I(Em.prototype.$e),
                MultiLineString: I(Em.prototype.vi),
                LinearRing: I(Em.prototype.ui),
                Polygon: I(Em.prototype.af),
                MultiPolygon: I(Em.prototype.wi),
                Surface: I(Em.prototype.af),
                MultiSurface: I(Em.prototype.wi),
                Envelope: I(Em.prototype.rn)
            }
        }, Jm = {"http://www.opengis.net/gml": {outerBoundaryIs: I(Em.prototype.yi), innerBoundaryIs: I(Em.prototype.yi)}},
        Lm = {"http://www.opengis.net/gml": {pointMember: I(Em.prototype.tn)}},
        Km = {"http://www.opengis.net/gml": {lineStringMember: I(Em.prototype.ti), curveMember: I(Em.prototype.ti)}};
    Em.prototype.a = function (a, b) {
        return Ok("http://www.opengis.net/gml", Om[b[b.length - 1].node.nodeName])
    };
    var Om = {
            MultiLineString: "lineStringMember",
            MultiCurve: "curveMember",
            MultiPolygon: "polygonMember",
            MultiSurface: "surfaceMember"
        }, Mm = {"http://www.opengis.net/gml": {surfaceMember: I(Em.prototype.zi), polygonMember: I(Em.prototype.zi)}},
        Nm = {"http://www.opengis.net/gml": {lowerCorner: I(sm), upperCorner: I(sm)}};

    function Pm(a) {
        a = a ? a : {};
        fm.call(this);
        this.defaultDataProjection = Zb("EPSG:4326");
        this.b = a.readExtensions
    }

    v(Pm, fm);
    var Qm = [null, "http://www.topografix.com/GPX/1/0", "http://www.topografix.com/GPX/1/1"];

    function Rm(a, b, c, d) {
        a.push(parseFloat(c.getAttribute("lon")), parseFloat(c.getAttribute("lat")));
        "ele" in d ? (a.push(d.ele), delete d.ele, b.hasZ = !0) : a.push(0);
        "time" in d ? (a.push(d.time), delete d.time, b.hasM = !0) : a.push(0);
        return a
    }

    function Sm(a, b, c) {
        var d = "XY", e = 2;
        a.hasZ && a.hasM ? (d = "XYZM", e = 4) : a.hasZ ? (d = "XYZ", e = 3) : a.hasM && (d = "XYM", e = 3);
        if (4 !== e) {
            var f;
            var g = 0;
            for (f = b.length / 4; g < f; g++)b[g * e] = b[4 * g], b[g * e + 1] = b[4 * g + 1], a.hasZ && (b[g * e + 2] = b[4 * g + 2]), a.hasM && (b[g * e + 2] = b[4 * g + 3]);
            b.length = b.length / 4 * e;
            if (c)for (g = 0, f = c.length; g < f; g++)c[g] = c[g] / 4 * e
        }
        return d
    }

    function Tm(a, b) {
        var c = b[b.length - 1], d = a.getAttribute("href");
        null !== d && (c.link = d);
        cl(Um, a, b)
    }

    function Vm(a, b) {
        b[b.length - 1].extensionsNode_ = a
    }

    function Wm(a, b) {
        var c = b[0];
        if (a = K({flatCoordinates: [], layoutOptions: {}}, Xm, a, b)) {
            b = a.flatCoordinates;
            delete a.flatCoordinates;
            var d = a.layoutOptions;
            delete a.layoutOptions;
            d = Sm(d, b);
            var e = new L(null);
            e.aa(d, b);
            jl(e, !1, c);
            c = new Lk(e);
            c.H(a);
            return c
        }
    }

    function Ym(a, b) {
        var c = b[0];
        if (a = K({flatCoordinates: [], ends: [], layoutOptions: {}}, Zm, a, b)) {
            b = a.flatCoordinates;
            delete a.flatCoordinates;
            var d = a.ends;
            delete a.ends;
            var e = a.layoutOptions;
            delete a.layoutOptions;
            e = Sm(e, b, d);
            var f = new M(null);
            f.aa(e, b, d);
            jl(f, !1, c);
            c = new Lk(f);
            c.H(a);
            return c
        }
    }

    function $m(a, b) {
        var c = b[0];
        if (b = K({}, an, a, b)) {
            var d = {};
            a = Rm([], d, a, b);
            d = Sm(d, a);
            a = new C(a, d);
            jl(a, !1, c);
            c = new Lk(a);
            c.H(b);
            return c
        }
    }

    var bn = {rte: Wm, trk: Ym, wpt: $m}, cn = J(Qm, {rte: Vk(Wm), trk: Vk(Ym), wpt: Vk($m)}),
        Um = J(Qm, {text: H(P, "linkText"), type: H(P, "linkType")}), Xm = J(Qm, {
            name: H(P),
            cmt: H(P),
            desc: H(P),
            src: H(P),
            link: Tm,
            number: H(pm),
            extensions: Vm,
            type: H(P),
            rtept: function (a, b) {
                var c = K({}, dn, a, b);
                c && (b = b[b.length - 1], Rm(b.flatCoordinates, b.layoutOptions, a, c))
            }
        }), dn = J(Qm, {ele: H(nm), time: H(mm)}), Zm = J(Qm, {
            name: H(P),
            cmt: H(P),
            desc: H(P),
            src: H(P),
            link: Tm,
            number: H(pm),
            type: H(P),
            extensions: Vm,
            trkseg: function (a, b) {
                var c = b[b.length - 1];
                cl(en, a, b);
                c.ends.push(c.flatCoordinates.length)
            }
        }),
        en = J(Qm, {
            trkpt: function (a, b) {
                var c = K({}, fn, a, b);
                c && (b = b[b.length - 1], Rm(b.flatCoordinates, b.layoutOptions, a, c))
            }
        }), fn = J(Qm, {ele: H(nm), time: H(mm)}), an = J(Qm, {
            ele: H(nm),
            time: H(mm),
            magvar: H(nm),
            geoidheight: H(nm),
            name: H(P),
            cmt: H(P),
            desc: H(P),
            src: H(P),
            link: Tm,
            sym: H(P),
            type: H(P),
            fix: H(P),
            sat: H(pm),
            hdop: H(nm),
            vdop: H(nm),
            pdop: H(nm),
            ageofdgpsdata: H(nm),
            dgpsid: H(pm),
            extensions: Vm
        });

    function gn(a, b) {
        b || (b = []);
        for (var c = 0, d = b.length; c < d; ++c) {
            var e = b[c];
            if (a.b) {
                var f = e.get("extensionsNode_") || null;
                a.b(e, f)
            }
            e.set("extensionsNode_", void 0)
        }
    }

    Pm.prototype.Kg = function (a, b) {
        if (!ha(Qm, a.namespaceURI))return null;
        var c = bn[a.localName];
        if (!c)return null;
        a = c(a, [hl(this, a, b)]);
        if (!a)return null;
        gn(this, [a]);
        return a
    };
    Pm.prototype.Dc = function (a, b) {
        return ha(Qm, a.namespaceURI) ? "gpx" == a.localName && (a = K([], cn, a, [hl(this, a, b)])) ? (gn(this, a), a) : [] : []
    };
    function hn(a, b, c) {
        a.setAttribute("href", b);
        b = c[c.length - 1].properties;
        dl({node: a}, jn, al, [b.linkText, b.linkType], c, kn)
    }

    function ln(a, b, c) {
        var d = c[c.length - 1], e = d.node.namespaceURI, f = d.properties;
        a.setAttributeNS(null, "lat", b[1]);
        a.setAttributeNS(null, "lon", b[0]);
        switch (d.geometryLayout) {
            case "XYZM":
                0 !== b[3] && (f.time = b[3]);
            case "XYZ":
                0 !== b[2] && (f.ele = b[2]);
                break;
            case "XYM":
                0 !== b[2] && (f.time = b[2])
        }
        b = "rtept" == a.nodeName ? mn[e] : nn[e];
        d = bl(f, b);
        dl({node: a, properties: f}, on, al, d, c, b)
    }

    var kn = ["text", "type"], jn = J(Qm, {text: I(sm), type: I(sm)}),
        pn = J(Qm, "name cmt desc src link number type rtept".split(" ")), qn = J(Qm, {
            name: I(sm),
            cmt: I(sm),
            desc: I(sm),
            src: I(sm),
            link: I(hn),
            number: I(um),
            type: I(sm),
            rtept: Yk(I(ln))
        }), mn = J(Qm, ["ele", "time"]), rn = J(Qm, "name cmt desc src link number type trkseg".split(" ")), un = J(Qm, {
            name: I(sm),
            cmt: I(sm),
            desc: I(sm),
            src: I(sm),
            link: I(hn),
            number: I(um),
            type: I(sm),
            trkseg: Yk(I(function (a, b, c) {
                dl({node: a, geometryLayout: b.ka, properties: {}}, sn, tn, b.V(), c)
            }))
        }), tn = Zk("trkpt"),
        sn = J(Qm, {trkpt: I(ln)}),
        nn = J(Qm, "ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")),
        on = J(Qm, {
            ele: I(tm),
            time: I(function (a, b) {
                b = new Date(1E3 * b);
                a.appendChild(Nk.createTextNode(b.getUTCFullYear() + "-" + xe(b.getUTCMonth() + 1) + "-" + xe(b.getUTCDate()) + "T" + xe(b.getUTCHours()) + ":" + xe(b.getUTCMinutes()) + ":" + xe(b.getUTCSeconds()) + "Z"))
            }),
            magvar: I(tm),
            geoidheight: I(tm),
            name: I(sm),
            cmt: I(sm),
            desc: I(sm),
            src: I(sm),
            link: I(hn),
            sym: I(sm),
            type: I(sm),
            fix: I(sm),
            sat: I(um),
            hdop: I(tm),
            vdop: I(tm),
            pdop: I(tm),
            ageofdgpsdata: I(tm),
            dgpsid: I(um)
        }), vn = {Point: "wpt", LineString: "rte", MultiLineString: "trk"};

    function wn(a, b) {
        if (a = a.W())if (a = vn[a.S()])return Ok(b[b.length - 1].node.namespaceURI, a)
    }

    var xn = J(Qm, {
        rte: I(function (a, b, c) {
            var d = c[0], e = b.M();
            a = {node: a, properties: e};
            if (b = b.W()) b = jl(b, !0, d), a.geometryLayout = b.ka, e.rtept = b.V();
            d = pn[c[c.length - 1].node.namespaceURI];
            e = bl(e, d);
            dl(a, qn, al, e, c, d)
        }), trk: I(function (a, b, c) {
            var d = c[0], e = b.M();
            a = {node: a, properties: e};
            if (b = b.W()) b = jl(b, !0, d), e.trkseg = b.qd();
            d = rn[c[c.length - 1].node.namespaceURI];
            e = bl(e, d);
            dl(a, un, al, e, c, d)
        }), wpt: I(function (a, b, c) {
            var d = c[0], e = c[c.length - 1];
            e.properties = b.M();
            if (b = b.W()) b = jl(b, !0, d), e.geometryLayout = b.ka, ln(a, b.V(),
                c)
        })
    });
    Pm.prototype.Zb = function (a, b) {
        b = il(this, b);
        var c = Ok("http://www.topografix.com/GPX/1/1", "gpx");
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd");
        c.setAttribute("version", "1.1");
        c.setAttribute("creator", "OpenLayers");
        dl({node: c}, xn, wn, a, [b]);
        return c
    };
    function yn() {
        gl.call(this)
    }

    v(yn, gl);
    function zn(a) {
        return "string" === typeof a ? a : ""
    }

    k = yn.prototype;
    k.S = function () {
        return "text"
    };
    k.Vb = function (a, b) {
        return this.ie(zn(a), il(this, b))
    };
    k.Ma = function (a, b) {
        return this.Mg(zn(a), il(this, b))
    };
    k.Xc = function (a, b) {
        return this.Ed(zn(a), il(this, b))
    };
    k.pb = function () {
        return this.defaultDataProjection
    };
    k.Hd = function (a, b) {
        return this.te(a, il(this, b))
    };
    k.Yb = function (a, b) {
        return this.mh(a, il(this, b))
    };
    k.fd = function (a, b) {
        return this.Id(a, il(this, b))
    };
    function An(a) {
        a = a ? a : {};
        gl.call(this);
        this.defaultDataProjection = Zb("EPSG:4326");
        this.b = a.altitudeMode ? a.altitudeMode : "none"
    }

    v(An, yn);
    var Bn = /^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/,
        Cn = /^H.([A-Z]{3}).*?:(.*)/, Dn = /^HFDTE(\d{2})(\d{2})(\d{2})/, En = /\r\n|\r|\n/;
    k = An.prototype;
    k.ie = function (a, b) {
        var c = this.b, d = a.split(En);
        a = {};
        var e = [], f = 2E3, g = 0, h = 1, l = -1, m;
        var n = 0;
        for (m = d.length; n < m; ++n) {
            var p = d[n], q;
            if ("B" == p.charAt(0)) {
                if (q = Bn.exec(p)) {
                    p = parseInt(q[1], 10);
                    var r = parseInt(q[2], 10), u = parseInt(q[3], 10),
                        x = parseInt(q[4], 10) + parseInt(q[5], 10) / 6E4;
                    "S" == q[6] && (x = -x);
                    var B = parseInt(q[7], 10) + parseInt(q[8], 10) / 6E4;
                    "W" == q[9] && (B = -B);
                    e.push(B, x);
                    "none" != c && e.push("gps" == c ? parseInt(q[11], 10) : "barometric" == c ? parseInt(q[12], 10) : 0);
                    q = Date.UTC(f, g, h, p, r, u);
                    q < l && (q = Date.UTC(f, g, h + 1, p, r,
                        u));
                    e.push(q / 1E3);
                    l = q
                }
            } else"H" == p.charAt(0) && ((q = Dn.exec(p)) ? (h = parseInt(q[1], 10), g = parseInt(q[2], 10) - 1, f = 2E3 + parseInt(q[3], 10)) : (q = Cn.exec(p)) && (a[q[1]] = q[2].trim()))
        }
        if (0 === e.length)return null;
        d = new L(null);
        d.aa("none" == c ? "XYM" : "XYZM", e);
        b = new Lk(jl(d, !1, b));
        b.H(a);
        return b
    };
    k.Mg = function (a, b) {
        return (a = this.ie(a, b)) ? [a] : []
    };
    k.te = function () {
    };
    k.mh = function () {
    };
    k.Id = function () {
    };
    k.Ed = function () {
    };
    function Fn(a, b, c, d, e, f) {
        Tc.call(this);
        this.j = null;
        this.N = a ? a : new Image;
        null !== d && (this.N.crossOrigin = d);
        this.c = f ? document.createElement("CANVAS") : null;
        this.f = f;
        this.i = null;
        this.g = e;
        this.a = c;
        this.l = b;
        this.o = !1;
        2 == this.g && Gn(this)
    }

    v(Fn, Tc);
    function Gn(a) {
        var b = eg(1, 1);
        try {
            b.drawImage(a.N, 0, 0), b.getImageData(0, 0, 1, 1)
        } catch (c) {
            a.o = !0
        }
    }

    Fn.prototype.v = function () {
        this.g = 3;
        this.i.forEach(Hc);
        this.i = null;
        this.b("change")
    };
    Fn.prototype.s = function () {
        this.g = 2;
        this.a && (this.N.width = this.a[0], this.N.height = this.a[1]);
        this.a = [this.N.width, this.N.height];
        this.i.forEach(Hc);
        this.i = null;
        Gn(this);
        if (!this.o && null !== this.f) {
            this.c.width = this.N.width;
            this.c.height = this.N.height;
            var a = this.c.getContext("2d");
            a.drawImage(this.N, 0, 0);
            for (var b = a.getImageData(0, 0, this.N.width, this.N.height), c = b.data, d = this.f[0] / 255,
                     e = this.f[1] / 255, f = this.f[2] / 255, g = 0,
                     h = c.length; g < h; g += 4)c[g] *= d, c[g + 1] *= e, c[g + 2] *= f;
            a.putImageData(b, 0, 0)
        }
        this.b("change")
    };
    Fn.prototype.Y = function () {
        return this.c ? this.c : this.N
    };
    Fn.prototype.load = function () {
        if (0 == this.g) {
            this.g = 1;
            this.i = [Mc(this.N, "error", this.v, this), Mc(this.N, "load", this.s, this)];
            try {
                this.N.src = this.l
            } catch (a) {
                this.v()
            }
        }
    };
    function Hn(a) {
        a = a || {};
        this.l = void 0 !== a.anchor ? a.anchor : [.5, .5];
        this.s = null;
        this.g = void 0 !== a.anchorOrigin ? a.anchorOrigin : "top-left";
        this.D = void 0 !== a.anchorXUnits ? a.anchorXUnits : "fraction";
        this.B = void 0 !== a.anchorYUnits ? a.anchorYUnits : "fraction";
        this.ra = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        var b = void 0 !== a.img ? a.img : null, c = void 0 !== a.imgSize ? a.imgSize : null, d = a.src;
        wa(!(void 0 !== d && b), 4);
        wa(!b || b && c, 5);
        void 0 !== d && 0 !== d.length || !b || (d = b.src || w(b).toString());
        wa(void 0 !== d && 0 < d.length, 6);
        var e =
            void 0 !== a.src ? 0 : 2;
        this.j = void 0 !== a.color ? Qh(a.color) : null;
        var f = this.ra, g = this.j, h = Ai.get(d, f, g);
        h || (h = new Fn(b, d, c, f, e, g), Ai.set(d, f, g, h));
        this.b = h;
        this.qa = void 0 !== a.offset ? a.offset : [0, 0];
        this.c = void 0 !== a.offsetOrigin ? a.offsetOrigin : "top-left";
        this.O = null;
        this.C = void 0 !== a.size ? a.size : null;
        zk.call(this, {
            opacity: void 0 !== a.opacity ? a.opacity : 1,
            rotation: void 0 !== a.rotation ? a.rotation : 0,
            scale: void 0 !== a.scale ? a.scale : 1,
            snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0,
            rotateWithView: void 0 !== a.rotateWithView ?
                a.rotateWithView : !1
        })
    }

    v(Hn, zk);
    k = Hn.prototype;
    k.clone = function () {
        return new Hn({
            anchor: this.l.slice(),
            anchorOrigin: this.g,
            anchorXUnits: this.D,
            anchorYUnits: this.B,
            crossOrigin: this.ra,
            color: this.j && this.j.slice ? this.j.slice() : this.j || void 0,
            src: this.b.l,
            offset: this.qa.slice(),
            offsetOrigin: this.c,
            size: null !== this.C ? this.C.slice() : void 0,
            opacity: this.i,
            scale: this.a,
            snapToPixel: this.v,
            rotation: this.f,
            rotateWithView: this.o
        })
    };
    k.Nc = function () {
        if (this.s)return this.s;
        var a = this.l, b = this.jc();
        if ("fraction" == this.D || "fraction" == this.B) {
            if (!b)return null;
            a = this.l.slice();
            "fraction" == this.D && (a[0] *= b[0]);
            "fraction" == this.B && (a[1] *= b[1])
        }
        if ("top-left" != this.g) {
            if (!b)return null;
            a === this.l && (a = this.l.slice());
            if ("top-right" == this.g || "bottom-right" == this.g) a[0] = -a[0] + b[0];
            if ("bottom-left" == this.g || "bottom-right" == this.g) a[1] = -a[1] + b[1]
        }
        return this.s = a
    };
    k.Uo = function () {
        return this.j
    };
    k.Y = function (a) {
        return this.b.Y(a)
    };
    k.Je = function () {
        return this.b.a
    };
    k.hf = function () {
        return this.b.g
    };
    k.Dg = function () {
        var a = this.b;
        if (!a.j)if (a.o) {
            var b = a.a[0], c = a.a[1], d = eg(b, c);
            d.fillRect(0, 0, b, c);
            a.j = d.canvas
        } else a.j = a.N;
        return a.j
    };
    k.Uc = function () {
        if (this.O)return this.O;
        var a = this.qa;
        if ("top-left" != this.c) {
            var b = this.jc(), c = this.b.a;
            if (!b || !c)return null;
            a = a.slice();
            if ("top-right" == this.c || "bottom-right" == this.c) a[0] = c[0] - b[0] - a[0];
            if ("bottom-left" == this.c || "bottom-right" == this.c) a[1] = c[1] - b[1] - a[1]
        }
        return this.O = a
    };
    k.Vo = function () {
        return this.b.l
    };
    k.jc = function () {
        return this.C ? this.C : this.b.a
    };
    k.ei = function (a, b) {
        return z(this.b, "change", a, b)
    };
    k.load = function () {
        this.b.load()
    };
    k.Rj = function (a, b) {
        Nc(this.b, "change", a, b)
    };
    function In(a) {
        a = a || {};
        this.a = a.font;
        this.i = a.rotation;
        this.l = a.rotateWithView;
        this.b = a.scale;
        this.pa = a.text;
        this.f = a.textAlign;
        this.j = a.textBaseline;
        this.Wa = void 0 !== a.fill ? a.fill : new Dk({color: "#333"});
        this.v = void 0 !== a.maxAngle ? a.maxAngle : Math.PI / 4;
        this.s = void 0 !== a.placement ? a.placement : "point";
        this.o = void 0 !== a.exceedLength ? a.exceedLength : !1;
        this.Ta = void 0 !== a.stroke ? a.stroke : null;
        this.g = void 0 !== a.offsetX ? a.offsetX : 0;
        this.c = void 0 !== a.offsetY ? a.offsetY : 0
    }

    k = In.prototype;
    k.clone = function () {
        return new In({
            font: this.a,
            placement: this.s,
            maxAngle: this.v,
            exceedLength: this.o,
            rotation: this.i,
            rotateWithView: this.l,
            scale: this.b,
            text: this.Ia(),
            textAlign: this.f,
            textBaseline: this.j,
            fill: this.Ca() ? this.Ca().clone() : void 0,
            stroke: this.Da() ? this.Da().clone() : void 0,
            offsetX: this.g,
            offsetY: this.c
        })
    };
    k.Xk = function () {
        return this.o
    };
    k.Yk = function () {
        return this.a
    };
    k.kl = function () {
        return this.v
    };
    k.rl = function () {
        return this.s
    };
    k.nl = function () {
        return this.g
    };
    k.ol = function () {
        return this.c
    };
    k.Ca = function () {
        return this.Wa
    };
    k.$o = function () {
        return this.l
    };
    k.ap = function () {
        return this.i
    };
    k.bp = function () {
        return this.b
    };
    k.Da = function () {
        return this.Ta
    };
    k.Ia = function () {
        return this.pa
    };
    k.xl = function () {
        return this.f
    };
    k.yl = function () {
        return this.j
    };
    k.bq = function (a) {
        this.o = a
    };
    k.Cj = function (a) {
        this.a = a
    };
    k.iq = function (a) {
        this.v = a
    };
    k.Gj = function (a) {
        this.g = a
    };
    k.Hj = function (a) {
        this.c = a
    };
    k.mq = function (a) {
        this.s = a
    };
    k.zf = function (a) {
        this.Wa = a
    };
    k.cp = function (a) {
        this.i = a
    };
    k.gj = function (a) {
        this.b = a
    };
    k.Bf = function (a) {
        this.Ta = a
    };
    k.Fd = function (a) {
        this.pa = a
    };
    k.Jj = function (a) {
        this.f = a
    };
    k.oq = function (a) {
        this.j = a
    };
    function Jn(a) {
        a = a ? a : {};
        fm.call(this);
        Kn || (Ln = [255, 255, 255, 1], Mn = new Dk({color: Ln}), Nn = [20, 2], On = Pn = "pixels", Qn = [64, 64], Rn = "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png", Sn = .5, Tn = new Hn({
            anchor: Nn,
            anchorOrigin: "bottom-left",
            anchorXUnits: Pn,
            anchorYUnits: On,
            crossOrigin: "anonymous",
            rotation: 0,
            scale: Sn,
            size: Qn,
            src: Rn
        }), Un = "NO_IMAGE", Vn = new Ek({color: Ln, width: 1}), Wn = new Ek({
            color: [51, 51, 51, 1],
            width: 2
        }), Xn = new In({font: "bold 16px Helvetica", fill: Mn, stroke: Wn, scale: .8}), Yn = new Fk({
            fill: Mn,
            image: Tn, text: Xn, stroke: Vn, zIndex: 0
        }), Kn = [Yn]);
        this.defaultDataProjection = Zb("EPSG:4326");
        this.a = a.defaultStyle ? a.defaultStyle : Kn;
        this.c = void 0 !== a.extractStyles ? a.extractStyles : !0;
        this.j = void 0 !== a.writeStyles ? a.writeStyles : !0;
        this.b = {};
        this.f = void 0 !== a.showPointNames ? a.showPointNames : !0
    }

    var Kn, Ln, Mn, Nn, Pn, On, Qn, Rn, Sn, Tn, Un, Vn, Wn, Xn, Yn;
    v(Jn, fm);
    var Zn = ["http://www.google.com/kml/ext/2.2"],
        $n = [null, "http://earth.google.com/kml/2.0", "http://earth.google.com/kml/2.1", "http://earth.google.com/kml/2.2", "http://www.opengis.net/kml/2.2"],
        ao = {fraction: "fraction", pixels: "pixels", insetPixels: "pixels"};

    function bo(a, b) {
        var c = [0, 0], d = "start";
        if (a.Y()) {
            var e = a.Y().Je();
            null === e && (e = Qn);
            2 == e.length && (d = a.Y().a, c[0] = d * e[0] / 2, c[1] = -d * e[1] / 2, d = "left")
        }
        null !== a.Ia() ? (e = a.Ia(), a = e.clone(), a.Cj(e.a || Xn.a), a.gj(e.b || Xn.b), a.zf(e.Ca() || Xn.Ca()), a.Bf(e.Da() || Wn)) : a = Xn.clone();
        a.Fd(b);
        a.Gj(c[0]);
        a.Hj(c[1]);
        a.Jj(d);
        return new Fk({text: a})
    }

    function co(a, b, c, d, e) {
        return function () {
            var f = e, g = "";
            f && this.W() && (f = "Point" === this.W().S());
            f && (g = this.get("name"), f = f && g);
            if (a)return f ? (f = bo(a[0], g), a.concat(f)) : a;
            if (b) {
                var h = eo(b, c, d);
                return f ? (f = bo(h[0], g), h.concat(f)) : h
            }
            return f ? (f = bo(c[0], g), c.concat(f)) : c
        }
    }

    function eo(a, b, c) {
        return Array.isArray(a) ? a : "string" === typeof a ? (!(a in c) && "#" + a in c && (a = "#" + a), eo(c[a], b, c)) : b
    }

    function fo(a) {
        a = Pk(a, !1);
        if (a = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(a))return a = a[1], [parseInt(a.substr(6, 2), 16), parseInt(a.substr(4, 2), 16), parseInt(a.substr(2, 2), 16), parseInt(a.substr(0, 2), 16) / 255]
    }

    function go(a) {
        a = Pk(a, !1);
        for (var b = [],
                 c = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i,
                 d; d = c.exec(a);)b.push(parseFloat(d[1]), parseFloat(d[2]), d[3] ? parseFloat(d[3]) : 0), a = a.substr(d[0].length);
        if ("" === a)return b
    }

    function ho(a) {
        var b = Pk(a, !1).trim();
        a = a.baseURI;
        a && "about:blank" != a || (a = window.location.href);
        return a ? (new URL(b, a)).href : b
    }

    function io(a) {
        return nm(a)
    }

    function jo(a, b) {
        return K(null, ko, a, b)
    }

    function lo(a, b) {
        if (b = K({A: [], Uj: []}, mo, a, b)) {
            a = b.A;
            b = b.Uj;
            var c;
            var d = 0;
            for (c = Math.min(a.length, b.length); d < c; ++d)a[4 * d + 3] = b[d];
            b = new L(null);
            b.aa("XYZM", a);
            return b
        }
    }

    function no(a, b) {
        var c = K({}, oo, a, b);
        if (a = K(null, po, a, b))return b = new L(null), b.aa("XYZ", a), b.H(c), b
    }

    function qo(a, b) {
        var c = K({}, oo, a, b);
        if (a = K(null, po, a, b))return b = new D(null), b.aa("XYZ", a, [a.length]), b.H(c), b
    }

    function ro(a, b) {
        a = K([], so, a, b);
        if (!a)return null;
        if (0 === a.length)return new Xl(a);
        var c = !0, d = a[0].S(), e;
        var f = 1;
        for (e = a.length; f < e; ++f)if (b = a[f], b.S() != d) {
            c = !1;
            break
        }
        if (c)if ("Point" == d) {
            var g = a[0];
            c = g.ka;
            d = g.ca();
            f = 1;
            for (e = a.length; f < e; ++f)b = a[f], ja(d, b.ca());
            g = new rl(null);
            g.aa(c, d);
            to(g, a)
        } else"LineString" == d ? (g = new M(null), ql(g, a), to(g, a)) : "Polygon" == d ? (g = new O(null), sl(g, a), to(g, a)) : "GeometryCollection" == d ? g = new Xl(a) : wa(!1, 37); else g = new Xl(a);
        return g
    }

    function uo(a, b) {
        var c = K({}, oo, a, b);
        if (a = K(null, po, a, b))return b = new C(null), b.aa("XYZ", a), b.H(c), b
    }

    function vo(a, b) {
        var c = K({}, oo, a, b);
        if ((a = K([null], wo, a, b)) && a[0]) {
            b = new D(null);
            var d = a[0], e = [d.length], f;
            var g = 1;
            for (f = a.length; g < f; ++g)ja(d, a[g]), e.push(d.length);
            b.aa("XYZ", d, e);
            b.H(c);
            return b
        }
    }

    function xo(a, b) {
        b = K({}, yo, a, b);
        if (!b)return null;
        a = "fillStyle" in b ? b.fillStyle : Mn;
        var c = b.fill;
        void 0 === c || c || (a = null);
        c = "imageStyle" in b ? b.imageStyle : Tn;
        c == Un && (c = void 0);
        var d = "textStyle" in b ? b.textStyle : Xn, e = "strokeStyle" in b ? b.strokeStyle : Vn;
        b = b.outline;
        void 0 === b || b || (e = null);
        return [new Fk({fill: a, image: c, stroke: e, text: d, zIndex: void 0})]
    }

    function to(a, b) {
        var c = b.length, d = Array(b.length), e = Array(b.length), f = Array(b.length), g, h, l;
        var m = h = l = !1;
        for (g = 0; g < c; ++g) {
            var n = b[g];
            d[g] = n.get("extrude");
            e[g] = n.get("tessellate");
            f[g] = n.get("altitudeMode");
            m = m || void 0 !== d[g];
            h = h || void 0 !== e[g];
            l = l || f[g]
        }
        m && a.set("extrude", d);
        h && a.set("tessellate", e);
        l && a.set("altitudeMode", f)
    }

    function zo(a, b) {
        cl(Ao, a, b)
    }

    function Bo(a, b) {
        cl(Co, a, b)
    }

    var Do = J($n, {displayName: H(P), value: H(P)}), Ao = J($n, {
            Data: function (a, b) {
                var c = a.getAttribute("name");
                cl(Do, a, b);
                a = b[b.length - 1];
                null !== c ? a[c] = a.value : null !== a.displayName && (a[a.displayName] = a.value);
                delete a.value
            }, SchemaData: function (a, b) {
                cl(Eo, a, b)
            }
        }), Co = J($n, {
            LatLonAltBox: function (a, b) {
                if (a = K({}, Fo, a, b)) b = b[b.length - 1], b.extent = [parseFloat(a.west), parseFloat(a.south), parseFloat(a.east), parseFloat(a.north)], b.altitudeMode = a.altitudeMode, b.minAltitude = parseFloat(a.minAltitude), b.maxAltitude = parseFloat(a.maxAltitude)
            },
            Lod: function (a, b) {
                if (a = K({}, Ho, a, b)) b = b[b.length - 1], b.minLodPixels = parseFloat(a.minLodPixels), b.maxLodPixels = parseFloat(a.maxLodPixels), b.minFadeExtent = parseFloat(a.minFadeExtent), b.maxFadeExtent = parseFloat(a.maxFadeExtent)
            }
        }), Fo = J($n, {
            altitudeMode: H(P),
            minAltitude: H(nm),
            maxAltitude: H(nm),
            north: H(nm),
            south: H(nm),
            east: H(nm),
            west: H(nm)
        }), Ho = J($n, {minLodPixels: H(nm), maxLodPixels: H(nm), minFadeExtent: H(nm), maxFadeExtent: H(nm)}),
        oo = J($n, {extrude: H(km), tessellate: H(km), altitudeMode: H(P)}), ko = J($n, {coordinates: Wk(go)}),
        wo = J($n, {
            innerBoundaryIs: function (a, b) {
                (a = K(void 0, Io, a, b)) && b[b.length - 1].push(a)
            }, outerBoundaryIs: function (a, b) {
                (a = K(void 0, Jo, a, b)) && (b[b.length - 1][0] = a)
            }
        }), mo = J($n, {
            when: function (a, b) {
                b = b[b.length - 1].Uj;
                a = Pk(a, !1);
                a = Date.parse(a);
                b.push(isNaN(a) ? 0 : a)
            }
        }, J(Zn, {
            coord: function (a, b) {
                b = b[b.length - 1].A;
                a = Pk(a, !1);
                (a = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(a)) ? b.push(parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3]),
                    0) : b.push(0, 0, 0, 0)
            }
        })), po = J($n, {coordinates: Wk(go)}), Ko = J($n, {href: H(ho)}, J(Zn, {x: H(nm), y: H(nm), w: H(nm), h: H(nm)})),
        Lo = J($n, {
            Icon: H(function (a, b) {
                return (a = K({}, Ko, a, b)) ? a : null
            }), heading: H(nm), hotSpot: H(function (a) {
                var b = a.getAttribute("xunits"), c = a.getAttribute("yunits");
                var d = "insetPixels" !== b ? "insetPixels" !== c ? "bottom-left" : "top-left" : "insetPixels" !== c ? "bottom-right" : "top-right";
                return {
                    x: parseFloat(a.getAttribute("x")),
                    nh: ao[b],
                    y: parseFloat(a.getAttribute("y")),
                    oh: ao[c],
                    origin: d
                }
            }), scale: H(io)
        }),
        Io = J($n, {LinearRing: Wk(jo)}), Mo = J($n, {color: H(fo), scale: H(io)}),
        No = J($n, {color: H(fo), width: H(nm)}),
        so = J($n, {LineString: Vk(no), LinearRing: Vk(qo), MultiGeometry: Vk(ro), Point: Vk(uo), Polygon: Vk(vo)}),
        Oo = J(Zn, {Track: Vk(lo)}), Qo = J($n, {
            ExtendedData: zo, Region: Bo, Link: function (a, b) {
                cl(Po, a, b)
            }, address: H(P), description: H(P), name: H(P), open: H(km), phoneNumber: H(P), visibility: H(km)
        }), Po = J($n, {href: H(ho)}), Jo = J($n, {LinearRing: Wk(jo)}),
        Ro = J($n, {Style: H(xo), key: H(P), styleUrl: H(ho)}), To = J($n, {
            ExtendedData: zo,
            Region: Bo,
            MultiGeometry: H(ro, "geometry"),
            LineString: H(no, "geometry"),
            LinearRing: H(qo, "geometry"),
            Point: H(uo, "geometry"),
            Polygon: H(vo, "geometry"),
            Style: H(xo),
            StyleMap: function (a, b) {
                if (a = K(void 0, So, a, b)) b = b[b.length - 1], Array.isArray(a) ? b.Style = a : "string" === typeof a ? b.styleUrl = a : wa(!1, 38)
            },
            address: H(P),
            description: H(P),
            name: H(P),
            open: H(km),
            phoneNumber: H(P),
            styleUrl: H(ho),
            visibility: H(km)
        }, J(Zn, {
            MultiTrack: H(function (a, b) {
                if (a = K([], Oo, a, b))return b = new M(null), ql(b, a), b
            }, "geometry"), Track: H(lo, "geometry")
        })),
        Uo = J($n, {color: H(fo), fill: H(km), outline: H(km)}), Eo = J($n, {
            SimpleData: function (a, b) {
                var c = a.getAttribute("name");
                null !== c && (a = P(a), b[b.length - 1][c] = a)
            }
        }), yo = J($n, {
            IconStyle: function (a, b) {
                if (a = K({}, Lo, a, b)) {
                    b = b[b.length - 1];
                    var c = "Icon" in a ? a.Icon : {}, d = !("Icon" in a) || 0 < Object.keys(c).length, e, f = c.href;
                    f ? e = f : d && (e = Rn);
                    f = "bottom-left";
                    var g = a.hotSpot;
                    if (g) {
                        var h = [g.x, g.y];
                        var l = g.nh;
                        var m = g.oh;
                        f = g.origin
                    } else e === Rn ? (h = Nn, l = Pn, m = On) : /^http:\/\/maps\.(?:google|gstatic)\.com\//.test(e) && (h = [.5, 0], m = l = "fraction");
                    var n;
                    g = c.x;
                    var p = c.y;
                    void 0 !== g && void 0 !== p && (n = [g, p]);
                    var q;
                    g = c.w;
                    c = c.h;
                    void 0 !== g && void 0 !== c && (q = [g, c]);
                    var r;
                    c = a.heading;
                    void 0 !== c && (r = Ia(c));
                    a = a.scale;
                    d ? (e == Rn && (q = Qn, void 0 === a && (a = Sn)), e = new Hn({
                        anchor: h,
                        anchorOrigin: f,
                        anchorXUnits: l,
                        anchorYUnits: m,
                        crossOrigin: "anonymous",
                        offset: n,
                        offsetOrigin: "bottom-left",
                        rotation: r,
                        scale: a,
                        size: q,
                        src: e
                    }), b.imageStyle = e) : b.imageStyle = Un
                }
            }, LabelStyle: function (a, b) {
                (a = K({}, Mo, a, b)) && (b[b.length - 1].textStyle = new In({
                    fill: new Dk({
                        color: "color" in a ? a.color :
                            Ln
                    }), scale: a.scale
                }))
            }, LineStyle: function (a, b) {
                (a = K({}, No, a, b)) && (b[b.length - 1].strokeStyle = new Ek({
                    color: "color" in a ? a.color : Ln,
                    width: "width" in a ? a.width : 1
                }))
            }, PolyStyle: function (a, b) {
                if (a = K({}, Uo, a, b)) {
                    b = b[b.length - 1];
                    b.fillStyle = new Dk({color: "color" in a ? a.color : Ln});
                    var c = a.fill;
                    void 0 !== c && (b.fill = c);
                    a = a.outline;
                    void 0 !== a && (b.outline = a)
                }
            }
        }), So = J($n, {
            Pair: function (a, b) {
                if (a = K({}, Ro, a, b)) {
                    var c = a.key;
                    c && "normal" == c && ((c = a.styleUrl) && (b[b.length - 1] = c), (a = a.Style) && (b[b.length - 1] = a))
                }
            }
        });
    k = Jn.prototype;
    k.Ig = function (a, b) {
        var c = J($n, {
            Document: Uk(this.Ig, this),
            Folder: Uk(this.Ig, this),
            Placemark: Vk(this.Qg, this),
            Style: this.Sp.bind(this),
            StyleMap: this.Rp.bind(this)
        });
        if (a = K([], c, a, b, this))return a
    };
    k.Qg = function (a, b) {
        var c = K({geometry: null}, To, a, b);
        if (c) {
            var d = new Lk;
            a = a.getAttribute("id");
            null !== a && d.lc(a);
            b = b[0];
            (a = c.geometry) && jl(a, !1, b);
            d.Sa(a);
            delete c.geometry;
            this.c && d.sg(co(c.Style, c.styleUrl, this.a, this.b, this.f));
            delete c.Style;
            d.H(c);
            return d
        }
    };
    k.Sp = function (a, b) {
        var c = a.getAttribute("id");
        null !== c && (b = xo(a, b)) && (a = a.baseURI, a && "about:blank" != a || (a = window.location.href), c = a ? (new URL("#" + c, a)).href : "#" + c, this.b[c] = b)
    };
    k.Rp = function (a, b) {
        var c = a.getAttribute("id");
        null !== c && (b = K(void 0, So, a, b)) && (a = a.baseURI, a && "about:blank" != a || (a = window.location.href), c = a ? (new URL("#" + c, a)).href : "#" + c, this.b[c] = b)
    };
    k.Kg = function (a, b) {
        return ha($n, a.namespaceURI) ? (a = this.Qg(a, [hl(this, a, b)])) ? a : null : null
    };
    k.Dc = function (a, b) {
        if (!ha($n, a.namespaceURI))return [];
        var c = a.localName;
        if ("Document" == c || "Folder" == c)return (c = this.Ig(a, [hl(this, a, b)])) ? c : [];
        if ("Placemark" == c)return (b = this.Qg(a, [hl(this, a, b)])) ? [b] : [];
        if ("kml" == c) {
            c = [];
            for (a = a.firstElementChild; a; a = a.nextElementSibling) {
                var d = this.Dc(a, b);
                d && ja(c, d)
            }
            return c
        }
        return []
    };
    k.Lp = function (a) {
        if (Rk(a))return Vo(this, a);
        if (Sk(a))return Wo(this, a);
        if ("string" === typeof a)return a = Tk(a), Vo(this, a)
    };
    function Vo(a, b) {
        for (b = b.firstChild; b; b = b.nextSibling)if (b.nodeType == Node.ELEMENT_NODE) {
            var c = Wo(a, b);
            if (c)return c
        }
    }

    function Wo(a, b) {
        var c;
        for (c = b.firstElementChild; c; c = c.nextElementSibling)if (ha($n, c.namespaceURI) && "name" == c.localName)return P(c);
        for (c = b.firstElementChild; c; c = c.nextElementSibling)if (b = c.localName, ha($n, c.namespaceURI) && ("Document" == b || "Folder" == b || "Placemark" == b || "kml" == b) && (b = Wo(a, c)))return b
    }

    k.Mp = function (a) {
        var b = [];
        Rk(a) ? ja(b, Xo(this, a)) : Sk(a) ? ja(b, Yo(this, a)) : "string" === typeof a && (a = Tk(a), ja(b, Xo(this, a)));
        return b
    };
    function Xo(a, b) {
        var c = [];
        for (b = b.firstChild; b; b = b.nextSibling)b.nodeType == Node.ELEMENT_NODE && ja(c, Yo(a, b));
        return c
    }

    function Yo(a, b) {
        var c, d = [];
        for (c = b.firstElementChild; c; c = c.nextElementSibling)if (ha($n, c.namespaceURI) && "NetworkLink" == c.localName) {
            var e = K({}, Qo, c, []);
            d.push(e)
        }
        for (c = b.firstElementChild; c; c = c.nextElementSibling)b = c.localName, !ha($n, c.namespaceURI) || "Document" != b && "Folder" != b && "kml" != b || ja(d, Yo(a, c));
        return d
    }

    k.Pp = function (a) {
        var b = [];
        Rk(a) ? ja(b, Zo(this, a)) : Sk(a) ? ja(b, this.wf(a)) : "string" === typeof a && (a = Tk(a), ja(b, Zo(this, a)));
        return b
    };
    function Zo(a, b) {
        var c = [];
        for (b = b.firstChild; b; b = b.nextSibling)b.nodeType == Node.ELEMENT_NODE && ja(c, a.wf(b));
        return c
    }

    k.wf = function (a) {
        var b, c = [];
        for (b = a.firstElementChild; b; b = b.nextElementSibling)if (ha($n, b.namespaceURI) && "Region" == b.localName) {
            var d = K({}, Co, b, []);
            c.push(d)
        }
        for (b = a.firstElementChild; b; b = b.nextElementSibling)a = b.localName, !ha($n, b.namespaceURI) || "Document" != a && "Folder" != a && "kml" != a || ja(c, this.wf(b));
        return c
    };
    function $o(a, b) {
        b = Qh(b);
        b = [255 * (4 == b.length ? b[3] : 1), b[2], b[1], b[0]];
        var c;
        for (c = 0; 4 > c; ++c) {
            var d = parseInt(b[c], 10).toString(16);
            b[c] = 1 == d.length ? "0" + d : d
        }
        sm(a, b.join(""))
    }

    function ap(a, b, c) {
        a = {node: a};
        var d = b.S();
        if ("GeometryCollection" == d) {
            var e = b.pd();
            var f = bp
        } else"MultiPoint" == d ? (e = b.fe(), f = cp) : "MultiLineString" == d ? (e = b.qd(), f = dp) : "MultiPolygon" == d ? (e = b.Zd(), f = ep) : wa(!1, 39);
        dl(a, fp, f, e, c)
    }

    function gp(a, b, c) {
        dl({node: a}, hp, ip, [b], c)
    }

    function jp(a, b, c) {
        var d = {node: a};
        b.c && a.setAttribute("id", b.c);
        a = b.M();
        var e = {address: 1, description: 1, name: 1, open: 1, phoneNumber: 1, styleUrl: 1, visibility: 1};
        e[b.a] = 1;
        var f = Object.keys(a || {}).sort().filter(function (a) {
            return !e[a]
        });
        if (0 < f.length) {
            var g = bl(a, f);
            dl(d, kp, lp, [{names: f, values: g}], c)
        }
        if (f = b.bb())if (f = f.call(b, 0)) f = Array.isArray(f) ? f[0] : f, this.j && (a.Style = f), (f = f.Ia()) && (a.name = f.Ia());
        f = mp[c[c.length - 1].node.namespaceURI];
        a = bl(a, f);
        dl(d, kp, al, a, c, f);
        a = c[0];
        (b = b.W()) && (b = jl(b, !0, a));
        dl(d,
            kp, bp, [b], c)
    }

    function np(a, b, c) {
        var d = b.ca();
        a = {node: a};
        a.layout = b.ka;
        a.stride = b.oa();
        b = b.M();
        b.coordinates = d;
        d = op[c[c.length - 1].node.namespaceURI];
        b = bl(b, d);
        dl(a, pp, al, b, c, d)
    }

    function qp(a, b, c) {
        b = b.Yd();
        var d = b.shift();
        a = {node: a};
        dl(a, rp, sp, b, c);
        dl(a, rp, tp, [d], c)
    }

    function up(a, b) {
        tm(a, Math.round(1E6 * b) / 1E6)
    }

    var vp = J($n, ["Document", "Placemark"]), yp = J($n, {
            Document: I(function (a, b, c) {
                dl({node: a}, wp, xp, b, c, void 0, this)
            }), Placemark: I(jp)
        }), wp = J($n, {Placemark: I(jp)}), zp = J($n, {
            Data: I(function (a, b, c) {
                a.setAttribute("name", b.name);
                a = {node: a};
                b = b.value;
                "object" == typeof b ? (null !== b && b.displayName && dl(a, zp, al, [b.displayName], c, ["displayName"]), null !== b && b.value && dl(a, zp, al, [b.value], c, ["value"])) : dl(a, zp, al, [b], c, ["value"])
            }), value: I(function (a, b) {
                sm(a, b)
            }), displayName: I(function (a, b) {
                a.appendChild(Nk.createCDATASection(b))
            })
        }),
        Ap = {
            Point: "Point",
            LineString: "LineString",
            LinearRing: "LinearRing",
            Polygon: "Polygon",
            MultiPoint: "MultiGeometry",
            MultiLineString: "MultiGeometry",
            MultiPolygon: "MultiGeometry",
            GeometryCollection: "MultiGeometry"
        }, Bp = J($n, ["href"], J(Zn, ["x", "y", "w", "h"])),
        Cp = J($n, {href: I(sm)}, J(Zn, {x: I(tm), y: I(tm), w: I(tm), h: I(tm)})),
        Dp = J($n, ["scale", "heading", "Icon", "hotSpot"]), Fp = J($n, {
            Icon: I(function (a, b, c) {
                a = {node: a};
                var d = Bp[c[c.length - 1].node.namespaceURI], e = bl(b, d);
                dl(a, Cp, al, e, c, d);
                d = Bp[Zn[0]];
                e = bl(b, d);
                dl(a, Cp,
                    Ep, e, c, d)
            }), heading: I(tm), hotSpot: I(function (a, b) {
                a.setAttribute("x", b.x);
                a.setAttribute("y", b.y);
                a.setAttribute("xunits", b.nh);
                a.setAttribute("yunits", b.oh)
            }), scale: I(up)
        }), Gp = J($n, ["color", "scale"]), Hp = J($n, {color: I($o), scale: I(up)}), Ip = J($n, ["color", "width"]),
        Jp = J($n, {color: I($o), width: I(tm)}), hp = J($n, {LinearRing: I(np)}),
        fp = J($n, {LineString: I(np), Point: I(np), Polygon: I(qp), GeometryCollection: I(ap)}),
        mp = J($n, "name open visibility address phoneNumber description styleUrl Style".split(" ")), kp = J($n,
        {
            ExtendedData: I(function (a, b, c) {
                a = {node: a};
                var d = b.names;
                b = b.values;
                for (var e = d.length, f = 0; f < e; f++)dl(a, zp, Kp, [{name: d[f], value: b[f]}], c)
            }),
            MultiGeometry: I(ap),
            LineString: I(np),
            LinearRing: I(np),
            Point: I(np),
            Polygon: I(qp),
            Style: I(function (a, b, c) {
                a = {node: a};
                var d = {}, e = b.Ca(), f = b.Da(), g = b.Y();
                b = b.Ia();
                g instanceof Hn && (d.IconStyle = g);
                b && (d.LabelStyle = b);
                f && (d.LineStyle = f);
                e && (d.PolyStyle = e);
                b = Lp[c[c.length - 1].node.namespaceURI];
                d = bl(d, b);
                dl(a, Mp, al, d, c, b)
            }),
            address: I(sm),
            description: I(sm),
            name: I(sm),
            open: I(rm),
            phoneNumber: I(sm),
            styleUrl: I(sm),
            visibility: I(rm)
        }), op = J($n, ["extrude", "tessellate", "altitudeMode", "coordinates"]), pp = J($n, {
            extrude: I(rm), tessellate: I(rm), altitudeMode: I(sm), coordinates: I(function (a, b, c) {
                c = c[c.length - 1];
                var d = c.layout;
                c = c.stride;
                var e;
                "XY" == d || "XYM" == d ? e = 2 : "XYZ" == d || "XYZM" == d ? e = 3 : wa(!1, 34);
                var f, g = b.length, h = "";
                if (0 < g) {
                    h += b[0];
                    for (d = 1; d < e; ++d)h += "," + b[d];
                    for (f = c; f < g; f += c)for (h += " " + b[f], d = 1; d < e; ++d)h += "," + b[f + d]
                }
                sm(a, h)
            })
        }), rp = J($n, {outerBoundaryIs: I(gp), innerBoundaryIs: I(gp)}),
        Np = J($n, {color: I($o)}), Lp = J($n, ["IconStyle", "LabelStyle", "LineStyle", "PolyStyle"]), Mp = J($n, {
            IconStyle: I(function (a, b, c) {
                a = {node: a};
                var d = {}, e = b.jc(), f = b.Je(), g = {href: b.b.l};
                if (e) {
                    g.w = e[0];
                    g.h = e[1];
                    var h = b.Nc(), l = b.Uc();
                    l && f && 0 !== l[0] && l[1] !== e[1] && (g.x = l[0], g.y = f[1] - (l[1] + e[1]));
                    !h || h[0] === e[0] / 2 && h[1] === e[1] / 2 || (d.hotSpot = {
                        x: h[0],
                        nh: "pixels",
                        y: e[1] - h[1],
                        oh: "pixels"
                    })
                }
                d.Icon = g;
                e = b.a;
                1 !== e && (d.scale = e);
                b = b.f;
                0 !== b && (d.heading = b);
                b = Dp[c[c.length - 1].node.namespaceURI];
                d = bl(d, b);
                dl(a, Fp, al, d, c, b)
            }), LabelStyle: I(function (a,
                                        b, c) {
                a = {node: a};
                var d = {}, e = b.Ca();
                e && (d.color = e.b);
                (b = b.b) && 1 !== b && (d.scale = b);
                b = Gp[c[c.length - 1].node.namespaceURI];
                d = bl(d, b);
                dl(a, Hp, al, d, c, b)
            }), LineStyle: I(function (a, b, c) {
                a = {node: a};
                var d = Ip[c[c.length - 1].node.namespaceURI];
                b = bl({color: b.b, width: b.c}, d);
                dl(a, Jp, al, b, c, d)
            }), PolyStyle: I(function (a, b, c) {
                dl({node: a}, Np, Op, [b.b], c)
            })
        });

    function Ep(a, b, c) {
        return Ok(Zn[0], "gx:" + c)
    }

    function xp(a, b) {
        return Ok(b[b.length - 1].node.namespaceURI, "Placemark")
    }

    function bp(a, b) {
        if (a)return Ok(b[b.length - 1].node.namespaceURI, Ap[a.S()])
    }

    var Op = Zk("color"), Kp = Zk("Data"), lp = Zk("ExtendedData"), sp = Zk("innerBoundaryIs"), cp = Zk("Point"),
        dp = Zk("LineString"), ip = Zk("LinearRing"), ep = Zk("Polygon"), tp = Zk("outerBoundaryIs");
    Jn.prototype.Zb = function (a, b) {
        b = il(this, b);
        var c = Ok($n[4], "kml");
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:gx", Zn[0]);
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");
        var d = {node: c}, e = {};
        1 < a.length ? e.Document = a : 1 == a.length && (e.Placemark = a[0]);
        a = vp[c.namespaceURI];
        e = bl(e, a);
        dl(d, yp, al, e, [b], a, this);
        return c
    };
    var Pp = {
        Jd: function () {
        }
    };
    (function (a) {
        function b(a) {
            this.oc = ArrayBuffer.isView && ArrayBuffer.isView(a) ? a : new Uint8Array(a || 0);
            this.type = this.ha = 0;
            this.length = this.oc.length
        }

        function c(a, b, c) {
            var e = c.oc;
            var f = e[c.ha++];
            var g = (f & 112) >> 4;
            if (128 > f)return d(a, g, b);
            f = e[c.ha++];
            g |= (f & 127) << 3;
            if (128 > f)return d(a, g, b);
            f = e[c.ha++];
            g |= (f & 127) << 10;
            if (128 > f)return d(a, g, b);
            f = e[c.ha++];
            g |= (f & 127) << 17;
            if (128 > f)return d(a, g, b);
            f = e[c.ha++];
            g |= (f & 127) << 24;
            if (128 > f)return d(a, g, b);
            f = e[c.ha++];
            if (128 > f)return d(a, g | (f & 1) << 31, b);
            throw Error("Expected varint not more than 10 bytes");
        }

        function d(a, b, c) {
            return c ? 4294967296 * b + (a >>> 0) : 4294967296 * (b >>> 0) + (a >>> 0)
        }

        var e = {
            read: function (a, b, c, d, e) {
                var f = 8 * e - d - 1;
                var g = (1 << f) - 1, h = g >> 1, l = -7;
                e = c ? e - 1 : 0;
                var m = c ? -1 : 1, x = a[b + e];
                e += m;
                c = x & (1 << -l) - 1;
                x >>= -l;
                for (l += f; 0 < l; c = 256 * c + a[b + e], e += m, l -= 8);
                f = c & (1 << -l) - 1;
                c >>= -l;
                for (l += d; 0 < l; f = 256 * f + a[b + e], e += m, l -= 8);
                if (0 === c) c = 1 - h; else {
                    if (c === g)return f ? NaN : Infinity * (x ? -1 : 1);
                    f += Math.pow(2, d);
                    c -= h
                }
                return (x ? -1 : 1) * f * Math.pow(2, c - d)
            }, write: function (a, b, c, d, e, n) {
                var f, g = 8 * n - e - 1, h = (1 << g) - 1, l = h >> 1, m = 23 === e ? Math.pow(2,
                        -24) - Math.pow(2, -77) : 0;
                n = d ? 0 : n - 1;
                var B = d ? 1 : -1, A = 0 > b || 0 === b && 0 > 1 / b ? 1 : 0;
                b = Math.abs(b);
                isNaN(b) || Infinity === b ? (b = isNaN(b) ? 1 : 0, d = h) : (d = Math.floor(Math.log(b) / Math.LN2), 1 > b * (f = Math.pow(2, -d)) && (d--, f *= 2), b = 1 <= d + l ? b + m / f : b + m * Math.pow(2, 1 - l), 2 <= b * f && (d++, f /= 2), d + l >= h ? (b = 0, d = h) : 1 <= d + l ? (b = (b * f - 1) * Math.pow(2, e), d += l) : (b = b * Math.pow(2, l - 1) * Math.pow(2, e), d = 0));
                for (; 8 <= e; a[c + n] = b & 255, n += B, b /= 256, e -= 8);
                d = d << e | b;
                for (g += e; 0 < g; a[c + n] = d & 255, n += B, d /= 256, g -= 8);
                a[c + n - B] |= 128 * A
            }
        };
        "use strict";
        b.c = 0;
        b.g = 1;
        b.b = 2;
        b.a = 5;
        b.prototype =
            {
                Ng: function (a, b, c) {
                    for (c = c || this.length; this.ha < c;) {
                        var d = this.Ra(), e = d >> 3, f = this.ha;
                        this.type = d & 7;
                        a(e, b, this);
                        this.ha === f && this.qq(d)
                    }
                    return b
                }, Hp: function () {
                var a = e.read(this.oc, this.ha, !0, 23, 4);
                this.ha += 4;
                return a
            }, Dp: function () {
                var a = e.read(this.oc, this.ha, !0, 52, 8);
                this.ha += 8;
                return a
            }, Ra: function (a) {
                var b = this.oc;
                var d = b[this.ha++];
                var e = d & 127;
                if (128 > d)return e;
                d = b[this.ha++];
                e |= (d & 127) << 7;
                if (128 > d)return e;
                d = b[this.ha++];
                e |= (d & 127) << 14;
                if (128 > d)return e;
                d = b[this.ha++];
                e |= (d & 127) << 21;
                if (128 >
                    d)return e;
                d = b[this.ha];
                return c(e | (d & 15) << 28, a, this)
            }, Tp: function () {
                return this.Ra(!0)
            }, Tg: function () {
                var a = this.Ra();
                return 1 === a % 2 ? (a + 1) / -2 : a / 2
            }, Bp: function () {
                return !!this.Ra()
            }, Ug: function () {
                for (var a = this.Ra() + this.ha, b = this.oc, c = "", d = this.ha; d < a;) {
                    var e = b[d], n = null, p = 239 < e ? 4 : 223 < e ? 3 : 191 < e ? 2 : 1;
                    if (d + p > a)break;
                    if (1 === p) 128 > e && (n = e); else if (2 === p) {
                        var q = b[d + 1];
                        128 === (q & 192) && (n = (e & 31) << 6 | q & 63, 127 >= n && (n = null))
                    } else if (3 === p) {
                        q = b[d + 1];
                        var r = b[d + 2];
                        128 === (q & 192) && 128 === (r & 192) && (n = (e & 15) << 12 | (q & 63) <<
                            6 | r & 63, 2047 >= n || 55296 <= n && 57343 >= n) && (n = null)
                    } else if (4 === p) {
                        q = b[d + 1];
                        r = b[d + 2];
                        var u = b[d + 3];
                        128 === (q & 192) && 128 === (r & 192) && 128 === (u & 192) && (n = (e & 15) << 18 | (q & 63) << 12 | (r & 63) << 6 | u & 63, 65535 >= n || 1114112 <= n) && (n = null)
                    }
                    null === n ? (n = 65533, p = 1) : 65535 < n && (n -= 65536, c += String.fromCharCode(n >>> 10 & 1023 | 55296), n = 56320 | n & 1023);
                    c += String.fromCharCode(n);
                    d += p
                }
                this.ha = a;
                return c
            }, qq: function (a) {
                a &= 7;
                if (a === b.c)for (; 127 < this.oc[this.ha++];); else if (a === b.b) this.ha = this.Ra() + this.ha; else if (a === b.a) this.ha += 4; else if (a ===
                    b.g) this.ha += 8; else throw Error("Unimplemented type: " + a);
            }
            };
        a["default"] = b
    })(Pp.Jd = Pp.Jd || {});
    Pp.Jd = Pp.Jd.default;
    function Qp(a, b, c, d, e) {
        this.f = e;
        this.g = a;
        this.b = b;
        this.i = c;
        this.c = d;
        this.j = Ve()
    }

    k = Qp.prototype;
    k.get = function (a) {
        return this.c[a]
    };
    k.lb = Qp.prototype.md = function () {
        return this.i
    };
    k.G = function () {
        this.a || (this.a = "Point" === this.g ? $a(this.b) : ab(this.b, 0, this.b.length, 2));
        return this.a
    };
    k.ho = function () {
        return this.f
    };
    k.Ub = function () {
        return this.b
    };
    k.ca = Qp.prototype.Ub;
    k.W = function () {
        return this
    };
    k.io = function () {
        return this.c
    };
    k.$d = Qp.prototype.W;
    k.oa = function () {
        return 2
    };
    k.bb = sa;
    k.S = function () {
        return this.g
    };
    k.gb = function (a) {
        var b = a.G();
        a = a.se;
        b = mb(a) / mb(b);
        var c = this.j;
        df(c, a[0], a[3], b, -b, 0, 0, 0);
        Se(this.b, 0, this.b.length, 2, c, this.b)
    };
    function Rp(a) {
        gl.call(this);
        a = a ? a : {};
        this.defaultDataProjection = new Gb({code: "EPSG:3857", units: "tile-pixels"});
        this.b = a.featureClass ? a.featureClass : Qp;
        this.g = a.geometryName;
        this.f = a.layerName ? a.layerName : "layer";
        this.c = a.layers ? a.layers : null;
        this.a = null
    }

    v(Rp, gl);
    function Sp(a, b, c) {
        if (3 === a) {
            a = {keys: [], values: [], features: []};
            var d = c.Ra() + c.ha;
            c.Ng(Tp, a, d);
            a.length = a.features.length;
            a.length && (b[a.name] = a)
        }
    }

    function Tp(a, b, c) {
        if (15 === a) b.version = c.Ra(); else if (1 === a) b.name = c.Ug(); else if (5 === a) b.extent = c.Ra(); else if (2 === a) b.features.push(c.ha); else if (3 === a) b.keys.push(c.Ug()); else if (4 === a) {
            a = null;
            for (var d = c.Ra() + c.ha; c.ha < d;)a = c.Ra() >> 3, a = 1 === a ? c.Ug() : 2 === a ? c.Hp() : 3 === a ? c.Dp() : 4 === a ? c.Tp() : 5 === a ? c.Ra() : 6 === a ? c.Tg() : 7 === a ? c.Bp() : null;
            b.values.push(a)
        }
    }

    function Up(a, b, c) {
        if (1 == a) b.id = c.Ra(); else if (2 == a)for (a = c.Ra() + c.ha; c.ha < a;) {
            var d = b.layer.keys[c.Ra()], e = b.layer.values[c.Ra()];
            b.properties[d] = e
        } else 3 == a ? b.type = c.Ra() : 4 == a && (b.geometry = c.ha)
    }

    function Vp(a, b, c) {
        var d = c.type;
        if (0 === d)return null;
        var e = c.id, f = c.properties;
        f[a.f] = c.layer.name;
        var g = [];
        var h = [], l = h;
        b.ha = c.geometry;
        c = b.Ra() + b.ha;
        for (var m = 1, n = 0, p = 0, q = 0, r = 0,
                 u = 0; b.ha < c;)n || (n = b.Ra(), m = n & 7, n >>= 3), n--, 1 === m || 2 === m ? (p += b.Tg(), q += b.Tg(), 1 === m && r > u && (l.push(r), u = r), g.push(p, q), r += 2) : 7 === m ? r > u && (g.push(g[u], g[u + 1]), r += 2) : wa(!1, 59);
        r > u && l.push(r);
        b = h.length;
        var x;
        1 === d ? x = 1 === b ? "Point" : "MultiPoint" : 2 === d ? x = 1 === b ? "LineString" : "MultiLineString" : 3 === d && (x = "Polygon");
        d = x;
        if (a.b === Qp) g = new a.b(d,
            g, h, f, e); else {
            if ("Polygon" == d) {
                d = [];
                l = b = x = 0;
                for (c = h.length; l < c; ++l)m = h[l], Lf(g, x, m, 2) || (d.push(h.slice(b, l)), b = l), x = m;
                1 < d.length ? (h = d, d = new O(null)) : d = new D(null)
            } else d = "Point" === d ? new C(null) : "LineString" === d ? new L(null) : "Polygon" === d ? new D(null) : "MultiPoint" === d ? new rl(null) : "MultiLineString" === d ? new M(null) : null;
            d.aa("XY", g, h);
            g = new a.b;
            a.g && g.Yc(a.g);
            a = jl(d, !1, il(a, void 0));
            g.Sa(a);
            g.lc(e);
            g.H(f)
        }
        return g
    }

    k = Rp.prototype;
    k.eg = function () {
        return this.a
    };
    k.S = function () {
        return "arraybuffer"
    };
    k.Ma = function (a) {
        var b = this.c;
        a = new Pp.Jd(a);
        var c = a.Ng(Sp, {}), d = [], e;
        for (e in c)if (!b || -1 != b.indexOf(e)) {
            var f = c[e];
            for (var g, h = 0, l = f.length; h < l; ++h) {
                g = a;
                var m = f;
                g.ha = m.features[h];
                var n = g.Ra() + g.ha;
                m = {layer: m, type: 0, properties: {}};
                g.Ng(Up, m, n);
                g = m;
                d.push(Vp(this, a, g))
            }
            this.a = f ? [0, 0, f.extent, f.extent] : null
        }
        return d
    };
    k.pb = function () {
        return this.defaultDataProjection
    };
    k.zn = function (a) {
        this.c = a
    };
    k.Vb = function () {
    };
    k.Xc = function () {
    };
    k.Hd = function () {
    };
    k.fd = function () {
    };
    k.Yb = function () {
    };
    function Wp() {
        fm.call(this);
        this.defaultDataProjection = Zb("EPSG:4326")
    }

    v(Wp, fm);
    function Xp(a, b) {
        b[b.length - 1].pe[a.getAttribute("k")] = a.getAttribute("v")
    }

    var Yp = [null], Zp = J(Yp, {
        nd: function (a, b) {
            b[b.length - 1].ud.push(a.getAttribute("ref"))
        }, tag: Xp
    }), aq = J(Yp, {
        node: function (a, b) {
            var c = b[0], d = b[b.length - 1], e = a.getAttribute("id"),
                f = [parseFloat(a.getAttribute("lon")), parseFloat(a.getAttribute("lat"))];
            d.ii[e] = f;
            a = K({pe: {}}, $p, a, b);
            wb(a.pe) || (f = new C(f), jl(f, !1, c), c = new Lk(f), c.lc(e), c.H(a.pe), d.features.push(c))
        }, way: function (a, b) {
            var c = a.getAttribute("id");
            a = K({id: c, ud: [], pe: {}}, Zp, a, b);
            b[b.length - 1].kh.push(a)
        }
    }), $p = J(Yp, {tag: Xp});
    Wp.prototype.Dc = function (a, b) {
        b = hl(this, a, b);
        if ("osm" == a.localName) {
            a = K({ii: {}, kh: [], features: []}, aq, a, [b]);
            for (var c = 0; c < a.kh.length; c++) {
                for (var d = a.kh[c], e = [], f = 0, g = d.ud.length; f < g; f++)ja(e, a.ii[d.ud[f]]);
                d.ud[0] == d.ud[d.ud.length - 1] ? (f = new D(null), f.aa("XY", e, [e.length])) : (f = new L(null), f.aa("XY", e));
                jl(f, !1, b);
                e = new Lk(f);
                e.lc(d.id);
                e.H(d.pe);
                a.features.push(e)
            }
            if (a.features)return a.features
        }
        return []
    };
    Wp.prototype.lh = function () {
    };
    Wp.prototype.Zb = function () {
    };
    Wp.prototype.ve = function () {
    };
    function bq(a) {
        return a.getAttributeNS("http://www.w3.org/1999/xlink", "href")
    };
    function cq() {
    }

    cq.prototype.read = function (a) {
        return Rk(a) ? this.a(a) : Sk(a) ? this.b(a) : "string" === typeof a ? (a = Tk(a), this.a(a)) : null
    };
    function dq() {
    }

    v(dq, cq);
    dq.prototype.a = function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType == Node.ELEMENT_NODE)return this.b(a);
        return null
    };
    dq.prototype.b = function (a) {
        return (a = K({}, eq, a, [])) ? a : null
    };
    var fq = [null, "http://www.opengis.net/ows/1.1"], eq = J(fq, {
        ServiceIdentification: H(function (a, b) {
            return K({}, gq, a, b)
        }), ServiceProvider: H(function (a, b) {
            return K({}, hq, a, b)
        }), OperationsMetadata: H(function (a, b) {
            return K({}, iq, a, b)
        })
    }), jq = J(fq, {
        DeliveryPoint: H(P),
        City: H(P),
        AdministrativeArea: H(P),
        PostalCode: H(P),
        Country: H(P),
        ElectronicMailAddress: H(P)
    }), kq = J(fq, {
        Value: Xk(function (a) {
            return P(a)
        })
    }), lq = J(fq, {
        AllowedValues: H(function (a, b) {
            return K({}, kq, a, b)
        })
    }), nq = J(fq, {
        Phone: H(function (a, b) {
            return K({},
                mq, a, b)
        }), Address: H(function (a, b) {
            return K({}, jq, a, b)
        })
    }), pq = J(fq, {
        HTTP: H(function (a, b) {
            return K({}, oq, a, b)
        })
    }), oq = J(fq, {
        Get: Xk(function (a, b) {
            var c = bq(a);
            if (c)return K({href: c}, qq, a, b)
        }), Post: void 0
    }), rq = J(fq, {
        DCP: H(function (a, b) {
            return K({}, pq, a, b)
        })
    }), iq = J(fq, {
        Operation: function (a, b) {
            var c = a.getAttribute("name");
            (a = K({}, rq, a, b)) && (b[b.length - 1][c] = a)
        }
    }), mq = J(fq, {Voice: H(P), Facsimile: H(P)}), qq = J(fq, {
        Constraint: Xk(function (a, b) {
            var c = a.getAttribute("name");
            if (c)return K({name: c}, lq, a, b)
        })
    }), sq = J(fq,
        {
            IndividualName: H(P), PositionName: H(P), ContactInfo: H(function (a, b) {
            return K({}, nq, a, b)
        })
        }), gq = J(fq, {Title: H(P), ServiceTypeVersion: H(P), ServiceType: H(P)}), hq = J(fq, {
        ProviderName: H(P), ProviderSite: H(bq), ServiceContact: H(function (a, b) {
            return K({}, sq, a, b)
        })
    });

    function tq(a, b, c, d) {
        var e;
        void 0 !== d ? e = d : e = [];
        for (var f = d = 0; f < b;) {
            var g = a[f++];
            e[d++] = a[f++];
            e[d++] = g;
            for (g = 2; g < c; ++g)e[d++] = a[f++]
        }
        e.length = d
    };
    function uq(a) {
        a = a ? a : {};
        gl.call(this);
        this.defaultDataProjection = Zb("EPSG:4326");
        this.b = a.factor ? a.factor : 1E5;
        this.a = a.geometryLayout ? a.geometryLayout : "XY"
    }

    v(uq, yn);
    function vq(a, b, c) {
        var d, e = Array(b);
        for (d = 0; d < b; ++d)e[d] = 0;
        var f;
        var g = 0;
        for (f = a.length; g < f;)for (d = 0; d < b; ++d, ++g) {
            var h = a[g], l = h - e[d];
            e[d] = h;
            a[g] = l
        }
        return wq(a, c ? c : 1E5)
    }

    function xq(a, b, c) {
        var d, e = Array(b);
        for (d = 0; d < b; ++d)e[d] = 0;
        a = yq(a, c ? c : 1E5);
        var f;
        c = 0;
        for (f = a.length; c < f;)for (d = 0; d < b; ++d, ++c)e[d] += a[c], a[c] = e[d];
        return a
    }

    function wq(a, b) {
        b = b ? b : 1E5;
        var c;
        var d = 0;
        for (c = a.length; d < c; ++d)a[d] = Math.round(a[d] * b);
        b = 0;
        for (d = a.length; b < d; ++b)c = a[b], a[b] = 0 > c ? ~(c << 1) : c << 1;
        b = "";
        d = 0;
        for (c = a.length; d < c; ++d) {
            for (var e, f = a[d], g = ""; 32 <= f;)e = (32 | f & 31) + 63, g += String.fromCharCode(e), f >>= 5;
            g += String.fromCharCode(f + 63);
            b += g
        }
        return b
    }

    function yq(a, b) {
        b = b ? b : 1E5;
        var c = [], d = 0, e = 0, f;
        var g = 0;
        for (f = a.length; g < f; ++g) {
            var h = a.charCodeAt(g) - 63;
            d |= (h & 31) << e;
            32 > h ? (c.push(d), e = d = 0) : e += 5
        }
        a = 0;
        for (d = c.length; a < d; ++a)e = c[a], c[a] = e & 1 ? ~(e >> 1) : e >> 1;
        a = 0;
        for (d = c.length; a < d; ++a)c[a] /= b;
        return c
    }

    k = uq.prototype;
    k.ie = function (a, b) {
        a = this.Ed(a, b);
        return new Lk(a)
    };
    k.Mg = function (a, b) {
        return [this.ie(a, b)]
    };
    k.Ed = function (a, b) {
        var c = hf(this.a);
        a = xq(a, c, this.b);
        tq(a, a.length, c, a);
        c = xf(a, 0, a.length, c);
        return jl(new L(c, this.a), !1, il(this, b))
    };
    k.te = function (a, b) {
        if (a = a.W())return this.Id(a, b);
        wa(!1, 40);
        return ""
    };
    k.mh = function (a, b) {
        return this.te(a[0], b)
    };
    k.Id = function (a, b) {
        a = jl(a, !0, il(this, b));
        b = a.ca();
        a = a.oa();
        tq(b, b.length, a, b);
        return vq(b, a, this.b)
    };
    function zq(a) {
        a = a ? a : {};
        gl.call(this);
        this.a = a.layerName;
        this.b = a.layers ? a.layers : null;
        this.defaultDataProjection = Zb(a.defaultDataProjection ? a.defaultDataProjection : "EPSG:4326")
    }

    v(zq, kl);
    function Aq(a, b) {
        var c = [], d, e;
        var f = 0;
        for (e = a.length; f < e; ++f) {
            var g = a[f];
            0 < f && c.pop();
            0 <= g ? d = b[g] : d = b[~g].slice().reverse();
            c.push.apply(c, d)
        }
        a = 0;
        for (b = c.length; a < b; ++a)c[a] = c[a].slice();
        return c
    }

    function Bq(a, b, c, d, e, f, g) {
        a = a.geometries;
        var h = [], l;
        var m = 0;
        for (l = a.length; m < l; ++m)h[m] = Cq(a[m], b, c, d, e, f, g);
        return h
    }

    function Cq(a, b, c, d, e, f, g) {
        var h = a.type, l = Dq[h];
        c = "Point" === h || "MultiPoint" === h ? l(a, c, d) : l(a, b);
        b = new Lk;
        b.Sa(jl(c, !1, g));
        void 0 !== a.id && b.lc(a.id);
        a = a.properties;
        e && (a || (a = {}), a[e] = f);
        a && b.H(a);
        return b
    }

    zq.prototype.Lg = function (a, b) {
        if ("Topology" == a.type) {
            var c = null, d = null;
            if (a.transform) {
                var e = a.transform;
                c = e.scale;
                d = e.translate
            }
            var f = a.arcs;
            if (e) {
                e = c;
                var g = d, h;
                var l = 0;
                for (h = f.length; l < h; ++l) {
                    var m, n = f[l], p = e, q = g, r = 0, u = 0;
                    var x = 0;
                    for (m = n.length; x < m; ++x) {
                        var B = n[x];
                        r += B[0];
                        u += B[1];
                        B[0] = r;
                        B[1] = u;
                        Eq(B, p, q)
                    }
                }
            }
            e = [];
            a = a.objects;
            g = this.a;
            for (var A in a)this.b && -1 == this.b.indexOf(A) || ("GeometryCollection" === a[A].type ? (l = a[A], e.push.apply(e, Bq(l, f, c, d, g, A, b))) : (l = a[A], e.push(Cq(l, f, c, d, g, A, b))));
            return e
        }
        return []
    };
    function Eq(a, b, c) {
        a[0] = a[0] * b[0] + c[0];
        a[1] = a[1] * b[1] + c[1]
    }

    zq.prototype.Sg = function () {
        return this.defaultDataProjection
    };
    var Dq = {
        Point: function (a, b, c) {
            a = a.coordinates;
            b && c && Eq(a, b, c);
            return new C(a)
        }, LineString: function (a, b) {
            a = Aq(a.arcs, b);
            return new L(a)
        }, Polygon: function (a, b) {
            var c = [], d;
            var e = 0;
            for (d = a.arcs.length; e < d; ++e)c[e] = Aq(a.arcs[e], b);
            return new D(c)
        }, MultiPoint: function (a, b, c) {
            a = a.coordinates;
            var d;
            if (b && c) {
                var e = 0;
                for (d = a.length; e < d; ++e)Eq(a[e], b, c)
            }
            return new rl(a)
        }, MultiLineString: function (a, b) {
            var c = [], d;
            var e = 0;
            for (d = a.arcs.length; e < d; ++e)c[e] = Aq(a.arcs[e], b);
            return new M(c)
        }, MultiPolygon: function (a,
                                   b) {
            var c = [], d, e;
            var f = 0;
            for (e = a.arcs.length; f < e; ++f) {
                var g = a.arcs[f];
                var h = [];
                var l = 0;
                for (d = g.length; l < d; ++l)h[l] = Aq(g[l], b);
                c[f] = h
            }
            return new O(c)
        }
    };
    k = zq.prototype;
    k.ed = function () {
    };
    k.ue = function () {
    };
    k.we = function () {
    };
    k.Pg = function () {
    };
    k.Wc = function () {
    };
    function Fq(a) {
        a = a ? a : {};
        this.c = a.featureType;
        this.a = a.featureNS;
        this.b = a.gmlFormat ? a.gmlFormat : new vm;
        this.l = a.schemaLocation ? a.schemaLocation : Gq["1.1.0"];
        fm.call(this)
    }

    v(Fq, fm);
    var Gq = {
        "1.1.0": "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd",
        "1.0.0": "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.0.0/wfs.xsd"
    };
    Fq.prototype.Dc = function (a, b) {
        var c = {featureType: this.c, featureNS: this.a};
        tb(c, hl(this, a, b ? b : {}));
        b = [c];
        this.b.b["http://www.opengis.net/gml"].featureMember = Vk(im.prototype.je);
        (a = K([], this.b.b, a, b, this.b)) || (a = []);
        return a
    };
    Fq.prototype.j = function (a) {
        if (Rk(a))return Hq(a);
        if (Sk(a))return K({}, Iq, a, []);
        if ("string" === typeof a)return a = Tk(a), Hq(a)
    };
    Fq.prototype.f = function (a) {
        if (Rk(a))return Jq(this, a);
        if (Sk(a))return Kq(this, a);
        if ("string" === typeof a)return a = Tk(a), Jq(this, a)
    };
    function Jq(a, b) {
        for (b = b.firstChild; b; b = b.nextSibling)if (b.nodeType == Node.ELEMENT_NODE)return Kq(a, b)
    }

    var Lq = {"http://www.opengis.net/gml": {boundedBy: H(im.prototype.sf, "bounds")}};

    function Kq(a, b) {
        var c = {}, d = qm(b.getAttribute("numberOfFeatures"));
        c.numberOfFeatures = d;
        return K(c, Lq, b, [], a.b)
    }

    var Mq = {"http://www.opengis.net/wfs": {totalInserted: H(pm), totalUpdated: H(pm), totalDeleted: H(pm)}}, Nq = {
        "http://www.opengis.net/ogc": {
            FeatureId: Vk(function (a) {
                return a.getAttribute("fid")
            })
        }
    }, Oq = {
        "http://www.opengis.net/wfs": {
            Feature: function (a, b) {
                cl(Nq, a, b)
            }
        }
    }, Iq = {
        "http://www.opengis.net/wfs": {
            TransactionSummary: H(function (a, b) {
                return K({}, Mq, a, b)
            }, "transactionSummary"), InsertResults: H(function (a, b) {
                return K([], Oq, a, b)
            }, "insertIds")
        }
    };

    function Hq(a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType == Node.ELEMENT_NODE)return K({}, Iq, a, [])
    }

    var Pq = {"http://www.opengis.net/wfs": {PropertyName: I(sm)}};

    function Qq(a, b) {
        var c = Ok("http://www.opengis.net/ogc", "Filter"), d = Ok("http://www.opengis.net/ogc", "FeatureId");
        c.appendChild(d);
        d.setAttribute("fid", b);
        a.appendChild(c)
    }

    function Rq(a, b) {
        a = (a ? a : "feature") + ":";
        return 0 === b.indexOf(a) ? b : a + b
    }

    var Sq = {
        "http://www.opengis.net/wfs": {
            Insert: I(function (a, b, c) {
                var d = c[c.length - 1], e = d.gmlVersion;
                d = Ok(d.featureNS, d.featureType);
                a.appendChild(d);
                if (2 === e) {
                    a = Em.prototype;
                    (e = b.c) && d.setAttribute("fid", e);
                    e = c[c.length - 1];
                    var f = e.featureNS, g = b.a;
                    e.qb || (e.qb = {}, e.qb[f] = {});
                    var h = b.M();
                    b = [];
                    var l = [];
                    for (n in h) {
                        var m = h[n];
                        null !== m && (b.push(n), l.push(m), n == g || m instanceof ff ? n in e.qb[f] || (e.qb[f][n] = I(a.si, a)) : n in e.qb[f] || (e.qb[f][n] = I(sm)))
                    }
                    var n = tb({}, e);
                    n.node = d;
                    dl(n, e.qb, Zk(void 0, f), l, c, b)
                } else vm.prototype.Ai(d,
                    b, c)
            }), Update: I(function (a, b, c) {
                var d = c[c.length - 1];
                wa(void 0 !== b.c, 27);
                var e = d.featurePrefix, f = d.featureNS, g = b.a;
                a.setAttribute("typeName", Rq(e, d.featureType));
                a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + e, f);
                e = b.c;
                if (void 0 !== e) {
                    f = b.P();
                    for (var h = [], l = 0, m = f.length; l < m; l++) {
                        var n = b.get(f[l]);
                        if (void 0 !== n) {
                            var p = f[l];
                            n instanceof ff && (p = g);
                            h.push({name: p, value: n})
                        }
                    }
                    dl({gmlVersion: d.gmlVersion, node: a, hasZ: d.hasZ, srsName: d.srsName}, Sq, Zk("Property"), h, c);
                    Qq(a, e)
                }
            }), Delete: I(function (a,
                                    b, c) {
                c = c[c.length - 1];
                wa(void 0 !== b.c, 26);
                var d = c.featurePrefix, e = c.featureNS;
                a.setAttribute("typeName", Rq(d, c.featureType));
                a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + d, e);
                b = b.c;
                void 0 !== b && Qq(a, b)
            }), Property: I(function (a, b, c) {
                var d = Ok("http://www.opengis.net/wfs", "Name"), e = c[c.length - 1].gmlVersion;
                a.appendChild(d);
                sm(d, b.name);
                void 0 !== b.value && null !== b.value && (d = Ok("http://www.opengis.net/wfs", "Value"), a.appendChild(d), b.value instanceof ff ? 2 === e ? Em.prototype.si(d, b.value, c) : vm.prototype.wd(d,
                    b.value, c) : sm(d, b.value))
            }), Native: I(function (a, b) {
                b.zq && a.setAttribute("vendorId", b.zq);
                void 0 !== b.Yp && a.setAttribute("safeToIgnore", b.Yp);
                void 0 !== b.value && sm(a, b.value)
            })
        }
    };

    function Tq(a, b, c) {
        a = {node: a};
        b = b.b;
        for (var d = 0, e = b.length; d < e; ++d) {
            var f = b[d];
            dl(a, Uq, Zk(f.mc), [f], c)
        }
    }

    function Vq(a, b) {
        void 0 !== b.a && a.setAttribute("matchCase", b.a.toString());
        Wq(a, b.b);
        Xq(a, "" + b.g)
    }

    function Yq(a, b, c) {
        a = Ok("http://www.opengis.net/ogc", a);
        sm(a, c);
        b.appendChild(a)
    }

    function Wq(a, b) {
        Yq("PropertyName", a, b)
    }

    function Xq(a, b) {
        Yq("Literal", a, b)
    }

    function Zq(a, b) {
        var c = Ok("http://www.opengis.net/gml", "TimeInstant");
        a.appendChild(c);
        a = Ok("http://www.opengis.net/gml", "timePosition");
        c.appendChild(a);
        sm(a, b)
    }

    var Uq = {
        "http://www.opengis.net/wfs": {
            Query: I(function (a, b, c) {
                var d = c[c.length - 1], e = d.featurePrefix, f = d.featureNS, g = d.propertyNames, h = d.srsName;
                a.setAttribute("typeName", e ? Rq(e, b) : b);
                h && a.setAttribute("srsName", h);
                f && a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + e, f);
                b = tb({}, d);
                b.node = a;
                dl(b, Pq, Zk("PropertyName"), g, c);
                if (d = d.filter) g = Ok("http://www.opengis.net/ogc", "Filter"), a.appendChild(g), dl({node: g}, Uq, Zk(d.mc), [d], c)
            })
        }, "http://www.opengis.net/ogc": {
            During: I(function (a, b) {
                var c = Ok("http://www.opengis.net/fes",
                    "ValueReference");
                sm(c, b.b);
                a.appendChild(c);
                c = Ok("http://www.opengis.net/gml", "TimePeriod");
                a.appendChild(c);
                a = Ok("http://www.opengis.net/gml", "begin");
                c.appendChild(a);
                Zq(a, b.a);
                a = Ok("http://www.opengis.net/gml", "end");
                c.appendChild(a);
                Zq(a, b.g)
            }),
            And: I(Tq),
            Or: I(Tq),
            Not: I(function (a, b, c) {
                b = b.condition;
                dl({node: a}, Uq, Zk(b.mc), [b], c)
            }),
            BBOX: I(function (a, b, c) {
                c[c.length - 1].srsName = b.srsName;
                Wq(a, b.geometryName);
                vm.prototype.wd(a, b.extent, c)
            }),
            Intersects: I(function (a, b, c) {
                c[c.length - 1].srsName = b.srsName;
                Wq(a, b.geometryName);
                vm.prototype.wd(a, b.geometry, c)
            }),
            Within: I(function (a, b, c) {
                c[c.length - 1].srsName = b.srsName;
                Wq(a, b.geometryName);
                vm.prototype.wd(a, b.geometry, c)
            }),
            PropertyIsEqualTo: I(Vq),
            PropertyIsNotEqualTo: I(Vq),
            PropertyIsLessThan: I(Vq),
            PropertyIsLessThanOrEqualTo: I(Vq),
            PropertyIsGreaterThan: I(Vq),
            PropertyIsGreaterThanOrEqualTo: I(Vq),
            PropertyIsNull: I(function (a, b) {
                Wq(a, b.b)
            }),
            PropertyIsBetween: I(function (a, b) {
                Wq(a, b.b);
                var c = Ok("http://www.opengis.net/ogc", "LowerBoundary");
                a.appendChild(c);
                Xq(c, "" + b.a);
                c = Ok("http://www.opengis.net/ogc", "UpperBoundary");
                a.appendChild(c);
                Xq(c, "" + b.g)
            }),
            PropertyIsLike: I(function (a, b) {
                a.setAttribute("wildCard", b.f);
                a.setAttribute("singleChar", b.i);
                a.setAttribute("escapeChar", b.g);
                void 0 !== b.a && a.setAttribute("matchCase", b.a.toString());
                Wq(a, b.b);
                Xq(a, "" + b.c)
            })
        }
    };
    Fq.prototype.o = function (a) {
        var b = Ok("http://www.opengis.net/wfs", "GetFeature");
        b.setAttribute("service", "WFS");
        b.setAttribute("version", "1.1.0");
        if (a) {
            a.handle && b.setAttribute("handle", a.handle);
            a.outputFormat && b.setAttribute("outputFormat", a.outputFormat);
            void 0 !== a.maxFeatures && b.setAttribute("maxFeatures", a.maxFeatures);
            a.resultType && b.setAttribute("resultType", a.resultType);
            void 0 !== a.startIndex && b.setAttribute("startIndex", a.startIndex);
            void 0 !== a.count && b.setAttribute("count", a.count);
            var c =
                a.filter;
            if (a.bbox) {
                wa(a.geometryName, 12);
                var d = Wl(a.geometryName, a.bbox, a.srsName);
                c ? c = Vl(c, d) : c = d
            }
        }
        b.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.l);
        c = {
            node: b,
            srsName: a.srsName,
            featureNS: a.featureNS ? a.featureNS : this.a,
            featurePrefix: a.featurePrefix,
            geometryName: a.geometryName,
            filter: c,
            propertyNames: a.propertyNames ? a.propertyNames : []
        };
        wa(Array.isArray(a.featureTypes), 11);
        a = a.featureTypes;
        c = [c];
        d = tb({}, c[c.length - 1]);
        d.node = b;
        dl(d, Uq, Zk("Query"), a, c);
        return b
    };
    Fq.prototype.v = function (a, b, c, d) {
        var e = [], f = Ok("http://www.opengis.net/wfs", "Transaction"), g = d.version ? d.version : "1.1.0",
            h = "1.0.0" === g ? 2 : 3;
        f.setAttribute("service", "WFS");
        f.setAttribute("version", g);
        if (d) {
            var l = d.gmlOptions ? d.gmlOptions : {};
            d.handle && f.setAttribute("handle", d.handle)
        }
        f.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", Gq[g]);
        var m = d.featurePrefix ? d.featurePrefix : "feature";
        a && (g = {
            node: f, featureNS: d.featureNS, featureType: d.featureType, featurePrefix: m, gmlVersion: h,
            hasZ: d.hasZ, srsName: d.srsName
        }, tb(g, l), dl(g, Sq, Zk("Insert"), a, e));
        b && (g = {
            node: f,
            featureNS: d.featureNS,
            featureType: d.featureType,
            featurePrefix: m,
            gmlVersion: h,
            hasZ: d.hasZ,
            srsName: d.srsName
        }, tb(g, l), dl(g, Sq, Zk("Update"), b, e));
        c && dl({
            node: f,
            featureNS: d.featureNS,
            featureType: d.featureType,
            featurePrefix: m,
            gmlVersion: h,
            srsName: d.srsName
        }, Sq, Zk("Delete"), c, e);
        d.nativeElements && dl({
                node: f,
                featureNS: d.featureNS,
                featureType: d.featureType,
                featurePrefix: m,
                gmlVersion: h,
                srsName: d.srsName
            }, Sq, Zk("Native"), d.nativeElements,
            e);
        return f
    };
    Fq.prototype.Rg = function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType == Node.ELEMENT_NODE)return this.vf(a);
        return null
    };
    Fq.prototype.vf = function (a) {
        if (a.firstElementChild && a.firstElementChild.firstElementChild)for (a = a.firstElementChild.firstElementChild, a = a.firstElementChild; a; a = a.nextElementSibling)if (0 !== a.childNodes.length && (1 !== a.childNodes.length || 3 !== a.firstChild.nodeType)) {
            var b = [{}];
            this.b.sf(a, b);
            return Zb(b.pop().srsName)
        }
        return null
    };
    function $q(a) {
        a = a ? a : {};
        gl.call(this);
        this.b = void 0 !== a.splitCollection ? a.splitCollection : !1
    }

    v($q, yn);
    function ar(a) {
        a = a.V();
        return 0 === a.length ? "" : a.join(" ")
    }

    function br(a) {
        a = a.V();
        for (var b = [], c = 0, d = a.length; c < d; ++c)b.push(a[c].join(" "));
        return b.join(",")
    }

    function cr(a) {
        var b = [];
        a = a.Yd();
        for (var c = 0, d = a.length; c < d; ++c)b.push("(" + br(a[c]) + ")");
        return b.join(",")
    }

    function dr(a) {
        var b = a.S(), c = (0, er[b])(a);
        b = b.toUpperCase();
        if (a instanceof gf) {
            a = a.ka;
            var d = "";
            if ("XYZ" === a || "XYZM" === a) d += "Z";
            if ("XYM" === a || "XYZM" === a) d += "M";
            a = d;
            0 < a.length && (b += " " + a)
        }
        return 0 === c.length ? b + " EMPTY" : b + "(" + c + ")"
    }

    var er = {
        Point: ar, LineString: br, Polygon: cr, MultiPoint: function (a) {
            var b = [];
            a = a.fe();
            for (var c = 0, d = a.length; c < d; ++c)b.push("(" + ar(a[c]) + ")");
            return b.join(",")
        }, MultiLineString: function (a) {
            var b = [];
            a = a.qd();
            for (var c = 0, d = a.length; c < d; ++c)b.push("(" + br(a[c]) + ")");
            return b.join(",")
        }, MultiPolygon: function (a) {
            var b = [];
            a = a.Zd();
            for (var c = 0, d = a.length; c < d; ++c)b.push("(" + cr(a[c]) + ")");
            return b.join(",")
        }, GeometryCollection: function (a) {
            var b = [];
            a = a.pd();
            for (var c = 0, d = a.length; c < d; ++c)b.push(dr(a[c]));
            return b.join(",")
        }
    };
    k = $q.prototype;
    k.ie = function (a, b) {
        return (a = this.Ed(a, b)) ? (b = new Lk, b.Sa(a), b) : null
    };
    k.Mg = function (a, b) {
        var c = [];
        a = this.Ed(a, b);
        this.b && "GeometryCollection" == a.S() ? c = a.a : c = [a];
        b = [];
        for (var d = 0, e = c.length; d < e; ++d)a = new Lk, a.Sa(c[d]), b.push(a);
        return b
    };
    k.Ed = function (a, b) {
        a = new fr(new gr(a));
        hr(a);
        return (a = ir(a)) ? jl(a, !1, b) : null
    };
    k.te = function (a, b) {
        return (a = a.W()) ? this.Id(a, b) : ""
    };
    k.mh = function (a, b) {
        if (1 == a.length)return this.te(a[0], b);
        for (var c = [], d = 0, e = a.length; d < e; ++d)c.push(a[d].W());
        a = new Xl(c);
        return this.Id(a, b)
    };
    k.Id = function (a, b) {
        return dr(jl(a, !0, b))
    };
    function gr(a) {
        this.a = a;
        this.b = -1
    }

    function jr(a) {
        var b = a.a.charAt(++a.b), c = {position: a.b, value: b};
        if ("(" == b) c.type = 2; else if ("," == b) c.type = 5; else if (")" == b) c.type = 3; else if ("0" <= b && "9" >= b || "." == b || "-" == b) {
            c.type = 4;
            b = a.b;
            var d = !1, e = !1;
            do {
                if ("." == f) d = !0; else if ("e" == f || "E" == f) e = !0;
                var f = a.a.charAt(++a.b)
            } while ("0" <= f && "9" >= f || "." == f && (void 0 === d || !d) || !e && ("e" == f || "E" == f) || e && ("-" == f || "+" == f));
            a = parseFloat(a.a.substring(b, a.b--));
            c.value = a
        } else if ("a" <= b && "z" >= b || "A" <= b && "Z" >= b) {
            c.type = 1;
            b = a.b;
            do f = a.a.charAt(++a.b); while ("a" <= f && "z" >=
            f || "A" <= f && "Z" >= f);
            a = a.a.substring(b, a.b--).toUpperCase();
            c.value = a
        } else {
            if (" " == b || "\t" == b || "\r" == b || "\n" == b)return jr(a);
            if ("" === b) c.type = 6; else throw Error("Unexpected character: " + b);
        }
        return c
    }

    function fr(a) {
        this.g = a;
        this.a = "XY"
    }

    function hr(a) {
        a.b = jr(a.g)
    }

    function kr(a, b) {
        (b = a.b.type == b) && hr(a);
        return b
    }

    function ir(a) {
        var b = a.b;
        if (kr(a, 1)) {
            b = b.value;
            var c = "XY", d = a.b;
            1 == a.b.type && (d = d.value, "Z" === d ? c = "XYZ" : "M" === d ? c = "XYM" : "ZM" === d && (c = "XYZM"), "XY" !== c && hr(a));
            a.a = c;
            if ("GEOMETRYCOLLECTION" == b) {
                a:{
                    if (kr(a, 2)) {
                        b = [];
                        do b.push(ir(a)); while (kr(a, 5));
                        if (kr(a, 3)) {
                            a = b;
                            break a
                        }
                    } else if (lr(a)) {
                        a = [];
                        break a
                    }
                    throw Error(mr(a));
                }
                return new Xl(a)
            }
            d = nr[b];
            c = or[b];
            if (!d || !c)throw Error("Invalid geometry type: " + b);
            b = d.call(a);
            return new c(b, a.a)
        }
        throw Error(mr(a));
    }

    k = fr.prototype;
    k.Gg = function () {
        if (kr(this, 2)) {
            var a = pr(this);
            if (kr(this, 3))return a
        } else if (lr(this))return null;
        throw Error(mr(this));
    };
    k.Fg = function () {
        if (kr(this, 2)) {
            var a = qr(this);
            if (kr(this, 3))return a
        } else if (lr(this))return [];
        throw Error(mr(this));
    };
    k.Hg = function () {
        if (kr(this, 2)) {
            var a = rr(this);
            if (kr(this, 3))return a
        } else if (lr(this))return [];
        throw Error(mr(this));
    };
    k.op = function () {
        if (kr(this, 2)) {
            var a;
            if (2 == this.b.type)for (a = [this.Gg()]; kr(this, 5);)a.push(this.Gg()); else a = qr(this);
            if (kr(this, 3))return a
        } else if (lr(this))return [];
        throw Error(mr(this));
    };
    k.np = function () {
        if (kr(this, 2)) {
            var a = rr(this);
            if (kr(this, 3))return a
        } else if (lr(this))return [];
        throw Error(mr(this));
    };
    k.pp = function () {
        if (kr(this, 2)) {
            for (var a = [this.Hg()]; kr(this, 5);)a.push(this.Hg());
            if (kr(this, 3))return a
        } else if (lr(this))return [];
        throw Error(mr(this));
    };
    function pr(a) {
        for (var b = [], c = a.a.length, d = 0; d < c; ++d) {
            var e = a.b;
            if (kr(a, 4)) b.push(e.value); else break
        }
        if (b.length == c)return b;
        throw Error(mr(a));
    }

    function qr(a) {
        for (var b = [pr(a)]; kr(a, 5);)b.push(pr(a));
        return b
    }

    function rr(a) {
        for (var b = [a.Fg()]; kr(a, 5);)b.push(a.Fg());
        return b
    }

    function lr(a) {
        var b = 1 == a.b.type && "EMPTY" == a.b.value;
        b && hr(a);
        return b
    }

    function mr(a) {
        return "Unexpected `" + a.b.value + "` at position " + a.b.position + " in `" + a.g.a + "`"
    }

    var or = {POINT: C, LINESTRING: L, POLYGON: D, MULTIPOINT: rl, MULTILINESTRING: M, MULTIPOLYGON: O}, nr = {
        POINT: fr.prototype.Gg,
        LINESTRING: fr.prototype.Fg,
        POLYGON: fr.prototype.Hg,
        MULTIPOINT: fr.prototype.op,
        MULTILINESTRING: fr.prototype.np,
        MULTIPOLYGON: fr.prototype.pp
    };

    function sr() {
        this.version = void 0
    }

    v(sr, cq);
    sr.prototype.a = function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType == Node.ELEMENT_NODE)return this.b(a);
        return null
    };
    sr.prototype.b = function (a) {
        this.version = a.getAttribute("version").trim();
        return (a = K({version: this.version}, tr, a, [])) ? a : null
    };
    function ur(a, b) {
        return K({}, vr, a, b)
    }

    function wr(a, b) {
        return K({}, xr, a, b)
    }

    function yr(a, b) {
        if (b = ur(a, b))return a = [qm(a.getAttribute("width")), qm(a.getAttribute("height"))], b.size = a, b
    }

    function zr(a, b) {
        return K([], Ar, a, b)
    }

    var Br = [null, "http://www.opengis.net/wms"], tr = J(Br, {
            Service: H(function (a, b) {
                return K({}, Cr, a, b)
            }), Capability: H(function (a, b) {
                return K({}, Dr, a, b)
            })
        }), Dr = J(Br, {
            Request: H(function (a, b) {
                return K({}, Er, a, b)
            }), Exception: H(function (a, b) {
                return K([], Fr, a, b)
            }), Layer: H(function (a, b) {
                return K({}, Gr, a, b)
            })
        }), Cr = J(Br, {
            Name: H(P),
            Title: H(P),
            Abstract: H(P),
            KeywordList: H(zr),
            OnlineResource: H(bq),
            ContactInformation: H(function (a, b) {
                return K({}, Hr, a, b)
            }),
            Fees: H(P),
            AccessConstraints: H(P),
            LayerLimit: H(pm),
            MaxWidth: H(pm),
            MaxHeight: H(pm)
        }), Hr = J(Br, {
            ContactPersonPrimary: H(function (a, b) {
                return K({}, Ir, a, b)
            }), ContactPosition: H(P), ContactAddress: H(function (a, b) {
                return K({}, Jr, a, b)
            }), ContactVoiceTelephone: H(P), ContactFacsimileTelephone: H(P), ContactElectronicMailAddress: H(P)
        }), Ir = J(Br, {ContactPerson: H(P), ContactOrganization: H(P)}), Jr = J(Br, {
            AddressType: H(P),
            Address: H(P),
            City: H(P),
            StateOrProvince: H(P),
            PostCode: H(P),
            Country: H(P)
        }), Fr = J(Br, {Format: Vk(P)}), Gr = J(Br, {
            Name: H(P), Title: H(P), Abstract: H(P), KeywordList: H(zr), CRS: Xk(P),
            EX_GeographicBoundingBox: H(function (a, b) {
                var c = K({}, Kr, a, b);
                if (c) {
                    a = c.westBoundLongitude;
                    b = c.southBoundLatitude;
                    var d = c.eastBoundLongitude;
                    c = c.northBoundLatitude;
                    if (void 0 !== a && void 0 !== b && void 0 !== d && void 0 !== c)return [a, b, d, c]
                }
            }), BoundingBox: Xk(function (a) {
                var b = [om(a.getAttribute("minx")), om(a.getAttribute("miny")), om(a.getAttribute("maxx")), om(a.getAttribute("maxy"))],
                    c = [om(a.getAttribute("resx")), om(a.getAttribute("resy"))];
                return {crs: a.getAttribute("CRS"), extent: b, res: c}
            }), Dimension: Xk(function (a) {
                return {
                    name: a.getAttribute("name"),
                    units: a.getAttribute("units"),
                    unitSymbol: a.getAttribute("unitSymbol"),
                    "default": a.getAttribute("default"),
                    multipleValues: lm(a.getAttribute("multipleValues")),
                    nearestValue: lm(a.getAttribute("nearestValue")),
                    current: lm(a.getAttribute("current")),
                    values: P(a)
                }
            }), Attribution: H(function (a, b) {
                return K({}, Lr, a, b)
            }), AuthorityURL: Xk(function (a, b) {
                if (b = ur(a, b))return b.name = a.getAttribute("name"), b
            }), Identifier: Xk(P), MetadataURL: Xk(function (a, b) {
                if (b = ur(a, b))return b.type = a.getAttribute("type"), b
            }), DataURL: Xk(ur),
            FeatureListURL: Xk(ur), Style: Xk(function (a, b) {
                return K({}, Mr, a, b)
            }), MinScaleDenominator: H(nm), MaxScaleDenominator: H(nm), Layer: Xk(function (a, b) {
                var c = b[b.length - 1], d = K({}, Gr, a, b);
                if (d)return b = lm(a.getAttribute("queryable")), void 0 === b && (b = c.queryable), d.queryable = void 0 !== b ? b : !1, b = qm(a.getAttribute("cascaded")), void 0 === b && (b = c.cascaded), d.cascaded = b, b = lm(a.getAttribute("opaque")), void 0 === b && (b = c.opaque), d.opaque = void 0 !== b ? b : !1, b = lm(a.getAttribute("noSubsets")), void 0 === b && (b = c.noSubsets), d.noSubsets =
                    void 0 !== b ? b : !1, (b = om(a.getAttribute("fixedWidth"))) || (b = c.fixedWidth), d.fixedWidth = b, (a = om(a.getAttribute("fixedHeight"))) || (a = c.fixedHeight), d.fixedHeight = a, ["Style", "CRS", "AuthorityURL"].forEach(function (a) {
                    a in c && (d[a] = (d[a] || []).concat(c[a]))
                }), "EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" ").forEach(function (a) {
                    a in d || (d[a] = c[a])
                }), d
            })
        }), Lr = J(Br, {Title: H(P), OnlineResource: H(bq), LogoURL: H(yr)}), Kr = J(Br, {
            westBoundLongitude: H(nm),
            eastBoundLongitude: H(nm), southBoundLatitude: H(nm), northBoundLatitude: H(nm)
        }), Er = J(Br, {GetCapabilities: H(wr), GetMap: H(wr), GetFeatureInfo: H(wr)}), xr = J(Br, {
            Format: Xk(P), DCPType: Xk(function (a, b) {
                return K({}, Nr, a, b)
            })
        }), Nr = J(Br, {
            HTTP: H(function (a, b) {
                return K({}, Or, a, b)
            })
        }), Or = J(Br, {Get: H(ur), Post: H(ur)}),
        Mr = J(Br, {Name: H(P), Title: H(P), Abstract: H(P), LegendURL: Xk(yr), StyleSheetURL: H(ur), StyleURL: H(ur)}),
        vr = J(Br, {Format: H(P), OnlineResource: H(bq)}), Ar = J(Br, {Keyword: Vk(P)});

    function Pr(a) {
        a = a ? a : {};
        this.a = "http://mapserver.gis.umn.edu/mapserver";
        this.b = new Em;
        this.c = a.layers ? a.layers : null;
        fm.call(this)
    }

    v(Pr, fm);
    Pr.prototype.Dc = function (a, b) {
        var c = {};
        b && tb(c, hl(this, a, b));
        c = [c];
        a.setAttribute("namespaceURI", this.a);
        var d = a.localName;
        b = [];
        if (0 !== a.childNodes.length) {
            if ("msGMLOutput" == d)for (var e = 0, f = a.childNodes.length; e < f; e++) {
                var g = a.childNodes[e];
                if (g.nodeType === Node.ELEMENT_NODE) {
                    var h = c[0], l = g.localName.replace("_layer", "");
                    if (!this.c || ha(this.c, l)) {
                        l += "_feature";
                        h.featureType = l;
                        h.featureNS = this.a;
                        var m = {};
                        m[l] = Vk(this.b.Jg, this.b);
                        h = J([h.featureNS, null], m);
                        g.setAttribute("namespaceURI", this.a);
                        (g = K([],
                            h, g, c, this.b)) && ja(b, g)
                    }
                }
            }
            "FeatureCollection" == d && (a = K([], this.b.b, a, [{}], this.b)) && (b = a)
        }
        return b
    };
    Pr.prototype.lh = function () {
    };
    Pr.prototype.Zb = function () {
    };
    Pr.prototype.ve = function () {
    };
    function Qr() {
        this.g = new dq
    }

    v(Qr, cq);
    Qr.prototype.a = function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType == Node.ELEMENT_NODE)return this.b(a);
        return null
    };
    Qr.prototype.b = function (a) {
        var b = a.getAttribute("version").trim(), c = this.g.b(a);
        if (!c)return null;
        c.version = b;
        return (c = K(c, Rr, a, [])) ? c : null
    };
    function Sr(a) {
        var b = P(a).split(" ");
        if (b && 2 == b.length && (a = +b[0], b = +b[1], !isNaN(a) && !isNaN(b)))return [a, b]
    }

    var Tr = [null, "http://www.opengis.net/wmts/1.0"], Ur = [null, "http://www.opengis.net/ows/1.1"], Rr = J(Tr, {
            Contents: H(function (a, b) {
                return K({}, Vr, a, b)
            })
        }), Vr = J(Tr, {
            Layer: Xk(function (a, b) {
                return K({}, Wr, a, b)
            }), TileMatrixSet: Xk(function (a, b) {
                return K({}, Xr, a, b)
            })
        }), Wr = J(Tr, {
            Style: Xk(function (a, b) {
                if (b = K({}, Yr, a, b))return a = "true" === a.getAttribute("isDefault"), b.isDefault = a, b
            }), Format: Xk(P), TileMatrixSetLink: Xk(function (a, b) {
                return K({}, Zr, a, b)
            }), Dimension: Xk(function (a, b) {
                return K({}, $r, a, b)
            }), ResourceURL: Xk(function (a) {
                var b =
                    a.getAttribute("format"), c = a.getAttribute("template");
                a = a.getAttribute("resourceType");
                var d = {};
                b && (d.format = b);
                c && (d.template = c);
                a && (d.resourceType = a);
                return d
            })
        }, J(Ur, {
            Title: H(P), Abstract: H(P), WGS84BoundingBox: H(function (a, b) {
                a = K([], as, a, b);
                if (2 == a.length)return Oa(a)
            }), Identifier: H(P)
        })), Yr = J(Tr, {
            LegendURL: Xk(function (a) {
                var b = {};
                b.format = a.getAttribute("format");
                b.href = bq(a);
                return b
            })
        }, J(Ur, {Title: H(P), Identifier: H(P)})), Zr = J(Tr, {
            TileMatrixSet: H(P), TileMatrixSetLimits: H(function (a, b) {
                return K([],
                    bs, a, b)
            })
        }), bs = J(Tr, {
            TileMatrixLimits: Vk(function (a, b) {
                return K({}, cs, a, b)
            })
        }), cs = J(Tr, {TileMatrix: H(P), MinTileRow: H(pm), MaxTileRow: H(pm), MinTileCol: H(pm), MaxTileCol: H(pm)}),
        $r = J(Tr, {Default: H(P), Value: Xk(P)}, J(Ur, {Identifier: H(P)})),
        as = J(Ur, {LowerCorner: Vk(Sr), UpperCorner: Vk(Sr)}), Xr = J(Tr, {
            WellKnownScaleSet: H(P), TileMatrix: Xk(function (a, b) {
                return K({}, ds, a, b)
            })
        }, J(Ur, {SupportedCRS: H(P), Identifier: H(P)})), ds = J(Tr, {
            TopLeftCorner: H(Sr), ScaleDenominator: H(nm), TileWidth: H(pm), TileHeight: H(pm), MatrixWidth: H(pm),
            MatrixHeight: H(pm)
        }, J(Ur, {Identifier: H(P)}));

    function es(a) {
        Wc.call(this);
        a = a || {};
        this.a = null;
        this.i = jc;
        this.f = new xb(6378137);
        this.c = void 0;
        z(this, Yc("projection"), this.Mm, this);
        z(this, Yc("tracking"), this.Nm, this);
        void 0 !== a.projection && this.mi(a.projection);
        void 0 !== a.trackingOptions && this.Kj(a.trackingOptions);
        this.We(void 0 !== a.tracking ? a.tracking : !1)
    }

    v(es, Wc);
    k = es.prototype;
    k.la = function () {
        this.We(!1);
        Wc.prototype.la.call(this)
    };
    k.Mm = function () {
        var a = this.ki();
        a && (this.i = $b(Zb("EPSG:4326"), a), this.a && this.set("position", this.i(this.a)))
    };
    k.Nm = function () {
        if (ud) {
            var a = this.li();
            a && void 0 === this.c ? this.c = navigator.geolocation.watchPosition(this.wp.bind(this), this.xp.bind(this), this.Yh()) : a || void 0 === this.c || (navigator.geolocation.clearWatch(this.c), this.c = void 0)
        }
    };
    k.wp = function (a) {
        a = a.coords;
        this.set("accuracy", a.accuracy);
        this.set("altitude", null === a.altitude ? void 0 : a.altitude);
        this.set("altitudeAccuracy", null === a.altitudeAccuracy ? void 0 : a.altitudeAccuracy);
        this.set("heading", null === a.heading ? void 0 : Ia(a.heading));
        this.a ? (this.a[0] = a.longitude, this.a[1] = a.latitude) : this.a = [a.longitude, a.latitude];
        var b = this.i(this.a);
        this.set("position", b);
        this.set("speed", null === a.speed ? void 0 : a.speed);
        a = Rf(this.f, this.a, a.accuracy);
        a.Ic(this.i);
        this.set("accuracyGeometry",
            a);
        this.u()
    };
    k.xp = function (a) {
        a.type = "error";
        this.We(!1);
        this.b(a)
    };
    k.Pk = function () {
        return this.get("accuracy")
    };
    k.Qk = function () {
        return this.get("accuracyGeometry") || null
    };
    k.Rk = function () {
        return this.get("altitude")
    };
    k.Sk = function () {
        return this.get("altitudeAccuracy")
    };
    k.Km = function () {
        return this.get("heading")
    };
    k.Lm = function () {
        return this.get("position")
    };
    k.ki = function () {
        return this.get("projection")
    };
    k.vl = function () {
        return this.get("speed")
    };
    k.li = function () {
        return this.get("tracking")
    };
    k.Yh = function () {
        return this.get("trackingOptions")
    };
    k.mi = function (a) {
        this.set("projection", Zb(a))
    };
    k.We = function (a) {
        this.set("tracking", a)
    };
    k.Kj = function (a) {
        this.set("trackingOptions", a)
    };
    function fs(a, b, c) {
        gf.call(this);
        this.gh(a, b ? b : 0, c)
    }

    v(fs, gf);
    k = fs.prototype;
    k.clone = function () {
        var a = new fs(null);
        jf(a, this.ka, this.A.slice());
        a.u();
        return a
    };
    k.Lb = function (a, b, c, d) {
        var e = this.A;
        a -= e[0];
        var f = b - e[1];
        b = a * a + f * f;
        if (b < d) {
            if (0 === b)for (d = 0; d < this.a; ++d)c[d] = e[d]; else for (d = this.xd() / Math.sqrt(b), c[0] = e[0] + d * a, c[1] = e[1] + d * f, d = 2; d < this.a; ++d)c[d] = e[d];
            c.length = this.a;
            return b
        }
        return d
    };
    k.Sc = function (a, b) {
        var c = this.A;
        a -= c[0];
        b -= c[1];
        return a * a + b * b <= gs(this)
    };
    k.wa = function () {
        return this.A.slice(0, this.a)
    };
    k.Ee = function (a) {
        var b = this.A, c = b[this.a] - b[0];
        return Ya(b[0] - c, b[1] - c, b[0] + c, b[1] + c, a)
    };
    k.xd = function () {
        return Math.sqrt(gs(this))
    };
    function gs(a) {
        var b = a.A[a.a] - a.A[0];
        a = a.A[a.a + 1] - a.A[1];
        return b * b + a * a
    }

    k.S = function () {
        return "Circle"
    };
    k.Ya = function (a) {
        var b = this.G();
        return qb(a, b) ? (b = this.wa(), a[0] <= b[0] && a[2] >= b[0] || a[1] <= b[1] && a[3] >= b[1] ? !0 : eb(a, this.xb, this)) : !1
    };
    k.rb = function (a) {
        var b = this.a, c = a.slice();
        c[b] = c[0] + (this.A[b] - this.A[0]);
        var d;
        for (d = 1; d < b; ++d)c[b + d] = a[d];
        jf(this, this.ka, c);
        this.u()
    };
    k.gh = function (a, b, c) {
        if (a) {
            mf(this, c, a, 0);
            this.A || (this.A = []);
            c = this.A;
            a = uf(c, a);
            c[a++] = c[0] + b;
            var d;
            b = 1;
            for (d = this.a; b < d; ++b)c[a++] = c[b];
            c.length = a
        } else jf(this, "XY", null);
        this.u()
    };
    k.V = function () {
    };
    k.na = function () {
    };
    k.Zc = function (a) {
        this.A[this.a] = this.A[0] + a;
        this.u()
    };
    function hs(a, b, c) {
        for (var d = [], e = a(0), f = a(1), g = b(e), h = b(f), l = [f, e], m = [h, g], n = [1, 0], p = {}, q = 1E5, r,
                 u, x, B,
                 A; 0 < --q && 0 < n.length;)x = n.pop(), e = l.pop(), g = m.pop(), f = x.toString(), f in p || (d.push(g[0], g[1]), p[f] = !0), B = n.pop(), f = l.pop(), h = m.pop(), A = (x + B) / 2, r = a(A), u = b(r), Ga(u[0], u[1], g[0], g[1], h[0], h[1]) < c ? (d.push(h[0], h[1]), f = B.toString(), p[f] = !0) : (n.push(B, A, A, x), m.push(h, u, u, g), l.push(f, r, r, e));
        return d
    }

    function is(a, b, c, d, e) {
        var f = Zb("EPSG:4326");
        return hs(function (d) {
            return [a, b + (c - b) * d]
        }, ic(f, d), e)
    }

    function js(a, b, c, d, e) {
        var f = Zb("EPSG:4326");
        return hs(function (d) {
            return [b + (c - b) * d, a]
        }, ic(f, d), e)
    };
    function ks(a, b, c) {
        var d = b - c;
        return a[0] === a[d] && a[1] === a[d + 1] && 3 < (b - 0) / c ? !!nf(a, 0, b, c) : !1
    };
    function ls(a) {
        a = a || {};
        this.i = this.v = null;
        this.j = this.f = Infinity;
        this.o = this.l = -Infinity;
        this.ra = this.qa = Infinity;
        this.T = this.I = -Infinity;
        this.ta = void 0 !== a.targetSize ? a.targetSize : 100;
        this.kb = void 0 !== a.maxLines ? a.maxLines : 100;
        this.g = [];
        this.c = [];
        this.ia = void 0 !== a.strokeStyle ? a.strokeStyle : ms;
        this.C = this.s = void 0;
        this.a = this.b = this.O = null;
        1 == a.showLabels && (this.sa = a.lonLabelFormatter ? a.lonLabelFormatter : Ce.bind(this, "EW"), this.Ua = a.latLabelFormatter ? a.latLabelFormatter : Ce.bind(this, "NS"), this.fa =
            void 0 == a.lonLabelPosition ? 0 : a.lonLabelPosition, this.U = void 0 == a.latLabelPosition ? 1 : a.latLabelPosition, this.B = void 0 !== a.lonLabelStyle ? a.lonLabelStyle : new In({
            font: "12px Calibri,sans-serif",
            textBaseline: "bottom",
            fill: new Dk({color: "rgba(0,0,0,1)"}),
            stroke: new Ek({color: "rgba(255,255,255,1)", width: 3})
        }), this.D = void 0 !== a.latLabelStyle ? a.latLabelStyle : new In({
            font: "12px Calibri,sans-serif",
            textAlign: "end",
            fill: new Dk({color: "rgba(0,0,0,1)"}),
            stroke: new Ek({color: "rgba(255,255,255,1)", width: 3})
        }), this.b =
            [], this.a = []);
        this.setMap(void 0 !== a.map ? a.map : null)
    }

    var ms = new Ek({color: "rgba(0,0,0,0.2)"}),
        ns = [90, 45, 30, 20, 10, 5, 2, 1, .5, .2, .1, .05, .01, .005, .002, .001];

    function os(a, b, c, d, e, f, g) {
        var h = g;
        c = is(b, c, d, a.i, e);
        h = void 0 !== a.g[h] ? a.g[h] : new L(null);
        h.aa("XY", c);
        qb(h.G(), f) && (a.b && (c = g, d = h.ca(), f = [d[0], Da(f[1] + Math.abs(f[1] - f[3]) * a.fa, Math.max(f[1], d[1]), Math.min(f[3], d[d.length - 1]))], c = a.b[c] ? a.b[c].Vd : new C(null), c.na(f), a.b[g] = {
            Vd: c,
            text: a.sa(b)
        }), a.g[g++] = h);
        return g
    }

    function ps(a, b, c, d, e, f, g) {
        var h = g;
        c = js(b, c, d, a.i, e);
        h = void 0 !== a.c[h] ? a.c[h] : new L(null);
        h.aa("XY", c);
        qb(h.G(), f) && (a.a && (c = g, d = h.ca(), f = [Da(f[0] + Math.abs(f[0] - f[2]) * a.U, Math.max(f[0], d[0]), Math.min(f[2], d[d.length - 2])), d[1]], c = a.a[c] ? a.a[c].Vd : new C(null), c.na(f), a.a[g] = {
            Vd: c,
            text: a.Ua(b)
        }), a.c[g++] = h);
        return g
    }

    k = ls.prototype;
    k.Om = function () {
        return this.v
    };
    k.ll = function () {
        return this.g
    };
    k.ql = function () {
        return this.c
    };
    k.bi = function (a) {
        var b = a.vectorContext, c = a.frameState;
        a = c.extent;
        var d = c.viewState, e = d.center, f = d.projection;
        d = d.resolution;
        c = c.pixelRatio;
        c = d * d / (4 * c * c);
        if (!this.i || !hc(this.i, f)) {
            var g = Zb("EPSG:4326"), h = f.G(), l = f.se, m = lc(l, g, f), n = l[2], p = l[1], q = l[0], r = m[3],
                u = m[2], x = m[1];
            m = m[0];
            this.f = l[3];
            this.j = n;
            this.l = p;
            this.o = q;
            this.qa = r;
            this.ra = u;
            this.I = x;
            this.T = m;
            this.s = ic(g, f);
            this.C = ic(f, g);
            this.O = this.C(nb(h));
            this.i = f
        }
        f = this.O[0];
        g = this.O[1];
        h = -1;
        n = Math.pow(this.ta * d, 2);
        p = [];
        q = [];
        d = 0;
        for (l = ns.length; d < l; ++d) {
            r =
                ns[d] / 2;
            p[0] = f - r;
            p[1] = g - r;
            q[0] = f + r;
            q[1] = g + r;
            this.s(p, p);
            this.s(q, q);
            r = Math.pow(q[0] - p[0], 2) + Math.pow(q[1] - p[1], 2);
            if (r <= n)break;
            h = ns[d]
        }
        d = h;
        if (-1 == d) this.g.length = this.c.length = 0, this.b && (this.b.length = 0), this.a && (this.a.length = 0); else {
            f = this.C(e);
            e = f[0];
            f = f[1];
            g = this.kb;
            l = [Math.max(a[0], this.T), Math.max(a[1], this.I), Math.min(a[2], this.ra), Math.min(a[3], this.qa)];
            l = lc(l, this.i, "EPSG:4326");
            p = l[3];
            h = l[2];
            q = l[1];
            r = l[0];
            e = Math.floor(e / d) * d;
            u = Da(e, this.o, this.j);
            n = os(this, u, q, p, c, a, 0);
            for (l = 0; u != this.o &&
            l++ < g;)u = Math.max(u - d, this.o), n = os(this, u, q, p, c, a, n);
            u = Da(e, this.o, this.j);
            for (l = 0; u != this.j && l++ < g;)u = Math.min(u + d, this.j), n = os(this, u, q, p, c, a, n);
            this.g.length = n;
            this.b && (this.b.length = n);
            f = Math.floor(f / d) * d;
            e = Da(f, this.l, this.f);
            n = ps(this, e, r, h, c, a, 0);
            for (l = 0; e != this.l && l++ < g;)e = Math.max(e - d, this.l), n = ps(this, e, r, h, c, a, n);
            e = Da(f, this.l, this.f);
            for (l = 0; e != this.f && l++ < g;)e = Math.min(e + d, this.f), n = ps(this, e, r, h, c, a, n);
            this.c.length = n;
            this.a && (this.a.length = n)
        }
        b.La(null, this.ia);
        a = 0;
        for (c = this.g.length; a <
        c; ++a)e = this.g[a], b.Eb(e);
        a = 0;
        for (c = this.c.length; a < c; ++a)e = this.c[a], b.Eb(e);
        if (this.b)for (a = 0, c = this.b.length; a < c; ++a)e = this.b[a], this.B.Fd(e.text), b.hb(this.B), b.Eb(e.Vd);
        if (this.a)for (a = 0, c = this.a.length; a < c; ++a)e = this.a[a], this.D.Fd(e.text), b.hb(this.D), b.Eb(e.Vd)
    };
    k.setMap = function (a) {
        this.v && (this.v.K("postcompose", this.bi, this), this.v.render());
        a && (a.J("postcompose", this.bi, this), a.render());
        this.v = a
    };
    function qs(a, b, c, d, e) {
        Tc.call(this);
        this.c = e;
        this.extent = a;
        this.a = c;
        this.resolution = b;
        this.state = d
    }

    v(qs, Tc);
    qs.prototype.u = function () {
        this.b("change")
    };
    qs.prototype.G = function () {
        return this.extent
    };
    qs.prototype.getState = function () {
        return this.state
    };
    function rs(a, b, c, d, e, f, g) {
        qs.call(this, a, b, c, 0, d);
        this.f = e;
        this.N = new Image;
        null !== f && (this.N.crossOrigin = f);
        this.g = null;
        this.state = 0;
        this.i = g
    }

    v(rs, qs);
    k = rs.prototype;
    k.Y = function () {
        return this.N
    };
    k.Rm = function () {
        this.state = 3;
        this.g.forEach(Hc);
        this.g = null;
        this.u()
    };
    k.Sm = function () {
        void 0 === this.resolution && (this.resolution = mb(this.extent) / this.N.height);
        this.state = 2;
        this.g.forEach(Hc);
        this.g = null;
        this.u()
    };
    k.load = function () {
        if (0 == this.state || 3 == this.state) this.state = 1, this.u(), this.g = [Mc(this.N, "error", this.Rm, this), Mc(this.N, "load", this.Sm, this)], this.i(this, this.f)
    };
    k.hh = function (a) {
        this.N = a
    };
    function ss(a, b, c, d, e, f) {
        this.i = f ? f : null;
        qs.call(this, a, b, c, f ? 0 : 2, d);
        this.g = e
    }

    v(ss, qs);
    ss.prototype.f = function (a) {
        this.state = a ? 3 : 2;
        this.u()
    };
    ss.prototype.load = function () {
        0 == this.state && (this.state = 1, this.u(), this.i(this.f.bind(this)))
    };
    ss.prototype.Y = function () {
        return this.g
    };
    function ts(a, b, c) {
        Tc.call(this);
        c = c ? c : {};
        this.Ba = a;
        this.state = b;
        this.g = null;
        this.key = "";
        this.j = void 0 === c.transition ? 250 : c.transition;
        this.o = {}
    }

    v(ts, Tc);
    ts.prototype.u = function () {
        this.b("change")
    };
    ts.prototype.fb = function () {
        return this.key + "/" + this.Ba
    };
    function Li(a) {
        if (!a.g)return a;
        var b = a.g;
        do {
            if (2 == b.getState())return b;
            b = b.g
        } while (b);
        return a
    }

    function us(a) {
        if (a.g) {
            var b = a.g;
            do {
                if (2 == b.getState()) {
                    b.g = null;
                    break
                } else 1 == b.getState() ? a = b : 0 == b.getState() ? a.g = b.g : a = b;
                b = a.g
            } while (b)
        }
    }

    ts.prototype.i = function () {
        return this.Ba
    };
    ts.prototype.getState = function () {
        return this.state
    };
    function Ki(a, b) {
        a.state = b;
        a.u()
    }

    function Mi(a, b, c) {
        if (!a.j)return 1;
        var d = a.o[b];
        if (!d) d = c, a.o[b] = d; else if (-1 === d)return 1;
        b = c - d + 1E3 / 60;
        return b >= a.j ? 1 : Me(b / a.j)
    };
    function vs(a, b, c, d, e, f) {
        ts.call(this, a, b, f);
        this.f = c;
        this.N = new Image;
        null !== d && (this.N.crossOrigin = d);
        this.c = null;
        this.l = e
    }

    v(vs, ts);
    k = vs.prototype;
    k.la = function () {
        1 == this.state && (ws(this), this.N.src = xs);
        this.g && Qc(this.g);
        this.state = 5;
        this.u();
        ts.prototype.la.call(this)
    };
    k.Y = function () {
        return this.N
    };
    k.fb = function () {
        return this.f
    };
    k.Pm = function () {
        this.state = 3;
        ws(this);
        this.N.src = xs;
        this.u()
    };
    k.Qm = function () {
        this.state = this.N.naturalWidth && this.N.naturalHeight ? 2 : 4;
        ws(this);
        this.u()
    };
    k.load = function () {
        if (0 == this.state || 3 == this.state) this.state = 1, this.u(), this.c = [Mc(this.N, "error", this.Pm, this), Mc(this.N, "load", this.Qm, this)], this.l(this, this.f)
    };
    function ws(a) {
        a.c.forEach(Hc);
        a.c = null
    }

    var xs, ys = eg(1, 1);
    ys.fillStyle = "rgba(0,0,0,0)";
    ys.fillRect(0, 0, 1, 1);
    xs = ys.canvas.toDataURL("image/png");
    function zs(a) {
        a = a ? a : {};
        Eg.call(this, {handleEvent: Qe});
        this.j = a.formatConstructors ? a.formatConstructors : [];
        this.o = a.projection ? Zb(a.projection) : null;
        this.a = null;
        this.f = a.source || null;
        this.target = a.target ? a.target : null
    }

    v(zs, Eg);
    function As(a) {
        a = a.dataTransfer.files;
        var b;
        var c = 0;
        for (b = a.length; c < b; ++c) {
            var d = a.item(c);
            var e = new FileReader;
            e.addEventListener("load", this.l.bind(this, d));
            e.readAsText(d)
        }
    }

    function Bs(a) {
        a.stopPropagation();
        a.preventDefault();
        a.dataTransfer.dropEffect = "copy"
    }

    zs.prototype.l = function (a, b) {
        b = b.target.result;
        var c = this.v, d = this.o;
        d || (d = c.$().v);
        c = this.j;
        var e = [], f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = new c[g];
            var l = {featureProjection: d};
            try {
                e = h.Ma(b, l)
            } catch (m) {
                e = null
            }
            if (e && 0 < e.length)break
        }
        this.f && (this.f.clear(), this.f.Hc(e));
        this.b(new Cs(Ds, a, e, d))
    };
    function Es(a) {
        var b = a.v;
        b && (b = a.target ? a.target : b.a, a.a = [z(b, "drop", As, a), z(b, "dragenter", Bs, a), z(b, "dragover", Bs, a), z(b, "drop", Bs, a)])
    }

    zs.prototype.Ga = function (a) {
        Eg.prototype.Ga.call(this, a);
        a ? Es(this) : Fs(this)
    };
    zs.prototype.setMap = function (a) {
        Fs(this);
        Eg.prototype.setMap.call(this, a);
        this.c() && Es(this)
    };
    function Fs(a) {
        a.a && (a.a.forEach(Hc), a.a = null)
    }

    var Ds = "addfeatures";

    function Cs(a, b, c, d) {
        Rc.call(this, a);
        this.features = c;
        this.file = b;
        this.projection = d
    }

    v(Cs, Rc);
    function Gs(a) {
        a = a ? a : {};
        Ug.call(this, {handleDownEvent: Hs, handleDragEvent: Is, handleUpEvent: Js});
        this.o = a.condition ? a.condition : Qg;
        this.a = this.f = void 0;
        this.j = 0;
        this.s = void 0 !== a.duration ? a.duration : 400
    }

    v(Gs, Ug);
    function Is(a) {
        if (Sg(a)) {
            var b = a.map, c = b.yb(), d = a.pixel;
            a = d[0] - c[0] / 2;
            d = c[1] / 2 - d[1];
            c = Math.atan2(d, a);
            a = Math.sqrt(a * a + d * d);
            b = b.$();
            b.f.rotation !== te && void 0 !== this.f && (d = c - this.f, Fg(b, b.Pa() - d));
            this.f = c;
            void 0 !== this.a && (c = this.a * (b.Oa() / a), Hg(b, c));
            void 0 !== this.a && (this.j = this.a / a);
            this.a = a
        }
    }

    function Js(a) {
        if (!Sg(a))return !0;
        a = a.map.$();
        Yf(a, 1, -1);
        var b = this.j - 1, c = a.Pa();
        c = a.constrainRotation(c, 0);
        Fg(a, c, void 0, void 0);
        c = a.Oa();
        var d = this.s;
        c = a.constrainResolution(c, 0, b);
        Hg(a, c, void 0, d);
        this.j = 0;
        return !1
    }

    function Hs(a) {
        return Sg(a) && this.o(a) ? (Yf(a.map.$(), 1, 1), this.a = this.f = void 0, !0) : !1
    };
    function Q(a) {
        a = a ? a : {};
        var b = tb({}, a);
        delete b.style;
        delete b.renderBuffer;
        delete b.updateWhileAnimating;
        delete b.updateWhileInteracting;
        xi.call(this, b);
        this.f = void 0 !== a.renderBuffer ? a.renderBuffer : 100;
        this.C = null;
        this.I = void 0;
        this.j(a.style);
        this.U = void 0 !== a.updateWhileAnimating ? a.updateWhileAnimating : !1;
        this.sa = void 0 !== a.updateWhileInteracting ? a.updateWhileInteracting : !1;
        this.type = "VECTOR"
    }

    v(Q, xi);
    Q.prototype.D = function () {
        return this.C
    };
    Q.prototype.bb = function () {
        return this.I
    };
    Q.prototype.j = function (a) {
        this.C = void 0 !== a ? a : Jk;
        this.I = null === a ? void 0 : Hk(this.C);
        this.u()
    };
    var Cj = "renderOrder";

    function Ks() {
        return [[-Infinity, -Infinity, Infinity, Infinity]]
    };
    function Ls(a) {
        Wc.call(this);
        this.c = Zb(a.projection);
        this.j = Ms(a.attributions);
        this.D = a.logo;
        this.sa = void 0 !== a.state ? a.state : "ready";
        this.C = void 0 !== a.wrapX ? a.wrapX : !1
    }

    v(Ls, Wc);
    function Ms(a) {
        if ("string" === typeof a)return [new Fc({html: a})];
        if (a instanceof Fc)return [a];
        if (Array.isArray(a)) {
            for (var b = a.length, c = Array(b), d = 0; d < b; d++) {
                var e = a[d];
                c[d] = "string" === typeof e ? new Fc({html: e}) : e
            }
            return c
        }
        return null
    }

    k = Ls.prototype;
    k.Fa = sa;
    k.za = function () {
        return this.j
    };
    k.xa = function () {
        return this.D
    };
    k.Aa = function () {
        return this.c
    };
    k.getState = function () {
        return this.sa
    };
    k.ua = function () {
        this.u()
    };
    k.va = function (a) {
        this.j = Ms(a);
        this.u()
    };
    function Ns(a, b) {
        a.sa = b;
        a.u()
    };
    Pp.he = function () {
    };
    (function (a) {
        function b(a, e, f, g, h) {
            f = f || 0;
            g = g || a.length - 1;
            for (h = h || d; g > f;) {
                if (600 < g - f) {
                    var l = g - f + 1, m = e - f + 1, n = Math.log(l), p = .5 * Math.exp(2 * n / 3);
                    n = .5 * Math.sqrt(n * p * (l - p) / l) * (0 > m - l / 2 ? -1 : 1);
                    b(a, e, Math.max(f, Math.floor(e - m * p / l + n)), Math.min(g, Math.floor(e + (l - m) * p / l + n)), h)
                }
                l = a[e];
                m = f;
                p = g;
                c(a, f, e);
                for (0 < h(a[g], l) && c(a, f, g); m < p;) {
                    c(a, m, p);
                    m++;
                    for (p--; 0 > h(a[m], l);)m++;
                    for (; 0 < h(a[p], l);)p--
                }
                0 === h(a[f], l) ? c(a, f, p) : (p++, c(a, p, g));
                p <= e && (f = p + 1);
                e <= p && (g = p - 1)
            }
        }

        function c(a, b, c) {
            var d = a[b];
            a[b] = a[c];
            a[c] = d
        }

        function d(a,
                   b) {
            return a < b ? -1 : a > b ? 1 : 0
        }

        function e(a, b) {
            if (!(this instanceof e))return new e(a, b);
            this.Mf = Math.max(4, a || 9);
            this.vh = Math.max(2, Math.ceil(.4 * this.Mf));
            b && this.tk(b);
            this.clear()
        }

        function f(a, b) {
            g(a, 0, a.children.length, b, a)
        }

        function g(a, b, c, d, e) {
            e || (e = u(null));
            e.ba = Infinity;
            e.ea = Infinity;
            e.da = -Infinity;
            e.ga = -Infinity;
            for (var f; b < c; b++)f = a.children[b], h(e, a.nb ? d(f) : f);
            return e
        }

        function h(a, b) {
            a.ba = Math.min(a.ba, b.ba);
            a.ea = Math.min(a.ea, b.ea);
            a.da = Math.max(a.da, b.da);
            a.ga = Math.max(a.ga, b.ga)
        }

        function l(a,
                   b) {
            return a.ba - b.ba
        }

        function m(a, b) {
            return a.ea - b.ea
        }

        function n(a) {
            return (a.da - a.ba) * (a.ga - a.ea)
        }

        function p(a) {
            return a.da - a.ba + (a.ga - a.ea)
        }

        function q(a, b) {
            return a.ba <= b.ba && a.ea <= b.ea && b.da <= a.da && b.ga <= a.ga
        }

        function r(a, b) {
            return b.ba <= a.da && b.ea <= a.ga && b.da >= a.ba && b.ga >= a.ea
        }

        function u(a) {
            return {children: a, height: 1, nb: !0, ba: Infinity, ea: Infinity, da: -Infinity, ga: -Infinity}
        }

        function x(a, b, c, d, e) {
            for (var f = [b, c],
                     g; f.length;)c = f.pop(), b = f.pop(), c - b <= d || (g = b + Math.ceil((c - b) / d / 2) * d, B(a, g, b, c, e), f.push(b,
                g, g, c))
        }

        var B = b;
        "use strict";
        e.prototype = {
            all: function () {
                return this.qh(this.data, [])
            }, search: function (a) {
                var b = this.data, c = [], d = this.Cb;
                if (!r(a, b))return c;
                for (var e = [], f, g, h, l; b;) {
                    f = 0;
                    for (g = b.children.length; f < g; f++)h = b.children[f], l = b.nb ? d(h) : h, r(a, l) && (b.nb ? c.push(h) : q(a, l) ? this.qh(h, c) : e.push(h));
                    b = e.pop()
                }
                return c
            }, load: function (a) {
                if (!a || !a.length)return this;
                if (a.length < this.vh) {
                    for (var b = 0, c = a.length; b < c; b++)this.Ea(a[b]);
                    return this
                }
                a = this.sh(a.slice(), 0, a.length - 1, 0);
                this.data.children.length ?
                    this.data.height === a.height ? this.xh(this.data, a) : (this.data.height < a.height && (b = this.data, this.data = a, a = b), this.uh(a, this.data.height - a.height - 1, !0)) : this.data = a;
                return this
            }, Ea: function (a) {
                a && this.uh(a, this.data.height - 1);
                return this
            }, clear: function () {
                this.data = u([]);
                return this
            }, remove: function (a, b) {
                if (!a)return this;
                for (var c = this.data, d = this.Cb(a), e = [], f = [], g, h, l, m; c || e.length;) {
                    c || (c = e.pop(), h = e[e.length - 1], g = f.pop(), m = !0);
                    if (c.nb) {
                        a:{
                            l = a;
                            var n = c.children, p = b;
                            if (p) {
                                for (var r = 0; r < n.length; r++)if (p(l,
                                        n[r])) {
                                    l = r;
                                    break a
                                }
                                l = -1
                            } else l = n.indexOf(l)
                        }
                        if (-1 !== l) {
                            c.children.splice(l, 1);
                            e.push(c);
                            this.rk(e);
                            break
                        }
                    }
                    m || c.nb || !q(c, d) ? h ? (g++, c = h.children[g], m = !1) : c = null : (e.push(c), f.push(g), g = 0, h = c, c = c.children[0])
                }
                return this
            }, Cb: function (a) {
                return a
            }, Qf: l, Rf: m, toJSON: function () {
                return this.data
            }, qh: function (a, b) {
                for (var c = []; a;)a.nb ? b.push.apply(b, a.children) : c.push.apply(c, a.children), a = c.pop();
                return b
            }, sh: function (a, b, c, d) {
                var e = c - b + 1, g = this.Mf;
                if (e <= g) {
                    var h = u(a.slice(b, c + 1));
                    f(h, this.Cb);
                    return h
                }
                d ||
                (d = Math.ceil(Math.log(e) / Math.log(g)), g = Math.ceil(e / Math.pow(g, d - 1)));
                h = u([]);
                h.nb = !1;
                h.height = d;
                e = Math.ceil(e / g);
                g = e * Math.ceil(Math.sqrt(g));
                var l;
                for (x(a, b, c, g, this.Qf); b <= c; b += g) {
                    var m = Math.min(b + g - 1, c);
                    x(a, b, m, e, this.Rf);
                    for (l = b; l <= m; l += e) {
                        var n = Math.min(l + e - 1, m);
                        h.children.push(this.sh(a, l, n, d - 1))
                    }
                }
                f(h, this.Cb);
                return h
            }, qk: function (a, b, c, d) {
                for (var e, f, g, h, l, m, p, q; ;) {
                    d.push(b);
                    if (b.nb || d.length - 1 === c)break;
                    p = q = Infinity;
                    e = 0;
                    for (f = b.children.length; e < f; e++)g = b.children[e], l = n(g), m = (Math.max(g.da,
                            a.da) - Math.min(g.ba, a.ba)) * (Math.max(g.ga, a.ga) - Math.min(g.ea, a.ea)) - l, m < q ? (q = m, p = l < p ? l : p, h = g) : m === q && l < p && (p = l, h = g);
                    b = h || b.children[0]
                }
                return b
            }, uh: function (a, b, c) {
                var d = this.Cb;
                c = c ? a : d(a);
                d = [];
                var e = this.qk(c, this.data, b, d);
                e.children.push(a);
                for (h(e, c); 0 <= b;)if (d[b].children.length > this.Mf) this.wk(d, b), b--; else break;
                this.mk(c, d, b)
            }, wk: function (a, b) {
                var c = a[b], d = c.children.length, e = this.vh;
                this.nk(c, e, d);
                d = this.pk(c, e, d);
                d = u(c.children.splice(d, c.children.length - d));
                d.height = c.height;
                d.nb = c.nb;
                f(c, this.Cb);
                f(d, this.Cb);
                b ? a[b - 1].children.push(d) : this.xh(c, d)
            }, xh: function (a, b) {
                this.data = u([a, b]);
                this.data.height = a.height + 1;
                this.data.nb = !1;
                f(this.data, this.Cb)
            }, pk: function (a, b, c) {
                var d, e;
                var f = e = Infinity;
                for (d = b; d <= c - b; d++) {
                    var h = g(a, 0, d, this.Cb);
                    var l = g(a, d, c, this.Cb);
                    var m = Math.max(0, Math.min(h.da, l.da) - Math.max(h.ba, l.ba)) * Math.max(0, Math.min(h.ga, l.ga) - Math.max(h.ea, l.ea));
                    h = n(h) + n(l);
                    if (m < f) {
                        f = m;
                        var p = d;
                        e = h < e ? h : e
                    } else m === f && h < e && (e = h, p = d)
                }
                return p
            }, nk: function (a, b, c) {
                var d = a.nb ? this.Qf :
                    l, e = a.nb ? this.Rf : m, f = this.rh(a, b, c, d);
                b = this.rh(a, b, c, e);
                f < b && a.children.sort(d)
            }, rh: function (a, b, c, d) {
                a.children.sort(d);
                d = this.Cb;
                var e = g(a, 0, b, d), f = g(a, c - b, c, d), l = p(e) + p(f), m;
                for (m = b; m < c - b; m++) {
                    var n = a.children[m];
                    h(e, a.nb ? d(n) : n);
                    l += p(e)
                }
                for (m = c - b - 1; m >= b; m--)n = a.children[m], h(f, a.nb ? d(n) : n), l += p(f);
                return l
            }, mk: function (a, b, c) {
                for (; 0 <= c; c--)h(b[c], a)
            }, rk: function (a) {
                for (var b = a.length - 1,
                         c; 0 <= b; b--)0 === a[b].children.length ? 0 < b ? (c = a[b - 1].children, c.splice(c.indexOf(a[b]), 1)) : this.clear() : f(a[b],
                    this.Cb)
            }, tk: function (a) {
                var b = ["return a", " - b", ";"];
                this.Qf = new Function("a", "b", b.join(a[0]));
                this.Rf = new Function("a", "b", b.join(a[1]));
                this.Cb = new Function("a", "return {minX: a" + a[0] + ", minY: a" + a[1] + ", maxX: a" + a[2] + ", maxY: a" + a[3] + "};")
            }
        };
        a["default"] = e
    })(Pp.he = Pp.he || {});
    Pp.he = Pp.he.default;
    function Os(a) {
        this.a = Pp.he(a);
        this.b = {}
    }

    k = Os.prototype;
    k.Ea = function (a, b) {
        a = {ba: a[0], ea: a[1], da: a[2], ga: a[3], value: b};
        this.a.Ea(a);
        this.b[w(b)] = a
    };
    k.load = function (a, b) {
        for (var c = Array(b.length), d = 0, e = b.length; d < e; d++) {
            var f = a[d], g = b[d];
            f = {ba: f[0], ea: f[1], da: f[2], ga: f[3], value: g};
            c[d] = f;
            this.b[w(g)] = f
        }
        this.a.load(c)
    };
    k.remove = function (a) {
        a = w(a);
        var b = this.b[a];
        delete this.b[a];
        return null !== this.a.remove(b)
    };
    function Ps(a, b, c) {
        var d = a.b[w(c)];
        cb([d.ba, d.ea, d.da, d.ga], b) || (a.remove(c), a.Ea(b, c))
    }

    function Qs(a) {
        return a.a.all().map(function (a) {
            return a.value
        })
    }

    function Rs(a, b) {
        return a.a.search({ba: b[0], ea: b[1], da: b[2], ga: b[3]}).map(function (a) {
            return a.value
        })
    }

    k.forEach = function (a, b) {
        return Ss(Qs(this), a, b)
    };
    function Ts(a, b, c, d) {
        return Ss(Rs(a, b), c, d)
    }

    function Ss(a, b, c) {
        for (var d, e = 0, f = a.length; e < f && !(d = b.call(c, a[e])); e++);
        return d
    }

    k.clear = function () {
        this.a.clear();
        this.b = {}
    };
    k.G = function (a) {
        var b = this.a.data;
        return Ya(b.ba, b.ea, b.da, b.ga, a)
    };
    k.concat = function (a) {
        this.a.load(a.a.all());
        for (var b in a.b)this.b[b | 0] = a.b[b | 0]
    };
    function R(a) {
        a = a || {};
        Ls.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: void 0,
            state: "ready",
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.s = sa;
        this.B = a.format;
        this.U = void 0 == a.overlaps ? !0 : a.overlaps;
        this.I = a.url;
        a.loader ? this.s = a.loader : void 0 !== this.I && (wa(this.B, 7), this.s = fl(this.I, this.B));
        this.fa = a.strategy ? a.strategy : Ks;
        var b = void 0 !== a.useSpatialIndex ? a.useSpatialIndex : !0;
        this.a = b ? new Os : null;
        this.T = new Os;
        this.f = {};
        this.l = {};
        this.o = {};
        this.v = {};
        this.i = null;
        if (a.features instanceof
            ad) {
            var c = a.features;
            var d = c.a
        } else Array.isArray(a.features) && (d = a.features);
        b || c || (c = new ad(d));
        d && Us(this, d);
        c && Vs(this, c)
    }

    v(R, Ls);
    k = R.prototype;
    k.Db = function (a) {
        var b = w(a).toString();
        if (Ws(this, b, a)) {
            Xs(this, b, a);
            var c = a.W();
            c ? (b = c.G(), this.a && this.a.Ea(b, a)) : this.f[b] = a;
            this.b(new Ys("addfeature", a))
        }
        this.u()
    };
    function Xs(a, b, c) {
        a.v[b] = [z(c, "change", a.bj, a), z(c, "propertychange", a.bj, a)]
    }

    function Ws(a, b, c) {
        var d = !0, e = c.c;
        void 0 !== e ? e.toString() in a.l ? d = !1 : a.l[e.toString()] = c : (wa(!(b in a.o), 30), a.o[b] = c);
        return d
    }

    k.Hc = function (a) {
        Us(this, a);
        this.u()
    };
    function Us(a, b) {
        var c, d = [], e = [], f = [];
        var g = 0;
        for (c = b.length; g < c; g++) {
            var h = b[g];
            var l = w(h).toString();
            Ws(a, l, h) && e.push(h)
        }
        g = 0;
        for (c = e.length; g < c; g++)h = e[g], l = w(h).toString(), Xs(a, l, h), (b = h.W()) ? (l = b.G(), d.push(l), f.push(h)) : a.f[l] = h;
        a.a && a.a.load(d, f);
        g = 0;
        for (c = e.length; g < c; g++)a.b(new Ys("addfeature", e[g]))
    }

    function Vs(a, b) {
        var c = !1;
        z(a, "addfeature", function (a) {
            c || (c = !0, b.push(a.feature), c = !1)
        });
        z(a, "removefeature", function (a) {
            c || (c = !0, b.remove(a.feature), c = !1)
        });
        z(b, "add", function (a) {
            c || (c = !0, this.Db(a.element), c = !1)
        }, a);
        z(b, "remove", function (a) {
            c || (c = !0, this.Hb(a.element), c = !1)
        }, a);
        a.i = b
    }

    k.clear = function (a) {
        if (a) {
            for (var b in this.v)this.v[b].forEach(Hc);
            this.i || (this.v = {}, this.l = {}, this.o = {})
        } else if (this.a) {
            this.a.forEach(this.Xg, this);
            for (var c in this.f)this.Xg(this.f[c])
        }
        this.i && this.i.clear();
        this.a && this.a.clear();
        this.T.clear();
        this.f = {};
        this.b(new Ys("clear"));
        this.u()
    };
    k.Jh = function (a, b) {
        if (this.a)return this.a.forEach(a, b);
        if (this.i)return this.i.forEach(a, b)
    };
    function Zs(a, b, c) {
        a.ac([b[0], b[1], b[0], b[1]], function (a) {
            if (a.W().xb(b))return c.call(void 0, a)
        })
    }

    k.ac = function (a, b, c) {
        if (this.a)return Ts(this.a, a, b, c);
        if (this.i)return this.i.forEach(b, c)
    };
    k.Kh = function (a, b, c) {
        return this.ac(a, function (d) {
            if (d.W().Ya(a) && (d = b.call(c, d)))return d
        })
    };
    k.Rh = function () {
        return this.i
    };
    k.ge = function () {
        if (this.i)var a = this.i.a; else this.a && (a = Qs(this.a), wb(this.f) || ja(a, vb(this.f)));
        return a
    };
    k.Qh = function (a) {
        var b = [];
        Zs(this, a, function (a) {
            b.push(a)
        });
        return b
    };
    k.$f = function (a) {
        return Rs(this.a, a)
    };
    k.Mh = function (a, b) {
        var c = a[0], d = a[1], e = null, f = [NaN, NaN], g = Infinity, h = [-Infinity, -Infinity, Infinity, Infinity],
            l = b ? b : Qe;
        Ts(this.a, h, function (a) {
            if (l(a)) {
                var b = a.W(), m = g;
                g = b.Lb(c, d, f, g);
                g < m && (e = a, a = Math.sqrt(g), h[0] = c - a, h[1] = d - a, h[2] = c + a, h[3] = d + a)
            }
        });
        return e
    };
    k.G = function (a) {
        return this.a.G(a)
    };
    k.Ph = function (a) {
        a = this.l[a.toString()];
        return void 0 !== a ? a : null
    };
    k.$i = function () {
        return this.B
    };
    k.aj = function () {
        return this.I
    };
    k.bj = function (a) {
        a = a.target;
        var b = w(a).toString(), c = a.W();
        c ? (c = c.G(), b in this.f ? (delete this.f[b], this.a && this.a.Ea(c, a)) : this.a && Ps(this.a, c, a)) : b in this.f || (this.a && this.a.remove(a), this.f[b] = a);
        c = a.c;
        void 0 !== c ? (c = c.toString(), b in this.o ? (delete this.o[b], this.l[c] = a) : this.l[c] !== a && ($s(this, a), this.l[c] = a)) : b in this.o || ($s(this, a), this.o[b] = a);
        this.u();
        this.b(new Ys("changefeature", a))
    };
    k.de = function (a, b, c) {
        var d = this.T;
        a = this.fa(a, b);
        var e;
        var f = 0;
        for (e = a.length; f < e; ++f) {
            var g = a[f];
            Ts(d, g, function (a) {
                return Wa(a.extent, g)
            }) || (this.s.call(this, g, b, c), d.Ea(g, {extent: g.slice()}))
        }
    };
    k.Hb = function (a) {
        var b = w(a).toString();
        b in this.f ? delete this.f[b] : this.a && this.a.remove(a);
        this.Xg(a);
        this.u()
    };
    k.Xg = function (a) {
        var b = w(a).toString();
        this.v[b].forEach(Hc);
        delete this.v[b];
        var c = a.c;
        void 0 !== c ? delete this.l[c.toString()] : delete this.o[b];
        this.b(new Ys("removefeature", a))
    };
    function $s(a, b) {
        for (var c in a.l)if (a.l[c] === b) {
            delete a.l[c];
            break
        }
    }

    k.cj = function (a) {
        this.s = a
    };
    function Ys(a, b) {
        Rc.call(this, a);
        this.feature = b
    }

    v(Ys, Rc);
    function at(a) {
        Ug.call(this, {handleDownEvent: bt, handleEvent: ct, handleUpEvent: dt});
        this.U = !1;
        this.fa = null;
        this.s = !1;
        this.Kb = a.source ? a.source : null;
        this.ab = a.features ? a.features : null;
        this.Ik = a.snapTolerance ? a.snapTolerance : 12;
        this.T = a.type;
        this.f = et(this.T);
        this.Va = a.minPoints ? a.minPoints : this.f === ft ? 3 : 2;
        this.ta = a.maxPoints ? a.maxPoints : Infinity;
        this.Kd = a.finishCondition ? a.finishCondition : Qe;
        var b = a.geometryFunction;
        if (!b)if ("Circle" === this.T) b = function (a, b) {
            b = b ? b : new fs([NaN, NaN]);
            b.gh(a[0], Math.sqrt(He(a[0],
                a[1])));
            return b
        }; else {
            var c, d = this.f;
            d === gt ? c = C : d === ht ? c = L : d === ft && (c = D);
            b = function (a, b) {
                b ? d === ft ? b.na([a[0].concat([a[0][0]])]) : b.na(a) : b = new c(a);
                return b
            }
        }
        this.Za = b;
        this.I = this.D = this.a = this.B = this.j = this.o = null;
        this.gd = a.clickTolerance ? a.clickTolerance * a.clickTolerance : 36;
        this.ia = new Q({
            source: new R({useSpatialIndex: !1, wrapX: a.wrapX ? a.wrapX : !1}),
            style: a.style ? a.style : it()
        });
        this.tb = a.geometryName;
        this.Hk = a.condition ? a.condition : Pg;
        this.Jf = a.freehand ? Qe : a.freehandCondition ? a.freehandCondition :
            Qg;
        z(this, Yc("active"), this.Ii, this)
    }

    v(at, Ug);
    function it() {
        var a = Kk();
        return function (b) {
            return a[b.W().S()]
        }
    }

    k = at.prototype;
    k.setMap = function (a) {
        Ug.prototype.setMap.call(this, a);
        this.Ii()
    };
    function ct(a) {
        this.s = this.f !== gt && this.Jf(a);
        var b = !0;
        this.s && "pointerdrag" === a.type && null !== this.j ? (jt(this, a), b = !1) : this.s && "pointerdown" === a.type ? b = !1 : "pointermove" === a.type ? b = kt(this, a) : "dblclick" === a.type && (b = !1);
        return Vg.call(this, a) && b
    }

    function bt(a) {
        this.U = !this.s;
        return this.s ? (this.fa = a.pixel, this.o || lt(this, a), !0) : this.Hk(a) ? (this.fa = a.pixel, !0) : !1
    }

    function dt(a) {
        var b = !0;
        kt(this, a);
        var c = this.f === mt;
        this.U ? (this.o ? this.s || c ? this.Ud() : nt(this, a) ? this.Kd(a) && this.Ud() : jt(this, a) : (lt(this, a), this.f === gt && this.Ud()), b = !1) : this.s && (this.o = null, ot(this));
        return b
    }

    function kt(a, b) {
        if (a.fa && (!a.s && a.U || a.s && !a.U)) {
            var c = a.fa, d = b.pixel, e = c[0] - d[0];
            c = c[1] - d[1];
            e = e * e + c * c;
            a.U = a.s ? e > a.gd : e <= a.gd
        }
        a.o ? (e = b.coordinate, c = a.j.W(), a.f === gt ? d = a.a : a.f === ft ? (d = a.a[0], d = d[d.length - 1], nt(a, b) && (e = a.o.slice())) : (d = a.a, d = d[d.length - 1]), d[0] = e[0], d[1] = e[1], a.Za(a.a, c), a.B && a.B.W().na(e), c instanceof D && a.f !== ft ? (a.D || (a.D = new Lk(new L(null))), e = c.Th(0), b = a.D.W(), b.aa(e.ka, e.ca())) : a.I && (b = a.D.W(), b.na(a.I)), pt(a)) : (b = b.coordinate.slice(), a.B ? a.B.W().na(b) : (a.B = new Lk(new C(b)),
            pt(a)));
        return !0
    }

    function nt(a, b) {
        var c = !1;
        if (a.j) {
            var d = !1, e = [a.o];
            a.f === ht ? d = a.a.length > a.Va : a.f === ft && (d = a.a[0].length > a.Va, e = [a.a[0][0], a.a[0][a.a[0].length - 2]]);
            if (d) {
                d = b.map;
                for (var f = 0, g = e.length; f < g; f++) {
                    var h = e[f], l = d.Ha(h), m = b.pixel;
                    c = m[0] - l[0];
                    l = m[1] - l[1];
                    if (c = Math.sqrt(c * c + l * l) <= (a.s ? 1 : a.Ik)) {
                        a.o = h;
                        break
                    }
                }
            }
        }
        return c
    }

    function lt(a, b) {
        b = b.coordinate;
        a.o = b;
        a.f === gt ? a.a = b.slice() : a.f === ft ? (a.a = [[b.slice(), b.slice()]], a.I = a.a[0]) : (a.a = [b.slice(), b.slice()], a.f === mt && (a.I = a.a));
        a.I && (a.D = new Lk(new L(a.I)));
        b = a.Za(a.a);
        a.j = new Lk;
        a.tb && a.j.Yc(a.tb);
        a.j.Sa(b);
        pt(a);
        a.b(new qt("drawstart", a.j))
    }

    function jt(a, b) {
        b = b.coordinate;
        var c = a.j.W(), d;
        if (a.f === ht) {
            a.o = b.slice();
            var e = a.a;
            e.length >= a.ta && (a.s ? e.pop() : d = !0);
            e.push(b.slice());
            a.Za(e, c)
        } else a.f === ft && (e = a.a[0], e.length >= a.ta && (a.s ? e.pop() : d = !0), e.push(b.slice()), d && (a.o = e[0]), a.Za(a.a, c));
        pt(a);
        d && a.Ud()
    }

    k.Vp = function () {
        if (this.j) {
            var a = this.j.W();
            if (this.f === ht) {
                var b = this.a;
                b.splice(-2, 1);
                this.Za(b, a);
                2 <= b.length && (this.o = b[b.length - 2].slice())
            } else if (this.f === ft) {
                b = this.a[0];
                b.splice(-2, 1);
                var c = this.D.W();
                c.na(b);
                this.Za(this.a, a)
            }
            0 === b.length && (this.o = null);
            pt(this)
        }
    };
    k.Ud = function () {
        var a = ot(this), b = this.a, c = a.W();
        this.f === ht ? (b.pop(), this.Za(b, c)) : this.f === ft && (b[0].pop(), this.Za(b, c), b = c.V());
        "MultiPoint" === this.T ? a.Sa(new rl([b])) : "MultiLineString" === this.T ? a.Sa(new M([b])) : "MultiPolygon" === this.T && a.Sa(new O([b]));
        this.b(new qt("drawend", a));
        this.ab && this.ab.push(a);
        this.Kb && this.Kb.Db(a)
    };
    function ot(a) {
        a.o = null;
        var b = a.j;
        b && (a.j = null, a.B = null, a.D = null, a.ia.ja().clear(!0));
        return b
    }

    k.Gn = function (a) {
        var b = a.W();
        this.j = a;
        this.a = b.V();
        a = this.a[this.a.length - 1];
        this.o = a.slice();
        this.a.push(a.slice());
        pt(this);
        this.b(new qt("drawstart", this.j))
    };
    k.bd = Re;
    function pt(a) {
        var b = [];
        a.j && b.push(a.j);
        a.D && b.push(a.D);
        a.B && b.push(a.B);
        a = a.ia.ja();
        a.clear(!0);
        a.Hc(b)
    }

    k.Ii = function () {
        var a = this.v, b = this.c();
        a && b || ot(this);
        this.ia.setMap(b ? a : null)
    };
    function et(a) {
        var b;
        "Point" === a || "MultiPoint" === a ? b = gt : "LineString" === a || "MultiLineString" === a ? b = ht : "Polygon" === a || "MultiPolygon" === a ? b = ft : "Circle" === a && (b = mt);
        return b
    }

    var gt = "Point", ht = "LineString", ft = "Polygon", mt = "Circle";

    function qt(a, b) {
        Rc.call(this, a);
        this.feature = b
    }

    v(qt, Rc);
    function rt(a) {
        this.a = this.j = null;
        this.D = !1;
        this.B = this.o = null;
        a || (a = {});
        Ug.call(this, {handleDownEvent: st, handleDragEvent: tt, handleEvent: ut, handleUpEvent: vt});
        this.s = new Q({
            source: new R({useSpatialIndex: !1, wrapX: !!a.wrapX}),
            style: a.boxStyle ? a.boxStyle : wt(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        this.I = new Q({
            source: new R({useSpatialIndex: !1, wrapX: !!a.wrapX}),
            style: a.pointerStyle ? a.pointerStyle : xt(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        a.extent && this.f(a.extent)
    }

    v(rt, Ug);
    function ut(a) {
        if (!(a instanceof Ed))return !0;
        if ("pointermove" == a.type && !this.C) {
            var b = a.pixel, c = a.map, d = yt(this, b, c);
            d || (d = c.Na(b));
            zt(this, d)
        }
        Vg.call(this, a);
        return !1
    }

    function st(a) {
        function b(a) {
            var b = null, c = null;
            a[0] == e[0] ? b = e[2] : a[0] == e[2] && (b = e[0]);
            a[1] == e[1] ? c = e[3] : a[1] == e[3] && (c = e[1]);
            return null !== b && null !== c ? [b, c] : null
        }

        var c = a.pixel, d = a.map, e = this.G();
        (a = yt(this, c, d)) && e ? (c = a[0] == e[0] || a[0] == e[2] ? a[0] : null, d = a[1] == e[1] || a[1] == e[3] ? a[1] : null, null !== c && null !== d ? this.a = At(b(a)) : null !== c ? this.a = Bt(b([c, e[1]]), b([c, e[3]])) : null !== d && (this.a = Bt(b([e[0], d]), b([e[2], d])))) : (a = d.Na(c), this.f([a[0], a[1], a[0], a[1]]), this.a = At(a));
        return !0
    }

    function tt(a) {
        this.a && (a = a.coordinate, this.f(this.a(a)), zt(this, a));
        return !0
    }

    function vt() {
        this.a = null;
        var a = this.G();
        a && 0 !== jb(a) || this.f(null);
        return !1
    }

    function wt() {
        var a = Kk();
        return function () {
            return a.Polygon
        }
    }

    function xt() {
        var a = Kk();
        return function () {
            return a.Point
        }
    }

    function At(a) {
        return function (b) {
            return Oa([a, b])
        }
    }

    function Bt(a, b) {
        return a[0] == b[0] ? function (c) {
            return Oa([a, [c[0], b[1]]])
        } : a[1] == b[1] ? function (c) {
            return Oa([a, [b[0], c[1]]])
        } : null
    }

    function yt(a, b, c) {
        function d(a, b) {
            return Ke(e, a) - Ke(e, b)
        }

        var e = c.Na(b), f = a.G();
        if (f) {
            f = [[[f[0], f[1]], [f[0], f[3]]], [[f[0], f[3]], [f[2], f[3]]], [[f[2], f[3]], [f[2], f[1]]], [[f[2], f[1]], [f[0], f[1]]]];
            f.sort(d);
            f = f[0];
            var g = Be(e, f), h = c.Ha(g);
            if (10 >= Ie(b, h))return b = c.Ha(f[0]), c = c.Ha(f[1]), b = He(h, b), c = He(h, c), a.D = 10 >= Math.sqrt(Math.min(b, c)), a.D && (g = b > c ? f[1] : f[0]), g
        }
        return null
    }

    function zt(a, b) {
        var c = a.B;
        c ? c.W().na(b) : (c = new Lk(new C(b)), a.B = c, a.I.ja().Db(c))
    }

    rt.prototype.setMap = function (a) {
        this.s.setMap(a);
        this.I.setMap(a);
        Ug.prototype.setMap.call(this, a)
    };
    rt.prototype.G = function () {
        return this.j
    };
    rt.prototype.f = function (a) {
        this.j = a ? a : null;
        var b = this.o;
        b ? a ? b.Sa(Sf(a)) : b.Sa(void 0) : (this.o = b = a ? new Lk(Sf(a)) : new Lk({}), this.s.ja().Db(b));
        this.b(new Ct(this.j))
    };
    function Ct(a) {
        Rc.call(this, "extentchanged");
        this.extent = a
    }

    v(Ct, Rc);
    function Dt(a) {
        Ug.call(this, {handleDownEvent: Et, handleDragEvent: Ft, handleEvent: Gt, handleUpEvent: Ht});
        this.Kd = a.condition ? a.condition : Tg;
        this.tb = function (a) {
            return Kg(a) && Og(a)
        };
        this.Kb = a.deleteCondition ? a.deleteCondition : this.tb;
        this.gd = a.insertVertexCondition ? a.insertVertexCondition : Qe;
        this.ab = this.f = null;
        this.Va = [0, 0];
        this.D = this.I = !1;
        this.a = new Os;
        this.ia = void 0 !== a.pixelTolerance ? a.pixelTolerance : 10;
        this.o = this.ta = !1;
        this.j = [];
        this.B = new Q({
            source: new R({useSpatialIndex: !1, wrapX: !!a.wrapX}), style: a.style ?
                a.style : It(), updateWhileAnimating: !0, updateWhileInteracting: !0
        });
        this.fa = {
            Point: this.On,
            LineString: this.Ki,
            LinearRing: this.Ki,
            Polygon: this.Pn,
            MultiPoint: this.Mn,
            MultiLineString: this.Ln,
            MultiPolygon: this.Nn,
            Circle: this.Jn,
            GeometryCollection: this.Kn
        };
        this.U = null;
        a.source ? (this.U = a.source, a = new ad(this.U.ge()), z(this.U, "addfeature", this.cm, this), z(this.U, "removefeature", this.em, this)) : a = a.features;
        if (!a)throw Error("The modify interaction requires features or a source");
        this.s = a;
        this.s.forEach(this.xg,
            this);
        z(this.s, "add", this.Hn, this);
        z(this.s, "remove", this.In, this);
        this.T = null
    }

    v(Dt, Ug);
    k = Dt.prototype;
    k.xg = function (a) {
        var b = a.W();
        b && b.S() in this.fa && this.fa[b.S()].call(this, a, b);
        (b = this.v) && b.c && this.c() && Jt(this, this.Va, b);
        z(a, "change", this.Ji, this)
    };
    function Kt(a, b) {
        a.D || (a.D = !0, a.b(new Lt("modifystart", a.s, b)))
    }

    function Mt(a, b) {
        Nt(a, b);
        a.f && 0 === a.s.fc() && (a.B.ja().Hb(a.f), a.f = null);
        Nc(b, "change", a.Ji, a)
    }

    function Nt(a, b) {
        a = a.a;
        var c = [];
        a.forEach(function (a) {
            b === a.feature && c.push(a)
        });
        for (var d = c.length - 1; 0 <= d; --d)a.remove(c[d])
    }

    k.Ga = function (a) {
        this.f && !a && (this.B.ja().Hb(this.f), this.f = null);
        Ug.prototype.Ga.call(this, a)
    };
    k.setMap = function (a) {
        this.B.setMap(a);
        Ug.prototype.setMap.call(this, a)
    };
    k.cm = function (a) {
        a.feature && this.s.push(a.feature)
    };
    k.em = function (a) {
        a.feature && this.s.remove(a.feature)
    };
    k.Hn = function (a) {
        this.xg(a.element)
    };
    k.Ji = function (a) {
        this.o || (a = a.target, Mt(this, a), this.xg(a))
    };
    k.In = function (a) {
        Mt(this, a.element)
    };
    k.On = function (a, b) {
        var c = b.V();
        a = {feature: a, geometry: b, ma: [c, c]};
        this.a.Ea(b.G(), a)
    };
    k.Mn = function (a, b) {
        var c = b.V(), d;
        var e = 0;
        for (d = c.length; e < d; ++e) {
            var f = c[e];
            f = {feature: a, geometry: b, depth: [e], index: e, ma: [f, f]};
            this.a.Ea(b.G(), f)
        }
    };
    k.Ki = function (a, b) {
        var c = b.V(), d;
        var e = 0;
        for (d = c.length - 1; e < d; ++e) {
            var f = c.slice(e, e + 2);
            var g = {feature: a, geometry: b, index: e, ma: f};
            this.a.Ea(Oa(f), g)
        }
    };
    k.Ln = function (a, b) {
        var c = b.V(), d, e;
        var f = 0;
        for (e = c.length; f < e; ++f) {
            var g = c[f];
            var h = 0;
            for (d = g.length - 1; h < d; ++h) {
                var l = g.slice(h, h + 2);
                var m = {feature: a, geometry: b, depth: [f], index: h, ma: l};
                this.a.Ea(Oa(l), m)
            }
        }
    };
    k.Pn = function (a, b) {
        var c = b.V(), d, e;
        var f = 0;
        for (e = c.length; f < e; ++f) {
            var g = c[f];
            var h = 0;
            for (d = g.length - 1; h < d; ++h) {
                var l = g.slice(h, h + 2);
                var m = {feature: a, geometry: b, depth: [f], index: h, ma: l};
                this.a.Ea(Oa(l), m)
            }
        }
    };
    k.Nn = function (a, b) {
        var c = b.V(), d, e, f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = c[g];
            var l = 0;
            for (e = h.length; l < e; ++l) {
                var m = h[l];
                var n = 0;
                for (d = m.length - 1; n < d; ++n) {
                    var p = m.slice(n, n + 2);
                    var q = {feature: a, geometry: b, depth: [l, g], index: n, ma: p};
                    this.a.Ea(Oa(p), q)
                }
            }
        }
    };
    k.Jn = function (a, b) {
        var c = b.wa(), d = {feature: a, geometry: b, index: 0, ma: [c, c]};
        a = {feature: a, geometry: b, index: 1, ma: [c, c]};
        d.Uf = a.Uf = [d, a];
        this.a.Ea($a(c), d);
        this.a.Ea(b.G(), a)
    };
    k.Kn = function (a, b) {
        var c = b.a;
        for (b = 0; b < c.length; ++b)this.fa[c[b].S()].call(this, a, c[b])
    };
    function Ot(a, b) {
        var c = a.f;
        c ? c.W().na(b) : (c = new Lk(new C(b)), a.f = c, a.B.ja().Db(c))
    }

    function Pt(a, b) {
        return a.index - b.index
    }

    function Et(a) {
        if (!this.Kd(a))return !1;
        Jt(this, a.pixel, a.map);
        var b = a.map.Na(a.pixel);
        this.j.length = 0;
        this.D = !1;
        var c = this.f;
        if (c) {
            var d = [];
            c = c.W().V();
            var e = Oa([c]);
            e = Rs(this.a, e);
            var f = {};
            e.sort(Pt);
            for (var g = 0, h = e.length; g < h; ++g) {
                var l = e[g], m = l.ma, n = w(l.feature), p = l.depth;
                p && (n += "-" + p.join("-"));
                f[n] || (f[n] = Array(2));
                if ("Circle" === l.geometry.S() && 1 === l.index) m = Qt(b, l), Ee(m, c) && !f[n][0] && (this.j.push([l, 0]), f[n][0] = l); else if (Ee(m[0], c) && !f[n][0]) this.j.push([l, 0]), f[n][0] = l; else if (Ee(m[1], c) &&
                    !f[n][1]) {
                    if ("LineString" !== l.geometry.S() && "MultiLineString" !== l.geometry.S() || !f[n][0] || 0 !== f[n][0].index) this.j.push([l, 1]), f[n][1] = l
                } else this.gd(a) && w(m) in this.ab && !f[n][0] && !f[n][1] && d.push([l, c])
            }
            d.length && Kt(this, a);
            for (a = d.length - 1; 0 <= a; --a)this.lm.apply(this, d[a])
        }
        return !!this.f
    }

    function Ft(a) {
        this.I = !1;
        Kt(this, a);
        a = a.coordinate;
        for (var b = 0, c = this.j.length; b < c; ++b) {
            var d = this.j[b], e = d[0], f = e.depth, g = e.geometry, h = e.ma;
            for (d = d[1]; a.length < g.oa();)a.push(h[d][a.length]);
            switch (g.S()) {
                case "Point":
                    var l = a;
                    h[0] = h[1] = a;
                    break;
                case "MultiPoint":
                    l = g.V();
                    l[e.index] = a;
                    h[0] = h[1] = a;
                    break;
                case "LineString":
                    l = g.V();
                    l[e.index + d] = a;
                    h[d] = a;
                    break;
                case "MultiLineString":
                    l = g.V();
                    l[f[0]][e.index + d] = a;
                    h[d] = a;
                    break;
                case "Polygon":
                    l = g.V();
                    l[f[0]][e.index + d] = a;
                    h[d] = a;
                    break;
                case "MultiPolygon":
                    l = g.V();
                    l[f[1]][f[0]][e.index + d] = a;
                    h[d] = a;
                    break;
                case "Circle":
                    h[0] = h[1] = a, 0 === e.index ? (this.o = !0, g.rb(a)) : (this.o = !0, g.Zc(Ie(g.wa(), a))), this.o = !1
            }
            l && (e = g, f = l, this.o = !0, e.na(f), this.o = !1)
        }
        Ot(this, a)
    }

    function Ht(a) {
        for (var b, c, d = this.j.length - 1; 0 <= d; --d)if (b = this.j[d][0], c = b.geometry, "Circle" === c.S()) {
            var e = c.wa(), f = b.Uf[0];
            b = b.Uf[1];
            f.ma[0] = f.ma[1] = e;
            b.ma[0] = b.ma[1] = e;
            Ps(this.a, $a(e), f);
            Ps(this.a, c.G(), b)
        } else Ps(this.a, Oa(b.ma), b);
        this.D && (this.b(new Lt("modifyend", this.s, a)), this.D = !1);
        return !1
    }

    function Gt(a) {
        if (!(a instanceof Ed))return !0;
        this.T = a;
        var b;
        Zf(a.map.$())[1] || "pointermove" != a.type || this.C || (this.Va = a.pixel, Jt(this, a.pixel, a.map));
        this.f && this.Kb(a) && (b = "singleclick" == a.type && this.I ? !0 : this.wj());
        "singleclick" == a.type && (this.I = !1);
        return Vg.call(this, a) && !b
    }

    function Jt(a, b, c) {
        function d(a, b) {
            return Rt(e, a) - Rt(e, b)
        }

        var e = c.Na(b), f = Ra($a(e), c.$().Oa() * a.ia);
        f = Rs(a.a, f);
        if (0 < f.length) {
            f.sort(d);
            var g = f[0], h = g.ma, l = Qt(e, g), m = c.Ha(l), n = Ie(b, m);
            if (n <= a.ia) {
                b = {};
                if ("Circle" === g.geometry.S() && 1 === g.index) a.ta = !0, Ot(a, l); else for (n = c.Ha(h[0]), g = c.Ha(h[1]), c = He(m, n), m = He(m, g), n = Math.sqrt(Math.min(c, m)), a.ta = n <= a.ia, a.ta && (l = c > m ? h[1] : h[0]), Ot(a, l), m = 1, c = f.length; m < c; ++m)if (l = f[m].ma, Ee(h[0], l[0]) && Ee(h[1], l[1]) || Ee(h[0], l[1]) && Ee(h[1], l[0])) b[w(l)] = !0; else break;
                b[w(h)] = !0;
                a.ab = b;
                return
            }
        }
        a.f && (a.B.ja().Hb(a.f), a.f = null)
    }

    function Rt(a, b) {
        var c = b.geometry;
        return "Circle" === c.S() && 1 === b.index ? (a = He(c.wa(), a), c = Math.sqrt(a) - c.xd(), c * c) : Ke(a, b.ma)
    }

    function Qt(a, b) {
        var c = b.geometry;
        return "Circle" === c.S() && 1 === b.index ? c.Fb(a) : Be(a, b.ma)
    }

    k.lm = function (a, b) {
        for (var c = a.ma, d = a.feature, e = a.geometry, f = a.depth, g = a.index, h; b.length < e.oa();)b.push(0);
        switch (e.S()) {
            case "MultiLineString":
                h = e.V();
                h[f[0]].splice(g + 1, 0, b);
                break;
            case "Polygon":
                h = e.V();
                h[f[0]].splice(g + 1, 0, b);
                break;
            case "MultiPolygon":
                h = e.V();
                h[f[1]][f[0]].splice(g + 1, 0, b);
                break;
            case "LineString":
                h = e.V();
                h.splice(g + 1, 0, b);
                break;
            default:
                return
        }
        this.o = !0;
        e.na(h);
        this.o = !1;
        h = this.a;
        h.remove(a);
        St(this, e, g, f, 1);
        a = {ma: [c[0], b], feature: d, geometry: e, depth: f, index: g};
        h.Ea(Oa(a.ma), a);
        this.j.push([a, 1]);
        b = {ma: [b, c[1]], feature: d, geometry: e, depth: f, index: g + 1};
        h.Ea(Oa(b.ma), b);
        this.j.push([b, 0]);
        this.I = !0
    };
    k.wj = function () {
        if (this.T && "pointerdrag" != this.T.type) {
            var a = this.T;
            Kt(this, a);
            var b = this.j, c = {}, d, e;
            for (e = b.length - 1; 0 <= e; --e) {
                var f = b[e];
                var g = f[0];
                var h = w(g.feature);
                g.depth && (h += "-" + g.depth.join("-"));
                h in c || (c[h] = {});
                0 === f[1] ? (c[h].right = g, c[h].index = g.index) : 1 == f[1] && (c[h].left = g, c[h].index = g.index + 1)
            }
            for (h in c) {
                var l = c[h].right;
                var m = c[h].left;
                e = c[h].index;
                var n = e - 1;
                g = void 0 !== m ? m : l;
                0 > n && (n = 0);
                f = g.geometry;
                var p = d = f.V();
                var q = !1;
                switch (f.S()) {
                    case "MultiLineString":
                        2 < d[g.depth[0]].length &&
                        (d[g.depth[0]].splice(e, 1), q = !0);
                        break;
                    case "LineString":
                        2 < d.length && (d.splice(e, 1), q = !0);
                        break;
                    case "MultiPolygon":
                        p = p[g.depth[1]];
                    case "Polygon":
                        p = p[g.depth[0]], 4 < p.length && (e == p.length - 1 && (e = 0), p.splice(e, 1), q = !0, 0 === e && (p.pop(), p.push(p[0]), n = p.length - 1))
                }
                q && (q = f, this.o = !0, q.na(d), this.o = !1, d = [], void 0 !== m && (this.a.remove(m), d.push(m.ma[0])), void 0 !== l && (this.a.remove(l), d.push(l.ma[1])), void 0 !== m && void 0 !== l && (m = {
                    depth: g.depth,
                    feature: g.feature,
                    geometry: g.geometry,
                    index: n,
                    ma: d
                }, this.a.Ea(Oa(m.ma),
                    m)), St(this, f, e, g.depth, -1), this.f && (this.B.ja().Hb(this.f), this.f = null), b.length = 0)
            }
            this.b(new Lt("modifyend", this.s, a));
            this.D = !1;
            return !0
        }
        return !1
    };
    function St(a, b, c, d, e) {
        Ts(a.a, b.G(), function (a) {
            a.geometry === b && (void 0 === d || void 0 === a.depth || ma(a.depth, d)) && a.index > c && (a.index += e)
        })
    }

    function It() {
        var a = Kk();
        return function () {
            return a.Point
        }
    }

    function Lt(a, b, c) {
        Rc.call(this, a);
        this.features = b;
        this.mapBrowserEvent = c
    }

    v(Lt, Rc);
    function Tt(a) {
        Eg.call(this, {handleEvent: Ut});
        a = a ? a : {};
        this.D = a.condition ? a.condition : Og;
        this.C = a.addCondition ? a.addCondition : Re;
        this.B = a.removeCondition ? a.removeCondition : Re;
        this.I = a.toggleCondition ? a.toggleCondition : Qg;
        this.o = a.multi ? a.multi : !1;
        this.l = a.filter ? a.filter : Qe;
        this.j = a.hitTolerance ? a.hitTolerance : 0;
        this.f = new Q({
            source: new R({useSpatialIndex: !1, features: a.features, wrapX: a.wrapX}),
            style: a.style ? a.style : Vt(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        if (a.layers)if ("function" ===
            typeof a.layers) a = a.layers; else {
            var b = a.layers;
            a = function (a) {
                return ha(b, a)
            }
        } else a = Qe;
        this.s = a;
        this.a = {};
        a = this.f.ja().i;
        z(a, "add", this.Qn, this);
        z(a, "remove", this.Un, this)
    }

    v(Tt, Eg);
    k = Tt.prototype;
    k.Rn = function () {
        return this.f.ja().i
    };
    k.Sn = function () {
        return this.j
    };
    k.Tn = function (a) {
        a = w(a);
        return this.a[a]
    };
    function Ut(a) {
        if (!this.D(a))return !0;
        var b = this.C(a), c = this.B(a), d = this.I(a), e = !b && !c && !d, f = a.map, g = this.f.ja().i, h = [],
            l = [];
        if (e) {
            ub(this.a);
            f.Lc(a.pixel, function (a, b) {
                if (this.l(a, b))return l.push(a), a = w(a), this.a[a] = b, !this.o
            }.bind(this), {layerFilter: this.s, hitTolerance: this.j});
            for (e = g.fc() - 1; 0 <= e; --e) {
                f = g.item(e);
                var m = l.indexOf(f);
                -1 < m ? l.splice(m, 1) : (g.remove(f), h.push(f))
            }
            0 !== l.length && g.qg(l)
        } else {
            f.Lc(a.pixel, function (a, e) {
                if (this.l(a, e))return !b && !d || ha(g.a, a) ? (c || d) && ha(g.a, a) && (h.push(a),
                        e = w(a), delete this.a[e]) : (l.push(a), a = w(a), this.a[a] = e), !this.o
            }.bind(this), {layerFilter: this.s, hitTolerance: this.j});
            for (e = h.length - 1; 0 <= e; --e)g.remove(h[e]);
            g.qg(l)
        }
        (0 < l.length || 0 < h.length) && this.b(new Wt(Xt, l, h, a));
        return Ng(a)
    }

    k.Vn = function (a) {
        this.j = a
    };
    k.setMap = function (a) {
        var b = this.v, c = this.f.ja().i;
        b && c.forEach(b.Sj, b);
        Eg.prototype.setMap.call(this, a);
        this.f.setMap(a);
        a && c.forEach(a.Nj, a)
    };
    function Vt() {
        var a = Kk();
        ja(a.Polygon, a.LineString);
        ja(a.GeometryCollection, a.LineString);
        return function (b) {
            return b.W() ? a[b.W().S()] : null
        }
    }

    k.Qn = function (a) {
        var b = this.v;
        b && b.Nj(a.element)
    };
    k.Un = function (a) {
        var b = this.v;
        b && b.Sj(a.element)
    };
    function Wt(a, b, c, d) {
        Rc.call(this, a);
        this.selected = b;
        this.deselected = c;
        this.mapBrowserEvent = d
    }

    v(Wt, Rc);
    var Xt = "select";

    function Yt(a) {
        Ug.call(this, {handleEvent: Zt, handleDownEvent: Qe, handleUpEvent: $t});
        a = a ? a : {};
        this.o = a.source ? a.source : null;
        this.T = void 0 !== a.vertex ? a.vertex : !0;
        this.D = void 0 !== a.edge ? a.edge : !0;
        this.j = a.features ? a.features : null;
        this.ia = [];
        this.B = {};
        this.U = {};
        this.s = {};
        this.I = null;
        this.f = void 0 !== a.pixelTolerance ? a.pixelTolerance : 10;
        this.ta = au.bind(this);
        this.a = new Os;
        this.fa = {
            Point: this.bo,
            LineString: this.Ni,
            LinearRing: this.Ni,
            Polygon: this.co,
            MultiPoint: this.$n,
            MultiLineString: this.Zn,
            MultiPolygon: this.ao,
            GeometryCollection: this.Yn,
            Circle: this.Xn
        }
    }

    v(Yt, Ug);
    k = Yt.prototype;
    k.Db = function (a, b) {
        b = void 0 !== b ? b : !0;
        var c = w(a), d = a.W();
        if (d) {
            var e = this.fa[d.S()];
            e && (this.U[c] = d.G(Pa()), e.call(this, a, d))
        }
        b && (this.B[c] = z(a, "change", this.Wn, this))
    };
    k.Mk = function (a) {
        this.Db(a)
    };
    k.Nk = function (a) {
        this.Hb(a)
    };
    k.Li = function (a) {
        if (a instanceof Ys)var b = a.feature; else a instanceof ed && (b = a.element);
        this.Db(b)
    };
    k.Mi = function (a) {
        if (a instanceof Ys)var b = a.feature; else a instanceof ed && (b = a.element);
        this.Hb(b)
    };
    k.Wn = function (a) {
        a = a.target;
        if (this.C) {
            var b = w(a);
            b in this.s || (this.s[b] = a)
        } else this.Tj(a)
    };
    k.Hb = function (a, b) {
        b = void 0 !== b ? b : !0;
        var c = w(a), d = this.U[c];
        if (d) {
            var e = this.a, f = [];
            Ts(e, d, function (b) {
                a === b.feature && f.push(b)
            });
            for (d = f.length - 1; 0 <= d; --d)e.remove(f[d])
        }
        b && (Hc(this.B[c]), delete this.B[c])
    };
    k.setMap = function (a) {
        var b = this.v, c = this.ia, d;
        this.j ? d = this.j : this.o && (d = this.o.ge());
        b && (c.forEach(Hc), c.length = 0, d.forEach(this.Nk, this));
        Ug.prototype.setMap.call(this, a);
        a && (this.j ? c.push(z(this.j, "add", this.Li, this), z(this.j, "remove", this.Mi, this)) : this.o && c.push(z(this.o, "addfeature", this.Li, this), z(this.o, "removefeature", this.Mi, this)), d.forEach(this.Mk, this))
    };
    k.bd = Re;
    function bu(a, b, c, d) {
        var e = d.Na([b[0] - a.f, b[1] + a.f]), f = d.Na([b[0] + a.f, b[1] - a.f]);
        e = Oa([e, f]);
        var g = Rs(a.a, e);
        a.T && !a.D && (g = g.filter(function (a) {
            return "Circle" !== a.feature.W().S()
        }));
        var h = !1;
        e = !1;
        var l = f = null;
        if (0 < g.length) {
            a.I = c;
            g.sort(a.ta);
            var m = g[0].ma;
            h = "Circle" === g[0].feature.W().S();
            if (a.T && !a.D) {
                if (c = d.Ha(m[0]), h = d.Ha(m[1]), c = He(b, c), b = He(b, h), h = Math.sqrt(Math.min(c, b)), h = h <= a.f) e = !0, f = c > b ? m[1] : m[0], l = d.Ha(f)
            } else a.D && (f = h ? Ae(c, g[0].feature.W()) : Be(c, m), l = d.Ha(f), Ie(b, l) <= a.f && (e = !0, a.T &&
            !h && (c = d.Ha(m[0]), h = d.Ha(m[1]), c = He(l, c), b = He(l, h), h = Math.sqrt(Math.min(c, b)), h = h <= a.f))) && (f = c > b ? m[1] : m[0], l = d.Ha(f));
            e && (l = [Math.round(l[0]), Math.round(l[1])])
        }
        return {rq: e, vertex: f, Aq: l}
    }

    k.Tj = function (a) {
        this.Hb(a, !1);
        this.Db(a, !1)
    };
    k.Xn = function (a, b) {
        b = Tf(b).V()[0];
        var c;
        var d = 0;
        for (c = b.length - 1; d < c; ++d) {
            var e = b.slice(d, d + 2);
            var f = {feature: a, ma: e};
            this.a.Ea(Oa(e), f)
        }
    };
    k.Yn = function (a, b) {
        var c = b.a;
        for (b = 0; b < c.length; ++b) {
            var d = this.fa[c[b].S()];
            d && d.call(this, a, c[b])
        }
    };
    k.Ni = function (a, b) {
        b = b.V();
        var c;
        var d = 0;
        for (c = b.length - 1; d < c; ++d) {
            var e = b.slice(d, d + 2);
            var f = {feature: a, ma: e};
            this.a.Ea(Oa(e), f)
        }
    };
    k.Zn = function (a, b) {
        b = b.V();
        var c, d;
        var e = 0;
        for (d = b.length; e < d; ++e) {
            var f = b[e];
            var g = 0;
            for (c = f.length - 1; g < c; ++g) {
                var h = f.slice(g, g + 2);
                var l = {feature: a, ma: h};
                this.a.Ea(Oa(h), l)
            }
        }
    };
    k.$n = function (a, b) {
        var c = b.V(), d;
        var e = 0;
        for (d = c.length; e < d; ++e) {
            var f = c[e];
            f = {feature: a, ma: [f, f]};
            this.a.Ea(b.G(), f)
        }
    };
    k.ao = function (a, b) {
        b = b.V();
        var c, d, e;
        var f = 0;
        for (e = b.length; f < e; ++f) {
            var g = b[f];
            var h = 0;
            for (d = g.length; h < d; ++h) {
                var l = g[h];
                var m = 0;
                for (c = l.length - 1; m < c; ++m) {
                    var n = l.slice(m, m + 2);
                    var p = {feature: a, ma: n};
                    this.a.Ea(Oa(n), p)
                }
            }
        }
    };
    k.bo = function (a, b) {
        var c = b.V();
        a = {feature: a, ma: [c, c]};
        this.a.Ea(b.G(), a)
    };
    k.co = function (a, b) {
        b = b.V();
        var c, d;
        var e = 0;
        for (d = b.length; e < d; ++e) {
            var f = b[e];
            var g = 0;
            for (c = f.length - 1; g < c; ++g) {
                var h = f.slice(g, g + 2);
                var l = {feature: a, ma: h};
                this.a.Ea(Oa(h), l)
            }
        }
    };
    function Zt(a) {
        var b = bu(this, a.pixel, a.coordinate, a.map);
        b.rq && (a.coordinate = b.vertex.slice(0, 2), a.pixel = b.Aq);
        return Vg.call(this, a)
    }

    function $t() {
        var a = vb(this.s);
        a.length && (a.forEach(this.Tj, this), this.s = {});
        return !1
    }

    function au(a, b) {
        return Ke(this.I, a.ma) - Ke(this.I, b.ma)
    };
    function cu(a) {
        Ug.call(this, {handleDownEvent: du, handleDragEvent: eu, handleMoveEvent: fu, handleUpEvent: gu});
        a = a ? a : {};
        this.a = null;
        this.j = void 0 !== a.features ? a.features : null;
        if (a.layers)if ("function" === typeof a.layers)var b = a.layers; else {
            var c = a.layers;
            b = function (a) {
                return ha(c, a)
            }
        } else b = Qe;
        this.D = b;
        this.o = a.hitTolerance ? a.hitTolerance : 0;
        this.f = null;
        z(this, Yc("active"), this.s, this)
    }

    v(cu, Ug);
    function du(a) {
        this.f = hu(this, a.pixel, a.map);
        if (!this.a && this.f) {
            this.a = a.coordinate;
            fu.call(this, a);
            var b = this.j || new ad([this.f]);
            this.b(new iu("translatestart", b, a.coordinate));
            return !0
        }
        return !1
    }

    function gu(a) {
        if (this.a) {
            this.a = null;
            fu.call(this, a);
            var b = this.j || new ad([this.f]);
            this.b(new iu("translateend", b, a.coordinate));
            return !0
        }
        return !1
    }

    function eu(a) {
        if (this.a) {
            a = a.coordinate;
            var b = a[0] - this.a[0], c = a[1] - this.a[1], d = this.j || new ad([this.f]);
            d.forEach(function (a) {
                var d = a.W();
                d.translate(b, c);
                a.Sa(d)
            });
            this.a = a;
            this.b(new iu("translating", d, a))
        }
    }

    function fu(a) {
        var b = a.map.a;
        hu(this, a.pixel, a.map) ? (b.classList.remove(this.a ? "ol-grab" : "ol-grabbing"), b.classList.add(this.a ? "ol-grabbing" : "ol-grab")) : b.classList.remove("ol-grab", "ol-grabbing")
    }

    function hu(a, b, c) {
        return c.Lc(b, function (a) {
            if (!this.j || ha(this.j.a, a))return a
        }.bind(a), {layerFilter: a.D, hitTolerance: a.o})
    }

    cu.prototype.B = function () {
        return this.o
    };
    cu.prototype.I = function (a) {
        this.o = a
    };
    cu.prototype.setMap = function (a) {
        var b = this.v;
        Ug.prototype.setMap.call(this, a);
        ju(this, b)
    };
    cu.prototype.s = function () {
        ju(this, null)
    };
    function ju(a, b) {
        var c = a.v;
        a = a.c();
        c && a || (c = c || b) && c.a.classList.remove("ol-grab", "ol-grabbing")
    }

    function iu(a, b, c) {
        Rc.call(this, a);
        this.features = b;
        this.coordinate = c
    }

    v(iu, Rc);
    function S(a) {
        a = a ? a : {};
        var b = tb({}, a);
        delete b.gradient;
        delete b.radius;
        delete b.blur;
        delete b.shadow;
        delete b.weight;
        Q.call(this, b);
        this.c = null;
        this.T = void 0 !== a.shadow ? a.shadow : 250;
        this.B = void 0;
        this.v = null;
        z(this, Yc(ku), this.Kl, this);
        this.Ej(a.gradient ? a.gradient : lu);
        this.yj(void 0 !== a.blur ? a.blur : 15);
        this.Zc(void 0 !== a.radius ? a.radius : 8);
        z(this, Yc(mu), this.ng, this);
        z(this, Yc(nu), this.ng, this);
        this.ng();
        var c = a.weight ? a.weight : "weight", d;
        "string" === typeof c ? d = function (a) {
            return a.get(c)
        } : d = c;
        this.j(function (a) {
            a =
                d(a);
            a = void 0 !== a ? Da(a, 0, 1) : 1;
            var b = 255 * a | 0, c = this.v[b];
            c || (c = [new Fk({image: new Hn({opacity: a, src: this.B})})], this.v[b] = c);
            return c
        }.bind(this));
        this.set(Cj, null);
        z(this, "render", this.am, this)
    }

    v(S, Q);
    var lu = ["#00f", "#0ff", "#0f0", "#ff0", "#f00"];
    k = S.prototype;
    k.Lh = function () {
        return this.get(mu)
    };
    k.Sh = function () {
        return this.get(ku)
    };
    k.Pi = function () {
        return this.get(nu)
    };
    k.Kl = function () {
        for (var a = this.Sh(), b = eg(1, 256), c = b.createLinearGradient(0, 0, 1, 256), d = 1 / (a.length - 1), e = 0,
                 f = a.length; e < f; ++e)c.addColorStop(e * d, a[e]);
        b.fillStyle = c;
        b.fillRect(0, 0, 1, 256);
        this.c = b.getImageData(0, 0, 1, 256).data
    };
    k.ng = function () {
        var a = this.Pi(), b = this.Lh(), c = a + b + 1, d = 2 * c;
        d = eg(d, d);
        d.shadowOffsetX = d.shadowOffsetY = this.T;
        d.shadowBlur = b;
        d.shadowColor = "#000";
        d.beginPath();
        b = c - this.T;
        d.arc(b, b, a, 0, 2 * Math.PI, !0);
        d.fill();
        this.B = d.canvas.toDataURL();
        this.v = Array(256);
        this.u()
    };
    k.am = function (a) {
        a = a.context;
        var b = a.canvas;
        b = a.getImageData(0, 0, b.width, b.height);
        var c = b.data, d, e;
        var f = 0;
        for (d = c.length; f < d; f += 4)if (e = 4 * c[f + 3]) c[f] = this.c[e], c[f + 1] = this.c[e + 1], c[f + 2] = this.c[e + 2];
        a.putImageData(b, 0, 0)
    };
    k.yj = function (a) {
        this.set(mu, a)
    };
    k.Ej = function (a) {
        this.set(ku, a)
    };
    k.Zc = function (a) {
        this.set(nu, a)
    };
    var mu = "blur", ku = "gradient", nu = "radius";

    function ou(a) {
        xi.call(this, a ? a : {});
        this.type = "IMAGE"
    }

    v(ou, xi);
    function pu(a) {
        a = a ? a : {};
        var b = tb({}, a);
        delete b.preload;
        delete b.useInterimTilesOnError;
        xi.call(this, b);
        this.j(void 0 !== a.preload ? a.preload : 0);
        this.C(void 0 !== a.useInterimTilesOnError ? a.useInterimTilesOnError : !0);
        this.type = "TILE"
    }

    v(pu, xi);
    pu.prototype.c = function () {
        return this.get("preload")
    };
    pu.prototype.j = function (a) {
        this.set("preload", a)
    };
    pu.prototype.i = function () {
        return this.get("useInterimTilesOnError")
    };
    pu.prototype.C = function (a) {
        this.set("useInterimTilesOnError", a)
    };
    function V(a) {
        a = a ? a : {};
        var b = tb({}, a);
        delete b.preload;
        delete b.useInterimTilesOnError;
        Q.call(this, b);
        this.B(a.preload ? a.preload : 0);
        this.T(a.useInterimTilesOnError ? a.useInterimTilesOnError : !0);
        wa(void 0 == a.renderMode || "image" == a.renderMode || "hybrid" == a.renderMode || "vector" == a.renderMode, 28);
        this.v = a.renderMode || "hybrid";
        this.type = "VECTOR_TILE"
    }

    v(V, Q);
    V.prototype.c = function () {
        return this.get("preload")
    };
    V.prototype.i = function () {
        return this.get("useInterimTilesOnError")
    };
    V.prototype.B = function (a) {
        this.set("preload", a)
    };
    V.prototype.T = function (a) {
        this.set("useInterimTilesOnError", a)
    };
    function qu(a) {
        this.b = a
    };
    function ru(a) {
        this.b = a
    }

    v(ru, qu);
    ru.prototype.S = function () {
        return 35632
    };
    function su(a) {
        this.b = a
    }

    v(su, qu);
    su.prototype.S = function () {
        return 35633
    };
    var tu = new ru("precision mediump float;varying vec2 a;varying vec2 b;varying float c;varying float d;uniform float m;uniform vec4 n;uniform vec4 o;uniform vec2 p;void main(void){vec2 windowCenter=vec2((a.x+1.0)/2.0*p.x*d,(a.y+1.0)/2.0*p.y*d);vec2 windowOffset=vec2((b.x+1.0)/2.0*p.x*d,(b.y+1.0)/2.0*p.y*d);float radius=length(windowCenter-windowOffset);float dist=length(windowCenter-gl_FragCoord.xy);if(dist>radius+c){if(o.a==0.0){gl_FragColor=n;}else{gl_FragColor=o;}gl_FragColor.a=gl_FragColor.a-(dist-(radius+c));}else if(n.a==0.0){gl_FragColor=o;if(dist<radius-c){gl_FragColor.a=gl_FragColor.a-(radius-c-dist);}} else{gl_FragColor=n;float strokeDist=radius-c;float antialias=2.0*d;if(dist>strokeDist){gl_FragColor=o;}else if(dist>=strokeDist-antialias){float step=smoothstep(strokeDist-antialias,strokeDist,dist);gl_FragColor=mix(n,o,step);}} gl_FragColor.a=gl_FragColor.a*m;if(gl_FragColor.a<=0.0){discard;}}"),
        uu = new su("varying vec2 a;varying vec2 b;varying float c;varying float d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;uniform float k;uniform float l;void main(void){mat4 offsetMatrix=i*j;a=vec4(h*vec4(e,0.0,1.0)).xy;d=l;float lineWidth=k*l;c=lineWidth/2.0;if(lineWidth==0.0){lineWidth=2.0*l;}vec2 offset;float radius=g+3.0*l;//Until we get gl_VertexID in WebGL,we store an instruction.if(f==0.0){//Offsetting the edges of the triangle by lineWidth/2 is necessary,however//we should also leave some space for the antialiasing,thus we offset by lineWidth.offset=vec2(-1.0,1.0);}else if(f==1.0){offset=vec2(-1.0,-1.0);}else if(f==2.0){offset=vec2(1.0,-1.0);}else{offset=vec2(1.0,1.0);}gl_Position=h*vec4(e+offset*radius,0.0,1.0)+offsetMatrix*vec4(offset*lineWidth,0.0,0.0);b=vec4(h*vec4(e.x+g,e.y,0.0,1.0)).xy;if(distance(a,b)>20000.0){gl_Position=vec4(a,0.0,1.0);}}");

    function vu(a, b) {
        this.g = a.getUniformLocation(b, "h");
        this.i = a.getUniformLocation(b, "i");
        this.c = a.getUniformLocation(b, "j");
        this.qa = a.getUniformLocation(b, "k");
        this.ra = a.getUniformLocation(b, "l");
        this.a = a.getUniformLocation(b, "m");
        this.D = a.getUniformLocation(b, "n");
        this.T = a.getUniformLocation(b, "o");
        this.I = a.getUniformLocation(b, "p");
        this.b = a.getAttribLocation(b, "e");
        this.j = a.getAttribLocation(b, "f");
        this.O = a.getAttribLocation(b, "g")
    };
    function wu() {
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }

    function xu(a, b) {
        a[0] = b[0];
        a[1] = b[1];
        a[4] = b[2];
        a[5] = b[3];
        a[12] = b[4];
        a[13] = b[5];
        return a
    };
    function yu(a, b) {
        this.origin = nb(b);
        this.tb = Ve();
        this.Va = Ve();
        this.ab = Ve();
        this.U = wu();
        this.b = [];
        this.j = null;
        this.g = [];
        this.i = [];
        this.a = [];
        this.o = null;
        this.f = void 0
    }

    v(yu, Vh);
    yu.prototype.Ka = function (a, b, c, d, e, f, g, h, l, m, n) {
        var p = a.b;
        if (this.f) {
            var q = p.isEnabled(p.STENCIL_TEST);
            var r = p.getParameter(p.STENCIL_FUNC);
            var u = p.getParameter(p.STENCIL_VALUE_MASK);
            var x = p.getParameter(p.STENCIL_REF);
            var B = p.getParameter(p.STENCIL_WRITEMASK);
            var A = p.getParameter(p.STENCIL_FAIL);
            var y = p.getParameter(p.STENCIL_PASS_DEPTH_PASS);
            var N = p.getParameter(p.STENCIL_PASS_DEPTH_FAIL);
            p.enable(p.STENCIL_TEST);
            p.clear(p.STENCIL_BUFFER_BIT);
            p.stencilMask(255);
            p.stencilFunc(p.ALWAYS, 1, 255);
            p.stencilOp(p.KEEP,
                p.KEEP, p.REPLACE);
            this.f.Ka(a, b, c, d, e, f, g, h, l, m, n);
            p.stencilMask(0);
            p.stencilFunc(p.NOTEQUAL, 1, 255)
        }
        zu(a, 34962, this.o);
        zu(a, 34963, this.j);
        f = this.Cf(p, a, e, f);
        var ca = We(this.tb);
        bf(ca, 2 / (c * e[0]), 2 / (c * e[1]));
        af(ca, -d);
        cf(ca, -(b[0] - this.origin[0]), -(b[1] - this.origin[1]));
        b = We(this.ab);
        bf(b, 2 / e[0], 2 / e[1]);
        e = We(this.Va);
        0 !== d && af(e, -d);
        p.uniformMatrix4fv(f.g, !1, xu(this.U, ca));
        p.uniformMatrix4fv(f.i, !1, xu(this.U, b));
        p.uniformMatrix4fv(f.c, !1, xu(this.U, e));
        p.uniform1f(f.a, g);
        if (l) {
            m ? a = this.Ie(p, a, h, l, n) :
                (p.clear(p.COLOR_BUFFER_BIT | p.DEPTH_BUFFER_BIT), this.Td(p, a, h, !0), a = (a = l(null)) ? a : void 0);
            var la = a
        } else this.Td(p, a, h, !1);
        this.Df(p, f);
        this.f && (q || p.disable(p.STENCIL_TEST), p.clear(p.STENCIL_BUFFER_BIT), p.stencilFunc(r, x, u), p.stencilMask(B), p.stencilOp(A, N, y));
        return la
    };
    function Au(a, b, c, d) {
        a.drawElements(4, d - c, b.f ? 5125 : 5123, c * (b.f ? 4 : 2))
    };
    var Bu = [0, 0, 0, 1], Cu = [], Du = [0, 0, 0, 1];

    function Eu(a, b, c, d, e, f) {
        a = (c - a) * (f - b) - (e - a) * (d - b);
        return a <= Fu && a >= -Fu ? void 0 : 0 < a
    }

    var Fu = Number.EPSILON || 2.220446049250313E-16;

    function Gu(a) {
        this.b = void 0 !== a ? a : [];
        this.a = Hu
    }

    var Hu = 35044;

    function Iu(a, b) {
        yu.call(this, 0, b);
        this.v = null;
        this.l = [];
        this.s = [];
        this.O = 0;
        this.c = {fillColor: null, strokeColor: null, lineDash: null, lineDashOffset: void 0, lineWidth: void 0, u: !1}
    }

    v(Iu, yu);
    k = Iu.prototype;
    k.$b = function (a, b) {
        var c = a.xd(), d = a.oa();
        if (c) {
            this.g.push(this.b.length);
            this.i.push(b);
            this.c.u && (this.s.push(this.b.length), this.c.u = !1);
            this.O = c;
            a = a.ca();
            a = Te(a, 0, 2, d, -this.origin[0], -this.origin[1]);
            b = this.a.length;
            c = this.b.length;
            var e = b / 4, f;
            for (f = 0; 2 > f; f += d)this.a[b++] = a[f], this.a[b++] = a[f + 1], this.a[b++] = 0, this.a[b++] = this.O, this.a[b++] = a[f], this.a[b++] = a[f + 1], this.a[b++] = 1, this.a[b++] = this.O, this.a[b++] = a[f], this.a[b++] = a[f + 1], this.a[b++] = 2, this.a[b++] = this.O, this.a[b++] = a[f], this.a[b++] =
                a[f + 1], this.a[b++] = 3, this.a[b++] = this.O, this.b[c++] = e, this.b[c++] = e + 1, this.b[c++] = e + 2, this.b[c++] = e + 2, this.b[c++] = e + 3, this.b[c++] = e, e += 4
        } else this.c.u && (this.l.pop(), this.l.length && (d = this.l[this.l.length - 1], this.c.fillColor = d[0], this.c.strokeColor = d[1], this.c.lineWidth = d[2], this.c.u = !1))
    };
    k.$a = function () {
        this.o = new Gu(this.a);
        this.j = new Gu(this.b);
        this.g.push(this.b.length);
        0 === this.s.length && 0 < this.l.length && (this.l = []);
        this.b = this.a = null
    };
    k.zb = function (a) {
        var b = this.o, c = this.j;
        return function () {
            Ju(a, b);
            Ju(a, c)
        }
    };
    k.Cf = function (a, b, c, d) {
        var e = Ku(b, tu, uu);
        if (this.v)var f = this.v; else this.v = f = new vu(a, e);
        b.Vc(e);
        a.enableVertexAttribArray(f.b);
        a.vertexAttribPointer(f.b, 2, 5126, !1, 16, 0);
        a.enableVertexAttribArray(f.j);
        a.vertexAttribPointer(f.j, 1, 5126, !1, 16, 8);
        a.enableVertexAttribArray(f.O);
        a.vertexAttribPointer(f.O, 1, 5126, !1, 16, 12);
        a.uniform2fv(f.I, c);
        a.uniform1f(f.ra, d);
        return f
    };
    k.Df = function (a, b) {
        a.disableVertexAttribArray(b.b);
        a.disableVertexAttribArray(b.j);
        a.disableVertexAttribArray(b.O)
    };
    k.Td = function (a, b, c) {
        if (wb(c)) {
            var d = this.g[this.g.length - 1];
            for (c = this.s.length - 1; 0 <= c; --c) {
                var e = this.s[c];
                var f = this.l[c];
                a.uniform4fv(this.v.D, f[0]);
                Lu(this, a, f[1], f[2]);
                Au(a, b, e, d);
                d = e
            }
        } else {
            var g = this.g.length - 2;
            f = d = this.g[g + 1];
            for (e = this.s.length - 1; 0 <= e; --e) {
                var h = this.l[e];
                a.uniform4fv(this.v.D, h[0]);
                Lu(this, a, h[1], h[2]);
                for (h = this.s[e]; 0 <= g && this.g[g] >= h;) {
                    var l = this.g[g];
                    var m = this.i[g];
                    m = w(m).toString();
                    c[m] && (d !== f && Au(a, b, d, f), f = l);
                    g--;
                    d = l
                }
                d !== f && Au(a, b, d, f);
                d = f = h
            }
        }
    };
    k.Ie = function (a, b, c, d, e) {
        var f, g;
        var h = this.g.length - 2;
        var l = this.g[h + 1];
        for (f = this.s.length - 1; 0 <= f; --f) {
            var m = this.l[f];
            a.uniform4fv(this.v.D, m[0]);
            Lu(this, a, m[1], m[2]);
            for (g = this.s[f]; 0 <= h && this.g[h] >= g;) {
                m = this.g[h];
                var n = this.i[h];
                var p = w(n).toString();
                if (void 0 === c[p] && n.W() && (void 0 === e || qb(e, n.W().G())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), Au(a, b, m, l), l = d(n)))return l;
                h--;
                l = m
            }
        }
    };
    function Lu(a, b, c, d) {
        b.uniform4fv(a.v.T, c);
        b.uniform1f(a.v.qa, d)
    }

    k.La = function (a, b) {
        if (b) {
            var c = b.g;
            this.c.lineDash = c ? c : Cu;
            c = b.i;
            this.c.lineDashOffset = c ? c : 0;
            c = b.b;
            c instanceof CanvasGradient || c instanceof CanvasPattern ? c = Du : c = Qh(c).map(function (a, b) {
                    return 3 != b ? a / 255 : a
                }) || Du;
            b = b.c;
            b = void 0 !== b ? b : 1
        } else c = [0, 0, 0, 0], b = 0;
        a = a ? a.b : [0, 0, 0, 0];
        a instanceof CanvasGradient || a instanceof CanvasPattern ? a = Bu : a = Qh(a).map(function (a, b) {
                return 3 != b ? a / 255 : a
            }) || Bu;
        this.c.strokeColor && ma(this.c.strokeColor, c) && this.c.fillColor && ma(this.c.fillColor, a) && this.c.lineWidth === b || (this.c.u =
            !0, this.c.fillColor = a, this.c.strokeColor = c, this.c.lineWidth = b, this.l.push([a, c, b]))
    };
    var Mu = new ru("precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"),
        Nu = new su("varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.0,0.0);gl_Position=h*vec4(c,0.0,1.0)+offsets;a=d;b=f;}");

    function Ou(a, b) {
        this.g = a.getUniformLocation(b, "h");
        this.i = a.getUniformLocation(b, "i");
        this.c = a.getUniformLocation(b, "j");
        this.a = a.getUniformLocation(b, "k");
        this.b = a.getAttribLocation(b, "c");
        this.B = a.getAttribLocation(b, "d");
        this.v = a.getAttribLocation(b, "e");
        this.s = a.getAttribLocation(b, "f");
        this.C = a.getAttribLocation(b, "g")
    };
    function Pu(a, b) {
        this.j = a;
        this.b = b;
        this.a = {};
        this.c = {};
        this.g = {};
        this.o = this.v = this.i = this.l = null;
        (this.f = ha(da, "OES_element_index_uint")) && b.getExtension("OES_element_index_uint");
        z(this.j, "webglcontextlost", this.gp, this);
        z(this.j, "webglcontextrestored", this.hp, this)
    }

    v(Pu, Pc);
    function zu(a, b, c) {
        var d = a.b, e = c.b, f = String(w(c));
        if (f in a.a) d.bindBuffer(b, a.a[f].buffer); else {
            var g = d.createBuffer();
            d.bindBuffer(b, g);
            var h;
            34962 == b ? h = new Float32Array(e) : 34963 == b && (h = a.f ? new Uint32Array(e) : new Uint16Array(e));
            d.bufferData(b, h, c.a);
            a.a[f] = {oc: c, buffer: g}
        }
    }

    function Ju(a, b) {
        var c = a.b;
        b = String(w(b));
        var d = a.a[b];
        c.isContextLost() || c.deleteBuffer(d.buffer);
        delete a.a[b]
    }

    k = Pu.prototype;
    k.la = function () {
        Oc(this.j);
        var a = this.b;
        if (!a.isContextLost()) {
            for (var b in this.a)a.deleteBuffer(this.a[b].buffer);
            for (b in this.g)a.deleteProgram(this.g[b]);
            for (b in this.c)a.deleteShader(this.c[b]);
            a.deleteFramebuffer(this.i);
            a.deleteRenderbuffer(this.o);
            a.deleteTexture(this.v)
        }
    };
    k.fp = function () {
        return this.b
    };
    function Qu(a) {
        if (!a.i) {
            var b = a.b, c = b.createFramebuffer();
            b.bindFramebuffer(b.FRAMEBUFFER, c);
            var d = Ru(b, 1, 1), e = b.createRenderbuffer();
            b.bindRenderbuffer(b.RENDERBUFFER, e);
            b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, 1, 1);
            b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, d, 0);
            b.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, e);
            b.bindTexture(b.TEXTURE_2D, null);
            b.bindRenderbuffer(b.RENDERBUFFER, null);
            b.bindFramebuffer(b.FRAMEBUFFER, null);
            a.i = c;
            a.v = d;
            a.o = e
        }
        return a.i
    }

    function Su(a, b) {
        var c = String(w(b));
        if (c in a.c)return a.c[c];
        var d = a.b, e = d.createShader(b.S());
        d.shaderSource(e, b.b);
        d.compileShader(e);
        return a.c[c] = e
    }

    function Ku(a, b, c) {
        var d = w(b) + "/" + w(c);
        if (d in a.g)return a.g[d];
        var e = a.b, f = e.createProgram();
        e.attachShader(f, Su(a, b));
        e.attachShader(f, Su(a, c));
        e.linkProgram(f);
        return a.g[d] = f
    }

    k.gp = function () {
        ub(this.a);
        ub(this.c);
        ub(this.g);
        this.o = this.v = this.i = this.l = null
    };
    k.hp = function () {
    };
    k.Vc = function (a) {
        if (a == this.l)return !1;
        this.b.useProgram(a);
        this.l = a;
        return !0
    };
    function Tu(a, b, c) {
        var d = a.createTexture();
        a.bindTexture(a.TEXTURE_2D, d);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
        void 0 !== b && a.texParameteri(3553, 10242, b);
        void 0 !== c && a.texParameteri(3553, 10243, c);
        return d
    }

    function Ru(a, b, c) {
        var d = Tu(a, void 0, void 0);
        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, b, c, 0, a.RGBA, a.UNSIGNED_BYTE, null);
        return d
    }

    function Uu(a, b) {
        var c = Tu(a, 33071, 33071);
        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, b);
        return c
    };
    function Vu(a, b) {
        yu.call(this, 0, b);
        this.D = this.C = void 0;
        this.v = [];
        this.s = [];
        this.ra = this.qa = this.height = void 0;
        this.Ua = null;
        this.width = this.scale = this.rotation = this.rotateWithView = this.T = this.I = this.opacity = void 0
    }

    v(Vu, yu);
    k = Vu.prototype;
    k.zb = function (a) {
        var b = this.o, c = this.j, d = this.kg(!0), e = a.b;
        return function () {
            if (!e.isContextLost()) {
                var f;
                var g = 0;
                for (f = d.length; g < f; ++g)e.deleteTexture(d[g])
            }
            Ju(a, b);
            Ju(a, c)
        }
    };
    function Wu(a, b, c, d) {
        var e = a.C, f = a.D, g = a.height, h = a.qa, l = a.ra, m = a.opacity, n = a.I, p = a.T,
            q = a.rotateWithView ? 1 : 0, r = -a.rotation, u = a.scale, x = a.width, B = Math.cos(r);
        r = Math.sin(r);
        var A = a.b.length, y = a.a.length, N;
        for (N = 0; N < c; N += d) {
            var ca = b[N] - a.origin[0];
            var la = b[N + 1] - a.origin[1];
            var fa = y / 8;
            var va = -u * e;
            var ra = -u * (g - f);
            a.a[y++] = ca;
            a.a[y++] = la;
            a.a[y++] = va * B - ra * r;
            a.a[y++] = va * r + ra * B;
            a.a[y++] = n / l;
            a.a[y++] = (p + g) / h;
            a.a[y++] = m;
            a.a[y++] = q;
            va = u * (x - e);
            ra = -u * (g - f);
            a.a[y++] = ca;
            a.a[y++] = la;
            a.a[y++] = va * B - ra * r;
            a.a[y++] = va *
                r + ra * B;
            a.a[y++] = (n + x) / l;
            a.a[y++] = (p + g) / h;
            a.a[y++] = m;
            a.a[y++] = q;
            va = u * (x - e);
            ra = u * f;
            a.a[y++] = ca;
            a.a[y++] = la;
            a.a[y++] = va * B - ra * r;
            a.a[y++] = va * r + ra * B;
            a.a[y++] = (n + x) / l;
            a.a[y++] = p / h;
            a.a[y++] = m;
            a.a[y++] = q;
            va = -u * e;
            ra = u * f;
            a.a[y++] = ca;
            a.a[y++] = la;
            a.a[y++] = va * B - ra * r;
            a.a[y++] = va * r + ra * B;
            a.a[y++] = n / l;
            a.a[y++] = p / h;
            a.a[y++] = m;
            a.a[y++] = q;
            a.b[A++] = fa;
            a.b[A++] = fa + 1;
            a.b[A++] = fa + 2;
            a.b[A++] = fa;
            a.b[A++] = fa + 2;
            a.b[A++] = fa + 3
        }
    }

    function Xu(a, b, c, d) {
        var e, f = b.length;
        for (e = 0; e < f; ++e) {
            var g = b[e];
            var h = w(g).toString();
            h in c ? g = c[h] : (g = Uu(d, g), c[h] = g);
            a[e] = g
        }
    }

    k.Cf = function (a, b) {
        var c = Ku(b, Mu, Nu);
        if (this.Ua)var d = this.Ua; else this.Ua = d = new Ou(a, c);
        b.Vc(c);
        a.enableVertexAttribArray(d.b);
        a.vertexAttribPointer(d.b, 2, 5126, !1, 32, 0);
        a.enableVertexAttribArray(d.v);
        a.vertexAttribPointer(d.v, 2, 5126, !1, 32, 8);
        a.enableVertexAttribArray(d.B);
        a.vertexAttribPointer(d.B, 2, 5126, !1, 32, 16);
        a.enableVertexAttribArray(d.s);
        a.vertexAttribPointer(d.s, 1, 5126, !1, 32, 24);
        a.enableVertexAttribArray(d.C);
        a.vertexAttribPointer(d.C, 1, 5126, !1, 32, 28);
        return d
    };
    k.Df = function (a, b) {
        a.disableVertexAttribArray(b.b);
        a.disableVertexAttribArray(b.v);
        a.disableVertexAttribArray(b.B);
        a.disableVertexAttribArray(b.s);
        a.disableVertexAttribArray(b.C)
    };
    k.Td = function (a, b, c, d) {
        var e = d ? this.cg() : this.kg();
        d = d ? this.s : this.v;
        if (wb(c)) {
            var f;
            c = 0;
            var g = e.length;
            for (f = 0; c < g; ++c) {
                a.bindTexture(3553, e[c]);
                var h = d[c];
                Au(a, b, f, h);
                f = h
            }
        } else for (f = g = 0, h = e.length; f < h; ++f) {
            a.bindTexture(3553, e[f]);
            for (var l = 0 < f ? d[f - 1] : 0, m = d[f], n = l; g < this.g.length && this.g[g] <= m;) {
                var p = w(this.i[g]).toString();
                void 0 !== c[p] ? (n !== l && Au(a, b, n, l), l = n = g === this.g.length - 1 ? m : this.g[g + 1]) : l = g === this.g.length - 1 ? m : this.g[g + 1];
                g++
            }
            n !== l && Au(a, b, n, l)
        }
    };
    k.Ie = function (a, b, c, d, e) {
        var f, g, h = this.g.length - 1, l = this.cg();
        for (f = l.length - 1; 0 <= f; --f) {
            a.bindTexture(3553, l[f]);
            var m = 0 < f ? this.s[f - 1] : 0;
            for (g = this.s[f]; 0 <= h && this.g[h] >= m;) {
                var n = this.g[h];
                var p = this.i[h];
                var q = w(p).toString();
                if (void 0 === c[q] && p.W() && (void 0 === e || qb(e, p.W().G())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), Au(a, b, n, g), g = d(p)))return g;
                g = n;
                h--
            }
        }
    };
    k.$a = function () {
        this.ra = this.qa = this.height = this.D = this.C = void 0;
        this.b = null;
        this.scale = this.rotation = this.rotateWithView = this.T = this.I = this.opacity = void 0;
        this.a = null;
        this.width = void 0
    };
    function Yu(a, b) {
        Vu.call(this, 0, b);
        this.l = [];
        this.c = [];
        this.B = [];
        this.O = []
    }

    v(Yu, Vu);
    k = Yu.prototype;
    k.rc = function (a, b) {
        this.g.push(this.b.length);
        this.i.push(b);
        b = a.ca();
        Wu(this, b, b.length, a.oa())
    };
    k.tc = function (a, b) {
        this.g.push(this.b.length);
        this.i.push(b);
        b = a.ca();
        Wu(this, b, b.length, a.oa())
    };
    k.$a = function (a) {
        var b = a.b;
        this.v.push(this.b.length);
        this.s.push(this.b.length);
        this.o = new Gu(this.a);
        this.j = new Gu(this.b);
        var c = {};
        Xu(this.B, this.l, c, b);
        Xu(this.O, this.c, c, b);
        this.c = this.l = null;
        Vu.prototype.$a.call(this, a)
    };
    k.Wb = function (a) {
        var b = a.Nc(), c = a.Y(1), d = a.Je(), e = a.Dg(1), f = a.i, g = a.Uc(), h = a.o, l = a.f, m = a.jc();
        a = a.a;
        if (0 === this.l.length) this.l.push(c); else {
            var n = this.l[this.l.length - 1];
            w(n) != w(c) && (this.v.push(this.b.length), this.l.push(c))
        }
        0 === this.c.length ? this.c.push(e) : (n = this.c[this.c.length - 1], w(n) != w(e) && (this.s.push(this.b.length), this.c.push(e)));
        this.C = b[0];
        this.D = b[1];
        this.height = m[1];
        this.qa = d[1];
        this.ra = d[0];
        this.opacity = f;
        this.I = g[0];
        this.T = g[1];
        this.rotation = l;
        this.rotateWithView = h;
        this.scale = a;
        this.width = m[0]
    };
    k.kg = function (a) {
        return a ? this.B.concat(this.O) : this.B
    };
    k.cg = function () {
        return this.O
    };
    var Zu = new ru("precision mediump float;varying float a;varying vec2 aVertex;varying float c;uniform float m;uniform vec4 n;uniform vec2 o;uniform float p;void main(void){if(a>0.0){vec2 windowCoords=vec2((aVertex.x+1.0)/2.0*o.x*p,(aVertex.y+1.0)/2.0*o.y*p);if(length(windowCoords-gl_FragCoord.xy)>c*p){discard;}} gl_FragColor=n;float alpha=n.a*m;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"),
        $u = new su("varying float a;varying vec2 aVertex;varying float c;attribute vec2 d;attribute vec2 e;attribute vec2 f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;uniform float k;uniform float l;bool nearlyEquals(in float value,in float ref){float epsilon=0.000000000001;return value>=ref-epsilon&&value<=ref+epsilon;}void alongNormal(out vec2 offset,in vec2 nextP,in float turnDir,in float direction){vec2 dirVect=nextP-e;vec2 normal=normalize(vec2(-turnDir*dirVect.y,turnDir*dirVect.x));offset=k/2.0*normal*direction;}void miterUp(out vec2 offset,out float round,in bool isRound,in float direction){float halfWidth=k/2.0;vec2 tangent=normalize(normalize(f-e)+normalize(e-d));vec2 normal=vec2(-tangent.y,tangent.x);vec2 dirVect=f-e;vec2 tmpNormal=normalize(vec2(-dirVect.y,dirVect.x));float miterLength=abs(halfWidth/dot(normal,tmpNormal));offset=normal*direction*miterLength;round=0.0;if(isRound){round=1.0;}else if(miterLength>l+k){offset=halfWidth*tmpNormal*direction;}} bool miterDown(out vec2 offset,in vec4 projPos,in mat4 offsetMatrix,in float direction){bool degenerate=false;vec2 tangent=normalize(normalize(f-e)+normalize(e-d));vec2 normal=vec2(-tangent.y,tangent.x);vec2 dirVect=d-e;vec2 tmpNormal=normalize(vec2(-dirVect.y,dirVect.x));vec2 longOffset,shortOffset,longVertex;vec4 shortProjVertex;float halfWidth=k/2.0;if(length(f-e)>length(d-e)){longOffset=tmpNormal*direction*halfWidth;shortOffset=normalize(vec2(dirVect.y,-dirVect.x))*direction*halfWidth;longVertex=f;shortProjVertex=h*vec4(d,0.0,1.0);}else{shortOffset=tmpNormal*direction*halfWidth;longOffset=normalize(vec2(dirVect.y,-dirVect.x))*direction*halfWidth;longVertex=d;shortProjVertex=h*vec4(f,0.0,1.0);}vec4 p1=h*vec4(longVertex,0.0,1.0)+offsetMatrix*vec4(longOffset,0.0,0.0);vec4 p2=projPos+offsetMatrix*vec4(longOffset,0.0,0.0);vec4 p3=shortProjVertex+offsetMatrix*vec4(-shortOffset,0.0,0.0);vec4 p4=shortProjVertex+offsetMatrix*vec4(shortOffset,0.0,0.0);float denom=(p4.y-p3.y)*(p2.x-p1.x)-(p4.x-p3.x)*(p2.y-p1.y);float firstU=((p4.x-p3.x)*(p1.y-p3.y)-(p4.y-p3.y)*(p1.x-p3.x))/denom;float secondU=((p2.x-p1.x)*(p1.y-p3.y)-(p2.y-p1.y)*(p1.x-p3.x))/denom;float epsilon=0.000000000001;if(firstU>epsilon&&firstU<1.0-epsilon&&secondU>epsilon&&secondU<1.0-epsilon){shortProjVertex.x=p1.x+firstU*(p2.x-p1.x);shortProjVertex.y=p1.y+firstU*(p2.y-p1.y);offset=shortProjVertex.xy;degenerate=true;}else{float miterLength=abs(halfWidth/dot(normal,tmpNormal));offset=normal*direction*miterLength;}return degenerate;}void squareCap(out vec2 offset,out float round,in bool isRound,in vec2 nextP,in float turnDir,in float direction){round=0.0;vec2 dirVect=e-nextP;vec2 firstNormal=normalize(dirVect);vec2 secondNormal=vec2(turnDir*firstNormal.y*direction,-turnDir*firstNormal.x*direction);vec2 hypotenuse=normalize(firstNormal-secondNormal);vec2 normal=vec2(turnDir*hypotenuse.y*direction,-turnDir*hypotenuse.x*direction);float length=sqrt(c*c*2.0);offset=normal*length;if(isRound){round=1.0;}} void main(void){bool degenerate=false;float direction=float(sign(g));mat4 offsetMatrix=i*j;vec2 offset;vec4 projPos=h*vec4(e,0.0,1.0);bool round=nearlyEquals(mod(g,2.0),0.0);a=0.0;c=k/2.0;aVertex=projPos.xy;if(nearlyEquals(mod(g,3.0),0.0)||nearlyEquals(mod(g,17.0),0.0)){alongNormal(offset,f,1.0,direction);}else if(nearlyEquals(mod(g,5.0),0.0)||nearlyEquals(mod(g,13.0),0.0)){alongNormal(offset,d,-1.0,direction);}else if(nearlyEquals(mod(g,23.0),0.0)){miterUp(offset,a,round,direction);}else if(nearlyEquals(mod(g,19.0),0.0)){degenerate=miterDown(offset,projPos,offsetMatrix,direction);}else if(nearlyEquals(mod(g,7.0),0.0)){squareCap(offset,a,round,f,1.0,direction);}else if(nearlyEquals(mod(g,11.0),0.0)){squareCap(offset,a,round,d,-1.0,direction);}if(!degenerate){vec4 offsets=offsetMatrix*vec4(offset,0.0,0.0);gl_Position=projPos+offsets;}else{gl_Position=vec4(offset,0.0,1.0);}}");

    function av(a, b) {
        this.g = a.getUniformLocation(b, "h");
        this.i = a.getUniformLocation(b, "i");
        this.c = a.getUniformLocation(b, "j");
        this.qa = a.getUniformLocation(b, "k");
        this.T = a.getUniformLocation(b, "l");
        this.a = a.getUniformLocation(b, "m");
        this.D = a.getUniformLocation(b, "n");
        this.I = a.getUniformLocation(b, "o");
        this.ra = a.getUniformLocation(b, "p");
        this.l = a.getAttribLocation(b, "d");
        this.b = a.getAttribLocation(b, "e");
        this.o = a.getAttribLocation(b, "f");
        this.f = a.getAttribLocation(b, "g")
    };
    function bv(a, b) {
        yu.call(this, 0, b);
        this.v = null;
        this.s = [];
        this.l = [];
        this.c = {
            strokeColor: null,
            lineCap: void 0,
            lineDash: null,
            lineDashOffset: void 0,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0,
            u: !1
        }
    }

    v(bv, yu);
    function cv(a, b, c, d) {
        var e, f = a.a.length, g = a.b.length, h = "bevel" === a.c.lineJoin ? 0 : "miter" === a.c.lineJoin ? 1 : 2,
            l = "butt" === a.c.lineCap ? 0 : "square" === a.c.lineCap ? 1 : 2, m = ks(b, c, d), n = g, p = 1;
        for (e = 0; e < c; e += d) {
            var q = f / 7;
            var r = u;
            var u = x || [b[e], b[e + 1]];
            if (0 === e) {
                var x = [b[e + d], b[e + d + 1]];
                if (c - 0 === 2 * d && ma(u, x))break;
                if (m) {
                    r = [b[c - 2 * d], b[c - 2 * d + 1]];
                    var B = x
                } else {
                    l && (f = dv(a, [0, 0], u, x, p * ev * l, f), f = dv(a, [0, 0], u, x, -p * ev * l, f), a.b[g++] = q + 2, a.b[g++] = q, a.b[g++] = q + 1, a.b[g++] = q + 1, a.b[g++] = q + 3, a.b[g++] = q + 2);
                    f = dv(a, [0, 0], u, x, p * fv *
                        (l || 1), f);
                    f = dv(a, [0, 0], u, x, -p * fv * (l || 1), f);
                    n = f / 7 - 1;
                    continue
                }
            } else if (e === c - d) {
                m ? x = B : (r = r || [0, 0], f = dv(a, r, u, [0, 0], p * gv * (l || 1), f), f = dv(a, r, u, [0, 0], -p * gv * (l || 1), f), a.b[g++] = q, a.b[g++] = n - 1, a.b[g++] = n, a.b[g++] = n, a.b[g++] = q + 1, a.b[g++] = q, l && (f = dv(a, r, u, [0, 0], p * hv * l, f), f = dv(a, r, u, [0, 0], -p * hv * l, f), a.b[g++] = q + 2, a.b[g++] = q, a.b[g++] = q + 1, a.b[g++] = q + 1, a.b[g++] = q + 3, a.b[g++] = q + 2));
                break
            } else x = [b[e + d], b[e + d + 1]];
            var A = Eu(r[0], r[1], u[0], u[1], x[0], x[1]) ? -1 : 1;
            f = dv(a, r, u, x, A * iv * (h || 1), f);
            f = dv(a, r, u, x, A * jv * (h || 1), f);
            f =
                dv(a, r, u, x, -A * kv * (h || 1), f);
            0 < e && (a.b[g++] = q, a.b[g++] = n - 1, a.b[g++] = n, a.b[g++] = q + 2, a.b[g++] = q, a.b[g++] = 0 < p * A ? n : n - 1);
            a.b[g++] = q;
            a.b[g++] = q + 2;
            a.b[g++] = q + 1;
            n = q + 2;
            p = A;
            h && (f = dv(a, r, u, x, A * lv * h, f), a.b[g++] = q + 1, a.b[g++] = q + 3, a.b[g++] = q)
        }
        m && (q = q || f / 7, A = Lf([r[0], r[1], u[0], u[1], x[0], x[1]], 0, 6, 2) ? 1 : -1, f = dv(a, r, u, x, A * iv * (h || 1), f), dv(a, r, u, x, -A * kv * (h || 1), f), a.b[g++] = q, a.b[g++] = n - 1, a.b[g++] = n, a.b[g++] = q + 1, a.b[g++] = q, a.b[g++] = 0 < p * A ? n : n - 1)
    }

    function dv(a, b, c, d, e, f) {
        a.a[f++] = b[0];
        a.a[f++] = b[1];
        a.a[f++] = c[0];
        a.a[f++] = c[1];
        a.a[f++] = d[0];
        a.a[f++] = d[1];
        a.a[f++] = e;
        return f
    }

    function mv(a, b, c, d) {
        c -= b;
        return c < 2 * d ? !1 : c === 2 * d ? !ma([a[b], a[b + 1]], [a[b + d], a[b + d + 1]]) : !0
    }

    k = bv.prototype;
    k.pc = function (a, b) {
        var c = a.ca();
        a = a.oa();
        mv(c, 0, c.length, a) && (c = Te(c, 0, c.length, a, -this.origin[0], -this.origin[1]), this.c.u && (this.l.push(this.b.length), this.c.u = !1), this.g.push(this.b.length), this.i.push(b), cv(this, c, c.length, a))
    };
    k.qc = function (a, b) {
        var c = this.b.length, d = a.lb();
        d.unshift(0);
        var e = a.ca();
        a = a.oa();
        var f;
        if (1 < d.length) {
            var g = 1;
            for (f = d.length; g < f; ++g)if (mv(e, d[g - 1], d[g], a)) {
                var h = Te(e, d[g - 1], d[g], a, -this.origin[0], -this.origin[1]);
                cv(this, h, h.length, a)
            }
        }
        this.b.length > c && (this.g.push(c), this.i.push(b), this.c.u && (this.l.push(c), this.c.u = !1))
    };
    function nv(a, b, c, d) {
        ks(b, b.length, d) || (b.push(b[0]), b.push(b[1]));
        cv(a, b, b.length, d);
        if (c.length) {
            var e;
            b = 0;
            for (e = c.length; b < e; ++b)ks(c[b], c[b].length, d) || (c[b].push(c[b][0]), c[b].push(c[b][1])), cv(a, c[b], c[b].length, d)
        }
    }

    function ov(a, b, c) {
        c = void 0 === c ? a.b.length : c;
        a.g.push(c);
        a.i.push(b);
        a.c.u && (a.l.push(c), a.c.u = !1)
    }

    k.$a = function () {
        this.o = new Gu(this.a);
        this.j = new Gu(this.b);
        this.g.push(this.b.length);
        0 === this.l.length && 0 < this.s.length && (this.s = []);
        this.b = this.a = null
    };
    k.zb = function (a) {
        var b = this.o, c = this.j;
        return function () {
            Ju(a, b);
            Ju(a, c)
        }
    };
    k.Cf = function (a, b, c, d) {
        var e = Ku(b, Zu, $u);
        if (this.v)var f = this.v; else this.v = f = new av(a, e);
        b.Vc(e);
        a.enableVertexAttribArray(f.l);
        a.vertexAttribPointer(f.l, 2, 5126, !1, 28, 0);
        a.enableVertexAttribArray(f.b);
        a.vertexAttribPointer(f.b, 2, 5126, !1, 28, 8);
        a.enableVertexAttribArray(f.o);
        a.vertexAttribPointer(f.o, 2, 5126, !1, 28, 16);
        a.enableVertexAttribArray(f.f);
        a.vertexAttribPointer(f.f, 1, 5126, !1, 28, 24);
        a.uniform2fv(f.I, c);
        a.uniform1f(f.ra, d);
        return f
    };
    k.Df = function (a, b) {
        a.disableVertexAttribArray(b.l);
        a.disableVertexAttribArray(b.b);
        a.disableVertexAttribArray(b.o);
        a.disableVertexAttribArray(b.f)
    };
    k.Td = function (a, b, c, d) {
        var e = a.getParameter(a.DEPTH_FUNC), f = a.getParameter(a.DEPTH_WRITEMASK);
        d || (a.enable(a.DEPTH_TEST), a.depthMask(!0), a.depthFunc(a.NOTEQUAL));
        if (wb(c)) {
            var g = this.g[this.g.length - 1];
            for (c = this.l.length - 1; 0 <= c; --c) {
                var h = this.l[c];
                var l = this.s[c];
                pv(this, a, l[0], l[1], l[2]);
                Au(a, b, h, g);
                a.clear(a.DEPTH_BUFFER_BIT);
                g = h
            }
        } else {
            var m = this.g.length - 2;
            l = g = this.g[m + 1];
            for (h = this.l.length - 1; 0 <= h; --h) {
                var n = this.s[h];
                pv(this, a, n[0], n[1], n[2]);
                for (n = this.l[h]; 0 <= m && this.g[m] >= n;) {
                    var p = this.g[m];
                    var q = this.i[m];
                    q = w(q).toString();
                    c[q] && (g !== l && (Au(a, b, g, l), a.clear(a.DEPTH_BUFFER_BIT)), l = p);
                    m--;
                    g = p
                }
                g !== l && (Au(a, b, g, l), a.clear(a.DEPTH_BUFFER_BIT));
                g = l = n
            }
        }
        d || (a.disable(a.DEPTH_TEST), a.clear(a.DEPTH_BUFFER_BIT), a.depthMask(f), a.depthFunc(e))
    };
    k.Ie = function (a, b, c, d, e) {
        var f, g;
        var h = this.g.length - 2;
        var l = this.g[h + 1];
        for (f = this.l.length - 1; 0 <= f; --f) {
            var m = this.s[f];
            pv(this, a, m[0], m[1], m[2]);
            for (g = this.l[f]; 0 <= h && this.g[h] >= g;) {
                m = this.g[h];
                var n = this.i[h];
                var p = w(n).toString();
                if (void 0 === c[p] && n.W() && (void 0 === e || qb(e, n.W().G())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), Au(a, b, m, l), l = d(n)))return l;
                h--;
                l = m
            }
        }
    };
    function pv(a, b, c, d, e) {
        b.uniform4fv(a.v.D, c);
        b.uniform1f(a.v.qa, d);
        b.uniform1f(a.v.T, e)
    }

    k.La = function (a, b) {
        a = b.f;
        this.c.lineCap = void 0 !== a ? a : "round";
        a = b.g;
        this.c.lineDash = a ? a : Cu;
        a = b.i;
        this.c.lineDashOffset = a ? a : 0;
        a = b.j;
        this.c.lineJoin = void 0 !== a ? a : "round";
        a = b.b;
        a instanceof CanvasGradient || a instanceof CanvasPattern ? a = Du : a = Qh(a).map(function (a, b) {
                return 3 != b ? a / 255 : a
            }) || Du;
        var c = b.c;
        c = void 0 !== c ? c : 1;
        b = b.l;
        b = void 0 !== b ? b : 10;
        this.c.strokeColor && ma(this.c.strokeColor, a) && this.c.lineWidth === c && this.c.miterLimit === b || (this.c.u = !0, this.c.strokeColor = a, this.c.lineWidth = c, this.c.miterLimit = b,
            this.s.push([a, c, b]))
    };
    var fv = 3, gv = 5, ev = 7, hv = 11, iv = 13, jv = 17, kv = 19, lv = 23;
    var qv = new ru("precision mediump float;uniform vec4 e;uniform float f;void main(void){gl_FragColor=e;float alpha=e.a*f;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"),
        rv = new su("attribute vec2 a;uniform mat4 b;uniform mat4 c;uniform mat4 d;void main(void){gl_Position=b*vec4(a,0.0,1.0);}");

    function sv(a, b) {
        this.g = a.getUniformLocation(b, "b");
        this.i = a.getUniformLocation(b, "c");
        this.c = a.getUniformLocation(b, "d");
        this.D = a.getUniformLocation(b, "e");
        this.a = a.getUniformLocation(b, "f");
        this.b = a.getAttribLocation(b, "a")
    };
    function tv(a) {
        this.b = this.a = this.g = void 0;
        this.i = void 0 === a ? !0 : a;
        this.c = 0
    }

    function uv(a) {
        var b = a.b;
        if (b) {
            var c = b.next, d = b.Ab;
            c && (c.Ab = d);
            d && (d.next = c);
            a.b = c || d;
            a.g === a.a ? (a.b = void 0, a.g = void 0, a.a = void 0) : a.g === b ? a.g = a.b : a.a === b && (a.a = d ? a.b.Ab : a.b);
            a.c--
        }
    }

    function vv(a) {
        a.b = a.g;
        if (a.b)return a.b.data
    }

    function wv(a) {
        if (a.b && a.b.next)return a.b = a.b.next, a.b.data
    }

    function xv(a) {
        if (a.b && a.b.next)return a.b.next.data
    }

    function yv(a) {
        if (a.b && a.b.Ab)return a.b = a.b.Ab, a.b.data
    }

    function zv(a) {
        if (a.b && a.b.Ab)return a.b.Ab.data
    }

    function Av(a) {
        if (a.b)return a.b.data
    }

    tv.prototype.concat = function (a) {
        if (a.b) {
            if (this.b) {
                var b = this.b.next;
                this.b.next = a.g;
                a.g.Ab = this.b;
                b.Ab = a.a;
                a.a.next = b;
                this.c += a.c
            } else this.b = a.b, this.g = a.g, this.a = a.a, this.c = a.c;
            a.b = void 0;
            a.g = void 0;
            a.a = void 0;
            a.c = 0
        }
    };
    function Bv(a, b) {
        yu.call(this, 0, b);
        this.f = new bv(0, b);
        this.v = null;
        this.s = [];
        this.c = [];
        this.l = {fillColor: null, u: !1}
    }

    v(Bv, yu);
    function Cv(a, b, c, d) {
        var e = new tv, f = new Os;
        Dv(a, b, d, e, f, !0);
        b = Ev(e);
        if (c.length) {
            var g, h = [];
            var l = 0;
            for (g = c.length; l < g; ++l) {
                var m = {list: new tv, yc: void 0, fh: new Os};
                h.push(m);
                Dv(a, c[l], d, m.list, m.fh, !1);
                Fv(m.list, m.fh, !0);
                m.yc = Ev(m.list)
            }
            h.sort(function (a, b) {
                return b.yc[0] === a.yc[0] ? a.yc[1] - b.yc[1] : b.yc[0] - a.yc[0]
            });
            for (l = 0; l < h.length; ++l) {
                c = h[l].list;
                g = d = vv(c);
                do {
                    if (Gv(g, f).length) {
                        var n = !0;
                        break
                    }
                    g = wv(c)
                } while (d !== g);
                !n && Hv(c, h[l].yc[0], e, b[0], f) && (f.concat(h[l].fh), Fv(e, f, !1))
            }
        } else Fv(e, f, !1);
        Iv(a,
            e, f)
    }

    function Dv(a, b, c, d, e, f) {
        var g, h = a.a.length / 2, l = [], m = [];
        if (f === Lf(b, 0, b.length, c)) {
            var n = f = Jv(a, b[0], b[1], h++);
            var p = c;
            for (g = b.length; p < g; p += c) {
                var q = Jv(a, b[p], b[p + 1], h++);
                m.push(Kv(n, q, d));
                l.push([Math.min(n.x, q.x), Math.min(n.y, q.y), Math.max(n.x, q.x), Math.max(n.y, q.y)]);
                n = q
            }
        } else for (p = b.length - c, n = f = Jv(a, b[p], b[p + 1], h++), p -= c, g = 0; p >= g; p -= c)q = Jv(a, b[p], b[p + 1], h++), m.push(Kv(n, q, d)), l.push([Math.min(n.x, q.x), Math.min(n.y, q.y), Math.max(n.x, q.x), Math.max(n.y, q.y)]), n = q;
        m.push(Kv(q, f, d));
        l.push([Math.min(n.x, q.x),
            Math.min(n.y, q.y), Math.max(n.x, q.x), Math.max(n.y, q.y)]);
        e.load(l, m)
    }

    function Ev(a) {
        var b = vv(a), c = b, d = [c.Z.x, c.Z.y];
        do c = wv(a), c.Z.x > d[0] && (d = [c.Z.x, c.Z.y]); while (c !== b);
        return d
    }

    function Fv(a, b, c) {
        var d = vv(a), e = d, f = wv(a), g = !1;
        do {
            var h = c ? Eu(f.X.x, f.X.y, e.X.x, e.X.y, e.Z.x, e.Z.y) : Eu(e.Z.x, e.Z.y, e.X.x, e.X.y, f.X.x, f.X.y);
            void 0 === h ? (Lv(e, f, a, b), g = !0, f === d && (d = xv(a)), f = e, yv(a)) : e.X.Gb !== h && (e.X.Gb = h, g = !0);
            e = f;
            f = wv(a)
        } while (e !== d);
        return g
    }

    function Hv(a, b, c, d, e) {
        for (var f = vv(a); f.X.x !== b;)f = wv(a);
        b = f.X;
        d = {x: d, y: b.y, mb: -1};
        var g = Infinity, h;
        var l = Gv({Z: b, X: d}, e, !0);
        var m = 0;
        for (h = l.length; m < h; ++m) {
            var n = l[m], p = Mv(b, d, n.Z, n.X, !0), q = Math.abs(b.x - p[0]);
            if (q < g && void 0 !== Eu(b.x, b.y, n.Z.x, n.Z.y, n.X.x, n.X.y)) {
                g = q;
                var r = {x: p[0], y: p[1], mb: -1};
                f = n
            }
        }
        if (Infinity === g)return !1;
        l = f.X;
        if (0 < g && (f = Nv(b, r, f.X, e), f.length))for (r = Infinity, m = 0, h = f.length; m < h; ++m)if (g = f[m], n = Math.atan2(b.y - g.y, d.x - g.x), n < r || n === r && g.x < l.x) r = n, l = g;
        for (f = vv(c); f.X.x !== l.x || f.X.y !==
        l.y;)f = wv(c);
        d = {x: b.x, y: b.y, mb: b.mb, Gb: void 0};
        m = {x: f.X.x, y: f.X.y, mb: f.X.mb, Gb: void 0};
        xv(a).Z = d;
        Kv(b, f.X, a, e);
        Kv(m, d, a, e);
        f.X = m;
        a.i && a.b && (a.g = a.b, a.a = a.b.Ab);
        c.concat(a);
        return !0
    }

    function Iv(a, b, c) {
        for (var d = !1, e = Ov(b, c); 3 < b.c;)if (e) {
            if (!Pv(a, b, c, e, d) && !Fv(b, c, d) && !Qv(a, b, c, !0))break
        } else if (!Pv(a, b, c, e, d) && !Fv(b, c, d) && !Qv(a, b, c))if (e = Ov(b, c)) {
            d = b;
            var f = 2 * d.c, g = Array(f), h = vv(d), l = h, m = 0;
            do g[m++] = l.Z.x, g[m++] = l.Z.y, l = wv(d); while (l !== h);
            d = !Lf(g, 0, f, 2);
            Fv(b, c, d)
        } else {
            e = a;
            d = b;
            f = g = vv(d);
            do {
                h = Gv(f, c);
                if (h.length) {
                    g = h[0];
                    h = Mv(f.Z, f.X, g.Z, g.X);
                    h = Jv(e, h[0], h[1], e.a.length / 2);
                    l = new tv;
                    m = new Os;
                    Kv(h, f.X, l, m);
                    f.X = h;
                    Ps(c, [Math.min(f.Z.x, h.x), Math.min(f.Z.y, h.y), Math.max(f.Z.x, h.x), Math.max(f.Z.y,
                        h.y)], f);
                    for (f = wv(d); f !== g;)Kv(f.Z, f.X, l, m), c.remove(f), uv(d), f = Av(d);
                    Kv(g.Z, h, l, m);
                    g.Z = h;
                    Ps(c, [Math.min(g.X.x, h.x), Math.min(g.X.y, h.y), Math.max(g.X.x, h.x), Math.max(g.X.y, h.y)], g);
                    Fv(d, c, !1);
                    Iv(e, d, c);
                    Fv(l, m, !1);
                    Iv(e, l, m);
                    break
                }
                f = wv(d)
            } while (f !== g);
            break
        }
        3 === b.c && (e = a.b.length, a.b[e++] = zv(b).Z.mb, a.b[e++] = Av(b).Z.mb, a.b[e++] = xv(b).Z.mb)
    }

    function Pv(a, b, c, d, e) {
        var f = a.b.length, g = vv(b), h = zv(b), l = g, m = wv(b), n = xv(b), p = !1;
        do {
            var q = l.Z;
            var r = l.X;
            var u = m.X;
            if (!1 === r.Gb) {
                var x = d ? 0 === Nv(q, r, u, c, !0).length : e ? Rv(n.X, u, r, q, h.Z) : Rv(h.Z, q, r, u, n.X);
                !d && 0 !== Gv({
                    Z: q,
                    X: u
                }, c).length || !x || !d && !1 !== q.Gb && !1 !== u.Gb && Lf([h.Z.x, h.Z.y, q.x, q.y, r.x, r.y, u.x, u.y, n.X.x, n.X.y], 0, 10, 2) !== !e || (a.b[f++] = q.mb, a.b[f++] = r.mb, a.b[f++] = u.mb, Lv(l, m, b, c), m === g && (g = n), p = !0)
            }
            h = zv(b);
            l = Av(b);
            m = wv(b);
            n = xv(b)
        } while (l !== g && 3 < b.c);
        return p
    }

    function Qv(a, b, c, d) {
        var e = vv(b);
        wv(b);
        var f = e, g = wv(b), h = !1;
        do {
            var l = Mv(f.Z, f.X, g.Z, g.X, d);
            if (l) {
                h = a.b.length;
                var m = a.a.length / 2, n = yv(b);
                uv(b);
                c.remove(n);
                var p = n === e;
                d ? (l[0] === f.Z.x && l[1] === f.Z.y ? (yv(b), l = f.Z, g.Z = l, c.remove(f), p = p || f === e) : (l = g.X, f.X = l, c.remove(g), p = p || g === e), uv(b)) : (l = Jv(a, l[0], l[1], m), f.X = l, g.Z = l, Ps(c, [Math.min(f.Z.x, f.X.x), Math.min(f.Z.y, f.X.y), Math.max(f.Z.x, f.X.x), Math.max(f.Z.y, f.X.y)], f), Ps(c, [Math.min(g.Z.x, g.X.x), Math.min(g.Z.y, g.X.y), Math.max(g.Z.x, g.X.x), Math.max(g.Z.y,
                    g.X.y)], g));
                a.b[h++] = n.Z.mb;
                a.b[h++] = n.X.mb;
                a.b[h++] = l.mb;
                h = !0;
                if (p)break
            }
            f = zv(b);
            g = wv(b)
        } while (f !== e);
        return h
    }

    function Ov(a, b) {
        var c = vv(a), d = c;
        do {
            if (Gv(d, b).length)return !1;
            d = wv(a)
        } while (d !== c);
        return !0
    }

    function Jv(a, b, c, d) {
        var e = a.a.length;
        a.a[e++] = b;
        a.a[e++] = c;
        return {x: b, y: c, mb: d, Gb: void 0}
    }

    function Kv(a, b, c, d) {
        var e = {Z: a, X: b}, f = {Ab: void 0, next: void 0, data: e}, g = c.b;
        if (g) {
            var h = g.next;
            f.Ab = g;
            f.next = h;
            g.next = f;
            h && (h.Ab = f);
            g === c.a && (c.a = f)
        } else c.g = f, c.a = f, c.i && (f.next = f, f.Ab = f);
        c.b = f;
        c.c++;
        d && d.Ea([Math.min(a.x, b.x), Math.min(a.y, b.y), Math.max(a.x, b.x), Math.max(a.y, b.y)], e);
        return e
    }

    function Lv(a, b, c, d) {
        Av(c) === b && (uv(c), a.X = b.X, d.remove(b), Ps(d, [Math.min(a.Z.x, a.X.x), Math.min(a.Z.y, a.X.y), Math.max(a.Z.x, a.X.x), Math.max(a.Z.y, a.X.y)], a))
    }

    function Nv(a, b, c, d, e) {
        var f, g, h = [],
            l = Rs(d, [Math.min(a.x, b.x, c.x), Math.min(a.y, b.y, c.y), Math.max(a.x, b.x, c.x), Math.max(a.y, b.y, c.y)]);
        d = 0;
        for (f = l.length; d < f; ++d)for (g in l[d]) {
            var m = l[d][g];
            "object" !== typeof m || e && !m.Gb || m.x === a.x && m.y === a.y || m.x === b.x && m.y === b.y || m.x === c.x && m.y === c.y || -1 !== h.indexOf(m) || !Ff([a.x, a.y, b.x, b.y, c.x, c.y], 0, 6, 2, m.x, m.y) || h.push(m)
        }
        return h
    }

    function Gv(a, b, c) {
        var d = a.Z, e = a.X;
        b = Rs(b, [Math.min(d.x, e.x), Math.min(d.y, e.y), Math.max(d.x, e.x), Math.max(d.y, e.y)]);
        var f = [], g;
        var h = 0;
        for (g = b.length; h < g; ++h) {
            var l = b[h];
            a !== l && (c || l.Z !== e || l.X !== d) && Mv(d, e, l.Z, l.X, c) && f.push(l)
        }
        return f
    }

    function Mv(a, b, c, d, e) {
        var f = (d.y - c.y) * (b.x - a.x) - (d.x - c.x) * (b.y - a.y);
        if (0 !== f && (d = ((d.x - c.x) * (a.y - c.y) - (d.y - c.y) * (a.x - c.x)) / f, c = ((b.x - a.x) * (a.y - c.y) - (b.y - a.y) * (a.x - c.x)) / f, !e && d > Fu && d < 1 - Fu && c > Fu && c < 1 - Fu || e && 0 <= d && 1 >= d && 0 <= c && 1 >= c))return [a.x + d * (b.x - a.x), a.y + d * (b.y - a.y)]
    }

    function Rv(a, b, c, d, e) {
        if (void 0 === b.Gb || void 0 === d.Gb)return !1;
        var f = (c.x - d.x) * (b.y - d.y) > (c.y - d.y) * (b.x - d.x);
        e = (e.x - d.x) * (b.y - d.y) < (e.y - d.y) * (b.x - d.x);
        a = (a.x - b.x) * (d.y - b.y) > (a.y - b.y) * (d.x - b.x);
        c = (c.x - b.x) * (d.y - b.y) < (c.y - b.y) * (d.x - b.x);
        b = b.Gb ? c || a : c && a;
        return (d.Gb ? e || f : e && f) && b
    }

    k = Bv.prototype;
    k.sc = function (a, b) {
        var c = a.md(), d = a.oa(), e = this.b.length, f = this.f.b.length;
        a = a.ca();
        var g, h, l;
        var m = h = 0;
        for (g = c.length; m < g; ++m) {
            var n = c[m];
            if (0 < n.length) {
                var p = Te(a, h, n[0], d, -this.origin[0], -this.origin[1]);
                if (p.length) {
                    var q = [];
                    h = 1;
                    for (l = n.length; h < l; ++h)if (n[h] !== n[h - 1]) {
                        var r = Te(a, n[h - 1], n[h], d, -this.origin[0], -this.origin[1]);
                        q.push(r)
                    }
                    nv(this.f, p, q, d);
                    Cv(this, p, q, d)
                }
            }
            h = n[n.length - 1]
        }
        this.b.length > e && (this.g.push(e), this.i.push(b), this.l.u && (this.c.push(e), this.l.u = !1));
        this.f.b.length > f && ov(this.f,
            b, f)
    };
    k.uc = function (a, b) {
        var c = a.lb(), d = a.oa();
        if (0 < c.length) {
            a = a.ca().map(Number);
            var e = Te(a, 0, c[0], d, -this.origin[0], -this.origin[1]);
            if (e.length) {
                var f = [], g;
                var h = 1;
                for (g = c.length; h < g; ++h)if (c[h] !== c[h - 1]) {
                    var l = Te(a, c[h - 1], c[h], d, -this.origin[0], -this.origin[1]);
                    f.push(l)
                }
                this.g.push(this.b.length);
                this.i.push(b);
                this.l.u && (this.c.push(this.b.length), this.l.u = !1);
                ov(this.f, b);
                nv(this.f, e, f, d);
                Cv(this, e, f, d)
            }
        }
    };
    k.$a = function (a) {
        this.o = new Gu(this.a);
        this.j = new Gu(this.b);
        this.g.push(this.b.length);
        this.f.$a(a);
        0 === this.c.length && 0 < this.s.length && (this.s = []);
        this.b = this.a = null
    };
    k.zb = function (a) {
        var b = this.o, c = this.j, d = this.f.zb(a);
        return function () {
            Ju(a, b);
            Ju(a, c);
            d()
        }
    };
    k.Cf = function (a, b) {
        var c = Ku(b, qv, rv);
        if (this.v)var d = this.v; else this.v = d = new sv(a, c);
        b.Vc(c);
        a.enableVertexAttribArray(d.b);
        a.vertexAttribPointer(d.b, 2, 5126, !1, 8, 0);
        return d
    };
    k.Df = function (a, b) {
        a.disableVertexAttribArray(b.b)
    };
    k.Td = function (a, b, c, d) {
        var e = a.getParameter(a.DEPTH_FUNC), f = a.getParameter(a.DEPTH_WRITEMASK);
        d || (a.enable(a.DEPTH_TEST), a.depthMask(!0), a.depthFunc(a.NOTEQUAL));
        if (wb(c)) {
            var g = this.g[this.g.length - 1];
            for (c = this.c.length - 1; 0 <= c; --c) {
                var h = this.c[c];
                var l = this.s[c];
                a.uniform4fv(this.v.D, l);
                Au(a, b, h, g);
                g = h
            }
        } else {
            var m = this.g.length - 2;
            l = g = this.g[m + 1];
            for (h = this.c.length - 1; 0 <= h; --h) {
                var n = this.s[h];
                a.uniform4fv(this.v.D, n);
                for (n = this.c[h]; 0 <= m && this.g[m] >= n;) {
                    var p = this.g[m];
                    var q = this.i[m];
                    q = w(q).toString();
                    c[q] && (g !== l && (Au(a, b, g, l), a.clear(a.DEPTH_BUFFER_BIT)), l = p);
                    m--;
                    g = p
                }
                g !== l && (Au(a, b, g, l), a.clear(a.DEPTH_BUFFER_BIT));
                g = l = n
            }
        }
        d || (a.disable(a.DEPTH_TEST), a.clear(a.DEPTH_BUFFER_BIT), a.depthMask(f), a.depthFunc(e))
    };
    k.Ie = function (a, b, c, d, e) {
        var f, g;
        var h = this.g.length - 2;
        var l = this.g[h + 1];
        for (f = this.c.length - 1; 0 <= f; --f) {
            var m = this.s[f];
            a.uniform4fv(this.v.D, m);
            for (g = this.c[f]; 0 <= h && this.g[h] >= g;) {
                m = this.g[h];
                var n = this.i[h];
                var p = w(n).toString();
                if (void 0 === c[p] && n.W() && (void 0 === e || qb(e, n.W().G())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), Au(a, b, m, l), l = d(n)))return l;
                h--;
                l = m
            }
        }
    };
    k.La = function (a, b) {
        a = a ? a.b : [0, 0, 0, 0];
        a instanceof CanvasGradient || a instanceof CanvasPattern ? a = Bu : a = Qh(a).map(function (a, b) {
                return 3 != b ? a / 255 : a
            }) || Bu;
        this.l.fillColor && ma(a, this.l.fillColor) || (this.l.fillColor = a, this.l.u = !0, this.s.push(a));
        b ? this.f.La(null, b) : this.f.La(null, new Ek({color: [0, 0, 0, 0], lineWidth: 0}))
    };
    function Sv(a, b) {
        this.b = b;
        this.a = [{x: 0, y: 0, width: a, height: a}];
        this.c = {};
        this.g = eg(a, a);
        this.i = this.g.canvas
    }

    Sv.prototype.get = function (a) {
        return this.c[a] || null
    };
    Sv.prototype.add = function (a, b, c, d, e) {
        var f;
        var g = 0;
        for (f = this.a.length; g < f; ++g) {
            var h = this.a[g];
            if (h.width >= b + this.b && h.height >= c + this.b)return f = {
                offsetX: h.x + this.b,
                offsetY: h.y + this.b,
                image: this.i
            }, this.c[a] = f, d.call(e, this.g, h.x + this.b, h.y + this.b), a = g, b += this.b, d = c + this.b, h.width - b > h.height - d ? (c = {
                x: h.x + b,
                y: h.y,
                width: h.width - b,
                height: h.height
            }, b = {x: h.x, y: h.y + d, width: b, height: h.height - d}, Tv(this, a, c, b)) : (c = {
                x: h.x + b,
                y: h.y,
                width: h.width - b,
                height: d
            }, b = {x: h.x, y: h.y + d, width: h.width, height: h.height - d},
                Tv(this, a, c, b)), f
        }
        return null
    };
    function Tv(a, b, c, d) {
        b = [b, 1];
        0 < c.width && 0 < c.height && b.push(c);
        0 < d.width && 0 < d.height && b.push(d);
        a.a.splice.apply(a.a, b)
    };
    function Uv(a) {
        a = a || {};
        this.a = void 0 !== a.initialSize ? a.initialSize : 256;
        this.g = void 0 !== a.maxSize ? a.maxSize : void 0 !== ba ? ba : 2048;
        this.b = void 0 !== a.space ? a.space : 1;
        this.f = [new Sv(this.a, this.b)];
        this.c = this.a;
        this.i = [new Sv(this.c, this.b)]
    }

    function Vv(a, b) {
        var c;
        var d = 0;
        for (c = a.length; d < c; ++d) {
            var e = a[d];
            if (e = e.get(b))return e
        }
        return null
    }

    function Wv(a, b) {
        return {offsetX: a.offsetX, offsetY: a.offsetY, image: a.image, im: b.image}
    }

    Uv.prototype.add = function (a, b, c, d, e, f) {
        if (b + this.b > this.g || c + this.b > this.g)return null;
        d = Xv(this, !1, a, b, c, d, f);
        if (!d)return null;
        a = Xv(this, !0, a, b, c, e ? e : sa, f);
        return Wv(d, a)
    };
    function Xv(a, b, c, d, e, f, g) {
        var h = b ? a.i : a.f, l;
        var m = 0;
        for (l = h.length; m < l; ++m) {
            var n = h[m];
            if (n = n.add(c, d, e, f, g))return n;
            n || m !== l - 1 || (b ? (n = Math.min(2 * a.c, a.g), a.c = n) : (n = Math.min(2 * a.a, a.g), a.a = n), n = new Sv(n, a.b), h.push(n), ++l)
        }
        return null
    };
    function Yv(a, b) {
        Vu.call(this, 0, b);
        this.c = [];
        this.ta = [];
        this.nc = eg(0, 0).canvas;
        this.O = {
            strokeColor: null,
            lineCap: void 0,
            lineDash: null,
            lineDashOffset: void 0,
            lineJoin: void 0,
            lineWidth: 0,
            miterLimit: void 0,
            fillColor: null,
            font: void 0,
            scale: void 0
        };
        this.pa = "";
        this.fa = this.sa = this.ia = this.kb = void 0;
        this.B = {};
        this.l = void 0;
        this.opacity = this.scale = 1
    }

    v(Yv, Vu);
    k = Yv.prototype;
    k.Rb = function (a, b) {
        if (this.pa) {
            var c = null, d = 2, e = 2;
            switch (a.S()) {
                case "Point":
                case "MultiPoint":
                    c = a.ca();
                    d = c.length;
                    e = a.oa();
                    break;
                case "Circle":
                    c = a.wa();
                    break;
                case "LineString":
                    c = ci(a);
                    break;
                case "MultiLineString":
                    c = di(a);
                    d = c.length;
                    break;
                case "Polygon":
                    c = Qf(a);
                    break;
                case "MultiPolygon":
                    c = fi(a), d = c.length
            }
            this.g.push(this.b.length);
            this.i.push(b);
            a = this.l;
            b = this.pa.split("\n");
            var f = Zv(this, b), g, h, l = Math.round(f[0] * this.kb - this.sa),
                m = Math.round(f[1] * this.ia - this.fa), n = this.O.lineWidth / 2 * this.O.scale;
            f = 0;
            for (g = b.length; f < g; ++f) {
                var p = 0;
                var q = a.height * f;
                var r = b[f].split("");
                var u = 0;
                for (h = r.length; u < h; ++u) {
                    var x = a.zh;
                    var B = r[u], A = Vv(x.f, B);
                    A ? (x = Vv(x.i, B), x = Wv(A, x)) : x = null;
                    if (x) {
                        A = x.image;
                        this.C = l - p;
                        this.D = m - q;
                        this.I = 0 === u ? x.offsetX - n : x.offsetX;
                        this.T = x.offsetY;
                        this.height = a.height;
                        this.width = 0 === u || u === r.length - 1 ? a.width[r[u]] + n : a.width[r[u]];
                        this.qa = A.height;
                        this.ra = A.width;
                        0 === this.c.length ? this.c.push(A) : (x = this.c[this.c.length - 1], w(x) != w(A) && (this.v.push(this.b.length), this.c.push(A)));
                        x = c;
                        B = d;
                        var y = e;
                        for (A = 0; A < B; A += y)Wu(this, x, B, y)
                    }
                    p += this.width
                }
            }
        }
    };
    function Zv(a, b) {
        var c = a.l, d = b.length * c.height;
        return [b.map(function (b) {
            var d = 0, e;
            var h = 0;
            for (e = b.length; h < e; ++h) {
                var l = b[h];
                c.width[l] || $v(a, l);
                d += c.width[l] ? c.width[l] : 0
            }
            return d
        }).reduce(function (a, b) {
            return Math.max(a, b)
        }), d]
    }

    function $v(a, b) {
        if (1 === b.length) {
            var c = a.l, d = a.O;
            a = a.nc.getContext("2d");
            a.font = d.font;
            a = Math.ceil(a.measureText(b).width * d.scale);
            c.zh.add(b, a, c.height, function (a, c, g) {
                a.font = d.font;
                a.fillStyle = d.fillColor;
                a.strokeStyle = d.strokeColor;
                a.lineWidth = d.lineWidth;
                a.lineCap = d.lineCap;
                a.lineJoin = d.lineJoin;
                a.miterLimit = d.miterLimit;
                a.textAlign = "left";
                a.textBaseline = "top";
                rd && d.lineDash && (a.setLineDash(d.lineDash), a.lineDashOffset = d.lineDashOffset);
                1 !== d.scale && a.setTransform(d.scale, 0, 0, d.scale, 0, 0);
                d.strokeColor &&
                a.strokeText(b, c, g);
                d.fillColor && a.fillText(b, c, g)
            }) && (c.width[b] = a)
        }
    }

    k.$a = function (a) {
        var b = a.b;
        this.v.push(this.b.length);
        this.s = this.v;
        this.o = new Gu(this.a);
        this.j = new Gu(this.b);
        Xu(this.ta, this.c, {}, b);
        this.O = {
            strokeColor: null,
            lineCap: void 0,
            lineDash: null,
            lineDashOffset: void 0,
            lineJoin: void 0,
            lineWidth: 0,
            miterLimit: void 0,
            fillColor: null,
            font: void 0,
            scale: void 0
        };
        this.pa = "";
        this.fa = this.sa = this.ia = this.kb = void 0;
        this.c = null;
        this.B = {};
        this.l = void 0;
        Vu.prototype.$a.call(this, a)
    };
    k.hb = function (a) {
        var b = this.O, c = a.Ca(), d = a.Da();
        if (a && a.Ia() && (c || d)) {
            c ? (c = c.b, b.fillColor = Uh(c ? c : Bu)) : b.fillColor = null;
            d ? (c = d.b, b.strokeColor = Uh(c ? c : Du), b.lineWidth = d.c || 1, b.lineCap = d.f || "round", b.lineDashOffset = d.i || 0, b.lineJoin = d.j || "round", b.miterLimit = d.l || 10, d = d.g, b.lineDash = d ? d.slice() : Cu) : (b.strokeColor = null, b.lineWidth = 0);
            b.font = a.a || "10px sans-serif";
            b.scale = a.b || 1;
            this.pa = a.Ia();
            d = fj[a.f];
            c = fj[a.j];
            this.kb = void 0 === d ? .5 : d;
            this.ia = void 0 === c ? .5 : c;
            this.sa = a.g || 0;
            this.fa = a.c || 0;
            this.rotateWithView =
                !!a.l;
            this.rotation = a.i || 0;
            a = [];
            for (var e in b)if (b[e] || 0 === b[e]) Array.isArray(b[e]) ? a = a.concat(b[e]) : a.push(b[e]);
            c = "";
            e = 0;
            for (d = a.length; e < d; ++e)c += a[e];
            e = c;
            this.B[e] || (a = this.nc.getContext("2d"), a.font = b.font, a = Math.ceil((1.5 * a.measureText("M").width + b.lineWidth / 2) * b.scale), this.B[e] = {
                zh: new Uv({space: b.lineWidth + 1}),
                width: {},
                height: a
            });
            this.l = this.B[e]
        } else this.pa = ""
    };
    k.kg = function () {
        return this.ta
    };
    k.cg = function () {
        return this.ta
    };
    function aw(a, b, c) {
        this.f = b;
        this.j = a;
        this.i = c;
        this.g = {}
    }

    v(aw, Ni);
    function bw(a, b) {
        var c = [], d;
        for (d in a.g) {
            var e = a.g[d], f;
            for (f in e)c.push(e[f].zb(b))
        }
        return function () {
            for (var a = c.length, b, d = 0; d < a; d++)b = c[d].apply(this, arguments);
            return b
        }
    }

    function cw(a, b) {
        for (var c in a.g) {
            var d = a.g[c], e;
            for (e in d)d[e].$a(b)
        }
    }

    aw.prototype.b = function (a, b) {
        var c = void 0 !== a ? a.toString() : "0";
        a = this.g[c];
        void 0 === a && (a = {}, this.g[c] = a);
        c = a[b];
        void 0 === c && (c = new dw[b](this.j, this.f), a[b] = c);
        return c
    };
    aw.prototype.c = function () {
        return wb(this.g)
    };
    aw.prototype.Ka = function (a, b, c, d, e, f, g, h) {
        var l = Object.keys(this.g).map(Number);
        l.sort(ea);
        var m, n;
        var p = 0;
        for (m = l.length; p < m; ++p) {
            var q = this.g[l[p].toString()];
            var r = 0;
            for (n = ej.length; r < n; ++r) {
                var u = q[ej[r]];
                void 0 !== u && u.Ka(a, b, c, d, e, f, g, h, void 0, !1)
            }
        }
    };
    function ew(a, b, c, d, e, f, g, h, l, m, n) {
        var p = fw, q = Object.keys(a.g).map(Number);
        q.sort(function (a, b) {
            return b - a
        });
        var r, u;
        var x = 0;
        for (r = q.length; x < r; ++x) {
            var B = a.g[q[x].toString()];
            for (u = ej.length - 1; 0 <= u; --u) {
                var A = B[ej[u]];
                if (void 0 !== A && (A = A.Ka(b, c, d, e, p, f, g, h, l, m, n)))return A
            }
        }
    }

    aw.prototype.Fa = function (a, b, c, d, e, f, g, h, l, m) {
        var n = b.b;
        n.bindFramebuffer(n.FRAMEBUFFER, Qu(b));
        var p;
        void 0 !== this.i && (p = Ra($a(a), d * this.i));
        return ew(this, b, a, d, e, g, h, l, function (a) {
            var b = new Uint8Array(4);
            n.readPixels(0, 0, 1, 1, n.RGBA, n.UNSIGNED_BYTE, b);
            if (0 < b[3] && (a = m(a)))return a
        }, !0, p)
    };
    function gw(a, b, c, d, e, f, g, h) {
        var l = c.b;
        l.bindFramebuffer(l.FRAMEBUFFER, Qu(c));
        return void 0 !== ew(a, c, b, d, e, f, g, h, function () {
                var a = new Uint8Array(4);
                l.readPixels(0, 0, 1, 1, l.RGBA, l.UNSIGNED_BYTE, a);
                return 0 < a[3]
            }, !1)
    }

    var fw = [1, 1], dw = {Circle: Iu, Image: Yu, LineString: bv, Polygon: Bv, Text: Yv};

    function hw(a, b, c, d, e, f, g) {
        this.b = a;
        this.g = b;
        this.c = f;
        this.i = g;
        this.l = e;
        this.j = d;
        this.f = c;
        this.a = this.o = this.v = this.s = null
    }

    v(hw, Vh);
    function iw(a, b, c) {
        var d = a.b;
        b = b.b(0, "Text");
        b.hb(a.a);
        b.Rb(c, null);
        b.$a(d);
        b.Ka(a.b, a.g, a.f, a.j, a.l, a.i, 1, {}, void 0, !1);
        b.zb(d)()
    }

    k = hw.prototype;
    k.zd = function (a) {
        this.La(a.Ca(), a.Da());
        this.Wb(a.Y());
        this.hb(a.Ia())
    };
    k.Eb = function (a) {
        switch (a.S()) {
            case "Point":
                this.tc(a, null);
                break;
            case "LineString":
                this.pc(a, null);
                break;
            case "Polygon":
                this.uc(a, null);
                break;
            case "MultiPoint":
                this.rc(a, null);
                break;
            case "MultiLineString":
                this.qc(a, null);
                break;
            case "MultiPolygon":
                this.sc(a, null);
                break;
            case "GeometryCollection":
                this.He(a, null);
                break;
            case "Circle":
                this.$b(a, null)
        }
    };
    k.Ge = function (a, b) {
        (a = (0, b.Za)(a)) && qb(this.c, a.G()) && (this.zd(b), this.Eb(a))
    };
    k.He = function (a) {
        a = a.a;
        var b;
        var c = 0;
        for (b = a.length; c < b; ++c)this.Eb(a[c])
    };
    k.tc = function (a, b) {
        var c = this.b, d = new aw(1, this.c), e = d.b(0, "Image");
        e.Wb(this.s);
        e.tc(a, b);
        e.$a(c);
        e.Ka(this.b, this.g, this.f, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.zb(c)();
        this.a && iw(this, d, a)
    };
    k.rc = function (a, b) {
        var c = this.b, d = new aw(1, this.c), e = d.b(0, "Image");
        e.Wb(this.s);
        e.rc(a, b);
        e.$a(c);
        e.Ka(this.b, this.g, this.f, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.zb(c)();
        this.a && iw(this, d, a)
    };
    k.pc = function (a, b) {
        var c = this.b, d = new aw(1, this.c), e = d.b(0, "LineString");
        e.La(null, this.o);
        e.pc(a, b);
        e.$a(c);
        e.Ka(this.b, this.g, this.f, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.zb(c)();
        this.a && iw(this, d, a)
    };
    k.qc = function (a, b) {
        var c = this.b, d = new aw(1, this.c), e = d.b(0, "LineString");
        e.La(null, this.o);
        e.qc(a, b);
        e.$a(c);
        e.Ka(this.b, this.g, this.f, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.zb(c)();
        this.a && iw(this, d, a)
    };
    k.uc = function (a, b) {
        var c = this.b, d = new aw(1, this.c), e = d.b(0, "Polygon");
        e.La(this.v, this.o);
        e.uc(a, b);
        e.$a(c);
        e.Ka(this.b, this.g, this.f, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.zb(c)();
        this.a && iw(this, d, a)
    };
    k.sc = function (a, b) {
        var c = this.b, d = new aw(1, this.c), e = d.b(0, "Polygon");
        e.La(this.v, this.o);
        e.sc(a, b);
        e.$a(c);
        e.Ka(this.b, this.g, this.f, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.zb(c)();
        this.a && iw(this, d, a)
    };
    k.$b = function (a, b) {
        var c = this.b, d = new aw(1, this.c), e = d.b(0, "Circle");
        e.La(this.v, this.o);
        e.$b(a, b);
        e.$a(c);
        e.Ka(this.b, this.g, this.f, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.zb(c)();
        this.a && iw(this, d, a)
    };
    k.Wb = function (a) {
        this.s = a
    };
    k.La = function (a, b) {
        this.v = a;
        this.o = b
    };
    k.hb = function (a) {
        this.a = a
    };
    var jw = new ru("precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}"),
        kw = new su("varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}");

    function lw(a, b) {
        this.f = a.getUniformLocation(b, "d");
        this.c = a.getUniformLocation(b, "e");
        this.g = a.getUniformLocation(b, "f");
        this.i = a.getUniformLocation(b, "g");
        this.b = a.getAttribLocation(b, "b");
        this.a = a.getAttribLocation(b, "c")
    };
    function mw(a, b) {
        gi.call(this, b);
        this.c = a;
        this.U = new Gu([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);
        this.f = this.Jb = null;
        this.j = void 0;
        this.v = Ve();
        this.O = Ve();
        this.D = wu();
        this.s = null
    }

    v(mw, gi);
    function nw(a, b, c) {
        var d = a.c.g;
        if (void 0 === a.j || a.j != c) {
            b.postRenderFunctions.push(function (a, b, c) {
                a.isContextLost() || (a.deleteFramebuffer(b), a.deleteTexture(c))
            }.bind(null, d, a.f, a.Jb));
            b = Ru(d, c, c);
            var e = d.createFramebuffer();
            d.bindFramebuffer(36160, e);
            d.framebufferTexture2D(36160, 36064, 3553, b, 0);
            a.Jb = b;
            a.f = e;
            a.j = c
        } else d.bindFramebuffer(36160, a.f)
    }

    mw.prototype.Ui = function (a, b, c) {
        ow(this, "precompose", c, a);
        zu(c, 34962, this.U);
        var d = c.b, e = Ku(c, jw, kw);
        if (this.s)var f = this.s; else this.s = f = new lw(d, e);
        c.Vc(e) && (d.enableVertexAttribArray(f.b), d.vertexAttribPointer(f.b, 2, 5126, !1, 16, 0), d.enableVertexAttribArray(f.a), d.vertexAttribPointer(f.a, 2, 5126, !1, 16, 8), d.uniform1i(f.i, 0));
        d.uniformMatrix4fv(f.f, !1, xu(this.D, this.v));
        d.uniformMatrix4fv(f.c, !1, xu(this.D, this.O));
        d.uniform1f(f.g, b.opacity);
        d.bindTexture(3553, this.Jb);
        d.drawArrays(5, 0, 4);
        ow(this, "postcompose",
            c, a)
    };
    function ow(a, b, c, d) {
        a = a.a;
        if (Uc(a, b)) {
            var e = d.viewState;
            a.b(new Jh(b, new hw(c, e.center, e.resolution, e.rotation, d.size, d.extent, d.pixelRatio), d, null, c))
        }
    }

    mw.prototype.zg = function () {
        this.f = this.Jb = null;
        this.j = void 0
    };
    function pw(a, b, c, d) {
        var e = kc(c, b, a);
        c = Yb(b, d, c);
        b = b.Qc();
        void 0 !== b && (c *= b);
        b = a.Qc();
        void 0 !== b && (c /= b);
        b = a.G();
        if (!b || Ua(b, e)) a = Yb(a, c, e) / c, isFinite(a) && 0 < a && (c /= a);
        return c
    }

    function qw(a, b, c, d) {
        a = c - a;
        b = d - b;
        var e = Math.sqrt(a * a + b * b);
        return [Math.round(c + a / e), Math.round(d + b / e)]
    }

    function rw(a, b, c, d, e, f, g, h, l, m, n) {
        var p = eg(Math.round(c * a), Math.round(c * b));
        if (0 === l.length)return p.canvas;
        p.scale(c, c);
        var q = Pa();
        l.forEach(function (a) {
            db(q, a.extent)
        });
        var r = eg(Math.round(c * lb(q) / d), Math.round(c * mb(q) / d)), u = c / d;
        l.forEach(function (a) {
            r.drawImage(a.image, m, m, a.image.width - 2 * m, a.image.height - 2 * m, (a.extent[0] - q[0]) * u, -(a.extent[3] - q[3]) * u, lb(a.extent) * u, mb(a.extent) * u)
        });
        var x = ib(g);
        h.c.forEach(function (a) {
            var b = a.source, e = a.target, g = b[1][0], h = b[1][1], l = b[2][0], m = b[2][1];
            a = (e[0][0] -
                x[0]) / f;
            var n = -(e[0][1] - x[1]) / f, u = (e[1][0] - x[0]) / f, B = -(e[1][1] - x[1]) / f,
                U = (e[2][0] - x[0]) / f, Xb = -(e[2][1] - x[1]) / f;
            e = b[0][0];
            b = b[0][1];
            g -= e;
            h -= b;
            l -= e;
            m -= b;
            a:{
                g = [[g, h, 0, 0, u - a], [l, m, 0, 0, U - a], [0, 0, g, h, B - n], [0, 0, l, m, Xb - n]];
                h = g.length;
                for (l = 0; l < h; l++) {
                    m = l;
                    for (var Ca = Math.abs(g[l][l]), Cb = l + 1; Cb < h; Cb++) {
                        var nc = Math.abs(g[Cb][l]);
                        nc > Ca && (Ca = nc, m = Cb)
                    }
                    if (0 === Ca) {
                        g = null;
                        break a
                    }
                    Ca = g[m];
                    g[m] = g[l];
                    g[l] = Ca;
                    for (m = l + 1; m < h; m++)for (Ca = -g[m][l] / g[l][l], Cb = l; Cb < h + 1; Cb++)g[m][Cb] = l == Cb ? 0 : g[m][Cb] + Ca * g[l][Cb]
                }
                l = Array(h);
                for (m =
                         h - 1; 0 <= m; m--)for (l[m] = g[m][h] / g[m][m], Ca = m - 1; 0 <= Ca; Ca--)g[Ca][h] -= g[Ca][m] * l[m];
                g = l
            }
            g && (p.save(), p.beginPath(), l = (a + u + U) / 3, m = (n + B + Xb) / 3, h = qw(l, m, a, n), u = qw(l, m, u, B), U = qw(l, m, U, Xb), p.moveTo(u[0], u[1]), p.lineTo(h[0], h[1]), p.lineTo(U[0], U[1]), p.clip(), p.transform(g[0], g[2], g[1], g[3], a, n), p.translate(q[0] - e, q[3] - b), p.scale(d / c, -d / c), p.drawImage(r.canvas, 0, 0), p.restore())
        });
        n && (p.save(), p.strokeStyle = "black", p.lineWidth = 1, h.c.forEach(function (a) {
            var b = a.target;
            a = (b[0][0] - x[0]) / f;
            var c = -(b[0][1] - x[1]) / f,
                d = (b[1][0] - x[0]) / f, e = -(b[1][1] - x[1]) / f, g = (b[2][0] - x[0]) / f;
            b = -(b[2][1] - x[1]) / f;
            p.beginPath();
            p.moveTo(d, e);
            p.lineTo(a, c);
            p.lineTo(g, b);
            p.closePath();
            p.stroke()
        }), p.restore());
        return p.canvas
    };
    function sw(a, b, c, d, e) {
        this.g = a;
        this.i = b;
        var f = {}, g = ic(this.i, this.g);
        this.a = function (a) {
            var b = a[0] + "/" + a[1];
            f[b] || (f[b] = g(a));
            return f[b]
        };
        this.f = d;
        this.v = e * e;
        this.c = [];
        this.l = !1;
        this.o = this.g.g && !!d && !!this.g.G() && lb(d) == lb(this.g.G());
        this.b = this.g.G() ? lb(this.g.G()) : null;
        this.j = this.i.G() ? lb(this.i.G()) : null;
        a = ib(c);
        b = hb(c);
        d = gb(c);
        c = fb(c);
        e = this.a(a);
        var h = this.a(b), l = this.a(d), m = this.a(c);
        tw(this, a, b, d, c, e, h, l, m, 10);
        if (this.l) {
            var n = Infinity;
            this.c.forEach(function (a) {
                n = Math.min(n, a.source[0][0],
                    a.source[1][0], a.source[2][0])
            });
            this.c.forEach(function (a) {
                if (Math.max(a.source[0][0], a.source[1][0], a.source[2][0]) - n > this.b / 2) {
                    var b = [[a.source[0][0], a.source[0][1]], [a.source[1][0], a.source[1][1]], [a.source[2][0], a.source[2][1]]];
                    b[0][0] - n > this.b / 2 && (b[0][0] -= this.b);
                    b[1][0] - n > this.b / 2 && (b[1][0] -= this.b);
                    b[2][0] - n > this.b / 2 && (b[2][0] -= this.b);
                    Math.max(b[0][0], b[1][0], b[2][0]) - Math.min(b[0][0], b[1][0], b[2][0]) < this.b / 2 && (a.source = b)
                }
            }, this)
        }
        f = {}
    }

    function tw(a, b, c, d, e, f, g, h, l, m) {
        var n = Oa([f, g, h, l]), p = a.b ? lb(n) / a.b : null, q = a.b, r = a.g.g && .5 < p && 1 > p, u = !1;
        if (0 < m) {
            if (a.i.c && a.j) {
                var x = Oa([b, c, d, e]);
                u |= .25 < lb(x) / a.j
            }
            !r && a.g.c && p && (u |= .25 < p)
        }
        if (u || !a.f || qb(n, a.f)) {
            if (!(u || isFinite(f[0]) && isFinite(f[1]) && isFinite(g[0]) && isFinite(g[1]) && isFinite(h[0]) && isFinite(h[1]) && isFinite(l[0]) && isFinite(l[1])))if (0 < m) u = !0; else return;
            if (0 < m && (u || (n = a.a([(b[0] + d[0]) / 2, (b[1] + d[1]) / 2]), q = r ? (Ja(f[0], q) + Ja(h[0], q)) / 2 - Ja(n[0], q) : (f[0] + h[0]) / 2 - n[0], n = (f[1] + h[1]) / 2 - n[1],
                    u = q * q + n * n > a.v), u)) {
                Math.abs(b[0] - d[0]) <= Math.abs(b[1] - d[1]) ? (r = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2], q = a.a(r), n = [(e[0] + b[0]) / 2, (e[1] + b[1]) / 2], p = a.a(n), tw(a, b, c, r, n, f, g, q, p, m - 1), tw(a, n, r, d, e, p, q, h, l, m - 1)) : (r = [(b[0] + c[0]) / 2, (b[1] + c[1]) / 2], q = a.a(r), n = [(d[0] + e[0]) / 2, (d[1] + e[1]) / 2], p = a.a(n), tw(a, b, r, n, e, f, q, p, l, m - 1), tw(a, r, c, d, n, q, g, h, p, m - 1));
                return
            }
            if (r) {
                if (!a.o)return;
                a.l = !0
            }
            a.c.push({source: [f, h, l], target: [b, d, e]});
            a.c.push({source: [f, g, h], target: [b, c, d]})
        }
    }

    function uw(a) {
        var b = Pa();
        a.c.forEach(function (a) {
            a = a.source;
            Qa(b, a[0]);
            Qa(b, a[1]);
            Qa(b, a[2])
        });
        return b
    };
    function vw(a, b, c, d, e, f) {
        this.v = b;
        this.o = a.G();
        var g = b.G(), h = g ? pb(c, g) : c;
        g = pw(a, b, nb(h), d);
        this.j = new sw(a, b, h, this.o, .5 * g);
        this.i = d;
        this.g = c;
        a = uw(this.j);
        this.l = (this.Ib = f(a, g, e)) ? this.Ib.a : 1;
        this.ne = this.f = null;
        e = 2;
        f = [];
        this.Ib && (e = 0, f = this.Ib.c);
        qs.call(this, c, d, this.l, e, f)
    }

    v(vw, qs);
    vw.prototype.la = function () {
        1 == this.state && (Hc(this.ne), this.ne = null);
        qs.prototype.la.call(this)
    };
    vw.prototype.Y = function () {
        return this.f
    };
    vw.prototype.ke = function () {
        var a = this.Ib.getState();
        2 == a && (this.f = rw(lb(this.g) / this.i, mb(this.g) / this.i, this.l, this.Ib.resolution, 0, this.i, this.g, this.j, [{
            extent: this.Ib.G(),
            image: this.Ib.Y()
        }], 0));
        this.state = a;
        this.u()
    };
    vw.prototype.load = function () {
        if (0 == this.state) {
            this.state = 1;
            this.u();
            var a = this.Ib.getState();
            2 == a || 3 == a ? this.ke() : (this.ne = z(this.Ib, "change", function () {
                var a = this.Ib.getState();
                if (2 == a || 3 == a) Hc(this.ne), this.ne = null, this.ke()
            }, this), this.Ib.load())
        }
    };
    function ww(a) {
        Ls.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            state: a.state
        });
        this.s = void 0 !== a.resolutions ? a.resolutions : null;
        this.i = null;
        this.fa = 0
    }

    v(ww, Ls);
    function xw(a, b) {
        a.s && (b = a.s[ia(a.s, b, 0)]);
        return b
    }

    ww.prototype.Y = function (a, b, c, d) {
        var e = this.c;
        if (e && d && !hc(e, d)) {
            if (this.i) {
                if (this.fa == this.g && hc(this.i.v, d) && this.i.resolution == b && cb(this.i.G(), a))return this.i;
                Qc(this.i);
                this.i = null
            }
            this.i = new vw(e, d, a, b, c, function (a, b, c) {
                return this.Pc(a, b, c, e)
            }.bind(this));
            this.fa = this.g;
            return this.i
        }
        e && (d = e);
        return this.Pc(a, b, c, d)
    };
    ww.prototype.l = function (a) {
        a = a.target;
        switch (a.getState()) {
            case 1:
                this.b(new yw(zw, a));
                break;
            case 2:
                this.b(new yw(Aw, a));
                break;
            case 3:
                this.b(new yw(Bw, a))
        }
    };
    function Cw(a, b) {
        a.Y().src = b
    }

    function yw(a, b) {
        Rc.call(this, a);
        this.image = b
    }

    v(yw, Rc);
    var zw = "imageloadstart", Aw = "imageloadend", Bw = "imageloaderror";

    function Dw(a) {
        ww.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions,
            state: a.state
        });
        this.ia = a.canvasFunction;
        this.T = null;
        this.U = 0;
        this.ta = void 0 !== a.ratio ? a.ratio : 1.5
    }

    v(Dw, ww);
    Dw.prototype.Pc = function (a, b, c, d) {
        b = xw(this, b);
        var e = this.T;
        if (e && this.U == this.g && e.resolution == b && e.a == c && Wa(e.G(), a))return e;
        a = a.slice();
        rb(a, this.ta);
        (d = this.ia(a, b, c, [lb(a) / b * c, mb(a) / b * c], d)) && (e = new ss(a, b, c, this.j, d));
        this.T = e;
        this.U = this.g;
        return e
    };
    function Ew(a) {
        this.a = a.source;
        this.ab = Ve();
        this.f = eg();
        this.o = [0, 0];
        this.Va = void 0 == a.renderBuffer ? 100 : a.renderBuffer;
        this.B = null;
        Dw.call(this, {
            attributions: a.attributions,
            canvasFunction: this.Fk.bind(this),
            logo: a.logo,
            projection: a.projection,
            ratio: a.ratio,
            resolutions: a.resolutions,
            state: this.a.getState()
        });
        this.I = null;
        this.v = void 0;
        this.Wi(a.style);
        z(this.a, "change", this.Ao, this)
    }

    v(Ew, Dw);
    k = Ew.prototype;
    k.Fk = function (a, b, c, d, e) {
        var f = new oj(.5 * b / c, a, b, c, this.a.U, this.Va);
        this.a.de(a, b, e);
        var g = !1;
        this.a.ac(a, function (a) {
            var d;
            if (!(d = g)) {
                var e;
                (d = a.bb()) ? e = d.call(a, b) : this.v && (e = this.v(a, b));
                if (e) {
                    var h, p = !1;
                    Array.isArray(e) || (e = [e]);
                    d = 0;
                    for (h = e.length; d < h; ++d)p = yj(f, a, e[d], xj(b, c), this.zo, this) || p;
                    d = p
                } else d = !1
            }
            g = d
        }, this);
        sj(f);
        if (g)return null;
        this.o[0] != d[0] || this.o[1] != d[1] ? (this.f.canvas.width = d[0], this.f.canvas.height = d[1], this.o[0] = d[0], this.o[1] = d[1]) : this.f.clearRect(0, 0, d[0], d[1]);
        a = Fw(this,
            nb(a), b, c, d);
        f.Ka(this.f, a, 0, {});
        this.B = f;
        return this.f.canvas
    };
    k.Fa = function (a, b, c, d, e, f) {
        if (this.B) {
            var g = {};
            return this.B.Fa(a, b, 0, d, e, function (a) {
                var b = w(a).toString();
                if (!(b in g))return g[b] = !0, f(a)
            })
        }
    };
    k.xo = function () {
        return this.a
    };
    k.yo = function () {
        return this.I
    };
    k.bb = function () {
        return this.v
    };
    function Fw(a, b, c, d, e) {
        c = d / c;
        return df(a.ab, e[0] / 2, e[1] / 2, c, -c, 0, -b[0], -b[1])
    }

    k.zo = function () {
        this.u()
    };
    k.Ao = function () {
        Ns(this, this.a.getState())
    };
    k.Wi = function (a) {
        this.I = void 0 !== a ? a : Jk;
        this.v = a ? Hk(this.I) : void 0;
        this.u()
    };
    function Gw(a, b) {
        mw.call(this, a, b);
        this.l = this.i = this.N = null
    }

    v(Gw, mw);
    Gw.handles = function (a, b) {
        return "webgl" === a && "IMAGE" === b.S()
    };
    Gw.create = function (a, b) {
        return new Gw(a, b)
    };
    function Hw(a, b) {
        b = b.Y();
        return Uu(a.c.g, b)
    }

    Gw.prototype.Fa = function (a, b, c, d, e) {
        var f = this.a;
        return f.ja().Fa(a, b.viewState.resolution, b.viewState.rotation, c, b.skippedFeatureUids, function (a) {
            return d.call(e, a, f)
        })
    };
    Gw.prototype.Ag = function (a, b) {
        var c = this.c.g, d = a.pixelRatio, e = a.viewState, f = e.center, g = e.resolution, h = e.rotation, l = this.N,
            m = this.Jb, n = this.a.ja(), p = a.viewHints, q = a.extent;
        void 0 !== b.extent && (q = pb(q, b.extent));
        p[0] || p[1] || kb(q) || (b = n.Y(q, g, d, e.projection)) && ji(this, b) && (l = b, m = Hw(this, b), this.Jb && a.postRenderFunctions.push(function (a, b) {
            a.isContextLost() || a.deleteTexture(b)
        }.bind(null, c, this.Jb)));
        l && (c = this.c.getContext().j, Iw(this, c.width, c.height, d, f, g, h, l.G()), this.l = null, d = this.v, We(d), bf(d, 1,
            -1), cf(d, 0, -1), this.N = l, this.Jb = m, li(a.attributions, l.c), mi(a, n));
        return !!l
    };
    function Iw(a, b, c, d, e, f, g, h) {
        b *= f;
        c *= f;
        a = a.O;
        We(a);
        bf(a, 2 * d / b, 2 * d / c);
        af(a, -g);
        cf(a, h[0] - e[0], h[1] - e[1]);
        bf(a, (h[2] - h[0]) / 2, (h[3] - h[1]) / 2);
        cf(a, 1, 1)
    }

    Gw.prototype.ef = function (a, b) {
        return void 0 !== this.Fa(a, b, 0, Qe, this)
    };
    Gw.prototype.yg = function (a, b, c, d) {
        if (this.N && this.N.Y())if (this.a.ja() instanceof Ew) {
            var e = $e(b.pixelToCoordinateTransform, a.slice());
            if (this.Fa(e, b, 0, Qe, this))return c.call(d, this.a, null)
        } else {
            e = [this.N.Y().width, this.N.Y().height];
            if (!this.l) {
                var f = b.size;
                b = Ve();
                cf(b, -1, -1);
                bf(b, 2 / f[0], 2 / f[1]);
                cf(b, 0, f[1]);
                bf(b, 1, -1);
                f = ef(this.O.slice());
                var g = Ve();
                cf(g, 0, e[1]);
                bf(g, 1, -1);
                bf(g, e[0] / 2, e[1] / 2);
                cf(g, 1, 1);
                Ye(g, f);
                Ye(g, b);
                this.l = g
            }
            a = $e(this.l, a.slice());
            if (!(0 > a[0] || a[0] > e[0] || 0 > a[1] || a[1] > e[1]) && (this.i ||
                (this.i = eg(1, 1)), this.i.clearRect(0, 0, 1, 1), this.i.drawImage(this.N.Y(), a[0], a[1], 1, 1, 0, 0, 1, 1), e = this.i.getImageData(0, 0, 1, 1).data, 0 < e[3]))return c.call(d, this.a, e)
        }
    };
    function Jw(a, b) {
        Bi.call(this, 0, b);
        this.b = document.createElement("CANVAS");
        this.b.style.width = "100%";
        this.b.style.height = "100%";
        this.b.style.display = "block";
        this.b.className = "ol-unselectable";
        a.insertBefore(this.b, a.childNodes[0] || null);
        this.O = this.C = 0;
        this.D = eg();
        this.l = !0;
        this.g = id(this.b, {
            antialias: !0,
            depth: !0,
            failIfMajorPerformanceCaveat: !0,
            preserveDrawingBuffer: !1,
            stencil: !0
        });
        this.v = new Pu(this.b, this.g);
        z(this.b, "webglcontextlost", this.jo, this);
        z(this.b, "webglcontextrestored", this.ko, this);
        this.a = new gj;
        this.s = null;
        this.f = new ie(function (a) {
            var b = a[1];
            a = a[2];
            var c = b[0] - this.s[0];
            b = b[1] - this.s[1];
            return 65536 * Math.log(a) + Math.sqrt(c * c + b * b) / a
        }.bind(this), function (a) {
            return a[0].fb()
        });
        this.B = function () {
            if (0 !== this.f.b.length) {
                me(this.f);
                var a = je(this.f);
                Kw(this, a[0], a[3], a[4])
            }
            return !1
        }.bind(this);
        this.i = 0;
        Lw(this)
    }

    v(Jw, Bi);
    Jw.handles = function (a) {
        return jd && "webgl" === a
    };
    Jw.create = function (a, b) {
        return new Jw(a, b)
    };
    function Kw(a, b, c, d) {
        var e = a.g, f = b.fb();
        if (a.a.b.hasOwnProperty(f)) a = a.a.get(f), e.bindTexture(3553, a.Jb), 9729 != a.fi && (e.texParameteri(3553, 10240, 9729), a.fi = 9729), 9729 != a.hi && (e.texParameteri(3553, 10241, 9729), a.hi = 9729); else {
            var g = e.createTexture();
            e.bindTexture(3553, g);
            if (0 < d) {
                var h = a.D.canvas, l = a.D;
                a.C !== c[0] || a.O !== c[1] ? (h.width = c[0], h.height = c[1], a.C = c[0], a.O = c[1]) : l.clearRect(0, 0, c[0], c[1]);
                l.drawImage(b.Y(), d, d, c[0], c[1], 0, 0, c[0], c[1]);
                e.texImage2D(3553, 0, 6408, 6408, 5121, h)
            } else e.texImage2D(3553,
                0, 6408, 6408, 5121, b.Y());
            e.texParameteri(3553, 10240, 9729);
            e.texParameteri(3553, 10241, 9729);
            e.texParameteri(3553, 10242, 33071);
            e.texParameteri(3553, 10243, 33071);
            a.a.set(f, {Jb: g, fi: 9729, hi: 9729})
        }
    }

    function Mw(a, b, c) {
        var d = a.j;
        if (Uc(d, b)) {
            a = a.v;
            var e = c.viewState;
            d.b(new Jh(b, new hw(a, e.center, e.resolution, e.rotation, c.size, c.extent, c.pixelRatio), c, null, a))
        }
    }

    k = Jw.prototype;
    k.la = function () {
        var a = this.g;
        a.isContextLost() || this.a.forEach(function (b) {
            b && a.deleteTexture(b.Jb)
        });
        Qc(this.v);
        Bi.prototype.la.call(this)
    };
    k.Jk = function (a, b) {
        a = this.g;
        for (var c; 1024 < this.a.c - this.i;) {
            if (c = this.a.a.dd) a.deleteTexture(c.Jb); else if (+this.a.a.xc == b.index)break; else--this.i;
            this.a.pop()
        }
    };
    k.getContext = function () {
        return this.v
    };
    k.S = function () {
        return "webgl"
    };
    k.jo = function (a) {
        a.preventDefault();
        this.a.clear();
        this.i = 0;
        a = this.c;
        for (var b in a)a[b].zg()
    };
    k.ko = function () {
        Lw(this);
        this.j.render()
    };
    function Lw(a) {
        a = a.g;
        a.activeTexture(33984);
        a.blendFuncSeparate(770, 771, 1, 771);
        a.disable(2884);
        a.disable(2929);
        a.disable(3089);
        a.disable(2960)
    }

    k.ah = function (a) {
        var b = this.getContext(), c = this.g;
        if (c.isContextLost())return !1;
        if (!a)return this.l && (this.b.style.display = "none", this.l = !1), !1;
        this.s = a.focus;
        this.a.set((-a.index).toString(), null);
        ++this.i;
        Mw(this, "precompose", a);
        var d = [], e = a.layerStatesArray;
        na(e);
        var f = a.viewState.resolution, g;
        var h = 0;
        for (g = e.length; h < g; ++h) {
            var l = e[h];
            if (yi(l, f) && "ready" == l.Oj) {
                var m = Ei(this, l.layer);
                m.Ag(a, l, b) && d.push(l)
            }
        }
        e = a.size[0] * a.pixelRatio;
        f = a.size[1] * a.pixelRatio;
        if (this.b.width != e || this.b.height != f) this.b.width =
            e, this.b.height = f;
        c.bindFramebuffer(36160, null);
        c.clearColor(0, 0, 0, 0);
        c.clear(16384);
        c.enable(3042);
        c.viewport(0, 0, this.b.width, this.b.height);
        h = 0;
        for (g = d.length; h < g; ++h)l = d[h], m = Ei(this, l.layer), m.Ui(a, l, b);
        this.l || (this.b.style.display = "", this.l = !0);
        Ci(a);
        1024 < this.a.c - this.i && a.postRenderFunctions.push(this.Jk.bind(this));
        0 !== this.f.b.length && (a.postRenderFunctions.push(this.B), a.animate = !0);
        Mw(this, "postcompose", a);
        Fi(this, a);
        a.postRenderFunctions.push(Di)
    };
    k.Fa = function (a, b, c, d, e, f, g) {
        if (this.g.isContextLost())return !1;
        var h = b.viewState, l = b.layerStatesArray, m;
        for (m = l.length - 1; 0 <= m; --m) {
            var n = l[m];
            var p = n.layer;
            if (yi(n, h.resolution) && f.call(g, p) && (n = Ei(this, p).Fa(a, b, c, d, e)))return n
        }
    };
    k.Si = function (a, b, c, d, e) {
        c = !1;
        if (this.g.isContextLost())return !1;
        var f = b.viewState, g = b.layerStatesArray, h;
        for (h = g.length - 1; 0 <= h; --h) {
            var l = g[h], m = l.layer;
            if (yi(l, f.resolution) && d.call(e, m) && (c = Ei(this, m).ef(a, b)))return !0
        }
        return c
    };
    k.Ri = function (a, b, c, d, e) {
        if (this.g.isContextLost())return !1;
        var f = b.viewState, g = b.layerStatesArray, h;
        for (h = g.length - 1; 0 <= h; --h) {
            var l = g[h];
            var m = l.layer;
            if (yi(l, f.resolution) && e.call(d, m) && (l = Ei(this, m).yg(a, b, c, d)))return l
        }
    };
    var Nw = new ru("precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}"),
        Ow = new su("varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}");

    function Pw(a, b) {
        this.c = a.getUniformLocation(b, "d");
        this.g = a.getUniformLocation(b, "e");
        this.b = a.getAttribLocation(b, "b");
        this.a = a.getAttribLocation(b, "c")
    };
    function Qw(a, b) {
        mw.call(this, a, b);
        this.I = Nw;
        this.fa = Ow;
        this.i = null;
        this.B = new Gu([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
        this.C = this.l = null;
        this.o = -1;
        this.T = [0, 0]
    }

    v(Qw, mw);
    Qw.handles = function (a, b) {
        return "webgl" === a && "TILE" === b.S()
    };
    Qw.create = function (a, b) {
        return new Qw(a, b)
    };
    k = Qw.prototype;
    k.la = function () {
        Ju(this.c.getContext(), this.B);
        mw.prototype.la.call(this)
    };
    k.Sf = function (a, b, c) {
        var d = this.c;
        return function (e, f) {
            return hi(a, b, e, f, function (a) {
                var b = d.a.b.hasOwnProperty(a.fb());
                b && (c[e] || (c[e] = {}), c[e][a.Ba.toString()] = a);
                return b
            })
        }
    };
    k.zg = function () {
        mw.prototype.zg.call(this);
        this.i = null
    };
    k.Ag = function (a, b, c) {
        var d = this.c, e = c.b, f = a.viewState, g = f.projection, h = this.a, l = h.ja(), m = l.Xa(g),
            n = m.wc(f.resolution), p = m.Qa(n), q = l.ce(n, a.pixelRatio, g), r = q[0] / Na(m.eb(n), this.T)[0],
            u = p / r, x = l.Rc(r) * l.ag(g), B = f.center, A = a.extent, y = tc(m, A, n);
        if (this.l && Aa(this.l, y) && this.o == l.g) u = this.C; else {
            var N = [y.da - y.ba + 1, y.ga - y.ea + 1], ca = Fa(Math.max(N[0] * q[0], N[1] * q[1]));
            N = u * ca;
            var la = m.Cc(n), fa = la[0] + y.ba * q[0] * u;
            u = la[1] + y.ea * q[1] * u;
            u = [fa, u, fa + N, u + N];
            nw(this, a, ca);
            e.viewport(0, 0, ca, ca);
            e.clearColor(0, 0, 0, 0);
            e.clear(16384);
            e.disable(3042);
            ca = Ku(c, this.I, this.fa);
            c.Vc(ca);
            this.i || (this.i = new Pw(e, ca));
            zu(c, 34962, this.B);
            e.enableVertexAttribArray(this.i.b);
            e.vertexAttribPointer(this.i.b, 2, 5126, !1, 16, 0);
            e.enableVertexAttribArray(this.i.a);
            e.vertexAttribPointer(this.i.a, 2, 5126, !1, 16, 8);
            e.uniform1i(this.i.g, 0);
            c = {};
            c[n] = {};
            var va = this.Sf(l, g, c), ra = h.i();
            ca = !0;
            fa = Pa();
            var T = new xa(0, 0, 0, 0), U, Xb;
            for (U = y.ba; U <= y.da; ++U)for (Xb = y.ea; Xb <= y.ga; ++Xb) {
                la = l.Tc(n, U, Xb, r, g);
                if (void 0 !== b.extent) {
                    var Ca = m.Ja(la.Ba, fa);
                    if (!qb(Ca, b.extent))continue
                }
                Ca =
                    la.getState();
                (Ca = 2 == Ca || 4 == Ca || 3 == Ca && !ra) || (la = Li(la));
                Ca = la.getState();
                if (2 == Ca) {
                    if (d.a.b.hasOwnProperty(la.fb())) {
                        c[n][la.Ba.toString()] = la;
                        continue
                    }
                } else if (4 == Ca || 3 == Ca && !ra)continue;
                ca = !1;
                Ca = uc(m, la.Ba, va, T, fa);
                Ca || (la = vc(m, la.Ba, T, fa)) && va(n + 1, la)
            }
            b = Object.keys(c).map(Number);
            b.sort(ea);
            va = new Float32Array(4);
            var Cb;
            ra = 0;
            for (T = b.length; ra < T; ++ra)for (Cb in U = c[b[ra]], U)la = U[Cb], Ca = m.Ja(la.Ba, fa), va[0] = 2 * (Ca[2] - Ca[0]) / N, va[1] = 2 * (Ca[3] - Ca[1]) / N, va[2] = 2 * (Ca[0] - u[0]) / N - 1, va[3] = 2 * (Ca[1] - u[1]) / N -
                1, e.uniform4fv(this.i.c, va), Kw(d, la, q, x * r), e.drawArrays(5, 0, 4);
            ca ? (this.l = y, this.C = u, this.o = l.g) : (this.C = this.l = null, this.o = -1, a.animate = !0)
        }
        ni(a.usedTiles, l, n, y);
        var nc = d.f;
        oi(a, l, m, r, g, A, n, h.c(), function (a) {
            2 != a.getState() || d.a.b.hasOwnProperty(a.fb()) || a.fb() in nc.a || nc.i([a, yc(m, a.Ba), m.Qa(a.Ba[0]), q, x * r])
        }, this);
        ki(a, l);
        mi(a, l);
        e = this.v;
        We(e);
        cf(e, (Math.round(B[0] / p) * p - u[0]) / (u[2] - u[0]), (Math.round(B[1] / p) * p - u[1]) / (u[3] - u[1]));
        0 !== f.rotation && af(e, f.rotation);
        bf(e, a.size[0] * f.resolution / (u[2] -
            u[0]), a.size[1] * f.resolution / (u[3] - u[1]));
        cf(e, -.5, -.5);
        return !0
    };
    k.yg = function (a, b, c, d) {
        if (this.f) {
            a = $e(this.v, [a[0] / b.size[0], (b.size[1] - a[1]) / b.size[1]].slice());
            a = [a[0] * this.j, a[1] * this.j];
            b = this.c.getContext().b;
            b.bindFramebuffer(b.FRAMEBUFFER, this.f);
            var e = new Uint8Array(4);
            b.readPixels(a[0], a[1], 1, 1, b.RGBA, b.UNSIGNED_BYTE, e);
            if (0 < e[3])return c.call(d, this.a, e)
        }
    };
    function Rw(a, b) {
        mw.call(this, a, b);
        this.o = !1;
        this.T = -1;
        this.I = NaN;
        this.C = Pa();
        this.l = this.i = this.B = null
    }

    v(Rw, mw);
    Rw.handles = function (a, b) {
        return "webgl" === a && "VECTOR" === b.S()
    };
    Rw.create = function (a, b) {
        return new Rw(a, b)
    };
    k = Rw.prototype;
    k.Ui = function (a, b, c) {
        this.l = b;
        var d = a.viewState, e = this.i, f = a.size, g = a.pixelRatio, h = this.c.g;
        e && !e.c() && (h.enable(h.SCISSOR_TEST), h.scissor(0, 0, f[0] * g, f[1] * g), e.Ka(c, d.center, d.resolution, d.rotation, f, g, b.opacity, b.Ve ? a.skippedFeatureUids : {}), h.disable(h.SCISSOR_TEST))
    };
    k.la = function () {
        var a = this.i;
        if (a) {
            var b = this.c.getContext();
            bw(a, b)();
            this.i = null
        }
        mw.prototype.la.call(this)
    };
    k.Fa = function (a, b, c, d, e) {
        if (this.i && this.l) {
            c = this.c.getContext();
            var f = b.viewState, g = this.a, h = {};
            return this.i.Fa(a, c, f.center, f.resolution, f.rotation, b.size, b.pixelRatio, this.l.opacity, {}, function (a) {
                var b = w(a).toString();
                if (!(b in h))return h[b] = !0, d.call(e, a, g)
            })
        }
    };
    k.ef = function (a, b) {
        if (this.i && this.l) {
            var c = this.c.getContext(), d = b.viewState;
            return gw(this.i, a, c, d.resolution, d.rotation, b.pixelRatio, this.l.opacity, b.skippedFeatureUids)
        }
        return !1
    };
    k.yg = function (a, b, c, d) {
        a = $e(b.pixelToCoordinateTransform, a.slice());
        if (this.ef(a, b))return c.call(d, this.a, null)
    };
    k.Vi = function () {
        ii(this)
    };
    k.Ag = function (a, b, c) {
        function d(a) {
            var b = a.bb();
            if (b)var c = b.call(a, m); else(b = e.bb()) && (c = b(a, m));
            if (c) {
                if (c) {
                    b = !1;
                    if (Array.isArray(c))for (var d = c.length - 1; 0 <= d; --d)b = yj(q, a, c[d], xj(m, n), this.Vi, this) || b; else b = yj(q, a, c, xj(m, n), this.Vi, this) || b;
                    a = b
                } else a = !1;
                this.o = this.o || a
            }
        }

        var e = this.a;
        b = e.ja();
        li(a.attributions, b.j);
        mi(a, b);
        var f = a.viewHints[0], g = a.viewHints[1], h = e.U, l = e.sa;
        if (!this.o && !h && f || !l && g)return !0;
        g = a.extent;
        h = a.viewState;
        f = h.projection;
        var m = h.resolution, n = a.pixelRatio;
        h = e.g;
        var p =
            e.f;
        l = e.get(Cj);
        void 0 === l && (l = wj);
        g = Ra(g, p * m);
        if (!this.o && this.I == m && this.T == h && this.B == l && Wa(this.C, g))return !0;
        this.i && a.postRenderFunctions.push(bw(this.i, c));
        this.o = !1;
        var q = new aw(.5 * m / n, g, e.f);
        b.de(g, m, f);
        if (l) {
            var r = [];
            b.ac(g, function (a) {
                r.push(a)
            }, this);
            r.sort(l);
            r.forEach(d, this)
        } else b.ac(g, d, this);
        cw(q, c);
        this.I = m;
        this.T = h;
        this.B = l;
        this.C = g;
        this.i = q;
        return !0
    };
    ng("MAP_RENDERER", Gi);
    og([wi, Ii, Bj, Dj]);
    ng("MAP_RENDERER", Jw);
    og([Gw, Qw, Rw]);
    function W(a) {
        a = tb({}, a);
        a.controls || (a.controls = yg());
        a.interactions || (a.interactions = Ih());
        F.call(this, a)
    }

    v(W, F);
    function Sw(a, b, c, d) {
        function e() {
            delete window[g];
            f.parentNode.removeChild(f)
        }

        var f = document.createElement("script"), g = "olc_" + w(b);
        f.async = !0;
        f.src = a + (-1 == a.indexOf("?") ? "?" : "&") + (d || "callback") + "=" + g;
        var h = setTimeout(function () {
            e();
            c && c()
        }, 1E4);
        window[g] = function (a) {
            clearTimeout(h);
            e();
            b(a)
        };
        document.getElementsByTagName("head")[0].appendChild(f)
    };
    function Tw(a, b, c, d, e, f, g, h, l, m, n) {
        ts.call(this, e, 0);
        this.B = void 0 !== n ? n : !1;
        this.D = g;
        this.C = h;
        this.O = null;
        this.c = b;
        this.l = d;
        this.v = f ? f : e;
        this.a = [];
        this.Gd = null;
        this.f = 0;
        f = d.Ja(this.v);
        h = this.l.G();
        e = this.c.G();
        f = h ? pb(f, h) : f;
        if (0 === jb(f)) this.state = 4; else if ((h = a.G()) && (e ? e = pb(e, h) : e = h), d = pw(a, c, nb(f), d.Qa(this.v[0])), !isFinite(d) || 0 >= d) this.state = 4; else if (this.s = new sw(a, c, f, e, d * (void 0 !== m ? m : .5)), 0 === this.s.c.length) this.state = 4; else if (this.f = b.wc(d), c = uw(this.s), e && (a.g ? (c[1] = Da(c[1], e[1], e[3]),
                c[3] = Da(c[3], e[1], e[3])) : c = pb(c, e)), jb(c)) {
            a = tc(b, c, this.f);
            for (b = a.ba; b <= a.da; b++)for (c = a.ea; c <= a.ga; c++)(m = l(this.f, b, c, g)) && this.a.push(m);
            0 === this.a.length && (this.state = 4)
        } else this.state = 4
    }

    v(Tw, ts);
    Tw.prototype.la = function () {
        1 == this.state && (this.Gd.forEach(Hc), this.Gd = null);
        ts.prototype.la.call(this)
    };
    Tw.prototype.Y = function () {
        return this.O
    };
    Tw.prototype.ke = function () {
        var a = [];
        this.a.forEach(function (b) {
            b && 2 == b.getState() && a.push({extent: this.c.Ja(b.Ba), image: b.Y()})
        }, this);
        this.a.length = 0;
        if (0 === a.length) this.state = 3; else {
            var b = this.v[0], c = this.l.eb(b), d = "number" === typeof c ? c : c[0];
            c = "number" === typeof c ? c : c[1];
            b = this.l.Qa(b);
            var e = this.c.Qa(this.f), f = this.l.Ja(this.v);
            this.O = rw(d, c, this.D, e, this.c.G(), b, f, this.s, a, this.C, this.B);
            this.state = 2
        }
        this.u()
    };
    Tw.prototype.load = function () {
        if (0 == this.state) {
            this.state = 1;
            this.u();
            var a = 0;
            this.Gd = [];
            this.a.forEach(function (b) {
                var c = b.getState();
                if (0 == c || 1 == c) {
                    a++;
                    var d = z(b, "change", function () {
                        var c = b.getState();
                        if (2 == c || 3 == c || 4 == c) Hc(d), a--, 0 === a && (this.Gd.forEach(Hc), this.Gd = null, this.ke())
                    }, this);
                    this.Gd.push(d)
                }
            }, this);
            this.a.forEach(function (a) {
                0 == a.getState() && a.load()
            });
            0 === a && setTimeout(this.ke.bind(this), 0)
        }
    };
    function Uw(a, b) {
        var c = /\{z\}/g, d = /\{x\}/g, e = /\{y\}/g, f = /\{-y\}/g;
        return function (g) {
            if (g)return a.replace(c, g[0].toString()).replace(d, g[1].toString()).replace(e, function () {
                return (-g[2] - 1).toString()
            }).replace(f, function () {
                var a = b.a ? b.a[g[0]] : null;
                wa(a, 55);
                return (a.ga - a.ea + 1 + g[2]).toString()
            })
        }
    }

    function Vw(a, b) {
        for (var c = a.length, d = Array(c), e = 0; e < c; ++e)d[e] = Uw(a[e], b);
        return Ww(d)
    }

    function Ww(a) {
        return 1 === a.length ? a[0] : function (b, c, d) {
            if (b)return a[Ja((b[1] << b[0]) + b[2], a.length)](b, c, d)
        }
    }

    function Xw() {
    }

    function Yw(a) {
        var b = [], c = /\{([a-z])-([a-z])\}/.exec(a);
        if (c) {
            var d = c[2].charCodeAt(0), e;
            for (e = c[1].charCodeAt(0); e <= d; ++e)b.push(a.replace(c[0], String.fromCharCode(e)));
            return b
        }
        if (c = c = /\{(\d+)-(\d+)\}/.exec(a)) {
            d = parseInt(c[2], 10);
            for (e = parseInt(c[1], 10); e <= d; e++)b.push(a.replace(c[0], e.toString()));
            return b
        }
        b.push(a);
        return b
    };
    function Zw(a) {
        gj.call(this, a)
    }

    v(Zw, gj);
    Zw.prototype.ld = function (a) {
        for (var b, c; hj(this);) {
            b = this.a.dd;
            c = b.Ba[0].toString();
            var d;
            if (d = c in a) b = b.Ba, d = za(a[c], b[1], b[2]);
            if (d)break; else Qc(this.pop())
        }
    };
    function $w(a) {
        Ls.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            state: a.state,
            wrapX: a.wrapX
        });
        this.ab = void 0 !== a.opaque ? a.opaque : !1;
        this.Kb = void 0 !== a.tilePixelRatio ? a.tilePixelRatio : 1;
        this.tileGrid = void 0 !== a.tileGrid ? a.tileGrid : null;
        this.a = new Zw(a.cacheSize);
        this.l = [0, 0];
        this.xc = "";
        this.ta = {transition: a.transition}
    }

    v($w, Ls);
    k = $w.prototype;
    k.Yi = function () {
        return hj(this.a)
    };
    k.ld = function (a, b) {
        (a = this.be(a)) && a.ld(b)
    };
    function hi(a, b, c, d, e) {
        b = a.be(b);
        if (!b)return !1;
        for (var f = !0, g, h,
                 l = d.ba; l <= d.da; ++l)for (var m = d.ea; m <= d.ga; ++m)g = a.Sb(c, l, m), h = !1, b.b.hasOwnProperty(g) && (g = b.get(g), (h = 2 === g.getState()) && (h = !1 !== e(g))), h || (f = !1);
        return f
    }

    k.ag = function () {
        return 0
    };
    function ax(a, b) {
        a.xc !== b && (a.xc = b, a.u())
    }

    k.Sb = function (a, b, c) {
        return a + "/" + b + "/" + c
    };
    k.gg = function () {
        return this.ab
    };
    k.cb = function () {
        return this.tileGrid
    };
    k.Xa = function (a) {
        return this.tileGrid ? this.tileGrid : zc(a)
    };
    k.be = function (a) {
        var b = this.c;
        return b && !hc(b, a) ? null : this.a
    };
    k.Rc = function () {
        return this.Kb
    };
    k.ce = function (a, b, c) {
        c = this.Xa(c);
        b = this.Rc(b);
        a = Na(c.eb(a), this.l);
        return 1 == b ? a : Ma(a, b, this.l)
    };
    function bx(a, b, c) {
        var d = void 0 !== c ? c : a.c;
        c = a.Xa(d);
        if (a.C && d.c) {
            var e = b;
            b = e[0];
            a = yc(c, e);
            d = Dc(d);
            Ua(d, a) ? b = e : (e = lb(d), a[0] += e * Math.ceil((d[0] - a[0]) / e), b = c.lg(a, b))
        }
        e = b[0];
        d = b[1];
        a = b[2];
        if (c.minZoom > e || e > c.maxZoom) c = !1; else {
            var f = c.G();
            c = (c = f ? tc(c, f, e) : c.a ? c.a[e] : null) ? za(c, d, a) : !0
        }
        return c ? b : null
    }

    k.ua = function () {
        this.a.clear();
        this.u()
    };
    k.jh = sa;
    function cx(a, b) {
        Rc.call(this, a);
        this.tile = b
    }

    v(cx, Rc);
    function dx(a) {
        $w.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            extent: a.extent,
            logo: a.logo,
            opaque: a.opaque,
            projection: a.projection,
            state: a.state,
            tileGrid: a.tileGrid,
            tilePixelRatio: a.tilePixelRatio,
            wrapX: a.wrapX,
            transition: a.transition
        });
        this.tileLoadFunction = a.tileLoadFunction;
        this.tileUrlFunction = this.Kc ? this.Kc.bind(this) : Xw;
        this.urls = null;
        a.urls ? this.jb(a.urls) : a.url && this.ob(a.url);
        a.tileUrlFunction && this.ib(a.tileUrlFunction);
        this.T = {}
    }

    v(dx, $w);
    k = dx.prototype;
    k.ub = function () {
        return this.tileLoadFunction
    };
    k.vb = function () {
        return this.tileUrlFunction
    };
    k.wb = function () {
        return this.urls
    };
    k.Zi = function (a) {
        a = a.target;
        var b = w(a), c = a.getState();
        if (1 == c) {
            this.T[b] = !0;
            var d = "tileloadstart"
        } else b in this.T && (delete this.T[b], d = 3 == c ? "tileloaderror" : 2 == c || 5 == c ? "tileloadend" : void 0);
        void 0 != d && this.b(new cx(d, a))
    };
    k.Bb = function (a) {
        this.a.clear();
        this.tileLoadFunction = a;
        this.u()
    };
    k.ib = function (a, b) {
        this.tileUrlFunction = a;
        "undefined" !== typeof b ? ax(this, b) : this.u()
    };
    k.ob = function (a) {
        var b = this.urls = Yw(a);
        this.ib(this.Kc ? this.Kc.bind(this) : Vw(b, this.tileGrid), a)
    };
    k.jb = function (a) {
        this.urls = a;
        var b = a.join("\n");
        this.ib(this.Kc ? this.Kc.bind(this) : Vw(a, this.tileGrid), b)
    };
    k.jh = function (a, b, c) {
        a = this.Sb(a, b, c);
        this.a.b.hasOwnProperty(a) && this.a.get(a)
    };
    function X(a) {
        dx.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            extent: a.extent,
            logo: a.logo,
            opaque: a.opaque,
            projection: a.projection,
            state: a.state,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : ex,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: a.wrapX,
            transition: a.transition
        });
        this.crossOrigin = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.tileClass = a.tileClass ? a.tileClass : vs;
        this.f = {};
        this.v = {};
        this.tb = a.reprojectionErrorThreshold;
        this.I = !1
    }

    v(X, dx);
    k = X.prototype;
    k.Yi = function () {
        if (hj(this.a))return !0;
        for (var a in this.f)if (hj(this.f[a]))return !0;
        return !1
    };
    k.ld = function (a, b) {
        a = this.be(a);
        this.a.ld(this.a == a ? b : {});
        for (var c in this.f) {
            var d = this.f[c];
            d.ld(d == a ? b : {})
        }
    };
    k.ag = function (a) {
        return this.c && a && !hc(this.c, a) ? 0 : this.bg()
    };
    k.bg = function () {
        return 0
    };
    k.gg = function (a) {
        return this.c && a && !hc(this.c, a) ? !1 : dx.prototype.gg.call(this, a)
    };
    k.Xa = function (a) {
        var b = this.c;
        return !this.tileGrid || b && !hc(b, a) ? (b = w(a).toString(), b in this.v || (this.v[b] = zc(a)), this.v[b]) : this.tileGrid
    };
    k.be = function (a) {
        var b = this.c;
        if (!b || hc(b, a))return this.a;
        a = w(a).toString();
        a in this.f || (this.f[a] = new Zw(this.a.highWaterMark));
        return this.f[a]
    };
    function fx(a, b, c, d, e, f, g) {
        b = [b, c, d];
        e = (c = bx(a, b, f)) ? a.tileUrlFunction(c, e, f) : void 0;
        e = new a.tileClass(b, void 0 !== e ? 0 : 4, void 0 !== e ? e : "", a.crossOrigin, a.tileLoadFunction, a.ta);
        e.key = g;
        z(e, "change", a.Zi, a);
        return e
    }

    k.Tc = function (a, b, c, d, e) {
        if (this.c && e && !hc(this.c, e)) {
            var f = this.be(e);
            c = [a, b, c];
            var g;
            a = this.Sb.apply(this, c);
            f.b.hasOwnProperty(a) && (g = f.get(a));
            b = this.xc;
            if (g && g.key == b)return g;
            var h = this.c, l = this.Xa(h), m = this.Xa(e), n = bx(this, c, e);
            d = new Tw(h, l, e, m, c, n, this.Rc(d), this.bg(), function (a, b, c, d) {
                return gx(this, a, b, c, d, h)
            }.bind(this), this.tb, this.I);
            d.key = b;
            g ? (d.g = g, us(d), f.replace(a, d)) : f.set(a, d);
            return d
        }
        return gx(this, a, b, c, d, e)
    };
    function gx(a, b, c, d, e, f) {
        var g = a.Sb(b, c, d), h = a.xc;
        if (a.a.b.hasOwnProperty(g)) {
            var l = a.a.get(g);
            if (l.key != h) {
                var m = l;
                l = fx(a, b, c, d, e, f, h);
                0 == m.getState() ? l.g = m.g : l.g = m;
                us(l);
                a.a.replace(g, l)
            }
        } else l = fx(a, b, c, d, e, f, h), a.a.set(g, l);
        return l
    }

    k.Ob = function (a) {
        if (this.I != a) {
            this.I = a;
            for (var b in this.f)this.f[b].clear();
            this.u()
        }
    };
    k.Pb = function (a, b) {
        if (a = Zb(a)) a = w(a).toString(), a in this.v || (this.v[a] = b)
    };
    function ex(a, b) {
        a.Y().src = b
    };
    function hx(a) {
        this.i = void 0 !== a.hidpi ? a.hidpi : !1;
        X.call(this, {
            cacheSize: a.cacheSize,
            crossOrigin: "anonymous",
            opaque: !0,
            projection: Zb("EPSG:3857"),
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            state: "loading",
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: this.i ? 2 : 1,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0,
            transition: a.transition
        });
        this.U = void 0 !== a.culture ? a.culture : "en-us";
        this.B = void 0 !== a.maxZoom ? a.maxZoom : -1;
        this.o = a.key;
        this.s = a.imagerySet;
        Sw("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/" +
            this.s + "?uriScheme=https&include=ImageryProviders&key=" + this.o, this.Va.bind(this), void 0, "jsonp")
    }

    v(hx, X);
    var ix = new Fc({html: '<a class="ol-attribution-bing-tos" href="https://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'});
    hx.prototype.fa = function () {
        return this.o
    };
    hx.prototype.ia = function () {
        return this.s
    };
    hx.prototype.Va = function (a) {
        if (200 != a.statusCode || "OK" != a.statusDescription || "ValidCredentials" != a.authenticationResultCode || 1 != a.resourceSets.length || 1 != a.resourceSets[0].resources.length) Ns(this, "error"); else {
            var b = a.brandLogoUri;
            -1 == b.indexOf("https") && (b = b.replace("http", "https"));
            var c = a.resourceSets[0].resources[0], d = -1 == this.B ? c.zoomMax : this.B;
            a = Dc(this.c);
            var e = Bc({
                extent: a,
                minZoom: c.zoomMin,
                maxZoom: d,
                tileSize: (c.imageWidth == c.imageHeight ? c.imageWidth : [c.imageWidth, c.imageHeight]) / (this.i ?
                    2 : 1)
            });
            this.tileGrid = e;
            var f = this.U, g = this.i;
            this.tileUrlFunction = Ww(c.imageUrlSubdomains.map(function (a) {
                var b = [0, 0, 0], d = c.imageUrl.replace("{subdomain}", a).replace("{culture}", f);
                return function (a) {
                    if (a)return oc(a[0], a[1], -a[2] - 1, b), a = d, g && (a += "&dpi=d1&device=mobile"), a.replace("{quadkey}", pc(b))
                }
            }));
            if (c.imageryProviders) {
                var h = $b(Zb("EPSG:4326"), this.c);
                a = c.imageryProviders.map(function (a) {
                    var b = a.attribution, c = {};
                    a.coverageAreas.forEach(function (a) {
                        var b = a.zoomMin, f = Math.min(a.zoomMax, d);
                        a =
                            a.bbox;
                        a = sb([a[1], a[0], a[3], a[2]], h);
                        var g;
                        for (g = b; g <= f; ++g) {
                            var l = g.toString();
                            b = tc(e, a, g);
                            l in c ? c[l].push(b) : c[l] = [b]
                        }
                    });
                    return new Fc({html: b, tileRanges: c})
                });
                a.push(ix);
                this.va(a)
            }
            this.D = b;
            Ns(this, "ready")
        }
    };
    function jx(a) {
        a = a || {};
        var b = void 0 !== a.projection ? a.projection : "EPSG:3857", c = void 0 !== a.tileGrid ? a.tileGrid : Bc({
            extent: Dc(b),
            maxZoom: a.maxZoom,
            minZoom: a.minZoom,
            tileSize: a.tileSize
        });
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            opaque: a.opaque,
            projection: b,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: c,
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0,
            transition: a.transition
        })
    }

    v(jx, X);
    function kx(a) {
        this.s = a.account;
        this.B = a.map || "";
        this.i = a.config || {};
        this.o = {};
        jx.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            maxZoom: void 0 !== a.maxZoom ? a.maxZoom : 18,
            minZoom: a.minZoom,
            projection: a.projection,
            state: "loading",
            wrapX: a.wrapX
        });
        lx(this)
    }

    v(kx, jx);
    k = kx.prototype;
    k.Vk = function () {
        return this.i
    };
    k.xq = function (a) {
        tb(this.i, a);
        lx(this)
    };
    k.$p = function (a) {
        this.i = a || {};
        lx(this)
    };
    function lx(a) {
        var b = JSON.stringify(a.i);
        if (a.o[b]) mx(a, a.o[b]); else {
            var c = "https://" + a.s + ".carto.com/api/v1/map";
            a.B && (c += "/named/" + a.B);
            var d = new XMLHttpRequest;
            d.addEventListener("load", a.Ml.bind(a, b));
            d.addEventListener("error", a.Ll.bind(a));
            d.open("POST", c);
            d.setRequestHeader("Content-type", "application/json");
            d.send(JSON.stringify(a.i))
        }
    }

    k.Ml = function (a, b) {
        b = b.target;
        if (!b.status || 200 <= b.status && 300 > b.status) {
            try {
                var c = JSON.parse(b.responseText)
            } catch (d) {
                Ns(this, "error");
                return
            }
            mx(this, c);
            this.o[a] = c;
            Ns(this, "ready")
        } else Ns(this, "error")
    };
    k.Ll = function () {
        Ns(this, "error")
    };
    function mx(a, b) {
        a.ob("https://" + b.cdn_url.https + "/" + a.s + "/api/v1/map/" + b.layergroupid + "/{z}/{x}/{y}.png")
    };
    function Y(a) {
        R.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            wrapX: a.wrapX
        });
        this.resolution = void 0;
        this.distance = void 0 !== a.distance ? a.distance : 20;
        this.features = [];
        this.geometryFunction = a.geometryFunction || function (a) {
                a = a.W();
                wa(a instanceof C, 10);
                return a
            };
        this.source = a.source;
        this.source.J("change", Y.prototype.ua, this)
    }

    v(Y, R);
    k = Y.prototype;
    k.lo = function () {
        return this.distance
    };
    k.mo = function () {
        return this.source
    };
    k.de = function (a, b, c) {
        this.source.de(a, b, c);
        b !== this.resolution && (this.clear(), this.resolution = b, nx(this), this.Hc(this.features))
    };
    k.aq = function (a) {
        this.distance = a;
        this.ua()
    };
    k.ua = function () {
        this.clear();
        nx(this);
        this.Hc(this.features);
        R.prototype.ua.call(this)
    };
    function nx(a) {
        if (void 0 !== a.resolution) {
            a.features.length = 0;
            for (var b = Pa(), c = a.distance * a.resolution, d = a.source.ge(), e = {}, f = 0,
                     g = d.length; f < g; f++) {
                var h = d[f];
                w(h).toString() in e || !(h = a.geometryFunction(h)) || (h = h.V(), $a(h, b), Ra(b, c, b), h = a.source.$f(b), h = h.filter(function (a) {
                    a = w(a).toString();
                    return a in e ? !1 : e[a] = !0
                }), a.features.push(ox(a, h)))
            }
        }
    }

    function ox(a, b) {
        for (var c = [0, 0], d = b.length - 1; 0 <= d; --d) {
            var e = a.geometryFunction(b[d]);
            e ? ze(c, e.V()) : b.splice(d, 1)
        }
        Ge(c, 1 / b.length);
        a = new Lk(new C(c));
        a.set("features", b);
        return a
    };
    function px(a, b) {
        var c = [];
        Object.keys(b).forEach(function (a) {
            null !== b[a] && void 0 !== b[a] && c.push(a + "=" + encodeURIComponent(b[a]))
        });
        var d = c.join("&");
        a = a.replace(/[?&]$/, "");
        a = -1 === a.indexOf("?") ? a + "?" : a + "&";
        return a + d
    };
    function qx(a) {
        a = a || {};
        ww.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions
        });
        this.T = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.U = void 0 !== a.hidpi ? a.hidpi : !0;
        this.a = a.url;
        this.f = a.imageLoadFunction ? a.imageLoadFunction : Cw;
        this.v = a.params || {};
        this.N = null;
        this.o = [0, 0];
        this.I = 0;
        this.B = void 0 !== a.ratio ? a.ratio : 1.5
    }

    v(qx, ww);
    k = qx.prototype;
    k.oo = function () {
        return this.v
    };
    k.Pc = function (a, b, c, d) {
        if (void 0 === this.a)return null;
        b = xw(this, b);
        c = this.U ? c : 1;
        var e = this.N;
        if (e && this.I == this.g && e.resolution == b && e.a == c && Wa(e.G(), a))return e;
        e = {F: "image", FORMAT: "PNG32", TRANSPARENT: !0};
        tb(e, this.v);
        a = a.slice();
        var f = (a[0] + a[2]) / 2, g = (a[1] + a[3]) / 2;
        if (1 != this.B) {
            var h = this.B * lb(a) / 2, l = this.B * mb(a) / 2;
            a[0] = f - h;
            a[1] = g - l;
            a[2] = f + h;
            a[3] = g + l
        }
        h = b / c;
        l = Math.ceil(lb(a) / h);
        var m = Math.ceil(mb(a) / h);
        a[0] = f - h * l / 2;
        a[2] = f + h * l / 2;
        a[1] = g - h * m / 2;
        a[3] = g + h * m / 2;
        this.o[0] = l;
        this.o[1] = m;
        f = a;
        g = this.o;
        h = c;
        d =
            d.sb.split(":").pop();
        e.SIZE = g[0] + "," + g[1];
        e.BBOX = f.join(",");
        e.BBOXSR = d;
        e.IMAGESR = d;
        e.DPI = Math.round(90 * h);
        d = this.a;
        f = d.replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage");
        f == d && wa(!1, 50);
        e = px(f, e);
        this.N = new rs(a, b, c, this.j, e, this.T, this.f);
        this.I = this.g;
        z(this.N, "change", this.l, this);
        return this.N
    };
    k.no = function () {
        return this.f
    };
    k.po = function () {
        return this.a
    };
    k.qo = function (a) {
        this.N = null;
        this.f = a;
        this.u()
    };
    k.ro = function (a) {
        a != this.a && (this.a = a, this.N = null, this.u())
    };
    k.so = function (a) {
        tb(this.v, a);
        this.N = null;
        this.u()
    };
    function rx(a) {
        ww.call(this, {projection: a.projection, resolutions: a.resolutions});
        this.T = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.o = void 0 !== a.displayDpi ? a.displayDpi : 96;
        this.f = a.params || {};
        this.I = a.url;
        this.a = a.imageLoadFunction ? a.imageLoadFunction : Cw;
        this.U = void 0 !== a.hidpi ? a.hidpi : !0;
        this.ia = void 0 !== a.metersPerUnit ? a.metersPerUnit : 1;
        this.v = void 0 !== a.ratio ? a.ratio : 1;
        this.ta = void 0 !== a.useOverlay ? a.useOverlay : !1;
        this.N = null;
        this.B = 0
    }

    v(rx, ww);
    k = rx.prototype;
    k.uo = function () {
        return this.f
    };
    k.Pc = function (a, b, c) {
        b = xw(this, b);
        c = this.U ? c : 1;
        var d = this.N;
        if (d && this.B == this.g && d.resolution == b && d.a == c && Wa(d.G(), a))return d;
        1 != this.v && (a = a.slice(), rb(a, this.v));
        var e = [lb(a) / b * c, mb(a) / b * c];
        if (void 0 !== this.I) {
            d = this.I;
            var f = nb(a), g = this.ia, h = lb(a), l = mb(a), m = e[0], n = e[1], p = .0254 / this.o;
            e = {
                OPERATION: this.ta ? "GETDYNAMICMAPOVERLAYIMAGE" : "GETMAPIMAGE",
                VERSION: "2.0.0",
                LOCALE: "en",
                CLIENTAGENT: "ol.source.ImageMapGuide source",
                CLIP: "1",
                SETDISPLAYDPI: this.o,
                SETDISPLAYWIDTH: Math.round(e[0]),
                SETDISPLAYHEIGHT: Math.round(e[1]),
                SETVIEWSCALE: n * h > m * l ? h * g / (m * p) : l * g / (n * p),
                SETVIEWCENTERX: f[0],
                SETVIEWCENTERY: f[1]
            };
            tb(e, this.f);
            d = px(d, e);
            d = new rs(a, b, c, this.j, d, this.T, this.a);
            z(d, "change", this.l, this)
        } else d = null;
        this.N = d;
        this.B = this.g;
        return d
    };
    k.to = function () {
        return this.a
    };
    k.wo = function (a) {
        tb(this.f, a);
        this.u()
    };
    k.vo = function (a) {
        this.N = null;
        this.a = a;
        this.u()
    };
    function sx(a) {
        var b = a.imageExtent, c = void 0 !== a.crossOrigin ? a.crossOrigin : null,
            d = a.imageLoadFunction ? a.imageLoadFunction : Cw;
        ww.call(this, {attributions: a.attributions, logo: a.logo, projection: Zb(a.projection)});
        this.N = new rs(b, void 0, 1, this.j, a.url, c, d);
        this.a = a.imageSize ? a.imageSize : null;
        z(this.N, "change", this.l, this)
    }

    v(sx, ww);
    sx.prototype.Pc = function (a) {
        return qb(a, this.N.G()) ? this.N : null
    };
    sx.prototype.l = function (a) {
        if (2 == this.N.getState()) {
            var b = this.N.G(), c = this.N.Y();
            if (this.a) {
                var d = this.a[0];
                var e = this.a[1]
            } else d = c.width, e = c.height;
            b = Math.ceil(lb(b) / (mb(b) / e));
            if (b != d) {
                b = eg(b, e);
                var f = b.canvas;
                b.drawImage(c, 0, 0, d, e, 0, 0, f.width, f.height);
                this.N.hh(f)
            }
        }
        ww.prototype.l.call(this, a)
    };
    function tx(a) {
        a = a || {};
        ww.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions
        });
        this.ia = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.f = a.url;
        this.v = a.imageLoadFunction ? a.imageLoadFunction : Cw;
        this.a = a.params || {};
        this.o = !0;
        ux(this);
        this.U = a.serverType;
        this.ta = void 0 !== a.hidpi ? a.hidpi : !0;
        this.N = null;
        this.B = [0, 0];
        this.T = 0;
        this.I = void 0 !== a.ratio ? a.ratio : 1.5
    }

    v(tx, ww);
    var vx = [101, 101];
    k = tx.prototype;
    k.Bo = function (a, b, c, d) {
        if (void 0 !== this.f) {
            var e = ob(a, b, 0, vx), f = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.a.LAYERS
            };
            tb(f, this.a, d);
            d = Math.floor((e[3] - a[1]) / b);
            f[this.o ? "I" : "X"] = Math.floor((a[0] - e[0]) / b);
            f[this.o ? "J" : "Y"] = d;
            return wx(this, e, vx, 1, Zb(c), f)
        }
    };
    k.Do = function () {
        return this.a
    };
    k.Pc = function (a, b, c, d) {
        if (void 0 === this.f)return null;
        b = xw(this, b);
        1 == c || this.ta && void 0 !== this.U || (c = 1);
        var e = b / c, f = nb(a), g = ob(f, e, 0, [Math.ceil(lb(a) / e), Math.ceil(mb(a) / e)]);
        a = ob(f, e, 0, [Math.ceil(this.I * lb(a) / e), Math.ceil(this.I * mb(a) / e)]);
        if ((f = this.N) && this.T == this.g && f.resolution == b && f.a == c && Wa(f.G(), g))return f;
        g = {SERVICE: "WMS", VERSION: "1.3.0", REQUEST: "GetMap", FORMAT: "image/png", TRANSPARENT: !0};
        tb(g, this.a);
        this.B[0] = Math.round(lb(a) / e);
        this.B[1] = Math.round(mb(a) / e);
        d = wx(this, a, this.B, c, d, g);
        this.N = new rs(a, b, c, this.j, d, this.ia, this.v);
        this.T = this.g;
        z(this.N, "change", this.l, this);
        return this.N
    };
    k.Co = function () {
        return this.v
    };
    function wx(a, b, c, d, e, f) {
        wa(void 0 !== a.f, 9);
        f[a.o ? "CRS" : "SRS"] = e.sb;
        "STYLES" in a.a || (f.STYLES = "");
        if (1 != d)switch (a.U) {
            case "geoserver":
                d = 90 * d + .5 | 0;
                f.FORMAT_OPTIONS = "FORMAT_OPTIONS" in f ? f.FORMAT_OPTIONS + (";dpi:" + d) : "dpi:" + d;
                break;
            case "mapserver":
                f.MAP_RESOLUTION = 90 * d;
                break;
            case "carmentaserver":
            case "qgis":
                f.DPI = 90 * d;
                break;
            default:
                wa(!1, 8)
        }
        f.WIDTH = c[0];
        f.HEIGHT = c[1];
        c = e.b;
        var g;
        a.o && "ne" == c.substr(0, 2) ? g = [b[1], b[0], b[3], b[2]] : g = b;
        f.BBOX = g.join(",");
        return px(a.f, f)
    }

    k.Eo = function () {
        return this.f
    };
    k.Fo = function (a) {
        this.N = null;
        this.v = a;
        this.u()
    };
    k.Go = function (a) {
        a != this.f && (this.f = a, this.N = null, this.u())
    };
    k.Ho = function (a) {
        tb(this.a, a);
        ux(this);
        this.N = null;
        this.u()
    };
    function ux(a) {
        a.o = 0 <= ye(a.a.VERSION || "1.3.0")
    };
    function xx(a) {
        a = a || {};
        var b;
        void 0 !== a.attributions ? b = a.attributions : b = [yx];
        jx.call(this, {
            attributions: b,
            cacheSize: a.cacheSize,
            crossOrigin: void 0 !== a.crossOrigin ? a.crossOrigin : "anonymous",
            opaque: void 0 !== a.opaque ? a.opaque : !0,
            maxZoom: void 0 !== a.maxZoom ? a.maxZoom : 19,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileLoadFunction: a.tileLoadFunction,
            url: void 0 !== a.url ? a.url : "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            wrapX: a.wrapX
        })
    }

    v(xx, jx);
    var yx = new Fc({html: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'});
    Pp.pf = {};
    Pp.pf.If = function () {
    };
    (function (a) {
        function b(a, b, c) {
            if (g)return new ImageData(a, b, c);
            b = h.createImageData(b, c);
            b.data.set(a);
            return b
        }

        function c(a) {
            var b = !0;
            try {
                new ImageData(10, 10)
            } catch (n) {
                b = !1
            }
            return function (c) {
                var d = c.buffers, e = c.meta, f = c.width, g = c.height, h = d.length, l = d[0].byteLength;
                if (c.imageOps) {
                    l = Array(h);
                    for (c = 0; c < h; ++c) {
                        var m = c;
                        var n = new Uint8ClampedArray(d[c]);
                        var N = f, ca = g;
                        n = b ? new ImageData(n, N, ca) : {data: n, width: N, height: ca};
                        l[m] = n
                    }
                    f = a(l, e).data
                } else {
                    f = new Uint8ClampedArray(l);
                    g = Array(h);
                    m = Array(h);
                    for (c = 0; c <
                    h; ++c)g[c] = new Uint8ClampedArray(d[c]), m[c] = [0, 0, 0, 0];
                    for (d = 0; d < l; d += 4) {
                        for (c = 0; c < h; ++c)n = g[c], m[c][0] = n[d], m[c][1] = n[d + 1], m[c][2] = n[d + 2], m[c][3] = n[d + 3];
                        c = a(m, e);
                        f[d] = c[0];
                        f[d + 1] = c[1];
                        f[d + 2] = c[2];
                        f[d + 3] = c[3]
                    }
                }
                return f.buffer
            }
        }

        function d(a, b) {
            var d = Object.keys(a.lib || {}).map(function (b) {
                return "var " + b + " = " + a.lib[b].toString() + ";"
            }).concat(["var __minion__ = (" + c.toString() + ")(", a.operation.toString(), ");", 'self.addEventListener("message", function(event) {', "  var buffer = __minion__(event.data);",
                "  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);", "});"]);
            d = URL.createObjectURL(new Blob(d, {type: "text/javascript"}));
            d = new Worker(d);
            d.addEventListener("message", b);
            return d
        }

        function e(a, b) {
            var d = c(a.operation);
            return {
                postMessage: function (a) {
                    setTimeout(function () {
                        b({data: {buffer: d(a), meta: a.meta}})
                    }, 0)
                }
            }
        }

        function f(a) {
            this.Kf = !!a.jm;
            var b;
            0 === a.threads ? b = 0 : this.Kf ? b = 1 : b = a.threads || 1;
            var c = [];
            if (b)for (var f = 0; f < b; ++f)c[f] = d(a, this.wh.bind(this, f)); else c[0] = e(a, this.wh.bind(this,
                0));
            this.Ae = c;
            this.Ld = [];
            this.uk = a.Ap || Infinity;
            this.ze = 0;
            this.hd = {};
            this.Lf = null
        }

        var g = !0;
        try {
            new ImageData(10, 10)
        } catch (l) {
            g = !1
        }
        var h = document.createElement("canvas").getContext("2d");
        f.prototype.yp = function (a, b, c) {
            this.sk({inputs: a, gi: b, callback: c});
            this.th()
        };
        f.prototype.sk = function (a) {
            for (this.Ld.push(a); this.Ld.length > this.uk;)this.Ld.shift().callback(null, null)
        };
        f.prototype.th = function () {
            if (0 === this.ze && 0 < this.Ld.length) {
                var a = this.Lf = this.Ld.shift(), b = a.inputs[0].width, c = a.inputs[0].height,
                    d = a.inputs.map(function (a) {
                        return a.data.buffer
                    }), e = this.Ae.length;
                this.ze = e;
                if (1 === e) this.Ae[0].postMessage({
                    buffers: d,
                    meta: a.gi,
                    imageOps: this.Kf,
                    width: b,
                    height: c
                }, d); else for (var f = 4 * Math.ceil(a.inputs[0].data.length / 4 / e), g = 0; g < e; ++g) {
                    for (var h = g * f, B = [], A = 0, y = d.length; A < y; ++A)B.push(d[g].slice(h, h + f));
                    this.Ae[g].postMessage({buffers: B, meta: a.gi, imageOps: this.Kf, width: b, height: c}, B)
                }
            }
        };
        f.prototype.wh = function (a, b) {
            this.Nq || (this.hd[a] = b.data, --this.ze, 0 === this.ze && this.vk())
        };
        f.prototype.vk = function () {
            var a =
                this.Lf, c = this.Ae.length;
            if (1 === c) {
                var d = new Uint8ClampedArray(this.hd[0].buffer);
                var e = this.hd[0].meta
            } else {
                var f = a.inputs[0].data.length;
                d = new Uint8ClampedArray(f);
                e = Array(f);
                f = 4 * Math.ceil(f / 4 / c);
                for (var g = 0; g < c; ++g) {
                    var h = g * f;
                    d.set(new Uint8ClampedArray(this.hd[g].buffer), h);
                    e[g] = this.hd[g].meta
                }
            }
            this.Lf = null;
            this.hd = {};
            a.callback(null, b(d, a.inputs[0].width, a.inputs[0].height), e);
            this.th()
        };
        a["default"] = {If: f};
        a.If = f
    })(Pp.pf = Pp.pf || {});
    function zx(a) {
        this.B = null;
        this.ta = void 0 !== a.operationType ? a.operationType : "pixel";
        this.Va = void 0 !== a.threads ? a.threads : 1;
        this.f = Ax(a.sources);
        for (var b = 0, c = this.f.length; b < c; ++b)z(this.f[b], "change", this.u, this);
        this.U = new ne(function () {
            return 1
        }, this.u.bind(this));
        b = Bx(this.f);
        c = {};
        for (var d = 0, e = b.length; d < e; ++d)c[w(b[d].layer)] = b[d];
        this.a = null;
        this.I = {
            animate: !1,
            attributions: {},
            coordinateToPixelTransform: Ve(),
            extent: null,
            focus: null,
            index: 0,
            layerStates: c,
            layerStatesArray: b,
            logos: {},
            pixelRatio: 1,
            pixelToCoordinateTransform: Ve(),
            postRenderFunctions: [],
            size: [0, 0],
            skippedFeatureUids: {},
            tileQueue: this.U,
            time: Date.now(),
            usedTiles: {},
            viewState: {rotation: 0},
            viewHints: [],
            wantedTiles: {}
        };
        ww.call(this, {});
        a.operation && this.v(a.operation, a.lib)
    }

    v(zx, ww);
    zx.prototype.v = function (a, b) {
        this.B = new Pp.pf.If({operation: a, jm: "image" === this.ta, Ap: 1, lib: b, threads: this.Va});
        this.u()
    };
    zx.prototype.Y = function (a, b, c, d) {
        c = !0;
        for (var e, f = 0, g = this.f.length; f < g; ++f)if (e = this.f[f].a.ja(), "ready" !== e.getState()) {
            c = !1;
            break
        }
        if (!c)return null;
        c = tb({}, this.I);
        c.viewState = tb({}, c.viewState);
        e = nb(a);
        c.extent = a.slice();
        c.focus = e;
        c.size[0] = Math.round(lb(a) / b);
        c.size[1] = Math.round(mb(a) / b);
        f = c.viewState;
        f.center = e;
        f.projection = d;
        f.resolution = b;
        this.o = c;
        this.a && (d = this.a.resolution, e = this.a.G(), b === d && cb(a, e) || (this.a = null));
        if (!this.a || this.g !== this.T)a:{
            a = this.o;
            d = this.f.length;
            b = Array(d);
            for (e =
                     0; e < d; ++e) {
                f = this.f[e];
                g = a;
                var h = a.layerStatesArray[e];
                if (f.Ad(g, h)) {
                    var l = g.size[0], m = g.size[1];
                    if (Cx) {
                        var n = Cx.canvas;
                        n.width !== l || n.height !== m ? Cx = eg(l, m) : Cx.clearRect(0, 0, l, m)
                    } else Cx = eg(l, m);
                    f.v(g, h, Cx);
                    f = Cx.getImageData(0, 0, l, m)
                } else f = null;
                if (f) b[e] = f; else break a
            }
            d = {};
            this.b(new Dx(Ex, a, d));
            this.B.yp(b, d, this.ia.bind(this, a))
        }
        oe(c.tileQueue, 16, 16);
        return this.a
    };
    zx.prototype.ia = function (a, b, c, d) {
        if (!b && c) {
            b = a.extent;
            var e = a.viewState.resolution;
            if (e === this.o.viewState.resolution && cb(b, this.o.extent)) {
                if (this.a)var f = this.a.Y().getContext("2d"); else f = eg(Math.round(lb(b) / e), Math.round(mb(b) / e)), this.a = new ss(b, e, 1, this.j, f.canvas);
                f.putImageData(c, 0, 0);
                this.u();
                this.T = this.g;
                this.b(new Dx(Fx, a, d))
            }
        }
    };
    var Cx = null;

    function Bx(a) {
        return a.map(function (a) {
            return ig(a.a)
        })
    }

    function Ax(a) {
        for (var b = a.length, c = Array(b), d = 0; d < b; ++d) {
            var e = d, f = a[d], g = null;
            f instanceof $w ? (f = new pu({source: f}), g = new Ii(f)) : f instanceof ww && (f = new ou({source: f}), g = new wi(f));
            c[e] = g
        }
        return c
    }

    function Dx(a, b, c) {
        Rc.call(this, a);
        this.extent = b.extent;
        this.resolution = b.viewState.resolution / b.pixelRatio;
        this.data = c
    }

    v(Dx, Rc);
    zx.prototype.Pc = function () {
        return null
    };
    var Ex = "beforeoperations", Fx = "afteroperations";

    function Gx(a) {
        var b = a.layer.indexOf("-");
        b = Hx[-1 == b ? a.layer : a.layer.slice(0, b)];
        var c = Ix[a.layer];
        jx.call(this, {
            attributions: Jx,
            cacheSize: a.cacheSize,
            crossOrigin: "anonymous",
            maxZoom: void 0 != a.maxZoom ? a.maxZoom : b.maxZoom,
            minZoom: void 0 != a.minZoom ? a.minZoom : b.minZoom,
            opaque: c.opaque,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileLoadFunction: a.tileLoadFunction,
            url: void 0 !== a.url ? a.url : "https://stamen-tiles-{a-d}.a.ssl.fastly.net/" + a.layer + "/{z}/{x}/{y}." + c.Mb,
            wrapX: a.wrapX
        })
    }

    v(Gx, jx);
    var Jx = [new Fc({html: 'Map tiles by <a href="https://stamen.com/">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.'}), yx],
        Ix = {
            terrain: {Mb: "jpg", opaque: !0},
            "terrain-background": {Mb: "jpg", opaque: !0},
            "terrain-labels": {Mb: "png", opaque: !1},
            "terrain-lines": {Mb: "png", opaque: !1},
            "toner-background": {Mb: "png", opaque: !0},
            toner: {Mb: "png", opaque: !0},
            "toner-hybrid": {Mb: "png", opaque: !1},
            "toner-labels": {Mb: "png", opaque: !1},
            "toner-lines": {Mb: "png", opaque: !1},
            "toner-lite": {
                Mb: "png",
                opaque: !0
            },
            watercolor: {Mb: "jpg", opaque: !0}
        }, Hx = {
            terrain: {minZoom: 4, maxZoom: 18},
            toner: {minZoom: 0, maxZoom: 20},
            watercolor: {minZoom: 1, maxZoom: 16}
        };

    function Kx(a) {
        a = a || {};
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0,
            transition: a.transition
        });
        this.i = a.params || {};
        this.o = Pa();
        ax(this, Lx(this))
    }

    v(Kx, X);
    function Lx(a) {
        var b = 0, c = [], d;
        for (d in a.i)c[b++] = d + "-" + a.i[d];
        return c.join("/")
    }

    Kx.prototype.s = function () {
        return this.i
    };
    Kx.prototype.Rc = function (a) {
        return a
    };
    Kx.prototype.Kc = function (a, b, c) {
        var d = this.tileGrid;
        d || (d = this.Xa(c));
        if (!(d.b.length <= a[0])) {
            var e = d.Ja(a, this.o), f = Na(d.eb(a[0]), this.l);
            1 != b && (f = Ma(f, b, this.l));
            d = {F: "image", FORMAT: "PNG32", TRANSPARENT: !0};
            tb(d, this.i);
            var g = this.urls;
            g ? (c = c.sb.split(":").pop(), d.SIZE = f[0] + "," + f[1], d.BBOX = e.join(","), d.BBOXSR = c, d.IMAGESR = c, d.DPI = Math.round(d.DPI ? d.DPI * b : 90 * b), a = (1 == g.length ? g[0] : g[Ja((a[1] << a[0]) + a[2], g.length)]).replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage"),
                a = px(a, d)) : a = void 0;
            return a
        }
    };
    Kx.prototype.B = function (a) {
        tb(this.i, a);
        ax(this, Lx(this))
    };
    function Mx(a) {
        $w.call(this, {
            opaque: !1,
            projection: a.projection,
            tileGrid: a.tileGrid,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        })
    }

    v(Mx, $w);
    Mx.prototype.Tc = function (a, b, c) {
        var d = this.Sb(a, b, c);
        if (this.a.b.hasOwnProperty(d))return this.a.get(d);
        var e = Na(this.tileGrid.eb(a));
        a = [a, b, c];
        b = (b = bx(this, a)) ? bx(this, b).toString() : "";
        e = new Nx(a, e, b);
        this.a.set(d, e);
        return e
    };
    function Nx(a, b, c) {
        ts.call(this, a, 2);
        this.c = b;
        this.pa = c;
        this.a = null
    }

    v(Nx, ts);
    Nx.prototype.Y = function () {
        if (this.a)return this.a;
        var a = this.c, b = eg(a[0], a[1]);
        b.strokeStyle = "black";
        b.strokeRect(.5, .5, a[0] + .5, a[1] + .5);
        b.fillStyle = "black";
        b.textAlign = "center";
        b.textBaseline = "middle";
        b.font = "24px sans-serif";
        b.fillText(this.pa, a[0] / 2, a[1] / 2);
        return this.a = b.canvas
    };
    Nx.prototype.load = function () {
    };
    function Ox(a) {
        this.i = null;
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            projection: Zb("EPSG:3857"),
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            state: "loading",
            tileLoadFunction: a.tileLoadFunction,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0,
            transition: a.transition
        });
        if (a.url)if (a.jsonp) Sw(a.url, this.Bg.bind(this), this.ff.bind(this)); else {
            var b = new XMLHttpRequest;
            b.addEventListener("load", this.Jo.bind(this));
            b.addEventListener("error", this.Io.bind(this));
            b.open("GET", a.url);
            b.send()
        } else a.tileJSON ? this.Bg(a.tileJSON) : wa(!1, 51)
    }

    v(Ox, X);
    k = Ox.prototype;
    k.Jo = function (a) {
        a = a.target;
        if (!a.status || 200 <= a.status && 300 > a.status) {
            try {
                var b = JSON.parse(a.responseText)
            } catch (c) {
                this.ff();
                return
            }
            this.Bg(b)
        } else this.ff()
    };
    k.Io = function () {
        this.ff()
    };
    k.zl = function () {
        return this.i
    };
    k.Bg = function (a) {
        var b = Zb("EPSG:4326"), c = this.c;
        if (a.bounds) {
            var d = $b(b, c);
            var e = sb(a.bounds, d)
        }
        var f = a.minzoom || 0;
        d = a.maxzoom || 22;
        this.tileGrid = c = Bc({extent: Dc(c), maxZoom: d, minZoom: f});
        this.tileUrlFunction = Vw(a.tiles, c);
        if (void 0 !== a.attribution && !this.j) {
            b = void 0 !== e ? e : b.G();
            e = {};
            for (var g; f <= d; ++f)g = f.toString(), e[g] = [tc(c, b, f)];
            this.va([new Fc({html: a.attribution, tileRanges: e})])
        }
        this.i = a;
        Ns(this, "ready")
    };
    k.ff = function () {
        Ns(this, "error")
    };
    function Px(a) {
        $w.call(this, {projection: Zb("EPSG:3857"), state: "loading"});
        this.v = void 0 !== a.preemptive ? a.preemptive : !0;
        this.o = Xw;
        this.f = void 0;
        this.i = a.jsonp || !1;
        if (a.url)if (this.i) Sw(a.url, this.Cg.bind(this), this.gf.bind(this)); else {
            var b = new XMLHttpRequest;
            b.addEventListener("load", this.No.bind(this));
            b.addEventListener("error", this.Mo.bind(this));
            b.open("GET", a.url);
            b.send()
        } else a.tileJSON ? this.Cg(a.tileJSON) : wa(!1, 51)
    }

    v(Px, $w);
    k = Px.prototype;
    k.No = function (a) {
        a = a.target;
        if (!a.status || 200 <= a.status && 300 > a.status) {
            try {
                var b = JSON.parse(a.responseText)
            } catch (c) {
                this.gf();
                return
            }
            this.Cg(b)
        } else this.gf()
    };
    k.Mo = function () {
        this.gf()
    };
    k.wl = function () {
        return this.f
    };
    k.Lk = function (a, b, c, d, e) {
        this.tileGrid ? (b = this.tileGrid.Ne(a, b), Qx(this.Tc(b[0], b[1], b[2], 1, this.c), a, c, d, e)) : !0 === e ? setTimeout(function () {
            c.call(d, null)
        }, 0) : c.call(d, null)
    };
    k.gf = function () {
        Ns(this, "error")
    };
    k.Cg = function (a) {
        var b = Zb("EPSG:4326"), c = this.c;
        if (a.bounds) {
            var d = $b(b, c);
            var e = sb(a.bounds, d)
        }
        var f = a.minzoom || 0;
        d = a.maxzoom || 22;
        this.tileGrid = c = Bc({extent: Dc(c), maxZoom: d, minZoom: f});
        this.f = a.template;
        var g = a.grids;
        if (g) {
            this.o = Vw(g, c);
            if (void 0 !== a.attribution) {
                b = void 0 !== e ? e : b.G();
                for (e = {}; f <= d; ++f)g = f.toString(), e[g] = [tc(c, b, f)];
                this.va([new Fc({html: a.attribution, tileRanges: e})])
            }
            Ns(this, "ready")
        } else Ns(this, "error")
    };
    k.Tc = function (a, b, c, d, e) {
        var f = this.Sb(a, b, c);
        if (this.a.b.hasOwnProperty(f))return this.a.get(f);
        a = [a, b, c];
        b = bx(this, a, e);
        d = this.o(b, d, e);
        d = new Rx(a, void 0 !== d ? 0 : 4, void 0 !== d ? d : "", this.tileGrid.Ja(a), this.v, this.i);
        this.a.set(f, d);
        return d
    };
    k.jh = function (a, b, c) {
        a = this.Sb(a, b, c);
        this.a.b.hasOwnProperty(a) && this.a.get(a)
    };
    function Rx(a, b, c, d, e, f) {
        ts.call(this, a, b);
        this.v = c;
        this.a = d;
        this.O = e;
        this.c = this.l = this.f = null;
        this.s = f
    }

    v(Rx, ts);
    k = Rx.prototype;
    k.Y = function () {
        return null
    };
    k.getData = function (a) {
        if (!this.f || !this.l)return null;
        var b = this.f[Math.floor((1 - (a[1] - this.a[1]) / (this.a[3] - this.a[1])) * this.f.length)];
        if ("string" !== typeof b)return null;
        b = b.charCodeAt(Math.floor((a[0] - this.a[0]) / (this.a[2] - this.a[0]) * b.length));
        93 <= b && b--;
        35 <= b && b--;
        b -= 32;
        a = null;
        b in this.l && (b = this.l[b], this.c && b in this.c ? a = this.c[b] : a = b);
        return a
    };
    function Qx(a, b, c, d, e) {
        0 == a.state && !0 === e ? (Mc(a, "change", function () {
            c.call(d, this.getData(b))
        }, a), Sx(a)) : !0 === e ? setTimeout(function () {
            c.call(d, this.getData(b))
        }.bind(a), 0) : c.call(d, a.getData(b))
    }

    k.fb = function () {
        return this.v
    };
    k.Pe = function () {
        this.state = 3;
        this.u()
    };
    k.Xi = function (a) {
        this.f = a.grid;
        this.l = a.keys;
        this.c = a.data;
        this.state = 4;
        this.u()
    };
    function Sx(a) {
        if (0 == a.state)if (a.state = 1, a.s) Sw(a.v, a.Xi.bind(a), a.Pe.bind(a)); else {
            var b = new XMLHttpRequest;
            b.addEventListener("load", a.Lo.bind(a));
            b.addEventListener("error", a.Ko.bind(a));
            b.open("GET", a.v);
            b.send()
        }
    }

    k.Lo = function (a) {
        a = a.target;
        if (!a.status || 200 <= a.status && 300 > a.status) {
            try {
                var b = JSON.parse(a.responseText)
            } catch (c) {
                this.Pe();
                return
            }
            this.Xi(b)
        } else this.Pe()
    };
    k.Ko = function () {
        this.Pe()
    };
    k.load = function () {
        this.O && Sx(this)
    };
    function Tx(a) {
        a = a || {};
        var b = a.params || {};
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            opaque: !("TRANSPARENT" in b ? b.TRANSPARENT : 1),
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: a.tileClass,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0,
            transition: a.transition
        });
        this.s = void 0 !== a.gutter ? a.gutter : 0;
        this.i = b;
        this.o = !0;
        this.B = a.serverType;
        this.fa = void 0 !== a.hidpi ? a.hidpi : !0;
        this.U = "";
        Ux(this);
        this.ia = Pa();
        Vx(this);
        ax(this, Wx(this))
    }

    v(Tx, X);
    k = Tx.prototype;
    k.Oo = function (a, b, c, d) {
        c = Zb(c);
        var e = this.tileGrid;
        e || (e = this.Xa(c));
        b = e.Ne(a, b);
        if (!(e.b.length <= b[0])) {
            var f = e.Qa(b[0]), g = e.Ja(b, this.ia);
            e = Na(e.eb(b[0]), this.l);
            var h = this.s;
            0 !== h && (e = La(e, h, this.l), g = Ra(g, f * h, g));
            h = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.i.LAYERS
            };
            tb(h, this.i, d);
            d = Math.floor((g[3] - a[1]) / f);
            h[this.o ? "I" : "X"] = Math.floor((a[0] - g[0]) / f);
            h[this.o ? "J" : "Y"] = d;
            return Xx(this, b, e, g, 1, c, h)
        }
    };
    k.bg = function () {
        return this.s
    };
    k.Sb = function (a, b, c) {
        return this.U + X.prototype.Sb.call(this, a, b, c)
    };
    k.Po = function () {
        return this.i
    };
    function Xx(a, b, c, d, e, f, g) {
        var h = a.urls;
        if (h) {
            g.WIDTH = c[0];
            g.HEIGHT = c[1];
            g[a.o ? "CRS" : "SRS"] = f.sb;
            "STYLES" in a.i || (g.STYLES = "");
            if (1 != e)switch (a.B) {
                case "geoserver":
                    c = 90 * e + .5 | 0;
                    g.FORMAT_OPTIONS = "FORMAT_OPTIONS" in g ? g.FORMAT_OPTIONS + (";dpi:" + c) : "dpi:" + c;
                    break;
                case "mapserver":
                    g.MAP_RESOLUTION = 90 * e;
                    break;
                case "carmentaserver":
                case "qgis":
                    g.DPI = 90 * e;
                    break;
                default:
                    wa(!1, 52)
            }
            f = f.b;
            a.o && "ne" == f.substr(0, 2) && (a = d[0], d[0] = d[1], d[1] = a, a = d[2], d[2] = d[3], d[3] = a);
            g.BBOX = d.join(",");
            return px(1 == h.length ? h[0] : h[Ja((b[1] <<
                b[0]) + b[2], h.length)], g)
        }
    }

    k.Rc = function (a) {
        return this.fa && void 0 !== this.B ? a : 1
    };
    function Ux(a) {
        var b = 0, c = [];
        if (a.urls) {
            var d;
            var e = 0;
            for (d = a.urls.length; e < d; ++e)c[b++] = a.urls[e]
        }
        a.U = c.join("#")
    }

    function Wx(a) {
        var b = 0, c = [], d;
        for (d in a.i)c[b++] = d + "-" + a.i[d];
        return c.join("/")
    }

    k.Kc = function (a, b, c) {
        var d = this.tileGrid;
        d || (d = this.Xa(c));
        if (!(d.b.length <= a[0])) {
            1 == b || this.fa && void 0 !== this.B || (b = 1);
            var e = d.Qa(a[0]), f = d.Ja(a, this.ia);
            d = Na(d.eb(a[0]), this.l);
            var g = this.s;
            0 !== g && (d = La(d, g, this.l), f = Ra(f, e * g, f));
            1 != b && (d = Ma(d, b, this.l));
            e = {SERVICE: "WMS", VERSION: "1.3.0", REQUEST: "GetMap", FORMAT: "image/png", TRANSPARENT: !0};
            tb(e, this.i);
            return Xx(this, a, d, f, b, c, e)
        }
    };
    k.jb = function (a) {
        X.prototype.jb.call(this, a);
        Ux(this)
    };
    k.Qo = function (a) {
        tb(this.i, a);
        Ux(this);
        Vx(this);
        ax(this, Wx(this))
    };
    function Vx(a) {
        a.o = 0 <= ye(a.i.VERSION || "1.3.0")
    };
    function Yx(a, b, c, d, e, f, g, h, l, m, n, p, q, r, u) {
        ts.call(this, a, b, u);
        this.l = {};
        this.v = {};
        this.c = m;
        this.a = [];
        this.C = c;
        this.O = f;
        this.f = [];
        this.s = [];
        if (f) {
            var x = l.Ja(f), B = l.Qa(a[0]);
            h.Wf(x, h.wc(B), function (a) {
                var b = pb(x, h.Ja(a)), c = h.G();
                c && (b = pb(b, c));
                .5 <= lb(b) / B && .5 <= mb(b) / B && (b = a.toString(), c = m[b], c || (c = g(a, n, p), c = m[b] = new q(a, void 0 == c ? 4 : 0, void 0 == c ? "" : c, d, e), this.s.push(z(c, "change", r))), c.c++, this.a.push(b))
            }.bind(this))
        }
    }

    v(Yx, ts);
    k = Yx.prototype;
    k.la = function () {
        for (var a = 0, b = this.a.length; a < b; ++a) {
            var c = this.a[a], d = this.c[c];
            d.c--;
            0 == d.c && (delete this.c[c], Qc(d))
        }
        this.a.length = 0;
        this.c = null;
        this.f.forEach(Hc);
        this.f.length = 0;
        this.g && Qc(this.g);
        this.state = 5;
        this.u();
        this.s.forEach(Hc);
        this.s.length = 0;
        ts.prototype.la.call(this)
    };
    k.getContext = function (a) {
        a = w(a).toString();
        a in this.l || (this.l[a] = eg());
        return this.l[a]
    };
    k.Y = function (a) {
        return -1 == Gj(this, a).eh ? null : this.getContext(a).canvas
    };
    function Gj(a, b) {
        b = w(b).toString();
        b in a.v || (a.v[b] = {Fe: !1, dh: null, xf: -1, eh: -1});
        return a.v[b]
    }

    k.fb = function () {
        return this.a.join("/") + "/" + this.C
    };
    k.load = function () {
        var a = 0, b = {};
        0 == this.state && Ki(this, 1);
        1 == this.state && this.a.forEach(function (c) {
            var d = this.c[c];
            0 == d.state && (d.ug(this.D), d.load());
            1 == d.state && (c = z(d, "change", function () {
                var c = d.getState();
                if (2 == c || 3 == c) {
                    var f = w(d);
                    3 == c ? b[f] = !0 : (--a, delete b[f]);
                    0 == a - Object.keys(b).length && this.Ih()
                }
            }.bind(this)), this.f.push(c), ++a)
        }.bind(this));
        0 == a - Object.keys(b).length && setTimeout(this.Ih.bind(this), 0)
    };
    k.Ih = function () {
        for (var a = this.a.length, b = 0, c = a - 1; 0 <= c; --c) {
            var d = this.c[this.a[c]].getState();
            2 != d && --a;
            4 == d && ++b
        }
        a == this.a.length ? (this.f.forEach(Hc), this.f.length = 0, Ki(this, 2)) : Ki(this, b == this.a.length ? 4 : 3)
    };
    function Zx(a, b) {
        a.ug(el(b, a.v, a.jp.bind(a), a.ip.bind(a)))
    };
    function $x(a, b, c, d, e, f) {
        ts.call(this, a, b, f);
        this.c = 0;
        this.l = null;
        this.v = d;
        this.a = null;
        this.f = {};
        this.D = e;
        this.O = c
    }

    v($x, ts);
    k = $x.prototype;
    k.la = function () {
        this.a = null;
        this.f = {};
        this.state = 5;
        this.u();
        ts.prototype.la.call(this)
    };
    k.G = function () {
        return this.l || ay
    };
    k.Wm = function () {
        return this.v
    };
    k.Vm = function () {
        return this.a
    };
    k.fb = function () {
        return this.O
    };
    k.Xm = function () {
        return this.s
    };
    function Hj(a, b, c) {
        return a.f[w(b) + "," + c]
    }

    k.load = function () {
        0 == this.state && (Ki(this, 1), this.D(this, this.O), this.C(null, NaN, null))
    };
    k.jp = function (a, b, c) {
        this.vg(b);
        this.Bj(a);
        this.oi(c)
    };
    k.ip = function () {
        Ki(this, 3)
    };
    k.oi = function (a) {
        this.l = a
    };
    k.Bj = function (a) {
        this.a = a;
        Ki(this, 2)
    };
    k.vg = function (a) {
        this.s = a
    };
    k.ug = function (a) {
        this.C = a
    };
    var ay = [0, 0, 4096, 4096];

    function by(a) {
        var b = a.projection || "EPSG:3857", c = a.extent || Dc(b), d = a.tileGrid || Bc({
                extent: c,
                maxZoom: a.maxZoom || 22,
                minZoom: a.minZoom,
                tileSize: a.tileSize || 512
            });
        dx.call(this, {
            attributions: a.attributions,
            cacheSize: void 0 !== a.cacheSize ? a.cacheSize : 128,
            extent: c,
            logo: a.logo,
            opaque: !1,
            projection: b,
            state: a.state,
            tileGrid: d,
            tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : Zx,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 === a.wrapX ? !0 : a.wrapX,
            transition: a.transition
        });
        this.o = a.format ?
            a.format : null;
        this.i = {};
        this.v = void 0 == a.overlaps ? !0 : a.overlaps;
        this.tileClass = a.tileClass ? a.tileClass : $x;
        this.f = {}
    }

    v(by, dx);
    k = by.prototype;
    k.clear = function () {
        this.a.clear();
        this.i = {}
    };
    k.Tc = function (a, b, c, d, e) {
        var f = this.Sb(a, b, c);
        if (this.a.b.hasOwnProperty(f))return this.a.get(f);
        a = [a, b, c];
        c = (b = bx(this, a, e)) ? this.tileUrlFunction(b, d, e) : void 0;
        d = new Yx(a, void 0 !== c ? 0 : 4, void 0 !== c ? c : "", this.o, this.tileLoadFunction, b, this.tileUrlFunction, this.tileGrid, this.Xa(e), this.i, d, e, this.tileClass, this.Zi.bind(this), this.ta);
        this.a.set(f, d);
        return d
    };
    k.Xa = function (a) {
        var b = a.sb, c = this.f[b];
        c || (c = this.tileGrid, c = this.f[b] = Ac(a, void 0, c ? c.eb(c.minZoom) : void 0));
        return c
    };
    k.Rc = function (a) {
        return a
    };
    k.ce = function (a, b, c) {
        a = Na(this.Xa(c).eb(a));
        return [Math.round(a[0] * b), Math.round(a[1] * b)]
    };
    function cy(a) {
        this.o = a.matrixIds;
        qc.call(this, {
            extent: a.extent,
            origin: a.origin,
            origins: a.origins,
            resolutions: a.resolutions,
            tileSize: a.tileSize,
            tileSizes: a.tileSizes,
            sizes: a.sizes
        })
    }

    v(cy, qc);
    cy.prototype.v = function () {
        return this.o
    };
    function dy(a, b, c) {
        var d = [], e = [], f = [], g = [], h = [], l = void 0 !== c ? c : [];
        c = Zb(a.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var m = c.Qc(), n = "ne" == c.b.substr(0, 2);
        a.TileMatrix.sort(function (a, b) {
            return b.ScaleDenominator - a.ScaleDenominator
        });
        a.TileMatrix.forEach(function (a) {
            var b;
            0 < l.length ? b = ka(l, function (b) {
                return a.Identifier == b.TileMatrix
            }) : b = !0;
            if (b) {
                e.push(a.Identifier);
                b = 2.8E-4 * a.ScaleDenominator / m;
                var c = a.TileWidth, p = a.TileHeight;
                n ? f.push([a.TopLeftCorner[1], a.TopLeftCorner[0]]) :
                    f.push(a.TopLeftCorner);
                d.push(b);
                g.push(c == p ? c : [c, p]);
                h.push([a.MatrixWidth, -a.MatrixHeight])
            }
        });
        return new cy({extent: b, origins: f, resolutions: d, matrixIds: e, tileSizes: g, sizes: h})
    };
    function Z(a) {
        function b(a) {
            a = "KVP" == d ? px(a, f) : a.replace(/\{(\w+?)\}/g, function (a, b) {
                return b.toLowerCase() in f ? f[b.toLowerCase()] : a
            });
            return function (b) {
                if (b) {
                    var c = {TileMatrix: e.o[b[0]], TileCol: b[1], TileRow: -b[2] - 1};
                    tb(c, g);
                    b = a;
                    return b = "KVP" == d ? px(b, c) : b.replace(/\{(\w+?)\}/g, function (a, b) {
                        return c[b]
                    })
                }
            }
        }

        this.ia = void 0 !== a.version ? a.version : "1.0.0";
        this.s = void 0 !== a.format ? a.format : "image/jpeg";
        this.i = a.dimensions ? a.dimensions : {};
        this.B = a.layer;
        this.o = a.matrixSet;
        this.U = a.style;
        var c = a.urls;
        void 0 ===
        c && void 0 !== a.url && (c = Yw(a.url));
        var d = this.fa = void 0 !== a.requestEncoding ? a.requestEncoding : "KVP", e = a.tileGrid,
            f = {layer: this.B, style: this.U, tilematrixset: this.o};
        "KVP" == d && tb(f, {Service: "WMTS", Request: "GetTile", Version: this.ia, Format: this.s});
        var g = this.i, h = c && 0 < c.length ? Ww(c.map(b)) : Xw;
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: a.tileClass,
            tileGrid: e,
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: h,
            urls: c,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !1,
            transition: a.transition
        });
        ax(this, ey(this))
    }

    v(Z, X);
    k = Z.prototype;
    k.Wk = function () {
        return this.i
    };
    k.Ro = function () {
        return this.s
    };
    k.So = function () {
        return this.B
    };
    k.jl = function () {
        return this.o
    };
    k.ul = function () {
        return this.fa
    };
    k.To = function () {
        return this.U
    };
    k.Bl = function () {
        return this.ia
    };
    function ey(a) {
        var b = 0, c = [], d;
        for (d in a.i)c[b++] = d + "-" + a.i[d];
        return c.join("/")
    }

    k.yq = function (a) {
        tb(this.i, a);
        ax(this, ey(this))
    };
    function fy(a) {
        a = a || {};
        var b = a.size, c = b[0], d = b[1], e = [], f = 256;
        switch (void 0 !== a.tierSizeCalculation ? a.tierSizeCalculation : gy) {
            case gy:
                for (; c > f || d > f;)e.push([Math.ceil(c / f), Math.ceil(d / f)]), f += f;
                break;
            case hy:
                for (; c > f || d > f;)e.push([Math.ceil(c / f), Math.ceil(d / f)]), c >>= 1, d >>= 1;
                break;
            default:
                wa(!1, 53)
        }
        e.push([1, 1]);
        e.reverse();
        f = [1];
        var g = [0];
        d = 1;
        for (c = e.length; d < c; d++)f.push(1 << d), g.push(e[d - 1][0] * e[d - 1][1] + g[d - 1]);
        f.reverse();
        b = [0, -b[1], b[0], 0];
        b = new qc({extent: b, origin: ib(b), resolutions: f});
        (f = a.url) &&
        -1 == f.indexOf("{TileGroup}") && -1 == f.indexOf("{tileIndex}") && (f += "{TileGroup}/{z}-{x}-{y}.jpg");
        f = Yw(f);
        f = Ww(f.map(function (a) {
            return function (b) {
                if (b) {
                    var c = b[0], d = b[1];
                    b = -b[2] - 1;
                    var f = d + b * e[c][0],
                        h = {z: c, x: d, y: b, tileIndex: f, TileGroup: "TileGroup" + ((f + g[c]) / 256 | 0)};
                    return a.replace(/\{(\w+?)\}/g, function (a, b) {
                        return h[b]
                    })
                }
            }
        }));
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: iy,
            tileGrid: b,
            tileUrlFunction: f,
            transition: a.transition
        })
    }

    v(fy, X);
    function iy(a, b, c, d, e, f) {
        vs.call(this, a, b, c, d, e, f);
        this.a = null
    }

    v(iy, vs);
    iy.prototype.Y = function () {
        if (this.a)return this.a;
        var a = vs.prototype.Y.call(this);
        if (2 == this.state) {
            if (256 == a.width && 256 == a.height)return this.a = a;
            var b = eg(256, 256);
            b.drawImage(a, 0, 0);
            return this.a = b.canvas
        }
        return a
    };
    var gy = "default", hy = "truncated";
    ua.prototype.code = ua.prototype.code;
    t("ol.Attribution", Fc);
    Fc.prototype.getHTML = Fc.prototype.g;
    t("ol.CanvasMap", G);
    t("ol.Collection", ad);
    ad.prototype.clear = ad.prototype.clear;
    ad.prototype.extend = ad.prototype.qg;
    ad.prototype.forEach = ad.prototype.forEach;
    ad.prototype.getArray = ad.prototype.Em;
    ad.prototype.item = ad.prototype.item;
    ad.prototype.getLength = ad.prototype.fc;
    ad.prototype.insertAt = ad.prototype.Te;
    ad.prototype.pop = ad.prototype.pop;
    ad.prototype.push = ad.prototype.push;
    ad.prototype.remove = ad.prototype.remove;
    ad.prototype.removeAt = ad.prototype.Vg;
    ad.prototype.setAt = ad.prototype.Zp;
    ed.prototype.element = ed.prototype.element;
    t("ol.color.asArray", Qh);
    t("ol.color.asString", Sh);
    t("ol.colorlike.asColorLike", Uh);
    t("ol.control.defaults", yg);
    t("ol.coordinate.add", ze);
    t("ol.coordinate.createStringXY", function (a) {
        return function (b) {
            return Le(b, a)
        }
    });
    t("ol.coordinate.format", De);
    t("ol.coordinate.rotate", Fe);
    t("ol.coordinate.toStringHDMS", function (a, b) {
        return a ? Ce("NS", a[1], b) + " " + Ce("EW", a[0], b) : ""
    });
    t("ol.coordinate.toStringXY", Le);
    t("ol.DeviceOrientation", tk);
    tk.prototype.getAlpha = tk.prototype.Fm;
    tk.prototype.getBeta = tk.prototype.Tk;
    tk.prototype.getGamma = tk.prototype.Zk;
    tk.prototype.getHeading = tk.prototype.Gm;
    tk.prototype.getTracking = tk.prototype.ji;
    tk.prototype.setTracking = tk.prototype.rg;
    t("ol.easing.easeIn", Me);
    t("ol.easing.easeOut", Ne);
    t("ol.easing.inAndOut", Oe);
    t("ol.easing.linear", Pe);
    t("ol.easing.upAndDown", function (a) {
        return .5 > a ? Oe(2 * a) : 1 - Oe(2 * (a - .5))
    });
    t("ol.extent.boundingExtent", Oa);
    t("ol.extent.buffer", Ra);
    t("ol.extent.containsCoordinate", Ua);
    t("ol.extent.containsExtent", Wa);
    t("ol.extent.containsXY", Va);
    t("ol.extent.createEmpty", Pa);
    t("ol.extent.equals", cb);
    t("ol.extent.extend", db);
    t("ol.extent.getArea", jb);
    t("ol.extent.getBottomLeft", fb);
    t("ol.extent.getBottomRight", gb);
    t("ol.extent.getCenter", nb);
    t("ol.extent.getHeight", mb);
    t("ol.extent.getIntersection", pb);
    t("ol.extent.getSize", function (a) {
        return [a[2] - a[0], a[3] - a[1]]
    });
    t("ol.extent.getTopLeft", ib);
    t("ol.extent.getTopRight", hb);
    t("ol.extent.getWidth", lb);
    t("ol.extent.intersects", qb);
    t("ol.extent.isEmpty", kb);
    t("ol.extent.applyTransform", sb);
    t("ol.Feature", Lk);
    Lk.prototype.clone = Lk.prototype.clone;
    Lk.prototype.getGeometry = Lk.prototype.W;
    Lk.prototype.getId = Lk.prototype.Im;
    Lk.prototype.getGeometryName = Lk.prototype.al;
    Lk.prototype.getStyle = Lk.prototype.Jm;
    Lk.prototype.getStyleFunction = Lk.prototype.bb;
    Lk.prototype.setGeometry = Lk.prototype.Sa;
    Lk.prototype.setStyle = Lk.prototype.sg;
    Lk.prototype.setId = Lk.prototype.lc;
    Lk.prototype.setGeometryName = Lk.prototype.Yc;
    t("ol.featureloader.xhr", fl);
    t("ol.Geolocation", es);
    es.prototype.getAccuracy = es.prototype.Pk;
    es.prototype.getAccuracyGeometry = es.prototype.Qk;
    es.prototype.getAltitude = es.prototype.Rk;
    es.prototype.getAltitudeAccuracy = es.prototype.Sk;
    es.prototype.getHeading = es.prototype.Km;
    es.prototype.getPosition = es.prototype.Lm;
    es.prototype.getProjection = es.prototype.ki;
    es.prototype.getSpeed = es.prototype.vl;
    es.prototype.getTracking = es.prototype.li;
    es.prototype.getTrackingOptions = es.prototype.Yh;
    es.prototype.setProjection = es.prototype.mi;
    es.prototype.setTracking = es.prototype.We;
    es.prototype.setTrackingOptions = es.prototype.Kj;
    t("ol.Graticule", ls);
    ls.prototype.getMap = ls.prototype.Om;
    ls.prototype.getMeridians = ls.prototype.ll;
    ls.prototype.getParallels = ls.prototype.ql;
    ls.prototype.setMap = ls.prototype.setMap;
    t("ol.has.DEVICE_PIXEL_RATIO", qd);
    t("ol.has.CANVAS", sd);
    t("ol.has.DEVICE_ORIENTATION", td);
    t("ol.has.GEOLOCATION", ud);
    t("ol.has.TOUCH", vd);
    t("ol.has.WEBGL", jd);
    rs.prototype.getImage = rs.prototype.Y;
    rs.prototype.load = rs.prototype.load;
    vs.prototype.getImage = vs.prototype.Y;
    t("ol.inherits", v);
    t("ol.interaction.defaults", Ih);
    t("ol.Kinetic", zg);
    t("ol.loadingstrategy.all", Ks);
    t("ol.loadingstrategy.bbox", function (a) {
        return [a]
    });
    t("ol.loadingstrategy.tile", function (a) {
        return function (b, c) {
            c = a.wc(c);
            b = tc(a, b, c);
            var d = [];
            c = [c, 0, 0];
            for (c[1] = b.ba; c[1] <= b.da; ++c[1])for (c[2] = b.ea; c[2] <= b.ga; ++c[2])d.push(a.Ja(c));
            return d
        }
    });
    t("ol.Map", W);
    gd.prototype.originalEvent = gd.prototype.originalEvent;
    gd.prototype.pixel = gd.prototype.pixel;
    gd.prototype.coordinate = gd.prototype.coordinate;
    gd.prototype.dragging = gd.prototype.dragging;
    fd.prototype.map = fd.prototype.map;
    fd.prototype.frameState = fd.prototype.frameState;
    t("ol.Object", Wc);
    Wc.prototype.get = Wc.prototype.get;
    Wc.prototype.getKeys = Wc.prototype.P;
    Wc.prototype.getProperties = Wc.prototype.M;
    Wc.prototype.set = Wc.prototype.set;
    Wc.prototype.setProperties = Wc.prototype.H;
    Wc.prototype.unset = Wc.prototype.R;
    $c.prototype.key = $c.prototype.key;
    $c.prototype.oldValue = $c.prototype.oldValue;
    t("ol.Observable", Vc);
    t("ol.Observable.unByKey", function (a) {
        if (Array.isArray(a))for (var b = 0, c = a.length; b < c; ++b)Hc(a[b]); else Hc(a)
    });
    Vc.prototype.changed = Vc.prototype.u;
    Vc.prototype.dispatchEvent = Vc.prototype.b;
    Vc.prototype.getRevision = Vc.prototype.L;
    Vc.prototype.on = Vc.prototype.J;
    Vc.prototype.once = Vc.prototype.once;
    Vc.prototype.un = Vc.prototype.K;
    t("ol.Overlay", Sj);
    Sj.prototype.getElement = Sj.prototype.Wd;
    Sj.prototype.getId = Sj.prototype.Um;
    Sj.prototype.getMap = Sj.prototype.Xe;
    Sj.prototype.getOffset = Sj.prototype.Uh;
    Sj.prototype.getPosition = Sj.prototype.ni;
    Sj.prototype.getPositioning = Sj.prototype.Vh;
    Sj.prototype.setElement = Sj.prototype.Aj;
    Sj.prototype.setMap = Sj.prototype.setMap;
    Sj.prototype.setOffset = Sj.prototype.Fj;
    Sj.prototype.setPosition = Sj.prototype.Ye;
    Sj.prototype.setPositioning = Sj.prototype.Ij;
    t("ol.PluggableMap", F);
    F.prototype.addControl = F.prototype.Nf;
    F.prototype.addInteraction = F.prototype.Of;
    F.prototype.addLayer = F.prototype.Be;
    F.prototype.addOverlay = F.prototype.Ce;
    F.prototype.forEachFeatureAtPixel = F.prototype.Lc;
    F.prototype.getFeaturesAtPixel = F.prototype.Zf;
    F.prototype.forEachLayerAtPixel = F.prototype.tg;
    F.prototype.hasFeatureAtPixel = F.prototype.og;
    F.prototype.getEventCoordinate = F.prototype.Xd;
    F.prototype.getEventPixel = F.prototype.od;
    F.prototype.getTarget = F.prototype.ae;
    F.prototype.getTargetElement = F.prototype.vc;
    F.prototype.getCoordinateFromPixel = F.prototype.Na;
    F.prototype.getControls = F.prototype.Yf;
    F.prototype.getOverlays = F.prototype.ig;
    F.prototype.getOverlayById = F.prototype.hg;
    F.prototype.getInteractions = F.prototype.dg;
    F.prototype.getLayerGroup = F.prototype.dc;
    F.prototype.getLayers = F.prototype.Ze;
    F.prototype.getPixelFromCoordinate = F.prototype.Ha;
    F.prototype.getSize = F.prototype.yb;
    F.prototype.getView = F.prototype.$;
    F.prototype.getViewport = F.prototype.mg;
    F.prototype.renderSync = F.prototype.bh;
    F.prototype.render = F.prototype.render;
    F.prototype.removeControl = F.prototype.Wg;
    F.prototype.removeInteraction = F.prototype.Yg;
    F.prototype.removeLayer = F.prototype.Zg;
    F.prototype.removeOverlay = F.prototype.$g;
    F.prototype.setLayerGroup = F.prototype.Af;
    F.prototype.setSize = F.prototype.le;
    F.prototype.setTarget = F.prototype.vd;
    F.prototype.setView = F.prototype.ih;
    F.prototype.updateSize = F.prototype.Gc;
    t("ol.proj.METERS_PER_UNIT", Eb);
    t("ol.proj.setProj4", function (a) {
        Fb = a
    });
    t("ol.proj.getPointResolution", Yb);
    t("ol.proj.addEquivalentProjections", ac);
    t("ol.proj.addProjection", bc);
    t("ol.proj.addCoordinateTransforms", fc);
    t("ol.proj.fromLonLat", function (a, b) {
        return kc(a, "EPSG:4326", void 0 !== b ? b : "EPSG:3857")
    });
    t("ol.proj.toLonLat", function (a, b) {
        return kc(a, void 0 !== b ? b : "EPSG:3857", "EPSG:4326")
    });
    t("ol.proj.get", Zb);
    t("ol.proj.equivalent", hc);
    t("ol.proj.getTransform", ic);
    t("ol.proj.transform", kc);
    t("ol.proj.transformExtent", lc);
    t("ol.render.toContext", function (a, b) {
        var c = a.canvas, d = b ? b : {};
        b = d.pixelRatio || qd;
        if (d = d.size) c.width = d[0] * b, c.height = d[1] * b, c.style.width = d[0] + "px", c.style.height = d[1] + "px";
        c = [0, 0, c.width, c.height];
        d = bf(Ve(), b, b);
        return new Wh(a, b, c, d, 0)
    });
    t("ol.size.toSize", Na);
    t("ol.Sphere", xb);
    xb.prototype.geodesicArea = xb.prototype.a;
    xb.prototype.haversineDistance = xb.prototype.b;
    t("ol.Sphere.getLength", Ab);
    t("ol.Sphere.getArea", Db);
    ts.prototype.getTileCoord = ts.prototype.i;
    ts.prototype.load = ts.prototype.load;
    t("ol.tilegrid.createXYZ", Bc);
    $x.prototype.getFormat = $x.prototype.Wm;
    $x.prototype.getFeatures = $x.prototype.Vm;
    $x.prototype.getProjection = $x.prototype.Xm;
    $x.prototype.setExtent = $x.prototype.oi;
    $x.prototype.setFeatures = $x.prototype.Bj;
    $x.prototype.setProjection = $x.prototype.vg;
    $x.prototype.setLoader = $x.prototype.ug;
    t("ol.View", E);
    E.prototype.animate = E.prototype.animate;
    E.prototype.getAnimating = E.prototype.Oc;
    E.prototype.getInteracting = E.prototype.bl;
    E.prototype.cancelAnimations = E.prototype.kd;
    E.prototype.constrainCenter = E.prototype.Jc;
    E.prototype.constrainResolution = E.prototype.constrainResolution;
    E.prototype.constrainRotation = E.prototype.constrainRotation;
    E.prototype.getCenter = E.prototype.wa;
    E.prototype.calculateExtent = E.prototype.jd;
    E.prototype.getMaxResolution = E.prototype.Ym;
    E.prototype.getMinResolution = E.prototype.$m;
    E.prototype.getMaxZoom = E.prototype.Zm;
    E.prototype.setMaxZoom = E.prototype.jq;
    E.prototype.getMinZoom = E.prototype.an;
    E.prototype.setMinZoom = E.prototype.kq;
    E.prototype.getProjection = E.prototype.bn;
    E.prototype.getResolution = E.prototype.Oa;
    E.prototype.getResolutions = E.prototype.cn;
    E.prototype.getResolutionForExtent = E.prototype.Le;
    E.prototype.getRotation = E.prototype.Pa;
    E.prototype.getZoom = E.prototype.Zh;
    E.prototype.getZoomForResolution = E.prototype.Oe;
    E.prototype.getResolutionForZoom = E.prototype.Xh;
    E.prototype.fit = E.prototype.Vf;
    E.prototype.centerOn = E.prototype.Gk;
    E.prototype.rotate = E.prototype.rotate;
    E.prototype.setCenter = E.prototype.rb;
    E.prototype.setResolution = E.prototype.$c;
    E.prototype.setRotation = E.prototype.ee;
    E.prototype.setZoom = E.prototype.Mj;
    t("ol.xml.getAllTextContent", Pk);
    t("ol.xml.parse", Tk);
    Pu.prototype.getGL = Pu.prototype.fp;
    Pu.prototype.useProgram = Pu.prototype.Vc;
    t("ol.tilegrid.TileGrid", qc);
    qc.prototype.forEachTileCoord = qc.prototype.Wf;
    qc.prototype.getMaxZoom = qc.prototype.hj;
    qc.prototype.getMinZoom = qc.prototype.ij;
    qc.prototype.getOrigin = qc.prototype.Cc;
    qc.prototype.getResolution = qc.prototype.Qa;
    qc.prototype.getResolutions = qc.prototype.jj;
    qc.prototype.getTileCoordExtent = qc.prototype.Ja;
    qc.prototype.getTileCoordForCoordAndResolution = qc.prototype.Ne;
    qc.prototype.getTileCoordForCoordAndZ = qc.prototype.lg;
    qc.prototype.getTileSize = qc.prototype.eb;
    qc.prototype.getZForResolution = qc.prototype.wc;
    t("ol.tilegrid.WMTS", cy);
    cy.prototype.getMatrixIds = cy.prototype.v;
    t("ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet", dy);
    t("ol.style.AtlasManager", Uv);
    t("ol.style.Circle", Ck);
    Ck.prototype.setRadius = Ck.prototype.Zc;
    t("ol.style.Fill", Dk);
    Dk.prototype.clone = Dk.prototype.clone;
    Dk.prototype.getColor = Dk.prototype.g;
    Dk.prototype.setColor = Dk.prototype.c;
    t("ol.style.Icon", Hn);
    Hn.prototype.clone = Hn.prototype.clone;
    Hn.prototype.getAnchor = Hn.prototype.Nc;
    Hn.prototype.getColor = Hn.prototype.Uo;
    Hn.prototype.getImage = Hn.prototype.Y;
    Hn.prototype.getOrigin = Hn.prototype.Uc;
    Hn.prototype.getSrc = Hn.prototype.Vo;
    Hn.prototype.getSize = Hn.prototype.jc;
    Hn.prototype.load = Hn.prototype.load;
    t("ol.style.Image", zk);
    zk.prototype.getOpacity = zk.prototype.jf;
    zk.prototype.getRotateWithView = zk.prototype.kf;
    zk.prototype.getRotation = zk.prototype.lf;
    zk.prototype.getScale = zk.prototype.mf;
    zk.prototype.getSnapToPixel = zk.prototype.Me;
    zk.prototype.setOpacity = zk.prototype.Bd;
    zk.prototype.setRotation = zk.prototype.nf;
    zk.prototype.setScale = zk.prototype.Cd;
    t("ol.style.RegularShape", Ak);
    Ak.prototype.clone = Ak.prototype.clone;
    Ak.prototype.getAnchor = Ak.prototype.Nc;
    Ak.prototype.getAngle = Ak.prototype.dj;
    Ak.prototype.getFill = Ak.prototype.Ca;
    Ak.prototype.getImage = Ak.prototype.Y;
    Ak.prototype.getOrigin = Ak.prototype.Uc;
    Ak.prototype.getPoints = Ak.prototype.ej;
    Ak.prototype.getRadius = Ak.prototype.fj;
    Ak.prototype.getRadius2 = Ak.prototype.Wh;
    Ak.prototype.getSize = Ak.prototype.jc;
    Ak.prototype.getStroke = Ak.prototype.Da;
    t("ol.style.Stroke", Ek);
    Ek.prototype.clone = Ek.prototype.clone;
    Ek.prototype.getColor = Ek.prototype.Wo;
    Ek.prototype.getLineCap = Ek.prototype.el;
    Ek.prototype.getLineDash = Ek.prototype.Xo;
    Ek.prototype.getLineDashOffset = Ek.prototype.fl;
    Ek.prototype.getLineJoin = Ek.prototype.gl;
    Ek.prototype.getMiterLimit = Ek.prototype.ml;
    Ek.prototype.getWidth = Ek.prototype.Yo;
    Ek.prototype.setColor = Ek.prototype.Zo;
    Ek.prototype.setLineCap = Ek.prototype.fq;
    Ek.prototype.setLineDash = Ek.prototype.setLineDash;
    Ek.prototype.setLineDashOffset = Ek.prototype.gq;
    Ek.prototype.setLineJoin = Ek.prototype.hq;
    Ek.prototype.setMiterLimit = Ek.prototype.lq;
    Ek.prototype.setWidth = Ek.prototype.pq;
    t("ol.style.Style", Fk);
    Fk.prototype.clone = Fk.prototype.clone;
    Fk.prototype.getRenderer = Fk.prototype.Ke;
    Fk.prototype.setRenderer = Fk.prototype.nq;
    Fk.prototype.getGeometry = Fk.prototype.W;
    Fk.prototype.getGeometryFunction = Fk.prototype.$k;
    Fk.prototype.getFill = Fk.prototype.Ca;
    Fk.prototype.setFill = Fk.prototype.zf;
    Fk.prototype.getImage = Fk.prototype.Y;
    Fk.prototype.setImage = Fk.prototype.hh;
    Fk.prototype.getStroke = Fk.prototype.Da;
    Fk.prototype.setStroke = Fk.prototype.Bf;
    Fk.prototype.getText = Fk.prototype.Ia;
    Fk.prototype.setText = Fk.prototype.Fd;
    Fk.prototype.getZIndex = Fk.prototype.ya;
    Fk.prototype.setGeometry = Fk.prototype.Sa;
    Fk.prototype.setZIndex = Fk.prototype.Xb;
    t("ol.style.Text", In);
    In.prototype.clone = In.prototype.clone;
    In.prototype.getExceedLength = In.prototype.Xk;
    In.prototype.getFont = In.prototype.Yk;
    In.prototype.getMaxAngle = In.prototype.kl;
    In.prototype.getPlacement = In.prototype.rl;
    In.prototype.getOffsetX = In.prototype.nl;
    In.prototype.getOffsetY = In.prototype.ol;
    In.prototype.getFill = In.prototype.Ca;
    In.prototype.getRotateWithView = In.prototype.$o;
    In.prototype.getRotation = In.prototype.ap;
    In.prototype.getScale = In.prototype.bp;
    In.prototype.getStroke = In.prototype.Da;
    In.prototype.getText = In.prototype.Ia;
    In.prototype.getTextAlign = In.prototype.xl;
    In.prototype.getTextBaseline = In.prototype.yl;
    In.prototype.setExceedLength = In.prototype.bq;
    In.prototype.setFont = In.prototype.Cj;
    In.prototype.setMaxAngle = In.prototype.iq;
    In.prototype.setOffsetX = In.prototype.Gj;
    In.prototype.setOffsetY = In.prototype.Hj;
    In.prototype.setPlacement = In.prototype.mq;
    In.prototype.setFill = In.prototype.zf;
    In.prototype.setRotation = In.prototype.cp;
    In.prototype.setScale = In.prototype.gj;
    In.prototype.setStroke = In.prototype.Bf;
    In.prototype.setText = In.prototype.Fd;
    In.prototype.setTextAlign = In.prototype.Jj;
    In.prototype.setTextBaseline = In.prototype.oq;
    t("ol.source.BingMaps", hx);
    t("ol.source.BingMaps.TOS_ATTRIBUTION", ix);
    hx.prototype.getApiKey = hx.prototype.fa;
    hx.prototype.getImagerySet = hx.prototype.ia;
    t("ol.source.CartoDB", kx);
    kx.prototype.getConfig = kx.prototype.Vk;
    kx.prototype.updateConfig = kx.prototype.xq;
    kx.prototype.setConfig = kx.prototype.$p;
    t("ol.source.Cluster", Y);
    Y.prototype.getDistance = Y.prototype.lo;
    Y.prototype.getSource = Y.prototype.mo;
    Y.prototype.setDistance = Y.prototype.aq;
    t("ol.source.Image", ww);
    yw.prototype.image = yw.prototype.image;
    t("ol.source.ImageArcGISRest", qx);
    qx.prototype.getParams = qx.prototype.oo;
    qx.prototype.getImageLoadFunction = qx.prototype.no;
    qx.prototype.getUrl = qx.prototype.po;
    qx.prototype.setImageLoadFunction = qx.prototype.qo;
    qx.prototype.setUrl = qx.prototype.ro;
    qx.prototype.updateParams = qx.prototype.so;
    t("ol.source.ImageCanvas", Dw);
    t("ol.source.ImageMapGuide", rx);
    rx.prototype.getParams = rx.prototype.uo;
    rx.prototype.getImageLoadFunction = rx.prototype.to;
    rx.prototype.updateParams = rx.prototype.wo;
    rx.prototype.setImageLoadFunction = rx.prototype.vo;
    t("ol.source.ImageStatic", sx);
    t("ol.source.ImageVector", Ew);
    Ew.prototype.getSource = Ew.prototype.xo;
    Ew.prototype.getStyle = Ew.prototype.yo;
    Ew.prototype.getStyleFunction = Ew.prototype.bb;
    Ew.prototype.setStyle = Ew.prototype.Wi;
    t("ol.source.ImageWMS", tx);
    tx.prototype.getGetFeatureInfoUrl = tx.prototype.Bo;
    tx.prototype.getParams = tx.prototype.Do;
    tx.prototype.getImageLoadFunction = tx.prototype.Co;
    tx.prototype.getUrl = tx.prototype.Eo;
    tx.prototype.setImageLoadFunction = tx.prototype.Fo;
    tx.prototype.setUrl = tx.prototype.Go;
    tx.prototype.updateParams = tx.prototype.Ho;
    t("ol.source.OSM", xx);
    t("ol.source.OSM.ATTRIBUTION", yx);
    t("ol.source.Raster", zx);
    zx.prototype.setOperation = zx.prototype.v;
    Dx.prototype.extent = Dx.prototype.extent;
    Dx.prototype.resolution = Dx.prototype.resolution;
    Dx.prototype.data = Dx.prototype.data;
    t("ol.source.Source", Ls);
    Ls.prototype.getAttributions = Ls.prototype.za;
    Ls.prototype.getLogo = Ls.prototype.xa;
    Ls.prototype.getProjection = Ls.prototype.Aa;
    Ls.prototype.getState = Ls.prototype.getState;
    Ls.prototype.refresh = Ls.prototype.ua;
    Ls.prototype.setAttributions = Ls.prototype.va;
    t("ol.source.Stamen", Gx);
    t("ol.source.Tile", $w);
    $w.prototype.getTileGrid = $w.prototype.cb;
    cx.prototype.tile = cx.prototype.tile;
    t("ol.source.TileArcGISRest", Kx);
    Kx.prototype.getParams = Kx.prototype.s;
    Kx.prototype.updateParams = Kx.prototype.B;
    t("ol.source.TileDebug", Mx);
    t("ol.source.TileImage", X);
    X.prototype.setRenderReprojectionEdges = X.prototype.Ob;
    X.prototype.setTileGridForProjection = X.prototype.Pb;
    t("ol.source.TileJSON", Ox);
    Ox.prototype.getTileJSON = Ox.prototype.zl;
    t("ol.source.TileUTFGrid", Px);
    Px.prototype.getTemplate = Px.prototype.wl;
    Px.prototype.forDataAtCoordinateAndResolution = Px.prototype.Lk;
    t("ol.source.TileWMS", Tx);
    Tx.prototype.getGetFeatureInfoUrl = Tx.prototype.Oo;
    Tx.prototype.getParams = Tx.prototype.Po;
    Tx.prototype.updateParams = Tx.prototype.Qo;
    dx.prototype.getTileLoadFunction = dx.prototype.ub;
    dx.prototype.getTileUrlFunction = dx.prototype.vb;
    dx.prototype.getUrls = dx.prototype.wb;
    dx.prototype.setTileLoadFunction = dx.prototype.Bb;
    dx.prototype.setTileUrlFunction = dx.prototype.ib;
    dx.prototype.setUrl = dx.prototype.ob;
    dx.prototype.setUrls = dx.prototype.jb;
    t("ol.source.Vector", R);
    R.prototype.addFeature = R.prototype.Db;
    R.prototype.addFeatures = R.prototype.Hc;
    R.prototype.clear = R.prototype.clear;
    R.prototype.forEachFeature = R.prototype.Jh;
    R.prototype.forEachFeatureInExtent = R.prototype.ac;
    R.prototype.forEachFeatureIntersectingExtent = R.prototype.Kh;
    R.prototype.getFeaturesCollection = R.prototype.Rh;
    R.prototype.getFeatures = R.prototype.ge;
    R.prototype.getFeaturesAtCoordinate = R.prototype.Qh;
    R.prototype.getFeaturesInExtent = R.prototype.$f;
    R.prototype.getClosestFeatureToCoordinate = R.prototype.Mh;
    R.prototype.getExtent = R.prototype.G;
    R.prototype.getFeatureById = R.prototype.Ph;
    R.prototype.getFormat = R.prototype.$i;
    R.prototype.getUrl = R.prototype.aj;
    R.prototype.removeFeature = R.prototype.Hb;
    R.prototype.setLoader = R.prototype.cj;
    Ys.prototype.feature = Ys.prototype.feature;
    t("ol.source.VectorTile", by);
    by.prototype.clear = by.prototype.clear;
    t("ol.source.WMTS", Z);
    Z.prototype.getDimensions = Z.prototype.Wk;
    Z.prototype.getFormat = Z.prototype.Ro;
    Z.prototype.getLayer = Z.prototype.So;
    Z.prototype.getMatrixSet = Z.prototype.jl;
    Z.prototype.getRequestEncoding = Z.prototype.ul;
    Z.prototype.getStyle = Z.prototype.To;
    Z.prototype.getVersion = Z.prototype.Bl;
    Z.prototype.updateDimensions = Z.prototype.yq;
    t("ol.source.WMTS.optionsFromCapabilities", function (a, b) {
        var c = ka(a.Contents.Layer, function (a) {
            return a.Identifier == b.layer
        });
        if (null === c)return null;
        var d = a.Contents.TileMatrixSet;
        var e = 1 < c.TileMatrixSetLink.length ? "projection" in b ? pa(c.TileMatrixSetLink, function (a) {
            var c = ka(d, function (b) {
                return b.Identifier == a.TileMatrixSet
            }).SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"), e = Zb(c), f = Zb(b.projection);
            return e && f ? hc(e, f) : c == b.projection
        }) : pa(c.TileMatrixSetLink, function (a) {
            return a.TileMatrixSet ==
                b.matrixSet
        }) : 0;
        0 > e && (e = 0);
        var f = c.TileMatrixSetLink[e].TileMatrixSet;
        var g = c.TileMatrixSetLink[e].TileMatrixSetLimits;
        var h = c.Format[0];
        "format" in b && (h = b.format);
        e = pa(c.Style, function (a) {
            return "style" in b ? a.Title == b.style : a.isDefault
        });
        0 > e && (e = 0);
        e = c.Style[e].Identifier;
        var l = {};
        "Dimension" in c && c.Dimension.forEach(function (a) {
            var b = a.Identifier, c = a.Default;
            void 0 === c && (c = a.Value[0]);
            l[b] = c
        });
        var m = ka(a.Contents.TileMatrixSet, function (a) {
            return a.Identifier == f
        });
        var n = "projection" in b ? Zb(b.projection) :
            Zb(m.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var p = c.WGS84BoundingBox;
        if (void 0 !== p) {
            var q = Zb("EPSG:4326").G();
            q = p[0] == q[0] && p[2] == q[2];
            var r = lc(p, "EPSG:4326", n);
            (p = n.G()) && (Wa(p, r) || (r = void 0))
        }
        g = dy(m, r, g);
        var u = [];
        m = b.requestEncoding;
        m = void 0 !== m ? m : "";
        if ("OperationsMetadata" in a && "GetTile" in a.OperationsMetadata)for (a = a.OperationsMetadata.GetTile.DCP.HTTP.Get, r = 0, p = a.length; r < p; ++r) {
            var x = ka(a[r].Constraint, function (a) {
                return "GetEncoding" == a.name
            }).AllowedValues.Value;
            "" === m && (m = x[0]);
            if ("KVP" === m) ha(x, "KVP") && u.push(a[r].href); else break
        }
        0 === u.length && (m = "REST", c.ResourceURL.forEach(function (a) {
            "tile" === a.resourceType && (h = a.format, u.push(a.template))
        }));
        return {
            urls: u,
            layer: b.layer,
            matrixSet: f,
            format: h,
            projection: n,
            requestEncoding: m,
            tileGrid: g,
            style: e,
            dimensions: l,
            wrapX: q,
            crossOrigin: b.crossOrigin
        }
    });
    t("ol.source.XYZ", jx);
    t("ol.source.Zoomify", fy);
    t("ol.renderer.webgl.ImageLayer", Gw);
    t("ol.renderer.webgl.Map", Jw);
    t("ol.renderer.webgl.TileLayer", Qw);
    t("ol.renderer.webgl.VectorLayer", Rw);
    t("ol.renderer.canvas.ImageLayer", wi);
    t("ol.renderer.canvas.Map", Gi);
    t("ol.renderer.canvas.TileLayer", Ii);
    t("ol.renderer.canvas.VectorLayer", Bj);
    t("ol.renderer.canvas.VectorTileLayer", Dj);
    Jh.prototype.vectorContext = Jh.prototype.vectorContext;
    Jh.prototype.frameState = Jh.prototype.frameState;
    Jh.prototype.context = Jh.prototype.context;
    Jh.prototype.glContext = Jh.prototype.glContext;
    Qp.prototype.get = Qp.prototype.get;
    Qp.prototype.getExtent = Qp.prototype.G;
    Qp.prototype.getId = Qp.prototype.ho;
    Qp.prototype.getGeometry = Qp.prototype.W;
    Qp.prototype.getProperties = Qp.prototype.io;
    Qp.prototype.getType = Qp.prototype.S;
    t("ol.render.VectorContext", Vh);
    hw.prototype.setStyle = hw.prototype.zd;
    hw.prototype.drawGeometry = hw.prototype.Eb;
    hw.prototype.drawFeature = hw.prototype.Ge;
    Wh.prototype.drawCircle = Wh.prototype.$b;
    Wh.prototype.setStyle = Wh.prototype.zd;
    Wh.prototype.drawGeometry = Wh.prototype.Eb;
    Wh.prototype.drawFeature = Wh.prototype.Ge;
    t("ol.proj.common.add", mc);
    t("ol.proj.Projection", Gb);
    Gb.prototype.getCode = Gb.prototype.Uk;
    Gb.prototype.getExtent = Gb.prototype.G;
    Gb.prototype.getUnits = Gb.prototype.fo;
    Gb.prototype.getMetersPerUnit = Gb.prototype.Qc;
    Gb.prototype.getWorldExtent = Gb.prototype.Cl;
    Gb.prototype.isGlobal = Gb.prototype.nm;
    Gb.prototype.setGlobal = Gb.prototype.eq;
    Gb.prototype.setExtent = Gb.prototype.Qi;
    Gb.prototype.setWorldExtent = Gb.prototype.Lj;
    Gb.prototype.setGetPointResolution = Gb.prototype.cq;
    t("ol.proj.Units.METERS_PER_UNIT", Eb);
    t("ol.layer.Base", hg);
    hg.prototype.getExtent = hg.prototype.G;
    hg.prototype.getMaxResolution = hg.prototype.gc;
    hg.prototype.getMinResolution = hg.prototype.hc;
    hg.prototype.getOpacity = hg.prototype.ic;
    hg.prototype.getVisible = hg.prototype.Tb;
    hg.prototype.getZIndex = hg.prototype.ya;
    hg.prototype.setExtent = hg.prototype.zc;
    hg.prototype.setMaxResolution = hg.prototype.Ec;
    hg.prototype.setMinResolution = hg.prototype.Fc;
    hg.prototype.setOpacity = hg.prototype.Ac;
    hg.prototype.setVisible = hg.prototype.Bc;
    hg.prototype.setZIndex = hg.prototype.Xb;
    t("ol.layer.Group", jg);
    jg.prototype.getLayers = jg.prototype.yd;
    jg.prototype.setLayers = jg.prototype.Oi;
    t("ol.layer.Heatmap", S);
    S.prototype.getBlur = S.prototype.Lh;
    S.prototype.getGradient = S.prototype.Sh;
    S.prototype.getRadius = S.prototype.Pi;
    S.prototype.setBlur = S.prototype.yj;
    S.prototype.setGradient = S.prototype.Ej;
    S.prototype.setRadius = S.prototype.Zc;
    t("ol.layer.Image", ou);
    ou.prototype.getSource = ou.prototype.ja;
    t("ol.layer.Layer", xi);
    xi.prototype.getSource = xi.prototype.ja;
    xi.prototype.setMap = xi.prototype.setMap;
    xi.prototype.setSource = xi.prototype.ad;
    t("ol.layer.Tile", pu);
    pu.prototype.getPreload = pu.prototype.c;
    pu.prototype.getSource = pu.prototype.ja;
    pu.prototype.setPreload = pu.prototype.j;
    pu.prototype.getUseInterimTilesOnError = pu.prototype.i;
    pu.prototype.setUseInterimTilesOnError = pu.prototype.C;
    t("ol.layer.Vector", Q);
    Q.prototype.getSource = Q.prototype.ja;
    Q.prototype.getStyle = Q.prototype.D;
    Q.prototype.getStyleFunction = Q.prototype.bb;
    Q.prototype.setStyle = Q.prototype.j;
    t("ol.layer.VectorTile", V);
    V.prototype.getPreload = V.prototype.c;
    V.prototype.getUseInterimTilesOnError = V.prototype.i;
    V.prototype.setPreload = V.prototype.B;
    V.prototype.setUseInterimTilesOnError = V.prototype.T;
    V.prototype.getSource = V.prototype.ja;
    t("ol.interaction.DoubleClickZoom", Ig);
    t("ol.interaction.DoubleClickZoom.handleEvent", Jg);
    t("ol.interaction.DragAndDrop", zs);
    t("ol.interaction.DragAndDrop.handleEvent", Qe);
    Cs.prototype.features = Cs.prototype.features;
    Cs.prototype.file = Cs.prototype.file;
    Cs.prototype.projection = Cs.prototype.projection;
    t("ol.interaction.DragBox", hh);
    hh.prototype.getGeometry = hh.prototype.W;
    mh.prototype.coordinate = mh.prototype.coordinate;
    mh.prototype.mapBrowserEvent = mh.prototype.mapBrowserEvent;
    t("ol.interaction.DragPan", Xg);
    t("ol.interaction.DragRotate", ah);
    t("ol.interaction.DragRotateAndZoom", Gs);
    t("ol.interaction.DragZoom", qh);
    t("ol.interaction.Draw", at);
    t("ol.interaction.Draw.handleEvent", ct);
    at.prototype.removeLastPoint = at.prototype.Vp;
    at.prototype.finishDrawing = at.prototype.Ud;
    at.prototype.extend = at.prototype.Gn;
    t("ol.interaction.Draw.createRegularPolygon", function (a, b) {
        return function (c, d) {
            var e = c[0];
            c = c[1];
            var f = Math.sqrt(He(e, c));
            d = d ? d : Tf(new fs(e), a);
            Uf(d, e, f, b ? b : Math.atan((c[1] - e[1]) / (c[0] - e[0])));
            return d
        }
    });
    t("ol.interaction.Draw.createBox", function () {
        return function (a, b) {
            a = Oa(a);
            b = b || new D(null);
            b.na([[fb(a), gb(a), hb(a), ib(a), fb(a)]]);
            return b
        }
    });
    qt.prototype.feature = qt.prototype.feature;
    t("ol.interaction.Extent", rt);
    rt.prototype.getExtent = rt.prototype.G;
    rt.prototype.setExtent = rt.prototype.f;
    Ct.prototype.extent = Ct.prototype.extent;
    t("ol.interaction.Interaction", Eg);
    Eg.prototype.getActive = Eg.prototype.c;
    Eg.prototype.getMap = Eg.prototype.i;
    Eg.prototype.setActive = Eg.prototype.Ga;
    t("ol.interaction.KeyboardPan", rh);
    t("ol.interaction.KeyboardPan.handleEvent", th);
    t("ol.interaction.KeyboardZoom", uh);
    t("ol.interaction.KeyboardZoom.handleEvent", vh);
    t("ol.interaction.Modify", Dt);
    t("ol.interaction.Modify.handleEvent", Gt);
    Dt.prototype.removePoint = Dt.prototype.wj;
    Lt.prototype.features = Lt.prototype.features;
    Lt.prototype.mapBrowserEvent = Lt.prototype.mapBrowserEvent;
    t("ol.interaction.MouseWheelZoom", wh);
    t("ol.interaction.MouseWheelZoom.handleEvent", xh);
    wh.prototype.setMouseAnchor = wh.prototype.U;
    t("ol.interaction.PinchRotate", Ah);
    t("ol.interaction.PinchZoom", Eh);
    t("ol.interaction.Pointer", Ug);
    t("ol.interaction.Pointer.handleEvent", Vg);
    t("ol.interaction.Select", Tt);
    Tt.prototype.getFeatures = Tt.prototype.Rn;
    Tt.prototype.getHitTolerance = Tt.prototype.Sn;
    Tt.prototype.getLayer = Tt.prototype.Tn;
    t("ol.interaction.Select.handleEvent", Ut);
    Tt.prototype.setHitTolerance = Tt.prototype.Vn;
    Tt.prototype.setMap = Tt.prototype.setMap;
    Wt.prototype.selected = Wt.prototype.selected;
    Wt.prototype.deselected = Wt.prototype.deselected;
    Wt.prototype.mapBrowserEvent = Wt.prototype.mapBrowserEvent;
    t("ol.interaction.Snap", Yt);
    Yt.prototype.addFeature = Yt.prototype.Db;
    Yt.prototype.removeFeature = Yt.prototype.Hb;
    t("ol.interaction.Translate", cu);
    cu.prototype.getHitTolerance = cu.prototype.B;
    cu.prototype.setHitTolerance = cu.prototype.I;
    iu.prototype.features = iu.prototype.features;
    iu.prototype.coordinate = iu.prototype.coordinate;
    t("ol.geom.Circle", fs);
    fs.prototype.clone = fs.prototype.clone;
    fs.prototype.getCenter = fs.prototype.wa;
    fs.prototype.getRadius = fs.prototype.xd;
    fs.prototype.getType = fs.prototype.S;
    fs.prototype.intersectsExtent = fs.prototype.Ya;
    fs.prototype.setCenter = fs.prototype.rb;
    fs.prototype.setCenterAndRadius = fs.prototype.gh;
    fs.prototype.setRadius = fs.prototype.Zc;
    fs.prototype.transform = fs.prototype.gb;
    t("ol.geom.Geometry", ff);
    ff.prototype.getClosestPoint = ff.prototype.Fb;
    ff.prototype.intersectsCoordinate = ff.prototype.xb;
    ff.prototype.getExtent = ff.prototype.G;
    ff.prototype.rotate = ff.prototype.rotate;
    ff.prototype.scale = ff.prototype.scale;
    ff.prototype.simplify = ff.prototype.Qb;
    ff.prototype.transform = ff.prototype.gb;
    t("ol.geom.GeometryCollection", Xl);
    Xl.prototype.clone = Xl.prototype.clone;
    Xl.prototype.getGeometries = Xl.prototype.pd;
    Xl.prototype.getType = Xl.prototype.S;
    Xl.prototype.intersectsExtent = Xl.prototype.Ya;
    Xl.prototype.setGeometries = Xl.prototype.Dj;
    Xl.prototype.applyTransform = Xl.prototype.Ic;
    Xl.prototype.translate = Xl.prototype.translate;
    t("ol.geom.LinearRing", Cf);
    Cf.prototype.clone = Cf.prototype.clone;
    Cf.prototype.getArea = Cf.prototype.Cn;
    Cf.prototype.getCoordinates = Cf.prototype.V;
    Cf.prototype.getType = Cf.prototype.S;
    Cf.prototype.setCoordinates = Cf.prototype.na;
    t("ol.geom.LineString", L);
    L.prototype.appendCoordinate = L.prototype.yk;
    L.prototype.clone = L.prototype.clone;
    L.prototype.forEachSegment = L.prototype.Ok;
    L.prototype.getCoordinateAtM = L.prototype.An;
    L.prototype.getCoordinates = L.prototype.V;
    L.prototype.getCoordinateAt = L.prototype.Nh;
    L.prototype.getLength = L.prototype.Bn;
    L.prototype.getType = L.prototype.S;
    L.prototype.intersectsExtent = L.prototype.Ya;
    L.prototype.setCoordinates = L.prototype.na;
    t("ol.geom.MultiLineString", M);
    M.prototype.appendLineString = M.prototype.zk;
    M.prototype.clone = M.prototype.clone;
    M.prototype.getCoordinateAtM = M.prototype.Dn;
    M.prototype.getCoordinates = M.prototype.V;
    M.prototype.getLineString = M.prototype.hl;
    M.prototype.getLineStrings = M.prototype.qd;
    M.prototype.getType = M.prototype.S;
    M.prototype.intersectsExtent = M.prototype.Ya;
    M.prototype.setCoordinates = M.prototype.na;
    t("ol.geom.MultiPoint", rl);
    rl.prototype.appendPoint = rl.prototype.Bk;
    rl.prototype.clone = rl.prototype.clone;
    rl.prototype.getCoordinates = rl.prototype.V;
    rl.prototype.getPoint = rl.prototype.sl;
    rl.prototype.getPoints = rl.prototype.fe;
    rl.prototype.getType = rl.prototype.S;
    rl.prototype.intersectsExtent = rl.prototype.Ya;
    rl.prototype.setCoordinates = rl.prototype.na;
    t("ol.geom.MultiPolygon", O);
    O.prototype.appendPolygon = O.prototype.Ck;
    O.prototype.clone = O.prototype.clone;
    O.prototype.getArea = O.prototype.En;
    O.prototype.getCoordinates = O.prototype.V;
    O.prototype.getInteriorPoints = O.prototype.dl;
    O.prototype.getPolygon = O.prototype.tl;
    O.prototype.getPolygons = O.prototype.Zd;
    O.prototype.getType = O.prototype.S;
    O.prototype.intersectsExtent = O.prototype.Ya;
    O.prototype.setCoordinates = O.prototype.na;
    t("ol.geom.Point", C);
    C.prototype.clone = C.prototype.clone;
    C.prototype.getCoordinates = C.prototype.V;
    C.prototype.getType = C.prototype.S;
    C.prototype.intersectsExtent = C.prototype.Ya;
    C.prototype.setCoordinates = C.prototype.na;
    t("ol.geom.Polygon", D);
    D.prototype.appendLinearRing = D.prototype.Ak;
    D.prototype.clone = D.prototype.clone;
    D.prototype.getArea = D.prototype.Fn;
    D.prototype.getCoordinates = D.prototype.V;
    D.prototype.getInteriorPoint = D.prototype.cl;
    D.prototype.getLinearRingCount = D.prototype.il;
    D.prototype.getLinearRing = D.prototype.Th;
    D.prototype.getLinearRings = D.prototype.Yd;
    D.prototype.getType = D.prototype.S;
    D.prototype.intersectsExtent = D.prototype.Ya;
    D.prototype.setCoordinates = D.prototype.na;
    t("ol.geom.Polygon.circular", Rf);
    t("ol.geom.Polygon.fromExtent", Sf);
    t("ol.geom.Polygon.fromCircle", Tf);
    t("ol.geom.SimpleGeometry", gf);
    gf.prototype.getFirstCoordinate = gf.prototype.bc;
    gf.prototype.getLastCoordinate = gf.prototype.cc;
    gf.prototype.getLayout = gf.prototype.ec;
    gf.prototype.applyTransform = gf.prototype.Ic;
    gf.prototype.translate = gf.prototype.translate;
    t("ol.format.EsriJSON", tl);
    tl.prototype.readFeature = tl.prototype.Vb;
    tl.prototype.readFeatures = tl.prototype.Ma;
    tl.prototype.readGeometry = tl.prototype.Xc;
    tl.prototype.readProjection = tl.prototype.pb;
    tl.prototype.writeGeometry = tl.prototype.fd;
    tl.prototype.writeGeometryObject = tl.prototype.we;
    tl.prototype.writeFeature = tl.prototype.Hd;
    tl.prototype.writeFeatureObject = tl.prototype.ed;
    tl.prototype.writeFeatures = tl.prototype.Yb;
    tl.prototype.writeFeaturesObject = tl.prototype.ue;
    t("ol.format.Feature", gl);
    t("ol.format.filter.and", Vl);
    t("ol.format.filter.or", function (a) {
        var b = [null].concat(Array.prototype.slice.call(arguments));
        return new (Function.prototype.bind.apply(Tl, b))
    });
    t("ol.format.filter.not", function (a) {
        return new Rl(a)
    });
    t("ol.format.filter.bbox", Wl);
    t("ol.format.filter.intersects", function (a, b, c) {
        return new Ll(a, b, c)
    });
    t("ol.format.filter.within", function (a, b, c) {
        return new Ul(a, b, c)
    });
    t("ol.format.filter.equalTo", function (a, b, c) {
        return new Hl(a, b, c)
    });
    t("ol.format.filter.notEqualTo", function (a, b, c) {
        return new Sl(a, b, c)
    });
    t("ol.format.filter.lessThan", function (a, b) {
        return new Pl(a, b)
    });
    t("ol.format.filter.lessThanOrEqualTo", function (a, b) {
        return new Ql(a, b)
    });
    t("ol.format.filter.greaterThan", function (a, b) {
        return new Il(a, b)
    });
    t("ol.format.filter.greaterThanOrEqualTo", function (a, b) {
        return new Jl(a, b)
    });
    t("ol.format.filter.isNull", function (a) {
        return new Ol(a)
    });
    t("ol.format.filter.between", function (a, b, c) {
        return new Ml(a, b, c)
    });
    t("ol.format.filter.like", function (a, b, c, d, e, f) {
        return new Nl(a, b, c, d, e, f)
    });
    t("ol.format.filter.during", function (a, b, c) {
        return new Fl(a, b, c)
    });
    t("ol.format.GeoJSON", am);
    am.prototype.readFeature = am.prototype.Vb;
    am.prototype.readFeatures = am.prototype.Ma;
    am.prototype.readGeometry = am.prototype.Xc;
    am.prototype.readProjection = am.prototype.pb;
    am.prototype.writeFeature = am.prototype.Hd;
    am.prototype.writeFeatureObject = am.prototype.ed;
    am.prototype.writeFeatures = am.prototype.Yb;
    am.prototype.writeFeaturesObject = am.prototype.ue;
    am.prototype.writeGeometry = am.prototype.fd;
    am.prototype.writeGeometryObject = am.prototype.we;
    t("ol.format.GML", vm);
    vm.prototype.writeFeatures = vm.prototype.Yb;
    vm.prototype.writeFeaturesNode = vm.prototype.Zb;
    t("ol.format.GML2", Em);
    t("ol.format.GML3", vm);
    vm.prototype.writeGeometryNode = vm.prototype.ve;
    vm.prototype.writeFeatures = vm.prototype.Yb;
    vm.prototype.writeFeaturesNode = vm.prototype.Zb;
    im.prototype.readFeatures = im.prototype.Ma;
    t("ol.format.GPX", Pm);
    Pm.prototype.readFeature = Pm.prototype.Vb;
    Pm.prototype.readFeatures = Pm.prototype.Ma;
    Pm.prototype.readProjection = Pm.prototype.pb;
    Pm.prototype.writeFeatures = Pm.prototype.Yb;
    Pm.prototype.writeFeaturesNode = Pm.prototype.Zb;
    t("ol.format.IGC", An);
    An.prototype.readFeature = An.prototype.Vb;
    An.prototype.readFeatures = An.prototype.Ma;
    An.prototype.readProjection = An.prototype.pb;
    t("ol.format.KML", Jn);
    Jn.prototype.readFeature = Jn.prototype.Vb;
    Jn.prototype.readFeatures = Jn.prototype.Ma;
    Jn.prototype.readName = Jn.prototype.Lp;
    Jn.prototype.readNetworkLinks = Jn.prototype.Mp;
    Jn.prototype.readRegion = Jn.prototype.Pp;
    Jn.prototype.readRegionFromNode = Jn.prototype.wf;
    Jn.prototype.readProjection = Jn.prototype.pb;
    Jn.prototype.writeFeatures = Jn.prototype.Yb;
    Jn.prototype.writeFeaturesNode = Jn.prototype.Zb;
    t("ol.format.MVT", Rp);
    Rp.prototype.getLastExtent = Rp.prototype.eg;
    Rp.prototype.readFeatures = Rp.prototype.Ma;
    Rp.prototype.readProjection = Rp.prototype.pb;
    Rp.prototype.setLayers = Rp.prototype.zn;
    t("ol.format.OSMXML", Wp);
    Wp.prototype.readFeatures = Wp.prototype.Ma;
    Wp.prototype.readProjection = Wp.prototype.pb;
    t("ol.format.Polyline", uq);
    t("ol.format.Polyline.encodeDeltas", vq);
    t("ol.format.Polyline.decodeDeltas", xq);
    t("ol.format.Polyline.encodeFloats", wq);
    t("ol.format.Polyline.decodeFloats", yq);
    uq.prototype.readFeature = uq.prototype.Vb;
    uq.prototype.readFeatures = uq.prototype.Ma;
    uq.prototype.readGeometry = uq.prototype.Xc;
    uq.prototype.readProjection = uq.prototype.pb;
    uq.prototype.writeGeometry = uq.prototype.fd;
    t("ol.format.TopoJSON", zq);
    zq.prototype.readFeatures = zq.prototype.Ma;
    zq.prototype.readProjection = zq.prototype.pb;
    t("ol.format.WFS", Fq);
    Fq.prototype.readFeatures = Fq.prototype.Ma;
    Fq.prototype.readTransactionResponse = Fq.prototype.j;
    Fq.prototype.readFeatureCollectionMetadata = Fq.prototype.f;
    t("ol.format.WFS.writeFilter", function (a) {
        var b = Ok("http://www.opengis.net/ogc", "Filter");
        dl({node: b}, Uq, Zk(a.mc), [a], []);
        return b
    });
    Fq.prototype.writeGetFeature = Fq.prototype.o;
    Fq.prototype.writeTransaction = Fq.prototype.v;
    Fq.prototype.readProjection = Fq.prototype.pb;
    t("ol.format.WKT", $q);
    $q.prototype.readFeature = $q.prototype.Vb;
    $q.prototype.readFeatures = $q.prototype.Ma;
    $q.prototype.readGeometry = $q.prototype.Xc;
    $q.prototype.writeFeature = $q.prototype.Hd;
    $q.prototype.writeFeatures = $q.prototype.Yb;
    $q.prototype.writeGeometry = $q.prototype.fd;
    t("ol.format.WMSCapabilities", sr);
    sr.prototype.read = sr.prototype.read;
    t("ol.format.WMSGetFeatureInfo", Pr);
    Pr.prototype.readFeatures = Pr.prototype.Ma;
    t("ol.format.WMTSCapabilities", Qr);
    Qr.prototype.read = Qr.prototype.read;
    t("ol.format.filter.And", Cl);
    t("ol.format.filter.Bbox", Dl);
    t("ol.format.filter.Comparison", El);
    t("ol.format.filter.ComparisonBinary", Gl);
    t("ol.format.filter.During", Fl);
    t("ol.format.filter.EqualTo", Hl);
    t("ol.format.filter.Filter", Al);
    t("ol.format.filter.GreaterThan", Il);
    t("ol.format.filter.GreaterThanOrEqualTo", Jl);
    t("ol.format.filter.Intersects", Ll);
    t("ol.format.filter.IsBetween", Ml);
    t("ol.format.filter.IsLike", Nl);
    t("ol.format.filter.IsNull", Ol);
    t("ol.format.filter.LessThan", Pl);
    t("ol.format.filter.LessThanOrEqualTo", Ql);
    t("ol.format.filter.Not", Rl);
    t("ol.format.filter.NotEqualTo", Sl);
    t("ol.format.filter.Or", Tl);
    t("ol.format.filter.Spatial", Kl);
    t("ol.format.filter.Within", Ul);
    t("ol.events.condition.altKeyOnly", Kg);
    t("ol.events.condition.altShiftKeysOnly", Lg);
    t("ol.events.condition.always", Qe);
    t("ol.events.condition.click", function (a) {
        return "click" == a.type
    });
    t("ol.events.condition.never", Re);
    t("ol.events.condition.pointerMove", Ng);
    t("ol.events.condition.singleClick", Og);
    t("ol.events.condition.doubleClick", function (a) {
        return "dblclick" == a.type
    });
    t("ol.events.condition.noModifierKeys", Pg);
    t("ol.events.condition.platformModifierKeyOnly", function (a) {
        a = a.originalEvent;
        return !a.altKey && (pd ? a.metaKey : a.ctrlKey) && !a.shiftKey
    });
    t("ol.events.condition.shiftKeyOnly", Qg);
    t("ol.events.condition.targetNotEditable", Rg);
    t("ol.events.condition.mouseOnly", Sg);
    t("ol.events.condition.primaryAction", Tg);
    Rc.prototype.type = Rc.prototype.type;
    Rc.prototype.target = Rc.prototype.target;
    Rc.prototype.preventDefault = Rc.prototype.preventDefault;
    Rc.prototype.stopPropagation = Rc.prototype.stopPropagation;
    t("ol.control.Attribution", sg);
    t("ol.control.Attribution.render", tg);
    sg.prototype.getCollapsible = sg.prototype.en;
    sg.prototype.setCollapsible = sg.prototype.hn;
    sg.prototype.setCollapsed = sg.prototype.gn;
    sg.prototype.getCollapsed = sg.prototype.dn;
    t("ol.control.Control", rg);
    rg.prototype.getMap = rg.prototype.f;
    rg.prototype.setMap = rg.prototype.setMap;
    rg.prototype.setTarget = rg.prototype.i;
    t("ol.control.FullScreen", Ij);
    t("ol.control.MousePosition", Nj);
    t("ol.control.MousePosition.render", Oj);
    Nj.prototype.getCoordinateFormat = Nj.prototype.Oh;
    Nj.prototype.getProjection = Nj.prototype.pi;
    Nj.prototype.setCoordinateFormat = Nj.prototype.zj;
    Nj.prototype.setProjection = Nj.prototype.ri;
    t("ol.control.OverviewMap", bk);
    t("ol.control.OverviewMap.render", ck);
    bk.prototype.getCollapsible = bk.prototype.ln;
    bk.prototype.setCollapsible = bk.prototype.pn;
    bk.prototype.setCollapsed = bk.prototype.nn;
    bk.prototype.getCollapsed = bk.prototype.kn;
    bk.prototype.getOverviewMap = bk.prototype.pl;
    t("ol.control.Rotate", vg);
    t("ol.control.Rotate.render", wg);
    t("ol.control.ScaleLine", gk);
    gk.prototype.getUnits = gk.prototype.D;
    t("ol.control.ScaleLine.render", hk);
    gk.prototype.setUnits = gk.prototype.I;
    t("ol.control.Zoom", xg);
    t("ol.control.ZoomSlider", lk);
    t("ol.control.ZoomSlider.render", nk);
    t("ol.control.ZoomToExtent", sk);
    Wc.prototype.changed = Wc.prototype.u;
    Wc.prototype.dispatchEvent = Wc.prototype.b;
    Wc.prototype.getRevision = Wc.prototype.L;
    Wc.prototype.on = Wc.prototype.J;
    Wc.prototype.once = Wc.prototype.once;
    Wc.prototype.un = Wc.prototype.K;
    F.prototype.get = F.prototype.get;
    F.prototype.getKeys = F.prototype.P;
    F.prototype.getProperties = F.prototype.M;
    F.prototype.set = F.prototype.set;
    F.prototype.setProperties = F.prototype.H;
    F.prototype.unset = F.prototype.R;
    F.prototype.changed = F.prototype.u;
    F.prototype.dispatchEvent = F.prototype.b;
    F.prototype.getRevision = F.prototype.L;
    F.prototype.on = F.prototype.J;
    F.prototype.once = F.prototype.once;
    F.prototype.un = F.prototype.K;
    G.prototype.addControl = G.prototype.Nf;
    G.prototype.addInteraction = G.prototype.Of;
    G.prototype.addLayer = G.prototype.Be;
    G.prototype.addOverlay = G.prototype.Ce;
    G.prototype.forEachFeatureAtPixel = G.prototype.Lc;
    G.prototype.getFeaturesAtPixel = G.prototype.Zf;
    G.prototype.forEachLayerAtPixel = G.prototype.tg;
    G.prototype.hasFeatureAtPixel = G.prototype.og;
    G.prototype.getEventCoordinate = G.prototype.Xd;
    G.prototype.getEventPixel = G.prototype.od;
    G.prototype.getTarget = G.prototype.ae;
    G.prototype.getTargetElement = G.prototype.vc;
    G.prototype.getCoordinateFromPixel = G.prototype.Na;
    G.prototype.getControls = G.prototype.Yf;
    G.prototype.getOverlays = G.prototype.ig;
    G.prototype.getOverlayById = G.prototype.hg;
    G.prototype.getInteractions = G.prototype.dg;
    G.prototype.getLayerGroup = G.prototype.dc;
    G.prototype.getLayers = G.prototype.Ze;
    G.prototype.getPixelFromCoordinate = G.prototype.Ha;
    G.prototype.getSize = G.prototype.yb;
    G.prototype.getView = G.prototype.$;
    G.prototype.getViewport = G.prototype.mg;
    G.prototype.renderSync = G.prototype.bh;
    G.prototype.render = G.prototype.render;
    G.prototype.removeControl = G.prototype.Wg;
    G.prototype.removeInteraction = G.prototype.Yg;
    G.prototype.removeLayer = G.prototype.Zg;
    G.prototype.removeOverlay = G.prototype.$g;
    G.prototype.setLayerGroup = G.prototype.Af;
    G.prototype.setSize = G.prototype.le;
    G.prototype.setTarget = G.prototype.vd;
    G.prototype.setView = G.prototype.ih;
    G.prototype.updateSize = G.prototype.Gc;
    G.prototype.get = G.prototype.get;
    G.prototype.getKeys = G.prototype.P;
    G.prototype.getProperties = G.prototype.M;
    G.prototype.set = G.prototype.set;
    G.prototype.setProperties = G.prototype.H;
    G.prototype.unset = G.prototype.R;
    G.prototype.changed = G.prototype.u;
    G.prototype.dispatchEvent = G.prototype.b;
    G.prototype.getRevision = G.prototype.L;
    G.prototype.on = G.prototype.J;
    G.prototype.once = G.prototype.once;
    G.prototype.un = G.prototype.K;
    ad.prototype.get = ad.prototype.get;
    ad.prototype.getKeys = ad.prototype.P;
    ad.prototype.getProperties = ad.prototype.M;
    ad.prototype.set = ad.prototype.set;
    ad.prototype.setProperties = ad.prototype.H;
    ad.prototype.unset = ad.prototype.R;
    ad.prototype.changed = ad.prototype.u;
    ad.prototype.dispatchEvent = ad.prototype.b;
    ad.prototype.getRevision = ad.prototype.L;
    ad.prototype.on = ad.prototype.J;
    ad.prototype.once = ad.prototype.once;
    ad.prototype.un = ad.prototype.K;
    ed.prototype.type = ed.prototype.type;
    ed.prototype.target = ed.prototype.target;
    ed.prototype.preventDefault = ed.prototype.preventDefault;
    ed.prototype.stopPropagation = ed.prototype.stopPropagation;
    tk.prototype.get = tk.prototype.get;
    tk.prototype.getKeys = tk.prototype.P;
    tk.prototype.getProperties = tk.prototype.M;
    tk.prototype.set = tk.prototype.set;
    tk.prototype.setProperties = tk.prototype.H;
    tk.prototype.unset = tk.prototype.R;
    tk.prototype.changed = tk.prototype.u;
    tk.prototype.dispatchEvent = tk.prototype.b;
    tk.prototype.getRevision = tk.prototype.L;
    tk.prototype.on = tk.prototype.J;
    tk.prototype.once = tk.prototype.once;
    tk.prototype.un = tk.prototype.K;
    Lk.prototype.get = Lk.prototype.get;
    Lk.prototype.getKeys = Lk.prototype.P;
    Lk.prototype.getProperties = Lk.prototype.M;
    Lk.prototype.set = Lk.prototype.set;
    Lk.prototype.setProperties = Lk.prototype.H;
    Lk.prototype.unset = Lk.prototype.R;
    Lk.prototype.changed = Lk.prototype.u;
    Lk.prototype.dispatchEvent = Lk.prototype.b;
    Lk.prototype.getRevision = Lk.prototype.L;
    Lk.prototype.on = Lk.prototype.J;
    Lk.prototype.once = Lk.prototype.once;
    Lk.prototype.un = Lk.prototype.K;
    es.prototype.get = es.prototype.get;
    es.prototype.getKeys = es.prototype.P;
    es.prototype.getProperties = es.prototype.M;
    es.prototype.set = es.prototype.set;
    es.prototype.setProperties = es.prototype.H;
    es.prototype.unset = es.prototype.R;
    es.prototype.changed = es.prototype.u;
    es.prototype.dispatchEvent = es.prototype.b;
    es.prototype.getRevision = es.prototype.L;
    es.prototype.on = es.prototype.J;
    es.prototype.once = es.prototype.once;
    es.prototype.un = es.prototype.K;
    vs.prototype.getTileCoord = vs.prototype.i;
    vs.prototype.load = vs.prototype.load;
    W.prototype.addControl = W.prototype.Nf;
    W.prototype.addInteraction = W.prototype.Of;
    W.prototype.addLayer = W.prototype.Be;
    W.prototype.addOverlay = W.prototype.Ce;
    W.prototype.forEachFeatureAtPixel = W.prototype.Lc;
    W.prototype.getFeaturesAtPixel = W.prototype.Zf;
    W.prototype.forEachLayerAtPixel = W.prototype.tg;
    W.prototype.hasFeatureAtPixel = W.prototype.og;
    W.prototype.getEventCoordinate = W.prototype.Xd;
    W.prototype.getEventPixel = W.prototype.od;
    W.prototype.getTarget = W.prototype.ae;
    W.prototype.getTargetElement = W.prototype.vc;
    W.prototype.getCoordinateFromPixel = W.prototype.Na;
    W.prototype.getControls = W.prototype.Yf;
    W.prototype.getOverlays = W.prototype.ig;
    W.prototype.getOverlayById = W.prototype.hg;
    W.prototype.getInteractions = W.prototype.dg;
    W.prototype.getLayerGroup = W.prototype.dc;
    W.prototype.getLayers = W.prototype.Ze;
    W.prototype.getPixelFromCoordinate = W.prototype.Ha;
    W.prototype.getSize = W.prototype.yb;
    W.prototype.getView = W.prototype.$;
    W.prototype.getViewport = W.prototype.mg;
    W.prototype.renderSync = W.prototype.bh;
    W.prototype.render = W.prototype.render;
    W.prototype.removeControl = W.prototype.Wg;
    W.prototype.removeInteraction = W.prototype.Yg;
    W.prototype.removeLayer = W.prototype.Zg;
    W.prototype.removeOverlay = W.prototype.$g;
    W.prototype.setLayerGroup = W.prototype.Af;
    W.prototype.setSize = W.prototype.le;
    W.prototype.setTarget = W.prototype.vd;
    W.prototype.setView = W.prototype.ih;
    W.prototype.updateSize = W.prototype.Gc;
    W.prototype.get = W.prototype.get;
    W.prototype.getKeys = W.prototype.P;
    W.prototype.getProperties = W.prototype.M;
    W.prototype.set = W.prototype.set;
    W.prototype.setProperties = W.prototype.H;
    W.prototype.unset = W.prototype.R;
    W.prototype.changed = W.prototype.u;
    W.prototype.dispatchEvent = W.prototype.b;
    W.prototype.getRevision = W.prototype.L;
    W.prototype.on = W.prototype.J;
    W.prototype.once = W.prototype.once;
    W.prototype.un = W.prototype.K;
    fd.prototype.type = fd.prototype.type;
    fd.prototype.target = fd.prototype.target;
    fd.prototype.preventDefault = fd.prototype.preventDefault;
    fd.prototype.stopPropagation = fd.prototype.stopPropagation;
    gd.prototype.map = gd.prototype.map;
    gd.prototype.frameState = gd.prototype.frameState;
    gd.prototype.type = gd.prototype.type;
    gd.prototype.target = gd.prototype.target;
    gd.prototype.preventDefault = gd.prototype.preventDefault;
    gd.prototype.stopPropagation = gd.prototype.stopPropagation;
    Ed.prototype.originalEvent = Ed.prototype.originalEvent;
    Ed.prototype.pixel = Ed.prototype.pixel;
    Ed.prototype.coordinate = Ed.prototype.coordinate;
    Ed.prototype.dragging = Ed.prototype.dragging;
    Ed.prototype.preventDefault = Ed.prototype.preventDefault;
    Ed.prototype.stopPropagation = Ed.prototype.stopPropagation;
    Ed.prototype.map = Ed.prototype.map;
    Ed.prototype.frameState = Ed.prototype.frameState;
    Ed.prototype.type = Ed.prototype.type;
    Ed.prototype.target = Ed.prototype.target;
    $c.prototype.type = $c.prototype.type;
    $c.prototype.target = $c.prototype.target;
    $c.prototype.preventDefault = $c.prototype.preventDefault;
    $c.prototype.stopPropagation = $c.prototype.stopPropagation;
    Sj.prototype.get = Sj.prototype.get;
    Sj.prototype.getKeys = Sj.prototype.P;
    Sj.prototype.getProperties = Sj.prototype.M;
    Sj.prototype.set = Sj.prototype.set;
    Sj.prototype.setProperties = Sj.prototype.H;
    Sj.prototype.unset = Sj.prototype.R;
    Sj.prototype.changed = Sj.prototype.u;
    Sj.prototype.dispatchEvent = Sj.prototype.b;
    Sj.prototype.getRevision = Sj.prototype.L;
    Sj.prototype.on = Sj.prototype.J;
    Sj.prototype.once = Sj.prototype.once;
    Sj.prototype.un = Sj.prototype.K;
    Yx.prototype.getTileCoord = Yx.prototype.i;
    Yx.prototype.load = Yx.prototype.load;
    $x.prototype.getTileCoord = $x.prototype.i;
    $x.prototype.load = $x.prototype.load;
    E.prototype.get = E.prototype.get;
    E.prototype.getKeys = E.prototype.P;
    E.prototype.getProperties = E.prototype.M;
    E.prototype.set = E.prototype.set;
    E.prototype.setProperties = E.prototype.H;
    E.prototype.unset = E.prototype.R;
    E.prototype.changed = E.prototype.u;
    E.prototype.dispatchEvent = E.prototype.b;
    E.prototype.getRevision = E.prototype.L;
    E.prototype.on = E.prototype.J;
    E.prototype.once = E.prototype.once;
    E.prototype.un = E.prototype.K;
    cy.prototype.forEachTileCoord = cy.prototype.Wf;
    cy.prototype.getMaxZoom = cy.prototype.hj;
    cy.prototype.getMinZoom = cy.prototype.ij;
    cy.prototype.getOrigin = cy.prototype.Cc;
    cy.prototype.getResolution = cy.prototype.Qa;
    cy.prototype.getResolutions = cy.prototype.jj;
    cy.prototype.getTileCoordExtent = cy.prototype.Ja;
    cy.prototype.getTileCoordForCoordAndResolution = cy.prototype.Ne;
    cy.prototype.getTileCoordForCoordAndZ = cy.prototype.lg;
    cy.prototype.getTileSize = cy.prototype.eb;
    cy.prototype.getZForResolution = cy.prototype.wc;
    Ak.prototype.getOpacity = Ak.prototype.jf;
    Ak.prototype.getRotateWithView = Ak.prototype.kf;
    Ak.prototype.getRotation = Ak.prototype.lf;
    Ak.prototype.getScale = Ak.prototype.mf;
    Ak.prototype.getSnapToPixel = Ak.prototype.Me;
    Ak.prototype.setOpacity = Ak.prototype.Bd;
    Ak.prototype.setRotation = Ak.prototype.nf;
    Ak.prototype.setScale = Ak.prototype.Cd;
    Ck.prototype.clone = Ck.prototype.clone;
    Ck.prototype.getAngle = Ck.prototype.dj;
    Ck.prototype.getFill = Ck.prototype.Ca;
    Ck.prototype.getPoints = Ck.prototype.ej;
    Ck.prototype.getRadius = Ck.prototype.fj;
    Ck.prototype.getRadius2 = Ck.prototype.Wh;
    Ck.prototype.getStroke = Ck.prototype.Da;
    Ck.prototype.getOpacity = Ck.prototype.jf;
    Ck.prototype.getRotateWithView = Ck.prototype.kf;
    Ck.prototype.getRotation = Ck.prototype.lf;
    Ck.prototype.getScale = Ck.prototype.mf;
    Ck.prototype.getSnapToPixel = Ck.prototype.Me;
    Ck.prototype.setOpacity = Ck.prototype.Bd;
    Ck.prototype.setRotation = Ck.prototype.nf;
    Ck.prototype.setScale = Ck.prototype.Cd;
    Hn.prototype.getOpacity = Hn.prototype.jf;
    Hn.prototype.getRotateWithView = Hn.prototype.kf;
    Hn.prototype.getRotation = Hn.prototype.lf;
    Hn.prototype.getScale = Hn.prototype.mf;
    Hn.prototype.getSnapToPixel = Hn.prototype.Me;
    Hn.prototype.setOpacity = Hn.prototype.Bd;
    Hn.prototype.setRotation = Hn.prototype.nf;
    Hn.prototype.setScale = Hn.prototype.Cd;
    Ls.prototype.get = Ls.prototype.get;
    Ls.prototype.getKeys = Ls.prototype.P;
    Ls.prototype.getProperties = Ls.prototype.M;
    Ls.prototype.set = Ls.prototype.set;
    Ls.prototype.setProperties = Ls.prototype.H;
    Ls.prototype.unset = Ls.prototype.R;
    Ls.prototype.changed = Ls.prototype.u;
    Ls.prototype.dispatchEvent = Ls.prototype.b;
    Ls.prototype.getRevision = Ls.prototype.L;
    Ls.prototype.on = Ls.prototype.J;
    Ls.prototype.once = Ls.prototype.once;
    Ls.prototype.un = Ls.prototype.K;
    $w.prototype.getAttributions = $w.prototype.za;
    $w.prototype.getLogo = $w.prototype.xa;
    $w.prototype.getProjection = $w.prototype.Aa;
    $w.prototype.getState = $w.prototype.getState;
    $w.prototype.refresh = $w.prototype.ua;
    $w.prototype.setAttributions = $w.prototype.va;
    $w.prototype.get = $w.prototype.get;
    $w.prototype.getKeys = $w.prototype.P;
    $w.prototype.getProperties = $w.prototype.M;
    $w.prototype.set = $w.prototype.set;
    $w.prototype.setProperties = $w.prototype.H;
    $w.prototype.unset = $w.prototype.R;
    $w.prototype.changed = $w.prototype.u;
    $w.prototype.dispatchEvent = $w.prototype.b;
    $w.prototype.getRevision = $w.prototype.L;
    $w.prototype.on = $w.prototype.J;
    $w.prototype.once = $w.prototype.once;
    $w.prototype.un = $w.prototype.K;
    dx.prototype.getTileGrid = dx.prototype.cb;
    dx.prototype.refresh = dx.prototype.ua;
    dx.prototype.getAttributions = dx.prototype.za;
    dx.prototype.getLogo = dx.prototype.xa;
    dx.prototype.getProjection = dx.prototype.Aa;
    dx.prototype.getState = dx.prototype.getState;
    dx.prototype.setAttributions = dx.prototype.va;
    dx.prototype.get = dx.prototype.get;
    dx.prototype.getKeys = dx.prototype.P;
    dx.prototype.getProperties = dx.prototype.M;
    dx.prototype.set = dx.prototype.set;
    dx.prototype.setProperties = dx.prototype.H;
    dx.prototype.unset = dx.prototype.R;
    dx.prototype.changed = dx.prototype.u;
    dx.prototype.dispatchEvent = dx.prototype.b;
    dx.prototype.getRevision = dx.prototype.L;
    dx.prototype.on = dx.prototype.J;
    dx.prototype.once = dx.prototype.once;
    dx.prototype.un = dx.prototype.K;
    X.prototype.getTileLoadFunction = X.prototype.ub;
    X.prototype.getTileUrlFunction = X.prototype.vb;
    X.prototype.getUrls = X.prototype.wb;
    X.prototype.setTileLoadFunction = X.prototype.Bb;
    X.prototype.setTileUrlFunction = X.prototype.ib;
    X.prototype.setUrl = X.prototype.ob;
    X.prototype.setUrls = X.prototype.jb;
    X.prototype.getTileGrid = X.prototype.cb;
    X.prototype.refresh = X.prototype.ua;
    X.prototype.getAttributions = X.prototype.za;
    X.prototype.getLogo = X.prototype.xa;
    X.prototype.getProjection = X.prototype.Aa;
    X.prototype.getState = X.prototype.getState;
    X.prototype.setAttributions = X.prototype.va;
    X.prototype.get = X.prototype.get;
    X.prototype.getKeys = X.prototype.P;
    X.prototype.getProperties = X.prototype.M;
    X.prototype.set = X.prototype.set;
    X.prototype.setProperties = X.prototype.H;
    X.prototype.unset = X.prototype.R;
    X.prototype.changed = X.prototype.u;
    X.prototype.dispatchEvent = X.prototype.b;
    X.prototype.getRevision = X.prototype.L;
    X.prototype.on = X.prototype.J;
    X.prototype.once = X.prototype.once;
    X.prototype.un = X.prototype.K;
    hx.prototype.setRenderReprojectionEdges = hx.prototype.Ob;
    hx.prototype.setTileGridForProjection = hx.prototype.Pb;
    hx.prototype.getTileLoadFunction = hx.prototype.ub;
    hx.prototype.getTileUrlFunction = hx.prototype.vb;
    hx.prototype.getUrls = hx.prototype.wb;
    hx.prototype.setTileLoadFunction = hx.prototype.Bb;
    hx.prototype.setTileUrlFunction = hx.prototype.ib;
    hx.prototype.setUrl = hx.prototype.ob;
    hx.prototype.setUrls = hx.prototype.jb;
    hx.prototype.getTileGrid = hx.prototype.cb;
    hx.prototype.refresh = hx.prototype.ua;
    hx.prototype.getAttributions = hx.prototype.za;
    hx.prototype.getLogo = hx.prototype.xa;
    hx.prototype.getProjection = hx.prototype.Aa;
    hx.prototype.getState = hx.prototype.getState;
    hx.prototype.setAttributions = hx.prototype.va;
    hx.prototype.get = hx.prototype.get;
    hx.prototype.getKeys = hx.prototype.P;
    hx.prototype.getProperties = hx.prototype.M;
    hx.prototype.set = hx.prototype.set;
    hx.prototype.setProperties = hx.prototype.H;
    hx.prototype.unset = hx.prototype.R;
    hx.prototype.changed = hx.prototype.u;
    hx.prototype.dispatchEvent = hx.prototype.b;
    hx.prototype.getRevision = hx.prototype.L;
    hx.prototype.on = hx.prototype.J;
    hx.prototype.once = hx.prototype.once;
    hx.prototype.un = hx.prototype.K;
    jx.prototype.setRenderReprojectionEdges = jx.prototype.Ob;
    jx.prototype.setTileGridForProjection = jx.prototype.Pb;
    jx.prototype.getTileLoadFunction = jx.prototype.ub;
    jx.prototype.getTileUrlFunction = jx.prototype.vb;
    jx.prototype.getUrls = jx.prototype.wb;
    jx.prototype.setTileLoadFunction = jx.prototype.Bb;
    jx.prototype.setTileUrlFunction = jx.prototype.ib;
    jx.prototype.setUrl = jx.prototype.ob;
    jx.prototype.setUrls = jx.prototype.jb;
    jx.prototype.getTileGrid = jx.prototype.cb;
    jx.prototype.refresh = jx.prototype.ua;
    jx.prototype.getAttributions = jx.prototype.za;
    jx.prototype.getLogo = jx.prototype.xa;
    jx.prototype.getProjection = jx.prototype.Aa;
    jx.prototype.getState = jx.prototype.getState;
    jx.prototype.setAttributions = jx.prototype.va;
    jx.prototype.get = jx.prototype.get;
    jx.prototype.getKeys = jx.prototype.P;
    jx.prototype.getProperties = jx.prototype.M;
    jx.prototype.set = jx.prototype.set;
    jx.prototype.setProperties = jx.prototype.H;
    jx.prototype.unset = jx.prototype.R;
    jx.prototype.changed = jx.prototype.u;
    jx.prototype.dispatchEvent = jx.prototype.b;
    jx.prototype.getRevision = jx.prototype.L;
    jx.prototype.on = jx.prototype.J;
    jx.prototype.once = jx.prototype.once;
    jx.prototype.un = jx.prototype.K;
    kx.prototype.setRenderReprojectionEdges = kx.prototype.Ob;
    kx.prototype.setTileGridForProjection = kx.prototype.Pb;
    kx.prototype.getTileLoadFunction = kx.prototype.ub;
    kx.prototype.getTileUrlFunction = kx.prototype.vb;
    kx.prototype.getUrls = kx.prototype.wb;
    kx.prototype.setTileLoadFunction = kx.prototype.Bb;
    kx.prototype.setTileUrlFunction = kx.prototype.ib;
    kx.prototype.setUrl = kx.prototype.ob;
    kx.prototype.setUrls = kx.prototype.jb;
    kx.prototype.getTileGrid = kx.prototype.cb;
    kx.prototype.refresh = kx.prototype.ua;
    kx.prototype.getAttributions = kx.prototype.za;
    kx.prototype.getLogo = kx.prototype.xa;
    kx.prototype.getProjection = kx.prototype.Aa;
    kx.prototype.getState = kx.prototype.getState;
    kx.prototype.setAttributions = kx.prototype.va;
    kx.prototype.get = kx.prototype.get;
    kx.prototype.getKeys = kx.prototype.P;
    kx.prototype.getProperties = kx.prototype.M;
    kx.prototype.set = kx.prototype.set;
    kx.prototype.setProperties = kx.prototype.H;
    kx.prototype.unset = kx.prototype.R;
    kx.prototype.changed = kx.prototype.u;
    kx.prototype.dispatchEvent = kx.prototype.b;
    kx.prototype.getRevision = kx.prototype.L;
    kx.prototype.on = kx.prototype.J;
    kx.prototype.once = kx.prototype.once;
    kx.prototype.un = kx.prototype.K;
    R.prototype.getAttributions = R.prototype.za;
    R.prototype.getLogo = R.prototype.xa;
    R.prototype.getProjection = R.prototype.Aa;
    R.prototype.getState = R.prototype.getState;
    R.prototype.refresh = R.prototype.ua;
    R.prototype.setAttributions = R.prototype.va;
    R.prototype.get = R.prototype.get;
    R.prototype.getKeys = R.prototype.P;
    R.prototype.getProperties = R.prototype.M;
    R.prototype.set = R.prototype.set;
    R.prototype.setProperties = R.prototype.H;
    R.prototype.unset = R.prototype.R;
    R.prototype.changed = R.prototype.u;
    R.prototype.dispatchEvent = R.prototype.b;
    R.prototype.getRevision = R.prototype.L;
    R.prototype.on = R.prototype.J;
    R.prototype.once = R.prototype.once;
    R.prototype.un = R.prototype.K;
    Y.prototype.addFeature = Y.prototype.Db;
    Y.prototype.addFeatures = Y.prototype.Hc;
    Y.prototype.clear = Y.prototype.clear;
    Y.prototype.forEachFeature = Y.prototype.Jh;
    Y.prototype.forEachFeatureInExtent = Y.prototype.ac;
    Y.prototype.forEachFeatureIntersectingExtent = Y.prototype.Kh;
    Y.prototype.getFeaturesCollection = Y.prototype.Rh;
    Y.prototype.getFeatures = Y.prototype.ge;
    Y.prototype.getFeaturesAtCoordinate = Y.prototype.Qh;
    Y.prototype.getFeaturesInExtent = Y.prototype.$f;
    Y.prototype.getClosestFeatureToCoordinate = Y.prototype.Mh;
    Y.prototype.getExtent = Y.prototype.G;
    Y.prototype.getFeatureById = Y.prototype.Ph;
    Y.prototype.getFormat = Y.prototype.$i;
    Y.prototype.getUrl = Y.prototype.aj;
    Y.prototype.removeFeature = Y.prototype.Hb;
    Y.prototype.setLoader = Y.prototype.cj;
    Y.prototype.getAttributions = Y.prototype.za;
    Y.prototype.getLogo = Y.prototype.xa;
    Y.prototype.getProjection = Y.prototype.Aa;
    Y.prototype.getState = Y.prototype.getState;
    Y.prototype.refresh = Y.prototype.ua;
    Y.prototype.setAttributions = Y.prototype.va;
    Y.prototype.get = Y.prototype.get;
    Y.prototype.getKeys = Y.prototype.P;
    Y.prototype.getProperties = Y.prototype.M;
    Y.prototype.set = Y.prototype.set;
    Y.prototype.setProperties = Y.prototype.H;
    Y.prototype.unset = Y.prototype.R;
    Y.prototype.changed = Y.prototype.u;
    Y.prototype.dispatchEvent = Y.prototype.b;
    Y.prototype.getRevision = Y.prototype.L;
    Y.prototype.on = Y.prototype.J;
    Y.prototype.once = Y.prototype.once;
    Y.prototype.un = Y.prototype.K;
    ww.prototype.getAttributions = ww.prototype.za;
    ww.prototype.getLogo = ww.prototype.xa;
    ww.prototype.getProjection = ww.prototype.Aa;
    ww.prototype.getState = ww.prototype.getState;
    ww.prototype.refresh = ww.prototype.ua;
    ww.prototype.setAttributions = ww.prototype.va;
    ww.prototype.get = ww.prototype.get;
    ww.prototype.getKeys = ww.prototype.P;
    ww.prototype.getProperties = ww.prototype.M;
    ww.prototype.set = ww.prototype.set;
    ww.prototype.setProperties = ww.prototype.H;
    ww.prototype.unset = ww.prototype.R;
    ww.prototype.changed = ww.prototype.u;
    ww.prototype.dispatchEvent = ww.prototype.b;
    ww.prototype.getRevision = ww.prototype.L;
    ww.prototype.on = ww.prototype.J;
    ww.prototype.once = ww.prototype.once;
    ww.prototype.un = ww.prototype.K;
    yw.prototype.type = yw.prototype.type;
    yw.prototype.target = yw.prototype.target;
    yw.prototype.preventDefault = yw.prototype.preventDefault;
    yw.prototype.stopPropagation = yw.prototype.stopPropagation;
    qx.prototype.getAttributions = qx.prototype.za;
    qx.prototype.getLogo = qx.prototype.xa;
    qx.prototype.getProjection = qx.prototype.Aa;
    qx.prototype.getState = qx.prototype.getState;
    qx.prototype.refresh = qx.prototype.ua;
    qx.prototype.setAttributions = qx.prototype.va;
    qx.prototype.get = qx.prototype.get;
    qx.prototype.getKeys = qx.prototype.P;
    qx.prototype.getProperties = qx.prototype.M;
    qx.prototype.set = qx.prototype.set;
    qx.prototype.setProperties = qx.prototype.H;
    qx.prototype.unset = qx.prototype.R;
    qx.prototype.changed = qx.prototype.u;
    qx.prototype.dispatchEvent = qx.prototype.b;
    qx.prototype.getRevision = qx.prototype.L;
    qx.prototype.on = qx.prototype.J;
    qx.prototype.once = qx.prototype.once;
    qx.prototype.un = qx.prototype.K;
    Dw.prototype.getAttributions = Dw.prototype.za;
    Dw.prototype.getLogo = Dw.prototype.xa;
    Dw.prototype.getProjection = Dw.prototype.Aa;
    Dw.prototype.getState = Dw.prototype.getState;
    Dw.prototype.refresh = Dw.prototype.ua;
    Dw.prototype.setAttributions = Dw.prototype.va;
    Dw.prototype.get = Dw.prototype.get;
    Dw.prototype.getKeys = Dw.prototype.P;
    Dw.prototype.getProperties = Dw.prototype.M;
    Dw.prototype.set = Dw.prototype.set;
    Dw.prototype.setProperties = Dw.prototype.H;
    Dw.prototype.unset = Dw.prototype.R;
    Dw.prototype.changed = Dw.prototype.u;
    Dw.prototype.dispatchEvent = Dw.prototype.b;
    Dw.prototype.getRevision = Dw.prototype.L;
    Dw.prototype.on = Dw.prototype.J;
    Dw.prototype.once = Dw.prototype.once;
    Dw.prototype.un = Dw.prototype.K;
    rx.prototype.getAttributions = rx.prototype.za;
    rx.prototype.getLogo = rx.prototype.xa;
    rx.prototype.getProjection = rx.prototype.Aa;
    rx.prototype.getState = rx.prototype.getState;
    rx.prototype.refresh = rx.prototype.ua;
    rx.prototype.setAttributions = rx.prototype.va;
    rx.prototype.get = rx.prototype.get;
    rx.prototype.getKeys = rx.prototype.P;
    rx.prototype.getProperties = rx.prototype.M;
    rx.prototype.set = rx.prototype.set;
    rx.prototype.setProperties = rx.prototype.H;
    rx.prototype.unset = rx.prototype.R;
    rx.prototype.changed = rx.prototype.u;
    rx.prototype.dispatchEvent = rx.prototype.b;
    rx.prototype.getRevision = rx.prototype.L;
    rx.prototype.on = rx.prototype.J;
    rx.prototype.once = rx.prototype.once;
    rx.prototype.un = rx.prototype.K;
    sx.prototype.getAttributions = sx.prototype.za;
    sx.prototype.getLogo = sx.prototype.xa;
    sx.prototype.getProjection = sx.prototype.Aa;
    sx.prototype.getState = sx.prototype.getState;
    sx.prototype.refresh = sx.prototype.ua;
    sx.prototype.setAttributions = sx.prototype.va;
    sx.prototype.get = sx.prototype.get;
    sx.prototype.getKeys = sx.prototype.P;
    sx.prototype.getProperties = sx.prototype.M;
    sx.prototype.set = sx.prototype.set;
    sx.prototype.setProperties = sx.prototype.H;
    sx.prototype.unset = sx.prototype.R;
    sx.prototype.changed = sx.prototype.u;
    sx.prototype.dispatchEvent = sx.prototype.b;
    sx.prototype.getRevision = sx.prototype.L;
    sx.prototype.on = sx.prototype.J;
    sx.prototype.once = sx.prototype.once;
    sx.prototype.un = sx.prototype.K;
    Ew.prototype.getAttributions = Ew.prototype.za;
    Ew.prototype.getLogo = Ew.prototype.xa;
    Ew.prototype.getProjection = Ew.prototype.Aa;
    Ew.prototype.getState = Ew.prototype.getState;
    Ew.prototype.refresh = Ew.prototype.ua;
    Ew.prototype.setAttributions = Ew.prototype.va;
    Ew.prototype.get = Ew.prototype.get;
    Ew.prototype.getKeys = Ew.prototype.P;
    Ew.prototype.getProperties = Ew.prototype.M;
    Ew.prototype.set = Ew.prototype.set;
    Ew.prototype.setProperties = Ew.prototype.H;
    Ew.prototype.unset = Ew.prototype.R;
    Ew.prototype.changed = Ew.prototype.u;
    Ew.prototype.dispatchEvent = Ew.prototype.b;
    Ew.prototype.getRevision = Ew.prototype.L;
    Ew.prototype.on = Ew.prototype.J;
    Ew.prototype.once = Ew.prototype.once;
    Ew.prototype.un = Ew.prototype.K;
    tx.prototype.getAttributions = tx.prototype.za;
    tx.prototype.getLogo = tx.prototype.xa;
    tx.prototype.getProjection = tx.prototype.Aa;
    tx.prototype.getState = tx.prototype.getState;
    tx.prototype.refresh = tx.prototype.ua;
    tx.prototype.setAttributions = tx.prototype.va;
    tx.prototype.get = tx.prototype.get;
    tx.prototype.getKeys = tx.prototype.P;
    tx.prototype.getProperties = tx.prototype.M;
    tx.prototype.set = tx.prototype.set;
    tx.prototype.setProperties = tx.prototype.H;
    tx.prototype.unset = tx.prototype.R;
    tx.prototype.changed = tx.prototype.u;
    tx.prototype.dispatchEvent = tx.prototype.b;
    tx.prototype.getRevision = tx.prototype.L;
    tx.prototype.on = tx.prototype.J;
    tx.prototype.once = tx.prototype.once;
    tx.prototype.un = tx.prototype.K;
    xx.prototype.setRenderReprojectionEdges = xx.prototype.Ob;
    xx.prototype.setTileGridForProjection = xx.prototype.Pb;
    xx.prototype.getTileLoadFunction = xx.prototype.ub;
    xx.prototype.getTileUrlFunction = xx.prototype.vb;
    xx.prototype.getUrls = xx.prototype.wb;
    xx.prototype.setTileLoadFunction = xx.prototype.Bb;
    xx.prototype.setTileUrlFunction = xx.prototype.ib;
    xx.prototype.setUrl = xx.prototype.ob;
    xx.prototype.setUrls = xx.prototype.jb;
    xx.prototype.getTileGrid = xx.prototype.cb;
    xx.prototype.refresh = xx.prototype.ua;
    xx.prototype.getAttributions = xx.prototype.za;
    xx.prototype.getLogo = xx.prototype.xa;
    xx.prototype.getProjection = xx.prototype.Aa;
    xx.prototype.getState = xx.prototype.getState;
    xx.prototype.setAttributions = xx.prototype.va;
    xx.prototype.get = xx.prototype.get;
    xx.prototype.getKeys = xx.prototype.P;
    xx.prototype.getProperties = xx.prototype.M;
    xx.prototype.set = xx.prototype.set;
    xx.prototype.setProperties = xx.prototype.H;
    xx.prototype.unset = xx.prototype.R;
    xx.prototype.changed = xx.prototype.u;
    xx.prototype.dispatchEvent = xx.prototype.b;
    xx.prototype.getRevision = xx.prototype.L;
    xx.prototype.on = xx.prototype.J;
    xx.prototype.once = xx.prototype.once;
    xx.prototype.un = xx.prototype.K;
    zx.prototype.getAttributions = zx.prototype.za;
    zx.prototype.getLogo = zx.prototype.xa;
    zx.prototype.getProjection = zx.prototype.Aa;
    zx.prototype.getState = zx.prototype.getState;
    zx.prototype.refresh = zx.prototype.ua;
    zx.prototype.setAttributions = zx.prototype.va;
    zx.prototype.get = zx.prototype.get;
    zx.prototype.getKeys = zx.prototype.P;
    zx.prototype.getProperties = zx.prototype.M;
    zx.prototype.set = zx.prototype.set;
    zx.prototype.setProperties = zx.prototype.H;
    zx.prototype.unset = zx.prototype.R;
    zx.prototype.changed = zx.prototype.u;
    zx.prototype.dispatchEvent = zx.prototype.b;
    zx.prototype.getRevision = zx.prototype.L;
    zx.prototype.on = zx.prototype.J;
    zx.prototype.once = zx.prototype.once;
    zx.prototype.un = zx.prototype.K;
    Dx.prototype.type = Dx.prototype.type;
    Dx.prototype.target = Dx.prototype.target;
    Dx.prototype.preventDefault = Dx.prototype.preventDefault;
    Dx.prototype.stopPropagation = Dx.prototype.stopPropagation;
    Gx.prototype.setRenderReprojectionEdges = Gx.prototype.Ob;
    Gx.prototype.setTileGridForProjection = Gx.prototype.Pb;
    Gx.prototype.getTileLoadFunction = Gx.prototype.ub;
    Gx.prototype.getTileUrlFunction = Gx.prototype.vb;
    Gx.prototype.getUrls = Gx.prototype.wb;
    Gx.prototype.setTileLoadFunction = Gx.prototype.Bb;
    Gx.prototype.setTileUrlFunction = Gx.prototype.ib;
    Gx.prototype.setUrl = Gx.prototype.ob;
    Gx.prototype.setUrls = Gx.prototype.jb;
    Gx.prototype.getTileGrid = Gx.prototype.cb;
    Gx.prototype.refresh = Gx.prototype.ua;
    Gx.prototype.getAttributions = Gx.prototype.za;
    Gx.prototype.getLogo = Gx.prototype.xa;
    Gx.prototype.getProjection = Gx.prototype.Aa;
    Gx.prototype.getState = Gx.prototype.getState;
    Gx.prototype.setAttributions = Gx.prototype.va;
    Gx.prototype.get = Gx.prototype.get;
    Gx.prototype.getKeys = Gx.prototype.P;
    Gx.prototype.getProperties = Gx.prototype.M;
    Gx.prototype.set = Gx.prototype.set;
    Gx.prototype.setProperties = Gx.prototype.H;
    Gx.prototype.unset = Gx.prototype.R;
    Gx.prototype.changed = Gx.prototype.u;
    Gx.prototype.dispatchEvent = Gx.prototype.b;
    Gx.prototype.getRevision = Gx.prototype.L;
    Gx.prototype.on = Gx.prototype.J;
    Gx.prototype.once = Gx.prototype.once;
    Gx.prototype.un = Gx.prototype.K;
    cx.prototype.type = cx.prototype.type;
    cx.prototype.target = cx.prototype.target;
    cx.prototype.preventDefault = cx.prototype.preventDefault;
    cx.prototype.stopPropagation = cx.prototype.stopPropagation;
    Kx.prototype.setRenderReprojectionEdges = Kx.prototype.Ob;
    Kx.prototype.setTileGridForProjection = Kx.prototype.Pb;
    Kx.prototype.getTileLoadFunction = Kx.prototype.ub;
    Kx.prototype.getTileUrlFunction = Kx.prototype.vb;
    Kx.prototype.getUrls = Kx.prototype.wb;
    Kx.prototype.setTileLoadFunction = Kx.prototype.Bb;
    Kx.prototype.setTileUrlFunction = Kx.prototype.ib;
    Kx.prototype.setUrl = Kx.prototype.ob;
    Kx.prototype.setUrls = Kx.prototype.jb;
    Kx.prototype.getTileGrid = Kx.prototype.cb;
    Kx.prototype.refresh = Kx.prototype.ua;
    Kx.prototype.getAttributions = Kx.prototype.za;
    Kx.prototype.getLogo = Kx.prototype.xa;
    Kx.prototype.getProjection = Kx.prototype.Aa;
    Kx.prototype.getState = Kx.prototype.getState;
    Kx.prototype.setAttributions = Kx.prototype.va;
    Kx.prototype.get = Kx.prototype.get;
    Kx.prototype.getKeys = Kx.prototype.P;
    Kx.prototype.getProperties = Kx.prototype.M;
    Kx.prototype.set = Kx.prototype.set;
    Kx.prototype.setProperties = Kx.prototype.H;
    Kx.prototype.unset = Kx.prototype.R;
    Kx.prototype.changed = Kx.prototype.u;
    Kx.prototype.dispatchEvent = Kx.prototype.b;
    Kx.prototype.getRevision = Kx.prototype.L;
    Kx.prototype.on = Kx.prototype.J;
    Kx.prototype.once = Kx.prototype.once;
    Kx.prototype.un = Kx.prototype.K;
    Mx.prototype.getTileGrid = Mx.prototype.cb;
    Mx.prototype.refresh = Mx.prototype.ua;
    Mx.prototype.getAttributions = Mx.prototype.za;
    Mx.prototype.getLogo = Mx.prototype.xa;
    Mx.prototype.getProjection = Mx.prototype.Aa;
    Mx.prototype.getState = Mx.prototype.getState;
    Mx.prototype.setAttributions = Mx.prototype.va;
    Mx.prototype.get = Mx.prototype.get;
    Mx.prototype.getKeys = Mx.prototype.P;
    Mx.prototype.getProperties = Mx.prototype.M;
    Mx.prototype.set = Mx.prototype.set;
    Mx.prototype.setProperties = Mx.prototype.H;
    Mx.prototype.unset = Mx.prototype.R;
    Mx.prototype.changed = Mx.prototype.u;
    Mx.prototype.dispatchEvent = Mx.prototype.b;
    Mx.prototype.getRevision = Mx.prototype.L;
    Mx.prototype.on = Mx.prototype.J;
    Mx.prototype.once = Mx.prototype.once;
    Mx.prototype.un = Mx.prototype.K;
    Ox.prototype.setRenderReprojectionEdges = Ox.prototype.Ob;
    Ox.prototype.setTileGridForProjection = Ox.prototype.Pb;
    Ox.prototype.getTileLoadFunction = Ox.prototype.ub;
    Ox.prototype.getTileUrlFunction = Ox.prototype.vb;
    Ox.prototype.getUrls = Ox.prototype.wb;
    Ox.prototype.setTileLoadFunction = Ox.prototype.Bb;
    Ox.prototype.setTileUrlFunction = Ox.prototype.ib;
    Ox.prototype.setUrl = Ox.prototype.ob;
    Ox.prototype.setUrls = Ox.prototype.jb;
    Ox.prototype.getTileGrid = Ox.prototype.cb;
    Ox.prototype.refresh = Ox.prototype.ua;
    Ox.prototype.getAttributions = Ox.prototype.za;
    Ox.prototype.getLogo = Ox.prototype.xa;
    Ox.prototype.getProjection = Ox.prototype.Aa;
    Ox.prototype.getState = Ox.prototype.getState;
    Ox.prototype.setAttributions = Ox.prototype.va;
    Ox.prototype.get = Ox.prototype.get;
    Ox.prototype.getKeys = Ox.prototype.P;
    Ox.prototype.getProperties = Ox.prototype.M;
    Ox.prototype.set = Ox.prototype.set;
    Ox.prototype.setProperties = Ox.prototype.H;
    Ox.prototype.unset = Ox.prototype.R;
    Ox.prototype.changed = Ox.prototype.u;
    Ox.prototype.dispatchEvent = Ox.prototype.b;
    Ox.prototype.getRevision = Ox.prototype.L;
    Ox.prototype.on = Ox.prototype.J;
    Ox.prototype.once = Ox.prototype.once;
    Ox.prototype.un = Ox.prototype.K;
    Px.prototype.getTileGrid = Px.prototype.cb;
    Px.prototype.refresh = Px.prototype.ua;
    Px.prototype.getAttributions = Px.prototype.za;
    Px.prototype.getLogo = Px.prototype.xa;
    Px.prototype.getProjection = Px.prototype.Aa;
    Px.prototype.getState = Px.prototype.getState;
    Px.prototype.setAttributions = Px.prototype.va;
    Px.prototype.get = Px.prototype.get;
    Px.prototype.getKeys = Px.prototype.P;
    Px.prototype.getProperties = Px.prototype.M;
    Px.prototype.set = Px.prototype.set;
    Px.prototype.setProperties = Px.prototype.H;
    Px.prototype.unset = Px.prototype.R;
    Px.prototype.changed = Px.prototype.u;
    Px.prototype.dispatchEvent = Px.prototype.b;
    Px.prototype.getRevision = Px.prototype.L;
    Px.prototype.on = Px.prototype.J;
    Px.prototype.once = Px.prototype.once;
    Px.prototype.un = Px.prototype.K;
    Tx.prototype.setRenderReprojectionEdges = Tx.prototype.Ob;
    Tx.prototype.setTileGridForProjection = Tx.prototype.Pb;
    Tx.prototype.getTileLoadFunction = Tx.prototype.ub;
    Tx.prototype.getTileUrlFunction = Tx.prototype.vb;
    Tx.prototype.getUrls = Tx.prototype.wb;
    Tx.prototype.setTileLoadFunction = Tx.prototype.Bb;
    Tx.prototype.setTileUrlFunction = Tx.prototype.ib;
    Tx.prototype.setUrl = Tx.prototype.ob;
    Tx.prototype.setUrls = Tx.prototype.jb;
    Tx.prototype.getTileGrid = Tx.prototype.cb;
    Tx.prototype.refresh = Tx.prototype.ua;
    Tx.prototype.getAttributions = Tx.prototype.za;
    Tx.prototype.getLogo = Tx.prototype.xa;
    Tx.prototype.getProjection = Tx.prototype.Aa;
    Tx.prototype.getState = Tx.prototype.getState;
    Tx.prototype.setAttributions = Tx.prototype.va;
    Tx.prototype.get = Tx.prototype.get;
    Tx.prototype.getKeys = Tx.prototype.P;
    Tx.prototype.getProperties = Tx.prototype.M;
    Tx.prototype.set = Tx.prototype.set;
    Tx.prototype.setProperties = Tx.prototype.H;
    Tx.prototype.unset = Tx.prototype.R;
    Tx.prototype.changed = Tx.prototype.u;
    Tx.prototype.dispatchEvent = Tx.prototype.b;
    Tx.prototype.getRevision = Tx.prototype.L;
    Tx.prototype.on = Tx.prototype.J;
    Tx.prototype.once = Tx.prototype.once;
    Tx.prototype.un = Tx.prototype.K;
    Ys.prototype.type = Ys.prototype.type;
    Ys.prototype.target = Ys.prototype.target;
    Ys.prototype.preventDefault = Ys.prototype.preventDefault;
    Ys.prototype.stopPropagation = Ys.prototype.stopPropagation;
    by.prototype.getTileLoadFunction = by.prototype.ub;
    by.prototype.getTileUrlFunction = by.prototype.vb;
    by.prototype.getUrls = by.prototype.wb;
    by.prototype.setTileLoadFunction = by.prototype.Bb;
    by.prototype.setTileUrlFunction = by.prototype.ib;
    by.prototype.setUrl = by.prototype.ob;
    by.prototype.setUrls = by.prototype.jb;
    by.prototype.getTileGrid = by.prototype.cb;
    by.prototype.refresh = by.prototype.ua;
    by.prototype.getAttributions = by.prototype.za;
    by.prototype.getLogo = by.prototype.xa;
    by.prototype.getProjection = by.prototype.Aa;
    by.prototype.getState = by.prototype.getState;
    by.prototype.setAttributions = by.prototype.va;
    by.prototype.get = by.prototype.get;
    by.prototype.getKeys = by.prototype.P;
    by.prototype.getProperties = by.prototype.M;
    by.prototype.set = by.prototype.set;
    by.prototype.setProperties = by.prototype.H;
    by.prototype.unset = by.prototype.R;
    by.prototype.changed = by.prototype.u;
    by.prototype.dispatchEvent = by.prototype.b;
    by.prototype.getRevision = by.prototype.L;
    by.prototype.on = by.prototype.J;
    by.prototype.once = by.prototype.once;
    by.prototype.un = by.prototype.K;
    Z.prototype.setRenderReprojectionEdges = Z.prototype.Ob;
    Z.prototype.setTileGridForProjection = Z.prototype.Pb;
    Z.prototype.getTileLoadFunction = Z.prototype.ub;
    Z.prototype.getTileUrlFunction = Z.prototype.vb;
    Z.prototype.getUrls = Z.prototype.wb;
    Z.prototype.setTileLoadFunction = Z.prototype.Bb;
    Z.prototype.setTileUrlFunction = Z.prototype.ib;
    Z.prototype.setUrl = Z.prototype.ob;
    Z.prototype.setUrls = Z.prototype.jb;
    Z.prototype.getTileGrid = Z.prototype.cb;
    Z.prototype.refresh = Z.prototype.ua;
    Z.prototype.getAttributions = Z.prototype.za;
    Z.prototype.getLogo = Z.prototype.xa;
    Z.prototype.getProjection = Z.prototype.Aa;
    Z.prototype.getState = Z.prototype.getState;
    Z.prototype.setAttributions = Z.prototype.va;
    Z.prototype.get = Z.prototype.get;
    Z.prototype.getKeys = Z.prototype.P;
    Z.prototype.getProperties = Z.prototype.M;
    Z.prototype.set = Z.prototype.set;
    Z.prototype.setProperties = Z.prototype.H;
    Z.prototype.unset = Z.prototype.R;
    Z.prototype.changed = Z.prototype.u;
    Z.prototype.dispatchEvent = Z.prototype.b;
    Z.prototype.getRevision = Z.prototype.L;
    Z.prototype.on = Z.prototype.J;
    Z.prototype.once = Z.prototype.once;
    Z.prototype.un = Z.prototype.K;
    fy.prototype.setRenderReprojectionEdges = fy.prototype.Ob;
    fy.prototype.setTileGridForProjection = fy.prototype.Pb;
    fy.prototype.getTileLoadFunction = fy.prototype.ub;
    fy.prototype.getTileUrlFunction = fy.prototype.vb;
    fy.prototype.getUrls = fy.prototype.wb;
    fy.prototype.setTileLoadFunction = fy.prototype.Bb;
    fy.prototype.setTileUrlFunction = fy.prototype.ib;
    fy.prototype.setUrl = fy.prototype.ob;
    fy.prototype.setUrls = fy.prototype.jb;
    fy.prototype.getTileGrid = fy.prototype.cb;
    fy.prototype.refresh = fy.prototype.ua;
    fy.prototype.getAttributions = fy.prototype.za;
    fy.prototype.getLogo = fy.prototype.xa;
    fy.prototype.getProjection = fy.prototype.Aa;
    fy.prototype.getState = fy.prototype.getState;
    fy.prototype.setAttributions = fy.prototype.va;
    fy.prototype.get = fy.prototype.get;
    fy.prototype.getKeys = fy.prototype.P;
    fy.prototype.getProperties = fy.prototype.M;
    fy.prototype.set = fy.prototype.set;
    fy.prototype.setProperties = fy.prototype.H;
    fy.prototype.unset = fy.prototype.R;
    fy.prototype.changed = fy.prototype.u;
    fy.prototype.dispatchEvent = fy.prototype.b;
    fy.prototype.getRevision = fy.prototype.L;
    fy.prototype.on = fy.prototype.J;
    fy.prototype.once = fy.prototype.once;
    fy.prototype.un = fy.prototype.K;
    Tw.prototype.getTileCoord = Tw.prototype.i;
    Tw.prototype.load = Tw.prototype.load;
    gi.prototype.changed = gi.prototype.u;
    gi.prototype.dispatchEvent = gi.prototype.b;
    gi.prototype.getRevision = gi.prototype.L;
    gi.prototype.on = gi.prototype.J;
    gi.prototype.once = gi.prototype.once;
    gi.prototype.un = gi.prototype.K;
    mw.prototype.changed = mw.prototype.u;
    mw.prototype.dispatchEvent = mw.prototype.b;
    mw.prototype.getRevision = mw.prototype.L;
    mw.prototype.on = mw.prototype.J;
    mw.prototype.once = mw.prototype.once;
    mw.prototype.un = mw.prototype.K;
    Gw.prototype.changed = Gw.prototype.u;
    Gw.prototype.dispatchEvent = Gw.prototype.b;
    Gw.prototype.getRevision = Gw.prototype.L;
    Gw.prototype.on = Gw.prototype.J;
    Gw.prototype.once = Gw.prototype.once;
    Gw.prototype.un = Gw.prototype.K;
    Qw.prototype.changed = Qw.prototype.u;
    Qw.prototype.dispatchEvent = Qw.prototype.b;
    Qw.prototype.getRevision = Qw.prototype.L;
    Qw.prototype.on = Qw.prototype.J;
    Qw.prototype.once = Qw.prototype.once;
    Qw.prototype.un = Qw.prototype.K;
    Rw.prototype.changed = Rw.prototype.u;
    Rw.prototype.dispatchEvent = Rw.prototype.b;
    Rw.prototype.getRevision = Rw.prototype.L;
    Rw.prototype.on = Rw.prototype.J;
    Rw.prototype.once = Rw.prototype.once;
    Rw.prototype.un = Rw.prototype.K;
    pi.prototype.changed = pi.prototype.u;
    pi.prototype.dispatchEvent = pi.prototype.b;
    pi.prototype.getRevision = pi.prototype.L;
    pi.prototype.on = pi.prototype.J;
    pi.prototype.once = pi.prototype.once;
    pi.prototype.un = pi.prototype.K;
    vi.prototype.changed = vi.prototype.u;
    vi.prototype.dispatchEvent = vi.prototype.b;
    vi.prototype.getRevision = vi.prototype.L;
    vi.prototype.on = vi.prototype.J;
    vi.prototype.once = vi.prototype.once;
    vi.prototype.un = vi.prototype.K;
    wi.prototype.changed = wi.prototype.u;
    wi.prototype.dispatchEvent = wi.prototype.b;
    wi.prototype.getRevision = wi.prototype.L;
    wi.prototype.on = wi.prototype.J;
    wi.prototype.once = wi.prototype.once;
    wi.prototype.un = wi.prototype.K;
    Ii.prototype.changed = Ii.prototype.u;
    Ii.prototype.dispatchEvent = Ii.prototype.b;
    Ii.prototype.getRevision = Ii.prototype.L;
    Ii.prototype.on = Ii.prototype.J;
    Ii.prototype.once = Ii.prototype.once;
    Ii.prototype.un = Ii.prototype.K;
    Bj.prototype.changed = Bj.prototype.u;
    Bj.prototype.dispatchEvent = Bj.prototype.b;
    Bj.prototype.getRevision = Bj.prototype.L;
    Bj.prototype.on = Bj.prototype.J;
    Bj.prototype.once = Bj.prototype.once;
    Bj.prototype.un = Bj.prototype.K;
    Dj.prototype.changed = Dj.prototype.u;
    Dj.prototype.dispatchEvent = Dj.prototype.b;
    Dj.prototype.getRevision = Dj.prototype.L;
    Dj.prototype.on = Dj.prototype.J;
    Dj.prototype.once = Dj.prototype.once;
    Dj.prototype.un = Dj.prototype.K;
    Jh.prototype.type = Jh.prototype.type;
    Jh.prototype.target = Jh.prototype.target;
    Jh.prototype.preventDefault = Jh.prototype.preventDefault;
    Jh.prototype.stopPropagation = Jh.prototype.stopPropagation;
    Pd.prototype.type = Pd.prototype.type;
    Pd.prototype.target = Pd.prototype.target;
    Pd.prototype.preventDefault = Pd.prototype.preventDefault;
    Pd.prototype.stopPropagation = Pd.prototype.stopPropagation;
    hg.prototype.get = hg.prototype.get;
    hg.prototype.getKeys = hg.prototype.P;
    hg.prototype.getProperties = hg.prototype.M;
    hg.prototype.set = hg.prototype.set;
    hg.prototype.setProperties = hg.prototype.H;
    hg.prototype.unset = hg.prototype.R;
    hg.prototype.changed = hg.prototype.u;
    hg.prototype.dispatchEvent = hg.prototype.b;
    hg.prototype.getRevision = hg.prototype.L;
    hg.prototype.on = hg.prototype.J;
    hg.prototype.once = hg.prototype.once;
    hg.prototype.un = hg.prototype.K;
    jg.prototype.getExtent = jg.prototype.G;
    jg.prototype.getMaxResolution = jg.prototype.gc;
    jg.prototype.getMinResolution = jg.prototype.hc;
    jg.prototype.getOpacity = jg.prototype.ic;
    jg.prototype.getVisible = jg.prototype.Tb;
    jg.prototype.getZIndex = jg.prototype.ya;
    jg.prototype.setExtent = jg.prototype.zc;
    jg.prototype.setMaxResolution = jg.prototype.Ec;
    jg.prototype.setMinResolution = jg.prototype.Fc;
    jg.prototype.setOpacity = jg.prototype.Ac;
    jg.prototype.setVisible = jg.prototype.Bc;
    jg.prototype.setZIndex = jg.prototype.Xb;
    jg.prototype.get = jg.prototype.get;
    jg.prototype.getKeys = jg.prototype.P;
    jg.prototype.getProperties = jg.prototype.M;
    jg.prototype.set = jg.prototype.set;
    jg.prototype.setProperties = jg.prototype.H;
    jg.prototype.unset = jg.prototype.R;
    jg.prototype.changed = jg.prototype.u;
    jg.prototype.dispatchEvent = jg.prototype.b;
    jg.prototype.getRevision = jg.prototype.L;
    jg.prototype.on = jg.prototype.J;
    jg.prototype.once = jg.prototype.once;
    jg.prototype.un = jg.prototype.K;
    xi.prototype.getExtent = xi.prototype.G;
    xi.prototype.getMaxResolution = xi.prototype.gc;
    xi.prototype.getMinResolution = xi.prototype.hc;
    xi.prototype.getOpacity = xi.prototype.ic;
    xi.prototype.getVisible = xi.prototype.Tb;
    xi.prototype.getZIndex = xi.prototype.ya;
    xi.prototype.setExtent = xi.prototype.zc;
    xi.prototype.setMaxResolution = xi.prototype.Ec;
    xi.prototype.setMinResolution = xi.prototype.Fc;
    xi.prototype.setOpacity = xi.prototype.Ac;
    xi.prototype.setVisible = xi.prototype.Bc;
    xi.prototype.setZIndex = xi.prototype.Xb;
    xi.prototype.get = xi.prototype.get;
    xi.prototype.getKeys = xi.prototype.P;
    xi.prototype.getProperties = xi.prototype.M;
    xi.prototype.set = xi.prototype.set;
    xi.prototype.setProperties = xi.prototype.H;
    xi.prototype.unset = xi.prototype.R;
    xi.prototype.changed = xi.prototype.u;
    xi.prototype.dispatchEvent = xi.prototype.b;
    xi.prototype.getRevision = xi.prototype.L;
    xi.prototype.on = xi.prototype.J;
    xi.prototype.once = xi.prototype.once;
    xi.prototype.un = xi.prototype.K;
    Q.prototype.setMap = Q.prototype.setMap;
    Q.prototype.setSource = Q.prototype.ad;
    Q.prototype.getExtent = Q.prototype.G;
    Q.prototype.getMaxResolution = Q.prototype.gc;
    Q.prototype.getMinResolution = Q.prototype.hc;
    Q.prototype.getOpacity = Q.prototype.ic;
    Q.prototype.getVisible = Q.prototype.Tb;
    Q.prototype.getZIndex = Q.prototype.ya;
    Q.prototype.setExtent = Q.prototype.zc;
    Q.prototype.setMaxResolution = Q.prototype.Ec;
    Q.prototype.setMinResolution = Q.prototype.Fc;
    Q.prototype.setOpacity = Q.prototype.Ac;
    Q.prototype.setVisible = Q.prototype.Bc;
    Q.prototype.setZIndex = Q.prototype.Xb;
    Q.prototype.get = Q.prototype.get;
    Q.prototype.getKeys = Q.prototype.P;
    Q.prototype.getProperties = Q.prototype.M;
    Q.prototype.set = Q.prototype.set;
    Q.prototype.setProperties = Q.prototype.H;
    Q.prototype.unset = Q.prototype.R;
    Q.prototype.changed = Q.prototype.u;
    Q.prototype.dispatchEvent = Q.prototype.b;
    Q.prototype.getRevision = Q.prototype.L;
    Q.prototype.on = Q.prototype.J;
    Q.prototype.once = Q.prototype.once;
    Q.prototype.un = Q.prototype.K;
    S.prototype.getSource = S.prototype.ja;
    S.prototype.getStyle = S.prototype.D;
    S.prototype.getStyleFunction = S.prototype.bb;
    S.prototype.setStyle = S.prototype.j;
    S.prototype.setMap = S.prototype.setMap;
    S.prototype.setSource = S.prototype.ad;
    S.prototype.getExtent = S.prototype.G;
    S.prototype.getMaxResolution = S.prototype.gc;
    S.prototype.getMinResolution = S.prototype.hc;
    S.prototype.getOpacity = S.prototype.ic;
    S.prototype.getVisible = S.prototype.Tb;
    S.prototype.getZIndex = S.prototype.ya;
    S.prototype.setExtent = S.prototype.zc;
    S.prototype.setMaxResolution = S.prototype.Ec;
    S.prototype.setMinResolution = S.prototype.Fc;
    S.prototype.setOpacity = S.prototype.Ac;
    S.prototype.setVisible = S.prototype.Bc;
    S.prototype.setZIndex = S.prototype.Xb;
    S.prototype.get = S.prototype.get;
    S.prototype.getKeys = S.prototype.P;
    S.prototype.getProperties = S.prototype.M;
    S.prototype.set = S.prototype.set;
    S.prototype.setProperties = S.prototype.H;
    S.prototype.unset = S.prototype.R;
    S.prototype.changed = S.prototype.u;
    S.prototype.dispatchEvent = S.prototype.b;
    S.prototype.getRevision = S.prototype.L;
    S.prototype.on = S.prototype.J;
    S.prototype.once = S.prototype.once;
    S.prototype.un = S.prototype.K;
    ou.prototype.setMap = ou.prototype.setMap;
    ou.prototype.setSource = ou.prototype.ad;
    ou.prototype.getExtent = ou.prototype.G;
    ou.prototype.getMaxResolution = ou.prototype.gc;
    ou.prototype.getMinResolution = ou.prototype.hc;
    ou.prototype.getOpacity = ou.prototype.ic;
    ou.prototype.getVisible = ou.prototype.Tb;
    ou.prototype.getZIndex = ou.prototype.ya;
    ou.prototype.setExtent = ou.prototype.zc;
    ou.prototype.setMaxResolution = ou.prototype.Ec;
    ou.prototype.setMinResolution = ou.prototype.Fc;
    ou.prototype.setOpacity = ou.prototype.Ac;
    ou.prototype.setVisible = ou.prototype.Bc;
    ou.prototype.setZIndex = ou.prototype.Xb;
    ou.prototype.get = ou.prototype.get;
    ou.prototype.getKeys = ou.prototype.P;
    ou.prototype.getProperties = ou.prototype.M;
    ou.prototype.set = ou.prototype.set;
    ou.prototype.setProperties = ou.prototype.H;
    ou.prototype.unset = ou.prototype.R;
    ou.prototype.changed = ou.prototype.u;
    ou.prototype.dispatchEvent = ou.prototype.b;
    ou.prototype.getRevision = ou.prototype.L;
    ou.prototype.on = ou.prototype.J;
    ou.prototype.once = ou.prototype.once;
    ou.prototype.un = ou.prototype.K;
    pu.prototype.setMap = pu.prototype.setMap;
    pu.prototype.setSource = pu.prototype.ad;
    pu.prototype.getExtent = pu.prototype.G;
    pu.prototype.getMaxResolution = pu.prototype.gc;
    pu.prototype.getMinResolution = pu.prototype.hc;
    pu.prototype.getOpacity = pu.prototype.ic;
    pu.prototype.getVisible = pu.prototype.Tb;
    pu.prototype.getZIndex = pu.prototype.ya;
    pu.prototype.setExtent = pu.prototype.zc;
    pu.prototype.setMaxResolution = pu.prototype.Ec;
    pu.prototype.setMinResolution = pu.prototype.Fc;
    pu.prototype.setOpacity = pu.prototype.Ac;
    pu.prototype.setVisible = pu.prototype.Bc;
    pu.prototype.setZIndex = pu.prototype.Xb;
    pu.prototype.get = pu.prototype.get;
    pu.prototype.getKeys = pu.prototype.P;
    pu.prototype.getProperties = pu.prototype.M;
    pu.prototype.set = pu.prototype.set;
    pu.prototype.setProperties = pu.prototype.H;
    pu.prototype.unset = pu.prototype.R;
    pu.prototype.changed = pu.prototype.u;
    pu.prototype.dispatchEvent = pu.prototype.b;
    pu.prototype.getRevision = pu.prototype.L;
    pu.prototype.on = pu.prototype.J;
    pu.prototype.once = pu.prototype.once;
    pu.prototype.un = pu.prototype.K;
    V.prototype.getStyle = V.prototype.D;
    V.prototype.getStyleFunction = V.prototype.bb;
    V.prototype.setStyle = V.prototype.j;
    V.prototype.setMap = V.prototype.setMap;
    V.prototype.setSource = V.prototype.ad;
    V.prototype.getExtent = V.prototype.G;
    V.prototype.getMaxResolution = V.prototype.gc;
    V.prototype.getMinResolution = V.prototype.hc;
    V.prototype.getOpacity = V.prototype.ic;
    V.prototype.getVisible = V.prototype.Tb;
    V.prototype.getZIndex = V.prototype.ya;
    V.prototype.setExtent = V.prototype.zc;
    V.prototype.setMaxResolution = V.prototype.Ec;
    V.prototype.setMinResolution = V.prototype.Fc;
    V.prototype.setOpacity = V.prototype.Ac;
    V.prototype.setVisible = V.prototype.Bc;
    V.prototype.setZIndex = V.prototype.Xb;
    V.prototype.get = V.prototype.get;
    V.prototype.getKeys = V.prototype.P;
    V.prototype.getProperties = V.prototype.M;
    V.prototype.set = V.prototype.set;
    V.prototype.setProperties = V.prototype.H;
    V.prototype.unset = V.prototype.R;
    V.prototype.changed = V.prototype.u;
    V.prototype.dispatchEvent = V.prototype.b;
    V.prototype.getRevision = V.prototype.L;
    V.prototype.on = V.prototype.J;
    V.prototype.once = V.prototype.once;
    V.prototype.un = V.prototype.K;
    Eg.prototype.get = Eg.prototype.get;
    Eg.prototype.getKeys = Eg.prototype.P;
    Eg.prototype.getProperties = Eg.prototype.M;
    Eg.prototype.set = Eg.prototype.set;
    Eg.prototype.setProperties = Eg.prototype.H;
    Eg.prototype.unset = Eg.prototype.R;
    Eg.prototype.changed = Eg.prototype.u;
    Eg.prototype.dispatchEvent = Eg.prototype.b;
    Eg.prototype.getRevision = Eg.prototype.L;
    Eg.prototype.on = Eg.prototype.J;
    Eg.prototype.once = Eg.prototype.once;
    Eg.prototype.un = Eg.prototype.K;
    Ig.prototype.getActive = Ig.prototype.c;
    Ig.prototype.getMap = Ig.prototype.i;
    Ig.prototype.setActive = Ig.prototype.Ga;
    Ig.prototype.get = Ig.prototype.get;
    Ig.prototype.getKeys = Ig.prototype.P;
    Ig.prototype.getProperties = Ig.prototype.M;
    Ig.prototype.set = Ig.prototype.set;
    Ig.prototype.setProperties = Ig.prototype.H;
    Ig.prototype.unset = Ig.prototype.R;
    Ig.prototype.changed = Ig.prototype.u;
    Ig.prototype.dispatchEvent = Ig.prototype.b;
    Ig.prototype.getRevision = Ig.prototype.L;
    Ig.prototype.on = Ig.prototype.J;
    Ig.prototype.once = Ig.prototype.once;
    Ig.prototype.un = Ig.prototype.K;
    zs.prototype.getActive = zs.prototype.c;
    zs.prototype.getMap = zs.prototype.i;
    zs.prototype.setActive = zs.prototype.Ga;
    zs.prototype.get = zs.prototype.get;
    zs.prototype.getKeys = zs.prototype.P;
    zs.prototype.getProperties = zs.prototype.M;
    zs.prototype.set = zs.prototype.set;
    zs.prototype.setProperties = zs.prototype.H;
    zs.prototype.unset = zs.prototype.R;
    zs.prototype.changed = zs.prototype.u;
    zs.prototype.dispatchEvent = zs.prototype.b;
    zs.prototype.getRevision = zs.prototype.L;
    zs.prototype.on = zs.prototype.J;
    zs.prototype.once = zs.prototype.once;
    zs.prototype.un = zs.prototype.K;
    Cs.prototype.type = Cs.prototype.type;
    Cs.prototype.target = Cs.prototype.target;
    Cs.prototype.preventDefault = Cs.prototype.preventDefault;
    Cs.prototype.stopPropagation = Cs.prototype.stopPropagation;
    Ug.prototype.getActive = Ug.prototype.c;
    Ug.prototype.getMap = Ug.prototype.i;
    Ug.prototype.setActive = Ug.prototype.Ga;
    Ug.prototype.get = Ug.prototype.get;
    Ug.prototype.getKeys = Ug.prototype.P;
    Ug.prototype.getProperties = Ug.prototype.M;
    Ug.prototype.set = Ug.prototype.set;
    Ug.prototype.setProperties = Ug.prototype.H;
    Ug.prototype.unset = Ug.prototype.R;
    Ug.prototype.changed = Ug.prototype.u;
    Ug.prototype.dispatchEvent = Ug.prototype.b;
    Ug.prototype.getRevision = Ug.prototype.L;
    Ug.prototype.on = Ug.prototype.J;
    Ug.prototype.once = Ug.prototype.once;
    Ug.prototype.un = Ug.prototype.K;
    hh.prototype.getActive = hh.prototype.c;
    hh.prototype.getMap = hh.prototype.i;
    hh.prototype.setActive = hh.prototype.Ga;
    hh.prototype.get = hh.prototype.get;
    hh.prototype.getKeys = hh.prototype.P;
    hh.prototype.getProperties = hh.prototype.M;
    hh.prototype.set = hh.prototype.set;
    hh.prototype.setProperties = hh.prototype.H;
    hh.prototype.unset = hh.prototype.R;
    hh.prototype.changed = hh.prototype.u;
    hh.prototype.dispatchEvent = hh.prototype.b;
    hh.prototype.getRevision = hh.prototype.L;
    hh.prototype.on = hh.prototype.J;
    hh.prototype.once = hh.prototype.once;
    hh.prototype.un = hh.prototype.K;
    mh.prototype.type = mh.prototype.type;
    mh.prototype.target = mh.prototype.target;
    mh.prototype.preventDefault = mh.prototype.preventDefault;
    mh.prototype.stopPropagation = mh.prototype.stopPropagation;
    Xg.prototype.getActive = Xg.prototype.c;
    Xg.prototype.getMap = Xg.prototype.i;
    Xg.prototype.setActive = Xg.prototype.Ga;
    Xg.prototype.get = Xg.prototype.get;
    Xg.prototype.getKeys = Xg.prototype.P;
    Xg.prototype.getProperties = Xg.prototype.M;
    Xg.prototype.set = Xg.prototype.set;
    Xg.prototype.setProperties = Xg.prototype.H;
    Xg.prototype.unset = Xg.prototype.R;
    Xg.prototype.changed = Xg.prototype.u;
    Xg.prototype.dispatchEvent = Xg.prototype.b;
    Xg.prototype.getRevision = Xg.prototype.L;
    Xg.prototype.on = Xg.prototype.J;
    Xg.prototype.once = Xg.prototype.once;
    Xg.prototype.un = Xg.prototype.K;
    ah.prototype.getActive = ah.prototype.c;
    ah.prototype.getMap = ah.prototype.i;
    ah.prototype.setActive = ah.prototype.Ga;
    ah.prototype.get = ah.prototype.get;
    ah.prototype.getKeys = ah.prototype.P;
    ah.prototype.getProperties = ah.prototype.M;
    ah.prototype.set = ah.prototype.set;
    ah.prototype.setProperties = ah.prototype.H;
    ah.prototype.unset = ah.prototype.R;
    ah.prototype.changed = ah.prototype.u;
    ah.prototype.dispatchEvent = ah.prototype.b;
    ah.prototype.getRevision = ah.prototype.L;
    ah.prototype.on = ah.prototype.J;
    ah.prototype.once = ah.prototype.once;
    ah.prototype.un = ah.prototype.K;
    Gs.prototype.getActive = Gs.prototype.c;
    Gs.prototype.getMap = Gs.prototype.i;
    Gs.prototype.setActive = Gs.prototype.Ga;
    Gs.prototype.get = Gs.prototype.get;
    Gs.prototype.getKeys = Gs.prototype.P;
    Gs.prototype.getProperties = Gs.prototype.M;
    Gs.prototype.set = Gs.prototype.set;
    Gs.prototype.setProperties = Gs.prototype.H;
    Gs.prototype.unset = Gs.prototype.R;
    Gs.prototype.changed = Gs.prototype.u;
    Gs.prototype.dispatchEvent = Gs.prototype.b;
    Gs.prototype.getRevision = Gs.prototype.L;
    Gs.prototype.on = Gs.prototype.J;
    Gs.prototype.once = Gs.prototype.once;
    Gs.prototype.un = Gs.prototype.K;
    qh.prototype.getGeometry = qh.prototype.W;
    qh.prototype.getActive = qh.prototype.c;
    qh.prototype.getMap = qh.prototype.i;
    qh.prototype.setActive = qh.prototype.Ga;
    qh.prototype.get = qh.prototype.get;
    qh.prototype.getKeys = qh.prototype.P;
    qh.prototype.getProperties = qh.prototype.M;
    qh.prototype.set = qh.prototype.set;
    qh.prototype.setProperties = qh.prototype.H;
    qh.prototype.unset = qh.prototype.R;
    qh.prototype.changed = qh.prototype.u;
    qh.prototype.dispatchEvent = qh.prototype.b;
    qh.prototype.getRevision = qh.prototype.L;
    qh.prototype.on = qh.prototype.J;
    qh.prototype.once = qh.prototype.once;
    qh.prototype.un = qh.prototype.K;
    at.prototype.getActive = at.prototype.c;
    at.prototype.getMap = at.prototype.i;
    at.prototype.setActive = at.prototype.Ga;
    at.prototype.get = at.prototype.get;
    at.prototype.getKeys = at.prototype.P;
    at.prototype.getProperties = at.prototype.M;
    at.prototype.set = at.prototype.set;
    at.prototype.setProperties = at.prototype.H;
    at.prototype.unset = at.prototype.R;
    at.prototype.changed = at.prototype.u;
    at.prototype.dispatchEvent = at.prototype.b;
    at.prototype.getRevision = at.prototype.L;
    at.prototype.on = at.prototype.J;
    at.prototype.once = at.prototype.once;
    at.prototype.un = at.prototype.K;
    qt.prototype.type = qt.prototype.type;
    qt.prototype.target = qt.prototype.target;
    qt.prototype.preventDefault = qt.prototype.preventDefault;
    qt.prototype.stopPropagation = qt.prototype.stopPropagation;
    rt.prototype.getActive = rt.prototype.c;
    rt.prototype.getMap = rt.prototype.i;
    rt.prototype.setActive = rt.prototype.Ga;
    rt.prototype.get = rt.prototype.get;
    rt.prototype.getKeys = rt.prototype.P;
    rt.prototype.getProperties = rt.prototype.M;
    rt.prototype.set = rt.prototype.set;
    rt.prototype.setProperties = rt.prototype.H;
    rt.prototype.unset = rt.prototype.R;
    rt.prototype.changed = rt.prototype.u;
    rt.prototype.dispatchEvent = rt.prototype.b;
    rt.prototype.getRevision = rt.prototype.L;
    rt.prototype.on = rt.prototype.J;
    rt.prototype.once = rt.prototype.once;
    rt.prototype.un = rt.prototype.K;
    Ct.prototype.type = Ct.prototype.type;
    Ct.prototype.target = Ct.prototype.target;
    Ct.prototype.preventDefault = Ct.prototype.preventDefault;
    Ct.prototype.stopPropagation = Ct.prototype.stopPropagation;
    rh.prototype.getActive = rh.prototype.c;
    rh.prototype.getMap = rh.prototype.i;
    rh.prototype.setActive = rh.prototype.Ga;
    rh.prototype.get = rh.prototype.get;
    rh.prototype.getKeys = rh.prototype.P;
    rh.prototype.getProperties = rh.prototype.M;
    rh.prototype.set = rh.prototype.set;
    rh.prototype.setProperties = rh.prototype.H;
    rh.prototype.unset = rh.prototype.R;
    rh.prototype.changed = rh.prototype.u;
    rh.prototype.dispatchEvent = rh.prototype.b;
    rh.prototype.getRevision = rh.prototype.L;
    rh.prototype.on = rh.prototype.J;
    rh.prototype.once = rh.prototype.once;
    rh.prototype.un = rh.prototype.K;
    uh.prototype.getActive = uh.prototype.c;
    uh.prototype.getMap = uh.prototype.i;
    uh.prototype.setActive = uh.prototype.Ga;
    uh.prototype.get = uh.prototype.get;
    uh.prototype.getKeys = uh.prototype.P;
    uh.prototype.getProperties = uh.prototype.M;
    uh.prototype.set = uh.prototype.set;
    uh.prototype.setProperties = uh.prototype.H;
    uh.prototype.unset = uh.prototype.R;
    uh.prototype.changed = uh.prototype.u;
    uh.prototype.dispatchEvent = uh.prototype.b;
    uh.prototype.getRevision = uh.prototype.L;
    uh.prototype.on = uh.prototype.J;
    uh.prototype.once = uh.prototype.once;
    uh.prototype.un = uh.prototype.K;
    Dt.prototype.getActive = Dt.prototype.c;
    Dt.prototype.getMap = Dt.prototype.i;
    Dt.prototype.setActive = Dt.prototype.Ga;
    Dt.prototype.get = Dt.prototype.get;
    Dt.prototype.getKeys = Dt.prototype.P;
    Dt.prototype.getProperties = Dt.prototype.M;
    Dt.prototype.set = Dt.prototype.set;
    Dt.prototype.setProperties = Dt.prototype.H;
    Dt.prototype.unset = Dt.prototype.R;
    Dt.prototype.changed = Dt.prototype.u;
    Dt.prototype.dispatchEvent = Dt.prototype.b;
    Dt.prototype.getRevision = Dt.prototype.L;
    Dt.prototype.on = Dt.prototype.J;
    Dt.prototype.once = Dt.prototype.once;
    Dt.prototype.un = Dt.prototype.K;
    Lt.prototype.type = Lt.prototype.type;
    Lt.prototype.target = Lt.prototype.target;
    Lt.prototype.preventDefault = Lt.prototype.preventDefault;
    Lt.prototype.stopPropagation = Lt.prototype.stopPropagation;
    wh.prototype.getActive = wh.prototype.c;
    wh.prototype.getMap = wh.prototype.i;
    wh.prototype.setActive = wh.prototype.Ga;
    wh.prototype.get = wh.prototype.get;
    wh.prototype.getKeys = wh.prototype.P;
    wh.prototype.getProperties = wh.prototype.M;
    wh.prototype.set = wh.prototype.set;
    wh.prototype.setProperties = wh.prototype.H;
    wh.prototype.unset = wh.prototype.R;
    wh.prototype.changed = wh.prototype.u;
    wh.prototype.dispatchEvent = wh.prototype.b;
    wh.prototype.getRevision = wh.prototype.L;
    wh.prototype.on = wh.prototype.J;
    wh.prototype.once = wh.prototype.once;
    wh.prototype.un = wh.prototype.K;
    Ah.prototype.getActive = Ah.prototype.c;
    Ah.prototype.getMap = Ah.prototype.i;
    Ah.prototype.setActive = Ah.prototype.Ga;
    Ah.prototype.get = Ah.prototype.get;
    Ah.prototype.getKeys = Ah.prototype.P;
    Ah.prototype.getProperties = Ah.prototype.M;
    Ah.prototype.set = Ah.prototype.set;
    Ah.prototype.setProperties = Ah.prototype.H;
    Ah.prototype.unset = Ah.prototype.R;
    Ah.prototype.changed = Ah.prototype.u;
    Ah.prototype.dispatchEvent = Ah.prototype.b;
    Ah.prototype.getRevision = Ah.prototype.L;
    Ah.prototype.on = Ah.prototype.J;
    Ah.prototype.once = Ah.prototype.once;
    Ah.prototype.un = Ah.prototype.K;
    Eh.prototype.getActive = Eh.prototype.c;
    Eh.prototype.getMap = Eh.prototype.i;
    Eh.prototype.setActive = Eh.prototype.Ga;
    Eh.prototype.get = Eh.prototype.get;
    Eh.prototype.getKeys = Eh.prototype.P;
    Eh.prototype.getProperties = Eh.prototype.M;
    Eh.prototype.set = Eh.prototype.set;
    Eh.prototype.setProperties = Eh.prototype.H;
    Eh.prototype.unset = Eh.prototype.R;
    Eh.prototype.changed = Eh.prototype.u;
    Eh.prototype.dispatchEvent = Eh.prototype.b;
    Eh.prototype.getRevision = Eh.prototype.L;
    Eh.prototype.on = Eh.prototype.J;
    Eh.prototype.once = Eh.prototype.once;
    Eh.prototype.un = Eh.prototype.K;
    Tt.prototype.getActive = Tt.prototype.c;
    Tt.prototype.getMap = Tt.prototype.i;
    Tt.prototype.setActive = Tt.prototype.Ga;
    Tt.prototype.get = Tt.prototype.get;
    Tt.prototype.getKeys = Tt.prototype.P;
    Tt.prototype.getProperties = Tt.prototype.M;
    Tt.prototype.set = Tt.prototype.set;
    Tt.prototype.setProperties = Tt.prototype.H;
    Tt.prototype.unset = Tt.prototype.R;
    Tt.prototype.changed = Tt.prototype.u;
    Tt.prototype.dispatchEvent = Tt.prototype.b;
    Tt.prototype.getRevision = Tt.prototype.L;
    Tt.prototype.on = Tt.prototype.J;
    Tt.prototype.once = Tt.prototype.once;
    Tt.prototype.un = Tt.prototype.K;
    Wt.prototype.type = Wt.prototype.type;
    Wt.prototype.target = Wt.prototype.target;
    Wt.prototype.preventDefault = Wt.prototype.preventDefault;
    Wt.prototype.stopPropagation = Wt.prototype.stopPropagation;
    Yt.prototype.getActive = Yt.prototype.c;
    Yt.prototype.getMap = Yt.prototype.i;
    Yt.prototype.setActive = Yt.prototype.Ga;
    Yt.prototype.get = Yt.prototype.get;
    Yt.prototype.getKeys = Yt.prototype.P;
    Yt.prototype.getProperties = Yt.prototype.M;
    Yt.prototype.set = Yt.prototype.set;
    Yt.prototype.setProperties = Yt.prototype.H;
    Yt.prototype.unset = Yt.prototype.R;
    Yt.prototype.changed = Yt.prototype.u;
    Yt.prototype.dispatchEvent = Yt.prototype.b;
    Yt.prototype.getRevision = Yt.prototype.L;
    Yt.prototype.on = Yt.prototype.J;
    Yt.prototype.once = Yt.prototype.once;
    Yt.prototype.un = Yt.prototype.K;
    cu.prototype.getActive = cu.prototype.c;
    cu.prototype.getMap = cu.prototype.i;
    cu.prototype.setActive = cu.prototype.Ga;
    cu.prototype.get = cu.prototype.get;
    cu.prototype.getKeys = cu.prototype.P;
    cu.prototype.getProperties = cu.prototype.M;
    cu.prototype.set = cu.prototype.set;
    cu.prototype.setProperties = cu.prototype.H;
    cu.prototype.unset = cu.prototype.R;
    cu.prototype.changed = cu.prototype.u;
    cu.prototype.dispatchEvent = cu.prototype.b;
    cu.prototype.getRevision = cu.prototype.L;
    cu.prototype.on = cu.prototype.J;
    cu.prototype.once = cu.prototype.once;
    cu.prototype.un = cu.prototype.K;
    iu.prototype.type = iu.prototype.type;
    iu.prototype.target = iu.prototype.target;
    iu.prototype.preventDefault = iu.prototype.preventDefault;
    iu.prototype.stopPropagation = iu.prototype.stopPropagation;
    ff.prototype.get = ff.prototype.get;
    ff.prototype.getKeys = ff.prototype.P;
    ff.prototype.getProperties = ff.prototype.M;
    ff.prototype.set = ff.prototype.set;
    ff.prototype.setProperties = ff.prototype.H;
    ff.prototype.unset = ff.prototype.R;
    ff.prototype.changed = ff.prototype.u;
    ff.prototype.dispatchEvent = ff.prototype.b;
    ff.prototype.getRevision = ff.prototype.L;
    ff.prototype.on = ff.prototype.J;
    ff.prototype.once = ff.prototype.once;
    ff.prototype.un = ff.prototype.K;
    gf.prototype.getClosestPoint = gf.prototype.Fb;
    gf.prototype.intersectsCoordinate = gf.prototype.xb;
    gf.prototype.getExtent = gf.prototype.G;
    gf.prototype.rotate = gf.prototype.rotate;
    gf.prototype.scale = gf.prototype.scale;
    gf.prototype.simplify = gf.prototype.Qb;
    gf.prototype.transform = gf.prototype.gb;
    gf.prototype.get = gf.prototype.get;
    gf.prototype.getKeys = gf.prototype.P;
    gf.prototype.getProperties = gf.prototype.M;
    gf.prototype.set = gf.prototype.set;
    gf.prototype.setProperties = gf.prototype.H;
    gf.prototype.unset = gf.prototype.R;
    gf.prototype.changed = gf.prototype.u;
    gf.prototype.dispatchEvent = gf.prototype.b;
    gf.prototype.getRevision = gf.prototype.L;
    gf.prototype.on = gf.prototype.J;
    gf.prototype.once = gf.prototype.once;
    gf.prototype.un = gf.prototype.K;
    fs.prototype.getFirstCoordinate = fs.prototype.bc;
    fs.prototype.getLastCoordinate = fs.prototype.cc;
    fs.prototype.getLayout = fs.prototype.ec;
    fs.prototype.rotate = fs.prototype.rotate;
    fs.prototype.scale = fs.prototype.scale;
    fs.prototype.getClosestPoint = fs.prototype.Fb;
    fs.prototype.intersectsCoordinate = fs.prototype.xb;
    fs.prototype.getExtent = fs.prototype.G;
    fs.prototype.simplify = fs.prototype.Qb;
    fs.prototype.get = fs.prototype.get;
    fs.prototype.getKeys = fs.prototype.P;
    fs.prototype.getProperties = fs.prototype.M;
    fs.prototype.set = fs.prototype.set;
    fs.prototype.setProperties = fs.prototype.H;
    fs.prototype.unset = fs.prototype.R;
    fs.prototype.changed = fs.prototype.u;
    fs.prototype.dispatchEvent = fs.prototype.b;
    fs.prototype.getRevision = fs.prototype.L;
    fs.prototype.on = fs.prototype.J;
    fs.prototype.once = fs.prototype.once;
    fs.prototype.un = fs.prototype.K;
    Xl.prototype.getClosestPoint = Xl.prototype.Fb;
    Xl.prototype.intersectsCoordinate = Xl.prototype.xb;
    Xl.prototype.getExtent = Xl.prototype.G;
    Xl.prototype.rotate = Xl.prototype.rotate;
    Xl.prototype.scale = Xl.prototype.scale;
    Xl.prototype.simplify = Xl.prototype.Qb;
    Xl.prototype.transform = Xl.prototype.gb;
    Xl.prototype.get = Xl.prototype.get;
    Xl.prototype.getKeys = Xl.prototype.P;
    Xl.prototype.getProperties = Xl.prototype.M;
    Xl.prototype.set = Xl.prototype.set;
    Xl.prototype.setProperties = Xl.prototype.H;
    Xl.prototype.unset = Xl.prototype.R;
    Xl.prototype.changed = Xl.prototype.u;
    Xl.prototype.dispatchEvent = Xl.prototype.b;
    Xl.prototype.getRevision = Xl.prototype.L;
    Xl.prototype.on = Xl.prototype.J;
    Xl.prototype.once = Xl.prototype.once;
    Xl.prototype.un = Xl.prototype.K;
    Cf.prototype.getFirstCoordinate = Cf.prototype.bc;
    Cf.prototype.getLastCoordinate = Cf.prototype.cc;
    Cf.prototype.getLayout = Cf.prototype.ec;
    Cf.prototype.rotate = Cf.prototype.rotate;
    Cf.prototype.scale = Cf.prototype.scale;
    Cf.prototype.getClosestPoint = Cf.prototype.Fb;
    Cf.prototype.intersectsCoordinate = Cf.prototype.xb;
    Cf.prototype.getExtent = Cf.prototype.G;
    Cf.prototype.simplify = Cf.prototype.Qb;
    Cf.prototype.transform = Cf.prototype.gb;
    Cf.prototype.get = Cf.prototype.get;
    Cf.prototype.getKeys = Cf.prototype.P;
    Cf.prototype.getProperties = Cf.prototype.M;
    Cf.prototype.set = Cf.prototype.set;
    Cf.prototype.setProperties = Cf.prototype.H;
    Cf.prototype.unset = Cf.prototype.R;
    Cf.prototype.changed = Cf.prototype.u;
    Cf.prototype.dispatchEvent = Cf.prototype.b;
    Cf.prototype.getRevision = Cf.prototype.L;
    Cf.prototype.on = Cf.prototype.J;
    Cf.prototype.once = Cf.prototype.once;
    Cf.prototype.un = Cf.prototype.K;
    L.prototype.getFirstCoordinate = L.prototype.bc;
    L.prototype.getLastCoordinate = L.prototype.cc;
    L.prototype.getLayout = L.prototype.ec;
    L.prototype.rotate = L.prototype.rotate;
    L.prototype.scale = L.prototype.scale;
    L.prototype.getClosestPoint = L.prototype.Fb;
    L.prototype.intersectsCoordinate = L.prototype.xb;
    L.prototype.getExtent = L.prototype.G;
    L.prototype.simplify = L.prototype.Qb;
    L.prototype.transform = L.prototype.gb;
    L.prototype.get = L.prototype.get;
    L.prototype.getKeys = L.prototype.P;
    L.prototype.getProperties = L.prototype.M;
    L.prototype.set = L.prototype.set;
    L.prototype.setProperties = L.prototype.H;
    L.prototype.unset = L.prototype.R;
    L.prototype.changed = L.prototype.u;
    L.prototype.dispatchEvent = L.prototype.b;
    L.prototype.getRevision = L.prototype.L;
    L.prototype.on = L.prototype.J;
    L.prototype.once = L.prototype.once;
    L.prototype.un = L.prototype.K;
    M.prototype.getFirstCoordinate = M.prototype.bc;
    M.prototype.getLastCoordinate = M.prototype.cc;
    M.prototype.getLayout = M.prototype.ec;
    M.prototype.rotate = M.prototype.rotate;
    M.prototype.scale = M.prototype.scale;
    M.prototype.getClosestPoint = M.prototype.Fb;
    M.prototype.intersectsCoordinate = M.prototype.xb;
    M.prototype.getExtent = M.prototype.G;
    M.prototype.simplify = M.prototype.Qb;
    M.prototype.transform = M.prototype.gb;
    M.prototype.get = M.prototype.get;
    M.prototype.getKeys = M.prototype.P;
    M.prototype.getProperties = M.prototype.M;
    M.prototype.set = M.prototype.set;
    M.prototype.setProperties = M.prototype.H;
    M.prototype.unset = M.prototype.R;
    M.prototype.changed = M.prototype.u;
    M.prototype.dispatchEvent = M.prototype.b;
    M.prototype.getRevision = M.prototype.L;
    M.prototype.on = M.prototype.J;
    M.prototype.once = M.prototype.once;
    M.prototype.un = M.prototype.K;
    rl.prototype.getFirstCoordinate = rl.prototype.bc;
    rl.prototype.getLastCoordinate = rl.prototype.cc;
    rl.prototype.getLayout = rl.prototype.ec;
    rl.prototype.rotate = rl.prototype.rotate;
    rl.prototype.scale = rl.prototype.scale;
    rl.prototype.getClosestPoint = rl.prototype.Fb;
    rl.prototype.intersectsCoordinate = rl.prototype.xb;
    rl.prototype.getExtent = rl.prototype.G;
    rl.prototype.simplify = rl.prototype.Qb;
    rl.prototype.transform = rl.prototype.gb;
    rl.prototype.get = rl.prototype.get;
    rl.prototype.getKeys = rl.prototype.P;
    rl.prototype.getProperties = rl.prototype.M;
    rl.prototype.set = rl.prototype.set;
    rl.prototype.setProperties = rl.prototype.H;
    rl.prototype.unset = rl.prototype.R;
    rl.prototype.changed = rl.prototype.u;
    rl.prototype.dispatchEvent = rl.prototype.b;
    rl.prototype.getRevision = rl.prototype.L;
    rl.prototype.on = rl.prototype.J;
    rl.prototype.once = rl.prototype.once;
    rl.prototype.un = rl.prototype.K;
    O.prototype.getFirstCoordinate = O.prototype.bc;
    O.prototype.getLastCoordinate = O.prototype.cc;
    O.prototype.getLayout = O.prototype.ec;
    O.prototype.rotate = O.prototype.rotate;
    O.prototype.scale = O.prototype.scale;
    O.prototype.getClosestPoint = O.prototype.Fb;
    O.prototype.intersectsCoordinate = O.prototype.xb;
    O.prototype.getExtent = O.prototype.G;
    O.prototype.simplify = O.prototype.Qb;
    O.prototype.transform = O.prototype.gb;
    O.prototype.get = O.prototype.get;
    O.prototype.getKeys = O.prototype.P;
    O.prototype.getProperties = O.prototype.M;
    O.prototype.set = O.prototype.set;
    O.prototype.setProperties = O.prototype.H;
    O.prototype.unset = O.prototype.R;
    O.prototype.changed = O.prototype.u;
    O.prototype.dispatchEvent = O.prototype.b;
    O.prototype.getRevision = O.prototype.L;
    O.prototype.on = O.prototype.J;
    O.prototype.once = O.prototype.once;
    O.prototype.un = O.prototype.K;
    C.prototype.getFirstCoordinate = C.prototype.bc;
    C.prototype.getLastCoordinate = C.prototype.cc;
    C.prototype.getLayout = C.prototype.ec;
    C.prototype.rotate = C.prototype.rotate;
    C.prototype.scale = C.prototype.scale;
    C.prototype.getClosestPoint = C.prototype.Fb;
    C.prototype.intersectsCoordinate = C.prototype.xb;
    C.prototype.getExtent = C.prototype.G;
    C.prototype.simplify = C.prototype.Qb;
    C.prototype.transform = C.prototype.gb;
    C.prototype.get = C.prototype.get;
    C.prototype.getKeys = C.prototype.P;
    C.prototype.getProperties = C.prototype.M;
    C.prototype.set = C.prototype.set;
    C.prototype.setProperties = C.prototype.H;
    C.prototype.unset = C.prototype.R;
    C.prototype.changed = C.prototype.u;
    C.prototype.dispatchEvent = C.prototype.b;
    C.prototype.getRevision = C.prototype.L;
    C.prototype.on = C.prototype.J;
    C.prototype.once = C.prototype.once;
    C.prototype.un = C.prototype.K;
    D.prototype.getFirstCoordinate = D.prototype.bc;
    D.prototype.getLastCoordinate = D.prototype.cc;
    D.prototype.getLayout = D.prototype.ec;
    D.prototype.rotate = D.prototype.rotate;
    D.prototype.scale = D.prototype.scale;
    D.prototype.getClosestPoint = D.prototype.Fb;
    D.prototype.intersectsCoordinate = D.prototype.xb;
    D.prototype.getExtent = D.prototype.G;
    D.prototype.simplify = D.prototype.Qb;
    D.prototype.transform = D.prototype.gb;
    D.prototype.get = D.prototype.get;
    D.prototype.getKeys = D.prototype.P;
    D.prototype.getProperties = D.prototype.M;
    D.prototype.set = D.prototype.set;
    D.prototype.setProperties = D.prototype.H;
    D.prototype.unset = D.prototype.R;
    D.prototype.changed = D.prototype.u;
    D.prototype.dispatchEvent = D.prototype.b;
    D.prototype.getRevision = D.prototype.L;
    D.prototype.on = D.prototype.J;
    D.prototype.once = D.prototype.once;
    D.prototype.un = D.prototype.K;
    vm.prototype.readFeatures = vm.prototype.Ma;
    Em.prototype.readFeatures = Em.prototype.Ma;
    vm.prototype.readFeatures = vm.prototype.Ma;
    rg.prototype.get = rg.prototype.get;
    rg.prototype.getKeys = rg.prototype.P;
    rg.prototype.getProperties = rg.prototype.M;
    rg.prototype.set = rg.prototype.set;
    rg.prototype.setProperties = rg.prototype.H;
    rg.prototype.unset = rg.prototype.R;
    rg.prototype.changed = rg.prototype.u;
    rg.prototype.dispatchEvent = rg.prototype.b;
    rg.prototype.getRevision = rg.prototype.L;
    rg.prototype.on = rg.prototype.J;
    rg.prototype.once = rg.prototype.once;
    rg.prototype.un = rg.prototype.K;
    sg.prototype.getMap = sg.prototype.f;
    sg.prototype.setMap = sg.prototype.setMap;
    sg.prototype.setTarget = sg.prototype.i;
    sg.prototype.get = sg.prototype.get;
    sg.prototype.getKeys = sg.prototype.P;
    sg.prototype.getProperties = sg.prototype.M;
    sg.prototype.set = sg.prototype.set;
    sg.prototype.setProperties = sg.prototype.H;
    sg.prototype.unset = sg.prototype.R;
    sg.prototype.changed = sg.prototype.u;
    sg.prototype.dispatchEvent = sg.prototype.b;
    sg.prototype.getRevision = sg.prototype.L;
    sg.prototype.on = sg.prototype.J;
    sg.prototype.once = sg.prototype.once;
    sg.prototype.un = sg.prototype.K;
    Ij.prototype.getMap = Ij.prototype.f;
    Ij.prototype.setMap = Ij.prototype.setMap;
    Ij.prototype.setTarget = Ij.prototype.i;
    Ij.prototype.get = Ij.prototype.get;
    Ij.prototype.getKeys = Ij.prototype.P;
    Ij.prototype.getProperties = Ij.prototype.M;
    Ij.prototype.set = Ij.prototype.set;
    Ij.prototype.setProperties = Ij.prototype.H;
    Ij.prototype.unset = Ij.prototype.R;
    Ij.prototype.changed = Ij.prototype.u;
    Ij.prototype.dispatchEvent = Ij.prototype.b;
    Ij.prototype.getRevision = Ij.prototype.L;
    Ij.prototype.on = Ij.prototype.J;
    Ij.prototype.once = Ij.prototype.once;
    Ij.prototype.un = Ij.prototype.K;
    Nj.prototype.getMap = Nj.prototype.f;
    Nj.prototype.setMap = Nj.prototype.setMap;
    Nj.prototype.setTarget = Nj.prototype.i;
    Nj.prototype.get = Nj.prototype.get;
    Nj.prototype.getKeys = Nj.prototype.P;
    Nj.prototype.getProperties = Nj.prototype.M;
    Nj.prototype.set = Nj.prototype.set;
    Nj.prototype.setProperties = Nj.prototype.H;
    Nj.prototype.unset = Nj.prototype.R;
    Nj.prototype.changed = Nj.prototype.u;
    Nj.prototype.dispatchEvent = Nj.prototype.b;
    Nj.prototype.getRevision = Nj.prototype.L;
    Nj.prototype.on = Nj.prototype.J;
    Nj.prototype.once = Nj.prototype.once;
    Nj.prototype.un = Nj.prototype.K;
    bk.prototype.getMap = bk.prototype.f;
    bk.prototype.setMap = bk.prototype.setMap;
    bk.prototype.setTarget = bk.prototype.i;
    bk.prototype.get = bk.prototype.get;
    bk.prototype.getKeys = bk.prototype.P;
    bk.prototype.getProperties = bk.prototype.M;
    bk.prototype.set = bk.prototype.set;
    bk.prototype.setProperties = bk.prototype.H;
    bk.prototype.unset = bk.prototype.R;
    bk.prototype.changed = bk.prototype.u;
    bk.prototype.dispatchEvent = bk.prototype.b;
    bk.prototype.getRevision = bk.prototype.L;
    bk.prototype.on = bk.prototype.J;
    bk.prototype.once = bk.prototype.once;
    bk.prototype.un = bk.prototype.K;
    vg.prototype.getMap = vg.prototype.f;
    vg.prototype.setMap = vg.prototype.setMap;
    vg.prototype.setTarget = vg.prototype.i;
    vg.prototype.get = vg.prototype.get;
    vg.prototype.getKeys = vg.prototype.P;
    vg.prototype.getProperties = vg.prototype.M;
    vg.prototype.set = vg.prototype.set;
    vg.prototype.setProperties = vg.prototype.H;
    vg.prototype.unset = vg.prototype.R;
    vg.prototype.changed = vg.prototype.u;
    vg.prototype.dispatchEvent = vg.prototype.b;
    vg.prototype.getRevision = vg.prototype.L;
    vg.prototype.on = vg.prototype.J;
    vg.prototype.once = vg.prototype.once;
    vg.prototype.un = vg.prototype.K;
    gk.prototype.getMap = gk.prototype.f;
    gk.prototype.setMap = gk.prototype.setMap;
    gk.prototype.setTarget = gk.prototype.i;
    gk.prototype.get = gk.prototype.get;
    gk.prototype.getKeys = gk.prototype.P;
    gk.prototype.getProperties = gk.prototype.M;
    gk.prototype.set = gk.prototype.set;
    gk.prototype.setProperties = gk.prototype.H;
    gk.prototype.unset = gk.prototype.R;
    gk.prototype.changed = gk.prototype.u;
    gk.prototype.dispatchEvent = gk.prototype.b;
    gk.prototype.getRevision = gk.prototype.L;
    gk.prototype.on = gk.prototype.J;
    gk.prototype.once = gk.prototype.once;
    gk.prototype.un = gk.prototype.K;
    xg.prototype.getMap = xg.prototype.f;
    xg.prototype.setMap = xg.prototype.setMap;
    xg.prototype.setTarget = xg.prototype.i;
    xg.prototype.get = xg.prototype.get;
    xg.prototype.getKeys = xg.prototype.P;
    xg.prototype.getProperties = xg.prototype.M;
    xg.prototype.set = xg.prototype.set;
    xg.prototype.setProperties = xg.prototype.H;
    xg.prototype.unset = xg.prototype.R;
    xg.prototype.changed = xg.prototype.u;
    xg.prototype.dispatchEvent = xg.prototype.b;
    xg.prototype.getRevision = xg.prototype.L;
    xg.prototype.on = xg.prototype.J;
    xg.prototype.once = xg.prototype.once;
    xg.prototype.un = xg.prototype.K;
    lk.prototype.getMap = lk.prototype.f;
    lk.prototype.setMap = lk.prototype.setMap;
    lk.prototype.setTarget = lk.prototype.i;
    lk.prototype.get = lk.prototype.get;
    lk.prototype.getKeys = lk.prototype.P;
    lk.prototype.getProperties = lk.prototype.M;
    lk.prototype.set = lk.prototype.set;
    lk.prototype.setProperties = lk.prototype.H;
    lk.prototype.unset = lk.prototype.R;
    lk.prototype.changed = lk.prototype.u;
    lk.prototype.dispatchEvent = lk.prototype.b;
    lk.prototype.getRevision = lk.prototype.L;
    lk.prototype.on = lk.prototype.J;
    lk.prototype.once = lk.prototype.once;
    lk.prototype.un = lk.prototype.K;
    sk.prototype.getMap = sk.prototype.f;
    sk.prototype.setMap = sk.prototype.setMap;
    sk.prototype.setTarget = sk.prototype.i;
    sk.prototype.get = sk.prototype.get;
    sk.prototype.getKeys = sk.prototype.P;
    sk.prototype.getProperties = sk.prototype.M;
    sk.prototype.set = sk.prototype.set;
    sk.prototype.setProperties = sk.prototype.H;
    sk.prototype.unset = sk.prototype.R;
    sk.prototype.changed = sk.prototype.u;
    sk.prototype.dispatchEvent = sk.prototype.b;
    sk.prototype.getRevision = sk.prototype.L;
    sk.prototype.on = sk.prototype.J;
    sk.prototype.once = sk.prototype.once;
    sk.prototype.un = sk.prototype.K;
    return OPENLAYERS.ol;
}));

