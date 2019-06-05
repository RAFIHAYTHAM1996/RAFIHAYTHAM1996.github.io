webpackHotUpdate("static/development/pages/careers.js",{

/***/ "./util/settings.js":
/*!**************************!*\
  !*** ./util/settings.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var settings = {
  isLocal: "development" === 'local',
  isDev: "development" === 'development',
  isStaging: "development" === 'staging',
  isProduction: "development" === 'production',
  ASSET_PATH: "static/",
  responsiveBreakpoint: 992,
  GACcode: "UA-120823644-2",
  isServer: function isServer() {
    return !(typeof window != 'undefined' && window.document);
  },
  googleReCaptchaKey: '6LeaL5oUAAAAACawT3xSZM1H6L_V1AmBisKqoN53',
  // server: process.env.NODE_ENV === 'development' ? 'http://localhost/' : 'http://www.hospall.com/',
  server: 'http://www.hospall.com/',
  colors: {
    "primary": "#4473b3",
    "primaryDark": "#305691",
    "primaryLight": "#FFFFFF",
    "secondary": "#f25253",
    "textDark": "#555555"
  },
  shade: function shade(color, percent) {
    var f = parseInt(color.slice(1), 16),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = f >> 16,
        G = f >> 8 & 0x00FF,
        B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
  }
};
var _default = settings;
exports.default = _default;

/***/ })

})
//# sourceMappingURL=careers.js.d3af6133e2f57cee9d5a.hot-update.js.map
