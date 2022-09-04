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

/*
function d3_scaleExtent(domain) {
	var start = domain[0], stop = domain[domain.length - 1];
	return start < stop ? [start, stop] : [stop, start];
}

function d3_scaleRange(scale) {
	return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
}
*/
var AxisLine = /*#__PURE__*/function (_Component) {
  _inherits(AxisLine, _Component);

  var _super = _createSuper(AxisLine);

  function AxisLine() {
    _classCallCheck(this, AxisLine);

    return _super.apply(this, arguments);
  }

  _createClass(AxisLine, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          orient = _this$props.orient,
          outerTickSize = _this$props.outerTickSize,
          fill = _this$props.fill,
          stroke = _this$props.stroke,
          strokeWidth = _this$props.strokeWidth,
          className = _this$props.className,
          shapeRendering = _this$props.shapeRendering,
          opacity = _this$props.opacity,
          range = _this$props.range;
      var sign = orient === "top" || orient === "left" ? -1 : 1; // var range = d3_scaleRange(scale);

      var d;

      if (orient === "bottom" || orient === "top") {
        d = "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize;
      } else {
        d = "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize;
      }

      return /*#__PURE__*/_react["default"].createElement("path", {
        className: className,
        shapeRendering: shapeRendering,
        d: d,
        fill: fill,
        opacity: opacity,
        stroke: stroke,
        strokeWidth: strokeWidth
      });
    }
  }]);

  return AxisLine;
}(_react.Component);

AxisLine.propTypes = {
  className: _propTypes["default"].string,
  shapeRendering: _propTypes["default"].string,
  orient: _propTypes["default"].string.isRequired,
  scale: _propTypes["default"].func.isRequired,
  outerTickSize: _propTypes["default"].number,
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string,
  strokeWidth: _propTypes["default"].number,
  opacity: _propTypes["default"].number,
  range: _propTypes["default"].array
};
AxisLine.defaultProps = {
  className: "react-stockcharts-axis-line",
  shapeRendering: "crispEdges",
  outerTickSize: 0,
  fill: "none",
  stroke: "#000000",
  strokeWidth: 1,
  opacity: 1
};

AxisLine.drawOnCanvasStatic = function (props, ctx
/* , xScale, yScale*/
) {
  props = _objectSpread(_objectSpread({}, AxisLine.defaultProps), props);
  var _props = props,
      orient = _props.orient,
      outerTickSize = _props.outerTickSize,
      stroke = _props.stroke,
      strokeWidth = _props.strokeWidth,
      opacity = _props.opacity,
      range = _props.range;
  var sign = orient === "top" || orient === "left" ? -1 : 1;
  var xAxis = orient === "bottom" || orient === "top"; // var range = d3_scaleRange(xAxis ? xScale : yScale);

  ctx.lineWidth = strokeWidth;
  ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, opacity);
  ctx.beginPath();

  if (xAxis) {
    ctx.moveTo((0, _utils.first)(range), sign * outerTickSize);
    ctx.lineTo((0, _utils.first)(range), 0);
    ctx.lineTo((0, _utils.last)(range), 0);
    ctx.lineTo((0, _utils.last)(range), sign * outerTickSize);
  } else {
    ctx.moveTo(sign * outerTickSize, (0, _utils.first)(range));
    ctx.lineTo(0, (0, _utils.first)(range));
    ctx.lineTo(0, (0, _utils.last)(range));
    ctx.lineTo(sign * outerTickSize, (0, _utils.last)(range));
  }

  ctx.stroke(); // ctx.strokeStyle = strokeStyle;
};

var _default = AxisLine;
exports["default"] = _default;
//# sourceMappingURL=AxisLine.js.map