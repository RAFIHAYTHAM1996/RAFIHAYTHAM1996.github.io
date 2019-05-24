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

var _gsap = __webpack_require__(/*! gsap */ "./node_modules/gsap/TweenMax.js");

var _ScrollToPlugin = _interopRequireDefault(__webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js"));

var _main = _interopRequireDefault(__webpack_require__(/*! ../layouts/main */ "./layouts/main.js"));

var _makePath = _interopRequireDefault(__webpack_require__(/*! ../util/make-path */ "./util/make-path.js"));

var _settings = _interopRequireDefault(__webpack_require__(/*! ../util/settings */ "./util/settings.js"));

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

var TermsOfUse =
/*#__PURE__*/
function (_Component) {
  _inherits(TermsOfUse, _Component);

  function TermsOfUse(props) {
    var _this;

    _classCallCheck(this, TermsOfUse);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TermsOfUse).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleHashChange", function () {
      _gsap.TweenLite.set(window, {
        scrollTo: window.pageYOffset - 180
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "interceptClickEvent", function (e) {
      var href;
      var target = e.target || e.srcElement;

      if (target.tagName === 'A') {
        href = target.getAttribute('href');

        if (href && href[0] === "#") {
          //tell the browser not to respond to the link click
          e.preventDefault();

          _gsap.TweenLite.set(window, {
            scrollTo: window.pageYOffset + document.getElementById(href).getBoundingClientRect().top - 180
          });
        }
      }
    });

    _this.sections = ['YOUR ACCEPTANCE OF THIS AGREEMENT', 'CHANGES TO THIS AGREEMENT', 'PERMITTED USERS AND ACCESS', 'MISPRINTS AND ERRORS, PRICES AND PURCHASES', 'NO ADVICE OR SOLICITATION', ['DISCLAIMER, LIABILITY EXCLUSION, LIABILITY LIMITATION, RELEASE AND INDEMNITY', ['DISCLAIMER', 'LIABILITY EXCLUSION', 'LIMITATION OF LIABILITY', 'RELEASE', 'INDEMNITY']], 'LOGIN NAMES AND PASSWORDS', 'TERMINATION OF THIS AGREEMENT AND THE WEB SITE', 'INFORMATION SUBMISSIONS', 'OWNERSHIP AND PERMITTED USE OF THE WEB SITE', 'PERSONAL INFORMATION PRIVACY', 'TRADE-MARK INFORMATION', 'OTHER SITES', 'LINKING AND FRAMING THE WEB SITE', 'POSTINGS AND UNSOLICITED SUBMISSIONS', 'GOVERNING LAW AND DISPUTE RESOLUTION', 'OTHER MATTERS'];

    if (!_settings.default.isServer()) {
      window.addEventListener('hashchange', _this.handleHashChange);
    }

    return _this;
  }

  _createClass(TermsOfUse, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('hashchange', this.handleHashChange);
    }
  }, {
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
            href: "#".concat((0, _makePath.default)(title))
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
        id: (0, _makePath.default)(this.sections[5][0]),
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
        className: "dark mini"
      }, "ADVICE AND INFORMATION PROVIDED BY HOSPALL OR ITS REPRESENTATIVES, WHETHER ORAL OR WRITTEN, WILL NOT CREATE ANY REPRESENTATION, WARRANTY OR CONDITION OR VARY OR AMEND THIS AGREEMENT, INCLUDING THE ABOVE DISCLAIMER, LIABILITY EXCLUSION, LIABILITY LIMITATION, RELEASE AND INDEMNITY PROVISIONS, AND YOU MAY NOT RELY UPON ANY SUCH ADVICE OR INFORMATION."), _react.default.createElement("p", {
        className: "dark mini"
      }, "The exclusion of certain warranties and the limitation of certain liabilities is prohibited by legislation in some jurisdictions. Such legislative limitations may apply to you."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "The disclaimer, liability exclusion, liability limitation, release, and indemnity provisions in this agreement survive indefinitely after the termination of this agreement."), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[6]),
        className: "dark padding"
      }, "7. ", this.sections[6]), _react.default.createElement("p", {
        className: "dark mini"
      }, "Web Site accounts may be accessed only by use of a unique login name and password. The use of a password does not restrict access by Hospall and its Providers to the password-protected information. Login names and passwords may not be shared. For security reasons, you must keep your login name and password confidential and not disclose them to any person or permit any other person to use them, except an authorized Hospall representative. Also, passwords must be non-obvious, hard-to-guess, confidential and changed on a regular basis, and you must log-out at the end of each session."), _react.default.createElement("p", {
        className: "dark mini"
      }, "You (or your employer, if you use the Web Site on behalf of your employer) are solely responsible and liable for any use and misuse of your login name and password and for all activities that occur under your login name and password. You must ensure that all uses of your login name and password comply with this agreement."), _react.default.createElement("p", {
        className: "dark mini"
      }, "You must immediately notify Hospall of any unauthorized use of your login name or password, or if you know or suspect that your login name or password has been lost or stolen, has become known to any other person, or has been otherwise compromised. "), _react.default.createElement("p", {
        className: "dark mini"
      }, "All login names and passwords remain the property of Hospall and may be cancelled or suspended at any time by Hospall without any notice or liability to you or any other person. Hospall is not under any obligation to verify the actual identity or authority of the user of any login name or password."), _react.default.createElement("p", {
        className: "dark mini"
      }, "You must respond promptly to all email and other correspondence from Hospall, including without limitation email and correspondence concerning complaints or concerns regarding your use of your login name or password or your use of the Web Site."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "THE SECURITY AND PRIVACY PROVIDED BY PASSWORDS IS NOT COMPLETE, AND CAN BE CIRCUMVENTED. YOUR USE OF PASSWORDS IS AT YOUR OWN RISK."), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[7]),
        className: "dark padding"
      }, "8. ", this.sections[7]), _react.default.createElement("p", {
        className: "dark mini"
      }, "If you breach any provision of this agreement, you may no longer use the Web Site."), _react.default.createElement("p", {
        className: "dark mini"
      }, "Hospall may, in its sole discretion, change, suspend or terminate, temporarily or permanently, the Web Site or any part of it or any of its features at any time, for any reason, without any notice or liability to you or any other person."), _react.default.createElement("p", {
        className: "dark mini"
      }, "Hospall may at any time and for any reason, with or without cause, and in its sole discretion, immediately suspend or terminate (in whole or in part) your permission to use the Web Site and your login name and password, all without any notice or liability to you or any other person."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "If this agreement or your permission to use the Web Site is terminated by you or Hospall for any reason, this agreement will nevertheless continue to apply and be binding upon you in respect of your prior use of the Web Site and your engagement of the services of Hospall through the Web Site and anything connected with, relating to or arising from those matters."), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[8]),
        className: "dark padding"
      }, "9. ", this.sections[8]), _react.default.createElement("p", {
        className: "dark mini"
      }, "All information you provide through the Web Site, including health information, registration information (name and email address), payment information (credit card numbers and expiration dates), and transaction-related information, must be true, accurate, current and complete. You must also provide Hospall with updated registration information within 30 days of any changes."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "Hospall will rely on the information you provide. You will be solely responsible and liable for any and all loss, damage, and additional costs that you, Hospall or any other person may incur as a result of your submission of any false, incorrect or incomplete information or your failure to update your registration information and payment information within 30 days of any change. Hospall may require a copy of a government-issued form of identification before making any changes to your registration information."), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[9]),
        className: "dark padding"
      }, "10. ", this.sections[9]), _react.default.createElement("p", {
        className: "dark mini"
      }, "The Web Site and all information (in text, graphical, video and audio forms), images, icons, software, design, applications and other elements available on or through the Web Site are the property of Hospall, its Providers and others, and are protected by Canadian and international copyright, trade-mark, and other laws. Your use of the Web Site does not transfer to you or any other person any ownership or other rights in the Web Site or its content. You may only use the Web Site in the manner described specifically in this agreement."), _react.default.createElement("p", {
        className: "dark mini"
      }, "The Web Site may not be used for any purpose not expressly permitted by this agreement. In particular, except as expressly stated otherwise in this agreement, the Web Site may not be copied, imitated, reproduced, republished, uploaded, posted, transmitted, modified, indexed, catalogued, or distributed in any way, in whole or in part, without the express prior written consent of Hospall. You may not use any of the software that is used in the operation of the Web Site except in the course of using the Web Site. You may not reproduce, copy, duplicate, sell, or resell any part of the Web Site (including the software used in the operation of the Web Site) or access to the Web Site."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "The Web Site is made available to you for your lawful use only. You may access and browse the Web Site using commercially available, SSL-capable Web browser software. You may print or download the pages of the Web Site for your personal use provided that you do not modify any of the Web Site pages or other content and you do not remove or alter any visible or non-visible identification, marks, notices, or disclaimers. You may modify the business forms, such as contracts, notices and the like that you download from the Web Site, without being in breach of this provision."), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[10]),
        className: "dark padding"
      }, "11. ", this.sections[10]), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "Hospall\u2019s handling of personal information (information that can identify individuals, directly or indirectly) is addressed by Hospall\u2019s Privacy Policy, which can be accessed ", _react.default.createElement("a", {
        href: "/privacy",
        className: "inline"
      }, "here"), ", to terms of which are integrated by reference into the terms of this Website Terms of Use."), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[11]),
        className: "dark padding"
      }, "12. ", this.sections[11]), _react.default.createElement("p", {
        className: "dark mini"
      }, "Hospall Private Home Care\u2122 and the Hospall logo are registered and unregistered trademarks and trade names owned by Hospall Private Home Care Inc. Other product and company names and logos appearing on the Web Site may be registered or unregistered tradenames, trademarks and service-marks of their respective owners."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "Any use of the tradenames, trademarks, service-marks and logos (collectively \u201C", _react.default.createElement("b", null, "Marks"), "\u201D) displayed on the Web Site, except as expressly provided in this agreement, is strictly prohibited. Nothing appearing on the Web Site or elsewhere shall be construed as granting, by implication, estoppel, or otherwise, any licence or right to use any Marks displayed on the Web Site."), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[12]),
        className: "dark padding"
      }, "13. ", this.sections[12]), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "The Web Site may include links to other Web Sites or resources and businesses operated by other persons (\u201C", _react.default.createElement("b", null, "Other Sites"), "\u201D). Other Sites are independent from Hospall, and Hospall has no responsibility or liability for or control over Other Sites, their businesses, goods, services, or content. Links to Other Sites are provided solely for your convenience. Hospall does not sponsor or endorse any Other Sites or their content or the services available through those other Web Sites. Your use of Other Sites and your dealings with the owners or operators of Other Sites is at your own risk, and you shall not make any claim against Hospall arising out of your use of any Other Sites or your dealings with the owners or operators of any Other Sites. As between you and Hospall, the provisions of this agreement under the section headed Disclaimer, Liability Exclusion, Liability Limitation, Release and Indemnity apply, with all necessary modifications, to your access to and use of any Other Sites and their business, goods, services, and content."), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[13]),
        className: "dark padding"
      }, "14. ", this.sections[13]), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "Links to the Web Site without the express written permission of Hospall are strictly prohibited. To request permission to link to the Web Site, please contact Hospall. Hospall reserves the right to cancel and revoke any permission it may give to link to the Web Site at any time, for any reason, without any notice, and without any liability to you or any other person. The framing of the Web Site or any of its content in any form and by any method is strictly prohibited."), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[14]),
        className: "dark padding"
      }, "15. ", this.sections[14]), _react.default.createElement("p", {
        className: "dark mini"
      }, "You may not modify the Web Site or post comments, communications, or any other data of any kind to or on the Web Site with the intention that such postings may be viewed by other users of the Web Site."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "Hospall does not accept or consider unsolicited ideas, including ideas for new advertising campaigns, new promotions, new or improved goods, services or technologies, product enhancements, processes, materials, marketing plans, or new product names. The purpose of this policy is to avoid potential misunderstandings or disputes. Accordingly, please do not send any unsolicited ideas, suggestions or other materials (\u201C", _react.default.createElement("b", null, "Submissions"), "\u201D) to Hospall or the Web Site. However, if you do send Submissions to Hospall or the Web Site you automatically grant (or warrant that the owner of the Submissions grants) to Hospall and its assigns a perpetual, royalty-free, irrevocable, unrestricted, non-exclusive, world-wide, assignable, sub-licensable, right and license to use, copy, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, display and otherwise exploit the Submissions or any ideas, concepts, know-how or techniques associated with the Submissions for any purpose whatsoever, commercial or otherwise, using any form, media or technology now known or later developed, without providing compensation to you or any other person, without any liability whatsoever, and free from any obligation of confidence or other duties on the part of Hospall or its assigns, and you agree, represent and warrant that all moral rights in the Submissions are waived in favour of Hospall and its assigns."), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[15]),
        className: "dark padding"
      }, "16. ", this.sections[15]), _react.default.createElement("p", {
        className: "dark mini"
      }, "This agreement, your use of the Web Site, and all related matters are governed solely by the laws of the Ontario, Canada and applicable federal laws of Canada, excluding any rules of private international law or the conflict of laws which would lead to the application of any other laws."), _react.default.createElement("p", {
        className: "dark mini"
      }, "Any dispute between Hospall and you or any other person arising from, connected with or relating to the Web Site, this agreement or any related matters must be resolved before the Courts of Ontario sitting in the City of Toronto, Ontario, Canada, and you hereby irrevocably submit and attorn to the original and exclusive jurisdiction of those Courts in respect of any such dispute or matter."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "Any claim or cause of action you may have arising from, connected with, or relating to your use of the Web Site, this agreement, or any related matters must be commenced in a court of competent jurisdiction in the City of Toronto, Ontario, Canada within six (6) months after the claim or cause of action arises, after which time the claim or cause of action is forever barred, regardless of any statute or law to the contrary."), _react.default.createElement("h5", {
        id: (0, _makePath.default)(this.sections[16]),
        className: "dark padding"
      }, "17. ", this.sections[16]), _react.default.createElement("p", {
        className: "dark mini"
      }, "If any provision of this agreement is found to be unlawful, void, or for any reason unenforceable, then that provision shall be deemed to be severed from the rest of this agreement and shall not affect the validity and enforceability of any remaining provisions."), _react.default.createElement("p", {
        className: "dark mini"
      }, "The provisions of this agreement will enure to the benefit of and be binding upon each of Hospall and its Providers and each of their respective successors and assigns and related persons and you and your heirs, executors, administrators, successors, permitted assigns, and personal representatives. You may not assign this agreement or your rights and obligations under this agreement without the express prior written consent of Hospall, which may be withheld in Hospall\u2019s sole discretion. Hospall may assign this agreement and its rights and obligations under this agreement without your consent."), _react.default.createElement("p", {
        className: "dark mini"
      }, "No waiver, express or implied, by either party of any breach of or default under this agreement will constitute a continuing waiver of such breach or default or be deemed to be a waiver of any preceding or subsequent breach or default."), _react.default.createElement("p", {
        className: "dark mini"
      }, "You and Hospall are independent contractors and no agency, partnership, joint venture, employment or franchise relationship is intended or created by this agreement or your use of the Web Site."), _react.default.createElement("p", {
        className: "dark mini"
      }, "The parties have expressly requested and required that this agreement and all other related documents be drawn up in the English language. Les parties conviennent et exigent expressement que ce Contrat et tous les documents qui s\u2019y rapportent soient r\xE9dig\xE9s en anglais."), _react.default.createElement("p", {
        className: "dark mini"
      }, "Any rights not expressly granted by this agreement are reserved to Hospall."), _react.default.createElement("p", {
        className: "dark mini"
      }, "This agreement is subject to change without notice."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, _react.default.createElement("b", null, "These website terms of use were last revised May 22, 2019.")))));
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
//# sourceMappingURL=terms-of-use.js.79c6bf3ce1330fa59e0e.hot-update.js.map
