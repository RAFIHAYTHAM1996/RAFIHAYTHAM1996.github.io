webpackHotUpdate("static/development/pages/faq.js",{

/***/ "./components/InlineQuestion/InlineQuestion.js":
/*!*****************************************************!*\
  !*** ./components/InlineQuestion/InlineQuestion.js ***!
  \*****************************************************/
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

var InlineQuestion =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(InlineQuestion, _PureComponent);

  function InlineQuestion(props) {
    var _this;

    _classCallCheck(this, InlineQuestion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InlineQuestion).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getState", function () {
      return _this.state.collapsed ? "" : "expanded";
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleState", function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    });

    _this.state = {
      collapsed: typeof props.defaultExpanded !== 'undefined' ? !props.defaultExpanded : true
    };
    return _this;
  }

  _createClass(InlineQuestion, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          answer = _this$props.answer,
          question = _this$props.question;
      return _react.default.createElement("div", {
        className: "InlineQuestion"
      }, _react.default.createElement("div", {
        onClick: this.toggleState
      }, _react.default.createElement("div", {
        className: "chevron " + this.getState()
      }, _react.default.createElement("svg", {
        viewBox: "0 0 52 52",
        onClick: this.toggleState
      }, _react.default.createElement("line", {
        x1: 1,
        y1: 25,
        x2: 51,
        y2: 25
      }), _react.default.createElement("line", {
        x1: 1,
        y1: 25,
        x2: 51,
        y2: 25
      }))), _react.default.createElement("h6", {
        className: "question " + this.getState()
      }, question)), answer && !this.state.collapsed && answer.map(function (paragraph, index) {
        return _react.default.createElement("p", {
          className: "col-12 col-md-10 answer",
          key: index,
          dangerouslySetInnerHTML: {
            __html: paragraph
          }
        });
      }));
    }
  }]);

  return InlineQuestion;
}(_react.PureComponent);

exports.default = InlineQuestion;
InlineQuestion.propTypes = {
  defaultExpanded: _propTypes.default.bool,
  question: _propTypes.default.string.isRequired,
  answer: _propTypes.default.arrayOf(_propTypes.default.string)
};
InlineQuestion.defaultProps = {
  answer: ['Answer not available'],
  defaultExpanded: false
};

/***/ })

})
//# sourceMappingURL=faq.js.8d84094b6ea8415a59a5.hot-update.js.map