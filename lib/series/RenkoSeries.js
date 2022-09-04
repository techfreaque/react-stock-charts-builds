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

var RenkoSeries = /*#__PURE__*/function (_Component) {
  _inherits(RenkoSeries, _Component);

  var _super = _createSuper(RenkoSeries);

  function RenkoSeries(props) {
    var _this;

    _classCallCheck(this, RenkoSeries);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RenkoSeries, [{
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var xAccessor = moreProps.xAccessor;
      var xScale = moreProps.xScale,
          yScale = moreProps.chartConfig.yScale,
          plotData = moreProps.plotData;
      var yAccessor = this.props.yAccessor;
      var candles = getRenko(this.props, plotData, xScale, xAccessor, yScale, yAccessor);

      _drawOnCanvas(ctx, candles);
    }
  }, {
    key: "render",
    value: function render() {
      var clip = this.props.clip;
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        clip: clip,
        svgDraw: this.renderSVG,
        canvasDraw: this.drawOnCanvas,
        canvasToDraw: _GenericComponent.getAxisCanvas,
        drawOn: ["pan"]
      });
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var xAccessor = moreProps.xAccessor;
      var xScale = moreProps.xScale,
          yScale = moreProps.chartConfig.yScale,
          plotData = moreProps.plotData;
      var yAccessor = this.props.yAccessor;
      var candles = getRenko(this.props, plotData, xScale, xAccessor, yScale, yAccessor).map(function (each, idx) {
        return /*#__PURE__*/_react["default"].createElement("rect", {
          key: idx,
          className: each.className,
          fillRule: each.fill,
          x: each.x,
          y: each.y,
          width: each.width,
          height: each.height
        });
      });
      return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("g", {
        className: "candle"
      }, candles));
    }
  }]);

  return RenkoSeries;
}(_react.Component);

RenkoSeries.propTypes = {
  classNames: _propTypes["default"].shape({
    up: _propTypes["default"].string,
    down: _propTypes["default"].string
  }),
  stroke: _propTypes["default"].shape({
    up: _propTypes["default"].string,
    down: _propTypes["default"].string
  }),
  fill: _propTypes["default"].shape({
    up: _propTypes["default"].string,
    down: _propTypes["default"].string,
    partial: _propTypes["default"].string
  }),
  yAccessor: _propTypes["default"].func.isRequired,
  clip: _propTypes["default"].bool.isRequired
};
RenkoSeries.defaultProps = {
  classNames: {
    up: "up",
    down: "down"
  },
  stroke: {
    up: "none",
    down: "none"
  },
  fill: {
    up: "#6BA583",
    down: "#E60000",
    partial: "#4682B4"
  },
  yAccessor: function yAccessor(d) {
    return {
      open: d.open,
      high: d.high,
      low: d.low,
      close: d.close
    };
  },
  clip: true
};

function _drawOnCanvas(ctx, renko) {
  renko.forEach(function (d) {
    ctx.beginPath();
    ctx.strokeStyle = d.stroke;
    ctx.fillStyle = d.fill;
    ctx.rect(d.x, d.y, d.width, d.height);
    ctx.closePath();
    ctx.fill();
  });
}

function getRenko(props, plotData, xScale, xAccessor, yScale, yAccessor) {
  var classNames = props.classNames,
      fill = props.fill;
  var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));
  var candleWidth = width / (plotData.length - 1);
  var candles = plotData.filter(function (d) {
    return (0, _utils.isDefined)(yAccessor(d).close);
  }).map(function (d) {
    var ohlc = yAccessor(d);
    var x = xScale(xAccessor(d)) - 0.5 * candleWidth,
        y = yScale(Math.max(ohlc.open, ohlc.close)),
        height = Math.abs(yScale(ohlc.open) - yScale(ohlc.close)),
        className = ohlc.open <= ohlc.close ? classNames.up : classNames.down;
    var svgfill = d.fullyFormed ? ohlc.open <= ohlc.close ? fill.up : fill.down : fill.partial;
    return {
      className: className,
      fill: svgfill,
      x: x,
      y: y,
      height: height,
      width: candleWidth
    };
  });
  return candles;
}

var _default = RenkoSeries;
exports["default"] = _default;
//# sourceMappingURL=RenkoSeries.js.map