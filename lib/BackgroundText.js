"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PureComponent2 = _interopRequireDefault(require("./utils/PureComponent"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var BackgroundText = /*#__PURE__*/function (_PureComponent) {
  _inherits(BackgroundText, _PureComponent);

  var _super = _createSuper(BackgroundText);

  function BackgroundText() {
    _classCallCheck(this, BackgroundText);

    return _super.apply(this, arguments);
  }

  _createClass(BackgroundText, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.context.chartCanvasType !== "svg" && (0, _utils.isDefined)(this.context.getCanvasContexts)) {
        var contexts = this.context.getCanvasContexts();
        if (contexts) BackgroundText.drawOnCanvas(contexts.bg, this.props, this.context, this.props.children);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.componentDidMount();
    }
  }, {
    key: "render",
    value: function render() {
      var chartCanvasType = this.context.chartCanvasType;
      if (chartCanvasType !== "svg") return null;
      var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y,
          fill = _this$props.fill,
          opacity = _this$props.opacity,
          stroke = _this$props.stroke,
          strokeOpacity = _this$props.strokeOpacity,
          fontFamily = _this$props.fontFamily,
          fontSize = _this$props.fontSize,
          textAnchor = _this$props.textAnchor;
      var props = {
        x: x,
        y: y,
        fill: fill,
        opacity: opacity,
        stroke: stroke,
        strokeOpacity: strokeOpacity,
        fontFamily: fontFamily,
        fontSize: fontSize,
        textAnchor: textAnchor
      };
      return /*#__PURE__*/_react["default"].createElement("text", props, "this.props.children(interval)");
    }
  }]);

  return BackgroundText;
}(_PureComponent2["default"]);

BackgroundText.drawOnCanvas = function (ctx, props, _ref, getText) {
  var interval = _ref.interval;
  ctx.clearRect(-1, -1, ctx.canvas.width + 2, ctx.canvas.height + 2);
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.translate(0.5, 0.5);
  var x = props.x,
      y = props.y,
      fill = props.fill,
      opacity = props.opacity,
      stroke = props.stroke,
      strokeOpacity = props.strokeOpacity,
      fontFamily = props.fontFamily,
      fontSize = props.fontSize,
      textAnchor = props.textAnchor;
  var text = getText(interval);
  ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, strokeOpacity);
  ctx.font = "".concat(fontSize, "px ").concat(fontFamily);
  ctx.fillStyle = (0, _utils.hexToRGBA)(fill, opacity);
  ctx.textAlign = textAnchor === "middle" ? "center" : textAnchor;
  if (stroke !== "none") ctx.strokeText(text, x, y);
  ctx.fillText(text, x, y);
  ctx.restore();
};

BackgroundText.propTypes = {
  x: _propTypes["default"].number.isRequired,
  y: _propTypes["default"].number.isRequired,
  fontFamily: _propTypes["default"].string,
  fontSize: _propTypes["default"].number.isRequired,
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string,
  opacity: _propTypes["default"].number,
  strokeOpacity: _propTypes["default"].number,
  textAnchor: _propTypes["default"].string,
  children: _propTypes["default"].func
};
BackgroundText.defaultProps = {
  opacity: 0.3,
  fill: "#9E7523",
  stroke: "#9E7523",
  strokeOpacity: 1,
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  fontSize: 12,
  textAnchor: "middle"
};
BackgroundText.contextTypes = {
  interval: _propTypes["default"].string.isRequired,
  getCanvasContexts: _propTypes["default"].func,
  chartCanvasType: _propTypes["default"].string
};
var _default = BackgroundText;
exports["default"] = _default;
//# sourceMappingURL=BackgroundText.js.map