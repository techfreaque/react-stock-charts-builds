"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LineSeries = _interopRequireDefault(require("./LineSeries"));

var _AreaOnlySeries = _interopRequireDefault(require("./AreaOnlySeries"));

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

var BollingerSeries = /*#__PURE__*/function (_Component) {
  _inherits(BollingerSeries, _Component);

  var _super = _createSuper(BollingerSeries);

  function BollingerSeries(props) {
    var _this;

    _classCallCheck(this, BollingerSeries);

    _this = _super.call(this, props);
    _this.yAccessorForTop = _this.yAccessorForTop.bind(_assertThisInitialized(_this));
    _this.yAccessorForMiddle = _this.yAccessorForMiddle.bind(_assertThisInitialized(_this));
    _this.yAccessorForBottom = _this.yAccessorForBottom.bind(_assertThisInitialized(_this));
    _this.yAccessorForScalledBottom = _this.yAccessorForScalledBottom.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BollingerSeries, [{
    key: "yAccessorForTop",
    value: function yAccessorForTop(d) {
      var yAccessor = this.props.yAccessor;
      return yAccessor(d) && yAccessor(d).top;
    }
  }, {
    key: "yAccessorForMiddle",
    value: function yAccessorForMiddle(d) {
      var yAccessor = this.props.yAccessor;
      return yAccessor(d) && yAccessor(d).middle;
    }
  }, {
    key: "yAccessorForBottom",
    value: function yAccessorForBottom(d) {
      var yAccessor = this.props.yAccessor;
      return yAccessor(d) && yAccessor(d).bottom;
    }
  }, {
    key: "yAccessorForScalledBottom",
    value: function yAccessorForScalledBottom(scale, d) {
      var yAccessor = this.props.yAccessor;
      return scale(yAccessor(d) && yAccessor(d).bottom);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          areaClassName = _this$props.areaClassName,
          className = _this$props.className,
          opacity = _this$props.opacity;
      var _this$props2 = this.props,
          stroke = _this$props2.stroke,
          fill = _this$props2.fill;
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: className
      }, /*#__PURE__*/_react["default"].createElement(_LineSeries["default"], {
        yAccessor: this.yAccessorForTop,
        stroke: stroke.top,
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement(_LineSeries["default"], {
        yAccessor: this.yAccessorForMiddle,
        stroke: stroke.middle,
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement(_LineSeries["default"], {
        yAccessor: this.yAccessorForBottom,
        stroke: stroke.bottom,
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement(_AreaOnlySeries["default"], {
        className: areaClassName,
        yAccessor: this.yAccessorForTop,
        base: this.yAccessorForScalledBottom,
        stroke: "none",
        fill: fill,
        opacity: opacity
      }));
    }
  }]);

  return BollingerSeries;
}(_react.Component);

BollingerSeries.propTypes = {
  yAccessor: _propTypes["default"].func.isRequired,
  className: _propTypes["default"].string,
  areaClassName: _propTypes["default"].string,
  opacity: _propTypes["default"].number,
  type: _propTypes["default"].string,
  stroke: _propTypes["default"].shape({
    top: _propTypes["default"].string.isRequired,
    middle: _propTypes["default"].string.isRequired,
    bottom: _propTypes["default"].string.isRequired
  }).isRequired,
  fill: _propTypes["default"].string.isRequired
};
BollingerSeries.defaultProps = {
  className: "react-stockcharts-bollinger-band-series",
  areaClassName: "react-stockcharts-bollinger-band-series-area",
  opacity: 0.2
};
var _default = BollingerSeries;
exports["default"] = _default;
//# sourceMappingURL=BollingerSeries.js.map