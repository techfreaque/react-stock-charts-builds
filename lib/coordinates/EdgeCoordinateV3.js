"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawOnCanvas = drawOnCanvas;
exports.renderSVG = renderSVG;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/prop-types */
function renderSVG(props) {
  var className = props.className;
  var edge = helper(props);
  if (edge === null) return null;
  var line, coordinateBase, coordinate;

  if ((0, _utils.isDefined)(edge.line)) {
    line = /*#__PURE__*/_react["default"].createElement("line", {
      className: "react-stockcharts-cross-hair",
      strokeOpacity: edge.line.opacity,
      stroke: edge.line.stroke,
      strokeDasharray: (0, _utils.getStrokeDasharray)(edge.line.strokeDasharray),
      x1: edge.line.x1,
      y1: edge.line.y1,
      x2: edge.line.x2,
      y2: edge.line.y2
    });
  }

  if ((0, _utils.isDefined)(edge.coordinateBase)) {
    var _edge$coordinateBase = edge.coordinateBase,
        rectWidth = _edge$coordinateBase.rectWidth,
        rectHeight = _edge$coordinateBase.rectHeight,
        arrowWidth = _edge$coordinateBase.arrowWidth;
    var path = edge.orient === "left" ? "M0,0L0,".concat(rectHeight, "L").concat(rectWidth, ",").concat(rectHeight, "L").concat(rectWidth + arrowWidth, ",10L").concat(rectWidth, ",0L0,0L0,0") : "M0,".concat(arrowWidth, "L").concat(arrowWidth, ",").concat(rectHeight, "L").concat(rectWidth + arrowWidth, ",").concat(rectHeight, "L").concat(rectWidth + arrowWidth, ",0L").concat(arrowWidth, ",0L0,").concat(arrowWidth);
    coordinateBase = edge.orient === "left" || edge.orient === "right" ? /*#__PURE__*/_react["default"].createElement("g", {
      key: 1,
      transform: "translate(".concat(edge.coordinateBase.edgeXRect, ",").concat(edge.coordinateBase.edgeYRect, ")")
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: path,
      className: "react-stockchart-text-background",
      height: rectHeight,
      width: rectWidth,
      stroke: edge.coordinateBase.stroke,
      strokeLinejoin: "miter",
      strokeOpacity: edge.coordinateBase.strokeOpacity,
      strokeWidth: edge.coordinateBase.strokeWidth,
      fill: edge.coordinateBase.fill,
      fillOpacity: edge.coordinateBase.opacity
    })) : /*#__PURE__*/_react["default"].createElement("rect", {
      key: 1,
      className: "react-stockchart-text-background",
      x: edge.coordinateBase.edgeXRect,
      y: edge.coordinateBase.edgeYRect,
      height: rectHeight,
      width: rectWidth,
      fill: edge.coordinateBase.fill,
      opacity: edge.coordinateBase.opacity
    });
    coordinate = /*#__PURE__*/_react["default"].createElement("text", {
      key: 2,
      x: edge.coordinate.edgeXText,
      y: edge.coordinate.edgeYText,
      textAnchor: edge.coordinate.textAnchor,
      fontFamily: edge.coordinate.fontFamily,
      fontSize: edge.coordinate.fontSize,
      dy: ".32em",
      fill: edge.coordinate.textFill
    }, edge.coordinate.displayCoordinate);
  }

  return /*#__PURE__*/_react["default"].createElement("g", {
    className: className
  }, line, coordinateBase, coordinate);
}
/* eslint-enable react/prop-types */


function helper(props) {
  var displayCoordinate = props.coordinate,
      show = props.show,
      type = props.type,
      orient = props.orient,
      edgeAt = props.edgeAt,
      hideLine = props.hideLine,
      lineStrokeDasharray = props.lineStrokeDasharray;
  var fill = props.fill,
      opacity = props.opacity,
      fontFamily = props.fontFamily,
      fontSize = props.fontSize,
      textFill = props.textFill,
      lineStroke = props.lineStroke,
      lineOpacity = props.lineOpacity;
  var stroke = props.stroke,
      strokeOpacity = props.strokeOpacity,
      strokeWidth = props.strokeWidth;
  var arrowWidth = props.arrowWidth,
      rectWidth = props.rectWidth,
      rectHeight = props.rectHeight,
      rectRadius = props.rectRadius;
  var x1 = props.x1,
      y1 = props.y1,
      x2 = props.x2,
      y2 = props.y2,
      dx = props.dx;
  if (!show) return null;
  var coordinateBase, coordinate;

  if ((0, _utils.isDefined)(displayCoordinate)) {
    var textAnchor = "middle"; // TODO: Below it is necessary to implement logic for the possibility of alignment from the right or from the left.

    var edgeXRect, edgeYRect, edgeXText, edgeYText;

    if (type === "horizontal") {
      edgeXRect = dx + (orient === "right" ? edgeAt + 1 : edgeAt - rectWidth - 1);
      edgeYRect = y1 - rectHeight / 2 - strokeWidth;
      edgeXText = dx + (orient === "right" ? edgeAt + rectWidth / 2 : edgeAt - rectWidth / 2);
      edgeYText = y1;
    } else {
      var dy = orient === "bottom" ? strokeWidth - 1 : -strokeWidth + 1;
      edgeXRect = x1 - rectWidth / 2;
      edgeYRect = (orient === "bottom" ? edgeAt : edgeAt - rectHeight) + dy;
      edgeXText = x1;
      edgeYText = (orient === "bottom" ? edgeAt + rectHeight / 2 : edgeAt - rectHeight / 2) + dy;
    }

    coordinateBase = {
      edgeXRect: edgeXRect,
      edgeYRect: edgeYRect,
      rectHeight: rectHeight + strokeWidth,
      rectWidth: rectWidth,
      rectRadius: rectRadius,
      fill: fill,
      opacity: opacity,
      arrowWidth: arrowWidth,
      stroke: stroke,
      strokeOpacity: strokeOpacity,
      strokeWidth: strokeWidth
    };
    coordinate = {
      edgeXText: edgeXText,
      edgeYText: edgeYText,
      textAnchor: textAnchor,
      fontFamily: fontFamily,
      fontSize: fontSize,
      textFill: textFill,
      displayCoordinate: displayCoordinate
    };
  }

  var line = hideLine ? undefined : {
    opacity: lineOpacity,
    stroke: lineStroke,
    strokeDasharray: lineStrokeDasharray,
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
  };
  return {
    coordinateBase: coordinateBase,
    coordinate: coordinate,
    line: line,
    orient: orient
  };
}

function drawOnCanvas(ctx, props) {
  var fontSize = props.fontSize,
      fontFamily = props.fontFamily;
  ctx.font = "".concat(fontSize, "px ").concat(fontFamily);
  ctx.textBaseline = "middle";
  var width = Math.round(ctx.measureText(props.coordinate).width + 10);
  var edge = helper(_objectSpread(_objectSpread({}, props), {}, {
    rectWidth: width
  }));
  if (edge === null) return;

  if ((0, _utils.isDefined)(edge.line)) {
    var dashArray = (0, _utils.getStrokeDasharray)(edge.line.strokeDasharray).split(",").map(function (d) {
      return +d;
    });
    ctx.setLineDash(dashArray);
    ctx.strokeStyle = (0, _utils.hexToRGBA)(edge.line.stroke, edge.line.opacity);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(edge.line.x1, edge.line.y1);
    ctx.lineTo(edge.line.x2, edge.line.y2);
    ctx.stroke();
  }

  ctx.setLineDash([]);

  if ((0, _utils.isDefined)(edge.coordinateBase)) {
    var _edge$coordinateBase2 = edge.coordinateBase,
        rectWidth = _edge$coordinateBase2.rectWidth,
        rectHeight = _edge$coordinateBase2.rectHeight,
        rectRadius = _edge$coordinateBase2.rectRadius,
        arrowWidth = _edge$coordinateBase2.arrowWidth;
    ctx.fillStyle = (0, _utils.hexToRGBA)(edge.coordinateBase.fill, edge.coordinateBase.opacity);

    if ((0, _utils.isDefined)(edge.coordinateBase.stroke)) {
      ctx.strokeStyle = (0, _utils.hexToRGBA)(edge.coordinateBase.stroke, edge.coordinateBase.strokeOpacity);
      ctx.lineWidth = edge.coordinateBase.strokeWidth;
    }

    var x = edge.coordinateBase.edgeXRect;
    var y = edge.coordinateBase.edgeYRect;
    var halfHeight = rectHeight / 2;
    ctx.beginPath();

    if (edge.orient === "right") {
      x -= arrowWidth;
      ctx.moveTo(x, y + halfHeight);
      ctx.lineTo(x + arrowWidth, y);
      ctx.lineTo(x + rectWidth + arrowWidth, y);
      ctx.lineTo(x + rectWidth + arrowWidth, y + rectHeight);
      ctx.lineTo(x + arrowWidth, y + rectHeight);
      ctx.closePath();
    } else if (edge.orient === "left") {
      // x += arrowWidth;
      ctx.moveTo(x, y);
      ctx.lineTo(x + rectWidth, y);
      ctx.lineTo(x + rectWidth + arrowWidth, y + halfHeight);
      ctx.lineTo(x + rectWidth, y + rectHeight);
      ctx.lineTo(x, y + rectHeight);
      ctx.closePath();
    } else {
      // console.error(x, y, rectWidth, rectHeight)
      if (rectRadius) {
        roundRect(ctx, x, y, rectWidth, rectHeight, 3);
      } else {
        ctx.rect(x, y, rectWidth, rectHeight);
      }
    }

    ctx.fill();

    if ((0, _utils.isDefined)(edge.coordinateBase.stroke)) {
      ctx.stroke();
    }

    ctx.fillStyle = edge.coordinate.textFill;
    ctx.textAlign = edge.coordinate.textAnchor === "middle" ? "center" : edge.coordinate.textAnchor;
    ctx.fillText(edge.coordinate.displayCoordinate, edge.coordinate.edgeXText, edge.coordinate.edgeYText);
  }
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
} // export default EdgeCoordinate;
//# sourceMappingURL=EdgeCoordinateV3.js.map