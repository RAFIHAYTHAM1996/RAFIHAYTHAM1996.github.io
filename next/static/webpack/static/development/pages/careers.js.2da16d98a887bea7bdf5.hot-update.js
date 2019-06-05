webpackHotUpdate("static/development/pages/careers.js",{

/***/ "./components/Form/InputField/InputField.js":
/*!**************************************************!*\
  !*** ./components/Form/InputField/InputField.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js"));

var _gsap = __webpack_require__(/*! gsap */ "./node_modules/gsap/TweenMax.js");

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/next/node_modules/lodash/lodash.js");

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

var InputField =
/*#__PURE__*/
function (_Component) {
  _inherits(InputField, _Component);

  function InputField(props) {
    var _this;

    _classCallCheck(this, InputField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputField).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      _this.validate(e.target);

      if (_this.props.type === 'file') {
        _this.setState({
          secondaryTitle: (e.target.value || _this.FILE_INPUT_PLACEHOLDER).replace(/^.*[\\\/]/, ''),
          files: e.target.files
        });
      }

      ;
      _this.props.onChange && _this.props.onChange(e, _assertThisInitialized(_assertThisInitialized(_this)));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "adjustErrorHeight", function () {
      if (_this.state.showError && _this.state.error !== "") {
        _gsap.TweenMax.to(_this.container, 0.25, {
          marginBottom: _this.error.getBoundingClientRect().height - 4
        });
      } else {
        _gsap.TweenMax.to(_this.container, 0.25, {
          marginBottom: 0
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "validate", function (target) {
      if (!target) return;

      if (_this.props.isRequired) {
        var valid = true,
            errMsg = "";

        if (target.value.length === 0) {
          valid = false;
          errMsg = "Required";
        } else {
          if (!_this.props.skipValidation) {
            switch (_this.props.type) {
              case "password":
                if (_this.props.compareTo) {
                  if (target.value !== _this.props.compareTo) {
                    valid = false;
                    errMsg = "Passwords do not match. Please try again.";
                  }
                } else if (target.value.length < 6 || target.value.length > 32) {
                  valid = false;
                  errMsg = "Password length must be between 6 and 32";
                }

                break;

              case "email":
                if (!target.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                  valid = false;
                  errMsg = "Please enter a valid email address";
                }

                break;

              case "phone":
                if (!target.value.match(/^\+?[0-9]{0,}[-. ]+?\(?([0-9]{3})\)?[-. ]+?([0-9]{3})[-. ]+?([0-9]{4})$/)) {
                  valid = false;
                  errMsg = "Please enter a valid phone number (eg. 123-456-7890)";
                }

                break;

              case "file":
                var regexStr = '(';

                _this.props.accept.forEach(function (extension, index) {
                  regexStr += extension;
                  if (index < _this.props.accept.length - 1) regexStr += '|';
                });

                regexStr += ')';

                if (!target.value.replace(/^.+[\.]/, '').match(new RegExp(regexStr, 'i'))) {
                  valid = false;
                  errMsg = "Please choose an appropriate file to upload";
                }

                break;

              case "postalcode":
                if (!target.value.match(/([ABCEGHJKLMNPRSTVXY][0-9])[ABCEGHJKLMNPRSTVWXYZ][- ]?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/i)) {
                  valid = false;
                  errMsg = "Please enter a valid postal code";
                }

                break;

              default:
            }
          }
        }

        var nextState = {
          value: target.value,
          error: errMsg,
          valid: valid,
          showError: true
        };
        if (!(0, _lodash.isEqual)(nextState, _this.state)) _this.setState(nextState);
      } else {
        // this.setState({value: target.value, error: "", valid: true, showError: true});
        _this.setState({
          value: target.value,
          error: "",
          valid: true,
          showError: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleFocus", function (on) {
      if (on) {
        if (_this.container.className.indexOf("focused") == -1) _this.container.className += " focused";
      } else {
        _this.container.className = _this.container.className.replace(" focused", "");
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "reset", function () {
      _this.setState(_this.DEFAULT_STATE);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "focusInput", function () {
      if (_this.label) _this.label.click();
    });

    _this.DEFAULT_STATE = {
      value: "",
      error: "",
      valid: !_this.props.isRequired,
      showError: false
    };
    _this.state = _this.DEFAULT_STATE;
    _this.acceptString = '';

    _this.props.accept.forEach(function (extension) {
      switch (extension.toLowerCase()) {
        case 'pdf':
          _this.acceptString += 'application/pdf,';

        case 'doc':
          _this.acceptString += 'application/msword,';

        case 'docx':
          _this.acceptString += 'application/vnd.openxmlformats-officedocument.wordprocessingml.document,';
      }
    });

    _this.FILE_INPUT_PLACEHOLDER = "Upload File (".concat(_this.props.accept.join(', '), ")");
    return _this;
  }

  _createClass(InputField, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.type === 'file') this.setState({
        secondaryTitle: this.FILE_INPUT_PLACEHOLDER
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.showError === true && this.state.showError === false) {
        this.validate(this.Input);
      } // this.adjustErrorHeight();

    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.state = {};
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          id = _this$props.id,
          label = _this$props.label,
          type = _this$props.type,
          minLength = _this$props.minLength,
          maxLength = _this$props.maxLength;
      var _this$state = this.state,
          showError = _this$state.showError,
          error = _this$state.error,
          secondaryTitle = _this$state.secondaryTitle,
          value = _this$state.value;
      return _react.default.createElement("div", {
        className: "FormInput TextField ".concat(showError && error ? 'error' : ''),
        ref: function ref(el) {
          return _this2.container = el;
        }
      }, _react.default.createElement("label", {
        htmlFor: id,
        ref: function ref(el) {
          return _this2.label = el;
        }
      }, label), secondaryTitle && _react.default.createElement("p", {
        className: "secondaryTitle",
        role: "button",
        onClick: this.focusInput,
        onKeyDown: this.focusInput
      }, secondaryTitle), _react.default.createElement("input", {
        value: value,
        id: id,
        ref: function ref(el) {
          return _this2.Input = el;
        },
        accept: this.acceptString,
        maxLength: maxLength || '',
        minLength: minLength || '',
        onChange: this.handleChange,
        onFocus: this.toggleFocus.bind(this, true),
        onBlur: this.toggleFocus.bind(this, false),
        type: type
      }));
    }
  }]);

  return InputField;
}(_react.Component);

exports.default = InputField;
InputField.propTypes = {
  accept: _propTypes.default.array,
  id: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
  isRequired: _propTypes.default.bool,
  label: _propTypes.default.string,
  maxLength: _propTypes.default.number,
  minLength: _propTypes.default.number,
  type: _propTypes.default.string.isRequired
};
InputField.defaultProps = {
  accept: [],
  isRequired: false,
  type: 'text'
};

/***/ })

})
//# sourceMappingURL=careers.js.2da16d98a887bea7bdf5.hot-update.js.map
