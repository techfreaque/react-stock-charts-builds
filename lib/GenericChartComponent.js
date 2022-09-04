"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GenericComponent2 = _interopRequireDefault(require("./GenericComponent"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ALWAYS_TRUE_TYPES = ["drag", "dragend"];

var GenericChartComponent = /*#__PURE__*/function (_GenericComponent) {
  _inherits(GenericChartComponent, _GenericComponent);

  var _super = _createSuper(GenericChartComponent);

  function GenericChartComponent(props, context) {
    var _this;

    _classCallCheck(this, GenericChartComponent);

    _this = _super.call(this, props, context);
    _this.preCanvasDraw = _this.preCanvasDraw.bind(_assertThisInitialized(_this));
    _this.postCanvasDraw = _this.postCanvasDraw.bind(_assertThisInitialized(_this));
    _this.shouldTypeProceed = _this.shouldTypeProceed.bind(_assertThisInitialized(_this));
    _this.preEvaluate = _this.preEvaluate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GenericChartComponent, [{
    key: "preCanvasDraw",
    value: function preCanvasDraw(ctx, moreProps) {
      _get(_getPrototypeOf(GenericChartComponent.prototype), "preCanvasDraw", this).call(this, ctx, moreProps);

      ctx.save();
      var _this$context = this.context,
          margin = _this$context.margin,
          ratio = _this$context.ratio;
      var chartConfig = moreProps.chartConfig;
      var canvasOriginX = 0.5 * ratio + chartConfig.origin[0] + margin.left;
      var canvasOriginY = 0.5 * ratio + chartConfig.origin[1] + margin.top;
      var _moreProps$chartConfi = moreProps.chartConfig,
          width = _moreProps$chartConfi.width,
          height = _moreProps$chartConfi.height;
      var _this$props = this.props,
          clip = _this$props.clip,
          edgeClip = _this$props.edgeClip;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(ratio, ratio);

      if (edgeClip) {
        ctx.beginPath();
        ctx.rect(-1, canvasOriginY - 10, width + margin.left + margin.right + 1, height + 20);
        ctx.clip();
      }

      ctx.translate(canvasOriginX, canvasOriginY);

      if (clip) {
        ctx.beginPath();
        ctx.rect(-1, -1, width + 1, height + 1);
        ctx.clip();
      }
    }
  }, {
    key: "postCanvasDraw",
    value: function postCanvasDraw(ctx, moreProps) {
      _get(_getPrototypeOf(GenericChartComponent.prototype), "postCanvasDraw", this).call(this, ctx, moreProps);

      ctx.restore();
    }
  }, {
    key: "updateMoreProps",
    value: function updateMoreProps(moreProps) {
      _get(_getPrototypeOf(GenericChartComponent.prototype), "updateMoreProps", this).call(this, moreProps);

      var chartConfigList = moreProps.chartConfig;

      if (chartConfigList && Array.isArray(chartConfigList)) {
        var chartId = this.context.chartId;
        var chartConfig = (0, _utils.find)(chartConfigList, function (each) {
          return each.id === chartId;
        });
        this.moreProps.chartConfig = chartConfig;
      }

      if ((0, _utils.isDefined)(this.moreProps.chartConfig)) {
        var _this$moreProps$chart = _slicedToArray(this.moreProps.chartConfig.origin, 2),
            ox = _this$moreProps$chart[0],
            oy = _this$moreProps$chart[1];

        if ((0, _utils.isDefined)(moreProps.mouseXY)) {
          var _moreProps$mouseXY = _slicedToArray(moreProps.mouseXY, 2),
              x = _moreProps$mouseXY[0],
              y = _moreProps$mouseXY[1];

          this.moreProps.mouseXY = [x - ox, y - oy];
        }

        if ((0, _utils.isDefined)(moreProps.startPos)) {
          var _moreProps$startPos = _slicedToArray(moreProps.startPos, 2),
              _x = _moreProps$startPos[0],
              _y = _moreProps$startPos[1];

          this.moreProps.startPos = [_x - ox, _y - oy];
        }
      }
    }
  }, {
    key: "preEvaluate",
    value: function
      /* type, moreProps */
    preEvaluate() {
      /* if (
      	type === "mousemove"
      	&& this.props.onMouseMove
      	&& isDefined(moreProps)
      	&& isDefined(moreProps.currentCharts)
      ) {
      	if (moreProps.currentCharts.indexOf(this.context.chartId) === -1) {
      		moreProps.show = false;
      	}
      } */
    }
  }, {
    key: "shouldTypeProceed",
    value: function shouldTypeProceed(type, moreProps) {
      if ((type === "mousemove" || type === "click") && this.props.disablePan) {
        return true;
      }

      if (ALWAYS_TRUE_TYPES.indexOf(type) === -1 && (0, _utils.isDefined)(moreProps) && (0, _utils.isDefined)(moreProps.currentCharts)) {
        return moreProps.currentCharts.indexOf(this.context.chartId) > -1;
      }

      return true;
    }
  }]);

  return GenericChartComponent;
}(_GenericComponent2["default"]);

GenericChartComponent.propTypes = _GenericComponent2["default"].propTypes;
GenericChartComponent.defaultProps = _GenericComponent2["default"].defaultProps;
GenericChartComponent.contextTypes = _objectSpread(_objectSpread({}, _GenericComponent2["default"].contextTypes), {}, {
  canvasOriginX: _propTypes["default"].number,
  canvasOriginY: _propTypes["default"].number,
  chartId: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  chartConfig: _propTypes["default"].object.isRequired,
  ratio: _propTypes["default"].number.isRequired
});
var _default = GenericChartComponent;
exports["default"] = _default;
//# sourceMappingURL=GenericChartComponent.js.map