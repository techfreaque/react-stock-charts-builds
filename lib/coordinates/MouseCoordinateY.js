"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.getYCoordinate = getYCoordinate;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _EdgeCoordinateV = require("./EdgeCoordinateV3");

var _GenericChartComponent = _interopRequireDefault(require("../GenericChartComponent"));

var _GenericComponent = require("../GenericComponent");

var _utils = require("../utils");

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

var MouseCoordinateY = /*#__PURE__*/function (_Component) {
  _inherits(MouseCoordinateY, _Component);

  var _super = _createSuper(MouseCoordinateY);

  function MouseCoordinateY(props) {
    var _this;

    _classCallCheck(this, MouseCoordinateY);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MouseCoordinateY, [{
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var props = helper(this.props, moreProps);
      if ((0, _utils.isNotDefined)(props)) return null;
      (0, _EdgeCoordinateV.drawOnCanvas)(ctx, props);
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var props = helper(this.props, moreProps);
      if ((0, _utils.isNotDefined)(props)) return null;
      return (0, _EdgeCoordinateV.renderSVG)(props);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        clip: false,
        svgDraw: this.renderSVG,
        canvasDraw: this.drawOnCanvas,
        canvasToDraw: _GenericComponent.getMouseCanvas,
        drawOn: ["mousemove", "pan", "drag"]
      });
    }
  }]);

  return MouseCoordinateY;
}(_react.Component);

MouseCoordinateY.propTypes = {
  displayFormat: _propTypes["default"].func.isRequired,
  yAxisPad: _propTypes["default"].number,
  rectWidth: _propTypes["default"].number,
  rectHeight: _propTypes["default"].number,
  orient: _propTypes["default"].oneOf(["bottom", "top", "left", "right"]),
  at: _propTypes["default"].oneOf(["bottom", "top", "left", "right"]),
  dx: _propTypes["default"].number,
  fill: _propTypes["default"].string,
  opacity: _propTypes["default"].number,
  fontFamily: _propTypes["default"].string,
  fontSize: _propTypes["default"].number,
  textFill: _propTypes["default"].string
};
MouseCoordinateY.defaultProps = {
  yAxisPad: 0,
  rectWidth: 50,
  rectHeight: 20,
  orient: "left",
  at: "left",
  dx: 0,
  arrowWidth: 10,
  fill: "#525252",
  opacity: 1,
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  fontSize: 13,
  textFill: "#FFFFFF",
  // stroke: "#684F1D",
  strokeOpacity: 1,
  strokeWidth: 1
};

function helper(props, moreProps) {
  var chartId = moreProps.chartId;
  var currentCharts = moreProps.currentCharts,
      mouseXY = moreProps.mouseXY;
  if ((0, _utils.isNotDefined)(mouseXY)) return null;
  if (currentCharts.indexOf(chartId) < 0) return null;
  var show = moreProps.show;
  if (!show) return null;
  var y = mouseXY[1];
  var yScale = moreProps.chartConfig.yScale;
  var displayFormat = props.displayFormat;
  var coordinate = displayFormat(yScale.invert(y));
  return getYCoordinate(y, coordinate, props, moreProps);
}

function getYCoordinate(y, displayValue, props, moreProps) {
  var width = moreProps.width;
  var orient = props.orient,
      at = props.at,
      rectWidth = props.rectWidth,
      rectHeight = props.rectHeight,
      dx = props.dx;
  var fill = props.fill,
      opacity = props.opacity,
      fontFamily = props.fontFamily,
      fontSize = props.fontSize,
      textFill = props.textFill,
      arrowWidth = props.arrowWidth;
  var stroke = props.stroke,
      strokeOpacity = props.strokeOpacity,
      strokeWidth = props.strokeWidth;
  var x1 = 0,
      x2 = width;
  var edgeAt = at === "right" ? width : 0;
  var type = "horizontal";
  var hideLine = true;
  var coordinateProps = {
    coordinate: displayValue,
    show: true,
    type: type,
    orient: orient,
    edgeAt: edgeAt,
    hideLine: hideLine,
    fill: fill,
    opacity: opacity,
    fontFamily: fontFamily,
    fontSize: fontSize,
    textFill: textFill,
    stroke: stroke,
    strokeOpacity: strokeOpacity,
    strokeWidth: strokeWidth,
    rectWidth: rectWidth,
    rectHeight: rectHeight,
    arrowWidth: arrowWidth,
    dx: dx,
    x1: x1,
    x2: x2,
    y1: y,
    y2: y
  };
  return coordinateProps;
}

var _default = MouseCoordinateY;
exports["default"] = _default;
//# sourceMappingURL=MouseCoordinateY.js.map