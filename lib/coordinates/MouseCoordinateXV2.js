"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GenericChartComponent = _interopRequireDefault(require("../GenericChartComponent"));

var _GenericComponent = require("../GenericComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var propTypes = {
  xPosition: _propTypes["default"].func,
  drawCoordinate: _propTypes["default"].func,
  displayFormat: _propTypes["default"].func.isRequired,
  at: _propTypes["default"].oneOf(["bottom", "top"]),
  orient: _propTypes["default"].oneOf(["bottom", "top"]),
  text: _propTypes["default"].shape({
    fontStyle: _propTypes["default"].string,
    fontWeight: _propTypes["default"].string,
    fontFamily: _propTypes["default"].string,
    fontSize: _propTypes["default"].number,
    fill: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string])
  }),
  bg: _propTypes["default"].shape({
    fill: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
    stroke: _propTypes["default"].string,
    strokeWidth: _propTypes["default"].number,
    padding: _propTypes["default"].shape({
      left: _propTypes["default"].number,
      right: _propTypes["default"].number,
      top: _propTypes["default"].number,
      bottom: _propTypes["default"].number
    })
  }),
  dx: _propTypes["default"].number,
  dy: _propTypes["default"].number
};
var defaultProps = {
  xPosition: xPosition,
  drawCoordinate: drawCoordinate,
  at: "bottom",
  orient: "bottom",
  text: {
    fontStyle: "",
    fontWeight: "",
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    fontSize: 13,
    fill: "rgb(35, 35, 35)"
  },
  bg: {
    fill: "rgb(255, 255, 255)",
    stroke: "rgb(35, 35, 35)",
    strokeWidth: 1,
    padding: {
      left: 7,
      right: 7,
      top: 4,
      bottom: 4
    }
  },
  dx: 7,
  dy: 7
};

var MouseCoordinateXV2 = /*#__PURE__*/function (_Component) {
  _inherits(MouseCoordinateXV2, _Component);

  var _super = _createSuper(MouseCoordinateXV2);

  function MouseCoordinateXV2(props) {
    var _this;

    _classCallCheck(this, MouseCoordinateXV2);

    _this = _super.call(this, props);
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MouseCoordinateXV2, [{
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var show = moreProps.show,
          currentItem = moreProps.currentItem;
      var drawCoordinate = this.props.drawCoordinate;

      if (show && currentItem != null) {
        var shape = getXCoordinateInfo(ctx, this.props, moreProps);
        drawCoordinate(ctx, shape, this.props, moreProps);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        clip: false,
        canvasDraw: this.drawOnCanvas,
        canvasToDraw: _GenericComponent.getMouseCanvas,
        drawOn: ["mousemove", "pan", "drag"]
      });
    }
  }]);

  return MouseCoordinateXV2;
}(_react.Component);

MouseCoordinateXV2.defaultProps = defaultProps;
MouseCoordinateXV2.propTypes = propTypes;

function xPosition(props, moreProps) {
  var currentItem = moreProps.currentItem,
      xAccessor = moreProps.xAccessor;
  return xAccessor(currentItem);
}

function getXCoordinateInfo(ctx, props, moreProps) {
  var xPosition = props.xPosition;
  var xValue = xPosition(props, moreProps);
  var at = props.at,
      displayFormat = props.displayFormat;
  var text = props.text;
  var xScale = moreProps.xScale,
      height = moreProps.chartConfig.height;
  ctx.font = "".concat(text.fontStyle, " ").concat(text.fontWeight, " ").concat(text.fontSize, "px ").concat(text.fontFamily);
  var t = displayFormat(xValue);
  var textWidth = ctx.measureText(t).width;
  var y = at === "bottom" ? height : 0;
  var x = Math.round(xScale(xValue));
  return {
    x: x,
    y: y,
    textWidth: textWidth,
    text: t
  };
}

function drawCoordinate(ctx, shape, props, moreProps) {
  var x = shape.x,
      y = shape.y,
      textWidth = shape.textWidth,
      text = shape.text;
  var orient = props.orient,
      dx = props.dx,
      dy = props.dy;
  var _props$bg = props.bg,
      padding = _props$bg.padding,
      fill = _props$bg.fill,
      stroke = _props$bg.stroke,
      strokeWidth = _props$bg.strokeWidth,
      _props$text = props.text,
      fontSize = _props$text.fontSize,
      textFill = _props$text.fill;
  ctx.textAlign = "center";
  var sign = orient === "top" ? -1 : 1;
  var halfWidth = Math.round(textWidth / 2 + padding.right);
  var height = Math.round(fontSize + padding.top + padding.bottom);
  ctx.strokeStyle = typeof stroke === "function" ? stroke(moreProps, ctx) : stroke;
  ctx.fillStyle = typeof fill === "function" ? fill(moreProps, ctx) : fill;
  ctx.lineWidth = typeof strokeWidth === "function" ? strokeWidth(moreProps) : strokeWidth;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + dx, y + sign * dy);
  ctx.lineTo(x + halfWidth, y + sign * dy);
  ctx.lineTo(x + halfWidth, y + sign * (dy + height));
  ctx.lineTo(x - halfWidth, y + sign * (dy + height));
  ctx.lineTo(x - halfWidth, y + sign * dy);
  ctx.lineTo(x - dx, y + sign * dy);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = typeof textFill === "function" ? textFill(moreProps, ctx) : textFill;
  ctx.textBaseline = orient === "top" ? "alphabetic" : "hanging";
  var pad = orient === "top" ? padding.bottom : padding.top;
  ctx.fillText(text, x, y + sign * (dy + pad + 2));
}

var _default = MouseCoordinateXV2;
exports["default"] = _default;
//# sourceMappingURL=MouseCoordinateXV2.js.map