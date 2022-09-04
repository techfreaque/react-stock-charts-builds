"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GenericComponent = _interopRequireWildcard(require("../GenericComponent"));

var _utils = require("../utils");

var _excluded = ["strokeDasharray", "id"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var Cursor = /*#__PURE__*/function (_Component) {
  _inherits(Cursor, _Component);

  var _super = _createSuper(Cursor);

  function Cursor(props) {
    var _this;

    _classCallCheck(this, Cursor);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Cursor, [{
    key: "getXYCursor",
    value: function getXYCursor(props, moreProps) {
      var mouseXY = moreProps.mouseXY,
          currentItem = moreProps.currentItem,
          show = moreProps.show,
          height = moreProps.height,
          width = moreProps.width;
      var customSnapX = props.customSnapX,
          stroke = props.stroke,
          opacity = props.opacity,
          strokeDasharray = props.strokeDasharray,
          disableYCursor = props.disableYCursor;
      if (!show || (0, _utils.isNotDefined)(currentItem)) return null;
      var yCursor = {
        x1: 0,
        x2: width,
        y1: mouseXY[1],
        y2: mouseXY[1],
        stroke: stroke,
        strokeDasharray: strokeDasharray,
        opacity: opacity,
        id: "yCursor"
      };
      var x = customSnapX(props, moreProps);
      var xCursor = {
        x1: x,
        x2: x,
        y1: 0,
        y2: height,
        stroke: stroke,
        strokeDasharray: strokeDasharray,
        opacity: opacity,
        id: "xCursor"
      };
      return disableYCursor ? [xCursor] : [yCursor, xCursor];
    }
  }, {
    key: "getXCursorShape",
    value: function getXCursorShape(moreProps
    /* , ctx */
    ) {
      var height = moreProps.height,
          xScale = moreProps.xScale,
          currentItem = moreProps.currentItem,
          plotData = moreProps.plotData;
      var xAccessor = moreProps.xAccessor;
      var xValue = xAccessor(currentItem);
      var centerX = xScale(xValue);
      var shapeWidth = Math.abs(xScale(xAccessor((0, _utils.last)(plotData))) - xScale(xAccessor((0, _utils.first)(plotData)))) / (plotData.length - 1);
      var xPos = centerX - shapeWidth / 2;
      return {
        height: height,
        xPos: xPos,
        shapeWidth: shapeWidth
      };
    }
  }, {
    key: "getXCursorShapeFill",
    value: function getXCursorShapeFill(moreProps) {
      var xCursorShapeFill = this.props.xCursorShapeFill;
      var currentItem = moreProps.currentItem;
      return xCursorShapeFill instanceof Function ? xCursorShapeFill(currentItem) : xCursorShapeFill;
    }
  }, {
    key: "getXCursorShapeStroke",
    value: function getXCursorShapeStroke(moreProps) {
      var xCursorShapeStroke = this.props.xCursorShapeStroke;
      var currentItem = moreProps.currentItem;
      return xCursorShapeStroke instanceof Function ? xCursorShapeStroke(currentItem) : xCursorShapeStroke;
    }
  }, {
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var _this2 = this;

      var cursors = this.getXYCursor(this.props, moreProps);

      if ((0, _utils.isDefined)(cursors)) {
        var useXCursorShape = this.props.useXCursorShape;
        var _this$context = this.context,
            margin = _this$context.margin,
            ratio = _this$context.ratio;
        var originX = 0.5 * ratio + margin.left;
        var originY = 0.5 * ratio + margin.top;
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(ratio, ratio);
        ctx.translate(originX, originY);
        cursors.forEach(function (line) {
          var dashArray = (0, _utils.getStrokeDasharray)(line.strokeDasharray).split(",").map(function (d) {
            return +d;
          });

          var xShapeFill = _this2.getXCursorShapeFill(moreProps);

          if (useXCursorShape && line.id === "xCursor") {
            var _this2$props = _this2.props,
                xCursorShapeOpacity = _this2$props.xCursorShapeOpacity,
                xCursorShapeStrokeDasharray = _this2$props.xCursorShapeStrokeDasharray;

            var xShape = _this2.getXCursorShape(moreProps);

            if (xCursorShapeStrokeDasharray != null) {
              var xShapeStroke = _this2.getXCursorShapeStroke(moreProps);

              ctx.strokeStyle = (0, _utils.hexToRGBA)(xShapeStroke, xCursorShapeOpacity);
              ctx.setLineDash((0, _utils.getStrokeDasharray)(xCursorShapeStrokeDasharray).split(",").map(function (d) {
                return +d;
              }));
            }

            ctx.beginPath();
            ctx.fillStyle = xShapeFill != null ? (0, _utils.hexToRGBA)(xShapeFill, xCursorShapeOpacity) : "rgba(0, 0, 0, 0)"; // ="transparent"

            ctx.beginPath();
            xCursorShapeStrokeDasharray == null ? ctx.fillRect(xShape.xPos, 0, xShape.shapeWidth, xShape.height) : ctx.rect(xShape.xPos, 0, xShape.shapeWidth, xShape.height);
            ctx.fill();
          } else {
            ctx.strokeStyle = (0, _utils.hexToRGBA)(line.stroke, line.opacity);
            ctx.setLineDash(dashArray);
            ctx.beginPath();
            ctx.moveTo(line.x1, line.y1);
            ctx.lineTo(line.x2, line.y2);
          }

          ctx.stroke();
        });
        ctx.restore();
      }
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var _this3 = this;

      var cursors = this.getXYCursor(this.props, moreProps);
      if ((0, _utils.isNotDefined)(cursors)) return null;
      var _this$props = this.props,
          className = _this$props.className,
          useXCursorShape = _this$props.useXCursorShape;
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: "react-stockcharts-crosshair ".concat(className)
      }, cursors.map(function (_ref, idx) {
        var strokeDasharray = _ref.strokeDasharray,
            id = _ref.id,
            rest = _objectWithoutProperties(_ref, _excluded);

        if (useXCursorShape && id === "xCursor") {
          var _this3$props = _this3.props,
              xCursorShapeOpacity = _this3$props.xCursorShapeOpacity,
              xCursorShapeStrokeDasharray = _this3$props.xCursorShapeStrokeDasharray;

          var xShape = _this3.getXCursorShape(moreProps);

          var xShapeFill = _this3.getXCursorShapeFill(moreProps);

          var xShapeStroke = _this3.getXCursorShapeStroke(moreProps);

          return /*#__PURE__*/_react["default"].createElement("rect", {
            key: idx,
            x: xShape.xPos,
            y: 0,
            width: xShape.shapeWidth,
            height: xShape.height,
            fillRule: xShapeFill != null ? xShapeFill : "none",
            stroke: xCursorShapeStrokeDasharray == null ? null : xShapeStroke,
            strokeDasharray: xCursorShapeStrokeDasharray == null ? null : (0, _utils.getStrokeDasharray)(xCursorShapeStrokeDasharray),
            opacity: xCursorShapeOpacity
          });
        }

        return /*#__PURE__*/_react["default"].createElement("line", _extends({
          key: idx,
          strokeDasharray: (0, _utils.getStrokeDasharray)(strokeDasharray)
        }, rest));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_GenericComponent["default"], {
        svgDraw: this.renderSVG,
        clip: false,
        canvasDraw: this.drawOnCanvas,
        canvasToDraw: _GenericComponent.getMouseCanvas,
        drawOn: ["mousemove", "pan", "drag"]
      });
    }
  }]);

  return Cursor;
}(_react.Component);

Cursor.propTypes = {
  className: _propTypes["default"].string,
  stroke: _propTypes["default"].string,
  strokeDasharray: _propTypes["default"].oneOf(_utils.strokeDashTypes),
  snapX: _propTypes["default"].bool,
  opacity: _propTypes["default"].number,
  disableYCursor: _propTypes["default"].bool,
  useXCursorShape: _propTypes["default"].bool,
  xCursorShapeFill: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  xCursorShapeStroke: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]).isRequired,
  xCursorShapeStrokeDasharray: _propTypes["default"].oneOf(_utils.strokeDashTypes),
  xCursorShapeOpacity: _propTypes["default"].number
};
Cursor.contextTypes = {
  margin: _propTypes["default"].object.isRequired,
  ratio: _propTypes["default"].number.isRequired // xScale for getting update event upon pan end, this is needed to get past the PureComponent shouldComponentUpdate
  // xScale: PropTypes.func.isRequired,

};

function customSnapX(props, moreProps) {
  var xScale = moreProps.xScale,
      xAccessor = moreProps.xAccessor,
      currentItem = moreProps.currentItem,
      mouseXY = moreProps.mouseXY;
  var snapX = props.snapX;
  var x = snapX ? Math.round(xScale(xAccessor(currentItem))) : mouseXY[0];
  return x;
}

Cursor.defaultProps = {
  stroke: "#000000",
  opacity: 0.3,
  strokeDasharray: "ShortDash",
  snapX: true,
  // snaps the crosshair to the nearest xValue
  customSnapX: customSnapX,
  disableYCursor: false,
  useXCursorShape: false,
  xCursorShapeStroke: "#000000",
  xCursorShapeOpacity: 0.5
};
var _default = Cursor;
exports["default"] = _default;
//# sourceMappingURL=Cursor.js.map