"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Scale = require("d3-scale");

var _PureComponent2 = _interopRequireDefault(require("./utils/PureComponent"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var Chart = /*#__PURE__*/function (_PureComponent) {
  _inherits(Chart, _PureComponent);

  var _super = _createSuper(Chart);

  function Chart(props, context) {
    var _this;

    _classCallCheck(this, Chart);

    _this = _super.call(this, props, context);
    _this.yScale = _this.yScale.bind(_assertThisInitialized(_this));
    _this.listener = _this.listener.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Chart, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var id = this.props.id;
      var subscribe = this.context.subscribe;
      subscribe("chart_" + id, {
        listener: this.listener
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var id = this.props.id;
      var unsubscribe = this.context.unsubscribe;
      unsubscribe("chart_" + id);
    }
  }, {
    key: "listener",
    value: function listener(type, moreProps, state, e) {
      var _this$props = this.props,
          id = _this$props.id,
          onContextMenu = _this$props.onContextMenu;

      if (type === "contextmenu") {
        var currentCharts = moreProps.currentCharts;

        if (currentCharts.indexOf(id) > -1) {
          onContextMenu(moreProps, e);
        }
      }
    }
  }, {
    key: "yScale",
    value: function yScale() {
      var _this2 = this;

      var chartConfig = (0, _utils.find)(this.context.chartConfig, function (each) {
        return each.id === _this2.props.id;
      });
      return chartConfig.yScale.copy();
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      var chartId = this.props.id;
      var chartConfig = (0, _utils.find)(this.context.chartConfig, function (each) {
        return each.id === chartId;
      });
      return {
        chartId: chartId,
        chartConfig: chartConfig
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _find = (0, _utils.find)(this.context.chartConfig, function (each) {
        return each.id === _this3.props.id;
      }),
          origin = _find.origin;

      var _origin = _slicedToArray(origin, 2),
          x = _origin[0],
          y = _origin[1];

      return /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(".concat(x, ", ").concat(y, ")")
      }, this.props.children);
    }
  }]);

  return Chart;
}(_PureComponent2["default"]);

Chart.propTypes = {
  height: _propTypes["default"].number,
  origin: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].func]),
  id: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  yExtents: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].func]),
  yExtentsCalculator: function yExtentsCalculator(props, propName, componentName) {
    if ((0, _utils.isNotDefined)(props.yExtents) && typeof props.yExtentsCalculator !== "function") return new Error("yExtents or yExtentsCalculator must" + " be present on ".concat(componentName, ". Validation failed."));
  },
  onContextMenu: _propTypes["default"].func,
  yScale: _propTypes["default"].func,
  flipYScale: _propTypes["default"].bool,
  padding: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].shape({
    top: _propTypes["default"].number,
    bottom: _propTypes["default"].number
  })]),
  children: _propTypes["default"].node
};
Chart.defaultProps = {
  id: 0,
  origin: [0, 0],
  padding: 0,
  yScale: (0, _d3Scale.scaleLinear)(),
  flipYScale: false,
  yPan: true,
  yPanEnabled: false,
  onContextMenu: _utils.noop
};
Chart.contextTypes = {
  chartConfig: _propTypes["default"].array,
  subscribe: _propTypes["default"].func.isRequired,
  unsubscribe: _propTypes["default"].func.isRequired
};
Chart.childContextTypes = {
  chartConfig: _propTypes["default"].object.isRequired,
  chartId: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired
};
var _default = Chart;
exports["default"] = _default;
//# sourceMappingURL=Chart.js.map