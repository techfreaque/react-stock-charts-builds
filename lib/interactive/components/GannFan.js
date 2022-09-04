"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Array = require("d3-array");

var _d3Path = require("d3-path");

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

var GannFan = /*#__PURE__*/function (_Component) {
  _inherits(GannFan, _Component);

  var _super = _createSuper(GannFan);

  function GannFan(props) {
    var _this;

    _classCallCheck(this, GannFan);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    _this.isHover = _this.isHover.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GannFan, [{
    key: "isHover",
    value: function isHover(moreProps) {
      var _this$props = this.props,
          tolerance = _this$props.tolerance,
          onHover = _this$props.onHover;
      var mouseXY = moreProps.mouseXY;

      var _mouseXY = _slicedToArray(mouseXY, 2),
          mouseX = _mouseXY[0],
          mouseY = _mouseXY[1];

      var hovering = false;

      if ((0, _utils.isDefined)(onHover)) {
        var lines = helper(this.props, moreProps);

        for (var i = 0; i < lines.length; i++) {
          var line1 = lines[i];
          var left = Math.min(line1.x1, line1.x2);
          var right = Math.max(line1.x1, line1.x2);
          var top = Math.min(line1.y1, line1.y2);
          var bottom = Math.max(line1.y1, line1.y2);
          var isWithinLineBounds = mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
          hovering = isWithinLineBounds && (0, _StraightLine.isHovering2)([line1.x1, line1.y1], [line1.x2, line1.y2], mouseXY, tolerance);
          if (hovering) break;
        }
      }

      return hovering;
    }
  }, {
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var _this$props2 = this.props,
          stroke = _this$props2.stroke,
          strokeWidth = _this$props2.strokeWidth,
          strokeOpacity = _this$props2.strokeOpacity,
          fill = _this$props2.fill,
          fillOpacity = _this$props2.fillOpacity,
          fontFamily = _this$props2.fontFamily,
          fontSize = _this$props2.fontSize,
          fontFill = _this$props2.fontFill;
      var lines = helper(this.props, moreProps);
      ctx.lineWidth = strokeWidth;
      ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, strokeOpacity);
      ctx.font = "".concat(fontSize, "px ").concat(fontFamily);
      ctx.fillStyle = fontFill;
      lines.forEach(function (line) {
        var x1 = line.x1,
            y1 = line.y1,
            x2 = line.x2,
            y2 = line.y2,
            label = line.label;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.beginPath();
        ctx.fillText(label.text, label.x, label.y);
      });
      var pairsOfLines = (0, _d3Array.pairs)(lines);
      pairsOfLines.forEach(function (_ref, idx) {
        var _ref2 = _slicedToArray(_ref, 2),
            line1 = _ref2[0],
            line2 = _ref2[1];

        ctx.fillStyle = (0, _utils.hexToRGBA)(fill[idx], fillOpacity);
        ctx.beginPath();
        ctx.moveTo(line1.x1, line1.y1);
        ctx.lineTo(line1.x2, line1.y2);
        ctx.lineTo(line2.x2, line2.y2);
        ctx.closePath();
        ctx.fill();
      });
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
      var lines = helper(this.props, moreProps);
      var pairsOfLines = (0, _d3Array.pairs)(lines);
      return /*#__PURE__*/_react["default"].createElement("g", null, lines.map(function (each, idx) {
        var x1 = each.x1,
            y1 = each.y1,
            x2 = each.x2,
            y2 = each.y2;
        return /*#__PURE__*/_react["default"].createElement("line", {
          key: idx,
          strokeWidth: strokeWidth,
          stroke: stroke,
          strokeOpacity: strokeOpacity,
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2
        });
      }), pairsOfLines.map(function (_ref3, idx) {
        var _ref4 = _slicedToArray(_ref3, 2),
            line1 = _ref4[0],
            line2 = _ref4[1];

        var ctx = (0, _d3Path.path)();
        ctx.moveTo(line1.x1, line1.y1);
        ctx.lineTo(line1.x2, line1.y2);
        ctx.lineTo(line2.x2, line2.y2);
        ctx.closePath();
        return /*#__PURE__*/_react["default"].createElement("path", {
          key: idx,
          stroke: "none",
          fill: fill[idx],
          fillOpacity: fillOpacity,
          d: ctx.toString()
        });
      }));
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

  return GannFan;
}(_react.Component);

function getLineCoordinates(start, endX, endY, text) {
  var end = [endX, endY];
  return {
    start: start,
    end: end,
    text: text
  };
}

function helper(props, moreProps) {
  var startXY = props.startXY,
      endXY = props.endXY;
  var xScale = moreProps.xScale,
      yScale = moreProps.chartConfig.yScale;

  if ((0, _utils.isNotDefined)(startXY) || (0, _utils.isNotDefined)(endXY)) {
    return [];
  }

  var _startXY = _slicedToArray(startXY, 2),
      x1 = _startXY[0],
      y1 = _startXY[1];

  var _endXY = _slicedToArray(endXY, 2),
      x2 = _endXY[0],
      y2 = _endXY[1];

  var dx = x2 - x1;
  var dy = y2 - y1;

  if (dx !== 0 && dy !== 0) {
    // console.log("modLine ->", startXY, modLine, dx1, dy1)
    var halfY = getLineCoordinates(startXY, x2, y1 + dy / 2, "2/1");
    var oneThirdY = getLineCoordinates(startXY, x2, y1 + dy / 3, "3/1");
    var oneFourthY = getLineCoordinates(startXY, x2, y1 + dy / 4, "4/1");
    var oneEighthY = getLineCoordinates(startXY, x2, y1 + dy / 8, "8/1");
    var halfX = getLineCoordinates(startXY, x1 + dx / 2, y2, "1/2");
    var oneThirdX = getLineCoordinates(startXY, x1 + dx / 3, y2, "1/3");
    var oneFourthX = getLineCoordinates(startXY, x1 + dx / 4, y2, "1/4");
    var oneEighthX = getLineCoordinates(startXY, x1 + dx / 8, y2, "1/8");
    var lines = [oneEighthX, oneFourthX, oneThirdX, halfX, {
      start: startXY,
      end: endXY,
      text: "1/1"
    }, halfY, oneThirdY, oneFourthY, oneEighthY];
    var lineCoods = lines.map(function (line) {
      var _generateLine = (0, _StraightLine.generateLine)({
        type: "RAY",
        start: line.start,
        end: line.end,
        xScale: xScale,
        yScale: yScale
      }),
          x1 = _generateLine.x1,
          y1 = _generateLine.y1,
          x2 = _generateLine.x2,
          y2 = _generateLine.y2;

      return {
        x1: xScale(x1),
        y1: yScale(y1),
        x2: xScale(x2),
        y2: yScale(y2),
        label: {
          x: xScale(line.end[0]),
          y: yScale(line.end[1]),
          text: line.text
        }
      };
    });
    return lineCoods;
  }

  return [];
}

GannFan.propTypes = {
  interactiveCursorClass: _propTypes["default"].string,
  stroke: _propTypes["default"].string.isRequired,
  strokeWidth: _propTypes["default"].number.isRequired,
  fill: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  strokeOpacity: _propTypes["default"].number.isRequired,
  fillOpacity: _propTypes["default"].number.isRequired,
  fontFamily: _propTypes["default"].string.isRequired,
  fontSize: _propTypes["default"].number.isRequired,
  fontFill: _propTypes["default"].string.isRequired,
  onDragStart: _propTypes["default"].func.isRequired,
  onDrag: _propTypes["default"].func.isRequired,
  onDragComplete: _propTypes["default"].func.isRequired,
  onHover: _propTypes["default"].func,
  onUnHover: _propTypes["default"].func,
  defaultClassName: _propTypes["default"].string,
  tolerance: _propTypes["default"].number.isRequired,
  selected: _propTypes["default"].bool.isRequired
};
GannFan.defaultProps = {
  onDragStart: _utils.noop,
  onDrag: _utils.noop,
  onDragComplete: _utils.noop,
  strokeWidth: 1,
  tolerance: 4,
  selected: false
};
var _default = GannFan;
exports["default"] = _default;
//# sourceMappingURL=GannFan.js.map