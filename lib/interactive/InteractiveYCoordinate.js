"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Format = require("d3-format");

var _utils = require("../utils");

var _utils2 = require("./utils");

var _EachInteractiveYCoordinate = _interopRequireDefault(require("./wrapper/EachInteractiveYCoordinate"));

var _HoverTextNearMouse = _interopRequireDefault(require("./components/HoverTextNearMouse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var InteractiveYCoordinate = /*#__PURE__*/function (_Component) {
  _inherits(InteractiveYCoordinate, _Component);

  var _super = _createSuper(InteractiveYCoordinate);

  function InteractiveYCoordinate(props) {
    var _this;

    _classCallCheck(this, InteractiveYCoordinate);

    _this = _super.call(this, props);
    _this.handleDrag = _this.handleDrag.bind(_assertThisInitialized(_this));
    _this.handleDragComplete = _this.handleDragComplete.bind(_assertThisInitialized(_this));
    _this.handleDelete = _this.handleDelete.bind(_assertThisInitialized(_this));
    _this.terminate = _utils2.terminate.bind(_assertThisInitialized(_this));
    _this.saveNodeType = _utils2.saveNodeType.bind(_assertThisInitialized(_this));
    _this.getSelectionState = (0, _utils2.isHoverForInteractiveType)("yCoordinateList").bind(_assertThisInitialized(_this));
    _this.nodes = [];
    _this.state = {};
    return _this;
  }

  _createClass(InteractiveYCoordinate, [{
    key: "handleDrag",
    value: function handleDrag(index, yValue) {
      this.setState({
        override: {
          index: index,
          yValue: yValue
        }
      });
    }
  }, {
    key: "handleDragComplete",
    value: function handleDragComplete(moreProps) {
      var _this2 = this;

      var override = this.state.override;

      if ((0, _utils.isDefined)(override)) {
        var yCoordinateList = this.props.yCoordinateList;
        var newAlertList = yCoordinateList.map(function (each, idx) {
          var selected = idx === override.index;
          return selected ? _objectSpread(_objectSpread({}, each), {}, {
            yValue: override.yValue,
            selected: selected
          }) : _objectSpread(_objectSpread({}, each), {}, {
            selected: selected
          });
        });
        var draggedAlert = newAlertList[override.index];
        this.setState({
          override: null
        }, function () {
          _this2.props.onDragComplete(newAlertList, moreProps, draggedAlert);
        });
      }
    }
  }, {
    key: "handleDrawLine",
    value: function handleDrawLine(xyValue) {
      var current = this.state.current;

      if ((0, _utils.isDefined)(current) && (0, _utils.isDefined)(current.start)) {
        this.setState({
          current: {
            start: current.start,
            end: xyValue
          }
        });
      }
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(index, moreProps) {
      var _this$props = this.props,
          onDelete = _this$props.onDelete,
          yCoordinateList = _this$props.yCoordinateList;
      onDelete(yCoordinateList[index], moreProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var yCoordinateList = this.props.yCoordinateList;
      var override = this.state.override;
      return /*#__PURE__*/_react["default"].createElement("g", null, yCoordinateList.map(function (each, idx) {
        var props = each;
        return /*#__PURE__*/_react["default"].createElement(_EachInteractiveYCoordinate["default"], _extends({
          key: each.id,
          ref: _this3.saveNodeType(idx),
          index: idx
        }, props, {
          selected: each.selected,
          yValue: (0, _utils2.getValueFromOverride)(override, idx, "yValue", each.yValue),
          onDelete: _this3.handleDelete,
          onDrag: _this3.handleDrag,
          onDragComplete: _this3.handleDragComplete,
          edgeInteractiveCursor: "react-stockcharts-move-cursor"
        }));
      }));
    }
  }]);

  return InteractiveYCoordinate;
}(_react.Component);

InteractiveYCoordinate.propTypes = {
  onChoosePosition: _propTypes["default"].func.isRequired,
  onDragComplete: _propTypes["default"].func.isRequired,
  onSelect: _propTypes["default"].func,
  onDelete: _propTypes["default"].func,
  defaultPriceCoordinate: _propTypes["default"].shape({
    bgFill: _propTypes["default"].string.isRequired,
    bgOpacity: _propTypes["default"].number.isRequired,
    stroke: _propTypes["default"].string.isRequired,
    strokeDasharray: _propTypes["default"].oneOf(_utils.strokeDashTypes).isRequired,
    strokeOpacity: _propTypes["default"].number.isRequired,
    strokeWidth: _propTypes["default"].number.isRequired,
    textFill: _propTypes["default"].string.isRequired,
    fontFamily: _propTypes["default"].string.isRequired,
    fontWeight: _propTypes["default"].string.isRequired,
    fontStyle: _propTypes["default"].string.isRequired,
    fontSize: _propTypes["default"].number.isRequired,
    text: _propTypes["default"].string.isRequired,
    textBox: _propTypes["default"].shape({
      height: _propTypes["default"].number.isRequired,
      left: _propTypes["default"].number.isRequired,
      padding: _propTypes["default"].shape({
        left: _propTypes["default"].number.isRequired,
        right: _propTypes["default"].number.isRequired
      }),
      closeIcon: _propTypes["default"].shape({
        padding: _propTypes["default"].shape({
          left: _propTypes["default"].number.isRequired,
          right: _propTypes["default"].number.isRequired
        }),
        width: _propTypes["default"].number.isRequired
      })
    }).isRequired,
    edge: _propTypes["default"].shape({
      stroke: _propTypes["default"].string.isRequired,
      strokeOpacity: _propTypes["default"].number.isRequired,
      strokeWidth: _propTypes["default"].number.isRequired,
      fill: _propTypes["default"].string.isRequired,
      fillOpacity: _propTypes["default"].number.isRequired
    })
  }).isRequired,
  hoverText: _propTypes["default"].object.isRequired,
  yCoordinateList: _propTypes["default"].array.isRequired,
  enabled: _propTypes["default"].bool.isRequired
};
InteractiveYCoordinate.defaultProps = {
  onChoosePosition: _utils.noop,
  onDragComplete: _utils.noop,
  onSelect: _utils.noop,
  onDelete: _utils.noop,
  defaultPriceCoordinate: {
    bgFill: "#FFFFFF",
    bgOpacity: 1,
    stroke: "#6574CD",
    strokeOpacity: 1,
    strokeDasharray: "ShortDash2",
    strokeWidth: 1,
    textFill: "#6574CD",
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    text: "Alert",
    textBox: {
      height: 24,
      left: 20,
      padding: {
        left: 10,
        right: 5
      },
      closeIcon: {
        padding: {
          left: 5,
          right: 8
        },
        width: 8
      }
    },
    edge: {
      stroke: "#6574CD",
      strokeOpacity: 1,
      strokeWidth: 1,
      fill: "#FFFFFF",
      fillOpacity: 1,
      orient: "right",
      at: "right",
      arrowWidth: 10,
      dx: 0,
      rectWidth: 50,
      rectHeight: 20,
      displayFormat: (0, _d3Format.format)(".2f")
    }
  },
  hoverText: _objectSpread(_objectSpread({}, _HoverTextNearMouse["default"].defaultProps), {}, {
    enable: true,
    bgHeight: 18,
    bgWidth: 175,
    text: "Click and drag the edge circles"
  }),
  yCoordinateList: []
};
InteractiveYCoordinate.contextTypes = {
  subscribe: _propTypes["default"].func.isRequired,
  unsubscribe: _propTypes["default"].func.isRequired,
  generateSubscriptionId: _propTypes["default"].func.isRequired,
  chartId: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired
};
var _default = InteractiveYCoordinate;
exports["default"] = _default;
//# sourceMappingURL=InteractiveYCoordinate.js.map