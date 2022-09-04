"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _GenericChartComponent = _interopRequireDefault(require("../GenericChartComponent"));

var _GenericComponent = require("../GenericComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var StraightLine = /*#__PURE__*/function (_Component) {
  _inherits(StraightLine, _Component);

  var _super = _createSuper(StraightLine);

  function StraightLine(props) {
    var _this;

    _classCallCheck(this, StraightLine);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(StraightLine, [{
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var _this$props = this.props,
          type = _this$props.type,
          stroke = _this$props.stroke,
          strokeWidth = _this$props.strokeWidth,
          opacity = _this$props.opacity,
          strokeDasharray = _this$props.strokeDasharray;
      var _this$props2 = this.props,
          yValue = _this$props2.yValue,
          xValue = _this$props2.xValue;
      var xScale = moreProps.xScale;
      var _moreProps$chartConfi = moreProps.chartConfig,
          yScale = _moreProps$chartConfi.yScale,
          width = _moreProps$chartConfi.width,
          height = _moreProps$chartConfi.height;
      ctx.beginPath();
      ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, opacity);
      ctx.lineWidth = strokeWidth;

      var _getLineCoordinates = getLineCoordinates(type, xScale, yScale, xValue, yValue, width, height),
          x1 = _getLineCoordinates.x1,
          y1 = _getLineCoordinates.y1,
          x2 = _getLineCoordinates.x2,
          y2 = _getLineCoordinates.y2;

      ctx.setLineDash((0, _utils.getStrokeDasharray)(strokeDasharray).split(","));
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        svgDraw: this.renderSVG,
        canvasDraw: this.drawOnCanvas,
        canvasToDraw: _GenericComponent.getAxisCanvas,
        drawOn: ["pan"]
      });
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var width = moreProps.width,
          height = moreProps.height;
      var xScale = moreProps.xScale,
          yScale = moreProps.chartConfig.yScale;
      var className = this.props.className;
      var _this$props3 = this.props,
          type = _this$props3.type,
          stroke = _this$props3.stroke,
          strokeWidth = _this$props3.strokeWidth,
          opacity = _this$props3.opacity,
          strokeDasharray = _this$props3.strokeDasharray;
      var _this$props4 = this.props,
          yValue = _this$props4.yValue,
          xValue = _this$props4.xValue;
      var lineCoordinates = getLineCoordinates(type, xScale, yScale, xValue, yValue, width, height);
      return /*#__PURE__*/_react["default"].createElement("line", _extends({
        className: className,
        strokeDasharray: (0, _utils.getStrokeDasharray)(strokeDasharray),
        stroke: stroke,
        strokeWidth: strokeWidth,
        strokeOpacity: opacity
      }, lineCoordinates));
    }
  }]);

  return StraightLine;
}(_react.Component);

function getLineCoordinates(type, xScale, yScale, xValue, yValue, width, height) {
  return type === "horizontal" ? {
    x1: 0,
    y1: Math.round(yScale(yValue)),
    x2: width,
    y2: Math.round(yScale(yValue))
  } : {
    x1: Math.round(xScale(xValue)),
    y1: 0,
    x2: Math.round(xScale(xValue)),
    y2: height
  };
}

StraightLine.propTypes = {
  className: _propTypes["default"].string,
  type: _propTypes["default"].oneOf(["vertical", "horizontal"]),
  stroke: _propTypes["default"].string,
  strokeWidth: _propTypes["default"].number,
  strokeDasharray: _propTypes["default"].oneOf(_utils.strokeDashTypes),
  opacity: _propTypes["default"].number.isRequired,
  yValue: function yValue(props, propName
  /* , componentName */
  ) {
    if (props.type === "vertical" && (0, _utils.isDefined)(props[propName])) return new Error("Do not define `yValue` when type is `vertical`, define the `xValue` prop");
    if (props.type === "horizontal" && (0, _utils.isNotDefined)(props[propName])) return new Error("when type = `horizontal` `yValue` is required"); // if (isDefined(props[propName]) && typeof props[propName] !== "number") return new Error("prop `yValue` accepts a number");
  },
  xValue: function xValue(props, propName
  /* , componentName */
  ) {
    if (props.type === "horizontal" && (0, _utils.isDefined)(props[propName])) return new Error("Do not define `xValue` when type is `horizontal`, define the `yValue` prop");
    if (props.type === "vertical" && (0, _utils.isNotDefined)(props[propName])) return new Error("when type = `vertical` `xValue` is required"); // if (isDefined(props[propName]) && typeof props[propName] !== "number") return new Error("prop `xValue` accepts a number");
  }
};
StraightLine.defaultProps = {
  className: "line ",
  type: "horizontal",
  stroke: "#000000",
  opacity: 0.5,
  strokeWidth: 1,
  strokeDasharray: "Solid"
};
var _default = StraightLine;
exports["default"] = _default;
//# sourceMappingURL=StraightLine.js.map