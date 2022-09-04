"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports["default"] = void 0;
exports.helper = helper;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var LabelAnnotation = /*#__PURE__*/function (_Component) {
  _inherits(LabelAnnotation, _Component);

  var _super = _createSuper(LabelAnnotation);

  function LabelAnnotation(props) {
    var _this;

    _classCallCheck(this, LabelAnnotation);

    _this = _super.call(this, props);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LabelAnnotation, [{
    key: "handleClick",
    value: function handleClick(e) {
      var onClick = this.props.onClick;

      if (onClick) {
        var _this$props = this.props,
            xScale = _this$props.xScale,
            yScale = _this$props.yScale,
            datum = _this$props.datum;
        onClick({
          xScale: xScale,
          yScale: yScale,
          datum: datum
        }, e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          textAnchor = _this$props2.textAnchor,
          fontFamily = _this$props2.fontFamily,
          fontSize = _this$props2.fontSize,
          opacity = _this$props2.opacity,
          rotate = _this$props2.rotate;
      var _this$props3 = this.props,
          xAccessor = _this$props3.xAccessor,
          xScale = _this$props3.xScale,
          yScale = _this$props3.yScale;

      var _helper = helper(this.props, xAccessor, xScale, yScale),
          xPos = _helper.xPos,
          yPos = _helper.yPos,
          fill = _helper.fill,
          text = _helper.text,
          tooltip = _helper.tooltip;

      return /*#__PURE__*/_react["default"].createElement("g", {
        className: className
      }, /*#__PURE__*/_react["default"].createElement("title", null, tooltip), /*#__PURE__*/_react["default"].createElement("text", {
        x: xPos,
        y: yPos,
        fontFamily: fontFamily,
        fontSize: fontSize,
        fill: fill,
        opacity: opacity,
        transform: "rotate(".concat(rotate, ", ").concat(xPos, ", ").concat(yPos, ")"),
        onClick: this.handleClick,
        textAnchor: textAnchor
      }, text));
    }
  }]);

  return LabelAnnotation;
}(_react.Component);

function helper(props, xAccessor, xScale, yScale) {
  var x = props.x,
      y = props.y,
      datum = props.datum,
      fill = props.fill,
      text = props.text,
      tooltip = props.tooltip,
      plotData = props.plotData;
  var xFunc = (0, _utils.functor)(x);
  var yFunc = (0, _utils.functor)(y);
  var _ref = [xFunc({
    xScale: xScale,
    xAccessor: xAccessor,
    datum: datum,
    plotData: plotData
  }), yFunc({
    yScale: yScale,
    datum: datum,
    plotData: plotData
  })],
      xPos = _ref[0],
      yPos = _ref[1];
  return {
    xPos: xPos,
    yPos: yPos,
    text: (0, _utils.functor)(text)(datum),
    fill: (0, _utils.functor)(fill)(datum),
    tooltip: (0, _utils.functor)(tooltip)(datum)
  };
}

LabelAnnotation.propTypes = {
  className: _propTypes["default"].string,
  text: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  textAnchor: _propTypes["default"].string,
  fontFamily: _propTypes["default"].string,
  fontSize: _propTypes["default"].number,
  opacity: _propTypes["default"].number,
  rotate: _propTypes["default"].number,
  onClick: _propTypes["default"].func,
  xAccessor: _propTypes["default"].func,
  xScale: _propTypes["default"].func,
  yScale: _propTypes["default"].func,
  datum: _propTypes["default"].object,
  x: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].func]),
  y: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].func])
};
var defaultProps = {
  textAnchor: "middle",
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  fontSize: 12,
  fill: "#000000",
  opacity: 1,
  rotate: 0,
  x: function x(_ref2) {
    var xScale = _ref2.xScale,
        xAccessor = _ref2.xAccessor,
        datum = _ref2.datum;
    return xScale(xAccessor(datum));
  }
};
exports.defaultProps = defaultProps;
LabelAnnotation.defaultProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
  className: "react-stockcharts-labelannotation"
});
var _default = LabelAnnotation;
exports["default"] = _default;
//# sourceMappingURL=LabelAnnotation.js.map