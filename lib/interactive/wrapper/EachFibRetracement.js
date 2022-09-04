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

var _EachTrendLine = require("./EachTrendLine");

var _StraightLine = _interopRequireWildcard(require("../components/StraightLine"));

var _ClickableCircle = _interopRequireDefault(require("../components/ClickableCircle"));

var _HoverTextNearMouse = _interopRequireDefault(require("../components/HoverTextNearMouse"));

var _Text = _interopRequireDefault(require("../components/Text"));

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

var EachFibRetracement = /*#__PURE__*/function (_Component) {
  _inherits(EachFibRetracement, _Component);

  var _super = _createSuper(EachFibRetracement);

  function EachFibRetracement(props) {
    var _this;

    _classCallCheck(this, EachFibRetracement);

    _this = _super.call(this, props);
    _this.handleEdge1Drag = _this.handleEdge1Drag.bind(_assertThisInitialized(_this));
    _this.handleEdge2Drag = _this.handleEdge2Drag.bind(_assertThisInitialized(_this));
    _this.handleLineNSResizeTop = _this.handleLineNSResizeTop.bind(_assertThisInitialized(_this));
    _this.handleLineNSResizeBottom = _this.handleLineNSResizeBottom.bind(_assertThisInitialized(_this));
    _this.handleLineMove = _this.handleLineMove.bind(_assertThisInitialized(_this));
    _this.handleLineDragStart = _this.handleLineDragStart.bind(_assertThisInitialized(_this));
    _this.handleHover = _this.handleHover.bind(_assertThisInitialized(_this));
    _this.isHover = _utils2.isHover.bind(_assertThisInitialized(_this));
    _this.saveNodeType = _utils2.saveNodeType.bind(_assertThisInitialized(_this));
    _this.nodes = {};
    _this.state = {
      hover: false
    };
    return _this;
  }

  _createClass(EachFibRetracement, [{
    key: "handleHover",
    value: function handleHover(moreProps) {
      if (this.state.hover !== moreProps.hovering) {
        this.setState({
          hover: moreProps.hovering
        });
      }
    }
  }, {
    key: "handleLineDragStart",
    value: function handleLineDragStart() {
      var _this$props = this.props,
          x1 = _this$props.x1,
          y1 = _this$props.y1,
          x2 = _this$props.x2,
          y2 = _this$props.y2;
      this.dragStart = {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      };
    }
  }, {
    key: "handleLineMove",
    value: function handleLineMove(moreProps) {
      var _this$props2 = this.props,
          index = _this$props2.index,
          onDrag = _this$props2.onDrag;
      var _this$dragStart = this.dragStart,
          x1Value = _this$dragStart.x1,
          y1Value = _this$dragStart.y1,
          x2Value = _this$dragStart.x2,
          y2Value = _this$dragStart.y2;
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
        x1: newX1Value,
        y1: newY1Value,
        x2: newX2Value,
        y2: newY2Value
      });
    }
  }, {
    key: "handleLineNSResizeTop",
    value: function handleLineNSResizeTop(moreProps) {
      var _this$props3 = this.props,
          index = _this$props3.index,
          onDrag = _this$props3.onDrag;
      var _this$props4 = this.props,
          x1 = _this$props4.x1,
          x2 = _this$props4.x2,
          y2 = _this$props4.y2;

      var _getNewXY = (0, _EachTrendLine.getNewXY)(moreProps),
          _getNewXY2 = _slicedToArray(_getNewXY, 2),
          y1 = _getNewXY2[1];

      onDrag(index, {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      });
    }
  }, {
    key: "handleLineNSResizeBottom",
    value: function handleLineNSResizeBottom(moreProps) {
      var _this$props5 = this.props,
          index = _this$props5.index,
          onDrag = _this$props5.onDrag;
      var _this$props6 = this.props,
          x1 = _this$props6.x1,
          y1 = _this$props6.y1,
          x2 = _this$props6.x2;

      var _getNewXY3 = (0, _EachTrendLine.getNewXY)(moreProps),
          _getNewXY4 = _slicedToArray(_getNewXY3, 2),
          y2 = _getNewXY4[1];

      onDrag(index, {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      });
    }
  }, {
    key: "handleEdge1Drag",
    value: function handleEdge1Drag(moreProps) {
      var _this$props7 = this.props,
          index = _this$props7.index,
          onDrag = _this$props7.onDrag;
      var _this$props8 = this.props,
          y1 = _this$props8.y1,
          x2 = _this$props8.x2,
          y2 = _this$props8.y2;

      var _getNewXY5 = (0, _EachTrendLine.getNewXY)(moreProps),
          _getNewXY6 = _slicedToArray(_getNewXY5, 1),
          x1 = _getNewXY6[0];

      onDrag(index, {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      });
    }
  }, {
    key: "handleEdge2Drag",
    value: function handleEdge2Drag(moreProps) {
      var _this$props9 = this.props,
          index = _this$props9.index,
          onDrag = _this$props9.onDrag;
      var _this$props10 = this.props,
          x1 = _this$props10.x1,
          y1 = _this$props10.y1,
          y2 = _this$props10.y2;

      var _getNewXY7 = (0, _EachTrendLine.getNewXY)(moreProps),
          _getNewXY8 = _slicedToArray(_getNewXY7, 1),
          x2 = _getNewXY8[0];

      onDrag(index, {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props11 = this.props,
          x1 = _this$props11.x1,
          x2 = _this$props11.x2,
          y1 = _this$props11.y1,
          y2 = _this$props11.y2;
      var _this$props12 = this.props,
          interactive = _this$props12.interactive,
          yDisplayFormat = _this$props12.yDisplayFormat,
          type = _this$props12.type,
          appearance = _this$props12.appearance;
      var stroke = appearance.stroke,
          strokeWidth = appearance.strokeWidth,
          strokeOpacity = appearance.strokeOpacity;
      var fontFamily = appearance.fontFamily,
          fontSize = appearance.fontSize,
          fontFill = appearance.fontFill;
      var edgeStroke = appearance.edgeStroke,
          edgeFill = appearance.edgeFill,
          nsEdgeFill = appearance.nsEdgeFill,
          edgeStrokeWidth = appearance.edgeStrokeWidth,
          r = appearance.r;
      var _this$props13 = this.props,
          hoverText = _this$props13.hoverText,
          selected = _this$props13.selected;
      var hover = this.state.hover;
      var onDragComplete = this.props.onDragComplete;
      var lines = helper({
        x1: x1,
        x2: x2,
        y1: y1,
        y2: y2
      });

      var hoverTextEnabled = hoverText.enable,
          hoverTextSelected = hoverText.selectedText,
          hoverTextUnselected = hoverText.text,
          restHoverTextProps = _objectWithoutProperties(hoverText, _excluded);

      var lineType = type === "EXTEND" ? "XLINE" : type === "BOUND" ? "LINE" : type;
      var dir = (0, _utils.head)(lines).y1 > (0, _utils.last)(lines).y1 ? 3 : -1.3;
      return /*#__PURE__*/_react["default"].createElement("g", null, lines.map(function (line, j) {
        var text = "".concat(yDisplayFormat(line.y), " (").concat(line.percent.toFixed(2), "%)");

        var xyProvider = function xyProvider(_ref) {
          var xScale = _ref.xScale,
              chartConfig = _ref.chartConfig;
          var yScale = chartConfig.yScale;

          var _generateLine = (0, _StraightLine.generateLine)({
            type: lineType,
            start: [line.x1, line.y],
            end: [line.x2, line.y],
            xScale: xScale,
            yScale: yScale
          }),
              x1 = _generateLine.x1,
              y1 = _generateLine.y1,
              x2 = _generateLine.x2;

          var x = xScale(Math.min(x1, x2)) + 10;
          var y = yScale(y1) + dir * 4;
          return [x, y];
        };

        var firstOrLast = j === 0 || j === lines.length - 1;
        var interactiveCursorClass = firstOrLast ? "react-stockcharts-ns-resize-cursor" : "react-stockcharts-move-cursor";
        var interactiveEdgeCursorClass = firstOrLast ? "react-stockcharts-ns-resize-cursor" : "react-stockcharts-ew-resize-cursor";
        var dragHandler = j === 0 ? _this2.handleLineNSResizeTop : j === lines.length - 1 ? _this2.handleLineNSResizeBottom : _this2.handleLineMove;
        var edge1DragHandler = j === 0 ? _this2.handleLineNSResizeTop : j === lines.length - 1 ? _this2.handleLineNSResizeBottom : _this2.handleEdge1Drag;
        var edge2DragHandler = j === 0 ? _this2.handleLineNSResizeTop : j === lines.length - 1 ? _this2.handleLineNSResizeBottom : _this2.handleEdge2Drag;
        var hoverHandler = interactive ? {
          onHover: _this2.handleHover,
          onUnHover: _this2.handleHover
        } : {};
        return /*#__PURE__*/_react["default"].createElement("g", {
          key: j
        }, /*#__PURE__*/_react["default"].createElement(_StraightLine["default"], _extends({
          ref: _this2.saveNodeType("line_".concat(j)),
          selected: selected || hover
        }, hoverHandler, {
          type: lineType,
          x1Value: line.x1,
          y1Value: line.y,
          x2Value: line.x2,
          y2Value: line.y,
          stroke: stroke,
          strokeWidth: hover || selected ? strokeWidth + 1 : strokeWidth,
          strokeOpacity: strokeOpacity,
          interactiveCursorClass: interactiveCursorClass,
          onDragStart: _this2.handleLineDragStart,
          onDrag: dragHandler,
          onDragComplete: onDragComplete
        })), /*#__PURE__*/_react["default"].createElement(_Text["default"], {
          selected: selected
          /* eslint-disable */
          ,
          xyProvider: xyProvider
          /* eslint-enable */
          ,
          fontFamily: fontFamily,
          fontSize: fontSize,
          fill: fontFill
        }, text), /*#__PURE__*/_react["default"].createElement(_ClickableCircle["default"], {
          ref: _this2.saveNodeType("edge1"),
          show: selected || hover,
          cx: line.x1,
          cy: line.y,
          r: r,
          fill: firstOrLast ? nsEdgeFill : edgeFill,
          stroke: edgeStroke,
          strokeWidth: edgeStrokeWidth,
          interactiveCursorClass: interactiveEdgeCursorClass,
          onDrag: edge1DragHandler,
          onDragComplete: onDragComplete
        }), /*#__PURE__*/_react["default"].createElement(_ClickableCircle["default"], {
          ref: _this2.saveNodeType("edge2"),
          show: selected || hover,
          cx: line.x2,
          cy: line.y,
          r: r,
          fill: firstOrLast ? nsEdgeFill : edgeFill,
          stroke: edgeStroke,
          strokeWidth: edgeStrokeWidth,
          interactiveCursorClass: interactiveEdgeCursorClass,
          onDrag: edge2DragHandler,
          onDragComplete: onDragComplete
        }));
      }), /*#__PURE__*/_react["default"].createElement(_HoverTextNearMouse["default"], _extends({
        show: hoverTextEnabled && hover
      }, restHoverTextProps, {
        text: selected ? hoverTextSelected : hoverTextUnselected
      })));
    }
  }]);

  return EachFibRetracement;
}(_react.Component);

function helper(_ref2) {
  var x1 = _ref2.x1,
      y1 = _ref2.y1,
      x2 = _ref2.x2,
      y2 = _ref2.y2;
  var dy = y2 - y1;
  var retracements = [100, 61.8, 50, 38.2, 23.6, 0].map(function (each) {
    return {
      percent: each,
      x1: x1,
      x2: x2,
      y: y2 - each / 100 * dy
    };
  });
  return retracements;
}

EachFibRetracement.propTypes = {
  x1: _propTypes["default"].any.isRequired,
  x2: _propTypes["default"].any.isRequired,
  y1: _propTypes["default"].number.isRequired,
  y2: _propTypes["default"].number.isRequired,
  yDisplayFormat: _propTypes["default"].func.isRequired,
  type: _propTypes["default"].string.isRequired,
  selected: _propTypes["default"].bool.isRequired,
  appearance: _propTypes["default"].shape({
    stroke: _propTypes["default"].string.isRequired,
    strokeWidth: _propTypes["default"].number.isRequired,
    strokeOpacity: _propTypes["default"].number.isRequired,
    fontFamily: _propTypes["default"].string.isRequired,
    fontSize: _propTypes["default"].number.isRequired,
    fontFill: _propTypes["default"].string.isRequired,
    edgeStroke: _propTypes["default"].string.isRequired,
    edgeFill: _propTypes["default"].string.isRequired,
    nsEdgeFill: _propTypes["default"].string.isRequired,
    edgeStrokeWidth: _propTypes["default"].number.isRequired,
    r: _propTypes["default"].number.isRequired
  }).isRequired,
  interactive: _propTypes["default"].bool.isRequired,
  hoverText: _propTypes["default"].object.isRequired,
  index: _propTypes["default"].number,
  onDrag: _propTypes["default"].func.isRequired,
  onDragComplete: _propTypes["default"].func.isRequired
};
EachFibRetracement.defaultProps = {
  yDisplayFormat: function yDisplayFormat(d) {
    return d.toFixed(2);
  },
  interactive: true,
  appearance: {
    stroke: "#000000",
    strokeWidth: 1,
    strokeOpacity: 1,
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    fontSize: 10,
    fontFill: "#000000",
    edgeStroke: "#000000",
    edgeFill: "#FFFFFF",
    nsEdgeFill: "#000000",
    edgeStrokeWidth: 1,
    r: 5
  },
  selected: false,
  onDrag: _utils.noop,
  onDragComplete: _utils.noop,
  hoverText: {
    enable: false
  }
};
var _default = EachFibRetracement;
exports["default"] = _default;
//# sourceMappingURL=EachFibRetracement.js.map