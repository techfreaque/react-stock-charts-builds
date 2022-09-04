"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GenericChartComponent = _interopRequireDefault(require("../../GenericChartComponent"));

var _GenericComponent = require("../../GenericComponent");

var _StraightLine = require("./StraightLine");

var _utils = require("../../utils");

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

var ClickableShape = /*#__PURE__*/function (_Component) {
  _inherits(ClickableShape, _Component);

  var _super = _createSuper(ClickableShape);

  function ClickableShape(props) {
    var _this;

    _classCallCheck(this, ClickableShape);

    _this = _super.call(this, props);
    _this.saveNode = _this.saveNode.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    _this.isHover = _this.isHover.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ClickableShape, [{
    key: "saveNode",
    value: function saveNode(node) {
      this.node = node;
    }
  }, {
    key: "isHover",
    value: function isHover(moreProps) {
      var mouseXY = moreProps.mouseXY;

      if (this.closeIcon) {
        var textBox = this.props.textBox;
        var _this$closeIcon = this.closeIcon,
            x = _this$closeIcon.x,
            y = _this$closeIcon.y;
        var halfWidth = textBox.closeIcon.width / 2;
        var start1 = [x - halfWidth, y - halfWidth];
        var end1 = [x + halfWidth, y + halfWidth];
        var start2 = [x - halfWidth, y + halfWidth];
        var end2 = [x + halfWidth, y - halfWidth];

        if ((0, _StraightLine.isHovering2)(start1, end1, mouseXY, 3) || (0, _StraightLine.isHovering2)(start2, end2, mouseXY, 3)) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var _this$props = this.props,
          stroke = _this$props.stroke,
          strokeWidth = _this$props.strokeWidth,
          strokeOpacity = _this$props.strokeOpacity,
          hovering = _this$props.hovering,
          textBox = _this$props.textBox;

      var _helper = helper(this.props, moreProps, ctx),
          _helper2 = _slicedToArray(_helper, 2),
          x = _helper2[0],
          y = _helper2[1];

      this.closeIcon = {
        x: x,
        y: y
      };
      ctx.beginPath();
      ctx.lineWidth = hovering ? strokeWidth + 1 : strokeWidth;
      ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, strokeOpacity);
      var halfWidth = textBox.closeIcon.width / 2;
      ctx.moveTo(x - halfWidth, y - halfWidth);
      ctx.lineTo(x + halfWidth, y + halfWidth);
      ctx.moveTo(x - halfWidth, y + halfWidth);
      ctx.lineTo(x + halfWidth, y - halfWidth);
      ctx.stroke();
    }
  }, {
    key: "renderSVG",
    value: function renderSVG() {
      throw new Error("svg not implemented");
    }
  }, {
    key: "render",
    value: function render() {
      var interactiveCursorClass = this.props.interactiveCursorClass;
      var show = this.props.show;
      var _this$props2 = this.props,
          onHover = _this$props2.onHover,
          onUnHover = _this$props2.onUnHover,
          onClick = _this$props2.onClick;
      return show ? /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        ref: this.saveNode,
        interactiveCursorClass: interactiveCursorClass,
        isHover: this.isHover,
        onClickWhenHover: onClick,
        svgDraw: this.renderSVG,
        canvasDraw: this.drawOnCanvas,
        canvasToDraw: _GenericComponent.getMouseCanvas,
        onHover: onHover,
        onUnHover: onUnHover,
        drawOn: ["pan", "mousemove", "drag"]
      }) : null;
    }
  }]);

  return ClickableShape;
}(_react.Component);

function helper(props, moreProps, ctx) {
  var yValue = props.yValue,
      text = props.text,
      textBox = props.textBox;
  var fontFamily = props.fontFamily,
      fontStyle = props.fontStyle,
      fontWeight = props.fontWeight,
      fontSize = props.fontSize;
  ctx.font = "".concat(fontStyle, " ").concat(fontWeight, " ").concat(fontSize, "px ").concat(fontFamily);
  var yScale = moreProps.chartConfig.yScale;
  var x = textBox.left + textBox.padding.left + ctx.measureText(text).width + textBox.padding.right + textBox.closeIcon.padding.left + textBox.closeIcon.width / 2;
  var y = yScale(yValue);
  return [x, y];
}

ClickableShape.propTypes = {
  stroke: _propTypes["default"].string.isRequired,
  strokeOpacity: _propTypes["default"].number.isRequired,
  strokeWidth: _propTypes["default"].number.isRequired,
  textBox: _propTypes["default"].object.isRequired,
  hovering: _propTypes["default"].bool,
  interactiveCursorClass: _propTypes["default"].string,
  show: _propTypes["default"].bool,
  onHover: _propTypes["default"].func,
  onUnHover: _propTypes["default"].func,
  onClick: _propTypes["default"].func
};
ClickableShape.defaultProps = {
  show: false,
  fillOpacity: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var _default = ClickableShape;
exports["default"] = _default;
//# sourceMappingURL=ClickableShape.js.map