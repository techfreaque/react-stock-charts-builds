"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Format = require("d3-format");

var _EdgeCoordinateV = require("./EdgeCoordinateV3");

var _GenericChartComponent = _interopRequireDefault(require("../GenericChartComponent"));

var _GenericComponent = require("../GenericComponent");

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

var EdgeIndicator = /*#__PURE__*/function (_Component) {
  _inherits(EdgeIndicator, _Component);

  var _super = _createSuper(EdgeIndicator);

  function EdgeIndicator(props) {
    var _this;

    _classCallCheck(this, EdgeIndicator);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EdgeIndicator, [{
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var edge = helper(this.props, moreProps);

      var props = _objectSpread(_objectSpread({}, this.props), edge);

      (0, _EdgeCoordinateV.drawOnCanvas)(ctx, props);
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var edge = helper(this.props, moreProps);

      var props = _objectSpread(_objectSpread({}, this.props), edge);

      return (0, _EdgeCoordinateV.renderSVG)(props);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        edgeClip: true,
        clip: false,
        svgDraw: this.renderSVG,
        canvasDraw: this.drawOnCanvas,
        canvasToDraw: _GenericComponent.getAxisCanvas,
        drawOn: ["pan"]
      });
    }
  }]);

  return EdgeIndicator;
}(_react.Component);

EdgeIndicator.propTypes = {
  yAccessor: _propTypes["default"].func,
  type: _propTypes["default"].oneOf(["horizontal"]),
  className: _propTypes["default"].string,
  fill: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  lineStroke: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  textFill: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  itemType: _propTypes["default"].oneOf(["first", "last"]).isRequired,
  orient: _propTypes["default"].oneOf(["left", "right"]),
  edgeAt: _propTypes["default"].oneOf(["left", "right"]),
  displayFormat: _propTypes["default"].func,
  rectHeight: _propTypes["default"].number,
  rectWidth: _propTypes["default"].number,
  arrowWidth: _propTypes["default"].number,
  lineStrokeDasharray: _propTypes["default"].oneOf(_utils.strokeDashTypes)
};
EdgeIndicator.defaultProps = {
  className: "react-stockcharts-edgeindicator",
  type: "horizontal",
  orient: "left",
  edgeAt: "left",
  textFill: "#FFFFFF",
  displayFormat: (0, _d3Format.format)(".2f"),
  yAxisPad: 0,
  rectHeight: 20,
  rectWidth: 50,
  arrowWidth: 10,
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  fontSize: 13,
  dx: 0,
  hideLine: false,
  fill: "#8a8a8a",
  opacity: 1,
  stroke: _utils.noop,
  strokeOpacity: 1,
  strokeWidth: 3,
  lineStroke: "#000000",
  lineOpacity: 0.3,
  lineStrokeDasharray: "ShortDash"
};

function helper(props, moreProps) {
  var itemType = props.itemType,
      yAccessor = props.yAccessor;
  var plotData = moreProps.plotData;
  var item = itemType === "first" ? (0, _utils.first)(plotData, yAccessor) : (0, _utils.last)(plotData, yAccessor); // var currentItem = ChartDataUtil.getCurrentItemForChartNew(currentItems, forChart);

  var edge = (0, _utils.isDefined)(item) ? getEdge(props, moreProps, item) : null;
  return edge;
}

function getEdge(props, moreProps, item) {
  var edgeType = props.type,
      displayFormat = props.displayFormat,
      edgeAt = props.edgeAt,
      yAxisPad = props.yAxisPad,
      orient = props.orient,
      lineStroke = props.lineStroke;
  var yAccessor = props.yAccessor,
      fill = props.fill,
      textFill = props.textFill,
      rectHeight = props.rectHeight,
      rectWidth = props.rectWidth,
      arrowWidth = props.arrowWidth;
  var fontFamily = props.fontFamily,
      fontSize = props.fontSize;
  var stroke = props.stroke;
  var xScale = moreProps.xScale,
      yScale = moreProps.chartConfig.yScale,
      xAccessor = moreProps.xAccessor,
      width = moreProps.width;
  var yValue = yAccessor(item),
      xValue = xAccessor(item);
  var x1 = Math.round(xScale(xValue)),
      y1 = Math.round(yScale(yValue));
  var left = 0,
      right = width;
  var edgeX = edgeAt === "left" ? left - yAxisPad : right + yAxisPad;
  return {
    // ...props,
    coordinate: displayFormat(yValue),
    show: true,
    type: edgeType,
    orient: orient,
    edgeAt: edgeX,
    fill: (0, _utils.functor)(fill)(item),
    lineStroke: (0, _utils.functor)(lineStroke)(item),
    stroke: (0, _utils.functor)(stroke)(item),
    fontFamily: fontFamily,
    fontSize: fontSize,
    textFill: (0, _utils.functor)(textFill)(item),
    rectHeight: rectHeight,
    rectWidth: rectWidth,
    arrowWidth: arrowWidth,
    x1: x1,
    y1: y1,
    x2: right,
    y2: y1
  };
}

var _default = EdgeIndicator;
exports["default"] = _default;
//# sourceMappingURL=EdgeIndicator.js.map