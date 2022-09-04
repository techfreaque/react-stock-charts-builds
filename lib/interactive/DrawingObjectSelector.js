"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _utils2 = require("./utils");

var _GenericComponent = _interopRequireWildcard(require("../GenericComponent"));

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

var DrawingObjectSelector = /*#__PURE__*/function (_Component) {
  _inherits(DrawingObjectSelector, _Component);

  var _super = _createSuper(DrawingObjectSelector);

  function DrawingObjectSelector(props) {
    var _this;

    _classCallCheck(this, DrawingObjectSelector);

    _this = _super.call(this, props);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleDoubleClick = _this.handleDoubleClick.bind(_assertThisInitialized(_this));
    _this.getInteraction = _this.getInteraction.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DrawingObjectSelector, [{
    key: "handleDoubleClick",
    value: function handleDoubleClick(moreProps, e) {
      e.preventDefault();
      var onDoubleClick = this.props.onDoubleClick;
      var enabled = this.props.enabled;
      if (!enabled) return;
      var interactives = this.getInteraction(moreProps);
      var allSelected = (0, _utils2.getSelected)(interactives); // console.log(selected, interactives)

      if (allSelected.length > 0) {
        var selected = (0, _utils.head)(allSelected);
        var item = {
          type: selected.type,
          chartId: selected.chartId,
          object: (0, _utils.head)(selected.objects)
        };
        var morePropsForChart = (0, _utils2.getMorePropsForChart)(moreProps, selected.chartId);
        onDoubleClick(item, morePropsForChart);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(moreProps, e) {
      e.preventDefault();
      var onSelect = this.props.onSelect;
      var enabled = this.props.enabled;
      if (!enabled) return;
      var interactives = this.getInteraction(moreProps);
      onSelect(interactives, moreProps);
    }
  }, {
    key: "getInteraction",
    value: function getInteraction(moreProps) {
      var _this$props = this.props,
          getInteractiveNodes = _this$props.getInteractiveNodes,
          drawingObjectMap = _this$props.drawingObjectMap;
      var interactiveNodes = getInteractiveNodes();
      var interactives = (0, _utils.mapObject)(interactiveNodes, function (each) {
        var key = drawingObjectMap[each.type];
        var valueArray = (0, _utils.isDefined)(key) ? each.node.props[key] : undefined;
        var valuePresent = (0, _utils.isDefined)(valueArray) && Array.isArray(valueArray) && valueArray.length > 0;

        if (valuePresent) {
          // console.log("Value present for ", each.type, each.chartId);
          var morePropsForChart = (0, _utils2.getMorePropsForChart)(moreProps, each.chartId);
          var objects = each.node.getSelectionState(morePropsForChart);
          return {
            type: each.type,
            chartId: each.chartId,
            objects: objects
          };
        }

        return {
          type: each.type,
          chartId: each.chartId,
          objects: []
        };
      });
      return interactives;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_GenericComponent["default"], {
        svgDraw: _utils.noop,
        canvasToDraw: _GenericComponent.getMouseCanvas,
        canvasDraw: _utils.noop,
        onMouseDown: this.handleClick,
        onDoubleClick: this.handleDoubleClick,
        drawOn: ["mousemove", "pan", "drag"]
      });
    }
  }]);

  return DrawingObjectSelector;
}(_react.Component);

DrawingObjectSelector.propTypes = {
  getInteractiveNodes: _propTypes["default"].func.isRequired,
  onSelect: _propTypes["default"].func.isRequired,
  onDoubleClick: _propTypes["default"].func.isRequired,
  drawingObjectMap: _propTypes["default"].object.isRequired,
  enabled: _propTypes["default"].bool.isRequired
};
DrawingObjectSelector.defaultProps = {
  enabled: true,
  onDoubleClick: _utils.noop
};
var _default = DrawingObjectSelector;
exports["default"] = _default;
//# sourceMappingURL=DrawingObjectSelector.js.map