"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

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

var EdgeCoordinate = /*#__PURE__*/function (_Component) {
  _inherits(EdgeCoordinate, _Component);

  var _super = _createSuper(EdgeCoordinate);

  function EdgeCoordinate() {
    _classCallCheck(this, EdgeCoordinate);

    return _super.apply(this, arguments);
  }

  _createClass(EdgeCoordinate, [{
    key: "render",
    value: function render() {
      var className = this.props.className;
      var edge = helper(this.props);
      if (edge === null) return null;
      var line, coordinateBase, coordinate;

      if ((0, _utils.isDefined)(edge.line)) {
        line = /*#__PURE__*/_react["default"].createElement("line", {
          className: "react-stockcharts-cross-hair",
          opacity: edge.line.opacity,
          stroke: edge.line.stroke,
          x1: edge.line.x1,
          y1: edge.line.y1,
          x2: edge.line.x2,
          y2: edge.line.y2
        });
      }

      if ((0, _utils.isDefined)(edge.coordinateBase)) {
        var _edge$coordinateBase = edge.coordinateBase,
            rectWidth = _edge$coordinateBase.rectWidth,
            rectHeight = _edge$coordinateBase.rectHeight,
            arrowWidth = _edge$coordinateBase.arrowWidth;
        var path = edge.orient === "left" ? "M0,0L0,".concat(rectHeight, "L").concat(rectWidth, ",").concat(rectHeight, "L").concat(rectWidth + arrowWidth, ",10L").concat(rectWidth, ",0L0,0L0,0") : "M0,".concat(arrowWidth, "L").concat(arrowWidth, ",").concat(rectHeight, "L").concat(rectWidth + arrowWidth, ",").concat(rectHeight, "L").concat(rectWidth + arrowWidth, ",0L").concat(arrowWidth, ",0L0,").concat(arrowWidth);
        coordinateBase = edge.orient === "left" || edge.orient === "right" ? /*#__PURE__*/_react["default"].createElement("g", {
          transform: "translate(".concat(edge.coordinateBase.edgeXRect, ",").concat(edge.coordinateBase.edgeYRect, ")")
        }, /*#__PURE__*/_react["default"].createElement("path", {
          d: path,
          key: 1,
          className: "react-stockchart-text-background",
          height: rectHeight,
          width: rectWidth,
          fill: edge.coordinateBase.fill,
          opacity: edge.coordinateBase.opacity
        })) : /*#__PURE__*/_react["default"].createElement("rect", {
          key: 1,
          className: "react-stockchart-text-background",
          x: edge.coordinateBase.edgeXRect,
          y: edge.coordinateBase.edgeYRect,
          height: rectHeight,
          width: rectWidth,
          fill: edge.coordinateBase.fill,
          opacity: edge.coordinateBase.opacity
        });
        coordinate = /*#__PURE__*/_react["default"].createElement("text", {
          key: 2,
          x: edge.coordinate.edgeXText,
          y: edge.coordinate.edgeYText,
          textAnchor: edge.coordinate.textAnchor,
          fontFamily: edge.coordinate.fontFamily,
          fontSize: edge.coordinate.fontSize,
          dy: ".32em",
          fill: edge.coordinate.textFill
        }, edge.coordinate.displayCoordinate);
      }

      return /*#__PURE__*/_react["default"].createElement("g", {
        className: className
      }, line, coordinateBase, coordinate);
    }
  }]);

  return EdgeCoordinate;
}(_react.Component);

EdgeCoordinate.propTypes = {
  className: _propTypes["default"].string,
  type: _propTypes["default"].oneOf(["vertical", "horizontal"]).isRequired,
  coordinate: _propTypes["default"].any.isRequired,
  x1: _propTypes["default"].number.isRequired,
  y1: _propTypes["default"].number.isRequired,
  x2: _propTypes["default"].number.isRequired,
  y2: _propTypes["default"].number.isRequired,
  orient: _propTypes["default"].oneOf(["bottom", "top", "left", "right"]),
  rectWidth: _propTypes["default"].number,
  hideLine: _propTypes["default"].bool,
  fill: _propTypes["default"].string,
  opacity: _propTypes["default"].number,
  fontFamily: _propTypes["default"].string.isRequired,
  fontSize: _propTypes["default"].number.isRequired
};
EdgeCoordinate.defaultProps = {
  className: "react-stockcharts-edgecoordinate",
  orient: "left",
  hideLine: false,
  fill: "#8a8a8a",
  opacity: 1,
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  fontSize: 13,
  textFill: "#FFFFFF",
  lineStroke: "#000000",
  lineOpacity: 0.3,
  arrowWidth: 10
};

function helper(props) {
  var displayCoordinate = props.coordinate,
      show = props.show,
      type = props.type,
      orient = props.orient,
      edgeAt = props.edgeAt,
      hideLine = props.hideLine;
  var fill = props.fill,
      opacity = props.opacity,
      fontFamily = props.fontFamily,
      fontSize = props.fontSize,
      textFill = props.textFill,
      lineStroke = props.lineStroke,
      lineOpacity = props.lineOpacity,
      arrowWidth = props.arrowWidth;
  var rectWidth = props.rectWidth,
      rectHeight = props.rectHeight;
  var x1 = props.x1,
      y1 = props.y1,
      x2 = props.x2,
      y2 = props.y2;
  if (!show) return null; // rectWidth = rectWidth ? rectWidth : (type === "horizontal") ? 60 : 100;

  var edgeXRect, edgeYRect, edgeXText, edgeYText;

  if (type === "horizontal") {
    edgeXRect = orient === "right" ? edgeAt + 1 : edgeAt - rectWidth - arrowWidth - 1;
    edgeYRect = y1 - rectHeight / 2;
    edgeXText = orient === "right" ? edgeAt + rectWidth / 2 + arrowWidth : edgeAt - rectWidth / 2 - arrowWidth;
    edgeYText = y1;
  } else {
    edgeXRect = x1 - rectWidth / 2;
    edgeYRect = orient === "bottom" ? edgeAt : edgeAt - rectHeight;
    edgeXText = x1;
    edgeYText = orient === "bottom" ? edgeAt + rectHeight / 2 : edgeAt - rectHeight / 2;
  }

  var coordinateBase, coordinate;
  var textAnchor = "middle";

  if ((0, _utils.isDefined)(displayCoordinate)) {
    coordinateBase = {
      edgeXRect: edgeXRect,
      edgeYRect: edgeYRect,
      rectHeight: rectHeight,
      rectWidth: rectWidth,
      fill: fill,
      opacity: opacity,
      arrowWidth: arrowWidth
    };
    coordinate = {
      edgeXText: edgeXText,
      edgeYText: edgeYText,
      textAnchor: textAnchor,
      fontFamily: fontFamily,
      fontSize: fontSize,
      textFill: textFill,
      displayCoordinate: displayCoordinate
    };
  }

  var line = hideLine ? undefined : {
    opacity: lineOpacity,
    stroke: lineStroke,
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
  };
  return {
    coordinateBase: coordinateBase,
    coordinate: coordinate,
    line: line,
    orient: orient
  };
}

EdgeCoordinate.drawOnCanvasStatic = function (ctx, props) {
  props = _objectSpread(_objectSpread({}, EdgeCoordinate.defaultProps), props);
  var edge = helper(props);
  if (edge === null) return;

  if ((0, _utils.isDefined)(edge.coordinateBase)) {
    var _edge$coordinateBase2 = edge.coordinateBase,
        rectWidth = _edge$coordinateBase2.rectWidth,
        rectHeight = _edge$coordinateBase2.rectHeight,
        arrowWidth = _edge$coordinateBase2.arrowWidth;
    ctx.fillStyle = (0, _utils.hexToRGBA)(edge.coordinateBase.fill, edge.coordinateBase.opacity);
    var x = edge.coordinateBase.edgeXRect;
    var y = edge.coordinateBase.edgeYRect;
    ctx.beginPath();

    if (edge.orient === "right") {
      ctx.moveTo(x, y + rectHeight / 2);
      ctx.lineTo(x + arrowWidth, y);
      ctx.lineTo(x + rectWidth + arrowWidth, y);
      ctx.lineTo(x + rectWidth + arrowWidth, y + rectHeight);
      ctx.lineTo(x + arrowWidth, y + rectHeight);
      ctx.closePath();
    } else if (edge.orient === "left") {
      ctx.moveTo(x, y);
      ctx.lineTo(x + rectWidth, y);
      ctx.lineTo(x + rectWidth + arrowWidth, y + rectHeight / 2);
      ctx.lineTo(x + rectWidth, y + rectHeight);
      ctx.lineTo(x, y + rectHeight);
      ctx.closePath();
    } else {
      ctx.rect(x, y, rectWidth, rectHeight);
    }

    ctx.fill();
    ctx.font = "".concat(edge.coordinate.fontSize, "px ").concat(edge.coordinate.fontFamily);
    ctx.fillStyle = edge.coordinate.textFill;
    ctx.textAlign = edge.coordinate.textAnchor === "middle" ? "center" : edge.coordinate.textAnchor;
    ctx.textBaseline = "middle";
    ctx.fillText(edge.coordinate.displayCoordinate, edge.coordinate.edgeXText, edge.coordinate.edgeYText);
  }

  if ((0, _utils.isDefined)(edge.line)) {
    ctx.strokeStyle = (0, _utils.hexToRGBA)(edge.line.stroke, edge.line.opacity);
    ctx.beginPath();
    ctx.moveTo(edge.line.x1, edge.line.y1);
    ctx.lineTo(edge.line.x2, edge.line.y2);
    ctx.stroke();
  }
};

var _default = EdgeCoordinate;
exports["default"] = _default;
//# sourceMappingURL=EdgeCoordinate.js.map