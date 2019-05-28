webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Ribbon/Ribbon.js":
/*!*************************************!*\
  !*** ./components/Ribbon/Ribbon.js ***!
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

var _Social = _interopRequireDefault(__webpack_require__(/*! ../Social/Social */ "./components/Social/Social.js"));

var _settings = _interopRequireDefault(__webpack_require__(/*! ../../util/settings */ "./util/settings.js"));

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

var Ribbon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Ribbon, _PureComponent);

  function Ribbon(props) {
    var _this;

    _classCallCheck(this, Ribbon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ribbon).call(this, props));
    _this.ASSET_PATH = _settings.default.ASSET_PATH + "images/";
    return _this;
  }

  _createClass(Ribbon, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "Ribbon"
      }, _react.default.createElement("div", {
        className: "row m-0"
      }, _react.default.createElement("div", {
        className: "col-12 col-sm-7 left-side"
      }, "Questions?\xA0", _react.default.createElement("a", {
        className: "phone-number",
        href: "tel:+18002088480"
      }, "Call 1-800-208-8480")), _react.default.createElement("div", {
        className: "d-none d-sm-block col-sm-5 ribbon-social"
      }, _react.default.createElement(_Social.default, {
        align: "right"
      }))));
    }
  }]);

  return Ribbon;
}(_react.PureComponent);

exports.default = Ribbon;

/***/ })

})
//# sourceMappingURL=index.js.0103a9744b7184fb06d3.hot-update.js.map
