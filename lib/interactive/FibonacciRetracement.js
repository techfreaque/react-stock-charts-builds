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

var _EachFibRetracement = _interopRequireDefault(require("./wrapper/EachFibRetracement"));

var _MouseLocationIndicator = _interopRequireDefault(require("./components/MouseLocationIndicator"));

var _HoverTextNearMouse = _interopRequireDefault(require("./components/HoverTextNearMouse"));

var _excluded = ["index"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var FibonacciRetracement = /*#__PURE__*/function (_Component) {
  _inherits(FibonacciRetracement, _Component);

  var _super = _createSuper(FibonacciRetracement);

  function FibonacciRetracement(props) {
    var _this;

    _classCallCheck(this, FibonacciRetracement);

    _this = _super.call(this, props);
    _this.handleStart = _this.handleStart.bind(_assertThisInitialized(_this));
    _this.handleEnd = _this.handleEnd.bind(_assertThisInitialized(_this));
    _this.handleDrawRetracement = _this.handleDrawRetracement.bind(_assertThisInitialized(_this));
    _this.handleEdge1Drag = _this.handleEdge1Drag.bind(_assertThisInitialized(_this));
    _this.handleEdge2Drag = _this.handleEdge2Drag.bind(_assertThisInitialized(_this));
    _this.handleDrag = _this.handleDrag.bind(_assertThisInitialized(_this));
    _this.handleDragComplete = _this.handleDragComplete.bind(_assertThisInitialized(_this));
    _this.terminate = _utils2.terminate.bind(_assertThisInitialized(_this));
    _this.getSelectionState = (0, _utils2.isHoverForInteractiveType)("retracements").bind(_assertThisInitialized(_this));
    _this.saveNodeType = _utils2.saveNodeType.bind(_assertThisInitialized(_this));
    _this.nodes = [];
    _this.state = {};
    return _this;
  }

  _createClass(FibonacciRetracement, [{
    key: "handleDrawRetracement",
    value: function handleDrawRetracement(xyValue) {
      var current = this.state.current;

      if ((0, _utils.isDefined)(current) && (0, _utils.isDefined)(current.x1)) {
        this.mouseMoved = true;
        this.setState({
          current: _objectSpread(_objectSpread({}, current), {}, {
            x2: xyValue[0],
            y2: xyValue[1]
          })
        });
      }
    }
  }, {
    key: "handleDrag",
    value: function handleDrag(index, xy) {
      this.setState({
        override: _objectSpread({
          index: index
        }, xy)
      });
    }
  }, {
    key: "handleEdge1Drag",
    value: function handleEdge1Drag(echo, newXYValue, origXYValue) {
      var retracements = this.props.retracements;
      var index = echo.index;
      var dx = origXYValue.x1Value - newXYValue.x1Value;
      this.setState({
        override: {
          index: index,
          x1: retracements[index].x1 - dx,
          y1: retracements[index].y1,
          x2: retracements[index].x2,
          y2: retracements[index].y2
        }
      });
    }
  }, {
    key: "handleEdge2Drag",
    value: function handleEdge2Drag(echo, newXYValue, origXYValue) {
      var retracements = this.props.retracements;
      var index = echo.index;
      var dx = origXYValue.x2Value - newXYValue.x2Value;
      this.setState({
        override: {
          index: index,
          x1: retracements[index].x1,
          y1: retracements[index].y1,
          x2: retracements[index].x2 - dx,
          y2: retracements[index].y2
        }
      });
    }
  }, {
    key: "handleDragComplete",
    value: function handleDragComplete(moreProps) {
      var _this2 = this;

      var retracements = this.props.retracements;
      var override = this.state.override;

      if ((0, _utils.isDefined)(override)) {
        var index = override.index,
            rest = _objectWithoutProperties(override, _excluded);

        var newRetracements = retracements.map(function (each, idx) {
          return idx === index ? _objectSpread(_objectSpread(_objectSpread({}, each), rest), {}, {
            selected: true
          }) : each;
        });
        this.setState({
          override: null
        }, function () {
          _this2.props.onComplete(newRetracements, moreProps);
        });
      }
    }
  }, {
    key: "handleStart",
    value: function handleStart(xyValue, moreProps) {
      var _this3 = this;

      var current = this.state.current;

      if ((0, _utils.isNotDefined)(current) || (0, _utils.isNotDefined)(current.x1)) {
        this.mouseMoved = false;
        this.setState({
          current: {
            x1: xyValue[0],
            y1: xyValue[1],
            x2: null,
            y2: null
          }
        }, function () {
          _this3.props.onStart(moreProps);
        });
      }
    }
  }, {
    key: "handleEnd",
    value: function handleEnd(xyValue, moreProps, e) {
      var _this4 = this;

      var _this$props = this.props,
          retracements = _this$props.retracements,
          appearance = _this$props.appearance,
          type = _this$props.type;
      var current = this.state.current;

      if (this.mouseMoved && (0, _utils.isDefined)(current) && (0, _utils.isDefined)(current.x1)) {
        var newRetracements = retracements.concat(_objectSpread(_objectSpread({}, current), {}, {
          x2: xyValue[0],
          y2: xyValue[1],
          selected: true,
          appearance: appearance,
          type: type
        }));
        this.setState({
          current: null
        }, function () {
          _this4.props.onComplete(newRetracements, moreProps, e);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state = this.state,
          current = _this$state.current,
          override = _this$state.override;
      var retracements = this.props.retracements;
      var _this$props2 = this.props,
          appearance = _this$props2.appearance,
          type = _this$props2.type;
      var _this$props3 = this.props,
          currentPositionStroke = _this$props3.currentPositionStroke,
          currentPositionOpacity = _this$props3.currentPositionOpacity,
          currentPositionStrokeWidth = _this$props3.currentPositionStrokeWidth,
          currentPositionRadius = _this$props3.currentPositionRadius;
      var _this$props4 = this.props,
          enabled = _this$props4.enabled,
          hoverText = _this$props4.hoverText;
      var overrideIndex = (0, _utils.isDefined)(override) ? override.index : null;

      var hoverTextWidthDefault = _objectSpread(_objectSpread({}, FibonacciRetracement.defaultProps.hoverText), hoverText);

      var currentRetracement = (0, _utils.isDefined)(current) && (0, _utils.isDefined)(current.x2) ? /*#__PURE__*/_react["default"].createElement(_EachFibRetracement["default"], _extends({
        interactive: false,
        type: type,
        appearance: appearance,
        hoverText: hoverTextWidthDefault
      }, current)) : null;
      return /*#__PURE__*/_react["default"].createElement("g", null, retracements.map(function (each, idx) {
        var eachAppearance = (0, _utils.isDefined)(each.appearance) ? _objectSpread(_objectSpread({}, appearance), each.appearance) : appearance;
        var eachHoverText = (0, _utils.isDefined)(each.hoverText) ? _objectSpread(_objectSpread({}, hoverTextWidthDefault), each.hoverText) : hoverTextWidthDefault;
        return /*#__PURE__*/_react["default"].createElement(_EachFibRetracement["default"], _extends({
          key: idx,
          ref: _this5.saveNodeType(idx),
          index: idx,
          type: each.type,
          selected: each.selected
        }, idx === overrideIndex ? override : each, {
          hoverText: eachHoverText,
          appearance: eachAppearance,
          onDrag: _this5.handleDrag,
          onDragComplete: _this5.handleDragComplete
        }));
      }), currentRetracement, /*#__PURE__*/_react["default"].createElement(_MouseLocationIndicator["default"], {
        enabled: enabled,
        snap: false,
        r: currentPositionRadius,
        stroke: currentPositionStroke,
        opacity: currentPositionOpacity,
        strokeWidth: currentPositionStrokeWidth,
        onMouseDown: this.handleStart,
        onClick: this.handleEnd,
        onMouseMove: this.handleDrawRetracement
      }));
    }
  }]);

  return FibonacciRetracement;
}(_react.Component); // onClick={this.handleClick}


FibonacciRetracement.propTypes = {
  enabled: _propTypes["default"].bool.isRequired,
  width: _propTypes["default"].number,
  onStart: _propTypes["default"].func,
  onComplete: _propTypes["default"].func,
  onSelect: _propTypes["default"].func,
  type: _propTypes["default"].oneOf(["EXTEND", // extends from -Infinity to +Infinity
  "RAY", // extends to +/-Infinity in one direction
  "BOUND" // extends between the set bounds
  ]).isRequired,
  hoverText: _propTypes["default"].object.isRequired,
  currentPositionStroke: _propTypes["default"].string,
  currentPositionStrokeWidth: _propTypes["default"].number,
  currentPositionOpacity: _propTypes["default"].number,
  currentPositionRadius: _propTypes["default"].number,
  retracements: _propTypes["default"].array.isRequired,
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
  }).isRequired
};
FibonacciRetracement.defaultProps = {
  enabled: true,
  type: "RAY",
  retracements: [],
  onStart: _utils.noop,
  onComplete: _utils.noop,
  onSelect: _utils.noop,
  hoverText: _objectSpread(_objectSpread({}, _HoverTextNearMouse["default"].defaultProps), {}, {
    enable: true,
    bgHeight: "auto",
    bgWidth: "auto",
    text: "Click to select object",
    selectedText: ""
  }),
  currentPositionStroke: "#000000",
  currentPositionOpacity: 1,
  currentPositionStrokeWidth: 3,
  currentPositionRadius: 4,
  appearance: {
    stroke: "#000000",
    strokeWidth: 1,
    strokeOpacity: 1,
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    fontSize: 11,
    fontFill: "#000000",
    edgeStroke: "#000000",
    edgeFill: "#FFFFFF",
    nsEdgeFill: "#000000",
    edgeStrokeWidth: 1,
    r: 5
  }
};
var _default = FibonacciRetracement;
exports["default"] = _default;
//# sourceMappingURL=FibonacciRetracement.js.map