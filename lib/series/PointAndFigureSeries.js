"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GenericChartComponent = _interopRequireDefault(require("../GenericChartComponent"));

var _GenericComponent = require("../GenericComponent");

var _utils = require("../utils");

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

var PointAndFigureSeries = /*#__PURE__*/function (_Component) {
  _inherits(PointAndFigureSeries, _Component);

  var _super = _createSuper(PointAndFigureSeries);

  function PointAndFigureSeries(props) {
    var _this;

    _classCallCheck(this, PointAndFigureSeries);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PointAndFigureSeries, [{
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var xAccessor = moreProps.xAccessor;
      var xScale = moreProps.xScale,
          yScale = moreProps.chartConfig.yScale,
          plotData = moreProps.plotData;
      var columns = getColumns(xScale, xAccessor, yScale, plotData);

      _drawOnCanvas(ctx, this.props, columns);
    }
  }, {
    key: "render",
    value: function render() {
      var clip = this.props.clip;
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        clip: clip,
        svgDraw: this.renderSVG,
        canvasDraw: this.drawOnCanvas,
        canvasToDraw: _GenericComponent.getAxisCanvas,
        drawOn: ["pan"]
      });
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var xAccessor = moreProps.xAccessor;
      var xScale = moreProps.xScale,
          yScale = moreProps.chartConfig.yScale,
          plotData = moreProps.plotData;
      var _this$props = this.props,
          stroke = _this$props.stroke,
          fill = _this$props.fill,
          strokeWidth = _this$props.strokeWidth,
          className = _this$props.className;
      var columns = getColumns(xScale, xAccessor, yScale, plotData);
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: className
      }, columns.map(function (col, idx) {
        return /*#__PURE__*/_react["default"].createElement("g", {
          key: idx,
          className: col.className,
          transform: "translate(".concat(col.offset[0], ", ").concat(col.offset[1], ")")
        }, col.boxes.map(function (box, i) {
          if (col.direction > 0) {
            return /*#__PURE__*/_react["default"].createElement("g", {
              key: "".concat(idx, "-").concat(i)
            }, /*#__PURE__*/_react["default"].createElement("line", {
              className: "up",
              strokeWidth: strokeWidth,
              stroke: stroke.up,
              fillRule: fill.up,
              x1: 0,
              y1: box.open,
              x2: box.columnWidth,
              y2: box.close
            }), /*#__PURE__*/_react["default"].createElement("line", {
              className: "up",
              strokeWidth: strokeWidth,
              stroke: stroke.up,
              fillRule: fill.up,
              x1: 0,
              y1: box.close,
              x2: box.columnWidth,
              y2: box.open
            }));
          }

          return /*#__PURE__*/_react["default"].createElement("ellipse", {
            key: "".concat(idx, "-").concat(i),
            className: "down",
            strokeWidth: strokeWidth,
            stroke: stroke.down,
            fillRule: fill.down,
            cx: box.columnWidth / 2,
            cy: (box.open + box.close) / 2,
            rx: box.columnWidth / 2,
            ry: box.boxHeight / 2
          });
        }));
      }));
    }
  }]);

  return PointAndFigureSeries;
}(_react.Component);

PointAndFigureSeries.propTypes = {
  className: _propTypes["default"].string,
  strokeWidth: _propTypes["default"].number.isRequired,
  stroke: _propTypes["default"].object.isRequired,
  fill: _propTypes["default"].object.isRequired,
  clip: _propTypes["default"].bool.isRequired
};
PointAndFigureSeries.defaultProps = {
  className: "react-stockcharts-point-and-figure",
  strokeWidth: 1,
  stroke: {
    up: "#6BA583",
    down: "#FF0000"
  },
  fill: {
    up: "none",
    down: "none"
  },
  clip: true
};

function _drawOnCanvas(ctx, props, columns) {
  var stroke = props.stroke,
      fill = props.fill,
      strokeWidth = props.strokeWidth;
  ctx.lineWidth = strokeWidth;
  columns.forEach(function (col) {
    var _col$offset = _slicedToArray(col.offset, 2),
        offsetX = _col$offset[0],
        offsetY = _col$offset[1];

    col.boxes.forEach(function (box) {
      if (col.direction > 0) {
        ctx.fillStyle = fill.up;
        ctx.strokeStyle = stroke.up;
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY + box.open);
        ctx.lineTo(offsetX + box.columnWidth, offsetY + box.close);
        ctx.moveTo(offsetX, offsetY + box.close);
        ctx.lineTo(offsetX + box.columnWidth, offsetY + box.open);
        ctx.stroke();
      } else {
        ctx.fillStyle = fill.down;
        ctx.strokeStyle = stroke.down;
        ctx.beginPath();
        var x = offsetX + box.columnWidth / 2,
            y = offsetY + box.open + box.boxHeight / 2;
        var rx = box.columnWidth / 2,
            ry = box.boxHeight / 2;
        ctx.ellipse(x, y, rx, ry, 0, 0, 2 * Math.PI);
        ctx.stroke();
      }
    });
  });
  ctx.stroke();
}

function getColumns(xScale, xAccessor, yScale, plotData) {
  var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));
  var columnWidth = width / (plotData.length - 1);
  var anyBox,
      j = 0;

  while ((0, _utils.isNotDefined)(anyBox)) {
    if ((0, _utils.isDefined)(plotData[j].close)) {
      anyBox = plotData[j].boxes[0];
    } else {
      break;
    }

    j++;
  }

  var boxHeight = Math.abs(yScale(anyBox.open) - yScale(anyBox.close));
  var columns = plotData.filter(function (d) {
    return (0, _utils.isDefined)(d.close);
  }).map(function (d) {
    var boxes = d.boxes.map(function (box) {
      return {
        columnWidth: columnWidth,
        boxHeight: boxHeight,
        open: yScale(box.open),
        close: yScale(box.close)
      };
    });
    var xOffset = xScale(xAccessor(d)) - columnWidth / 2;
    return {
      boxes: boxes,
      direction: d.direction,
      offset: [xOffset, 0]
    };
  });
  return columns;
}

var _default = PointAndFigureSeries;
exports["default"] = _default;
//# sourceMappingURL=PointAndFigureSeries.js.map