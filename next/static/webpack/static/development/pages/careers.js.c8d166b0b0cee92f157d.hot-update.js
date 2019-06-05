webpackHotUpdate("static/development/pages/careers.js",{

/***/ "./sections/JobApplication/JobApplication.js":
/*!***************************************************!*\
  !*** ./sections/JobApplication/JobApplication.js ***!
  \***************************************************/
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

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/next/node_modules/lodash/lodash.js");

var _urlJoin = _interopRequireDefault(__webpack_require__(/*! url-join */ "./node_modules/url-join/lib/url-join.js"));

var _isomorphicFetch = _interopRequireDefault(__webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js"));

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var _index = __webpack_require__(/*! ../../components/Form/index */ "./components/Form/index.js");

var _data = _interopRequireDefault(__webpack_require__(/*! ../../static/json/data.json */ "./static/json/data.json"));

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

var JobApplication =
/*#__PURE__*/
function (_Component) {
  _inherits(JobApplication, _Component);

  function JobApplication(props) {
    var _this;

    _classCallCheck(this, JobApplication);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JobApplication).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputChange", function (e, item) {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleScroll", function (e) {
      if (_this.props.isResponsive) {
        if (_this.container.getBoundingClientRect().top <= window.innerHeight / 2) {
          _this.animateIn();

          window.removeEventListener('scroll', _this.handleScroll);
        }
      } else if (_this.container.getBoundingClientRect().top < window.innerHeights) {
        _this.animateIn();

        window.removeEventListener('scroll', _this.handleScroll);
      }
    });

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleReCaptcha", function (value) {
      _this.setState({
        validCaptcha: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
      e.preventDefault();
      var emailState = (0, _lodash.cloneDeep)(_this.state.email);
      emailState.formError = '';
      emailState.failed = false;
      var valid = true;

      for (var i = 0; i < _this.InputFields.length; i++) {
        if (!_this.InputFields[i].state.valid) {
          emailState.formError = "Please fill out '".concat(_this.InputFields[i].label, "' field");
          valid = false;
          break;
        }
      }

      if (!_this.state.validCaptcha) {
        valid = false;
        emailState.formError = 'Please complete the reCAPTCHA';
      }

      if (valid) {
        emailState.submitted = true;

        _this.setState({
          email: emailState
        });

        _axios.default.post((0, _urlJoin.default)(_settings.default.server, 'forms', 'careers.php'), _this.getFormContent(), {
          headers: {
            'Accept': 'application/json',
            "Content-type": "multipart/form-data"
          }
        }).then(function (response) {
          _this.resetForm();

          emailState.sent = true;

          _this.setState({
            email: emailState
          }); // if (settings.isDev) {
          //   document.open();
          //   document.write(response.data);
          // }

        }).catch(function (error) {
          emailState.failed = true;

          if (error.response.status === 400) {
            emailState.formError = error.response.data || 'An unknown error occurred. Please try again later.';
          }

          _this.setState({
            email: emailState
          });
        });
      } else {
        _this.setState({
          email: emailState
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getFormContent", function () {
      var formData = new FormData();
      var arr = [_this.InputFields, _this.SelectLists];
      arr.forEach(function (j) {
        for (var i = 0; i < j.length; i++) {
          formData.append(j[i].props.id, j[i].props.type === 'file' && j[i].state.files ? j[i].state.files[0] : j[i].state.value);
        }
      });
      return formData;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "resetForm", function () {
      _this.InputFields.forEach(function (field) {
        field.reset();
      });

      _this.SelectLists.forEach(function (field) {
        field.reset();
      });
    });

    _this.state = {
      validCaptcha: _settings.default.isDev,
      showError: false,
      email: {
        submitted: false,
        sent: false,
        failed: false,
        formError: ''
      }
    };
    _this.AnimationElements = [];
    _this.InputFields = [];
    _this.SelectLists = [];
    _this.positionTitles = [];

    _data.default.careers.forEach(function (career) {
      return _this.positionTitles.push(career.position);
    });

    return _this;
  }

  _createClass(JobApplication, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _gsap.TweenMax.to(this.container, 0.5, {
        autoAlpha: 1
      });

      _gsap.TweenMax.set(this.AnimationElements, {
        autoAlpha: 0
      });

      this.animateIn();
      window.addEventListener('scroll', this.handleScroll);
      this.handleScroll();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);

      _gsap.TweenMax.set(this.container, {
        autoAlpha: 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.AnimationElements = [];
      this.InputFields = [];
      this.SelectLists = [];
      return _react.default.createElement("div", {
        className: "job-application",
        id: "job-application-form",
        ref: function ref(el) {
          _this2.container = el;
        }
      }, _react.default.createElement("div", {
        className: "ContentContainer"
      }, _react.default.createElement("h2", {
        className: "job-application-title"
      }, "Apply Now"), _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-md-7",
        style: {
          maxWidth: 600
        }
      }, _react.default.createElement("form", {
        onSubmit: this.handleSubmit,
        encType: "multipart/form-data"
      }, _react.default.createElement("div", {
        className: "row",
        ref: function ref(el) {
          return _this2.AnimationElements[0] = el;
        }
      }, _react.default.createElement("div", {
        className: "col-sm-6"
      }, _react.default.createElement(_index.InputField, {
        label: "First Name",
        id: "fname",
        showError: this.state.showError,
        ref: function ref(el) {
          return _this2.InputFields[0] = el;
        },
        onChange: this.handleInputChange,
        isRequired: true
      })), _react.default.createElement("div", {
        className: "col-sm-6"
      }, _react.default.createElement(_index.InputField, {
        label: "Last Name",
        id: "lname",
        showError: this.state.showError,
        ref: function ref(el) {
          return _this2.InputFields[1] = el;
        },
        onChange: this.handleInputChange,
        isRequired: true
      }))), _react.default.createElement("div", {
        className: "row",
        ref: function ref(el) {
          return _this2.AnimationElements[1] = el;
        }
      }, _react.default.createElement("div", {
        className: "col-sm-6"
      }, _react.default.createElement(_index.InputField, {
        label: "Email",
        id: "email",
        isRequired: true,
        type: "email",
        showError: this.state.showError,
        ref: function ref(el) {
          return _this2.InputFields[2] = el;
        }
      })), _react.default.createElement("div", {
        className: "col-sm-6"
      }, _react.default.createElement(_index.InputField, {
        label: "Your Phone",
        id: "phone",
        isRequired: true,
        type: "phone",
        showError: this.state.showError,
        ref: function ref(el) {
          return _this2.InputFields[3] = el;
        }
      }))), _react.default.createElement("div", {
        className: "row",
        ref: function ref(el) {
          return _this2.AnimationElements[2] = el;
        }
      }, _react.default.createElement("div", {
        className: "col-sm-6"
      }, _react.default.createElement(_index.SelectList, {
        ref: function ref(el) {
          return _this2.SelectLists[0] = el;
        },
        id: "position",
        label: "Position",
        options: this.positionTitles
      })), _react.default.createElement("div", {
        className: "col-sm-6"
      }, _react.default.createElement(_index.InputField, {
        label: "Resume / CV",
        id: "resume",
        isRequired: true,
        type: "file",
        accept: ['pdf', 'doc', 'docx'],
        showError: this.state.showError,
        ref: function ref(el) {
          return _this2.InputFields[4] = el;
        }
      }))), _react.default.createElement("div", {
        className: "row",
        ref: function ref(el) {
          return _this2.AnimationElements[3] = el;
        }
      }, _react.default.createElement("div", {
        className: "col-12"
      }, _react.default.createElement(_index.TextArea, {
        label: "Message",
        id: "message",
        placeholder: "(Optional)",
        showError: this.state.showError,
        onChange: this.handleInputChange,
        ref: function ref(el) {
          return _this2.InputFields[5] = el;
        }
      }))), _react.default.createElement("div", {
        ref: function ref(el) {
          return _this2.AnimationElements[4] = el;
        },
        style: {
          marginBottom: 10
        }
      }, _react.default.createElement(_reactGoogleRecaptcha.default, {
        key: "captcha",
        className: "recaptcha",
        onChange: this.handleReCaptcha,
        sitekey: _settings.default.googleReCaptchaKey
      })), _react.default.createElement("div", {
        ref: function ref(el) {
          _this2.AnimationElements[5] = el;
        }
      }, _react.default.createElement("a", {
        role: "button",
        className: "cta dark",
        onClick: this.handleSubmit
      }, "Send Message")), _react.default.createElement("p", {
        className: "dark mini",
        style: {
          marginTop: 20,
          marginBottom: 20
        },
        ref: function ref(el) {
          _this2.AnimationElements[6] = el;
        }
      }, "Or contact us at ", _react.default.createElement("a", {
        href: "mailto:info@hospall.com",
        className: "inline"
      }, "info@hospall.com")), _react.default.createElement("div", {
        className: "delivery-info",
        ref: function ref(el) {
          _this2.AnimationElements[7] = el;
        }
      }, this.state.email.submitted ? _react.default.createElement(_react.Fragment, null, this.state.email.sent && _react.default.createElement(_react.Fragment, null, _react.default.createElement("p", {
        style: {
          fontWeight: 400
        }
      }, "Your message has been sent!"), _react.default.createElement("p", null, "A member of our team will be in touch with you as soon as possible.")), this.state.email.failed && _react.default.createElement("p", null, this.state.email.formError || 'Sorry, there was an error sending your email. Please try again later.'), !this.state.email.sent && !this.state.email.failed && _react.default.createElement("p", null, "Sending email...")) : _react.default.createElement("p", null, this.state.email.formError)))))));
    }
  }]);

  return JobApplication;
}(_react.Component);

;
JobApplication.defaultProps = {
  windowWidth: 960,
  windowHeight: 570
};
var _default = JobApplication;
exports.default = _default;

/***/ })

})
//# sourceMappingURL=careers.js.c8d166b0b0cee92f157d.hot-update.js.map
