"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LineSeries = _interopRequireDefault(require("./LineSeries"));

var _StraightLine = _interopRequireDefault(require("./StraightLine"));

var _SVGComponent = _interopRequireDefault(require("./SVGComponent"));

var _utils = require("../utils");

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

var RSISeries = /*#__PURE__*/function (_Component) {
  _inherits(RSISeries, _Component);

  var _super = _createSuper(RSISeries);

  function RSISeries(props) {
    var _this;

    _classCallCheck(this, RSISeries);

    _this = _super.call(this, props);
    _this.renderClip = _this.renderClip.bind(_assertThisInitialized(_this));
    _this.topAndBottomClip = _this.topAndBottomClip.bind(_assertThisInitialized(_this));
    _this.mainClip = _this.mainClip.bind(_assertThisInitialized(_this));
    var id1 = String(Math.round(Math.random() * 10000 * 10000));
    _this.clipPathId1 = "rsi-clip-".concat(id1);
    var id2 = String(Math.round(Math.random() * 10000 * 10000));
    _this.clipPathId2 = "rsi-clip-".concat(id2);
    return _this;
  }

  _createClass(RSISeries, [{
    key: "topAndBottomClip",
    value: function topAndBottomClip(ctx, moreProps) {
      var chartConfig = moreProps.chartConfig;
      var _this$props = this.props,
          overSold = _this$props.overSold,
          overBought = _this$props.overBought;
      var yScale = chartConfig.yScale,
          width = chartConfig.width;
      ctx.beginPath();
      ctx.rect(0, yScale(overSold), width, yScale(overBought) - yScale(overSold));
      ctx.clip();
    }
  }, {
    key: "mainClip",
    value: function mainClip(ctx, moreProps) {
      var chartConfig = moreProps.chartConfig;
      var _this$props2 = this.props,
          overSold = _this$props2.overSold,
          overBought = _this$props2.overBought;
      var yScale = chartConfig.yScale,
          width = chartConfig.width,
          height = chartConfig.height;
      ctx.beginPath();
      ctx.rect(0, 0, width, yScale(overSold));
      ctx.rect(0, yScale(overBought), width, height - yScale(overBought));
      ctx.clip();
    }
  }, {
    key: "renderClip",
    value: function renderClip(moreProps) {
      var chartConfig = moreProps.chartConfig;
      var _this$props3 = this.props,
          overSold = _this$props3.overSold,
          overBought = _this$props3.overBought;
      var yScale = chartConfig.yScale,
          width = chartConfig.width,
          height = chartConfig.height;
      return /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("clipPath", {
        id: this.clipPathId1
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        x: 0,
        y: yScale(overSold),
        width: width,
        height: yScale(overBought) - yScale(overSold)
      })), /*#__PURE__*/_react["default"].createElement("clipPath", {
        id: this.clipPathId2
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        x: 0,
        y: 0,
        width: width,
        height: yScale(overSold)
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: 0,
        y: yScale(overBought),
        width: width,
        height: height - yScale(overBought)
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          className = _this$props4.className,
          stroke = _this$props4.stroke,
          opacity = _this$props4.opacity,
          strokeDasharray = _this$props4.strokeDasharray,
          strokeWidth = _this$props4.strokeWidth;
      var yAccessor = this.props.yAccessor;
      var _this$props5 = this.props,
          overSold = _this$props5.overSold,
          middle = _this$props5.middle,
          overBought = _this$props5.overBought;
      var style1 = {
        "clipPath": "url(#".concat(this.clipPathId1, ")")
      };
      var style2 = {
        "clipPath": "url(#".concat(this.clipPathId2, ")")
      };
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: className
      }, /*#__PURE__*/_react["default"].createElement(_SVGComponent["default"], null, this.renderClip), /*#__PURE__*/_react["default"].createElement(_StraightLine["default"], {
        stroke: stroke.top,
        opacity: opacity.top,
        yValue: overSold,
        strokeDasharray: strokeDasharray.top,
        strokeWidth: strokeWidth.top
      }), /*#__PURE__*/_react["default"].createElement(_StraightLine["default"], {
        stroke: stroke.middle,
        opacity: opacity.middle,
        yValue: middle,
        strokeDasharray: strokeDasharray.middle,
        strokeWidth: strokeWidth.middle
      }), /*#__PURE__*/_react["default"].createElement(_StraightLine["default"], {
        stroke: stroke.bottom,
        opacity: opacity.bottom,
        yValue: overBought,
        strokeDasharray: strokeDasharray.bottom,
        strokeWidth: strokeWidth.bottom
      }), /*#__PURE__*/_react["default"].createElement(_LineSeries["default"], {
        style: style1,
        canvasClip: this.topAndBottomClip,
        className: className,
        yAccessor: yAccessor,
        stroke: stroke.insideThreshold || stroke.line,
        strokeWidth: strokeWidth.insideThreshold,
        strokeDasharray: strokeDasharray.line
      }), /*#__PURE__*/_react["default"].createElement(_LineSeries["default"], {
        style: style2,
        canvasClip: this.mainClip
        /* baseAt={yScale => yScale(middle)} */
        ,
        className: className,
        yAccessor: yAccessor,
        stroke: stroke.outsideThreshold || stroke.line,
        strokeWidth: strokeWidth.outsideThreshold,
        strokeDasharray: strokeDasharray.line
        /* fillRule={stroke.outsideThreshold || stroke.line} */

      }));
    }
  }]);

  return RSISeries;
}(_react.Component);

RSISeries.propTypes = {
  className: _propTypes["default"].string,
  yAccessor: _propTypes["default"].func.isRequired,
  stroke: _propTypes["default"].shape({
    top: _propTypes["default"].string.isRequired,
    middle: _propTypes["default"].string.isRequired,
    bottom: _propTypes["default"].string.isRequired,
    outsideThreshold: _propTypes["default"].string.isRequired,
    insideThreshold: _propTypes["default"].string.isRequired,
    line: _propTypes["default"].string.isRequired
  }).isRequired,
  opacity: _propTypes["default"].shape({
    top: _propTypes["default"].number.isRequired,
    middle: _propTypes["default"].number.isRequired,
    bottom: _propTypes["default"].number.isRequired
  }).isRequired,
  strokeDasharray: _propTypes["default"].shape({
    line: _propTypes["default"].oneOf(_utils.strokeDashTypes),
    top: _propTypes["default"].oneOf(_utils.strokeDashTypes),
    middle: _propTypes["default"].oneOf(_utils.strokeDashTypes),
    bottom: _propTypes["default"].oneOf(_utils.strokeDashTypes)
  }).isRequired,
  strokeWidth: _propTypes["default"].shape({
    outsideThreshold: _propTypes["default"].number.isRequired,
    insideThreshold: _propTypes["default"].number.isRequired,
    top: _propTypes["default"].number.isRequired,
    middle: _propTypes["default"].number.isRequired,
    bottom: _propTypes["default"].number.isRequired
  }).isRequired,
  overSold: _propTypes["default"].number.isRequired,
  middle: _propTypes["default"].number.isRequired,
  overBought: _propTypes["default"].number.isRequired
};
RSISeries.defaultProps = {
  className: "react-stockcharts-rsi-series",
  stroke: {
    line: "#000000",
    top: "#B8C2CC",
    middle: "#8795A1",
    bottom: "#B8C2CC",
    outsideThreshold: "#b300b3",
    insideThreshold: "#ffccff"
  },
  opacity: {
    top: 1,
    middle: 1,
    bottom: 1
  },
  strokeDasharray: {
    line: "Solid",
    top: "ShortDash",
    middle: "ShortDash",
    bottom: "ShortDash"
  },
  strokeWidth: {
    outsideThreshold: 1,
    insideThreshold: 1,
    top: 1,
    middle: 1,
    bottom: 1
  },
  overSold: 70,
  middle: 50,
  overBought: 30
};
var _default = RSISeries;
exports["default"] = _default;
//# sourceMappingURL=RSISeries.js.map