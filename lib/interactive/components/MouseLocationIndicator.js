"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GenericChartComponent = _interopRequireDefault(require("../../GenericChartComponent"));

var _GenericComponent = require("../../GenericComponent");

var _utils = require("../../utils");

var _ChartDataUtil = require("../../utils/ChartDataUtil");

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

var MouseLocationIndicator = /*#__PURE__*/function (_Component) {
  _inherits(MouseLocationIndicator, _Component);

  var _super = _createSuper(MouseLocationIndicator);

  function MouseLocationIndicator(props) {
    var _this;

    _classCallCheck(this, MouseLocationIndicator);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    _this.handleMousePosChange = _this.handleMousePosChange.bind(_assertThisInitialized(_this));
    _this.handleMouseDown = _this.handleMouseDown.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.xy = _this.xy.bind(_assertThisInitialized(_this));
    _this.mutableState = {};
    return _this;
  }

  _createClass(MouseLocationIndicator, [{
    key: "handleMouseDown",
    value: function handleMouseDown(moreProps, e) {
      var pos = this.xy(moreProps, e);

      if ((0, _utils.isDefined)(pos)) {
        var xValue = pos.xValue,
            yValue = pos.yValue,
            x = pos.x,
            y = pos.y;
        this.mutableState = {
          x: x,
          y: y
        };
        this.props.onMouseDown([xValue, yValue], moreProps, e);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(moreProps, e) {
      var pos = this.xy(moreProps, e);

      if ((0, _utils.isDefined)(pos)) {
        var xValue = pos.xValue,
            yValue = pos.yValue,
            x = pos.x,
            y = pos.y;
        this.mutableState = {
          x: x,
          y: y
        };
        this.props.onClick([xValue, yValue], moreProps, e);
      }
    }
  }, {
    key: "xy",
    value: function xy(moreProps, e) {
      var xAccessor = moreProps.xAccessor,
          plotData = moreProps.plotData;
      var mouseXY = moreProps.mouseXY,
          currentItem = moreProps.currentItem,
          xScale = moreProps.xScale,
          yScale = moreProps.chartConfig.yScale;
      var _this$props = this.props,
          enabled = _this$props.enabled,
          snap = _this$props.snap,
          shouldDisableSnap = _this$props.shouldDisableSnap,
          snapTo = _this$props.snapTo;

      if (enabled && (0, _utils.isDefined)(currentItem) && (0, _utils.isDefined)(e)) {
        var xValue = snap && !shouldDisableSnap(e) ? xAccessor(currentItem) : (0, _ChartDataUtil.getXValue)(xScale, xAccessor, mouseXY, plotData);
        var yValue = snap && !shouldDisableSnap(e) ? (0, _utils.getClosestValue)(snapTo(currentItem), yScale.invert(mouseXY[1])) : yScale.invert(mouseXY[1]);
        var x = xScale(xValue);
        var y = yScale(yValue);
        return {
          xValue: xValue,
          yValue: yValue,
          x: x,
          y: y
        };
      }
    }
  }, {
    key: "handleMousePosChange",
    value: function handleMousePosChange(moreProps, e) {
      if (!(0, _utils.shallowEqual)(moreProps.mousXY, moreProps.prevMouseXY)) {
        var pos = this.xy(moreProps, e);

        if ((0, _utils.isDefined)(pos)) {
          var xValue = pos.xValue,
              yValue = pos.yValue,
              x = pos.x,
              y = pos.y;
          this.mutableState = {
            x: x,
            y: y
          };
          this.props.onMouseMove([xValue, yValue], e);
        }
      }
    }
  }, {
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var _this$props2 = this.props,
          enabled = _this$props2.enabled,
          r = _this$props2.r,
          stroke = _this$props2.stroke,
          strokeWidth = _this$props2.strokeWidth;
      var _this$mutableState = this.mutableState,
          x = _this$mutableState.x,
          y = _this$mutableState.y;
      var show = moreProps.show; // console.log(show)

      if (enabled && show && (0, _utils.isDefined)(x)) {
        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = stroke;
        ctx.moveTo(x, y);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI, false);
        ctx.stroke(); // ctx.fill();
      }
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var _this$props3 = this.props,
          enabled = _this$props3.enabled,
          r = _this$props3.r,
          stroke = _this$props3.stroke,
          strokeWidth = _this$props3.strokeWidth,
          opacity = _this$props3.opacity;
      var _this$mutableState2 = this.mutableState,
          x = _this$mutableState2.x,
          y = _this$mutableState2.y;
      var show = moreProps.show; // console.log("HERE")
      // console.log(stroke, strokeWidth, opacity)

      return enabled && show && (0, _utils.isDefined)(x) ? /*#__PURE__*/_react["default"].createElement("circle", {
        cx: x,
        cy: y,
        r: r,
        stroke: stroke,
        opacity: opacity,
        fillRule: "none",
        strokeWidth: strokeWidth
      }) : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          enabled = _this$props4.enabled,
          disablePan = _this$props4.disablePan;
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        onMouseDown: this.handleMouseDown,
        onClick: this.handleClick,
        onContextMenu: this.handleContextMenu,
        onMouseMove: this.handleMousePosChange,
        onPan: this.handleMousePosChange,
        disablePan: enabled && disablePan,
        svgDraw: this.renderSVG,
        canvasDraw: this.drawOnCanvas,
        canvasToDraw: _GenericComponent.getMouseCanvas,
        drawOn: ["mousemove", "pan"]
      });
    }
  }]);

  return MouseLocationIndicator;
}(_react.Component);

MouseLocationIndicator.propTypes = {
  enabled: _propTypes["default"].bool.isRequired,
  snap: _propTypes["default"].bool.isRequired,
  shouldDisableSnap: _propTypes["default"].func.isRequired,
  snapTo: _propTypes["default"].func,
  onMouseMove: _propTypes["default"].func.isRequired,
  onMouseDown: _propTypes["default"].func.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  r: _propTypes["default"].number.isRequired,
  stroke: _propTypes["default"].string.isRequired,
  strokeWidth: _propTypes["default"].number.isRequired,
  opacity: _propTypes["default"].number.isRequired,
  disablePan: _propTypes["default"].bool.isRequired
};
MouseLocationIndicator.defaultProps = {
  onMouseMove: _utils.noop,
  onMouseDown: _utils.noop,
  onClick: _utils.noop,
  shouldDisableSnap: (0, _utils.functor)(false),
  stroke: "#000000",
  strokeWidth: 1,
  opacity: 1,
  disablePan: true
};
var _default = MouseLocationIndicator;
exports["default"] = _default;
//# sourceMappingURL=MouseLocationIndicator.js.map