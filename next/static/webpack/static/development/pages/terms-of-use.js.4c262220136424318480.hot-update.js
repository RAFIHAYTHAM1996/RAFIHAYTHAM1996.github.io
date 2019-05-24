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
          return _react.default.createElement(_react.Fragment, null, _react.default.createElement("li", null, renderLink(section[0])), result, _react.default.createElement("br", null));
        }
      })), _react.default.createElement("br", null), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[0]),
        className: "dark padding"
      }, "1. ", this.sections[0]), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "This is an agreement between you and Hospall and governs your use of the Hospall Web Site and its content and the services and goods provided through the Web Site. Each time you visit, browse, purchase, access or otherwise use this Web Site you signify your acceptance and agreement, and the acceptance and agreement of any person you purport to represent (and for purposes of this agreement, \u201C", _react.default.createElement("b", null, "person"), "\u201D includes any type of incorporated or unincorporated entity, including your employer), without limitation or qualification, to be bound by this agreement for using this Web Site, and to comply with all applicable laws and regulations, and you represent and warrant that you have the legal authority to agree to and accept this agreement on behalf of yourself and any person (such as your employer) you purport to represent. If you do not agree with each provision of this agreement, or you are not authorized to agree to and accept this agreement, or you do not have the legal authority to agree to and accept this agreement, you may not use the Web Site."), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[1]),
        className: "dark padding"
      }, "2. ", this.sections[1]), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "You may not change, supplement, or amend this agreement in any manner. However, Hospall may, in its sole discretion, change, supplement or amend this agreement as it relates to your future use of the Web Site from time to time, for any reason, and without any notice or liability to you or any other person, by posting a revised Agreement on the Web Site. You should check for revisions each time you log into the Web Site."), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[2]),
        className: "dark padding"
      }, "3. ", this.sections[2]), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "The Web Site may be used only by persons who have reached the age of majority or legal age in their jurisdictions and who can form legally binding contracts under applicable law. The Web Site may not be used by persons in jurisdictions where access to or use of the Web Site or any part of it may be illegal or prohibited. It is solely your responsibility to determine whether your use of the Web Site is lawful, and you must comply with all applicable laws."), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[3]),
        className: "dark padding"
      }, "4. ", this.sections[3]), _react.default.createElement("p", {
        className: "dark mini"
      }, "Hospall endeavours to provide current and accurate information on the Web Site. Nevertheless, misprints or other errors may occur. Accordingly, Hospall reserves the right to change the prices, fees and charges regarding the services available through the Web Site at any time and from time to time without any notice or liability to you or any other person. Also, Hospall cannot guarantee that the services advertised on the Web Site will be available when purchased or at any relevant time. Accordingly, Hospall reserves the right at any time to reject, correct, cancel or terminate any order or shipping request. If you order services for which the fee was incorrectly displayed, Hospall will provide you with an opportunity to cancel your request for services. If you order services that are not available, Hospall will notify you by email and the purchase price you actually paid will be refunded to you. Hospall reserves the right to refuse to accept any request for services, notwithstanding any course of dealing between Hospall and you in the past."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "Your online request for services delivered over the Web Site constitutes your request to engage Hospall to supply those services. Your request for services shall be deemed to be accepted only if and when Hospall actually carries out your instructions. If you wish to cancel a request for services, you may request a cancellation by sending an email to ", _react.default.createElement("a", {
        href: "mailto:info@hospall.com",
        className: "inline"
      }, "info@hospall.com"), ". However, Hospall may not receive and process your cancellation request before it accepts and processes your request for services, in which case your cancellation request may not be effective."), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[4]),
        className: "dark padding"
      }, "5. ", this.sections[4]), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "THE CONTENT OF THE WEB SITE DOES NOT CONSTITUTE ADVICE OR RECOMMENDATIONS. YOU SHOULD SEEK THIRD PARTY PROFESSIONAL ADVICE AND RECOMMENDATIONS BEFORE ACTING OR OMITTING TO ACT BASED UPON ANY INFORMATION PROVIDED ON OR THOUGH THE WEB SITE."), _react.default.createElement("h5", {
        className: "dark padding"
      }, "6. ", this.sections[5][0]), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "Hospall strives to make your use of the Web Site a useful experience, and an easy way to purchase services from Hospall. Nevertheless, Hospall and its service providers (the \u201C", _react.default.createElement("b", null, "Providers"), "\u201D) do not accept any liability for your use of the Web Site. For that reason, the following provisions apply to your use of the Web Site:"), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[5][1][0]),
        className: "dark padding"
      }, "6.1 ", this.sections[5][1][0]), _react.default.createElement("p", {
        className: "dark mini"
      }, "YOUR USE OF THE WEB SITE IS AT YOUR OWN RISK. THE WEB SITE IS PROVIDED ON AN \u201CAS IS\u201D AND \u201CAS AVAILABLE\u201D BASIS, AND WITHOUT ANY REPRESENTATIONS, WARRANTIES OR CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED, AND INCLUDING WITHOUT LIMITATION IMPLIED WARRANTIES OF MERCHANTABLE QUALITY, FITNESS FOR A PARTICULAR PURPOSE, PERFORMANCE OR USEFULNESS, ALL OF WHICH EACH OF HOSPALL AND ITS PROVIDERS HEREBY DISCLAIMS TO THE FULLEST EXTENT PERMITTED BY LAW."), _react.default.createElement("p", {
        className: "dark mini"
      }, "YOU (AND NOT HOSPALL OR ITS PROVIDERS) ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION TO ANY COMPUTER OR OTHER EQUIPMENT ARISING FROM, CONNECTED WITH, OR RELATING TO YOUR USE OF THE WEB SITE."), _react.default.createElement("p", {
        className: "dark mini"
      }, "THE OPERATION OF THE WEB SITE MAY BE AFFECTED BY NUMEROUS FACTORS BEYOND HOSPALL\u2019S CONTROL. THE OPERATION OF THE WEB SITE MAY NOT BE CONTINUOUS OR UNINTERRUPTED OR SECURE. SECURITY AND PRIVACY AND CONFIDENTIALITY RISKS CANNOT BE ELIMINATED."), _react.default.createElement("p", {
        className: "dark mini"
      }, "HOSPALL IS UNDER NO OBLIGATION TO VERIFY THE IDENTITY OF USERS OF THE WEB SITE. HOWEVER, YOU PROMISE NOT TO SHARE USE OF YOUR LOGIN NAME OR PASSWORD NOR TO ALLOW ANYONE TO USE THE WEB SITE POSING AS YOU."), _react.default.createElement("p", {
        className: "dark mini"
      }, "THROUGH OR BECAUSE OF YOUR USE OF THE WEB SITE, YOU MAY HAVE THE OPPORTUNITY TO ENGAGE IN COMMERCIAL TRANSACTIONS WITH OTHER PERSONS. ALL SUCH TRANSACTIONS ARE AT YOUR OWN RISK. HOSPALL IS NOT A PARTY TO ANY SUCH TRANSACTIONS AND DISCLAIMS ANY AND ALL LIABILITY REGARDING ALL SUCH TRANSACTIONS."), _react.default.createElement("p", {
        className: "dark mini"
      }, "WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, HOSPALL AND ITS PROVIDERS MAKE NO REPRESENTATION, WARRANTY OR CONDITION THAT:"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "THE WEB SITE WILL BE COMPATIBLE WITH YOUR COMPUTER AND RELATED EQUIPMENT AND SOFTWARE;"), _react.default.createElement("li", null, "THE WEB SITE WILL BE AVAILABLE OR WILL FUNCTION WITHOUT INTERRUPTION OR WILL BE FREE OF ERRORS OR THAT ANY ERRORS WILL BE CORRECTED;"), _react.default.createElement("li", null, "THE INFORMATION AVAILABLE ON OR THROUGH THE WEB SITE WILL BE ACCURATE, COMPLETE, SEQUENTIAL, OR TIMELY;"), _react.default.createElement("li", null, "PARTICULAR RESULTS OR ANY RESULTS AT ALL MAY BE OBTAINED THROUGH THE USE OF THE WEB SITE;"), _react.default.createElement("li", null, "THE USE OF THE WEB SITE, INCLUDING THE BROWSING AND DOWNLOADING OF ANY INFORMATION, WILL BE FREE OF VIRUSES, TROJAN HORSES, WORMS OR OTHER DESTRUCTIVE OR DISRUPTIVE COMPONENTS; OR"), _react.default.createElement("li", null, "THE USE OF THE WEB SITE WILL NOT INFRINGE THE RIGHTS (INCLUDING INTELLECTUAL PROPERTY RIGHTS) OF ANY PERSON;")), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "AND HOSPALL AND ITS PROVIDERS DISCLAIM ANY AND ALL LIABILITY REGARDING SUCH MATTERS TO THE FULLEST EXTENT PERMITTED BY LAW."), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[5][1][1]),
        className: "dark padding"
      }, "6.2 ", this.sections[5][1][1]), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "HOSPALL AND ITS PROVIDERS WILL NOT UNDER ANY CIRCUMSTANCES BE LIABLE TO YOU OR ANY OTHER PERSON FOR ANY LOSS OF USE, LOSS OF PRODUCTION, LOSS OF INCOME OR PROFITS (ANTICIPATED OR OTHERWISE), LOSS OF MARKETS, ECONOMIC LOSS, SPECIAL, INDIRECT OR CONSEQUENTIAL LOSS OR DAMAGE OR PUNITIVE DAMAGES, WHETHER IN CONTRACT, TORT OR UNDER ANY OTHER THEORY OF LAW OR EQUITY, ARISING FROM, CONNECTED WITH, OR RELATING TO THE USE OF THE WEB SITE BY YOU OR ANY OTHER PERSON, AND REGARDLESS OF ANY NEGLIGENCE OR OTHER FAULT OR WRONGDOING BY HOSPALL OR ANY OF ITS PROVIDERS OR ANY PERSON FOR WHOM HOSPALL OR ANY OF ITS PROVIDERS ARE RESPONSIBLE, AND NOTWITHSTANDING THAT HOSPALL OR ITS PROVIDERS MAY HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH LOSS OR DAMAGES BEING INCURRED BY YOU OR ANY OTHER PERSON."), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[5][1][2]),
        className: "dark padding"
      }, "6.3 ", this.sections[5][1][2]), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "IN NO EVENT WILL HOSPALL\u2019S OR ANY OF ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENT AND/OR SERVICE PROVIDERS\u2019 TOTAL LIABILITY TO YOU OR ANY OTHER PERSON FOR ANY CLAIMS, PROCEEDINGS, LIABILITIES, OBLIGATIONS, DAMAGES, LOSSES, AND COSTS, WHETHER IN CONTRACT, TORT OR UNDER ANY OTHER THEORY OF LAW OR EQUITY, AND REGARDLESS OF ANY NEGLIGENCE OR OTHER FAULT OR WRONGDOING BY HOSPALL OR ANY PERSON FOR WHOM HOSPALL IS RESPONSIBLE, EXCEED THE LESSER OF (I) THE AMOUNT YOU PAID TO HOSPALL FOR THE USE OF THE WEB SITE AND FOR THE PURCHASE OF SERVICES VIA THE WEB SITE AND (II) ONE THOUSAND ($1000) DOLLARS."), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[5][1][3]),
        className: "dark padding"
      }, "6.4 ", this.sections[5][1][3]), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "YOU HEREBY RELEASE, REMISE AND FOREVER DISCHARGE EACH OF HOSPALL AND ITS PROVIDERS AND ALL OF THEIR RESPECTIVE AGENTS, DIRECTORS, OFFICERS, EMPLOYEES, INFORMATION PROVIDERS, SERVICE PROVIDERS, SUPPLIERS, LICENSORS AND LICENSEES, AND ALL OTHER RELATED, ASSOCIATED, OR CONNECTED PERSONS FROM ANY AND ALL MANNER OF RIGHTS, CLAIMS, COMPLAINTS, DEMANDS, CAUSES OF ACTION, PROCEEDINGS, LIABILITIES, OBLIGATIONS, LEGAL FEES, COSTS, AND DISBURSEMENTS OF ANY NATURE AND KIND WHATSOEVER AND HOWSOEVER ARISING, WHETHER KNOWN OR UNKNOWN, WHICH NOW OR HEREAFTER EXIST, WHICH ARISE FROM, RELATE TO, OR ARE CONNECTED WITH YOUR USE OF THE WEB SITE."), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[5][1][4]),
        className: "dark padding"
      }, "6.5 ", this.sections[5][1][4]), _react.default.createElement("p", {
        className: "dark mini"
      }, "YOU AGREE TO INDEMNIFY, DEFEND AND HOLD HARMLESS EACH OF HOSPALL, AND ITS SERVICE PROVIDERS AND ALL OF THEIR RESPECTIVE AGENTS, DIRECTORS, OFFICERS, EMPLOYEES, INFORMATION PROVIDERS, SERVICE PROVIDERS, SUPPLIERS, LICENSORS AND LICENSEES, AND ALL OTHER RELATED, ASSOCIATED, OR CONNECTED PERSONS (COLLECTIVELY, THE \u201C", _react.default.createElement("b", null, "INDEMNIFIED PARTIES"), "\u201D) FROM AND AGAINST ANY AND ALL LIABILITIES, EXPENSES AND COSTS, INCLUDING WITHOUT LIMITATION REASONABLE LEGAL FEES AND EXPENSES, INCURRED BY THE INDEMNIFIED PARTIES IN CONNECTION WITH ANY CLAIM OR DEMAND ARISING OUT OF, RELATED TO, OR CONNECTED WITH YOUR USE OF THE WEB SITE, THE USE OF THE WEB SITE BY SOMEONE POSING AS YOU, OR YOUR BREACH OF THIS AGREEMENT. YOU WILL ASSIST AND CO-OPERATE AS FULLY AS REASONABLY REQUIRED BY THE INDEMNIFIED PARTIES IN THE DEFENCE OF ANY SUCH CLAIM OR DEMAND. YOU FURTHER AGREE TO INDEMNIFY HOSPALL AND THE PROVIDERS FROM ALL SUITS, DAMAGES, COSTS AND LIABILITIES WHATSOEVER ARISING FROM ANY TRANSACTIONS IN WHICH YOU ENGAGE USING PRODUCTS OR SERVICES OBTAINED FROM OR THROUGH THE WEB SITE."), _react.default.createElement("p", {
        className: "dark mini padding"
      }), _react.default.createElement("h5", {
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
//# sourceMappingURL=terms-of-use.js.4c262220136424318480.hot-update.js.map
