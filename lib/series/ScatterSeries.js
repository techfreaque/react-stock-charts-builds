"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Collection = require("d3-collection");

var _GenericChartComponent = _interopRequireDefault(require("../GenericChartComponent"));

var _GenericComponent = require("../GenericComponent");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var ScatterSeries = /*#__PURE__*/function (_Component) {
  _inherits(ScatterSeries, _Component);

  var _super = _createSuper(ScatterSeries);

  function ScatterSeries(props) {
    var _this;

    _classCallCheck(this, ScatterSeries);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ScatterSeries, [{
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var xAccessor = moreProps.xAccessor;
      var points = helper(this.props, moreProps, xAccessor);

      _drawOnCanvas(ctx, this.props, points);
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var _this$props = this.props,
          className = _this$props.className,
          markerProps = _this$props.markerProps;
      var xAccessor = moreProps.xAccessor;
      var points = helper(this.props, moreProps, xAccessor);
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: className
      }, points.map(function (point, idx) {
        var Marker = point.marker;
        return /*#__PURE__*/_react["default"].createElement(Marker, _extends({
          key: idx
        }, markerProps, {
          point: point
        }));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        svgDraw: this.renderSVG,
        canvasDraw: this.drawOnCanvas,
        canvasToDraw: _GenericComponent.getAxisCanvas,
        drawOn: ["pan"]
      });
    }
  }]);

  return ScatterSeries;
}(_react.Component);

ScatterSeries.propTypes = {
  className: _propTypes["default"].string,
  yAccessor: _propTypes["default"].func.isRequired,
  marker: _propTypes["default"].func,
  markerProvider: _propTypes["default"].func,
  markerProps: _propTypes["default"].object
};
ScatterSeries.defaultProps = {
  className: "react-stockcharts-scatter"
};

function helper(props, moreProps, xAccessor) {
  var yAccessor = props.yAccessor,
      markerProvider = props.markerProvider,
      markerProps = props.markerProps;
  var Marker = props.marker;
  var xScale = moreProps.xScale,
      yScale = moreProps.chartConfig.yScale,
      plotData = moreProps.plotData;
  if (!(markerProvider || Marker)) throw new Error("required prop, either marker or markerProvider missing");
  return plotData.map(function (d) {
    if (markerProvider) Marker = markerProvider(d);

    var mProps = _objectSpread(_objectSpread({}, Marker.defaultProps), markerProps);

    var fill = (0, _utils.functor)(mProps.fill);
    var stroke = (0, _utils.functor)(mProps.stroke);
    return {
      x: xScale(xAccessor(d)),
      y: yScale(yAccessor(d)),
      fill: (0, _utils.hexToRGBA)(fill(d), mProps.opacity),
      stroke: stroke(d),
      datum: d,
      marker: Marker
    };
  });
}

function _drawOnCanvas(ctx, props, points) {
  var markerProps = props.markerProps;
  var nest = (0, _d3Collection.nest)().key(function (d) {
    return d.fill;
  }).key(function (d) {
    return d.stroke;
  }).entries(points);
  nest.forEach(function (fillGroup) {
    var fillKey = fillGroup.key,
        fillValues = fillGroup.values;

    if (fillKey !== "none") {
      ctx.fillStyle = fillKey;
    }

    fillValues.forEach(function (strokeGroup) {
      // var { key: strokeKey, values: strokeValues } = strokeGroup;
      var strokeValues = strokeGroup.values;
      strokeValues.forEach(function (point) {
        var marker = point.marker;
        marker.drawOnCanvas(_objectSpread(_objectSpread(_objectSpread({}, marker.defaultProps), markerProps), {}, {
          fill: fillKey
        }), point, ctx);
      });
    });
  });
}

var _default = ScatterSeries;
exports["default"] = _default;
//# sourceMappingURL=ScatterSeries.js.map