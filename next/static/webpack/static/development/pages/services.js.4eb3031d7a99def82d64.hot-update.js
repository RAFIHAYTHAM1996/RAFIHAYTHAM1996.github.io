webpackHotUpdate("static/development/pages/services.js",{

/***/ "./layouts/main.js":
/*!*************************!*\
  !*** ./layouts/main.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _head = _interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/head.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js"));

var _Menu = _interopRequireDefault(__webpack_require__(/*! ../components/Menu/Menu */ "./components/Menu/Menu.js"));

var _Footer = _interopRequireDefault(__webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js"));

var _Ribbon = _interopRequireDefault(__webpack_require__(/*! ../components/Ribbon/Ribbon */ "./components/Ribbon/Ribbon.js"));

var _stats = _interopRequireDefault(__webpack_require__(/*! ../util/stats */ "./util/stats.js"));

var _index = _interopRequireDefault(__webpack_require__(/*! ../util/detect/index.js */ "./util/detect/index.js"));

var _reactGa = _interopRequireDefault(__webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/react-ga.js"));

var _settings = _interopRequireDefault(__webpack_require__(/*! ../util/settings */ "./util/settings.js"));

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Page);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Page)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleResize", function () {
      if (!_settings.default.isServer()) {
        var orientation = window.innerHeight >= window.innerWidth ? "portrait" : "landscape";
        var prevOrientation = document.body.className.indexOf('portrait') ? 'portrait' : 'landscape';
        document.body.className = document.body.className.replace(prevOrientation, orientation);
      }
    });

    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (_settings.default.isDev) (0, _stats.default)();

      _index.default.init();

      document.body.className = _toConsumableArray(new Set(_toConsumableArray(document.body.className.split(' ')).concat(_toConsumableArray(_index.default.classes())))).join(' ');

      _reactGa.default.initialize(_settings.default.GACcode);

      _reactGa.default.pageview(window.location.pathname);

      if (!_settings.default.isServer()) {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          children = _this$props.children,
          className = _this$props.className,
          menu = _this$props.menu;
      return _react.default.createElement("div", {
        id: id || "",
        className: "Page".concat(className ? " ".concat(className) : '')
      }, (!menu || menu.show !== false) && _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Menu.default, {
        location: _settings.default.isServer() ? {} : window.location,
        solidStyle: this.props.menu.solidStyle
      }), _react.default.createElement(_Ribbon.default, null)), _react.default.createElement(_react.Fragment, null, children), _react.default.createElement(_Footer.default, null));
    }
  }]);

  return Page;
}(_react.Component);

exports.default = Page;
Page.propTypes = {
  id: _propTypes.default.string,
  children: _propTypes.default.array,
  className: _propTypes.default.string,
  menu: _propTypes.default.object
};
Page.defaultProps = {
  id: '',
  children: [],
  className: '',
  menu: {}
};

/***/ })

})
//# sourceMappingURL=services.js.4eb3031d7a99def82d64.hot-update.js.map