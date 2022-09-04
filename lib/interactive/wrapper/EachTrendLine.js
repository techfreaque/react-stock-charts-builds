"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.getNewXY = getNewXY;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Array = require("d3-array");

var _utils = require("../../utils");

var _utils2 = require("../utils");

var _ChartDataUtil = require("../../utils/ChartDataUtil");

var _StraightLine = _interopRequireDefault(require("../components/StraightLine"));

var _ClickableCircle = _interopRequireDefault(require("../components/ClickableCircle"));

var _HoverTextNearMouse = _interopRequireDefault(require("../components/HoverTextNearMouse"));

var _excluded = ["enable", "selectedText", "text"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var EachTrendLine = /*#__PURE__*/function (_Component) {
  _inherits(EachTrendLine, _Component);

  var _super = _createSuper(EachTrendLine);

  function EachTrendLine(props) {
    var _this;

    _classCallCheck(this, EachTrendLine);

    _this = _super.call(this, props);
    _this.handleEdge1Drag = _this.handleEdge1Drag.bind(_assertThisInitialized(_this));
    _this.handleEdge2Drag = _this.handleEdge2Drag.bind(_assertThisInitialized(_this));
    _this.handleLineDragStart = _this.handleLineDragStart.bind(_assertThisInitialized(_this));
    _this.handleLineDrag = _this.handleLineDrag.bind(_assertThisInitialized(_this));
    _this.handleEdge1DragStart = _this.handleEdge1DragStart.bind(_assertThisInitialized(_this));
    _this.handleEdge2DragStart = _this.handleEdge2DragStart.bind(_assertThisInitialized(_this));
    _this.handleDragComplete = _this.handleDragComplete.bind(_assertThisInitialized(_this));
    _this.handleHover = _this.handleHover.bind(_assertThisInitialized(_this));
    _this.isHover = _utils2.isHover.bind(_assertThisInitialized(_this));
    _this.saveNodeType = _utils2.saveNodeType.bind(_assertThisInitialized(_this));
    _this.nodes = {};
    _this.state = {
      hover: false
    };
    return _this;
  }

  _createClass(EachTrendLine, [{
    key: "handleLineDragStart",
    value: function handleLineDragStart() {
      var _this$props = this.props,
          x1Value = _this$props.x1Value,
          y1Value = _this$props.y1Value,
          x2Value = _this$props.x2Value,
          y2Value = _this$props.y2Value;
      this.dragStart = {
        x1Value: x1Value,
        y1Value: y1Value,
        x2Value: x2Value,
        y2Value: y2Value
      };
    }
  }, {
    key: "handleLineDrag",
    value: function handleLineDrag(moreProps) {
      var _this$props2 = this.props,
          index = _this$props2.index,
          onDrag = _this$props2.onDrag;
      var _this$dragStart = this.dragStart,
          x1Value = _this$dragStart.x1Value,
          y1Value = _this$dragStart.y1Value,
          x2Value = _this$dragStart.x2Value,
          y2Value = _this$dragStart.y2Value;
      var xScale = moreProps.xScale,
          yScale = moreProps.chartConfig.yScale,
          xAccessor = moreProps.xAccessor,
          fullData = moreProps.fullData;
      var startPos = moreProps.startPos,
          mouseXY = moreProps.mouseXY;
      var x1 = xScale(x1Value);
      var y1 = yScale(y1Value);
      var x2 = xScale(x2Value);
      var y2 = yScale(y2Value);
      var dx = startPos[0] - mouseXY[0];
      var dy = startPos[1] - mouseXY[1];
      var newX1Value = (0, _ChartDataUtil.getXValue)(xScale, xAccessor, [x1 - dx, y1 - dy], fullData);
      var newY1Value = yScale.invert(y1 - dy);
      var newX2Value = (0, _ChartDataUtil.getXValue)(xScale, xAccessor, [x2 - dx, y2 - dy], fullData);
      var newY2Value = yScale.invert(y2 - dy);
      onDrag(index, {
        x1Value: newX1Value,
        y1Value: newY1Value,
        x2Value: newX2Value,
        y2Value: newY2Value
      });
    }
  }, {
    key: "handleEdge1DragStart",
    value: function handleEdge1DragStart() {
      this.setState({
        anchor: "edge2"
      });
    }
  }, {
    key: "handleEdge2DragStart",
    value: function handleEdge2DragStart() {
      this.setState({
        anchor: "edge1"
      });
    }
  }, {
    key: "handleDragComplete",
    value: function handleDragComplete() {
      var _this$props3;

      this.setState({
        anchor: undefined
      });

      (_this$props3 = this.props).onDragComplete.apply(_this$props3, arguments);
    }
  }, {
    key: "handleEdge1Drag",
    value: function handleEdge1Drag(moreProps) {
      var _this$props4 = this.props,
          index = _this$props4.index,
          onDrag = _this$props4.onDrag;
      var _this$props5 = this.props,
          x2Value = _this$props5.x2Value,
          y2Value = _this$props5.y2Value;

      var _getNewXY = getNewXY(moreProps),
          _getNewXY2 = _slicedToArray(_getNewXY, 2),
          x1Value = _getNewXY2[0],
          y1Value = _getNewXY2[1];

      onDrag(index, {
        x1Value: x1Value,
        y1Value: y1Value,
        x2Value: x2Value,
        y2Value: y2Value
      });
    }
  }, {
    key: "handleEdge2Drag",
    value: function handleEdge2Drag(moreProps) {
      var _this$props6 = this.props,
          index = _this$props6.index,
          onDrag = _this$props6.onDrag;
      var _this$props7 = this.props,
          x1Value = _this$props7.x1Value,
          y1Value = _this$props7.y1Value;

      var _getNewXY3 = getNewXY(moreProps),
          _getNewXY4 = _slicedToArray(_getNewXY3, 2),
          x2Value = _getNewXY4[0],
          y2Value = _getNewXY4[1];

      onDrag(index, {
        x1Value: x1Value,
        y1Value: y1Value,
        x2Value: x2Value,
        y2Value: y2Value
      });
    }
  }, {
    key: "handleHover",
    value: function handleHover(moreProps) {
      if (this.state.hover !== moreProps.hovering) {
        this.setState({
          hover: moreProps.hovering
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props8 = this.props,
          x1Value = _this$props8.x1Value,
          y1Value = _this$props8.y1Value,
          x2Value = _this$props8.x2Value,
          y2Value = _this$props8.y2Value,
          type = _this$props8.type,
          stroke = _this$props8.stroke,
          strokeWidth = _this$props8.strokeWidth,
          strokeOpacity = _this$props8.strokeOpacity,
          strokeDasharray = _this$props8.strokeDasharray,
          r = _this$props8.r,
          edgeStrokeWidth = _this$props8.edgeStrokeWidth,
          edgeFill = _this$props8.edgeFill,
          edgeStroke = _this$props8.edgeStroke,
          edgeInteractiveCursor = _this$props8.edgeInteractiveCursor,
          lineInteractiveCursor = _this$props8.lineInteractiveCursor,
          hoverText = _this$props8.hoverText,
          selected = _this$props8.selected,
          onDragComplete = _this$props8.onDragComplete;

      var hoverTextEnabled = hoverText.enable,
          hoverTextSelected = hoverText.selectedText,
          hoverTextUnselected = hoverText.text,
          restHoverTextProps = _objectWithoutProperties(hoverText, _excluded);

      var _this$state = this.state,
          hover = _this$state.hover,
          anchor = _this$state.anchor;
      return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement(_StraightLine["default"], {
        ref: this.saveNodeType("line"),
        selected: selected || hover,
        onHover: this.handleHover,
        onUnHover: this.handleHover,
        x1Value: x1Value,
        y1Value: y1Value,
        x2Value: x2Value,
        y2Value: y2Value,
        type: type,
        stroke: stroke,
        strokeWidth: hover || selected ? strokeWidth + 1 : strokeWidth,
        strokeOpacity: strokeOpacity,
        strokeDasharray: strokeDasharray,
        interactiveCursorClass: lineInteractiveCursor,
        onDragStart: this.handleLineDragStart,
        onDrag: this.handleLineDrag,
        onDragComplete: onDragComplete
      }), /*#__PURE__*/_react["default"].createElement(_ClickableCircle["default"], {
        ref: this.saveNodeType("edge1"),
        show: selected || hover,
        cx: x1Value,
        cy: y1Value,
        r: r,
        fill: edgeFill,
        stroke: anchor === "edge1" ? stroke : edgeStroke,
        strokeWidth: edgeStrokeWidth,
        strokeOpacity: 1,
        interactiveCursorClass: edgeInteractiveCursor,
        onDragStart: this.handleEdge1DragStart,
        onDrag: this.handleEdge1Drag,
        onDragComplete: this.handleDragComplete
      }), /*#__PURE__*/_react["default"].createElement(_ClickableCircle["default"], {
        ref: this.saveNodeType("edge2"),
        show: selected || hover,
        cx: x2Value,
        cy: y2Value,
        r: r,
        fill: edgeFill,
        stroke: anchor === "edge2" ? stroke : edgeStroke,
        strokeWidth: edgeStrokeWidth,
        strokeOpacity: 1,
        interactiveCursorClass: edgeInteractiveCursor,
        onDragStart: this.handleEdge2DragStart,
        onDrag: this.handleEdge2Drag,
        onDragComplete: this.handleDragComplete
      }), /*#__PURE__*/_react["default"].createElement(_HoverTextNearMouse["default"], _extends({
        show: hoverTextEnabled && hover
      }, restHoverTextProps, {
        text: selected ? hoverTextSelected : hoverTextUnselected
      })));
    }
  }]);

  return EachTrendLine;
}(_react.Component);

function getNewXY(moreProps) {
  var xScale = moreProps.xScale,
      yScale = moreProps.chartConfig.yScale,
      xAccessor = moreProps.xAccessor,
      plotData = moreProps.plotData,
      mouseXY = moreProps.mouseXY;
  var mouseY = mouseXY[1];
  var x = (0, _ChartDataUtil.getXValue)(xScale, xAccessor, mouseXY, plotData);

  var _yScale$domain$slice$ = yScale.domain().slice().sort(_d3Array.ascending),
      _yScale$domain$slice$2 = _slicedToArray(_yScale$domain$slice$, 2),
      small = _yScale$domain$slice$2[0],
      big = _yScale$domain$slice$2[1];

  var y = yScale.invert(mouseY);
  var newY = Math.min(Math.max(y, small), big);
  return [x, newY];
}

EachTrendLine.propTypes = {
  x1Value: _propTypes["default"].any.isRequired,
  x2Value: _propTypes["default"].any.isRequired,
  y1Value: _propTypes["default"].any.isRequired,
  y2Value: _propTypes["default"].any.isRequired,
  index: _propTypes["default"].number,
  type: _propTypes["default"].oneOf(["XLINE", // extends from -Infinity to +Infinity
  "RAY", // extends to +/-Infinity in one direction
  "LINE" // extends between the set bounds
  ]).isRequired,
  onDrag: _propTypes["default"].func.isRequired,
  onEdge1Drag: _propTypes["default"].func.isRequired,
  onEdge2Drag: _propTypes["default"].func.isRequired,
  onDragComplete: _propTypes["default"].func.isRequired,
  onSelect: _propTypes["default"].func.isRequired,
  onUnSelect: _propTypes["default"].func.isRequired,
  r: _propTypes["default"].number.isRequired,
  strokeOpacity: _propTypes["default"].number.isRequired,
  defaultClassName: _propTypes["default"].string,
  selected: _propTypes["default"].bool,
  stroke: _propTypes["default"].string.isRequired,
  strokeWidth: _propTypes["default"].number.isRequired,
  strokeDasharray: _propTypes["default"].oneOf(_utils.strokeDashTypes),
  edgeStrokeWidth: _propTypes["default"].number.isRequired,
  edgeStroke: _propTypes["default"].string.isRequired,
  edgeInteractiveCursor: _propTypes["default"].string.isRequired,
  lineInteractiveCursor: _propTypes["default"].string.isRequired,
  edgeFill: _propTypes["default"].string.isRequired,
  hoverText: _propTypes["default"].object.isRequired
};
EachTrendLine.defaultProps = {
  onDrag: _utils.noop,
  onEdge1Drag: _utils.noop,
  onEdge2Drag: _utils.noop,
  onDragComplete: _utils.noop,
  onSelect: _utils.noop,
  onUnSelect: _utils.noop,
  selected: false,
  edgeStroke: "#000000",
  edgeFill: "#FFFFFF",
  edgeStrokeWidth: 2,
  r: 5,
  strokeWidth: 1,
  strokeOpacity: 1,
  strokeDasharray: "Solid",
  hoverText: {
    enable: false
  }
};
var _default = EachTrendLine;
exports["default"] = _default;
//# sourceMappingURL=EachTrendLine.js.map