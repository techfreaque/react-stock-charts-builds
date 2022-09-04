"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GenericChartComponent = _interopRequireDefault(require("../GenericChartComponent"));

var _utils = require("../utils");

var _GenericComponent = require("../GenericComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var CurrentCoordinate = /*#__PURE__*/function (_Component) {
  _inherits(CurrentCoordinate, _Component);

  var _super = _createSuper(CurrentCoordinate);

  function CurrentCoordinate(props) {
    var _this;

    _classCallCheck(this, CurrentCoordinate);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CurrentCoordinate, [{
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var circle = helper(this.props, moreProps);
      if (!circle) return null;
      ctx.fillStyle = circle.fill;
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI, false);
      ctx.fill();
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var className = this.props.className;
      var circle = helper(this.props, moreProps);
      if (!circle) return null;
      var fillColor = circle.fill instanceof Function ? circle.fill(moreProps.currentItem) : circle.fill;
      return /*#__PURE__*/_react["default"].createElement("circle", {
        className: className,
        cx: circle.x,
        cy: circle.y,
        r: circle.r,
        fillRule: fillColor
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        svgDraw: this.renderSVG,
        canvasDraw: this.drawOnCanvas,
        canvasToDraw: _GenericComponent.getMouseCanvas,
        drawOn: ["mousemove", "pan"]
      });
    }
  }]);

  return CurrentCoordinate;
}(_react.Component);

CurrentCoordinate.propTypes = {
  yAccessor: _propTypes["default"].func,
  r: _propTypes["default"].number.isRequired,
  className: _propTypes["default"].string
};
CurrentCoordinate.defaultProps = {
  r: 3,
  className: "react-stockcharts-current-coordinate"
};

function helper(props, moreProps) {
  var fill = props.fill,
      yAccessor = props.yAccessor,
      r = props.r;
  var show = moreProps.show,
      xScale = moreProps.xScale,
      yScale = moreProps.chartConfig.yScale,
      currentItem = moreProps.currentItem,
      xAccessor = moreProps.xAccessor; // console.log(show);

  if (!show || (0, _utils.isNotDefined)(currentItem)) return null;
  var xValue = xAccessor(currentItem);
  var yValue = yAccessor(currentItem);
  if ((0, _utils.isNotDefined)(yValue)) return null; // console.log(chartConfig);

  var x = Math.round(xScale(xValue));
  var y = Math.round(yScale(yValue));
  return {
    x: x,
    y: y,
    r: r,
    fill: fill
  };
}

var _default = CurrentCoordinate;
exports["default"] = _default;
//# sourceMappingURL=CurrentCoordinate.js.map