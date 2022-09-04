"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Format = require("d3-format");

var _d3TimeFormat = require("d3-time-format");

var _displayValuesFor = _interopRequireDefault(require("./displayValuesFor"));

var _GenericChartComponent = _interopRequireDefault(require("../GenericChartComponent"));

var _utils = require("../utils");

var _ToolTipText = _interopRequireDefault(require("./ToolTipText"));

var _ToolTipTSpanLabel = _interopRequireDefault(require("./ToolTipTSpanLabel"));

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

var OHLCTooltip = /*#__PURE__*/function (_Component) {
  _inherits(OHLCTooltip, _Component);

  var _super = _createSuper(OHLCTooltip);

  function OHLCTooltip(props) {
    var _this;

    _classCallCheck(this, OHLCTooltip);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OHLCTooltip, [{
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var displayValuesFor = this.props.displayValuesFor;
      var _this$props = this.props,
          xDisplayFormat = _this$props.xDisplayFormat,
          accessor = _this$props.accessor,
          volumeFormat = _this$props.volumeFormat,
          ohlcFormat = _this$props.ohlcFormat,
          percentFormat = _this$props.percentFormat,
          displayTexts = _this$props.displayTexts;
      var _moreProps$chartConfi = moreProps.chartConfig,
          width = _moreProps$chartConfi.width,
          height = _moreProps$chartConfi.height;
      var displayXAccessor = moreProps.displayXAccessor;
      var currentItem = displayValuesFor(this.props, moreProps);
      var displayDate, open, high, low, close, volume, percent;
      displayDate = open = high = low = close = volume = percent = displayTexts.na;

      if ((0, _utils.isDefined)(currentItem) && (0, _utils.isDefined)(accessor(currentItem))) {
        var item = accessor(currentItem);
        volume = (0, _utils.isDefined)(item.volume) ? volumeFormat(item.volume) : displayTexts.na;
        displayDate = xDisplayFormat(displayXAccessor(item));
        open = ohlcFormat(item.open);
        high = ohlcFormat(item.high);
        low = ohlcFormat(item.low);
        close = ohlcFormat(item.close);
        percent = percentFormat((item.close - item.open) / item.open);
      }

      var originProp = this.props.origin;
      var origin = (0, _utils.functor)(originProp);

      var _origin = origin(width, height),
          _origin2 = _slicedToArray(_origin, 2),
          x = _origin2[0],
          y = _origin2[1];

      var itemsToDisplay = {
        displayDate: displayDate,
        open: open,
        high: high,
        low: low,
        close: close,
        percent: percent,
        volume: volume,
        x: x,
        y: y
      };
      return this.props.children(this.props, moreProps, itemsToDisplay);
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

  return OHLCTooltip;
}(_react.Component);

OHLCTooltip.propTypes = {
  className: _propTypes["default"].string,
  accessor: _propTypes["default"].func,
  xDisplayFormat: _propTypes["default"].func,
  children: _propTypes["default"].func,
  volumeFormat: _propTypes["default"].func,
  percentFormat: _propTypes["default"].func,
  ohlcFormat: _propTypes["default"].func,
  origin: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].func]),
  fontFamily: _propTypes["default"].string,
  fontSize: _propTypes["default"].number,
  onClick: _propTypes["default"].func,
  displayValuesFor: _propTypes["default"].func,
  textFill: _propTypes["default"].string,
  labelFill: _propTypes["default"].string,
  displayTexts: _propTypes["default"].object
};
var displayTextsDefault = {
  d: "Date: ",
  o: " O: ",
  h: " H: ",
  l: " L: ",
  c: " C: ",
  v: " Vol: ",
  na: "n/a"
};
OHLCTooltip.defaultProps = {
  accessor: function accessor(d) {
    return {
      date: d.date,
      open: d.open,
      high: d.high,
      low: d.low,
      close: d.close,
      volume: d.volume
    };
  },
  xDisplayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d"),
  volumeFormat: (0, _d3Format.format)(".4s"),
  percentFormat: (0, _d3Format.format)(".2%"),
  ohlcFormat: (0, _d3Format.format)(".2f"),
  displayValuesFor: _displayValuesFor["default"],
  origin: [0, 0],
  children: defaultDisplay,
  displayTexts: displayTextsDefault
};

function defaultDisplay(props, moreProps, itemsToDisplay) {
  /* eslint-disable */
  var className = props.className,
      textFill = props.textFill,
      labelFill = props.labelFill,
      onClick = props.onClick,
      fontFamily = props.fontFamily,
      fontSize = props.fontSize,
      displayTexts = props.displayTexts;
  /* eslint-enable */

  var displayDate = itemsToDisplay.displayDate,
      open = itemsToDisplay.open,
      high = itemsToDisplay.high,
      low = itemsToDisplay.low,
      close = itemsToDisplay.close,
      volume = itemsToDisplay.volume,
      x = itemsToDisplay.x,
      y = itemsToDisplay.y;
  return /*#__PURE__*/_react["default"].createElement("g", {
    className: "react-stockcharts-tooltip-hover ".concat(className),
    transform: "translate(".concat(x, ", ").concat(y, ")"),
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_ToolTipText["default"], {
    x: 0,
    y: 0,
    fontFamily: fontFamily,
    fontSize: fontSize
  }, /*#__PURE__*/_react["default"].createElement(_ToolTipTSpanLabel["default"], {
    fill: labelFill,
    key: "label",
    x: 0,
    dy: "5"
  }, displayTexts.d), /*#__PURE__*/_react["default"].createElement("tspan", {
    key: "value",
    fill: textFill
  }, displayDate), /*#__PURE__*/_react["default"].createElement(_ToolTipTSpanLabel["default"], {
    fill: labelFill,
    key: "label_O"
  }, displayTexts.o), /*#__PURE__*/_react["default"].createElement("tspan", {
    key: "value_O",
    fill: textFill
  }, open), /*#__PURE__*/_react["default"].createElement(_ToolTipTSpanLabel["default"], {
    fill: labelFill,
    key: "label_H"
  }, displayTexts.h), /*#__PURE__*/_react["default"].createElement("tspan", {
    key: "value_H",
    fill: textFill
  }, high), /*#__PURE__*/_react["default"].createElement(_ToolTipTSpanLabel["default"], {
    fill: labelFill,
    key: "label_L"
  }, displayTexts.l), /*#__PURE__*/_react["default"].createElement("tspan", {
    key: "value_L",
    fill: textFill
  }, low), /*#__PURE__*/_react["default"].createElement(_ToolTipTSpanLabel["default"], {
    fill: labelFill,
    key: "label_C"
  }, displayTexts.c), /*#__PURE__*/_react["default"].createElement("tspan", {
    key: "value_C",
    fill: textFill
  }, close), /*#__PURE__*/_react["default"].createElement(_ToolTipTSpanLabel["default"], {
    fill: labelFill,
    key: "label_Vol"
  }, displayTexts.v), /*#__PURE__*/_react["default"].createElement("tspan", {
    key: "value_Vol",
    fill: textFill
  }, volume)));
}

var _default = OHLCTooltip;
exports["default"] = _default;
//# sourceMappingURL=OHLCTooltip.js.map