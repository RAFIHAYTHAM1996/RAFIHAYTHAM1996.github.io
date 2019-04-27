webpackHotUpdate("static/development/pages/services.js",{

/***/ "./components/Footer/Footer.js":
false,

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
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

var _Testimonials = _interopRequireDefault(__webpack_require__(/*! ../sections/Testimonials/Testimonials */ "./sections/Testimonials/Testimonials.js"));

var _gsap = __webpack_require__(/*! gsap */ "./node_modules/gsap/TweenMax.js");

var _ScrollToPlugin = _interopRequireDefault(__webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js"));

var _settings = _interopRequireDefault(__webpack_require__(/*! ../util/settings */ "./util/settings.js"));

var _reactGa = _interopRequireDefault(__webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/react-ga.js"));

var _data = _interopRequireDefault(__webpack_require__(/*! ../static/json/data.json */ "./static/json/data.json"));

var _makePath = _interopRequireDefault(__webpack_require__(/*! ../util/make-path */ "./util/make-path.js"));

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

var Services =
/*#__PURE__*/
function (_Component) {
  _inherits(Services, _Component);

  function Services(props) {
    var _this;

    _classCallCheck(this, Services);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Services).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "formatDetails", function (info) {
      return info.map(function (item, index) {
        return _typeof(item) === 'object' && item.length ? _react.default.createElement("ul", {
          style: {
            paddingLeft: 15,
            textAlign: 'left'
          },
          key: index
        }, item.map(function (listItem, idx) {
          return _react.default.createElement("li", {
            key: idx
          }, _react.default.createElement("p", {
            className: "dark"
          }, listItem));
        })) : _react.default.createElement("p", {
          className: "dark",
          key: index
        }, item);
      });
    });

    _this.state = {
      router: {},
      activeService: -1
    };
    _this.ASSET_PATH = _settings.default.ASSET_PATH + "images/";
    _this.linkedService = undefined;
    return _this;
  }

  _createClass(Services, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var active = -1;

      for (var i = 0; i < _data.default.services.length; i++) {
        if ((0, _makePath.default)(_data.default.services[i].name) === window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1)) {
          this.linkedService = window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1);
          active = i;
          break;
        }
      }

      if (active === -1) active = 0;
      this.setState({
        activeService: active
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (window.innerWidth <= 575) {
        var svc = this.linkedService || this.serviceRefs[this.state.activeService];
        if (svc) _gsap.TweenLite.to(window, 1, {
          scrollTo: window.pageYOffset + this.serviceRefs[this.state.activeService].getBoundingClientRect().top - 150
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var service = _data.default.services[this.state.activeService];
      this.serviceRefs = [];
      return _react.default.createElement(_main.default, {
        id: "Services",
        menu: {
          solidStyle: true
        },
        ref: function ref(el) {
          return _this2.Page = el;
        }
      }, _react.default.createElement(_PageHeader.default, {
        title: "Services",
        image: "services.jpg",
        description: "We will deliver the highest quality of personalized private care to our clients and their families. The Hospall team provides caring, dependable and reliable assistance. Our caregivers live out but provide 24 hour a day coverage offering total peace of mind."
      }), _react.default.createElement("div", {
        className: "ContentContainer service-summaries"
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-12 col-sm-4"
      }, _data.default.services.map(function (item, index) {
        var className = _this2.state.activeService === index ? 'active' : '';
        return _react.default.createElement(_react.Fragment, null, _react.default.createElement("p", {
          key: index,
          ref: function ref(el) {
            _this2.serviceRefs[index] = el;
          },
          className: "service-name ".concat(className),
          onClick: function onClick() {
            return _this2.setState({
              activeService: index
            });
          }
        }, item.name), _this2.state.activeService === index && _react.default.createElement("div", {
          className: "ContentContainer offset-1 col-10 d-sm-none",
          style: {
            marginTop: 20,
            marginBottom: 20,
            height: 'auto',
            textAlign: 'center'
          }
        }, service && _this2.formatDetails(service.description)));
      })), _react.default.createElement("div", {
        className: "d-none d-sm-block col-sm-8 col-lg-7"
      }, _react.default.createElement("h3", {
        className: "service-title dark"
      }, service && service.name), service && this.formatDetails(service.description)))), _react.default.createElement("div", {
        className: "row benefits-of-hospall"
      }, _react.default.createElement("div", {
        className: "ContentContainer"
      }, _react.default.createElement("h3", {
        className: "dark"
      }, "The Benefits of Hospall Private Home Care"), _react.default.createElement("div", {
        className: "benefit-list"
      }, _data.default.benefits.map(function (item, index) {
        return _react.default.createElement("div", {
          className: "benefit-container col-md-6 col-lg-4",
          key: index
        }, _react.default.createElement("h1", {
          className: "benefit-number"
        }, (index + 1).toString().padStart(2, '0')), _react.default.createElement("h5", {
          className: "benefit-title dark"
        }, item.name), _react.default.createElement("p", {
          className: "dark"
        }, item.description));
      })))), _react.default.createElement(_Testimonials.default, null));
    }
  }]);

  return Services;
}(_react.Component);

var _default = Services;
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/services")
  

/***/ })

})
//# sourceMappingURL=services.js.1c1e167afee224fdf324.hot-update.js.map