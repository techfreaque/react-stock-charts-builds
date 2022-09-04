"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BarSeries = _interopRequireDefault(require("./BarSeries"));

var _LineSeries = _interopRequireDefault(require("./LineSeries"));

var _StraightLine = _interopRequireDefault(require("./StraightLine"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var MACDSeries = /*#__PURE__*/function (_Component) {
  _inherits(MACDSeries, _Component);

  var _super = _createSuper(MACDSeries);

  function MACDSeries(props) {
    var _this;

    _classCallCheck(this, MACDSeries);

    _this = _super.call(this, props);
    _this.yAccessorForMACD = _this.yAccessorForMACD.bind(_assertThisInitialized(_this));
    _this.yAccessorForSignal = _this.yAccessorForSignal.bind(_assertThisInitialized(_this));
    _this.yAccessorForDivergence = _this.yAccessorForDivergence.bind(_assertThisInitialized(_this));
    _this.yAccessorForDivergenceBase = _this.yAccessorForDivergenceBase.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MACDSeries, [{
    key: "yAccessorForMACD",
    value: function yAccessorForMACD(d) {
      var yAccessor = this.props.yAccessor;
      return yAccessor(d) && yAccessor(d).macd;
    }
  }, {
    key: "yAccessorForSignal",
    value: function yAccessorForSignal(d) {
      var yAccessor = this.props.yAccessor;
      return yAccessor(d) && yAccessor(d).signal;
    }
  }, {
    key: "yAccessorForDivergence",
    value: function yAccessorForDivergence(d) {
      var yAccessor = this.props.yAccessor;
      return yAccessor(d) && yAccessor(d).divergence;
    }
  }, {
    key: "yAccessorForDivergenceBase",
    value: function yAccessorForDivergenceBase(xScale, yScale
    /* , d */
    ) {
      return yScale(0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          opacity = _this$props.opacity,
          divergenceStroke = _this$props.divergenceStroke,
          widthRatio = _this$props.widthRatio,
          width = _this$props.width;
      var _this$props2 = this.props,
          stroke = _this$props2.stroke,
          fill = _this$props2.fill;
      var clip = this.props.clip;
      var _this$props3 = this.props,
          zeroLineStroke = _this$props3.zeroLineStroke,
          zeroLineOpacity = _this$props3.zeroLineOpacity;
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: className
      }, /*#__PURE__*/_react["default"].createElement(_BarSeries["default"], {
        baseAt: this.yAccessorForDivergenceBase,
        className: "macd-divergence",
        width: width,
        widthRatio: widthRatio,
        stroke: divergenceStroke,
        fill: fill.divergence,
        opacity: opacity,
        clip: clip,
        yAccessor: this.yAccessorForDivergence
      }), /*#__PURE__*/_react["default"].createElement(_LineSeries["default"], {
        yAccessor: this.yAccessorForMACD,
        stroke: stroke.macd,
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement(_LineSeries["default"], {
        yAccessor: this.yAccessorForSignal,
        stroke: stroke.signal,
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement(_StraightLine["default"], {
        stroke: zeroLineStroke,
        opacity: zeroLineOpacity,
        yValue: 0
      }));
    }
  }]);

  return MACDSeries;
}(_react.Component);

MACDSeries.propTypes = {
  className: _propTypes["default"].string,
  yAccessor: _propTypes["default"].func.isRequired,
  opacity: _propTypes["default"].number,
  divergenceStroke: _propTypes["default"].bool,
  zeroLineStroke: _propTypes["default"].string,
  zeroLineOpacity: _propTypes["default"].number,
  clip: _propTypes["default"].bool.isRequired,
  stroke: _propTypes["default"].shape({
    macd: _propTypes["default"].string.isRequired,
    signal: _propTypes["default"].string.isRequired
  }).isRequired,
  fill: _propTypes["default"].shape({
    divergence: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]).isRequired
  }).isRequired,
  widthRatio: _propTypes["default"].number,
  width: _BarSeries["default"].propTypes.width
};
MACDSeries.defaultProps = {
  className: "react-stockcharts-macd-series",
  zeroLineStroke: "#000000",
  zeroLineOpacity: 0.3,
  opacity: 0.6,
  divergenceStroke: false,
  clip: true,
  widthRatio: 0.5,
  width: _BarSeries["default"].defaultProps.width
};
var _default = MACDSeries;
exports["default"] = _default;
//# sourceMappingURL=MACDSeries.js.map