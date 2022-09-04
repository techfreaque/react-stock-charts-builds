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

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var LineSeries = /*#__PURE__*/function (_Component) {
  _inherits(LineSeries, _Component);

  var _super = _createSuper(LineSeries);

  function LineSeries(props) {
    var _this;

    _classCallCheck(this, LineSeries);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    _this.isHover = _this.isHover.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LineSeries, [{
    key: "isHover",
    value: function isHover(moreProps) {
      // console.log("HERE")
      var _this$props = this.props,
          highlightOnHover = _this$props.highlightOnHover,
          yAccessor = _this$props.yAccessor,
          hoverTolerance = _this$props.hoverTolerance;
      if (!highlightOnHover) return false;
      var mouseXY = moreProps.mouseXY,
          currentItem = moreProps.currentItem,
          xScale = moreProps.xScale,
          plotData = moreProps.plotData;
      var _moreProps$chartConfi = moreProps.chartConfig,
          yScale = _moreProps$chartConfi.yScale,
          origin = _moreProps$chartConfi.origin;
      var xAccessor = moreProps.xAccessor;

      var _mouseXY = _slicedToArray(mouseXY, 2),
          x = _mouseXY[0],
          y = _mouseXY[1];

      var radius = hoverTolerance;

      var _getClosestItemIndexe = (0, _utils.getClosestItemIndexes)(plotData, xScale.invert(x), xAccessor),
          left = _getClosestItemIndexe.left,
          right = _getClosestItemIndexe.right;

      if (left === right) {
        var cy = yScale(yAccessor(currentItem)) + origin[1];
        var cx = xScale(xAccessor(currentItem)) + origin[0];
        var hovering1 = Math.pow(x - cx, 2) + Math.pow(y - cy, 2) < Math.pow(radius, 2);
        return hovering1;
      } else {
        var l = plotData[left];
        var r = plotData[right];
        var x1 = xScale(xAccessor(l)) + origin[0];
        var y1 = yScale(yAccessor(l)) + origin[1];
        var x2 = xScale(xAccessor(r)) + origin[0];
        var y2 = yScale(yAccessor(r)) + origin[1]; // y = m * x + b

        var m
        /* slope */
        = (y2 - y1) / (x2 - x1);
        var b
        /* y intercept */
        = -1 * m * x1 + y1;
        var desiredY = Math.round(m * x + b);
        var hovering2 = y >= desiredY - radius && y <= desiredY + radius;
        return hovering2;
      }
    }
  }, {
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var _this$props2 = this.props,
          yAccessor = _this$props2.yAccessor,
          stroke = _this$props2.stroke,
          strokeOpacity = _this$props2.strokeOpacity,
          strokeWidth = _this$props2.strokeWidth,
          hoverStrokeWidth = _this$props2.hoverStrokeWidth,
          defined = _this$props2.defined,
          strokeDasharray = _this$props2.strokeDasharray,
          interpolation = _this$props2.interpolation,
          canvasClip = _this$props2.canvasClip;
      var connectNulls = this.props.connectNulls;
      var xAccessor = moreProps.xAccessor;
      var xScale = moreProps.xScale,
          yScale = moreProps.chartConfig.yScale,
          plotData = moreProps.plotData,
          hovering = moreProps.hovering;

      if (canvasClip) {
        ctx.save();
        canvasClip(ctx, moreProps);
      }

      ctx.lineWidth = hovering ? hoverStrokeWidth : strokeWidth;
      ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, strokeOpacity);
      ctx.setLineDash((0, _utils.getStrokeDasharray)(strokeDasharray).split(","));
      var dataSeries = (0, _d3Shape.line)().x(function (d) {
        return Math.round(xScale(xAccessor(d)));
      }).y(function (d) {
        return Math.round(yScale(yAccessor(d)));
      });

      if ((0, _utils.isDefined)(interpolation)) {
        dataSeries.curve(interpolation);
      }

      if (!connectNulls) {
        dataSeries.defined(function (d) {
          return defined(yAccessor(d));
        });
      }

      ctx.beginPath();
      dataSeries.context(ctx)(plotData);
      ctx.stroke();

      if (canvasClip) {
        ctx.restore();
      }
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var _this$props3 = this.props,
          yAccessor = _this$props3.yAccessor,
          stroke = _this$props3.stroke,
          strokeOpacity = _this$props3.strokeOpacity,
          strokeWidth = _this$props3.strokeWidth,
          hoverStrokeWidth = _this$props3.hoverStrokeWidth,
          defined = _this$props3.defined,
          strokeDasharray = _this$props3.strokeDasharray;
      var connectNulls = this.props.connectNulls;
      var _this$props4 = this.props,
          interpolation = _this$props4.interpolation,
          style = _this$props4.style;
      var xAccessor = moreProps.xAccessor,
          chartConfig = moreProps.chartConfig;
      var xScale = moreProps.xScale,
          plotData = moreProps.plotData,
          hovering = moreProps.hovering;
      var yScale = chartConfig.yScale;
      var dataSeries = (0, _d3Shape.line)().x(function (d) {
        return Math.round(xScale(xAccessor(d)));
      }).y(function (d) {
        return Math.round(yScale(yAccessor(d)));
      });

      if ((0, _utils.isDefined)(interpolation)) {
        dataSeries.curve(interpolation);
      }

      if (!connectNulls) {
        dataSeries.defined(function (d) {
          return defined(yAccessor(d));
        });
      }

      var d = dataSeries(plotData);
      var _this$props5 = this.props,
          fill = _this$props5.fill,
          className = _this$props5.className;
      return /*#__PURE__*/_react["default"].createElement("path", {
        style: style,
        className: "".concat(className, " ").concat(stroke ? "" : " line-stroke"),
        d: d,
        stroke: stroke,
        strokeOpacity: strokeOpacity,
        strokeWidth: hovering ? hoverStrokeWidth : strokeWidth,
        strokeDasharray: (0, _utils.getStrokeDasharray)(strokeDasharray),
        fill: fill
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          highlightOnHover = _this$props6.highlightOnHover,
          onHover = _this$props6.onHover,
          onUnHover = _this$props6.onUnHover;
      var hoverProps = highlightOnHover || onHover || onUnHover ? {
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
        onContextMenuWhenHover: this.props.onContextMenu,
        onHover: this.props.onHover,
        onUnHover: this.props.onUnHover
      }, hoverProps));
    }
  }]);

  return LineSeries;
}(_react.Component);
/*
function segment(points, ctx) {
	ctx.beginPath();

	const [x, y] = first(points);
	ctx.moveTo(x, y);
	for (let i = 1; i < points.length; i++) {
		const [x1, y1] = points[i];
		ctx.lineTo(x1, y1);
	}

	ctx.stroke();
}
*/


LineSeries.propTypes = {
  className: _propTypes["default"].string,
  strokeWidth: _propTypes["default"].number,
  strokeOpacity: _propTypes["default"].number,
  stroke: _propTypes["default"].string,
  hoverStrokeWidth: _propTypes["default"].number,
  fill: _propTypes["default"].string,
  defined: _propTypes["default"].func,
  hoverTolerance: _propTypes["default"].number,
  strokeDasharray: _propTypes["default"].oneOf(_utils.strokeDashTypes),
  highlightOnHover: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  onDoubleClick: _propTypes["default"].func,
  onHover: _propTypes["default"].func,
  onUnHover: _propTypes["default"].func,
  onContextMenu: _propTypes["default"].func,
  yAccessor: _propTypes["default"].func,
  connectNulls: _propTypes["default"].bool,
  interpolation: _propTypes["default"].func,
  canvasClip: _propTypes["default"].func,
  style: _propTypes["default"].object
};
LineSeries.defaultProps = {
  className: "line ",
  strokeWidth: 1,
  strokeOpacity: 1,
  hoverStrokeWidth: 4,
  fill: "none",
  stroke: "#4682B4",
  strokeDasharray: "Solid",
  defined: function defined(d) {
    return !isNaN(d);
  },
  hoverTolerance: 6,
  highlightOnHover: false,
  connectNulls: false,
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
var _default = LineSeries;
exports["default"] = _default;
//# sourceMappingURL=LineSeries.js.map