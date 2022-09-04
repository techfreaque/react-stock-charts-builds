"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Square(props) {
  var className = props.className,
      stroke = props.stroke,
      strokeWidth = props.strokeWidth,
      opacity = props.opacity,
      fill = props.fill,
      point = props.point,
      width = props.width;
  var w = (0, _utils.functor)(width)(point.datum);
  var x = point.x - w / 2;
  var y = point.y - w / 2;
  return /*#__PURE__*/_react["default"].createElement("rect", {
    className: className,
    x: x,
    y: y,
    stroke: stroke,
    strokeWidth: strokeWidth,
    fillOpacity: opacity,
    fillRule: fill,
    width: w,
    height: w
  });
}

Square.propTypes = {
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
  width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].func]).isRequired
};
Square.defaultProps = {
  stroke: "#4682B4",
  strokeWidth: 1,
  opacity: 0.5,
  fill: "#4682B4",
  className: "react-stockcharts-marker-rect"
};

Square.drawOnCanvas = function (props, point, ctx) {
  var stroke = props.stroke,
      fill = props.fill,
      opacity = props.opacity,
      strokeWidth = props.strokeWidth;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = strokeWidth;

  if (fill !== "none") {
    ctx.fillStyle = (0, _utils.hexToRGBA)(fill, opacity);
  }

  Square.drawOnCanvasWithNoStateChange(props, point, ctx);
};

Square.drawOnCanvasWithNoStateChange = function (props, point, ctx) {
  var width = props.width;
  var w = (0, _utils.functor)(width)(point.datum);
  var x = point.x - w / 2;
  var y = point.y - w / 2;
  ctx.beginPath();
  ctx.rect(x, y, w, w);
  ctx.stroke();
  ctx.fill();
};

var _default = Square;
exports["default"] = _default;
//# sourceMappingURL=SquareMarker.js.map