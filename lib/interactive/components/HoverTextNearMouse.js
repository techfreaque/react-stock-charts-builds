"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GenericChartComponent = _interopRequireDefault(require("../../GenericChartComponent"));

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

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var PADDING = 10;
var MIN_WIDTH = PADDING;

var HoverTextNearMouse = /*#__PURE__*/function (_Component) {
  _inherits(HoverTextNearMouse, _Component);

  var _super = _createSuper(HoverTextNearMouse);

  function HoverTextNearMouse(props) {
    var _this;

    _classCallCheck(this, HoverTextNearMouse);

    _this = _super.call(this, props);
    _this.state = {
      textWidth: undefined,
      textHeight: undefined
    };
    _this.saveNode = _this.saveNode.bind(_assertThisInitialized(_this));
    _this.updateTextSize = _this.updateTextSize.bind(_assertThisInitialized(_this));
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HoverTextNearMouse, [{
    key: "saveNode",
    value: function saveNode(node) {
      this.textNode = node;
    }
  }, {
    key: "updateTextSize",
    value: function updateTextSize() {
      var _this$props = this.props,
          bgWidth = _this$props.bgWidth,
          bgHeight = _this$props.bgHeight;

      if (bgWidth === "auto" || bgHeight === "auto") {
        var textNode = this.textNode;

        if (textNode) {
          var _textNode$getBBox = textNode.getBBox(),
              width = _textNode$getBBox.width,
              height = _textNode$getBBox.height;

          if (this.state.textWidth !== width || this.state.textHeight !== height) {
            this.setState({
              textWidth: width,
              textHeight: height
            });
          }
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateTextSize();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateTextSize();
    }
  }, {
    key: "getBgWidth",
    value: function getBgWidth() {
      var bgWidth = this.props.bgWidth;
      var textWidth = this.state.textWidth;

      if (bgWidth !== "auto") {
        return bgWidth;
      } else if (textWidth !== undefined) {
        return textWidth + PADDING;
      } else {
        return MIN_WIDTH;
      }
    }
  }, {
    key: "getBgHeight",
    value: function getBgHeight() {
      var bgHeight = this.props.bgHeight;
      var textHeight = this.state.textHeight;

      if (bgHeight !== "auto") {
        return bgHeight;
      } else if (textHeight !== undefined) {
        return textHeight + PADDING;
      } else {
        return MIN_WIDTH;
      }
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var _this$props2 = this.props,
          fontFamily = _this$props2.fontFamily,
          fontSize = _this$props2.fontSize,
          fill = _this$props2.fill,
          bgFill = _this$props2.bgFill,
          bgOpacity = _this$props2.bgOpacity; // console.log(moreProps)

      var textMetaData = helper(_objectSpread(_objectSpread({}, this.props), {}, {
        bgWidth: this.getBgWidth(),
        bgHeight: this.getBgHeight()
      }), moreProps);

      if ((0, _utils.isDefined)(textMetaData)) {
        var rect = textMetaData.rect,
            text = textMetaData.text;
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("rect", _extends({
          fillRule: bgFill,
          fillOpacity: bgOpacity,
          stroke: bgFill
        }, rect)), /*#__PURE__*/_react["default"].createElement("text", {
          ref: this.saveNode,
          fontSize: fontSize,
          fontFamily: fontFamily,
          textAnchor: "start",
          alignmentBaseline: "central",
          fillRule: fill,
          x: text.x,
          y: text.y
        }, text.text));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var text = this.props.text;

      if (text) {
        return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
          svgDraw: this.renderSVG,
          drawOn: ["mousemove"]
        });
      } else {
        return null;
      }
    }
  }]);

  return HoverTextNearMouse;
}(_react.Component);

var numberOrString = _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].oneOf(["auto"])]);

HoverTextNearMouse.propTypes = {
  fontFamily: _propTypes["default"].string.isRequired,
  fontSize: _propTypes["default"].number.isRequired,
  fill: _propTypes["default"].string.isRequired,
  text: _propTypes["default"].string.isRequired,
  bgFill: _propTypes["default"].string.isRequired,
  bgOpacity: _propTypes["default"].number.isRequired,
  bgWidth: numberOrString.isRequired,
  bgHeight: numberOrString.isRequired,
  show: _propTypes["default"].bool.isRequired
};
HoverTextNearMouse.defaultProps = {
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  fontSize: 12,
  fill: "#000000",
  bgFill: "#FA9325",
  bgOpacity: 0.5
};

function helper(props, moreProps) {
  var show = props.show,
      bgWidth = props.bgWidth,
      bgHeight = props.bgHeight;
  var mouseXY = moreProps.mouseXY,
      _moreProps$chartConfi = moreProps.chartConfig,
      height = _moreProps$chartConfi.height,
      width = _moreProps$chartConfi.width,
      mouseInsideCanvas = moreProps.show;

  if (show && mouseInsideCanvas) {
    var _mouseXY = _slicedToArray(mouseXY, 2),
        x = _mouseXY[0],
        y = _mouseXY[1];

    var cx = x < width / 2 ? x + PADDING : x - bgWidth - PADDING;
    var cy = y < height / 2 ? y + PADDING : y - bgHeight - PADDING;
    var rect = {
      x: cx,
      y: cy,
      width: bgWidth,
      height: bgHeight
    };
    var text = {
      text: props.text,
      x: cx + PADDING / 2,
      y: cy + bgHeight / 2
    };
    return {
      rect: rect,
      text: text
    };
  }
}

var _default = HoverTextNearMouse;
exports["default"] = _default;
//# sourceMappingURL=HoverTextNearMouse.js.map