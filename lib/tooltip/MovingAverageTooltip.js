"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Format = require("d3-format");

var _displayValuesFor = _interopRequireDefault(require("./displayValuesFor"));

var _GenericChartComponent = _interopRequireDefault(require("../GenericChartComponent"));

var _ToolTipText = _interopRequireDefault(require("./ToolTipText"));

var _ToolTipTSpanLabel = _interopRequireDefault(require("./ToolTipTSpanLabel"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var SingleMAToolTip = /*#__PURE__*/function (_Component) {
  _inherits(SingleMAToolTip, _Component);

  var _super = _createSuper(SingleMAToolTip);

  function SingleMAToolTip(props) {
    var _this;

    _classCallCheck(this, SingleMAToolTip);

    _this = _super.call(this, props);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SingleMAToolTip, [{
    key: "handleClick",
    value: function handleClick(e) {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          forChart = _this$props.forChart,
          options = _this$props.options;
      onClick(_objectSpread({
        chartId: forChart
      }, options), e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          textFill = _this$props2.textFill,
          labelFill = _this$props2.labelFill;
      var translate = "translate(" + this.props.origin[0] + ", " + this.props.origin[1] + ")";
      return /*#__PURE__*/_react["default"].createElement("g", {
        transform: translate
      }, /*#__PURE__*/_react["default"].createElement("line", {
        x1: 0,
        y1: 2,
        x2: 0,
        y2: 28,
        stroke: this.props.color,
        strokeWidth: "4px"
      }), /*#__PURE__*/_react["default"].createElement(_ToolTipText["default"], {
        x: 5,
        y: 11,
        fontFamily: this.props.fontFamily,
        fontSize: this.props.fontSize
      }, /*#__PURE__*/_react["default"].createElement(_ToolTipTSpanLabel["default"], {
        fill: labelFill
      }, this.props.displayName), /*#__PURE__*/_react["default"].createElement("tspan", {
        x: "5",
        dy: "15",
        fill: textFill
      }, this.props.value)), /*#__PURE__*/_react["default"].createElement("rect", {
        x: 0,
        y: 0,
        width: 55,
        height: 30,
        onClick: this.handleClick,
        fill: "none",
        stroke: "none"
      }));
    }
  }]);

  return SingleMAToolTip;
}(_react.Component);

SingleMAToolTip.propTypes = {
  origin: _propTypes["default"].array.isRequired,
  color: _propTypes["default"].string.isRequired,
  displayName: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].string.isRequired,
  onClick: _propTypes["default"].func,
  fontFamily: _propTypes["default"].string,
  textFill: _propTypes["default"].string,
  labelFill: _propTypes["default"].string,
  fontSize: _propTypes["default"].number,
  forChart: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  options: _propTypes["default"].object.isRequired
};

var MovingAverageTooltip = /*#__PURE__*/function (_Component2) {
  _inherits(MovingAverageTooltip, _Component2);

  var _super2 = _createSuper(MovingAverageTooltip);

  function MovingAverageTooltip(props) {
    var _this2;

    _classCallCheck(this, MovingAverageTooltip);

    _this2 = _super2.call(this, props);
    _this2.renderSVG = _this2.renderSVG.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(MovingAverageTooltip, [{
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var displayValuesFor = this.props.displayValuesFor;
      var chartId = moreProps.chartId;
      var chartConfig = moreProps.chartConfig;
      var _this$props3 = this.props,
          className = _this$props3.className,
          onClick = _this$props3.onClick,
          width = _this$props3.width,
          fontFamily = _this$props3.fontFamily,
          fontSize = _this$props3.fontSize,
          textFill = _this$props3.textFill,
          labelFill = _this$props3.labelFill;
      var _this$props4 = this.props,
          originProp = _this$props4.origin,
          displayFormat = _this$props4.displayFormat,
          options = _this$props4.options;
      var height = moreProps.chartConfig.height;
      var currentItem = displayValuesFor(this.props, moreProps);
      var config = chartConfig;
      var origin = (0, _utils.functor)(originProp);

      var _origin = origin(width, height),
          _origin2 = _slicedToArray(_origin, 2),
          x = _origin2[0],
          y = _origin2[1];

      var _config$origin = _slicedToArray(config.origin, 2),
          ox = _config$origin[0],
          oy = _config$origin[1];

      return /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(".concat(ox + x, ", ").concat(oy + y, ")"),
        className: className
      }, options.map(function (each, idx) {
        var yValue = currentItem && each.yAccessor(currentItem);
        var tooltipLabel = "".concat(each.type, " (").concat(each.windowSize, ")");
        var yDisplayValue = yValue ? displayFormat(yValue) : "n/a";
        return /*#__PURE__*/_react["default"].createElement(SingleMAToolTip, {
          key: idx,
          origin: [width * idx, 0],
          color: each.stroke,
          displayName: tooltipLabel,
          value: yDisplayValue,
          options: each,
          forChart: chartId,
          onClick: onClick,
          fontFamily: fontFamily,
          fontSize: fontSize,
          textFill: textFill,
          labelFill: labelFill
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        clip: false,
        svgDraw: this.renderSVG,
        drawOn: ["mousemove"]
      });
    }
  }]);

  return MovingAverageTooltip;
}(_react.Component);

MovingAverageTooltip.propTypes = {
  className: _propTypes["default"].string,
  displayFormat: _propTypes["default"].func.isRequired,
  origin: _propTypes["default"].array.isRequired,
  displayValuesFor: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  textFill: _propTypes["default"].string,
  labelFill: _propTypes["default"].string,
  fontFamily: _propTypes["default"].string,
  fontSize: _propTypes["default"].number,
  width: _propTypes["default"].number,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    yAccessor: _propTypes["default"].func.isRequired,
    type: _propTypes["default"].string.isRequired,
    stroke: _propTypes["default"].string.isRequired,
    windowSize: _propTypes["default"].number.isRequired,
    echo: _propTypes["default"].any
  }))
};
MovingAverageTooltip.defaultProps = {
  className: "react-stockcharts-tooltip react-stockcharts-moving-average-tooltip",
  displayFormat: (0, _d3Format.format)(".2f"),
  displayValuesFor: _displayValuesFor["default"],
  origin: [0, 10],
  width: 65
};
var _default = MovingAverageTooltip;
exports["default"] = _default;
//# sourceMappingURL=MovingAverageTooltip.js.map