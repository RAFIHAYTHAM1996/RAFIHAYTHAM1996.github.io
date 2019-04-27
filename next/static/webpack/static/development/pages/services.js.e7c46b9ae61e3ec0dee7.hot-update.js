webpackHotUpdate("static/development/pages/services.js",{

/***/ "./components/Social/Social.js":
/*!*************************************!*\
  !*** ./components/Social/Social.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _link = _interopRequireDefault(__webpack_require__(/*! next/link */ "./node_modules/next/link.js"));

var _facebook = _interopRequireDefault(__webpack_require__(/*! ../../static/svg/social/facebook.svg?include */ "./static/svg/social/facebook.svg?include"));

var _linkedin = _interopRequireDefault(__webpack_require__(/*! ../../static/svg/social/linkedin.svg?include */ "./static/svg/social/linkedin.svg?include"));

var _twitter = _interopRequireDefault(__webpack_require__(/*! ../../static/svg/social/twitter.svg?include */ "./static/svg/social/twitter.svg?include"));

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

var Social =
/*#__PURE__*/
function (_Component) {
  _inherits(Social, _Component);

  function Social(props) {
    var _this;

    _classCallCheck(this, Social);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Social).call(this, props));
    _this.platforms = [{
      icon: _facebook.default,
      url: 'https://www.facebook.com/Hospall'
    }, {
      icon: _twitter.default,
      url: 'https://twitter.com/hospallhomecare'
    }, {
      icon: _linkedin.default,
      url: 'https://www.linkedin.com/company/hospall-private-homecare'
    }];
    return _this;
  }

  _createClass(Social, [{
    key: "render",
    value: function render() {
      var align = this.props.align;
      return _react.default.createElement("div", {
        className: "Social",
        style: {
          textAlign: align || 'left'
        }
      }, this.platforms.map(function (platform, index) {
        return _react.default.createElement(_link.default, {
          href: platform.url,
          key: index
        }, _react.default.createElement("a", {
          target: "_blank",
          key: index,
          className: "icon",
          dangerouslySetInnerHTML: {
            __html: platform.icon
          }
        }));
      }));
    }
  }]);

  return Social;
}(_react.Component);

exports.default = Social;

/***/ })

})
//# sourceMappingURL=services.js.e7c46b9ae61e3ec0dee7.hot-update.js.map