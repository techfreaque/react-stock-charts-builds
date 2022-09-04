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

var _EachLinearRegressionChannel = _interopRequireDefault(require("./wrapper/EachLinearRegressionChannel"));

var _MouseLocationIndicator = _interopRequireDefault(require("./components/MouseLocationIndicator"));

var _HoverTextNearMouse = _interopRequireDefault(require("./components/HoverTextNearMouse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var StandardDeviationChannel = /*#__PURE__*/function (_Component) {
  _inherits(StandardDeviationChannel, _Component);

  var _super = _createSuper(StandardDeviationChannel);

  function StandardDeviationChannel(props) {
    var _this;

    _classCallCheck(this, StandardDeviationChannel);

    _this = _super.call(this, props);
    _this.handleStart = _this.handleStart.bind(_assertThisInitialized(_this));
    _this.handleEnd = _this.handleEnd.bind(_assertThisInitialized(_this));
    _this.handleDrawLine = _this.handleDrawLine.bind(_assertThisInitialized(_this));
    _this.handleDragLine = _this.handleDragLine.bind(_assertThisInitialized(_this));
    _this.handleDragLineComplete = _this.handleDragLineComplete.bind(_assertThisInitialized(_this));
    _this.terminate = _utils2.terminate.bind(_assertThisInitialized(_this));
    _this.saveNodeType = _utils2.saveNodeType.bind(_assertThisInitialized(_this));
    _this.getSelectionState = (0, _utils2.isHoverForInteractiveType)("channels").bind(_assertThisInitialized(_this));
    _this.nodes = [];
    _this.state = {};
    return _this;
  }

  _createClass(StandardDeviationChannel, [{
    key: "handleDragLine",
    value: function handleDragLine(index, newXYValue) {
      this.setState({
        override: _objectSpread({
          index: index
        }, newXYValue)
      });
    }
  }, {
    key: "handleDragLineComplete",
    value: function handleDragLineComplete(moreProps) {
      var _this2 = this;

      var override = this.state.override;
      var channels = this.props.channels;

      if ((0, _utils.isDefined)(override)) {
        var newChannels = channels.map(function (each, idx) {
          return idx === override.index ? _objectSpread(_objectSpread({}, each), {}, {
            start: [override.x1Value, override.y1Value],
            end: [override.x2Value, override.y2Value],
            selected: true
          }) : each;
        });
        this.setState({
          override: null
        }, function () {
          _this2.props.onComplete(newChannels, moreProps);
        });
      }
    }
  }, {
    key: "handleDrawLine",
    value: function handleDrawLine(xyValue) {
      var current = this.state.current;

      if ((0, _utils.isDefined)(current) && (0, _utils.isDefined)(current.start)) {
        this.mouseMoved = true;
        this.setState({
          current: {
            start: current.start,
            end: xyValue
          }
        });
      }
    }
  }, {
    key: "handleStart",
    value: function handleStart(xyValue) {
      var _this3 = this;

      var current = this.state.current;

      if ((0, _utils.isNotDefined)(current) || (0, _utils.isNotDefined)(current.start)) {
        this.mouseMoved = false;
        this.setState({
          current: {
            start: xyValue,
            end: null
          }
        }, function () {
          _this3.props.onStart();
        });
      }
    }
  }, {
    key: "handleEnd",
    value: function handleEnd(xyValue, moreProps, e) {
      var _this4 = this;

      var current = this.state.current;
      var _this$props = this.props,
          appearance = _this$props.appearance,
          channels = _this$props.channels;

      if (this.mouseMoved && (0, _utils.isDefined)(current) && (0, _utils.isDefined)(current.start)) {
        var newChannels = [].concat(_toConsumableArray(channels.map(function (d) {
          return _objectSpread(_objectSpread({}, d), {}, {
            selected: false
          });
        })), [{
          start: current.start,
          end: xyValue,
          selected: true,
          appearance: appearance
        }]);
        this.setState({
          current: null
        }, function () {
          _this4.props.onComplete(newChannels, moreProps, e);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var appearance = this.props.appearance;
      var _this$props2 = this.props,
          enabled = _this$props2.enabled,
          snapTo = _this$props2.snapTo;
      var _this$props3 = this.props,
          currentPositionRadius = _this$props3.currentPositionRadius,
          currentPositionStroke = _this$props3.currentPositionStroke;
      var _this$props4 = this.props,
          currentPositionOpacity = _this$props4.currentPositionOpacity,
          currentPositionStrokeWidth = _this$props4.currentPositionStrokeWidth;
      var _this$props5 = this.props,
          hoverText = _this$props5.hoverText,
          channels = _this$props5.channels;
      var _this$state = this.state,
          current = _this$state.current,
          override = _this$state.override;

      var eachDefaultAppearance = _objectSpread(_objectSpread({}, StandardDeviationChannel.defaultProps.appearance), appearance);

      var hoverTextDefault = _objectSpread(_objectSpread({}, StandardDeviationChannel.defaultProps.hoverText), hoverText);

      var tempLine = (0, _utils.isDefined)(current) && (0, _utils.isDefined)(current.end) ? /*#__PURE__*/_react["default"].createElement(_EachLinearRegressionChannel["default"], {
        interactive: false,
        x1Value: current.start[0],
        x2Value: current.end[0],
        appearance: eachDefaultAppearance,
        hoverText: hoverTextDefault
      }) : null;
      return /*#__PURE__*/_react["default"].createElement("g", null, channels.map(function (each, idx) {
        var eachAppearance = (0, _utils.isDefined)(each.appearance) ? _objectSpread(_objectSpread({}, eachDefaultAppearance), each.appearance) : eachDefaultAppearance;
        var eachHoverText = (0, _utils.isDefined)(each.hoverText) ? _objectSpread(_objectSpread({}, hoverTextDefault), each.hoverText) : hoverTextDefault;
        return /*#__PURE__*/_react["default"].createElement(_EachLinearRegressionChannel["default"], {
          key: idx,
          ref: _this5.saveNodeType(idx),
          index: idx,
          selected: each.selected,
          x1Value: (0, _utils2.getValueFromOverride)(override, idx, "x1Value", each.start[0]),
          x2Value: (0, _utils2.getValueFromOverride)(override, idx, "x2Value", each.end[0]),
          appearance: eachAppearance,
          snapTo: snapTo,
          hoverText: eachHoverText,
          onDrag: _this5.handleDragLine,
          onDragComplete: _this5.handleDragLineComplete,
          edgeInteractiveCursor: "react-stockcharts-move-cursor"
        });
      }), tempLine, /*#__PURE__*/_react["default"].createElement(_MouseLocationIndicator["default"], {
        enabled: enabled,
        snap: true,
        snapTo: snapTo,
        r: currentPositionRadius,
        stroke: currentPositionStroke,
        opacity: currentPositionOpacity,
        strokeWidth: currentPositionStrokeWidth,
        onMouseDown: this.handleStart,
        onClick: this.handleEnd,
        onMouseMove: this.handleDrawLine
      }));
    }
  }]);

  return StandardDeviationChannel;
}(_react.Component);

StandardDeviationChannel.propTypes = {
  enabled: _propTypes["default"].bool.isRequired,
  snapTo: _propTypes["default"].func,
  onStart: _propTypes["default"].func,
  onComplete: _propTypes["default"].func.isRequired,
  onSelect: _propTypes["default"].func,
  currentPositionStroke: _propTypes["default"].string,
  currentPositionStrokeWidth: _propTypes["default"].number,
  currentPositionOpacity: _propTypes["default"].number,
  currentPositionRadius: _propTypes["default"].number,
  appearance: _propTypes["default"].shape({
    stroke: _propTypes["default"].string,
    strokeOpacity: _propTypes["default"].number,
    strokeWidth: _propTypes["default"].number,
    fill: _propTypes["default"].string,
    fillOpacity: _propTypes["default"].number,
    edgeStrokeWidth: _propTypes["default"].number,
    edgeStroke: _propTypes["default"].string,
    edgeFill: _propTypes["default"].string,
    r: _propTypes["default"].number
  }).isRequired,
  hoverText: _propTypes["default"].object,
  channels: _propTypes["default"].array.isRequired
};
StandardDeviationChannel.defaultProps = {
  snapTo: function snapTo(d) {
    return d.close;
  },
  appearance: {
    stroke: "#000000",
    fillOpacity: 0.2,
    strokeOpacity: 1,
    strokeWidth: 1,
    fill: "#8AAFE2",
    edgeStrokeWidth: 2,
    edgeStroke: "#000000",
    edgeFill: "#FFFFFF",
    r: 5
  },
  onStart: _utils.noop,
  onComplete: _utils.noop,
  onSelect: _utils.noop,
  currentPositionStroke: "#000000",
  currentPositionOpacity: 1,
  currentPositionStrokeWidth: 3,
  currentPositionRadius: 4,
  hoverText: _objectSpread(_objectSpread({}, _HoverTextNearMouse["default"].defaultProps), {}, {
    enable: true,
    bgHeight: "auto",
    bgWidth: "auto",
    text: "Click and drag the edge circles",
    selectedText: ""
  }),
  channels: []
};
var _default = StandardDeviationChannel;
exports["default"] = _default;
//# sourceMappingURL=StandardDeviationChannel.js.map