(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [41990],
  {
    /***/ 796909: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(131662);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var D = __c.D;
        var x = __c.x;
        var Yyc = function (a, b) {
            var c = __c.$m(b);
            a = a.Pc.uea(b);
            b = c.ua;
            const d = c.br;
            c = c.br;
            try {
              a.Rd(b, d, c, !0, !1);
            } finally {
              a.destroy();
            }
          },
          $yc = function (a, b, c, d) {
            c = new Zyc(c, d);
            x(a.count() === 1, "Only single widget root element is supported");
            a = a.first();
            x(
              a != null && a.type === "layout",
              `Unexpected widget root found: ${a?.type}`
            );
            c.cqa(a, b);
          },
          bzc = function (a) {
            return {
              ...__c.DAb,
              ...i7,
              top: 0,
              left: 0,
              width: a.width,
              height: a.height,
              viewBox: {
                top: 0,
                left: 0,
                width: a.Ypa.width,
                height: a.Ypa.height,
              },
              gb: a.gb.map(azc),
            };
          },
          czc = function (a) {
            switch (a.aF) {
              case 0:
                var b = __c.Ti.yb().attrs({
                  "font-size": a.fontSize,
                  leading: a.lineHeight ? a.lineHeight * 1e3 : void 0,
                  "text-align": a.textAlign || "start",
                  "font-weight": a.fontWeight,
                  "font-family": a.fontFamily,
                  "font-kerning": "normal",
                  "font-feature-liga": "on",
                  "font-feature-clig": "on",
                  "font-feature-calt": "on",
                  direction: a.direction,
                });
                a.color && b.Qe("color", a.color);
                b = b
                  .ob(a.text.endsWith("\n") ? a.text : `${a.text}\n`)
                  .build();
                return {
                  ...__c.HG,
                  ...j7,
                  ...i7,
                  ya: a.ya ?? 0,
                  text: b,
                  Of: 2,
                };
              case 1:
                return (
                  (b = a.text), { ...__c.HG, ...j7, ...i7, text: b, Of: 2 }
                );
              default:
                throw new D(a);
            }
          },
          hzc = function ({ content: a, fill: b, border: c, N: d }) {
            b = { ...__c.oAb, fill: dzc(b), border: ezc(c), N: fzc(d) };
            switch (a.type) {
              case "shape":
                return { ...b, element: bzc(a) };
              case "text":
                return { ...b, element: czc(a) };
              case "layout":
                return { ...b, element: gzc(a) };
              default:
                throw new D(a);
            }
          },
          gzc = function ({
            cells: a,
            border: b,
            fill: c,
            N: d,
            gridTemplateColumns: e,
            gridTemplateRows: f,
            columnGap: g,
            rowGap: h,
          }) {
            return {
              ...__c.pAb,
              ...j7,
              ...i7,
              I: j7.width,
              P: j7.height,
              fill: dzc(c),
              border: ezc(b),
              direction: 1,
              N: fzc(d),
              cells: new Map(a.map((k) => [k.id, hzc(k)])),
              behavior: {
                rules: [
                  {
                    xh: void 0,
                    grid: {
                      gridTemplateColumns: e,
                      gridTemplateRows: f,
                      columnGap: g ?? 0,
                      rowGap: h ?? 0,
                      Hh: izc(a),
                    },
                  },
                ],
              },
              Qc: void 0,
            };
          },
          izc = function (a) {
            return new Map(a.map((b) => [b.id, jzc(b)]));
          },
          jzc = function (a) {
            const b = a.placement.padding;
            return {
              ...__c.uDa,
              ...a.placement,
              alignSelf: "center",
              padding: {
                ...__c.bS,
                ...(b != null ? (typeof b === "number" ? { all: b } : b) : {}),
              },
            };
          },
          ezc = function (a) {
            const b = a?.color ?? "#000000";
            return {
              ...__c.Tw,
              all: a
                ? { ...__c.QR, weight: a.weight ?? 1, color: b, qe: !0 }
                : void 0,
            };
          },
          fzc = function (a) {
            return {
              ...__c.aS,
              ...(a != null ? (typeof a === "number" ? { all: a } : a) : {}),
            };
          },
          azc = function (a) {
            return {
              ...__c.EAb,
              ...a,
              fill: dzc(a.fill),
              stroke: kzc(a.stroke),
            };
          },
          kzc = function (a) {
            return a ? { ...__c.QR, color: a.color, weight: a.weight } : void 0;
          },
          dzc = function (a) {
            const b = { ...__c.qD, ya: a?.ya ?? 0 };
            switch (a?.type) {
              case "color":
                return { ...b, color: a.color };
              case "gradient":
                return { ...b, Va: a.Va };
              case void 0:
                return b;
              default:
                throw new D(a);
            }
          },
          rzc = function (a, b) {
            const c = new Map(b.cells.map((d) => [d.id, d]));
            lzc(
              a.cells,
              c,
              (d, e) => {
                let f = !1;
                mzc(d.element, e.content, () => {
                  a.cells.delete(e.id);
                  a.cells.set(e.id, hzc(e));
                  f = !0;
                });
                f ||
                  (nzc(d.fill, e.fill), ozc(d.border, e.border), pzc(d.N, e.N));
              },
              (d) => hzc(d)
            );
            qzc(a.behavior, b, c);
            nzc(a.fill, b.fill);
            pzc(a.N, b.N);
            ozc(a.border, b.border);
            a.ya = b.ya ?? 0;
          },
          qzc = function (a, b, c) {
            szc(
              a.rules,
              [b],
              (d) => {
                tzc(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                  (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                tzc(d.grid.gridTemplateRows, b.gridTemplateRows) ||
                  (d.grid.gridTemplateRows = b.gridTemplateRows);
                d.grid.columnGap = b.columnGap ?? 0;
                d.grid.rowGap = b.rowGap ?? 0;
                lzc(
                  d.grid.Hh,
                  c,
                  (e, f) => {
                    const g = f.placement.padding,
                      h = f.placement.gridColumnEnd,
                      k = f.placement.gridRowStart,
                      l = f.placement.gridRowEnd,
                      m = f.placement.alignSelf;
                    e.gridColumnStart = f.placement.gridColumnStart;
                    e.gridColumnEnd = h;
                    e.gridRowStart = k;
                    e.gridRowEnd = l;
                    typeof g === "number" && e.padding.all !== g
                      ? (e.padding.all = g)
                      : typeof g !== "number" &&
                        ((e.padding.pa = g?.pa),
                        (e.padding.Ca = g?.Ca),
                        (e.padding.qa = g?.qa),
                        (e.padding.La = g?.La));
                    e.alignSelf = m;
                  },
                  (e) => jzc(e)
                );
              },
              (d) => ({
                xh: void 0,
                grid: {
                  gridTemplateColumns: b.gridTemplateColumns,
                  gridTemplateRows: b.gridTemplateRows,
                  columnGap: b.columnGap ?? 0,
                  rowGap: b.rowGap ?? 0,
                  Hh: izc(d.cells),
                },
              })
            );
          },
          uzc = function (a, b) {
            szc(
              a.gb,
              b.gb,
              (e, f) => {
                e.d = f.d;
                nzc(e.fill, f.fill);
                e.stroke.ref && f.stroke
                  ? ((e = e.stroke.ref),
                    (f = f.stroke),
                    (e.color = f.color),
                    (e.weight = f.weight))
                  : e.stroke.set(kzc(f.stroke));
              },
              (e) => azc(e)
            );
            const { viewBox: c, width: d } = bzc(b);
            a.width = d;
            __c.$m(a.viewBox).equals(__c.$m(c)) || (a.viewBox = c);
          },
          mzc = function (a, b, c) {
            switch (b.type) {
              case "shape":
                a.type === "shape" ? uzc(a, b) : c();
                break;
              case "text":
                (a.type === "text" &&
                  __c.Ti.domain.oc(__c.Ti.snapshot(a.text), czc(b).text)) ||
                  c();
                break;
              case "layout":
                a.type === "layout" ? rzc(a, b) : c();
                break;
              default:
                throw new D(b);
            }
          },
          lzc = function (a, b, c, d) {
            const e = new Set(a.keys());
            for (const [f, g] of b)
              (b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
            e.forEach((f) => a.delete(f));
          },
          szc = function (a, b, c, d) {
            const e = a.toArray();
            for (let f = 0; f < Math.max(e.length, b.length); f++)
              if (f < e.length && f < b.length) c(e[f], b[f]);
              else if (f < e.length && f >= b.length) a.delete(e[f]);
              else if (f >= e.length && f < b.length) {
                const g = d(b[f]);
                a.append(g);
              }
          },
          nzc = function (a, b) {
            switch (b?.type) {
              case "color":
                a.color = b.color;
                a.Va.set(void 0);
                a.ya = b.ya ?? 0;
                break;
              case "gradient":
                if (a.Va.ref && __c.feb.domain.oc(a.Va.ref, b.Va)) break;
                a.color = void 0;
                a.Va.set(b.Va);
                a.ya = b.ya ?? 0;
                break;
              default:
                (a.color = void 0), a.Va.set(void 0);
            }
          },
          pzc = function (a, b) {
            b = fzc(b);
            a.all = b.all;
            a.uC = b.uC;
            a.rC = b.rC;
            a.sC = b.sC;
            a.qC = b.qC;
          },
          ozc = function (a, b) {
            b = ezc(b).all;
            var c;
            if ((c = b))
              (c = a.all.ref),
                (c = !(c && b
                  ? __c.Uw.domain.oc(__c.Uw.snapshot(c), b)
                  : !c && !b));
            c && a.all.set(b);
          },
          tzc = function (a, b) {
            return a.length === b.length && a.every((c) => b.includes(c));
          },
          wzc = function (a, b, c, d) {
            let e = a.x6a.get(b);
            if (e) return e;
            e = {
              Sz: new vzc(c.qn, b, d, c.dAa),
              gPa: void 0,
              S_a: void 0,
              k2a: __c.LW.mode,
            };
            a.x6a.set(b, e);
            return e;
          },
          yzc = function (a, b, c, d, e) {
            e = wzc(a, c, b, e);
            const f = e.Sz,
              g = e.S_a,
              h = e.gPa,
              k = e.k2a;
            c = __c.YQ.snapshot(c);
            const l = a.VB.kza?.(d) || __c.LW;
            (f.Pk === g && xzc.structural(c, h) && l.mode === k) ||
              ((e.gPa = c),
              (e.S_a = f.Pk),
              (e.k2a = l.mode),
              (b = b.render(f, l)),
              a.Izb.update(d, b),
              $yc(
                d,
                b,
                (m, n) => a.lU.uAa.set(m, n),
                (m, n, p) => a.lU.refs.set(m, { ref: n, key: p })
              ));
          },
          Bzc = function (a, b) {
            const c = [],
              d = () => c.forEach((e) => e());
            c.push(a.EAb());
            c.push(
              zzc(
                () => {
                  a: {
                    var e = new Azc();
                    for (const f of b)
                      if ((e.oU(f), e.cya)) {
                        e = e.cya;
                        break a;
                      }
                    e = void 0;
                  }
                  return e && (a.jc.isLoaded(e) || a.vBa.has(e));
                },
                (e) => {
                  if (e) {
                    for (const f of b) x(f.type === "layout"), Yyc(a.Ll, f);
                    d();
                  }
                }
              )
            );
            return d;
          },
          Czc = function (a, b) {
            return {
              xx: ({ Ed: c }) => {
                const { Sz: d } = wzc(a.renderer, c, b, a.TL),
                  e = __c.Pvb.create([]),
                  f = [];
                f.push(Bzc(a.Yqb, e));
                f.push(
                  zzc(
                    () => [a.VB.kza?.(e), __c.YQ.snapshot(c), d.Pk],
                    () => {
                      yzc(a.renderer, b, c, e, a.TL);
                    },
                    { fireImmediately: !0, equals: xzc.structural }
                  )
                );
                const g = b.kDa?.({ Sz: d });
                g && f.push(g);
                return {
                  Ka: e,
                  zm: () => {
                    f.forEach((h) => h());
                  },
                };
              },
            };
          },
          k7 = __webpack_require__(186901),
          Dzc = k7.EW,
          Ezc = k7.h5,
          xzc = k7.m3,
          zzc = k7.mJ,
          l7 = k7.sH;
        var Fzc = class {
          static D(a) {
            __c.M(a, { mCb: l7.ref, usb: l7.ref });
          }
          constructor() {
            this.kza = (Fzc.D(this), void 0);
          }
        };
        var Gzc = class {
            constructor() {
              this.sources = new WeakMap();
            }
          },
          vzc = class {
            static D(a) {
              __c.M(a, { pf: Dzc });
            }
            get T_a() {
              var a = this.TL,
                b = this.Ed,
                c = this.dAa;
              let d = a.sources.get(b);
              d || ((d = l7.box(c)), a.sources.set(b, d));
              return d;
            }
            get Pk() {
              return this.T_a.get();
            }
            get pf() {
              return this.qn.Du({ type: "dict", value: this.Ed });
            }
            rn(a) {
              this.T_a.set(
                a instanceof Function
                  ? { ...this.Pk, ...a() }
                  : { ...this.Pk, ...a }
              );
            }
            constructor(a, b, c, d) {
              this.qn = a;
              this.Ed = b;
              this.TL = c;
              this.dAa = d;
              vzc.D(this);
            }
          };
        var Zyc = class {
          oba(a, b) {
            this.l6a(a, b);
            b.ref && this.PFa(a, b.ref, b.key);
          }
          F0(a, b) {
            b.ref && this.PFa(a.text, b.ref, b.key);
          }
          KLa(a, b) {
            switch (b.content.type) {
              case "shape":
                x(a.element.type === "shape");
                this.oba(a.element, b.content);
                break;
              case "text":
                x(a.element.type === "text");
                this.F0(a.element, b.content);
                break;
              case "layout":
                x(a.element.type === "layout");
                this.cqa(a.element, b.content);
                break;
              default:
                throw new D(b.content);
            }
          }
          cqa(a, b) {
            this.l6a(a, b);
            b.ref && this.PFa(a, b.ref, b.key);
            for (const [c, d] of a.cells)
              (a = b.cells.find((e) => e.id === c)),
                x(!!d && !!a),
                this.KLa(d, a);
          }
          constructor(a, b) {
            this.l6a = a;
            this.PFa = b;
          }
        };
        var i7 = { locked: !0, Oj: __c.mAb, Fg: !0 },
          j7 = { top: 0, left: 0, width: 1, height: 1 };
        var Hzc = class {
          constructor(a) {
            this.Ll = a;
            this.update = (b, c) => {
              szc(
                b,
                [c],
                (d, e) => {
                  switch (d.type) {
                    case "layout":
                      rzc(d, e);
                      break;
                    default:
                      throw Error(`Not supported element type: ${d.type}`);
                  }
                },
                (d) => {
                  a: switch (d.type) {
                    case "layout":
                      d = {
                        ...gzc(d),
                        ...i7,
                        width: d.minWidth,
                        height: d.minHeight,
                        I: d.minWidth,
                        P: d.minHeight,
                      };
                      break a;
                    default:
                      throw new D(d.type);
                  }
                  return d;
                }
              );
              for (const d of b)
                x(d.type === "layout"),
                  (d.width = c.minWidth),
                  (d.height = c.minHeight),
                  (d.I = c.minWidth),
                  (d.P = c.minHeight),
                  c.direction && (d.direction = c.direction),
                  Yyc(this.Ll, d);
            };
          }
        };
        var Izc = class {
          constructor(a, b, c) {
            this.Izb = a;
            this.lU = b;
            this.VB = c;
            this.x6a = new WeakMap();
          }
        };
        var Jzc = class {
            static D(a) {
              __c.M(a, { vBa: l7.shallow });
            }
            constructor(a, b) {
              this.jc = a;
              this.Ll = b;
              this.vBa = (Jzc.D(this), new Set());
              this.nya = new Set();
              this.EAb = () => {
                this.Rga ||
                  (this.Rga = __c.Sna(this.jc).subscribe((d) => {
                    Ezc(() => {
                      this.vBa.add(d.id);
                    });
                  }));
                const c = Symbol();
                this.nya.add(c);
                return () => {
                  this.nya.delete(c);
                  this.nya.size <= 0 &&
                    this.Rga &&
                    (this.Rga.unsubscribe(), (this.Rga = void 0));
                };
              };
            }
          },
          Azc = class extends __c.wp {
            oU(a, b) {
              this.cya || super.oU(a, b);
            }
            F0(a) {
              this.cya =
                (a = a.text
                  .ei("font-family")
                  ["font-family"].values()
                  .next().value) && __c.oo(a).id;
            }
          };
        var Kzc = !1,
          Lzc = class {
            static D(a) {
              __c.M(a, { lv: l7.shallow });
            }
            register(a, b) {
              this.lv.has(a) ||
                (this.lv.set(a, b),
                this.sfa || Kzc || (__c.ZQ.set(a, Czc(this, b)), (Kzc = !0)));
            }
            get(a) {
              return this.lv.get(a);
            }
            constructor(a, b, c, d, e, f = __c.uc("f576b13d", !1)) {
              this.renderer = a;
              this.TL = b;
              this.VB = c;
              this.jc = d;
              this.Ll = e;
              this.sfa = f;
              this.lv = (Lzc.D(this), new Map());
              this.Yqb = new Jzc(this.jc, this.Ll);
            }
          };
        var Mzc = class {
            constructor() {
              this.uAa = new __c.Oy();
              this.refs = new __c.Oy();
            }
          },
          Nzc = class {
            getContext(a) {
              return this.lU.refs.get(a);
            }
            NQ(a) {
              return this.lU.uAa.get(a);
            }
            constructor(a, b, c) {
              this.lU = a;
              this.TL = b;
              this.renderer = c;
            }
          };
        __c.uRa = {
          Yub: function (a) {
            const b = new Fzc(),
              c = new Mzc(),
              d = new Izc(new Hzc(a.Ll), c, b),
              e = new Gzc();
            a = new Lzc(d, e, b, a.jc, a.Ll, a.sfa);
            return { VB: b, t$b: new Nzc(c, e, d), qba: a, lU: c };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/fcdb11231f4f8169.js.map
