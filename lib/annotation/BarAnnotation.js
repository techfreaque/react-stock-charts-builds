"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.getArrowForTextIcon = getArrowForTextIcon;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var BarAnnotation = /*#__PURE__*/function (_Component) {
  _inherits(BarAnnotation, _Component);

  var _super = _createSuper(BarAnnotation);

  function BarAnnotation(props) {
    var _this;

    _classCallCheck(this, BarAnnotation);

    _this = _super.call(this, props);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BarAnnotation, [{
    key: "handleClick",
    value: function handleClick(e) {
      var onClick = this.props.onClick;

      if (onClick) {
        var _this$props = this.props,
            xScale = _this$props.xScale,
            yScale = _this$props.yScale,
            datum = _this$props.datum;
        onClick({
          xScale: xScale,
          yScale: yScale,
          datum: datum
        }, e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          stroke = _this$props2.stroke,
          opacity = _this$props2.opacity;
      var _this$props3 = this.props,
          xAccessor = _this$props3.xAccessor,
          xScale = _this$props3.xScale,
          yScale = _this$props3.yScale,
          path = _this$props3.path;
      var _this$props4 = this.props,
          text = _this$props4.text,
          textXOffset = _this$props4.textXOffset,
          textYOffset = _this$props4.textYOffset,
          textAnchor = _this$props4.textAnchor,
          fontFamily = _this$props4.fontFamily,
          fontSize = _this$props4.fontSize,
          textFill = _this$props4.textFill,
          textOpacity = _this$props4.textOpacity,
          textRotate = _this$props4.textRotate;

      var _helper = helper(this.props, xAccessor, xScale, yScale),
          x = _helper.x,
          y = _helper.y,
          fill = _helper.fill,
          tooltip = _helper.tooltip;

      var _this$props5 = this.props,
          textIcon = _this$props5.textIcon,
          textIconFontSize = _this$props5.textIconFontSize,
          textIconFill = _this$props5.textIconFill,
          textIconOpacity = _this$props5.textIconOpacity,
          textIconRotate = _this$props5.textIconRotate,
          textIconXOffset = _this$props5.textIconXOffset,
          textIconYOffset = _this$props5.textIconYOffset;
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: className,
        onClick: this.handleClick
      }, tooltip != null ? /*#__PURE__*/_react["default"].createElement("title", null, tooltip) : null, text != null ? /*#__PURE__*/_react["default"].createElement("text", {
        x: x,
        y: y,
        dx: textXOffset,
        dy: textYOffset,
        fontFamily: fontFamily,
        fontSize: fontSize,
        fill: textFill,
        opacity: textOpacity,
        transform: textRotate != null ? "rotate(".concat(textRotate, ", ").concat(x, ", ").concat(y, ")") : null,
        textAnchor: textAnchor
      }, text) : null, textIcon != null ? /*#__PURE__*/_react["default"].createElement("text", {
        x: x,
        y: y,
        dx: textIconXOffset,
        dy: textIconYOffset,
        fontSize: textIconFontSize,
        fill: textIconFill,
        opacity: textIconOpacity,
        transform: textIconRotate != null ? "rotate(".concat(textIconRotate, ", ").concat(x, ", ").concat(y, ")") : null,
        textAnchor: textAnchor
      }, textIcon) : null, path != null ? /*#__PURE__*/_react["default"].createElement("path", {
        d: path({
          x: x,
          y: y
        }),
        stroke: stroke,
        fill: fill,
        opacity: opacity
      }) : null);
    }
  }]);

  return BarAnnotation;
}(_react.Component);

function helper(props, xAccessor, xScale, yScale) {
  var x = props.x,
      y = props.y,
      datum = props.datum,
      fill = props.fill,
      tooltip = props.tooltip,
      plotData = props.plotData;
  var xFunc = (0, _utils.functor)(x);
  var yFunc = (0, _utils.functor)(y);
  var _ref = [xFunc({
    xScale: xScale,
    xAccessor: xAccessor,
    datum: datum,
    plotData: plotData
  }), yFunc({
    yScale: yScale,
    datum: datum,
    plotData: plotData
  })],
      xPos = _ref[0],
      yPos = _ref[1];
  return {
    x: xPos,
    y: yPos,
    fill: (0, _utils.functor)(fill)(datum),
    tooltip: (0, _utils.functor)(tooltip)(datum)
  };
}
/**
 * any unicode can be applied.
 * @param {any} type
 */


function getArrowForTextIcon(type) {
  var arrows = {
    simpleUp: "⬆",
    simpleDown: "⬇",
    fatUp: "▲",
    fatDown: "▼",
    lightUp: "↑",
    lightDown: "↓",
    dashedUp: "⇡",
    dashedDown: "⇣",
    dashedRight: "➟",
    fatRight: "➡",
    right: "➤"
  };
  return arrows[type];
}

BarAnnotation.propTypes = {
  className: _propTypes["default"].string,
  path: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  xAccessor: _propTypes["default"].func,
  xScale: _propTypes["default"].func,
  yScale: _propTypes["default"].func,
  datum: _propTypes["default"].object,
  stroke: _propTypes["default"].string,
  fill: _propTypes["default"].string,
  opacity: _propTypes["default"].number,
  text: _propTypes["default"].string,
  textAnchor: _propTypes["default"].string,
  fontFamily: _propTypes["default"].string,
  fontSize: _propTypes["default"].number,
  textOpacity: _propTypes["default"].number,
  textFill: _propTypes["default"].string,
  textRotate: _propTypes["default"].number,
  textXOffset: _propTypes["default"].number,
  textYOffset: _propTypes["default"].number,
  textIcon: _propTypes["default"].string,
  textIconFontSize: _propTypes["default"].number,
  textIconOpacity: _propTypes["default"].number,
  textIconFill: _propTypes["default"].string,
  textIconRotate: _propTypes["default"].number,
  textIconXOffset: _propTypes["default"].number,
  textIconYOffset: _propTypes["default"].number,
  textIconAnchor: _propTypes["default"].string
};
BarAnnotation.defaultProps = {
  className: "react-stockcharts-bar-annotation",
  opacity: 1,
  fill: "#000000",
  textAnchor: "middle",
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  fontSize: 10,
  textFill: "#000000",
  textOpacity: 1,
  textIconFill: "#000000",
  textIconFontSize: 10,
  x: function x(_ref2) {
    var xScale = _ref2.xScale,
        xAccessor = _ref2.xAccessor,
        datum = _ref2.datum;
    return xScale(xAccessor(datum));
  }
};
var _default = BarAnnotation;
exports["default"] = _default;
//# sourceMappingURL=BarAnnotation.js.map