(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{379:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(380),{page:e.exports.default}})},380:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n(0)),i=n(18),a=l(n(73)),u=l(n(126)),c=l(n(30));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){function t(e){var n,o,r,i,a,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=p(t).call(this,e),n=!r||"object"!==s(r)&&"function"!=typeof r?y(o):r,i=y(y(n)),u=function(){var e=window.innerWidth/window.innerHeight>1.777777777777778?"landscape":"portrait";e!==n.state.orientation&&n.setState({orientation:e})},(a="updateOrientation")in i?Object.defineProperty(i,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):i[a]=u,n.state={introON:!0,orientation:"landscape",isFull:!0},n.navLinks=["contact us","services"],n.orientation="landscape",n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e=this;this.updateOrientation(),this.video.onended=function(){return e.setState({introON:!1})}}},{key:"componentDidUpdate",value:function(e,t){var n=this;this.updateOrientation(),t.introON&&!this.state.introON&&(this.Page.transitionIn(this.childTransitionContainer,!0),setTimeout(function(){var e=new i.TimelineMax({paused:!0});e.to(n.childTransitionContainer,.3,{autoAlpha:0,onComplete:function(){n.setState({introON:!1})}}),e.to(n.childTransitionContainer,.3,{autoAlpha:1}),e.play()},3e3))}},{key:"render",value:function(){var e=this,t=this.state.introON;return r.default.createElement(r.Fragment,null,t?r.default.createElement("div",{className:"intro-vid-cont"},r.default.createElement("video",{ref:function(t){return e.video=t},className:"intro-vid-".concat(this.state.orientation),autoPlay:!0,muted:!0},r.default.createElement("source",{src:"".concat(c.default.ASSET_PATH,"videos/web-intro.mp4"),type:"video/mp4"}),"Your browser does not support the video tag.")):r.default.createElement(a.default,{id:"Home",navLinks:this.navLinks,ref:function(t){return e.Page=t},showMenu:!t},r.default.createElement("div",{className:"container",ref:function(t){return e.childTransitionContainer=t}},r.default.createElement("div",{className:"row"},r.default.createElement("h1",{className:"col-12 col-md-10"},"we are a full-service creative agency specializing in branding and development.")),r.default.createElement("div",{className:"brand-outline-position"},r.default.createElement(u.default,{animate:!0})))))}}])&&f(n.prototype,o),l&&f(n,l),t}();t.default=m}},[[379,1,0]]]);
