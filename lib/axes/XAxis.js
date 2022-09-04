"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Axis = _interopRequireDefault(require("./Axis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var XAxis = /*#__PURE__*/function (_Component) {
  _inherits(XAxis, _Component);

  var _super = _createSuper(XAxis);

  function XAxis(props, context) {
    var _this;

    _classCallCheck(this, XAxis);

    _this = _super.call(this, props, context);
    _this.axisZoomCallback = _this.axisZoomCallback.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(XAxis, [{
    key: "axisZoomCallback",
    value: function axisZoomCallback(newXDomain) {
      var xAxisZoom = this.context.xAxisZoom;
      xAxisZoom(newXDomain);
    }
  }, {
    key: "render",
    value: function render() {
      var showTicks = this.props.showTicks;
      var moreProps = helper(this.props, this.context);
      return /*#__PURE__*/_react["default"].createElement(_Axis["default"], _extends({}, this.props, moreProps, {
        x: true,
        zoomEnabled: this.props.zoomEnabled && showTicks,
        axisZoomCallback: this.axisZoomCallback,
        zoomCursorClassName: "react-stockcharts-ew-resize-cursor"
      }));
    }
  }]);

  return XAxis;
}(_react.Component);

XAxis.propTypes = {
  axisAt: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(["top", "bottom", "middle"]), _propTypes["default"].number]).isRequired,
  orient: _propTypes["default"].oneOf(["top", "bottom"]).isRequired,
  innerTickSize: _propTypes["default"].number,
  outerTickSize: _propTypes["default"].number,
  tickFormat: _propTypes["default"].func,
  tickPadding: _propTypes["default"].number,
  tickSize: _propTypes["default"].number,
  ticks: _propTypes["default"].number,
  tickValues: _propTypes["default"].array,
  showTicks: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  zoomEnabled: _propTypes["default"].bool,
  onContextMenu: _propTypes["default"].func,
  onDoubleClick: _propTypes["default"].func
};
XAxis.defaultProps = {
  showTicks: true,
  showTickLabel: true,
  showDomain: true,
  className: "react-stockcharts-x-axis",
  ticks: 10,
  outerTickSize: 0,
  fill: "none",
  stroke: "#000000",
  // x axis stroke color
  strokeWidth: 1,
  opacity: 1,
  // x axis opacity
  domainClassName: "react-stockcharts-axis-domain",
  innerTickSize: 5,
  tickPadding: 6,
  tickStroke: "#000000",
  // tick/grid stroke
  tickStrokeOpacity: 1,
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  fontSize: 12,
  fontWeight: 400,
  xZoomHeight: 25,
  zoomEnabled: true,
  getMouseDelta: function getMouseDelta(startXY, mouseXY) {
    return startXY[0] - mouseXY[0];
  }
};
XAxis.contextTypes = {
  chartConfig: _propTypes["default"].object.isRequired,
  xAxisZoom: _propTypes["default"].func.isRequired
};

function helper(props, context) {
  var axisAt = props.axisAt,
      xZoomHeight = props.xZoomHeight,
      orient = props.orient;
  var _context$chartConfig = context.chartConfig,
      width = _context$chartConfig.width,
      height = _context$chartConfig.height;
  var axisLocation;
  var x = 0,
      w = width,
      h = xZoomHeight;
  if (axisAt === "top") axisLocation = 0;else if (axisAt === "bottom") axisLocation = height;else if (axisAt === "middle") axisLocation = height / 2;else axisLocation = axisAt;
  var y = orient === "top" ? -xZoomHeight : 0;
  return {
    transform: [0, axisLocation],
    range: [0, width],
    getScale: getXScale,
    bg: {
      x: x,
      y: y,
      h: h,
      w: w
    }
  };
}

function getXScale(moreProps) {
  var scale = moreProps.xScale,
      width = moreProps.width;

  if (scale.invert) {
    var trueRange = [0, width];
    var trueDomain = trueRange.map(scale.invert);
    return scale.copy().domain(trueDomain).range(trueRange);
  }

  return scale;
}

var _default = XAxis;
exports["default"] = _default;
//# sourceMappingURL=XAxis.js.map