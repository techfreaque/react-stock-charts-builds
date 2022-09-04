"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.generateLine = generateLine;
exports.getSlope = getSlope;
exports.getYIntercept = getYIntercept;
exports.isHovering = isHovering;
exports.isHovering2 = isHovering2;

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

var StraightLine = /*#__PURE__*/function (_Component) {
  _inherits(StraightLine, _Component);

  var _super = _createSuper(StraightLine);

  function StraightLine(props) {
    var _this;

    _classCallCheck(this, StraightLine);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    _this.isHover = _this.isHover.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(StraightLine, [{
    key: "isHover",
    value: function isHover(moreProps) {
      var _this$props = this.props,
          tolerance = _this$props.tolerance,
          onHover = _this$props.onHover;

      if ((0, _utils.isDefined)(onHover)) {
        var _this$props2 = this.props,
            x1Value = _this$props2.x1Value,
            x2Value = _this$props2.x2Value,
            y1Value = _this$props2.y1Value,
            y2Value = _this$props2.y2Value,
            type = _this$props2.type;
        var mouseXY = moreProps.mouseXY,
            xScale = moreProps.xScale;
        var yScale = moreProps.chartConfig.yScale;
        var hovering = isHovering({
          x1Value: x1Value,
          y1Value: y1Value,
          x2Value: x2Value,
          y2Value: y2Value,
          mouseXY: mouseXY,
          type: type,
          tolerance: tolerance,
          xScale: xScale,
          yScale: yScale
        }); // console.log("hovering ->", hovering);

        return hovering;
      }

      return false;
    }
  }, {
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var _this$props3 = this.props,
          stroke = _this$props3.stroke,
          strokeWidth = _this$props3.strokeWidth,
          strokeOpacity = _this$props3.strokeOpacity,
          strokeDasharray = _this$props3.strokeDasharray;

      var _helper = helper(this.props, moreProps),
          x1 = _helper.x1,
          y1 = _helper.y1,
          x2 = _helper.x2,
          y2 = _helper.y2;

      ctx.lineWidth = strokeWidth;
      ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, strokeOpacity);
      ctx.setLineDash((0, _utils.getStrokeDasharray)(strokeDasharray).split(","));
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var _this$props4 = this.props,
          stroke = _this$props4.stroke,
          strokeWidth = _this$props4.strokeWidth,
          strokeOpacity = _this$props4.strokeOpacity,
          strokeDasharray = _this$props4.strokeDasharray;
      var lineWidth = strokeWidth;

      var _helper2 = helper(this.props, moreProps),
          x1 = _helper2.x1,
          y1 = _helper2.y1,
          x2 = _helper2.x2,
          y2 = _helper2.y2;

      return /*#__PURE__*/_react["default"].createElement("line", {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        stroke: stroke,
        strokeWidth: lineWidth,
        strokeDasharray: (0, _utils.getStrokeDasharray)(strokeDasharray),
        strokeOpacity: strokeOpacity
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          selected = _this$props5.selected,
          interactiveCursorClass = _this$props5.interactiveCursorClass;
      var _this$props6 = this.props,
          onDragStart = _this$props6.onDragStart,
          onDrag = _this$props6.onDrag,
          onDragComplete = _this$props6.onDragComplete,
          onHover = _this$props6.onHover,
          onUnHover = _this$props6.onUnHover;
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
        drawOn: ["mousemove", "pan", "drag"]
      });
    }
  }]);

  return StraightLine;
}(_react.Component);

function isHovering2(start, end, _ref, tolerance) {
  var _ref2 = _slicedToArray(_ref, 2),
      mouseX = _ref2[0],
      mouseY = _ref2[1];

  var m = getSlope(start, end);

  if ((0, _utils.isDefined)(m)) {
    var b = getYIntercept(m, end);
    var y = m * mouseX + b;
    return mouseY < y + tolerance && mouseY > y - tolerance && mouseX > Math.min(start[0], end[0]) - tolerance && mouseX < Math.max(start[0], end[0]) + tolerance;
  } else {
    return mouseY >= Math.min(start[1], end[1]) && mouseY <= Math.max(start[1], end[1]) && mouseX < start[0] + tolerance && mouseX > start[0] - tolerance;
  }
}

function isHovering(_ref3) {
  var x1Value = _ref3.x1Value,
      y1Value = _ref3.y1Value,
      x2Value = _ref3.x2Value,
      y2Value = _ref3.y2Value,
      mouseXY = _ref3.mouseXY,
      type = _ref3.type,
      tolerance = _ref3.tolerance,
      xScale = _ref3.xScale,
      yScale = _ref3.yScale;
  var line = generateLine({
    type: type,
    start: [x1Value, y1Value],
    end: [x2Value, y2Value],
    xScale: xScale,
    yScale: yScale
  });
  var start = [xScale(line.x1), yScale(line.y1)];
  var end = [xScale(line.x2), yScale(line.y2)];
  var m = getSlope(start, end);

  var _mouseXY = _slicedToArray(mouseXY, 2),
      mouseX = _mouseXY[0],
      mouseY = _mouseXY[1];

  if ((0, _utils.isDefined)(m)) {
    var b = getYIntercept(m, end);
    var y = m * mouseX + b;
    return mouseY < y + tolerance && mouseY > y - tolerance && mouseX > Math.min(start[0], end[0]) - tolerance && mouseX < Math.max(start[0], end[0]) + tolerance;
  } else {
    return mouseY >= Math.min(start[1], end[1]) && mouseY <= Math.max(start[1], end[1]) && mouseX < start[0] + tolerance && mouseX > start[0] - tolerance;
  }
}

function helper(props, moreProps) {
  var x1Value = props.x1Value,
      x2Value = props.x2Value,
      y1Value = props.y1Value,
      y2Value = props.y2Value,
      type = props.type;
  var xScale = moreProps.xScale,
      yScale = moreProps.chartConfig.yScale;
  var modLine = generateLine({
    type: type,
    start: [x1Value, y1Value],
    end: [x2Value, y2Value],
    xScale: xScale,
    yScale: yScale
  });
  var x1 = xScale(modLine.x1);
  var y1 = yScale(modLine.y1);
  var x2 = xScale(modLine.x2);
  var y2 = yScale(modLine.y2);
  return {
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
  };
}

function getSlope(start, end) {
  var m
  /* slope */
  = end[0] === start[0] ? undefined : (end[1] - start[1]) / (end[0] - start[0]);
  return m;
}

function getYIntercept(m, end) {
  var b
  /* y intercept */
  = -1 * m * end[0] + end[1];
  return b;
}

function generateLine(_ref4) {
  var type = _ref4.type,
      start = _ref4.start,
      end = _ref4.end,
      xScale = _ref4.xScale,
      yScale = _ref4.yScale;
  var m
  /* slope */
  = getSlope(start, end); // console.log(end[0] - start[0], m)

  var b
  /* y intercept */
  = getYIntercept(m, start);

  switch (type) {
    case "XLINE":
      return getXLineCoordinates({
        type: type,
        start: start,
        end: end,
        xScale: xScale,
        yScale: yScale,
        m: m,
        b: b
      });

    case "RAY":
      return getRayCoordinates({
        type: type,
        start: start,
        end: end,
        xScale: xScale,
        yScale: yScale,
        m: m,
        b: b
      });

    case "LINE":
      return getLineCoordinates({
        type: type,
        start: start,
        end: end,
        xScale: xScale,
        yScale: yScale,
        m: m,
        b: b
      });
  }
}

function getXLineCoordinates(_ref5) {
  var start = _ref5.start,
      end = _ref5.end,
      xScale = _ref5.xScale,
      yScale = _ref5.yScale,
      m = _ref5.m,
      b = _ref5.b;

  var _xScale$domain = xScale.domain(),
      _xScale$domain2 = _slicedToArray(_xScale$domain, 2),
      xBegin = _xScale$domain2[0],
      xFinish = _xScale$domain2[1];

  var _yScale$domain = yScale.domain(),
      _yScale$domain2 = _slicedToArray(_yScale$domain, 2),
      yBegin = _yScale$domain2[0],
      yFinish = _yScale$domain2[1];

  if (end[0] === start[0]) {
    return {
      x1: end[0],
      y1: yBegin,
      x2: end[0],
      y2: yFinish
    };
  }

  var _ref6 = end[0] > start[0] ? [xBegin, xFinish] : [xFinish, xBegin],
      _ref7 = _slicedToArray(_ref6, 2),
      x1 = _ref7[0],
      x2 = _ref7[1];

  return {
    x1: x1,
    y1: m * x1 + b,
    x2: x2,
    y2: m * x2 + b
  };
}

function getRayCoordinates(_ref8) {
  var start = _ref8.start,
      end = _ref8.end,
      xScale = _ref8.xScale,
      yScale = _ref8.yScale,
      m = _ref8.m,
      b = _ref8.b;

  var _xScale$domain3 = xScale.domain(),
      _xScale$domain4 = _slicedToArray(_xScale$domain3, 2),
      xBegin = _xScale$domain4[0],
      xFinish = _xScale$domain4[1];

  var _yScale$domain3 = yScale.domain(),
      _yScale$domain4 = _slicedToArray(_yScale$domain3, 2),
      yBegin = _yScale$domain4[0],
      yFinish = _yScale$domain4[1];

  var x1 = start[0];

  if (end[0] === start[0]) {
    return {
      x1: x1,
      y1: start[1],
      x2: x1,
      y2: end[1] > start[1] ? yFinish : yBegin
    };
  }

  var x2 = end[0] > start[0] ? xFinish : xBegin;
  return {
    x1: x1,
    y1: m * x1 + b,
    x2: x2,
    y2: m * x2 + b
  };
}

function getLineCoordinates(_ref9) {
  var start = _ref9.start,
      end = _ref9.end;

  var _start = _slicedToArray(start, 2),
      x1 = _start[0],
      y1 = _start[1];

  var _end = _slicedToArray(end, 2),
      x2 = _end[0],
      y2 = _end[1];

  if (end[0] === start[0]) {
    return {
      x1: x1,
      y1: start[1],
      x2: x1,
      y2: end[1]
    };
  }

  return {
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
  };
}

StraightLine.propTypes = {
  x1Value: _propTypes["default"].any.isRequired,
  x2Value: _propTypes["default"].any.isRequired,
  y1Value: _propTypes["default"].any.isRequired,
  y2Value: _propTypes["default"].any.isRequired,
  interactiveCursorClass: _propTypes["default"].string,
  stroke: _propTypes["default"].string.isRequired,
  strokeWidth: _propTypes["default"].number.isRequired,
  strokeOpacity: _propTypes["default"].number.isRequired,
  strokeDasharray: _propTypes["default"].oneOf(_utils.strokeDashTypes),
  type: _propTypes["default"].oneOf(["XLINE", // extends from -Infinity to +Infinity
  "RAY", // extends to +/-Infinity in one direction
  "LINE" // extends between the set bounds
  ]).isRequired,
  onEdge1Drag: _propTypes["default"].func.isRequired,
  onEdge2Drag: _propTypes["default"].func.isRequired,
  onDragStart: _propTypes["default"].func.isRequired,
  onDrag: _propTypes["default"].func.isRequired,
  onDragComplete: _propTypes["default"].func.isRequired,
  onHover: _propTypes["default"].func,
  onUnHover: _propTypes["default"].func,
  defaultClassName: _propTypes["default"].string,
  r: _propTypes["default"].number.isRequired,
  edgeFill: _propTypes["default"].string.isRequired,
  edgeStroke: _propTypes["default"].string.isRequired,
  edgeStrokeWidth: _propTypes["default"].number.isRequired,
  withEdge: _propTypes["default"].bool.isRequired,
  children: _propTypes["default"].func.isRequired,
  tolerance: _propTypes["default"].number.isRequired,
  selected: _propTypes["default"].bool.isRequired
};
StraightLine.defaultProps = {
  onEdge1Drag: _utils.noop,
  onEdge2Drag: _utils.noop,
  onDragStart: _utils.noop,
  onDrag: _utils.noop,
  onDragComplete: _utils.noop,
  edgeStrokeWidth: 3,
  edgeStroke: "#000000",
  edgeFill: "#FFFFFF",
  r: 10,
  withEdge: false,
  strokeWidth: 1,
  strokeDasharray: "Solid",
  children: _utils.noop,
  tolerance: 7,
  selected: false
};
var _default = StraightLine;
exports["default"] = _default;
//# sourceMappingURL=StraightLine.js.map