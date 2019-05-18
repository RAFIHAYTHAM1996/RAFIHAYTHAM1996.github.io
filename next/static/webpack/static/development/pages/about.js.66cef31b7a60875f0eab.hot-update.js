webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
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

var _gsap = __webpack_require__(/*! gsap */ "./node_modules/gsap/TweenMax.js");

var _head = _interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/head.js"));

var _main = _interopRequireDefault(__webpack_require__(/*! ../layouts/main */ "./layouts/main.js"));

var _settings = _interopRequireDefault(__webpack_require__(/*! ../util/settings */ "./util/settings.js"));

var _reactGa = _interopRequireDefault(__webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/react-ga.js"));

var _data = _interopRequireDefault(__webpack_require__(/*! ../static/json/data.json */ "./static/json/data.json"));

var _Testimonials = _interopRequireDefault(__webpack_require__(/*! ../sections/Testimonials/Testimonials */ "./sections/Testimonials/Testimonials.js"));

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

var About =
/*#__PURE__*/
function (_Component) {
  _inherits(About, _Component);

  function About(props) {
    var _this;

    _classCallCheck(this, About);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(About).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setValueDescriptionOffset", function () {
      var height = 0;

      if (_this.valueRows) {
        for (var i = 0; i < _this.state.activeValue; i++) {
          height += _this.valueRows[i].getBoundingClientRect().height;
        }

        height += _this.valueRows[_this.state.activeValue].getBoundingClientRect().height / 2 + 10;
      }

      _gsap.TweenMax.set(_this.valueDescription, {
        paddingTop: height
      });
    });

    _this.state = {
      activeValue: 0,
      teamExpand: {}
    };
    _this.ASSET_PATH = _settings.default.ASSET_PATH + "images/about/";
    return _this;
  }

  _createClass(About, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setValueDescriptionOffset();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setValueDescriptionOffset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = _data.default.about.values[this.state.activeValue];
      this.valueRows = [];
      return _react.default.createElement(_main.default, {
        id: "About",
        ref: function ref(el) {
          return _this2.Page = el;
        }
      }, _react.default.createElement("div", {
        className: "ContentContainer intro"
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-12 col-sm-7 col-lg-5"
      }, _react.default.createElement("h1", {
        className: "dark",
        style: {
          marginTop: 0
        }
      }, "Providing Families", _react.default.createElement("br", null), "with Peace of Mind"), _react.default.createElement("p", {
        className: "dark"
      }, "We believe life is a gift. Hospall Private Homecare provides peace of mind to families with the health and care needs of their loved ones in King Township and the surrounding York and Simcoe regions. Our commitment is to maintain open lines of communication within our multi disciplinary team to ensure the care is being provided consistent to the client. Our word is our promise.")), _react.default.createElement("div", {
        className: "col-sm-5 col-lg-6",
        style: {
          position: 'relative'
        }
      }, _react.default.createElement("img", {
        src: this.ASSET_PATH + 'elder-woman.jpg',
        alt: 'Elder Woman',
        id: "about-main-image"
      }))), _react.default.createElement("img", {
        src: this.ASSET_PATH + 'elder-woman.jpg',
        alt: 'Elder Woman',
        id: "about-main-image-mobile"
      })), _react.default.createElement("div", {
        className: "row dark"
      }, _react.default.createElement("div", {
        className: "ContentContainer who-we-are"
      }, _react.default.createElement("div", {
        className: "col-12"
      }, _react.default.createElement("h3", {
        id: "who-we-are"
      }, "Who We Are")), _react.default.createElement("div", {
        className: "col-12 col-sm-5"
      }, _react.default.createElement("p", {
        className: "who-we-are"
      }, "We are a team of registered & certified staff who are passionate about the patient population. Our Hospall team cares for patients like family. We strive to provide consistent, compassionate care to our clients. With a focus on elevating and enriching their dignity, health, and well-being and general quality of life."), _react.default.createElement("p", null, "Hospall makes a difference with families \u2013 our testimonials provide insight into how our past and present patients and families feel about our care.")))), _react.default.createElement("div", {
        className: "ContentContainer container-our-mission mobile-no-padding"
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "offset-1 col-11 col-sm-5 col-md-5",
        id: "elder-man-image-container"
      }, _react.default.createElement("img", {
        src: this.ASSET_PATH + 'elder-man.jpg',
        alt: 'Elder Man',
        style: {
          maxWidth: '100%'
        }
      })), _react.default.createElement("div", {
        className: "col-12 col-sm-6 offset-md-1 col-md-5 our-mission"
      }, _react.default.createElement("h3", {
        className: "dark"
      }, "Our Mission"), _react.default.createElement("h5", {
        className: "dark our-mission-h5"
      }, "Our mission is to provide Consistent Compassionate Care to our clients with a focus on Elevating and Enriching Health and Wellbeing while maintaining their dignity."), _react.default.createElement("p", {
        className: "dark"
      }, "Our goal is to provide the highest quality of personalized private care for our clients and their family members in the comfort of their own home. We strive to help our clients lead safe, balanced lives while achieving peace of mind and body. Hospall encourages our clients to be physically, mentally, socially, and emotionally engaged. We believe we can help them retain better cognitive function, stay healthier, and live in-dependently longer within their own homes.")))), _react.default.createElement("div", {
        className: "container-our-values"
      }, _react.default.createElement("div", {
        className: "ContentContainer mobile-no-padding"
      }, _react.default.createElement("div", {
        className: "row our-values"
      }, _react.default.createElement("div", {
        className: "col-12 col-sm-8 col-md-5",
        style: {
          padding: 0
        }
      }, _react.default.createElement("h3", {
        className: "dark our-values-h3"
      }, "Our Values"), _react.default.createElement("p", {
        className: "dark"
      }, "Our values serve as a compass for our actions and reflect how we interact with our clients. These differentiate Hospall from other home care providers. Our clients are the center of what we do, Hospall cares. We believe in:"))), _react.default.createElement("div", {
        className: "row values-list"
      }, _react.default.createElement("div", {
        className: "col-12 col-sm-5"
      }, _data.default.about.values.map(function (item, index) {
        var className = _this2.state.activeValue === index ? 'active' : '';

        var description = _this2.state.activeValue === index && _react.default.createElement("span", {
          className: "col-10 d-sm-none",
          style: {
            marginTop: 10,
            padding: 0
          }
        }, value && value.description.map(function (desc, idx) {
          return _react.default.createElement("p", {
            className: "dark",
            key: idx
          }, desc);
        }));

        return _react.default.createElement("div", {
          className: "row values-list-row",
          key: index,
          ref: function ref(el) {
            return _this2.valueRows[index] = el;
          }
        }, _react.default.createElement("div", {
          className: "col-5"
        }, _react.default.createElement("p", {
          className: "values-list-name ".concat(className),
          onClick: function onClick() {
            return _this2.setState({
              activeValue: index
            });
          }
        }, item.name)), _react.default.createElement("div", {
          className: "offset-3 col-4 values-list-line d-none d-sm-inline"
        }, _react.default.createElement("span", {
          className: "values-list-line-span ".concat(className)
        })), description);
      })), _react.default.createElement("div", {
        className: "offset-sm-1 col-sm-5 d-none d-sm-block",
        ref: function ref(el) {
          return _this2.valueDescription = el;
        }
      }, _react.default.createElement("p", {
        className: "dark"
      }, _data.default.about.values[this.state.activeValue].description[0]))))), _react.default.createElement("div", {
        className: "ContentContainer",
        style: {
          paddingTop: 0
        }
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("h3", {
        className: "col-12 offset-lg-0 dark our-dedicated-team-h3"
      }, "Our Team")), _data.default.about.team.map(function (item, index) {
        var expanded = _this2.state.teamExpand[index];
        var bio = expanded ? item.bio : item.bio.slice(0, 2);
        return _react.default.createElement("div", {
          className: "row our-dedicated-team",
          key: index
        }, _react.default.createElement("div", {
          className: "col-sm-4 offset-lg-0 col-lg-3",
          style: {
            padding: 0
          }
        }, _react.default.createElement("img", {
          src: _this2.ASSET_PATH + item.image,
          alt: "".concat(item.name, " - ").concat(item.title),
          style: {
            width: '100%'
          }
        })), _react.default.createElement("div", {
          className: "col-12 offset-md-1 col-md-7 offset-lg-1 col-lg-7 our-dedicated-team-details"
        }, _react.default.createElement("h4", {
          className: "our-dedicated-team-title"
        }, "".concat(item.name, ", ").concat(item.title)), bio.map(function (paragraph, idx) {
          return _react.default.createElement("p", {
            className: "dark",
            key: idx
          }, paragraph);
        }), item.bio.length > 2 && _react.default.createElement("p", {
          className: "cta dark",
          onClick: function onClick() {
            return _this2.setState({
              teamExpand: _defineProperty({}, index, !expanded)
            });
          }
        }, "Read ".concat(expanded ? 'Less' : 'More'))));
      })), _react.default.createElement("div", {
        className: "ContentContainer mobile-no-padding"
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "offset-1 col-10 col-sm-4"
      }, _react.default.createElement("img", {
        src: this.ASSET_PATH + 'canadian-home-care-association.jpg',
        alt: 'Canadian Home Care Association',
        style: {
          maxWidth: '100%'
        }
      })), _react.default.createElement("div", {
        className: "offset-1 col-10 col-sm-4"
      }, _react.default.createElement("img", {
        src: this.ASSET_PATH + 'home-care-ontario.png',
        alt: 'Home Care Ontario',
        style: {
          maxWidth: '100%'
        }
      })))), _react.default.createElement(_Testimonials.default, null));
    }
  }]);

  return About;
}(_react.Component);

var _default = About;
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  

/***/ })

})
//# sourceMappingURL=about.js.66cef31b7a60875f0eab.hot-update.js.map