webpackHotUpdate("static/development/pages/testimonials.js",{

/***/ "./pages/testimonials.js":
/*!*******************************!*\
  !*** ./pages/testimonials.js ***!
  \*******************************/
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

var _PageHeader = _interopRequireDefault(__webpack_require__(/*! ../components/PageHeader/PageHeader */ "./components/PageHeader/PageHeader.js"));

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

var Testimonials =
/*#__PURE__*/
function (_Component) {
  _inherits(Testimonials, _Component);

  function Testimonials(props) {
    var _this;

    _classCallCheck(this, Testimonials);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Testimonials).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "loadMore", function () {
      if (_this.LoadTrigger.getBoundingClientRect().top < window.innerHeight) {
        if (_this.state.loaded < _this.data.length - 1) _this.setState({
          loaded: _this.state.loaded + 1
        });
      }
    });

    _this.data = _data.default.testimonials.page && _data.default.testimonials.page.length > 0 ? _data.default.testimonials.page : [];
    _this.state = {
      loaded: _this.data.length < 5 ? _this.data.length : 5
    };
    return _this;
  }

  _createClass(Testimonials, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.loadMore);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.loadMore);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_main.default, {
        id: "Testimonials",
        menu: {
          solidStyle: true
        }
      }, _react.default.createElement(_PageHeader.default, {
        title: "Testimonials",
        image: "testimonials.jpg",
        description: "Hospall Private Homecare is always accepting employment applications from individuals dedicated to providing high-quality, in-home care assistance. We offer home care jobs and other employment opportunities to those who share our commitment and uphold our standards."
      }), _react.default.createElement("div", {
        className: "ContentContainer"
      }, _react.default.createElement("div", {
        className: "col-12 col-md-10 col-lg-9 col-xl-10"
      }, this.data.slice(0, this.state.loaded).map(function (item, index) {
        var patt = /\./igm;
        var match,
            count = 0,
            position = 0;

        while (match = patt.exec(item.content) && count < 2) {
          position = patt.lastIndex;
          count++;
        }

        return _react.default.createElement("span", {
          key: index,
          ref: function ref(el) {
            if (index === _this2.state.loaded - 1) _this2.LoadTrigger = el;
          }
        }, _react.default.createElement("h5", {
          className: "dark padding"
        }, item.content.substr(0, position)), _react.default.createElement("p", {
          className: "dark mini"
        }, item.content), _react.default.createElement("p", {
          className: "dark mini padding"
        }, "\u2014 ", item.client));
      }), _react.default.createElement("p", {
        className: "dark mini",
        style: {
          fontStyle: 'italics'
        }
      }, "*All of our testimonials have been provided by current and past clients and their relatives. To respect and protect the privacy of our clients, some of the provided names have been replaced."))));
    }
  }]);

  return Testimonials;
}(_react.Component);

var _default = Testimonials;
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/testimonials")
  

/***/ })

})
//# sourceMappingURL=testimonials.js.c8ab52d21f0caf80b89b.hot-update.js.map