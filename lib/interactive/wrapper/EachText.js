"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils");

var _utils2 = require("../utils");

var _ChartDataUtil = require("../../utils/ChartDataUtil");

var _HoverTextNearMouse = _interopRequireDefault(require("../components/HoverTextNearMouse"));

var _InteractiveText = _interopRequireDefault(require("../components/InteractiveText"));

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

var EachText = /*#__PURE__*/function (_Component) {
  _inherits(EachText, _Component);

  var _super = _createSuper(EachText);

  function EachText(props) {
    var _this;

    _classCallCheck(this, EachText);

    _this = _super.call(this, props);
    _this.handleHover = _this.handleHover.bind(_assertThisInitialized(_this));
    _this.handleDragStart = _this.handleDragStart.bind(_assertThisInitialized(_this));
    _this.handleDrag = _this.handleDrag.bind(_assertThisInitialized(_this));
    _this.isHover = _utils2.isHover.bind(_assertThisInitialized(_this));
    _this.saveNodeType = _utils2.saveNodeType.bind(_assertThisInitialized(_this));
    _this.nodes = {};
    _this.state = {
      hover: false
    };
    return _this;
  }

  _createClass(EachText, [{
    key: "handleDragStart",
    value: function handleDragStart(moreProps) {
      var position = this.props.position;
      var mouseXY = moreProps.mouseXY;
      var yScale = moreProps.chartConfig.yScale,
          xScale = moreProps.xScale;

      var _mouseXY = _slicedToArray(mouseXY, 2),
          mouseX = _mouseXY[0],
          mouseY = _mouseXY[1];

      var _position = _slicedToArray(position, 2),
          textCX = _position[0],
          textCY = _position[1];

      var dx = mouseX - xScale(textCX);
      var dy = mouseY - yScale(textCY);
      this.dragStartPosition = {
        position: position,
        dx: dx,
        dy: dy
      };
    }
  }, {
    key: "handleDrag",
    value: function handleDrag(moreProps) {
      var _this$props = this.props,
          index = _this$props.index,
          onDrag = _this$props.onDrag;

      var _moreProps$mouseXY = _slicedToArray(moreProps.mouseXY, 2),
          mouseY = _moreProps$mouseXY[1],
          yScale = moreProps.chartConfig.yScale,
          xAccessor = moreProps.xAccessor,
          mouseXY = moreProps.mouseXY,
          plotData = moreProps.plotData,
          xScale = moreProps.xScale;

      var _this$dragStartPositi = this.dragStartPosition,
          dx = _this$dragStartPositi.dx,
          dy = _this$dragStartPositi.dy;
      var xValue = xScale.invert(xScale((0, _ChartDataUtil.getXValue)(xScale, xAccessor, mouseXY, plotData)) - dx); // xScale.invert(xScale(xAccessor(currentItem)) - dx);

      var xyValue = [xValue, yScale.invert(mouseY - dy)];
      onDrag(index, xyValue);
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
      var _this$props2 = this.props,
          position = _this$props2.position,
          bgFill = _this$props2.bgFill,
          bgOpacity = _this$props2.bgOpacity,
          bgStroke = _this$props2.bgStroke,
          bgStrokeWidth = _this$props2.bgStrokeWidth,
          textFill = _this$props2.textFill,
          fontFamily = _this$props2.fontFamily,
          fontSize = _this$props2.fontSize,
          fontWeight = _this$props2.fontWeight,
          fontStyle = _this$props2.fontStyle,
          text = _this$props2.text,
          hoverText = _this$props2.hoverText,
          selected = _this$props2.selected,
          onDragComplete = _this$props2.onDragComplete;
      var hover = this.state.hover;
      var hoverHandler = {
        onHover: this.handleHover,
        onUnHover: this.handleHover
      };

      var hoverTextEnabled = hoverText.enable,
          hoverTextSelected = hoverText.selectedText,
          hoverTextUnselected = hoverText.text,
          restHoverTextProps = _objectWithoutProperties(hoverText, _excluded);

      return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement(_InteractiveText["default"], _extends({
        ref: this.saveNodeType("text"),
        selected: selected || hover,
        interactiveCursorClass: "react-stockcharts-move-cursor"
      }, hoverHandler, {
        onDragStart: this.handleDragStart,
        onDrag: this.handleDrag,
        onDragComplete: onDragComplete,
        position: position,
        bgFill: bgFill,
        bgOpacity: bgOpacity,
        bgStroke: bgStroke || textFill,
        bgStrokeWidth: bgStrokeWidth,
        textFill: textFill,
        fontFamily: fontFamily,
        fontStyle: fontStyle,
        fontWeight: fontWeight,
        fontSize: fontSize,
        text: text
      })), /*#__PURE__*/_react["default"].createElement(_HoverTextNearMouse["default"], _extends({
        show: hoverTextEnabled && hover
      }, restHoverTextProps, {
        text: selected ? hoverTextSelected : hoverTextUnselected
      })));
    }
  }]);

  return EachText;
}(_react.Component);
/*
export function getNewXY(moreProps, snapTo) {
	const { xScale, xAccessor, plotData, mouseXY } = moreProps;

	const currentItem = getCurrentItem(xScale, xAccessor, mouseXY, plotData);
	const x = xAccessor(currentItem);
	const y = snapTo(currentItem);

	return [x, y];
}
 */


EachText.propTypes = {
  index: _propTypes["default"].number,
  position: _propTypes["default"].array.isRequired,
  bgFill: _propTypes["default"].string.isRequired,
  bgOpacity: _propTypes["default"].number.isRequired,
  bgStrokeWidth: _propTypes["default"].number.isRequired,
  bgStroke: _propTypes["default"].string,
  textFill: _propTypes["default"].string.isRequired,
  fontWeight: _propTypes["default"].string.isRequired,
  fontFamily: _propTypes["default"].string.isRequired,
  fontStyle: _propTypes["default"].string.isRequired,
  fontSize: _propTypes["default"].number.isRequired,
  text: _propTypes["default"].string.isRequired,
  selected: _propTypes["default"].bool.isRequired,
  onDrag: _propTypes["default"].func.isRequired,
  onDragComplete: _propTypes["default"].func.isRequired,
  hoverText: _propTypes["default"].object.isRequired
};
EachText.defaultProps = {
  onDrag: _utils.noop,
  onDragComplete: _utils.noop,
  bgOpacity: 1,
  bgStrokeWidth: 1,
  selected: false,
  fill: "#8AAFE2",
  hoverText: _objectSpread(_objectSpread({}, _HoverTextNearMouse["default"].defaultProps), {}, {
    enable: true,
    bgHeight: "auto",
    bgWidth: "auto",
    text: "Click to select object"
  })
};
var _default = EachText;
exports["default"] = _default;
//# sourceMappingURL=EachText.js.map