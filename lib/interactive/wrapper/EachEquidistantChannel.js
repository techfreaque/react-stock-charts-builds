"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils");

var _ChartDataUtil = require("../../utils/ChartDataUtil");

var _utils2 = require("../utils");

var _ClickableCircle = _interopRequireDefault(require("../components/ClickableCircle"));

var _ChannelWithArea = _interopRequireDefault(require("../components/ChannelWithArea"));

var _HoverTextNearMouse = _interopRequireDefault(require("../components/HoverTextNearMouse"));

var _excluded = ["enable"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var EachEquidistantChannel = /*#__PURE__*/function (_Component) {
  _inherits(EachEquidistantChannel, _Component);

  var _super = _createSuper(EachEquidistantChannel);

  function EachEquidistantChannel(props) {
    var _this;

    _classCallCheck(this, EachEquidistantChannel);

    _this = _super.call(this, props);
    _this.handleLine1Edge1Drag = _this.handleLine1Edge1Drag.bind(_assertThisInitialized(_this));
    _this.handleLine1Edge2Drag = _this.handleLine1Edge2Drag.bind(_assertThisInitialized(_this));
    _this.handleDragStart = _this.handleDragStart.bind(_assertThisInitialized(_this));
    _this.handleChannelDrag = _this.handleChannelDrag.bind(_assertThisInitialized(_this));
    _this.handleChannelHeightChange = _this.handleChannelHeightChange.bind(_assertThisInitialized(_this));
    _this.getEdgeCircle = _this.getEdgeCircle.bind(_assertThisInitialized(_this));
    _this.handleHover = _this.handleHover.bind(_assertThisInitialized(_this));
    _this.isHover = _utils2.isHover.bind(_assertThisInitialized(_this));
    _this.saveNodeType = _utils2.saveNodeType.bind(_assertThisInitialized(_this));
    _this.nodes = {};
    _this.state = {
      hover: false
    };
    return _this;
  }

  _createClass(EachEquidistantChannel, [{
    key: "handleHover",
    value: function handleHover(moreProps) {
      if (this.state.hover !== moreProps.hovering) {
        this.setState({
          hover: moreProps.hovering
        });
      }
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart() {
      var _this$props = this.props,
          startXY = _this$props.startXY,
          endXY = _this$props.endXY,
          dy = _this$props.dy;
      this.dragStart = {
        startXY: startXY,
        endXY: endXY,
        dy: dy
      };
    }
  }, {
    key: "handleChannelDrag",
    value: function handleChannelDrag(moreProps) {
      var _this$props2 = this.props,
          index = _this$props2.index,
          onDrag = _this$props2.onDrag;
      var _this$dragStart = this.dragStart,
          startXY = _this$dragStart.startXY,
          endXY = _this$dragStart.endXY;
      var xScale = moreProps.xScale,
          yScale = moreProps.chartConfig.yScale,
          xAccessor = moreProps.xAccessor,
          fullData = moreProps.fullData;
      var startPos = moreProps.startPos,
          mouseXY = moreProps.mouseXY;
      var x1 = xScale(startXY[0]);
      var y1 = yScale(startXY[1]);
      var x2 = xScale(endXY[0]);
      var y2 = yScale(endXY[1]);
      var dx = startPos[0] - mouseXY[0];
      var dy = startPos[1] - mouseXY[1];
      var newX1Value = (0, _ChartDataUtil.getXValue)(xScale, xAccessor, [x1 - dx, y1 - dy], fullData);
      var newY1Value = yScale.invert(y1 - dy);
      var newX2Value = (0, _ChartDataUtil.getXValue)(xScale, xAccessor, [x2 - dx, y2 - dy], fullData);
      var newY2Value = yScale.invert(y2 - dy); // const newDy = newY2Value - endXY[1] + this.dragStart.dy;

      onDrag(index, {
        startXY: [newX1Value, newY1Value],
        endXY: [newX2Value, newY2Value],
        dy: this.dragStart.dy
      });
    }
  }, {
    key: "handleLine1Edge1Drag",
    value: function handleLine1Edge1Drag(moreProps) {
      var _this$props3 = this.props,
          index = _this$props3.index,
          onDrag = _this$props3.onDrag;
      var startXY = this.dragStart.startXY;
      var startPos = moreProps.startPos,
          mouseXY = moreProps.mouseXY,
          xAccessor = moreProps.xAccessor,
          xScale = moreProps.xScale,
          fullData = moreProps.fullData,
          yScale = moreProps.chartConfig.yScale;
      var dx = startPos[0] - mouseXY[0];
      var dy = startPos[1] - mouseXY[1];
      var x1 = xScale(startXY[0]);
      var y1 = yScale(startXY[1]);
      var newX1Value = (0, _ChartDataUtil.getXValue)(xScale, xAccessor, [x1 - dx, y1 - dy], fullData);
      var newY1Value = yScale.invert(y1 - dy);
      onDrag(index, {
        startXY: [newX1Value, newY1Value],
        endXY: this.dragStart.endXY,
        dy: this.dragStart.dy
      });
    }
  }, {
    key: "handleLine1Edge2Drag",
    value: function handleLine1Edge2Drag(moreProps) {
      var _this$props4 = this.props,
          index = _this$props4.index,
          onDrag = _this$props4.onDrag;
      var endXY = this.dragStart.endXY;
      var startPos = moreProps.startPos,
          mouseXY = moreProps.mouseXY,
          xAccessor = moreProps.xAccessor,
          xScale = moreProps.xScale,
          fullData = moreProps.fullData,
          yScale = moreProps.chartConfig.yScale;
      var dx = startPos[0] - mouseXY[0];
      var dy = startPos[1] - mouseXY[1];
      var x1 = xScale(endXY[0]);
      var y1 = yScale(endXY[1]);
      var newX1Value = (0, _ChartDataUtil.getXValue)(xScale, xAccessor, [x1 - dx, y1 - dy], fullData);
      var newY1Value = yScale.invert(y1 - dy);
      onDrag(index, {
        startXY: this.dragStart.startXY,
        endXY: [newX1Value, newY1Value],
        dy: this.dragStart.dy
      });
    }
  }, {
    key: "handleChannelHeightChange",
    value: function handleChannelHeightChange(moreProps) {
      var _this$props5 = this.props,
          index = _this$props5.index,
          onDrag = _this$props5.onDrag;
      var _this$dragStart2 = this.dragStart,
          startXY = _this$dragStart2.startXY,
          endXY = _this$dragStart2.endXY;
      var yScale = moreProps.chartConfig.yScale;
      var startPos = moreProps.startPos,
          mouseXY = moreProps.mouseXY;
      var y2 = yScale(endXY[1]);
      var dy = startPos[1] - mouseXY[1];
      var newY2Value = yScale.invert(y2 - dy);
      var newDy = newY2Value - endXY[1] + this.dragStart.dy;
      onDrag(index, {
        startXY: startXY,
        endXY: endXY,
        dy: newDy
      });
    }
  }, {
    key: "getEdgeCircle",
    value: function getEdgeCircle(_ref) {
      var xy = _ref.xy,
          dragHandler = _ref.dragHandler,
          cursor = _ref.cursor,
          fill = _ref.fill,
          edge = _ref.edge;
      var hover = this.state.hover;
      var appearance = this.props.appearance;
      var edgeStroke = appearance.edgeStroke,
          edgeStrokeWidth = appearance.edgeStrokeWidth,
          r = appearance.r;
      var selected = this.props.selected;
      var onDragComplete = this.props.onDragComplete;
      return /*#__PURE__*/_react["default"].createElement(_ClickableCircle["default"], {
        ref: this.saveNodeType(edge),
        show: selected || hover,
        cx: xy[0],
        cy: xy[1],
        r: r,
        fill: fill,
        stroke: edgeStroke,
        strokeWidth: edgeStrokeWidth,
        interactiveCursorClass: cursor,
        onDragStart: this.handleDragStart,
        onDrag: dragHandler,
        onDragComplete: onDragComplete
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          startXY = _this$props6.startXY,
          endXY = _this$props6.endXY,
          dy = _this$props6.dy;
      var _this$props7 = this.props,
          interactive = _this$props7.interactive,
          hoverText = _this$props7.hoverText,
          appearance = _this$props7.appearance;
      var edgeFill = appearance.edgeFill,
          edgeFill2 = appearance.edgeFill2,
          stroke = appearance.stroke,
          strokeWidth = appearance.strokeWidth,
          strokeOpacity = appearance.strokeOpacity,
          fill = appearance.fill,
          fillOpacity = appearance.fillOpacity;
      var selected = this.props.selected;
      var onDragComplete = this.props.onDragComplete;
      var hover = this.state.hover;

      var hoverTextEnabled = hoverText.enable,
          restHoverTextProps = _objectWithoutProperties(hoverText, _excluded);

      var hoverHandler = interactive ? {
        onHover: this.handleHover,
        onUnHover: this.handleHover
      } : {};
      var line1Edge = (0, _utils.isDefined)(startXY) && (0, _utils.isDefined)(endXY) ? /*#__PURE__*/_react["default"].createElement("g", null, this.getEdgeCircle({
        xy: startXY,
        dragHandler: this.handleLine1Edge1Drag,
        cursor: "react-stockcharts-move-cursor",
        fill: edgeFill,
        edge: "line1edge1"
      }), this.getEdgeCircle({
        xy: endXY,
        dragHandler: this.handleLine1Edge2Drag,
        cursor: "react-stockcharts-move-cursor",
        fill: edgeFill,
        edge: "line1edge2"
      })) : null;
      var line2Edge = (0, _utils.isDefined)(dy) ? /*#__PURE__*/_react["default"].createElement("g", null, this.getEdgeCircle({
        xy: [startXY[0], startXY[1] + dy],
        dragHandler: this.handleChannelHeightChange,
        cursor: "react-stockcharts-ns-resize-cursor",
        fill: edgeFill2,
        edge: "line2edge1"
      }), this.getEdgeCircle({
        xy: [endXY[0], endXY[1] + dy],
        dragHandler: this.handleChannelHeightChange,
        cursor: "react-stockcharts-ns-resize-cursor",
        fill: edgeFill2,
        edge: "line2edge2"
      })) : null;
      return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement(_ChannelWithArea["default"], _extends({
        ref: this.saveNodeType("channel"),
        selected: selected || hover
      }, hoverHandler, {
        startXY: startXY,
        endXY: endXY,
        dy: dy,
        stroke: stroke,
        strokeWidth: hover || selected ? strokeWidth + 1 : strokeWidth,
        strokeOpacity: strokeOpacity,
        fill: fill,
        fillOpacity: fillOpacity,
        interactiveCursorClass: "react-stockcharts-move-cursor",
        onDragStart: this.handleDragStart,
        onDrag: this.handleChannelDrag,
        onDragComplete: onDragComplete
      })), line1Edge, line2Edge, /*#__PURE__*/_react["default"].createElement(_HoverTextNearMouse["default"], _extends({
        show: hoverTextEnabled && hover && !selected
      }, restHoverTextProps)));
    }
  }]);

  return EachEquidistantChannel;
}(_react.Component);

EachEquidistantChannel.propTypes = {
  startXY: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  endXY: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  dy: _propTypes["default"].number,
  interactive: _propTypes["default"].bool.isRequired,
  selected: _propTypes["default"].bool.isRequired,
  hoverText: _propTypes["default"].object.isRequired,
  appearance: _propTypes["default"].shape({
    stroke: _propTypes["default"].string.isRequired,
    fillOpacity: _propTypes["default"].number.isRequired,
    strokeOpacity: _propTypes["default"].number.isRequired,
    strokeWidth: _propTypes["default"].number.isRequired,
    fill: _propTypes["default"].string.isRequired,
    edgeStroke: _propTypes["default"].string.isRequired,
    edgeFill: _propTypes["default"].string.isRequired,
    edgeFill2: _propTypes["default"].string.isRequired,
    edgeStrokeWidth: _propTypes["default"].number.isRequired,
    r: _propTypes["default"].number.isRequired
  }).isRequired,
  index: _propTypes["default"].number,
  onDrag: _propTypes["default"].func.isRequired,
  onDragComplete: _propTypes["default"].func.isRequired
};
EachEquidistantChannel.defaultProps = {
  yDisplayFormat: function yDisplayFormat(d) {
    return d.toFixed(2);
  },
  interactive: true,
  selected: false,
  onDrag: _utils.noop,
  onDragComplete: _utils.noop,
  hoverText: {
    enable: false
  }
};
var _default = EachEquidistantChannel;
exports["default"] = _default;
//# sourceMappingURL=EachEquidistantChannel.js.map