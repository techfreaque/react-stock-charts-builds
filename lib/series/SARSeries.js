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

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var SARSeries = /*#__PURE__*/function (_Component) {
  _inherits(SARSeries, _Component);

  var _super = _createSuper(SARSeries);

  function SARSeries(props) {
    var _this;

    _classCallCheck(this, SARSeries);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    _this.isHover = _this.isHover.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SARSeries, [{
    key: "isHover",
    value: function isHover(moreProps) {
      var mouseXY = moreProps.mouseXY,
          currentItem = moreProps.currentItem,
          yScale = moreProps.chartConfig.yScale;
      var yAccessor = this.props.yAccessor;
      var y = mouseXY[1];
      var currentY = yScale(yAccessor(currentItem));
      return y < currentY + 5 && y > currentY - 5;
    }
  }, {
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var _this$props = this.props,
          yAccessor = _this$props.yAccessor,
          fill = _this$props.fill,
          opacity = _this$props.opacity;
      var xAccessor = moreProps.xAccessor,
          plotData = moreProps.plotData,
          xScale = moreProps.xScale,
          yScale = moreProps.chartConfig.yScale,
          hovering = moreProps.hovering;
      var width = xScale(xAccessor((0, _utils.last)(plotData))) - xScale(xAccessor((0, _utils.first)(plotData)));
      var d = width / plotData.length * 0.5 / 2;
      var radius = Math.min(2, Math.max(0.5, d)) + (hovering ? 2 : 0);
      plotData.forEach(function (each) {
        var centerX = xScale(xAccessor(each));
        var centerY = yScale(yAccessor(each));
        var color = yAccessor(each) > each.close ? fill.falling : fill.rising;
        ctx.fillStyle = (0, _utils.hexToRGBA)(color, opacity);
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius, radius, 0, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      });
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var _this$props2 = this.props,
          className = _this$props2.className,
          yAccessor = _this$props2.yAccessor;
      var xAccessor = moreProps.xAccessor,
          plotData = moreProps.plotData,
          xScale = moreProps.xScale,
          yScale = moreProps.chartConfig.yScale; // console.log(moreProps);

      return /*#__PURE__*/_react["default"].createElement("g", {
        className: className
      }, plotData.filter(function (each) {
        return (0, _utils.isDefined)(yAccessor(each));
      }).map(function (each, idx) {
        return /*#__PURE__*/_react["default"].createElement("circle", {
          key: idx,
          cx: xScale(xAccessor(each)),
          cy: yScale(yAccessor(each)),
          r: 3,
          fill: "green"
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var highlightOnHover = this.props.highlightOnHover;
      var hoverProps = highlightOnHover ? {
        isHover: this.isHover,
        drawOn: ["mousemove", "pan"],
        canvasToDraw: _GenericComponent.getMouseCanvas
      } : {
        drawOn: ["pan"],
        canvasToDraw: _GenericComponent.getAxisCanvas
      };
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], _extends({
        svgDraw: this.renderSVG,
        canvasDraw: this.drawOnCanvas,
        onClickWhenHover: this.props.onClick,
        onDoubleClickWhenHover: this.props.onDoubleClick,
        onContextMenuWhenHover: this.props.onContextMenu
      }, hoverProps));
    }
  }]);

  return SARSeries;
}(_react.Component);

SARSeries.propTypes = {
  className: _propTypes["default"].string,
  fill: _propTypes["default"].object.isRequired,
  yAccessor: _propTypes["default"].func.isRequired,
  opacity: _propTypes["default"].number.isRequired,
  onClick: _propTypes["default"].func,
  onDoubleClick: _propTypes["default"].func,
  onContextMenu: _propTypes["default"].func,
  highlightOnHover: _propTypes["default"].bool
};
SARSeries.defaultProps = {
  className: "react-stockcharts-sar",
  fill: {
    falling: "#4682B4",
    rising: "#15EC2E"
  },
  highlightOnHover: true,
  opacity: 0.2,
  onClick: function onClick(e) {
    console.log("Click", e);
  },
  onDoubleClick: function onDoubleClick(e) {
    console.log("Double Click", e);
  },
  onContextMenu: function onContextMenu(e) {
    console.log("Right Click", e);
  }
};
var _default = SARSeries;
exports["default"] = _default;
//# sourceMappingURL=SARSeries.js.map