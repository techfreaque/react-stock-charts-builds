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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var PriceCoordinate = /*#__PURE__*/function (_Component) {
  _inherits(PriceCoordinate, _Component);

  var _super = _createSuper(PriceCoordinate);

  function PriceCoordinate(props) {
    var _this;

    _classCallCheck(this, PriceCoordinate);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PriceCoordinate, [{
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var props = helper(this.props, moreProps);
      (0, _EdgeCoordinateV.drawOnCanvas)(ctx, props);
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var props = helper(this.props, moreProps);
      return (0, _EdgeCoordinateV.renderSVG)(props);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        clip: false,
        svgDraw: this.renderSVG,
        canvasDraw: this.drawOnCanvas,
        canvasToDraw: _GenericComponent.getAxisCanvas,
        drawOn: ["pan"]
      });
    }
  }]);

  return PriceCoordinate;
}(_react.Component);

PriceCoordinate.propTypes = {
  displayFormat: _propTypes["default"].func.isRequired,
  yAxisPad: _propTypes["default"].number,
  rectWidth: _propTypes["default"].number,
  rectHeight: _propTypes["default"].number,
  orient: _propTypes["default"].oneOf(["bottom", "top", "left", "right"]),
  at: _propTypes["default"].oneOf(["bottom", "top", "left", "right"]),
  price: _propTypes["default"].number,
  dx: _propTypes["default"].number,
  arrowWidth: _propTypes["default"].number,
  opacity: _propTypes["default"].number,
  lineOpacity: _propTypes["default"].number,
  lineStroke: _propTypes["default"].string,
  fontFamily: _propTypes["default"].string,
  fontSize: _propTypes["default"].number,
  fill: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  strokeDasharray: _propTypes["default"].oneOf(_utils.strokeDashTypes),
  stroke: _propTypes["default"].string,
  strokeOpacity: _propTypes["default"].number,
  strokeWidth: _propTypes["default"].number,
  textFill: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func])
};
PriceCoordinate.defaultProps = {
  yAxisPad: 0,
  rectWidth: 50,
  rectHeight: 20,
  orient: "left",
  at: "left",
  price: 0,
  dx: 0,
  arrowWidth: 0,
  fill: "#BAB8b8",
  opacity: 1,
  lineOpacity: 0.2,
  lineStroke: "#000000",
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  fontSize: 13,
  textFill: "#FFFFFF",
  strokeOpacity: 1,
  strokeWidth: 1,
  strokeDasharray: "Solid"
};

function helper(props, moreProps) {
  var width = moreProps.width;
  var yScale = moreProps.chartConfig.yScale;

  var _yScale$domain = yScale.domain(),
      _yScale$domain2 = _slicedToArray(_yScale$domain, 2),
      lowerYValue = _yScale$domain2[0],
      upperYValue = _yScale$domain2[1];

  var price = props.price,
      stroke = props.stroke,
      strokeDasharray = props.strokeDasharray,
      strokeOpacity = props.strokeOpacity,
      strokeWidth = props.strokeWidth;
  var orient = props.orient,
      at = props.at,
      rectWidth = props.rectWidth,
      rectHeight = props.rectHeight,
      displayFormat = props.displayFormat,
      dx = props.dx;
  var fill = props.fill,
      opacity = props.opacity,
      fontFamily = props.fontFamily,
      fontSize = props.fontSize,
      textFill = props.textFill,
      arrowWidth = props.arrowWidth,
      lineOpacity = props.lineOpacity,
      lineStroke = props.lineStroke;
  var x1 = 0,
      x2 = width;
  var edgeAt = at === "right" ? width : 0;
  var type = "horizontal";
  var y = yScale(price);
  var show = price <= upperYValue && price >= lowerYValue;
  var coordinate = displayFormat(yScale.invert(y));
  var hideLine = false;
  var coordinateProps = {
    coordinate: coordinate,
    show: show,
    type: type,
    orient: orient,
    edgeAt: edgeAt,
    hideLine: hideLine,
    lineOpacity: lineOpacity,
    lineStroke: lineStroke,
    lineStrokeDasharray: strokeDasharray,
    stroke: stroke,
    strokeOpacity: strokeOpacity,
    strokeWidth: strokeWidth,
    fill: (0, _utils.functor)(fill)(price),
    textFill: (0, _utils.functor)(textFill)(price),
    opacity: opacity,
    fontFamily: fontFamily,
    fontSize: fontSize,
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

var _default = PriceCoordinate;
exports["default"] = _default;
//# sourceMappingURL=PriceCoordinate.js.map