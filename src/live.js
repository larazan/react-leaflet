var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function(g, l, v) {
    g instanceof String && (g = String(g));
    for (var A = g.length, G = 0; G < A; G++) {
        var L = g[G];
        if (l.call(v, L, G, g)) return {
            i: G,
            v: L
        }
    }
    return {
        i: -1,
        v: void 0
    }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(g, l, v) {
    if (v.get || v.set) throw new TypeError("ES3 does not support getters and setters.");
    g != Array.prototype && g != Object.prototype && (g[l] = v.value)
};
$jscomp.getGlobal = function(g) {
    return "undefined" != typeof window && window === g ? g : "undefined" != typeof global && null != global ? global : g
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(g, l, v, A) {
    if (l) {
        v = $jscomp.global;
        g = g.split(".");
        for (A = 0; A < g.length - 1; A++) {
            var G = g[A];
            G in v || (v[G] = {});
            v = v[G]
        }
        g = g[g.length - 1];
        A = v[g];
        l = l(A);
        l != A && null != l && $jscomp.defineProperty(v, g, {
            configurable: !0,
            writable: !0,
            value: l
        })
    }
};
$jscomp.polyfill("Array.prototype.find", function(g) {
    return g ? g : function(g, v) {
        return $jscomp.findInternal(this, g, v).v
    }
}, "es6-impl", "es3");
(function(g, l) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = g.document ? l(g, !0) : function(g) {
        if (!g.document) throw Error("jQuery requires a window with a document");
        return l(g)
    } : l(g)
})("undefined" !== typeof window ? window : this, function(g, l) {
    function v(a) {
        var b = !!a && "length" in a && a.length,
            c = d.type(a);
        return "function" === c || d.isWindow(a) ? !1 : "array" === c || 0 === b || "number" === typeof b && 0 < b && b - 1 in a
    }

    function A(a, b, c) {
        if (d.isFunction(b)) return d.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return d.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" === typeof b) {
            if (Fb.test(b)) return d.filter(b, a, c);
            b = d.filter(b, a)
        }
        return d.grep(a, function(a) {
            return -1 < Ba.call(b, a) !== c
        })
    }

    function G(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function L(a) {
        var b = {};
        d.each(a.match(P) || [], function(a, d) {
            b[d] = !0
        });
        return b
    }

    function N() {
        z.removeEventListener("DOMContentLoaded", N);
        g.removeEventListener("load", N);
        d.ready()
    }

    function y() {
        this.expando = d.expando + y.uid++
    }

    function n(a, b, c) {
        if (void 0 === c && 1 === a.nodeType)
            if (c = "data-" + b.replace(Xa, "-$&").toLowerCase(), c = a.getAttribute(c), "string" === typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : Gb.test(c) ? d.parseJSON(c) : c
                } catch (e) {}
                I.set(a, b, c)
            } else c = void 0;
        return c
    }

    function x(a, b, c, e) {
        var f, h = 1,
            k = 20,
            p = e ? function() {
                return e.cur()
            } : function() {
                return d.css(a, b, "")
            },
            q = p(),
            g = c && c[3] || (d.cssNumber[b] ? "" : "px"),
            D = (d.cssNumber[b] || "px" !== g && +q) && fa.exec(d.css(a, b));
        if (D && D[3] !== g) {
            g = g || D[3];
            c = c || [];
            D = +q || 1;
            do h = h || ".5", D /= h, d.style(a, b, D + g); while (h !== (h = p() / q) && 1 !== h && --k)
        }
        c && (D = +D || +q || 0, f = c[1] ? D + (c[1] + 1) * c[2] : +c[2], e && (e.unit = g, e.start = D, e.end = f));
        return f
    }

    function r(a, b) {
        var c = "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && d.nodeName(a, b) ? d.merge([a], c) : c
    }

    function M(a, b) {
        for (var c = 0, d = a.length; c < d; c++) B.set(a[c], "globalEval", !b || B.get(b[c], "globalEval"))
    }

    function Aa(a, b, c, e, f) {
        for (var h, k, p, q = b.createDocumentFragment(), g = [], D = 0, m = a.length; D < m; D++)
            if ((h = a[D]) || 0 === h)
                if ("object" === d.type(h)) d.merge(g, h.nodeType ? [h] : h);
                else if (Hb.test(h)) {
            k = k || q.appendChild(b.createElement("div"));
            p = (Ya.exec(h) || ["", ""])[1].toLowerCase();
            p = S[p] || S._default;
            k.innerHTML = p[1] + d.htmlPrefilter(h) + p[2];
            for (p = p[0]; p--;) k = k.lastChild;
            d.merge(g, k.childNodes);
            k = q.firstChild;
            k.textContent = ""
        } else g.push(b.createTextNode(h));
        q.textContent = "";
        for (D = 0; h = g[D++];)
            if (e && -1 < d.inArray(h, e)) f && f.push(h);
            else if (a = d.contains(h.ownerDocument, h), k = r(q.appendChild(h), "script"), a && M(k), c)
            for (p = 0; h = k[p++];) Za.test(h.type || "") && c.push(h);
        return q
    }

    function E() {
        return !0
    }

    function Y() {
        return !1
    }

    function W() {
        try {
            return z.activeElement
        } catch (a) {}
    }

    function J(a, b, c, e, f, h) {
        var k, p;
        if ("object" === typeof b) {
            "string" !== typeof c && (e = e || c, c = void 0);
            for (p in b) J(a, p, c, e, b[p], h);
            return a
        }
        null == e && null == f ? (f = c, e = c = void 0) : null == f && ("string" === typeof c ? (f = e, e = void 0) : (f = e, e = c, c = void 0));
        if (!1 === f) f = Y;
        else if (!f) return a;
        1 === h && (k = f, f = function(a) {
            d().off(a);
            return k.apply(this, arguments)
        }, f.guid = k.guid || (k.guid = d.guid++));
        return a.each(function() {
            d.event.add(this, b, f, e, c)
        })
    }

    function Ca(a, b) {
        return d.nodeName(a, "table") && d.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Z(a) {
        a.type = (null !== a.getAttribute("type")) + "/" + a.type;
        return a
    }

    function Da(a) {
        var b = Ib.exec(a.type);
        b ? a.type = b[1] : a.removeAttribute("type");
        return a
    }

    function na(a, b) {
        var c, e, f, h;
        if (1 === b.nodeType) {
            if (B.hasData(a) && (h = B.access(a), c = B.set(b, h), h = h.events))
                for (f in delete c.handle, c.events = {}, h)
                    for (c = 0, e = h[f].length; c < e; c++) d.event.add(b, f, h[f][c]);
            I.hasData(a) && (f = I.access(a), f = d.extend({}, f), I.set(b, f))
        }
    }

    function X(a, b, c, e) {
        b = $a.apply([], b);
        var f, h, k, p, g = 0,
            t = a.length,
            D = t - 1,
            m = b[0],
            n = d.isFunction(m);
        if (n || 1 < t && "string" === typeof m && !F.checkClone && Jb.test(m)) return a.each(function(d) {
            var f = a.eq(d);
            n && (b[0] = m.call(this, d, f.html()));
            X(f, b, c, e)
        });
        if (t && (f = Aa(b, a[0].ownerDocument, !1, a, e), h = f.firstChild, 1 === f.childNodes.length && (f = h), h || e)) {
            h = d.map(r(f, "script"), Z);
            for (k = h.length; g < t; g++) p = f, g !== D && (p = d.clone(p, !0, !0), k && d.merge(h, r(p, "script"))), c.call(a[g], p, g);
            if (k)
                for (f = h[h.length - 1].ownerDocument, d.map(h, Da), g = 0; g < k; g++) p = h[g], Za.test(p.type || "") && !B.access(p, "globalEval") && d.contains(f, p) && (p.src ? d._evalUrl && d._evalUrl(p.src) : d.globalEval(p.textContent.replace(Kb, "")))
        }
        return a
    }

    function ga(a, b, c) {
        for (var e = b ? d.filter(b, a) : a, f = 0; null != (b = e[f]); f++) c || 1 !== b.nodeType || d.cleanData(r(b)), b.parentNode && (c && d.contains(b.ownerDocument, b) && M(r(b, "script")), b.parentNode.removeChild(b));
        return a
    }

    function ab(a, b) {
        var c = d(b.createElement(a)).appendTo(b.body),
            e = d.css(c[0], "display");
        c.detach();
        return e
    }

    function Ka(a) {
        var b = z,
            c = bb[a];
        c || (c = ab(a, b), "none" !== c && c || (Ea = (Ea || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Ea[0].contentDocument, b.write(), b.close(), c = ab(a, b), Ea.detach()), bb[a] = c);
        return c
    }

    function oa(a, b, c) {
        var e, f, h = a.style;
        f = (c = c || Fa(a)) ? c.getPropertyValue(b) || c[b] : void 0;
        "" !== f && void 0 !== f || d.contains(a.ownerDocument, a) || (f = d.style(a, b));
        c && !F.pixelMarginRight() && La.test(f) && cb.test(b) && (a = h.width, b = h.minWidth, e = h.maxWidth, h.minWidth = h.maxWidth = h.width = f, f = c.width, h.width = a, h.minWidth = b, h.maxWidth = e);
        return void 0 !== f ? f + "" : f
    }

    function Ma(a, b) {
        return {
            get: function() {
                if (a()) delete this.get;
                else return (this.get = b).apply(this, arguments)
            }
        }
    }

    function db(a) {
        if (a in eb) return a;
        for (var b = a[0].toUpperCase() + a.slice(1), c = fb.length; c--;)
            if (a = fb[c] + b, a in eb) return a
    }

    function gb(a, b, c) {
        return (a = fa.exec(b)) ? Math.max(0, a[2] - (c || 0)) + (a[3] || "px") : b
    }

    function hb(a, b, c, e, f) {
        b = c === (e ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var h = 0; 4 > b; b += 2) "margin" === c && (h += d.css(a, c + ha[b], !0, f)), e ? ("content" === c && (h -= d.css(a, "padding" + ha[b], !0, f)), "margin" !== c && (h -= d.css(a, "border" + ha[b] + "Width", !0, f))) : (h += d.css(a, "padding" + ha[b], !0, f), "padding" !== c && (h += d.css(a, "border" + ha[b] + "Width", !0, f)));
        return h
    }

    function ib(a, b, c) {
        var e = !0,
            f = "width" === b ? a.offsetWidth : a.offsetHeight,
            h = Fa(a),
            k = "border-box" === d.css(a, "boxSizing", !1, h);
        if (0 >= f || null == f) {
            f = oa(a, b, h);
            if (0 > f || null == f) f = a.style[b];
            if (La.test(f)) return f;
            e = k && (F.boxSizingReliable() || f === a.style[b]);
            f = parseFloat(f) || 0
        }
        return f + hb(a, b, c || (k ? "border" : "content"), e, h) + "px"
    }

    function jb(a, b) {
        for (var c, e, f, h = [], k = 0, p = a.length; k < p; k++) e = a[k], e.style && (h[k] = B.get(e, "olddisplay"), c = e.style.display, b ? (h[k] || "none" !== c || (e.style.display = ""), "" === e.style.display && va(e) && (h[k] = B.access(e, "olddisplay", Ka(e.nodeName)))) : (f = va(e), "none" === c && f || B.set(e, "olddisplay", f ? c : d.css(e, "display"))));
        for (k = 0; k < p; k++) e = a[k], !e.style || b && "none" !== e.style.display && "" !== e.style.display || (e.style.display = b ? h[k] || "" : "none");
        return a
    }

    function Q(a, b, c, d, f) {
        return new Q.prototype.init(a, b, c, d, f)
    }

    function kb() {
        g.setTimeout(function() {
            pa = void 0
        });
        return pa = d.now()
    }

    function Ga(a, b) {
        var c, d = 0,
            f = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = ha[d], f["margin" + c] = f["padding" + c] = a;
        b && (f.opacity = f.width = a);
        return f
    }

    function lb(a, b, c) {
        for (var d, f = (T.tweeners[b] || []).concat(T.tweeners["*"]), h = 0, k = f.length; h < k; h++)
            if (d = f[h].call(c, b, a)) return d
    }

    function Lb(a, b) {
        var c, e, f, h, k;
        for (c in a)
            if (e = d.camelCase(c), f = b[e], h = a[c], d.isArray(h) && (f = h[1], h = a[c] = h[0]), c !== e && (a[e] = h, delete a[c]), (k = d.cssHooks[e]) && "expand" in k)
                for (c in h = k.expand(h), delete a[e], h) c in a || (a[c] = h[c], b[c] = f);
            else b[e] = f
    }

    function T(a, b, c) {
        var e, f = 0,
            h = T.prefilters.length,
            k = d.Deferred().always(function() {
                delete p.elem
            }),
            p = function() {
                if (e) return !1;
                for (var b = pa || kb(), b = Math.max(0, g.startTime + g.duration - b), c = 1 - (b / g.duration || 0), d = 0, f = g.tweens.length; d < f; d++) g.tweens[d].run(c);
                k.notifyWith(a, [g, c, b]);
                if (1 > c && f) return b;
                k.resolveWith(a, [g]);
                return !1
            },
            g = k.promise({
                elem: a,
                props: d.extend({}, b),
                opts: d.extend(!0, {
                    specialEasing: {},
                    easing: d.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: pa || kb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var e = d.Tween(a, g.opts, b, c, g.opts.specialEasing[b] || g.opts.easing);
                    g.tweens.push(e);
                    return e
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? g.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) g.tweens[c].run(1);
                    b ? (k.notifyWith(a, [g, 1, 0]), k.resolveWith(a, [g, b])) : k.rejectWith(a, [g, b]);
                    return this
                }
            });
        c = g.props;
        for (Lb(c, g.opts.specialEasing); f < h; f++)
            if (b = T.prefilters[f].call(g, a, c, g.opts)) return d.isFunction(b.stop) && (d._queueHooks(g.elem, g.opts.queue).stop = d.proxy(b.stop, b)), b;
        d.map(c, lb, g);
        d.isFunction(g.opts.start) && g.opts.start.call(a, g);
        d.fx.timer(d.extend(p, {
            elem: a,
            anim: g,
            queue: g.opts.queue
        }));
        return g.progress(g.opts.progress).done(g.opts.done, g.opts.complete).fail(g.opts.fail).always(g.opts.always)
    }

    function U(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    function mb(a) {
        return function(b, c) {
            "string" !== typeof b && (c = b, b = "*");
            var e, f = 0,
                h = b.toLowerCase().match(P) || [];
            if (d.isFunction(c))
                for (; e = h[f++];) "+" === e[0] ? (e = e.slice(1) || "*", (a[e] = a[e] || []).unshift(c)) : (a[e] = a[e] || []).push(c)
        }
    }

    function nb(a, b, c, e) {
        function f(g) {
            var p;
            h[g] = !0;
            d.each(a[g] || [], function(a, d) {
                var g = d(b, c, e);
                if ("string" === typeof g && !k && !h[g]) return b.dataTypes.unshift(g), f(g), !1;
                if (k) return !(p = g)
            });
            return p
        }
        var h = {},
            k = a === Na;
        return f(b.dataTypes[0]) || !h["*"] && f("*")
    }

    function Oa(a, b) {
        var c, e, f = d.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((f[c] ? a : e || (e = {}))[c] = b[c]);
        e && d.extend(!0, a, e);
        return a
    }

    function Pa(a, b, c, e) {
        var f;
        if (d.isArray(b)) d.each(b, function(b, d) {
            c || Mb.test(a) ? e(a, d) : Pa(a + "[" + ("object" === typeof d && null != d ? b : "") + "]", d, c, e)
        });
        else if (c || "object" !== d.type(b)) e(a, b);
        else
            for (f in b) Pa(a + "[" + f + "]", b[f], c, e)
    }

    function ob(a) {
        return d.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var ia = [],
        z = g.document,
        O = ia.slice,
        $a = ia.concat,
        Qa = ia.push,
        Ba = ia.indexOf,
        Ha = {},
        Nb = Ha.toString,
        wa = Ha.hasOwnProperty,
        F = {},
        d = function(a, b) {
            return new d.fn.init(a, b)
        },
        Ob = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Pb = /^-ms-/,
        Qb = /-([\da-z])/gi,
        Rb = function(a, b) {
            return b.toUpperCase()
        };
    d.fn = d.prototype = {
        jquery: "2.2.4",
        constructor: d,
        selector: "",
        length: 0,
        toArray: function() {
            return O.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : O.call(this)
        },
        pushStack: function(a) {
            a = d.merge(this.constructor(), a);
            a.prevObject = this;
            a.context = this.context;
            return a
        },
        each: function(a) {
            return d.each(this, a)
        },
        map: function(a) {
            return this.pushStack(d.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(O.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(0 <= a && a < b ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Qa,
        sort: ia.sort,
        splice: ia.splice
    };
    d.extend = d.fn.extend = function() {
        var a, b, c, e, f, h = arguments[0] || {},
            k = 1,
            g = arguments.length,
            q = !1;
        "boolean" === typeof h && (q = h, h = arguments[k] || {}, k++);
        "object" === typeof h || d.isFunction(h) || (h = {});
        k === g && (h = this, k--);
        for (; k < g; k++)
            if (null != (a = arguments[k]))
                for (b in a) c = h[b], e = a[b], h !== e && (q && e && (d.isPlainObject(e) || (f = d.isArray(e))) ? (f ? (f = !1, c = c && d.isArray(c) ? c : []) : c = c && d.isPlainObject(c) ? c : {}, h[b] = d.extend(q, c, e)) : void 0 !== e && (h[b] = e));
        return h
    };
    d.extend({
        expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === d.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !d.isArray(a) && 0 <= b - parseFloat(b) + 1
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== d.type(a) || a.nodeType || d.isWindow(a) || a.constructor && !wa.call(a, "constructor") && !wa.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (b in a);
            return void 0 === b || wa.call(a, b)
        },
        isEmptyObject: function(a) {
            for (var b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" === typeof a || "function" === typeof a ? Ha[Nb.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b;
            b = eval;
            if (a = d.trim(a)) 1 === a.indexOf("use strict") ? (b = z.createElement("script"), b.text = a, z.head.appendChild(b).parentNode.removeChild(b)) : b(a)
        },
        camelCase: function(a) {
            return a.replace(Pb, "ms-").replace(Qb, Rb)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (v(a))
                for (c = a.length; d < c && !1 !== b.call(a[d], d, a[d]); d++);
            else
                for (d in a)
                    if (!1 === b.call(a[d], d, a[d])) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(Ob, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            null != a && (v(Object(a)) ? d.merge(c, "string" === typeof a ? [a] : a) : Qa.call(c, a));
            return c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : Ba.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, f = a.length; d < c; d++) a[f++] = b[d];
            a.length = f;
            return a
        },
        grep: function(a, b, c) {
            for (var d = [], f = 0, h = a.length, k = !c; f < h; f++) c = !b(a[f], f), c !== k && d.push(a[f]);
            return d
        },
        map: function(a, b, c) {
            var d, f, h = 0,
                k = [];
            if (v(a))
                for (d = a.length; h < d; h++) f = b(a[h], h, c), null != f && k.push(f);
            else
                for (h in a) f = b(a[h], h, c), null != f && k.push(f);
            return $a.apply([], k)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e;
            "string" === typeof b && (c = a[b], b = a, a = c);
            if (d.isFunction(a)) return e = O.call(arguments, 2), c = function() {
                return a.apply(b || this, e.concat(O.call(arguments)))
            }, c.guid = a.guid = a.guid || d.guid++, c
        },
        now: Date.now,
        support: F
    });
    "function" === typeof Symbol && (d.fn[Symbol.iterator] = ia[Symbol.iterator]);
    d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        Ha["[object " + b + "]"] = b.toLowerCase()
    });
    var ta = function(a) {
        function b(a, b, c, d) {
            var e, f, h, w, k, K = b && b.ownerDocument,
                g = b ? b.nodeType : 9;
            c = c || [];
            if ("string" !== typeof a || !a || 1 !== g && 9 !== g && 11 !== g) return c;
            if (!d && ((b ? b.ownerDocument || b : aa) !== C && J(b), b = b || C, ba)) {
                if (11 !== g && (w = xa.exec(a)))
                    if (e = w[1])
                        if (9 === g)
                            if (f = b.getElementById(e)) {
                                if (f.id === e) return c.push(f), c
                            } else return c;
                else {
                    if (K && (f = K.getElementById(e)) && L(b, f) && f.id === e) return c.push(f), c
                } else {
                    if (w[2]) return O.apply(c, b.getElementsByTagName(a)), c;
                    if ((e = w[3]) && E.getElementsByClassName && b.getElementsByClassName) return O.apply(c, b.getElementsByClassName(e)), c
                }
                if (!(!E.qsa || P[a + " "] || R && R.test(a))) {
                    if (1 !== g) K = b, k = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (h = b.getAttribute("id")) ? h = h.replace(ya, "\\$&"): b.setAttribute("id", h = H);
                        w = M(a);
                        e = w.length;
                        for (f = la.test(h) ? "#" + h : "[id='" + h + "']"; e--;) w[e] = f + " " +
                            n(w[e]);
                        k = w.join(",");
                        K = ma.test(a) && D(b.parentNode) || b
                    }
                    if (k) try {
                        return O.apply(c, K.querySelectorAll(k)), c
                    } catch (sc) {} finally {
                        h === H && b.removeAttribute("id")
                    }
                }
            }
            return Aa(a.replace(Z, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                b.push(c + " ") > u.cacheLength && delete a[b.shift()];
                return a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            a[H] = !0;
            return a
        }

        function f(a) {
            var b = C.createElement("div");
            try {
                return !!a(b)
            } catch (K) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }

        function h(a, b) {
            for (var c = a.split("|"), d = c.length; d--;) u.attrHandle[c[d]] = b
        }

        function k(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function g(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function q(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function t(a) {
            return d(function(b) {
                b = +b;
                return d(function(c, d) {
                    for (var e, f = a([], c.length, b), h = f.length; h--;) c[e = f[h]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function D(a) {
            return a && "undefined" !== typeof a.getElementsByTagName && a
        }

        function m() {}

        function n(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function l(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, h) {
                var w, k, g = [W, f];
                if (h)
                    for (; b = b[d];) {
                        if ((1 === b.nodeType || e) && a(b, c, h)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) {
                                k = b[H] || (b[H] = {});
                                k = k[b.uniqueID] || (k[b.uniqueID] = {});
                                if ((w = k[d]) && w[0] === W && w[1] === f) return g[2] = w[2];
                                k[d] = g;
                                if (g[2] = a(b, c, h)) return !0
                            }
            }
        }

        function r(a) {
            return 1 < a.length ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function x(a, b, c, d, e) {
            for (var f, h = [], k = 0, w = a.length, g = null != b; k < w; k++)
                if (f = a[k])
                    if (!c || c(f, d, e)) h.push(f), g && b.push(k);
            return h
        }

        function v(a, c, e, f, h, k) {
            f && !f[H] && (f = v(f));
            h && !h[H] && (h = v(h, k));
            return d(function(d, k, w, g) {
                var K, p, qa = [],
                    m = [],
                    ra = k.length,
                    q;
                if (!(q = d)) {
                    q = c || "*";
                    for (var t = w.nodeType ? [w] : w, n = [], D = 0, Sb = t.length; D < Sb; D++) b(q, t[D], n);
                    q = n
                }
                q = !a || !d && c ? q : x(q, qa, a, w, g);
                t = e ? h || (d ? a : ra || f) ? [] : k : q;
                e && e(q, t, w, g);
                if (f)
                    for (K = x(t, m), f(K, [], w, g), w = K.length; w--;)
                        if (p = K[w]) t[m[w]] = !(q[m[w]] = p);
                if (d) {
                    if (h || a) {
                        if (h) {
                            K = [];
                            for (w = t.length; w--;)(p = t[w]) && K.push(q[w] = p);
                            h(null, t = [], K, g)
                        }
                        for (w = t.length; w--;)(p = t[w]) && -1 < (K = h ? U(d, p) : qa[w]) && (d[K] = !(k[K] = p))
                    }
                } else t = x(t === k ? t.splice(ra, t.length) : t), h ? h(null, k, t, g) : O.apply(k, t)
            })
        }

        function B(a) {
            var b, c, d, e = a.length,
                f = u.relative[a[0].type];
            c = f || u.relative[" "];
            for (var h = f ? 1 : 0, k = l(function(a) {
                    return a === b
                }, c, !0), w = l(function(a) {
                    return -1 < U(b, a)
                }, c, !0), g = [function(a, c, d) {
                    a = !f && (d || c !== G) || ((b = c).nodeType ? k(a, c, d) : w(a, c, d));
                    b = null;
                    return a
                }]; h < e; h++)
                if (c = u.relative[a[h].type]) g = [l(r(g), c)];
                else {
                    c = u.filter[a[h].type].apply(null, a[h].matches);
                    if (c[H]) {
                        for (d = ++h; d < e && !u.relative[a[d].type]; d++);
                        return v(1 < h && r(g), 1 < h && n(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(Z, "$1"), c, h < d && B(a.slice(h, d)), d < e && B(a = a.slice(d)), d < e && n(a))
                    }
                    g.push(c)
                }
            return r(g)
        }

        function A(a, c) {
            var e = 0 < c.length,
                f = 0 < a.length,
                h = function(d, h, k, w, g) {
                    var K, p, qa, m = 0,
                        q = "0",
                        ra = d && [],
                        t = [],
                        n = G,
                        D = d || f && u.find.TAG("*", g),
                        l = W += null == n ? 1 : Math.random() || .1,
                        r = D.length;
                    for (g && (G = h === C || h || g); q !== r && null != (K = D[q]); q++) {
                        if (f && K) {
                            p = 0;
                            h || K.ownerDocument === C || (J(K), k = !ba);
                            for (; qa = a[p++];)
                                if (qa(K, h || C, k)) {
                                    w.push(K);
                                    break
                                }
                            g && (W = l)
                        }
                        e && ((K = !qa && K) && m--, d && ra.push(K))
                    }
                    m += q;
                    if (e && q !== m) {
                        for (p = 0; qa = c[p++];) qa(ra, t, h, k);
                        if (d) {
                            if (0 < m)
                                for (; q--;) ra[q] || t[q] || (t[q] = Ca.call(w));
                            t = x(t)
                        }
                        O.apply(w, t);
                        g && !d && 0 < t.length && 1 < m + c.length && b.uniqueSort(w)
                    }
                    g && (W = l, G = n);
                    return ra
                };
            return e ? d(h) : h
        }
        var z, E, u, V, y, M, F, Aa, G, sa, za, J, C, ca, ba, R, I, Y, L, H = "sizzle" + 1 * new Date,
            aa = a.document,
            W = 0,
            Q = 0,
            N = c(),
            S = c(),
            P = c(),
            T = function(a, b) {
                a === b && (za = !0);
                return 0
            },
            X = {}.hasOwnProperty,
            ga = [],
            Ca = ga.pop,
            da = ga.push,
            O = ga.push,
            ha = ga.slice,
            U = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            ia = RegExp("[\\x20\\t\\r\\n\\f]+", "g"),
            Z = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
            na = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            oa = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            pa = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"),
            ta = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
            la = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
            fa = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
                ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
                PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            },
            va = /^(?:input|select|textarea|button)$/i,
            wa = /^h\d$/i,
            ea = /^[^{]+\{\s*\[native \w/,
            xa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ma = /[+~]/,
            ya = /'|\\/g,
            ja = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"),
            ka = function(a, b, c) {
                a = "0x" + b - 65536;
                return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
            },
            ua = function() {
                J()
            };
        try {
            O.apply(ga = ha.call(aa.childNodes), aa.childNodes), ga[aa.childNodes.length].nodeType
        } catch (w) {
            O = {
                apply: ga.length ? function(a, b) {
                    da.apply(a, ha.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        E = b.support = {};
        y = b.isXML = function(a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        J = b.setDocument = function(a) {
            var b;
            a = a ? a.ownerDocument || a : aa;
            if (a === C || 9 !== a.nodeType || !a.documentElement) return C;
            C = a;
            ca = C.documentElement;
            ba = !y(C);
            (b = C.defaultView) && b.top !== b && (b.addEventListener ? b.addEventListener("unload", ua, !1) : b.attachEvent && b.attachEvent("onunload", ua));
            E.attributes = f(function(a) {
                a.className = "i";
                return !a.getAttribute("className")
            });
            E.getElementsByTagName = f(function(a) {
                a.appendChild(C.createComment(""));
                return !a.getElementsByTagName("*").length
            });
            E.getElementsByClassName = ea.test(C.getElementsByClassName);
            E.getById = f(function(a) {
                ca.appendChild(a).id = H;
                return !C.getElementsByName || !C.getElementsByName(H).length
            });
            E.getById ? (u.find.ID = function(a, b) {
                if ("undefined" !== typeof b.getElementById && ba) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, u.filter.ID = function(a) {
                var b = a.replace(ja, ka);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete u.find.ID, u.filter.ID = function(a) {
                var b = a.replace(ja, ka);
                return function(a) {
                    return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                }
            });
            u.find.TAG = E.getElementsByTagName ? function(a, b) {
                if ("undefined" !== typeof b.getElementsByTagName) return b.getElementsByTagName(a);
                if (E.qsa) return b.querySelectorAll(a)
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            };
            u.find.CLASS = E.getElementsByClassName && function(a, b) {
                if ("undefined" !== typeof b.getElementsByClassName && ba) return b.getElementsByClassName(a)
            };
            I = [];
            R = [];
            if (E.qsa = ea.test(C.querySelectorAll)) f(function(a) {
                ca.appendChild(a).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                a.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll("[selected]").length || R.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll("[id~=" + H + "-]").length || R.push("~=");
                a.querySelectorAll(":checked").length || R.push(":checked");
                a.querySelectorAll("a#" + H + "+*").length || R.push(".#.+[+~]")
            }), f(function(a) {
                var b = C.createElement("input");
                b.setAttribute("type", "hidden");
                a.appendChild(b).setAttribute("name", "D");
                a.querySelectorAll("[name=d]").length && R.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                a.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                R.push(",.*:")
            });
            (E.matchesSelector = ea.test(Y = ca.matches || ca.webkitMatchesSelector || ca.mozMatchesSelector || ca.oMatchesSelector || ca.msMatchesSelector)) && f(function(a) {
                E.disconnectedMatch = Y.call(a, "div");
                Y.call(a, "[s!='']:x");
                I.push("!=", ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
            });
            R = R.length && new RegExp(R.join("|"));
            I = I.length && new RegExp(I.join("|"));
            L = (b = ea.test(ca.compareDocumentPosition)) || ea.test(ca.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !!(d && 1 === d.nodeType && (c.contains ? c.contains(d) : a.compareDocumentPosition && a.compareDocumentPosition(d) & 16))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            };
            T = b ? function(a, b) {
                if (a === b) return za = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (c) return c;
                c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                return c & 1 || !E.sortDetached && b.compareDocumentPosition(a) === c ? a === C || a.ownerDocument === aa && L(aa, a) ? -1 : b === C || b.ownerDocument === aa && L(aa, b) ? 1 : sa ? U(sa, a) - U(sa, b) : 0 : c & 4 ? -1 : 1
            } : function(a, b) {
                if (a === b) return za = !0, 0;
                var c, d = 0;
                c = a.parentNode;
                var e = b.parentNode,
                    f = [a],
                    h = [b];
                if (!c || !e) return a === C ? -1 : b === C ? 1 : c ? -1 : e ? 1 : sa ? U(sa, a) - U(sa, b) : 0;
                if (c === e) return k(a, b);
                for (c = a; c = c.parentNode;) f.unshift(c);
                for (c = b; c = c.parentNode;) h.unshift(c);
                for (; f[d] === h[d];) d++;
                return d ? k(f[d], h[d]) : f[d] === aa ? -1 : h[d] === aa ? 1 : 0
            };
            return C
        };
        b.matches = function(a, c) {
            return b(a, null, null, c)
        };
        b.matchesSelector = function(a, c) {
            (a.ownerDocument || a) !== C && J(a);
            c = c.replace(pa, "='$1']");
            if (!(!E.matchesSelector || !ba || P[c + " "] || I && I.test(c) || R && R.test(c))) try {
                var d = Y.call(a, c);
                if (d || E.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (ra) {}
            return 0 < b(c, C, null, [a]).length
        };
        b.contains = function(a, b) {
            (a.ownerDocument || a) !== C && J(a);
            return L(a, b)
        };
        b.attr = function(a, b) {
            (a.ownerDocument || a) !== C && J(a);
            var c = u.attrHandle[b.toLowerCase()],
                c = c && X.call(u.attrHandle, b.toLowerCase()) ? c(a, b, !ba) : void 0;
            return void 0 !== c ? c : E.attributes || !ba ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
        };
        b.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            za = !E.detectDuplicates;
            sa = !E.sortStable && a.slice(0);
            a.sort(T);
            if (za) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            sa = null;
            return a
        };
        V = b.getText = function(a) {
            var b, c = "",
                d = 0;
            b = a.nodeType;
            if (!b)
                for (; b = a[d++];) c += V(b);
            else if (1 === b || 9 === b || 11 === b) {
                if ("string" === typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += V(a)
            } else if (3 === b || 4 === b) return a.nodeValue;
            return c
        };
        u = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: fa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    a[1] = a[1].replace(ja, ka);
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ja, ka);
                    "~=" === a[2] && (a[3] = " " + a[3] + " ");
                    return a.slice(0, 4)
                },
                CHILD: function(a) {
                    a[1] = a[1].toLowerCase();
                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]);
                    return a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    if (fa.CHILD.test(a[0])) return null;
                    a[3] ? a[2] = a[4] || a[5] || "" : c && ta.test(c) && (b = M(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b));
                    return a.slice(0, 3)
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ja, ka).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = N[a + " "];
                    return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"), N(a, function(a) {
                        return b.test("string" === typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                    }))
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        e = b.attr(e, a);
                        if (null == e) return "!=" === c;
                        if (!c) return !0;
                        e += "";
                        return "=" === c ? e === d : "!=" === c ? e !== d : "^=" === c ? d && 0 === e.indexOf(d) : "*=" === c ? d && -1 < e.indexOf(d) : "$=" === c ? d && e.slice(-d.length) === d : "~=" === c ? -1 < (" " + e.replace(ia, " ") + " ").indexOf(d) : "|=" === c ? e === d || e.slice(0, d.length + 1) === d + "-" : !1
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        h = "last" !== a.slice(-4),
                        k = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, g) {
                        var p, w, m, q, t;
                        c = f !== h ? "nextSibling" : "previousSibling";
                        var n = b.parentNode,
                            D = k && b.nodeName.toLowerCase();
                        g = !g && !k;
                        p = !1;
                        if (n) {
                            if (f) {
                                for (; c;) {
                                    for (m = b; m = m[c];)
                                        if (k ? m.nodeName.toLowerCase() === D : 1 === m.nodeType) return !1;
                                    t = c = "only" === a && !t && "nextSibling"
                                }
                                return !0
                            }
                            t = [h ? n.firstChild : n.lastChild];
                            if (h && g)
                                for (m = n, w = m[H] || (m[H] = {}), w = w[m.uniqueID] || (w[m.uniqueID] = {}), p = w[a] || [], p = (q = p[0] === W && p[1]) && p[2], m = q && n.childNodes[q]; m = ++q && m && m[c] || (p = q = 0) || t.pop();) {
                                    if (1 === m.nodeType && ++p && m === b) {
                                        w[a] = [W, q, p];
                                        break
                                    }
                                } else if (g && (m = b, w = m[H] || (m[H] = {}), w = w[m.uniqueID] || (w[m.uniqueID] = {}), p = w[a] || [], p = q = p[0] === W && p[1]), !1 === p)
                                    for (;
                                        (m = ++q && m && m[c] || (p = q = 0) || t.pop()) && ((k ? m.nodeName.toLowerCase() !== D : 1 !== m.nodeType) || !++p || (g && (w = m[H] || (m[H] = {}), w = w[m.uniqueID] || (w[m.uniqueID] = {}), w[a] = [W, p]), m !== b)););
                            p -= e;
                            return p === d || 0 === p % d && 0 <= p / d
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = u.pseudos[a] || u.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[H] ? f(c) : 1 < f.length ? (e = [a, a, "", c], u.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), h = e.length; h--;) d = U(a, e[h]), a[d] = !(b[d] = e[h])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = F(a.replace(Z, "$1"));
                    return e[H] ? d(function(a, b, c, d) {
                        d = e(a, null, d, []);
                        for (var f = a.length; f--;)
                            if (c = d[f]) a[f] = !(b[f] = c)
                    }) : function(a, d, f) {
                        b[0] = a;
                        e(b, null, f, c);
                        b[0] = null;
                        return !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return 0 < b(a, c).length
                    }
                }),
                contains: d(function(a) {
                    a = a.replace(ja, ka);
                    return function(b) {
                        return -1 < (b.textContent || b.innerText || V(b)).indexOf(a)
                    }
                }),
                lang: d(function(a) {
                    la.test(a || "") || b.error("unsupported lang: " + a);
                    a = a.replace(ja, ka).toLowerCase();
                    return function(b) {
                        var c;
                        do
                            if (c = ba ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === ca
                },
                focus: function(a) {
                    return a === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (6 > a.nodeType) return !1;
                    return !0
                },
                parent: function(a) {
                    return !u.pseudos.empty(a)
                },
                header: function(a) {
                    return wa.test(a.nodeName)
                },
                input: function(a) {
                    return va.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: t(function() {
                    return [0]
                }),
                last: t(function(a, b) {
                    return [b - 1]
                }),
                eq: t(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: t(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: t(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: t(function(a, b, c) {
                    for (b = 0 > c ? c + b : c; 0 <= --b;) a.push(b);
                    return a
                }),
                gt: t(function(a, b, c) {
                    for (c = 0 > c ? c + b : c; ++c < b;) a.push(c);
                    return a
                })
            }
        };
        u.pseudos.nth = u.pseudos.eq;
        for (z in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) u.pseudos[z] = g(z);
        for (z in {
                submit: !0,
                reset: !0
            }) u.pseudos[z] = q(z);
        m.prototype = u.filters = u.pseudos;
        u.setFilters = new m;
        M = b.tokenize = function(a, c) {
            var d, e, f, h, k, g, p;
            if (k = S[a + " "]) return c ? 0 : k.slice(0);
            k = a;
            g = [];
            for (p = u.preFilter; k;) {
                if (!d || (e = na.exec(k))) e && (k = k.slice(e[0].length) || k), g.push(f = []);
                d = !1;
                if (e = oa.exec(k)) d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(Z, " ")
                }), k = k.slice(d.length);
                for (h in u.filter) !(e = fa[h].exec(k)) || p[h] && !(e = p[h](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: h,
                    matches: e
                }), k = k.slice(d.length));
                if (!d) break
            }
            return c ? k.length : k ? b.error(a) : S(a, g).slice(0)
        };
        F = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = P[a + " "];
            if (!f) {
                b || (b = M(a));
                for (c = b.length; c--;) f = B(b[c]), f[H] ? d.push(f) : e.push(f);
                f = P(a, A(e, d));
                f.selector = a
            }
            return f
        };
        Aa = b.select = function(a, b, c, d) {
            var e, f, h, k, g = "function" === typeof a && a,
                p = !d && M(a = g.selector || a);
            c = c || [];
            if (1 === p.length) {
                f = p[0] = p[0].slice(0);
                if (2 < f.length && "ID" === (h = f[0]).type && E.getById && 9 === b.nodeType && ba && u.relative[f[1].type]) {
                    b = (u.find.ID(h.matches[0].replace(ja, ka), b) || [])[0];
                    if (!b) return c;
                    g && (b = b.parentNode);
                    a = a.slice(f.shift().value.length)
                }
                for (e = fa.needsContext.test(a) ? 0 : f.length; e--;) {
                    h = f[e];
                    if (u.relative[k = h.type]) break;
                    if (k = u.find[k])
                        if (d = k(h.matches[0].replace(ja, ka), ma.test(f[0].type) && D(b.parentNode) || b)) {
                            f.splice(e, 1);
                            a = d.length && n(f);
                            if (!a) return O.apply(c, d), c;
                            break
                        }
                }
            }(g || F(a, p))(d, b, !ba, c, !b || ma.test(a) && D(b.parentNode) || b);
            return c
        };
        E.sortStable = H.split("").sort(T).join("") === H;
        E.detectDuplicates = !!za;
        J();
        E.sortDetached = f(function(a) {
            return a.compareDocumentPosition(C.createElement("div")) & 1
        });
        f(function(a) {
            a.innerHTML = "<a href='#'></a>";
            return "#" === a.firstChild.getAttribute("href")
        }) || h("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        });
        E.attributes && f(function(a) {
            a.innerHTML = "<input/>";
            a.firstChild.setAttribute("value", "");
            return "" === a.firstChild.getAttribute("value")
        }) || h("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        });
        f(function(a) {
            return null == a.getAttribute("disabled")
        }) || h("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, b, c) {
            var d;
            if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        });
        return b
    }(g);
    d.find = ta;
    d.expr = ta.selectors;
    d.expr[":"] = d.expr.pseudos;
    d.uniqueSort = d.unique = ta.uniqueSort;
    d.text = ta.getText;
    d.isXMLDoc = ta.isXML;
    d.contains = ta.contains;
    var la = function(a, b, c) {
            for (var e = [], f = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (f && d(a).is(c)) break;
                    e.push(a)
                }
            return e
        },
        pb = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        qb = d.expr.match.needsContext,
        rb = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Fb = /^.[^:#\[\.,]*$/;
    d.filter = function(a, b, c) {
        var e = b[0];
        c && (a = ":not(" + a + ")");
        return 1 === b.length && 1 === e.nodeType ? d.find.matchesSelector(e, a) ? [e] : [] : d.find.matches(a, d.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    };
    d.fn.extend({
        find: function(a) {
            var b, c = this.length,
                e = [],
                f = this;
            if ("string" !== typeof a) return this.pushStack(d(a).filter(function() {
                for (b = 0; b < c; b++)
                    if (d.contains(f[b], this)) return !0
            }));
            for (b = 0; b < c; b++) d.find(a, f[b], e);
            e = this.pushStack(1 < c ? d.unique(e) : e);
            e.selector = this.selector ? this.selector + " " + a : a;
            return e
        },
        filter: function(a) {
            return this.pushStack(A(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(A(this, a || [], !0))
        },
        is: function(a) {
            return !!A(this, "string" === typeof a && qb.test(a) ? d(a) : a || [], !1).length
        }
    });
    var sb, Ub = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (d.fn.init = function(a, b, c) {
        var e;
        if (!a) return this;
        c = c || sb;
        if ("string" === typeof a) {
            e = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : Ub.exec(a);
            if (!e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof d ? b[0] : b, d.merge(this, d.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : z, !0)), rb.test(e[1]) && d.isPlainObject(b))
                    for (e in b)
                        if (d.isFunction(this[e])) this[e](b[e]);
                        else this.attr(e, b[e])
            } else(b = z.getElementById(e[2])) && b.parentNode && (this.length = 1, this[0] = b), this.context = z, this.selector = a;
            return this
        }
        if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
        if (d.isFunction(a)) return void 0 !== c.ready ? c.ready(a) : a(d);
        void 0 !== a.selector && (this.selector = a.selector, this.context = a.context);
        return d.makeArray(a, this)
    }).prototype = d.fn;
    sb = d(z);
    var Vb = /^(?:parents|prev(?:Until|All))/,
        Wb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    d.fn.extend({
        has: function(a) {
            var b = d(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (d.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, e = 0, f = this.length, h = [], k = qb.test(a) || "string" !== typeof a ? d(a, b || this.context) : 0; e < f; e++)
                for (c = this[e]; c && c !== b; c = c.parentNode)
                    if (11 > c.nodeType && (k ? -1 < k.index(c) : 1 === c.nodeType && d.find.matchesSelector(c, a))) {
                        h.push(c);
                        break
                    }
            return this.pushStack(1 < h.length ? d.uniqueSort(h) : h)
        },
        index: function(a) {
            return a ? "string" === typeof a ? Ba.call(d(a), this[0]) : Ba.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(d.uniqueSort(d.merge(this.get(), d(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    d.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return la(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return la(a, "parentNode", c)
        },
        next: function(a) {
            return G(a, "nextSibling")
        },
        prev: function(a) {
            return G(a, "previousSibling")
        },
        nextAll: function(a) {
            return la(a, "nextSibling")
        },
        prevAll: function(a) {
            return la(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return la(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return la(a, "previousSibling", c)
        },
        siblings: function(a) {
            return pb((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return pb(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || d.merge([], a.childNodes)
        }
    }, function(a, b) {
        d.fn[a] = function(c, e) {
            var f = d.map(this, b, c);
            "Until" !== a.slice(-5) && (e = c);
            e && "string" === typeof e && (f = d.filter(e, f));
            1 < this.length && (Wb[a] || d.uniqueSort(f), Vb.test(a) && f.reverse());
            return this.pushStack(f)
        }
    });
    var P = /\S+/g;
    d.Callbacks = function(a) {
        a = "string" === typeof a ? L(a) : d.extend({}, a);
        var b, c, e, f, h = [],
            k = [],
            g = -1,
            q = function() {
                f = a.once;
                for (e = b = !0; k.length; g = -1)
                    for (c = k.shift(); ++g < h.length;) !1 === h[g].apply(c[0], c[1]) && a.stopOnFalse && (g = h.length, c = !1);
                a.memory || (c = !1);
                b = !1;
                f && (h = c ? [] : "")
            },
            t = {
                add: function() {
                    h && (c && !b && (g = h.length -
                        1, k.push(c)), function m(b) {
                        d.each(b, function(b, c) {
                            d.isFunction(c) ? a.unique && t.has(c) || h.push(c) : c && c.length && "string" !== d.type(c) && m(c)
                        })
                    }(arguments), c && !b && q());
                    return this
                },
                remove: function() {
                    d.each(arguments, function(a, b) {
                        for (var c; - 1 < (c = d.inArray(b, h, c));) h.splice(c, 1), c <= g && g--
                    });
                    return this
                },
                has: function(a) {
                    return a ? -1 < d.inArray(a, h) : 0 < h.length
                },
                empty: function() {
                    h && (h = []);
                    return this
                },
                disable: function() {
                    f = k = [];
                    h = c = "";
                    return this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    f = k = [];
                    c || (h = c = "");
                    return this
                },
                locked: function() {
                    return !!f
                },
                fireWith: function(a, c) {
                    f || (c = c || [], c = [a, c.slice ? c.slice() : c], k.push(c), b || q());
                    return this
                },
                fire: function() {
                    t.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!e
                }
            };
        return t
    };
    d.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", d.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", d.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", d.Callbacks("memory")]
                ],
                c = "pending",
                e = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        f.done(arguments).fail(arguments);
                        return this
                    },
                    then: function() {
                        var a = arguments;
                        return d.Deferred(function(c) {
                            d.each(b, function(b, h) {
                                var k = d.isFunction(a[b]) && a[b];
                                f[h[1]](function() {
                                    var a = k && k.apply(this, arguments);
                                    if (a && d.isFunction(a.promise)) a.promise().progress(c.notify).done(c.resolve).fail(c.reject);
                                    else c[h[0] + "With"](this === e ? c.promise() : this, k ? [a] : arguments)
                                })
                            });
                            a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? d.extend(a, e) : e
                    }
                },
                f = {};
            e.pipe = e.then;
            d.each(b, function(a, d) {
                var h = d[2],
                    k = d[3];
                e[d[1]] = h.add;
                k && h.add(function() {
                    c = k
                }, b[a ^ 1][2].disable, b[2][2].lock);
                f[d[0]] = function() {
                    f[d[0] + "With"](this === f ? e : this, arguments);
                    return this
                };
                f[d[0] + "With"] = h.fireWith
            });
            e.promise(f);
            a && a.call(f, f);
            return f
        },
        when: function(a) {
            var b = 0,
                c = O.call(arguments),
                e = c.length,
                f = 1 !== e || a && d.isFunction(a.promise) ? e : 0,
                h = 1 === f ? a : d.Deferred(),
                k = function(a, b, c) {
                    return function(d) {
                        b[a] = this;
                        c[a] = 1 < arguments.length ? O.call(arguments) : d;
                        c === g ? h.notifyWith(b, c) : --f || h.resolveWith(b, c)
                    }
                },
                g, q, t;
            if (1 < e)
                for (g = Array(e), q = Array(e), t = Array(e); b < e; b++) c[b] && d.isFunction(c[b].promise) ? c[b].promise().progress(k(b, q, g)).done(k(b, t, c)).fail(h.reject) : --f;
            f || h.resolveWith(t, c);
            return h.promise()
        }
    });
    var Ia;
    d.fn.ready = function(a) {
        d.ready.promise().done(a);
        return this
    };
    d.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? d.readyWait++ : d.ready(!0)
        },
        ready: function(a) {
            (!0 === a ? --d.readyWait : d.isReady) || (d.isReady = !0, !0 !== a && 0 < --d.readyWait || (Ia.resolveWith(z, [d]), d.fn.triggerHandler && (d(z).triggerHandler("ready"), d(z).off("ready"))))
        }
    });
    d.ready.promise = function(a) {
        Ia || (Ia = d.Deferred(), "complete" === z.readyState || "loading" !== z.readyState && !z.documentElement.doScroll ? g.setTimeout(d.ready) : (z.addEventListener("DOMContentLoaded", N), g.addEventListener("load", N)));
        return Ia.promise(a)
    };
    d.ready.promise();
    var da = function(a, b, c, e, f, h, k) {
            var g = 0,
                q = a.length,
                t = null == c;
            if ("object" === d.type(c))
                for (g in f = !0, c) da(a, b, g, c[g], !0, h, k);
            else if (void 0 !== e && (f = !0, d.isFunction(e) || (k = !0), t && (k ? (b.call(a, e), b = null) : (t = b, b = function(a, b, c) {
                    return t.call(d(a), c)
                })), b))
                for (; g < q; g++) b(a[g], c, k ? e : e.call(a[g], g, b(a[g], c)));
            return f ? a : t ? b.call(a) : q ? b(a[0], c) : h
        },
        ea = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };
    y.uid = 1;
    y.prototype = {
        register: function(a, b) {
            var c = b || {};
            a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            });
            return a[this.expando]
        },
        cache: function(a) {
            if (!ea(a)) return {};
            var b = a[this.expando];
            b || (b = {}, ea(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            })));
            return b
        },
        set: function(a, b, c) {
            var d;
            a = this.cache(a);
            if ("string" === typeof b) a[b] = c;
            else
                for (d in b) a[d] = b[d];
            return a
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            if (void 0 === b || b && "string" === typeof b && void 0 === c) return c = this.get(a, b), void 0 !== c ? c : this.get(a, d.camelCase(b));
            this.set(a, b, c);
            return void 0 !== c ? c : b
        },
        remove: function(a, b) {
            var c, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a);
                else
                    for (d.isArray(b) ? e = b.concat(b.map(d.camelCase)) : (c = d.camelCase(b), b in f ? e = [b, c] : (e = c, e = e in f ? [e] : e.match(P) || [])), c = e.length; c--;) delete f[e[c]];
                if (void 0 === b || d.isEmptyObject(f)) a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]
            }
        },
        hasData: function(a) {
            a = a[this.expando];
            return void 0 !== a && !d.isEmptyObject(a)
        }
    };
    var B = new y,
        I = new y,
        Gb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Xa = /[A-Z]/g;
    d.extend({
        hasData: function(a) {
            return I.hasData(a) || B.hasData(a)
        },
        data: function(a, b, c) {
            return I.access(a, b, c)
        },
        removeData: function(a, b) {
            I.remove(a, b)
        },
        _data: function(a, b, c) {
            return B.access(a, b, c)
        },
        _removeData: function(a, b) {
            B.remove(a, b)
        }
    });
    d.fn.extend({
        data: function(a, b) {
            var c, e, f, h = this[0],
                k = h && h.attributes;
            if (void 0 === a) {
                if (this.length && (f = I.get(h), 1 === h.nodeType && !B.get(h, "hasDataAttrs"))) {
                    for (c = k.length; c--;) k[c] && (e = k[c].name, 0 === e.indexOf("data-") && (e = d.camelCase(e.slice(5)), n(h, e, f[e])));
                    B.set(h, "hasDataAttrs", !0)
                }
                return f
            }
            return "object" === typeof a ? this.each(function() {
                I.set(this, a)
            }) : da(this, function(b) {
                var c, e;
                if (h && void 0 === b) {
                    c = I.get(h, a) || I.get(h, a.replace(Xa, "-$&").toLowerCase());
                    if (void 0 !== c) return c;
                    e = d.camelCase(a);
                    c = I.get(h, e);
                    if (void 0 !== c) return c;
                    c = n(h, e, void 0);
                    if (void 0 !== c) return c
                } else e = d.camelCase(a), this.each(function() {
                    var c = I.get(this, e);
                    I.set(this, e, b); - 1 < a.indexOf("-") && void 0 !== c && I.set(this, a, b)
                })
            }, null, b, 1 < arguments.length, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                I.remove(this, a)
            })
        }
    });
    d.extend({
        queue: function(a, b, c) {
            var e;
            if (a) return b = (b || "fx") + "queue", e = B.get(a, b), c && (!e || d.isArray(c) ? e = B.access(a, b, d.makeArray(c)) : e.push(c)), e || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = d.queue(a, b),
                e = c.length,
                f = c.shift(),
                h = d._queueHooks(a, b),
                k = function() {
                    d.dequeue(a, b)
                };
            "inprogress" === f && (f = c.shift(), e--);
            f && ("fx" === b && c.unshift("inprogress"), delete h.stop, f.call(a, k, h));
            !e && h && h.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return B.get(a, c) || B.access(a, c, {
                empty: d.Callbacks("once memory").add(function() {
                    B.remove(a, [b + "queue", c])
                })
            })
        }
    });
    d.fn.extend({
        queue: function(a, b) {
            var c = 2;
            "string" !== typeof a && (b = a, a = "fx", c--);
            return arguments.length < c ? d.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = d.queue(this, a, b);
                d._queueHooks(this, a);
                "fx" === a && "inprogress" !== c[0] && d.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                d.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, e = 1,
                f = d.Deferred(),
                h = this,
                k = this.length,
                g = function() {
                    --e || f.resolveWith(h, [h])
                };
            "string" !== typeof a && (b = a, a = void 0);
            for (a = a || "fx"; k--;)(c = B.get(h[k], a + "queueHooks")) && c.empty && (e++, c.empty.add(g));
            g();
            return f.promise(b)
        }
    });
    var tb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        fa = new RegExp("^(?:([+-])=|)(" + tb + ")([a-z%]*)$", "i"),
        ha = ["Top", "Right", "Bottom", "Left"],
        va = function(a, b) {
            a = b || a;
            return "none" === d.css(a, "display") || !d.contains(a.ownerDocument, a)
        },
        ub = /^(?:checkbox|radio)$/i,
        Ya = /<([\w:-]+)/,
        Za = /^$|\/(?:java|ecma)script/i,
        S = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    S.optgroup = S.option;
    S.tbody = S.tfoot = S.colgroup = S.caption = S.thead;
    S.th = S.td;
    var Hb = /<|&#?\w+;/;
    (function() {
        var a = z.createDocumentFragment().appendChild(z.createElement("div")),
            b = z.createElement("input");
        b.setAttribute("type", "radio");
        b.setAttribute("checked", "checked");
        b.setAttribute("name", "t");
        a.appendChild(b);
        F.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
        a.innerHTML = "<textarea>x</textarea>";
        F.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue
    })();
    var Xb = /^key/,
        Yb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        vb = /^([^.]*)(?:\.(.+)|)/;
    d.event = {
        global: {},
        add: function(a, b, c, e, f) {
            var h, k, g, q, t, n, m, l, r;
            if (t = B.get(a))
                for (c.handler && (h = c, c = h.handler, f = h.selector), c.guid || (c.guid = d.guid++), (q = t.events) || (q = t.events = {}), (k = t.handle) || (k = t.handle = function(b) {
                        return "undefined" !== typeof d && d.event.triggered !== b.type ? d.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(P) || [""], t = b.length; t--;) g = vb.exec(b[t]) || [], l = n = g[1], r = (g[2] || "").split(".").sort(), l && (g = d.event.special[l] || {}, l = (f ? g.delegateType : g.bindType) || l, g = d.event.special[l] || {}, n = d.extend({
                    type: l,
                    origType: n,
                    data: e,
                    handler: c,
                    guid: c.guid,
                    selector: f,
                    needsContext: f && d.expr.match.needsContext.test(f),
                    namespace: r.join(".")
                }, h), (m = q[l]) || (m = q[l] = [], m.delegateCount = 0, g.setup && !1 !== g.setup.call(a, e, r, k) || a.addEventListener && a.addEventListener(l, k)), g.add && (g.add.call(a, n), n.handler.guid || (n.handler.guid = c.guid)), f ? m.splice(m.delegateCount++, 0, n) : m.push(n), d.event.global[l] = !0)
        },
        remove: function(a, b, c, e, f) {
            var h, k, g, q, t, n, m, l, r, x, E, v = B.hasData(a) && B.get(a);
            if (v && (q = v.events)) {
                b = (b || "").match(P) || [""];
                for (t = b.length; t--;)
                    if (g = vb.exec(b[t]) || [], r = E = g[1], x = (g[2] || "").split(".").sort(), r) {
                        m = d.event.special[r] || {};
                        r = (e ? m.delegateType : m.bindType) || r;
                        l = q[r] || [];
                        g = g[2] && new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (k = h = l.length; h--;) n = l[h], !f && E !== n.origType || c && c.guid !== n.guid || g && !g.test(n.namespace) || e && e !== n.selector && ("**" !== e || !n.selector) || (l.splice(h, 1), n.selector && l.delegateCount--, m.remove && m.remove.call(a, n));
                        k && !l.length && (m.teardown && !1 !== m.teardown.call(a, x, v.handle) || d.removeEvent(a, r, v.handle), delete q[r])
                    } else
                        for (r in q) d.event.remove(a, r + b[t], c, e, !0);
                d.isEmptyObject(q) && B.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = d.event.fix(a);
            var b, c, e, f, h, k = O.call(arguments);
            b = (B.get(this, "events") || {})[a.type] || [];
            var g = d.event.special[a.type] || {};
            k[0] = a;
            a.delegateTarget = this;
            if (!g.preDispatch || !1 !== g.preDispatch.call(this, a)) {
                h = d.event.handlers.call(this, a, b);
                for (b = 0;
                    (f = h[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = f.elem, c = 0;
                        (e = f.handlers[c++]) && !a.isImmediatePropagationStopped();)
                        if (!a.rnamespace || a.rnamespace.test(e.namespace)) a.handleObj = e, a.data = e.data, e = ((d.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, k), void 0 !== e && !1 === (a.result = e) && (a.preventDefault(), a.stopPropagation());
                g.postDispatch && g.postDispatch.call(this, a);
                return a.result
            }
        },
        handlers: function(a, b) {
            var c, e, f, h, k = [],
                g = b.delegateCount,
                q = a.target;
            if (g && q.nodeType && ("click" !== a.type || isNaN(a.button) || 1 > a.button))
                for (; q !== this; q = q.parentNode || this)
                    if (1 === q.nodeType && (!0 !== q.disabled || "click" !== a.type)) {
                        e = [];
                        for (c = 0; c < g; c++) h = b[c], f = h.selector + " ", void 0 === e[f] && (e[f] = h.needsContext ? -1 < d(f, this).index(q) : d.find(f, this, null, [q]).length), e[f] && e.push(h);
                        e.length && k.push({
                            elem: q,
                            handlers: e
                        })
                    }
            g < b.length && k.push({
                elem: this,
                handlers: b.slice(g)
            });
            return k
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, b) {
                null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, f = b.button;
                null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || z, d = c.documentElement, c = c.body, a.pageX = b.clientX + (d && d.scrollLeft || c && c.scrollLeft || 0) - (d && d.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || c && c.scrollTop || 0) - (d && d.clientTop || c && c.clientTop || 0));
                a.which || void 0 === f || (a.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0);
                return a
            }
        },
        fix: function(a) {
            if (a[d.expando]) return a;
            var b, c, e;
            b = a.type;
            var f = a,
                h = this.fixHooks[b];
            h || (this.fixHooks[b] = h = Yb.test(b) ? this.mouseHooks : Xb.test(b) ? this.keyHooks : {});
            e = h.props ? this.props.concat(h.props) : this.props;
            a = new d.Event(f);
            for (b = e.length; b--;) c = e[b], a[c] = f[c];
            a.target || (a.target = z);
            3 === a.target.nodeType && (a.target = a.target.parentNode);
            return h.filter ? h.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== W() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === W() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && d.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(a) {
                    return d.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    };
    d.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    };
    d.Event = function(a, b) {
        if (!(this instanceof d.Event)) return new d.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? E : Y) : this.type = a;
        b && d.extend(this, b);
        this.timeStamp = a && a.timeStamp || d.now();
        this[d.expando] = !0
    };
    d.Event.prototype = {
        constructor: d.Event,
        isDefaultPrevented: Y,
        isPropagationStopped: Y,
        isImmediatePropagationStopped: Y,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = E;
            a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = E;
            a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = E;
            a && !this.isSimulated && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        d.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, f = a.relatedTarget,
                    h = a.handleObj;
                if (!f || f !== this && !d.contains(this, f)) a.type = h.origType, c = h.handler.apply(this, arguments), a.type = b;
                return c
            }
        }
    });
    d.fn.extend({
        on: function(a, b, c, d) {
            return J(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return J(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var e;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, d(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" === typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            if (!1 === b || "function" === typeof b) c = b, b = void 0;
            !1 === c && (c = Y);
            return this.each(function() {
                d.event.remove(this, a, c, b)
            })
        }
    });
    var Zb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        $b = /<script|<style|<link/i,
        Jb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ib = /^true\/(.*)/,
        Kb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    d.extend({
        htmlPrefilter: function(a) {
            return a.replace(Zb, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var e, f, h, g, p = a.cloneNode(!0),
                q = d.contains(a.ownerDocument, a);
            if (!(F.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || d.isXMLDoc(a)))
                for (g = r(p), h = r(a), e = 0, f = h.length; e < f; e++) {
                    var n = h[e],
                        l = g[e],
                        m = l.nodeName.toLowerCase();
                    if ("input" === m && ub.test(n.type)) l.checked = n.checked;
                    else if ("input" === m || "textarea" === m) l.defaultValue = n.defaultValue
                }
            if (b)
                if (c)
                    for (h = h || r(a), g = g || r(p), e = 0, f = h.length; e < f; e++) na(h[e], g[e]);
                else na(a, p);
            g = r(p, "script");
            0 < g.length && M(g, !q && r(a, "script"));
            return p
        },
        cleanData: function(a) {
            for (var b, c, e, f = d.event.special, h = 0; void 0 !== (c = a[h]); h++)
                if (ea(c)) {
                    if (b = c[B.expando]) {
                        if (b.events)
                            for (e in b.events) f[e] ? d.event.remove(c, e) : d.removeEvent(c, e, b.handle);
                        c[B.expando] = void 0
                    }
                    c[I.expando] && (c[I.expando] = void 0)
                }
        }
    });
    d.fn.extend({
        domManip: X,
        detach: function(a) {
            return ga(this, a, !0)
        },
        remove: function(a) {
            return ga(this, a)
        },
        text: function(a) {
            return da(this, function(a) {
                return void 0 === a ? d.text(this) : this.empty().each(function() {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) this.textContent = a
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return X(this, arguments, function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ca(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return X(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return X(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return X(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (d.cleanData(r(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            a = null == a ? !1 : a;
            b = null == b ? a : b;
            return this.map(function() {
                return d.clone(this, a, b)
            })
        },
        html: function(a) {
            return da(this, function(a) {
                var b = this[0] || {},
                    e = 0,
                    f = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" === typeof a && !$b.test(a) && !S[(Ya.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = d.htmlPrefilter(a);
                    try {
                        for (; e < f; e++) b = this[e] || {}, 1 === b.nodeType && (d.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (h) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return X(this, arguments, function(b) {
                var c = this.parentNode;
                0 > d.inArray(this, a) && (d.cleanData(r(this)), c && c.replaceChild(b, this))
            }, a)
        }
    });
    d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        d.fn[a] = function(a) {
            for (var c = [], f = d(a), h = f.length - 1, g = 0; g <= h; g++) a = g === h ? this : this.clone(!0), d(f[g])[b](a), Qa.apply(c, a.get());
            return this.pushStack(c)
        }
    });
    var Ea, bb = {
            HTML: "block",
            BODY: "block"
        },
        cb = /^margin/,
        La = new RegExp("^(" + tb + ")(?!px)[a-z%]+$", "i"),
        Fa = function(a) {
            var b = a.ownerDocument.defaultView;
            b && b.opener || (b = g);
            return b.getComputedStyle(a)
        },
        Ra = function(a, b, c, d) {
            var e, h = {};
            for (e in b) h[e] = a.style[e], a.style[e] = b[e];
            c = c.apply(a, d || []);
            for (e in b) a.style[e] = h[e];
            return c
        },
        xa = z.documentElement;
    (function() {
        function a() {
            k.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
            k.innerHTML = "";
            xa.appendChild(h);
            var a = g.getComputedStyle(k);
            b = "1%" !== a.top;
            f = "2px" === a.marginLeft;
            c = "4px" === a.width;
            k.style.marginRight = "50%";
            e = "4px" === a.marginRight;
            xa.removeChild(h)
        }
        var b, c, e, f, h = z.createElement("div"),
            k = z.createElement("div");
        k.style && (k.style.backgroundClip = "content-box", k.cloneNode(!0).style.backgroundClip = "", F.clearCloneStyle = "content-box" === k.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(k), d.extend(F, {
            pixelPosition: function() {
                a();
                return b
            },
            boxSizingReliable: function() {
                null == c && a();
                return c
            },
            pixelMarginRight: function() {
                null == c && a();
                return e
            },
            reliableMarginLeft: function() {
                null == c && a();
                return f
            },
            reliableMarginRight: function() {
                var a, b = k.appendChild(z.createElement("div"));
                b.style.cssText = k.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                b.style.marginRight = b.style.width = "0";
                k.style.width = "1px";
                xa.appendChild(h);
                a = !parseFloat(g.getComputedStyle(b).marginRight);
                xa.removeChild(h);
                k.removeChild(b);
                return a
            }
        }))
    })();
    var ac = /^(none|table(?!-c[ea]).+)/,
        bc = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        wb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        fb = ["Webkit", "O", "Moz", "ms"],
        eb = z.createElement("div").style;
    d.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = oa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, h, g, p = d.camelCase(b),
                    q = a.style;
                b = d.cssProps[p] || (d.cssProps[p] = db(p) || p);
                g = d.cssHooks[b] || d.cssHooks[p];
                if (void 0 !== c) h = typeof c, "string" === h && (f = fa.exec(c)) && f[1] && (c = x(a, b, f), h = "number"), null != c && c === c && ("number" === h && (c += f && f[3] || (d.cssNumber[p] ? "" : "px")), F.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (q[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, e)) || (q[b] = c));
                else return g && "get" in g && void 0 !== (f = g.get(a, !1, e)) ? f : q[b]
            }
        },
        css: function(a, b, c, e) {
            var f, h;
            h = d.camelCase(b);
            b = d.cssProps[h] || (d.cssProps[h] = db(h) || h);
            (h = d.cssHooks[b] || d.cssHooks[h]) && "get" in h && (f = h.get(a, !0, c));
            void 0 === f && (f = oa(a, b, e));
            "normal" === f && b in wb && (f = wb[b]);
            return "" === c || c ? (a = parseFloat(f), !0 === c || isFinite(a) ? a || 0 : f) : f
        }
    });
    d.each(["height", "width"], function(a, b) {
        d.cssHooks[b] = {
            get: function(a, e, f) {
                if (e) return ac.test(d.css(a, "display")) && 0 === a.offsetWidth ? Ra(a, bc, function() {
                    return ib(a, b, f)
                }) : ib(a, b, f)
            },
            set: function(a, e, f) {
                var c, g = f && Fa(a);
                (f = f && hb(a, b, f, "border-box" === d.css(a, "boxSizing", !1, g), g)) && (c = fa.exec(e)) && "px" !== (c[3] || "px") && (a.style[b] = e, e = d.css(a, b));
                return gb(a, e, f)
            }
        }
    });
    d.cssHooks.marginLeft = Ma(F.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(oa(a, "marginLeft")) || a.getBoundingClientRect().left - Ra(a, {
                marginLeft: 0
            }, function() {
                return a.getBoundingClientRect().left
            })) +
            "px"
    });
    d.cssHooks.marginRight = Ma(F.reliableMarginRight, function(a, b) {
        if (b) return Ra(a, {
            display: "inline-block"
        }, oa, [a, "marginRight"])
    });
    d.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        d.cssHooks[a + b] = {
            expand: function(c) {
                var d = 0,
                    f = {};
                for (c = "string" === typeof c ? c.split(" ") : [c]; 4 > d; d++) f[a + ha[d] + b] = c[d] || c[d - 2] || c[0];
                return f
            }
        };
        cb.test(a) || (d.cssHooks[a + b].set = gb)
    });
    d.fn.extend({
        css: function(a, b) {
            return da(this, function(a, b, f) {
                var c, e = {},
                    g = 0;
                if (d.isArray(b)) {
                    f = Fa(a);
                    for (c = b.length; g < c; g++) e[b[g]] = d.css(a, b[g], !1, f);
                    return e
                }
                return void 0 !== f ? d.style(a, b, f) : d.css(a, b)
            }, a, b, 1 < arguments.length)
        },
        show: function() {
            return jb(this, !0)
        },
        hide: function() {
            return jb(this)
        },
        toggle: function(a) {
            return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function() {
                va(this) ? d(this).show() : d(this).hide()
            })
        }
    });
    d.Tween = Q;
    Q.prototype = {
        constructor: Q,
        init: function(a, b, c, e, f, h) {
            this.elem = a;
            this.prop = c;
            this.easing = f || d.easing._default;
            this.options = b;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = h || (d.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Q.propHooks[this.prop];
            return a && a.get ? a.get(this) : Q.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Q.propHooks[this.prop];
            this.pos = this.options.duration ? b = d.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a;
            this.now = (this.end - this.start) * b + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            c && c.set ? c.set(this) : Q.propHooks._default.set(this);
            return this
        }
    };
    Q.prototype.init.prototype = Q.prototype;
    Q.propHooks = {
        _default: {
            get: function(a) {
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (a = d.css(a.elem, a.prop, "")) && "auto" !== a ? a : 0
            },
            set: function(a) {
                if (d.fx.step[a.prop]) d.fx.step[a.prop](a);
                else 1 !== a.elem.nodeType || null == a.elem.style[d.cssProps[a.prop]] && !d.cssHooks[a.prop] ? a.elem[a.prop] = a.now : d.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    };
    Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    d.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    };
    d.fx = Q.prototype.init;
    d.fx.step = {};
    var pa, Ja, cc = /^(?:toggle|show|hide)$/,
        dc = /queueHooks$/;
    d.Animation = d.extend(T, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                x(c.elem, a, fa.exec(b), c);
                return c
            }]
        },
        tweener: function(a, b) {
            d.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(P);
            for (var c, e = 0, f = a.length; e < f; e++) c = a[e], T.tweeners[c] = T.tweeners[c] || [], T.tweeners[c].unshift(b)
        },
        prefilters: [function(a, b, c) {
            var e, f, h, g, p, q, n = this,
                l = {},
                m = a.style,
                r = a.nodeType && va(a),
                x = B.get(a, "fxshow");
            c.queue || (g = d._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, p = g.empty.fire, g.empty.fire = function() {
                g.unqueued || p()
            }), g.unqueued++, n.always(function() {
                n.always(function() {
                    g.unqueued--;
                    d.queue(a, "fx").length || g.empty.fire()
                })
            }));
            1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], q = d.css(a, "display"), f = "none" === q ? B.get(a, "olddisplay") || Ka(a.nodeName) : q, "inline" === f && "none" === d.css(a, "float") && (m.display = "inline-block"));
            c.overflow && (m.overflow = "hidden", n.always(function() {
                m.overflow = c.overflow[0];
                m.overflowX = c.overflow[1];
                m.overflowY = c.overflow[2]
            }));
            for (e in b)
                if (f = b[e], cc.exec(f)) {
                    delete b[e];
                    h = h || "toggle" === f;
                    if (f === (r ? "hide" : "show"))
                        if ("show" === f && x && void 0 !== x[e]) r = !0;
                        else continue;
                    l[e] = x && x[e] || d.style(a, e)
                } else q = void 0;
            if (d.isEmptyObject(l)) "inline" === ("none" === q ? Ka(a.nodeName) : q) && (m.display = q);
            else
                for (e in x ? "hidden" in x && (r = x.hidden) : x = B.access(a, "fxshow", {}), h && (x.hidden = !r), r ? d(a).show() : n.done(function() {
                        d(a).hide()
                    }), n.done(function() {
                        var b;
                        B.remove(a, "fxshow");
                        for (b in l) d.style(a, b, l[b])
                    }), l) b = lb(r ? x[e] : 0, e, n), e in x || (x[e] = b.start, r && (b.end = b.start, b.start = "width" === e || "height" === e ? 1 : 0))
        }],
        prefilter: function(a, b) {
            b ? T.prefilters.unshift(a) : T.prefilters.push(a)
        }
    });
    d.speed = function(a, b, c) {
        var e = a && "object" === typeof a ? d.extend({}, a) : {
            complete: c || !c && b || d.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !d.isFunction(b) && b
        };
        e.duration = d.fx.off ? 0 : "number" === typeof e.duration ? e.duration : e.duration in d.fx.speeds ? d.fx.speeds[e.duration] : d.fx.speeds._default;
        if (null == e.queue || !0 === e.queue) e.queue = "fx";
        e.old = e.complete;
        e.complete = function() {
            d.isFunction(e.old) && e.old.call(this);
            e.queue && d.dequeue(this, e.queue)
        };
        return e
    };
    d.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(va).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, e) {
            var f = d.isEmptyObject(a),
                h = d.speed(b, c, e);
            b = function() {
                var b = T(this, d.extend({}, a), h);
                (f || B.get(this, "finish")) && b.stop(!0)
            };
            b.finish = b;
            return f || !1 === h.queue ? this.each(b) : this.queue(h.queue, b)
        },
        stop: function(a, b, c) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop;
                b(c)
            };
            "string" !== typeof a && (c = b, b = a, a = void 0);
            b && !1 !== a && this.queue(a || "fx", []);
            return this.each(function() {
                var b = !0,
                    h = null != a && a + "queueHooks",
                    g = d.timers,
                    p = B.get(this);
                if (h) p[h] && p[h].stop && e(p[h]);
                else
                    for (h in p) p[h] && p[h].stop && dc.test(h) && e(p[h]);
                for (h = g.length; h--;) g[h].elem !== this || null != a && g[h].queue !== a || (g[h].anim.stop(c), b = !1, g.splice(h, 1));
                !b && c || d.dequeue(this, a)
            })
        },
        finish: function(a) {
            !1 !== a && (a = a || "fx");
            return this.each(function() {
                var b, c = B.get(this),
                    e = c[a + "queue"];
                b = c[a + "queueHooks"];
                var f = d.timers,
                    h = e ? e.length : 0;
                c.finish = !0;
                d.queue(this, a, []);
                b && b.stop && b.stop.call(this, !0);
                for (b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; b < h; b++) e[b] && e[b].finish && e[b].finish.call(this);
                delete c.finish
            })
        }
    });
    d.each(["toggle", "show", "hide"], function(a, b) {
        var c = d.fn[b];
        d.fn[b] = function(a, d, h) {
            return null == a || "boolean" === typeof a ? c.apply(this, arguments) : this.animate(Ga(b, !0), a, d, h)
        }
    });
    d.each({
        slideDown: Ga("show"),
        slideUp: Ga("hide"),
        slideToggle: Ga("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        d.fn[a] = function(a, d, f) {
            return this.animate(b, a, d, f)
        }
    });
    d.timers = [];
    d.fx.tick = function() {
        var a, b = 0,
            c = d.timers;
        for (pa = d.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || d.fx.stop();
        pa = void 0
    };
    d.fx.timer = function(a) {
        d.timers.push(a);
        a() ? d.fx.start() : d.timers.pop()
    };
    d.fx.interval = 13;
    d.fx.start = function() {
        Ja || (Ja = g.setInterval(d.fx.tick, d.fx.interval))
    };
    d.fx.stop = function() {
        g.clearInterval(Ja);
        Ja = null
    };
    d.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    d.fn.delay = function(a, b) {
        a = d.fx ? d.fx.speeds[a] || a : a;
        return this.queue(b || "fx", function(b, d) {
            var c = g.setTimeout(b, a);
            d.stop = function() {
                g.clearTimeout(c)
            }
        })
    };
    (function() {
        var a = z.createElement("input"),
            b = z.createElement("select"),
            c = b.appendChild(z.createElement("option"));
        a.type = "checkbox";
        F.checkOn = "" !== a.value;
        F.optSelected = c.selected;
        b.disabled = !0;
        F.optDisabled = !c.disabled;
        a = z.createElement("input");
        a.value = "t";
        a.type = "radio";
        F.radioValue = "t" === a.value
    })();
    var xb, ma = d.expr.attrHandle;
    d.fn.extend({
        attr: function(a, b) {
            return da(this, d.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                d.removeAttr(this, a)
            })
        }
    });
    d.extend({
        attr: function(a, b, c) {
            var e, f, h = a.nodeType;
            if (3 !== h && 8 !== h && 2 !== h) {
                if ("undefined" === typeof a.getAttribute) return d.prop(a, b, c);
                1 === h && d.isXMLDoc(a) || (b = b.toLowerCase(), f = d.attrHooks[b] || (d.expr.match.bool.test(b) ? xb : void 0));
                if (void 0 !== c) {
                    if (null === c) {
                        d.removeAttr(a, b);
                        return
                    }
                    if (f && "set" in f && void 0 !== (e = f.set(a, c, b))) return e;
                    a.setAttribute(b, c + "");
                    return c
                }
                if (f && "get" in f && null !== (e = f.get(a, b))) return e;
                e = d.find.attr(a, b);
                return null == e ? void 0 : e
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!F.radioValue && "radio" === b && d.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b);
                        c && (a.value = c);
                        return b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, e, f = 0,
                h = b && b.match(P);
            if (h && 1 === a.nodeType)
                for (; c = h[f++];) e = d.propFix[c] || c, d.expr.match.bool.test(c) && (a[e] = !1), a.removeAttribute(c)
        }
    });
    xb = {
        set: function(a, b, c) {
            !1 === b ? d.removeAttr(a, c) : a.setAttribute(c, c);
            return c
        }
    };
    d.each(d.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = ma[b] || d.find.attr;
        ma[b] = function(a, b, d) {
            var e, f;
            d || (f = ma[b], ma[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ma[b] = f);
            return e
        }
    });
    var ec = /^(?:input|select|textarea|button)$/i,
        fc = /^(?:a|area)$/i;
    d.fn.extend({
        prop: function(a, b) {
            return da(this, d.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[d.propFix[a] || a]
            })
        }
    });
    d.extend({
        prop: function(a, b, c) {
            var e, f, h = a.nodeType;
            if (3 !== h && 8 !== h && 2 !== h) return 1 === h && d.isXMLDoc(a) || (b = d.propFix[b] || b, f = d.propHooks[b]), void 0 !== c ? f && "set" in f && void 0 !== (e = f.set(a, c, b)) ? e : a[b] = c : f && "get" in f && null !== (e = f.get(a, b)) ? e : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = d.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : ec.test(a.nodeName) || fc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    F.optSelected || (d.propHooks.selected = {
        get: function(a) {
            (a = a.parentNode) && a.parentNode && a.parentNode.selectedIndex;
            return null
        },
        set: function(a) {
            if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex
        }
    });
    d.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        d.propFix[this.toLowerCase()] = this
    });
    var Sa = /[\t\r\n\f]/g;
    d.fn.extend({
        addClass: function(a) {
            var b, c, e, f, h, g, p = 0;
            if (d.isFunction(a)) return this.each(function(b) {
                d(this).addClass(a.call(this, b, U(this)))
            });
            if ("string" === typeof a && a)
                for (b = a.match(P) || []; c = this[p++];)
                    if (f = U(c), e = 1 === c.nodeType && (" " + f + " ").replace(Sa, " ")) {
                        for (g = 0; h = b[g++];) 0 > e.indexOf(" " + h + " ") && (e += h + " ");
                        e = d.trim(e);
                        f !== e && c.setAttribute("class", e)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, e, f, h, g, p = 0;
            if (d.isFunction(a)) return this.each(function(b) {
                d(this).removeClass(a.call(this, b, U(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" === typeof a && a)
                for (b = a.match(P) || []; c = this[p++];)
                    if (f = U(c), e = 1 === c.nodeType && (" " + f + " ").replace(Sa, " ")) {
                        for (g = 0; h = b[g++];)
                            for (; - 1 < e.indexOf(" " + h + " ");) e = e.replace(" " + h + " ", " ");
                        e = d.trim(e);
                        f !== e && c.setAttribute("class", e)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" === typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : d.isFunction(a) ? this.each(function(c) {
                d(this).toggleClass(a.call(this, c, U(this), b), b)
            }) : this.each(function() {
                var b, f, h, g;
                if ("string" === c)
                    for (f = 0, h = d(this), g = a.match(P) || []; b = g[f++];) h.hasClass(b) ? h.removeClass(b) : h.addClass(b);
                else if (void 0 === a || "boolean" === c)(b = U(this)) && B.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : B.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            var b, c = 0;
            for (a = " " + a + " "; b = this[c++];)
                if (1 === b.nodeType && -1 < (" " + U(b) + " ").replace(Sa, " ").indexOf(a)) return !0;
            return !1
        }
    });
    var gc = /\r/g,
        hc = /[\x20\t\r\n\f]+/g;
    d.fn.extend({
        val: function(a) {
            var b, c, e, f = this[0];
            if (arguments.length) return e = d.isFunction(a), this.each(function(c) {
                1 === this.nodeType && (c = e ? a.call(this, c, d(this).val()) : a, null == c ? c = "" : "number" === typeof c ? c += "" : d.isArray(c) && (c = d.map(c, function(a) {
                    return null == a ? "" : a + ""
                })), b = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, c, "value") || (this.value = c))
            });
            if (f) {
                if ((b = d.valHooks[f.type] || d.valHooks[f.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(f, "value"))) return c;
                c = f.value;
                return "string" === typeof c ? c.replace(gc, "") : null == c ? "" : c
            }
        }
    });
    d.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = d.find.attr(a, "value");
                    return null != b ? b : d.trim(d.text(a)).replace(hc, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c = a.options, e = a.selectedIndex, f = (a = "select-one" === a.type || 0 > e) ? null : [], h = a ? e + 1 : c.length, g = 0 > e ? h : a ? e : 0; g < h; g++)
                        if (b = c[g], !(!b.selected && g !== e || (F.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && d.nodeName(b.parentNode, "optgroup"))) {
                            b = d(b).val();
                            if (a) return b;
                            f.push(b)
                        }
                    return f
                },
                set: function(a, b) {
                    for (var c, e, f = a.options, h = d.makeArray(b), g = f.length; g--;)
                        if (e = f[g], e.selected = -1 < d.inArray(d.valHooks.option.get(e), h)) c = !0;
                    c || (a.selectedIndex = -1);
                    return h
                }
            }
        }
    });
    d.each(["radio", "checkbox"], function() {
        d.valHooks[this] = {
            set: function(a, b) {
                if (d.isArray(b)) return a.checked = -1 < d.inArray(d(a).val(), b)
            }
        };
        F.checkOn || (d.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var yb = /^(?:focusinfocus|focusoutblur)$/;
    d.extend(d.event, {
        trigger: function(a, b, c, e) {
            var f, h, k, p, n, l, r = [c || z],
                m = wa.call(a, "type") ? a.type : a;
            l = wa.call(a, "namespace") ? a.namespace.split(".") : [];
            h = f = c = c || z;
            if (3 !== c.nodeType && 8 !== c.nodeType && !yb.test(m + d.event.triggered) && (-1 < m.indexOf(".") && (l = m.split("."), m = l.shift(), l.sort()), p = 0 > m.indexOf(":") && "on" + m, a = a[d.expando] ? a : new d.Event(m, "object" === typeof a && a), a.isTrigger = e ? 2 : 3, a.namespace = l.join("."), a.rnamespace = a.namespace ? new RegExp("(^|\\.)" + l.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = c), b = null == b ? [a] : d.makeArray(b, [a]), l = d.event.special[m] || {}, e || !l.trigger || !1 !== l.trigger.apply(c, b))) {
                if (!e && !l.noBubble && !d.isWindow(c)) {
                    k = l.delegateType || m;
                    yb.test(k + m) || (h = h.parentNode);
                    for (; h; h = h.parentNode) r.push(h), f = h;
                    f === (c.ownerDocument || z) && r.push(f.defaultView || f.parentWindow || g)
                }
                for (f = 0;
                    (h = r[f++]) && !a.isPropagationStopped();) a.type = 1 < f ? k : l.bindType || m, (n = (B.get(h, "events") || {})[a.type] && B.get(h, "handle")) && n.apply(h, b), (n = p && h[p]) && n.apply && ea(h) && (a.result = n.apply(h, b), !1 === a.result && a.preventDefault());
                a.type = m;
                e || a.isDefaultPrevented() || l._default && !1 !== l._default.apply(r.pop(), b) || !ea(c) || !p || !d.isFunction(c[m]) || d.isWindow(c) || ((f = c[p]) && (c[p] = null), d.event.triggered = m, c[m](), d.event.triggered = void 0, f && (c[p] = f));
                return a.result
            }
        },
        simulate: function(a, b, c) {
            a = d.extend(new d.Event, c, {
                type: a,
                isSimulated: !0
            });
            d.event.trigger(a, null, b)
        }
    });
    d.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                d.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return d.event.trigger(a, b, c, !0)
        }
    });
    d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        d.fn[b] = function(a, d) {
            return 0 < arguments.length ? this.on(b, null, a, d) : this.trigger(b)
        }
    });
    d.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    F.focusin = "onfocusin" in g;
    F.focusin || d.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            d.event.simulate(b, a.target, d.event.fix(a))
        };
        d.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    f = B.access(d, b);
                f || d.addEventListener(a, c, !0);
                B.access(d, b, (f || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    f = B.access(d, b) - 1;
                f ? B.access(d, b, f) : (d.removeEventListener(a, c, !0), B.remove(d, b))
            }
        }
    });
    var ya = g.location,
        Ta = d.now(),
        Ua = /\?/;
    d.parseJSON = function(a) {
        return JSON.parse(a + "")
    };
    d.parseXML = function(a) {
        var b;
        if (!a || "string" !== typeof a) return null;
        try {
            b = (new g.DOMParser).parseFromString(a, "text/xml")
        } catch (c) {
            b = void 0
        }
        b && !b.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + a);
        return b
    };
    var ic = /#.*$/,
        zb = /([?&])_=[^&]*/,
        jc = /^(.*?):[ \t]*([^\r\n]*)$/mg,
        kc = /^(?:GET|HEAD)$/,
        lc = /^\/\//,
        Ab = {},
        Na = {},
        Bb = "*/".concat("*"),
        Va = z.createElement("a");
    Va.href = ya.href;
    d.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ya.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ya.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Oa(Oa(a, d.ajaxSettings), b) : Oa(d.ajaxSettings, a)
        },
        ajaxPrefilter: mb(Ab),
        ajaxTransport: mb(Na),
        ajax: function(a, b) {
            function c(a, b, c, k) {
                var n, q, r, t;
                t = b;
                if (2 !== F) {
                    F = 2;
                    p && g.clearTimeout(p);
                    e = void 0;
                    h = k || "";
                    u.readyState = 0 < a ? 4 : 0;
                    k = 200 <= a && 300 > a || 304 === a;
                    if (c) {
                        r = m;
                        for (var z = u, C, M, D, y, J = r.contents, G = r.dataTypes;
                            "*" === G[0];) G.shift(), void 0 === C && (C = r.mimeType || z.getResponseHeader("Content-Type"));
                        if (C)
                            for (M in J)
                                if (J[M] && J[M].test(C)) {
                                    G.unshift(M);
                                    break
                                }
                        if (G[0] in c) D = G[0];
                        else {
                            for (M in c) {
                                if (!G[0] || r.converters[M + " " + G[0]]) {
                                    D = M;
                                    break
                                }
                                y || (y = M)
                            }
                            D = D || y
                        }
                        D ? (D !== G[0] && G.unshift(D), r = c[D]) : r = void 0
                    }
                    a: {
                        c = m;C = r;M = u;D = k;
                        var V, H, I, z = {},
                            J = c.dataTypes.slice();
                        if (J[1])
                            for (H in c.converters) z[H.toLowerCase()] = c.converters[H];
                        for (y = J.shift(); y;)
                            if (c.responseFields[y] && (M[c.responseFields[y]] = C), !I && D && c.dataFilter && (C = c.dataFilter(C, c.dataType)), I = y, y = J.shift())
                                if ("*" === y) y = I;
                                else if ("*" !== I && I !== y) {
                            H = z[I + " " + y] || z["* " + y];
                            if (!H)
                                for (V in z)
                                    if (r = V.split(" "), r[1] === y && (H = z[I + " " + r[0]] || z["* " + r[0]])) {
                                        !0 === H ? H = z[V] : !0 !== z[V] && (y = r[0], J.unshift(r[1]));
                                        break
                                    }
                            if (!0 !== H)
                                if (H && c["throws"]) C = H(C);
                                else try {
                                    C = H(C)
                                } catch (Tb) {
                                    r = {
                                        state: "parsererror",
                                        error: H ? Tb : "No conversion from " + I + " to " + y
                                    };
                                    break a
                                }
                        }
                        r = {
                            state: "success",
                            data: C
                        }
                    }
                    if (k) m.ifModified && ((t = u.getResponseHeader("Last-Modified")) && (d.lastModified[f] = t), (t = u.getResponseHeader("etag")) && (d.etag[f] = t)), 204 === a || "HEAD" === m.type ? t = "nocontent" : 304 === a ? t = "notmodified" : (t = r.state, n = r.data, q = r.error, k = !q);
                    else if (q = t, a || !t) t = "error", 0 > a && (a = 0);
                    u.status = a;
                    u.statusText = (b || t) + "";
                    k ? v.resolveWith(x, [n, t, u]) : v.rejectWith(x, [u, t, q]);
                    u.statusCode(A);
                    A = void 0;
                    l && E.trigger(k ? "ajaxSuccess" : "ajaxError", [u, m, k ? n : q]);
                    B.fireWith(x, [u, t]);
                    l && (E.trigger("ajaxComplete", [u, m]), --d.active || d.event.trigger("ajaxStop"))
                }
            }
            "object" === typeof a && (b = a, a = void 0);
            b = b || {};
            var e, f, h, k, p, n, l, r, m = d.ajaxSetup({}, b),
                x = m.context || m,
                E = m.context && (x.nodeType || x.jquery) ? d(x) : d.event,
                v = d.Deferred(),
                B = d.Callbacks("once memory"),
                A = m.statusCode || {},
                M = {},
                y = {},
                F = 0,
                J = "canceled",
                u = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === F) {
                            if (!k)
                                for (k = {}; b = jc.exec(h);) k[b[1].toLowerCase()] = b[2];
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === F ? h : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        F || (a = y[c] = y[c] || a, M[a] = b);
                        return this
                    },
                    overrideMimeType: function(a) {
                        F || (m.mimeType = a);
                        return this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > F)
                                for (b in a) A[b] = [A[b], a[b]];
                            else u.always(a[u.status]);
                        return this
                    },
                    abort: function(a) {
                        a = a || J;
                        e && e.abort(a);
                        c(0, a);
                        return this
                    }
                };
            v.promise(u).complete = B.add;
            u.success = u.done;
            u.error = u.fail;
            m.url = ((a || m.url || ya.href) + "").replace(ic, "").replace(lc, ya.protocol + "//");
            m.type = b.method || b.type || m.method || m.type;
            m.dataTypes = d.trim(m.dataType || "*").toLowerCase().match(P) || [""];
            if (null == m.crossDomain) {
                n = z.createElement("a");
                try {
                    n.href = m.url, n.href = n.href, m.crossDomain = Va.protocol + "//" + Va.host !== n.protocol + "//" + n.host
                } catch (V) {
                    m.crossDomain = !0
                }
            }
            m.data && m.processData && "string" !== typeof m.data && (m.data = d.param(m.data, m.traditional));
            nb(Ab, m, b, u);
            if (2 === F) return u;
            (l = d.event && m.global) && 0 === d.active++ && d.event.trigger("ajaxStart");
            m.type = m.type.toUpperCase();
            m.hasContent = !kc.test(m.type);
            f = m.url;
            m.hasContent || (m.data && (f = m.url += (Ua.test(f) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = zb.test(f) ? f.replace(zb, "$1_=" + Ta++) : f + (Ua.test(f) ? "&" : "?") + "_=" + Ta++));
            m.ifModified && (d.lastModified[f] && u.setRequestHeader("If-Modified-Since", d.lastModified[f]), d.etag[f] && u.setRequestHeader("If-None-Match", d.etag[f]));
            (m.data && m.hasContent && !1 !== m.contentType || b.contentType) && u.setRequestHeader("Content-Type", m.contentType);
            u.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Bb + "; q=0.01" : "") : m.accepts["*"]);
            for (r in m.headers) u.setRequestHeader(r, m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(x, u, m) || 2 === F)) return u.abort();
            J = "abort";
            for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) u[r](m[r]);
            if (e = nb(Na, m, b, u)) {
                u.readyState = 1;
                l && E.trigger("ajaxSend", [u, m]);
                if (2 === F) return u;
                m.async && 0 < m.timeout && (p = g.setTimeout(function() {
                    u.abort("timeout")
                }, m.timeout));
                try {
                    F = 1, e.send(M, c)
                } catch (V) {
                    if (2 > F) c(-1, V);
                    else throw V;
                }
            } else c(-1, "No Transport");
            return u
        },
        getJSON: function(a, b, c) {
            return d.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return d.get(a, void 0, b, "script")
        }
    });
    d.each(["get", "post"], function(a, b) {
        d[b] = function(a, e, f, h) {
            d.isFunction(e) && (h = h || f, f = e, e = void 0);
            return d.ajax(d.extend({
                url: a,
                type: b,
                dataType: h,
                data: e,
                success: f
            }, d.isPlainObject(a) && a))
        }
    });
    d._evalUrl = function(a) {
        return d.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    d.fn.extend({
        wrapAll: function(a) {
            var b;
            if (d.isFunction(a)) return this.each(function(b) {
                d(this).wrapAll(a.call(this, b))
            });
            this[0] && (b = d(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this));
            return this
        },
        wrapInner: function(a) {
            return d.isFunction(a) ? this.each(function(b) {
                d(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = d(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = d.isFunction(a);
            return this.each(function(c) {
                d(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    d.expr.filters.hidden = function(a) {
        return !d.expr.filters.visible(a)
    };
    d.expr.filters.visible = function(a) {
        return 0 < a.offsetWidth || 0 < a.offsetHeight || 0 < a.getClientRects().length
    };
    var mc = /%20/g,
        Mb = /\[\]$/,
        Cb = /\r?\n/g,
        nc = /^(?:submit|button|image|reset|file)$/i,
        oc = /^(?:input|select|textarea|keygen)/i;
    d.param = function(a, b) {
        var c, e = [],
            f = function(a, b) {
                b = d.isFunction(b) ? b() : null == b ? "" : b;
                e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        void 0 === b && (b = d.ajaxSettings && d.ajaxSettings.traditional);
        if (d.isArray(a) || a.jquery && !d.isPlainObject(a)) d.each(a, function() {
            f(this.name, this.value)
        });
        else
            for (c in a) Pa(c, a[c], b, f);
        return e.join("&").replace(mc, "+")
    };
    d.fn.extend({
        serialize: function() {
            return d.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = d.prop(this, "elements");
                return a ? d.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !d(this).is(":disabled") && oc.test(this.nodeName) && !nc.test(a) && (this.checked || !ub.test(a))
            }).map(function(a, b) {
                var c = d(this).val();
                return null == c ? null : d.isArray(c) ? d.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Cb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Cb, "\r\n")
                }
            }).get()
        }
    });
    d.ajaxSettings.xhr = function() {
        try {
            return new g.XMLHttpRequest
        } catch (a) {}
    };
    var pc = {
            0: 200,
            1223: 204
        },
        ua = d.ajaxSettings.xhr();
    F.cors = !!ua && "withCredentials" in ua;
    F.ajax = ua = !!ua;
    d.ajaxTransport(function(a) {
        var b, c;
        if (F.cors || ua && !a.crossDomain) return {
            send: function(d, f) {
                var e, k = a.xhr();
                k.open(a.type, a.url, a.async, a.username, a.password);
                if (a.xhrFields)
                    for (e in a.xhrFields) k[e] = a.xhrFields[e];
                a.mimeType && k.overrideMimeType && k.overrideMimeType(a.mimeType);
                a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                for (e in d) k.setRequestHeader(e, d[e]);
                b = function(a) {
                    return function() {
                        b && (b = c = k.onload = k.onerror = k.onabort = k.onreadystatechange = null, "abort" === a ? k.abort() : "error" === a ? "number" !== typeof k.status ? f(0, "error") : f(k.status, k.statusText) : f(pc[k.status] || k.status, k.statusText, "text" !== (k.responseType || "text") || "string" !== typeof k.responseText ? {
                            binary: k.response
                        } : {
                            text: k.responseText
                        }, k.getAllResponseHeaders()))
                    }
                };
                k.onload = b();
                c = k.onerror = b("error");
                void 0 !== k.onabort ? k.onabort = c : k.onreadystatechange = function() {
                    4 === k.readyState && g.setTimeout(function() {
                        b && c()
                    })
                };
                b = b("abort");
                try {
                    k.send(a.hasContent && a.data || null)
                } catch (p) {
                    if (b) throw p;
                }
            },
            abort: function() {
                b && b()
            }
        }
    });
    d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                d.globalEval(a);
                return a
            }
        }
    });
    d.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET")
    });
    d.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = d("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove();
                        c = null;
                        a && f("error" === a.type ? 404 : 200, a.type)
                    });
                    z.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Db = [],
        Wa = /(=)\?(?=&|$)|\?\?/;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Db.pop() || d.expando + "_" + Ta++;
            this[a] = !0;
            return a
        }
    });
    d.ajaxPrefilter("json jsonp", function(a, b, c) {
        var e, f, h, k = !1 !== a.jsonp && (Wa.test(a.url) ? "url" : "string" === typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && Wa.test(a.data) && "data");
        if (k || "jsonp" === a.dataTypes[0]) return e = a.jsonpCallback = d.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, k ? a[k] = a[k].replace(Wa, "$1" + e) : !1 !== a.jsonp && (a.url += (Ua.test(a.url) ? "&" : "?") + a.jsonp + "=" + e), a.converters["script json"] = function() {
            h || d.error(e + " was not called");
            return h[0]
        }, a.dataTypes[0] = "json", f = g[e], g[e] = function() {
            h = arguments
        }, c.always(function() {
            void 0 === f ? d(g).removeProp(e) : g[e] = f;
            a[e] && (a.jsonpCallback = b.jsonpCallback, Db.push(e));
            h && d.isFunction(f) && f(h[0]);
            h = f = void 0
        }), "script"
    });
    d.parseHTML = function(a, b, c) {
        if (!a || "string" !== typeof a) return null;
        "boolean" === typeof b && (c = b, b = !1);
        b = b || z;
        var e = rb.exec(a);
        c = !c && [];
        if (e) return [b.createElement(e[1])];
        e = Aa([a], b, c);
        c && c.length && d(c).remove();
        return d.merge([], e.childNodes)
    };
    var Eb = d.fn.load;
    d.fn.load = function(a, b, c) {
        if ("string" !== typeof a && Eb) return Eb.apply(this, arguments);
        var e, f, h, g = this,
            p = a.indexOf(" "); - 1 < p && (e = d.trim(a.slice(p)), a = a.slice(0, p));
        d.isFunction(b) ? (c = b, b = void 0) : b && "object" === typeof b && (f = "POST");
        0 < g.length && d.ajax({
            url: a,
            type: f || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            h = arguments;
            g.html(e ? d("<div>").append(d.parseHTML(a)).find(e) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, h || [a.responseText, b, a])
            })
        });
        return this
    };
    d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        d.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    d.expr.filters.animated = function(a) {
        return d.grep(d.timers, function(b) {
            return a === b.elem
        }).length
    };
    d.offset = {
        setOffset: function(a, b, c) {
            var e, f, h, g = d.css(a, "position"),
                p = d(a),
                n = {};
            "static" === g && (a.style.position = "relative");
            h = p.offset();
            f = d.css(a, "top");
            e = d.css(a, "left");
            ("absolute" === g || "fixed" === g) && -1 < (f + e).indexOf("auto") ? (e = p.position(), f = e.top, e = e.left) : (f = parseFloat(f) || 0, e = parseFloat(e) || 0);
            d.isFunction(b) && (b = b.call(a, c, d.extend({}, h)));
            null != b.top && (n.top = b.top - h.top + f);
            null != b.left && (n.left = b.left - h.left + e);
            "using" in b ? b.using.call(a, n) : p.css(n)
        }
    };
    d.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                d.offset.setOffset(this, a, b)
            });
            var b, c;
            c = this[0];
            var e = {
                    top: 0,
                    left: 0
                },
                f = c && c.ownerDocument;
            if (f) {
                b = f.documentElement;
                if (!d.contains(b, c)) return e;
                e = c.getBoundingClientRect();
                c = ob(f);
                return {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    e = {
                        top: 0,
                        left: 0
                    };
                "fixed" === d.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), d.nodeName(a[0], "html") || (e = a.offset()), e.top += d.css(a[0], "borderTopWidth", !0), e.left += d.css(a[0], "borderLeftWidth", !0));
                return {
                    top: b.top - e.top - d.css(c, "marginTop", !0),
                    left: b.left - e.left - d.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && "static" === d.css(a, "position");) a = a.offsetParent;
                return a || xa
            })
        }
    });
    d.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        d.fn[a] = function(d) {
            return da(this, function(a, d, e) {
                var f = ob(a);
                if (void 0 === e) return f ? f[b] : a[d];
                f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e
            }, a, d, arguments.length)
        }
    });
    d.each(["top", "left"], function(a, b) {
        d.cssHooks[b] = Ma(F.pixelPosition, function(a, e) {
            if (e) return e = oa(a, b), La.test(e) ? d(a).position()[b] + "px" : e
        })
    });
    d.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        d.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, e) {
            d.fn[e] = function(e, h) {
                var f = arguments.length && (c || "boolean" !== typeof e),
                    g = c || (!0 === e || !0 === h ? "margin" : "border");
                return da(this, function(b, c, e) {
                    return d.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (c = b.documentElement, Math.max(b.body["scroll" + a], c["scroll" + a], b.body["offset" + a], c["offset" + a], c["client" + a])) : void 0 === e ? d.css(b, c, g) : d.style(b, c, e, g)
                }, b, f ? e : void 0, f, null)
            }
        })
    });
    d.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function() {
            return this.length
        }
    });
    d.fn.andSelf = d.fn.addBack;
    "function" === typeof define && define.amd && define("jquery", [], function() {
        return d
    });
    var qc = g.jQuery,
        rc = g.$;
    d.noConflict = function(a) {
        g.$ === d && (g.$ = rc);
        a && g.jQuery === d && (g.jQuery = qc);
        return d
    };
    l || (g.jQuery = g.$ = d);
    return d
});
window.yii = function(g) {
    function l() {
        g.ajaxPrefilter(function(g, l, r) {
            !g.crossDomain && y.getCsrfParam() && r.setRequestHeader("X-CSRF-Token", y.getCsrfToken())
        });
        y.refreshCsrfToken()
    }

    function v() {
        g(document).ajaxComplete(function(g, l) {
            var n = l && l.getResponseHeader("X-Redirect");
            n && window.location.assign(n)
        })
    }

    function A() {
        var n = {};
        g("script[src]").each(function() {
            var g = N(this.src);
            n[g] = !0
        });
        g.ajaxPrefilter("script", function(g, l, v) {
            if ("jsonp" != g.dataType) {
                g = N(g.url);
                l = !0 === n[g] && !L(g);
                var r = void 0 !== n[g] && !0 === n[g].xhrDone;
                if (l || r) v.abort();
                else {
                    if (void 0 === n[g] || !0 === n[g]) n[g] = {
                        xhrList: [],
                        xhrDone: !1
                    };
                    v.done(function(g, l, r) {
                        if (!0 !== n[r.yiiUrl].xhrDone) {
                            n[r.yiiUrl].xhrDone = !0;
                            g = 0;
                            for (l = n[r.yiiUrl].xhrList.length; g < l; g++) {
                                var x = n[r.yiiUrl].xhrList[g];
                                x && x.readyState !== XMLHttpRequest.DONE && x.abort()
                            }
                            n[r.yiiUrl] = !0
                        }
                    }).fail(function(g, l) {
                        if ("abort" !== l) {
                            delete n[g.yiiUrl].xhrList[g.yiiIndex];
                            for (var r = !0, x = 0, v = n[g.yiiUrl].xhrList.length; x < v; x++) n[g.yiiUrl].xhrList[x] && (r = !1);
                            r && delete n[g.yiiUrl]
                        }
                    });
                    v.yiiIndex = n[g].xhrList.length;
                    v.yiiUrl = g;
                    n[g].xhrList[v.yiiIndex] = v
                }
            }
        });
        g(document).ajaxComplete(function() {
            var n = [];
            g("link[rel=stylesheet]").each(function() {
                var l = N(this.href);
                L(l) || (-1 === g.inArray(l, n) ? n.push(l) : g(this).remove())
            })
        })
    }

    function G() {
        var n = function(n) {
            var l = g(this),
                v = l.data("method"),
                x = l.data("confirm"),
                E = l.data("form");
            if (void 0 === v && void 0 === x && void 0 === E) return !0;
            void 0 !== x ? g.proxy(y.confirm, this)(x, function() {
                y.handleAction(l, n)
            }) : y.handleAction(l, n);
            n.stopImmediatePropagation();
            return !1
        };
        g(document).on("click.yii", y.clickableSelector, n).on("change.yii", y.changeableSelector, n)
    }

    function L(g) {
        for (var n = 0; n < y.reloadableScripts.length; n++) {
            var l = N(y.reloadableScripts[n]);
            if (!0 === (new RegExp("^" + l.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&").split("\\*").join(".+") + "$")).test(g)) return !0
        }
        return !1
    }

    function N(g) {
        return "/" === g.charAt(0) ? y.getBaseCurrentUrl() + g : g
    }
    var y = {
        reloadableScripts: [],
        clickableSelector: 'a, button, input[type="submit"], input[type="button"], input[type="reset"], input[type="image"]',
        changeableSelector: "select, input, textarea",
        getCsrfParam: function() {
            return g("meta[name=csrf-param]").attr("content")
        },
        getCsrfToken: function() {
            return g("meta[name=csrf-token]").attr("content")
        },
        setCsrfToken: function(l, v) {
            g("meta[name=csrf-param]").attr("content", l);
            g("meta[name=csrf-token]").attr("content", v)
        },
        refreshCsrfToken: function() {
            var l = y.getCsrfToken();
            l && g('form input[name="' + y.getCsrfParam() + '"]').val(l)
        },
        confirm: function(g, l, r) {
            window.confirm(g) ? !l || l() : !r || r()
        },
        handleAction: function(l, v) {
            var n = l.attr("data-form") ? g("#" + l.attr("data-form")) : l.closest("form"),
                x = !l.data("method") && n ? n.attr("method") : l.data("method"),
                A = l.attr("href"),
                E = A && "#" !== A,
                G = l.data("params"),
                L = G && g.isPlainObject(G),
                J = l.data("pjax"),
                J = void 0 !== J && 0 !== J && g.support.pjax,
                N, Z = {};
            J && (N = l.data("pjax-container") || l.closest("[data-pjax-container]"), N.length || (N = g("body")), Z = {
                container: N,
                push: !!l.data("pjax-push-state"),
                replace: !!l.data("pjax-replace-state"),
                scrollTo: l.data("pjax-scrollto"),
                pushRedirect: l.data("pjax-push-redirect"),
                replaceRedirect: l.data("pjax-replace-redirect"),
                skipOuterContainers: l.data("pjax-skip-outer-containers"),
                timeout: l.data("pjax-timeout"),
                originalEvent: v,
                originalTarget: l
            });
            if (void 0 === x)
                if (E) J ? g.pjax.click(v, Z) : window.location.assign(A);
                else {
                    if (l.is(":submit") && n.length) {
                        if (J) n.on("submit", function(l) {
                            g.pjax.submit(l, Z)
                        });
                        n.trigger("submit")
                    }
                }
            else {
                var Da, na, X = !n.length;
                X ? (E || (A = y.getCurrentUrl()), n = g("<form/>", {
                    method: x,
                    action: A
                }), (A = l.attr("target")) && n.attr("target", A), /(get|post)/i.test(x) || (n.append(g("<input/>", {
                    name: "_method",
                    value: x,
                    type: "hidden"
                })), x = "post", n.attr("method", x)), /post/i.test(x) && (x = y.getCsrfParam()) && n.append(g("<input/>", {
                    name: x,
                    value: y.getCsrfToken(),
                    type: "hidden"
                })), n.hide().appendTo("body")) : (Da = n.attr("method"), n.attr("method", x), E && (na = n.attr("action"), n.attr("action", A)));
                if (x = n.data("yiiActiveForm")) x.submitObject = l;
                L && g.each(G, function(l, r) {
                    n.append(g("<input/>").attr({
                        name: l,
                        value: r,
                        type: "hidden"
                    }))
                });
                if (J) n.on("submit", function(l) {
                    g.pjax.submit(l, Z)
                });
                n.trigger("submit");
                g.when(n.data("yiiSubmitFinalizePromise")).then(function() {
                    X ? n.remove() : (void 0 !== na && n.attr("action", na), n.attr("method", Da), L && g.each(G, function(l) {
                        g('input[name="' + l + '"]', n).remove()
                    }))
                })
            }
        },
        getQueryParams: function(l) {
            var n = l.indexOf("?");
            if (0 > n) return {};
            l = g.grep(l.substring(n + 1).split("#")[0].split("&"), function(g) {
                return "" !== g
            });
            for (var n = {}, r = 0, v = l.length; r < v; r++) {
                var A = l[r].split("="),
                    y = decodeURIComponent(A[0].replace(/\+/g, "%20")),
                    A = decodeURIComponent(A[1].replace(/\+/g, "%20"));
                y.length && (void 0 === n[y] ? n[y] = A || "" : (g.isArray(n[y]) || (n[y] = [n[y]]), n[y].push(A || "")))
            }
            return n
        },
        initModule: function(l) {
            if (void 0 === l.isActive || l.isActive) g.isFunction(l.init) && l.init(), g.each(l, function() {
                g.isPlainObject(this) && y.initModule(this)
            })
        },
        init: function() {
            l();
            v();
            A();
            G()
        },
        getBaseCurrentUrl: function() {
            return window.location.protocol + "//" + window.location.host
        },
        getCurrentUrl: function() {
            return window.location.href
        }
    };
    return y
}(window.jQuery);
window.jQuery(function() {
    window.yii.initModule(window.yii)
});
var svgs = [],
    orientation = window.matchMedia("(orientation: portrait)").matches,
    fvObjLayer = [];

function isNumeric(g) {
    return !isNaN(parseFloat(g)) && isFinite(g)
}

function getl(g) {
    if ("undefined" != typeof langs)
        for (var l = 0; l < langs.length; l++)
            if (Math.round(g) == langs[l].key) return langs[l].text;
    return ""
}

function showMeasureBadPopup() {
    $(".popup-box-measure").remove();
    $("body").prepend('<div class="popup-box-measure"><div class="popup-bg"></div><div class="popup-info"><div class="popup-head"><h2>Info</h2><div class="popup-head-r"><a class="close_measure" href="#"></a></div></div><div class="popup-text"><span class="info_txt">Before use close other drawing!</span></div></div></div>')
}

function getBack(g, l) {
    return $.parseJSON(atob(unescape(encodeURIComponent(g))))
}

function getSVG(g, l) {
    var v = l.split("#").join("");
    if (svgs[g + v]) return svgs[g + v];
    var A = "name";
    isNumeric(g) && (A = "id");
    var G = svg_start,
        L;
    for (L in svg_body)
        if (svg_body[L][A] == g) {
            G += svg_body[L].code.replace(RegExp("#FFFFFF", "g"), l);
            break
        }
    G += "</svg>";
    A = void 0 != $.base64 ? $.base64.encode(G) : btoa(G);
    return svgs[g + v] = A
}

function readURL(g, l) {
    if (g.files && g.files[0]) {
        var v = new FileReader;
        v.onload = function(g) {
            $(l).html("");
            $($.parseHTML("<img>")).attr("src", g.target.result).appendTo(l);
            $("<a class='clearLoadedImg' href='#'>" + getl(21) + "</a>").appendTo(l)
        };
        $(l).parent().find(".st_fileinput").val(g.files[0].name);
        v.readAsDataURL(g.files[0])
    }
}

function readURL2(g, l) {
    $(l).parent().find(".help-block-error").html("");
    0 < g.length && (/(http(s?):)([/|.|\w|\s\-])*\.(?:jpg|jpeg|png)/.test(g) ? ($(l).html(""), $($.parseHTML("<img>")).attr("src", g).appendTo(l), $("<a class='clearLoadedImg' href='#'>" + getl(21) + "</a>").appendTo(l)) : $(l).parent().find(".help-block-error").html(getl(25)))
}

function getfieldbyId(g) {
    for (var l = 0; l < ovens.fields.length; l++)
        if (ovens.fields[l].id == g) return ovens.fields[l];
    return !1
}

function getmarkerbyId(g) {
    for (var l = 0; l < markers.length; l++)
        if (markers[l].v.id == g) return markers[l];
    return !1
}

function getFields(g) {
    var l = !1,
        v = $("#isUserLeng").length,
        A = localStorage.getItem("fields"),
        G = 0;
    if (null != A && "null" != A) {
        A = JSON.parse(A);
        $.each(A, function(g, l) {
            G++
        });
        for (var L = 0; L < g.length; L++) {
            var N = g[L];
            A.hasOwnProperty(N) && A[N] ? drawField(A[N]) : l = !0
        }
    } else l = !0;
    G != g.length && (l = !0);
    l && $.ajax({
        url: wwwpath + "ajax/do?act=getFields&time=" + globaltime + "&resid=" + resource_id + "&lang=" + curlang + "&isUserReg=" + v,
        context: document.body,
        dataType: "JSON"
    }).done(function(g) {
        clearFields();
        $.each(g.fields, function(g, l) {
            drawField(l)
        });
        isMyReg && eventsToAreas();
        localStorage.setItem("fields", JSON.stringify(g.fields))
    });
    isMyReg && eventsToAreas()
}

function doMobMenu() {
    $(".nav-news").clone(!0).prependTo($(".mobile-menu"))
}

function feHeight(g) {
    var l = $(window).height();
    550 > l && (l = document.body.clientHeight);
    550 > l && (l = 600);
    var v = Math.round(l - g) + "px";
    500 < Math.round(l - g) && 100 < parseInt(v) ? $("#feedler").css("height", v + "!important") : $("#feedler").css("height", "600px")
}

function additionalSymbols() {
    for (var g = $(".additSymb"), l = 0; l < g.length; l++) {
        var v = g[l],
            A = "data:image/svg+xml;base64," + getSVG($(v).data("id"), $(v).data("fillcolor"));
        $(v).attr("src", A)
    }
}
$(document).ready(function() {
    additionalSymbols();
    orientation = window.matchMedia("(orientation: portrait)").matches;
    $(".popup-info").on("scroll", function() {
        $(".show-socials").removeClass("show-socials")
    });
    $("#newnav2 .inm").on("click", function() {
        $("#newnav2").removeClass("menuop");
        $(".nav_childs .inm").removeClass("nc_show");
        $(".nav_childs").show();
        $(".nav_childs .swi" + $(this).data("id")).addClass("nc_show")
    });
    $(document).on("click", ".close_selregions", function(g) {
        g.preventDefault();
        $("#newnav2,#nav_mob_menu").removeClass("menuop");
        $(".nav_childs").hide();
        $(".nav_childs .inm").removeClass("nc_show")
    });
    $(document).on("click", ".dropdown", function() {
        $(".dropdown").removeClass("active");
        $(this).addClass("active")
    });
    $(document).on("click", ".dropdown-content span", function() {
        var g = $(this).closest("span").data("id");
        $(this).parent().prev().prev().val(g);
        g = $(this).clone();
        $(this).parent().prev().html(g);
        setTimeout(function() {
            $(".dropdown").removeClass("active")
        }, 50)
    });
    $(document).on("click", function(g) {
        0 === $(".dropdown").has(g.target).length && $(".dropdown").removeClass("active")
    });
    $(document).on("click", ".modalMobHead .contlarrow", function() {
        $("#closeMW,label.toggle-mobile-menu").click()
    });
    $(document).on("click", ".close_nav_menu", function() {
        $("#nav_mob_menu").removeClass("menuop")
    });
    $(document).on("click", "#modalRegions", function() {
        $("#modalWrap").slideToggle();
        $(".retallregs").click();
        $("#modalWrap").scrollTop(0)
    });
    $(document).on("click", "#modalMyRegions", function() {
        $("#modalMyRegWrap").slideToggle();
        $("#modalMyRegWrap .modalWrapCont *").show()
    });
    $(document).on("click", "#closeMW", function() {
        $("#modalWrap").slideToggle()
    });
    $(document).on("click", "#closeMWa", function() {
        $("#modalWrapA").slideToggle();
        isMobile.any() || setTimeout(reAcd, 3E5)
    });
    $(document).on("click", "#closeMMRW", function() {
        $("#modalMyRegWrap").slideToggle()
    });
    $(document).on("click", ".retallregs", function() {
        $(".modalWrapCont > *").show();
        $(".navlvl2Cont").hide();
        $("#modalWrap").scrollTop(0)
    });
    $(document).on("click", ".hasLvl", function() {
        var g = $(this).data("id");
        $(".nav_level2, .modalWrapCont > *").hide();
        $(".navlvl2Cont, .nvl2-" + g).show();
        $(".nvl2_head").html($(".nvl2-" + g + " li:first").text());
        $("#modalWrap").scrollTop(0)
    });
    $(document).on("click", "#menu_gamb", function(g) {
        g.preventDefault();
        tabs(7)
    });
    $(document).on("click", "#close_about", function(g) {
        g.preventDefault();
        $(this).parent().animate({
            "margin-right": "-325",
            display: "toggle"
        }, 400)
    });
    setTimeout(function() {
        $(".dd_3 li.show").append('<a href="#" class="gotofeed">' + getl(27) + "</a>")
    }, 1E3);
    doMobMenu()
});

function reAcd() {
    $("#modalWrapA").slideToggle();
    mambatimer = 8;
    mamba()
}

function disqus_go(g) {
    var l = getvenuebyId(g);
    if (l.id <= fbCommsID && 1 > curuser || !1 !== cursettings && 1 == cursettings.gm_disqus) 1 > $("#disqus_thread").length && $(".popup-text").append('<div id="disqus_thread"></div>'), isMobile.any() ? ($("#disqus_thread").html('<div ><a href="#" class="showcmts" id="showcmts">Show comments</a></div>'), $("#showcmts").on("click", function(g) {
        g.preventDefault();
        void 0 !== DISQUS && ($("#disqus_thread").html(""), DISQUS.reset({
            reload: !0,
            config: function() {
                var g = l.link;
                21542987 >= l.id && (g = l.link.replace("https:", "http:"), g += "/comments");
                this.page.url = g
            }
        }))
    })) : void 0 !== DISQUS && ($("#disqus_thread").html(""), DISQUS.reset({
        reload: !0,
        config: function() {
            var g = l.link;
            21542987 >= l.id && (g = l.link.replace("https:", "http:"), g += "/comments");
            this.page.url = g
        }
    }))
};