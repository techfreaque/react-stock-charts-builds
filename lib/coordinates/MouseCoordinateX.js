"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var MouseCoordinateX = /*#__PURE__*/function (_Component) {
  _inherits(MouseCoordinateX, _Component);

  var _super = _createSuper(MouseCoordinateX);

  function MouseCoordinateX(props) {
    var _this;

    _classCallCheck(this, MouseCoordinateX);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MouseCoordinateX, [{
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
        svgDraw: this.renderSVG,
        clip: false,
        canvasDraw: this.drawOnCanvas,
        canvasToDraw: _GenericComponent.getMouseCanvas,
        drawOn: ["mousemove", "pan", "drag"]
      });
    }
  }]);

  return MouseCoordinateX;
}(_react.Component);

MouseCoordinateX.propTypes = {
  displayFormat: _propTypes["default"].func.isRequired,
  yAxisPad: _propTypes["default"].number,
  rectWidth: _propTypes["default"].number,
  rectHeight: _propTypes["default"].number,
  orient: _propTypes["default"].oneOf(["bottom", "top", "left", "right"]),
  at: _propTypes["default"].oneOf(["bottom", "top", "left", "right"]),
  fill: _propTypes["default"].string,
  opacity: _propTypes["default"].number,
  fontFamily: _propTypes["default"].string,
  fontSize: _propTypes["default"].number,
  textFill: _propTypes["default"].string,
  snapX: _propTypes["default"].bool
};

function customX(props, moreProps) {
  var xScale = moreProps.xScale,
      xAccessor = moreProps.xAccessor,
      currentItem = moreProps.currentItem,
      mouseXY = moreProps.mouseXY;
  var snapX = props.snapX;
  var x = snapX ? xScale(xAccessor(currentItem)) : mouseXY[0];
  var displayXAccessor = moreProps.displayXAccessor;
  var displayFormat = props.displayFormat;
  var coordinate = snapX ? displayFormat(displayXAccessor(currentItem)) : displayFormat(xScale.invert(x));
  return {
    x: x,
    coordinate: coordinate
  };
}

MouseCoordinateX.defaultProps = {
  yAxisPad: 0,
  rectWidth: 80,
  rectHeight: 20,
  // rectRadius: 5,
  // stroke: "#684F1D",
  strokeOpacity: 1,
  strokeWidth: 1,
  orient: "bottom",
  at: "bottom",
  fill: "#525252",
  opacity: 1,
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  fontSize: 13,
  textFill: "#FFFFFF",
  snapX: true,
  customX: customX
};

function helper(props, moreProps) {
  var show = moreProps.show,
      currentItem = moreProps.currentItem;
  var height = moreProps.chartConfig.height;
  if ((0, _utils.isNotDefined)(currentItem)) return null;
  var customX = props.customX;
  var orient = props.orient,
      at = props.at;
  var stroke = props.stroke,
      strokeOpacity = props.strokeOpacity,
      strokeWidth = props.strokeWidth;
  var rectRadius = props.rectRadius,
      rectWidth = props.rectWidth,
      rectHeight = props.rectHeight;
  var fill = props.fill,
      opacity = props.opacity,
      fontFamily = props.fontFamily,
      fontSize = props.fontSize,
      textFill = props.textFill;
  var edgeAt = at === "bottom" ? height : 0;

  var _customX = customX(props, moreProps),
      x = _customX.x,
      coordinate = _customX.coordinate;

  var type = "vertical";
  var y1 = 0,
      y2 = height;
  var hideLine = true;
  var coordinateProps = {
    coordinate: coordinate,
    show: show,
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
    rectRadius: rectRadius,
    arrowWidth: 0,
    x1: x,
    x2: x,
    y1: y1,
    y2: y2
  };
  return coordinateProps;
}

var _default = MouseCoordinateX;
exports["default"] = _default;
//# sourceMappingURL=MouseCoordinateX.js.map