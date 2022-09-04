"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Path = require("d3-path");

var _GenericChartComponent = _interopRequireDefault(require("../../GenericChartComponent"));

var _GenericComponent = require("../../GenericComponent");

var _StraightLine = require("./StraightLine");

var _utils = require("../../utils");

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

var ChannelWithArea = /*#__PURE__*/function (_Component) {
  _inherits(ChannelWithArea, _Component);

  var _super = _createSuper(ChannelWithArea);

  function ChannelWithArea(props) {
    var _this;

    _classCallCheck(this, ChannelWithArea);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    _this.isHover = _this.isHover.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ChannelWithArea, [{
    key: "isHover",
    value: function isHover(moreProps) {
      var _this$props = this.props,
          tolerance = _this$props.tolerance,
          onHover = _this$props.onHover;

      if ((0, _utils.isDefined)(onHover)) {
        var _helper = helper(this.props, moreProps),
            lines = _helper.lines,
            line1 = _helper.line1,
            line2 = _helper.line2;

        if ((0, _utils.isDefined)(line1) && (0, _utils.isDefined)(line2)) {
          var mouseXY = moreProps.mouseXY,
              xScale = moreProps.xScale,
              yScale = moreProps.chartConfig.yScale;
          var line1Hovering = (0, _StraightLine.isHovering)({
            x1Value: lines.line1.x1,
            y1Value: lines.line1.y1,
            x2Value: lines.line1.x2,
            y2Value: lines.line1.y2,
            type: "LINE",
            mouseXY: mouseXY,
            tolerance: tolerance,
            xScale: xScale,
            yScale: yScale
          });
          var line2Hovering = (0, _StraightLine.isHovering)({
            x1Value: lines.line2.x1,
            y1Value: lines.line2.y1,
            x2Value: lines.line2.x2,
            y2Value: lines.line2.y2,
            type: "LINE",
            mouseXY: mouseXY,
            tolerance: tolerance,
            xScale: xScale,
            yScale: yScale
          });
          return line1Hovering || line2Hovering;
        }
      }

      return false;
    }
  }, {
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var _this$props2 = this.props,
          stroke = _this$props2.stroke,
          strokeWidth = _this$props2.strokeWidth,
          fillOpacity = _this$props2.fillOpacity,
          strokeOpacity = _this$props2.strokeOpacity,
          fill = _this$props2.fill;

      var _helper2 = helper(this.props, moreProps),
          line1 = _helper2.line1,
          line2 = _helper2.line2;

      if ((0, _utils.isDefined)(line1)) {
        var x1 = line1.x1,
            y1 = line1.y1,
            x2 = line1.x2,
            y2 = line1.y2;
        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, strokeOpacity);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        if ((0, _utils.isDefined)(line2)) {
          var line2Y1 = line2.y1,
              line2Y2 = line2.y2;
          ctx.beginPath();
          ctx.moveTo(x1, line2Y1);
          ctx.lineTo(x2, line2Y2);
          ctx.stroke();
          ctx.fillStyle = (0, _utils.hexToRGBA)(fill, fillOpacity);
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.lineTo(x2, line2Y2);
          ctx.lineTo(x1, line2Y1);
          ctx.closePath();
          ctx.fill();
        }
      }
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var _this$props3 = this.props,
          stroke = _this$props3.stroke,
          strokeWidth = _this$props3.strokeWidth,
          fillOpacity = _this$props3.fillOpacity,
          fill = _this$props3.fill,
          strokeOpacity = _this$props3.strokeOpacity;

      var _helper3 = helper(this.props, moreProps),
          line1 = _helper3.line1,
          line2 = _helper3.line2;

      if ((0, _utils.isDefined)(line1)) {
        var x1 = line1.x1,
            y1 = line1.y1,
            x2 = line1.x2,
            y2 = line1.y2;
        var line = (0, _utils.isDefined)(line2) ? /*#__PURE__*/_react["default"].createElement("line", {
          strokeWidth: strokeWidth,
          stroke: stroke,
          strokeOpacity: strokeOpacity,
          x1: x1,
          y1: line2.y1,
          x2: x2,
          y2: line2.y2
        }) : null;
        var area = (0, _utils.isDefined)(line2) ? /*#__PURE__*/_react["default"].createElement("path", {
          fillRule: fill,
          fillOpacity: fillOpacity,
          d: getPath(line1, line2)
        }) : null;
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("line", {
          strokeWidth: strokeWidth,
          stroke: stroke,
          strokeOpacity: strokeOpacity,
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2
        }), line, area);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          selected = _this$props4.selected,
          interactiveCursorClass = _this$props4.interactiveCursorClass;
      var _this$props5 = this.props,
          onDragStart = _this$props5.onDragStart,
          onDrag = _this$props5.onDrag,
          onDragComplete = _this$props5.onDragComplete,
          onHover = _this$props5.onHover,
          onUnHover = _this$props5.onUnHover;
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

  return ChannelWithArea;
}(_react.Component);

function getPath(line1, line2) {
  var ctx = (0, _d3Path.path)();
  ctx.moveTo(line1.x1, line1.y1);
  ctx.lineTo(line1.x2, line1.y2);
  ctx.lineTo(line1.x2, line2.y2);
  ctx.lineTo(line1.x1, line2.y1);
  ctx.closePath();
  return ctx.toString();
}

function getLines(props, moreProps) {
  var startXY = props.startXY,
      endXY = props.endXY,
      dy = props.dy,
      type = props.type;
  var xScale = moreProps.xScale;

  if ((0, _utils.isNotDefined)(startXY) || (0, _utils.isNotDefined)(endXY)) {
    return {};
  }

  var line1 = (0, _StraightLine.generateLine)({
    type: type,
    start: startXY,
    end: endXY,
    xScale: xScale
  });
  var line2 = (0, _utils.isDefined)(dy) ? _objectSpread(_objectSpread({}, line1), {}, {
    y1: line1.y1 + dy,
    y2: line1.y2 + dy
  }) : undefined;
  return {
    line1: line1,
    line2: line2
  };
}

function helper(props, moreProps) {
  var lines = getLines(props, moreProps);
  var xScale = moreProps.xScale,
      yScale = moreProps.chartConfig.yScale;
  var x1 = xScale(lines.line1.x1);
  var y1 = yScale(lines.line1.y1);
  var x2 = xScale(lines.line1.x2);
  var y2 = yScale(lines.line1.y2);
  var line2 = (0, _utils.isDefined)(lines.line2) ? {
    x1: x1,
    y1: yScale(lines.line2.y1),
    x2: x2,
    y2: yScale(lines.line2.y2)
  } : undefined;
  return {
    lines: lines,
    line1: {
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2
    },
    line2: line2
  };
}

ChannelWithArea.propTypes = {
  interactiveCursorClass: _propTypes["default"].string,
  stroke: _propTypes["default"].string.isRequired,
  strokeWidth: _propTypes["default"].number.isRequired,
  fill: _propTypes["default"].string.isRequired,
  fillOpacity: _propTypes["default"].number.isRequired,
  strokeOpacity: _propTypes["default"].number.isRequired,
  type: _propTypes["default"].oneOf(["XLINE", // extends from -Infinity to +Infinity
  "RAY", // extends to +/-Infinity in one direction
  "LINE" // extends between the set bounds
  ]).isRequired,
  onDragStart: _propTypes["default"].func.isRequired,
  onDrag: _propTypes["default"].func.isRequired,
  onDragComplete: _propTypes["default"].func.isRequired,
  onHover: _propTypes["default"].func,
  onUnHover: _propTypes["default"].func,
  defaultClassName: _propTypes["default"].string,
  tolerance: _propTypes["default"].number.isRequired,
  selected: _propTypes["default"].bool.isRequired
};
ChannelWithArea.defaultProps = {
  onDragStart: _utils.noop,
  onDrag: _utils.noop,
  onDragComplete: _utils.noop,
  type: "LINE",
  strokeWidth: 1,
  tolerance: 4,
  selected: false
};
var _default = ChannelWithArea;
exports["default"] = _default;
//# sourceMappingURL=ChannelWithArea.js.map