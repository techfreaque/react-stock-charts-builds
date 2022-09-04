"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Axis = _interopRequireDefault(require("./Axis"));

var _excluded = ["zoomEnabled"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var YAxis = /*#__PURE__*/function (_Component) {
  _inherits(YAxis, _Component);

  var _super = _createSuper(YAxis);

  function YAxis(props, context) {
    var _this;

    _classCallCheck(this, YAxis);

    _this = _super.call(this, props, context);
    _this.axisZoomCallback = _this.axisZoomCallback.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(YAxis, [{
    key: "axisZoomCallback",
    value: function axisZoomCallback(newYDomain) {
      var _this$context = this.context,
          chartId = _this$context.chartId,
          yAxisZoom = _this$context.yAxisZoom;
      yAxisZoom(chartId, newYDomain);
    }
  }, {
    key: "render",
    value: function render() {
      var _helper = helper(this.props, this.context),
          zoomEnabled = _helper.zoomEnabled,
          moreProps = _objectWithoutProperties(_helper, _excluded);

      return /*#__PURE__*/_react["default"].createElement(_Axis["default"], _extends({}, this.props, moreProps, {
        zoomEnabled: this.props.zoomEnabled && zoomEnabled,
        edgeClip: true,
        axisZoomCallback: this.axisZoomCallback,
        zoomCursorClassName: "react-stockcharts-ns-resize-cursor"
      }));
    }
  }]);

  return YAxis;
}(_react.Component);

YAxis.propTypes = {
  axisAt: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(["left", "right", "middle"]), _propTypes["default"].number]).isRequired,
  orient: _propTypes["default"].oneOf(["left", "right"]).isRequired,
  innerTickSize: _propTypes["default"].number,
  outerTickSize: _propTypes["default"].number,
  tickFormat: _propTypes["default"].func,
  tickPadding: _propTypes["default"].number,
  tickSize: _propTypes["default"].number,
  ticks: _propTypes["default"].number,
  yZoomWidth: _propTypes["default"].number,
  tickValues: _propTypes["default"].array,
  showTicks: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  zoomEnabled: _propTypes["default"].bool,
  onContextMenu: _propTypes["default"].func,
  onDoubleClick: _propTypes["default"].func
};
YAxis.defaultProps = {
  showTicks: true,
  showTickLabel: true,
  showDomain: true,
  className: "react-stockcharts-y-axis",
  ticks: 10,
  outerTickSize: 0,
  domainClassName: "react-stockcharts-axis-domain",
  fill: "none",
  stroke: "#FFFFFF",
  strokeWidth: 1,
  opacity: 1,
  innerTickSize: 5,
  tickPadding: 6,
  tickStroke: "#000000",
  tickStrokeOpacity: 1,
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  fontSize: 12,
  fontWeight: 400,
  yZoomWidth: 40,
  zoomEnabled: true,
  getMouseDelta: function getMouseDelta(startXY, mouseXY) {
    return startXY[1] - mouseXY[1];
  }
};
YAxis.contextTypes = {
  yAxisZoom: _propTypes["default"].func.isRequired,
  chartId: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  chartConfig: _propTypes["default"].object.isRequired
};

function helper(props, context) {
  var axisAt = props.axisAt,
      yZoomWidth = props.yZoomWidth,
      orient = props.orient;
  var _context$chartConfig = context.chartConfig,
      width = _context$chartConfig.width,
      height = _context$chartConfig.height;
  var axisLocation;
  var y = 0,
      w = yZoomWidth,
      h = height;

  if (axisAt === "left") {
    axisLocation = 0;
  } else if (axisAt === "right") {
    axisLocation = width;
  } else if (axisAt === "middle") {
    axisLocation = width / 2;
  } else {
    axisLocation = axisAt;
  }

  var x = orient === "left" ? -yZoomWidth : 0;
  return {
    transform: [axisLocation, 0],
    range: [0, height],
    getScale: getYScale,
    bg: {
      x: x,
      y: y,
      h: h,
      w: w
    },
    zoomEnabled: context.chartConfig.yPan
  };
}

function getYScale(moreProps) {
  var _moreProps$chartConfi = moreProps.chartConfig,
      scale = _moreProps$chartConfi.yScale,
      flipYScale = _moreProps$chartConfi.flipYScale,
      height = _moreProps$chartConfi.height;

  if (scale.invert) {
    var trueRange = flipYScale ? [0, height] : [height, 0];
    var trueDomain = trueRange.map(scale.invert);
    return scale.copy().domain(trueDomain).range(trueRange);
  }

  return scale;
}

var _default = YAxis;
exports["default"] = _default;
//# sourceMappingURL=YAxis.js.map