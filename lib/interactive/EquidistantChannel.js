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

var _EachEquidistantChannel = _interopRequireDefault(require("./wrapper/EachEquidistantChannel"));

var _StraightLine = require("./components/StraightLine");

var _MouseLocationIndicator = _interopRequireDefault(require("./components/MouseLocationIndicator"));

var _HoverTextNearMouse = _interopRequireDefault(require("./components/HoverTextNearMouse"));

var _excluded = ["index"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var EquidistantChannel = /*#__PURE__*/function (_Component) {
  _inherits(EquidistantChannel, _Component);

  var _super = _createSuper(EquidistantChannel);

  function EquidistantChannel(props) {
    var _this;

    _classCallCheck(this, EquidistantChannel);

    _this = _super.call(this, props);
    _this.handleStart = _this.handleStart.bind(_assertThisInitialized(_this));
    _this.handleEnd = _this.handleEnd.bind(_assertThisInitialized(_this));
    _this.handleDrawChannel = _this.handleDrawChannel.bind(_assertThisInitialized(_this));
    _this.handleDragChannel = _this.handleDragChannel.bind(_assertThisInitialized(_this));
    _this.handleDragChannelComplete = _this.handleDragChannelComplete.bind(_assertThisInitialized(_this));
    _this.terminate = _utils2.terminate.bind(_assertThisInitialized(_this));
    _this.saveNodeType = _utils2.saveNodeType.bind(_assertThisInitialized(_this));
    _this.getSelectionState = (0, _utils2.isHoverForInteractiveType)("channels").bind(_assertThisInitialized(_this));
    _this.nodes = [];
    _this.state = {};
    return _this;
  }

  _createClass(EquidistantChannel, [{
    key: "handleDragChannel",
    value: function handleDragChannel(index, newXYValue) {
      this.setState({
        override: _objectSpread({
          index: index
        }, newXYValue)
      });
    }
  }, {
    key: "handleDragChannelComplete",
    value: function handleDragChannelComplete(moreProps) {
      var _this2 = this;

      var override = this.state.override;
      var channels = this.props.channels;

      if ((0, _utils.isDefined)(override)) {
        var index = override.index,
            rest = _objectWithoutProperties(override, _excluded);

        var newChannels = channels.map(function (each, idx) {
          return idx === index ? _objectSpread(_objectSpread(_objectSpread({}, each), rest), {}, {
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
    key: "handleDrawChannel",
    value: function handleDrawChannel(xyValue) {
      var current = this.state.current;

      if ((0, _utils.isDefined)(current) && (0, _utils.isDefined)(current.startXY)) {
        this.mouseMoved = true;

        if ((0, _utils.isNotDefined)(current.dy)) {
          this.setState({
            current: {
              startXY: current.startXY,
              endXY: xyValue
            }
          });
        } else {
          var m = (0, _StraightLine.getSlope)(current.startXY, current.endXY);
          var b = (0, _StraightLine.getYIntercept)(m, current.endXY);
          var y = m * xyValue[0] + b;
          var dy = xyValue[1] - y;
          this.setState({
            current: _objectSpread(_objectSpread({}, current), {}, {
              dy: dy
            })
          });
        }
      }
    }
  }, {
    key: "handleStart",
    value: function handleStart(xyValue) {
      var _this3 = this;

      var current = this.state.current;

      if ((0, _utils.isNotDefined)(current) || (0, _utils.isNotDefined)(current.startXY)) {
        this.mouseMoved = false;
        this.setState({
          current: {
            startXY: xyValue,
            endXY: null
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
          channels = _this$props.channels,
          appearance = _this$props.appearance;

      if (this.mouseMoved && (0, _utils.isDefined)(current) && (0, _utils.isDefined)(current.startXY)) {
        if ((0, _utils.isNotDefined)(current.dy)) {
          this.setState({
            current: _objectSpread(_objectSpread({}, current), {}, {
              dy: 0
            })
          });
        } else {
          var newChannels = [].concat(_toConsumableArray(channels.map(function (d) {
            return _objectSpread(_objectSpread({}, d), {}, {
              selected: false
            });
          })), [_objectSpread(_objectSpread({}, current), {}, {
            selected: true,
            appearance: appearance
          })]);
          this.setState({
            current: null
          }, function () {
            _this4.props.onComplete(newChannels, moreProps, e);
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var appearance = this.props.appearance;
      var enabled = this.props.enabled;
      var _this$props2 = this.props,
          currentPositionRadius = _this$props2.currentPositionRadius,
          currentPositionStroke = _this$props2.currentPositionStroke;
      var _this$props3 = this.props,
          currentPositionOpacity = _this$props3.currentPositionOpacity,
          currentPositionStrokeWidth = _this$props3.currentPositionStrokeWidth;
      var _this$props4 = this.props,
          channels = _this$props4.channels,
          hoverText = _this$props4.hoverText;
      var _this$state = this.state,
          current = _this$state.current,
          override = _this$state.override;
      var overrideIndex = (0, _utils.isDefined)(override) ? override.index : null;
      var tempChannel = (0, _utils.isDefined)(current) && (0, _utils.isDefined)(current.endXY) ? /*#__PURE__*/_react["default"].createElement(_EachEquidistantChannel["default"], _extends({
        interactive: false
      }, current, {
        appearance: appearance,
        hoverText: hoverText
      })) : null;
      return /*#__PURE__*/_react["default"].createElement("g", null, channels.map(function (each, idx) {
        var eachAppearance = (0, _utils.isDefined)(each.appearance) ? _objectSpread(_objectSpread({}, appearance), each.appearance) : appearance;
        return /*#__PURE__*/_react["default"].createElement(_EachEquidistantChannel["default"], _extends({
          key: idx,
          ref: _this5.saveNodeType(idx),
          index: idx,
          selected: each.selected,
          hoverText: hoverText
        }, idx === overrideIndex ? override : each, {
          appearance: eachAppearance,
          onDrag: _this5.handleDragChannel,
          onDragComplete: _this5.handleDragChannelComplete
        }));
      }), tempChannel, /*#__PURE__*/_react["default"].createElement(_MouseLocationIndicator["default"], {
        enabled: enabled,
        snap: false,
        r: currentPositionRadius,
        stroke: currentPositionStroke,
        opacity: currentPositionOpacity,
        strokeWidth: currentPositionStrokeWidth,
        onMouseDown: this.handleStart,
        onClick: this.handleEnd,
        onMouseMove: this.handleDrawChannel
      }));
    }
  }]);

  return EquidistantChannel;
}(_react.Component);

EquidistantChannel.propTypes = {
  enabled: _propTypes["default"].bool.isRequired,
  onStart: _propTypes["default"].func.isRequired,
  onComplete: _propTypes["default"].func.isRequired,
  onSelect: _propTypes["default"].func.isRequired,
  currentPositionStroke: _propTypes["default"].string,
  currentPositionStrokeWidth: _propTypes["default"].number,
  currentPositionOpacity: _propTypes["default"].number,
  currentPositionRadius: _propTypes["default"].number,
  hoverText: _propTypes["default"].object.isRequired,
  channels: _propTypes["default"].array.isRequired,
  appearance: _propTypes["default"].shape({
    stroke: _propTypes["default"].string.isRequired,
    strokeOpacity: _propTypes["default"].number.isRequired,
    strokeWidth: _propTypes["default"].number.isRequired,
    fill: _propTypes["default"].string.isRequired,
    fillOpacity: _propTypes["default"].number.isRequired,
    edgeStroke: _propTypes["default"].string.isRequired,
    edgeFill: _propTypes["default"].string.isRequired,
    edgeFill2: _propTypes["default"].string.isRequired,
    edgeStrokeWidth: _propTypes["default"].number.isRequired,
    r: _propTypes["default"].number.isRequired
  }).isRequired
};
EquidistantChannel.defaultProps = {
  onStart: _utils.noop,
  onComplete: _utils.noop,
  onSelect: _utils.noop,
  currentPositionStroke: "#000000",
  currentPositionOpacity: 1,
  currentPositionStrokeWidth: 3,
  currentPositionRadius: 4,
  hoverText: _objectSpread(_objectSpread({}, _HoverTextNearMouse["default"].defaultProps), {}, {
    enable: true,
    bgHeight: 18,
    bgWidth: 120,
    text: "Click to select object"
  }),
  channels: [],
  appearance: {
    stroke: "#000000",
    strokeOpacity: 1,
    strokeWidth: 1,
    fill: "#8AAFE2",
    fillOpacity: 0.7,
    edgeStroke: "#000000",
    edgeFill: "#FFFFFF",
    edgeFill2: "#250B98",
    edgeStrokeWidth: 1,
    r: 5
  }
};
var _default = EquidistantChannel;
exports["default"] = _default;
//# sourceMappingURL=EquidistantChannel.js.map