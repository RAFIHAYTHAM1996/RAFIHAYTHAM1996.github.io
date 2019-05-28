webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Menu/Menu.js":
/*!*********************************!*\
  !*** ./components/Menu/Menu.js ***!
  \*********************************/
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

var _gsap = _interopRequireDefault(__webpack_require__(/*! gsap */ "./node_modules/gsap/TweenMax.js"));

var _link = _interopRequireDefault(__webpack_require__(/*! next/link */ "./node_modules/next/link.js"));

var _settings = _interopRequireDefault(__webpack_require__(/*! ../../util/settings */ "./util/settings.js"));

var _data = _interopRequireDefault(__webpack_require__(/*! ../../static/json/data.json */ "./static/json/data.json"));

var _makePath = _interopRequireDefault(__webpack_require__(/*! ../../util/make-path */ "./util/make-path.js"));

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
} // import Toggle from 'react-toggle';


var Menu =
/*#__PURE__*/
function (_Component) {
  _inherits(Menu, _Component);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "checkResponsive", function () {
      document.body.style.overflow = "auto";

      if (!_settings.default.isServer()) {
        var responsive = window.innerWidth < _this.MIN_SCREEN_WIDTH;

        if (responsive != _this.state.responsive) {
          if (!responsive && !_this.state.collapsed) _this.toggleMenu('close');

          _this.setState({
            responsive: responsive
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleMenu", function (force, callback) {
      if (_this.animOn) return;
      var tl = new TimelineMax({
        paused: true,
        onComplete: function onComplete() {
          if (!_this.state.collapsed) {
            document.body.style.overflow = "auto";
          }

          _this.animOn = false;

          _this.setState({
            collapsed: !_this.state.collapsed
          });
        }
      }),
          chldrn = _this.MenuBtn ? _this.MenuBtn.children : [],
          time = 0.25;
      _this.animOn = true;

      if (_this.state.collapsed || force && force == "open") {
        document.body.style.overflow = "hidden";
        tl.set(_this.collapsedLogo, {
          zIndex: 0
        });
        tl.set(_this.linkContainer, {
          autoAlpha: 1,
          display: "block"
        });
        tl.to([chldrn[0], chldrn[1]], time, {
          y: 25,
          ease: Expo.easeOut
        });
        tl.to([chldrn[4], chldrn[5]], time, {
          y: -25,
          ease: Expo.easeOut,
          delay: -time
        });
        tl.set([chldrn[2], chldrn[3]], {
          autoAlpha: 0,
          onComplete: function onComplete() {
            if (!_this.props.solidStyle) _this.addClass(_this.Menu, "solidStyle");
          }
        });
        tl.to(_this.Menu, time, {
          height: "100vh",
          ease: Expo.easeOut
        });
        tl.to([chldrn[0], chldrn[1]], time, {
          rotationZ: "-45deg",
          transformOrigin: "center center",
          ease: Expo.easeOut,
          delay: -time
        });
        tl.to([chldrn[4], chldrn[5]], time, {
          rotationZ: "-135deg",
          transformOrigin: "center center",
          ease: Expo.easeOut,
          delay: -time * 0.8
        });
        tl.to([chldrn[0], chldrn[2], chldrn[4]], time, {
          stroke: 'transparent',
          ease: Expo.easeOut,
          delay: -time
        });
        tl.to([chldrn[1], chldrn[3], chldrn[5]], time, {
          stroke: _settings.default.colors.primary,
          ease: Expo.easeOut,
          delay: -time
        });
        tl.staggerFromTo(_this.linkContainer.children, time, {
          autoAlpha: 0,
          y: -20
        }, {
          autoAlpha: 1,
          y: 0,
          ease: Expo.easeOut
        }, 0.1);
      } else if (!_this.state.collapsed || force && force == "close") {
        tl.to([chldrn[4], chldrn[5]], time, {
          rotationZ: "0deg",
          transformOrigin: "center center",
          ease: Expo.easeIn
        });
        tl.to([chldrn[0], chldrn[1]], time, {
          rotationZ: "0deg",
          transformOrigin: "center center",
          ease: Expo.easeIn,
          delay: -time * 0.95
        });
        tl.set([chldrn[2], chldrn[3]], {
          autoAlpha: 1
        });
        tl.to(_this.Menu, time, {
          height: _this.menuHeight || _this.MENU_HEIGHT,
          ease: Expo.easeOut,
          onComplete: function onComplete() {
            if (!_this.props.solidStyle) _this.removeClass(_this.Menu, "solidStyle");
          }
        });
        tl.staggerTo(_this.linkContainer.children, time, {
          autoAlpha: 0,
          y: -10,
          ease: Expo.easeOut
        }, 0.1);
        tl.to([chldrn[0], chldrn[2], chldrn[4]], time, {
          stroke: _settings.default.colors.primary,
          ease: Expo.easeOut,
          delay: -time
        });
        tl.to([chldrn[1], chldrn[3], chldrn[5]], time, {
          stroke: _settings.default.colors.primaryLight,
          ease: Expo.easeOut,
          delay: -time
        });
        tl.to([chldrn[4], chldrn[5], chldrn[0], chldrn[1]], time, {
          y: 0,
          ease: Expo.easeOut,
          delay: -time,
          onComplete: function onComplete() {
            tl.set(_this.linkContainer, {
              autoAlpha: 0,
              display: "none"
            });
            tl.set(_this.collapsedLogo, {
              zIndex: 1
            });
          }
        });
      }

      tl.play();
      if (typeof callback == "function") setTimeout(callback, (tl._totalDuration || time) * 1000);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleScroll", function () {
      // detect position on scroll and style accordingly
      if (!_settings.default.isServer() && !_this.props.solidStyle && _this.state.collapsed) {
        window.pageYOffset < 40 ? _this.removeClass(_this.Menu, "solidStyle") : _this.addClass(_this.Menu, "solidStyle");
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getLink", function (page, index) {
      if (page) {
        var title = page.replace(/\-/g, ' ');
        var link = "/".concat(page === 'home' ? '' : page);
        return _react.default.createElement(_react.Fragment, {
          key: index
        }, _react.default.createElement(_link.default, {
          href: link,
          ref: function ref(el) {
            return _this.links[page] = el;
          }
        }, _react.default.createElement("a", {
          className: "mainlink col-12"
        }, title)), _this.state.responsive && _this.getSubLinks(_this.sublinks[page]));
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSubLinks", function () {
      var sublinks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return _react.default.createElement("div", {
        className: "sublinks d-block d-md-none"
      }, sublinks.map(function (link, index) {
        return _react.default.createElement(_link.default, {
          href: link.url,
          key: index
        }, _react.default.createElement("a", {
          className: "sublink"
        }, link.title));
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getMenuClasses", function () {
      var classes = [];
      if (_this.props.solidStyle) classes.push("solidStyle");
      return " " + classes.join(" ");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addClass", function (obj, cls) {
      if (obj && cls) {
        if (!obj.className.match(cls)) obj.className += " " + cls;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeClass", function (obj, cls) {
      if (obj && cls) {
        if (obj.className.match(cls)) obj.className = obj.className.replace(" " + cls, "");
      }
    });

    _this.state = {
      collapsed: true,
      responsive: false
    };
    _this.MIN_SCREEN_WIDTH = 768;
    _this.links = [];
    _this.MENU_HEIGHT = 85;
    _this.menuHeight = 0;
    _this.animOn = false;
    _this.pages = ["home", "about", "services", "testimonials", "contact"]; // Add sublinks for mobile view

    _this.sublinks = {
      'services': [],
      'contact': [{
        title: 'Contact Us',
        url: '/contact'
      }, {
        title: 'Careers',
        url: '/careers'
      }]
    };

    _data.default.services.map(function (service) {
      _this.sublinks.services.push({
        title: service.name,
        url: "/services/".concat((0, _makePath.default)(service.name))
      });
    });

    _this.ASSET_PATH = _settings.default.ASSET_PATH + "images/";
    return _this;
  }

  _createClass(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("scroll", this.handleScroll);
      window.addEventListener("resize", this.checkResponsive);
      this.checkResponsive();
      setTimeout(this.handleScroll, 200); // document.body.className += ' cta-button';

      if (!this.state.responsive) {
        _gsap.default.fromTo(this.links, 1, {
          x: -10,
          y: -5
        }, {
          x: 0,
          y: 0,
          ease: Expo.easeOut,
          delay: 1
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.checkResponsive();
      if (this.state.collapsed) this.menuHeight = this.Menu.getBoundingClientRect().height;
    }
  }, {
    key: "render",
    // toggleCTA = e => {
    //   document.body.className = document.body.className.replace(/\s{2,}/, '');
    //   document.body.className = document.body.className.replace(/cta-button/ig, '');
    //   document.body.className = document.body.className.replace(/cta-text/ig, '');
    //   document.body.className = [e.target.checked ? 'cta-button' : 'cta-text', ...document.body.className.split(' ')].join(' ');
    // }
    value: function render() {
      var _this2 = this;

      this.links = [];
      return _react.default.createElement("nav", {
        id: "Menu",
        className: "navbar sticky-top" + this.getMenuClasses(),
        ref: function ref(el) {
          return _this2.Menu = el;
        }
      }, _react.default.createElement("div", {
        className: "container p-0"
      }, _react.default.createElement("a", {
        href: "/",
        id: "collapsedLogo-container"
      }, _react.default.createElement("img", {
        id: "collapsedLogo",
        alt: "Brand Logo",
        className: "menu-logo",
        src: this.ASSET_PATH + "brand-landing.png",
        ref: function ref(el) {
          return _this2.collapsedLogo = el;
        }
      })), !_settings.default.isServer() && (this.state.responsive ? _react.default.createElement("div", {
        id: "subcontainer",
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-12",
        style: {
          padding: 0,
          minHeight: 40
        }
      }, _react.default.createElement("svg", {
        viewBox: "0 0 70 56",
        id: "hamburger-menu",
        ref: function ref(el) {
          return _this2.MenuBtn = el;
        },
        onClick: this.toggleMenu
      }, _react.default.createElement("line", {
        x1: 1,
        y1: 7,
        x2: 69,
        y2: 7,
        className: "shadow"
      }), _react.default.createElement("line", {
        x1: 1,
        y1: 5,
        x2: 69,
        y2: 5
      }), _react.default.createElement("line", {
        x1: 1,
        y1: 32,
        x2: 69,
        y2: 32,
        className: "shadow"
      }), _react.default.createElement("line", {
        x1: 1,
        y1: 30,
        x2: 69,
        y2: 30
      }), _react.default.createElement("line", {
        x1: 1,
        y1: 57,
        x2: 69,
        y2: 57,
        className: "shadow"
      }), _react.default.createElement("line", {
        x1: 1,
        y1: 55,
        x2: 69,
        y2: 55
      }))), _react.default.createElement("div", {
        className: "col-12",
        ref: function ref(el) {
          return _this2.linkContainer = el;
        },
        style: {
          display: "none"
        }
      }, this.pages.map(function (item, index) {
        return _react.default.createElement("div", {
          className: "row",
          key: index
        }, _this2.getLink(item, index));
      }))) : _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
        id: "subcontainer",
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-12"
      }, _react.default.createElement("span", {
        className: "d-block d-md-none"
      }, this.getLink(this.pages[0], 0)), this.pages.slice(1).map(function (item, index) {
        return _this2.getLink(item, index);
      })))))));
    }
  }]);

  return Menu;
}(_react.Component);

exports.default = Menu;
Menu.propTypes = {
  device: _propTypes.default.string
};
Menu.defaultProps = {
  device: "desktop"
};

/***/ })

})
//# sourceMappingURL=index.js.ada45935b99d0301fd8e.hot-update.js.map
