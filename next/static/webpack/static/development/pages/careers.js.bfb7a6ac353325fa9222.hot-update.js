webpackHotUpdate("static/development/pages/careers.js",{

/***/ "./pages/careers.js":
/*!**************************!*\
  !*** ./pages/careers.js ***!
  \**************************/
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

var _ScrollToPlugin = _interopRequireDefault(__webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js"));

var _main = _interopRequireDefault(__webpack_require__(/*! ../layouts/main */ "./layouts/main.js"));

var _PageHeader = _interopRequireDefault(__webpack_require__(/*! ../components/PageHeader/PageHeader */ "./components/PageHeader/PageHeader.js"));

var _settings = _interopRequireDefault(__webpack_require__(/*! ../util/settings */ "./util/settings.js"));

var _data = _interopRequireDefault(__webpack_require__(/*! ../static/json/data.json */ "./static/json/data.json"));

var _reactGa = _interopRequireDefault(__webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/react-ga.js"));

var _JobApplication = _interopRequireDefault(__webpack_require__(/*! ../sections/JobApplication/JobApplication */ "./sections/JobApplication/JobApplication.js"));

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

var Careers =
/*#__PURE__*/
function (_Component) {
  _inherits(Careers, _Component);

  function Careers(props) {
    var _this;

    _classCallCheck(this, Careers);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Careers).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setActive", function (index) {
      _this.setState({
        activePosition: index
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToForm", function () {
      var el = document.getElementById('job-application-form');
      TweenLite.to(window, 1, {
        scrollTo: window.pageYOffset + el.getBoundingClientRect().top - 150
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "formatDetails", function (info) {
      return info.map(function (item, index) {
        return _typeof(item) === 'object' && item.length ? _react.default.createElement("ul", {
          className: "position-detail",
          key: index
        }, item.map(function (listItem, idx) {
          return _react.default.createElement("li", {
            key: idx
          }, _react.default.createElement("p", null, listItem));
        })) : _react.default.createElement("p", {
          className: "position-detail",
          key: index
        }, item);
      });
    });

    _this.state = {
      activePosition: 0
    };
    _this.ASSET_PATH = _settings.default.ASSET_PATH + "images/careers/";
    return _this;
  }

  _createClass(Careers, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.posRefs[this.state.activePosition]) {
        TweenLite.to(window, 1, {
          scrollTo: window.pageYOffset + this.posRefs[this.state.activePosition].getBoundingClientRect().top - 150
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.posRefs = [];
      var current = _data.default.careers[this.state.activePosition];
      return _react.default.createElement(_main.default, {
        id: "Careers",
        ref: function ref(el) {
          return _this2.Page = el;
        }
      }, _react.default.createElement(_PageHeader.default, {
        title: "Hospall Careers",
        image: "careers.jpg",
        description: "Hospall Private Homecare is always accepting employment applications from individuals dedicated to providing high-quality, in-home care assistance. We offer home care jobs and other employment opportunities to those who share our commitment and uphold our standards."
      }), _react.default.createElement("div", {
        className: "ContentContainer d-none d-sm-block"
      }, _react.default.createElement("h3", {
        className: "dark"
      }, "Job Openings")), _react.default.createElement("div", {
        className: "ContentContainer positions"
      }, _react.default.createElement("div", {
        className: "row positions-container"
      }, _data.default.careers.map(function (career, index) {
        var className = _this2.state.activePosition === index ? 'active' : '';
        return _react.default.createElement(_react.Fragment, {
          key: index
        }, _react.default.createElement("a", {
          className: "col-sm-4 position ".concat(className),
          onClick: function onClick() {
            return _this2.setActive(index);
          },
          ref: function ref(el) {
            _this2.posRefs[index] = el;
          }
        }, _react.default.createElement("img", {
          className: "d-none d-sm-block",
          src: "".concat(_this2.ASSET_PATH).concat(career.image),
          alt: career.position
        }), _react.default.createElement("p", null, career.position)), _this2.state.activePosition === index && _react.default.createElement("div", {
          className: "ContentContainer details d-block d-sm-none"
        }, _react.default.createElement("div", {
          className: "col-12"
        }, _react.default.createElement("h4", {
          className: "details-title"
        }, "Job Duties & Responsibilities"), _this2.formatDetails(current.responsibilities)), _react.default.createElement("div", {
          className: "col-12",
          style: {
            marginTop: 40
          }
        }, _react.default.createElement("h4", {
          className: "details-title"
        }, "Job Requirements"), _this2.formatDetails(current.requirements)), _react.default.createElement("a", {
          className: "cta dark",
          onClick: function onClick() {
            _this2.scrollToForm();
          }
        }, "Apply Now")));
      })), _react.default.createElement("div", {
        className: "d-none d-sm-block"
      }, _react.default.createElement("h3", {
        className: "dark",
        style: {
          marginBottom: 50
        }
      }, current.description || current.position), _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-12 col-sm-5"
      }, _react.default.createElement("h4", {
        className: "details-title"
      }, "Job Duties & Responsibilities"), this.formatDetails(current.responsibilities)), _react.default.createElement("div", {
        className: "col-12 offset-sm-1 col-sm-5"
      }, _react.default.createElement("h4", {
        className: "details-title"
      }, "Job Requirements"), this.formatDetails(current.requirements))))), _react.default.createElement(_JobApplication.default, null));
    }
  }]);

  return Careers;
}(_react.Component);

var _default = Careers;
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/careers")
  

/***/ })

})
//# sourceMappingURL=careers.js.bfb7a6ac353325fa9222.hot-update.js.map