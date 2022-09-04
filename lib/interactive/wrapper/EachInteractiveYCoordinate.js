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

var _ClickableShape = _interopRequireDefault(require("../components/ClickableShape"));

var _InteractiveYCoordinate = _interopRequireDefault(require("../components/InteractiveYCoordinate"));

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

var EachInteractiveYCoordinate = /*#__PURE__*/function (_Component) {
  _inherits(EachInteractiveYCoordinate, _Component);

  var _super = _createSuper(EachInteractiveYCoordinate);

  function EachInteractiveYCoordinate(props) {
    var _this;

    _classCallCheck(this, EachInteractiveYCoordinate);

    _this = _super.call(this, props);
    _this.handleHover = _this.handleHover.bind(_assertThisInitialized(_this));
    _this.handleCloseIconHover = _this.handleCloseIconHover.bind(_assertThisInitialized(_this));
    _this.handleDragStart = _this.handleDragStart.bind(_assertThisInitialized(_this));
    _this.handleDrag = _this.handleDrag.bind(_assertThisInitialized(_this));
    _this.handleDelete = _this.handleDelete.bind(_assertThisInitialized(_this));
    _this.isHover = _utils2.isHover.bind(_assertThisInitialized(_this));
    _this.saveNodeType = _utils2.saveNodeType.bind(_assertThisInitialized(_this));
    _this.nodes = {};
    _this.state = {
      hover: false,
      closeIconHover: false
    };
    return _this;
  }

  _createClass(EachInteractiveYCoordinate, [{
    key: "handleDragStart",
    value: function handleDragStart(moreProps) {
      var yValue = this.props.yValue;
      var mouseXY = moreProps.mouseXY;
      var yScale = moreProps.chartConfig.yScale;

      var _mouseXY = _slicedToArray(mouseXY, 2),
          mouseY = _mouseXY[1];

      var dy = mouseY - yScale(yValue);
      this.dragStartPosition = {
        yValue: yValue,
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
          yScale = moreProps.chartConfig.yScale;

      var dy = this.dragStartPosition.dy;
      var newYValue = yScale.invert(mouseY - dy);
      onDrag(index, newYValue);
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(moreProps) {
      var _this$props2 = this.props,
          index = _this$props2.index,
          onDelete = _this$props2.onDelete;
      onDelete(index, moreProps);
    }
  }, {
    key: "handleHover",
    value: function handleHover(moreProps) {
      if (this.state.hover !== moreProps.hovering) {
        this.setState({
          hover: moreProps.hovering,
          closeIconHover: moreProps.hovering ? this.state.closeIconHover : false
        });
      }
    }
  }, {
    key: "handleCloseIconHover",
    value: function handleCloseIconHover(moreProps) {
      if (this.state.closeIconHover !== moreProps.hovering) {
        this.setState({
          closeIconHover: moreProps.hovering
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          yValue = _this$props3.yValue,
          bgFill = _this$props3.bgFill,
          bgOpacity = _this$props3.bgOpacity,
          textFill = _this$props3.textFill,
          fontFamily = _this$props3.fontFamily,
          fontSize = _this$props3.fontSize,
          fontWeight = _this$props3.fontWeight,
          fontStyle = _this$props3.fontStyle,
          text = _this$props3.text,
          selected = _this$props3.selected,
          onDragComplete = _this$props3.onDragComplete,
          stroke = _this$props3.stroke,
          strokeOpacity = _this$props3.strokeOpacity,
          strokeDasharray = _this$props3.strokeDasharray,
          strokeWidth = _this$props3.strokeWidth,
          edge = _this$props3.edge,
          textBox = _this$props3.textBox,
          draggable = _this$props3.draggable;
      var _this$state = this.state,
          hover = _this$state.hover,
          closeIconHover = _this$state.closeIconHover;
      var hoverHandler = {
        onHover: this.handleHover,
        onUnHover: this.handleHover
      };
      var dragProps = draggable ? {
        onDragStart: this.handleDragStart,
        onDrag: this.handleDrag,
        onDragComplete: onDragComplete
      } : {};
      return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement(_InteractiveYCoordinate["default"], _extends({
        ref: this.saveNodeType("priceCoordinate"),
        selected: selected && !closeIconHover,
        hovering: hover || closeIconHover,
        interactiveCursorClass: "react-stockcharts-move-cursor"
      }, hoverHandler, dragProps, {
        yValue: yValue,
        bgFill: bgFill,
        bgOpacity: bgOpacity,
        textFill: textFill,
        fontFamily: fontFamily,
        fontStyle: fontStyle,
        fontWeight: fontWeight,
        fontSize: fontSize,
        stroke: stroke,
        strokeOpacity: strokeOpacity,
        strokeDasharray: strokeDasharray,
        strokeWidth: strokeWidth,
        text: text,
        textBox: textBox,
        edge: edge
      })), /*#__PURE__*/_react["default"].createElement(_ClickableShape["default"], {
        show: true,
        hovering: closeIconHover,
        text: text,
        yValue: yValue,
        fontFamily: fontFamily,
        fontStyle: fontStyle,
        fontWeight: fontWeight,
        fontSize: fontSize,
        textBox: textBox,
        stroke: stroke,
        strokeOpacity: strokeOpacity,
        onHover: this.handleCloseIconHover,
        onUnHover: this.handleCloseIconHover,
        onClick: this.handleDelete
      }));
    }
  }]);

  return EachInteractiveYCoordinate;
}(_react.Component);

EachInteractiveYCoordinate.propTypes = {
  index: _propTypes["default"].number,
  draggable: _propTypes["default"].bool.isRequired,
  yValue: _propTypes["default"].number.isRequired,
  bgFill: _propTypes["default"].string.isRequired,
  bgOpacity: _propTypes["default"].number.isRequired,
  stroke: _propTypes["default"].string.isRequired,
  strokeWidth: _propTypes["default"].number.isRequired,
  strokeOpacity: _propTypes["default"].number.isRequired,
  strokeDasharray: _propTypes["default"].string.isRequired,
  textFill: _propTypes["default"].string.isRequired,
  fontWeight: _propTypes["default"].string.isRequired,
  fontFamily: _propTypes["default"].string.isRequired,
  fontStyle: _propTypes["default"].string.isRequired,
  fontSize: _propTypes["default"].number.isRequired,
  text: _propTypes["default"].string.isRequired,
  selected: _propTypes["default"].bool.isRequired,
  edge: _propTypes["default"].object.isRequired,
  textBox: _propTypes["default"].object.isRequired,
  onDrag: _propTypes["default"].func.isRequired,
  onDragComplete: _propTypes["default"].func.isRequired,
  onDelete: _propTypes["default"].func.isRequired
};
EachInteractiveYCoordinate.defaultProps = {
  onDrag: _utils.noop,
  onDragComplete: _utils.noop,
  strokeWidth: 1,
  opacity: 1,
  selected: false,
  fill: "#FFFFFF",
  draggable: false
};
var _default = EachInteractiveYCoordinate;
exports["default"] = _default;
//# sourceMappingURL=EachInteractiveYCoordinate.js.map