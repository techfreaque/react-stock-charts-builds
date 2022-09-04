"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Force = require("d3-force");

var _d3Array = require("d3-array");

var _GenericChartComponent = _interopRequireDefault(require("../GenericChartComponent"));

var _GenericComponent = require("../GenericComponent");

var _AxisZoomCapture = _interopRequireDefault(require("./AxisZoomCapture"));

var _utils = require("../utils");

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

var Axis = /*#__PURE__*/function (_Component) {
  _inherits(Axis, _Component);

  var _super = _createSuper(Axis);

  function Axis(props) {
    var _this;

    _classCallCheck(this, Axis);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    _this.saveNode = _this.saveNode.bind(_assertThisInitialized(_this));
    _this.getMoreProps = _this.getMoreProps.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Axis, [{
    key: "saveNode",
    value: function saveNode(node) {
      this.node = node;
    }
  }, {
    key: "getMoreProps",
    value: function getMoreProps() {
      return this.node.getMoreProps();
    }
  }, {
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var _this$props = this.props,
          showDomain = _this$props.showDomain,
          showTicks = _this$props.showTicks,
          transform = _this$props.transform,
          range = _this$props.range,
          getScale = _this$props.getScale;
      ctx.save();
      ctx.translate(transform[0], transform[1]);
      if (showDomain) drawAxisLine(ctx, this.props, range);

      if (showTicks) {
        var tickProps = tickHelper(this.props, getScale(moreProps));
        drawTicks(ctx, tickProps);
      }

      ctx.restore();
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var className = this.props.className;
      var _this$props2 = this.props,
          showDomain = _this$props2.showDomain,
          showTicks = _this$props2.showTicks,
          range = _this$props2.range,
          getScale = _this$props2.getScale;
      var ticks = showTicks ? axisTicksSVG(this.props, getScale(moreProps)) : null;
      var domain = showDomain ? axisLineSVG(this.props, range) : null;
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: className
      }, ticks, domain);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          bg = _this$props3.bg,
          axisZoomCallback = _this$props3.axisZoomCallback,
          className = _this$props3.className,
          zoomCursorClassName = _this$props3.zoomCursorClassName,
          zoomEnabled = _this$props3.zoomEnabled,
          getScale = _this$props3.getScale,
          inverted = _this$props3.inverted;
      var _this$props4 = this.props,
          transform = _this$props4.transform,
          getMouseDelta = _this$props4.getMouseDelta,
          edgeClip = _this$props4.edgeClip;
      var _this$props5 = this.props,
          onContextMenu = _this$props5.onContextMenu,
          onDoubleClick = _this$props5.onDoubleClick;
      var zoomCapture = zoomEnabled ? /*#__PURE__*/_react["default"].createElement(_AxisZoomCapture["default"], {
        bg: bg,
        getScale: getScale,
        getMoreProps: this.getMoreProps,
        getMouseDelta: getMouseDelta,
        axisZoomCallback: axisZoomCallback,
        className: className,
        zoomCursorClassName: zoomCursorClassName,
        inverted: inverted,
        onContextMenu: onContextMenu,
        onDoubleClick: onDoubleClick
      }) : null;
      return /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(".concat(transform[0], ", ").concat(transform[1], ")")
      }, zoomCapture, /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        ref: this.saveNode,
        canvasToDraw: _GenericComponent.getAxisCanvas,
        clip: false,
        edgeClip: edgeClip,
        svgDraw: this.renderSVG,
        canvasDraw: this.drawOnCanvas,
        drawOn: ["pan"]
      }));
    }
  }]);

  return Axis;
}(_react.Component);

Axis.propTypes = {
  innerTickSize: _propTypes["default"].number,
  outerTickSize: _propTypes["default"].number,
  tickFormat: _propTypes["default"].func,
  tickPadding: _propTypes["default"].number,
  tickSize: _propTypes["default"].number,
  ticks: _propTypes["default"].number,
  tickLabelFill: _propTypes["default"].string,
  tickStroke: _propTypes["default"].string,
  tickStrokeOpacity: _propTypes["default"].number,
  tickStrokeWidth: _propTypes["default"].number,
  tickStrokeDasharray: _propTypes["default"].oneOf(_utils.strokeDashTypes),
  tickValues: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].func]),
  tickInterval: _propTypes["default"].number,
  tickIntervalFunction: _propTypes["default"].func,
  showDomain: _propTypes["default"].bool,
  showTicks: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  axisZoomCallback: _propTypes["default"].func,
  zoomEnabled: _propTypes["default"].bool,
  inverted: _propTypes["default"].bool,
  zoomCursorClassName: _propTypes["default"].string,
  transform: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  range: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  getMouseDelta: _propTypes["default"].func.isRequired,
  getScale: _propTypes["default"].func.isRequired,
  bg: _propTypes["default"].object.isRequired,
  edgeClip: _propTypes["default"].bool.isRequired,
  onContextMenu: _propTypes["default"].func,
  onDoubleClick: _propTypes["default"].func
};
Axis.defaultProps = {
  zoomEnabled: false,
  zoomCursorClassName: "",
  edgeClip: false
};

function tickHelper(props, scale) {
  var orient = props.orient,
      innerTickSize = props.innerTickSize,
      tickFormat = props.tickFormat,
      tickPadding = props.tickPadding,
      tickLabelFill = props.tickLabelFill,
      tickStrokeWidth = props.tickStrokeWidth,
      tickStrokeDasharray = props.tickStrokeDasharray,
      fontSize = props.fontSize,
      fontFamily = props.fontFamily,
      fontWeight = props.fontWeight,
      showTicks = props.showTicks,
      flexTicks = props.flexTicks,
      showTickLabel = props.showTickLabel;
  var tickArguments = props.ticks,
      tickValuesProp = props.tickValues,
      tickStroke = props.tickStroke,
      tickStrokeOpacity = props.tickStrokeOpacity,
      tickInterval = props.tickInterval,
      tickIntervalFunction = props.tickIntervalFunction; // if (tickArguments) tickArguments = [tickArguments];

  var tickValues;

  if ((0, _utils.isDefined)(tickValuesProp)) {
    if (typeof tickValuesProp === "function") {
      tickValues = tickValuesProp(scale.domain());
    } else {
      tickValues = tickValuesProp;
    }
  } else if ((0, _utils.isDefined)(tickInterval)) {
    var _scale$domain = scale.domain(),
        _scale$domain2 = _slicedToArray(_scale$domain, 2),
        min = _scale$domain2[0],
        max = _scale$domain2[1];

    var baseTickValues = (0, _d3Array.range)(min, max, (max - min) / tickInterval);
    tickValues = tickIntervalFunction ? tickIntervalFunction(min, max, tickInterval) : baseTickValues;
  } else if ((0, _utils.isDefined)(scale.ticks)) {
    tickValues = scale.ticks(tickArguments, flexTicks);
  } else {
    tickValues = scale.domain();
  }

  var baseFormat = scale.tickFormat ? scale.tickFormat(tickArguments) : _utils.identity;
  var format = (0, _utils.isNotDefined)(tickFormat) ? baseFormat : function (d) {
    return tickFormat(d) || "";
  };
  var sign = orient === "top" || orient === "left" ? -1 : 1;
  var tickSpacing = Math.max(innerTickSize, 0) + tickPadding;
  var ticks, dy, canvas_dy, textAnchor;

  if (orient === "bottom" || orient === "top") {
    dy = sign < 0 ? "0em" : ".71em";
    canvas_dy = sign < 0 ? 0 : fontSize * .71;
    textAnchor = "middle";
    ticks = tickValues.map(function (d) {
      var x = Math.round(scale(d));
      return {
        value: d,
        x1: x,
        y1: 0,
        x2: x,
        y2: sign * innerTickSize,
        labelX: x,
        labelY: sign * tickSpacing
      };
    });

    if (showTicks && flexTicks) {
      // console.log(ticks, showTicks);
      var nodes = ticks.map(function (d) {
        return {
          id: d.value,
          value: d.value,
          fy: d.y2,
          origX: d.x1
        };
      });
      var simulation = (0, _d3Force.forceSimulation)(nodes).force("x", (0, _d3Force.forceX)(function (d) {
        return d.origX;
      }).strength(1)).force("collide", (0, _d3Force.forceCollide)(22)) // .force("center", forceCenter())
      .stop();

      for (var i = 0; i < 100; ++i) {
        simulation.tick();
      } // console.log(nodes);


      var zip = (0, _utils.zipper)().combine(function (a, b) {
        if (Math.abs(b.x - b.origX) > 0.01) {
          return _objectSpread(_objectSpread({}, a), {}, {
            x2: b.x,
            labelX: b.x
          });
        }

        return a;
      });
      ticks = zip(ticks, nodes);
    }
  } else {
    ticks = tickValues.map(function (d) {
      var y = Math.round(scale(d));
      return {
        value: d,
        x1: 0,
        y1: y,
        x2: sign * innerTickSize,
        y2: y,
        labelX: sign * tickSpacing,
        labelY: y
      };
    });
    dy = ".32em";
    canvas_dy = fontSize * .32;
    textAnchor = sign < 0 ? "end" : "start";
  }

  return {
    ticks: ticks,
    scale: scale,
    tickStroke: tickStroke,
    tickLabelFill: tickLabelFill || tickStroke,
    tickStrokeOpacity: tickStrokeOpacity,
    tickStrokeWidth: tickStrokeWidth,
    tickStrokeDasharray: tickStrokeDasharray,
    dy: dy,
    canvas_dy: canvas_dy,
    textAnchor: textAnchor,
    fontSize: fontSize,
    fontFamily: fontFamily,
    fontWeight: fontWeight,
    format: format,
    showTickLabel: showTickLabel
  };
}
/* eslint-disable react/prop-types */


function axisLineSVG(props, range) {
  var orient = props.orient,
      outerTickSize = props.outerTickSize;
  var domainClassName = props.domainClassName,
      fill = props.fill,
      stroke = props.stroke,
      strokeWidth = props.strokeWidth,
      opacity = props.opacity;
  var sign = orient === "top" || orient === "left" ? -1 : 1;
  var d;

  if (orient === "bottom" || orient === "top") {
    d = "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize;
  } else {
    d = "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize;
  }

  return /*#__PURE__*/_react["default"].createElement("path", {
    className: domainClassName,
    d: d,
    fill: fill,
    opacity: opacity,
    stroke: stroke,
    strokeWidth: strokeWidth
  });
}
/* eslint-enable react/prop-types */


function drawAxisLine(ctx, props, range) {
  // props = { ...AxisLine.defaultProps, ...props };
  var orient = props.orient,
      outerTickSize = props.outerTickSize,
      stroke = props.stroke,
      strokeWidth = props.strokeWidth,
      opacity = props.opacity;
  var sign = orient === "top" || orient === "left" ? -1 : 1;
  var xAxis = orient === "bottom" || orient === "top"; // var range = d3_scaleRange(xAxis ? xScale : yScale);

  ctx.lineWidth = strokeWidth;
  ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, opacity);
  ctx.beginPath();

  if (xAxis) {
    ctx.moveTo((0, _utils.first)(range), sign * outerTickSize);
    ctx.lineTo((0, _utils.first)(range), 0);
    ctx.lineTo((0, _utils.last)(range), 0);
    ctx.lineTo((0, _utils.last)(range), sign * outerTickSize);
  } else {
    ctx.moveTo(sign * outerTickSize, (0, _utils.first)(range));
    ctx.lineTo(0, (0, _utils.first)(range));
    ctx.lineTo(0, (0, _utils.last)(range));
    ctx.lineTo(sign * outerTickSize, (0, _utils.last)(range));
  }

  ctx.stroke();
}

function Tick(props) {
  var tickLabelFill = props.tickLabelFill,
      tickStroke = props.tickStroke,
      tickStrokeOpacity = props.tickStrokeOpacity,
      tickStrokeDasharray = props.tickStrokeDasharray,
      tickStrokeWidth = props.tickStrokeWidth,
      textAnchor = props.textAnchor,
      fontSize = props.fontSize,
      fontFamily = props.fontFamily,
      fontWeight = props.fontWeight;
  var x1 = props.x1,
      y1 = props.y1,
      x2 = props.x2,
      y2 = props.y2,
      labelX = props.labelX,
      labelY = props.labelY,
      dy = props.dy;
  return /*#__PURE__*/_react["default"].createElement("g", {
    className: "tick"
  }, /*#__PURE__*/_react["default"].createElement("line", {
    shapeRendering: "crispEdges",
    opacity: tickStrokeOpacity,
    stroke: tickStroke,
    strokeWidth: tickStrokeWidth,
    strokeDasharray: (0, _utils.getStrokeDasharray)(tickStrokeDasharray),
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
  }), /*#__PURE__*/_react["default"].createElement("text", {
    dy: dy,
    x: labelX,
    y: labelY,
    fill: tickLabelFill,
    fontSize: fontSize,
    fontWeight: fontWeight,
    fontFamily: fontFamily,
    textAnchor: textAnchor
  }, props.children));
}

Tick.propTypes = {
  children: _propTypes["default"].string.isRequired,
  x1: _propTypes["default"].number.isRequired,
  y1: _propTypes["default"].number.isRequired,
  x2: _propTypes["default"].number.isRequired,
  y2: _propTypes["default"].number.isRequired,
  labelX: _propTypes["default"].number.isRequired,
  labelY: _propTypes["default"].number.isRequired,
  dy: _propTypes["default"].string.isRequired,
  tickStroke: _propTypes["default"].string,
  tickLabelFill: _propTypes["default"].string,
  tickStrokeWidth: _propTypes["default"].number,
  tickStrokeOpacity: _propTypes["default"].number,
  tickStrokeDasharray: _propTypes["default"].oneOf(_utils.strokeDashTypes),
  textAnchor: _propTypes["default"].string,
  fontSize: _propTypes["default"].number,
  fontFamily: _propTypes["default"].string,
  fontWeight: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};

function axisTicksSVG(props, scale) {
  var result = tickHelper(props, scale);
  var tickLabelFill = result.tickLabelFill,
      tickStroke = result.tickStroke,
      tickStrokeOpacity = result.tickStrokeOpacity,
      tickStrokeWidth = result.tickStrokeWidth,
      tickStrokeDasharray = result.tickStrokeDasharray,
      textAnchor = result.textAnchor;
  var fontSize = result.fontSize,
      fontFamily = result.fontFamily,
      fontWeight = result.fontWeight,
      ticks = result.ticks,
      format = result.format;
  var dy = result.dy;
  return /*#__PURE__*/_react["default"].createElement("g", null, ticks.map(function (tick, idx) {
    return /*#__PURE__*/_react["default"].createElement(Tick, {
      key: idx,
      tickStroke: tickStroke,
      tickLabelFill: tickLabelFill,
      tickStrokeWidth: tickStrokeWidth,
      tickStrokeOpacity: tickStrokeOpacity,
      tickStrokeDasharray: tickStrokeDasharray,
      dy: dy,
      x1: tick.x1,
      y1: tick.y1,
      x2: tick.x2,
      y2: tick.y2,
      labelX: tick.labelX,
      labelY: tick.labelY,
      textAnchor: textAnchor,
      fontSize: fontSize,
      fontWeight: fontWeight,
      fontFamily: fontFamily
    }, format(tick.value));
  }));
}

function drawTicks(ctx, result) {
  var tickStroke = result.tickStroke,
      tickStrokeOpacity = result.tickStrokeOpacity,
      tickLabelFill = result.tickLabelFill;
  var textAnchor = result.textAnchor,
      fontSize = result.fontSize,
      fontFamily = result.fontFamily,
      fontWeight = result.fontWeight,
      ticks = result.ticks,
      showTickLabel = result.showTickLabel;
  ctx.strokeStyle = (0, _utils.hexToRGBA)(tickStroke, tickStrokeOpacity);
  ctx.fillStyle = tickStroke; // ctx.textBaseline = 'middle';

  ticks.forEach(function (tick) {
    drawEachTick(ctx, tick, result);
  });
  ctx.font = "".concat(fontWeight, " ").concat(fontSize, "px ").concat(fontFamily);
  ctx.fillStyle = tickLabelFill;
  ctx.textAlign = textAnchor === "middle" ? "center" : textAnchor;

  if (showTickLabel) {
    ticks.forEach(function (tick) {
      drawEachTickLabel(ctx, tick, result);
    });
  }
}

function drawEachTick(ctx, tick, result) {
  var tickStrokeWidth = result.tickStrokeWidth,
      tickStrokeDasharray = result.tickStrokeDasharray;
  ctx.beginPath();
  ctx.moveTo(tick.x1, tick.y1);
  ctx.lineTo(tick.x2, tick.y2);
  ctx.lineWidth = tickStrokeWidth;
  ctx.setLineDash((0, _utils.getStrokeDasharray)(tickStrokeDasharray).split(","));
  ctx.stroke();
}

function drawEachTickLabel(ctx, tick, result) {
  var canvas_dy = result.canvas_dy,
      format = result.format;
  ctx.beginPath();
  ctx.fillText(format(tick.value), tick.labelX, tick.labelY + canvas_dy);
}

var _default = Axis;
exports["default"] = _default;
//# sourceMappingURL=Axis.js.map