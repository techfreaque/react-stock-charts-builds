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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var VALID_LAYOUTS = ["horizontal", "horizontalRows", "horizontalInline", "vertical", "verticalRows"];

var SingleTooltip = /*#__PURE__*/function (_Component) {
  _inherits(SingleTooltip, _Component);

  var _super = _createSuper(SingleTooltip);

  function SingleTooltip(props) {
    var _this;

    _classCallCheck(this, SingleTooltip);

    _this = _super.call(this, props);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SingleTooltip, [{
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
    /**
     * Renders the value next to the label.
     */

  }, {
    key: "renderValueNextToLabel",
    value: function renderValueNextToLabel() {
      var _this$props2 = this.props,
          origin = _this$props2.origin,
          yLabel = _this$props2.yLabel,
          yValue = _this$props2.yValue,
          labelFill = _this$props2.labelFill,
          valueFill = _this$props2.valueFill,
          withShape = _this$props2.withShape,
          fontSize = _this$props2.fontSize,
          fontFamily = _this$props2.fontFamily;
      return /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(".concat(origin[0], ", ").concat(origin[1], ")"),
        onClick: this.handleClick
      }, withShape ? /*#__PURE__*/_react["default"].createElement("rect", {
        x: "0",
        y: "-6",
        width: "6",
        height: "6",
        fill: valueFill
      }) : null, /*#__PURE__*/_react["default"].createElement(_ToolTipText["default"], {
        x: withShape ? 8 : 0,
        y: 0,
        fontFamily: fontFamily,
        fontSize: fontSize
      }, /*#__PURE__*/_react["default"].createElement(_ToolTipTSpanLabel["default"], {
        fill: labelFill
      }, yLabel, ": "), /*#__PURE__*/_react["default"].createElement("tspan", {
        fill: valueFill
      }, yValue)));
    }
    /**
     * Renders the value beneath the label.
     */

  }, {
    key: "renderValueBeneathToLabel",
    value: function renderValueBeneathToLabel() {
      var _this$props3 = this.props,
          origin = _this$props3.origin,
          yLabel = _this$props3.yLabel,
          yValue = _this$props3.yValue,
          labelFill = _this$props3.labelFill,
          valueFill = _this$props3.valueFill,
          withShape = _this$props3.withShape,
          fontSize = _this$props3.fontSize,
          fontFamily = _this$props3.fontFamily;
      return /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(".concat(origin[0], ", ").concat(origin[1], ")"),
        onClick: this.handleClick
      }, withShape ? /*#__PURE__*/_react["default"].createElement("line", {
        x1: 0,
        y1: 2,
        x2: 0,
        y2: 28,
        stroke: valueFill,
        strokeWidth: "4px"
      }) : null, /*#__PURE__*/_react["default"].createElement(_ToolTipText["default"], {
        x: 5,
        y: 11,
        fontFamily: fontFamily,
        fontSize: fontSize
      }, /*#__PURE__*/_react["default"].createElement(_ToolTipTSpanLabel["default"], {
        fill: labelFill
      }, yLabel), /*#__PURE__*/_react["default"].createElement("tspan", {
        x: "5",
        dy: "15",
        fill: valueFill
      }, yValue)));
    }
    /**
     * Renders the value next to the label.
     * The parent component must have a "text"-element.
     */

  }, {
    key: "renderInline",
    value: function renderInline() {
      var _this$props4 = this.props,
          yLabel = _this$props4.yLabel,
          yValue = _this$props4.yValue,
          labelFill = _this$props4.labelFill,
          valueFill = _this$props4.valueFill,
          fontSize = _this$props4.fontSize,
          fontFamily = _this$props4.fontFamily;
      return /*#__PURE__*/_react["default"].createElement("tspan", {
        onClick: this.handleClick,
        fontFamily: fontFamily,
        fontSize: fontSize
      }, /*#__PURE__*/_react["default"].createElement(_ToolTipTSpanLabel["default"], {
        fill: labelFill
      }, yLabel, ":\xA0"), /*#__PURE__*/_react["default"].createElement("tspan", {
        fill: valueFill
      }, yValue, "\xA0\xA0"));
    }
  }, {
    key: "render",
    value: function render() {
      var layout = this.props.layout;
      var comp = null;

      switch (layout) {
        case "horizontal":
          comp = this.renderValueNextToLabel();
          break;

        case "horizontalRows":
          comp = this.renderValueBeneathToLabel();
          break;

        case "horizontalInline":
          comp = this.renderInline();
          break;

        case "vertical":
          comp = this.renderValueNextToLabel();
          break;

        case "verticalRows":
          comp = this.renderValueBeneathToLabel();
          break;

        default:
          comp = this.renderValueNextToLabel();
      }

      return comp;
    }
  }]);

  return SingleTooltip;
}(_react.Component);

SingleTooltip.propTypes = {
  origin: _propTypes["default"].array.isRequired,
  yLabel: _propTypes["default"].string.isRequired,
  yValue: _propTypes["default"].string.isRequired,
  onClick: _propTypes["default"].func,
  fontFamily: _propTypes["default"].string,
  labelFill: _propTypes["default"].string.isRequired,
  valueFill: _propTypes["default"].string.isRequired,
  fontSize: _propTypes["default"].number,
  withShape: _propTypes["default"].bool,
  forChart: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  options: _propTypes["default"].object.isRequired,
  layout: _propTypes["default"].oneOf(VALID_LAYOUTS).isRequired
};
SingleTooltip.defaultProps = {
  labelFill: "#4682B4",
  valueFill: "#000000",
  withShape: false
};

var GroupTooltip = /*#__PURE__*/function (_Component2) {
  _inherits(GroupTooltip, _Component2);

  var _super2 = _createSuper(GroupTooltip);

  function GroupTooltip(props) {
    var _this2;

    _classCallCheck(this, GroupTooltip);

    _this2 = _super2.call(this, props);
    _this2.renderSVG = _this2.renderSVG.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(GroupTooltip, [{
    key: "getPosition",
    value: function getPosition(moreProps) {
      var position = this.props.position;
      var _moreProps$chartConfi = moreProps.chartConfig,
          height = _moreProps$chartConfi.height,
          width = _moreProps$chartConfi.width;
      var dx = 20;
      var dy = 40;
      var textAnchor = null;
      var xyPos = null;

      if (position !== undefined) {
        switch (position) {
          case "topRight":
            xyPos = [width - dx, null];
            textAnchor = "end";
            break;

          case "bottomLeft":
            xyPos = [null, height - dy];
            break;

          case "bottomRight":
            xyPos = [width - dx, height - dy];
            textAnchor = "end";
            break;

          default:
            xyPos = [null, null];
        }
      } else {
        xyPos = [null, null];
      }

      return {
        xyPos: xyPos,
        textAnchor: textAnchor
      };
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var displayValuesFor = this.props.displayValuesFor;
      var chartId = moreProps.chartId;
      var _this$props5 = this.props,
          className = _this$props5.className,
          onClick = _this$props5.onClick,
          width = _this$props5.width,
          verticalSize = _this$props5.verticalSize,
          fontFamily = _this$props5.fontFamily,
          fontSize = _this$props5.fontSize,
          layout = _this$props5.layout;
      var _this$props6 = this.props,
          origin = _this$props6.origin,
          displayFormat = _this$props6.displayFormat,
          options = _this$props6.options;
      var currentItem = displayValuesFor(this.props, moreProps);

      var _this$getPosition = this.getPosition(moreProps),
          xyPos = _this$getPosition.xyPos,
          textAnchor = _this$getPosition.textAnchor;

      var xPos = xyPos != null && xyPos[0] != null ? xyPos[0] : origin[0];
      var yPos = xyPos != null && xyPos[1] != null ? xyPos[1] : origin[1];
      var singleTooltip = options.map(function (each, idx) {
        var yValue = currentItem && each.yAccessor(currentItem);
        var yDisplayValue = yValue ? displayFormat(yValue) : "n/a";

        var orig = function orig() {
          if (layout === "horizontal" || layout === "horizontalRows") {
            return [width * idx, 0];
          }

          if (layout === "vertical") {
            return [0, verticalSize * idx];
          }

          if (layout === "verticalRows") {
            return [0, verticalSize * 2.3 * idx];
          }

          return [0, 0];
        };

        return /*#__PURE__*/_react["default"].createElement(SingleTooltip, {
          key: idx,
          layout: layout,
          origin: orig(),
          yLabel: each.yLabel,
          yValue: yDisplayValue,
          options: each,
          forChart: chartId,
          onClick: onClick,
          fontFamily: fontFamily,
          fontSize: fontSize,
          labelFill: each.labelFill,
          valueFill: each.valueFill,
          withShape: each.withShape
        });
      });
      return /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(".concat(xPos, ", ").concat(yPos, ")"),
        className: className,
        textAnchor: textAnchor
      }, layout === "horizontalInline" ? /*#__PURE__*/_react["default"].createElement(_ToolTipText["default"], {
        x: 0,
        y: 0,
        fontFamily: fontFamily,
        fontSize: fontSize
      }, singleTooltip) : singleTooltip);
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

  return GroupTooltip;
}(_react.Component);

GroupTooltip.propTypes = {
  className: _propTypes["default"].string,
  layout: _propTypes["default"].oneOf(VALID_LAYOUTS).isRequired,
  position: _propTypes["default"].oneOf(["topRight", "bottomLeft", "bottomRight"]),
  displayFormat: _propTypes["default"].func.isRequired,
  origin: _propTypes["default"].array.isRequired,
  displayValuesFor: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  fontFamily: _propTypes["default"].string,
  fontSize: _propTypes["default"].number,
  width: _propTypes["default"].number,
  // "width" only be used, if layout is "horizontal" or "horizontalRows".
  verticalSize: _propTypes["default"].number,
  // "verticalSize" only be used, if layout is "vertical", "verticalRows".
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    yLabel: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]).isRequired,
    yAccessor: _propTypes["default"].func.isRequired,
    labelFill: _propTypes["default"].string,
    valueFill: _propTypes["default"].string,
    withShape: _propTypes["default"].bool // "withShape" is ignored, if layout is "horizontalInline" or "vertical".

  }))
};
GroupTooltip.defaultProps = {
  className: "react-stockcharts-tooltip react-stockcharts-group-tooltip",
  layout: "horizontal",
  displayFormat: (0, _d3Format.format)(".2f"),
  displayValuesFor: _displayValuesFor["default"],
  origin: [0, 0],
  width: 60,
  verticalSize: 13
};
var _default = GroupTooltip;
exports["default"] = _default;
//# sourceMappingURL=GroupTooltip.js.map