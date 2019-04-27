webpackHotUpdate("static/development/pages/services.js",{

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
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

var _link = _interopRequireDefault(__webpack_require__(/*! next/link */ "./node_modules/next/link.js"));

var _Social = _interopRequireDefault(__webpack_require__(/*! ../Social/Social */ "./components/Social/Social.js"));

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

var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer(props) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Footer).call(this, props));
    _this.ASSET_PATH = _settings.default.ASSET_PATH + "images/";
    _this.resources = [{
      title: 'Quick Links',
      links: [{
        title: 'Our Services',
        url: '/services'
      }, {
        title: 'About Us',
        url: '/about'
      }, {
        title: 'Testimonials',
        url: '/testimonials'
      }, {
        title: 'Contact Us',
        url: '/contact'
      }]
    }, {
      title: 'Resources',
      links: [{
        title: 'FAQ',
        url: '/faq'
      }, {
        title: 'Careers',
        url: '/careers'
      }]
    }, {
      title: 'Legal',
      links: [{
        title: 'Privacy Policy',
        url: '/privacy'
      }]
    }];
    return _this;
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        className: "Footer",
        ref: function ref(el) {
          return _this2.Footer = el;
        }
      }, _react.default.createElement("div", {
        className: "row container"
      }, _react.default.createElement("div", {
        className: "row col-md-8 resource-groups-container"
      }, this.resources.map(function (resource, index) {
        return _react.default.createElement("div", {
          className: "col-6 col-sm-3 resource-group",
          key: index
        }, _react.default.createElement("p", {
          className: "resource-group-title mini"
        }, resource.title), resource.links.map(function (link, idx) {
          return link.title && _react.default.createElement(_link.default, {
            href: link.url,
            key: idx,
            prefetch: true
          }, _react.default.createElement("a", {
            className: "resource-link mini"
          }, link.title));
        }));
      })), _react.default.createElement("div", {
        className: "col-md-4 footer-logo-container"
      }, _react.default.createElement("img", {
        src: this.ASSET_PATH + "brand-landing.png",
        alt: "Hospall HomeCare",
        className: "footer-logo"
      }), _react.default.createElement("div", {
        className: "d-none d-md-block"
      }, _react.default.createElement("p", {
        className: "dark mini"
      }, "Hospall Private Homecare provides peace of mind to families concerned with the health and care needs of their loved ones."), _react.default.createElement(_Social.default, null)))), _react.default.createElement("div", {
        className: "row container"
      }, _react.default.createElement("div", {
        className: "d-block d-md-none",
        style: {
          marginTop: 20,
          marginBottom: 30
        }
      }, _react.default.createElement(_Social.default, {
        align: "center"
      })), _react.default.createElement("p", {
        className: "mini copyright"
      }, "\xA9 2019 HOSPALL PRIVATE HOME CARE INC. ALL RIGHTS RESERVED.")));
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;
Footer.propTypes = {
  title: _propTypes.default.string.isRequired,
  subtitle: _propTypes.default.string,
  image: _propTypes.default.string,
  className: _propTypes.default.string
};
Footer.defaultProps = {
  title: "Title"
};

/***/ })

})
//# sourceMappingURL=services.js.dd2bef9a7e715c5f2b09.hot-update.js.map