"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _GenericChartComponent = _interopRequireDefault(require("../GenericChartComponent"));

var _GenericComponent = require("../GenericComponent");

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

var Brush = /*#__PURE__*/function (_Component) {
  _inherits(Brush, _Component);

  var _super = _createSuper(Brush);

  function Brush(props, context) {
    var _this;

    _classCallCheck(this, Brush);

    _this = _super.call(this, props, context);
    _this.handleZoomStart = _this.handleZoomStart.bind(_assertThisInitialized(_this));
    _this.handleDrawSquare = _this.handleDrawSquare.bind(_assertThisInitialized(_this));
    _this.handleZoomComplete = _this.handleZoomComplete.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.saveNode = _this.saveNode.bind(_assertThisInitialized(_this));
    _this.terminate = _this.terminate.bind(_assertThisInitialized(_this));
    _this.state = {
      rect: null
    };
    return _this;
  }

  _createClass(Brush, [{
    key: "terminate",
    value: function terminate() {
      this.zoomHappening = false;
      this.setState({
        x1y1: null,
        start: null,
        end: null,
        rect: null
      });
    }
  }, {
    key: "saveNode",
    value: function saveNode(node) {
      this.node = node;
    }
  }, {
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx) {
      var rect = this.state.rect;

      if ((0, _utils.isDefined)(rect)) {
        var x = rect.x,
            y = rect.y,
            height = rect.height,
            width = rect.width;
        var _this$props = this.props,
            stroke = _this$props.stroke,
            fill = _this$props.fill,
            strokeDashArray = _this$props.strokeDashArray;
        var _this$props2 = this.props,
            strokeOpacity = _this$props2.strokeOpacity,
            fillOpacity = _this$props2.fillOpacity;
        var dashArray = (0, _utils.getStrokeDasharray)(strokeDashArray).split(",").map(function (d) {
          return +d;
        });
        ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, strokeOpacity);
        ctx.fillStyle = (0, _utils.hexToRGBA)(fill, fillOpacity);
        ctx.setLineDash(dashArray);
        ctx.beginPath();
        ctx.fillRect(x, y, width, height);
        ctx.strokeRect(x, y, width, height);
      }
    }
  }, {
    key: "renderSVG",
    value: function renderSVG() {
      var rect = this.state.rect;

      if ((0, _utils.isDefined)(rect)) {
        var x = rect.x,
            y = rect.y,
            height = rect.height,
            width = rect.width;
        var _this$props3 = this.props,
            stroke = _this$props3.stroke,
            strokeDashArray = _this$props3.strokeDashArray;
        var _this$props4 = this.props,
            strokeOpacity = _this$props4.strokeOpacity,
            fillOpacity = _this$props4.fillOpacity;
        var dashArray = (0, _utils.getStrokeDasharray)(strokeDashArray).split(",").map(function (d) {
          return +d;
        });
        return /*#__PURE__*/_react["default"].createElement("rect", {
          strokeDasharray: dashArray,
          stroke: stroke,
          fill: "none",
          strokeOpacity: strokeOpacity,
          fillOpacity: fillOpacity,
          x: x,
          y: y,
          width: width,
          height: height
        });
      }
    }
  }, {
    key: "handleZoomStart",
    value: function handleZoomStart(moreProps) {
      this.zoomHappening = false;

      var _moreProps$mouseXY = _slicedToArray(moreProps.mouseXY, 2),
          mouseY = _moreProps$mouseXY[1],
          currentItem = moreProps.currentItem,
          yScale = moreProps.chartConfig.yScale,
          xAccessor = moreProps.xAccessor,
          xScale = moreProps.xScale;

      var x1y1 = [xScale(xAccessor(currentItem)), mouseY];
      this.setState({
        selected: true,
        x1y1: x1y1,
        start: {
          item: currentItem,
          xValue: xAccessor(currentItem),
          yValue: yScale.invert(mouseY)
        }
      });
    }
  }, {
    key: "handleDrawSquare",
    value: function handleDrawSquare(moreProps) {
      if (this.state.x1y1 == null) return;
      this.zoomHappening = true;

      var _moreProps$mouseXY2 = _slicedToArray(moreProps.mouseXY, 2),
          mouseY = _moreProps$mouseXY2[1],
          currentItem = moreProps.currentItem,
          yScale = moreProps.chartConfig.yScale,
          xAccessor = moreProps.xAccessor,
          xScale = moreProps.xScale;

      var _ref = [xScale(xAccessor(currentItem)), mouseY],
          x2 = _ref[0],
          y2 = _ref[1];

      var _this$state$x1y = _slicedToArray(this.state.x1y1, 2),
          x1 = _this$state$x1y[0],
          y1 = _this$state$x1y[1];

      var x = Math.min(x1, x2);
      var y = Math.min(y1, y2);
      var height = Math.abs(y2 - y1);
      var width = Math.abs(x2 - x1);
      this.setState({
        selected: true,
        end: {
          item: currentItem,
          xValue: xAccessor(currentItem),
          yValue: yScale.invert(mouseY)
        },
        rect: {
          x: x,
          y: y,
          height: height,
          width: width
        }
      });
    }
  }, {
    key: "handleZoomComplete",
    value: function handleZoomComplete(moreProps) {
      if (this.zoomHappening) {
        var onBrush = this.props.onBrush;
        var _this$state = this.state,
            start = _this$state.start,
            end = _this$state.end;
        onBrush({
          start: start,
          end: end
        }, moreProps);
      }

      this.setState({
        selected: false,
        rect: null
      });
    }
  }, {
    key: "render",
    value: function render() {
      var enabled = this.props.enabled;
      if (!enabled) return null;
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        ref: this.saveNode,
        disablePan: enabled,
        svgDraw: this.renderSVG,
        canvasToDraw: _GenericComponent.getMouseCanvas,
        canvasDraw: this.drawOnCanvas,
        onMouseDown: this.handleZoomStart,
        onMouseMove: this.handleDrawSquare,
        onClick: this.handleZoomComplete,
        drawOn: ["mousemove", "pan", "drag"]
      });
    }
  }]);

  return Brush;
}(_react.Component);

Brush.propTypes = {
  enabled: _propTypes["default"].bool.isRequired,
  onStart: _propTypes["default"].func.isRequired,
  onBrush: _propTypes["default"].func.isRequired,
  type: _propTypes["default"].oneOf(["1D", "2D"]),
  stroke: _propTypes["default"].string,
  fill: _propTypes["default"].string,
  strokeOpacity: _propTypes["default"].number,
  fillOpacity: _propTypes["default"].number,
  interactiveState: _propTypes["default"].object,
  strokeDashArray: _propTypes["default"].string
};
Brush.defaultProps = {
  type: "2D",
  stroke: "#000000",
  fillOpacity: 0.3,
  strokeOpacity: 1,
  fill: "#3h3h3h",
  onBrush: _utils.noop,
  onStart: _utils.noop,
  strokeDashArray: "ShortDash"
};
var _default = Brush;
exports["default"] = _default;
//# sourceMappingURL=Brush.js.map