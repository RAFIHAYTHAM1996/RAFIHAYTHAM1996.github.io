webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _main = _interopRequireDefault(__webpack_require__(/*! ../layouts/main */ "./layouts/main.js"));

var _Contact = _interopRequireDefault(__webpack_require__(/*! ../sections/Contact/Contact */ "./sections/Contact/Contact.js"));

var _settings = _interopRequireDefault(__webpack_require__(/*! ../util/settings */ "./util/settings.js"));

var _Feature = _interopRequireDefault(__webpack_require__(/*! ../components/Feature/Feature */ "./components/Feature/Feature.js"));

var _Testimonials = _interopRequireDefault(__webpack_require__(/*! ../sections/Testimonials/Testimonials */ "./sections/Testimonials/Testimonials.js"));

var _medical = _interopRequireDefault(__webpack_require__(/*! ../static/svg/medical.svg?include */ "./static/svg/medical.svg?include"));

var _care = _interopRequireDefault(__webpack_require__(/*! ../static/svg/care.svg?include */ "./static/svg/care.svg?include"));

var _home = _interopRequireDefault(__webpack_require__(/*! ../static/svg/home.svg?include */ "./static/svg/home.svg?include"));

var _logo = _interopRequireDefault(__webpack_require__(/*! ../static/svg/logo.svg?include */ "./static/svg/logo.svg?include"));

var _head = _interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/head.js"));

var _reactGa = _interopRequireDefault(__webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/react-ga.js"));

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

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animateIn", function () {
      var tl = new TimelineMax({
        paused: true,
        delay: 0.5
      });
      tl.to(_this.container, 1, {
        autoAlpha: 1
      });
      tl.staggerFromTo(_this.AnimationElements, 2, {
        autoAlpha: 0,
        y: 50
      }, {
        autoAlpha: 1,
        y: 0,
        ease: Expo.easeOut
      }, 0.25);
      tl.play();
    });

    _this.state = {
      animDone: true
    };
    _this.AnimationElements = [];
    _this.ASSET_PATH = _settings.default.ASSET_PATH + "images/landing/";
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      TweenMax.set(this.container, {
        autoAlpha: 0
      });
      TweenMax.set(this.AnimationElements, {
        autoAlpha: 0
      });
      this.animateIn();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.AnimationElements = [];
      return _react.default.createElement(_main.default, {
        id: "Home",
        menu: {
          show: this.state.animDone
        }
      }, _react.default.createElement("div", {
        id: "section-home",
        ref: function ref(el) {
          return _this2.container = el;
        },
        style: {
          opacity: 0
        }
      }, _react.default.createElement("div", {
        style: {
          backgroundColor: _settings.default.colors.primaryDark
        }
      }, _react.default.createElement("img", {
        id: "landing-image",
        src: this.ASSET_PATH + "intro.png"
      }), _react.default.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: _react.default.createElement(_logo.default, null)
        }
      }), _react.default.createElement("div", {
        className: "row intro-content"
      }, _react.default.createElement("div", {
        className: "offset-1 col-10 col-md-8 col-lg-6 col-xl-4"
      }, _react.default.createElement("h1", null, "Providing Families", _react.default.createElement("br", null), "with Peace of Mind"), _react.default.createElement("p", null, "We believe life is a gift. Hospall Private Homecare provides peace of mind to families with the health and care needs of their loved ones in King Township, City of Vaughan, and the surrounding GTA. Our commitment is to maintain open lines of communication within our multi disciplinary team to ensure the care is being provided consistent to the client. Our word is our promise."), _react.default.createElement("a", {
        className: "cta",
        href: "/services"
      }, "Learn More")))), _react.default.createElement("div", {
        className: "services-briefly"
      }, _react.default.createElement("div", {
        className: "row services-briefly-intro"
      }, _react.default.createElement("div", {
        className: "col-12 col-sm-6 col-lg-6 flex-center services-briefly-intro-img"
      }, _react.default.createElement("img", {
        style: {
          maxWidth: "100%"
        },
        src: this.ASSET_PATH + "playing-chess.jpg"
      })), _react.default.createElement("div", {
        className: "col-12 col-sm-6 offset-lg-1 col-lg-5 flex-center services-briefly-intro-info",
        style: {
          justifyContent: 'flex-start'
        }
      }, _react.default.createElement("h2", {
        className: "dark",
        style: {
          marginBottom: 30
        }
      }, "How We Can Help"), _react.default.createElement("p", {
        className: "dark"
      }, "By providing quality, personalized private our trained staff will provide a level of professionalism that allows for healthy, safe and positive interactions. We provide a variety of services to suit the needs of you and your loved ones."), _react.default.createElement("a", {
        className: "cta dark",
        href: "/services"
      }, "View Services"))), _react.default.createElement("div", {
        className: "row d-none d-sm-flex"
      }, _react.default.createElement("div", {
        className: "col-sm-6 col-md-4"
      }, _react.default.createElement(_Feature.default, {
        title: "Private Home Care",
        icon: _home.default,
        text: "We specialize but are not limited to provide live-in support including short-term postoperative care. We also organize and help clients with daily activities to help to stimulate their mind and enrich their interests. We are flexible to build a care plan that is best for our clients."
      })), _react.default.createElement("div", {
        className: "col-sm-6 col-md-4"
      }, _react.default.createElement(_Feature.default, {
        title: "Home Medical Services",
        icon: _medical.default,
        text: "We provide medical and personal home care services by skilled professionals, including help with personal hygiene. We also provide medical services such as bloodwork and medication administration, and accompanying clients to appointments."
      })), _react.default.createElement("div", {
        className: "col-sm-6 col-md-4"
      }, _react.default.createElement(_Feature.default, {
        title: "Respite Care",
        icon: _care.default,
        text: "Caring for loved ones can be a full-time job and we recognize it can be exhausting. When you need a rest, we are here to relieve you. We can provide 24-hour care in the comfort of our client\u2019s own home."
      })))), _react.default.createElement(_Testimonials.default, null), _react.default.createElement(_Contact.default, {
        description: "In order to maintain the highest quality of care for our clients and their families, we ensure each case is evaluated by an assessment expert. Let\u2019s work together to find the best type of care for you and your loved one."
      })));
    }
  }]);

  return Index;
}(_react.Component);

var _default = Index;
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  

/***/ })

})
//# sourceMappingURL=index.js.633ae30215d02bebb011.hot-update.js.map