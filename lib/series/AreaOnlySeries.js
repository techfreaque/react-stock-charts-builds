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

var AreaOnlySeries = /*#__PURE__*/function (_Component) {
  _inherits(AreaOnlySeries, _Component);

  var _super = _createSuper(AreaOnlySeries);

  function AreaOnlySeries(props) {
    var _this;

    _classCallCheck(this, AreaOnlySeries);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AreaOnlySeries, [{
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var _this$props = this.props,
          yAccessor = _this$props.yAccessor,
          defined = _this$props.defined,
          base = _this$props.base,
          canvasGradient = _this$props.canvasGradient;
      var _this$props2 = this.props,
          fill = _this$props2.fill,
          stroke = _this$props2.stroke,
          opacity = _this$props2.opacity,
          interpolation = _this$props2.interpolation,
          canvasClip = _this$props2.canvasClip;
      var xScale = moreProps.xScale,
          yScale = moreProps.chartConfig.yScale,
          plotData = moreProps.plotData,
          xAccessor = moreProps.xAccessor;

      if (canvasClip) {
        ctx.save();
        canvasClip(ctx, moreProps);
      }

      if (canvasGradient != null) {
        ctx.fillStyle = canvasGradient(moreProps, ctx);
      } else {
        ctx.fillStyle = (0, _utils.hexToRGBA)(fill, opacity);
      }

      ctx.strokeStyle = stroke;
      ctx.beginPath();
      var newBase = (0, _utils.functor)(base);
      var areaSeries = (0, _d3Shape.area)().defined(function (d) {
        return defined(yAccessor(d));
      }).x(function (d) {
        return Math.round(xScale(xAccessor(d)));
      }).y0(function (d) {
        return newBase(yScale, d, moreProps);
      }).y1(function (d) {
        return Math.round(yScale(yAccessor(d)));
      }).context(ctx);

      if ((0, _utils.isDefined)(interpolation)) {
        areaSeries.curve(interpolation);
      }

      areaSeries(plotData);
      ctx.fill();

      if (canvasClip) {
        ctx.restore();
      }
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var _this$props3 = this.props,
          yAccessor = _this$props3.yAccessor,
          defined = _this$props3.defined,
          base = _this$props3.base,
          style = _this$props3.style;
      var _this$props4 = this.props,
          stroke = _this$props4.stroke,
          fill = _this$props4.fill,
          className = _this$props4.className,
          opacity = _this$props4.opacity,
          interpolation = _this$props4.interpolation;
      var xScale = moreProps.xScale,
          yScale = moreProps.chartConfig.yScale,
          plotData = moreProps.plotData,
          xAccessor = moreProps.xAccessor;
      var newBase = (0, _utils.functor)(base);
      var areaSeries = (0, _d3Shape.area)().defined(function (d) {
        return defined(yAccessor(d));
      }).x(function (d) {
        return Math.round(xScale(xAccessor(d)));
      }).y0(function (d) {
        return newBase(yScale, d, moreProps);
      }).y1(function (d) {
        return Math.round(yScale(yAccessor(d)));
      });

      if ((0, _utils.isDefined)(interpolation)) {
        areaSeries.curve(interpolation);
      }

      var d = areaSeries(plotData);
      var newClassName = className.concat((0, _utils.isDefined)(stroke) ? "" : " line-stroke");
      return /*#__PURE__*/_react["default"].createElement("path", {
        style: style,
        d: d,
        stroke: stroke,
        fill: (0, _utils.hexToRGBA)(fill, opacity),
        className: newClassName
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        svgDraw: this.renderSVG,
        canvasDraw: this.drawOnCanvas,
        canvasToDraw: _GenericComponent.getAxisCanvas,
        drawOn: ["pan"]
      });
    }
  }]);

  return AreaOnlySeries;
}(_react.Component);

AreaOnlySeries.propTypes = {
  className: _propTypes["default"].string,
  yAccessor: _propTypes["default"].func.isRequired,
  stroke: _propTypes["default"].string,
  fill: _propTypes["default"].string,
  opacity: _propTypes["default"].number,
  defined: _propTypes["default"].func,
  base: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  interpolation: _propTypes["default"].func,
  canvasClip: _propTypes["default"].func,
  style: _propTypes["default"].object,
  canvasGradient: _propTypes["default"].func
};
AreaOnlySeries.defaultProps = {
  className: "line ",
  fill: "none",
  opacity: 1,
  defined: function defined(d) {
    return !isNaN(d);
  },
  base: function base(yScale
  /* , d, moreProps */
  ) {
    return (0, _utils.first)(yScale.range());
  }
};
var _default = AreaOnlySeries;
exports["default"] = _default;
//# sourceMappingURL=AreaOnlySeries.js.map