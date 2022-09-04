"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Path = require("d3-path");

var _d3Interpolate = require("d3-interpolate");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var ZoomButtons = /*#__PURE__*/function (_Component) {
  _inherits(ZoomButtons, _Component);

  var _super = _createSuper(ZoomButtons);

  function ZoomButtons(props) {
    var _this;

    _classCallCheck(this, ZoomButtons);

    _this = _super.call(this, props);
    _this.handleZoomOut = _this.handleZoomOut.bind(_assertThisInitialized(_this));
    _this.handleZoomIn = _this.handleZoomIn.bind(_assertThisInitialized(_this));
    _this.zoom = _this.zoom.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ZoomButtons, [{
    key: "zoom",
    value: function zoom(direction) {
      var _this2 = this;

      var _this$context = this.context,
          xAxisZoom = _this$context.xAxisZoom,
          xScale = _this$context.xScale,
          plotData = _this$context.plotData,
          xAccessor = _this$context.xAccessor;
      var cx = xScale(xAccessor((0, _utils.last)(plotData))); // mean(xScale.range());

      var zoomMultiplier = this.props.zoomMultiplier;
      var c = direction > 0 ? 1 * zoomMultiplier : 1 / zoomMultiplier;

      var _xScale$domain = xScale.domain(),
          _xScale$domain2 = _slicedToArray(_xScale$domain, 2),
          start = _xScale$domain2[0],
          end = _xScale$domain2[1];

      var _xScale$range$map$map = xScale.range().map(function (x) {
        return cx + (x - cx) * c;
      }).map(xScale.invert),
          _xScale$range$map$map2 = _slicedToArray(_xScale$range$map$map, 2),
          newStart = _xScale$range$map$map2[0],
          newEnd = _xScale$range$map$map2[1];

      var left = (0, _d3Interpolate.interpolateNumber)(start, newStart);
      var right = (0, _d3Interpolate.interpolateNumber)(end, newEnd);
      var foo = [0.25, 0.3, 0.5, 0.6, 0.75, 1].map(function (i) {
        return [left(i), right(i)];
      });
      this.interval = setInterval(function () {
        xAxisZoom(foo.shift());

        if (foo.length === 0) {
          clearInterval(_this2.interval);
          delete _this2.interval;
        }
      }, 10);
    }
  }, {
    key: "handleZoomOut",
    value: function handleZoomOut() {
      if (this.interval) return;
      this.zoom(1);
    }
  }, {
    key: "handleZoomIn",
    value: function handleZoomIn() {
      if (this.interval) return;
      this.zoom(-1);
    }
  }, {
    key: "render",
    value: function render() {
      var chartConfig = this.context.chartConfig;
      var width = chartConfig.width,
          height = chartConfig.height;
      var _this$props = this.props,
          size = _this$props.size,
          heightFromBase = _this$props.heightFromBase,
          rx = _this$props.rx,
          ry = _this$props.ry;
      var _this$props2 = this.props,
          stroke = _this$props2.stroke,
          strokeOpacity = _this$props2.strokeOpacity,
          fill = _this$props2.fill,
          strokeWidth = _this$props2.strokeWidth,
          fillOpacity = _this$props2.fillOpacity;
      var _this$props3 = this.props,
          textFill = _this$props3.textFill,
          textStrokeWidth = _this$props3.textStrokeWidth;
      var onReset = this.props.onReset;
      var centerX = Math.round(width / 2);
      var y = height - heightFromBase;

      var _size = _slicedToArray(size, 2),
          w = _size[0],
          h = _size[1];

      var hLength = 5;
      var wLength = 6;
      var textY = Math.round(y + h / 2);
      var resetX = centerX;
      var zoomOut = (0, _d3Path.path)();
      var zoomOutX = centerX - w - 2 * strokeWidth;
      zoomOut.moveTo(zoomOutX - wLength, textY);
      zoomOut.lineTo(zoomOutX + wLength, textY);
      zoomOut.closePath();
      var zoomIn = (0, _d3Path.path)();
      var zoomInX = centerX + w + 2 * strokeWidth;
      zoomIn.moveTo(zoomInX - wLength, textY);
      zoomIn.lineTo(zoomInX + wLength, textY);
      zoomIn.moveTo(zoomInX, textY - hLength);
      zoomIn.lineTo(zoomInX, textY + hLength); // zoomIn.closePath();

      return /*#__PURE__*/_react["default"].createElement("g", {
        className: "react-stockcharts-zoom-button"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        x: zoomOutX - w / 2,
        y: y,
        rx: rx,
        ry: ry,
        height: h,
        width: w,
        fill: fill,
        fillOpacity: fillOpacity,
        stroke: stroke,
        strokeOpacity: strokeOpacity,
        strokeWidth: strokeWidth
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: zoomOut.toString(),
        stroke: textFill,
        strokeWidth: textStrokeWidth
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: resetX - w / 2,
        y: y,
        rx: rx,
        ry: ry,
        height: h,
        width: w,
        fill: fill,
        fillOpacity: fillOpacity,
        stroke: stroke,
        strokeOpacity: strokeOpacity,
        strokeWidth: strokeWidth
      }), /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate (".concat(resetX, ", ").concat(y + h / 4, ") scale(.14)")
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M31 13C23.4 5.3 12.8.5 1.1.5c-23.3 0-42.3 19-42.3 42.5s18.9 42.5 42.3 42.5c13.8 0 26-6.6 33.7-16.9l-16.5-1.8C13.5 70.4 7.5 72.5 1 72.5c-16.2 0-29.3-13.2-29.3-29.4S-15.2 13.7 1 13.7c8.1 0 15.4 3.3 20.7 8.6l-10.9 11h32.5V.5L31 13z",
        fill: textFill
      })), /*#__PURE__*/_react["default"].createElement("rect", {
        x: zoomInX - w / 2,
        y: y,
        rx: rx,
        ry: ry,
        height: h,
        width: w,
        fill: fill,
        fillOpacity: fillOpacity,
        stroke: stroke,
        strokeOpacity: strokeOpacity,
        strokeWidth: strokeWidth
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: zoomIn.toString(),
        stroke: textFill,
        strokeWidth: textStrokeWidth
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        className: "react-stockcharts-enable-interaction out",
        onClick: this.handleZoomOut,
        x: zoomOutX - w / 2,
        y: y,
        rx: rx,
        ry: ry,
        height: h,
        width: w,
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        className: "react-stockcharts-enable-interaction reset",
        onClick: onReset,
        x: resetX - w / 2,
        y: y,
        rx: rx,
        ry: ry,
        height: h,
        width: w,
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        className: "react-stockcharts-enable-interaction in",
        onClick: this.handleZoomIn,
        x: zoomInX - w / 2,
        y: y,
        rx: rx,
        ry: ry,
        height: h,
        width: w,
        fill: "none"
      }));
    }
  }]);

  return ZoomButtons;
}(_react.Component);

ZoomButtons.propTypes = {
  zoomMultiplier: _propTypes["default"].number.isRequired,
  size: _propTypes["default"].array.isRequired,
  heightFromBase: _propTypes["default"].number.isRequired,
  rx: _propTypes["default"].number.isRequired,
  ry: _propTypes["default"].number.isRequired,
  stroke: _propTypes["default"].string.isRequired,
  strokeWidth: _propTypes["default"].number.isRequired,
  strokeOpacity: _propTypes["default"].number.isRequired,
  fill: _propTypes["default"].string.isRequired,
  fillOpacity: _propTypes["default"].number.isRequired,
  fontSize: _propTypes["default"].number.isRequired,
  textDy: _propTypes["default"].string.isRequired,
  textFill: _propTypes["default"].string.isRequired,
  textStrokeWidth: _propTypes["default"].number.isRequired,
  onReset: _propTypes["default"].func
};
ZoomButtons.defaultProps = {
  size: [30, 24],
  heightFromBase: 50,
  rx: 3,
  ry: 3,
  stroke: "#000000",
  strokeOpacity: 0.3,
  strokeWidth: 1,
  fill: "#D6D6D6",
  fillOpacity: 0.4,
  fontSize: 16,
  textDy: ".3em",
  textFill: "#000000",
  textStrokeWidth: 2,
  zoomMultiplier: 1.5,
  onReset: _utils.noop
};
ZoomButtons.contextTypes = {
  xScale: _propTypes["default"].func.isRequired,
  chartConfig: _propTypes["default"].object.isRequired,
  plotData: _propTypes["default"].array.isRequired,
  xAccessor: _propTypes["default"].func.isRequired,
  xAxisZoom: _propTypes["default"].func.isRequired
};
var _default = ZoomButtons;
exports["default"] = _default;
//# sourceMappingURL=ZoomButtons.js.map