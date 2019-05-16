webpackHotUpdate("static/development/pages/faq.js",{

/***/ "./pages/faq.js":
/*!**********************!*\
  !*** ./pages/faq.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _head = _interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/head.js"));

var _main = _interopRequireDefault(__webpack_require__(/*! ../layouts/main */ "./layouts/main.js"));

var _InlineQuestion = _interopRequireDefault(__webpack_require__(/*! ../components/InlineQuestion/InlineQuestion */ "./components/InlineQuestion/InlineQuestion.js"));

var _data = _interopRequireDefault(__webpack_require__(/*! ../static/json/data.json */ "./static/json/data.json"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var FAQ =
/*#__PURE__*/
function (_Component) {
  _inherits(FAQ, _Component);

  function FAQ() {
    _classCallCheck(this, FAQ);

    return _possibleConstructorReturn(this, _getPrototypeOf(FAQ).apply(this, arguments));
  }

  _createClass(FAQ, [{
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_main.default, {
        id: "FAQ",
        menu: {
          solidStyle: true
        },
        ref: function ref(el) {
          return _this.Page = el;
        }
      }, _react.default.createElement("div", {
        className: "ContentContainer"
      }, _react.default.createElement("h2", {
        className: "dark"
      }, "FAQ"), _react.default.createElement("p", {
        className: "extra-help"
      }, "Can\u2019t find the answer here? Contact us at ", _react.default.createElement("a", {
        href: "tel:+18002088480",
        className: "inline"
      }, "1-800-208-8480"), " or send us an e-mail at ", _react.default.createElement("a", {
        href: "mailto:info@hospall.com",
        className: "inline"
      }, "info@hospall.com")), _data.default.FAQ.map(function (FAQItem, index) {
        return _react.default.createElement(_InlineQuestion.default, {
          question: FAQItem.question,
          answer: FAQItem.answer,
          defaultExpanded: index === 0,
          key: index
        });
      })));
    }
  }]);

  return FAQ;
}(_react.Component);

var _default = FAQ;
exports.default = _default;
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/faq")
  

/***/ })

})
//# sourceMappingURL=faq.js.eaafd1aa532eb8b3dd26.hot-update.js.map