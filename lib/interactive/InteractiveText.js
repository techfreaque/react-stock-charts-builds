"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _utils2 = require("./utils");

var _EachText = _interopRequireDefault(require("./wrapper/EachText"));

var _HoverTextNearMouse = _interopRequireDefault(require("./components/HoverTextNearMouse"));

var _GenericChartComponent = _interopRequireDefault(require("../GenericChartComponent"));

var _GenericComponent = require("../GenericComponent");

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var InteractiveText = /*#__PURE__*/function (_Component) {
  _inherits(InteractiveText, _Component);

  var _super = _createSuper(InteractiveText);

  function InteractiveText(props) {
    var _this;

    _classCallCheck(this, InteractiveText);

    _this = _super.call(this, props);
    _this.handleDraw = _this.handleDraw.bind(_assertThisInitialized(_this));
    _this.handleDrag = _this.handleDrag.bind(_assertThisInitialized(_this));
    _this.handleDragComplete = _this.handleDragComplete.bind(_assertThisInitialized(_this));
    _this.terminate = _utils2.terminate.bind(_assertThisInitialized(_this));
    _this.saveNodeType = _utils2.saveNodeType.bind(_assertThisInitialized(_this));
    _this.getSelectionState = (0, _utils2.isHoverForInteractiveType)("textList").bind(_assertThisInitialized(_this));
    _this.nodes = [];
    _this.state = {};
    return _this;
  }

  _createClass(InteractiveText, [{
    key: "handleDrag",
    value: function handleDrag(index, position) {
      this.setState({
        override: {
          index: index,
          position: position
        }
      });
    }
  }, {
    key: "handleDragComplete",
    value: function handleDragComplete(moreProps) {
      var _this2 = this;

      var override = this.state.override;

      if ((0, _utils.isDefined)(override)) {
        var textList = this.props.textList;
        var newTextList = textList.map(function (each, idx) {
          var selected = idx === override.index;
          return selected ? _objectSpread(_objectSpread({}, each), {}, {
            position: override.position,
            selected: selected
          }) : _objectSpread(_objectSpread({}, each), {}, {
            selected: selected
          });
        });
        this.setState({
          override: null
        }, function () {
          _this2.props.onDragComplete(newTextList, moreProps);
        });
      }
    }
  }, {
    key: "handleDrawLine",
    value: function handleDrawLine(xyValue) {
      var current = this.state.current;

      if ((0, _utils.isDefined)(current) && (0, _utils.isDefined)(current.start)) {
        this.setState({
          current: {
            start: current.start,
            end: xyValue
          }
        });
      }
    }
  }, {
    key: "handleDraw",
    value: function handleDraw(moreProps, e) {
      var enabled = this.props.enabled;

      if (enabled) {
        var _moreProps$mouseXY = _slicedToArray(moreProps.mouseXY, 2),
            mouseY = _moreProps$mouseXY[1],
            yScale = moreProps.chartConfig.yScale,
            xAccessor = moreProps.xAccessor,
            currentItem = moreProps.currentItem;

        var xyValue = [xAccessor(currentItem), yScale.invert(mouseY)];
        var _this$props = this.props,
            defaultText = _this$props.defaultText,
            onChoosePosition = _this$props.onChoosePosition;

        var newText = _objectSpread(_objectSpread({}, defaultText), {}, {
          position: xyValue
        });

        onChoosePosition(newText, moreProps, e);
      }
      /*  else {
      this.handleClick(moreProps, e);
      } */

    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          textList = _this$props2.textList,
          defaultText = _this$props2.defaultText,
          hoverText = _this$props2.hoverText;
      var override = this.state.override;
      return /*#__PURE__*/_react["default"].createElement("g", null, textList.map(function (each, idx) {
        var defaultHoverText = InteractiveText.defaultProps.hoverText;

        var props = _objectSpread(_objectSpread(_objectSpread({}, defaultText), each), {}, {
          hoverText: _objectSpread(_objectSpread(_objectSpread({}, defaultHoverText), hoverText), each.hoverText || {})
        });

        return /*#__PURE__*/_react["default"].createElement(_EachText["default"], _extends({
          key: idx,
          ref: _this3.saveNodeType(idx),
          index: idx
        }, props, {
          selected: each.selected,
          position: (0, _utils2.getValueFromOverride)(override, idx, "position", each.position),
          onDrag: _this3.handleDrag,
          onDragComplete: _this3.handleDragComplete,
          edgeInteractiveCursor: "react-stockcharts-move-cursor"
        }));
      }), /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        onClick: this.handleDraw,
        svgDraw: _utils.noop,
        canvasDraw: _utils.noop,
        canvasToDraw: _GenericComponent.getMouseCanvas,
        drawOn: ["mousemove", "pan"]
      }), ";");
    }
  }]);

  return InteractiveText;
}(_react.Component);

InteractiveText.propTypes = {
  onChoosePosition: _propTypes["default"].func.isRequired,
  onDragComplete: _propTypes["default"].func.isRequired,
  onSelect: _propTypes["default"].func,
  defaultText: _propTypes["default"].shape({
    bgFill: _propTypes["default"].string.isRequired,
    bgOpacity: _propTypes["default"].number.isRequired,
    bgStrokeWidth: _propTypes["default"].number,
    bgStroke: _propTypes["default"].string,
    textFill: _propTypes["default"].string.isRequired,
    fontFamily: _propTypes["default"].string.isRequired,
    fontWeight: _propTypes["default"].string.isRequired,
    fontStyle: _propTypes["default"].string.isRequired,
    fontSize: _propTypes["default"].number.isRequired,
    text: _propTypes["default"].string.isRequired
  }).isRequired,
  hoverText: _propTypes["default"].object.isRequired,
  textList: _propTypes["default"].array.isRequired,
  enabled: _propTypes["default"].bool.isRequired
};
InteractiveText.defaultProps = {
  onChoosePosition: _utils.noop,
  onDragComplete: _utils.noop,
  onSelect: _utils.noop,
  defaultText: {
    bgFill: "#D3D3D3",
    bgOpacity: 1,
    bgStrokeWidth: 1,
    textFill: "#F10040",
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    text: "Lorem ipsum..."
  },
  hoverText: _objectSpread(_objectSpread({}, _HoverTextNearMouse["default"].defaultProps), {}, {
    enable: true,
    bgHeight: "auto",
    bgWidth: "auto",
    text: "Click to select object",
    selectedText: ""
  }),
  textList: []
};
InteractiveText.contextTypes = {
  subscribe: _propTypes["default"].func.isRequired,
  unsubscribe: _propTypes["default"].func.isRequired,
  generateSubscriptionId: _propTypes["default"].func.isRequired,
  chartId: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired
};
var _default = InteractiveText;
exports["default"] = _default;
//# sourceMappingURL=InteractiveText.js.map