(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [94260],
  {
    /***/ 519987: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(131662);
      __web_req__(775822);
      __web_req__(891548);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var ob = __c.ob;
        var D = __c.D;
        var K = __c.K;
        var Kuc = function (a) {
            __c.zec({ ...a, G: a.span });
          },
          n6 = function (a, b) {
            var c = a.jbb.get(b);
            if (c != null) return c;
            c = { value: a.qn.Rs(b) };
            a.jbb.set(b, c);
            a.bbb.set(c, b);
            return c;
          },
          o6 = function (a, b) {
            a = a.bbb.get(b);
            if (a == null) throw new Luc("ref does not exists");
            return a;
          },
          Muc = function () {
            const a = (b) => {
              if (b?.type !== "text2") throw new p6("text2", b);
              return b.value;
            };
            return {
              Zk: (b) => ({ type: "text2", value: b }),
              Ss: (b) => {
                if (b?.type !== "text2") throw new q6("text2", b);
                return b.value;
              },
              Rs: a,
              Du: a,
            };
          },
          Nuc = function (a) {
            const b = () => a.Pk.HB.get(a.pf.Ji) || r6;
            return {
              JX: function () {
                return a.Pk.Mk
                  ? 3
                  : a.Pk.Jub === "checking" || a.Pk.ad.status === 2
                  ? 1
                  : a.Pk.ad.status === 3
                  ? 4
                  : a.Pk.gy
                  ? 2
                  : 0;
              },
              Oya: function () {
                const c = a.pf,
                  { QI: d } = b();
                return !(
                  !d ||
                  !c.fields.first(
                    ({ value: e }) =>
                      e.type === "select" &&
                      !!e.options.first(({ value: f }) => f.id === d)
                  )
                );
              },
              vsb: function (c, d) {
                const { results: e } = b();
                c = e.fields.get(c);
                if (!c) return 0;
                d = c.gI.get(d) ?? 0;
                d = c.total > 0 ? (d / c.total) * 100 : 0;
                Number.isInteger(d) || (d = parseFloat(d.toFixed(1)));
                return d;
              },
              Tsb: function (c) {
                if (!a.pf.fields.first(({ value: e }) => e.id === c)) return 0;
                var { results: d } = b();
                return (d = d.fields.get(c)) ? d.total : 0;
              },
              eza: b,
              qzb: (c) => {
                const d = new Map(a.Pk.HB);
                d.set(a.pf.Ji, { ...b(), ...c });
                return d;
              },
            };
          },
          Ruc = function (a, b, c, d, e, f) {
            function g() {
              const v = b.JX(),
                w = q();
              return (p === "poll" || !w) && v === 0;
            }
            async function h() {
              const v = f.Fh("submit_response", {
                  Ap: { name: "ui.rendering.form.submit_response" },
                }),
                w = {
                  GQ: m,
                  vWa: p,
                  Ru: "interacted",
                  action: "response_submitted",
                  location: "in_form",
                };
              e && Kuc({ span: v, ha: e, event: __c.Hhc, props: w });
              const { results: z, Ce: A, nFa: C } = r();
              if (A != null && g()) {
                var B = a.pf.fields.first(
                  ({ value: O }) =>
                    O.type === "select" &&
                    !!O.options.first(({ value: R }) => R.id === A)?.value
                )?.value;
                if (B) {
                  l("selected_field_found", v);
                  var F = a.Pk,
                    I = z;
                  p === "poll" &&
                    C &&
                    C !== A &&
                    (I = Ouc({ ota: z, Et: B.id, xM: C }));
                  I = Puc({ HSa: I, Et: B.id, xM: A });
                  l("field_results_created", v);
                  s6(() => {
                    a.rn(() => ({
                      HB: t({ Ce: A, QI: A, results: I }),
                      gy: !0,
                    }));
                  });
                  l("submission_set", v);
                  v.kX();
                  var L = await c.Mxb({
                    Rq: a.pf.Rq,
                    Ji: n,
                    Gsa: [
                      {
                        type: 0,
                        Et: B.id,
                        Cl: B.label.text.U.trim(),
                        Ce: A,
                        options:
                          B.type === "select"
                            ? B.options.map(({ value: O }) => ({
                                id: O.id,
                                label: O.label.text.U.trim(),
                              }))
                            : [],
                      },
                    ],
                  });
                  if (L.ok)
                    return s6(() => {
                      const O = (R) =>
                        !!L.value.result.OVa.get(B.id)?.feedback?.uK?.includes(
                          R
                        );
                      a.rn(() => ({
                        gy: !1,
                        ad: { ...a.Pk.ad, xia: O },
                        HB: t({ nFa: void 0 }),
                      }));
                    });
                  d?.Ww({
                    ny: K("izckBA"),
                    group: Quc,
                    eC: { mx: K("mQhziQ"), onClick: h },
                  });
                  var N = Ouc({ ota: I, Et: B.id, xM: A });
                  C && (N = Puc({ HSa: N, Et: B.id, xM: C }));
                  s6(() => {
                    a.rn({
                      ...F,
                      ...(C && { HB: t({ Ce: C, QI: C, results: N }) }),
                    });
                  });
                } else v.abort();
              } else v.abort();
            }
            async function k(v) {
              const w = r(),
                z = a.pf.fields.first(
                  ({ value: B }) =>
                    B.type === "select" &&
                    !!B.options.first(({ value: F }) => F.id === v)?.value
                )?.value;
              if (z) {
                var A = a.Pk,
                  C = Ouc({ ota: w.results, Et: z.id, xM: v });
                s6(() => {
                  a.rn(() => ({
                    HB: t({ Ce: void 0, QI: void 0, results: C }),
                    yz: void 0,
                    gy: !0,
                  }));
                });
                (await c.PZ({ Ji: n })).ok
                  ? s6(() => {
                      a.rn({ gy: !1 });
                    })
                  : (d?.Ww({
                      ny: K("kgHTHw"),
                      group: Quc,
                      eC: { mx: K("mQhziQ"), onClick: () => k(v) },
                    }),
                    s6(() => {
                      a.rn(A);
                    }));
              }
            }
            function l(v, w) {
              w.addEvent(v);
              w.od().addEvent(v);
            }
            const m = a.pf.id,
              n = a.pf.Ji,
              p = a.pf.type,
              q = b.Oya,
              r = b.eza,
              t = b.qzb;
            return {
              submit: h,
              CCa: function () {
                a.rn(() => ({ JT: 1 }));
              },
              DCa: function () {
                a.rn(() => ({ JT: 0 }));
              },
              BCa: function () {
                a.rn(() => ({ JT: 2 }));
              },
              ECa: function () {
                a.rn(() => ({ JT: 1 }));
              },
              Yoa: function (v) {
                const w = r(),
                  z = p === "poll" && v === w?.Ce && v === w?.QI;
                if (g() && z) k(v);
                else if (
                  g() &&
                  a.pf.fields.some(
                    ({ value: C }) =>
                      C.type === "select" &&
                      C.options.some(({ value: B }) => B.id === v)
                  )
                ) {
                  var A = w?.QI;
                  s6(() => {
                    const C = r();
                    a.rn(() => ({
                      HB: t({ nFa: A, Ce: C.Ce === v ? void 0 : v }),
                    }));
                  });
                  p === "poll" && h();
                }
              },
              pka: function (v) {
                g() &&
                  a.pf.fields.some(
                    ({ value: w }) =>
                      w.type === "select" &&
                      w.options.some(({ value: z }) => z.id === v)
                  ) &&
                  a.rn(() => ({ iH: v }));
              },
              qka: function (v) {
                b.JX() === 0 &&
                  a.pf.fields.some(
                    ({ value: w }) =>
                      w.type === "select" &&
                      w.options.some(({ value: z }) => z.id === v)
                  ) &&
                  a.Pk.iH &&
                  a.rn(() => ({ iH: void 0 }));
              },
              nka: function (v) {
                const { QI: w, Ce: z } = r();
                b.JX() === 0 &&
                  a.pf.fields.some(
                    ({ value: A }) =>
                      A.type === "select" &&
                      A.options.some(({ value: C }) => C.id === v)
                  ) &&
                  z !== v &&
                  !w &&
                  a.rn(() => ({ yz: v }));
              },
              rka: function (v) {
                b.JX() === 0 &&
                  a.pf.fields.some(
                    ({ value: w }) =>
                      w.type === "select" &&
                      w.options.some(({ value: z }) => z.id === v)
                  ) &&
                  a.Pk.yz &&
                  a.rn(() => ({ yz: void 0 }));
              },
            };
          },
          Ouc = function ({ ota: a, Et: b, xM: c }) {
            const d = a.fields.get(b) ?? { id: b, gI: new Map(), total: 0 },
              e = Math.max(0, (d.gI.get(c) ?? 0) - 1),
              f = new Map(d.gI);
            e > 0 ? f.set(c, e) : f.delete(c);
            return {
              fields: Suc(a.fields, b, {
                id: b,
                gI: f,
                total: Math.max(0, d.total - 1),
              }),
            };
          },
          Puc = function ({ HSa: a, Et: b, xM: c }) {
            const d = a.fields.get(b) ?? { id: b, gI: new Map(), total: 0 },
              e = (d.gI.get(c) ?? 0) + 1;
            return {
              fields: Suc(a.fields, b, {
                id: b,
                gI: Suc(d.gI, c, e),
                total: d.total + 1,
              }),
            };
          },
          Suc = function (a, b, c) {
            return new Map([...a.entries(), [b, c]]);
          },
          t6 = function (a, b) {
            __c.u(b.length > 0, "zero contrast candidates received");
            const c = new Map();
            return __c.to(b, (d) => {
              const e = c.get(d) ?? __c.gz(d, a);
              c.set(d, e);
              return e;
            });
          },
          Tuc = function (a, b) {
            return __c.Fhc(a, b) >= 20 ? a : t6(b, u6);
          },
          v6 = function (a) {
            switch (a.type) {
              case "color":
                return a.color;
              case "gradient":
                return a.Va.Rh[0].color;
              default:
                throw new D(a);
            }
          },
          w6 = function ({
            layout: a,
            direction: b,
            gap: c,
            padding: d,
            background: e,
            border: f,
            N: g,
            cells: h,
            ...k
          }) {
            a = a === "vertical";
            let l = [];
            const m = [],
              n = c && d,
              p = d ? 1 : 0;
            let q = 1;
            for (let r = 0; r < h.length; r++) {
              const t = h[r];
              typeof t.size === "string"
                ? l.push(t.size)
                : l.push(`${t.size}px`);
              m.push({
                ...t,
                id: t.id,
                placement: a
                  ? {
                      gridColumnStart: `${p + 1}`,
                      gridColumnEnd: `${p + 2}`,
                      gridRowStart: `${p + q}`,
                      gridRowEnd: `${p + q + 1}`,
                      padding: t.padding ? Uuc(t.padding) : void 0,
                      alignSelf: t.alignSelf,
                    }
                  : {
                      gridColumnStart: `${p + q}`,
                      gridColumnEnd: `${p + q + 1}`,
                      gridRowStart: `${p + 1}`,
                      gridRowEnd: `${p + 2}`,
                      padding: t.padding ? Uuc(t.padding) : void 0,
                      alignSelf: t.alignSelf,
                    },
              });
              q += n ? 2 : 1;
            }
            n && (l = l.join(` ${c}px `).split(" "));
            d && (l = [`${d}px`, ...l, `${d}px`]);
            return {
              ...k,
              type: "layout",
              cells: m,
              direction: b,
              fill: e,
              border: f,
              N: g,
              gridTemplateColumns: a
                ? d
                  ? [`${d}px`, "1fr", `${d}px`]
                  : ["1fr"]
                : l,
              gridTemplateRows: a
                ? l
                : d
                ? [`${d}px`, "auto", `${d}px`]
                : ["auto"],
              columnGap: n || a ? void 0 : c,
              rowGap: !n && a ? c : void 0,
            };
          },
          Vuc = function ({
            padding: a,
            direction: b,
            background: c,
            N: d,
            ya: e,
            border: f,
            content: g,
            ref: h,
            key: k,
            ...l
          }) {
            return {
              ...l,
              type: "layout",
              direction: b,
              gridTemplateColumns: ["1fr"],
              gridTemplateRows: ["1fr"],
              fill: c,
              N: d,
              ya: e,
              border: f,
              cells: [
                {
                  id: "_",
                  content: g,
                  placement: {
                    gridColumnStart: "1",
                    gridColumnEnd: "2",
                    gridRowStart: "1",
                    gridRowEnd: "2",
                    alignSelf: "center",
                    padding: a,
                  },
                },
              ],
              key: k,
              ref: h,
            };
          },
          Uuc = function (a) {
            switch (a.length) {
              case 0:
                break;
              case 1:
                return a[0];
              case 2:
                return { pa: a[0], La: a[1], Ca: a[0], qa: a[1] };
              case 4:
                return { pa: a[0], La: a[1], Ca: a[2], qa: a[3] };
              default:
                throw Error(`Invalid padding value: ${a}`);
            }
          },
          x6 = function (a, b) {
            a = __c.Ti.create(__c.Ti.snapshot(a.text));
            b != null && a.setAttributes(b);
            return { type: "text", aF: 1, text: __c.Ti.snapshot(a) };
          },
          y6 = function (a) {
            switch (a) {
              case "l":
                return 1;
              case "r":
                return 2;
              default:
                throw new D(a);
            }
          },
          z6 = function (a) {
            switch (a) {
              case "l":
                return "ltr";
              case "r":
                return "rtl";
              default:
                throw new D(a);
            }
          },
          Wuc = function (a) {
            if (a)
              return {
                Yoa: a.Yoa,
                pka: a.pka,
                qka: a.qka,
                nka: a.nka,
                rka: a.rka,
              };
          },
          Xuc = function ({ direction: a, text: b, background: c }) {
            return {
              id: "header",
              size: "auto",
              fill: c,
              padding: [20, 20, 16, 20],
              content: x6(b, { direction: z6(a) }),
            };
          },
          $uc = function ({
            direction: a,
            messages: b,
            mEa: c,
            fontFamily: d,
            b9: e,
            N: f,
            state: g,
            sp: h,
            zs: k,
          }) {
            var l = h !== k,
              m = t6(k, u6);
            h = l ? h : m;
            m = Tuc("#000000", k);
            var n = Tuc(h, k);
            l = Yuc(g, g === 3 && l ? n : m, l);
            b = {
              type: "layout",
              gridTemplateRows: ["10px", "1fr", "10px"],
              gridTemplateColumns: ["10px", "1fr", "2px", "45px", "10px"],
              fill: l,
              cells: [
                {
                  id: "text",
                  placement: {
                    gridColumnStart: "2",
                    gridColumnEnd: "3",
                    gridRowStart: "2",
                    gridRowEnd: "3",
                    alignSelf: "center",
                  },
                  content: x6(c, {
                    direction: z6(a),
                    ...(g === 3 && { color: t6(h, u6) }),
                  }),
                },
                g === 3 || g === 4 || g === 5
                  ? {
                      id: "percentage",
                      placement: {
                        gridColumnStart: "4",
                        gridColumnEnd: "5",
                        gridRowStart: "2",
                        gridRowEnd: "3",
                        alignSelf: "center",
                      },
                      content: {
                        type: "text",
                        aF: 0,
                        fontFamily: d,
                        fontWeight: "bold",
                        fontSize: Zuc,
                        text: b.T6a(e),
                        textAlign: "end",
                        direction: z6(a),
                        color: g === 3 ? t6(h, u6) : t6(k, u6),
                      },
                    }
                  : void 0,
              ].filter(ob),
            };
            if (g !== 3 && g !== 4 && g !== 5) return b;
            c = e > 0;
            const p = e < 100;
            n = (k = (c && !p) || (!c && p)) ? 1 : 2;
            e = [c ? `${e}fr` : void 0, p ? `${100 - e}fr` : void 0].filter(ob);
            g = {
              type: "color",
              color: g === 3 ? h : m,
              ya: g === 3 ? 0 : 0.8,
            };
            return k
              ? { ...b, fill: c ? g : l }
              : {
                  type: "layout",
                  direction: y6(a),
                  gridTemplateRows: ["1fr"],
                  gridTemplateColumns: e,
                  fill: l,
                  cells: [
                    {
                      id: "bar",
                      N: f,
                      fill: g,
                      placement: {
                        gridColumnStart: "1",
                        gridColumnEnd: "2",
                        gridRowStart: "1",
                        gridRowEnd: "2",
                      },
                      content: Vuc({
                        direction: y6(a),
                        content: {
                          type: "text",
                          aF: 0,
                          text: "",
                          fontFamily: d,
                          fontSize: Zuc,
                          direction: z6(a),
                        },
                      }),
                    },
                    {
                      id: "optionTextWithPercentage",
                      placement: {
                        gridColumnStart: "1",
                        gridColumnEnd: `${n + 1}`,
                        gridRowStart: "1",
                        gridRowEnd: "2",
                      },
                      content: b,
                    },
                  ],
                };
          },
          Yuc = function (a, b, c) {
            switch (a) {
              case 0:
                return { type: "color", color: b, ya: 0.92 };
              case 1:
              case 5:
                return { type: "color", color: b, ya: 0.88 };
              case 2:
                return { type: "color", color: b, ya: 0.74 };
              case 3:
                return { type: "color", color: b, ya: c ? 0.5 : 0.92 };
              case 4:
                return { type: "color", color: b, ya: 0.92 };
              default:
                throw new D(a);
            }
          },
          avc = function ({
            orb: a,
            rR: b,
            Et: c,
            direction: d,
            options: e,
            Ce: f,
            iH: g,
            yz: h,
            lEa: k,
            fontFamily: l,
            x$: m,
            sp: n,
            zs: p,
            messages: q,
            Xpa: r,
          }) {
            return {
              id: "field",
              size: "1fr",
              padding: [16, 20],
              alignSelf: "center",
              content: w6({
                layout: "vertical",
                direction: y6(d),
                gap: 8,
                cells: e.map(({ value: t }) => {
                  var v = t.id === f;
                  const w = t.id === g,
                    z = t.id === h;
                  v = m ? (v ? 3 : w ? 5 : 4) : z ? 2 : w ? 1 : 0;
                  return {
                    id: t.id,
                    size: "auto",
                    alignSelf: "center",
                    content: {
                      ref: r.option,
                      key: t.id,
                      N: k,
                      Am: () => b?.Yoa?.(t.id),
                      onMouseEnter: () => b?.pka?.(t.id),
                      onMouseLeave: () => b?.qka?.(t.id),
                      onMouseDown: () => b?.nka?.(t.id),
                      onMouseUp: () => b?.rka?.(t.id),
                      ...$uc({
                        messages: q,
                        mEa: t.label,
                        direction: d,
                        fontFamily: l,
                        b9: a.vsb(c, t.id),
                        N: k,
                        state: v,
                        sp: n,
                        zs: p,
                      }),
                    },
                  };
                }),
              }),
            };
          },
          fvc = function (a) {
            const b = a.status,
              c = a.direction,
              d = a.backgroundColor,
              e = a.fontSize,
              f = a.fontFamily,
              g = t6(d, u6);
            switch (b) {
              case 0:
                return {
                  type: "text",
                  aF: 1,
                  text: A6(
                    a.statusMessage ?? a.messages.MBa(),
                    c,
                    t6(d, bvc),
                    g,
                    e,
                    f
                  ),
                };
              case 1:
                return {
                  type: "text",
                  aF: 1,
                  text: A6(a.messages.loading(), c, t6(d, cvc), g, e, f),
                };
              case 2:
                return {
                  type: "text",
                  aF: 1,
                  text: A6(a.messages.dJa(), c, t6(d, cvc), g, e, f),
                };
              case 3:
                return {
                  type: "text",
                  aF: 1,
                  text: A6(a.messages.offline(), c, t6(d, dvc), g, e, f),
                };
              case 4:
                return {
                  type: "text",
                  aF: 1,
                  text: A6(a.messages.zIa(), c, t6(d, evc), g, e, f),
                };
              default:
                throw new D(b);
            }
          },
          gvc = function ({
            direction: a,
            messages: b,
            zAb: c,
            status: d,
            ad: e,
            backgroundColor: f,
            fontSize: g,
            fontFamily: h,
          }) {
            e =
              e.status === 1
                ? e.data.KT?.type === "ANON"
                  ? b.pqa()
                  : b.oqa()
                : b.MBa();
            return [
              {
                id: "footer",
                size: "auto",
                padding: [0, 20, 20, 20],
                content: fvc({
                  messages: b,
                  status: d,
                  statusMessage: `${e} | ${b.bDa(c)}`,
                  backgroundColor: f,
                  direction: a,
                  fontSize: g,
                  fontFamily: h,
                }),
              },
            ];
          },
          ivc = function (a, b, c, d, e, f, g) {
            const h = c.pf;
            c = c.Pk;
            const k = a.us;
            a = a.As;
            b = b.border;
            const l = b.e7a,
              m = h.direction,
              n = h.fields.first()?.value;
            if (!n || n.type !== "select" || !k || !a)
              return {
                ...w6({
                  layout: "vertical",
                  direction: y6(m),
                  background: { type: "color", color: "#ffffff" },
                  cells: [],
                }),
                minWidth: h.minWidth,
                minHeight: h.minHeight,
              };
            const p = v6(k),
              q = v6(a);
            var r = n.options.first()?.value.label.text,
              t = (C) => C?.values().next().value,
              v =
                r?.stream.ei("font-size")["font-size"]?.values().next().value ||
                16;
            const w = t(r?.stream.ei("font-family")["font-family"]) || h.IW,
              z =
                t(r?.stream.ei("font-weight")["font-weight"]) ||
                __c.Hf.Wb["font-weight"];
            r =
              t(r?.stream.ei("font-style")["font-style"]) ||
              __c.Hf.Wb["font-style"];
            v *= hvc;
            t = d.Oya();
            const A = d.eza();
            return {
              minWidth: h.minWidth,
              minHeight: h.minHeight,
              ...w6({
                layout: "vertical",
                direction: y6(m),
                background: a,
                N: l,
                border: b,
                cells: [
                  h.sD
                    ? void 0
                    : Xuc({ direction: m, text: n.label, background: k }),
                  avc({
                    orb: d,
                    rR: Wuc(e),
                    options: n.options,
                    iH: c.iH,
                    yz: c.yz,
                    Ce: A.Ce,
                    lEa: n.N,
                    sp: p,
                    zs: q,
                    fontFamily: w,
                    direction: m,
                    x$: t,
                    Et: n.id,
                    messages: f,
                    Xpa: g,
                  }),
                  ...gvc({
                    direction: m,
                    messages: f,
                    zAb: d.Tsb(n.id),
                    status: d.JX(),
                    ad: c.ad,
                    backgroundColor: q,
                    fontSize: v,
                    fontFamily: w,
                    fontWeight: z,
                    fontStyle: r,
                  }),
                ].filter(ob),
              }),
              ref: g.root,
            };
          },
          jvc = function ({
            width: a,
            height: b,
            he: c,
            color: d,
            Avb: e,
            backgroundColor: f,
          }) {
            return {
              type: "shape",
              width: a,
              height: b,
              Ypa: { width: 16, height: 16 },
              gb: [
                {
                  d: "M 8 16 C 12.4183 16 16 12.4183 16 8 C 16 3.5817 12.4183 0 8 0 C 3.5817 0 0 3.5817 0 8 C 0 12.4183 3.5817 16 8 16 Z",
                  stroke: { weight: c, color: d },
                  fill: { type: "color", color: d },
                },
                {
                  d: e
                    ? "M11.9541 5.09249C11.5708 4.70916 10.9493 4.70916 10.5659 5.09249L6.84653 8.8119L5.44784 7.39414C5.23981 7.18328 4.97538 7.08048 4.70513 7.09454C4.44717 7.10796 4.22126 7.22537 4.05972 7.38474C3.89817 7.54411 3.77772 7.76841 3.76081 8.02616C3.74309 8.2962 3.8423 8.562 4.05032 8.77286L6.14306 10.8941C6.35108 11.105 6.61551 11.2078 6.88577 11.1937C7.14372 11.1803 7.36963 11.0629 7.53118 10.9035L7.53918 10.8955L11.9541 6.48064C12.3374 6.09731 12.3374 5.47582 11.9541 5.09249Z"
                    : "M11.6813 5.85778C12.1063 5.43279 12.1063 4.74374 11.6813 4.31875C11.2564 3.89376 10.5673 3.89376 10.1423 4.31875L8.00005 6.46102L5.85777 4.31874C5.43279 3.89375 4.74374 3.89375 4.31874 4.31874C3.89375 4.74374 3.89375 5.43278 4.31874 5.85778L6.46101 8.00005L4.31883 10.1422C3.89384 10.5672 3.89384 11.2563 4.31883 11.6813C4.74383 12.1063 5.43288 12.1063 5.85786 11.6813L8.00005 9.53908L10.1422 11.6813C10.5672 12.1062 11.2563 12.1062 11.6813 11.6813C12.1062 11.2563 12.1062 10.5672 11.6813 10.1422L9.53908 8.00005L11.6813 5.85778Z",
                  fill: { type: "color", color: f },
                },
              ],
            };
          },
          mvc = function ({ direction: a, mEa: b, zs: c, state: d }) {
            const e = Tuc("#000000", c);
            return {
              type: "layout",
              gridTemplateRows: ["10px", "1fr", "10px"],
              gridTemplateColumns: ["10px", "1fr", "2px", "18px", "10px"],
              fill: kvc(d, e),
              cells: [
                {
                  id: "text",
                  placement: {
                    alignSelf: "center",
                    gridColumnStart: "2",
                    gridColumnEnd: "3",
                    gridRowStart: "2",
                    gridRowEnd: "3",
                  },
                  content: (() => {
                    switch (d) {
                      case 5:
                        return x6(b, { direction: z6(a), color: "#00873d" });
                      case 6:
                        return x6(b, { direction: z6(a), color: "#c8001e" });
                      case 4:
                        return x6(b, { direction: z6(a), color: t6(c, lvc) });
                      default:
                        return x6(b, { direction: z6(a) });
                    }
                  })(),
                },
                d === 5 || d === 6
                  ? {
                      id: "validation",
                      placement: {
                        gridColumnStart: "4",
                        gridColumnEnd: "5",
                        gridRowStart: "2",
                        gridRowEnd: "3",
                        alignSelf: "center",
                      },
                      content: jvc({
                        width: 18,
                        height: 18,
                        he: 1.6,
                        Avb: d === 5,
                        color: d === 5 ? "#00873d" : "#c8001e",
                        backgroundColor: "#ffffff",
                      }),
                    }
                  : void 0,
              ].filter(ob),
            };
          },
          kvc = function (a, b) {
            switch (a) {
              case 0:
                return { type: "color", color: b, ya: 0.92 };
              case 1:
                return { type: "color", color: b, ya: 0.74 };
              case 2:
                return { type: "color", color: b, ya: 0.88 };
              case 3:
                return { type: "color", color: b, ya: 0.74 };
              case 4:
                return { type: "color", color: b, ya: 0.9 };
              case 5:
                return { type: "color", color: "#e3fff0", ya: 0 };
              case 6:
                return { type: "color", color: "#ffd9df", ya: 0 };
              default:
                throw new D(a);
            }
          },
          nvc = function ({
            rR: a,
            direction: b,
            options: c,
            ad: d,
            Ce: e,
            iH: f,
            yz: g,
            lEa: h,
            zs: k,
            x$: l,
            Xpa: m,
            context: n,
          }) {
            return {
              id: "field",
              size: "1fr",
              padding: [16, 20, 10, 20],
              alignSelf: "center",
              content: w6({
                layout: "vertical",
                direction: y6(b),
                gap: 8,
                cells: c.map(({ value: p }) => {
                  var q = p.id === e;
                  const r = d.status === 1,
                    t = p.id === f,
                    v = p.id === g;
                  q =
                    r && l && n.mode !== "edit"
                      ? d.data.xia(p.id)
                        ? 5
                        : q
                        ? 6
                        : 4
                      : n.mode === "edit"
                      ? r && d.data.xia(p.id)
                        ? 5
                        : 4
                      : q
                      ? 1
                      : v
                      ? 3
                      : t
                      ? 2
                      : 0;
                  return {
                    id: p.id,
                    size: "auto",
                    alignSelf: "center",
                    content: {
                      ref: m.option,
                      key: p.id,
                      N: h,
                      Am: () => a?.Yoa?.(p.id),
                      onMouseEnter: () => a?.pka?.(p.id),
                      onMouseLeave: () => a?.qka?.(p.id),
                      onMouseDown: () => a?.nka?.(p.id),
                      onMouseUp: () => a?.rka?.(p.id),
                      ...mvc({ direction: b, mEa: p.label, zs: k, state: q }),
                    },
                  };
                }),
              }),
            };
          },
          ovc = function ({
            direction: a,
            text: b,
            LV: c,
            MV: d,
            rR: e,
            fontSize: f,
            fontFamily: g,
            fontWeight: h,
            fontStyle: k,
          }) {
            const l = u6.includes(c),
              { h: m, s: n, ma: p } = __c.Fs(c);
            var q = new __c.xs(m, n, p < 10 ? p + 6 : p - 6);
            q = __c.Gs(q);
            var r = new __c.xs(m, n, p < 10 ? p + 10 : p - 10);
            r = __c.Gs(r);
            return {
              id: "submit",
              size: "auto",
              padding: [0, 20],
              content: Vuc({
                direction: y6(a),
                Am: e?.submit,
                onMouseEnter: e?.CCa,
                onMouseLeave: e?.DCa,
                onMouseDown: e?.BCa,
                onMouseUp: e?.ECa,
                background: {
                  type: "color",
                  color: d === 2 ? r : d === 1 ? q : c,
                  ya: e?.submit ? (l ? 0.1 : void 0) : 0.6,
                },
                N: 24,
                padding: 12,
                content: x6(b, {
                  direction: z6(a),
                  "font-size": f,
                  "font-family": g,
                  "font-weight": h,
                  "font-style": k,
                }),
              }),
            };
          },
          pvc = function ({
            rR: a,
            direction: b,
            messages: c,
            mx: d,
            sp: e,
            status: f,
            ad: g,
            Ce: h,
            backgroundColor: k,
            x$: l,
            JT: m,
            d5: n,
            fontFamily: p,
            fontWeight: q,
            fontStyle: r,
          }) {
            if (!l || !g || !h)
              return (
                (h = e === k ? t6(e, u6) : e),
                (g =
                  g?.status === 1
                    ? g.data.KT?.type === "ANON"
                      ? c.pqa()
                      : c.oqa()
                    : void 0),
                [
                  ovc({
                    direction: b,
                    text: d,
                    LV: h,
                    MV: m,
                    rR: a,
                    fontSize: n.label,
                    fontFamily: p,
                    fontWeight: q,
                    fontStyle: r,
                  }),
                  {
                    id: "quiz_status",
                    size: "auto",
                    padding: [8, 20, 10, 20],
                    content: fvc({
                      status: f,
                      statusMessage: g,
                      messages: c,
                      direction: b,
                      backgroundColor: k,
                      fontSize: n.message,
                      fontFamily: p,
                    }),
                  },
                ]
              );
            a = t6(k, u6);
            return [
              {
                id: "quiz_results_footer",
                size: "auto",
                padding: [20, 20, 24, 20],
                content: w6({
                  layout: "vertical",
                  direction: y6(b),
                  cells: [
                    {
                      id: "quiz_result",
                      size: "auto",
                      content: {
                        type: "text",
                        aF: 0,
                        fontFamily: p,
                        text: g.data.xia(h) ? c.dSa() : c.GYa(),
                        fontSize: n.label,
                        fontWeight: "bold",
                        textAlign: "center",
                        direction: z6(b),
                        color: a,
                      },
                    },
                    {
                      id: "quiz_message",
                      size: "auto",
                      content: {
                        type: "text",
                        aF: 0,
                        fontFamily: p,
                        text: c.S6a(),
                        fontSize: n.message,
                        ya: 0.2,
                        textAlign: "center",
                        direction: z6(b),
                        color: a,
                      },
                    },
                  ],
                }),
              },
            ];
          },
          rvc = function (a, b, c, d, e, f, g, h) {
            const k = c.pf;
            c = c.Pk;
            var l = a.us;
            a = a.As;
            b = b.border;
            const m = b.e7a,
              n = k.direction;
            var p = k.fields.first()?.value;
            if (!p || p.type !== "select" || !l || !a)
              return {
                ...w6({
                  layout: "vertical",
                  direction: y6(n),
                  background: { type: "color", color: "#ffffff" },
                  cells: [],
                }),
                minWidth: k.minWidth,
                minHeight: k.minHeight,
              };
            const q = v6(l),
              r = v6(a),
              t = d.JX(),
              v = c.ad.status === 1 && c.ad,
              w = d.Oya() && v && t === 0;
            var z = p.options.first()?.value.label.text,
              A = (O) => O?.values().next().value,
              C =
                z?.stream.ei("font-size")["font-size"]?.values().next().value ||
                16;
            const B = A(z?.stream.ei("font-family")["font-family"]) || k.IW,
              F =
                A(z?.stream.ei("font-weight")["font-weight"]) ||
                __c.Hf.Wb["font-weight"];
            z =
              A(z?.stream.ei("font-style")["font-style"]) ||
              __c.Hf.Wb["font-style"];
            A = C * qvc;
            C *= hvc;
            d = d.eza();
            var I = k.minWidth,
              L = k.minHeight,
              N = y6(n);
            l = k.sD
              ? void 0
              : Xuc({ direction: n, text: p.label, background: l });
            p = nvc({
              rR: Wuc(e),
              direction: n,
              options: p.options,
              ad: c.ad,
              iH: c.iH,
              yz: c.yz,
              Ce: d.Ce,
              lEa: p.N,
              zs: r,
              x$: w,
              Xpa: g,
              context: h,
            });
            e = e
              ? {
                  submit: e.submit,
                  CCa: e.CCa,
                  DCa: e.DCa,
                  BCa: e.BCa,
                  ECa: e.ECa,
                }
              : void 0;
            return {
              minWidth: I,
              minHeight: L,
              ...w6({
                layout: "vertical",
                direction: N,
                background: a,
                N: m,
                border: b,
                cells: [
                  l,
                  p,
                  ...pvc({
                    rR: e,
                    direction: n,
                    messages: f,
                    mx: k.footer.label,
                    sp: q,
                    status: t,
                    x$: w && h.mode !== "edit",
                    ad: v ? v : void 0,
                    Ce: d.Ce,
                    backgroundColor: r,
                    JT: c.JT,
                    d5: { label: A, message: C },
                    fontFamily: B,
                    fontWeight: F,
                    fontStyle: z,
                  }),
                ].filter(ob),
              }),
              ref: g.root,
            };
          },
          svc = class {
            constructor() {
              this.type = "layout";
            }
          },
          B6 = __webpack_require__(186901),
          C6 = B6.EW,
          s6 = B6.h5,
          tvc = B6.mJ,
          uvc = B6.sH,
          vvc = B6.XI;
        var wvc = class {
            static D(a) {
              __c.M(a, { ZTa: C6 });
            }
            get ZTa() {
              const a = [];
              for (const b of this.list.value) {
                const c = n6(this, b);
                if (c === void 0)
                  throw new Luc(
                    "undefined value found when deserializing list."
                  );
                a.push(c);
              }
              return a;
            }
            count() {
              return this.list.value.count();
            }
            toArray() {
              return this.ZTa.map(({ value: a }) => a);
            }
            first(a) {
              const b = this.list.value.first(
                a ? (c) => a(n6(this, c)) : void 0
              );
              if (b != null) return n6(this, b);
            }
            last(a) {
              const b = this.list.value.last(
                a ? (c) => a(n6(this, c)) : void 0
              );
              if (b != null) return n6(this, b);
            }
            next(a, b) {
              var c = b ? (d) => b(n6(this, d)) : void 0;
              a = o6(this, a);
              c = this.list.value.next(a, c);
              if (c != null) return n6(this, c);
            }
            previous(a, b) {
              var c = b ? (d) => b(n6(this, d)) : void 0;
              a = o6(this, a);
              c = this.list.value.previous(a, c);
              if (c != null) return n6(this, c);
            }
            map(a) {
              return this.list.value.map((b, c) => a(n6(this, b), c));
            }
            filter(a) {
              return this.list.value
                .filter((b, c) => a(n6(this, b), c))
                .map((b) => n6(this, b));
            }
            forEach(a) {
              return this.list.value.forEach((b, c) => a(n6(this, b), c));
            }
            some(a) {
              return this.list.value.some((b) => a(n6(this, b)));
            }
            constructor(a, b) {
              this.qn = b;
              this.jbb = (wvc.D(this), new WeakMap());
              this.bbb = new WeakMap();
              __c.x(a.type === "list");
              this.list = a;
            }
          },
          xvc = class extends wvc {
            replace(a, b) {
              a = o6(this, a);
              b = this.list.value.replace(a, this.qn.Zk(b));
              return n6(this, b);
            }
            qH(a, b) {
              a = a != null ? o6(this, a) : void 0;
              b = this.list.value.qH(a, this.qn.Zk(b));
              return n6(this, b);
            }
            CD(a, b) {
              a = a != null ? o6(this, a) : void 0;
              return this.list.value
                .CD(
                  a,
                  b.map((c) => this.qn.Zk(c))
                )
                .map((c) => n6(this, c));
            }
            insertBefore(a, b) {
              a = a != null ? o6(this, a) : void 0;
              b = this.list.value.insertBefore(a, this.qn.Zk(b));
              return n6(this, b);
            }
            append(a) {
              a = this.list.value.append(this.qn.Zk(a));
              return n6(this, a);
            }
            prepend(a) {
              a = this.list.value.prepend(this.qn.Zk(a));
              return n6(this, a);
            }
            delete(a) {
              a = o6(this, a);
              this.list.value.delete(a);
            }
            Uz(a) {
              this.list.value.Uz(a ? (b) => a(n6(this, b)) : void 0);
            }
            Aq(a, b) {
              a = a == null ? void 0 : o6(this, a);
              b = o6(this, b);
              this.list.value.Aq(a, b);
            }
          };
        var E6 = class {
            static string(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (c?.type !== "string")
                  throw d === "toWidgetData"
                    ? new p6("string", c)
                    : new q6("string", c);
                return c.value;
              };
              return {
                Zk: (c) => ({ type: "string", value: c }),
                Ss: (c) => b(c, "toWidgetState"),
                Rs: (c) => b(c, "toWidgetData"),
                Du: (c) => b(c, "toWidgetData"),
              };
            }
            static literal(a, b) {
              if (a.length === 0)
                throw new D6(
                  "At least one value must be provided for literal types."
                );
              const c = new Set(a),
                d = (e, f) => {
                  if (e == null && b != null) return b;
                  if (e?.type !== "string" || !c.has(e.value))
                    throw f === "toWidgetData"
                      ? new p6("literal", e)
                      : new q6("literal", e);
                  return e.value;
                };
              return {
                Zk: (e) => ({ type: "string", value: e }),
                Ss: (e) => d(e, "toWidgetState"),
                Rs: (e) => d(e, "toWidgetData"),
                Du: (e) => d(e, "toWidgetData"),
              };
            }
            static integer(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (
                  c?.type !== "int32" ||
                  !Number.isFinite(c.value) ||
                  !Number.isInteger(c.value)
                )
                  throw d === "toWidgetData"
                    ? new p6("integer", c)
                    : new q6("integer", c);
                return c.value;
              };
              return {
                Zk: (c) => {
                  if (!Number.isFinite(c) || !Number.isInteger(c))
                    throw new yvc("integer", c);
                  return { type: "int32", value: c };
                },
                Ss: (c) => b(c, "toWidgetState"),
                Rs: (c) => b(c, "toWidgetData"),
                Du: (c) => b(c, "toWidgetData"),
              };
            }
            static double(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (c?.type !== "double" || !Number.isFinite(c.value))
                  throw d === "toWidgetData"
                    ? new p6("double", c)
                    : new q6("double", c);
                return c.value;
              };
              return {
                Zk: (c) => {
                  if (!Number.isFinite(c)) throw new yvc("double", c);
                  return { type: "double", value: c };
                },
                Ss: (c) => b(c, "toWidgetState"),
                Rs: (c) => b(c, "toWidgetData"),
                Du: (c) => b(c, "toWidgetData"),
              };
            }
            static Rg(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (c?.type !== "boolean")
                  throw d === "toWidgetData"
                    ? new p6("boolean", c)
                    : new q6("boolean", c);
                return c.value;
              };
              return {
                Zk: (c) => ({ type: "boolean", value: c }),
                Ss: (c) => b(c, "toWidgetState"),
                Rs: (c) => b(c, "toWidgetData"),
                Du: (c) => b(c, "toWidgetData"),
              };
            }
            static fill() {
              const a = (b) => {
                if (b?.type !== "fill") throw new p6("fill", b);
                return b.value;
              };
              return {
                Zk: (b) => ({ type: "fill", value: b }),
                Ss: (b) => {
                  if (b?.type !== "fill") throw new q6("fill", b);
                  return b.value;
                },
                Rs: a,
                Du: a,
              };
            }
            static stroke() {
              const a = (b) => {
                if (b?.type !== "stroke") throw new p6("stroke", b);
                return b.value;
              };
              return {
                Zk: (b) => ({ type: "stroke", value: b }),
                Ss: (b) => {
                  if (b?.type !== "stroke") throw new q6("stroke", b);
                  return b.value;
                },
                Rs: a,
                Du: a,
              };
            }
            static Pb(a) {
              const b = new Set();
              for (const d of Object.keys(a)) {
                const [e] = a[d];
                if (b.has(e))
                  throw new D6(
                    `Duplicate serialized keys "${e}" found in record schema.`
                  );
                b.add(e);
              }
              const c = (d, e) => {
                if (e?.type !== "dict") throw new p6("record", e);
                const f = {};
                for (const g of Object.keys(a)) {
                  const [h, k] = a[g],
                    l = C6(
                      () => {
                        const m = e.value.get(h);
                        return k.Rs(m);
                      },
                      { keepAlive: !0 }
                    );
                  Object.defineProperty(f, g, {
                    get() {
                      return l.get();
                    },
                    set(m) {
                      d !== "readonly" &&
                        ((m = k.Zk(m)),
                        m == null ? e.value.delete(h) : e.value.set(h, m));
                    },
                    enumerable: !0,
                  });
                }
                return f;
              };
              return {
                Zk: (d) => {
                  const e = {};
                  for (const f of Object.keys(a)) {
                    const [g, h] = a[f],
                      k = h.Zk(d[f]);
                    k != null && (e[g] = k);
                  }
                  return { type: "dict", value: new Map(Object.entries(e)) };
                },
                Ss: (d) => {
                  if (d?.type !== "dict") throw new q6("record", d);
                  const e = {};
                  for (const f of Object.keys(a)) {
                    const [g, h] = a[f],
                      k = h.Ss(d.value.get(g));
                    k != null && (e[f] = k);
                  }
                  return e;
                },
                Rs: (d) => c("editable", d),
                Du: (d) => c("readonly", d),
                Db: (d) => E6.Pb({ ...a, ...d }),
              };
            }
            static list(a) {
              return {
                Zk: (b) => ({ type: "list", value: b.map((c) => a.Zk(c)) }),
                Ss: (b) => {
                  if (b?.type !== "list") throw new q6("list", b);
                  return b.value.filter(ob).map((c) => a.Ss(c));
                },
                Rs: (b) => {
                  if (b?.type !== "list") throw new p6("list", b);
                  return new xvc(b, a);
                },
                Du: (b) => {
                  if (b?.type !== "list") throw new p6("list", b);
                  return new wvc(b, a);
                },
              };
            }
            static optional(a) {
              return {
                Zk: (b) => {
                  if (b != null) return a.Zk(b);
                },
                Ss: (b) => {
                  if (b != null) return a.Ss(b);
                },
                Rs: (b) => {
                  if (b != null) return a.Rs(b);
                },
                Du: (b) => {
                  if (b != null) return a.Du(b);
                },
              };
            }
            static union(a, b) {
              const c = new Set(Object.keys(a)),
                d = (e) => {
                  if (e?.type !== "dict") throw new p6("union", e);
                  const f = e.value.get("k")?.value,
                    g = e.value.get("v");
                  if (
                    f == null ||
                    g == null ||
                    typeof f !== "string" ||
                    !c.has(f)
                  )
                    throw new p6("union", e);
                  return { qda: a[f], rda: g };
                };
              return {
                Zk: (e) => {
                  const f = b(e);
                  return {
                    type: "dict",
                    value: new Map([
                      ["k", { type: "string", value: f }],
                      ["v", a[f].Zk(e)],
                    ]),
                  };
                },
                Ss: (e) => {
                  if (e?.type !== "dict") throw new q6("union", e);
                  const f = e.value.get("k")?.value,
                    g = e.value.get("v");
                  if (
                    f == null ||
                    g == null ||
                    typeof f !== "string" ||
                    !c.has(f)
                  )
                    throw new q6("union", e);
                  const { qda: h, rda: k } = { qda: a[f], rda: g };
                  return h.Ss(k);
                },
                Rs: (e) => {
                  const { qda: f, rda: g } = d(e);
                  return f.Rs(g);
                },
                Du: (e) => {
                  const { qda: f, rda: g } = d(e);
                  return f.Du(g);
                },
              };
            }
          },
          D6 = class extends Error {
            constructor(a) {
              super(a);
              this.name = "SchemaError";
            }
          },
          Luc = class extends D6 {
            constructor(a) {
              super(`ListError: ${a}`);
            }
          },
          p6 = class extends D6 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of widget data`);
            }
          },
          q6 = class extends D6 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of widget state`);
            }
          },
          yvc = class extends D6 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of document state`);
            }
          };
        var r6 = {
            Ce: void 0,
            QI: void 0,
            nFa: void 0,
            results: { fields: new Map() },
          },
          zvc = {
            ad: { status: 2 },
            HB: new Map(),
            JT: 0,
            iH: void 0,
            yz: void 0,
            Dza: !1,
            Jub: "unchecked",
            gy: !1,
            Mk: !1,
          };
        var Avc = E6.Pb({
            type: ["t", E6.literal(["text2"], "text2"), "readonly"],
            text: ["te", Muc()],
          }),
          Bvc = E6.union({ text2: Avc }, (a) => a.type),
          Cvc = E6.Pb({ id: ["i", E6.string("")], label: ["l", Bvc] }),
          Dvc = E6.list(Cvc),
          Evc = E6.list(E6.string("")),
          Fvc = E6.Pb({
            id: ["i", E6.string("")],
            label: ["l", Bvc],
            hja: ["tl", E6.literal(["c", "u"], "c")],
            required: ["rq", E6.Rg(!1)],
            N: ["c", E6.double(0)],
          }),
          Gvc = E6.Pb({ type: ["t", E6.literal(["r"], "r"), "readonly"] }),
          Hvc = E6.Pb({ type: ["t", E6.literal(["p"], "p"), "readonly"] }),
          Ivc = E6.Pb({ type: ["t", E6.literal(["q"], "q"), "readonly"] }),
          Jvc = E6.union({ r: Gvc, p: Hvc, q: Ivc }, (a) => a.type),
          Kvc = Fvc.Db({
            type: ["t", E6.literal(["select"], "select"), "readonly"],
            variant: ["v", E6.optional(Jvc)],
            options: ["o", Dvc],
            PY: ["m", E6.optional(E6.integer(1))],
            g3: ["co", Evc],
          }),
          Lvc = E6.Pb({ type: ["t", E6.literal(["e"], "e"), "readonly"] }),
          Mvc = E6.Pb({
            type: ["t", E6.literal(["f"], "f"), "readonly"],
            jM: ["n", E6.integer(1)],
          }),
          Nvc = E6.union({ e: Lvc, f: Mvc }, (a) => a.type),
          Ovc = Fvc.Db({
            type: ["t", E6.literal(["text"], "text"), "readonly"],
            placeholder: ["p", E6.string("")],
            variant: ["v", Nvc],
          }),
          Pvc = E6.Pb({ type: ["t", E6.literal(["a"], "a"), "readonly"] }),
          Qvc = E6.Pb({ type: ["t", E6.literal(["b"], "b"), "readonly"] }),
          Rvc = E6.Pb({ type: ["t", E6.literal(["c"], "c"), "readonly"] }),
          Svc = E6.Pb({ type: ["t", E6.literal(["d"], "d"), "readonly"] }),
          Tvc = E6.union({ a: Pvc, b: Qvc, c: Rvc, d: Svc }, (a) => a.type),
          Uvc = Fvc.Db({
            type: ["t", E6.literal(["number"], "number"), "readonly"],
            variant: ["v", Tvc],
            min: ["a", E6.optional(E6.double())],
            max: ["b", E6.optional(E6.double())],
          }),
          Vvc = E6.union(
            { select: Kvc, text: Ovc, number: Uvc },
            (a) => a.type
          ),
          Wvc = E6.list(Vvc),
          Xvc = E6.Pb({ label: ["l", Bvc] }),
          Yvc = E6.Pb({}),
          Zvc = E6.Pb({
            label: ["A", Muc()],
            hja: ["tl", E6.literal(["c", "u"])],
          }),
          $vc = E6.literal(["l", "r"], "l"),
          awc = E6.Pb({
            minHeight: ["mh", E6.double(1)],
            minWidth: ["mw", E6.double(1)],
            type: ["t", E6.literal(["poll", "quiz"], "poll"), "readonly"],
            id: ["i", E6.string()],
            Ji: ["s", E6.string()],
            Rq: ["a", E6.optional(E6.string())],
            direction: ["r", $vc],
            IW: ["d", E6.string("")],
            us: ["pf", E6.fill()],
            As: ["sf", E6.fill()],
            border: ["b", E6.stroke()],
            N: ["c", E6.double(0)],
            sD: ["hh", E6.Rg(!1)],
            wIa: ["z", E6.Rg(!0)],
            iTa: ["h", E6.optional(Yvc)],
            header: ["j", E6.optional(Zvc)],
            fields: ["f", Wvc],
            footer: ["fo", E6.optional(Xvc)],
          }),
          bwc = E6.union({ poll: awc, quiz: awc }, (a) => a.type);
        var Quc = Symbol("UNABLE_TO_SUBMIT");
        var cwc = {
            resultsPercentage: 0,
            yourNameWillBeShared: 1,
            incorrectLabel: 2,
            responseSaved: 3,
            submitting: 4,
            loading: 5,
            numVotes: 6,
            offline: 7,
            yourNameWontBeShared: 8,
            somethingWentWrong: 9,
            correctLabel: 10,
            live: 11,
          },
          dwc = class {
            static D(a) {
              __c.M(a, { eJ: uvc.ref });
            }
            async hAa(a) {
              const b = await a;
              s6(() => {
                const c = JSON.parse(b),
                  d = new Map();
                for (const e in c) d.set(e, Object.values(c[e]));
                this.eJ = d;
              });
            }
            Lt(a) {
              return (this.eJ?.get(this.document.language || "en") || [])[
                cwc[a]
              ];
            }
            zIa() {
              return this.Lt("somethingWentWrong") || K("ElTceA");
            }
            MBa() {
              return this.Lt("live") || K("/iw6+Q");
            }
            dSa() {
              return this.Lt("correctLabel") || K("i3mNPA");
            }
            GYa() {
              return this.Lt("incorrectLabel") || K("As1GTA");
            }
            S6a() {
              return this.Lt("responseSaved") || K("xSH8Og");
            }
            bDa(a) {
              const b = this.Lt("numVotes");
              return b
                ? __c.U2(b, [a], this.document.language)
                : __c.rb("6QpLYA", [a]);
            }
            T6a(a) {
              const b = this.Lt("resultsPercentage");
              return b
                ? __c.U2(b, [a], this.document.language)
                : __c.rb("sUWUOA", [a]);
            }
            offline() {
              return this.Lt("offline") || K("nFbxIQ");
            }
            loading() {
              return this.Lt("loading") || K("2Q9Q+A");
            }
            dJa() {
              return this.Lt("submitting") || K("wutQEA");
            }
            pqa() {
              return this.Lt("yourNameWontBeShared") || K("Gzs/9g");
            }
            oqa() {
              return this.Lt("yourNameWillBeShared") || K("WjcAyg");
            }
            constructor(a, b) {
              this.document = a;
              this.eJ = (dwc.D(this), void 0);
              this.hAa(b);
            }
          };
        var fwc = class extends dwc {
          constructor(a) {
            const b = __webpack_require__
              .me(282643)
              .then(() => __c.ewc)
              .then(({ Raa: c }) => c);
            super(a, b);
          }
        };
        var gwc = class {
          static D(a) {
            __c.M(a, { border: C6 });
          }
          get border() {
            const a = this.Sz.pf;
            a.border.weight &&
              !a.border.color &&
              this.J &&
              this.J.error(
                "Form widget borders cannot have weight without a color"
              );
            return { weight: a.border.weight, color: a.border.color, e7a: a.N };
          }
          constructor(a, b) {
            this.Sz = a;
            this.J = b;
            gwc.D(this);
          }
        };
        var hwc = class {
          static D(a) {
            __c.M(a, { us: C6, As: C6, sp: C6, zs: C6 });
          }
          get us() {
            const a = this.Sz.pf.us.color,
              b = this.Sz.pf.us.Va;
            if (a) return { type: "color", color: a };
            if (b.ref) return { type: "gradient", Va: b.ref };
          }
          get As() {
            const a = this.Sz.pf.As.color,
              b = this.Sz.pf.As.Va;
            if (a) return { type: "color", color: a };
            if (b.ref) return { type: "gradient", Va: b.ref };
          }
          get sp() {
            if (!this.us) return "#000000";
            switch (this.us.type) {
              case "color":
                return this.us.color;
              case "gradient":
                return this.us.Va.Rh[0].color;
              default:
                throw new D(this.us);
            }
          }
          get zs() {
            if (!this.As) return "#000000";
            switch (this.As.type) {
              case "color":
                return this.As.color;
              case "gradient":
                return this.As.Va.Rh[0].color;
              default:
                throw new D(this.As);
            }
          }
          constructor(a) {
            this.Sz = a;
            hwc.D(this);
          }
        };
        var u6 = ["#000000", "#ffffff"];
        var Zuc = 9 * __c.vV,
          lvc = ["#cccccc", "#333333"],
          bvc = ["#00d200", "#00ed00"],
          cvc = ["#ffae00", "#ffc654"],
          dvc = ["#545454", "#c8c8c8"],
          evc = ["#e53935", "#ef5350"],
          qvc = (14 * __c.vV) / 16,
          hvc = (9 * __c.vV) / 16;
        var A6 = (a, b, c, d, e, f) =>
          __c.Ti.yb()
            .attrs({
              "font-family": f,
              "font-size": e,
              leading: void 0,
              "text-align": "center",
              direction: z6(b),
              color: c,
            })
            .ob("\u25cf ")
            .attrs({
              "font-family": f,
              "font-size": e,
              color: d,
              "font-kerning": "normal",
              "font-feature-liga": "on",
              "font-feature-clig": "on",
              "font-feature-calt": "on",
            })
            .ob(a)
            .hp()
            .build();
        var iwc;
        iwc = ({ eAb: a, Nmb: b }) => {
          const c = b.status !== 1 && a.status === 1;
          return (
            (a.status === 1 && b.status === 1 && a.data.Qua !== b.data.Qua) || c
          );
        };
        __c.zBa = {
          kmb: function (a, b, c, d, e, f, g, h, k) {
            g.Xf("forms");
            const { prb: l } = d ?? {},
              m = h.Cv("ui.rendering.form"),
              n = { root: new svc(), option: new svc() },
              p = new fwc(b);
            return {
              dAa: zvc,
              qn: bwc,
              kDa: ({ Sz: q }) => {
                if (l && a) {
                  var r,
                    t = tvc(
                      () => q.pf.id,
                      () => {
                        const w = q.pf.type,
                          z = l.get({ GQ: q.pf.id, Zf: a, J4: c });
                        r?.unsubscribe();
                        w === "poll" &&
                          (r = z
                            .jxb({ Qsb: () => q.pf.Ji })
                            .subscribe(({ results: A, Ji: C }) => {
                              s6(() => {
                                const B = new Map(q.Pk.HB);
                                B.set(C, { ...(B.get(C) ?? r6), results: A });
                                q.rn({ HB: B });
                              });
                            }));
                        z.getSettings({ OXb: () => q.pf.Rq }).subscribe((A) => {
                          const C = q.Pk.ad;
                          let B = A;
                          if (
                            A.status === 1 &&
                            !q.pf.Rq &&
                            q.pf.type === "quiz"
                          ) {
                            const F = q.pf.fields.first()?.value,
                              I = F?.type === "select" ? F.g3.toArray() : [];
                            B = {
                              status: 1,
                              data: {
                                uK: new Map(
                                  q.pf.fields
                                    .filter(
                                      ({ value: L }) => L.type === "select"
                                    )
                                    .map(({ value: L }) => [
                                      L.id,
                                      L.g3.toArray(),
                                    ])
                                ),
                                xia: (L) => I.includes(L),
                                Qua: A.data.Qua,
                                KT: A.data.KT,
                              },
                            };
                          }
                          s6(() => {
                            q.rn({ ad: B });
                          });
                          iwc({ eAb: B, Nmb: C }) &&
                            z.Fqb({ Ji: q.pf.Ji, Rq: q.pf.Rq }).then(
                              vvc((F) => {
                                const I = q.pf.Ji;
                                if (F.ok) {
                                  var L = new Map(q.Pk.HB);
                                  if (F.value) {
                                    F = F.value;
                                    const N =
                                      q.pf.fields.first()?.value.id ?? "";
                                    F = F.Gsa.get(N);
                                    F = F?.type === 0 ? F.Ce : void 0;
                                    L.set(I, {
                                      ...(L.get(I) ?? r6),
                                      Ce: F,
                                      QI: F,
                                    });
                                  } else
                                    L.set(I, {
                                      ...(L.get(I) ?? r6),
                                      Ce: void 0,
                                      QI: void 0,
                                    });
                                  q.rn({ HB: L, yz: void 0 });
                                }
                              })
                            );
                        });
                      },
                      { fireImmediately: !0 }
                    ),
                    v = tvc(
                      () => k?.status === 2,
                      vvc((w) => {
                        q.rn({ Mk: w });
                      }),
                      { fireImmediately: !0 }
                    );
                  return () => {
                    r?.unsubscribe();
                    t();
                    v();
                  };
                }
              },
              render: (q, r) => {
                const t = Nuc(q);
                if (l && a) {
                  var v = l.get({ GQ: q.pf.id, Zf: a, J4: c });
                  v = Ruc(q, t, v, e, f, m);
                }
                a: {
                  const w = q.pf,
                    z = new hwc(q),
                    A = new gwc(q);
                  switch (w.type) {
                    case "poll":
                      q = ivc(z, A, q, t, v, p, n);
                      break a;
                    case "quiz":
                      q = rvc(z, A, q, t, v, p, n, r);
                      break a;
                    default:
                      throw new D(w.type);
                  }
                }
                return q;
              },
              Xpa: n,
            };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/4850a335a97e09f6.js.map
