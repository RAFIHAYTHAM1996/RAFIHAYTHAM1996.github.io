webpackHotUpdate("static/development/pages/terms-of-use.js",{

/***/ "./pages/terms-of-use.js":
/*!*******************************!*\
  !*** ./pages/terms-of-use.js ***!
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

var TermsOfUse =
/*#__PURE__*/
function (_Component) {
  _inherits(TermsOfUse, _Component);

  function TermsOfUse(props) {
    var _this;

    _classCallCheck(this, TermsOfUse);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TermsOfUse).call(this, props));
    _this.sections = ['YOUR ACCEPTANCE OF THIS AGREEMENT', 'CHANGES TO THIS AGREEMENT', 'PERMITTED USERS AND ACCESS', 'MISPRINTS AND ERRORS, PRICES AND PURCHASES', 'NO ADVICE OR SOLICITATION', ['DISCLAIMER, LIABILITY EXCLUSION, LIABILITY LIMITATION, RELEASE AND INDEMNITY', ['DISCLAIMER', 'LIABILITY EXCLUSION', 'LIMITATION OF LIABILITY', 'RELEASE', 'INDEMNITY']], 'LOGIN NAMES AND PASSWORDS', 'TERMINATION OF THIS AGREEMENT AND THE WEB SITE', 'INFORMATION SUBMISSIONS', 'OWNERSHIP AND PERMITTED USE OF THE WEB SITE', 'PERSONAL INFORMATION PRIVACY', 'TRADE-MARK INFORMATION', 'OTHER SITES', 'LINKING AND FRAMING THE WEB SITE', 'POSTINGS AND UNSOLICITED SUBMISSIONS', 'GOVERNING LAW AND DISPUTE RESOLUTION', 'OTHER MATTERS'];
    return _this;
  }

  _createClass(TermsOfUse, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_main.default, {
        id: "TermsOfUse",
        menu: {
          solidStyle: true
        },
        ref: function ref(el) {
          return _this2.Page = el;
        }
      }, _react.default.createElement("div", {
        className: "ContentContainer"
      }, _react.default.createElement("div", {
        className: "col-12 col-md-10"
      }, _react.default.createElement("h2", {
        className: "dark padding"
      }, "Terms of Use"), _react.default.createElement("p", {
        className: "dark mini"
      }, "Date of Last Update of this agreement: May 22, 2019"), _react.default.createElement("p", {
        className: "dark mini"
      }, "Please read this agreement carefully. It governs your use of the Hospall Private Home Care Inc. (\u201C", _react.default.createElement("b", null, "Hospall"), "\u201D) web site located at ", _react.default.createElement("a", {
        href: "https://www.hospall.com",
        className: "inline"
      }, "www.hospall.com"), " (the \u201C", _react.default.createElement("b", null, "Web Site"), "\u201D) and the services and goods provided through the Web Site. It exempts Hospall and other persons from liability or limits their liability and contains other important provisions that you should read. Each time you use the Web Site you acknowledge and signify that you have read, understood, and agreed to be bound by this agreement. If you do not agree with each provision of this agreement each time you use the Web Site, you may not use the Web Site."), _react.default.createElement("p", {
        className: "dark mini"
      }, "The Web Site offers information, tools and resources to manage the care of persons with age-related and physically debilitating needs. Hospall does not provide medical advice through the Web Site or through any services offered on the Web Site. We are not a medical referral service and the Web Site does not provide medical referrals or make recommendations or endorsements for any healthcare providers."), _react.default.createElement("p", {
        className: "dark mini"
      }, "Each time you use the Web Site, the text of this agreement, as it then reads, will govern your use. Accordingly, when you use the Web Site you should check the date of this agreement and review any changes since the last time you visited. The changes will be clearly shown in the revised document for ease of reference."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "This agreement contains the following provisions:"), _react.default.createElement("h5", {
        className: "dark padding"
      }, "Contents"), _react.default.createElement("ol", null, this.sections.map(function (section, index) {
        var renderLink = function renderLink(title, prefix) {
          return _react.default.createElement(_react.Fragment, null, prefix && _react.default.createElement("span", {
            style: {
              marginRight: 10,
              marginLeft: 10
            }
          }, prefix), _react.default.createElement("a", {
            className: "inline",
            href: "/terms-of-use#".concat((0, _makePath.default)(title))
          }, title));
        };

        if (typeof section === 'string') {
          return _react.default.createElement("li", null, renderLink(section));
        } else {
          var result = section[1].map(function (sec, idx) {
            return _react.default.createElement(_react.Fragment, null, renderLink(sec, "".concat(index + 1, ".").concat(idx + 1)), _react.default.createElement("br", null));
          });
          return _react.default.createElement(_react.Fragment, null, _react.default.createElement("li", null, renderLink(section[0])), result);
        }
      })), _react.default.createElement("br", null), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[0]),
        className: "dark padding"
      }, "1. ", this.sections[0]), _react.default.createElement("p", {
        className: "dark mini"
      }), _react.default.createElement("p", {
        className: "dark mini padding"
      }), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[1]),
        className: "dark padding"
      }, "2. ", this.sections[1]), _react.default.createElement("p", {
        className: "dark mini"
      }), _react.default.createElement("p", {
        className: "dark mini padding"
      }), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[2]),
        className: "dark padding"
      }, "3. ", this.sections[2]), _react.default.createElement("p", {
        className: "dark mini"
      }), _react.default.createElement("p", {
        className: "dark mini padding"
      }), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[3]),
        className: "dark padding"
      }, "4. ", this.sections[3]), _react.default.createElement("p", {
        className: "dark mini"
      }), _react.default.createElement("p", {
        className: "dark mini padding"
      }), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[4]),
        className: "dark padding"
      }, "5. ", this.sections[4]), _react.default.createElement("p", {
        className: "dark mini"
      }), _react.default.createElement("p", {
        className: "dark mini padding"
      }), _react.default.createElement("h5", {
        className: "dark padding"
      }, "6. ", this.sections[5][0]), _react.default.createElement("p", {
        className: "dark mini"
      }), _react.default.createElement("p", {
        className: "dark mini padding"
      }), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[5][0][0]),
        className: "dark padding"
      }, "6.1 ", this.sections[5][0][0]), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[5][0][1]),
        className: "dark padding"
      }, "6.2 ", this.sections[5][0][1]), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[5][0][2]),
        className: "dark padding"
      }, "6.3 ", this.sections[5][0][2]), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[5][0][3]),
        className: "dark padding"
      }, "6.4 ", this.sections[5][0][3]), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[5][0][4]),
        className: "dark padding"
      }, "6.5 ", this.sections[5][0][4]), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[6]),
        className: "dark padding"
      }, "7. ", this.sections[6]), _react.default.createElement("p", {
        className: "dark mini"
      }), _react.default.createElement("p", {
        className: "dark mini padding"
      }), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[7]),
        className: "dark padding"
      }, "8. ", this.sections[7]), _react.default.createElement("p", {
        className: "dark mini"
      }), _react.default.createElement("p", {
        className: "dark mini padding"
      }), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[8]),
        className: "dark padding"
      }, "9. ", this.sections[8]), _react.default.createElement("p", {
        className: "dark mini"
      }), _react.default.createElement("p", {
        className: "dark mini padding"
      }), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[9]),
        className: "dark padding"
      }, "10. ", this.sections[9]), _react.default.createElement("p", {
        className: "dark mini"
      }), _react.default.createElement("p", {
        className: "dark mini padding"
      }), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[10]),
        className: "dark padding"
      }, "11. ", this.sections[10]), _react.default.createElement("p", {
        className: "dark mini"
      }), _react.default.createElement("p", {
        className: "dark mini padding"
      }), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[11]),
        className: "dark padding"
      }, "12. ", this.sections[11]), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[12]),
        className: "dark padding"
      }, "13. ", this.sections[12]), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[13]),
        className: "dark padding"
      }, "14. ", this.sections[13]), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[14]),
        className: "dark padding"
      }, "15. ", this.sections[14]), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[15]),
        className: "dark padding"
      }, "16. ", this.sections[15]), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[16]),
        className: "dark padding"
      }, "17. ", this.sections[16]))));
    }
  }]);

  return TermsOfUse;
}(_react.Component);

var _default = TermsOfUse;
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/terms-of-use")
  

/***/ })

})
//# sourceMappingURL=terms-of-use.js.2d0dbf54301ab6685039.hot-update.js.map
