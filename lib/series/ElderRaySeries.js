"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _OverlayBarSeries = _interopRequireDefault(require("./OverlayBarSeries"));

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

var ElderRaySeries = /*#__PURE__*/function (_Component) {
  _inherits(ElderRaySeries, _Component);

  var _super = _createSuper(ElderRaySeries);

  function ElderRaySeries(props) {
    var _this;

    _classCallCheck(this, ElderRaySeries);

    _this = _super.call(this, props);
    _this.fillForEachBar = _this.fillForEachBar.bind(_assertThisInitialized(_this));
    _this.yAccessorTop = _this.yAccessorTop.bind(_assertThisInitialized(_this));
    _this.yAccessorBullTop = _this.yAccessorBullTop.bind(_assertThisInitialized(_this));
    _this.yAccessorBearTop = _this.yAccessorBearTop.bind(_assertThisInitialized(_this));
    _this.yAccessorBullBottom = _this.yAccessorBullBottom.bind(_assertThisInitialized(_this));
    _this.yAccessorBearBottom = _this.yAccessorBearBottom.bind(_assertThisInitialized(_this));
    _this.yAccessorForBarBase = _this.yAccessorForBarBase.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ElderRaySeries, [{
    key: "yAccessorTop",
    value: function yAccessorTop(d) {
      var yAccessor = this.props.yAccessor;
      return yAccessor(d) && Math.max(yAccessor(d).bullPower, 0);
    }
  }, {
    key: "yAccessorBullTop",
    value: function yAccessorBullTop(d) {
      var yAccessor = this.props.yAccessor;
      return yAccessor(d) && (yAccessor(d).bullPower > 0 ? yAccessor(d).bullPower : undefined);
    }
  }, {
    key: "yAccessorBearTop",
    value: function yAccessorBearTop(d) {
      var yAccessor = this.props.yAccessor;
      return yAccessor(d) && (yAccessor(d).bearPower > 0 ? yAccessor(d).bearPower : undefined);
    }
  }, {
    key: "yAccessorBullBottom",
    value: function yAccessorBullBottom(d) {
      var yAccessor = this.props.yAccessor;
      return yAccessor(d) && (yAccessor(d).bullPower < 0 ? 0 : undefined);
    }
  }, {
    key: "yAccessorBearBottom",
    value: function yAccessorBearBottom(d) {
      var yAccessor = this.props.yAccessor;
      return yAccessor(d) && (yAccessor(d).bullPower < 0 || yAccessor(d).bullPower * yAccessor(d).bearPower < 0 // bullPower is +ve and bearPower is -ve
      ? Math.min(0, yAccessor(d).bullPower) : undefined);
    }
  }, {
    key: "yAccessorForBarBase",
    value: function yAccessorForBarBase(xScale, yScale, d) {
      var yAccessor = this.props.yAccessor;
      var y = yAccessor(d) && Math.min(yAccessor(d).bearPower, 0);
      return yScale(y);
    }
  }, {
    key: "fillForEachBar",
    value: function fillForEachBar(d, yAccessorNumber) {
      var _this$props = this.props,
          bullPowerFill = _this$props.bullPowerFill,
          bearPowerFill = _this$props.bearPowerFill;
      return yAccessorNumber % 2 === 0 ? bullPowerFill : bearPowerFill;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          opacity = _this$props2.opacity,
          stroke = _this$props2.stroke,
          straightLineStroke = _this$props2.straightLineStroke,
          straightLineOpacity = _this$props2.straightLineOpacity,
          widthRatio = _this$props2.widthRatio;
      var clip = this.props.clip;
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: className
      }, /*#__PURE__*/_react["default"].createElement(_OverlayBarSeries["default"], {
        baseAt: this.yAccessorForBarBase,
        className: "react-stockcharts-elderray-bar",
        stroke: stroke,
        fill: this.fillForEachBar,
        opacity: opacity,
        widthRatio: widthRatio,
        clip: clip,
        yAccessor: [this.yAccessorBullTop, this.yAccessorBearTop, this.yAccessorBullBottom, this.yAccessorBearBottom]
      }), /*#__PURE__*/_react["default"].createElement(_StraightLine["default"], {
        className: "react-stockcharts-elderray-straight-line",
        yValue: 0,
        stroke: straightLineStroke,
        opacity: straightLineOpacity
      }));
    }
  }]);

  return ElderRaySeries;
}(_react.Component);

ElderRaySeries.propTypes = {
  className: _propTypes["default"].string,
  yAccessor: _propTypes["default"].func,
  opacity: _propTypes["default"].number,
  stroke: _propTypes["default"].bool,
  bullPowerFill: _propTypes["default"].string,
  bearPowerFill: _propTypes["default"].string,
  straightLineStroke: _propTypes["default"].string,
  straightLineOpacity: _propTypes["default"].number,
  widthRatio: _propTypes["default"].number,
  clip: _propTypes["default"].bool.isRequired
};
ElderRaySeries.defaultProps = {
  className: "react-stockcharts-elderray-series",
  straightLineStroke: "#000000",
  straightLineOpacity: 0.3,
  opacity: 0.5,
  stroke: true,
  bullPowerFill: "#6BA583",
  bearPowerFill: "#FF0000",
  widthRatio: 0.8,
  clip: true
};
var _default = ElderRaySeries;
exports["default"] = _default;
//# sourceMappingURL=ElderRaySeries.js.map