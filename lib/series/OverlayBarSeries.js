"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _d3Array = require("d3-array");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GenericChartComponent = _interopRequireDefault(require("../GenericChartComponent"));

var _GenericComponent = require("../GenericComponent");

var _StackedBarSeries = require("./StackedBarSeries");

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

var OverlayBarSeries = /*#__PURE__*/function (_Component) {
  _inherits(OverlayBarSeries, _Component);

  var _super = _createSuper(OverlayBarSeries);

  function OverlayBarSeries(props) {
    var _this;

    _classCallCheck(this, OverlayBarSeries);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OverlayBarSeries, [{
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var yAccessor = this.props.yAccessor;
      var bars = getBars(this.props, moreProps, yAccessor);
      (0, _StackedBarSeries.drawOnCanvas2)(this.props, ctx, bars);
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var yAccessor = this.props.yAccessor;
      var bars = getBars(this.props, moreProps, yAccessor);
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: "react-stockcharts-bar-series"
      }, (0, _StackedBarSeries.getBarsSVG2)(this.props, bars));
    }
  }, {
    key: "render",
    value: function render() {
      var clip = this.props.clip;
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        svgDraw: this.renderSVG,
        canvasToDraw: _GenericComponent.getAxisCanvas,
        canvasDraw: this.drawOnCanvas,
        clip: clip,
        drawOn: ["pan"]
      });
    }
  }]);

  return OverlayBarSeries;
}(_react.Component);

OverlayBarSeries.propTypes = {
  baseAt: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].func]).isRequired,
  direction: _propTypes["default"].oneOf(["up", "down"]).isRequired,
  stroke: _propTypes["default"].bool.isRequired,
  widthRatio: _propTypes["default"].number.isRequired,
  opacity: _propTypes["default"].number.isRequired,
  fill: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]).isRequired,
  className: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]).isRequired,
  xAccessor: _propTypes["default"].func,
  yAccessor: _propTypes["default"].arrayOf(_propTypes["default"].func),
  xScale: _propTypes["default"].func,
  yScale: _propTypes["default"].func,
  plotData: _propTypes["default"].array,
  clip: _propTypes["default"].bool.isRequired
};
OverlayBarSeries.defaultProps = {
  baseAt: function baseAt(xScale, yScale
  /* , d*/
  ) {
    return (0, _utils.first)(yScale.range());
  },
  direction: "up",
  className: "bar",
  stroke: false,
  fill: "#4682B4",
  opacity: 1,
  widthRatio: 0.5,
  width: _utils.plotDataLengthBarWidth,
  clip: true
};

function getBars(props, moreProps, yAccessor) {
  var xScale = moreProps.xScale,
      xAccessor = moreProps.xAccessor,
      yScale = moreProps.chartConfig.yScale,
      plotData = moreProps.plotData;
  var baseAt = props.baseAt,
      className = props.className,
      fill = props.fill,
      stroke = props.stroke;
  var getClassName = (0, _utils.functor)(className);
  var getFill = (0, _utils.functor)(fill);
  var getBase = (0, _utils.functor)(baseAt);
  var widthFunctor = (0, _utils.functor)(props.width);
  var width = widthFunctor(props, moreProps);
  var offset = Math.floor(0.5 * width); // console.log(xScale.domain(), yScale.domain());

  var bars = plotData.map(function (d) {
    // eslint-disable-next-line prefer-const
    var innerBars = yAccessor.map(function (eachYAccessor, i) {
      var yValue = eachYAccessor(d);
      if ((0, _utils.isNotDefined)(yValue)) return undefined;
      var xValue = xAccessor(d);
      var x = Math.round(xScale(xValue)) - offset;
      var y = yScale(yValue); // console.log(yValue, y, xValue, x)

      return {
        width: offset * 2,
        x: x,
        y: y,
        className: getClassName(d, i),
        stroke: stroke ? getFill(d, i) : "none",
        fill: getFill(d, i),
        i: i
      };
    }).filter(function (yValue) {
      return (0, _utils.isDefined)(yValue);
    });
    var b = getBase(xScale, yScale, d);
    var h;

    for (var i = innerBars.length - 1; i >= 0; i--) {
      h = b - innerBars[i].y;

      if (h < 0) {
        innerBars[i].y = b;
        h = -1 * h;
      }

      innerBars[i].height = h;
      b = innerBars[i].y;
    }

    return innerBars;
  });
  return (0, _d3Array.merge)(bars);
}

var _default = OverlayBarSeries;
exports["default"] = _default;
//# sourceMappingURL=OverlayBarSeries.js.map