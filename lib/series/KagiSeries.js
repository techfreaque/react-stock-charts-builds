"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Shape = require("d3-shape");

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

var KagiSeries = /*#__PURE__*/function (_Component) {
  _inherits(KagiSeries, _Component);

  var _super = _createSuper(KagiSeries);

  function KagiSeries(props) {
    var _this;

    _classCallCheck(this, KagiSeries);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(KagiSeries, [{
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var xAccessor = moreProps.xAccessor;

      _drawOnCanvas(ctx, this.props, moreProps, xAccessor);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        svgDraw: this.renderSVG,
        canvasToDraw: _GenericComponent.getAxisCanvas,
        canvasDraw: this.drawOnCanvas,
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
      var _this$props = this.props,
          className = _this$props.className,
          stroke = _this$props.stroke,
          fill = _this$props.fill,
          strokeWidth = _this$props.strokeWidth;
      var paths = helper(plotData, xAccessor).map(function (each, i) {
        var dataSeries = (0, _d3Shape.line)().x(function (item) {
          return xScale(item[0]);
        }).y(function (item) {
          return yScale(item[1]);
        }).curve(_d3Shape.curveStepBefore);
        dataSeries(each.plot);
        return /*#__PURE__*/_react["default"].createElement("path", {
          key: i,
          d: dataSeries(each.plot),
          className: each.type,
          stroke: stroke[each.type],
          fill: fill[each.type],
          strokeWidth: strokeWidth
        });
      });
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: className
      }, paths);
    }
  }]);

  return KagiSeries;
}(_react.Component);

KagiSeries.propTypes = {
  className: _propTypes["default"].string,
  stroke: _propTypes["default"].object,
  fill: _propTypes["default"].object,
  strokeWidth: _propTypes["default"].number.isRequired
};
KagiSeries.defaultProps = {
  className: "react-stockcharts-kagi",
  strokeWidth: 2,
  stroke: {
    yang: "#6BA583",
    yin: "#E60000"
  },
  fill: {
    yang: "none",
    yin: "none"
  },
  currentValueStroke: "#000000"
};

function _drawOnCanvas(ctx, props, moreProps, xAccessor) {
  var stroke = props.stroke,
      strokeWidth = props.strokeWidth,
      currentValueStroke = props.currentValueStroke;
  var xScale = moreProps.xScale,
      yScale = moreProps.chartConfig.yScale,
      plotData = moreProps.plotData;
  var paths = helper(plotData, xAccessor);
  var begin = true;
  paths.forEach(function (each) {
    ctx.strokeStyle = stroke[each.type];
    ctx.lineWidth = strokeWidth;
    ctx.beginPath();
    var prevX;
    each.plot.forEach(function (d) {
      var _ref = [xScale(d[0]), yScale(d[1])],
          x = _ref[0],
          y = _ref[1];

      if (begin) {
        ctx.moveTo(x, y);
        begin = false;
      } else {
        if ((0, _utils.isDefined)(prevX)) {
          ctx.lineTo(prevX, y);
        }

        ctx.lineTo(x, y);
      }

      prevX = x; // console.log(d);
    });
    ctx.stroke();
  });
  var lastPlot = paths[paths.length - 1].plot;
  var last = lastPlot[lastPlot.length - 1];
  ctx.beginPath(); // ctx.strokeStyle = "black";

  ctx.lineWidth = 1;
  var _ref2 = [xScale(last[0]), yScale(last[2]), yScale(last[3])],
      x = _ref2[0],
      y1 = _ref2[1],
      y2 = _ref2[2]; // console.log(last, x, y);

  ctx.moveTo(x, y1);
  ctx.lineTo(x + 10, y1);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = currentValueStroke;
  ctx.moveTo(x - 10, y2);
  ctx.lineTo(x, y2);
  ctx.stroke();
}

function helper(plotData, xAccessor) {
  var kagiLine = [];
  var kagi = {};
  var d = plotData[0];
  var idx = xAccessor(d);

  for (var i = 0; i < plotData.length; i++) {
    d = plotData[i];
    if ((0, _utils.isNotDefined)(d.close)) continue;
    if ((0, _utils.isNotDefined)(kagi.type)) kagi.type = d.startAs;
    if ((0, _utils.isNotDefined)(kagi.plot)) kagi.plot = [];
    idx = xAccessor(d);
    kagi.plot.push([idx, d.open]);

    if ((0, _utils.isDefined)(d.changeTo)) {
      kagi.plot.push([idx, d.changePoint]);
      kagi.added = true;
      kagiLine.push(kagi);
      kagi = {
        type: d.changeTo,
        plot: [],
        added: false
      };
      kagi.plot.push([idx, d.changePoint]);
    }
  }

  if (!kagi.added) {
    kagi.plot.push([idx, d.close, d.current, d.reverseAt]);
    kagiLine.push(kagi);
  } // console.log(d.reverseAt);


  return kagiLine;
}

var _default = KagiSeries;
exports["default"] = _default;
//# sourceMappingURL=KagiSeries.js.map