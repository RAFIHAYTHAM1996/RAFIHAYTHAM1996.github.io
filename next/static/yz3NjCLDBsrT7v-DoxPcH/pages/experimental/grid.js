(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"1OyB":function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},F45l:function(t,n,e){"use strict";e.r(n);var r=e("1OyB"),o=e("vuIU"),u=e("md7G"),i=e("foSv"),c=e("Ji7U"),f=e("q1tI"),a=e.n(f),s=e("nOHt"),l=e("zfzq"),p=(a.a.createElement,function(t){function n(t){return Object(r.a)(this,n),Object(u.a)(this,Object(i.a)(n).call(this,t))}return Object(c.a)(n,t),Object(o.a)(n,[{key:"componentWillMount",value:function(){l.default.isServer()||this.props.router.replace("/")}},{key:"render",value:function(){return!1}}]),n}(f.Component));n.default=Object(s.withRouter)(p)},JX7q:function(t,n,e){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,"a",(function(){return r}))},Ji7U:function(t,n,e){"use strict";function r(t,n){return(r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function o(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}e.d(n,"a",(function(){return o}))},Xx8y:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/experimental/grid",function(){return e("F45l")}])},foSv:function(t,n,e){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(n,"a",(function(){return r}))},md7G:function(t,n,e){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}e.d(n,"a",(function(){return i}));var u=e("JX7q");function i(t,n){return!n||"object"!==o(n)&&"function"!==typeof n?Object(u.a)(t):n}},vuIU:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}e.d(n,"a",(function(){return o}))},zfzq:function(t,n,e){"use strict";e.r(n);var r={isLocal:!1,isDev:!1,isStaging:!1,isProduction:!0,ASSET_PATH:"assets/",GACode:"UA-120823644-4",isServer:function(){return!window.document},colors:{primary:"#536EC4",primaryLight:"#FFFFFF",secondary:"#1C1C1C",textPrimary:"#858585",textDark:"#2F2F2F",textLight:"#FFFFFF"},googleReCaptchaKey:"6LfjNKcUAAAAAFasdasasd6fSaFy8tnlMX7qsflRmy4tUkph",server:"http://www.artezan.ca/",shade:function(t,n){var e=parseInt(t.slice(1),16),r=n<0?0:255,o=n<0?-1*n:n,u=e>>16,i=e>>8&255,c=255&e;return"#"+(16777216+65536*(Math.round((r-u)*o)+u)+256*(Math.round((r-i)*o)+i)+(Math.round((r-c)*o)+c)).toString(16).slice(1)}};n.default=r}},[["Xx8y",0,1,2]]]);
