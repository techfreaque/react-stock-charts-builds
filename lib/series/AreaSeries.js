"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LineSeries = _interopRequireDefault(require("./LineSeries"));

var _AreaOnlySeries = _interopRequireDefault(require("./AreaOnlySeries"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function AreaSeries(props) {
  var yAccessor = props.yAccessor,
      baseAt = props.baseAt;
  var className = props.className,
      opacity = props.opacity,
      stroke = props.stroke,
      strokeWidth = props.strokeWidth,
      strokeOpacity = props.strokeOpacity,
      strokeDasharray = props.strokeDasharray,
      canvasGradient = props.canvasGradient,
      fill = props.fill,
      interpolation = props.interpolation,
      style = props.style,
      canvasClip = props.canvasClip;
  return /*#__PURE__*/_react["default"].createElement("g", {
    className: className
  }, /*#__PURE__*/_react["default"].createElement(_AreaOnlySeries["default"], {
    yAccessor: yAccessor,
    interpolation: interpolation,
    base: baseAt,
    canvasGradient: canvasGradient,
    fill: fill,
    opacity: opacity,
    style: style,
    canvasClip: canvasClip,
    stroke: "none"
  }), /*#__PURE__*/_react["default"].createElement(_LineSeries["default"], {
    yAccessor: yAccessor,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeOpacity: strokeOpacity,
    strokeDasharray: strokeDasharray,
    interpolation: interpolation,
    style: style,
    canvasClip: canvasClip,
    fill: "none",
    hoverHighlight: false
  }));
}

AreaSeries.propTypes = {
  stroke: _propTypes["default"].string,
  strokeWidth: _propTypes["default"].number,
  canvasGradient: _propTypes["default"].func,
  fill: _propTypes["default"].string.isRequired,
  strokeOpacity: _propTypes["default"].number.isRequired,
  opacity: _propTypes["default"].number.isRequired,
  className: _propTypes["default"].string,
  yAccessor: _propTypes["default"].func.isRequired,
  baseAt: _propTypes["default"].func,
  interpolation: _propTypes["default"].func,
  canvasClip: _propTypes["default"].func,
  style: _propTypes["default"].object,
  strokeDasharray: _propTypes["default"].oneOf(_utils.strokeDashTypes)
};
AreaSeries.defaultProps = {
  stroke: "#4682B4",
  strokeWidth: 1,
  strokeOpacity: 1,
  strokeDasharray: "Solid",
  opacity: 0.5,
  fill: "#4682B4",
  className: "react-stockcharts-area"
};
var _default = AreaSeries;
exports["default"] = _default;
//# sourceMappingURL=AreaSeries.js.map