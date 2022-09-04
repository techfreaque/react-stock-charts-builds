"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

function tickTransform_svg_axisX(scale, tick) {
  return [Math.round(scale(tick)), 0];
}

function tickTransform_svg_axisY(scale, tick) {
  return [0, Math.round(scale(tick))];
}

var Tick = /*#__PURE__*/function (_Component) {
  _inherits(Tick, _Component);

  var _super = _createSuper(Tick);

  function Tick() {
    _classCallCheck(this, Tick);

    return _super.apply(this, arguments);
  }

  _createClass(Tick, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          transform = _this$props.transform,
          tickStroke = _this$props.tickStroke,
          tickStrokeOpacity = _this$props.tickStrokeOpacity,
          textAnchor = _this$props.textAnchor,
          fontSize = _this$props.fontSize,
          fontFamily = _this$props.fontFamily;
      var _this$props2 = this.props,
          x = _this$props2.x,
          y = _this$props2.y,
          x2 = _this$props2.x2,
          y2 = _this$props2.y2,
          dy = _this$props2.dy;
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: "tick",
        transform: "translate(".concat(transform[0], ", ").concat(transform[1], ")")
      }, /*#__PURE__*/_react["default"].createElement("line", {
        shapeRendering: "crispEdges",
        opacity: tickStrokeOpacity,
        stroke: tickStroke,
        x2: x2,
        y2: y2
      }), /*#__PURE__*/_react["default"].createElement("text", {
        dy: dy,
        x: x,
        y: y,
        fill: tickStroke,
        fontSize: fontSize,
        fontFamily: fontFamily,
        textAnchor: textAnchor
      }, this.props.children));
    }
  }]);

  return Tick;
}(_react.Component);

Tick.propTypes = {
  transform: _propTypes["default"].arrayOf(Number),
  tickStroke: _propTypes["default"].string,
  tickStrokeOpacity: _propTypes["default"].number,
  textAnchor: _propTypes["default"].string,
  fontSize: _propTypes["default"].number,
  fontFamily: _propTypes["default"].string,
  x: _propTypes["default"].number,
  y: _propTypes["default"].number,
  x2: _propTypes["default"].number,
  y2: _propTypes["default"].number,
  dy: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired
};

Tick.drawOnCanvasStatic = function (tick, ctx, result) {
  var scale = result.scale,
      tickTransform = result.tickTransform,
      canvas_dy = result.canvas_dy,
      x = result.x,
      y = result.y,
      x2 = result.x2,
      y2 = result.y2,
      format = result.format;
  var origin = tickTransform(scale, tick);
  ctx.beginPath();
  ctx.moveTo(origin[0], origin[1]);
  ctx.lineTo(origin[0] + x2, origin[1] + y2);
  ctx.stroke();
  ctx.fillText(format(tick), origin[0] + x, origin[1] + y + canvas_dy);
};

var AxisTicks = /*#__PURE__*/function (_Component2) {
  _inherits(AxisTicks, _Component2);

  var _super2 = _createSuper(AxisTicks);

  function AxisTicks() {
    _classCallCheck(this, AxisTicks);

    return _super2.apply(this, arguments);
  }

  _createClass(AxisTicks, [{
    key: "render",
    value: function render() {
      var result = AxisTicks.helper(this.props, this.props.scale);
      var ticks = result.ticks,
          scale = result.scale,
          tickTransform = result.tickTransform,
          tickStroke = result.tickStroke,
          tickStrokeOpacity = result.tickStrokeOpacity,
          dy = result.dy,
          x = result.x,
          y = result.y,
          x2 = result.x2,
          y2 = result.y2,
          textAnchor = result.textAnchor,
          fontSize = result.fontSize,
          fontFamily = result.fontFamily,
          format = result.format;
      return /*#__PURE__*/_react["default"].createElement("g", null, ticks.map(function (tick, idx) {
        return /*#__PURE__*/_react["default"].createElement(Tick, {
          key: idx,
          transform: tickTransform(scale, tick),
          tickStroke: tickStroke,
          tickStrokeOpacity: tickStrokeOpacity,
          dy: dy,
          x: x,
          y: y,
          x2: x2,
          y2: y2,
          textAnchor: textAnchor,
          fontSize: fontSize,
          fontFamily: fontFamily
        }, format(tick));
      }));
    }
  }]);

  return AxisTicks;
}(_react.Component);

AxisTicks.propTypes = {
  orient: _propTypes["default"].oneOf(["top", "bottom", "left", "right"]).isRequired,
  innerTickSize: _propTypes["default"].number,
  tickFormat: _propTypes["default"].func,
  tickPadding: _propTypes["default"].number,
  ticks: _propTypes["default"].array,
  tickValues: _propTypes["default"].array,
  scale: _propTypes["default"].func.isRequired,
  tickStroke: _propTypes["default"].string,
  tickStrokeOpacity: _propTypes["default"].number
};
AxisTicks.defaultProps = {
  innerTickSize: 5,
  tickPadding: 6,
  ticks: [10],
  tickStroke: "#000",
  tickStrokeOpacity: 1
};

AxisTicks.helper = function (props, scale) {
  var orient = props.orient,
      innerTickSize = props.innerTickSize,
      tickFormat = props.tickFormat,
      tickPadding = props.tickPadding,
      fontSize = props.fontSize,
      fontFamily = props.fontFamily;
  var tickArguments = props.ticks,
      tickValues = props.tickValues,
      tickStroke = props.tickStroke,
      tickStrokeOpacity = props.tickStrokeOpacity;
  var ticks = (0, _utils.isNotDefined)(tickValues) ? scale.ticks ? scale.ticks.apply(scale, _toConsumableArray(tickArguments)) : scale.domain() : tickValues;
  var baseFormat = scale.tickFormat ? scale.tickFormat.apply(scale, _toConsumableArray(tickArguments)) : _utils.identity;
  var format = (0, _utils.isNotDefined)(tickFormat) ? baseFormat : function (d) {
    return baseFormat(d) ? tickFormat(d) : "";
  };
  var sign = orient === "top" || orient === "left" ? -1 : 1;
  var tickSpacing = Math.max(innerTickSize, 0) + tickPadding;
  var tickTransform, x, y, x2, y2, dy, canvas_dy, textAnchor;

  if (orient === "bottom" || orient === "top") {
    tickTransform = tickTransform_svg_axisX;
    x2 = 0;
    y2 = sign * innerTickSize;
    x = 0;
    y = sign * tickSpacing;
    dy = sign < 0 ? "0em" : ".71em";
    canvas_dy = sign < 0 ? 0 : fontSize * .71;
    textAnchor = "middle";
  } else {
    tickTransform = tickTransform_svg_axisY;
    x2 = sign * innerTickSize;
    y2 = 0;
    x = sign * tickSpacing;
    y = 0;
    dy = ".32em";
    canvas_dy = fontSize * .32;
    textAnchor = sign < 0 ? "end" : "start";
  }

  return {
    ticks: ticks,
    scale: scale,
    tickTransform: tickTransform,
    tickStroke: tickStroke,
    tickStrokeOpacity: tickStrokeOpacity,
    dy: dy,
    canvas_dy: canvas_dy,
    x: x,
    y: y,
    x2: x2,
    y2: y2,
    textAnchor: textAnchor,
    fontSize: fontSize,
    fontFamily: fontFamily,
    format: format
  };
};

AxisTicks.drawOnCanvasStatic = function (props, ctx, xScale, yScale) {
  props = _objectSpread(_objectSpread({}, AxisTicks.defaultProps), props);
  var _props = props,
      orient = _props.orient;
  var xAxis = orient === "bottom" || orient === "top";
  var result = AxisTicks.helper(props, xAxis ? xScale : yScale);
  var tickStroke = result.tickStroke,
      tickStrokeOpacity = result.tickStrokeOpacity,
      textAnchor = result.textAnchor,
      fontSize = result.fontSize,
      fontFamily = result.fontFamily;
  ctx.strokeStyle = (0, _utils.hexToRGBA)(tickStroke, tickStrokeOpacity);
  ctx.font = "".concat(fontSize, "px ").concat(fontFamily);
  ctx.fillStyle = tickStroke;
  ctx.textAlign = textAnchor === "middle" ? "center" : textAnchor; // ctx.textBaseline = 'middle';

  result.ticks.forEach(function (tick) {
    Tick.drawOnCanvasStatic(tick, ctx, result);
  });
};

var _default = AxisTicks;
exports["default"] = _default;
//# sourceMappingURL=AxisTicks.js.map