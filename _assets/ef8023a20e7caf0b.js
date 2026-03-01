(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [6712],
  {
    /***/ 152531: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var YZ;
        var d0;
        var M = __c.M;
        var H = __c.H;
        var oD = __c.oD;
        var Sc = __c.Sc;
        var he = __c.he;
        var y = __c.y;
        var D = __c.D;
        var u = __c.u;
        var B9b,
          E9b,
          H9b,
          K9b,
          N9b,
          P9b,
          R9b,
          PZ,
          T9b,
          RZ,
          SZ,
          U9b,
          TZ,
          V9b,
          UZ,
          W9b,
          VZ,
          X9b,
          WZ,
          Y9b,
          XZ,
          Z9b,
          f$b,
          l$b,
          u$b,
          v$b,
          w$b,
          x$b,
          o_,
          p_,
          q_,
          z$b,
          A$b,
          B$b,
          r_,
          E$b,
          C$b,
          t_,
          v_,
          u_,
          F$b,
          w_,
          H$b,
          J$b,
          K$b,
          M$b,
          z_,
          N$b,
          Z$b,
          $$b,
          aac,
          bac,
          E_,
          O$b,
          A_,
          T$b,
          W$b,
          Y$b,
          C_,
          V$b,
          cac,
          L$b,
          eac,
          fac,
          gac,
          dac,
          jac,
          kac,
          G_,
          yac,
          vac,
          tac,
          I_,
          lac,
          oac,
          nac,
          uac,
          mac,
          zac,
          sac,
          qac,
          pac,
          H_,
          J_,
          Cac,
          Dac,
          Eac,
          Gac,
          Fac,
          Iac,
          M_,
          Mac,
          Qac,
          Pac,
          g$b,
          Sac,
          o$b,
          p$b,
          Uac,
          Vac,
          Wac,
          Xac,
          Zac,
          U_,
          V_,
          a$b,
          abc,
          bbc,
          fbc,
          gbc,
          ibc,
          jbc,
          kbc,
          lbc;
        B9b = function (a, b) {
          if (!a.ok)
            throw Error(
              `Encountered an error while sending ${b} request: ${a.error}`
            );
          if (a.value == null) throw Error(`${b}: Result cannot be empty`);
          return a.value;
        };
        E9b = async function (a, b) {
          a = await a.kW.request("RENDER_ELEMENT", C9b.Fa(b));
          a = B9b(a, "RENDER_ELEMENT");
          return D9b.za(a);
        };
        H9b = async function (a, b) {
          a = await a.kW.request("SET_CAPABILITY", F9b.Fa(b));
          a = B9b(a, "SET_CAPABILITY");
          return G9b.za(a);
        };
        K9b = async function (a, b) {
          a = await a.kW.request("RENDER_EDIT_PANEL", I9b.Fa(b));
          if (!a.ok)
            throw Error(
              `Encountered an error while sending ${"RENDER_EDIT_PANEL"} request: ${
                a.error
              }`
            );
          if (a.value == null)
            throw Error("RENDER_EDIT_PANEL: Result cannot be empty");
          return J9b.za(a.value);
        };
        N9b = function (a, b) {
          __c.wu(a, "SET_CONFIG", L9b, (c) => b.uza(c), M9b);
        };
        P9b = async function (a, b, c) {
          const { port1: d, port2: e } = new MessageChannel(),
            f = new __c.Qxa(d, b);
          await __c.Kxa(e, b, a, window);
          a = new O9b(f);
          N9b(f, c);
          return a;
        };
        __c.NZ = function (a) {
          return { type: 1, Component: a };
        };
        __c.OZ = function () {
          return (a) => a;
        };
        R9b = function ({ Zma: a }) {
          return { cT: new Q9b(a, []) };
        };
        PZ = function () {
          throw Error("ref not found");
        };
        T9b = function (a, b, c) {
          return new S9b(a, b, c);
        };
        __c.QZ = function () {
          return (a) => a;
        };
        RZ = function (a, b) {
          return b.map((c) => ({ type: a, id: c.id, version: c.version }));
        };
        SZ = function (a) {
          return { kind: 0, XM: a };
        };
        U9b = function () {
          return { kind: 1 };
        };
        TZ = function (a) {
          return { kind: 3, range: a };
        };
        V9b = function (a) {
          return { kind: 2, range: a };
        };
        UZ = function (...a) {
          return { kind: 4, values: new Set(a) };
        };
        W9b = function (a) {
          return { kind: 5, itemType: a };
        };
        VZ = function (a) {
          return { kind: 7, name: a };
        };
        X9b = function (a) {
          return { kind: 8, itemType: a };
        };
        WZ = function (a) {
          return { kind: 10, fields: a };
        };
        Y9b = function (a, ...b) {
          return { kind: 11, jUa: a, lg: b };
        };
        XZ = function (a, b, c) {
          return (d, ...e) => ({ key: d, YHa: a, uE: b, type: c(...e) });
        };
        YZ = __c.YZ = function (a) {
          const b = new Set();
          for (const c of Object.values(a))
            u(!b.has(c.key), "duplicate key: {}", c.key), b.add(c.key);
          return a;
        };
        Z9b = function (a) {
          switch (a.kind) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
              return !1;
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
              return !0;
            default:
              throw new D(a);
          }
        };
        __c.ZZ = function (a) {
          return () => ({ ...$9b, ...a });
        };
        f$b = function (a) {
          function b(f, g) {
            var h = c;
            g = g();
            u(!h.P9.has(f));
            g = { document: a$b(h.qSa(f, g.document)), G: a$b(h.qSa(f, g.G)) };
            h.P9.set(f, g);
            return { id: f, qn: g };
          }
          const c = a.TLa,
            { aga: d = __c.uc("c79472f0", !1) } = a,
            e = __c.uc("1d0cd616", !1);
          return {
            jx: b("w:wnJF5T87v", b$b),
            Cfa: b("w:xB9fK2LmQ", c$b),
            LW: a.WUa
              ? Promise.all([
                  __webpack_require__.me(270376).then(() => __c.$Z),
                  __webpack_require__.me(309241).then(() => __c.a_),
                  __webpack_require__.me(726606).then(() => __c.b_),
                  __webpack_require__.me(555219).then(() => __c.c_),
                  __webpack_require__.me(756388).then(() => __c.d_),
                  __webpack_require__.me(516583).then(() => __c.e_),
                  __webpack_require__.me(93698).then(() => __c.f_),
                  __webpack_require__.me(295247).then(() => __c.g_),
                  __webpack_require__.me(934200).then(() => __c.h_),
                  __webpack_require__.me(308710).then(() => __c.i_),
                ]).then(([f, g, h, k, l, m, n, p, q, r]) => ({
                  Vea: b("w:cm9wgGptP", f.bi),
                  Xea: b("w:yLMS4dWnl", g.bi),
                  Yea: b("w:2flp30CGQ", h.bi),
                  Zea: b("w:1Nv6K6Dtv", k.bi),
                  $ea: b("w:5Nv6K6Dtv", l.bi),
                  afa: b("w:6Nv6K6Dtv", m.bi),
                  bfa: b("w:7Nv6K6Dtv", n.bi),
                  cfa: b("w:8Nv6K6Dtv", p.bi),
                  dfa: b("w:9Nv6K6Dtv", q.bi),
                  Wea: b("w:sSrc7m4Q3", r.bi),
                }))
              : void 0,
            bW: b("w:JR4G8hDDg", d$b),
            Nda: b("w:KS5H9iEEh", e$b),
            form: d
              ? __webpack_require__
                  .me(313335)
                  .then(() => __c.j_)
                  .then((f) => b("widget:form", f.bi))
              : void 0,
            YY: a.$Ua
              ? __webpack_require__
                  .me(870165)
                  .then(() => __c.k_)
                  .then((f) => b("w:K7mQ9xR3p", f.bi))
              : void 0,
            scene: a.cVa
              ? __webpack_require__
                  .me(666647)
                  .then(() => __c.l_)
                  .then((f) => b("w:2pbXJMtm1", f.bi))
              : void 0,
            button: e
              ? __webpack_require__
                  .me(868015)
                  .then(() => __c.m_)
                  .then((f) => b("w:PQccHDsCJ", f.bi))
              : void 0,
          };
        };
        l$b = function (a) {
          function b({ id: e, qn: f }, g) {
            var h = d;
            g = g();
            const k = y(h.FGa.P9.get(e));
            u(k.G === f.G);
            u(!h.uSa.has(e));
            f = g$b(e, g, f);
            h.uSa.set(e, f);
            return f;
          }
          const c = a.ULa,
            d = a.SLa;
          return {
            LW: c.LW
              ? Promise.all([
                  c.LW,
                  __webpack_require__.me(270376).then(() => __c.$Z),
                  __webpack_require__.me(309241).then(() => __c.a_),
                  __webpack_require__.me(726606).then(() => __c.b_),
                  __webpack_require__.me(555219).then(() => __c.c_),
                  __webpack_require__.me(756388).then(() => __c.d_),
                  __webpack_require__.me(516583).then(() => __c.e_),
                  __webpack_require__.me(93698).then(() => __c.f_),
                  __webpack_require__.me(295247).then(() => __c.g_),
                  __webpack_require__.me(934200).then(() => __c.h_),
                  __webpack_require__.me(308710).then(() => __c.i_),
                ]).then(([e, f, g, h, k, l, m, n, p, q, r]) => ({
                  Vea: b(e.Vea, f.ai),
                  Xea: b(e.Xea, g.ai),
                  Yea: b(e.Yea, h.ai),
                  Zea: b(e.Zea, k.ai),
                  $ea: b(e.$ea, l.ai),
                  afa: b(e.afa, m.ai),
                  bfa: b(e.bfa, n.ai),
                  cfa: b(e.cfa, p.ai),
                  dfa: b(e.dfa, q.ai),
                  Wea: b(e.Wea, r.ai),
                }))
              : void 0,
            scene: c.scene
              ? Promise.all([
                  c.scene,
                  __webpack_require__.me(666647).then(() => __c.l_),
                ]).then(([e, f]) => b(e, f.ai))
              : void 0,
            button: c.button
              ? Promise.all([
                  c.button,
                  __webpack_require__.me(868015).then(() => __c.m_),
                ]).then(([e, f]) => b(e, f.ai))
              : void 0,
            bW: b(c.bW, h$b),
            Nda: b(c.Nda, i$b),
            form: c.form
              ? Promise.all([
                  c.form,
                  __webpack_require__.me(313335).then(() => __c.j_),
                ]).then(([e, f]) => b(e, f.ai))
              : void 0,
            jx: b(c.jx, j$b),
            Cfa: b(c.Cfa, k$b),
            YY: c.YY
              ? Promise.all([
                  c.YY,
                  __webpack_require__.me(870165).then(() => __c.k_),
                ]).then(([e, f]) => b(e, f.ai))
              : void 0,
          };
        };
        u$b = function (a) {
          function b({ Ii: h, jo: k, Ld: l, bJ: m = "default" }) {
            const n = k.id;
            k = k.qn;
            h = l({
              jW: { ...f, Za: e.Cv(`widgets.rendering.clients.${m}`) },
              Ii: h,
            });
            l = y(d.FGa.P9.get(n));
            u(l.G === k.G);
            u(!d.Ima.has(n));
            m$b.has(n) || (__c.ZQ.set(n, n$b), m$b.add(n));
            const { Gpb: p, TL: q } = o$b(d, k, h);
            l = p$b(d, k, h, q);
            h = { G: p, email: l, exports: h.exports, TL: q };
            d.Ima.set(n, h);
            return { id: n, qn: k, bGa: h, bJ: m };
          }
          const c = a.ULa,
            d = a.qba,
            e = a.Mf,
            f = a.jW,
            g = a.Ii;
          return {
            jx: g.vta?.then((h) =>
              b({ Ii: { WF: g.WF, i2: h }, jo: c.jx, Ld: q$b, bJ: "blueprint" })
            ),
            Cfa: b({
              Ii: { WF: g.WF },
              jo: c.Cfa,
              Ld: r$b,
              bJ: "documentBlueprint",
            }),
            LW: c.LW
              ? Promise.all([
                  c.LW,
                  __webpack_require__.me(270376).then(() => __c.$Z),
                  __webpack_require__.me(309241).then(() => __c.a_),
                  __webpack_require__.me(726606).then(() => __c.b_),
                  __webpack_require__.me(555219).then(() => __c.c_),
                  __webpack_require__.me(756388).then(() => __c.d_),
                  __webpack_require__.me(516583).then(() => __c.e_),
                  __webpack_require__.me(93698).then(() => __c.f_),
                  __webpack_require__.me(295247).then(() => __c.g_),
                  __webpack_require__.me(934200).then(() => __c.h_),
                  __webpack_require__.me(308710).then(() => __c.i_),
                ]).then(([h, k, l, m, n, p, q, r, t, v, w]) => ({
                  Vea: b({ Ii: void 0, jo: h.Vea, Ld: k.Ld }),
                  Xea: b({ Ii: void 0, jo: h.Xea, Ld: l.Ld }),
                  Yea: b({ Ii: void 0, jo: h.Yea, Ld: m.Ld }),
                  Zea: b({ Ii: void 0, jo: h.Zea, Ld: n.Ld }),
                  $ea: b({ Ii: void 0, jo: h.$ea, Ld: p.Ld }),
                  afa: b({ Ii: void 0, jo: h.afa, Ld: q.Ld }),
                  bfa: b({ Ii: void 0, jo: h.bfa, Ld: r.Ld }),
                  cfa: b({ Ii: void 0, jo: h.cfa, Ld: t.Ld }),
                  dfa: b({ Ii: void 0, jo: h.dfa, Ld: v.Ld }),
                  Wea: b({ Ii: void 0, jo: h.Wea, Ld: w.Ld }),
                }))
              : void 0,
            bW: b({ Ii: { P0: g.P0 }, jo: c.bW, Ld: s$b, bJ: "codelet" }),
            Nda: b({ Ii: void 0, jo: c.Nda, Ld: t$b, bJ: "codelet2" }),
            form: c.form
              ? Promise.all([
                  c.form,
                  __webpack_require__.me(313335).then(() => __c.j_),
                  g.vL?.(),
                ]).then(([h, k, l]) =>
                  b({ Ii: { qrb: l, YC: g.YC }, jo: h, Ld: k.Ld, bJ: "form" })
                )
              : void 0,
            YY: c.YY
              ? Promise.all([
                  c.YY,
                  __webpack_require__.me(870165).then(() => __c.k_),
                ]).then(([h, k]) =>
                  b({ Ii: void 0, jo: h, Ld: k.Ld, bJ: "navigationMenu" })
                )
              : void 0,
            scene: c.scene
              ? Promise.all([
                  c.scene,
                  __webpack_require__.me(666647).then(() => __c.l_),
                  g.D6 ? g.D6() : Promise.resolve(void 0),
                ]).then(([h, k, l]) =>
                  b({
                    Ii: { Zma: l, cT: l ? R9b({ Zma: l }).cT : void 0 },
                    jo: h,
                    Ld: k.Ld,
                    bJ: "scene",
                  })
                )
              : void 0,
            button: c.button
              ? Promise.all([
                  c.button,
                  __webpack_require__.me(868015).then(() => __c.m_),
                ]).then(([h, k]) =>
                  b({ Ii: void 0, jo: h, Ld: k.Ld, bJ: "button" })
                )
              : void 0,
          };
        };
        v$b = function (a) {
          var b = { document: void 0, G: void 0 };
          const c = new Map();
          for (const d in b) a[d].qK.forEach((e, f) => c.set(f, e));
          return {
            qK: c,
            decode: (d) => {
              const e = new Map(),
                f = {};
              for (const g in d) {
                const h = a[g].decode(d[g]);
                h.yGa.forEach((k, l) => e.set(l, k));
                f[g] = h.data;
              }
              return { yGa: e, data: f };
            },
            encode: (d) => he(b, (e, f) => a[f].encode(d[f])),
          };
        };
        w$b = function (a) {
          return () => a;
        };
        x$b = function (a) {
          return a();
        };
        o_ = function (a, b, c) {
          return new n_([a], b, c);
        };
        p_ = function (a, b, c, d) {
          return new n_([a, b], c, d);
        };
        q_ = function (a, b, c, d) {
          return new y$b(a, b, c, d);
        };
        z$b = function (a, b) {
          return b(a);
        };
        A$b = function (a) {
          return (b, c) => ({ kind: 2, name: a, args: [b, c] });
        };
        B$b = function (a) {
          return (b) => ({ kind: 3, name: a, args: b });
        };
        r_ = function (a, b) {
          return a === b || b.map((c) => a.zAa(C$b(c)));
        };
        E$b = function (a, b) {
          return a.JCa(b).map((c) => new D$b(c, (d) => d.props[b]));
        };
        C$b = function (a) {
          u(a instanceof s_);
          return a;
        };
        t_ = function (a) {
          const b = new WeakMap();
          return function (c) {
            let d = b.get(c);
            d == null && ((d = a.call(this, c)), b.set(c, d));
            return d;
          };
        };
        v_ = function (a, b) {
          if (a === b) return !0;
          switch (typeof a) {
            case "string":
            case "number":
            case "boolean":
            case "undefined":
              return !1;
            case "object":
              if (typeof b !== "object" || a.kind !== b.kind) return !1;
              switch (a.kind) {
                case "array":
                  return b.kind === "array" && u_(a.items, b.items);
                case "set":
                  var c;
                  if ((c = b.kind === "set"))
                    (a = a.items),
                      (b = b.items),
                      (c =
                        a === b
                          ? !0
                          : a.size !== b.size
                          ? !1
                          : u_([...a], [...b]));
                  return c;
                case "map":
                  if ((c = b.kind === "map"))
                    (a = a.items),
                      (b = b.items),
                      (c =
                        a === b
                          ? !0
                          : a.size !== b.size
                          ? !1
                          : u_(
                              [...a.keys(), ...a.values()],
                              [...b.keys(), ...b.values()]
                            ));
                  return c;
                case "record":
                  return b.kind === "record" && F$b(a.fields, b.fields);
                case "instance":
                  return b.kind === "instance" && a.instance === b.instance;
                default:
                  throw new D(a);
              }
            default:
              throw new D(a);
          }
        };
        u_ = function (a, b) {
          if (a === b) return !0;
          if (a.length !== b.length) return !1;
          for (let c = 0; c < a.length; c++) if (!v_(a[c], b[c])) return !1;
          return !0;
        };
        F$b = function (a, b) {
          if (a === b) return !0;
          const c = Object.keys(a),
            d = Object.keys(b),
            e = new Set([...c, ...d]);
          if (c.length !== e.size || d.length !== e.size) return !1;
          for (const f of e) if (!v_(a[f], b[f])) return !1;
          return !0;
        };
        w_ = function (a) {
          return typeof a === "string" ? JSON.stringify(a) : String(a);
        };
        H$b = function (a, b) {
          return a.map((c) => b.map((d) => G$b[0](c, d)));
        };
        J$b = function (a, b, c) {
          return b.map((d) => I$b[a](d, c));
        };
        K$b = function (a, b) {
          return new x_(new y_(new Map(b), a.vars), a.q5);
        };
        M$b = function (a, b, c) {
          for (const [e, f] of c.q5) {
            var d = f.params.map(([g, h]) => [g, a.types.evaluate(h)]);
            d = L$b(b, d, (g) => z_(a, g, f.body));
            b = new x_(b.vars, b.q5.define(e, d));
          }
          return z_(a, b, c.body);
        };
        z_ = function (a, b, c) {
          switch (c.kind) {
            case 1:
              return N$b(c.value);
            case 2:
              const f = c.args.map((q) => z_(a, b, q));
              c = c.name;
              return typeof c === "string"
                ? b.q5.resolve(c).map((q) => O$b(q, f))
                : P$b[c].map((q) => A_(q, f));
            case 3:
              const g = c.args.map((q) =>
                q.kind !== 13 ? new Q$b(z_(a, b, q)) : new R$b(z_(a, b, q.jZb))
              );
              c = c.name;
              switch (c) {
                case 0:
                case 1:
                  var d = g.map((q) =>
                    q.eya(
                      (r) => r.type,
                      (r) => r.type.DR()
                    )
                  );
                  return B_.union(...d)
                    .map(S$b[c])
                    .map((q) => T$b(q, g));
                default:
                  return U$b[c].map((q) => T$b(q, g));
              }
            case 4:
              d = c.name;
              var e = c.param;
              const h = c.body,
                k = z_(a, b, c.gW);
              c = k.type.DR();
              const l = L$b(b, [[e, c]], (q) => z_(a, q, h));
              return J$b(d, c, l.resultType).map((q) => V$b(q, k, l));
            case 5:
              const m = c.entries.map(([q, r]) => [z_(a, b, q), z_(a, b, r)]);
              c = B_.union(...m.map(([q]) => q.type));
              d = B_.union(...m.map(([, q]) => q.type));
              if (!r_(c, B_.primitive))
                throw Error(`key type is not a primitive: ${c}`);
              return H$b(c, d).map((q) => W$b(q, m));
            case 6:
              const n = he(c.fields, (q) => z_(a, b, q));
              c = he(n, (q) => q.type);
              return (0, X$b[0])(c).map((q) => Y$b(q, n));
            case 7:
              d = a.types.resolve(c.name);
              if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
              const p = z_(a, b, { kind: 6, fields: c.args });
              return d.aAb.map((q) => A_(q, [p], { fp: !0 }));
            case 8:
              return (d = z_(a, b, c.base)), Z$b(d, c.l6b);
            case 9:
              return $$b(b, c.name);
            case 10:
              return (d = Sc(c.defs, (q) => z_(a, b, q))), aac(a, b, d, c.body);
            case 11:
              return (
                (d = z_(a, b, c.test).as(B_.Rg)),
                (e = z_(a, b, c.pSb)),
                (c = z_(a, b, c.alternate)),
                bac(d, e, c)
              );
            case 12:
              return z_(a, b, c.body).computed();
            default:
              throw new D(c);
          }
        };
        N$b = function (a) {
          switch (typeof a) {
            case "string":
              return C_(B_.string, a);
            case "number":
              return C_(B_.number, a);
            case "boolean":
              return C_(B_.Rg, a);
            case "undefined":
              return C_(B_.undefined, a);
            default:
              throw new D(a);
          }
        };
        Z$b = function (a, b) {
          return a.map((c) =>
            E$b(c, b).map(({ type: d, get: e }) => A_(new n_([c], d, e), [a]))
          );
        };
        $$b = function (a, b) {
          return a.vars.resolve(b).map((c) => D_.of(c, (d) => d.resolve(b)));
        };
        aac = function (a, b, c, d) {
          const e = Sc(c, (g) => g.type),
            f = Sc(c, (g) => g.evaluate);
          return cac(z_(a, K$b(b, e), d), (g) => {
            const h = Sc(f, (k) => k(g));
            return new y_(new Map(h), g);
          });
        };
        bac = function (a, b, c) {
          return b.map((d, e) =>
            c.map((f, g) => {
              f = B_.union(d, f);
              return D_.of(f, (h) => {
                const k = a(h),
                  l = e(h),
                  m = g(h);
                return () => (k() ? l() : m());
              });
            })
          );
        };
        E_ = function (a) {
          return (b) => b(a);
        };
        O$b = function ({ Gla: a, resultType: b, evaluate: c }, d) {
          if (d.length !== a.length)
            throw Error(`expected ${a.length} arguments, but got ${d.length}`);
          const e = dac(a, (f, g) => d[g].as(f));
          return D_.of(b, (f) => {
            const g = e.map(E_(f));
            return c(f)(...g);
          });
        };
        A_ = function ({ Gla: a, resultType: b, apply: c }, d, e) {
          if (d.length !== a.length)
            throw Error(`expected ${a.length} arguments, but got ${d.length}`);
          const f = dac(a, (g, h) => d[h].as(g));
          return D_.of(b, (g) => {
            g = f.map(E_(g));
            return eac(e?.fp ? fac(c) : c, g);
          });
        };
        T$b = function ({ pDb: a, resultType: b, apply: c }, d) {
          let e;
          const f = d.map((g) =>
            g.qta(
              (h) => h.as(a),
              (h) => h.as(e ?? (e = B_.gW(a)))
            )
          );
          return new D_(b, (g) => {
            const h = E_(g),
              k = f.map((l) => l.qta(h, h));
            return () => {
              const l = [];
              k.forEach((m) => {
                m.eya(
                  (n) => l.push(n()),
                  (n) => l.push(...n())
                );
              });
              return c(l);
            };
          });
        };
        W$b = function (
          { keyType: a, valueType: b, resultType: c, apply: d },
          e
        ) {
          const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
          return new D_(c, (g) => {
            const h = f.map(([k, l]) => [k(g), l(g)]);
            return () => d(h.map(([k, l]) => [k(), l()]));
          });
        };
        Y$b = function ({ nib: a, resultType: b, apply: c }, d) {
          const e = Object.keys(a).filter((g) => !d.hasOwnProperty(g));
          if (e.length) throw Error(`too few arguments (missing ${e})`);
          const f = gac(a, (g, h) => d[h].as(g));
          return new D_(b, (g) => {
            const h = he(f, E_(g));
            return () => {
              var k = he(h, x$b);
              return c(k);
            };
          });
        };
        C_ = function (a, b) {
          const c = w$b(b);
          return new D_(a, () => c);
        };
        V$b = function (
          { itemType: a, Gib: b, resultType: c, reduce: d },
          e,
          f
        ) {
          const g = f.as([a], b),
            h = e.as(B_.gW(a));
          return new D_(c, (k) => {
            const l = h(k),
              m = g(k),
              n = fac((p) => {
                p = p.map(w$b);
                return [p, p.map(m)];
              });
            return () => {
              const [p, q] = n(l());
              return d(p, q);
            };
          });
        };
        cac = function (a, b) {
          const c = a.evaluate;
          return new D_(a.type, (d) => c(b(d)));
        };
        L$b = function (a, b, c) {
          const d = b.map((f) => f[0]),
            e = b.map((f) => f[1]);
          return z$b(e, (f) =>
            c(K$b(a, new Map(b))).map(
              (g, h) =>
                new hac(f, g, (k) => (...l) => {
                  const m = new Map(d.map((n, p) => [n, l[p]]));
                  return h(new y_(new Map(m), k));
                })
            )
          );
        };
        eac = function (a, b) {
          switch (b.length) {
            case 0:
              return a;
            case 1:
              const [c] = b;
              return () => a(c());
            case 2:
              const [d, e] = b;
              return () => a(d(), e());
            default:
              return () => {
                var f = b.map(x$b);
                return a(...f);
              };
          }
        };
        fac = function (a) {
          let b;
          return (...c) => {
            if (
              b &&
              b.ddb.length === c.length &&
              b.ddb.every((e, f) => F_.dh(e, c[f]))
            )
              return b.v;
            const d = a(...c);
            b = { ddb: c, v: d };
            return d;
          };
        };
        gac = function (a, b) {
          return he(a, b);
        };
        dac = function (a, b) {
          return a.map(b);
        };
        jac = function (a, b, c) {
          return new iac(a, b, c);
        };
        kac = function (a, b) {
          return [...a].map(b)[Symbol.iterator]();
        };
        G_ = function (a, b, c, d) {
          if (d == null) throw a.error(b.$K(c), "not found");
          return d;
        };
        yac = function (a) {
          function b(r) {
            return m[r.kind](r);
          }
          const c = a.types,
            d = a.values;
          class e {
            static of(r, t, v, w, z, A) {
              return new e(r, v, w, lac(z, mac(t)), nac(A, mac(t)));
            }
            map(r) {
              return r(this);
            }
            validate(r) {
              return r
                ? new e(
                    this.dataType,
                    this.Saa,
                    this.raa,
                    oac(this.decode, r),
                    lac(this.encode, r)
                  )
                : this;
            }
            constructor(r, t, v, w, z) {
              this.dataType = r;
              this.Saa = t;
              this.raa = v;
              this.decode = w;
              this.encode = z;
            }
          }
          const f = e.of(
              { kind: 0 },
              "string",
              c.string,
              (r) => r,
              (r, t, v) => v.value,
              (r, t, v) => ({ type: "string", value: v })
            ),
            g = e.of(
              { kind: 1 },
              "boolean",
              c.Rg,
              (r) => r,
              (r, t, v) => v.value,
              (r, t, v) => ({ type: "boolean", value: v })
            ),
            h = e
              .of(
                { kind: 2 },
                "double",
                c.number,
                (r) => r,
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "double", value: v })
              )
              .validate((r, t, v) => {
                if (!Number.isFinite(v))
                  throw r.error(t, `number is not finite: ${v}`);
              }),
            k = e
              .of(
                { kind: 3 },
                "int32",
                c.number,
                (r) => r,
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "int32", value: v })
              )
              .validate((r, t, v) => {
                if (!Number.isInteger(v) || v < -2147483648 || v > 2147483647)
                  throw r.error(t, `number is not an int32: ${v}`);
              }),
            l = {
              FontRef: e.of(
                { kind: 7, name: "FontRef" },
                "ref",
                c.instance("FontRef"),
                (r) => d.instance("FontRef", r),
                H_("font"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              MediaRef: e.of(
                { kind: 7, name: "MediaRef" },
                "ref",
                c.instance("MediaRef"),
                (r) => d.instance("MediaRef", r),
                H_("media"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              VideoRef: e.of(
                { kind: 7, name: "VideoRef" },
                "ref",
                c.instance("VideoRef"),
                (r) => d.instance("VideoRef", r),
                H_("video"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              AudioRef: e.of(
                { kind: 7, name: "AudioRef" },
                "ref",
                c.instance("AudioRef"),
                (r) => d.instance("AudioRef", r),
                H_("audio"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              EmbedRef: e.of(
                { kind: 7, name: "EmbedRef" },
                "ref",
                c.instance("EmbedRef"),
                (r) => d.instance("EmbedRef", r),
                H_("embed"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              SceneRef: e.of(
                { kind: 7, name: "SceneRef" },
                "ref",
                c.instance("SceneRef"),
                (r) => d.instance("SceneRef", r),
                H_("scene"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              BlueprintRef: e.of(
                { kind: 7, name: "BlueprintRef" },
                "ref",
                c.instance("BlueprintRef"),
                (r) => d.instance("BlueprintRef", r),
                H_("blueprint"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              Fill: e.of(
                { kind: 7, name: "Fill" },
                "fill",
                c.instance("Fill"),
                (r) => d.instance("Fill", r),
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "fill", value: v })
              ),
              Stroke: e.of(
                { kind: 7, name: "Stroke" },
                "stroke",
                c.instance("Stroke"),
                (r) => d.instance("Stroke", r),
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "stroke", value: v })
              ),
              Richtext2: e.of(
                { kind: 7, name: "Richtext2" },
                "text2",
                c.instance("Richtext2"),
                (r) => d.instance("Richtext2", r),
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "text2", value: v })
              ),
            },
            m = {
              [0]: (r) => f.validate(pac(r.XM)),
              [1]: () => g,
              [2]: (r) => h.validate(qac(r.range)),
              [3]: (r) => k.validate(qac(r.range)),
              [4]: (r) =>
                e
                  .of(
                    { kind: 4, values: r.values },
                    rac,
                    c.primitive,
                    (t) => t,
                    (t, v, w) => w.value,
                    (t, v, w) => {
                      a: switch (typeof w) {
                        case "string":
                          t = { type: "string", value: w };
                          break a;
                        case "boolean":
                          t = { type: "boolean", value: w };
                          break a;
                        case "number":
                          t = { type: "int32", value: w };
                          break a;
                        default:
                          throw new D(w);
                      }
                      return t;
                    }
                  )
                  .validate(sac(r.values)),
              [5]: (r) => {
                const {
                  dataType: t,
                  Saa: v,
                  raa: w,
                  decode: z,
                  encode: A,
                } = b(r.itemType);
                return e.of(
                  { kind: 5, itemType: t },
                  "list",
                  c.array(v),
                  (C) => d.array(C.map(w)),
                  (C, B, F) =>
                    F.value.toArray().map((I, L) => z(C, B.DQ(L), I)),
                  (C, B, F) => ({
                    type: "list",
                    value: F.map((I, L) => A(C, B.DQ(L), I)),
                  })
                );
              },
              [6]: (r) => {
                const {
                  dataType: t,
                  Saa: v,
                  raa: w,
                  decode: z,
                  encode: A,
                } = b(r.itemType);
                return e.of(
                  { kind: 6, itemType: t },
                  "dict",
                  c.map(c.string, v),
                  (C) => d.map(Sc(C, w)),
                  (C, B, F) => Sc(F.value.$k(), (I, L) => z(C, B.e5(L), I)),
                  (C, B, F) => ({
                    type: "dict",
                    value: Sc(F, (I, L) => A(C, B.e5(L), I)),
                  })
                );
              },
              [7]: (r) => l[r.name],
              [8]: (r) => {
                const { dataType: t, decode: v, encode: w } = b(r.itemType);
                return e.of(
                  { kind: 8, itemType: t },
                  "list",
                  c.undefined,
                  () => {},
                  (z, A, C) =>
                    T9b(
                      C.value,
                      (B) => w(z, A.DQ("*"), B),
                      tac(v, z, A.DQ("*"))
                    ),
                  (z, A, C) => ({
                    type: "list",
                    value: C.map((B, F) => w(z, A.DQ(F), B)),
                  })
                );
              },
              [9]: (r) => {
                const { dataType: t, decode: v, encode: w } = b(r.itemType);
                return e.of(
                  { kind: 9, itemType: t },
                  "dict",
                  c.undefined,
                  () => {},
                  (z, A, C) =>
                    jac(
                      C.value,
                      (B) => w(z, A.e5("*"), B),
                      tac(v, z, A.DQ("*"))
                    ),
                  (z, A, C) => ({
                    type: "dict",
                    value: Sc(C, (B, F) => w(z, A.e5(F), B)),
                  })
                );
              },
              [10]: (r) => {
                const { decode: t, encode: v } = p.$_a(r.fields);
                return e.of(
                  { kind: 10, fields: r.fields },
                  "dict",
                  c.undefined,
                  () => {},
                  t,
                  v
                );
              },
              [11]: (r) => {
                function t(I, L, N, O) {
                  N = N.get(O);
                  if (N == null)
                    throw I.error(
                      L,
                      `unknown case for discriminator value: ${O}`
                    );
                  return N;
                }
                const v = r.jUa;
                r = r.lg;
                var w = Object.keys(v);
                u(w.length >= 1, "missing discriminator props");
                u(w.length <= 1, "too many discriminator props: {}", w);
                const z = w[0];
                u(r.length >= 1, "discriminated union has no cases");
                w = new Map();
                for (const I of r) {
                  const L = I.fields[z].type.values,
                    N = b(I);
                  for (const O of L)
                    u(
                      !w.has(O),
                      "discriminator values are not unique across cases: {}",
                      O
                    ),
                      w.set(O, N);
                }
                const { decode: A, encode: C } = b({
                    kind: 4,
                    values: new Set(w.keys()),
                  }),
                  B = Sc(w, (I) => I.decode),
                  F = Sc(w, (I) => I.encode);
                return e.of(
                  { kind: 11, jUa: v, lg: r },
                  "dict",
                  c.undefined,
                  () => {},
                  (I, L, N) => {
                    var O = G_(I, L, "k", N.value.get("k"));
                    N = G_(I, L, "v", N.value.get("v"));
                    uac(I, L, "dict", N);
                    O = A(I, L, O);
                    return t(I, L, B, O)(I, L, N);
                  },
                  (I, L, N) => {
                    const O = N[z],
                      R = t(I, L, F, O);
                    return {
                      type: "dict",
                      value: new Map([
                        ["k", C(I, L, O)],
                        ["v", R(I, L, N)],
                      ]),
                    };
                  }
                );
              },
            },
            n = Symbol("$impl");
          class p {
            static $_a(r) {
              r = he(r, (w) => q.of(w));
              const t = he(r, (w) => w.IJb()),
                v = Object.entries(r);
              return {
                qK: new Map(v.map(([, w]) => w.DJb())),
                JJb: (w) => {
                  const z = w[n];
                  return new Map(v.map(([, A]) => A.KJb(z)));
                },
                decode: (w, z, A) => {
                  const C = Object.create(null, t);
                  Object.defineProperty(C, n, {
                    enumerable: !1,
                    writable: !1,
                    value: new p(w, z, A.value),
                  });
                  return C;
                },
                encode: (w, z, A) => {
                  const C = v.map(([B, F]) => F.encode(w, z, A[B]));
                  return { type: "dict", value: new Map(C.filter(__c.ob)) };
                },
              };
            }
            $ya(r, t) {
              const v = G_(this.e, this.p, t, this.data.get(t));
              return I_(this.LVa, r.decode, this.e, this.p.$K(t), v);
            }
            Yya(r, t) {
              const v = this.data.get(t);
              if (v != null)
                return I_(this.LVa, r.decode, this.e, this.p.$K(t), v);
            }
            B9a(r, t, v) {
              this.data.set(t, r.encode(this.e, this.p.$K(t), v));
            }
            w9a(r, t, v) {
              v != null
                ? this.data.set(t, r.encode(this.e, this.p.$K(t), v))
                : this.data.delete(t);
            }
            constructor(r, t, v) {
              this.e = r;
              this.p = t;
              this.data = v;
              this.LVa = new WeakMap();
              this.lQa = new Map();
              this.Hsb = vac(this.lQa, (w, z) => {
                const A = this;
                return {
                  get ref() {
                    return A.$ya(z, w);
                  },
                  set(C) {
                    A.B9a(z, w, C);
                  },
                };
              });
              this.wsb = vac(this.lQa, (w, z) => {
                const A = this;
                return {
                  get ref() {
                    return A.Yya(z, w);
                  },
                  set(C) {
                    A.w9a(z, w, C);
                  },
                };
              });
            }
          }
          class q {
            static of(r) {
              return new q(r, b(r.type));
            }
            DJb() {
              const r = this.key,
                t = this.Bb,
                v = this.type;
              switch (t.uE) {
                case 0:
                  return [r, v.Saa];
                case 1:
                  return [r, c.optional(v.Saa)];
                default:
                  throw new D(t.uE);
              }
            }
            KJb(r) {
              const t = this.key,
                v = this.Bb,
                w = this.type;
              switch (v.uE) {
                case 0:
                  return [t, () => w.raa(r.$ya(w, t))];
                case 1:
                  return [
                    t,
                    () => {
                      const z = r.Yya(w, t);
                      return z != null ? w.raa(z) : void 0;
                    },
                  ];
                default:
                  throw new D(v.uE);
              }
            }
            IJb() {
              const r = this.key;
              var t = this.Bb;
              const v = this.type;
              if (Z9b(v.dataType) && t.YHa === 1) {
                switch (t.uE) {
                  case 0:
                    t = function () {
                      return this[n].Hsb(r, v);
                    };
                    break;
                  case 1:
                    t = function () {
                      return this[n].wsb(r, v);
                    };
                    break;
                  default:
                    throw new D(t.uE);
                }
                return { enumerable: !0, get: t };
              }
              let w;
              switch (t.uE) {
                case 0:
                  w = {
                    enumerable: !0,
                    get() {
                      return this[n].$ya(v, r);
                    },
                    set(z) {
                      this[n].B9a(v, r, z);
                    },
                  };
                  break;
                case 1:
                  w = {
                    enumerable: !0,
                    get() {
                      return this[n].Yya(v, r);
                    },
                    set(z) {
                      this[n].w9a(v, r, z);
                    },
                  };
                  break;
                default:
                  throw new D(t.uE);
              }
              switch (t.YHa) {
                case 0:
                  w.set = void 0;
                  break;
                case 1:
                  break;
                default:
                  throw new D(t.YHa);
              }
              return w;
            }
            encode(r, t, v) {
              const w = this.key,
                z = this.Bb,
                A = this.type;
              switch (z.uE) {
                case 0:
                  return [w, A.encode(r, t.$K(w), G_(r, t, w, v))];
                case 1:
                  return v != null ? [w, A.encode(r, t.$K(w), v)] : void 0;
                default:
                  throw new D(z.uE);
              }
            }
            constructor(r, t) {
              this.Bb = r;
              this.type = t;
              r = r.key;
              u(r > 0 && Number.isInteger(r));
              if (r <= 52)
                r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[
                  r - 1
                ];
              else {
                for (t = ""; r > 0; )
                  r--,
                    (t =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[
                        r % 52
                      ] + t),
                    (r = Math.floor(r / 52));
                r = t;
              }
              this.key = r;
            }
          }
          return (r, t) => {
            const v = new wac(r),
              w = new xac(),
              { qK: z, JJb: A, decode: C, encode: B } = p.$_a(t);
            return {
              qK: z,
              decode: (F) => {
                F = C(v, w, { type: "dict", value: F });
                return { yGa: A(F), data: F };
              },
              encode: (F) => B(v, w, F).value,
            };
          };
        };
        vac = function (a, b) {
          return (c, ...d) => {
            a.has(c) || a.set(c, b(c, ...d));
            return a.get(c);
          };
        };
        tac = function (a, b, c) {
          const d = new WeakMap();
          return (e) => I_(d, a, b, c, e);
        };
        I_ = function (a, b, c, d, e) {
          let f = a.get(e);
          f == null && ((f = b(c, d, e)), a.set(e, f));
          return f;
        };
        lac = function (a, b) {
          return (c, d, e) => {
            b(c, d, e);
            return a(c, d, e);
          };
        };
        oac = function (a, b) {
          return (c, d, e) => {
            e = a(c, d, e);
            b(c, d, e);
            return e;
          };
        };
        nac = function (a, b) {
          var c = zac();
          return (d, e, f) => {
            f = a(d, e, f);
            b(d, e, f);
            c(d, e, f);
            return f;
          };
        };
        uac = function (a, b, c, d) {
          if (d.type !== c)
            throw a.error(b, `type error: expected ${c}, was ${d.type}`);
        };
        mac = function (a) {
          return typeof a === "string"
            ? (b, c, d) => uac(b, c, a, d)
            : (b, c, d) => {
                if (!a.has(d.type))
                  throw b.error(
                    c,
                    `type error: expected one of ${[...a].join(" or ")}, was ${
                      d.type
                    }`
                  );
              };
        };
        zac = function () {
          return (a, b, c) => {
            if (typeof c.value !== Aac[c.type])
              throw a.error(
                b,
                `type error: expected ${c.type}, was ${typeof c.value}`
              );
          };
        };
        sac = function (a) {
          return (b, c, d) => {
            if (!a.has(d))
              throw b.error(
                c,
                `expected one of ${[...a].join(" or ")}, was ${d}`
              );
          };
        };
        qac = function (a) {
          if (a) {
            var b = a.min,
              c = a.max;
            u(b == null || c == null || b <= c);
            return (d, e, f) => {
              if (b != null && f < b)
                throw d.error(e, `value below min ${b}: ${f}`);
              if (c != null && f > c)
                throw d.error(e, `value above max ${b}: ${f}`);
            };
          }
        };
        pac = function (a) {
          if (a)
            return (b, c, d) => {
              if (!a.test(d))
                throw b.error(c, `value does not match regex ${a}: '${d}'`);
            };
        };
        H_ = function (a) {
          return (b, c, d) => {
            if (d.value.type !== a)
              throw b.error(
                c,
                `expected ${Bac[a]} resource type, got ${Bac[d.value.type]}`
              );
            return { ...d.value, type: a };
          };
        };
        J_ = function (a) {
          return typeof a === "function";
        };
        Cac = function (a) {
          return { get: () => a, set: K_ };
        };
        Dac = function (...a) {
          const b = new Set(),
            c = new Set();
          for (const d of a) for (const e in d) b.has(e) ? c.add(e) : b.add(e);
          if (c.size)
            throw Error(
              `keys not disjoint: ${[...c].map((d) => `'${d}'`).join(", ")}`
            );
        };
        Eac = function (a, b) {
          return () => b(he(a, (c) => c()));
        };
        Gac = function (a) {
          u(a.length === 1);
          let b;
          return (c) => {
            if (b != null && Fac(b[0], c)) return b[1];
            const d = a(c);
            b = [c, d];
            return d;
          };
        };
        Fac = function (a, b) {
          if (a === b) return !0;
          if (a == null || b == null) return !1;
          const c = Object.keys(a),
            d = Object.keys(b);
          if (c.length !== d.length) return !1;
          for (const e of c) if (a[e] !== b[e]) return !1;
          return !0;
        };
        Iac = function (a) {
          var b = Hac;
          return {
            Tqa: b({
              Hr: a.Tqa,
              args: {},
              jk: {
                W: { image: void 0, video: void 0, Va: void 0 },
                attributes: {
                  Ym: void 0,
                  color: void 0,
                  ya: void 0,
                  locked: void 0,
                  Fg: void 0,
                  dm: void 0,
                  hd: void 0,
                  flipX: void 0,
                  flipY: void 0,
                },
              },
            }),
            ora: b({
              Hr: a.ora,
              args: {},
              jk: {
                W: { fill: void 0 },
                attributes: {
                  weight: void 0,
                  color: void 0,
                  Nc: void 0,
                  qe: void 0,
                },
              },
            }),
            gra: b({
              Hr: a.gra,
              args: {},
              jk: {
                W: { fill: void 0, stroke: void 0 },
                attributes: { ...L_, N: void 0 },
              },
            }),
            qra: b({
              Hr: a.qra,
              args: {},
              jk: {
                W: { text: void 0 },
                attributes: {
                  ...L_,
                  Kz: void 0,
                  nh: void 0,
                  Ha: void 0,
                  I: void 0,
                  P: void 0,
                },
              },
            }),
            IMa: b({
              Hr: a.IMa,
              args: { url: void 0, I: void 0, P: void 0 },
              jk: { W: {}, attributes: L_ },
            }),
          };
        };
        M_ = function (a, b) {
          return (c) => b({ ...a, ...c });
        };
        Mac = function () {
          return Iac({
            Tqa: M_(N_, (a) => __c.QM.LC(a)),
            ora: M_(Jac, (a) => __c.Uw.LC(a)),
            gra: M_(O_, (a) => __c.Zy.LC({ ...a, id: oD.generate() })),
            qra: M_(Kac, (a) => __c.az.LC({ ...a, id: oD.generate() })),
            IMa: M_(Lac, (a) => __c.bz.LC({ ...a, id: oD.generate() })),
          });
        };
        Qac = function () {
          return new Nac({})
            .add((a, b) => ({
              FontRef: new a(
                "FontRef",
                { id: b.string, version: b.number },
                (c) => ({ type: "font", id: c.id, version: c.version })
              ),
            }))
            .add((a, b) => ({
              MediaRef: new a(
                "MediaRef",
                { id: b.string, version: b.number },
                (c) => ({ type: "media", id: c.id, version: c.version })
              ),
            }))
            .add((a, b) => ({
              VideoRef: new a("VideoRef", { id: b.string }, (c) => ({
                type: "video",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              AudioRef: new a("AudioRef", { id: b.string }, (c) => ({
                type: "audio",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              EmbedRef: new a("EmbedRef", { id: b.string }, (c) => ({
                type: "embed",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              SceneRef: new a("SceneRef", { id: b.string }, (c) => ({
                type: "scene",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              BlueprintRef: new a(
                "BlueprintRef",
                { id: b.string, version: b.number },
                (c) => ({ type: "blueprint", id: c.id, version: c.version })
              ),
            }))
            .add((a, b) => ({
              Fill: new a("Fill", { color: b.string }, (c) =>
                __c.QM.create({ ...N_, color: c.color })
              ),
            }))
            .add((a, b) => ({
              Stroke: new a(
                "Stroke",
                {
                  color: b.string,
                  weight: b.number,
                  Nc: b.array(b.number),
                  qe: b.Rg,
                },
                (c) =>
                  __c.Uw.create({
                    ...Jac,
                    color: c.color,
                    weight: c.weight,
                    Nc: c.Nc.items,
                    qe: c.qe,
                  })
              ),
            }))
            .add((a, b) => ({
              Richtext2: new a(
                "Richtext2",
                {
                  trb: b.array(
                    b.Pb({ ob: b.string, attrs: b.map(b.string, b.string) })
                  ),
                },
                (c) => {
                  c = c.trb;
                  const d = __c.Ti.yb();
                  c.items.forEach((e) => {
                    const f = e.fields.ob;
                    d.attrs(__c.Jf(e.fields.attrs.items));
                    d.ob(f);
                  });
                  return __c.Ti.create(d.build());
                }
              ),
            }))
            .add((a, b) => ({
              Path: new a(
                "Path",
                {
                  d: b.string,
                  fill: b.instance("Fill"),
                  stroke: b.union(b.instance("Stroke"), b.undefined),
                },
                (c) => {
                  const d = c.stroke,
                    e = c.fill;
                  c = __c.JQ.create({ ...Oac, d: c.d, fill: N_ });
                  Object.defineProperties(c, {
                    fill: { value: e.instance },
                    stroke: { value: Pac(d) },
                  });
                  return c;
                }
              ),
            }))
            .add((a, b) => ({
              RectElement: new a(
                "RectElement",
                {
                  top: b.number,
                  left: b.number,
                  width: b.number,
                  height: b.number,
                  rotation: b.union(b.number, b.undefined),
                  fill: b.instance("Fill"),
                  N: b.union(b.array(b.number), b.undefined),
                  stroke: b.union(b.instance("Stroke"), b.undefined),
                },
                (c) => {
                  const d = c.stroke,
                    e = __c.Zy.create({
                      ...O_,
                      id: oD.generate(),
                      top: c.top,
                      left: c.left,
                      width: c.width,
                      height: c.height,
                      rotation: c.rotation ?? O_.rotation,
                      fill: N_,
                      N: c.N?.items ?? O_.N,
                    });
                  Object.defineProperties(e, {
                    fill: { value: c.fill.instance },
                    stroke: { value: Pac(d) },
                  });
                  return e;
                }
              ),
            }))
            .add((a, b) => ({
              ShapeElement: new a(
                "ShapeElement",
                {
                  top: b.number,
                  left: b.number,
                  width: b.number,
                  height: b.number,
                  rotation: b.union(b.number, b.undefined),
                  ya: b.union(b.number, b.undefined),
                  viewBox: b.Pb({
                    top: b.number,
                    left: b.number,
                    width: b.number,
                    height: b.number,
                  }),
                  gb: b.array(b.instance("Path")),
                },
                (c) => {
                  const d = __c.$y.create({
                    ...P_,
                    id: oD.generate(),
                    top: c.top,
                    left: c.left,
                    width: c.width,
                    height: c.height,
                    rotation: c.rotation ?? P_.rotation,
                    ya: c.ya ?? P_.ya,
                    gb: [],
                    viewBox: c.viewBox.fields,
                  });
                  Object.defineProperties(d, {
                    gb: {
                      value: new __c.Q_(
                        c.gb.items.map((e) => R_(() => e.instance))
                      ),
                    },
                  });
                  return d;
                }
              ),
            }));
        };
        Pac = function (a) {
          return (
            a && {
              ref: a.instance,
              set() {
                throw Error(
                  "Replacing of stroke on a model unit is not yet supported"
                );
              },
            }
          );
        };
        g$b = function (a, b, c) {
          return he(b, (d) => (...e) => {
            const {
              data: f,
              O: { width: g, height: h },
            } = d(...e);
            e = c.G.encode(f.G);
            const k =
              c.document.qK.size > 0 ? c.document.encode(f.document) : void 0;
            return {
              Qc: { ...__c.lAb, app: { id: a, version: 1 } },
              eUb: k,
              Ed: e,
              Tg: { width: g, height: h },
            };
          });
        };
        Sac = function (a, b) {
          return class extends Rac {
            componentDidCatch(c) {
              a.error(c);
              this.setState({ hasError: !0 });
            }
            render() {
              return this.state.hasError
                ? S_(__c.Tt, {
                    background: "criticalLow",
                    width: "full",
                    height: "full",
                    padding: "0.25u",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    role: "alert",
                    children: S_(__c.Qt, {
                      size: "xsmall",
                      alignment: "center",
                      children: __c.K("Q6XSow"),
                    }),
                  })
                : S_(b, { ...this.props });
            }
            constructor(...c) {
              super(...c);
              this.state = { hasError: !1 };
            }
          };
        };
        o$b = function (a, b, c) {
          const d = c.G,
            e = (c = c.tea) ? new Tac(c) : void 0;
          c = e ? (f) => e.Zc(f.G.Ed) : void 0;
          switch (d.type) {
            case 0:
              a = Uac(a, d, b, c);
              break;
            case 1:
              a = Vac(a, d, b, c);
              break;
            default:
              throw new D(d);
          }
          return { Gpb: a, TL: e };
        };
        p$b = function (a, b, c, d) {
          c = c.email;
          if (c != null) {
            var e = d ? (f) => d.Zc(f.G.Ed) : void 0;
            switch (c.type) {
              case 0:
                return Uac(a, c, b, e);
              case 1:
                return Vac(a, c, b, e);
              default:
                throw new D(c);
            }
          }
        };
        Uac = function (a, b, c, d) {
          const e = b.xx,
            { fPa: f, Dea: g, qn: h, F6a: k } = Wac(a, c);
          return typeof e === "object"
            ? ((b = a.xpa.types),
              (b = b.gW(
                b.union(b.instance("RectElement"), b.instance("ShapeElement"))
              )),
              Xac(
                a,
                f,
                h,
                b,
                e,
                (l) => new T_(() => l().map((m) => m.instance)),
                k
              ))
            : {
                type: 0,
                xx: (l, m) => {
                  const { document: n, G: p } = h.decode(f(l)).data;
                  m = g(l, m);
                  l = d
                    ? { document: n, G: p, local: d(l) }
                    : { document: n, G: p, local: void 0 };
                  return e(l, m);
                },
                b2a: U_(k),
                Ama: V_(k),
              };
        };
        Vac = function (a, b, c, d) {
          const e = b.Component,
            { fPa: f, Dea: g, qn: h, F6a: k } = Wac(a, c);
          return {
            type: 1,
            b2a: U_(k),
            Ama: V_(k),
            Component: Sac(
              a.J,
              W_(({ model: l, kf: m, xQa: n }) => {
                n = Yac(a.qf, n);
                const [p] = X_(() => {
                  const { document: q, G: r } = h.decode(f(l)).data;
                  return d
                    ? { document: q, G: r, local: d(l) }
                    : { document: q, G: r, local: void 0 };
                });
                m = g(l, m);
                return S_(e, { data: p, qf: n, $h: m });
              })
            ),
          };
        };
        Wac = function (a, b) {
          return {
            fPa: (c) => ({ document: Zac(a, c), G: c.G.Ed }),
            Dea: (c, d) => a.rNb.Dea(c, d),
            qn: v$b(b),
            F6a: new $ac(),
          };
        };
        Xac = function (a, b, c, d, e, f, g) {
          const h = a.rva(a.xpa, c, d).compile(e);
          return {
            type: 0,
            xx: (k) => ({ Ka: f(h(b(k))) }),
            b2a: U_(g),
            Ama: V_(g),
          };
        };
        Zac = function (a, b) {
          return (
            a.sb.Wl.first(
              (c) =>
                c.app.id === b.G.Qc.app.id &&
                c.app.version === b.G.Qc.app.version
            )?.data ?? __c.YQ.create(new Map())
          );
        };
        U_ = function (a) {
          return (b) => {
            if ((b = a.get(b)) && b.size !== 0)
              return Array.from(b)
                .map((c) => c.pha())
                .reduce(
                  (c, d) => ({
                    width: Math.max(c.width, d.width),
                    height: Math.max(c.height, d.height),
                  }),
                  { width: -Infinity, height: -Infinity }
                );
          };
        };
        V_ = function (a) {
          return (b, c) => {
            a.add(b, c);
            return () => a.remove(b, c);
          };
        };
        a$b = function (a) {
          return { qK: a.qK, decode: abc(a.decode), encode: a.encode };
        };
        abc = function (a) {
          const b = new WeakMap();
          return (c) => {
            let d = b.get(c);
            d || ((d = a(c)), b.set(c, d));
            return d;
          };
        };
        bbc = function (a) {
          a.BO && (a.BO(), (a.BO = null));
          const b = a.props.iob;
          b.forEach((c) => {
            window.addEventListener(c, a.ZNa);
          });
          a.BO = () => {
            b.forEach((c) => {
              window.removeEventListener(c, a.ZNa);
            });
          };
        };
        fbc = function (a) {
          const b = Y_(function (c) {
            const [{ store: d, Ea: e }] = X_(() => {
              const f = new cbc(),
                g = new dbc(f);
              return { store: f, Ea: g };
            });
            return S_(ebc, {
              t8: e.reset,
              children: S_(__c.WPb, {
                avb: e,
                bvb: d,
                LZa: a.wv.contains(c.url),
                children: ({ Dk: f }) => c.children({ Dk: f }),
              }),
            });
          });
          return Y_((c) =>
            c.Ijb && a.Ra?.status !== 2
              ? S_(b, { ...c })
              : c.children({ Dk: !1 })
          );
        };
        gbc = function (a) {
          return W_(function (b) {
            return S_("div", {
              className: "gcYy_A",
              children: S_(__c.IB, {
                I4: "both",
                children: ({ width: c, height: d }) =>
                  S_(a.Si, {
                    fill: b.fill,
                    Sb: c,
                    Ec: d,
                    ie: void 0,
                    animation: void 0,
                    QE: !1,
                    da: void 0,
                    fa: void 0,
                  }),
              }),
            });
          });
        };
        ibc = function (a) {
          const b = a.Ta;
          return W_(function (c) {
            var d = c.lya,
              e = c.fontWeight;
            const f = c.zta,
              g = c.Ic,
              h = c.Psa,
              k = c.ariaInvalid,
              l = c.className,
              m = c.disabled,
              n = c.id,
              p = c.name,
              q = c.onBlur,
              r = c.onFocus,
              t = c.onChange,
              v = c.placeholder,
              w = c.d5a,
              z = c.type,
              A = c.value;
            var C = c.Xi,
              B = c.fontSize;
            c = c.borderRadius;
            var F;
            if ((F = d))
              (d = __c.oo(d)), b.dD([d], { Yt: !0 }), (F = __c.Lo(b, d));
            e = {
              color: C,
              fontSize: B,
              borderRadius: c,
              fontFamily: F,
              fontWeight: e && __c.wo(e),
            };
            return S_("div", {
              className: "BHOPhg",
              children: S_("input", {
                "aria-describedby": g,
                "aria-errormessage": h,
                "aria-invalid": k,
                className: hbc(l, ["_6Yde8g", w && "sR0SUA"]),
                disabled: m,
                id: n,
                name: p,
                onBlur: q,
                onFocus: r,
                onChange: t,
                placeholder: v,
                type: z,
                value: A,
                style: {
                  ...e,
                  "--srRiKA": w,
                  "--oiOG3Q": f?.default,
                  "--oGOcXA": f?.kh,
                  "--UBd2ow": f?.focus,
                },
              }),
            });
          });
        };
        jbc = function () {
          return () => S_(__c.GT, { mediaType: "embed", failed: !1 });
        };
        kbc = function (a) {
          return W_(function (b) {
            return S_("div", {
              className: "oUJNhQ",
              children: S_(a.Ne, {
                text: b.text,
                animation: void 0,
                ed: "middle",
                oa: void 0,
                ab: void 0,
                bf: [],
                writingMode: 1,
              }),
            });
          });
        };
        lbc = function (a) {
          const b = a.Ta;
          return W_(function (c) {
            var d = c.lya,
              e = c.fontWeight;
            const f = c.zta,
              g = c.Ic,
              h = c.Psa,
              k = c.ariaInvalid,
              l = c.className,
              m = c.disabled,
              n = c.id,
              p = c.name,
              q = c.onBlur,
              r = c.onFocus,
              t = c.onChange,
              v = c.placeholder,
              w = c.d5a,
              z = c.rows,
              A = c.value;
            var C = c.Xi,
              B = c.fontSize;
            c = c.borderRadius;
            var F;
            if ((F = d))
              (d = __c.oo(d)), b.dD([d], { Yt: !0 }), (F = __c.Lo(b, d));
            e = {
              color: C,
              fontSize: B,
              borderRadius: c,
              fontFamily: F,
              fontWeight: e && __c.wo(e),
            };
            return S_("div", {
              className: "BHOPhg",
              children: S_("textarea", {
                "aria-describedby": g,
                "aria-errormessage": h,
                "aria-invalid": k,
                className: hbc(l, ["_6Yde8g", w && "sR0SUA"]),
                disabled: m,
                id: n,
                name: p,
                onBlur: q,
                onFocus: r,
                onChange: t,
                placeholder: v,
                rows: z,
                style: {
                  ...e,
                  "--srRiKA": w,
                  "--oiOG3Q": f?.default,
                  "--oGOcXA": f?.kh,
                  "--UBd2ow": f?.focus,
                },
                value: A,
              }),
            });
          });
        };
        __c.jo.prototype.O6a = __c.ca(3, function (a) {
          const b = this.bob;
          if (b == null)
            throw Error("Blueprint document resources are not supported");
          __c.qna(this, a, async () => {
            const c = await b.Nr(a);
            return __c.sna(
              this,
              c,
              y(c.url),
              c.resources ? __c.io(c.resources) : __c.sS
            );
          });
        });
        var C9b = H(() => ({ config: __c.W(1) })),
          D9b = H(() => ({
            config: __c.V(1),
            LZ: __c.Na(4, __c.ET),
            qjb: __c.Na(5, __c.FT),
          })),
          F9b = __c.Ya(
            () => ({ type: [1, __c.ET, 2, __c.FT] }),
            () => ({})
          ),
          G9b = H(() => ({ config: __c.V(1) })),
          mbc = class {
            constructor(a) {
              this.ref = a;
            }
          },
          nbc = class {
            get ref() {
              return this.box.get();
            }
            constructor(a) {
              this.box = a;
            }
          },
          obc = class {
            get ref() {
              return this.box.ref;
            }
            set() {
              throw Error("cannot set unmodifiable box");
            }
            constructor(a) {
              this.box = a;
            }
          },
          I9b = H(() => ({ config: __c.W(1) })),
          J9b = H(() => ({})),
          L9b = H(() => ({ config: __c.V(1) })),
          M9b = H(() => ({})),
          O9b = class {
            constructor(a) {
              this.kW = a;
            }
          },
          Z_ = __webpack_require__(186901),
          R_ = Z_.EW,
          pbc = Z_.fm,
          qbc = Z_.m3,
          rbc = Z_.mJ,
          $_ = Z_.sH,
          a0 = Z_.XI;
        var S_ = __webpack_require__(31968).jsx;
        var Y_ = __webpack_require__(647370).PA;
        var b0 = __webpack_require__(845212),
          sbc = b0.Component,
          W_ = b0.memo,
          Rac = b0.PureComponent,
          tbc = b0.useCallback,
          X_ = b0.useState;
        var c0 = __webpack_require__(536618).iB;
        var ubc = __webpack_require__,
          vbc = ubc(208463),
          hbc = ubc.n_x(vbc)();
        var Q9b = class {
          static D(a) {
            M(a, { scenes: $_.shallow });
          }
          constructor(a, b = []) {
            this.Zma = a;
            this.scenes = (Q9b.D(this), new Map());
            this.pending = new Map();
            for (const c of b) this.scenes.set(c.id, c);
          }
        };
        var wbc = Object.freeze({
          empty: !0,
          count() {
            return 0;
          },
          toArray() {
            return [];
          },
          $k() {
            return new Map();
          },
          first() {},
          last() {},
          next() {
            PZ();
          },
          previous() {
            PZ();
          },
          Ie() {
            PZ();
          },
          Hv() {
            PZ();
          },
          has() {
            return !1;
          },
          To() {
            return this;
          },
          map() {
            return [];
          },
          flatMap() {
            return [];
          },
          filter() {
            return [];
          },
          forEach() {},
          reduce(a, b) {
            return b;
          },
          some() {
            return !1;
          },
          every() {
            return !0;
          },
          [Symbol.iterator]() {
            return [][Symbol.iterator]();
          },
        });
        var xbc;
        xbc = Symbol.iterator;
        var T_ = class {
          static D(a) {
            M(a, { jm: R_, tq: R_ });
          }
          get jm() {
            return this.sib().map((a) => {
              let b = this.nYa.get(a);
              b == null && ((b = `${this.Vtb++}`), this.nYa.set(a, b));
              return { id: b, ref: a };
            });
          }
          get tq() {
            const a = new Map();
            this.jm.forEach((b, c) => b && a.set(b.ref, c));
            return a;
          }
          hk(a) {
            return y(this.tq.get(a), "ref not found");
          }
          get empty() {
            return !this.jm.length;
          }
          count() {
            return this.jm.length;
          }
          toArray() {
            return this.jm.map((a) => a.ref);
          }
          $k() {
            return new Map(this.map((a, b) => [b, a]));
          }
          get yQ() {
            const a = this.jm[0];
            return a && a.ref;
          }
          get HR() {
            const a = this.jm[this.jm.length - 1];
            return a && a.ref;
          }
          first(a) {
            if (!a) return this.yQ;
            const b = this.jm.find((c) => a(c.ref));
            return b && b.ref;
          }
          last(a) {
            if (!a) return this.HR;
            const b = this.jm;
            for (let c = b.length - 1; c >= 0; c--) {
              const d = b[c];
              if (a(d.ref)) return d.ref;
            }
          }
          next(a, b) {
            const c = this.jm;
            for (a = this.hk(a) + 1; a < c.length; a++) {
              const d = c[a];
              if (!b || b(d.ref)) return d.ref;
            }
          }
          previous(a, b) {
            const c = this.jm;
            for (a = this.hk(a) - 1; a >= 0; a--) {
              const d = c[a];
              if (!b || b(d.ref)) return d.ref;
            }
          }
          Ie(a, b) {
            a = this.tq.get(a);
            b = this.tq.get(b);
            u(a != null);
            u(b != null);
            return a < b ? -1 : a > b ? 1 : 0;
          }
          Hv(a) {
            return this.jm[this.hk(a)].id;
          }
          has(a) {
            return this.tq.has(a);
          }
          To(a) {
            return new __c.MJ(this, a);
          }
          map(a) {
            return this.jm.map(({ ref: b, id: c }) => a(b, c));
          }
          flatMap(a) {
            return this.jm.flatMap(({ ref: b, id: c }) => a(b, c));
          }
          filter(a) {
            return this.jm.filter((b) => a(b.ref, b.id)).map((b) => b.ref);
          }
          forEach(a) {
            this.jm.forEach((b, c) => a(b.ref, b.id, c));
          }
          reduce(a, b) {
            return this.jm.reduce((c, d) => a(c, d.ref, d.id), b);
          }
          some(a) {
            return this.jm.some((b) => a(b.ref, b.id));
          }
          every(a) {
            return this.jm.every((b) => a(b.ref, b.id));
          }
          [xbc]() {
            return this.toArray()[Symbol.iterator]();
          }
          constructor(a) {
            this.sib = a;
            this.Vtb = (T_.D(this), 0);
            this.nYa = new WeakMap();
          }
        };
        var ybc;
        ybc = Symbol.iterator;
        var S9b = class {
          static D(a) {
            M(a, { G7: R_ });
          }
          get G7() {
            const a = new Map();
            this.base.forEach((b) => a.set(this.dg(b), b));
            return a;
          }
          cu(a) {
            return y(this.G7.get(a));
          }
          QY(a) {
            return a != null ? this.dg(a) : void 0;
          }
          get empty() {
            return this.base.empty;
          }
          count() {
            return this.base.count();
          }
          toArray() {
            return this.base.toArray().map(this.dg);
          }
          $k() {
            return Sc(this.base.$k(), this.dg);
          }
          [ybc]() {
            return this.toArray()[Symbol.iterator]();
          }
          first(a) {
            return this.QY(this.base.first(a && ((b) => a(this.dg(b)))));
          }
          last(a) {
            return this.QY(this.base.last(a && ((b) => a(this.dg(b)))));
          }
          next(a, b) {
            return this.QY(
              this.base.next(this.cu(a), b && ((c) => b(this.dg(c))))
            );
          }
          previous(a, b) {
            return this.QY(
              this.base.previous(this.cu(a), b && ((c) => b(this.dg(c))))
            );
          }
          Ie(a, b) {
            return this.base.Ie(this.cu(a), this.cu(b));
          }
          Hv(a) {
            return this.base.Hv(this.cu(a));
          }
          has(a) {
            return this.base.has(this.cu(a));
          }
          set(a, b) {
            return this.dg(this.base.set(a, this.MH(b)));
          }
          replace(a, b) {
            return this.dg(this.base.replace(this.cu(a), this.MH(b)));
          }
          append(a) {
            return this.dg(this.base.append(this.MH(a)));
          }
          prepend(a) {
            return this.dg(this.base.prepend(this.MH(a)));
          }
          qH(a, b) {
            return this.dg(this.base.qH(a && this.cu(a), this.MH(b)));
          }
          insertBefore(a, b) {
            return this.dg(this.base.insertBefore(a && this.cu(a), this.MH(b)));
          }
          CD(a, b) {
            return this.base.CD(a && this.cu(a), b.map(this.MH)).map(this.dg);
          }
          delete(a) {
            this.base.delete(this.cu(a));
          }
          Uz(a) {
            this.base.Uz(a && ((b) => a(this.dg(b))));
          }
          Aq(a, b) {
            this.base.Aq(a && this.cu(a), this.cu(b));
          }
          To(a) {
            return new __c.MJ(this, a);
          }
          map(a) {
            return this.base.map((b, c) => a(this.dg(b), c));
          }
          flatMap(a) {
            return this.base.flatMap((b, c) => a(this.dg(b), c));
          }
          filter(a) {
            return this.base.filter((b, c) => a(this.dg(b), c)).map(this.dg);
          }
          forEach(a) {
            this.base.forEach((b, c) => a(this.dg(b), c));
          }
          reduce(a, b) {
            return this.base.reduce((c, d) => a(c, this.dg(d)), b);
          }
          some(a) {
            return this.base.some((b) => a(this.dg(b)));
          }
          every(a) {
            return this.base.every((b) => a(this.dg(b)));
          }
          constructor(a, b, c) {
            this.base = a;
            this.MH = b;
            this.dg = c;
            S9b.D(this);
          }
        };
        var zbc,
          Abc = class {
            get value() {
              return this.box.get();
            }
            constructor(a, b) {
              this.id = a;
              this.box = b;
            }
          };
        zbc = Symbol.iterator;
        __c.Q_ = class {
          static D(a) {
            M(a, { tq: R_, yQ: R_, HR: R_ });
          }
          get tq() {
            const a = new Map();
            this.cells.forEach((b, c) => a.set(b.value, c));
            return a;
          }
          hk(a) {
            return y(this.tq.get(a), "ref not found");
          }
          get empty() {
            return !this.cells.length;
          }
          count() {
            return this.cells.length;
          }
          toArray() {
            return this.cells.map((a) => a.value);
          }
          $k() {
            return new Map(this.map((a, b) => [b, a]));
          }
          get yQ() {
            const a = this.cells[0];
            return a && a.value;
          }
          get HR() {
            const a = this.cells[this.cells.length - 1];
            return a && a.value;
          }
          first(a) {
            if (!a) return this.yQ;
            const b = this.cells.find((c) => a(c.value));
            return b && b.value;
          }
          last(a) {
            if (!a) return this.HR;
            const b = this.cells;
            for (let c = b.length - 1; c >= 0; c--) {
              const d = b[c];
              if (a(d.value)) return d.value;
            }
          }
          next(a, b) {
            const c = this.cells;
            for (a = this.hk(a) + 1; a < c.length; a++) {
              const d = c[a];
              if (d && (!b || b(d.value))) return d.value;
            }
          }
          previous(a, b) {
            const c = this.cells;
            for (a = this.hk(a) - 1; a >= 0; a--) {
              const d = c[a];
              if (d && (!b || b(d.value))) return d.value;
            }
          }
          Ie(a, b) {
            a = this.tq.get(a);
            b = this.tq.get(b);
            u(a != null);
            u(b != null);
            return a < b ? -1 : a > b ? 1 : 0;
          }
          Hv(a) {
            return this.cells[this.hk(a)].id;
          }
          has(a) {
            return this.tq.has(a);
          }
          To(a) {
            return new __c.MJ(this, a);
          }
          map(a) {
            return this.cells.map((b) => a(b.value, b.id));
          }
          flatMap(a) {
            return this.cells.flatMap((b) => a(b.value, b.id));
          }
          filter(a) {
            return this.cells
              .filter((b) => a(b.value, b.id))
              .map((b) => b.value);
          }
          forEach(a) {
            this.cells.forEach((b) => a(b.value, b.id));
          }
          reduce(a, b) {
            return this.cells.reduce((c, d) => a(c, d.value, d.id), b);
          }
          some(a) {
            return this.cells.some((b) => a(b.value, b.id));
          }
          every(a) {
            return this.cells.every((b) => a(b.value, b.id));
          }
          [zbc]() {
            return this.toArray()[Symbol.iterator]();
          }
          constructor(a) {
            this.cells = (__c.Q_.D(this), void 0);
            this.cells = a.map((b, c) => new Abc(String(c), b));
          }
        };
        var j$b = __c.QZ()(() => ({
            CSb({ dK: a, ljb: b, version: c }, d, e) {
              e = {
                fonts: RZ("font", e.fonts),
                media: RZ("media", e.media),
                qd: RZ("video", e.qd),
                embeds: RZ("embed", e.embeds),
              };
              return {
                data: {
                  G: {
                    dK: a,
                    jx: {
                      domain: "resource",
                      resource: {
                        ref: { type: "blueprint", id: b, version: c },
                        resources: e,
                      },
                    },
                    type: "instance",
                    jk: void 0,
                  },
                  document: {},
                },
                O: d,
              };
            },
          })),
          Bbc = ({ resource: a, i2: b }) => {
            const c = pbc(() => {
              b?.O6a(a.ref.ref);
            });
            return {
              Ka: new T_(() => {
                var d = b?.NWa(a.ref.ref);
                return d?.element
                  ? ((d = d.element),
                    __c.x(d.type === "group", "Expected group element"),
                    d.Ka.filter(__c.ob).map((e) =>
                      __c.CG.create({ ...e, locked: !0, Fg: !0 })
                    ))
                  : [];
              }),
              zm: c,
            };
          },
          q$b = __c.OZ()(({ Ii: { i2: a } }) => ({
            G: {
              type: 0,
              xx: ({ G: b }) => Bbc({ resource: b.jx.resource, i2: a }),
            },
            exports: {},
          }));
        d0 = __c.d0 = class {};
        d0.val = (a, b) => XZ(0, 0, () => b)(a);
        d0.Zw = (a) => {
          var b = __c.e0;
          return XZ(1, 0, () => b)(a);
        };
        d0.ref = (a, b) => XZ(0, 0, () => b)(a);
        d0.pCb = () => {
          var a = __c.e0;
          return XZ(1, 1, () => a)(1);
        };
        d0.jEa = (a, b) => XZ(0, 1, () => b)(a);
        d0.qoa = XZ(0, 0, SZ);
        d0.yUa = XZ(0, 0, V9b);
        d0.Zg = XZ(0, 0, UZ);
        d0.Zy = XZ(1, 0, SZ);
        d0.gQa = XZ(1, 0, U9b);
        d0.LBa = XZ(1, 0, UZ);
        d0.ED = XZ(1, 0, TZ);
        d0.pPa = XZ(1, 0, W9b);
        d0.Zv = XZ(1, 1, SZ);
        d0.rla = XZ(1, 1, U9b);
        d0.vy = XZ(1, 1, V9b);
        d0.tCb = XZ(1, 1, TZ);
        d0.gE = XZ(1, 1, UZ);
        d0.oCb = XZ(1, 1, W9b);
        d0.um = XZ(0, 0, VZ);
        d0.listRef = XZ(0, 0, X9b);
        d0.aUa = XZ(0, 0, function (a) {
          return { kind: 9, itemType: a };
        });
        d0.IFa = XZ(0, 0, WZ);
        d0.ZLb = XZ(0, 0, Y9b);
        d0.sCb = XZ(0, 1, VZ);
        d0.uCb = XZ(0, 1, WZ);
        d0.Kta = XZ(1, 0, WZ);
        d0.qCb = XZ(1, 1, VZ);
        d0.rCb = XZ(1, 1, WZ);
        d0.iab = SZ;
        d0.Zub = TZ;
        d0.kia = VZ;
        d0.J_a = X9b;
        d0.Gg = WZ;
        d0.a0 = Y9b;
        d0.nAb = YZ({});
        var $9b = Object.freeze({
          document: Object.freeze({}),
          G: Object.freeze({}),
        });
        var b$b = __c.ZZ({
          G: YZ({
            dK: d0.qoa(1),
            jx: d0.IFa(2, {
              domain: d0.Zg(1, "resource"),
              resource: d0.Kta(2, {
                ref: d0.um(2, "BlueprintRef"),
                resources: d0.uCb(3, {
                  fonts: d0.listRef(1, d0.kia("FontRef")),
                  media: d0.listRef(2, d0.kia("MediaRef")),
                  qd: d0.listRef(3, d0.kia("VideoRef")),
                  embeds: d0.listRef(5, d0.kia("EmbedRef")),
                }),
              }),
            }),
          }),
        });
        var k$b = __c.QZ()(() => ({
            GSb({ dK: a, ljb: b, type: c }, d) {
              return {
                data: {
                  G: {
                    dK: a,
                    jx: {
                      domain: "document",
                      id: b,
                      version: 1,
                      Bb:
                        c === "source"
                          ? { type: c }
                          : { type: c, jk: new Map() },
                    },
                  },
                  document: {},
                },
                O: d,
              };
            },
          })),
          Cbc = ({ data: a, WF: b }) => {
            b = b.Dqb(a.dK);
            if (!b) throw Error(`Blueprint set ${a.dK} not found`);
            const c = b.Fk.get(a.jx.id);
            if (!c)
              throw Error(
                `Blueprint ${a.jx.id} not found in blueprint set ${a.dK}`
              );
            return a.jx.Bb.type === "source"
              ? { Ka: c.elements }
              : {
                  Ka: new T_(() =>
                    c.elements.map((d) => {
                      d = __c.CG.snapshot(d);
                      return __c.CG.create({ ...d, locked: !0, Fg: !0 });
                    })
                  ),
                };
          },
          r$b = __c.OZ()(({ Ii: { WF: a } }) => ({
            G: { type: 0, xx: ({ G: b }) => Cbc({ data: b, WF: a }) },
            exports: {},
          }));
        var Dbc = d0.a0(
          { type: void 0 },
          d0.Gg({ type: d0.Zg(1, "anchoring"), value: d0.LBa(2, 1, 2, 3) }),
          d0.Gg({ type: d0.Zg(1, "boolean"), value: d0.rla(2) }),
          d0.Gg({ type: d0.Zg(1, "block_alignment"), value: d0.vy(2) }),
          d0.Gg({ type: d0.Zg(1, "non-negative-double"), value: d0.vy(2) }),
          d0.Gg({ type: d0.Zg(1, "double"), value: d0.vy(2) }),
          d0.Gg({ type: d0.Zg(1, "string"), value: d0.Zv(2) }),
          d0.Gg({ type: d0.Zg(1, "richtext2"), value: d0.um(2, "Richtext2") }),
          d0.Gg({ type: d0.Zg(1, "text_anchor"), value: d0.LBa(2, 1, 2, 3) }),
          d0.Gg({ type: d0.Zg(1, "text_effects"), value: d0.Zv(2) }),
          d0.Gg({ type: d0.Zg(1, "text_flow"), value: d0.Zv(2) }),
          d0.Gg({ type: d0.Zg(1, "image_fill"), value: d0.um(2, "Fill") }),
          d0.Gg({ type: d0.Zg(1, "video_fill"), value: d0.um(2, "Fill") })
        );
        var c$b = __c.ZZ({
          G: YZ({
            dK: d0.qoa(1),
            jx: d0.IFa(2, {
              domain: d0.Zg(1, "document"),
              id: d0.qoa(2),
              version: d0.ED(3),
              Bb: d0.ZLb(
                4,
                { type: void 0 },
                d0.Gg({ type: d0.Zg(1, "source") }),
                d0.Gg({ type: d0.Zg(1, "instance"), jk: d0.aUa(2, Dbc) })
              ),
            }),
          }),
        });
        var Ebc = class {};
        var Fbc = class {
          async $H(a, b) {
            const c = await P9b(a, this.J, {
                uza: (e) => {
                  this.config.m4?.TKa(e, b);
                  return new M9b();
                },
              }),
              d = rbc(
                () => b.config,
                async (e) => K9b(c, { config: e })
              );
            this.ci.set(a, d);
            await K9b(c, { config: b.config });
          }
          tM(a) {
            this.ci.get(a)?.();
            this.ci.delete(a);
          }
          constructor(a, b) {
            this.config = a;
            this.J = b;
            this.ci = new Map();
          }
        };
        var Gbc = class {
          static D(a) {
            M(a, { eQa: $_.ref });
          }
          get Tg() {
            return this.eQa;
          }
          constructor(a) {
            this.config = a;
            this.hq = (Gbc.D(this), void 0);
            this.Tka = (b, c) => {
              this.hq?.();
              this.hq = void 0;
              const d = (f) => H9b(c, new __c.ET(f)),
                e = {
                  uza: (f) => {
                    this.config.m4?.TKa(f, b, d);
                    return new __c.Nxa();
                  },
                  ptb: a0((f) => {
                    this.eQa = f.body;
                  }),
                };
              this.hq = rbc(
                () => b.config,
                async (f) => {
                  const g = await E9b(c, { config: f });
                  g.config && g.config !== f && this.config.m4?.TKa(g, b, d);
                }
              );
              E9b(c, { config: b.config }).then((f) => {
                this.config.m4?.TKa(f, b, d);
              });
              return e;
            };
            this.tM = () => {
              this.hq?.();
            };
          }
        };
        var h$b = __c.QZ()(() => ({
          FSb(a, b) {
            return {
              data: {
                G: {
                  Lua: { type: "embed", id: a, version: 0 },
                  Kkb: b,
                  config: void 0,
                },
                document: {},
              },
              O: { width: 1366, height: 768 },
            };
          },
        }));
        var d$b = __c.ZZ({
          G: YZ({
            Lua: d0.um(1, "EmbedRef"),
            Kkb: d0.qoa(35),
            config: d0.Zv(29),
          }),
        });
        var s$b = __c.OZ()(({ jW: a, Ii: b }) => {
          const c = new Ebc();
          a = new Fbc(c, a.J);
          const d = b.P0;
          return {
            G: __c.NZ(
              Y_(({ data: { G: e }, qf: { Qqa: f }, $h: g }) => {
                const [h] = X_(() => new Gbc(c)),
                  k = tbc((l) => h.Tka(e, l), [e, h]);
                return S_("div", {
                  style: {
                    minHeight: Math.max(h.Tg?.scrollHeight ?? 0, g.O.height),
                  },
                  className: "fVbdNA",
                  children: S_(f, {
                    url: e.Lua.id,
                    children: ({ Dk: l }) =>
                      S_(d, { url: e.Lua.id, Dk: l, Tka: k, tM: h.tM }),
                  }),
                });
              })
            ),
            exports: { config: c, rUb: a },
          };
        });
        var e$b = __c.ZZ({
            G: YZ({
              bW: d0.Kta(
                1,
                YZ({
                  Lkb: d0.um(1, "EmbedRef"),
                  config: d0.aUa(
                    2,
                    d0.Gg({
                      textContent: d0.Zv(1),
                      backgroundColor: d0.Zv(2, /^#[0-9a-f]{6}$/),
                    })
                  ),
                })
              ),
            }),
          }),
          i$b = __c.QZ()(() => ({
            ESb(a, b) {
              return {
                data: {
                  G: {
                    bW: {
                      Lkb: { type: "embed", id: a, version: 0 },
                      config: b,
                    },
                  },
                  document: {},
                },
                O: { width: 1366, height: 768 },
              };
            },
          }));
        var t$b = __c.OZ()(() => ({
          G: __c.NZ(() => S_("div", { children: "TODO: ben.m to implement" })),
          exports: void 0,
        }));
        var n_ = class {
            static of(a, b, c) {
              return new n_(a, b, c);
            }
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.Gla = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          Ibc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b) {
              var c = Hbc;
              this.nib = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          f0 = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.pDb = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          Kbc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              var d = Jbc;
              this.keyType = a;
              this.valueType = b;
              this.resultType = c;
              this.apply = d;
            }
          },
          y$b = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c, d) {
              this.itemType = a;
              this.Gib = b;
              this.resultType = c;
              this.reduce = d;
            }
          };
        var D$b = class {
          map(a) {
            return a(this);
          }
          constructor(a, b) {
            this.type = a;
            this.get = b;
          }
        };
        __c.Lbc = A$b(4);
        __c.g0 = A$b(6);
        __c.Mbc = B$b(5);
        __c.h0 = B$b(0);
        var Nbc = class {},
          Q$b = class extends Nbc {
            qta(a) {
              return new Q$b(a(this.value));
            }
            eya(a) {
              return a(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          },
          R$b = class extends Nbc {
            qta(a, b) {
              return new R$b(b(this.value));
            }
            eya(a, b) {
              return b(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          };
        var s_ = class {
            map(a) {
              return a(this);
            }
          },
          i0 = class extends s_ {
            zAa(a) {
              return this === a || a.yIa((b) => this.I6(b));
            }
            DR() {
              throw Error(`${this} is not iterable`);
            }
            JCa(a) {
              const b = this.propTypes ?? (this.propTypes = this.Jja());
              if (!b) throw Error(`${this} is not navigable"`);
              if (!b.hasOwnProperty(a))
                throw Error(`${this} has no navigable property "${a}"`);
              return b[a];
            }
            Jja() {
              throw Error(`${this} is not navigable`);
            }
            oya(a) {
              a(this);
            }
            yIa(a) {
              return a(this);
            }
            constructor() {
              super();
              this.kind = "simple";
              this.propTypes = void 0;
            }
          },
          j0 = class extends i0 {
            I6(a) {
              return a instanceof j0 && this.name === a.name;
            }
            toString() {
              return this.name;
            }
            constructor(a) {
              super();
              this.name = a;
            }
          },
          k0 = class extends i0 {
            I6(a) {
              return a instanceof k0 && this.Hr === a.Hr;
            }
            toString() {
              return this.Hr.name;
            }
            constructor(a) {
              super();
              this.Hr = a;
            }
          },
          l0 = class extends i0 {
            I6(a) {
              return a instanceof l0 && this.Hr === a.Hr && r_(this.arg, a.arg);
            }
            toString() {
              return `${this.Hr}<${this.arg}>`;
            }
            constructor(a, b) {
              super();
              this.Hr = a;
              this.arg = b;
            }
          },
          Obc = class extends l0 {
            DR() {
              return this.arg;
            }
            Jja() {
              const a = this.arg;
              return {
                size: B_.number,
                empty: B_.Rg,
                get first() {
                  return B_.optional(a);
                },
              };
            }
            constructor(a) {
              super("array", a);
            }
          },
          Pbc = class extends l0 {
            DR() {
              return this.arg;
            }
            Jja() {
              const a = this.arg;
              return {
                size: B_.number,
                empty: B_.Rg,
                get first() {
                  return B_.optional(a);
                },
              };
            }
            constructor(a) {
              super("set", a);
            }
          },
          Qbc = class extends i0 {
            I6(a) {
              return (
                a instanceof Qbc &&
                r_(this.key, a.key) &&
                r_(this.value, a.value)
              );
            }
            toString() {
              return `map<${this.key}, ${this.value}>`;
            }
            constructor(a, b) {
              super();
              this.key = a;
              this.value = b;
            }
          },
          Rbc = class extends i0 {
            I6(a) {
              return a instanceof Rbc
                ? Object.entries(a.fields).every(
                    ([b, c]) =>
                      this.fields.hasOwnProperty(b) && r_(this.fields[b], c)
                  )
                : !1;
            }
            Jja() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${a.map(([b, c]) => `${b}: ${c}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
            }
          },
          m0 = class extends s_ {
            zAa(a) {
              return this === a || this.lg.every((b) => b.zAa(a));
            }
            DR() {
              return B_.union(...this.lg.map((a) => a.DR()));
            }
            JCa(a) {
              return B_.union(...this.lg.map((b) => b.JCa(a)));
            }
            oya(a) {
              this.lg.forEach((b) => b.oya(a));
            }
            yIa(a) {
              return this.lg.some((b) => b.yIa(a));
            }
            toString() {
              return this.lg.length
                ? this.lg.map((a) => a.toString()).join(" | ")
                : "never";
            }
            constructor(a) {
              super();
              this.lg = a;
              this.kind = "disjunction";
              u(a.length !== 1);
            }
          },
          n0 = new m0([]),
          Sbc = new j0("string"),
          Tbc = new j0("number"),
          Ubc = new j0("boolean"),
          Vbc = new j0("undefined"),
          Wbc = new m0([Sbc, Tbc, Ubc]),
          Xbc = class {
            get never() {
              return n0;
            }
            get string() {
              return Sbc;
            }
            get number() {
              return Tbc;
            }
            get Rg() {
              return Ubc;
            }
            get undefined() {
              return Vbc;
            }
            get primitive() {
              return Wbc;
            }
            optional(a) {
              return B_.union(a, B_.undefined);
            }
            array(a) {
              return new Obc(a);
            }
            set(a) {
              return new Pbc(a);
            }
            gW(a) {
              return new m0([new Obc(a), new Pbc(a)]);
            }
            map(a, b) {
              return new Qbc(a, b);
            }
            Pb(a) {
              return new Rbc({ ...a });
            }
            union(...a) {
              if (a.length === 0) return n0;
              if (a.length === 1) return a[0];
              const b = new Set();
              for (const d of a) C$b(d).oya((e) => b.add(e));
              a = [...b];
              if (a.length === 0) return n0;
              if (a.length === 1) return a[0];
              if (a.length === 2) {
                const [d, e] = a;
                return r_(d, e) ? e : r_(e, d) ? d : new m0(a);
              }
              const c = new Set();
              for (const d of a)
                [...c].some((e) => r_(d, e)) ||
                  (c.forEach((e) => r_(e, d) && c.delete(e)), c.add(d));
              return c.size === 1 ? [...c][0] : new m0([...c]);
            }
            constructor() {
              this.optional = t_(this.optional);
              this.array = t_(this.array);
              this.set = t_(this.set);
              this.gW = t_(this.gW);
            }
          },
          Ybc = class extends Xbc {
            instance(a) {
              return new k0(a);
            }
          },
          B_ = new Ybc(),
          Zbc = class extends Xbc {
            instance(a) {
              return new k0(y(this.classes[a]));
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var $bc,
          acc,
          o0 = Symbol("value"),
          p0 = class {
            get props() {
              return this.uhb ?? (this.uhb = this.Qsa());
            }
          },
          bcc = class {
            get size() {
              return this[o0].length;
            }
            get empty() {
              return this[o0].length === 0;
            }
            get first() {
              return this[o0][0];
            }
            constructor(a) {
              this[o0] = a;
            }
          };
        $bc = Symbol.iterator;
        var ccc = class extends p0 {
            Qsa() {
              return new bcc(this.items);
            }
            map(a) {
              return this.items.map(a);
            }
            [$bc]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.length
                ? `[${Array.from(this.items, w_).join(", ")}]`
                : "[]";
            }
            constructor(a) {
              super();
              this.kind = "array";
              this.items = [...a];
            }
          },
          dcc = class {
            get size() {
              return this[o0].size;
            }
            get empty() {
              return this[o0].size === 0;
            }
            get first() {
              return this[o0][Symbol.iterator]().next().value;
            }
            constructor(a) {
              this[o0] = a;
            }
          };
        acc = Symbol.iterator;
        var ecc = class extends p0 {
            Qsa() {
              return new dcc(this.items);
            }
            map(a) {
              return Array.from(this.items, a);
            }
            [acc]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.size
                ? `Set [${Array.from(this.items, w_).join(", ")}]`
                : "Set []";
            }
            constructor(a) {
              super();
              this.kind = "set";
              this.items = new Set(a);
            }
          },
          fcc = class {
            toString() {
              return this.items.size
                ? `Map {${Array.from(
                    this.items,
                    ([a, b]) => `[${w_(a)}]: ${w_(b)}`
                  ).join(", ")}}`
                : "Map {}";
            }
            constructor(a) {
              this.items = a;
              this.kind = "map";
            }
          },
          gcc = class extends p0 {
            Qsa() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${[...a].map(([b, c]) => `${b}: ${w_(c)}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
              this.kind = "record";
            }
          },
          hcc = class {
            toString() {
              return `[instance ${this.Hr.name}]`;
            }
            constructor(a, b) {
              this.Hr = a;
              this.instance = b;
              this.kind = "instance";
            }
          },
          icc = class {
            array(a) {
              return new ccc(a);
            }
            arrayOf(...a) {
              return new ccc(a);
            }
            set(a) {
              return new ecc(a);
            }
            map(a) {
              return new fcc(new Map(a));
            }
            Pb(a) {
              return new gcc({ ...a });
            }
          },
          jcc = class extends icc {
            instance(a, b) {
              return new hcc(a, b);
            }
            stringify(a) {
              return w_(a);
            }
            constructor() {
              super();
              this.dh = v_;
            }
          },
          F_ = new jcc(),
          kcc = class extends icc {
            instance(a, b) {
              a = y(this.classes[a]);
              return new hcc(a, b);
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var P$b = {
            [0]: o_(B_.number, B_.number, (a) => -a),
            [1]: o_(B_.string, B_.number, (a) => a.length),
            [2]: o_(B_.Rg, B_.Rg, (a) => !a),
            [3]: p_(B_.number, B_.number, B_.number, (a, b) => a + b),
            [4]: p_(B_.number, B_.number, B_.number, (a, b) => a - b),
            [5]: p_(B_.number, B_.number, B_.number, (a, b) => a * b),
            [6]: p_(B_.number, B_.number, B_.number, (a, b) => a / b),
            [7]: p_(B_.number, B_.number, B_.number, (a, b) => a % b),
            [8]: p_(B_.string, B_.string, B_.string, (a, b) => a + b),
            [9]: p_(B_.number, B_.number, B_.Rg, (a, b) => a === b),
            [10]: p_(B_.number, B_.number, B_.Rg, (a, b) => a !== b),
            [11]: p_(B_.number, B_.number, B_.Rg, (a, b) => a < b),
            [12]: p_(B_.number, B_.number, B_.Rg, (a, b) => a <= b),
            [13]: p_(B_.number, B_.number, B_.Rg, (a, b) => a > b),
            [14]: p_(B_.number, B_.number, B_.Rg, (a, b) => a >= b),
            [15]: p_(B_.Rg, B_.Rg, B_.Rg, (a, b) => a && b),
            [16]: p_(B_.Rg, B_.Rg, B_.Rg, (a, b) => a || b),
          },
          U$b = {
            [2]: new f0(B_.number, B_.number, (a) =>
              a.reduce((b, c) => b + c, 0)
            ),
            [3]: new f0(B_.number, B_.number, (a) =>
              a.reduce((b, c) => b * c, 1)
            ),
            [4]: new f0(B_.number, B_.number, (a) => Math.max(...a)),
            [5]: new f0(B_.number, B_.number, (a) => Math.min(...a)),
            [6]: new f0(B_.string, B_.string, (a) => a.join("")),
          },
          lcc = (a) => F_.array(a),
          mcc = (a) => F_.set(a),
          S$b = {
            [0]: (a) => new f0(a, B_.array(a), lcc),
            [1]: (a) => new f0(a, B_.set(a), mcc),
          },
          Jbc = (a) => F_.map(a),
          G$b = { [0]: (a, b) => new Kbc(a, b, B_.map(a, b)) },
          Hbc = (a) => F_.Pb(a),
          X$b = { [0]: (a) => new Ibc(a, B_.Pb(a)) },
          ncc = (a, b) => F_.array(b.map((c) => c())),
          occ = (a, b) => F_.array(b.flatMap((c) => c().items)),
          pcc = (a, b) => F_.array(a.filter((c, d) => b[d]()).map((c) => c())),
          qcc = (a, b) => b.some((c) => c()),
          rcc = (a, b) => b.every((c) => c()),
          scc = (a, b) => a.find((c, d) => b[d]())?.(),
          I$b = {
            [0]: (a, b) => b.map((c) => q_(a, c, B_.array(c), ncc)),
            [1]: (a, b) =>
              b.DR().map((c) => q_(a, B_.array(c), B_.array(c), occ)),
            [2]: (a) => q_(a, B_.Rg, B_.array(a), pcc),
            [3]: (a) => q_(a, B_.Rg, B_.Rg, qcc),
            [4]: (a) => q_(a, B_.Rg, B_.Rg, rcc),
            [5]: (a) => q_(a, B_.Rg, B_.optional(a), scc),
          };
        var y_ = class {
          define(a, b) {
            return new y_(new Map([[a, b]]), this);
          }
          resolve(a) {
            const b = this.defs.get(a);
            if (b) return b;
            if (this.parent) return this.parent.resolve(a);
            throw Error(`undefined symbol: "${a}"`);
          }
          constructor(a, b) {
            this.defs = a;
            this.parent = b;
          }
        };
        var ucc = (a, b, c) => {
            const d = x_.create(b.qK),
              e = new tcc(a);
            return {
              compile: (f) => {
                const g = M$b(e, d, f).as(c);
                return (h) => {
                  h = new y_(new Map(b.decode(h).yGa));
                  return g(h);
                };
              },
            };
          },
          x_ = class {
            static create(a) {
              return new x_(new y_(new Map(a)), new y_(new Map()));
            }
            constructor(a = new y_(new Map()), b = new y_(new Map())) {
              this.vars = a;
              this.q5 = b;
            }
          },
          tcc = class {
            constructor(a) {
              this.types = a;
            }
          },
          D_ = class {
            static of(a, b) {
              return new D_(a, b);
            }
            as(a) {
              if (!r_(this.type, a))
                throw Error(
                  `type ${this.type} does not match expected type: ${a}`
                );
              return this.evaluate;
            }
            computed() {
              const a = this.evaluate;
              return new D_(this.type, (b) => {
                const c = R_(a(b), { equals: F_.dh });
                return () => c.get();
              });
            }
            map(a) {
              return a(this.type, this.evaluate);
            }
            constructor(a, b) {
              this.type = a;
              this.evaluate = b;
            }
          },
          hac = class {
            as(a, b) {
              const c = this.Gla,
                d = this.resultType;
              if (a.length < c.length)
                throw Error(
                  `Target signature provides too few arguments. Expected ${c.length} or more, got ${a.length}.`
                );
              for (let e = 0; e < c.length; e++)
                if (!r_(a[e], c[e]))
                  throw Error(
                    `Types of parameter ${e} are incompatible.  Type ${a[e]} is not assignable to parameter type: ${c[e]}`
                  );
              if (!r_(d, b))
                throw Error(
                  `return type ${d} is not assignable to expected type: ${b}`
                );
              return this.evaluate;
            }
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.Gla = a;
              this.resultType = b;
              this.evaluate = c;
            }
          };
        var Nac = class {
            add(a) {
              a = a(vcc, this.types);
              return new Nac({ ...this.classes, ...a });
            }
            resolve(a) {
              return this.classes[a];
            }
            evaluate(a) {
              const b = this.types;
              switch (a.kind) {
                case 0:
                  switch (a.name) {
                    case "string":
                      return b.string;
                    case "number":
                      return b.number;
                    case "boolean":
                      return b.Rg;
                    case "undefined":
                      return b.undefined;
                    default:
                      throw new D(a);
                  }
                case 1:
                  return b.instance(a.name);
                case 4:
                  switch (a.name) {
                    case "array":
                      return b.array(this.evaluate(a.nPa));
                    case "set":
                      return b.set(this.evaluate(a.nPa));
                    default:
                      throw new D(a);
                  }
                case 5:
                  switch (a.name) {
                    case "map":
                      const c = this.evaluate(a.nPa);
                      a = this.evaluate(a.OQb);
                      if (!r_(c, b.primitive))
                        throw Error(`key type is not a primitive: ${c}`);
                      return b.map(c, a);
                    default:
                      throw new D(a);
                  }
                case 3:
                  return b.union(...a.args.map((c) => this.evaluate(c)));
                case 2:
                  return b.Pb(he(a.args, (c) => this.evaluate(c)));
                default:
                  throw new D(a);
              }
            }
            constructor(a) {
              this.classes = a;
              this.types = new Zbc(this.classes);
              this.values = new kcc(this.classes);
            }
          },
          vcc = class {
            constructor(a, b, c) {
              this.name = a;
              this.create = c;
              this.aAb = new n_([B_.Pb(b)], B_.instance(this), (d) =>
                F_.instance(this, c(d.fields))
              );
            }
          };
        var wcc;
        wcc = Symbol.iterator;
        var iac = class {
          static D(a) {
            M(a, { G7: R_ });
          }
          get G7() {
            const a = new Map();
            this.base.forEach((b) => a.set(this.dg(b), b));
            return a;
          }
          cu(a) {
            return y(this.G7.get(a));
          }
          QY(a) {
            return a != null ? this.dg(a) : void 0;
          }
          get size() {
            return this.base.size;
          }
          get(a) {
            a = this.base.get(a);
            return this.QY(a);
          }
          has(a) {
            return this.base.has(a);
          }
          forEach(a) {
            this.base.forEach((b, c) => a(this.dg(b), c));
          }
          map(a) {
            return this.base.map((b, c) => a(this.dg(b), c));
          }
          set(a, b) {
            return this.dg(this.base.set(a, this.MH(b)));
          }
          every(a) {
            return this.base.every((b, c) => a(this.dg(b), c));
          }
          delete(a) {
            this.base.delete(a);
          }
          entries() {
            return kac(this.base.entries(), ([a, b]) => [a, this.dg(b)]);
          }
          keys() {
            return this.base.keys();
          }
          values() {
            return kac(this.base.values(), this.dg);
          }
          [wcc]() {
            return this.$k()[Symbol.iterator]();
          }
          $k() {
            return Sc(this.base.$k(), this.dg);
          }
          constructor(a, b, c) {
            this.base = a;
            this.MH = b;
            this.dg = c;
            iac.D(this);
          }
        };
        var q0 = class {
            $K(a) {
              return new xcc(this, a);
            }
            e5(a) {
              return new ycc(this, a);
            }
            DQ(a) {
              return new zcc(this, a);
            }
            toString() {
              return this.s ?? (this.s = this.H7());
            }
          },
          xac = class extends q0 {
            $K(a) {
              return new Acc(a);
            }
            e5() {
              throw Error();
            }
            DQ() {
              throw Error();
            }
            H7() {
              return "(global)";
            }
          },
          Acc = class extends q0 {
            H7() {
              return this.name;
            }
            constructor(a) {
              super();
              this.name = a;
            }
          },
          xcc = class extends q0 {
            H7() {
              return `${this.parent}.${this.name}`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.name = b;
            }
          },
          ycc = class extends q0 {
            H7() {
              return `${this.parent}["${this.key}"]`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.key = b;
            }
          },
          zcc = class extends q0 {
            H7() {
              return `${this.parent}[${this.index}]`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.index = b;
            }
          },
          wac = class {
            error(a, b) {
              return Error(
                `widget '${this.tNb}': schema error on key '${a}': ${b}`
              );
            }
            constructor(a) {
              this.tNb = a;
            }
          },
          Aac = {
            string: "string",
            boolean: "boolean",
            double: "number",
            int32: "number",
            list: "object",
            dict: "object",
            ref: "object",
            fill: "object",
            stroke: "object",
            text2: "object",
          },
          rac = new Set(["string", "boolean", "int32"]),
          Bac = {
            font: "font",
            media: "media",
            video: "video",
            audio: "audio",
            embed: "embed",
            scene: "scene",
            blueprint: "blueprint",
          };
        var Bcc, Hac, K_, Ccc, Dcc;
        __c.r0 = class {
          map(a, b) {
            const c = this.get,
              d = this.set;
            return new __c.r0(
              () => a(c()),
              (e) => d(b(e))
            );
          }
          project({ get: a, set: b }) {
            const c = this.get,
              d = this.set;
            return new __c.r0(
              () => a(c()),
              (e) => d(b(c(), e))
            );
          }
          constructor(a, b) {
            this.get = a;
            this.set = b;
          }
        };
        Bcc = class {
          read(a) {
            return J_(a) ? a() : a;
          }
          computed(a) {
            const b = R_(a);
            return () => b.get();
          }
          map(a, b) {
            return J_(a) ? () => b(a()) : b(a);
          }
          box(a) {
            return new obc(J_(a) ? new nbc(R_(a)) : new mbc(a));
          }
          list(a) {
            const b = this.map(
              a,
              (c) =>
                new __c.Y9a(new __c.Q_(c.map((d) => (J_(d) ? R_(d) : Cac(d)))))
            );
            return J_(b) ? __c.oe(() => b()) : b;
          }
          constructor() {
            this.classes = Mac();
          }
        };
        Hac = (a) => {
          const b = a.Hr,
            c = a.jk,
            d = c.W,
            e = c.attributes;
          Dac(a.args, d, e);
          return {
            create: function (f, g) {
              const h = {};
              var k;
              const l = g?.W;
              g = g?.attributes;
              if (l)
                for (const [m, n] of Object.entries(l))
                  u(m in d, "unknown override: '{}'", m),
                    J_(n) ? ((k || (k = {}))[m] = n) : (h[m] = Ccc(n));
              if (g)
                for (const [m, n] of Object.entries(g))
                  u(m in e, "unknown override: '{}'", m),
                    (h[m] =
                      n instanceof __c.r0
                        ? n
                        : J_(n)
                        ? { enumerable: !0, get: n, set: K_ }
                        : Dcc(n));
              if (k)
                return Eac(
                  k,
                  Gac((m) => {
                    const n = b(f);
                    Object.defineProperties(n, { ...h, ...he(m, Ccc) });
                    return n;
                  })
                );
              k = b(f);
              Object.defineProperties(k, h);
              return k;
            },
          };
        };
        K_ = () => {};
        Ccc = (a) => ({ enumerable: !0, writable: !1, value: a });
        Dcc = (a) => ({ enumerable: !0, get: () => a, set: K_ });
        var L_ = {
          top: void 0,
          left: void 0,
          width: void 0,
          height: void 0,
          rotation: void 0,
          locked: void 0,
          Oj: void 0,
        };
        var s0 = new Map(),
          t0 = [],
          N_ = Object.freeze({
            Ym: void 0,
            image: void 0,
            video: void 0,
            Va: void 0,
            color: void 0,
            ya: 0,
            locked: !0,
            Fg: !0,
            dm: void 0,
            hd: void 0,
            M: void 0,
            transition: void 0,
            flipX: !1,
            flipY: !1,
          }),
          Oac = Object.freeze({ fill: N_, stroke: void 0, N: 0 }),
          Jac = Object.freeze({
            weight: 0,
            color: "#000000",
            fill: N_,
            Nc: t0,
            qe: !1,
          }),
          u0 = Object.freeze({
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            rotation: 0,
            ya: 0,
            Hi: void 0,
            ja: void 0,
            M: void 0,
            transition: void 0,
            oa: t0,
            Qb: t0,
            animation: void 0,
            zf: void 0,
            link: void 0,
            locked: !0,
            Oj: void 0,
            Fg: !0,
            dm: void 0,
            Qa: void 0,
            Ru: void 0,
            rf: t0,
            yE: s0,
            vB: s0,
            anchor: void 0,
            Sg: s0,
          }),
          O_ = Object.freeze({
            ...u0,
            type: "rect",
            fill: N_,
            stroke: void 0,
            N: t0,
          }),
          P_ = Object.freeze({
            ...u0,
            type: "shape",
            slice: void 0,
            bk: void 0,
            ub: t0,
            resizeMode: void 0,
          }),
          Kac = Object.freeze({
            ...u0,
            type: "text",
            text: __c.Ti.zx("\n"),
            Ha: Object.freeze({ fb: [] }),
            Je: void 0,
            placeholder: void 0,
            Of: 1,
            writingMode: void 0,
            I: void 0,
            P: void 0,
            Qn: !1,
            Kz: void 0,
            nh: void 0,
            hd: void 0,
          }),
          Lac = Object.freeze({ ...u0, type: "embed" });
        var Fcc = class {
            Dea(a, b) {
              const c = __c.Jh(a);
              __c.x(c.type !== "body", "Unexpected body context.");
              switch (c.type) {
                case "fixed-page":
                  return { page: this.$j.ZWa(c), O: new v0(a), kf: b };
                case "concatenated-fixed-page":
                  return { page: this.$j.PWa(c), O: new v0(a), kf: b };
                case "responsive-page":
                  return { page: this.$j.nXa(c), O: new v0(a), kf: b };
                default:
                  throw new D(c);
              }
            }
            constructor(a, b) {
              this.Sma = a;
              u(
                b.Ze === "fixed",
                "Responsive documents are not supported in widget rendering."
              );
              this.sb = __c.Oh(b);
              this.$j = new Ecc(this.Sma, this.sb);
            }
          },
          v0 = class {
            get width() {
              return this.container.type === "controlled-item"
                ? this.container.G.Tg?.width || 0
                : this.container.G.I;
            }
            get height() {
              return this.container.type === "controlled-item"
                ? this.container.G.Tg?.height || 0
                : this.container.G.P;
            }
            constructor(a) {
              this.container = a;
            }
          },
          w0 = class {
            getIndex() {
              return this.kL(this.page);
            }
            get id() {
              return this.page.G.id;
            }
            get title() {
              return this.page.G.title;
            }
            get anchor() {
              return this.page.G.anchor;
            }
            get Evb() {
              return this.page.G.Qf;
            }
            constructor(a, b) {
              this.page = a;
              this.kL = b;
            }
          },
          Gcc = class extends w0 {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "fixed";
            }
          },
          Hcc = class extends w0 {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "concatenated-fixed";
            }
          },
          Icc = class extends w0 {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "responsive";
            }
          },
          Jcc = class {
            get id() {
              return this.Sma?.id;
            }
            get extension() {
              return this.Sma?.extension;
            }
            get language() {
              return this.sb.G.language;
            }
            constructor(a, b) {
              this.Sma = a;
              this.sb = b;
            }
          },
          Ecc = class extends Jcc {
            static D(a) {
              M(a, {
                Y: R_({ equals: qbc.shallow }),
                l2a: R_({ equals: qbc.shallow }),
              });
            }
            get Y() {
              return this.sb.G.Y.map((a) => this.zsb(this.sb.re(a)));
            }
            get l2a() {
              return this.sb.G.Y.toArray();
            }
            constructor(a, b) {
              super(a, b);
              this.rv = a;
              this.sb = b;
              this.type = (Ecc.D(this), "fixed");
              this.ZWa = c0((c) => new Gcc(c, this.kL, this));
              this.PWa = c0((c) => new Hcc(c, this.kL, this));
              this.nXa = c0((c) => new Icc(c, this.kL, this));
              this.zsb = c0((c) => {
                switch (c.type) {
                  case "fixed-page":
                    return this.ZWa(c);
                  case "concatenated-fixed-page":
                    return this.PWa(c);
                  case "responsive-page":
                    return this.nXa(c);
                  default:
                    throw new D(c);
                }
              });
              this.kL = c0((c) => {
                c = this.sb.G.Y.has(c.G) ? c.G : void 0;
                return c != null ? this.l2a.indexOf(c) : -1;
              });
            }
          };
        var Kcc = class {
          constructor(a) {
            this.FGa = a;
            this.uSa = new Map();
          }
        };
        var $ac = class {
          add(a, b) {
            let c = this.store.get(a);
            c || ((c = new Set()), this.store.set(a, c));
            c.add(b);
          }
          get(a) {
            return this.store.get(a);
          }
          remove(a, b) {
            const c = this.store.get(a);
            c && (c.delete(b), c.size === 0 && this.store.delete(a));
          }
          constructor() {
            this.store = new WeakMap();
          }
        };
        var Tac = class {
          Zc(a) {
            let b = this.store.get(a);
            b == null && ((b = this.pmb()), this.store.set(a, b));
            return b;
          }
          constructor(a) {
            this.pmb = a;
            this.store = new WeakMap();
          }
        };
        var m$b = new Set(),
          n$b = { xx: () => ({ Ka: wbc }) },
          Lcc = class {
            static D(a) {
              M(a, { Ima: $_.shallow });
            }
            $Va(a) {
              return this.Ima.get(a)?.G;
            }
            constructor(a, b, c, d, e, f, g) {
              this.sb = a;
              this.FGa = b;
              this.xpa = c;
              this.rva = d;
              this.J = e;
              this.rNb = f;
              this.qf = g;
              this.Ima = (Lcc.D(this), new Map());
            }
          },
          Yac = (a, b) => ({
            ...a,
            Qqa: (c) => S_(a.Qqa, { ...c, Ijb: b || !1 }),
          });
        var Mcc = class {
          static D(a) {
            M(a, { P9: $_.shallow });
          }
          constructor(a) {
            this.qSa = a;
            this.P9 = (Mcc.D(this), new Map());
          }
        };
        var Ncc = class extends sbc {
          render() {
            const {
              children: a,
              component: b = "div",
              BEb: c,
              Qka: d,
            } = this.props;
            let e = {};
            d &&
              (e = c.reduce((f, g) => {
                f[g] = this.lhb;
                return f;
              }, {}));
            return S_(b, { className: "_kI3Pw", ...e, children: a });
          }
          componentDidMount() {
            this.props.Qka && bbc(this);
          }
          componentDidUpdate() {
            this.props.Qka && bbc(this);
          }
          componentWillUnmount() {
            this.BO && (this.BO(), (this.BO = null));
          }
          constructor(...a) {
            super(...a);
            this.Xra = this.BO = null;
            this.lhb = (b) => {
              this.Xra = b.nativeEvent;
            };
            this.ZNa = (b) => {
              const c = this.props.Qka,
                d = this.Xra === b;
              c && !d && c(b);
              this.Xra = null;
            };
          }
        };
        var ebc = (a) =>
          S_(Ncc, {
            BEb: ["onMouseDown", "onTouchStart"],
            iob: ["mousedown", "touchstart"],
            Qka: a.t8,
            children: a.children,
          });
        var cbc = class {
            static D(a) {
              M(a, { Dk: $_.ref });
            }
            constructor() {
              this.Dk = (cbc.D(this), !0);
            }
          },
          dbc = class {
            static D(a) {
              M(a, {
                onDoubleClick: a0.bound,
                onTouchEnd: a0.bound,
                reset: a0.bound,
              });
            }
            onDoubleClick() {
              this.store.Dk = !1;
            }
            onTouchEnd(a) {
              a.touches.length > 0 ||
                (this.OT
                  ? (window.clearTimeout(this.OT),
                    (this.OT = void 0),
                    (this.store.Dk = !1))
                  : (this.OT = window.setTimeout(
                      () => (this.OT = void 0),
                      300
                    )));
            }
            reset() {
              this.store.Dk = !0;
            }
            ZV() {
              this.OT && window.clearTimeout(this.OT);
            }
            constructor(a) {
              this.store = a;
              this.OT = (dbc.D(this), void 0);
            }
          };
        __c.WYa = {
          Xub: function ({
            document: a,
            $j: b,
            vta: c,
            WF: d,
            Qh: e,
            Tfa: f,
            Ta: g,
            Xe: h,
            P0: k,
            Ne: l,
            Nf: m,
            kf: n,
            aga: p,
            YC: q,
            w$b: r,
          }) {
            const t = e.vL,
              v = e.D6;
            var w = e.J;
            const z = e.Mf,
              A = e.ha,
              C = e.OUa;
            e = e.Ra;
            f = f.wv;
            const { WUa: B = !1, cVa: F = !1, $Ua: I = !1 } = r ?? {},
              { xp: L, rva: N } = { xp: Qac(), rva: ucc };
            r = new Mcc(yac(L));
            const {
              TLa: O,
              Udb: R,
              Bmb: T,
              xpa: Y,
            } = { TLa: r, Udb: r, Bmb: N, xpa: L };
            p = f$b({ TLa: O, WUa: B, aga: p, cVa: F, $Ua: I });
            r = new Kcc(R);
            const { SLa: Z, Tdb: ba } = { SLa: r, Tdb: r };
            r = l$b({ ULa: p, SLa: Z });
            w = w.Xf("widget");
            f = fbc({ wv: f, Ra: e });
            const ma = jbc();
            l = kbc({ Ne: l });
            m = gbc({ Si: m });
            const ra = ibc({ Ta: g });
            g = lbc({ Ta: g });
            g = { Qqa: f, ZOb: ma, kl: l, Rm: m, Iba: ra, sra: g };
            b = new Fcc(b, a);
            a = new Lcc(a, R, Y, T, w, b, g);
            b = new Bcc();
            const { qba: qa, xJ: pa, expr: Ba } = { qba: a, xJ: a, expr: b };
            c = u$b({
              ULa: p,
              qba: qa,
              Mf: z,
              jW: { J: w, ha: A, Xe: n === 30 ? h : void 0, Ra: e, expr: Ba },
              Ii: { WF: d, vta: c, OUa: C, P0: k, YC: q, vL: t, D6: v },
            });
            return { Udb: R, xJ: pa, v$b: c, s$b: r, Tdb: ba };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/ef8023a20e7caf0b.js.map
