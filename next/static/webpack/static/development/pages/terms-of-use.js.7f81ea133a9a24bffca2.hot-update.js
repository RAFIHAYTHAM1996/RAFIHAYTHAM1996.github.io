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
              marginLeft: 15
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
      })), _react.default.createElement("h5", {
        className: "dark padding"
      }, "SECTION 1: PRIVACY COMMITMENT"), _react.default.createElement("p", {
        className: "dark mini"
      }, "Hospall Private Homecare Inc. (\u201C", _react.default.createElement("b", null, "Hospall"), "\u201D) is committed to ensuring that the information it holds is protected and that confidentiality is maintained. Hospall\u2019s duties include collecting, using, disclosing, retaining, and destroying personal information as it relates to providing health care services and otherwise caring for you."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "Hospall\u2019s Privacy Management Program is governed by the\xA0", _react.default.createElement("a", {
        className: "inline",
        href: "https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/",
        target: "_blank"
      }, "Personal Information Protection and Electronic Documents Act (PIPEDA)"), " and the ", _react.default.createElement("a", {
        className: "inline",
        href: "https://www.ontario.ca/laws/statute/04p03",
        target: "_blank"
      }, "Personal Health Information Protection Act (PHIPA)"), ". Hospall may also be governed by additional applicable provincial and professional standards."), _react.default.createElement("h5", {
        className: "dark padding"
      }, "SECTION 2: ACCOUNTABILITY"), _react.default.createElement("p", {
        className: "dark mini"
      }, "While all Hospall employees are accountable for maintaining the privacy of information obtained in the course of their employment, Hospall\u2019s Privacy Officer is responsible for overall compliance. Hospall staff receive careful training on privacy practices and our own Privacy Management Program."), _react.default.createElement("p", {
        className: "dark mini"
      }, "In order to provide you with good care and service, Hospall\u2019s employees endeavor to ensure that all personal information is accurate, complete, and up to date. We need your assistance in doing this. Please let us know if any information relevant to your health care needs to be changed. However, we will not continue updating your information once you have been discharged."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "As required, Hospall will amend this document and its Privacy Management Program when changes to privacy legislation or best practices are known."), _react.default.createElement("h5", {
        className: "dark padding"
      }, "SECTION 3: WHAT PERSONAL INFORMATION WE COLLECT AND WHY"), _react.default.createElement("p", {
        className: "dark mini"
      }, "Hospall staff will collect the personal information required to provide you with the care and service requested and to respond to questions and inquiries you have. Such information may include your name, address, contact information (on yourself and other designated persons), your health information number, and the name of your family physician and any other health care providers. For all services that you request, we may ask you specific questions to help us determine how you manage at home with your current health status, including your ability to be independent in the residence."), _react.default.createElement("p", {
        className: "dark mini"
      }, "When you request or require home support or personal support services, we will collect information regarding your health and ability to perform activities of daily living. This allows us to assess how best to support you. If you require nursing services, we will complete a more thorough assessment of your health to determine the level of care that you will require."), _react.default.createElement("p", {
        className: "dark mini"
      }, "If you make inquiries of Hospall online, we may ask for your name, email address and any other information that we feel is reasonably necessary to answer your questions."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "If at any time we require more or different information, or your information is required for a purpose other than the care and service discussed with you, unless otherwise permitted or restricted by law, you will be contacted."), _react.default.createElement("h5", {
        className: "dark padding"
      }, "SECTION 4: CONSENT"), _react.default.createElement("p", {
        className: "dark mini"
      }, "We will obtain your consent \u2013 either express or implied \u2013 before collecting your personal information. Implied consent depends on what is reasonably anticipated in the circumstances. For example, if you ask Hospall to attend at your house, it is implied that we will collect your address for purposes of attending at your house."), _react.default.createElement("p", {
        className: "dark mini"
      }, "When your case begins, we will request that you give us your express written consent for the services that we will be providing you. This is typically done by way of a Client Consent and can include your permission regarding the release of information that we require. Before you fill out this form, our supervisor or nurse will discuss it with you and, at this point, you can advise us if there are certain people with whom you do not want your information shared with."), _react.default.createElement("p", {
        className: "dark mini"
      }, "Once your consent is given, it is deemed to be given throughout the entirety of our service, however, you may withdraw your permission or consent in part or in whole, at any time during your care and service. Changing your consent may restrict our ability to provide the requested services. Should this occur, you will be informed about how your consent change will affect our services. In order to change the terms of your consent, or to withdraw, simply contact the Hospall office."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "For those individuals who are unable to provide consent, e.g. minors, those who are seriously ill or mentally handicapped persons, consent will be obtained by an authorized authority, e.g. a legal guardian, power of attorney or the executor of your estate."), _react.default.createElement("h5", {
        className: "dark padding"
      }, "SECTION 5: HOW WE USE YOUR PERSONAL INFORMATION"), _react.default.createElement("p", {
        className: "dark mini"
      }, "Your personal information will be used so that we can provide you with the health care services you request and work with your other health care professionals. Using the Client Consent form, our nurse will review the information and record your wishes."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "Your information may be reviewed with respect to auditing and quality improvement services, but this may be done without reference to specific people. The purpose of such a review is to monitor our performance and improve our services."), _react.default.createElement("h5", {
        className: "dark padding"
      }, "SECTION 6: WHO WE SHARE YOUR PERSONAL INFORMATION WITH"), _react.default.createElement("p", {
        className: "dark mini"
      }, "When you start service with Hospall, and you sign the Client Consent, we discuss with you who we may share your information with. We will typically share your information with those individuals that we consider the members of your \u201Cmultidisciplinary care team\u201D or \u201Ccircle of care\u201D. We may also share your information as otherwise permitted or required by law. Not all employees of Hospall have access to your personal information, even though they are employees of Hospall, and you are a client of Hospall."), _react.default.createElement("p", {
        className: "dark mini"
      }, "If there are people to whom you do not want us to share your information with, please let us know."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "In those rare circumstances where we are required by law to share your information, Hospall will verify the lawful authority requesting the information and only provide what is reasonably necessary for the stated purpose of such request."), _react.default.createElement("h5", {
        className: "dark padding"
      }, "SECTION 7: HOW LONG WE KEEP YOUR PERSONAL INFORMATION"), _react.default.createElement("p", {
        className: "dark mini"
      }, "Hospall will continue to have access to your information even after your services have been discontinued. We retain all discontinued client records for a minimum of 10 years, or longer if required by provincial regulation. We retain children\u2019s records until the child reaches the age of majority plus 10 years. These records whether at our offices or off site, are stored in a manner that are designed to ensure ongoing security. Hospall uses off site storage facilities that cite privacy practices which are in compliance with relevant privacy legislation and only after a Confidentiality Agreement has been signed with the facility. Records are kept of the location of files retained, so that we may retrieve them as required. At the end of the 10-year period, all information that we have, regardless of format, is destroyed in a confidential manner."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "In a circumstance where the records are created by Hospall and then retained by other health care organizations, such organizations will maintain the information according to their own retention schedule. Accordingly, access requests will be redirected to the relevant organization in possession of the information."), _react.default.createElement("h5", {
        className: "dark padding"
      }, "SECTION 8: SAFEGUARDS"), _react.default.createElement("p", {
        className: "dark mini"
      }, "Hospall has many measures in place designed to ensure that your information remains confidential, and to comply with requirements under PIPEDA, PHIPA and other applicable laws. Confidentiality applies to all of your information, regardless of whether we store it electronically, in paper format or simply within the knowledge of our staff."), _react.default.createElement("p", {
        className: "dark mini"
      }, "Staff members complete privacy training at the commencement of their employment and throughout the course of their employment. In addition, they sign a confidentiality agreement and are not permitted to share any information beyond what is required to exercise their duties at Hospall."), _react.default.createElement("p", {
        className: "dark mini"
      }, "Electronic information is password protected and firewalled. Unauthorized access is restricted through the implementation of safeguards for the storage of information. We also limit access to personal information to those individuals that require it to complete your services. In this regard, we manage our employees and contractors strictly to ensure that information is treated with the utmost care."), _react.default.createElement("p", {
        className: "dark mini"
      }, "Hospall protects hard copy files by storing them in our office where access is restricted to staff with the necessary authority. Outside of working hours, the files are kept in a locked and secure area."), _react.default.createElement("p", {
        className: "dark mini"
      }, "In order to protect faxes from going astray, they are sent to pre-programmed numbers and include a confidentiality sheet that outlines what to do if received in error. Similarly, our emails contain a statement informing the receiver what to do if the message is received in error. Both faxes and emails contain the number for Hospall\u2019s Privacy Officer in case errors occur."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "Hospall is not responsible for the privacy practices of organizations linked on our website."), _react.default.createElement("h5", {
        className: "dark padding"
      }, "SECTION 9: ACCESS TO YOUR PERSONAL INFORMATION"), _react.default.createElement("p", {
        className: "dark mini"
      }, "Subject to certain limitations, you are able to view your personal information at any time. This can be done by sending a written request to Hospall\u2019s Privacy Officer. You may also request a copy of your file by writing to your local Hospall branch. We invite you to view your records with one of our nurse managers so that they may be available to answer any of your questions."), _react.default.createElement("p", {
        className: "dark mini"
      }, "In order to maintain our privacy standards, we may need information to identify the person who is making a request for the information. This is only used to make sure that the requesting person is authorized to obtain the information."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "When Hospall receives a request for information, we aim to respond to it within 30 days, subject to any limitations that may arise at law. If your access to information is refused for any reason, we will provide you with the reasons for such refusal. A reasonable fee may be charged based on the information that is being requested."), _react.default.createElement("h5", {
        className: "dark padding"
      }, "SECTION 10: YOUR RIGHT TO CORRECT YOUR PERSONAL INFORMATION"), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "You may contact Hospall in writing to request a correction of any errors that may be in your personal information. If the requested correction cannot be made, we will notify you of the reasons for this."), _react.default.createElement("h5", {
        className: "dark padding"
      }, "SECTION 11: CONTACT INFORMATION - PRIVACY OFFICE"), _react.default.createElement("p", {
        className: "dark mini"
      }, _react.default.createElement("b", null, "If You Need More Information about Hospall and its Privacy Practices")), _react.default.createElement("p", {
        className: "dark mini"
      }, "Anyone can contact Hospall, at the contact information below, with respect to a complaint, question, concern or compliment relating to Hospall\u2019s information handling practices. Any complaints made to Hospall will be investigated thoroughly and action will be taken if the complaint is found to be justified."), _react.default.createElement("p", {
        className: "dark mini"
      }, "If you have any questions or concerns about your personal information, or if you would like more information about Hospall\u2019s policies and practices for managing and handling personal information, you are invited to contact Hospall\u2019s Privacy Office by email at\xA0", _react.default.createElement("a", {
        className: "inline",
        href: "mailto:michelle@hospall.com"
      }, "michelle@hospall.com"), ", by calling\xA0", _react.default.createElement("a", {
        className: "inline",
        href: "tel:+1-800-208-8480p101"
      }, "1-800-208-8480 ex 101"), "\xA0or in writing to Hospall Private Homecare Inc., 28 Claudview St, King City, ON L7B 0C6, Attention: Privacy Officer."), _react.default.createElement("p", {
        className: "dark mini"
      }, "You are also entitled to contact your provincial Privacy Commissioner\u2019s Office if you feel this is necessary. While we would appreciate the opportunity to do what we can to address your concerns, we would also assist you in contacting your Privacy Commissioner\u2019s Office if you believe this is warranted."), _react.default.createElement("p", {
        className: "dark mini padding"
      }, "Latest Revision Date: May 22, 2019"))));
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
//# sourceMappingURL=terms-of-use.js.7f81ea133a9a24bffca2.hot-update.js.map
