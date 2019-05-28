webpackHotUpdate("static/development/pages/index.js",{

/***/ "./sections/Testimonials/Testimonials.js":
/*!***********************************************!*\
  !*** ./sections/Testimonials/Testimonials.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _gsap = __webpack_require__(/*! gsap */ "./node_modules/gsap/TweenMax.js");

var _reactGoogleRecaptcha = _interopRequireDefault(__webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/es/recaptcha-wrapper.js"));

var _settings = _interopRequireDefault(__webpack_require__(/*! ../../util/settings */ "./util/settings.js"));

var _chevonCircleRight = _interopRequireDefault(__webpack_require__(/*! ../../static/svg/chevon-circle-right.svg */ "./static/svg/chevon-circle-right.svg"));

var _data = _interopRequireDefault(__webpack_require__(/*! ../../static/json/data.json */ "./static/json/data.json"));

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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
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
function (_React$Component) {
  _inherits(Testimonials, _React$Component);

  function Testimonials(props) {
    var _this;

    _classCallCheck(this, Testimonials);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Testimonials).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animateIn", function () {
      var tl = new _gsap.TimelineMax({
        paused: true
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTestimonial", function (index) {
      if (!_this.animating) {
        _this.animating = true;
        var nextIndex = _this.state.current;

        if (index > 0) {
          nextIndex = _this.state.current < _this.data.length - 1 ? nextIndex + 1 : 0;
        } else if (index < 0) {
          nextIndex = _this.state.current > 0 ? nextIndex - 1 : _this.data.length - 1;
        }

        var interval = 0.5,
            direction = index > 0 ? -1 : 1; // Animate out

        _gsap.TweenMax.staggerTo(_this.TestimonialData.children, interval, {
          y: -10 * direction,
          autoAlpha: 0,
          ease: Power3.easeInOut,
          onComplete: function onComplete() {
            _this.setState(_objectSpread({}, _this.state, {
              current: nextIndex
            })); // Animate in


            _gsap.TweenMax.staggerFromTo(_this.TestimonialData.children, interval, {
              y: 10 * direction
            }, {
              y: 0,
              autoAlpha: 1,
              ease: Power3.easeInOut
            }, 0.1);

            _this.animating = false;
          }
        }, 0.1);
      }
    });

    _this.state = {
      analyticsSubmitted: {
        scroll: false,
        form: false
      },
      current: 0
    };
    _this.AnimationElements = [];
    _this.animating = false;
    _this.ASSET_PATH = _settings.default.ASSET_PATH + "images/testimonials/";
    _this.data = _data.default.testimonials.widget && _data.default.testimonials.widget.length > 0 ? _data.default.testimonials.widget : [];
    return _this;
  }

  _createClass(Testimonials, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _gsap.TweenMax.to(this.container, 0.5, {
        autoAlpha: 1
      });

      _gsap.TweenMax.set(this.AnimationElements, {
        autoAlpha: 0
      });

      this.animateIn();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _gsap.TweenMax.set(this.container, {
        autoAlpha: 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.AnimationElements = [];
      var testimonial = this.data[this.state.current];
      return _react.default.createElement("div", {
        className: "section-testimonials" // style={{backgroundImage: `url(${this.ASSET_PATH + 'background.jpg'})`}}
        ,
        ref: function ref(el) {
          return _this2.container = el;
        }
      }, testimonial && _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
        className: "row",
        style: {
          width: "100%"
        }
      }, _react.default.createElement("div", {
        className: "col-10 offset-1 testimonials-heading"
      }, _react.default.createElement("h1", null, "What Our Clients Are Saying"))), _react.default.createElement("div", {
        className: "row testimonial"
      }, _react.default.createElement("div", {
        className: "col-10 offset-1 col-md-6 offset-md-3 testimonial-data-container",
        ref: function ref(el) {
          return _this2.TestimonialData = el;
        }
      }, _react.default.createElement("h4", null, testimonial.name), _react.default.createElement("p", {
        className: "mini",
        style: {
          fontStyle: "italic"
        }
      }, testimonial.relationship), _react.default.createElement("p", null, "\"", testimonial.review, "\"")), _react.default.createElement("img", {
        className: "chevron left",
        src: _chevonCircleRight.default,
        alt: "chevron-left",
        onClick: this.getTestimonial.bind(this, -1),
        style: {
          transform: "rotateY(-180deg)"
        }
      }), _react.default.createElement("img", {
        className: "chevron right",
        src: _chevonCircleRight.default,
        alt: "chevron-right",
        onClick: this.getTestimonial.bind(this, 1)
      }))));
    }
  }]);

  return Testimonials;
}(_react.default.Component);

;
var _default = Testimonials;
exports.default = _default;

/***/ })

})
//# sourceMappingURL=index.js.86fb40f16e2d2b87944a.hot-update.js.map
