(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [5936],
  {
    /***/ 623741: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var lB = __c.lB;
        var pc = __c.pc;
        var M = __c.M;
        var $m = __c.$m;
        var js = __c.js;
        var K = __c.K;
        var Bm = __c.Bm;
        var y = __c.y;
        var D = __c.D;
        var Mwc = function (a, b) {
            switch (b.reference.type) {
              case 0:
                const c = a.eW(b.reference.Ui);
                a = a.YZ(b.reference.ej);
                return c != null && a != null;
              case 1:
                return a.eW(b.reference.Ui) != null;
              case 2:
                return a.YZ(b.reference.ej) != null;
              case 3:
                return !1;
              default:
                throw new D(b.reference);
            }
          },
          Nwc = function (a, b, c) {
            switch (c.type) {
              case "invalid":
                return !1;
              case "canonical":
                if (c.W.length > 0) return !1;
                a = a.lI(c.A2.slice(1).trim());
                return a.result !== "success"
                  ? !1
                  : __c.Iw(new __c.Lw(), a.yK).filter((d) => {
                      switch (d.type) {
                        case 0:
                          return Mwc(b, d);
                        case 1:
                          return Mwc(b, d.start) && Mwc(b, d.end);
                        default:
                          throw new D(d);
                      }
                    }).length > 0;
              default:
                throw new D(c);
            }
          },
          Owc = function (a, b, c, d) {
            const e = [];
            for (const k of c)
              for (const l of d) {
                c = k.ta;
                var f = l.column,
                  g = a.layout.cells.get(c, f);
                if (
                  !g ||
                  (k.boundary === "start" ? g.span.mc === c : g.span.vd === c)
                )
                  if (
                    ((c = b.get(`${f.id}:${c.id}`)),
                    (c = k.boundary === "start" ? c?.pa : c?.Ca))
                  ) {
                    g = e[e.length - 1];
                    f = (f = a.layout.cols.next(f))
                      ? { column: f, boundary: "start" }
                      : { column: y(a.layout.cols.last()), boundary: "end" };
                    var h;
                    if ((h = g))
                      (h = g.zxa),
                        (h =
                          h.column === l.column && h.boundary === l.boundary);
                    h &&
                      ((h = g.f7a),
                      (h = h.ta === k.ta && h.boundary === k.boundary));
                    h &&
                    g.color === c.color &&
                    g.weight === c.weight &&
                    g.gd === c.gd &&
                    g.gd === 0
                      ? (g.zxa = f)
                      : e.push({
                          f7a: k,
                          mIb: l,
                          zxa: f,
                          color: c.color,
                          weight: c.weight,
                          gd: c.gd,
                        });
                  }
              }
            return e;
          },
          Pwc = function (a, b, c, d, e) {
            const f = [];
            for (const l of d)
              for (const m of c) {
                var g = m.ta,
                  h = l.column;
                d = a.layout.cells.get(g, h);
                if (
                  !d ||
                  (l.boundary === "start" ? d.span.dc === h : d.span.Yc === h)
                )
                  if (
                    ((d = b.get(`${h.id}:${g.id}`)),
                    (d = l.boundary === "start" ? d?.qa : d?.La) &&
                      (l.boundary !== "start" || e(g, h) !== 1))
                  ) {
                    h = f[f.length - 1];
                    g = (g = a.layout.rows.next(g))
                      ? { ta: g, boundary: "start" }
                      : { ta: y(a.layout.rows.last()), boundary: "end" };
                    var k;
                    if ((k = h))
                      (k = h.jRa),
                        (k =
                          k.column === l.column && k.boundary === l.boundary);
                    k &&
                      ((k = h.Fxa),
                      (k = k.ta === m.ta && k.boundary === m.boundary));
                    k &&
                    h.color === d.color &&
                    h.weight === d.weight &&
                    h.gd === d.gd &&
                    h.gd === 0
                      ? (h.Fxa = g)
                      : f.push({
                          jRa: l,
                          CIb: m,
                          Fxa: g,
                          color: d.color,
                          weight: d.weight,
                          gd: d.gd,
                        });
                  }
              }
            return f;
          },
          Qwc = function (a, b, c, d, e) {
            const f = a.R9a.Ylb(c, b.layout.rows.last(), b.layout.cols.last());
            a = (q, r) => {
              const t = f.get(q) || 0,
                v = f.get(r) || 0;
              return t <= v ? q : r;
            };
            const g = new Map();
            if (d.length === 0 || e.length === 0) return g;
            var h = [],
              k = b.layout.cols.previous(e[0].column);
            k && h.push({ column: k, boundary: "start" });
            h.push(...e);
            (e = b.layout.cols.next(e[e.length - 1].column)) &&
              h.push({ column: e, boundary: "start" });
            e = [];
            (k = b.layout.rows.previous(d[0].ta)) &&
              e.push({ ta: k, boundary: "start" });
            e.push(...d);
            (d = b.layout.rows.next(d[d.length - 1].ta)) &&
              e.push({ ta: d, boundary: "start" });
            for (const q of h) {
              h = (d = q.boundary === "start" ? q.column : void 0)
                ? b.layout.cols.previous(d)
                : b.layout.cols.last();
              for (const r of e) {
                var l = r.boundary === "start" ? r.ta : void 0;
                k = l ? b.layout.rows.previous(l) : b.layout.rows.last();
                var m = d && l && c.get(`${d.id}:${l.id}`),
                  n = d && k && c.get(`${d.id}:${k.id}`);
                l = h && l && c.get(`${h.id}:${l.id}`);
                var p = h && k && c.get(`${h.id}:${k.id}`);
                k = q.boundary === "end" ? l?.La : m?.qa;
                m = r.boundary === "end" ? n?.Ca : m?.pa;
                n = q.boundary === "end" ? p?.La : n?.qa;
                l = r.boundary === "end" ? p?.Ca : l?.pa;
                p = __c.Xla({ pa: n, Ca: k, qa: l, La: m }, a);
                let t;
                switch (p) {
                  case "blockStart":
                    t = n;
                    break;
                  case "blockEnd":
                    t = k;
                    break;
                  case "inlineStart":
                    t = l;
                    break;
                  case "inlineEnd":
                    t = m;
                    break;
                  default:
                    t = void 0;
                }
                const { height: v, width: w } =
                  t?.gd === 1
                    ? { height: t.weight, width: t.weight }
                    : {
                        height: Math.max(l?.weight || 0, m?.weight || 0),
                        width: Math.max(n?.weight || 0, k?.weight || 0),
                      };
                g.set(I6(q, r), __c.qm(p, v / 2, w / 2));
              }
            }
            return g;
          },
          Rwc = function (a, b, c, d, e, f) {
            if (d.length === 0 || e.length === 0) return [];
            const g = Owc(b, c, d, e);
            f = Pwc(b, c, d, e, f);
            const h = Qwc(a, b, c, d, e),
              k = a.Jsb(b),
              l = a.Wrb(b),
              m = b.direction === "rtl";
            a = g
              .map((n) => {
                var p = n.mIb,
                  q = n.zxa,
                  r = n.f7a;
                const t = n.color,
                  v = n.weight;
                n = n.gd;
                const w = m ? -1 : 1,
                  z = h.get(I6(p, r))?.La,
                  A = h.get(I6(q, r))?.qa;
                if (z != null && A != null) {
                  var C = y(k.get(r.ta)),
                    B = y(l.get(p.column));
                  p = y(l.get(q.column));
                  r = r.boundary === "start" ? C.start : C.end;
                  C = B.start;
                  q = q.boundary === "start" ? p.start : p.end;
                  return {
                    color: t,
                    weight: v,
                    gd: n,
                    p1: new Bm(C + z * w, r),
                    p2: new Bm(q + A * w, r),
                    ...__c.vm((q - C) * w, n * v, z),
                  };
                }
              })
              .filter(__c.ob);
            return [
              ...f
                .map((n) => {
                  var p = n.jRa,
                    q = n.CIb,
                    r = n.Fxa;
                  const t = n.color,
                    v = n.weight;
                  n = n.gd;
                  const w = h.get(I6(p, q))?.Ca,
                    z = h.get(I6(p, r))?.pa;
                  if (w != null && z != null) {
                    var A = y(l.get(p.column)),
                      C = y(k.get(q.ta));
                    q = y(k.get(r.ta));
                    p = p.boundary === "start" ? A.start : A.end;
                    A = C.start;
                    r = r.boundary === "start" ? q.start : q.end;
                    return {
                      color: t,
                      weight: v,
                      gd: n,
                      p1: new Bm(p, A + w),
                      p2: new Bm(p, r + z),
                      ...__c.vm(r - A, n * v, w),
                    };
                  }
                })
                .filter(__c.ob),
              ...a,
            ];
          },
          Swc = function (a) {
            const b = [];
            a = a.filter((c) => c.weight !== 0 && c.color != null);
            a = __c.pm(a, (c) => c.weight);
            a = Array.from(a.entries()).sort(([c], [d]) => c - d);
            for (const [c, d] of a) {
              a = __c.pm(d, (e) => `${e.xl}_${e.yl}`);
              for (const [, e] of a) {
                const { yl: f, xl: g } = e[0];
                a = __c.pm(e, (h) => h.color);
                for (const [h, k] of a)
                  b.push({ weight: c, color: h, lines: k, xl: g, yl: f });
              }
            }
            return b;
          },
          Twc = function (a, b, c, d) {
            var e = __c.fVb;
            const f = b.get().flatMap((k) =>
                a.layout.rows.last() === k
                  ? [
                      { ta: k, boundary: "start" },
                      { ta: k, boundary: "end" },
                    ]
                  : [{ ta: k, boundary: "start" }]
              ),
              g = c.get().flatMap((k) =>
                a.layout.cols.last() === k
                  ? [
                      { column: k, boundary: "start" },
                      { column: k, boundary: "end" },
                    ]
                  : [{ column: k, boundary: "start" }]
              ),
              h = new Map();
            for (const k of b.get())
              for (const l of c.get())
                (b = l && k ? e.R9a.yFb(a, l, k) : void 0),
                  b && h.set(`${l.id}:${k.id}`, b);
            c = Rwc(e, a, h, f, g, d);
            return Swc(c);
          },
          Uwc = function (a) {
            switch (a) {
              case 2:
                return K("ibdecg");
              case 7:
                return K("446quA");
              case 5:
                return K("j1fbqg");
              case 1:
                return K("O5i4AQ");
              case 6:
                return K("C0VHsg");
              case 4:
                return K("9ND0kg");
              case -1:
                return K("RWqnLA");
              case 9:
                return K("nQR/7w");
              case -2:
                return K("P23rtA");
              case 3:
                return K("+IXmVg");
              default:
                throw new D(a);
            }
          },
          Vwc = function () {
            const [a] = (0, __c.ib)(() => js());
            return a;
          },
          Wwc = function (a, b, c) {
            const d = [a];
            for (; a != null && a !== b; ) (a = c.next(a)) && d.push(a);
            return d;
          },
          Xwc = function (a) {
            const b =
                a.direction === "rtl"
                  ? -(0, __c.iVb)(a) / 2
                  : -(0, __c.gVb)(a) / 2,
              c = -(0, __c.hVb)(a) / 2,
              d = a.width + (0, __c.gVb)(a) / 2 + (0, __c.iVb)(a) / 2;
            a = a.height + (0, __c.hVb)(a) / 2 + (0, __c.jVb)(a) / 2;
            return $m({
              top: 0,
              left: 0,
              width: d,
              height: a,
              rotation: 0,
            }).translate(b, c);
          },
          Ywc = function (a) {
            return (b) => ({ type: "react", node: (0, __c.J)(a, { ...b }) });
          },
          Zwc = function (a) {
            const { h: b, s: c, ma: d } = __c.Fs(a);
            var e = __c.Ds(new __c.xs(b, c * 0.59, d * 0.69));
            const f = e.po(),
              g = __c.Ds(new __c.xs(b, c * 0.68, d * 0.84)).po();
            e = __c.Ks(__c.Js(e, 0.15));
            return { mkb: a, nkb: f, okb: g, qkb: e };
          },
          $wc = function (a) {
            var b = a.yB;
            const c = a.content,
              d = a.context,
              e = a.Cq;
            __c.x(c?.Qg?.type === "formula");
            const f = c.vj;
            a = { type: "dom", render: (g) => (g.innerText = "") };
            switch (f.type) {
              case 9:
                b = a;
                break;
              case 6:
                b = b.Ara?.({
                  content: __c.xfb.LC({ ...__c.qAb, value: f.value }),
                  context: d,
                  Cq: e,
                });
                break;
              case 1:
              case 3:
              case 4:
              case 2:
              case 7:
              case 8:
                b = b.Dra?.({ context: d, value: c.iC, valueType: c.vj.type });
                break;
              case 0:
                b = {
                  type: "react",
                  node: J6(__c.sT, {
                    label: Uwc(f.error),
                    children: J6(__c.Tt, {
                      width: "full",
                      display: "flex",
                      justifyContent: "center",
                      children: J6(__c.t5b, { tone: "critical" }),
                    }),
                  }),
                };
                break;
              default:
                throw new D(f);
            }
            return b ?? a;
          },
          exc = function (a) {
            const b = a.yB,
              c = a.Nf,
              d = a.kJb,
              e = a.ab;
            b.Dra = (f) => __c.BOa({ ...f, ab: e });
            b.JNa = (f) => $wc({ ...f, yB: b });
            b.INa = (f) => axc({ ...f });
            b.Ara = Ywc(bxc({ Nf: c, KU: void 0 }));
            b.LNa = cxc(d, e);
            b.MNa = Ywc((f) => J6(dxc, { ...f, ab: e }));
          },
          gxc = function ({
            label: a,
            Xa: b,
            width: c,
            height: d,
            scale: e,
            uRa: f,
          }) {
            return J6("div", {
              style: { width: c, height: d, transform: `scale(${e})` },
              className: "bx74uQ",
              children: K6(__c.Qt, {
                className: L6("ivlMMQ", fxc(f)),
                size: "small",
                alignment: "center",
                children: [b && J6(b, { size: "small" }), a],
              }),
            });
          },
          fxc = function (a) {
            return {
              _2BX0vg: a === "primary-default",
              JfW_Cg: a === "primary-low",
              isMgNg: a === "primary-active",
              xwWDeQ: a === "secondary-default",
              w0EyUQ: a === "secondary-low",
              _8p5AIA: a === "secondary-active",
            };
          },
          ixc = function ({
            Xd: a,
            cYa: b,
            scale: c,
            oq: d,
            onMouseDown: e,
            onTouchStart: f,
            pq: g,
            Ydb: h,
            NSa: k,
          }) {
            const l = M6(() => {
                const q = d?.get();
                if (q != null && q.length !== 0) return new __c.cx(q);
              }, [d]),
              m = g(1),
              n = g(c),
              p = { ssE9Tg: !a, OkifGQ: a };
            return J6(__c.Rt, {
              $p: "light",
              light: "light",
              lt: "light",
              dark: "light",
              children: (q) =>
                J6("div", {
                  className: L6("ze9QCQ", p, q.className),
                  style: { width: n, height: n },
                  children: J6("div", {
                    style: { width: m, height: m, transform: `scale(${c})` },
                    className: L6("N7J3UA", p),
                    onMouseDown: e,
                    onTouchStart: f,
                    ref: l?.sn,
                    children: J6(__c.wT, {
                      className: L6("m8CFdg", p, {
                        G6wL4w: h,
                        W_E0wA: b,
                        _52RFdg: k === "move",
                      }),
                      ariaLabel: K("ruWN9A"),
                      children: J6(hxc, { size: "tiny" }),
                    }),
                  }),
                }),
            });
          },
          kxc = function () {
            const a = new jxc(),
              b = new __c.$S(),
              c = N6((f) => {
                const {
                    scale: g = 1,
                    WXa: h,
                    size: k = "small",
                    Ydb: l = !0,
                  } = f,
                  m = O6((n) => a.pq({ scale: n, size: k, wCa: h }), [k, h]);
                return J6(ixc, {
                  ...f,
                  scale: h ? Math.max(g, h) : g,
                  Xd: f.sheet.direction === "rtl",
                  cYa: f.selection != null && a.nwb(f.sheet, f.selection),
                  pq: m,
                  Ydb: l,
                  NSa: f.NSa,
                  onMouseDown: f.onMouseDown,
                  onTouchStart: f.onTouchStart,
                });
              }),
              d = N6((f) => {
                const {
                    scale: g = 1,
                    WXa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    hGb: n,
                  } = f,
                  p = O6((w) => a.pq({ scale: w, size: k, wCa: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = O6((w) => m != null && a.NGa(m).has(w), [m]),
                  t = O6((w) => m != null && a.Ltb(l, m).has(w), [l, m]),
                  v = O6(
                    (w) => {
                      const z =
                        n != null &&
                        l.layout.cols.Ie(w, n.dc) >= 0 &&
                        l.layout.cols.Ie(w, n.Yc) <= 0;
                      return r(w)
                        ? z
                          ? "secondary-active"
                          : "primary-active"
                        : t(w)
                        ? z
                          ? "secondary-low"
                          : "primary-low"
                        : z
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return J6(P6, { ...f, Id: g, fe: q, pq: p, aH: v, VH: b });
              }),
              e = N6((f) => {
                const {
                    scale: g = 1,
                    WXa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    hGb: n,
                  } = f,
                  p = O6((w) => a.pq({ scale: w, size: k, wCa: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = O6((w) => m != null && a.PGa(m).has(w), [m]),
                  t = O6((w) => m != null && a.Mtb(l, m).has(w), [l, m]),
                  v = O6(
                    (w) => {
                      const z =
                        n != null &&
                        l.layout.rows.Ie(w, n.mc) >= 0 &&
                        l.layout.rows.Ie(w, n.vd) <= 0;
                      return r(w)
                        ? z
                          ? "secondary-active"
                          : "primary-active"
                        : t(w)
                        ? z
                          ? "secondary-low"
                          : "primary-low"
                        : z
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return J6(Q6, { ...f, Id: q, fe: g, pq: p, aH: v, VH: b });
              });
            return { Beb: c, Aeb: d, Ceb: e };
          },
          mxc = function (a) {
            const b = a.er,
              c = () => null;
            return __c.ts((d) => J6(lxc, { ...d, er: b, ri: c }));
          },
          nxc = function ({ sheet: a, Hc: b, da: c, range: d, Ad: e }) {
            R6(
              () =>
                S6(() => {
                  if (e.current != null) {
                    var f = c?.get() ?? 1,
                      g = a.direction === "rtl",
                      h = b.layout.Qi.ws(a),
                      k = b.layout.Qi.bq(a);
                    h = d && h.has(d.mc);
                    g = d && k.has(d.dc) ? a.qa(d.dc) * f * (g ? 1 : -1) : 0;
                    k = h ? -a.pa(d.mc) * f : 0;
                    e.current.style.transform = `translate(${g}px, ${k}px)`;
                    e.current.style.width = `${a.width * f}px`;
                    e.current.style.height = `${a.height * f}px`;
                  }
                }),
              [a, b.layout.Qi, d, e, c]
            );
          },
          qxc = function ({ onScroll: a }) {
            const b = new oxc(a);
            return {
              JE: b,
              ira: N6((c) =>
                J6(pxc, { sheet: c.sheet, JE: b, children: c.children })
              ),
            };
          },
          txc = function (a) {
            const b = a.er,
              c = a.Ne,
              d = a.T9a,
              e = a.Hc,
              f = ({ children: l }) => l,
              { JE: g, ira: h } = qxc({ onScroll: a.onScroll });
            class k extends rxc {
              get xO() {
                const l = this.props.fa.Yz;
                switch (l) {
                  case "screen":
                    return h;
                  case "print":
                    return f;
                  default:
                    throw new D(l);
                }
              }
              componentDidMount() {
                d.C9a(this.props.item, {
                  ac: this.props.ac,
                  fa: this.props.fa,
                });
              }
              componentWillUnmount() {
                d.xkb(this.props.item, {
                  ac: this.props.ac,
                  fa: this.props.fa,
                });
              }
              render() {
                d.C9a(this.props.item, {
                  ac: this.props.ac,
                  fa: this.props.fa,
                });
                return J6(sxc, {
                  ...this.props,
                  da: this.da,
                  er: b,
                  xO: this.xO,
                  ri: this.ri,
                  T9a: d,
                  Hc: e,
                  JE: g,
                });
              }
              constructor(...l) {
                super(...l);
                this.da = T6(() => {
                  const m = this.props.item;
                  var n = this.props.fa,
                    p = n.Yz;
                  n = n.zoom;
                  switch (p) {
                    case "screen":
                      return n;
                    case "print":
                      p = d.Nsb(m);
                      if (!p) return 1;
                      ({ width: p } = new __c.Ln(m, p.ac, { zoom: n }));
                      return p / m.config.width;
                    default:
                      throw new D(p);
                  }
                });
                this.ri = N6((m) =>
                  J6("div", {
                    className: "wKvivQ",
                    children: J6(__c.JOa, { ...this.props, ...m, Ne: c }),
                  })
                );
              }
            }
            return { Fgb: k, JE: g };
          },
          uxc = function (a, b) {
            if (
              b != null &&
              b.dc != null &&
              b.mc != null &&
              b.Yc != null &&
              b.vd != null
            ) {
              var c = a.qa(b.dc),
                d = a.pa(b.mc),
                e = a.qa(b.Yc) + b.Yc.width - c;
              a = a.pa(b.vd) + b.vd.height - d;
              return $m({ top: d, left: c, width: e, height: a });
            }
          },
          wxc = function (a) {
            const b = a.er,
              c = a.Hc,
              d = () => null;
            return (e) => J6(vxc, { ...e, er: b, ri: d, Hc: c });
          },
          Axc = function (a) {
            const b = { transform: "translate(-1000px, -1000px) scale(0)" },
              c = { IQa: b, ox: b, Oa: {}, wC: {} },
              d = U6(
                () => a.GB.style || c,
                (h) => {
                  Object.assign(a.tda.style, h.IQa);
                  Object.assign(a.mP.style, h.ox);
                  Object.assign(a.ZF.style, h.Oa);
                  Object.assign(a.fG.style, h.wC);
                  h = h?.Oa?.textDecoration;
                  a.ZF.classList.toggle("OQx3PQ", h === "underline");
                  a.ZF.classList.toggle("_99ezUA", h === "line-through");
                  a.ZF.classList.toggle(
                    "kppAqQ",
                    h === "underline line-through"
                  );
                },
                { fireImmediately: !0, equals: xxc }
              ),
              e = U6(
                () => a.aBa,
                (h) => {
                  a.ZF.classList.toggle("_84KvRA", !h);
                  a.tda.classList.toggle("_84KvRA", !h);
                  a.mP.classList.toggle("TL_RLA", !h);
                },
                { fireImmediately: !0 }
              ),
              f = U6(
                () => a.renderer,
                (h) => {
                  a.hea && h?.type !== "react"
                    ? ((a.hea = void 0), a.f9.remove())
                    : (a.fG.innerHTML = "");
                  switch (h?.type) {
                    case "react":
                      a.hea = yxc(h.node, a.f9);
                      a.fG.appendChild(a.f9);
                      break;
                    case "dom":
                      h.render(a.fG);
                      break;
                    case void 0:
                      break;
                    default:
                      throw new D(h);
                  }
                  a.sDa();
                },
                { fireImmediately: !0 }
              ),
              g = zxc
                ? U6(
                    () => a.Cza,
                    (h) => {
                      a.ZF.classList.toggle("qxD1GA", h);
                    },
                    { fireImmediately: !0 }
                  )
                : void 0;
            return () => {
              d();
              e();
              f();
              g?.();
            };
          },
          xxc = function (a, b) {
            return JSON.stringify(a) === JSON.stringify(b);
          },
          Cxc = function (a) {
            const b = a.zB,
              c = a.Hc,
              d = a.Wk,
              e = a.rF,
              f = a.mdb,
              g = a.mA,
              h = new Bxc(d, c),
              k = (l, m) => (g ? Nwc(g, l, m) : !1);
            return (l) =>
              J6(V6, {
                ...l,
                wR: k,
                rF: e,
                Hc: c,
                Wk: d,
                zB: b,
                xAa: h,
                mdb: f?.get(),
              });
          },
          I6 = (a, b) =>
            `${a.column.id}-${a.boundary}:${b.ta.id}-${b.boundary}`,
          bxc =
            ({ Nf: a, KU: b }) =>
            (c) =>
              (0, __c.J)(__c.lVb, { ...c, Nf: a, KU: b }),
          Dxc = __webpack_require__(31968),
          Exc = Dxc.Fragment,
          J6 = Dxc.jsx,
          K6 = Dxc.jsxs;
        var Fxc = __webpack_require__,
          Gxc = Fxc(208463),
          L6 = Fxc.n_x(Gxc)();
        var N6 = __webpack_require__(647370).PA;
        var W6 = __webpack_require__(845212),
          X6 = W6.Component,
          rxc = W6.PureComponent,
          O6 = W6.useCallback,
          R6 = W6.useEffect,
          Hxc = W6.useLayoutEffect,
          M6 = W6.useMemo,
          Y6 = W6.useRef;
        var Z6 = __webpack_require__(186901),
          T6 = Z6.EW,
          S6 = Z6.fm,
          Ixc = Z6.m3,
          U6 = Z6.mJ,
          Jxc = Z6.MN,
          Kxc = Z6.O8,
          $6 = Z6.sH,
          a7 = Z6.XI;
        var Lxc = __webpack_require__(536618),
          Mxc = Lxc.Aj,
          b7 = Lxc.iB,
          Nxc = Lxc.uP;
        var c7 = __webpack_require__(277049)._;
        var d7 = __webpack_require__(269018)._;
        var Oxc = __webpack_require__(13851).A;
        var yxc = __webpack_require__(640598).createPortal;
        var Pxc = class {
            static D(a) {
              M(a, { viewBox: $6.ref });
            }
            constructor() {
              this.viewBox =
                (Pxc.D(this), $m({ top: 0, left: 0, height: 0, width: 0 }));
              this.iHb = (a) => {
                this.viewBox.equals(a) || (this.viewBox = a);
              };
            }
          },
          Qxc = N6((a) => {
            var b = a.sheet.direction === "rtl";
            b = { H2wykw: !b, UweldA: b };
            const c = Y6(new Pxc()),
              d = a7(() => {
                if (a.Zpa) {
                  var f = a.Zpa.current;
                  f &&
                    c.current.iHb(
                      $m({
                        top: f.scrollTop,
                        left: f.scrollLeft,
                        height: f.clientHeight,
                        width: f.clientWidth,
                      })
                    );
                }
              });
            R6(() => {
              d();
              a.Zpa.current?.addEventListener("scroll", d);
              window?.addEventListener("resize", d);
              return () => {
                a.Zpa.current?.removeEventListener("scroll", d);
                window?.removeEventListener("resize", d);
              };
            }, [a.Zpa, d]);
            const e = M6(() => ({ get: () => c.current.viewBox }), []);
            return K6("div", {
              className: L6("nMvVqA", b),
              children: [
                K6("div", {
                  ref: a.Ad,
                  className: "_0YOFPg",
                  children: [
                    J6(a.er, { ...a, viewport: e }),
                    J6("div", {
                      className: L6("Gdl7fQ", b),
                      children: a.bNa?.get()?.map((f, g) => J6(f, {}, g)),
                    }),
                  ],
                }),
                a.hYb === "visible" &&
                  K6(Exc, {
                    children: [
                      J6("div", {
                        className: L6("_32sKQw", b),
                        children: J6(a.Cgb, { ...a }),
                      }),
                      J6("div", {
                        className: L6("xdIsTQ", b),
                        children: J6(a.Ggb, { ...a }),
                      }),
                      J6("div", {
                        className: L6("rsTRSA", b),
                        children: J6(a.Egb, { ...a }),
                      }),
                    ],
                  }),
              ],
            });
          }),
          Rxc = N6((a) => {
            a = a.content;
            __c.u(a.type === "text2" || a.type === "text3");
            switch (a.type) {
              case "text2":
                return a.value.U;
              case "text3":
                return __c.fv.snapshot(a.value).cells.U();
              default:
                throw new D(a);
            }
          });
        var Sxc = 1 / 13.334,
          axc = __c.kB((a, b) => {
            var c = a.context;
            const d = a.value,
              e = a.onChange;
            __c.x(a.valueType === 3);
            const { fontSize: f, color: g } = __c.nf(__c.Kf, c.attrs);
            c = __c.nt.Gia;
            a = document.createElement("label");
            a.className = L6("s5Xvtg", { _0YWo_Q: c, agLBbw: e == null });
            c = document.createElement("div");
            c.className = "nOL94A";
            c.style.setProperty("--V8rdkw", `${Math.round(18 * f * Sxc)}px`);
            const { mkb: h, nkb: k, okb: l, qkb: m } = Zwc(g);
            c.style.setProperty("--6kHV0A", h);
            c.style.setProperty("--dhlyXQ", k);
            c.style.setProperty("--pMrTCg", l);
            c.style.setProperty("--EyYwbg", h);
            c.style.setProperty("--3ZWdlg", l);
            c.style.setProperty("--TU43Qg", m);
            const n = document.createElement("input");
            n.className = "p8DDOg";
            n.type = "checkbox";
            n.checked = d;
            n.addEventListener(
              "change",
              a7((t) => {
                t.target && e?.(d, t.target.checked);
              })
            );
            const p = document.createElement("span");
            p.className = L6("l_S_Ng", { iGjddQ: d });
            p.ariaHidden = "true";
            const q = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg"
            );
            q.setAttribute("class", "_8CNofA");
            q.setAttribute("viewBox", "0 0 10 8");
            q.setAttribute("fill", "none");
            q.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            const r = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "path"
            );
            r.setAttribute("d", "M0.750977 4.5L3.25098 7L9.25098 1");
            r.setAttribute("stroke", "white");
            r.setAttribute("stroke-width", "2");
            r.setAttribute("stroke-linecap", "round");
            r.setAttribute("stroke-linejoin", "round");
            q.appendChild(r);
            p.appendChild(q);
            c.appendChild(n);
            c.appendChild(p);
            a.appendChild(c);
            b.appendChild(a);
          });
        var cxc = (a, b) =>
            __c.kB((c, d) => {
              const e = c.content;
              c = c.context;
              if (e.value.isEmpty) for (; d.lastChild; ) d.lastChild.remove();
              else
                ({ Ug: c } = __c.nf(__c.Kf, c.attrs)),
                  c === "wrap" &&
                    ((d = d.appendChild(document.createElement("div"))),
                    (d.className = "dt4Dlg")),
                  a.render({
                    container: d,
                    text: e.value,
                    oa: void 0,
                    writingMode: 1,
                    ed: "start",
                    bf: Txc(e, c),
                    ab: b,
                  });
            }),
          Txc = b7(
            (a, b) => {
              if (b === "wrap") return [];
              a = a.value.U.split("\n").map((c) => c.length + 1);
              a.pop();
              return a;
            },
            { equals: Ixc.structural }
          );
        var Uxc, Vxc, Wxc, dxc;
        new ((Uxc = class extends c7 {
          constructor() {
            super(dxc);
            Vxc();
          }
        }),
        (() => {
          class a extends (Wxc = X6) {
            static D(b) {
              M(b, { Ug: T6 });
            }
            get Ug() {
              return __c.nf(__c.Kf, this.props.context.attrs).Ug;
            }
            render() {
              var b = this.props.content;
              const c = this.props.context;
              if (b.value.isEmpty) return null;
              b = J6(this.props.ri, {
                content: b,
                ta: c.container.ta,
                col: c.container.column,
                Ug: this.Ug,
              });
              return this.Ug === "wrap"
                ? J6("div", { className: "dt4Dlg", children: b })
                : b;
            }
            constructor(...b) {
              super(...b);
              a.D(this);
            }
          }
          ({
            c: [dxc, Vxc],
          } = d7(a, [], [pc], Wxc));
        })(),
        Uxc)();
        var jxc = class {
          pq({ size: a, scale: b, wCa: c }) {
            b = c ? Math.max(c, b) : b;
            return a === "large" ? __c.cX * b : __c.m4b * b;
          }
          constructor() {
            this.nwb = b7((a, b) => {
              b = b.get();
              return (
                b != null &&
                a.layout.rows.count() === (b.rows?.size || 0) &&
                a.layout.cols.count() === (b.columns?.size || 0)
              );
            });
            this.NGa = Mxc((a) => new Set(a.get()?.columns || []), {
              equals: __c.gm,
            });
            this.PGa = Mxc((a) => new Set(a.get()?.rows || []), {
              equals: __c.gm,
            });
            this.Ltb = b7(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (this.PGa(b).size > 0) return new Set(a.layout.cols);
                b = this.NGa(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.ta, e.column);
                  for (const f of Wwc(
                    c ? c.span.dc : e.column,
                    c ? c.span.Yc : e.column,
                    a.layout.cols
                  ))
                    (b.size === 0 || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.gm }
            );
            this.Mtb = b7(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (this.NGa(b).size > 0) return new Set(a.layout.rows);
                b = this.PGa(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.ta, e.column);
                  for (const f of Wwc(
                    c ? c.span.mc : e.ta,
                    c ? c.span.vd : e.ta,
                    a.layout.rows
                  ))
                    (b.size === 0 || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.gm }
            );
          }
        };
        var Xxc,
          Yxc,
          Zxc,
          $xc,
          ayc,
          byc,
          cyc = parseInt("4px", 10) || 4,
          dyc = parseInt("0.5px", 10) || 0.5,
          eyc = parseInt("1px", 10) || 1,
          fyc = parseInt("0.5px", 10) || 0.5,
          gyc = parseInt("0.5px", 10) || 0.5,
          hyc = parseInt("1px", 10) || 1,
          iyc = parseInt("0.5px", 10) || 0.5,
          P6;
        new ((Xxc = class extends c7 {
          constructor() {
            super(P6);
            Zxc();
          }
        }),
        (() => {
          class a extends ($xc = X6) {
            static D(b) {
              M(b, { Xd: T6, Sr: T6, M$: T6 });
            }
            get Xd() {
              return this.props.sheet.direction === "rtl";
            }
            get Sr() {
              const b = this.props.oq?.get();
              if (b != null && b.length !== 0) return new __c.cx(b);
            }
            get M$() {
              return this.props.Pya?.()?.get();
            }
            render() {
              return J6(__c.Rt, {
                $p: "light",
                light: "light",
                lt: "light",
                dark: "light",
                children: this.Ykb,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (P6.D(this),
                a7((c) => {
                  const { onMouseMove: d, sheet: e, Id: f = 1 } = this.props;
                  d?.(c, e, "column", f);
                }));
              this.onMouseLeave = a7((c) => {
                this.props.onMouseLeave?.(c);
              });
              this.onMouseDown = a7((c) => {
                this.props.onMouseDown?.(c);
              });
              this.onTouchStart = a7((c) => {
                this.props.onTouchStart?.(c);
              });
              this.v6a = (c, d, e) => {
                const {
                    sheet: f,
                    pq: g,
                    aH: h,
                    rYb: k,
                    Id: l = 1,
                    fe: m = 1,
                  } = this.props,
                  n = { jNbTIg: !this.Xd, gtA7Dw: this.Xd },
                  p = e?.sticky
                    ? this.Xd
                      ? { right: 0 }
                      : { left: 0 }
                    : void 0;
                let q = -1;
                return K6("div", {
                  style: e?.sticky ? this.M$ ?? p : void 0,
                  className: L6("Vt2_4w", n, { Tn3nUw: e?.sticky }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    f.layout.cols.map((r) => {
                      q++;
                      if (
                        !(
                          (c && f.layout.cols.Ie(r, c) < 0) ||
                          (d && f.layout.cols.Ie(r, d) > 0)
                        )
                      )
                        return J6(
                          jyc,
                          {
                            col: r,
                            label: __c.Pr(q),
                            Xa: k?.get()?.get(r),
                            pq: g,
                            aH: h,
                            Id: l,
                            fe: m,
                          },
                          r.id
                        );
                    }),
                    e?.sticky &&
                      J6("div", {
                        style: { width: cyc * l },
                        className: L6("HBvlug", "ru3tFQ", n),
                      }),
                  ],
                });
              };
              this.Ykb = (c) => {
                const d = this.props.sheet,
                  e = d.view.freeze.dG
                    ? d.layout.Ud.get(d.view.freeze.dG)
                    : void 0;
                return K6("div", {
                  ref: this.Sr?.sn,
                  onMouseDown: this.onMouseDown,
                  onTouchStart: this.onTouchStart,
                  className: L6(
                    "xhBZaw",
                    { jNbTIg: !this.Xd, gtA7Dw: this.Xd },
                    c.className
                  ),
                  children: [
                    e && this.v6a(void 0, e, { sticky: !0 }),
                    this.v6a(e ? d.cols.next(e) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [P6, Zxc],
          } = d7(a, [], [pc], $xc));
        })(),
        Xxc)();
        var Q6;
        new ((Yxc = class extends c7 {
          constructor() {
            super(Q6);
            ayc();
          }
        }),
        (() => {
          class a extends (byc = X6) {
            static D(b) {
              M(b, { Xd: T6, Sr: T6, M$: T6 });
            }
            get Xd() {
              return this.props.sheet.direction === "rtl";
            }
            get Sr() {
              const b = this.props.oq?.get();
              if (b != null && b.length !== 0) return new __c.cx(b);
            }
            get M$() {
              return this.props.Pya?.()?.get();
            }
            render() {
              return J6(__c.Rt, {
                $p: "light",
                light: "light",
                lt: "light",
                dark: "light",
                children: this.QFb,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (Q6.D(this),
                a7((c) => {
                  const { onMouseMove: d, sheet: e, fe: f = 1 } = this.props;
                  d?.(c, e, "row", f);
                }));
              this.onMouseLeave = a7((c) => {
                this.props.onMouseLeave?.(c);
              });
              this.onMouseDown = a7((c) => {
                this.props.onMouseDown?.(c);
              });
              this.onTouchStart = a7((c) => {
                this.props.onTouchStart?.(c);
              });
              this.B6a = (c, d, e) => {
                const {
                    sheet: f,
                    pq: g,
                    aH: h,
                    Id: k = 1,
                    fe: l = 1,
                  } = this.props,
                  m = { jNbTIg: !this.Xd, gtA7Dw: this.Xd };
                var n = e?.sticky ? { top: 0 } : void 0;
                n = e?.sticky ? this.M$ ?? n : void 0;
                let p = -1,
                  q = 0;
                const r = f.rows.map((t) => {
                  p++;
                  if (
                    !((c && f.rows.Ie(t, c) < 0) || (d && f.rows.Ie(t, d) > 0))
                  )
                    return (
                      (q += t.height),
                      J6(
                        kyc,
                        {
                          ta: t,
                          label: `${p + 1}`,
                          aH: h,
                          pq: g,
                          Id: k,
                          fe: l,
                          start: f.pa(t),
                        },
                        t.id
                      )
                    );
                });
                return K6("div", {
                  style: { height: q * l, width: g(k), ...n },
                  className: L6("_93roJg", m, { Tn3nUw: e?.sticky }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    r,
                    e?.sticky &&
                      J6("div", {
                        style: { height: cyc * l },
                        className: L6("HBvlug", "koz2Hg"),
                      }),
                  ],
                });
              };
              this.QFb = (c) => {
                const d = this.props.sheet,
                  e = d.view.freeze.aT
                    ? d.layout.de.get(d.view.freeze.aT)
                    : void 0;
                return K6("div", {
                  ref: this.Sr?.sn,
                  onMouseDown: this.onMouseDown,
                  onTouchStart: this.onTouchStart,
                  className: L6(
                    "An9VeA",
                    { jNbTIg: !this.Xd, gtA7Dw: this.Xd },
                    c.className
                  ),
                  children: [
                    e && this.B6a(void 0, e, { sticky: !0 }),
                    this.B6a(e ? d.rows.next(e) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [Q6, ayc],
          } = d7(a, [], [pc], byc));
        })(),
        Yxc)();
        var jyc = N6((a) => {
            const b = a.label,
              c = a.Xa,
              d = a.col,
              e = a.aH,
              f = a.pq,
              g = a.Id;
            a = a.fe;
            const h = f(a),
              k = Nxc(() => e(d));
            return J6("div", {
              className: L6("_83Rssw", "d2uLIA", fxc(k)),
              style: {
                width: d.width * g,
                height: h,
                borderInlineWidth: `${dyc * g}px`,
                borderBlockStartWidth: `${eyc * g}px`,
                borderBlockEndWidth: `${fyc * g}px`,
              },
              children: J6(gxc, {
                label: b,
                Xa: c,
                width: d.width,
                height: f(1),
                scale: a,
                uRa: k,
              }),
            });
          }),
          kyc = N6((a) => {
            const b = a.label,
              c = a.ta,
              d = a.pq,
              e = a.aH,
              f = a.Id,
              g = a.fe,
              h = d(f),
              k = Nxc(() => e(c));
            return J6("div", {
              className: L6("_83Rssw", "JhBzyw", fxc(k)),
              style: {
                width: h,
                height: c.height * g,
                borderBlockWidth: `${gyc * g}px`,
                borderInlineStartWidth: `${hyc * g}px`,
                borderInlineEndWidth: `${iyc * g}px`,
                transform: `translateY(${a.start * g}px)`,
              },
              children: J6(gxc, {
                label: b,
                width: d(1),
                height: c.height,
                scale: f,
                uRa: k,
              }),
            });
          });
        var lyc =
          '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
        var myc =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
        var hxc = __c.mT({ Dp: lyc, medium: myc });
        var nyc, oyc, pyc, lxc;
        new ((nyc = class extends c7 {
          constructor() {
            super(lxc);
            oyc();
          }
        }),
        (() => {
          class a extends (pyc = X6) {
            static D(b) {
              M(b, { Ge: T6.struct });
            }
            render() {
              const b = this.props.element;
              return J6(this.props.er, {
                sheet: b.G.config,
                container: b,
                Zca: "visible",
                oq: this.props.oq,
                uu: this.props.uu,
                Av: this.props.Av,
                Bv: this.props.Bv,
                da: this.props.da,
                Ge: this.Ge,
                ri: this.props.ri,
                HJ: void 0,
              });
            }
            get Ge() {
              return __c.Xr(this.props.element.G.Qa, this.props.nf);
            }
            constructor(...b) {
              super(...b);
              a.D(this);
            }
          }
          ({
            c: [lxc, oyc],
          } = d7(a, [], [pc], pyc));
        })(),
        nyc)();
        var qyc = class {
          constructor() {
            this.Ena = new WeakMap();
            this.Nsb = (a) => this.Ena.get(a);
            this.C9a = (a, b) => {
              this.Ena.set(a, b);
            };
            this.xkb = (a, b) => {
              const c = this.Ena.get(a);
              c && c.fa === b.fa && c.ac === b.ac && this.Ena.delete(a);
            };
          }
        };
        var ryc = parseInt("4px", 10) || 4,
          syc = N6(({ sheet: a, da: b, range: c, Hx: d, Ix: e }) => {
            if (c != null && (d || e)) {
              b = b?.get() ?? 1;
              var f = a.direction === "rtl",
                g = { ZJ0G6w: !f, dOI_jA: f };
              if (d && e)
                return (
                  (d = a.pa(c.vd) + c.vd.height),
                  (a = a.qa(c.Yc) + c.Yc.width),
                  J6("div", {
                    style: { top: d * b, width: a * b, height: ryc * b },
                    className: L6("aX8dhQ", "VGcLng"),
                  })
                );
              if (d)
                return (
                  (c = a.qa(c.Yc) + c.Yc.width),
                  J6("div", {
                    style: {
                      width: ryc * b,
                      height: a.height * b,
                      ...(f ? { right: c * b } : { left: c * b }),
                    },
                    className: L6("aX8dhQ", "gl1RPg", g),
                  })
                );
              if (e)
                return (
                  (c = a.pa(c.vd) + c.vd.height),
                  J6("div", {
                    style: { top: c * b, width: a.width * b, height: ryc * b },
                    className: L6("aX8dhQ", "VGcLng"),
                  })
                );
            }
          });
        var e7 = ({ sheet: a, Hc: b, range: c, da: d, children: e }) => {
            const f = Vwc();
            nxc({ sheet: a, Hc: b, da: d, range: c, Ad: f });
            return J6("div", {
              ref: f,
              className: L6(
                "nstn2A",
                a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"
              ),
              children: e,
            });
          },
          tyc = ({ sheet: a, Hc: b, range: c, da: d, children: e }) => {
            const f = Vwc();
            nxc({ sheet: a, Hc: b, da: d, range: c, Ad: f });
            a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
            return J6("div", {
              className: L6("nstn2A", a, "_9sodyg"),
              children: J6("div", {
                ref: f,
                className: L6("nstn2A", a),
                children: e,
              }),
            });
          };
        var pxc = N6(({ sheet: a, children: b, JE: c }) => {
            const d = O6(
                (f) => {
                  c.MHa(a, f);
                },
                [c, a]
              ),
              e = O6(
                (f) => {
                  f != null ? c.KE.set(a, f) : c.KE.delete(a);
                },
                [c, a]
              );
            return J6(__c.a_b, {
              direction: a.config.direction === "rtl" ? "rtl" : "ltr",
              onScroll: d,
              mw: e,
              children: b,
            });
          }),
          oxc = class {
            MHa(a, b) {
              this.onScroll && this.onScroll(a);
              this.Q9.set(a, b);
            }
            constructor(a) {
              this.onScroll = a;
              this.KE = new WeakMap();
              this.Q9 = $6.map(new Map(), { deep: !1 });
              this.scrollTo = a7((b, c) => {
                this.KE.get(b)?.scrollTo({ left: Math.floor(c) });
              });
            }
          };
        var sxc = N6((a) => {
          const b = a.item,
            c = a.oq,
            d = a.uu,
            e = a.pg,
            f = a.measureRef,
            g = a.da,
            h = a.hZa,
            k = a.ac,
            l = a.Av,
            m = a.Bv,
            n = a.er,
            p = a.xO,
            q = a.ri,
            r = a.nf,
            t = a.Hc,
            v = a.JE;
          a = M6(() => __c.Xr(b.Qa, r), [b, r]);
          const w = M6(
              () =>
                N6(({ sheet: B, range: F, Hx: I, Ix: L }) =>
                  J6(e7, {
                    sheet: B,
                    Hc: t,
                    range: F,
                    da: g,
                    children: J6(syc, {
                      sheet: B,
                      da: g,
                      range: F,
                      Hx: I,
                      Ix: L,
                    }),
                  })
                ),
              [g, t]
            ),
            z = Xwc(b.config),
            A = g.get(),
            C = Math.min(z.width * A, k.width);
          R6(
            () =>
              S6(() => {
                var B = b.config.view.freeze.dG
                  ? b.config.layout.Ud.get(b.config.view.freeze.dG)
                  : void 0;
                if (B != null)
                  if (b.config.qa(B) + B.width > C) {
                    if ((B = v.KE.get(b))) B.style.overflowX = "hidden";
                  } else if ((B = v.KE.get(b))) B.style.overflowX = "scroll";
              }),
            [b, k.width, v, A, C]
          );
          return J6("div", {
            ref: f,
            className: "E8r86A",
            style: { width: C },
            children: J6(p, {
              sheet: b,
              children: J6("div", {
                ref: h,
                className: "cXTiJA",
                style: { width: z.width * A, height: z.height * A },
                children: J6("div", {
                  className: "W1ir5A",
                  children: J6(n, {
                    container: e.zj(b),
                    sheet: b.config,
                    Zca: "visible",
                    oq: c,
                    uu: d,
                    da: g,
                    Av: l,
                    Bv: m,
                    Ge: a,
                    ri: q,
                    HJ: w,
                  }),
                }),
              }),
            }),
          });
        });
        var uyc = N6(({ page: a, range: b, AE: c }) => {
          const d = uxc(a.sheet, b);
          return J6("div", {
            className: "Gi9pfA",
            children: a.elements.map((e, f) =>
              d == null ? c(e, f) : __c.Ym($m(e)).uq(d) && c(e, f)
            ),
          });
        });
        var vyc = new __c.$S(),
          wyc = (a) => __c.cX * a,
          xyc = () => "primary-default",
          vxc = N6(
            ({
              container: a,
              oq: b,
              uu: c,
              Av: d,
              Bv: e,
              E5: f,
              da: g,
              viewport: h,
              Hc: k,
              LHb: l,
              er: m,
              ri: n,
              AE: p,
              Gma: q,
              XPb: r,
              GOb: t,
              FOb: v,
            }) => {
              const w = a.page,
                z = M6(
                  () =>
                    N6(({ sheet: A, range: C, Hx: B, Ix: F }) =>
                      K6(Exc, {
                        children: [
                          J6(e7, {
                            sheet: w.sheet,
                            Hc: k,
                            range: C,
                            da: g,
                            children: J6(syc, {
                              sheet: A,
                              da: g,
                              range: C,
                              Hx: B,
                              Ix: F,
                            }),
                          }),
                          K6(tyc, {
                            sheet: w.sheet,
                            Hc: k,
                            range: C,
                            da: g,
                            children: [
                              r && J6(r, {}),
                              p && J6(uyc, { page: w, AE: p, range: C }),
                              v && J6(v, {}),
                              q && q(),
                            ],
                          }),
                          t &&
                            C &&
                            J6(e7, {
                              sheet: w.sheet,
                              Hc: k,
                              range: C,
                              da: g,
                              children: J6(t, { range: C }),
                            }),
                        ],
                      })
                    ),
                  [w, k, g, r, p, v, q, t]
                );
              return l
                ? J6(yyc, {
                    container: a,
                    viewport: h,
                    da: g,
                    oq: b,
                    uu: c,
                    Av: d,
                    Bv: e,
                    er: m,
                    ri: n,
                    HJ: z,
                  })
                : J6(m, {
                    sheet: w.sheet,
                    container: a,
                    Zca: "hidden",
                    oq: b,
                    uu: c,
                    Av: d,
                    Bv: e,
                    E5: f,
                    da: g,
                    viewport: h,
                    ri: n,
                    HJ: z,
                  });
            }
          ),
          yyc = N6((a) => {
            const b = a.container,
              c = a.da,
              d = a.viewport,
              e = a.oq,
              f = a.uu,
              g = a.Av,
              h = a.Bv,
              k = a.er,
              l = a.ri;
            a = a.HJ;
            const m = b.page,
              n = m.sheet.direction === "rtl",
              p = Y6(null),
              q = Y6(null),
              r = Y6(null);
            R6(() => {
              const A = f7({
                sheet: m.sheet,
                joa: !0,
                koa: !0,
                da: c,
                viewport: d,
              });
              return U6(
                () => A?.get(),
                (C) => {
                  const B = p.current;
                  if (C && B) {
                    var F = m.sheet.direction === "rtl";
                    B.style.position = C.position ?? "sticky";
                    B.style.top = C.top ?? "0px";
                    F
                      ? (B.style.right = C.right ?? "0px")
                      : (B.style.left = C.left ?? "0px");
                    B.style.transform = C.transform ?? "";
                  }
                }
              );
            }, [m.sheet, c, d]);
            R6(() => {
              const A = f7({
                sheet: m.sheet,
                joa: !1,
                koa: !0,
                da: c,
                viewport: d,
              });
              return U6(
                () => A?.get(),
                (C) => {
                  const B = r.current;
                  C &&
                    B &&
                    ((B.style.position = C.position ?? "sticky"),
                    (B.style.top = C.top ?? "0px"),
                    (B.style.transform = C.transform ?? ""));
                }
              );
            }, [m.sheet, c, d]);
            R6(() => {
              const A = f7({
                sheet: m.sheet,
                joa: !0,
                koa: !1,
                da: c,
                viewport: d,
              });
              return U6(
                () => A?.get(),
                (C) => {
                  const B = q.current;
                  if (C && B) {
                    var F = m.sheet.direction === "rtl";
                    B.style.position = C.position ?? "sticky";
                    F
                      ? (B.style.right = C.right ?? "0px")
                      : (B.style.left = C.left ?? "0px");
                    B.style.transform = C.transform ?? "";
                  }
                }
              );
            }, [m.sheet, c, d]);
            const t = O6(
                (A, C, B) =>
                  f7({ sheet: A, joa: C, koa: B, da: c, viewport: d }),
                [c, d]
              ),
              v = M6(
                () => (t ? () => t(m.sheet, !0, !1) : void 0),
                [t, m.sheet]
              ),
              w = M6(
                () => (t ? () => t(m.sheet, !1, !0) : void 0),
                [t, m.sheet]
              ),
              z = c?.get() ?? 1;
            return K6("div", {
              className: L6("OsKKIQ", "cbOp6Q"),
              children: [
                J6("div", {
                  className: "VDFv_A",
                  children: J6(k, {
                    sheet: m.sheet,
                    container: b,
                    Zca: "hidden",
                    oq: e,
                    uu: f,
                    Av: g,
                    Bv: h,
                    E5: t,
                    da: c,
                    viewport: d,
                    ri: l,
                    HJ: a,
                  }),
                }),
                J6("div", {
                  ref: p,
                  className: "_688KWg",
                  children: J6(ixc, { Xd: n, cYa: !1, pq: wyc, scale: z }),
                }),
                J6("div", {
                  ref: r,
                  className: "m0cT1w",
                  children: J6(P6, {
                    sheet: m.sheet,
                    Id: z,
                    fe: z,
                    pq: wyc,
                    aH: xyc,
                    VH: vyc,
                    Pya: v,
                  }),
                }),
                J6("div", {
                  ref: q,
                  className: "zm537g",
                  children: J6(Q6, {
                    sheet: m.sheet,
                    Id: z,
                    fe: z,
                    pq: wyc,
                    aH: xyc,
                    VH: vyc,
                    Pya: w,
                  }),
                }),
              ],
            });
          }),
          f7 = ({ sheet: a, joa: b, koa: c, da: d, viewport: e }) =>
            T6(() => {
              var f = e?.get().pb();
              const g = d?.get() ?? 1;
              if (!f) return {};
              const h = {};
              f = new Bm(f.left, f.top);
              const k = a.direction === "rtl";
              h.position = "relative";
              c && (h.top = "0px");
              b && (k ? (h.right = "0px") : (h.left = "0px"));
              h.transform = `translate(${b ? f.x * g : 0}px, ${
                c ? f.y * g : 0
              }px)`;
              return h;
            });
        var Bxc = class {
          constructor(a, b) {
            this.Wk = a;
            this.Hc = b;
            this.ckb = __c.kV;
            this.nsb = b7((c, d, e, f) => {
              e = e.get();
              const g = new WeakMap();
              for (let v = 0; v < e.length; v++) {
                var h = e[v],
                  k = this.fsb(c, d, h);
                if (k) {
                  switch (k) {
                    case "start":
                    case "justify":
                      var l = e[v + 1];
                      if (l == null || !lB(c, this.Hc, d, l)) continue;
                      break;
                    case "center":
                      l = e[v + 1];
                      if (l == null || !lB(c, this.Hc, d, l)) continue;
                      l = e[v - 1];
                      if (l == null || !lB(c, this.Hc, d, l)) continue;
                      break;
                    case "end":
                      l = e[v - 1];
                      if (l == null || !lB(c, this.Hc, d, l)) continue;
                      break;
                    default:
                      throw new D(k);
                  }
                  if ((l = f(d, h))) {
                    var m = l.width + (k === "center" ? 0 : this.ckb);
                    if (!(h.width > m)) {
                      switch (k) {
                        case "start":
                        case "justify":
                          k = c.qa(h);
                          l = k + m;
                          break;
                        case "center":
                          l = c.qa(h) + h.width / 2;
                          k = l - m / 2;
                          l += m / 2;
                          break;
                        case "end":
                          l = c.qa(h) + h.width;
                          k = l - m;
                          break;
                        default:
                          throw new D(k);
                      }
                      for (m = e.indexOf(h); m >= 0; m--) {
                        var n = e[m],
                          p = m - 1 < 0 || lB(c, this.Hc, d, e[m - 1]),
                          q;
                        if ((q = n === h || lB(c, this.Hc, d, n))) {
                          q = k;
                          var r = l,
                            t = c.qa(n);
                          q = q < t && t < r;
                        }
                        if (q && p) g.set(n, 1);
                        else break;
                      }
                      for (h = e.indexOf(h) + 1; h < e.length; h++) {
                        m = e[h];
                        if ((n = lB(c, this.Hc, d, m)))
                          (n = k), (p = l), (q = c.qa(m)), (n = n < q && q < p);
                        if (n) g.set(m, 1);
                        else break;
                      }
                    }
                  }
                }
              }
              return g;
            });
            this.fsb = (c, d, e) => {
              const f = c.layout.cells.get(d, e);
              if (
                f &&
                (f.ref.content.ref || f.ref.Da.ref) &&
                f.span.mc === f.span.vd &&
                f.span.dc === f.span.Yc
              ) {
                var g = this.Wk.an(c, d, e);
                c = this.Wk.Iya(
                  c,
                  d,
                  e,
                  __c.Lf({ Ug: void 0, textAlign: void 0 })
                );
                var { Ug: h, textAlign: k } = __c.nf(__c.Kf, c);
                if (h === "overflow")
                  return __c.oOa(
                    k,
                    f.ref.content.ref?.type,
                    f.ref.Da.ref?.type,
                    g ? () => g.vj.type : void 0
                  );
              }
            };
          }
        };
        var zyc = N6(function (a) {
          const b = a.sheet;
          var c = a.Uh;
          const d = a.aNb,
            e = a.da,
            f = a.xAa,
            g = a.Trb;
          a = a.overflow;
          const h = Vwc();
          Hxc(
            () =>
              S6(() => {
                const p = y(h.current),
                  q = e?.get() ?? 1,
                  r = b.height;
                p.style.width = `${b.width * q}px`;
                p.style.height = `${r * q}px`;
              }),
            [h, e, b]
          );
          const k = O6((p) => f.nsb(b, p, d, g), [f, b, d, g]);
          var l = O6((p, q) => k(p)?.get(q) ?? 0, [k]);
          c = Twc(b, c, d, l);
          l = b.width;
          const m = b.height,
            n = b.direction === "rtl";
          return J6("svg", {
            ref: h,
            role: "presentation",
            className: L6("c6a1eQ", {
              H_CtIQ: !n,
              _8_56PQ: n,
              _3NnFzw: a === "visible",
              JMH1ng: a === "hidden",
            }),
            viewBox: `0 0 ${l} ${m}`,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            children: c.map(({ lines: p, color: q, weight: r, xl: t, yl: v }) =>
              J6(
                "path",
                {
                  stroke: q,
                  strokeDasharray: t,
                  strokeDashoffset: v,
                  strokeWidth: r,
                  d: p
                    .map(
                      ({ p1: w, p2: z }) => `M ${w.x} ${w.y} L ${z.x} ${z.y}`
                    )
                    .join(" "),
                },
                `${q}-${r}-${t}-${v}`
              )
            ),
          });
        });
        var Ayc;
        Ayc = Symbol.iterator;
        var Byc = class {
          get size() {
            return this.Una;
          }
          get([a, b]) {
            return (a = this.EH.get(a)) ? a.get(b) : void 0;
          }
          has([a, b]) {
            a = this.EH.get(a);
            return a == null ? !1 : a.has(b);
          }
          set([a, b], c) {
            let d = this.EH.get(a);
            d == null && ((d = new Map()), this.EH.set(a, d));
            d.set(b, c);
            this.Una++;
            return this;
          }
          clear() {
            this.EH.clear();
            this.Una = 0;
          }
          delete([a, b]) {
            const c = this.EH.get(a);
            if (c == null || !c.delete(b)) return !1;
            this.Una--;
            c.size === 0 && this.EH.delete(a);
            return !0;
          }
          forEach(a) {
            for (const [b, c] of this.EH) for (const [d, e] of c) a([b, d], e);
          }
          *[Ayc]() {
            for (const [a, b] of this.EH)
              for (const [c, d] of b) yield [[a, c], d];
          }
          constructor() {
            this.Una = 0;
            this.EH = new Map();
          }
        };
        var Cyc,
          Dyc,
          Eyc,
          Fyc,
          Gyc,
          Hyc,
          Iyc,
          zxc = __c.uc("285688d5", !1),
          Jyc,
          Kyc = class extends X6 {
            render() {
              const { cha: a, ...b } = this.props,
                c = this.props.sheet;
              return K6("div", {
                ref: this.X9a,
                className: L6(
                  "ZTz_iA",
                  c.direction === "ltr" ? "TA4X7w" : "WvuqMw"
                ),
                children: [
                  a?.OPa &&
                    J6(g7, {
                      ...b,
                      sheet: c,
                      range: a.OPa.range,
                      Hx: !0,
                      Ix: !0,
                      className: "_0C8M3w",
                    }),
                  a?.xdb &&
                    J6(g7, {
                      ...b,
                      sheet: c,
                      range: a.xdb.range,
                      Hx: !1,
                      Ix: !0,
                      className: "_7n44yg",
                    }),
                  a?.fYa &&
                    J6(g7, {
                      ...b,
                      sheet: c,
                      range: a.fYa.range,
                      Hx: !0,
                      Ix: !1,
                      className: "fF5r6w",
                    }),
                  a?.pcb &&
                    J6(g7, {
                      ...b,
                      sheet: c,
                      range: a.pcb.range,
                      Hx: !1,
                      Ix: !1,
                      className: "llILYw",
                    }),
                ],
              });
            }
            componentDidMount() {
              const a = S6(() => {
                var b = this.props,
                  c = b.da;
                b = b.sheet;
                const d = this.X9a.current;
                d &&
                  ((c = c ? c.get() : 1),
                  (d.style.width = `${b.width * c}px`),
                  (d.style.height = `${b.height * c}px`));
              });
              __c.fc(this, [a]);
            }
            constructor(...a) {
              super(...a);
              this.X9a = js();
            }
          };
        ({
          c: [Jyc, Eyc],
        } = d7(Kyc, [], [pc], X6));
        Eyc();
        var g7;
        new ((Cyc = class extends c7 {
          constructor() {
            super(g7);
            Fyc();
          }
        }),
        (() => {
          class a extends (Gyc = X6) {
            static D(b) {
              M(b, { eIa: T6, bounds: T6 });
            }
            get eIa() {
              const b = this.props.viewport,
                c = this.props.Hx,
                d = this.props.Ix;
              return b == null || (!c && !d)
                ? b
                : T6(() => {
                    const e = b.get().pb();
                    return $m({
                      top: d ? 0 : e.top,
                      left: c ? 0 : e.left,
                      width: e.width,
                      height: e.height,
                    });
                  });
            }
            render() {
              const b = this.props.wR,
                c = this.props.sheet,
                d = this.props.container,
                e = this.props.range,
                f = this.props.HJ,
                g = this.props.Hx,
                h = this.props.Ix;
              return K6("div", {
                ref: this.EEa,
                className: L6("i0YQww", this.props.className),
                children: [
                  J6("div", {
                    ref: this.C4a,
                    className: "vUKoKg",
                    children: J6("div", {
                      ref: this.D4a,
                      children: J6(h7, {
                        wR: b,
                        sheet: c,
                        container: d,
                        bounds: e,
                        oq: this.props.oq,
                        uu: this.props.uu,
                        rF: this.props.rF,
                        ri: this.props.ri,
                        l3: this.props.l3,
                        Hc: this.props.Hc,
                        da: this.props.da,
                        Uh: this.Uh,
                        lba: this.lba,
                        qW: this.qW,
                      }),
                    }),
                  }),
                  J6(this.jra, {}),
                  f && J6(f, { sheet: c, range: e, Hx: g, Ix: h }),
                ],
              });
            }
            componentDidMount() {
              const b = S6(() => {
                  var h = this.props,
                    k = h.da,
                    l = h.sheet,
                    m = this.EEa.current;
                  const n = this.C4a.current;
                  h = this.D4a.current;
                  var p = this.bounds,
                    q = p.dc,
                    r = p.Yc;
                  const t = p.mc;
                  p = p.vd;
                  k = k ? k.get() : 1;
                  r = r && q ? l.qa(r) + r.width - l.qa(q) : l.width;
                  p = p && t ? l.pa(p) + p.height - l.pa(t) : l.height;
                  m &&
                    ((m.style.width = `${r * k}px`),
                    (m.style.height = `${p * k}px`));
                  n &&
                    ((n.style.width = `${r * k}px`),
                    (n.style.height = `${p * k}px`));
                  m = l.direction === "rtl";
                  q = q ? l.qa(q) * k * (m ? 1 : -1) : 0;
                  l = t ? -l.pa(t) * k : 0;
                  h && (h.style.transform = `translate(${q}px, ${l}px)`);
                }),
                c = this.props.sheet;
              var d = this.props.E5;
              const e = this.props.Hx,
                f = this.props.Ix,
                g = e || f ? d?.(c, e, f) : void 0;
              d = S6(() => {
                const h = this.EEa.current;
                if (h != null) {
                  var k = e || f ? "sticky" : "relative",
                    l = f ? "0px" : "unset",
                    m = e ? "0px" : "unset",
                    n = e ? "0px" : "unset",
                    p = c.direction === "rtl";
                  if (g == null)
                    (h.style.position = k),
                      (h.style.top = l),
                      (h.style.left = p ? "unset" : m),
                      (h.style.right = p ? n : "unset");
                  else {
                    const q = g.get();
                    h.style.position = q.position ?? k;
                    h.style.top = q.top ?? l;
                    h.style.left = p ? "unset" : q.left ?? m;
                    h.style.right = p ? q.right ?? n : "unset";
                    h.style.transform = q.transform ?? "unset";
                  }
                }
              });
              __c.fc(this, [b, d]);
            }
            get bounds() {
              var b = this.props.sheet,
                c = this.props.Hc,
                d = this.props.range;
              const e = c.layout.Qi.ws(b);
              b = c.layout.Qi.bq(b);
              if (b.empty || e.empty)
                return { dc: void 0, Yc: void 0, mc: void 0, vd: void 0 };
              c = d.dc;
              const f = d.Yc,
                g = d.mc;
              d = d.vd;
              const h = b.first(),
                k = e.first(),
                l = b.last(),
                m = e.last();
              return {
                dc: c ? (b.has(c) ? c : void 0) : h,
                Yc: f ? (b.has(f) ? f : void 0) : l,
                mc: g ? (e.has(g) ? g : void 0) : k,
                vd: d ? (e.has(d) ? d : void 0) : m,
              };
            }
            constructor(...b) {
              super(...b);
              this.EEa = (g7.D(this), js());
              this.C4a = js();
              this.D4a = js();
              this.qW = new Lyc();
              this.bNb = T6(
                () =>
                  [...this.Uh.get().keys()].sort((c, d) =>
                    this.props.Hc.layout.Qi.ws(this.props.sheet).Ie(c, d)
                  ),
                { equals: __c.hm() }
              );
              this.$Mb = T6(
                () =>
                  [...this.lba.get().keys()].sort((c, d) =>
                    this.props.Hc.layout.Qi.bq(this.props.sheet).Ie(c, d)
                  ),
                { equals: __c.hm() }
              );
              this.jra = N6(() =>
                J6(this.props.Bgb, {
                  Uh: this.bNb,
                  aNb: this.$Mb,
                  Trb: this.qW.pha,
                  range: this.props.range,
                })
              );
              this.Uh = T6(
                () => {
                  const c = this.props.sheet;
                  var d = this.props.da,
                    e = this.props.Hc,
                    f = this.eIa?.get();
                  if (f && (f.height <= 0 || f.width <= 0)) return new Map();
                  const g = this.bounds;
                  d = d.get();
                  var h = 50 * d;
                  const k = f ? f.ua.y - h : g.mc ? c.pa(g.mc) : 0;
                  f = f ? f.br.y + h : g.vd ? c.pa(g.vd) + g.vd.height : 0;
                  h = new Map();
                  e = e.layout.Qi.ws(c);
                  for (
                    let l = g.mc;
                    l != null && g.vd != null && e.Ie(l, g.vd) <= 0;
                    l = e.next(l)
                  ) {
                    const m = c.pa(l);
                    if (!(m + l.height < k)) {
                      if (m > f) break;
                      h.set(l, m * d);
                    }
                  }
                  return h;
                },
                { equals: Ixc.shallow }
              );
              this.lba = T6(
                () => {
                  const c = this.props.sheet;
                  var d = this.props.da,
                    e = this.props.Hc,
                    f = this.eIa?.get();
                  if (f && (f.height <= 0 || f.width <= 0)) return new Map();
                  const g = this.bounds;
                  d = d.get();
                  var h = 50 * d;
                  const k = f ? f.ua.x - h : g.dc ? c.qa(g.dc) : 0;
                  f = f ? f.br.x + h : g.Yc ? c.qa(g.Yc) + g.Yc.width : 0;
                  h = new Map();
                  e = e.layout.Qi.bq(c);
                  for (
                    let l = g.dc;
                    l != null && g.Yc != null && e.Ie(l, g.Yc) <= 0;
                    l = e.next(l)
                  ) {
                    const m = c.qa(l);
                    if (!(m + l.width < k)) {
                      if (m > f) break;
                      h.set(l, m * d);
                    }
                  }
                  return h;
                },
                { equals: Ixc.shallow }
              );
            }
          }
          ({
            c: [g7, Fyc],
          } = d7(a, [], [pc], Gyc));
        })(),
        Cyc)();
        var Lyc = class {
            constructor() {
              this.cells = new Byc();
              this.OFa = (a, b, c) => {
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = $6.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                d.set(c);
                return () => {
                  const e = this.cells.get([a, b]);
                  e === d && (e.set(void 0), this.cells.delete([a, b]));
                };
              };
              this.pha = (a, b) => {
                let c = this.cells.get([a, b]);
                c == null &&
                  ((c = $6.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], c));
                return c.get()?.URa;
              };
            }
          },
          h7;
        new ((Dyc = class extends c7 {
          constructor() {
            super(h7);
            Hyc();
          }
        }),
        (() => {
          class a extends (Iyc = X6) {
            static D(b) {
              M(b, { iO: $6.shallow, Sr: T6, oPa: a7, Aea: a7.bound });
            }
            get Sr() {
              const b = this.props.oq?.get();
              if (b != null && b.length !== 0) return new __c.cx(b);
            }
            render() {
              return K6("div", {
                onMouseDown: this.props.uu?.onMouseDown,
                onTouchStart: this.props.uu?.onTouchStart,
                ref: Oxc(this.Ad, this.Sr?.sn),
                children: [
                  J6("div", { ref: this.lua, className: "_5YlOqQ" }),
                  J6("div", { ref: this.nua, className: "_XCmKw" }),
                  this.iO.map((b) => b.MDb),
                ],
              });
            }
            componentDidMount() {
              const b = U6(
                  () => [
                    this.props.sheet,
                    this.props.lba.get(),
                    this.props.Uh.get(),
                  ],
                  ([e, f, g], h) => {
                    [h] = h || [];
                    e !== h && this.ykb();
                    this.oPa(f, g);
                  },
                  { fireImmediately: !0 }
                ),
                c = S6(() => {
                  var e = this.props,
                    f = e.da;
                  e = e.sheet;
                  const g = this.Ad.current;
                  g &&
                    ((f = f ? f.get() : 1),
                    (g.style.width = `${e.width * f}px`),
                    (g.style.height = `${e.height * f}px`));
                }),
                d = this.iO.map((e) => Axc(e));
              __c.fc(this, [c, b, ...d]);
            }
            ykb() {
              const b = y(this.lua.current),
                c = y(this.nua.current);
              b.innerHTML = "";
              c.innerHTML = "";
              this.xLa.length = 0;
              this.iO.length = 0;
            }
            oPa(b, c) {
              const d = y(this.lua.current),
                e = y(this.nua.current),
                f = [],
                g = new Map();
              for (const h of this.xLa)
                c.has(h.ta) ? g.set(h.ta, h) : f.push(h);
              for (const [h, k] of c)
                (c = g.get(h) || f.pop()),
                  c ||
                    ((c = new Myc(this.Aea, h)),
                    d.appendChild(c.uda),
                    e.appendChild(c.wda),
                    this.xLa.push(c)),
                  c.update(k, h, b);
              for (const h of f) h.hide();
            }
            Aea(b, c) {
              const d = this.props.l3,
                e = this.props.Hc,
                f = this.props.sheet,
                g = this.props.container,
                h = this.props.qW;
              b = new Nyc(
                this.props.wR,
                this.props.rF,
                this.props.ri,
                d(b, c),
                e,
                f,
                b,
                c,
                g,
                h.OFa,
                this.xha,
                this.wha
              );
              __c.fc(this, Axc(b));
              this.iO.push(b);
              return b;
            }
            constructor(...b) {
              super(...b);
              this.Ad = (h7.D(this), js());
              this.lua = js();
              this.nua = js();
              this.xLa = [];
              this.iO = [];
              this.xha = b7((c) => {
                const d = this.props.Uh.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
              this.wha = b7((c) => {
                const d = this.props.lba.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
            }
          }
          ({
            c: [h7, Hyc],
          } = d7(a, [], [pc], Iyc));
        })(),
        Dyc)();
        var Myc = class {
            static D(a) {
              M(a, { update: a7 });
            }
            update(a, b, c) {
              [this.uda, this.wda].forEach((d) => {
                d.style.transform = `translateY(${a}px)`;
                d.classList.add("FPpqvg");
              });
              this.ta = b;
              for (const [d] of c)
                (c = this.iO.get(d)),
                  c ||
                    ((c = this.Aea(d, b)),
                    this.iO.set(d, c),
                    this.uda.appendChild(c.tda),
                    this.wda.appendChild(c.mP)),
                  c.update(b);
            }
            hide() {
              [this.uda, this.wda].forEach((a) => {
                a.style.transform = "translate(-1000px, -1000px) scale(0)";
              });
            }
            constructor(a, b) {
              this.Aea = a;
              this.ta = b;
              this.uda = (Myc.D(this), document.createElement("div"));
              this.wda = document.createElement("div");
              this.iO = new Map();
            }
          },
          Nyc = class {
            static D(a) {
              M(a, {
                hea: $6.ref,
                ta: $6.ref,
                Cza: T6,
                update: a7,
                ev: T6,
                attrs: T6.struct,
                aBa: T6,
                ox: T6,
                renderer: T6,
                URa: T6.struct,
              });
            }
            get Cza() {
              if (!zxc) return !1;
              const a = this.ev;
              return a == null ||
                a.content.ref == null ||
                a.content.ref.type !== "formula"
                ? !1
                : this.wR(this.sheet, a.content.ref.value);
            }
            update(a) {
              a !== this.ta &&
                ((this.ta = a),
                (this.GB.ta = a),
                this.Nwa && this.Nwa(),
                (this.Nwa = this.OFa(this.ta, this.col, this)));
            }
            get MDb() {
              return this.hea;
            }
            get ev() {
              const a = this.sheet.layout.cells.get(this.ta, this.col);
              return a ? a.ref : void 0;
            }
            get attrs() {
              const a = this.GB.attrs;
              return {
                Ug: a?.Ug,
                textAlign: a?.textAlign,
                direction: a?.direction,
                link: a?.link,
                fontSize: a?.fontSize,
                color: a?.color,
              };
            }
            get aBa() {
              var a = this.GB.span;
              if (!a) return !1;
              if (a.mc === a.vd && a.dc === a.Yc) return !0;
              var b = this.xha("first");
              const c = this.xha("last"),
                d = this.wha("first"),
                e = this.wha("last");
              if (!(b && c && d && e)) return !1;
              const f = this.Hc.layout.Qi.ws(this.sheet),
                g = this.Hc.layout.Qi.bq(this.sheet);
              b = f.Ie(a.mc, b) >= 0 && f.Ie(a.mc, c) <= 0 ? a.mc : b;
              a = g.Ie(a.dc, d) >= 0 && g.Ie(a.dc, e) <= 0 ? a.dc : d;
              return b === this.ta && a === this.col;
            }
            get ox() {
              const a = this.sheet,
                b = this.ta,
                c = this.col;
              if (!this.container)
                return { type: void 0, sheet: a, ta: b, column: c };
              switch (this.container.type) {
                case "fixed-page":
                  return this.container.EQ(c, b);
                case "sheet-item":
                  return this.container.EQ(c, b);
                case "sheet-element":
                  return this.container.EQ(c, b);
                default:
                  throw new D(this.container);
              }
            }
            get renderer() {
              const a = this.ev;
              if (a && this.aBa && (a.content.ref || a.Da.ref))
                return this.rF({
                  context: { container: this.ox, attrs: this.attrs },
                  Cq: this.sDa,
                  ri: this.ri,
                });
            }
            get URa() {
              this.VRa.reportObserved();
              var a = Kxc(() => this.renderer);
              if (
                a &&
                ((a = a.type === "react" ? this.f9 : this.fG),
                a.childNodes.length !== 0 &&
                  ((a = a.childNodes[0]), a instanceof HTMLElement))
              )
                return { width: a.clientWidth, height: a.clientHeight };
            }
            constructor(a, b, c, d, e, f, g, h, k, l, m, n) {
              this.wR = a;
              this.rF = b;
              this.GB = d;
              this.Hc = e;
              this.sheet = f;
              this.col = g;
              this.container = k;
              this.OFa = l;
              this.xha = m;
              this.wha = n;
              this.tda = (Nyc.D(this), document.createElement("div"));
              this.mP = document.createElement("div");
              this.ZF = document.createElement("div");
              this.fG = document.createElement("div");
              this.f9 = document.createElement("div");
              this.VRa = Jxc("content size atom");
              this.sDa = a7(() => this.VRa.reportChanged());
              this.ta = h;
              this.tda.className = "_2JFriw";
              this.mP.className = "imy9ug";
              this.ZF.className = L6("pDMp7w", {
                _0yZ6Qg: this.ev?.content.ref?.type !== "text3",
                qhF5uA:
                  this.ev?.content.ref?.type !== "text3" &&
                  this.ev?.content.ref?.type !== "text2",
                qxD1GA: this.Cza,
              });
              this.fG.className = "_30B9pw";
              this.ZF.appendChild(this.fG);
              this.mP.appendChild(this.ZF);
              this.f9.className = "G7zH2w";
              this.Nwa = l(this.ta, this.col, this);
              this.ri = (p) => J6(c, { ...p, Cq: this.sDa });
            }
          };
        var Oyc, Pyc, Qyc, V6;
        new ((Oyc = class extends c7 {
          constructor() {
            super(V6);
            Pyc();
          }
        }),
        (() => {
          class a extends (Qyc = X6) {
            static D(b) {
              M(b, { cha: T6 });
            }
            render() {
              const {
                  wR: b,
                  sheet: c,
                  container: d,
                  Hc: e,
                  oq: f,
                  uu: g,
                  E5: h,
                  rF: k,
                  Ge: l,
                  ri: m,
                  viewport: n,
                  HJ: p,
                  mdb: q = !1,
                } = this.props,
                r = c.direction === "ltr" ? "TA4X7w" : "WvuqMw",
                t = e.layout.Qi.ws(c);
              if (!e.layout.Qi.bq(c).empty && !t.empty)
                return J6("div", {
                  className: L6("SNkrHw", r, { RaA0Nw: q }),
                  ...l,
                  children: J6(Jyc, {
                    wR: b,
                    rF: k,
                    ri: m,
                    Bgb: this.jra,
                    l3: this.l3,
                    Hc: e,
                    sheet: c,
                    container: d,
                    oq: f,
                    uu: g,
                    E5: h,
                    da: this.da,
                    viewport: n,
                    HJ: p,
                    cha: this.cha,
                  }),
                });
            }
            get cha() {
              var b = this.props.sheet,
                c = this.props.Hc;
              const d = {},
                e = b.view.freeze.aT
                  ? b.layout.de.get(b.view.freeze.aT)
                  : void 0,
                f = b.view.freeze.dG
                  ? b.layout.Ud.get(b.view.freeze.dG)
                  : void 0;
              var g = c.layout.Qi.ws(b),
                h = c.layout.Qi.bq(b);
              b = g.first();
              c = g.last();
              const k = h.first(),
                l = h.last();
              if (b != null && c != null && k != null && l != null)
                return (
                  (h = f ? h.next(f) : k),
                  (g = e ? g.next(e) : b),
                  e && f && (d.OPa = { range: { dc: k, mc: b, Yc: f, vd: e } }),
                  e && h && (d.xdb = { range: { dc: h, mc: b, Yc: l, vd: e } }),
                  f && g && (d.fYa = { range: { dc: k, mc: g, Yc: f, vd: c } }),
                  g && h && (d.pcb = { range: { dc: h, mc: g, Yc: l, vd: c } }),
                  d
                );
            }
            get da() {
              return this.props.da ? this.props.da : T6(() => 1);
            }
            constructor(...b) {
              super(...b);
              this.jra =
                (V6.D(this),
                N6((c) => {
                  const {
                    sheet: d,
                    Hc: e,
                    xAa: f,
                    da: g,
                    Zca: h = "hidden",
                  } = this.props;
                  return J6(e7, {
                    sheet: d,
                    Hc: e,
                    range: c.range,
                    da: g,
                    children: J6(zyc, {
                      ...c,
                      sheet: d,
                      da: this.da,
                      xAa: f,
                      overflow: h,
                    }),
                  });
                }));
              this.l3 = (c, d) =>
                new __c.HOa(
                  this.props.Wk,
                  this.props.Hc,
                  this.props.zB,
                  this.props.sheet,
                  c,
                  d,
                  this.da,
                  this.Av,
                  this.Bv
                );
              this.Av = (c, d) => this.props.Av?.(this.props.sheet, c, d);
              this.Bv = (c, d) => this.props.Bv?.(this.props.sheet, c, d);
            }
          }
          ({
            c: [V6, Pyc],
          } = d7(a, [], [pc], Qyc));
        })(),
        Oyc)();
        __c.SOa = {
          Vub: function (a) {
            const b = a.It,
              c = a.Nd,
              d = a.Hd,
              e = a.pn,
              f = a.Wk,
              g = a.Hc,
              h = a.zB,
              k = a.$0;
            exc({ yB: a.yB, Nf: a.Nf, kJb: a.YS, ab: a.ab });
            const l = Cxc({ rF: k, Hc: g, Wk: f, zB: h, mA: void 0 });
            b.Hra = wxc({ er: l, Hc: g });
            c.kra = mxc({ er: l });
            ({ Fgb: a } = txc({ er: l, Ne: e(), T9a: new qyc(), Hc: g }));
            d.Tp.Gra = a;
            const { Beb: m, Ceb: n, Aeb: p } = kxc();
            return {
              uNa: N6((q) =>
                J6(Qxc, {
                  ...q,
                  container: void 0,
                  er: l,
                  Egb: m,
                  Ggb: n,
                  Cgb: p,
                  ri: Rxc,
                })
              ),
            };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/b12686b333865d46.js.map
