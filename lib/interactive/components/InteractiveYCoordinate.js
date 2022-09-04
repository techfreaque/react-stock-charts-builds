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

var _utils = require("../../utils");

var _EdgeCoordinateV = require("../../coordinates/EdgeCoordinateV3");

var _MouseCoordinateY = require("../../coordinates/MouseCoordinateY");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var InteractiveYCoordinate = /*#__PURE__*/function (_Component) {
  _inherits(InteractiveYCoordinate, _Component);

  var _super = _createSuper(InteractiveYCoordinate);

  function InteractiveYCoordinate(props) {
    var _this;

    _classCallCheck(this, InteractiveYCoordinate);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    _this.isHover = _this.isHover.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InteractiveYCoordinate, [{
    key: "isHover",
    value: function isHover(moreProps) {
      var onHover = this.props.onHover;

      if ((0, _utils.isDefined)(onHover)) {
        var values = helper(this.props, moreProps);
        if (values == null) return false;
        var x1 = values.x1,
            x2 = values.x2,
            y = values.y,
            rect = values.rect;

        var _moreProps$mouseXY = _slicedToArray(moreProps.mouseXY, 2),
            mouseX = _moreProps$mouseXY[0],
            mouseY = _moreProps$mouseXY[1];

        if (mouseX >= rect.x && mouseX <= rect.x + this.width && mouseY >= rect.y && mouseY <= rect.y + rect.height) {
          return true;
        }

        if (x1 <= mouseX && x2 >= mouseX && Math.abs(mouseY - y) < 4) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var _this$props = this.props,
          bgFill = _this$props.bgFill,
          bgOpacity = _this$props.bgOpacity,
          textFill = _this$props.textFill,
          fontFamily = _this$props.fontFamily,
          fontSize = _this$props.fontSize,
          fontStyle = _this$props.fontStyle,
          fontWeight = _this$props.fontWeight,
          stroke = _this$props.stroke,
          strokeWidth = _this$props.strokeWidth,
          strokeOpacity = _this$props.strokeOpacity,
          strokeDasharray = _this$props.strokeDasharray,
          text = _this$props.text,
          textBox = _this$props.textBox,
          edge = _this$props.edge;
      var _this$props2 = this.props,
          selected = _this$props2.selected,
          hovering = _this$props2.hovering;
      var values = helper(this.props, moreProps);
      if (values == null) return;
      var x1 = values.x1,
          x2 = values.x2,
          y = values.y,
          rect = values.rect;
      ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, strokeOpacity);
      ctx.beginPath();

      if (selected || hovering) {
        ctx.lineWidth = strokeWidth + 1;
      } else {
        ctx.lineWidth = strokeWidth;
      }

      ctx.textBaseline = "middle";
      ctx.textAlign = "start";
      ctx.font = "".concat(fontStyle, " ").concat(fontWeight, " ").concat(fontSize, "px ").concat(fontFamily);
      this.width = textBox.padding.left + ctx.measureText(text).width + textBox.padding.right + textBox.closeIcon.padding.left + textBox.closeIcon.width + textBox.closeIcon.padding.right;
      ctx.setLineDash((0, _utils.getStrokeDasharrayCanvas)(strokeDasharray));
      ctx.moveTo(x1, y);
      ctx.lineTo(rect.x, y);
      ctx.moveTo(rect.x + this.width, y);
      ctx.lineTo(x2, y);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = (0, _utils.hexToRGBA)(bgFill, bgOpacity);
      ctx.fillRect(rect.x, rect.y, this.width, rect.height);
      ctx.strokeRect(rect.x, rect.y, this.width, rect.height);
      ctx.fillStyle = textFill;
      ctx.beginPath();
      ctx.fillText(text, rect.x + 10, y);

      var newEdge = _objectSpread(_objectSpread({}, edge), {}, {
        textFill: textFill,
        fontFamily: fontFamily,
        fontSize: fontSize,
        opacity: bgOpacity
      });

      var yValue = edge.displayFormat(this.props.yValue);
      var yCoord = (0, _MouseCoordinateY.getYCoordinate)(y, yValue, newEdge, moreProps);
      (0, _EdgeCoordinateV.drawOnCanvas)(ctx, yCoord);
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
      var _this$props3 = this.props,
          onHover = _this$props3.onHover,
          onUnHover = _this$props3.onUnHover;
      var _this$props4 = this.props,
          onDragStart = _this$props4.onDragStart,
          onDrag = _this$props4.onDrag,
          onDragComplete = _this$props4.onDragComplete;
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        clip: false,
        xxxyyy: true,
        isHover: this.isHover,
        svgDraw: this.renderSVG,
        canvasToDraw: _GenericComponent.getMouseCanvas,
        canvasDraw: this.drawOnCanvas,
        interactiveCursorClass: interactiveCursorClass
        /* selected={selected} */
        ,
        enableDragOnHover: true,
        onDragStart: onDragStart,
        onDrag: onDrag,
        onDragComplete: onDragComplete,
        onHover: onHover,
        onUnHover: onUnHover,
        drawOn: ["mousemove", "mouseleave", "pan", "drag"]
      });
    }
  }]);

  return InteractiveYCoordinate;
}(_react.Component);

function helper(props, moreProps) {
  var yValue = props.yValue,
      textBox = props.textBox;
  var _moreProps$chartConfi = moreProps.chartConfig,
      width = _moreProps$chartConfi.width,
      yScale = _moreProps$chartConfi.yScale,
      height = _moreProps$chartConfi.height;
  var y = Math.round(yScale(yValue));

  if (y >= 0 && y <= height) {
    var rect = {
      x: textBox.left,
      y: y - textBox.height / 2,
      height: textBox.height
    };
    return {
      x1: 0,
      x2: width,
      y: y,
      rect: rect
    };
  }
}

InteractiveYCoordinate.propTypes = {
  bgFill: _propTypes["default"].string.isRequired,
  bgOpacity: _propTypes["default"].number.isRequired,
  stroke: _propTypes["default"].string.isRequired,
  strokeWidth: _propTypes["default"].number.isRequired,
  strokeOpacity: _propTypes["default"].number.isRequired,
  strokeDasharray: _propTypes["default"].string.isRequired,
  textFill: _propTypes["default"].string.isRequired,
  fontFamily: _propTypes["default"].string.isRequired,
  fontSize: _propTypes["default"].number.isRequired,
  fontWeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  fontStyle: _propTypes["default"].string.isRequired,
  text: _propTypes["default"].string.isRequired,
  edge: _propTypes["default"].object.isRequired,
  textBox: _propTypes["default"].object.isRequired,
  yValue: _propTypes["default"].number.isRequired,
  onDragStart: _propTypes["default"].func.isRequired,
  onDrag: _propTypes["default"].func.isRequired,
  onDragComplete: _propTypes["default"].func.isRequired,
  onHover: _propTypes["default"].func,
  onUnHover: _propTypes["default"].func,
  defaultClassName: _propTypes["default"].string,
  interactiveCursorClass: _propTypes["default"].string,
  tolerance: _propTypes["default"].number.isRequired,
  selected: _propTypes["default"].bool.isRequired,
  hovering: _propTypes["default"].bool.isRequired
};
InteractiveYCoordinate.defaultProps = {
  onDragStart: _utils.noop,
  onDrag: _utils.noop,
  onDragComplete: _utils.noop,
  fontWeight: "normal",
  // standard dev
  strokeWidth: 1,
  tolerance: 4,
  selected: false,
  hovering: false
};
var _default = InteractiveYCoordinate;
exports["default"] = _default;
//# sourceMappingURL=InteractiveYCoordinate.js.map