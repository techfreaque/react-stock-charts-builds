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

var _excluded = ["strokeDasharray"];

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

var CrossHairCursor = /*#__PURE__*/function (_Component) {
  _inherits(CrossHairCursor, _Component);

  var _super = _createSuper(CrossHairCursor);

  function CrossHairCursor(props) {
    var _this;

    _classCallCheck(this, CrossHairCursor);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CrossHairCursor, [{
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var lines = helper(this.props, moreProps);

      if ((0, _utils.isDefined)(lines)) {
        var _this$context = this.context,
            margin = _this$context.margin,
            ratio = _this$context.ratio;
        var originX = 0.5 * ratio + margin.left;
        var originY = 0.5 * ratio + margin.top;
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(ratio, ratio);
        ctx.translate(originX, originY);
        lines.forEach(function (line) {
          var dashArray = (0, _utils.getStrokeDasharray)(line.strokeDasharray).split(",").map(function (d) {
            return +d;
          });
          ctx.strokeStyle = (0, _utils.hexToRGBA)(line.stroke, line.opacity);
          ctx.setLineDash(dashArray);
          ctx.beginPath();
          ctx.moveTo(line.x1, line.y1);
          ctx.lineTo(line.x2, line.y2);
          ctx.stroke();
        });
        ctx.restore();
      }
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var className = this.props.className;
      var lines = helper(this.props, moreProps);
      if ((0, _utils.isNotDefined)(lines)) return null;
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: "react-stockcharts-crosshair ".concat(className)
      }, lines.map(function (_ref, idx) {
        var strokeDasharray = _ref.strokeDasharray,
            rest = _objectWithoutProperties(_ref, _excluded);

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

  return CrossHairCursor;
}(_react.Component);

CrossHairCursor.propTypes = {
  className: _propTypes["default"].string,
  strokeDasharray: _propTypes["default"].oneOf(_utils.strokeDashTypes)
};
CrossHairCursor.contextTypes = {
  margin: _propTypes["default"].object.isRequired,
  ratio: _propTypes["default"].number.isRequired // xScale for getting update event upon pan end, this is needed to get past the PureComponent shouldComponentUpdate
  // xScale: PropTypes.func.isRequired,

};

function customX(props, moreProps) {
  var xScale = moreProps.xScale,
      xAccessor = moreProps.xAccessor,
      currentItem = moreProps.currentItem,
      mouseXY = moreProps.mouseXY;
  var snapX = props.snapX;
  var x = snapX ? Math.round(xScale(xAccessor(currentItem))) : mouseXY[0];
  return x;
}

CrossHairCursor.defaultProps = {
  stroke: "#000000",
  opacity: 0.3,
  strokeDasharray: "ShortDash",
  snapX: true,
  customX: customX
};

function helper(props, moreProps) {
  var mouseXY = moreProps.mouseXY,
      currentItem = moreProps.currentItem,
      show = moreProps.show,
      height = moreProps.height,
      width = moreProps.width;
  var customX = props.customX,
      stroke = props.stroke,
      opacity = props.opacity,
      strokeDasharray = props.strokeDasharray;
  if (!show || (0, _utils.isNotDefined)(currentItem)) return null;
  var line1 = {
    x1: 0,
    x2: width,
    y1: mouseXY[1],
    y2: mouseXY[1],
    stroke: stroke,
    strokeDasharray: strokeDasharray,
    opacity: opacity
  };
  var x = customX(props, moreProps);
  var line2 = {
    x1: x,
    x2: x,
    y1: 0,
    y2: height,
    stroke: stroke,
    strokeDasharray: strokeDasharray,
    opacity: opacity
  };
  return [line1, line2];
}

var _default = CrossHairCursor;
exports["default"] = _default;
//# sourceMappingURL=CrossHairCursor.js.map