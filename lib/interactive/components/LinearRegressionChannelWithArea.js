"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.edge1Provider = edge1Provider;
exports.edge2Provider = edge2Provider;

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

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var LinearRegressionChannelWithArea = /*#__PURE__*/function (_Component) {
  _inherits(LinearRegressionChannelWithArea, _Component);

  var _super = _createSuper(LinearRegressionChannelWithArea);

  function LinearRegressionChannelWithArea(props) {
    var _this;

    _classCallCheck(this, LinearRegressionChannelWithArea);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    _this.isHover = _this.isHover.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LinearRegressionChannelWithArea, [{
    key: "isHover",
    value: function isHover(moreProps) {
      var _this$props = this.props,
          tolerance = _this$props.tolerance,
          onHover = _this$props.onHover;

      if ((0, _utils.isDefined)(onHover)) {
        var mouseXY = moreProps.mouseXY;

        var _helper = helper(this.props, moreProps),
            x1 = _helper.x1,
            y1 = _helper.y1,
            x2 = _helper.x2,
            y2 = _helper.y2,
            dy = _helper.dy;

        var yDiffs = [-dy, 0, dy];
        var hovering = yDiffs.reduce(function (result, diff) {
          return result || (0, _StraightLine.isHovering2)([x1, y1 + diff], [x2, y2 + diff], mouseXY, tolerance);
        }, false);
        return hovering;
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
          x1 = _helper2.x1,
          y1 = _helper2.y1,
          x2 = _helper2.x2,
          y2 = _helper2.y2,
          dy = _helper2.dy;

      ctx.lineWidth = strokeWidth;
      ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, strokeOpacity);
      ctx.fillStyle = (0, _utils.hexToRGBA)(fill, fillOpacity);
      ctx.beginPath();
      ctx.moveTo(x1, y1 - dy);
      ctx.lineTo(x2, y2 - dy);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x2, y2 + dy);
      ctx.lineTo(x1, y1 + dy);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x1, y1 - dy);
      ctx.lineTo(x2, y2 - dy);
      ctx.lineTo(x2, y2 + dy);
      ctx.lineTo(x1, y1 + dy);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(x1, y1);
      ctx.stroke();
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var _this$props3 = this.props,
          stroke = _this$props3.stroke,
          strokeWidth = _this$props3.strokeWidth,
          fillOpacity = _this$props3.fillOpacity,
          strokeOpacity = _this$props3.strokeOpacity,
          fill = _this$props3.fill;

      var _helper3 = helper(this.props, moreProps),
          x1 = _helper3.x1,
          y1 = _helper3.y1,
          x2 = _helper3.x2,
          y2 = _helper3.y2,
          dy = _helper3.dy;

      var line = {
        strokeWidth: strokeWidth,
        stroke: stroke,
        strokeOpacity: strokeOpacity
      };
      var ctx = (0, _d3Path.path)();
      ctx.moveTo(x1, y1 - dy);
      ctx.lineTo(x2, y2 - dy);
      ctx.lineTo(x2, y2 + dy);
      ctx.lineTo(x1, y1 + dy);
      ctx.closePath();
      return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("line", _extends({}, line, {
        x1: x1,
        y1: y1 - dy,
        x2: x2,
        y2: y2 - dy
      })), /*#__PURE__*/_react["default"].createElement("line", _extends({}, line, {
        x1: x1,
        y1: y1 + dy,
        x2: x2,
        y2: y2 + dy
      })), /*#__PURE__*/_react["default"].createElement("path", {
        d: ctx.toString(),
        fillRule: fill,
        fillOpacity: fillOpacity
      }), /*#__PURE__*/_react["default"].createElement("line", _extends({}, line, {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          selected = _this$props4.selected,
          interactiveCursorClass = _this$props4.interactiveCursorClass;
      var _this$props5 = this.props,
          onHover = _this$props5.onHover,
          onUnHover = _this$props5.onUnHover;
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        isHover: this.isHover,
        svgDraw: this.renderSVG,
        canvasToDraw: _GenericComponent.getMouseCanvas,
        canvasDraw: this.drawOnCanvas,
        interactiveCursorClass: interactiveCursorClass,
        selected: selected,
        onHover: onHover,
        onUnHover: onUnHover,
        drawOn: ["mousemove", "mouseleave", "pan", "drag"]
      });
    }
  }]);

  return LinearRegressionChannelWithArea;
}(_react.Component);

function edge1Provider(props) {
  return function (moreProps) {
    var _helper4 = helper(props, moreProps),
        x1 = _helper4.x1,
        y1 = _helper4.y1;

    return [x1, y1];
  };
}

function edge2Provider(props) {
  return function (moreProps) {
    var _helper5 = helper(props, moreProps),
        x2 = _helper5.x2,
        y2 = _helper5.y2;

    return [x2, y2];
  };
}

function helper(props, moreProps) {
  var x1Value = props.x1Value,
      x2Value = props.x2Value,
      type = props.type;
  var xScale = moreProps.xScale,
      yScale = moreProps.chartConfig.yScale,
      fullData = moreProps.fullData;
  var xAccessor = moreProps.xAccessor;
  /*
  http://www.metastock.com/Customer/Resources/TAAZ/?p=65
  y = a + bx
  n = length of array
  b = (n * sum(x*y) - sum(xs) * sum(ys)) / (n * sum(xSquareds) - (sum(xs) ^ 2))
  a = (sum of closes)
  */

  var _getClosestItemIndexe = (0, _utils.getClosestItemIndexes)(fullData, x1Value, xAccessor),
      left = _getClosestItemIndexe.left;

  var _getClosestItemIndexe2 = (0, _utils.getClosestItemIndexes)(fullData, x2Value, xAccessor),
      right = _getClosestItemIndexe2.right;

  var startIndex = Math.min(left, right);
  var endIndex = Math.max(left, right) + 1;
  var array = fullData.slice(startIndex, endIndex);
  var xs = array.map(function (d) {
    return xAccessor(d).valueOf();
  });
  var ys = array.map(function (d) {
    return d.close;
  });
  var n = array.length;
  var combine = (0, _utils.zipper)().combine(function (x, y) {
    return x * y;
  });
  var xys = combine(xs, ys);
  var xSquareds = xs.map(function (x) {
    return Math.pow(x, 2);
  });
  var b = (n * (0, _d3Array.sum)(xys) - (0, _d3Array.sum)(xs) * (0, _d3Array.sum)(ys)) / (n * (0, _d3Array.sum)(xSquareds) - Math.pow((0, _d3Array.sum)(xs), 2));
  var a = ((0, _d3Array.sum)(ys) - b * (0, _d3Array.sum)(xs)) / n;
  var newy1 = a + b * x1Value;
  var newy2 = a + b * x2Value;
  var x1 = xScale(x1Value);
  var y1 = yScale(newy1);
  var x2 = xScale(x2Value);
  var y2 = yScale(newy2);
  var stdDev = type === "SD" ? (0, _d3Array.deviation)(array, function (d) {
    return d.close;
  }) : 0;
  var dy = yScale(newy1 - stdDev) - y1;
  return {
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    dy: dy
  };
}

LinearRegressionChannelWithArea.propTypes = {
  x1Value: _propTypes["default"].any.isRequired,
  x2Value: _propTypes["default"].any.isRequired,
  type: _propTypes["default"].oneOf(["SD", // standard deviation channel
  "Raff" // Raff Regression Channel
  ]).isRequired,
  interactiveCursorClass: _propTypes["default"].string,
  stroke: _propTypes["default"].string.isRequired,
  strokeWidth: _propTypes["default"].number.isRequired,
  fill: _propTypes["default"].string.isRequired,
  fillOpacity: _propTypes["default"].number.isRequired,
  strokeOpacity: _propTypes["default"].number.isRequired,
  onDragStart: _propTypes["default"].func.isRequired,
  onDrag: _propTypes["default"].func.isRequired,
  onDragComplete: _propTypes["default"].func.isRequired,
  onHover: _propTypes["default"].func,
  onUnHover: _propTypes["default"].func,
  defaultClassName: _propTypes["default"].string,
  tolerance: _propTypes["default"].number.isRequired,
  selected: _propTypes["default"].bool.isRequired
};
LinearRegressionChannelWithArea.defaultProps = {
  onDragStart: _utils.noop,
  onDrag: _utils.noop,
  onDragComplete: _utils.noop,
  type: "SD",
  // standard dev
  strokeWidth: 1,
  tolerance: 4,
  selected: false
};
var _default = LinearRegressionChannelWithArea;
exports["default"] = _default;
//# sourceMappingURL=LinearRegressionChannelWithArea.js.map