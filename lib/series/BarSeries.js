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

var _StackedBarSeries = _interopRequireWildcard(require("./StackedBarSeries"));

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

var BarSeries = /*#__PURE__*/function (_Component) {
  _inherits(BarSeries, _Component);

  var _super = _createSuper(BarSeries);

  function BarSeries(props) {
    var _this;

    _classCallCheck(this, BarSeries);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BarSeries, [{
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      if (this.props.swapScales) {
        var xAccessor = moreProps.xAccessor;
        (0, _StackedBarSeries.drawOnCanvasHelper)(ctx, this.props, moreProps, xAccessor, _StackedBarSeries.identityStack);
      } else {
        var bars = getBars(this.props, moreProps);
        (0, _StackedBarSeries.drawOnCanvas2)(this.props, ctx, bars);
      }
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      if (this.props.swapScales) {
        var xAccessor = moreProps.xAccessor;
        return /*#__PURE__*/_react["default"].createElement("g", null, (0, _StackedBarSeries.svgHelper)(this.props, moreProps, xAccessor, _StackedBarSeries.identityStack));
      } else {
        var bars = getBars(this.props, moreProps);
        return /*#__PURE__*/_react["default"].createElement("g", null, (0, _StackedBarSeries.getBarsSVG2)(this.props, bars));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var clip = this.props.clip;
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        clip: clip,
        svgDraw: this.renderSVG,
        canvasToDraw: _GenericComponent.getAxisCanvas,
        canvasDraw: this.drawOnCanvas,
        drawOn: ["pan"]
      });
    }
  }]);

  return BarSeries;
}(_react.Component);

BarSeries.propTypes = {
  baseAt: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].func]),
  stroke: _propTypes["default"].bool,
  width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].func]),
  yAccessor: _propTypes["default"].func.isRequired,
  opacity: _propTypes["default"].number,
  fill: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  className: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  clip: _propTypes["default"].bool,
  swapScales: _propTypes["default"].bool
};
BarSeries.defaultProps = _StackedBarSeries["default"].defaultProps;
var _default = BarSeries;
/*
 Initially, this program was using StackedBarSeries.getBars
 to benefit from code reuse and having a single place that
 contains the logic for drawing all types of bar charts
 simple, grouped, horizontal, but turnes out
 making it highly cuztimizable also made it slow for the
 most simple case, a regular bar chart.
 This function contains just the necessary logic
 to create bars
*/

exports["default"] = _default;

function getBars(props, moreProps) {
  var baseAt = props.baseAt,
      fill = props.fill,
      stroke = props.stroke,
      yAccessor = props.yAccessor;
  var xScale = moreProps.xScale,
      xAccessor = moreProps.xAccessor,
      plotData = moreProps.plotData,
      yScale = moreProps.chartConfig.yScale;
  var getFill = (0, _utils.functor)(fill);
  var getBase = (0, _utils.functor)(baseAt);
  var widthFunctor = (0, _utils.functor)(props.width);
  var width = widthFunctor(props, {
    xScale: xScale,
    xAccessor: xAccessor,
    plotData: plotData
  });
  /*
  const barWidth = Math.round(width);
  const offset = Math.round(barWidth === 1 ? 0 : 0.5 * barWidth);
  */

  var offset = Math.floor(0.5 * width);
  var bars = plotData.filter(function (d) {
    return (0, _utils.isDefined)(yAccessor(d));
  }).map(function (d) {
    var yValue = yAccessor(d);
    var y = yScale(yValue);
    var x = Math.round(xScale(xAccessor(d))) - offset;
    var h = getBase(xScale, yScale, d) - yScale(yValue);

    if (h < 0) {
      y = y + h;
      h = -h;
    }

    return {
      // type: "line"
      x: x,
      y: Math.round(y),
      height: Math.round(h),
      width: offset * 2,
      fill: getFill(d, 0),
      stroke: stroke ? getFill(d, 0) : "none"
    };
  });
  return bars;
}
//# sourceMappingURL=BarSeries.js.map