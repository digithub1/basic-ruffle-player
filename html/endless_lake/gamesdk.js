(function () {
  "use strict";
  var n;
  function aa(a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }
  var ba =
    typeof Object.defineProperties == "function"
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };
  function ca(a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var q = ca(this);
  function r(a, b) {
    if (b)
      a: {
        var c = q;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d &&
          b != null &&
          ba(c, a, { configurable: !0, writable: !0, value: b });
      }
  }
  r("Symbol", function (a) {
    function b(g) {
      if (this instanceof b) throw new TypeError("Symbol is not a constructor");
      return new c(d + (g || "") + "_" + e++, g);
    }
    function c(g, f) {
      this.g = g;
      ba(this, "description", { configurable: !0, writable: !0, value: f });
    }
    if (a) return a;
    c.prototype.toString = function () {
      return this.g;
    };
    var d = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
      e = 0;
    return b;
  });
  r("Symbol.iterator", function (a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (
      var b =
          "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
            " "
          ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = q[b[c]];
      typeof d === "function" &&
        typeof d.prototype[a] != "function" &&
        ba(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return da(aa(this));
          },
        });
    }
    return a;
  });
  function da(a) {
    a = { next: a };
    a[Symbol.iterator] = function () {
      return this;
    };
    return a;
  }
  var ea =
      typeof Object.create == "function"
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    fa = (function () {
      function a() {
        function c() {}
        new c();
        Reflect.construct(c, [], function () {});
        return new c() instanceof c;
      }
      if (typeof Reflect != "undefined" && Reflect.construct) {
        if (a()) return Reflect.construct;
        var b = Reflect.construct;
        return function (c, d, e) {
          c = b(c, d);
          e && Reflect.setPrototypeOf(c, e.prototype);
          return c;
        };
      }
      return function (c, d, e) {
        e === void 0 && (e = c);
        e = ea(e.prototype || Object.prototype);
        return Function.prototype.apply.call(c, e, d) || e;
      };
    })(),
    ha;
  if (typeof Object.setPrototypeOf == "function") ha = Object.setPrototypeOf;
  else {
    var ia;
    a: {
      var ka = { a: !0 },
        la = {};
      try {
        la.__proto__ = ka;
        ia = la.a;
        break a;
      } catch (a) {}
      ia = !1;
    }
    ha = ia
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ma = ha;
  function v(a, b) {
    a.prototype = ea(b.prototype);
    a.prototype.constructor = a;
    if (ma) ma(a, b);
    else
      for (var c in b)
        if (c != "prototype")
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.Ia = b.prototype;
  }
  function x(a) {
    var b =
      typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
    if (b) return b.call(a);
    if (typeof a.length == "number") return { next: aa(a) };
    throw Error(String(a) + " is not an iterable or ArrayLike");
  }
  function na(a) {
    if (!(a instanceof Array)) {
      a = x(a);
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
  }
  function oa() {
    this.A = !1;
    this.l = null;
    this.i = void 0;
    this.g = 1;
    this.H = this.j = 0;
    this.o = null;
  }
  function pa(a) {
    if (a.A) throw new TypeError("Generator is already running");
    a.A = !0;
  }
  oa.prototype.F = function (a) {
    this.i = a;
  };
  function qa(a, b) {
    a.o = { X: b, ya: !0 };
    a.g = a.j || a.H;
  }
  oa.prototype.return = function (a) {
    this.o = { return: a };
    this.g = this.H;
  };
  function y(a, b, c) {
    a.g = c;
    return { value: b };
  }
  function ra(a) {
    a.j = 0;
    var b = a.o.X;
    a.o = null;
    return b;
  }
  function sa(a) {
    this.g = new oa();
    this.i = a;
  }
  function ta(a, b) {
    pa(a.g);
    var c = a.g.l;
    if (c)
      return ua(
        a,
        "return" in c
          ? c["return"]
          : function (d) {
              return { value: d, done: !0 };
            },
        b,
        a.g.return
      );
    a.g.return(b);
    return va(a);
  }
  function ua(a, b, c, d) {
    try {
      var e = b.call(a.g.l, c);
      if (!(e instanceof Object))
        throw new TypeError("Iterator result " + e + " is not an object");
      if (!e.done) return (a.g.A = !1), e;
      var g = e.value;
    } catch (f) {
      return (a.g.l = null), qa(a.g, f), va(a);
    }
    a.g.l = null;
    d.call(a.g, g);
    return va(a);
  }
  function va(a) {
    for (; a.g.g; )
      try {
        var b = a.i(a.g);
        if (b) return (a.g.A = !1), { value: b.value, done: !1 };
      } catch (c) {
        (a.g.i = void 0), qa(a.g, c);
      }
    a.g.A = !1;
    if (a.g.o) {
      b = a.g.o;
      a.g.o = null;
      if (b.ya) throw b.X;
      return { value: b.return, done: !0 };
    }
    return { value: void 0, done: !0 };
  }
  function wa(a) {
    this.next = function (b) {
      pa(a.g);
      a.g.l ? (b = ua(a, a.g.l.next, b, a.g.F)) : (a.g.F(b), (b = va(a)));
      return b;
    };
    this.throw = function (b) {
      pa(a.g);
      a.g.l ? (b = ua(a, a.g.l["throw"], b, a.g.F)) : (qa(a.g, b), (b = va(a)));
      return b;
    };
    this.return = function (b) {
      return ta(a, b);
    };
    this[Symbol.iterator] = function () {
      return this;
    };
  }
  function xa(a) {
    function b(d) {
      return a.next(d);
    }
    function c(d) {
      return a.throw(d);
    }
    return new Promise(function (d, e) {
      function g(f) {
        f.done ? d(f.value) : Promise.resolve(f.value).then(b, c).then(g, e);
      }
      g(a.next());
    });
  }
  function z(a) {
    return xa(new wa(new sa(a)));
  }
  function ya() {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
      b[c - a] = arguments[c];
    return b;
  }
  r("Reflect", function (a) {
    return a ? a : {};
  });
  r("Reflect.construct", function () {
    return fa;
  });
  r("Reflect.setPrototypeOf", function (a) {
    return a
      ? a
      : ma
      ? function (b, c) {
          try {
            return ma(b, c), !0;
          } catch (d) {
            return !1;
          }
        }
      : null;
  });
  r("Promise", function (a) {
    function b(f) {
      this.i = 0;
      this.j = void 0;
      this.g = [];
      this.F = !1;
      var h = this.l();
      try {
        f(h.resolve, h.reject);
      } catch (k) {
        h.reject(k);
      }
    }
    function c() {
      this.g = null;
    }
    function d(f) {
      return f instanceof b
        ? f
        : new b(function (h) {
            h(f);
          });
    }
    if (a) return a;
    c.prototype.i = function (f) {
      if (this.g == null) {
        this.g = [];
        var h = this;
        this.j(function () {
          h.o();
        });
      }
      this.g.push(f);
    };
    var e = q.setTimeout;
    c.prototype.j = function (f) {
      e(f, 0);
    };
    c.prototype.o = function () {
      for (; this.g && this.g.length; ) {
        var f = this.g;
        this.g = [];
        for (var h = 0; h < f.length; ++h) {
          var k = f[h];
          f[h] = null;
          try {
            k();
          } catch (l) {
            this.l(l);
          }
        }
      }
      this.g = null;
    };
    c.prototype.l = function (f) {
      this.j(function () {
        throw f;
      });
    };
    b.prototype.l = function () {
      function f(l) {
        return function (m) {
          k || ((k = !0), l.call(h, m));
        };
      }
      var h = this,
        k = !1;
      return { resolve: f(this.ha), reject: f(this.o) };
    };
    b.prototype.ha = function (f) {
      if (f === this)
        this.o(new TypeError("A Promise cannot resolve to itself"));
      else if (f instanceof b) this.ja(f);
      else {
        a: switch (typeof f) {
          case "object":
            var h = f != null;
            break a;
          case "function":
            h = !0;
            break a;
          default:
            h = !1;
        }
        h ? this.ga(f) : this.A(f);
      }
    };
    b.prototype.ga = function (f) {
      var h = void 0;
      try {
        h = f.then;
      } catch (k) {
        this.o(k);
        return;
      }
      typeof h == "function" ? this.ka(h, f) : this.A(f);
    };
    b.prototype.o = function (f) {
      this.H(2, f);
    };
    b.prototype.A = function (f) {
      this.H(1, f);
    };
    b.prototype.H = function (f, h) {
      if (this.i != 0)
        throw Error(
          "Cannot settle(" +
            f +
            ", " +
            h +
            "): Promise already settled in state" +
            this.i
        );
      this.i = f;
      this.j = h;
      this.i === 2 && this.ia();
      this.Fa();
    };
    b.prototype.ia = function () {
      var f = this;
      e(function () {
        if (f.fa()) {
          var h = q.console;
          typeof h !== "undefined" && h.error(f.j);
        }
      }, 1);
    };
    b.prototype.fa = function () {
      if (this.F) return !1;
      var f = q.CustomEvent,
        h = q.Event,
        k = q.dispatchEvent;
      if (typeof k === "undefined") return !0;
      typeof f === "function"
        ? (f = new f("unhandledrejection", { cancelable: !0 }))
        : typeof h === "function"
        ? (f = new h("unhandledrejection", { cancelable: !0 }))
        : ((f = q.document.createEvent("CustomEvent")),
          f.initCustomEvent("unhandledrejection", !1, !0, f));
      f.promise = this;
      f.reason = this.j;
      return k(f);
    };
    b.prototype.Fa = function () {
      if (this.g != null) {
        for (var f = 0; f < this.g.length; ++f) g.i(this.g[f]);
        this.g = null;
      }
    };
    var g = new c();
    b.prototype.ja = function (f) {
      var h = this.l();
      f.I(h.resolve, h.reject);
    };
    b.prototype.ka = function (f, h) {
      var k = this.l();
      try {
        f.call(h, k.resolve, k.reject);
      } catch (l) {
        k.reject(l);
      }
    };
    b.prototype.then = function (f, h) {
      function k(u, t) {
        return typeof u == "function"
          ? function (w) {
              try {
                l(u(w));
              } catch (H) {
                m(H);
              }
            }
          : t;
      }
      var l,
        m,
        p = new b(function (u, t) {
          l = u;
          m = t;
        });
      this.I(k(f, l), k(h, m));
      return p;
    };
    b.prototype.catch = function (f) {
      return this.then(void 0, f);
    };
    b.prototype.I = function (f, h) {
      function k() {
        switch (l.i) {
          case 1:
            f(l.j);
            break;
          case 2:
            h(l.j);
            break;
          default:
            throw Error("Unexpected state: " + l.i);
        }
      }
      var l = this;
      this.g == null ? g.i(k) : this.g.push(k);
      this.F = !0;
    };
    b.resolve = d;
    b.reject = function (f) {
      return new b(function (h, k) {
        k(f);
      });
    };
    b.race = function (f) {
      return new b(function (h, k) {
        for (var l = x(f), m = l.next(); !m.done; m = l.next())
          d(m.value).I(h, k);
      });
    };
    b.all = function (f) {
      var h = x(f),
        k = h.next();
      return k.done
        ? d([])
        : new b(function (l, m) {
            function p(w) {
              return function (H) {
                u[w] = H;
                t--;
                t == 0 && l(u);
              };
            }
            var u = [],
              t = 0;
            do
              u.push(void 0),
                t++,
                d(k.value).I(p(u.length - 1), m),
                (k = h.next());
            while (!k.done);
          });
    };
    return b;
  });
  r("Object.setPrototypeOf", function (a) {
    return a || ma;
  });
  function A(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  r("Symbol.dispose", function (a) {
    return a ? a : Symbol("Symbol.dispose");
  });
  r("WeakMap", function (a) {
    function b(k) {
      this.g = (h += Math.random() + 1).toString();
      if (k) {
        k = x(k);
        for (var l; !(l = k.next()).done; ) (l = l.value), this.set(l[0], l[1]);
      }
    }
    function c() {}
    function d(k) {
      var l = typeof k;
      return (l === "object" && k !== null) || l === "function";
    }
    function e(k) {
      if (!A(k, f)) {
        var l = new c();
        ba(k, f, { value: l });
      }
    }
    function g(k) {
      var l = Object[k];
      l &&
        (Object[k] = function (m) {
          if (m instanceof c) return m;
          Object.isExtensible(m) && e(m);
          return l(m);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var k = Object.seal({}),
            l = Object.seal({}),
            m = new a([
              [k, 2],
              [l, 3],
            ]);
          if (m.get(k) != 2 || m.get(l) != 3) return !1;
          m.delete(k);
          m.set(l, 4);
          return !m.has(k) && m.get(l) == 4;
        } catch (p) {
          return !1;
        }
      })()
    )
      return a;
    var f = "$jscomp_hidden_" + Math.random();
    g("freeze");
    g("preventExtensions");
    g("seal");
    var h = 0;
    b.prototype.set = function (k, l) {
      if (!d(k)) throw Error("Invalid WeakMap key");
      e(k);
      if (!A(k, f)) throw Error("WeakMap key fail: " + k);
      k[f][this.g] = l;
      return this;
    };
    b.prototype.get = function (k) {
      return d(k) && A(k, f) ? k[f][this.g] : void 0;
    };
    b.prototype.has = function (k) {
      return d(k) && A(k, f) && A(k[f], this.g);
    };
    b.prototype.delete = function (k) {
      return d(k) && A(k, f) && A(k[f], this.g) ? delete k[f][this.g] : !1;
    };
    return b;
  });
  r("Map", function (a) {
    function b() {
      var h = {};
      return (h.v = h.next = h.head = h);
    }
    function c(h, k) {
      var l = h[1];
      return da(function () {
        if (l) {
          for (; l.head != h[1]; ) l = l.v;
          for (; l.next != l.head; )
            return (l = l.next), { done: !1, value: k(l) };
          l = null;
        }
        return { done: !0, value: void 0 };
      });
    }
    function d(h, k) {
      var l = k && typeof k;
      l == "object" || l == "function"
        ? g.has(k)
          ? (l = g.get(k))
          : ((l = "" + ++f), g.set(k, l))
        : (l = "p_" + k);
      var m = h[0][l];
      if (m && A(h[0], l))
        for (h = 0; h < m.length; h++) {
          var p = m[h];
          if ((k !== k && p.key !== p.key) || k === p.key)
            return { id: l, list: m, index: h, entry: p };
        }
      return { id: l, list: m, index: -1, entry: void 0 };
    }
    function e(h) {
      this[0] = {};
      this[1] = b();
      this.size = 0;
      if (h) {
        h = x(h);
        for (var k; !(k = h.next()).done; ) (k = k.value), this.set(k[0], k[1]);
      }
    }
    if (
      (function () {
        if (
          !a ||
          typeof a != "function" ||
          !a.prototype.entries ||
          typeof Object.seal != "function"
        )
          return !1;
        try {
          var h = Object.seal({ x: 4 }),
            k = new a(x([[h, "s"]]));
          if (
            k.get(h) != "s" ||
            k.size != 1 ||
            k.get({ x: 4 }) ||
            k.set({ x: 4 }, "t") != k ||
            k.size != 2
          )
            return !1;
          var l = k.entries(),
            m = l.next();
          if (m.done || m.value[0] != h || m.value[1] != "s") return !1;
          m = l.next();
          return m.done ||
            m.value[0].x != 4 ||
            m.value[1] != "t" ||
            !l.next().done
            ? !1
            : !0;
        } catch (p) {
          return !1;
        }
      })()
    )
      return a;
    var g = new WeakMap();
    e.prototype.set = function (h, k) {
      h = h === 0 ? 0 : h;
      var l = d(this, h);
      l.list || (l.list = this[0][l.id] = []);
      l.entry
        ? (l.entry.value = k)
        : ((l.entry = {
            next: this[1],
            v: this[1].v,
            head: this[1],
            key: h,
            value: k,
          }),
          l.list.push(l.entry),
          (this[1].v.next = l.entry),
          (this[1].v = l.entry),
          this.size++);
      return this;
    };
    e.prototype.delete = function (h) {
      h = d(this, h);
      return h.entry && h.list
        ? (h.list.splice(h.index, 1),
          h.list.length || delete this[0][h.id],
          (h.entry.v.next = h.entry.next),
          (h.entry.next.v = h.entry.v),
          (h.entry.head = null),
          this.size--,
          !0)
        : !1;
    };
    e.prototype.clear = function () {
      this[0] = {};
      this[1] = this[1].v = b();
      this.size = 0;
    };
    e.prototype.has = function (h) {
      return !!d(this, h).entry;
    };
    e.prototype.get = function (h) {
      return (h = d(this, h).entry) && h.value;
    };
    e.prototype.entries = function () {
      return c(this, function (h) {
        return [h.key, h.value];
      });
    };
    e.prototype.keys = function () {
      return c(this, function (h) {
        return h.key;
      });
    };
    e.prototype.values = function () {
      return c(this, function (h) {
        return h.value;
      });
    };
    e.prototype.forEach = function (h, k) {
      for (var l = this.entries(), m; !(m = l.next()).done; )
        (m = m.value), h.call(k, m[1], m[0], this);
    };
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var f = 0;
    return e;
  });
  r("Set", function (a) {
    function b(c) {
      this.g = new Map();
      if (c) {
        c = x(c);
        for (var d; !(d = c.next()).done; ) this.add(d.value);
      }
      this.size = this.g.size;
    }
    if (
      (function () {
        if (
          !a ||
          typeof a != "function" ||
          !a.prototype.entries ||
          typeof Object.seal != "function"
        )
          return !1;
        try {
          var c = Object.seal({ x: 4 }),
            d = new a(x([c]));
          if (
            !d.has(c) ||
            d.size != 1 ||
            d.add(c) != d ||
            d.size != 1 ||
            d.add({ x: 4 }) != d ||
            d.size != 2
          )
            return !1;
          var e = d.entries(),
            g = e.next();
          if (g.done || g.value[0] != c || g.value[1] != c) return !1;
          g = e.next();
          return g.done ||
            g.value[0] == c ||
            g.value[0].x != 4 ||
            g.value[1] != g.value[0]
            ? !1
            : e.next().done;
        } catch (f) {
          return !1;
        }
      })()
    )
      return a;
    b.prototype.add = function (c) {
      c = c === 0 ? 0 : c;
      this.g.set(c, c);
      this.size = this.g.size;
      return this;
    };
    b.prototype.delete = function (c) {
      c = this.g.delete(c);
      this.size = this.g.size;
      return c;
    };
    b.prototype.clear = function () {
      this.g.clear();
      this.size = 0;
    };
    b.prototype.has = function (c) {
      return this.g.has(c);
    };
    b.prototype.entries = function () {
      return this.g.entries();
    };
    b.prototype.values = function () {
      return this.g.values();
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function (c, d) {
      var e = this;
      this.g.forEach(function (g) {
        return c.call(d, g, g, e);
      });
    };
    return b;
  });
  r("Object.values", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) A(b, d) && c.push(b[d]);
          return c;
        };
  });
  r("Object.is", function (a) {
    return a
      ? a
      : function (b, c) {
          return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c;
        };
  });
  r("Array.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = this;
          d instanceof String && (d = String(d));
          var e = d.length;
          c = c || 0;
          for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
            var g = d[c];
            if (g === b || Object.is(g, b)) return !0;
          }
          return !1;
        };
  });
  r("String.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          if (this == null)
            throw new TypeError(
              "The 'this' value for String.prototype.includes must not be null or undefined"
            );
          if (b instanceof RegExp)
            throw new TypeError(
              "First argument to String.prototype.includes must not be a regular expression"
            );
          return this.indexOf(b, c || 0) !== -1;
        };
  });
  r("Array.from", function (a) {
    return a
      ? a
      : function (b, c, d) {
          c =
            c != null
              ? c
              : function (h) {
                  return h;
                };
          var e = [],
            g =
              typeof Symbol != "undefined" &&
              Symbol.iterator &&
              b[Symbol.iterator];
          if (typeof g == "function") {
            b = g.call(b);
            for (var f = 0; !(g = b.next()).done; )
              e.push(c.call(d, g.value, f++));
          } else
            for (g = b.length, f = 0; f < g; f++) e.push(c.call(d, b[f], f));
          return e;
        };
  });
  r("Object.entries", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) A(b, d) && c.push([d, b[d]]);
          return c;
        };
  });
  r("Number.isFinite", function (a) {
    return a
      ? a
      : function (b) {
          return typeof b !== "number"
            ? !1
            : !isNaN(b) && b !== Infinity && b !== -Infinity;
        };
  });
  r("Number.MAX_SAFE_INTEGER", function () {
    return 9007199254740991;
  });
  r("Number.MIN_SAFE_INTEGER", function () {
    return -9007199254740991;
  });
  function za(a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var g = c++;
            return { value: b(g, a[g]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[Symbol.iterator] = function () {
      return e;
    };
    return e;
  }
  r("Array.prototype.entries", function (a) {
    return a
      ? a
      : function () {
          return za(this, function (b, c) {
            return [b, c];
          });
        };
  });
  r("Number.isNaN", function (a) {
    return a
      ? a
      : function (b) {
          return typeof b === "number" && isNaN(b);
        };
  });
  r("Array.prototype.keys", function (a) {
    return a
      ? a
      : function () {
          return za(this, function (b) {
            return b;
          });
        };
  });
  r("Array.prototype.values", function (a) {
    return a
      ? a
      : function () {
          return za(this, function (b, c) {
            return c;
          });
        };
  }); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var Aa = this || self;
  function Ba(a, b) {
    a: {
      var c = ["CLOSURE_FLAGS"];
      for (var d = Aa, e = 0; e < c.length; e++)
        if (((d = d[c[e]]), d == null)) {
          c = null;
          break a;
        }
      c = d;
    }
    a = c && c[a];
    return a != null ? a : b;
  }
  function Ca(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  function Da(a) {
    Aa.setTimeout(function () {
      throw a;
    }, 0);
  }
  var Ea = Ba(610401301, !1),
    Fa = Ba(748402147, Ba(1, !0));
  function Ga() {
    var a = Aa.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  var Ha,
    Ia = Aa.navigator;
  Ha = Ia ? Ia.userAgentData || null : null;
  function Ja(a) {
    Ja[" "](a);
    return a;
  }
  Ja[" "] = function () {};
  var Ka = {},
    Ma = null;
  function Na(a) {
    var b = a.length,
      c = (b * 3) / 4;
    c % 3
      ? (c = Math.floor(c))
      : "=.".indexOf(a[b - 1]) != -1 &&
        (c = "=.".indexOf(a[b - 2]) != -1 ? c - 2 : c - 1);
    var d = new Uint8Array(c),
      e = 0;
    Oa(a, function (g) {
      d[e++] = g;
    });
    return e !== c ? d.subarray(0, e) : d;
  }
  function Oa(a, b) {
    function c(k) {
      for (; d < a.length; ) {
        var l = a.charAt(d++),
          m = Ma[l];
        if (m != null) return m;
        if (!/^[\s\xa0]*$/.test(l))
          throw Error("Unknown base64 encoding at char: " + l);
      }
      return k;
    }
    Pa();
    for (var d = 0; ; ) {
      var e = c(-1),
        g = c(0),
        f = c(64),
        h = c(64);
      if (h === 64 && e === -1) break;
      b((e << 2) | (g >> 4));
      f != 64 &&
        (b(((g << 4) & 240) | (f >> 2)), h != 64 && b(((f << 6) & 192) | h));
    }
  }
  function Pa() {
    if (!Ma) {
      Ma = {};
      for (
        var a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
              ""
            ),
          b = ["+/=", "+/", "-_=", "-_.", "-_"],
          c = 0;
        c < 5;
        c++
      ) {
        var d = a.concat(b[c].split(""));
        Ka[c] = d;
        for (var e = 0; e < d.length; e++) {
          var g = d[e];
          Ma[g] === void 0 && (Ma[g] = e);
        }
      }
    }
  }
  var Qa = typeof Uint8Array !== "undefined",
    Ra =
      !(Ea && Ha && Ha.brands.length > 0
        ? 0
        : Ga().indexOf("Trident") != -1 || Ga().indexOf("MSIE") != -1) &&
      typeof btoa === "function",
    Sa = /[-_.]/g,
    Ta = { "-": "+", _: "/", ".": "=" };
  function Ua(a) {
    return Ta[a] || "";
  }
  var Va = {};
  function Wa(a, b) {
    Xa(b);
    this.g = a;
    if (a != null && a.length === 0)
      throw Error("ByteString should be constructed with non-empty values");
  }
  function Ya(a) {
    return a.length ? new Wa(new Uint8Array(a), Va) : Za();
  }
  function Za() {
    return $a || ($a = new Wa(null, Va));
  }
  var $a;
  function Xa(a) {
    if (a !== Va) throw Error("illegal external caller");
  }
  function ab(a, b) {
    a.__closure__error__context__984382 ||
      (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = b;
  }
  var bb = void 0;
  function cb(a) {
    a = Error(a);
    ab(a, "warning");
    return a;
  }
  var db = typeof Symbol === "function" && typeof Symbol() === "symbol";
  function fb(a, b, c) {
    return typeof Symbol === "function" && typeof Symbol() === "symbol"
      ? (c === void 0 ? 0 : c) && Symbol.for && a
        ? Symbol.for(a)
        : a != null
        ? Symbol(a)
        : Symbol()
      : b;
  }
  var gb = fb("jas", void 0, !0),
    hb = fb(void 0, "0di"),
    ib = fb(void 0, "1oa"),
    jb = fb(void 0, "0actk"),
    kb = fb("m_m", "Ha", !0);
  var lb = { xa: { value: 0, configurable: !0, writable: !0, enumerable: !1 } },
    mb = Object.defineProperties,
    B = db ? gb : "xa",
    nb,
    ob = [];
  C(ob, 7);
  nb = Object.freeze(ob);
  function pb(a, b) {
    db || B in a || mb(a, lb);
    a[B] |= b;
  }
  function C(a, b) {
    db || B in a || mb(a, lb);
    a[B] = b;
  }
  function qb(a) {
    pb(a, 34);
    return a;
  }
  var rb = {};
  function D(a, b) {
    return b === void 0
      ? a.g !== sb && !!(2 & (a.h[B] | 0))
      : !!(2 & b) && a.g !== sb;
  }
  var sb = {};
  function tb(a, b) {
    if (a != null)
      if (typeof a === "string") a = a ? new Wa(a, Va) : Za();
      else if (a.constructor !== Wa)
        if (Qa && a != null && a instanceof Uint8Array) a = Ya(a);
        else {
          if (!b) throw Error();
          a = void 0;
        }
    return a;
  }
  function ub(a, b, c) {
    this.g = a;
    this.i = b;
    this.j = c;
  }
  ub.prototype.next = function () {
    var a = this.g.next();
    a.done || (a.value = this.i.call(this.j, a.value));
    return a;
  };
  ub.prototype[Symbol.iterator] = function () {
    return this;
  };
  var vb = Object.freeze({});
  var wb = typeof Aa.BigInt === "function" && typeof Aa.BigInt(0) === "bigint";
  var xb = Number.MIN_SAFE_INTEGER.toString(),
    yb = wb ? BigInt(Number.MIN_SAFE_INTEGER) : void 0,
    zb = Number.MAX_SAFE_INTEGER.toString(),
    Ab = wb ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
  function Bb(a, b) {
    if (a.length > b.length) return !1;
    if (a.length < b.length || a === b) return !0;
    for (var c = 0; c < a.length; c++) {
      var d = a[c],
        e = b[c];
      if (d > e) return !1;
      if (d < e) return !0;
    }
  }
  function Cb(a) {
    return Array.prototype.slice.call(a);
  }
  function Db(a) {
    throw Error("unexpected value " + a + "!");
  }
  var Eb = Number.isFinite;
  function Fb(a) {
    if (!Eb(a)) throw cb("enum");
    return a | 0;
  }
  function Gb(a) {
    return a == null ? a : Eb(a) ? a | 0 : void 0;
  }
  function Hb(a) {
    if (a == null) return a;
    if (typeof a === "string" && a) a = +a;
    else if (typeof a !== "number") return;
    return Eb(a) ? a | 0 : void 0;
  }
  function Ib(a) {
    return a == null || typeof a === "string" ? a : void 0;
  }
  function Jb(a, b, c, d) {
    if (a != null && a[kb] === rb) return a;
    if (!Array.isArray(a))
      return c ? (d & 2 ? b[hb] || (b[hb] = Kb(b)) : new b()) : void 0;
    c = a[B] | 0;
    d = c | (d & 32) | (d & 2);
    d !== c && C(a, d);
    return new b(a);
  }
  function Kb(a) {
    a = new a();
    qb(a.h);
    return a;
  }
  function Lb(a, b, c) {
    if (b) {
      if (typeof a !== "string") throw Error();
      return a;
    }
    var d;
    return (d = Ib(a)) != null ? d : c ? "" : void 0;
  }
  function Mb(a, b, c) {
    a = b ? Fb(a) : Gb(a);
    return a == null ? (c ? 0 : void 0) : a;
  }
  function Nb(a) {
    return a;
  }
  var Ob = {},
    Pb = (function () {
      try {
        var a = function () {
          return fa(Map, [], this.constructor);
        };
        v(a, Map);
        Ja(new a());
        return !1;
      } catch (b) {
        return !0;
      }
    })();
  function Qb() {
    this.g = new Map();
  }
  n = Qb.prototype;
  n.get = function (a) {
    return this.g.get(a);
  };
  n.set = function (a, b) {
    this.g.set(a, b);
    this.size = this.g.size;
    return this;
  };
  n.delete = function (a) {
    a = this.g.delete(a);
    this.size = this.g.size;
    return a;
  };
  n.clear = function () {
    this.g.clear();
    this.size = this.g.size;
  };
  n.has = function (a) {
    return this.g.has(a);
  };
  n.entries = function () {
    return this.g.entries();
  };
  n.keys = function () {
    return this.g.keys();
  };
  n.values = function () {
    return this.g.values();
  };
  n.forEach = function (a, b) {
    return this.g.forEach(a, b);
  };
  Qb.prototype[Symbol.iterator] = function () {
    return this.entries();
  };
  var E = (function () {
    function a() {
      return fa(Map, [], this.constructor);
    }
    if (Pb)
      return (
        Object.setPrototypeOf(Qb.prototype, Map.prototype),
        Object.defineProperties(Qb.prototype, {
          size: { value: 0, configurable: !0, enumerable: !0, writable: !0 },
        }),
        Qb
      );
    v(a, Map);
    return a;
  })();
  function Rb(a) {
    return a;
  }
  function F(a, b, c, d) {
    c = c === void 0 ? Rb : c;
    d = d === void 0 ? Rb : d;
    var e = E.call(this) || this;
    e.C = a[B] | 0;
    e.B = b;
    e.M = c;
    e.ea = e.B ? Sb : d;
    for (var g = 0; g < a.length; g++) {
      var f = a[g],
        h = c(f[0], !1, !0),
        k = f[1];
      b
        ? k === void 0 && (k = null)
        : (k = d(f[1], !1, !0, void 0, void 0, e.C));
      E.prototype.set.call(e, h, k);
    }
    return e;
  }
  v(F, E);
  function Tb(a) {
    if (a.C & 2) throw Error("Cannot mutate an immutable Map");
  }
  n = F.prototype;
  n.clear = function () {
    Tb(this);
    E.prototype.clear.call(this);
  };
  n.delete = function (a) {
    Tb(this);
    return E.prototype.delete.call(this, this.M(a, !0, !1));
  };
  n.entries = function () {
    if (this.B) {
      var a = E.prototype.keys.call(this);
      a = new ub(a, Ub, this);
    } else a = E.prototype.entries.call(this);
    return a;
  };
  n.values = function () {
    if (this.B) {
      var a = E.prototype.keys.call(this);
      a = new ub(a, F.prototype.get, this);
    } else a = E.prototype.values.call(this);
    return a;
  };
  n.forEach = function (a, b) {
    this.B
      ? E.prototype.forEach.call(this, function (c, d, e) {
          a.call(b, e.get(d), d, e);
        })
      : E.prototype.forEach.call(this, a, b);
  };
  n.set = function (a, b) {
    Tb(this);
    a = this.M(a, !0, !1);
    return a == null
      ? this
      : b == null
      ? (E.prototype.delete.call(this, a), this)
      : E.prototype.set.call(this, a, this.ea(b, !0, !0, this.B, !1, this.C));
  };
  n.has = function (a) {
    return E.prototype.has.call(this, this.M(a, !1, !1));
  };
  n.get = function (a) {
    a = this.M(a, !1, !1);
    var b = E.prototype.get.call(this, a);
    if (b !== void 0) {
      var c = this.B;
      return c
        ? ((c = this.ea(b, !1, !0, c, this.Ga, this.C)),
          c !== b && E.prototype.set.call(this, a, c),
          c)
        : b;
    }
  };
  F.prototype[Symbol.iterator] = function () {
    return this.entries();
  };
  F.prototype.toJSON = void 0;
  function Sb(a, b, c, d, e, g) {
    a = Jb(a, d, c, g);
    e && (a = Vb(a));
    return a;
  }
  function Ub(a) {
    return [a, this.get(a)];
  }
  var Wb;
  function Xb() {
    return Wb || (Wb = new F(qb([]), void 0, void 0, void 0, Ob));
  }
  function Yb(a, b, c, d) {
    var e = d !== void 0;
    d = !!d;
    var g = [],
      f = a.length,
      h = 4294967295,
      k = !1,
      l = !!(b & 64),
      m = l ? (b & 128 ? 0 : -1) : void 0;
    if (!(b & 1)) {
      var p = f && a[f - 1];
      p != null && typeof p === "object" && p.constructor === Object
        ? (f--, (h = f))
        : (p = void 0);
      if (l && !(b & 128) && !e) {
        k = !0;
        var u;
        h = ((u = Zb) != null ? u : Nb)(h - m, m, a, p, void 0) + m;
      }
    }
    b = void 0;
    for (e = 0; e < f; e++)
      if (((u = a[e]), u != null && (u = c(u, d)) != null))
        if (l && e >= h) {
          var t = e - m,
            w = void 0;
          ((w = b) != null ? w : (b = {}))[t] = u;
        } else g[e] = u;
    if (p)
      for (var H in p)
        (a = p[H]),
          a != null &&
            (a = c(a, d)) != null &&
            ((f = +H),
            (e = void 0),
            l && !Number.isNaN(f) && (e = f + m) < h
              ? (g[e] = a)
              : ((f = void 0), (((f = b) != null ? f : (b = {}))[H] = a)));
    b && (k ? g.push(b) : (g[h] = b));
    return g;
  }
  function $b(a) {
    a[0] = ac(a[0]);
    a[1] = ac(a[1]);
    return a;
  }
  function ac(a) {
    switch (typeof a) {
      case "number":
        return Number.isFinite(a) ? a : "" + a;
      case "bigint":
        return (wb ? a >= yb && a <= Ab : a[0] === "-" ? Bb(a, xb) : Bb(a, zb))
          ? Number(a)
          : "" + a;
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (Array.isArray(a)) {
          var b = a[B] | 0;
          return a.length === 0 && b & 1 ? void 0 : Yb(a, b, ac);
        }
        if (a != null && a[kb] === rb) return bc(a);
        if (a instanceof Wa) {
          b = a.g;
          if (b == null) a = "";
          else if (typeof b === "string") a = b;
          else {
            if (Ra) {
              for (var c = "", d = 0, e = b.length - 10240; d < e; )
                c += String.fromCharCode.apply(
                  null,
                  b.subarray(d, (d += 10240))
                );
              c += String.fromCharCode.apply(null, d ? b.subarray(d) : b);
              b = btoa(c);
            } else {
              c === void 0 && (c = 0);
              Pa();
              c = Ka[c];
              d = Array(Math.floor(b.length / 3));
              e = c[64] || "";
              for (var g = 0, f = 0; g < b.length - 2; g += 3) {
                var h = b[g],
                  k = b[g + 1],
                  l = b[g + 2],
                  m = c[h >> 2];
                h = c[((h & 3) << 4) | (k >> 4)];
                k = c[((k & 15) << 2) | (l >> 6)];
                l = c[l & 63];
                d[f++] = m + h + k + l;
              }
              m = 0;
              l = e;
              switch (b.length - g) {
                case 2:
                  (m = b[g + 1]), (l = c[(m & 15) << 2] || e);
                case 1:
                  (b = b[g]),
                    (d[f] = c[b >> 2] + c[((b & 3) << 4) | (m >> 4)] + l + e);
              }
              b = d.join("");
            }
            a = a.g = b;
          }
          return a;
        }
        if (a instanceof F)
          return (
            (a =
              a.size !== 0
                ? Array.from(E.prototype.entries.call(a), $b)
                : void 0),
            a
          );
        return;
    }
    return a;
  }
  var Zb;
  function bc(a) {
    a = a.h;
    return Yb(a, a[B] | 0, ac);
  }
  function G(a, b, c) {
    var d = d === void 0 ? 0 : d;
    if (a == null) {
      var e = 32;
      c ? ((a = [c]), (e |= 128)) : (a = []);
      b && (e = (e & -8380417) | ((b & 1023) << 13));
    } else {
      if (!Array.isArray(a)) throw Error("narr");
      e = a[B] | 0;
      if (Fa && 1 & e) throw Error("rfarr");
      2048 & e && !(2 & e) && cc();
      if (e & 256) throw Error("farr");
      if (e & 64) return d !== 0 || e & 2048 || C(a, e | 2048), a;
      if (c && ((e |= 128), c !== a[0])) throw Error("mid");
      a: {
        c = a;
        e |= 64;
        var g = c.length;
        if (g) {
          var f = g - 1,
            h = c[f];
          if (h != null && typeof h === "object" && h.constructor === Object) {
            b = e & 128 ? 0 : -1;
            f -= b;
            if (f >= 1024) throw Error("pvtlmt");
            for (var k in h)
              (g = +k), g < f && ((c[g + b] = h[k]), delete h[k]);
            e = (e & -8380417) | ((f & 1023) << 13);
            break a;
          }
        }
        if (b) {
          k = Math.max(b, g - (e & 128 ? 0 : -1));
          if (k > 1024) throw Error("spvt");
          e = (e & -8380417) | ((k & 1023) << 13);
        }
      }
    }
    e |= 64;
    d === 0 && (e |= 2048);
    C(a, e);
    return a;
  }
  function cc() {
    if (Fa) throw Error("carr");
    if (jb != null) {
      var a;
      var b = (a = bb) != null ? a : (bb = {});
      a = b[jb] || 0;
      a >= 5 || ((b[jb] = a + 1), (b = Error()), ab(b, "incident"), Da(b));
    }
  }
  function dc(a, b) {
    if (typeof a !== "object") return a;
    if (Array.isArray(a)) {
      var c = a[B] | 0;
      return a.length === 0 && c & 1 ? void 0 : ec(a, c, b);
    }
    if (a != null && a[kb] === rb) return fc(a);
    if (a instanceof F) {
      b = a.C;
      if (b & 2) return a;
      if (!a.size) return;
      c = qb(Array.from(E.prototype.entries.call(a)));
      if (a.B)
        for (a = 0; a < c.length; a++) {
          var d = c[a],
            e = d[1];
          e == null || typeof e !== "object"
            ? (e = void 0)
            : e != null && e[kb] === rb
            ? (e = fc(e))
            : Array.isArray(e)
            ? (e = ec(e, e[B] | 0, !!(b & 32)))
            : (e = void 0);
          d[1] = e;
        }
      return c;
    }
    if (a instanceof Wa) return a;
  }
  function ec(a, b, c) {
    if (b & 2) return a;
    !c || 4096 & b || 16 & b
      ? (a = hc(a, b, !1, c && !(b & 16)))
      : (pb(a, 34), b & 4 && Object.freeze(a));
    return a;
  }
  function ic(a, b, c) {
    a = new a.constructor(b);
    c && (a.g = sb);
    a.i = sb;
    return a;
  }
  function fc(a) {
    var b = a.h,
      c = b[B] | 0;
    return D(a, c) ? a : jc(a, b, c) ? ic(a, b) : hc(b, c);
  }
  function hc(a, b, c, d) {
    d != null || (d = !!(34 & b));
    a = Yb(a, b, dc, d);
    d = 32;
    c && (d |= 2);
    b = (b & 8380609) | d;
    C(a, b);
    return a;
  }
  function Vb(a) {
    var b = a.h,
      c = b[B] | 0;
    return D(a, c)
      ? jc(a, b, c)
        ? ic(a, b, !0)
        : new a.constructor(hc(b, c, !1))
      : a;
  }
  function kc(a) {
    var b = a.h,
      c = b[B] | 0;
    return D(a, c)
      ? a
      : jc(a, b, c)
      ? ic(a, b)
      : new a.constructor(hc(b, c, !0));
  }
  function lc(a) {
    if (a.g !== sb) return !1;
    var b = a.h;
    b = hc(b, b[B] | 0);
    pb(b, 2048);
    a.h = b;
    a.g = void 0;
    a.i = void 0;
    return !0;
  }
  function mc(a) {
    if (!lc(a) && D(a, a.h[B] | 0)) throw Error();
  }
  function nc(a, b) {
    b === void 0 && (b = a[B] | 0);
    b & 32 && !(b & 4096) && C(a, b | 4096);
  }
  function jc(a, b, c) {
    return c & 2
      ? !0
      : c & 32 && !(c & 4096)
      ? (C(b, c | 2), (a.g = sb), !0)
      : !1;
  }
  function oc(a, b, c, d) {
    a = pc(a.h, b, c, d);
    if (a !== null) return a;
  }
  function pc(a, b, c, d) {
    if (b === -1) return null;
    var e = b + (c ? 0 : -1),
      g = a.length - 1;
    if (!(g < 1 + (c ? 0 : -1))) {
      if (e >= g) {
        var f = a[g];
        if (f != null && typeof f === "object" && f.constructor === Object) {
          c = f[b];
          var h = !0;
        } else if (e === g) c = f;
        else return;
      } else c = a[e];
      if (d && c != null) {
        d = d(c);
        if (d == null) return d;
        if (!Object.is(d, c)) return h ? (f[b] = d) : (a[e] = d), d;
      }
      return c;
    }
  }
  function qc(a, b, c) {
    mc(a);
    var d = a.h;
    I(d, d[B] | 0, b, c);
    return a;
  }
  function I(a, b, c, d) {
    var e = c + -1,
      g = a.length - 1;
    if (g >= 0 && e >= g) {
      var f = a[g];
      if (f != null && typeof f === "object" && f.constructor === Object)
        return (f[c] = d), b;
    }
    if (e <= g) return (a[e] = d), b;
    if (d !== void 0) {
      var h;
      g = (((h = b) != null ? h : (b = a[B] | 0)) >> 13) & 1023 || 536870912;
      c >= g
        ? d != null && ((e = {}), (a[g + -1] = ((e[c] = d), e)))
        : (a[e] = d);
    }
    return b;
  }
  function rc(a, b) {
    a = a.h;
    return sc(a, a[B] | 0, tc, b) !== void 0;
  }
  function uc(a) {
    return (!!(2 & a) && !!(4 & a)) || !!(256 & a);
  }
  function vc(a) {
    return tb(a, !0);
  }
  function wc(a, b, c, d) {
    !d && lc(a) && ((b = a.h), (c = b[B] | 0));
    var e = pc(b, 1);
    a = !1;
    if (e == null) {
      if (d) return Xb();
      e = [];
    } else if (e.constructor === F)
      if (e.C & 2 && !d) e = Array.from(E.prototype.entries.call(e));
      else return e;
    else Array.isArray(e) ? (a = !!((e[B] | 0) & 2)) : (e = []);
    if (d) {
      if (!e.length) return Xb();
      a || ((a = !0), qb(e));
    } else if (a) {
      a = !1;
      d = Cb(e);
      for (e = 0; e < d.length; e++) {
        var g = (d[e] = Cb(d[e]));
        Array.isArray(g[1]) && (g[1] = qb(g[1]));
      }
      e = d;
    }
    !a && c & 32 && pb(e, 32);
    d = new F(e, void 0, Lb, Mb);
    c = I(b, c, 1, d);
    a || nc(b, c);
    return d;
  }
  function xc(a) {
    var b = a.h,
      c = b[B] | 0;
    return wc(a, b, c, D(a, c));
  }
  function yc(a, b) {
    a = a.h;
    return zc(Ac(a), a, void 0, b);
  }
  function Ac(a) {
    if (db) {
      var b;
      return (b = a[ib]) != null ? b : (a[ib] = new Map());
    }
    if (ib in a) return a[ib];
    b = new Map();
    Object.defineProperty(a, ib, { value: b });
    return b;
  }
  function zc(a, b, c, d) {
    var e = a.get(d);
    if (e != null) return e;
    for (var g = (e = 0); g < d.length; g++) {
      var f = d[g];
      pc(b, f) != null && (e !== 0 && (c = I(b, c, e)), (e = f));
    }
    a.set(d, e);
    return e;
  }
  function sc(a, b, c, d) {
    var e = !1;
    d = pc(a, d, void 0, function (g) {
      var f = Jb(g, c, !1, b);
      e = f !== g && f != null;
      return f;
    });
    if (d != null) return e && !D(d) && nc(a, b), d;
  }
  function J(a, b, c) {
    a = a.h;
    return sc(a, a[B] | 0, b, c) || b[hb] || (b[hb] = Kb(b));
  }
  function K(a, b, c) {
    var d = a.h,
      e = d[B] | 0;
    b = sc(d, e, b, c);
    if (b == null) return b;
    e = d[B] | 0;
    if (!D(a, e)) {
      var g = Vb(b);
      g !== b &&
        (lc(a) && ((d = a.h), (e = d[B] | 0)),
        (b = g),
        (e = I(d, e, c, b)),
        nc(d, e));
    }
    return b;
  }
  function Bc(a, b, c) {
    var d = void 0 === vb ? 2 : 4;
    var e = a.h,
      g = e,
      f = e[B] | 0,
      h = D(a, f);
    e = h ? 1 : d;
    d = e === 3;
    var k = !h;
    (e === 2 || k) && lc(a) && ((g = a.h), (f = g[B] | 0));
    a = pc(g, c);
    h = Array.isArray(a) ? a : nb;
    var l = h === nb ? 7 : h[B] | 0;
    a = l;
    2 & f && (a |= 2);
    var m = a | 1;
    if ((a = !(4 & m))) {
      var p = h,
        u = f,
        t = !!(2 & m);
      t && (u |= 2);
      for (var w = !t, H = !0, M = 0, ja = 0; M < p.length; M++) {
        var La = Jb(p[M], b, !1, u);
        if (La instanceof b) {
          if (!t) {
            var eb = D(La);
            w && (w = !eb);
            H && (H = eb);
          }
          p[ja++] = La;
        }
      }
      ja < M && (p.length = ja);
      m |= 4;
      m = H ? m & -4097 : m | 4096;
      m = w ? m | 8 : m & -9;
    }
    m !== l && (C(h, m), 2 & m && Object.freeze(h));
    if (
      k &&
      !(
        8 & m ||
        (!h.length &&
          (e === 1 || (e !== 4 ? 0 : 2 & m || (!(16 & m) && 32 & f))))
      )
    ) {
      uc(m) && ((h = Cb(h)), (m = Cc(m, f)), (f = I(g, f, c, h)));
      b = h;
      k = m;
      for (l = 0; l < b.length; l++)
        (p = b[l]), (m = Vb(p)), p !== m && (b[l] = m);
      k |= 8;
      m = k = b.length ? k | 4096 : k & -4097;
      C(h, m);
    }
    b = h;
    k = h = m;
    e === 1 || (e !== 4 ? 0 : 2 & h || (!(16 & h) && 32 & f))
      ? uc(h) ||
        ((h |=
          !b.length || (a && !(4096 & h)) || (32 & f && !(4096 & h || 16 & h))
            ? 2
            : 256),
        h !== k && C(b, h),
        Object.freeze(b))
      : (e === 2 &&
          uc(h) &&
          ((b = Cb(b)), (k = 0), (h = Cc(h, f)), (f = I(g, f, c, b))),
        uc(h) || (d || (h |= 16), h !== k && C(b, h)));
    2 & h || !(4096 & h || 16 & h) || nc(g, f);
    return b;
  }
  function Dc(a) {
    a == null && (a = void 0);
    return a;
  }
  function Ec(a, b, c) {
    c = Dc(c);
    qc(a, b, c);
    c && !D(c) && nc(a.h);
    return a;
  }
  function L(a, b, c) {
    var d = Fc;
    c = Dc(c);
    a: {
      var e = c;
      mc(a);
      var g = a.h,
        f = g[B] | 0;
      if (e == null) {
        var h = Ac(g);
        if (zc(h, g, f, d) === b) h.set(d, 0);
        else break a;
      } else {
        h = Ac(g);
        var k = zc(h, g, f, d);
        k !== b && (k && (f = I(g, f, k)), h.set(d, b));
      }
      I(g, f, b, e);
    }
    c && !D(c) && nc(a.h);
    return a;
  }
  function Cc(a, b) {
    return (a = (2 & b ? a | 2 : a & -3) & -273);
  }
  function Gc(a, b) {
    var c = c === void 0 ? !1 : c;
    a = oc(a, b);
    a =
      a == null || typeof a === "boolean"
        ? a
        : typeof a === "number"
        ? !!a
        : void 0;
    return a != null ? a : c;
  }
  function Hc(a, b) {
    var c = c === void 0 ? 0 : c;
    a = Hb(oc(a, b));
    return a != null ? a : c;
  }
  function N(a, b) {
    var c = c === void 0 ? "" : c;
    a = Ib(oc(a, b));
    return a != null ? a : c;
  }
  function O(a, b) {
    var c = c === void 0 ? 0 : c;
    a = Gb(oc(a, b));
    return a != null ? a : c;
  }
  function P(a, b, c, d) {
    c = yc(a, d) === c ? c : -1;
    return K(a, b, c);
  }
  function Ic(a, b, c) {
    if (c != null && typeof c !== "boolean")
      throw (
        ((a = typeof c),
        Error(
          "Expected boolean but got " +
            (a != "object"
              ? a
              : c
              ? Array.isArray(c)
                ? "array"
                : a
              : "null") +
            ": " +
            c
        ))
      );
    return qc(a, b, c);
  }
  function Q(a, b, c) {
    if (c != null) {
      if (typeof c !== "number") throw cb("int32");
      if (!Eb(c)) throw cb("int32");
      c |= 0;
    }
    return qc(a, b, c);
  }
  function R(a, b, c) {
    if (c != null && typeof c !== "string") throw Error();
    return qc(a, b, c);
  }
  function S(a, b, c) {
    this.h = G(a, b, c);
  }
  S.prototype.toJSON = function () {
    return bc(this);
  };
  function Jc(a) {
    return Vb(a);
  }
  function Kc(a) {
    return kc(a);
  }
  S.prototype[kb] = rb;
  S.prototype.toString = function () {
    return this.h.toString();
  };
  function Lc(a) {
    return function () {
      return a[hb] || (a[hb] = Kb(a));
    };
  }
  function Mc(a) {
    this.h = G(a);
  }
  v(Mc, S);
  function Nc(a) {
    this.h = G(a);
  }
  v(Nc, S);
  function Oc(a) {
    this.h = G(a);
  }
  v(Oc, S);
  function Pc(a) {
    this.h = G(a);
  }
  v(Pc, S);
  function Qc(a) {
    this.h = G(a);
  }
  v(Qc, S);
  function Rc(a) {
    this.h = G(a);
  }
  v(Rc, S);
  function Sc(a) {
    this.h = G(a);
  }
  v(Sc, S);
  function Tc(a) {
    return N(a, 1);
  }
  function Uc(a) {
    this.h = G(a);
  }
  v(Uc, S);
  function Vc(a) {
    this.h = G(a);
  }
  v(Vc, S);
  function Wc(a) {
    this.h = G(a);
  }
  v(Wc, S);
  function Xc(a) {
    this.h = G(a);
  }
  v(Xc, S);
  function Yc(a) {
    this.h = G(a);
  }
  v(Yc, S);
  function Zc(a) {
    this.h = G(a);
  }
  v(Zc, S);
  function $c(a) {
    this.h = G(a);
  }
  v($c, S);
  function ad(a) {
    this.h = G(a);
  }
  v(ad, S);
  function bd(a) {
    this.h = G(a);
  }
  v(bd, S);
  function cd(a) {
    this.h = G(a);
  }
  v(cd, S);
  function dd(a) {
    this.h = G(a);
  }
  v(dd, S);
  function ed(a) {
    this.h = G(a);
  }
  v(ed, S);
  function fd(a) {
    this.h = G(a);
  }
  v(fd, S);
  function gd(a) {
    this.h = G(a);
  }
  v(gd, S);
  function hd(a) {
    this.h = G(a);
  }
  v(hd, S);
  function id(a) {
    this.h = G(a);
  }
  v(id, S);
  function jd(a) {
    this.h = G(a);
  }
  v(jd, S);
  function kd(a) {
    this.h = G(a);
  }
  v(kd, S);
  function ld(a) {
    this.h = G(a);
  }
  v(ld, S);
  function md(a) {
    this.h = G(a);
  }
  v(md, S);
  function nd(a) {
    this.h = G(a);
  }
  v(nd, S);
  function od(a) {
    this.h = G(a);
  }
  v(od, S);
  function pd(a) {
    this.h = G(a);
  }
  v(pd, S);
  function qd(a) {
    this.h = G(a);
  }
  v(qd, S);
  function tc(a) {
    this.h = G(a);
  }
  v(tc, S);
  function rd(a) {
    this.h = G(a);
  }
  v(rd, S);
  function sd(a) {
    this.h = G(a);
  }
  v(sd, S);
  function td(a) {
    this.h = G(a);
  }
  v(td, S);
  function ud(a) {
    this.h = G(a);
  }
  v(ud, S);
  function vd(a) {
    this.h = G(a);
  }
  v(vd, S);
  function wd(a) {
    this.h = G(a);
  }
  v(wd, S);
  function xd(a, b) {
    mc(a);
    var c = a.h,
      d = c[B] | 0;
    if (b == null) I(c, d, 1);
    else {
      for (
        var e = b === nb ? 7 : b[B] | 0,
          g = e,
          f = uc(e),
          h = f || Object.isFrozen(b),
          k = !0,
          l = !0,
          m = 0;
        m < b.length;
        m++
      ) {
        var p = b[m];
        f || ((p = D(p)), k && (k = !p), l && (l = p));
      }
      f || ((e = k ? 13 : 5), (e = l ? e & -4097 : e | 4096));
      (h && e === g) || ((b = Cb(b)), (g = 0), (e = Cc(e, d)));
      e !== g && C(b, e);
      d = I(c, d, 1, b);
      2 & e || !(4096 & e || 16 & e) || nc(c, d);
    }
    return a;
  }
  function yd(a, b) {
    return Q(a, 2, b);
  }
  function zd(a) {
    this.h = G(a);
  }
  v(zd, S);
  function Ad(a) {
    this.h = G(a);
  }
  v(Ad, S);
  function Bd(a) {
    this.h = G(a);
  }
  v(Bd, S);
  function Cd(a) {
    this.h = G(a);
  }
  v(Cd, S);
  function Dd(a) {
    this.h = G(a);
  }
  v(Dd, S);
  function T(a) {
    this.h = G(a);
  }
  v(T, S);
  T.prototype.G = function () {
    return yc(this, Fc);
  };
  function Ed(a, b) {
    return L(a, 17, b);
  }
  var Fc = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29,
  ];
  function U(a) {
    this.h = G(a);
  }
  v(U, S);
  function Fd(a) {
    this.h = G(a);
  }
  v(Fd, S);
  function Gd(a) {
    this.h = G(a);
  }
  v(Gd, S);
  Gd.prototype.getRoomUrl = function () {
    return N(this, 1);
  };
  function Hd(a) {
    this.h = G(a);
  }
  v(Hd, S);
  Hd.prototype.getRoomUrl = function () {
    return N(this, 2);
  };
  function Id(a) {
    this.h = G(a);
  }
  v(Id, S);
  function Jd(a) {
    this.h = G(a);
  }
  v(Jd, S);
  function Kd(a) {
    this.h = G(a);
  }
  v(Kd, S);
  Kd.prototype.G = function () {
    return yc(this, Ld);
  };
  var Ld = [1, 2];
  function Md(a) {
    this.h = G(a);
  }
  v(Md, S);
  function Nd(a) {
    this.h = G(a);
  }
  v(Nd, S);
  function Od(a) {
    this.h = G(a);
  }
  v(Od, S);
  function Pd(a) {
    this.h = G(a);
  }
  v(Pd, S);
  function Qd(a) {
    this.h = G(a);
  }
  v(Qd, S);
  Qd.prototype.getChallengeLink = function () {
    return N(this, 1);
  };
  function Rd(a) {
    this.h = G(a);
  }
  v(Rd, S);
  function Sd(a) {
    this.h = G(a);
  }
  v(Sd, S);
  function Td(a) {
    this.h = G(a);
  }
  v(Td, S);
  function Ud(a) {
    this.h = G(a);
  }
  v(Ud, S);
  function Vd(a) {
    this.h = G(a);
  }
  v(Vd, S);
  function Wd(a) {
    this.h = G(a);
  }
  v(Wd, S);
  function Xd(a) {
    this.h = G(a);
  }
  v(Xd, S);
  function Yd(a) {
    this.h = G(a);
  }
  v(Yd, S);
  function Zd(a) {
    this.h = G(a);
  }
  v(Zd, S);
  function $d(a) {
    this.h = G(a);
  }
  v($d, S);
  function ae(a) {
    this.h = G(a);
  }
  v(ae, S);
  ae.prototype.G = function () {
    return yc(this, V);
  };
  var V = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
  ];
  var be = Lc(pd);
  var ce = Lc(tc);
  var de = Lc(qd);
  function ee(a) {
    var b = this;
    this.channel = a;
    this.g = new Map();
    this.i = 1;
    a = fe(this.channel, 9);
    a.register(8, function (c) {
      var d,
        e,
        g = b.g,
        f = g.get;
      c = P(c.data, Rc, 8, V);
      c = N(c, 1);
      (d = f.call(g, c)) == null || (e = d.beforeAd) == null || e.call(d);
    });
    a.register(9, function (c) {
      var d,
        e,
        g = b.g,
        f = g.get;
      c = P(c.data, Qc, 9, V);
      c = N(c, 1);
      (d = f.call(g, c)) == null || (e = d.afterAd) == null || e.call(d);
    });
    a.register(10, function (c) {
      var d = Tc(P(c.data, Sc, 10, V)),
        e,
        g;
      (e = b.g.get(d)) == null ||
        (g = e.beforeReward) == null ||
        g.call(e, function () {
          var f = new T();
          var h = new Wc();
          h = R(h, 1, d);
          f = L(f, 11, h);
          b.channel.send(f);
        });
    });
    a.register(11, function (c) {
      var d,
        e,
        g = b.g,
        f = g.get;
      c = P(c.data, Pc, 11, V);
      c = N(c, 1);
      (d = f.call(g, c)) == null || (e = d.adViewed) == null || e.call(d);
    });
    a.register(12, function (c) {
      var d,
        e,
        g = b.g,
        f = g.get;
      c = P(c.data, Oc, 12, V);
      c = N(c, 1);
      (d = f.call(g, c)) == null || (e = d.adDismissed) == null || e.call(d);
    });
    a.register(13, function (c) {
      var d = P(c.data, Nc, 13, V);
      d = N(d, 1);
      c = P(c.data, Nc, 13, V);
      c = K(c, Mc, 2);
      var e, g;
      (e = b.g.get(d)) == null ||
        (g = e.adBreakDone) == null ||
        g.call(e, {
          breakType: N(c, 1),
          breakName: N(c, 2),
          breakFormat: N(c, 3),
          breakStatus: N(c, 4),
        });
      b.g.delete(d);
    });
  }
  ee.prototype.P = function (a) {
    var b = String(this.i++);
    this.g.set(b, a);
    var c = new T(),
      d = new Vc();
    b = R(d, 1, b);
    d = new Uc();
    d = R(d, 1, a.type);
    d = R(d, 2, a.name);
    d = Ic(d, 3, !!a.beforeAd);
    d = Ic(d, 4, !!a.afterAd);
    d = Ic(d, 5, !!a.beforeReward);
    d = Ic(d, 7, !!a.adViewed);
    a = Ic(d, 6, !!a.adDismissed);
    a = Ec(b, 2, a);
    c = L(c, 10, a);
    this.channel.send(c);
  };
  function ge(a) {
    a.indexOf("#") === 0 && (a = a.substring(1));
    return new URLSearchParams(a);
  }
  var he = !1;
  function ie() {}
  function W(a) {
    he && console.log("GameSnacks Developer SDK: " + a);
  }
  function je(a) {
    return a ? "on" : "off";
  }
  var ke = ["preroll", "start", "pause", "next", "browse"];
  function le(a, b, c, d) {
    var e = this;
    this.m = a;
    this.u = b;
    this.audio = c;
    this.channel = d;
    this.ca = !1;
    this.va = function (g) {
      (e.u.O || e.u.K) &&
        window.adsbygoogle.push({ sound: je(g.isAudioEnabled) });
    };
    this.U = this.u.ba
      ? this.channel
        ? new ee(this.channel)
        : new me()
      : new ne();
    oe(this.m, "SET_AUDIO", this.va);
    (a = pe.ua()) &&
      setTimeout(function () {
        return void qe(e);
      }, Math.max(0, a - Date.now()));
    oe(this.m, "SPLASH_TIMEOUT", function () {
      e.ca = !0;
    });
    window.adsbygoogle = window.adsbygoogle || [];
    b.requestNonPersonalizedAds &&
      (window.adsbygoogle.requestNonPersonalizedAds = 1);
    if (b.O || b.K)
      (b = {
        preloadAdBreaks: "on",
        sound: je(this.audio.isEnabled()),
        onReady: function () {
          window.adsbygoogle.push({ preloadAdBreaks: "on" });
        },
      }),
        window.adsbygoogle.push(b);
  }
  function qe(a) {
    a.ca ||
      a.break({
        type: "preroll",
        beforeAd: function () {
          re(a.audio, !0);
          setTimeout(function () {
            a.m.send({ messageType: "PREROLL_READY" });
          }, 33);
        },
        adBreakDone: function () {
          re(a.audio, !1);
          a.m.send({ messageType: "PREROLL_DONE" });
        },
      });
  }
  le.prototype.break = function (a) {
    var b = this;
    W("Ad break called");
    this.m.send({ messageType: "AD_BREAK" });
    if (a.type !== "preroll") {
      var c = a.beforeAd;
      a.beforeAd = function () {
        b.m.send({ messageType: "BEFORE_AD" });
        c == null || c();
      };
      var d = a.afterAd;
      a.afterAd = function () {
        b.m.send({ messageType: "AFTER_AD" });
        d == null || d();
      };
    }
    var e = this.u.O && a.type === "reward",
      g = this.u.K && ke.includes(a.type);
    e && this.U.P(a);
    g && this.U.P(a);
    if ((!this.u.Z || (!e && !g)) && (e = a.adBreakDone) != null) {
      a: switch (a.type) {
        case "preroll":
          g = "preroll";
          break a;
        case "reward":
          g = "reward";
          break a;
        default:
          g = "interstitial";
      }
      e.call(a, {
        breakType: a.type,
        breakName: a.name,
        breakFormat: g,
        breakStatus: "ignored",
      });
    }
  };
  var pe = {
    ua: function (a) {
      a = ge(a || window.location.hash);
      if (!a) return 0;
      a = (a = a.get("preStart")) ? Number(a) : 0;
      return isNaN(a) ? 0 : a;
    },
  };
  function ne() {}
  ne.prototype.P = function (a) {
    window.adsbygoogle.push(a);
  };
  function me() {}
  me.prototype.P = function () {};
  function se(a) {
    var b = this;
    this.m = a;
    this.g = !te.ma();
    this.l = [];
    this.i = !1;
    this.j = !0;
    this.o = this.g;
    oe(this.m, "SET_AUDIO", function (c) {
      b.g = c.isAudioEnabled;
      ue(b);
    });
  }
  function re(a, b) {
    a.i !== b && ((a.i = b), ue(a));
  }
  function ue(a) {
    var b = a.g && !a.i && a.j;
    if (b !== a.o) {
      for (var c = x(a.l), d = c.next(); !d.done; d = c.next())
        (d = d.value), d(b);
      a.o = b;
    }
  }
  se.prototype.isEnabled = function () {
    W("isAudioEnabled called");
    this.m.send({ messageType: "AUDIO_IS_ENABLED" });
    return this.g && !this.i && this.j;
  };
  se.prototype.subscribe = function (a) {
    typeof a !== "function"
      ? W(
          "subscribeToAudioUpdates must be called with a function,\n          was called with " +
            typeof a
        )
      : (W("subscribeToAudioUpdates called"),
        this.m.send({ messageType: "AUDIO_SUBSCRIBE" }),
        this.l.push(a));
  };
  var te = {
    ma: function (a) {
      return ge(a || window.location.hash).get("audioMuted") === "true";
    },
  };
  function X(a, b) {
    a = Error.call(this, a);
    this.message = a.message;
    "stack" in a && (this.stack = a.stack);
    this.code = b === void 0 ? 2 : b;
  }
  v(X, Error);
  function ve(a, b) {
    this.data = a;
    this.channel = b;
  }
  function we(a, b) {
    a.channel.send(b, void 0, void 0);
  }
  function xe(a) {
    this.g = a;
  }
  xe.prototype.send = function (a, b, c) {
    c = c === void 0 ? [] : c;
    b = ye(b);
    this.g.postMessage(a, [b.port2].concat(c));
  };
  function ze(a, b) {
    Ae(a, b);
    return new xe(a);
  }
  function ye(a) {
    var b = new MessageChannel();
    Ae(b.port1, a);
    return b;
  }
  function Ae(a, b) {
    b &&
      (a.onmessage = function (c) {
        var d = c.data;
        c = ze(c.ports[0]);
        b(new ve(d, c));
      });
  }
  function Be(a) {
    try {
      a();
    } catch (b) {
      Da(b);
    }
  }
  function Ce(a) {
    var b = this;
    var c = a.sa;
    var d = a.Da === void 0 ? function () {} : a.Da;
    var e = a.Aa === void 0 ? function () {} : a.Aa;
    a = a.za === void 0 ? function () {} : a.za;
    this.g = new Map();
    this.i = c;
    this.o = d;
    this.l = e;
    this.j = a;
    this.onMessage = function (g) {
      return De(b, g);
    };
  }
  Ce.prototype.register = function (a, b) {
    this.g.set(a, b);
    return this;
  };
  function De(a, b) {
    var c = a.i(b.data),
      d = a.g.get(c);
    d
      ? (Be(function () {
          return a.l(b, c);
        }),
        Be(function () {
          return d(b);
        }),
        Be(function () {
          return a.j(b, c);
        }))
      : Be(function () {
          return a.o(b, c);
        });
  }
  function Ee(a) {
    this.g = a;
  }
  Ee.prototype.send = function (a, b, c) {
    this.g.send(bc(a), b, c);
  };
  function Fe(a, b) {
    return function (c) {
      var d = new a(c.data);
      return b(new ve(d, c.channel));
    };
  }
  function Ge(a) {
    return function (b) {
      return a(new ve(b.data, new Ee(b.channel)));
    };
  }
  function He(a, b, c, d) {
    this.l = a;
    this.i = b;
    this.N = c;
    this.R = d;
    this.g = !1;
    this.j = new Set();
  }
  function Ie(a) {
    var b = new Ce({ sa: a.G }),
      c = {
        destination: window.parent,
        origin: a.origin,
        J: a.J,
        onMessage: Ge(Fe(a.N, b.onMessage)),
      };
    var d = c.destination;
    var e = c.origin;
    var g = c.Ea === void 0 ? void 0 : c.Ea;
    var f = c.J === void 0 ? "ZNWN1d" : c.J;
    c = c.onMessage === void 0 ? void 0 : c.onMessage;
    if (e === "*") throw Error("Sending to wildcard origin not allowed.");
    var h = ye(c),
      k = {};
    g = g ? ((k.n = f), (k.t = g), k) : f;
    d.postMessage(g, e, [h.port2]);
    d = ze(h.port1, c);
    return new He(b, new Ee(d), a.N, a.R);
  }
  He.prototype.send = function (a) {
    if (!this.g)
      throw new X("Attempted to send a message before initialisation.");
    this.i.send(a);
  };
  function Y(a, b) {
    return z(function (c) {
      if (!a.g)
        throw new X("Attempted to send a message before initialisation.");
      return c.return(
        new Promise(function (d) {
          a.i.send(b, Ge(Fe(a.N, d)));
        })
      );
    });
  }
  He.prototype.init = function () {
    var a = this;
    return z(function (b) {
      if (a.g)
        throw new X(
          "Attempted to initialise twice. The SDK can only be initialised once."
        );
      if (a.R !== void 0) {
        var c = a.i,
          d = c.send,
          e = a.R,
          g = new Dd();
        var f = [].concat(na(a.j));
        mc(g);
        var h = g.h,
          k = h[B] | 0;
        if (f == null) I(h, k, 1);
        else {
          var l = f === nb ? 7 : f[B] | 0,
            m = l,
            p = uc(l),
            u = p || Object.isFrozen(f);
          p || (l = 0);
          u || ((f = Cb(f)), (m = 0), (l = Cc(l, k)), (u = !1));
          l |= 5;
          for (p = 0; p < f.length; p++) {
            var t = f[p],
              w = Fb(t);
            Object.is(t, w) ||
              (u && ((f = Cb(f)), (m = 0), (l = Cc(l, k)), (u = !1)),
              (f[p] = w));
          }
          l !== m && (u && ((f = Cb(f)), (l = Cc(l, k))), C(f, l));
          I(h, k, 1, f);
        }
        d.call(c, e.call(a, g));
      }
      a.g = !0;
      b.g = 0;
    });
  };
  function fe(a, b) {
    if (a.g)
      throw new X(
        'Attempted to set up API "' +
          b +
          '" after initialisation. All APIs must be set up before initialising the SDK.'
      );
    a.j.add(b);
    return a.l;
  }
  function Je(a) {
    return Ie({
      origin: a,
      J: "gamesnacks-developer",
      N: ae,
      G: function (b) {
        return b.G();
      },
    });
  }
  function Ke(a) {
    var b = J(a, qd, 3),
      c = J(a, pd, 2);
    a = N(b, 1);
    b = N(b, 2);
    var d = N(c, 1);
    c = N(c, 3);
    return { username: { prefix: a, suffix: b }, avatar: { src: d, alt: c } };
  }
  function Le(a) {
    var b = Hc(a, 3),
      c = Gc(a, 5),
      d = N(a, 2),
      e = Hc(a, 4);
    a: {
      var g = O(a, 6);
      switch (g) {
        case 1:
          g = "START_GAME";
          break a;
        case 0:
          break;
        default:
          Db(g);
      }
      g = void 0;
    }
    return {
      actionOrder: b,
      isLocalPlayer: c,
      payload: d,
      serverTimestampMillis: e,
      type: g,
      uid: N(a, 1),
    };
  }
  function Me(a) {
    var b = O(a, 4);
    return {
      action: Ne.get(b),
      isLocalPlayer: Gc(a, 5),
      isHost: Gc(a, 3),
      profile: Ke(Kc(J(a, tc, 1))),
      uid: N(a, 2),
    };
  }
  var Ne = new Map([
    [1, "JOIN"],
    [2, "LEAVE"],
    [3, "HOST_CHANGED"],
  ]);
  function Oe(a) {
    var b = N(a, 1);
    var c = oc(a, 2, void 0, vc);
    var d = c == null ? Za() : c;
    c = Uint8Array;
    Xa(Va);
    var e = d.g;
    if (!(e == null || (Qa && e != null && e instanceof Uint8Array)))
      if (typeof e === "string")
        if (Ra) {
          e = Sa.test(e) ? e.replace(Sa, Ua) : e;
          e = atob(e);
          for (var g = new Uint8Array(e.length), f = 0; f < e.length; f++)
            g[f] = e.charCodeAt(f);
          e = g;
        } else e = Na(e);
      else e = null;
    d = e == null ? e : (d.g = e);
    c = new c(d || 0);
    d = J(a, od, 3);
    d = N(d, 1);
    e = J(a, od, 3);
    e = Hc(e, 2);
    b = { id: b, data: c, score: { key: d, value: e }, gameLevel: Hc(a, 4) };
    rc(a, 5) && (b.profile = Ke(Kc(J(a, tc, 5))));
    return b;
  }
  function Pe(a) {
    var b = new Map();
    a = x(a);
    for (var c = a.next(); !c.done; c = a.next()) {
      var d = x(c.value);
      c = d.next().value;
      d = d.next().value;
      b.set(c, Qe(d));
    }
    return b;
  }
  function Re(a) {
    return {
      rank: Hc(a, 1),
      profile: Ke(Kc(J(a, tc, 2))),
      scoreValue: Hc(a, 3),
      isCurrentUser: Gc(a, 4),
    };
  }
  function Se(a) {
    var b = J(a, td, 1);
    b = { key: N(b, 1), level: Hc(b, 3), duration: Qe(O(b, 2)) };
    a = Bc(a, Ud, 2);
    return { type: b, entries: a.map(Re) };
  }
  function Te(a) {
    var b = new td();
    b = R(b, 1, a.key);
    b = Q(b, 3, a.level);
    a = Ue(a.duration);
    return qc(b, 2, a == null ? a : Fb(a));
  }
  function Qe(a) {
    switch (a) {
      case 2:
        return "DAILY";
      case 3:
        return "WEEKLY";
      case 1:
        return "ALL_TIME";
      default:
        return "ALL_TIME";
    }
  }
  function Ue(a) {
    switch (a) {
      case "DAILY":
        return 2;
      case "WEEKLY":
        return 3;
      case "ALL_TIME":
        return 1;
      default:
        return 0;
    }
  }
  function Ve(a, b, c, d, e) {
    this.m = a;
    this.u = b;
    this.g = c;
    this.ad = d;
    this.channel = e;
    this.i = [];
    this.j = [];
    this.channel &&
      fe(this.channel, 2)
        .register(6, this.Ba.bind(this))
        .register(7, this.Ca.bind(this));
  }
  n = Ve.prototype;
  n.firstFrameReady = function () {
    W("firstFrameReady called");
    var a;
    if ((a = this.channel) != null) {
      var b = a.send;
      var c = new T();
      var d = new Xc();
      c = L(c, 5, d);
      b.call(a, c);
    }
  };
  n.ready = function () {
    W("gameReady called");
    this.m.send({ messageType: "GAME_READY", timestamp: Date.now() });
  };
  n.onPause = function (a) {
    this.i.push(a);
    if ((a = this.channel) != null) {
      var b = a.send;
      var c = new T();
      var d = new Zc();
      c = L(c, 8, d);
      b.call(a, c);
    }
  };
  n.onResume = function (a) {
    this.j.push(a);
    if ((a = this.channel) != null) {
      var b = a.send;
      var c = new T();
      var d = new ad();
      c = L(c, 9, d);
      b.call(a, c);
    }
  };
  n.gameOver = function () {
    W("gameOver called");
    this.m.send({ messageType: "GAME_OVER" });
    this.u.Y && We(this, "gameOver");
  };
  n.levelComplete = function (a) {
    typeof a !== "number"
      ? W(
          "levelComplete must be called with a number, was called with " +
            typeof a
        )
      : (W("levelComplete called with level: " + a),
        this.m.send({ messageType: "LEVEL_COMPLETE", level: a }),
        this.u.aa && We(this, "levelComplete"));
  };
  n.levelLoaded = function (a) {
    if (typeof a !== "number")
      W(
        "levelLoaded must be called with a number, was called with " + typeof a
      );
    else {
      W("levelLoaded called with level: " + a);
      var b;
      if ((b = this.channel) != null) {
        var c = b.send,
          d = new T(),
          e = new Yc();
        a = Q(e, 1, a);
        d = L(d, 29, a);
        c.call(b, d);
      }
    }
  };
  n.Ba = function (a) {
    for (var b = x(this.i), c = b.next(); !c.done; c = b.next())
      (c = c.value), c();
    b = new T();
    c = new $c();
    b = L(b, 6, c);
    we(a, b);
  };
  n.Ca = function (a) {
    for (var b = x(this.j), c = b.next(); !c.done; c = b.next())
      (c = c.value), c();
    b = new T();
    c = new bd();
    b = L(b, 7, c);
    we(a, b);
  };
  function We(a, b) {
    a.ad.break({
      type: "next",
      name: b,
      beforeAd: function () {
        return void re(a.g, !0);
      },
      adBreakDone: function () {
        return void re(a.g, !1);
      },
    });
  }
  function Xe(a, b) {
    var c = this;
    this.g = a;
    this.i = [];
    this.l = [];
    this.j = [];
    fe(b, 11)
      .register(28, function (d) {
        return void Ye(c, d);
      })
      .register(26, function (d) {
        return void Ze(c, d);
      })
      .register(27, function (d) {
        return void $e(c, d);
      });
  }
  function af(a, b) {
    bf(a.g, function () {
      for (var c = x(a.i), d = c.next(); !d.done; d = c.next())
        (d = d.value), d(b);
    });
  }
  function Ye(a, b) {
    var c;
    return z(function (d) {
      var e = P(b.data, Id, 28, V);
      c = Bc(e, id, 1).map(Le);
      af(a, Promise.resolve(c));
      e = new T();
      var g = new fd();
      e = L(e, 26, g);
      we(b, e);
      d.g = 0;
    });
  }
  function cf(a, b) {
    bf(a.g, function () {
      for (var c = x(a.l), d = c.next(); !d.done; d = c.next())
        (d = d.value), d(Promise.resolve(b));
    });
  }
  function Ze(a, b) {
    var c;
    return z(function (d) {
      var e = P(b.data, Nd, 26, V);
      c = K(e, Md, 1);
      cf(a, { roomId: N(c, 1), players: Bc(c, Jd, 2).map(Me) });
      e = new T();
      var g = new hd();
      e = L(e, 24, g);
      we(b, e);
      d.g = 0;
    });
  }
  function df(a, b) {
    bf(a.g, function () {
      for (var c = x(a.j), d = c.next(); !d.done; d = c.next())
        (d = d.value), d(b);
    });
  }
  function $e(a, b) {
    var c, d, e;
    return z(function (g) {
      c = P(b.data, Kd, 27, V);
      e = (d = P(c, U, 2, Ld)) == null ? void 0 : kc(d);
      df(
        a,
        Promise.resolve(
          e ? { message: N(e, 2), code: O(e, 1) } : Me(P(c, Jd, 1, Ld))
        )
      );
      var f = new T();
      var h = new gd();
      f = L(f, 25, h);
      we(b, f);
      g.g = 0;
    });
  }
  function ef(a, b) {
    this.g = a;
    this.channel = b;
    this.i = new Xe(a, b);
  }
  n = ef.prototype;
  n.createRoom = function () {
    var a = this,
      b,
      c,
      d,
      e;
    return z(function (g) {
      if (g.g == 1) {
        var f = new T(),
          h = new dd();
        b = L(f, 20, h);
        g.j = 2;
        return y(g, Y(a.channel, b), 4);
      }
      if (g.g != 2)
        return (
          (c = g.i),
          (d = P(c.data, Gd, 22, V)),
          ff(K(d, U, 2)),
          g.return(d.getRoomUrl())
        );
      e = ra(g);
      if (e instanceof X) throw e;
      throw new X(
        "Could not get room url due to an unexpected error. Please try again."
      );
    });
  };
  n.getRoomUrl = function () {
    var a = this,
      b,
      c,
      d,
      e;
    return z(function (g) {
      if (g.g == 1) {
        var f = new T(),
          h = new ed();
        b = L(f, 28, h);
        g.j = 2;
        return y(g, Y(a.channel, b), 4);
      }
      if (g.g != 2)
        return (
          (c = g.i),
          (d = P(c.data, Hd, 32, V)),
          ff(K(d, U, 1)),
          g.return(d.getRoomUrl())
        );
      e = ra(g);
      if (e instanceof X) throw e;
      throw new X(
        "Could not get room url due to an unexpected error. Please try again."
      );
    });
  };
  n.onRoomLoaded = function (a) {
    if (this.g.D)
      throw new X("Please register all handlers before initializing the SDK.");
    this.i.l.push(a);
  };
  n.updatePlayerPresence = function (a) {
    var b = this,
      c,
      d,
      e,
      g;
    return z(function (f) {
      if (f.g == 1) {
        var h = new T(),
          k = new kd();
        a: switch (a) {
          case "JOIN":
            var l = 1;
            break a;
          case "LEAVE":
            l = 2;
            break a;
          default:
            throw new X("Unknown player presence.");
        }
        k = qc(k, 1, l == null ? l : Fb(l));
        c = L(h, 21, k);
        f.j = 2;
        return y(f, Y(b.channel, c), 4);
      }
      if (f.g != 2)
        (d = f.i),
          (e = P(d.data, Pd, 23, V)),
          ff(K(e, U, 1)),
          (f.g = 0),
          (f.j = 0);
      else {
        g = ra(f);
        if (g instanceof X) throw g;
        throw new X(
          "Could not update player presence due to an unexpected error. Please try again."
        );
      }
    });
  };
  n.onPlayerPresenceUpdated = function (a) {
    if (this.g.D)
      throw new X("Please register all handlers before initializing the SDK.");
    this.i.j.push(a);
  };
  n.sendEvent = function (a) {
    var b = this,
      c,
      d,
      e,
      g;
    return z(function (f) {
      if (f.g == 1) {
        var h = new T();
        var k = new jd();
        k = R(k, 1, a.payload);
        var l = new id();
        l = Q(l, 3, a.actionOrder);
        l = Ic(l, 5, a.isLocalPlayer);
        l = R(l, 2, a.payload);
        l = Q(l, 4, a.serverTimestampMillis);
        a: {
          var m = a.type;
          if (m === void 0) m = 0;
          else {
            switch (m) {
              case "START_GAME":
                m = 1;
                break a;
              default:
                Db(m);
            }
            m = void 0;
          }
        }
        l = qc(l, 6, m == null ? m : Fb(m));
        l = R(l, 1, a.uid);
        k = Ec(k, 2, l);
        c = L(h, 23, k);
        f.j = 2;
        return y(f, Y(b.channel, c), 4);
      }
      if (f.g != 2)
        (d = f.i),
          (e = P(d.data, Od, 25, V)),
          ff(K(e, U, 2)),
          (f.g = 0),
          (f.j = 0);
      else {
        g = ra(f);
        if (g instanceof X) throw g;
        throw new X(
          "Could not send event due to an unexpected error. Please try again."
        );
      }
    });
  };
  n.onEventsReceived = function (a) {
    if (this.g.D)
      throw new X("Please register all handlers before initializing the SDK.");
    this.i.i.push(a);
  };
  n.catchup = function (a) {
    var b = this,
      c,
      d,
      e,
      g;
    return z(function (f) {
      if (f.g == 1) {
        var h = new T();
        var k = new cd();
        k = Q(k, 1, a);
        c = L(h, 22, k);
        f.j = 2;
        return y(f, Y(b.channel, c), 4);
      }
      if (f.g != 2)
        return (
          (d = f.i),
          (e = P(d.data, Fd, 24, V)),
          ff(K(e, U, 2)),
          (h = f.return),
          (k = Bc(e, id, 1)),
          h.call(f, k.map(Le))
        );
      g = ra(f);
      if (g instanceof X) throw g;
      throw new X(
        "Could not catchup due to an unexpected error. Please try again."
      );
    });
  };
  function ff(a) {
    if (a) throw new X(N(a, 2), O(a, 1));
  }
  function gf(a, b) {
    var c = this;
    this.i = a;
    this.g = [];
    fe(b, 10).register(17, function (d) {
      return void hf(c, d);
    });
  }
  function jf(a, b) {
    bf(a.i, function () {
      for (var c = x(a.g), d = c.next(); !d.done; d = c.next())
        (d = d.value), d(b);
    });
  }
  function hf(a, b) {
    var c, d;
    return z(function (e) {
      c = P(b.data, Sd, 17, V);
      if (!c) throw Error("Unexpectedly nonexistent MultiplayerOnGhostPlay");
      d = Bc(c, rd, 1);
      if (d.length === 0) throw Error("No ghosts received from the parent");
      jf(a, Promise.resolve(Oe(d[0])));
      var g = new T();
      var f = new nd();
      g = L(g, 15, f);
      we(b, g);
      e.g = 0;
    });
  }
  function kf(a, b) {
    this.g = a;
    this.channel = b;
    this.i = new gf(a, b);
  }
  kf.prototype.onGhostPlay = function (a) {
    if (this.g.D)
      throw new X("Please register all handlers before initializing the SDK.");
    this.i.g.push(a);
  };
  kf.prototype.getGhosts = function (a) {
    var b = a.limit;
    var c = a.gameLevel;
    var d = this,
      e,
      g,
      f,
      h,
      k;
    return z(function (l) {
      if (l.g == 1) {
        var m = new T();
        var p = new md();
        p = Q(p, 1, b);
        p = Q(p, 2, c);
        e = L(m, 13, p);
        return y(l, Y(d.channel, e), 2);
      }
      g = l.i;
      h = (f = g.data) == null ? void 0 : P(f, Rd, 15, V);
      if (!h) throw new X("Failed to get ghosts. Please try again.");
      if ((k = K(h, U, 2))) throw new X(N(k, 2), O(k, 1));
      m = l.return;
      p = Bc(h, rd, 1);
      return m.call(l, p.map(Oe));
    });
  };
  kf.prototype.saveGhost = function (a) {
    var b = this,
      c,
      d,
      e,
      g,
      f,
      h,
      k,
      l;
    return z(function (m) {
      if (m.g == 1) {
        var p = new T(),
          u = new sd();
        var t = new rd();
        var w = Ya(a.data);
        t = qc(t, 2, tb(w, !1));
        w = new od();
        w = R(w, 1, a.score.key);
        w = Q(w, 2, a.score.value);
        t = Ec(t, 3, w);
        t = Q(t, 4, a.gameLevel);
        if (a.profile) {
          w = a.profile;
          var H = w.username,
            M = H.prefix,
            ja = H.suffix;
          H = w.avatar;
          w = H.src;
          H = H.alt;
          var La = Jc(ce()),
            eb = Jc(de());
          M = R(eb, 1, M);
          M = R(M, 2, ja);
          M = kc(M);
          M = Ec(La, 3, M);
          ja = Jc(be());
          w = R(ja, 1, w);
          w = R(w, 3, H);
          w = kc(w);
          w = Ec(M, 2, w);
          w = kc(w);
          Ec(t, 5, w);
        }
        u = Ec(u, 1, t);
        c = L(p, 12, u);
        return y(m, Y(b.channel, c), 2);
      }
      d = m.i;
      g = (e = d.data) == null ? void 0 : P(e, Td, 14, V);
      if ((h = (f = g) == null ? void 0 : K(f, U, 2)))
        throw new X(N(h, 2), O(h, 1));
      l = (k = g) == null ? void 0 : K(k, rd, 1);
      if (!l)
        throw new X(
          "Tried to save ghost but got undefined response. Please try again."
        );
      return m.return(Oe(l));
    });
  };
  kf.prototype.getChallengeLink = function (a) {
    var b = a.ghostId;
    var c = this,
      d,
      e,
      g,
      f,
      h,
      k,
      l,
      m;
    return z(function (p) {
      if (p.g == 1) {
        var u = new T();
        var t = new ld();
        t = R(t, 1, b);
        d = L(u, 16, t);
        return y(p, Y(c.channel, d), 2);
      }
      e = p.i;
      f = (g = e.data) == null ? void 0 : P(g, Qd, 18, V);
      if ((k = (h = f) == null ? void 0 : K(h, U, 2)))
        throw new X(N(k, 2), O(k, 1));
      m = (l = f) == null ? void 0 : l.getChallengeLink();
      if (!m)
        throw new X(
          "Could not get challenge link due to an unexpected error. Please try again."
        );
      return p.return(new URL(m));
    });
  };
  function lf(a) {
    a && typeof a.dispose == "function" && a.dispose();
  }
  function Z() {
    this.i = this.i;
    this.g = this.g;
  }
  Z.prototype.i = !1;
  Z.prototype.dispose = function () {
    if (!this.i && ((this.i = !0), this.g))
      for (; this.g.length; ) this.g.shift()();
  };
  Z.prototype[Symbol.dispose] = function () {
    this.dispose();
  };
  function mf(a, b) {
    nf(a, Ca(lf, b));
  }
  function nf(a, b) {
    a.i ? b() : (a.g || (a.g = []), a.g.push(b));
  }
  function of(a) {
    Z.call(this);
    var b = this;
    this.audio = a;
    this.j = function () {
      var c = b.audio,
        d = !document.hidden;
      c.j !== d && ((c.j = d), ue(c));
    };
    nf(this, function () {
      document.removeEventListener("visibilitychange", b.j, !1);
    });
    document.addEventListener("visibilitychange", this.j, !1);
  }
  v(of, Z);
  function pf(a, b, c) {
    this.m = a;
    this.channel = b;
    this.g = c === void 0 ? !1 : c;
  }
  pf.prototype.update = function (a, b) {
    b = b === void 0 ? 0 : b;
    var c = this,
      d,
      e,
      g,
      f,
      h,
      k,
      l,
      m,
      p;
    return z(function (u) {
      if (u.g == 1) {
        W("score called with score: " + JSON.stringify(a));
        if (typeof a === "number" && !c.g)
          return (
            (d = { messageType: "SCORE", score: a }),
            c.m.send(d),
            u.return(new Map())
          );
        e = typeof a === "number" ? [{ key: "", value: a }] : a;
        g = Ed(
          new T(),
          yd(
            xd(
              new wd(),
              e.map(function (t) {
                var w = new od();
                w = R(w, 1, t.key);
                return Q(w, 2, t.value);
              })
            ),
            b
          )
        );
        return y(u, (f = c.channel) == null ? void 0 : Y(f, g), 2);
      }
      h = u.i;
      m =
        (k = h) == null
          ? void 0
          : (l = k.data) == null
          ? void 0
          : P(l, Yd, 19, V);
      if (!m) throw new X("Failed to update score. Please try again.");
      if ((p = K(m, U, 2))) throw new X(N(p, 2), O(p, 1));
      return u.return(Pe(xc(m)));
    });
  };
  pf.prototype.getUserHighScore = function (a) {
    var b = this,
      c,
      d;
    return z(function (e) {
      if (e.g == 1) return y(e, b.getUserLeaderboards({ filter: a }), 2);
      c = e.i;
      return e.return((d = c[0]) == null ? void 0 : d.entries[0].scoreValue);
    });
  };
  pf.prototype.getLeaderboards = function (a) {
    var b = a.filter === void 0 ? {} : a.filter;
    var c = a.topCount;
    var d = this,
      e,
      g,
      f,
      h,
      k,
      l,
      m;
    return z(function (p) {
      if (p.g == 1) {
        var u = new T();
        var t = new ud();
        var w = Te(b);
        t = Ec(t, 1, w);
        t = Q(t, 2, c);
        e = L(u, 18, t);
        return y(p, (g = d.channel) == null ? void 0 : Y(g, e), 2);
      }
      f = p.i;
      l =
        (h = f) == null
          ? void 0
          : (k = h.data) == null
          ? void 0
          : P(k, Wd, 20, V);
      if (!l) throw new X("Failed to get leaderboards. Please try again.");
      if ((m = K(l, U, 2))) throw new X(N(m, 2), O(m, 1));
      u = p.return;
      t = Bc(l, Vd, 1);
      return u.call(p, t.map(Se));
    });
  };
  pf.prototype.getUserLeaderboards = function (a) {
    var b = a.filter === void 0 ? {} : a.filter;
    var c = a.context === void 0 ? 0 : a.context;
    var d = this,
      e,
      g,
      f,
      h,
      k,
      l,
      m;
    return z(function (p) {
      if (p.g == 1) {
        var u = new T();
        var t = new vd();
        var w = Te(b);
        t = Ec(t, 1, w);
        t = Q(t, 2, c);
        e = L(u, 19, t);
        return y(p, (g = d.channel) == null ? void 0 : Y(g, e), 2);
      }
      f = p.i;
      l =
        (h = f) == null
          ? void 0
          : (k = h.data) == null
          ? void 0
          : P(k, Xd, 21, V);
      if (!l) throw new X("Failed to get user leaderboards. Please try again.");
      if ((m = K(l, U, 2))) throw new X(N(m, 2), O(m, 1));
      u = p.return;
      t = Bc(l, Vd, 1);
      return u.call(p, t.map(Se));
    });
  };
  function qf(a) {
    return a[Aa.Symbol.iterator]();
  }
  function rf(a, b) {
    this.g = qf(a);
    this.i = b;
  }
  rf.prototype[Symbol.iterator] = function () {
    return this;
  };
  rf.prototype.next = function () {
    var a = this.g.next();
    return {
      value: a.done ? void 0 : this.i.call(void 0, a.value),
      done: a.done,
    };
  };
  function sf(a, b) {
    return new rf(a, b);
  }
  function tf(a) {
    this.i = a;
    this.g = 0;
  }
  tf.prototype[Symbol.iterator] = function () {
    return this;
  };
  tf.prototype.next = function () {
    for (; this.g < this.i.length; ) {
      var a = this.i[this.g].next();
      if (!a.done) return a;
      this.g++;
    }
    return { done: !0 };
  };
  function uf() {
    return new tf(ya.apply(0, arguments).map(qf));
  } /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
  function vf(a) {
    this.g = a;
  }
  vf.prototype.toString = function () {
    return this.g;
  };
  var wf = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function xf(a, b) {
    if (b instanceof vf)
      if (b instanceof vf) b = b.g;
      else throw Error("");
    else b = wf.test(b) ? b : void 0;
    b !== void 0 && (a.href = b);
  }
  function yf() {
    var a = document;
    var b = "A";
    a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
    return a.createElement(b);
  }
  var zf = Aa.URL,
    Af;
  try {
    new zf("http://example.com"), (Af = !0);
  } catch (a) {
    Af = !1;
  }
  var Bf = Af;
  function Cf(a) {
    this.g = new Map();
    a.indexOf("?") == 0 && (a = a.substring(1));
    a = x(a.split("&"));
    for (var b = a.next(); !b.done; b = a.next()) {
      var c = b.value;
      b = c;
      var d = "";
      c = c.split("=");
      c.length > 1 &&
        ((b = decodeURIComponent(c[0].replace("+", " "))),
        (d = decodeURIComponent(c[1].replace("+", " "))));
      c = this.g.get(b);
      c == null && ((c = []), this.g.set(b, c));
      c.push(d);
    }
  }
  Cf.prototype.get = function (a) {
    return (a = this.g.get(a)) && a.length ? a[0] : null;
  };
  Cf.prototype.getAll = function (a) {
    return [].concat(na(this.g.get(a) || []));
  };
  Cf.prototype.has = function (a) {
    return this.g.has(a);
  };
  Cf.prototype[Symbol.iterator] = function () {
    return uf.apply(
      null,
      na(
        sf(this.g, function (a) {
          var b = a[0];
          return sf(a[1], function (c) {
            return [b, c];
          });
        })
      )
    );
  };
  Cf.prototype.toString = function () {
    return Df(this);
  };
  function Df(a) {
    function b(c) {
      return encodeURIComponent(c).replace(/[!()~']|(%20)/g, function (d) {
        return {
          "!": "%21",
          "(": "%28",
          ")": "%29",
          "%20": "+",
          "'": "%27",
          "~": "%7E",
        }[d];
      });
    }
    return Array.from(a, function (c) {
      return b(c[0]) + "=" + b(c[1]);
    }).join("&");
  }
  function Ef(a) {
    var b = yf();
    try {
      xf(b, new vf(a));
      var c = b.protocol;
    } catch (e) {
      throw Error(a + " is not a valid URL.");
    }
    if (c === "" || c === ":" || c[c.length - 1] != ":")
      throw Error(a + " is not a valid URL.");
    if (!Ff.has(c)) throw Error(a + " is not a valid URL.");
    if (!b.hostname) throw Error(a + " is not a valid URL.");
    var d = b.href;
    a = {
      href: d,
      protocol: b.protocol,
      username: "",
      password: "",
      hostname: b.hostname,
      pathname: "/" + b.pathname,
      search: b.search,
      hash: b.hash,
      toString: function () {
        return d;
      },
    };
    Ff.get(b.protocol) === b.port
      ? ((a.host = a.hostname),
        (a.port = ""),
        (a.origin = a.protocol + "//" + a.hostname))
      : ((a.host = b.host),
        (a.port = b.port),
        (a.origin = a.protocol + "//" + a.hostname + ":" + a.port));
    return a;
  }
  var Ff = new Map([
    ["http:", "80"],
    ["https:", "443"],
    ["ws:", "80"],
    ["wss:", "443"],
    ["ftp:", "21"],
  ]);
  var Gf = { google_ama_config: !0 };
  function Hf(a) {
    this.channel = a;
    this.g = {};
    if ((a = If.qa() || If.pa()))
      try {
        var b = JSON.parse(atob(decodeURIComponent(a)));
        if (typeof b !== "object")
          throw Error("malformed gameData param: " + a);
        this.g = b;
      } catch (c) {
        console.error("Error parsing gameData param: " + JSON.stringify(c));
      }
  }
  n = Hf.prototype;
  n.clear = function () {
    var a = new T();
    var b = new zd();
    a = L(a, 4, b);
    var c;
    (c = this.channel) == null || c.send(a);
    this.g = {};
  };
  n.getItem = function (a) {
    var b;
    return (b = this.g[a]) != null ? b : null;
  };
  n.setItem = function (a, b) {
    ["boolean", "number"].includes(typeof b) && (b = b.toString());
    if (!Gf[a]) {
      var c = new T();
      var d = new Bd();
      d = R(d, 1, a);
      d = R(d, 2, b);
      c = L(c, 1, d);
      var e;
      (e = this.channel) == null || e.send(c);
      this.g[a] = b;
    }
  };
  n.removeItem = function (a) {
    var b = new T();
    var c = new Ad();
    c = R(c, 1, a);
    b = L(b, 3, c);
    var d;
    (d = this.channel) == null || d.send(b);
    delete this.g[a];
  };
  n.key = function (a) {
    var b = Object.keys(this.g);
    return a >= b.length ? null : b[a];
  };
  n.hasOwnProperty = function (a) {
    return this.g.hasOwnProperty(a);
  };
  q.Object.defineProperties(Hf.prototype, {
    length: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        var a;
        return (a = Object.keys(this.g).length) != null ? a : 0;
      },
    },
  });
  var If = {
    pa: function () {
      var a = window.location.href;
      if (Bf) {
        try {
          var b = new zf(a);
        } catch (d) {
          throw Error(a + " is not a valid URL.");
        }
        var c = Ff.get(b.protocol);
        if (!c) throw Error(a + " is not a valid URL.");
        if (!b.hostname) throw Error(a + " is not a valid URL.");
        b.origin == "null" &&
          ((a = {
            href: b.href,
            protocol: b.protocol,
            username: "",
            password: "",
            host: b.host,
            port: b.port,
            hostname: b.hostname,
            pathname: b.pathname,
            search: b.search,
            hash: b.hash,
          }),
          (a.origin =
            c === b.port
              ? b.protocol + "//" + b.hostname
              : b.protocol + "//" + b.hostname + ":" + b.port),
          (b = a));
      } else b = Ef(a);
      return (Bf && b.searchParams ? b.searchParams : new Cf(b.search)).get(
        "gameData"
      );
    },
    qa: function (a) {
      a = a || window.location.hash;
      return ge(a).get("gameData");
    },
  };
  function Jf(a) {
    this.g = a;
    this.i = [];
    this.j = !1;
    this.register();
  }
  Jf.prototype.register = function () {
    var a = this;
    this.j ||
      (fe(this.g.channel, 12).register(30, function (b) {
        return void Kf(a, Kc(P(b.data, Zd, 30, V)));
      }),
      (this.j = !0));
  };
  Jf.prototype.onProfileChange = function (a) {
    if (this.g.D)
      throw new X("Tried to register handler after initialization.");
    this.i.push(a);
  };
  function Kf(a, b) {
    a.profile = rc(b, 1) ? Ke(J(b, tc, 1)) : void 0;
    bf(a.g, function () {
      for (var c = x(a.i), d = c.next(); !d.done; d = c.next())
        (d = d.value), d(a.profile);
    });
  }
  Jf.prototype.requestProfile = function () {
    var a = this,
      b,
      c,
      d,
      e;
    return z(function (g) {
      if (g.g == 1) {
        if (!a.g.D)
          throw new X("Tried to request profile before initializing SDK.");
        if (!a.i)
          throw new X(
            "Tried to request profile without registering change handler."
          );
        if (a.profile) return g.return(a.profile);
        var f = new T(),
          h = new Cd();
        b = L(f, 27, h);
        return y(g, Y(a.g.channel, b), 2);
      }
      d = (c = g.i.data) == null ? void 0 : kc(c);
      if (!d) throw new X("No reply to request profile.");
      f = d.h;
      if (sc(f, f[B] | 0, U, yc(d, V) === 31 ? 31 : -1) !== void 0)
        throw (
          ((g = J(d, U, yc(d, V) === 31 ? 31 : -1)), new X(N(g, 2), O(g, 1)))
        );
      e = J(d, $d, yc(d, V) === 29 ? 29 : -1);
      return g.return((a.profile = rc(e, 1) ? Ke(J(e, tc, 1)) : void 0));
    });
  };
  var Lf = {
      O: !1,
      K: !1,
      requestNonPersonalizedAds: !1,
      Y: !1,
      aa: !1,
      ba: !1,
      Z: !1,
    },
    Mf = { V: !1, liveMultiplayer: !1, da: !1, W: !1 };
  function Nf(a, b, c, d, e, g) {
    c = c === void 0 ? Lf : c;
    d = d === void 0 ? Mf : d;
    e = e === void 0 ? {} : e;
    Z.call(this);
    this.m = a;
    this.channel = b;
    this.u = c;
    this.S = d;
    this.wa = e;
    this.L = !1;
    this.T = [];
    this.liveMultiplayer = {
      catchup: function () {
        throw Error("Not available");
      },
      getRoomUrl: function () {
        throw Error("Not available");
      },
      createRoom: function () {
        throw Error("Not available");
      },
      onRoomLoaded: function () {
        throw Error("Not available");
      },
      onPlayerPresenceUpdated: function () {
        throw Error("Not available");
      },
      onEventsReceived: function () {
        throw Error("Not available");
      },
      sendEvent: function () {
        throw Error("Not available");
      },
      updatePlayerPresence: function () {
        throw Error("Not available");
      },
    };
    c = new se(this.m);
    this.ad = new le(this.m, this.u, c, this.channel);
    this.audio = c;
    this.game = new Ve(this.m, this.u, this.audio, this.ad, this.channel);
    this.multiplayer = new kf(this, b);
    this.score = new pf(this.m, this.channel, this.S.V);
    this.storage = new Hf(this.channel);
    this.user = new Jf(this);
    this.S.liveMultiplayer && (this.liveMultiplayer = new ef(this, b));
    this.m.send({ messageType: "LOADED" });
    oe(a, "SET_LOG_LEVEL", ie);
    he = this.S.W;
    mf(this, new of(c));
    mf(this, a);
    g && mf(this, g);
    fe(b, 4);
    b.init();
  }
  v(Nf, Z);
  function bf(a, b) {
    a.L ? b() : a.T.push(b);
  }
  Nf.prototype.init = function () {
    var a = this,
      b,
      c,
      d;
    return z(function (e) {
      if (a.L) throw new X("SDK is already initialized.");
      a.L = !0;
      b = x(a.T);
      for (c = b.next(); !c.done; c = b.next()) (d = c.value), d();
      a.T.length = 0;
      return e.return(a.wa);
    });
  };
  q.Object.defineProperties(Nf.prototype, {
    D: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.L;
      },
    },
  });
  function Of(a) {
    Z.call(this);
    var b = this;
    this.targetOrigin = a;
    this.j = new Map();
    if (a === "*")
      throw Error(
        "targetOrigin of '*' is insecure. Use the origin of the parent frame."
      );
    nf(this, function () {
      b.j.clear();
    });
    window.addEventListener("message", function (c) {
      var d = c.data;
      if (c.origin !== b.targetOrigin)
        W("Ignoring message event from untrusted origin " + c.origin + ".");
      else if (
        typeof (d == null ? void 0 : d.messageType) === "string" &&
        ((c = d.messageType),
        typeof d !== "object" || d === null ? 0 : d.messageType === c) &&
        (c = b.j.get(c))
      ) {
        c = x(c);
        for (var e = c.next(); !e.done; e = c.next()) (e = e.value), e(d);
      }
    });
  }
  v(Of, Z);
  function oe(a, b, c) {
    if (!a.i) {
      var d = a.j.get(b);
      d || ((d = new Set()), a.j.set(b, d));
      d.add(c);
    }
  }
  Of.prototype.send = function (a) {
    window.parent.postMessage(a, this.targetOrigin);
  };
  function Pf(a, b) {
    Z.call(this);
    var c = this;
    this.m = a;
    this.window = b;
    this.j = this.userActivityLoggingIntervalMs = 0;
    this.o = function (d) {
      d = d.userActivityLoggingIntervalMs;
      d <= 0 ||
        ((c.userActivityLoggingIntervalMs = d),
        c.window.addEventListener("pointerdown", c.l, !0));
    };
    this.l = function (d) {
      !d.isTrusted ||
        Date.now() - c.j < c.userActivityLoggingIntervalMs ||
        ((c.j = Date.now()), c.m.send({ messageType: "USER_ACTIVITY" }));
    };
    oe(a, "SET_USER_ACTIVITY_METRICS_INTERVAL", this.o);
  }
  v(Pf, Z);
  Pf.prototype.dispose = function () {
    Z.prototype.dispose.call(this);
    this.window.removeEventListener("pointerdown", this.l, !0);
  };
  var Qf = {
    na: function () {
      var a;
      return "https://dog.com";
    },
    ta: function (a) {
      return document.currentScript
        ? {
            O: document.currentScript.hasAttribute("data-rewarded-monetizable"),
            K: document.currentScript.hasAttribute(
              "data-interstitial-monetizable"
            ),
            requestNonPersonalizedAds: document.currentScript.hasAttribute(
              "data-request-non-personalized-ads"
            ),
            Y:
              a &&
              document.currentScript.hasAttribute("data-game-over-monetizable"),
            aa:
              a &&
              document.currentScript.hasAttribute(
                "data-level-complete-monetizable"
              ),
            ba: document.currentScript.hasAttribute(
              "data-run-slotcar-ads-in-game-center"
            ),
            Z: document.currentScript.hasAttribute(
              "data-game-center-monetized"
            ),
          }
        : Lf;
    },
    ra: function () {
      return { isInvite: ge(window.location.hash).get("is-invite") === "true" };
    },
    oa: function () {
      if (!document.currentScript) return Mf;
      var a = ge(window.location.hash);
      return {
        V: a.get("enable-backend-update-score") === "true",
        liveMultiplayer: a.get("enable-live-multiplayer") === "true",
        da: document.currentScript.hasAttribute("data-user-activity-metrics"),
        W: a.get("enable-log-to-console") === "true",
      };
    },
  };
  function Rf() {
    try {
      document.body &&
        document.body.style &&
        ((document.body.style.userSelect = "none"),
        (document.body.style.webkitUserSelect = "none"));
    } catch (a) {
      console.warn(a);
    }
  }
  (function (a) {
    a = a === void 0 ? {} : a;
    var b = a.la === void 0 ? !0 : a.la;
    var c = Qf.na();
    if (c === void 0)
      throw new X("Couldn't find targetOrigin for postMessages.");
    a = new Of(c);
    c = Je(c);
    b = Qf.ta(b);
    var d = Qf.oa();
    a = new Nf(a, c, b, d, Qf.ra(), d.da ? new Pf(a, window) : void 0);
    window.GameSnacks = a;
    Object.defineProperty(window, "localStorage", {
      get: function () {
        throw Error(
          "window.localStorage not available, please use the GameSnacks.storage API."
        );
      },
    });
    window.addEventListener("load", function () {
      Rf();
    });
    Rf();
    return a;
  })();
}).call(this);
/*gamesnacks_developer_sdk_20250827-10_RC00*/
