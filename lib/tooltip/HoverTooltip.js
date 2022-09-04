"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GenericComponent = _interopRequireDefault(require("../GenericComponent"));

var _d3Array = require("d3-array");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var HoverTooltip = /*#__PURE__*/function (_Component) {
  _inherits(HoverTooltip, _Component);

  var _super = _createSuper(HoverTooltip);

  function HoverTooltip(props) {
    var _this;

    _classCallCheck(this, HoverTooltip);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HoverTooltip, [{
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var pointer = helper(this.props, moreProps, ctx);
      var height = moreProps.height;
      if ((0, _utils.isNotDefined)(pointer)) return null;

      _drawOnCanvas(ctx, this.props, this.context, pointer, height, moreProps);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_GenericComponent["default"], {
        svgDraw: this.renderSVG,
        canvasDraw: this.drawOnCanvas,
        drawOn: ["mousemove", "pan"
        /* , "mouseleave" */
        ]
      });
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var pointer = helper(this.props, moreProps);
      if ((0, _utils.isNotDefined)(pointer)) return null;
      var _this$props = this.props,
          bgFill = _this$props.bgFill,
          bgOpacity = _this$props.bgOpacity,
          backgroundShapeSVG = _this$props.backgroundShapeSVG,
          tooltipSVG = _this$props.tooltipSVG;
      var _this$props2 = this.props,
          bgheight = _this$props2.bgheight,
          bgwidth = _this$props2.bgwidth;
      var height = moreProps.height;
      var x = pointer.x,
          y = pointer.y,
          content = pointer.content,
          centerX = pointer.centerX,
          pointWidth = pointer.pointWidth,
          bgSize = pointer.bgSize;
      var bgShape = (0, _utils.isDefined)(bgwidth) && (0, _utils.isDefined)(bgheight) ? {
        width: bgwidth,
        height: bgheight
      } : bgSize;
      return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("rect", {
        x: centerX - pointWidth / 2,
        y: 0,
        width: pointWidth,
        height: height,
        fill: bgFill,
        opacity: bgOpacity
      }), /*#__PURE__*/_react["default"].createElement("g", {
        className: "react-stockcharts-tooltip-content",
        transform: "translate(".concat(x, ", ").concat(y, ")")
      }, backgroundShapeSVG(this.props, bgShape), tooltipSVG(this.props, content)));
    }
  }]);

  return HoverTooltip;
}(_react.Component);

HoverTooltip.propTypes = {
  chartId: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  yAccessor: _propTypes["default"].func,
  tooltipSVG: _propTypes["default"].func,
  backgroundShapeSVG: _propTypes["default"].func,
  bgwidth: _propTypes["default"].number,
  bgheight: _propTypes["default"].number,
  bgFill: _propTypes["default"].string.isRequired,
  bgOpacity: _propTypes["default"].number.isRequired,
  tooltipContent: _propTypes["default"].func.isRequired,
  origin: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].func]).isRequired,
  fontFamily: _propTypes["default"].string,
  fontSize: _propTypes["default"].number
};
HoverTooltip.contextTypes = {
  margin: _propTypes["default"].object.isRequired,
  ratio: _propTypes["default"].number.isRequired
};
HoverTooltip.defaultProps = {
  // bgwidth: 150,
  // bgheight: 50,
  tooltipSVG: tooltipSVG,
  tooltipCanvas: tooltipCanvas,
  origin: origin,
  fill: "#D4E2FD",
  bgFill: "#D4E2FD",
  bgOpacity: 0.5,
  stroke: "#9B9BFF",
  fontFill: "#000000",
  opacity: 0.8,
  backgroundShapeSVG: backgroundShapeSVG,
  backgroundShapeCanvas: backgroundShapeCanvas,
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  fontSize: 12
};
var PADDING = 5;
var X = 10;
var Y = 10;
/* eslint-disable react/prop-types */

function backgroundShapeSVG(_ref, _ref2) {
  var fill = _ref.fill,
      stroke = _ref.stroke,
      opacity = _ref.opacity;
  var height = _ref2.height,
      width = _ref2.width;
  return /*#__PURE__*/_react["default"].createElement("rect", {
    height: height,
    width: width,
    fill: fill,
    opacity: opacity,
    stroke: stroke
  });
}

function tooltipSVG(_ref3, content) {
  var fontFamily = _ref3.fontFamily,
      fontSize = _ref3.fontSize,
      fontFill = _ref3.fontFill;
  var tspans = [];
  var startY = Y + fontSize * 0.9;

  for (var i = 0; i < content.y.length; i++) {
    var y = content.y[i];
    var textY = startY + fontSize * (i + 1);
    tspans.push( /*#__PURE__*/_react["default"].createElement("tspan", {
      key: "L-".concat(i),
      x: X,
      y: textY,
      fill: y.stroke
    }, y.label));
    tspans.push( /*#__PURE__*/_react["default"].createElement("tspan", {
      key: i
    }, ": "));
    tspans.push( /*#__PURE__*/_react["default"].createElement("tspan", {
      key: "V-".concat(i)
    }, y.value));
  }

  return /*#__PURE__*/_react["default"].createElement("text", {
    fontFamily: fontFamily,
    fontSize: fontSize,
    fill: fontFill
  }, /*#__PURE__*/_react["default"].createElement("tspan", {
    x: X,
    y: startY
  }, content.x), tspans);
}
/* eslint-enable react/prop-types */


function backgroundShapeCanvas(props, _ref4, ctx) {
  var width = _ref4.width,
      height = _ref4.height;
  var fill = props.fill,
      stroke = props.stroke,
      opacity = props.opacity;
  ctx.fillStyle = (0, _utils.hexToRGBA)(fill, opacity);
  ctx.strokeStyle = stroke;
  ctx.beginPath();
  ctx.rect(0, 0, width, height);
  ctx.fill();
  ctx.stroke();
}

function tooltipCanvas(_ref5, content, ctx) {
  var fontFamily = _ref5.fontFamily,
      fontSize = _ref5.fontSize,
      fontFill = _ref5.fontFill;
  var startY = Y + fontSize * 0.9;
  ctx.font = "".concat(fontSize, "px ").concat(fontFamily);
  ctx.fillStyle = fontFill;
  ctx.textAlign = "left";
  ctx.fillText(content.x, X, startY);

  for (var i = 0; i < content.y.length; i++) {
    var y = content.y[i];
    var textY = startY + fontSize * (i + 1);
    ctx.fillStyle = y.stroke || fontFill;
    ctx.fillText(y.label, X, textY);
    ctx.fillStyle = fontFill;
    ctx.fillText(": " + y.value, X + ctx.measureText(y.label).width, textY);
  }
}

function _drawOnCanvas(ctx, props, context, pointer, height) {
  var margin = context.margin,
      ratio = context.ratio;
  var bgFill = props.bgFill,
      bgOpacity = props.bgOpacity;
  var backgroundShapeCanvas = props.backgroundShapeCanvas,
      tooltipCanvas = props.tooltipCanvas;
  var originX = 0.5 * ratio + margin.left;
  var originY = 0.5 * ratio + margin.top;
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(ratio, ratio);
  ctx.translate(originX, originY);
  var x = pointer.x,
      y = pointer.y,
      content = pointer.content,
      centerX = pointer.centerX,
      pointWidth = pointer.pointWidth,
      bgSize = pointer.bgSize;
  ctx.fillStyle = (0, _utils.hexToRGBA)(bgFill, bgOpacity);
  ctx.beginPath();
  ctx.rect(centerX - pointWidth / 2, 0, pointWidth, height);
  ctx.fill();
  ctx.translate(x, y);
  backgroundShapeCanvas(props, bgSize, ctx);
  tooltipCanvas(props, content, ctx);
  ctx.restore();
}

function calculateTooltipSize(_ref6, content, ctx) {
  var fontFamily = _ref6.fontFamily,
      fontSize = _ref6.fontSize,
      fontFill = _ref6.fontFill;

  if ((0, _utils.isNotDefined)(ctx)) {
    var canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");
  }

  ctx.font = "".concat(fontSize, "px ").concat(fontFamily);
  ctx.fillStyle = fontFill;
  ctx.textAlign = "left";

  var measureText = function measureText(str) {
    return {
      width: ctx.measureText(str).width,
      height: fontSize
    };
  };

  var _content$y$map$reduce = content.y.map(function (_ref7) {
    var label = _ref7.label,
        value = _ref7.value;
    return measureText("".concat(label, ": ").concat(value));
  }) // Sum all y and x sizes (begin with x label size)
  .reduce(function (res, size) {
    return sumSizes(res, size);
  }, measureText(String(content.x))),
      width = _content$y$map$reduce.width,
      height = _content$y$map$reduce.height;

  return {
    width: width + 2 * X,
    height: height + 2 * Y
  };
}

function sumSizes() {
  for (var _len = arguments.length, sizes = new Array(_len), _key = 0; _key < _len; _key++) {
    sizes[_key] = arguments[_key];
  }

  return {
    width: Math.max.apply(Math, _toConsumableArray(sizes.map(function (size) {
      return size.width;
    }))),
    height: (0, _d3Array.sum)(sizes, function (d) {
      return d.height;
    })
  };
}

function normalizeX(x, bgSize, pointWidth, width) {
  // return x - bgSize.width - pointWidth / 2 - PADDING * 2 < 0
  return x < width / 2 ? x + pointWidth / 2 + PADDING : x - bgSize.width - pointWidth / 2 - PADDING;
}

function normalizeY(y, bgSize) {
  return y - bgSize.height <= 0 ? y + PADDING : y - bgSize.height - PADDING;
}

function origin(props, moreProps, bgSize, pointWidth) {
  var chartId = props.chartId,
      yAccessor = props.yAccessor;
  var mouseXY = moreProps.mouseXY,
      xAccessor = moreProps.xAccessor,
      currentItem = moreProps.currentItem,
      xScale = moreProps.xScale,
      chartConfig = moreProps.chartConfig,
      width = moreProps.width;
  var y = (0, _utils.last)(mouseXY);
  var xValue = xAccessor(currentItem);
  var x = Math.round(xScale(xValue));

  if ((0, _utils.isDefined)(chartId) && (0, _utils.isDefined)(yAccessor) && (0, _utils.isDefined)(chartConfig) && (0, _utils.isDefined)(chartConfig.findIndex)) {
    var yValue = yAccessor(currentItem);
    var chartIndex = chartConfig.findIndex(function (x) {
      return x.id === chartId;
    });
    y = Math.round(chartConfig[chartIndex].yScale(yValue));
  }

  x = normalizeX(x, bgSize, pointWidth, width);
  y = normalizeY(y, bgSize);
  return [x, y];
}

function helper(props, moreProps, ctx) {
  var show = moreProps.show,
      xScale = moreProps.xScale,
      currentItem = moreProps.currentItem,
      plotData = moreProps.plotData;
  var origin = props.origin,
      tooltipContent = props.tooltipContent;
  var xAccessor = moreProps.xAccessor,
      displayXAccessor = moreProps.displayXAccessor;
  if (!show || (0, _utils.isNotDefined)(currentItem)) return;
  var xValue = xAccessor(currentItem);
  if (!show || (0, _utils.isNotDefined)(xValue)) return;
  var content = tooltipContent({
    currentItem: currentItem,
    xAccessor: displayXAccessor
  });
  var centerX = xScale(xValue);
  var pointWidth = Math.abs(xScale(xAccessor((0, _utils.last)(plotData))) - xScale(xAccessor((0, _utils.first)(plotData)))) / (plotData.length - 1);
  var bgSize = calculateTooltipSize(props, content, ctx);

  var _origin = origin(props, moreProps, bgSize, pointWidth),
      _origin2 = _slicedToArray(_origin, 2),
      x = _origin2[0],
      y = _origin2[1];

  return {
    x: x,
    y: y,
    content: content,
    centerX: centerX,
    pointWidth: pointWidth,
    bgSize: bgSize
  };
}

var _default = HoverTooltip;
exports["default"] = _default;
//# sourceMappingURL=HoverTooltip.js.map