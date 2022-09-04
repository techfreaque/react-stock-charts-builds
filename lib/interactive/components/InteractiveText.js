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

var InteractiveText = /*#__PURE__*/function (_Component) {
  _inherits(InteractiveText, _Component);

  var _super = _createSuper(InteractiveText);

  function InteractiveText(props) {
    var _this;

    _classCallCheck(this, InteractiveText);

    _this = _super.call(this, props);
    _this.calculateTextWidth = true;
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    _this.isHover = _this.isHover.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InteractiveText, [{
    key: "isHover",
    value: function isHover(moreProps) {
      var onHover = this.props.onHover;

      if ((0, _utils.isDefined)(onHover) && (0, _utils.isDefined)(this.textWidth) && !this.calculateTextWidth) {
        var _helper = helper(this.props, moreProps, this.textWidth),
            rect = _helper.rect;

        var _moreProps$mouseXY = _slicedToArray(moreProps.mouseXY, 2),
            x = _moreProps$mouseXY[0],
            y = _moreProps$mouseXY[1];

        if (x >= rect.x && y >= rect.y && x <= rect.x + rect.width && y <= rect.y + rect.height) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.calculateTextWidth = nextProps.text !== this.props.text || nextProps.fontStyle !== this.props.fontStyle || nextProps.fontWeight !== this.props.fontWeight || nextProps.fontSize !== this.props.fontSize || nextProps.fontFamily !== this.props.fontFamily;
    }
  }, {
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var _this$props = this.props,
          bgFill = _this$props.bgFill,
          bgOpacity = _this$props.bgOpacity,
          bgStrokeWidth = _this$props.bgStrokeWidth,
          bgStroke = _this$props.bgStroke,
          textFill = _this$props.textFill,
          fontFamily = _this$props.fontFamily,
          fontSize = _this$props.fontSize,
          fontStyle = _this$props.fontStyle,
          fontWeight = _this$props.fontWeight,
          text = _this$props.text;

      if (this.calculateTextWidth) {
        ctx.font = "".concat(fontStyle, " ").concat(fontWeight, " ").concat(fontSize, "px ").concat(fontFamily);

        var _ctx$measureText = ctx.measureText(text),
            width = _ctx$measureText.width;

        this.textWidth = width;
        this.calculateTextWidth = false;
      }

      var selected = this.props.selected;

      var _helper2 = helper(this.props, moreProps, this.textWidth),
          x = _helper2.x,
          y = _helper2.y,
          rect = _helper2.rect;

      ctx.fillStyle = (0, _utils.hexToRGBA)(bgFill, bgOpacity);
      ctx.beginPath();
      ctx.fillRect(rect.x, rect.y, rect.width, rect.height);

      if (selected) {
        ctx.strokeStyle = bgStroke;
        ctx.lineWidth = bgStrokeWidth;
        ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
      }

      ctx.fillStyle = textFill;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.font = "".concat(fontStyle, " ").concat(fontWeight, " ").concat(fontSize, "px ").concat(fontFamily);
      ctx.beginPath();
      ctx.fillText(text, x, y);
    }
  }, {
    key: "renderSVG",
    value: function renderSVG() {
      throw new Error("svg not implemented");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          selected = _this$props2.selected,
          interactiveCursorClass = _this$props2.interactiveCursorClass;
      var _this$props3 = this.props,
          onHover = _this$props3.onHover,
          onUnHover = _this$props3.onUnHover;
      var _this$props4 = this.props,
          onDragStart = _this$props4.onDragStart,
          onDrag = _this$props4.onDrag,
          onDragComplete = _this$props4.onDragComplete;
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        isHover: this.isHover,
        svgDraw: this.renderSVG,
        canvasToDraw: _GenericComponent.getMouseCanvas,
        canvasDraw: this.drawOnCanvas,
        interactiveCursorClass: interactiveCursorClass,
        selected: selected,
        onDragStart: onDragStart,
        onDrag: onDrag,
        onDragComplete: onDragComplete,
        onHover: onHover,
        onUnHover: onUnHover,
        drawOn: ["mousemove", "mouseleave", "pan", "drag"]
      });
    }
  }]);

  return InteractiveText;
}(_react.Component);

function helper(props, moreProps, textWidth) {
  var position = props.position,
      fontSize = props.fontSize;
  var xScale = moreProps.xScale,
      yScale = moreProps.chartConfig.yScale;

  var _position = _slicedToArray(position, 2),
      xValue = _position[0],
      yValue = _position[1];

  var x = xScale(xValue);
  var y = yScale(yValue);
  var rect = {
    x: x - textWidth / 2 - fontSize,
    y: y - fontSize,
    width: textWidth + fontSize * 2,
    height: fontSize * 2
  };
  return {
    x: x,
    y: y,
    rect: rect
  };
}

InteractiveText.propTypes = {
  bgFill: _propTypes["default"].string.isRequired,
  bgOpacity: _propTypes["default"].number.isRequired,
  bgStrokeWidth: _propTypes["default"].number.isRequired,
  bgStroke: _propTypes["default"].string.isRequired,
  textFill: _propTypes["default"].string.isRequired,
  fontFamily: _propTypes["default"].string.isRequired,
  fontSize: _propTypes["default"].number.isRequired,
  fontWeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  fontStyle: _propTypes["default"].string.isRequired,
  text: _propTypes["default"].string.isRequired,
  onDragStart: _propTypes["default"].func.isRequired,
  onDrag: _propTypes["default"].func.isRequired,
  onDragComplete: _propTypes["default"].func.isRequired,
  onHover: _propTypes["default"].func,
  onUnHover: _propTypes["default"].func,
  defaultClassName: _propTypes["default"].string,
  interactiveCursorClass: _propTypes["default"].string,
  tolerance: _propTypes["default"].number.isRequired,
  selected: _propTypes["default"].bool.isRequired
};
InteractiveText.defaultProps = {
  onDragStart: _utils.noop,
  onDrag: _utils.noop,
  onDragComplete: _utils.noop,
  type: "SD",
  // standard dev
  fontWeight: "normal",
  // standard dev
  tolerance: 4,
  selected: false
};
var _default = InteractiveText;
exports["default"] = _default;
//# sourceMappingURL=InteractiveText.js.map