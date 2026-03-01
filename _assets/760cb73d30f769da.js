(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [86064],
  {
    /***/ 775822: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var Ghc;
        __c.U2 = function (a, b, c) {
          return new __c.sb(a, c ? __c.tb(c) : void 0, __c.Jaa, {
            ignoreTag: !0,
          }).format(Object.fromEntries(Object.entries(b)));
        };
        __c.Fhc = function (a, b) {
          __c.u(!0);
          __c.u(!0);
          __c.u(!0);
          const { ma: c, a: d, b: e } = __c.ys(a),
            { ma: f, a: g, b: h } = __c.ys(b);
          a = (c + f) / 2;
          b = (Math.hypot(d, e) + Math.hypot(g, h)) / 2;
          b = 0.5 * (1 - Math.sqrt(b ** 7 / (b ** 7 + 25 ** 7)));
          var k = d * (1 + b),
            l = g * (1 + b),
            m = Math.hypot(k, e),
            n = Math.hypot(l, h);
          b = (m + n) / 2;
          var p = __c.Ls((Math.atan2(e, k) * 180) / Math.PI);
          const q = __c.Ls((Math.atan2(h, l) * 180) / Math.PI);
          k = Math.abs(p - q) > 180 ? (p + q + 360) / 2 : (p + q) / 2;
          l = n - m;
          m =
            2 *
            Math.sqrt(m * n) *
            Math.sin(
              (((Math.abs(q - p) <= 180
                ? q - p
                : q <= p
                ? q - p + 360
                : q - p - 360) /
                2) *
                Math.PI) /
                180
            );
          n = 1 + 0.045 * b;
          p =
            1 +
            0.015 *
              b *
              (1 -
                0.17 * Math.cos(((k - 30) * Math.PI) / 180) +
                0.24 * Math.cos((2 * k * Math.PI) / 180) +
                0.32 * Math.cos(((3 * k + 6) * Math.PI) / 180) -
                0.2 * Math.cos(((4 * k - 63) * Math.PI) / 180));
          return Math.sqrt(
            ((f - c) /
              (1 + (0.015 * (a - 50) ** 2) / Math.sqrt(20 + (a - 50) ** 2))) **
              2 +
              (l / (1 * n)) ** 2 +
              (m / (1 * p)) ** 2 +
              (l / (1 * n)) *
                (m / (1 * p)) *
                (-(2 * Math.sqrt(b ** 7 / (b ** 7 + 25 ** 7))) *
                  Math.sin(
                    (30 * Math.exp(-1 * ((k - 275) / 25) ** 2) * 2 * Math.PI) /
                      180
                  ))
          );
        };
        Ghc = function (a) {
          return { status: 3, error: a };
        };
        __c.qw.prototype.b9 = __c.ca(13, function () {
          return __c.lw(this, () => __c.Yv(this.operators, "%", this.value));
        });
        __c.Hhc = {
          Wd: "form_widget_interacted",
          $e(a) {
            return __c.Fo({
              form_id: a.GQ,
              form_type: a.vWa,
              action_group: a.Ru,
              action: a.action,
              location: a.location,
              linked_design_id: a.GZb,
              toggle_value: a.ZI,
              editing_context: a.Xc == null ? void 0 : __c.Go(a.Xc),
              performance_context: a.Dd == null ? void 0 : __c.Ho(a.Dd),
            });
          },
        };
        __c.V2 = Ghc;
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/760cb73d30f769da.js.map
