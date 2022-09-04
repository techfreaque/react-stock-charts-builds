"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _d3Collection = require("d3-collection");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var OHLCSeries = /*#__PURE__*/function (_Component) {
  _inherits(OHLCSeries, _Component);

  var _super = _createSuper(OHLCSeries);

  function OHLCSeries(props) {
    var _this;

    _classCallCheck(this, OHLCSeries);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OHLCSeries, [{
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var yAccessor = this.props.yAccessor;
      var xAccessor = moreProps.xAccessor;
      var xScale = moreProps.xScale,
          yScale = moreProps.chartConfig.yScale,
          plotData = moreProps.plotData;
      var barData = getOHLCBars(this.props, xAccessor, yAccessor, xScale, yScale, plotData);

      _drawOnCanvas(ctx, barData);
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
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var _this$props = this.props,
          className = _this$props.className,
          yAccessor = _this$props.yAccessor;
      var xAccessor = moreProps.xAccessor;
      var xScale = moreProps.xScale,
          yScale = moreProps.chartConfig.yScale,
          plotData = moreProps.plotData;
      var barData = getOHLCBars(this.props, xAccessor, yAccessor, xScale, yScale, plotData);
      var strokeWidth = barData.strokeWidth,
          bars = barData.bars;
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: className
      }, bars.map(function (d, idx) {
        return /*#__PURE__*/_react["default"].createElement("path", {
          key: idx,
          className: d.className,
          stroke: d.stroke,
          strokeWidth: strokeWidth,
          d: "M".concat(d.openX1, " ").concat(d.openY, " L").concat(d.openX2, " ").concat(d.openY, " M").concat(d.x, " ").concat(d.y1, " L").concat(d.x, " ").concat(d.y2, " M").concat(d.closeX1, " ").concat(d.closeY, " L").concat(d.closeX2, " ").concat(d.closeY)
        });
      }));
    }
  }]);

  return OHLCSeries;
}(_react.Component);

OHLCSeries.propTypes = {
  className: _propTypes["default"].string,
  classNames: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]).isRequired,
  stroke: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]).isRequired,
  yAccessor: _propTypes["default"].func.isRequired,
  clip: _propTypes["default"].bool.isRequired
};
OHLCSeries.defaultProps = {
  className: "react-stockcharts-ohlc",
  yAccessor: function yAccessor(d) {
    return {
      open: d.open,
      high: d.high,
      low: d.low,
      close: d.close
    };
  },
  classNames: function classNames(d) {
    return (0, _utils.isDefined)(d.absoluteChange) ? d.absoluteChange > 0 ? "up" : "down" : "firstbar";
  },
  stroke: function stroke(d) {
    return (0, _utils.isDefined)(d.absoluteChange) ? d.absoluteChange > 0 ? "#6BA583" : "#FF0000" : "#000000";
  },
  clip: true
};

function _drawOnCanvas(ctx, barData) {
  var strokeWidth = barData.strokeWidth,
      bars = barData.bars;
  var wickNest = (0, _d3Collection.nest)().key(function (d) {
    return d.stroke;
  }).entries(bars);
  ctx.lineWidth = strokeWidth;
  wickNest.forEach(function (outer) {
    var key = outer.key,
        values = outer.values;
    ctx.strokeStyle = key;
    values.forEach(function (d) {
      ctx.beginPath();
      ctx.moveTo(d.x, d.y1);
      ctx.lineTo(d.x, d.y2);
      ctx.moveTo(d.openX1, d.openY);
      ctx.lineTo(d.openX2, d.openY);
      ctx.moveTo(d.closeX1, d.closeY);
      ctx.lineTo(d.closeX2, d.closeY);
      ctx.stroke();
    });
  });
}

function getOHLCBars(props, xAccessor, yAccessor, xScale, yScale, plotData) {
  var classNamesProp = props.classNames,
      strokeProp = props.stroke;
  var strokeFunc = (0, _utils.functor)(strokeProp);
  var classNameFunc = (0, _utils.functor)(classNamesProp);
  var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));
  var barWidth = Math.max(1, Math.round(width / (plotData.length - 1) / 2) - 1.5);
  var strokeWidth = Math.min(barWidth, 6);
  var bars = plotData.filter(function (d) {
    return (0, _utils.isDefined)(yAccessor(d).close);
  }).map(function (d) {
    var ohlc = yAccessor(d),
        x = Math.round(xScale(xAccessor(d))),
        y1 = yScale(ohlc.high),
        y2 = yScale(ohlc.low),
        openX1 = x - barWidth,
        openX2 = x + strokeWidth / 2,
        openY = yScale(ohlc.open),
        closeX1 = x - strokeWidth / 2,
        closeX2 = x + barWidth,
        closeY = yScale(ohlc.close),
        className = classNameFunc(d),
        stroke = strokeFunc(d);
    return {
      x: x,
      y1: y1,
      y2: y2,
      openX1: openX1,
      openX2: openX2,
      openY: openY,
      closeX1: closeX1,
      closeX2: closeX2,
      closeY: closeY,
      stroke: stroke,
      className: className
    };
  });
  return {
    barWidth: barWidth,
    strokeWidth: strokeWidth,
    bars: bars
  };
}

var _default = OHLCSeries;
exports["default"] = _default;
//# sourceMappingURL=OHLCSeries.js.map