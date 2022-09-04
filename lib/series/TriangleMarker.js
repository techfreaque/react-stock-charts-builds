"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Triangle(props) {
  var className = props.className,
      strokeWidth = props.strokeWidth,
      opacity = props.opacity,
      point = props.point,
      width = props.width;
  var rotation = getRotationInDegrees(props, point);
  if (rotation == null) return null;
  var fillColor = getFillColor(props);
  var strokeColor = getStrokeColor(props);
  var w = (0, _utils.functor)(width)(point.datum);
  var x = point.x,
      y = point.y;

  var _getTrianglePoints = getTrianglePoints(w),
      innerOpposite = _getTrianglePoints.innerOpposite,
      innerHypotenuse = _getTrianglePoints.innerHypotenuse;

  var points = "\n\t\t".concat(x, " ").concat(y - innerHypotenuse, ",\n\t\t").concat(x + w / 2, " ").concat(y + innerOpposite, ",\n\t\t").concat(x - w / 2, " ").concat(y + innerOpposite, "\n\t");
  return /*#__PURE__*/_react["default"].createElement("polygon", {
    className: className,
    points: points,
    stroke: strokeColor,
    strokeWidth: strokeWidth,
    fillOpacity: opacity,
    fillRule: fillColor,
    transform: rotation !== 0 ? "rotate(".concat(rotation, ", ").concat(x, ", ").concat(y, ")") : null
  });
}

Triangle.propTypes = {
  direction: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(["top", "bottom", "left", "right", "hide"]), _propTypes["default"].func]).isRequired,
  stroke: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]).isRequired,
  fill: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]).isRequired,
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
Triangle.defaultProps = {
  direction: "top",
  stroke: "#4682B4",
  strokeWidth: 1,
  opacity: 0.5,
  fill: "#4682B4",
  className: "react-stockcharts-marker-triangle"
};

Triangle.drawOnCanvas = function (props, point, ctx) {
  var stroke = props.stroke,
      fill = props.fill,
      opacity = props.opacity,
      strokeWidth = props.strokeWidth;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = strokeWidth;

  if (fill !== "none") {
    ctx.fillStyle = (0, _utils.hexToRGBA)(fill, opacity);
  }

  Triangle.drawOnCanvasWithNoStateChange(props, point, ctx);
};

Triangle.drawOnCanvasWithNoStateChange = function (props, point, ctx) {
  var width = props.width;
  var w = (0, _utils.functor)(width)(point.datum);
  var x = point.x,
      y = point.y;

  var _getTrianglePoints2 = getTrianglePoints(w),
      innerOpposite = _getTrianglePoints2.innerOpposite,
      innerHypotenuse = _getTrianglePoints2.innerHypotenuse;

  var rotationDeg = getRotationInDegrees(props, point);
  ctx.beginPath();
  ctx.moveTo(x, y - innerHypotenuse);
  ctx.lineTo(x + w / 2, y + innerOpposite);
  ctx.lineTo(x - w / 2, y + innerOpposite);
  ctx.stroke(); // TODO: rotation does not work
  // example: https://gist.github.com/geoffb/6392450

  if (rotationDeg !== null && rotationDeg !== 0) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotationDeg * Math.PI / 180); // 45 degrees

    ctx.fill();
    ctx.restore();
  }

  ctx.fill();
};

var _default = Triangle;
exports["default"] = _default;

function getTrianglePoints(width) {
  var innerHypotenuse = width / 2 * (1 / Math.cos(30 * Math.PI / 180));
  var innerOpposite = width / 2 * (1 / Math.tan(60 * Math.PI / 180));
  return {
    innerOpposite: innerOpposite,
    innerHypotenuse: innerHypotenuse
  };
}

function getFillColor(props) {
  var fill = props.fill,
      point = props.point;
  return fill instanceof Function ? fill(point.datum) : fill;
}

function getStrokeColor(props) {
  var stroke = props.stroke,
      point = props.point;
  return stroke instanceof Function ? stroke(point.datum) : stroke;
}

function getRotationInDegrees(props, point) {
  var direction = props.direction;
  var directionVal = direction instanceof Function ? direction(point.datum) : direction;
  if (directionVal === "hide") return null;
  var rotate = 0;

  switch (directionVal) {
    case "bottom":
      rotate = 180;
      break;

    case "left":
      rotate = -90;
      break;

    case "right":
      rotate = 90;
      break;
  }

  return rotate;
}
//# sourceMappingURL=TriangleMarker.js.map