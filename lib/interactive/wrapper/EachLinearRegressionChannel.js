"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.getNewXY = getNewXY;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils");

var _ChartDataUtil = require("../../utils/ChartDataUtil");

var _utils2 = require("../utils");

var _HoverTextNearMouse = _interopRequireDefault(require("../components/HoverTextNearMouse"));

var _LinearRegressionChannelWithArea = _interopRequireWildcard(require("../components/LinearRegressionChannelWithArea"));

var _ClickableCircle = _interopRequireDefault(require("../components/ClickableCircle"));

var _excluded = ["enable", "selectedText", "text"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var EachLinearRegressionChannel = /*#__PURE__*/function (_Component) {
  _inherits(EachLinearRegressionChannel, _Component);

  var _super = _createSuper(EachLinearRegressionChannel);

  function EachLinearRegressionChannel(props) {
    var _this;

    _classCallCheck(this, EachLinearRegressionChannel);

    _this = _super.call(this, props);
    _this.handleEdge1Drag = _this.handleEdge1Drag.bind(_assertThisInitialized(_this));
    _this.handleEdge2Drag = _this.handleEdge2Drag.bind(_assertThisInitialized(_this));
    _this.handleHover = _this.handleHover.bind(_assertThisInitialized(_this));
    _this.isHover = _utils2.isHover.bind(_assertThisInitialized(_this));
    _this.saveNodeType = _utils2.saveNodeType.bind(_assertThisInitialized(_this));
    _this.nodes = {};
    _this.state = {
      hover: false
    };
    return _this;
  }

  _createClass(EachLinearRegressionChannel, [{
    key: "handleEdge1Drag",
    value: function handleEdge1Drag(moreProps) {
      var _this$props = this.props,
          index = _this$props.index,
          onDrag = _this$props.onDrag,
          snapTo = _this$props.snapTo;
      var x2Value = this.props.x2Value;

      var _getNewXY = getNewXY(moreProps, snapTo),
          _getNewXY2 = _slicedToArray(_getNewXY, 1),
          x1Value = _getNewXY2[0];

      onDrag(index, {
        x1Value: x1Value,
        x2Value: x2Value
      });
    }
  }, {
    key: "handleEdge2Drag",
    value: function handleEdge2Drag(moreProps) {
      var _this$props2 = this.props,
          index = _this$props2.index,
          onDrag = _this$props2.onDrag,
          snapTo = _this$props2.snapTo;
      var x1Value = this.props.x1Value;

      var _getNewXY3 = getNewXY(moreProps, snapTo),
          _getNewXY4 = _slicedToArray(_getNewXY3, 1),
          x2Value = _getNewXY4[0];

      onDrag(index, {
        x1Value: x1Value,
        x2Value: x2Value
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
      var _this$props3 = this.props,
          x1Value = _this$props3.x1Value,
          x2Value = _this$props3.x2Value,
          appearance = _this$props3.appearance,
          edgeInteractiveCursor = _this$props3.edgeInteractiveCursor,
          hoverText = _this$props3.hoverText,
          interactive = _this$props3.interactive,
          selected = _this$props3.selected,
          onDragComplete = _this$props3.onDragComplete;
      var stroke = appearance.stroke,
          strokeWidth = appearance.strokeWidth,
          strokeOpacity = appearance.strokeOpacity,
          fill = appearance.fill,
          fillOpacity = appearance.fillOpacity,
          r = appearance.r,
          edgeStrokeWidth = appearance.edgeStrokeWidth,
          edgeFill = appearance.edgeFill,
          edgeStroke = appearance.edgeStroke;
      var hover = this.state.hover;
      var hoverHandler = interactive ? {
        onHover: this.handleHover,
        onUnHover: this.handleHover
      } : {};

      var hoverTextEnabled = hoverText.enable,
          hoverTextSelected = hoverText.selectedText,
          hoverTextUnselected = hoverText.text,
          restHoverTextProps = _objectWithoutProperties(hoverText, _excluded);

      return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement(_LinearRegressionChannelWithArea["default"], _extends({
        ref: this.saveNodeType("area"),
        selected: selected || hover
      }, hoverHandler, {
        x1Value: x1Value,
        x2Value: x2Value,
        fill: fill,
        stroke: stroke,
        strokeWidth: hover || selected ? strokeWidth + 1 : strokeWidth,
        strokeOpacity: strokeOpacity,
        fillOpacity: fillOpacity
      })), /*#__PURE__*/_react["default"].createElement(_ClickableCircle["default"], {
        ref: this.saveNodeType("edge1"),
        show: selected || hover,
        xyProvider: (0, _LinearRegressionChannelWithArea.edge1Provider)(this.props),
        r: r,
        fill: edgeFill,
        stroke: edgeStroke,
        strokeWidth: edgeStrokeWidth,
        interactiveCursorClass: edgeInteractiveCursor,
        onDrag: this.handleEdge1Drag,
        onDragComplete: onDragComplete
      }), /*#__PURE__*/_react["default"].createElement(_ClickableCircle["default"], {
        ref: this.saveNodeType("edge2"),
        show: selected || hover,
        xyProvider: (0, _LinearRegressionChannelWithArea.edge2Provider)(this.props),
        r: r,
        fill: edgeFill,
        stroke: edgeStroke,
        strokeWidth: edgeStrokeWidth,
        interactiveCursorClass: edgeInteractiveCursor,
        onDrag: this.handleEdge2Drag,
        onDragComplete: onDragComplete
      }), /*#__PURE__*/_react["default"].createElement(_HoverTextNearMouse["default"], _extends({
        show: hoverTextEnabled && hover
      }, restHoverTextProps, {
        text: selected ? hoverTextSelected : hoverTextUnselected
      })));
    }
  }]);

  return EachLinearRegressionChannel;
}(_react.Component);

function getNewXY(moreProps, snapTo) {
  var xScale = moreProps.xScale,
      xAccessor = moreProps.xAccessor,
      plotData = moreProps.plotData,
      mouseXY = moreProps.mouseXY;
  var currentItem = (0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, mouseXY, plotData);
  var x = xAccessor(currentItem);
  var y = snapTo(currentItem);
  return [x, y];
}

EachLinearRegressionChannel.propTypes = {
  defaultClassName: _propTypes["default"].string,
  x1Value: _propTypes["default"].any.isRequired,
  x2Value: _propTypes["default"].any.isRequired,
  index: _propTypes["default"].number,
  appearance: _propTypes["default"].shape({
    stroke: _propTypes["default"].string.isRequired,
    fillOpacity: _propTypes["default"].number.isRequired,
    strokeOpacity: _propTypes["default"].number.isRequired,
    strokeWidth: _propTypes["default"].number.isRequired,
    fill: _propTypes["default"].string.isRequired,
    edgeStrokeWidth: _propTypes["default"].number.isRequired,
    edgeStroke: _propTypes["default"].string.isRequired,
    edgeFill: _propTypes["default"].string.isRequired,
    r: _propTypes["default"].number.isRequired
  }).isRequired,
  edgeInteractiveCursor: _propTypes["default"].string,
  onDrag: _propTypes["default"].func.isRequired,
  onDragComplete: _propTypes["default"].func.isRequired,
  snapTo: _propTypes["default"].func,
  interactive: _propTypes["default"].bool.isRequired,
  selected: _propTypes["default"].bool.isRequired,
  hoverText: _propTypes["default"].object.isRequired
};
EachLinearRegressionChannel.defaultProps = {
  onDrag: _utils.noop,
  onDragComplete: _utils.noop,
  appearance: {
    stroke: "#000000",
    fillOpacity: 0.7,
    strokeOpacity: 1,
    strokeWidth: 1,
    fill: "#8AAFE2",
    edgeStrokeWidth: 2,
    edgeStroke: "#000000",
    edgeFill: "#FFFFFF",
    r: 5
  },
  interactive: true,
  selected: false,
  hoverText: _objectSpread(_objectSpread({}, _HoverTextNearMouse["default"].defaultProps), {}, {
    enable: true,
    bgHeight: 18,
    bgWidth: 175,
    text: "Click and drag the edge circles"
  })
};
var _default = EachLinearRegressionChannel;
exports["default"] = _default;
//# sourceMappingURL=EachLinearRegressionChannel.js.map