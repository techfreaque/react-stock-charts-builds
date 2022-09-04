"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Circle(props) {
  var className = props.className,
      stroke = props.stroke,
      strokeWidth = props.strokeWidth,
      opacity = props.opacity,
      fill = props.fill,
      point = props.point,
      r = props.r;
  var radius = (0, _utils.functor)(r)(point.datum);
  return /*#__PURE__*/_react["default"].createElement("circle", {
    className: className,
    cx: point.x,
    cy: point.y,
    stroke: stroke,
    strokeWidth: strokeWidth,
    fillOpacity: opacity,
    fillRule: fill,
    r: radius
  });
}

Circle.propTypes = {
  stroke: _propTypes["default"].string,
  fill: _propTypes["default"].string.isRequired,
  opacity: _propTypes["default"].number.isRequired,
  point: _propTypes["default"].shape({
    x: _propTypes["default"].number.isRequired,
    y: _propTypes["default"].number.isRequired,
    datum: _propTypes["default"].object.isRequired
  }).isRequired,
  className: _propTypes["default"].string,
  strokeWidth: _propTypes["default"].number,
  r: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].func]).isRequired
};
Circle.defaultProps = {
  stroke: "#4682B4",
  strokeWidth: 1,
  opacity: 0.5,
  fill: "#4682B4",
  className: "react-stockcharts-marker-circle"
};

Circle.drawOnCanvas = function (props, point, ctx) {
  var stroke = props.stroke,
      fill = props.fill,
      opacity = props.opacity,
      strokeWidth = props.strokeWidth;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = strokeWidth;

  if (fill !== "none") {
    ctx.fillStyle = (0, _utils.hexToRGBA)(fill, opacity);
  }

  Circle.drawOnCanvasWithNoStateChange(props, point, ctx);
};

Circle.drawOnCanvasWithNoStateChange = function (props, point, ctx) {
  var r = props.r;
  var radius = (0, _utils.functor)(r)(point.datum);
  ctx.moveTo(point.x, point.y);
  ctx.beginPath();
  ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI, false);
  ctx.stroke();
  ctx.fill();
};

var _default = Circle;
exports["default"] = _default;
//# sourceMappingURL=CircleMarker.js.map