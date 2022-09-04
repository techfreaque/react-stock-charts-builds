"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.getAxisCanvas = getAxisCanvas;
exports.getMouseCanvas = getMouseCanvas;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("./utils");

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

var aliases = {
  mouseleave: "mousemove",
  // to draw interactive after mouse exit
  panend: "pan",
  pinchzoom: "pan",
  mousedown: "mousemove",
  click: "mousemove",
  contextmenu: "mousemove",
  dblclick: "mousemove",
  dragstart: "drag",
  dragend: "drag",
  dragcancel: "drag"
};

var GenericComponent = /*#__PURE__*/function (_Component) {
  _inherits(GenericComponent, _Component);

  var _super = _createSuper(GenericComponent);

  function GenericComponent(props, context) {
    var _this;

    _classCallCheck(this, GenericComponent);

    _this = _super.call(this, props, context);
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    _this.getMoreProps = _this.getMoreProps.bind(_assertThisInitialized(_this));
    _this.listener = _this.listener.bind(_assertThisInitialized(_this));
    _this.draw = _this.draw.bind(_assertThisInitialized(_this));
    _this.updateMoreProps = _this.updateMoreProps.bind(_assertThisInitialized(_this));
    _this.evaluateType = _this.evaluateType.bind(_assertThisInitialized(_this));
    _this.isHover = _this.isHover.bind(_assertThisInitialized(_this));
    _this.preCanvasDraw = _this.preCanvasDraw.bind(_assertThisInitialized(_this));
    _this.postCanvasDraw = _this.postCanvasDraw.bind(_assertThisInitialized(_this));
    _this.getPanConditions = _this.getPanConditions.bind(_assertThisInitialized(_this));
    _this.shouldTypeProceed = _this.shouldTypeProceed.bind(_assertThisInitialized(_this));
    _this.preEvaluate = _this.preEvaluate.bind(_assertThisInitialized(_this));
    var generateSubscriptionId = context.generateSubscriptionId;
    _this.suscriberId = generateSubscriptionId();
    _this.moreProps = {};
    _this.state = {
      updateCount: 0
    };
    return _this;
  }

  _createClass(GenericComponent, [{
    key: "updateMoreProps",
    value: function updateMoreProps(moreProps) {
      var _this2 = this;

      Object.keys(moreProps).forEach(function (key) {
        _this2.moreProps[key] = moreProps[key];
      });
    }
  }, {
    key: "shouldTypeProceed",
    value: function shouldTypeProceed() {
      return true;
    }
  }, {
    key: "preEvaluate",
    value: function preEvaluate() {}
  }, {
    key: "listener",
    value: function listener(type, moreProps, state, e) {
      // console.log(e.shiftKey)
      if ((0, _utils.isDefined)(moreProps)) {
        this.updateMoreProps(moreProps);
      }

      this.evaluationInProgress = true;
      this.evaluateType(type, e);
      this.evaluationInProgress = false;
    }
  }, {
    key: "evaluateType",
    value: function evaluateType(type, e) {
      var newType = aliases[type] || type;
      var proceed = this.props.drawOn.indexOf(newType) > -1; // console.log("type ->", type, proceed);

      if (!proceed) return; // const moreProps = this.getMoreProps();

      this.preEvaluate(type, this.moreProps, e);
      if (!this.shouldTypeProceed(type, this.moreProps)) return;

      switch (type) {
        case "zoom":
        case "mouseenter":
          // DO NOT DRAW FOR THESE EVENTS
          break;

        case "mouseleave":
          {
            this.moreProps.hovering = false;
            var moreProps = this.getMoreProps();

            if (this.props.onUnHover) {
              this.props.onUnHover(moreProps, e);
            }

            break;
          }

        case "contextmenu":
          {
            if (this.props.onContextMenu) {
              this.props.onContextMenu(this.getMoreProps(), e);
            }

            if (this.moreProps.hovering && this.props.onContextMenuWhenHover) {
              this.props.onContextMenuWhenHover(this.getMoreProps(), e);
            }

            break;
          }

        case "mousedown":
          {
            if (this.props.onMouseDown) {
              this.props.onMouseDown(this.getMoreProps(), e);
            }

            break;
          }

        case "click":
          {
            var _moreProps = this.getMoreProps();

            if (this.moreProps.hovering) {
              // console.error("TODO use this only for SAR, Line series")
              this.props.onClickWhenHover(_moreProps, e);
            } else {
              this.props.onClickOutside(_moreProps, e);
            }

            if (this.props.onClick) {
              this.props.onClick(_moreProps, e);
            }

            break;
          }

        case "mousemove":
          {
            var prevHover = this.moreProps.hovering;
            this.moreProps.hovering = this.isHover(e);
            var _this$context = this.context,
                amIOnTop = _this$context.amIOnTop,
                setCursorClass = _this$context.setCursorClass;

            if (this.moreProps.hovering && !this.props.selected
            /* && !prevHover */
            && amIOnTop(this.suscriberId) && (0, _utils.isDefined)(this.props.onHover)) {
              setCursorClass("react-stockcharts-pointer-cursor");
              this.iSetTheCursorClass = true;
            } else if (this.moreProps.hovering && this.props.selected && amIOnTop(this.suscriberId)) {
              setCursorClass(this.props.interactiveCursorClass);
              this.iSetTheCursorClass = true;
            } else if (prevHover && !this.moreProps.hovering && this.iSetTheCursorClass) {
              this.iSetTheCursorClass = false;
              setCursorClass(null);
            }

            var _moreProps2 = this.getMoreProps();

            if (this.moreProps.hovering && !prevHover) {
              if (this.props.onHover) {
                this.props.onHover(_moreProps2, e);
              }
            }

            if (prevHover && !this.moreProps.hovering) {
              if (this.props.onUnHover) {
                this.props.onUnHover(_moreProps2, e);
              }
            }

            if (this.props.onMouseMove) {
              this.props.onMouseMove(_moreProps2, e);
            }

            break;
          }

        case "dblclick":
          {
            var _moreProps3 = this.getMoreProps();

            if (this.props.onDoubleClick) {
              this.props.onDoubleClick(_moreProps3, e);
            }

            if (this.moreProps.hovering && this.props.onDoubleClickWhenHover) {
              this.props.onDoubleClickWhenHover(_moreProps3, e);
            }

            break;
          }

        case "pan":
          {
            this.moreProps.hovering = false;

            if (this.props.onPan) {
              this.props.onPan(this.getMoreProps(), e);
            }

            break;
          }

        case "panend":
          {
            if (this.props.onPanEnd) {
              this.props.onPanEnd(this.getMoreProps(), e);
            }

            break;
          }

        case "dragstart":
          {
            if (this.getPanConditions().draggable) {
              var _amIOnTop = this.context.amIOnTop;

              if (_amIOnTop(this.suscriberId)) {
                this.dragInProgress = true;
                this.props.onDragStart(this.getMoreProps(), e);
              }
            }

            this.someDragInProgress = true;
            break;
          }

        case "drag":
          {
            if (this.dragInProgress && this.props.onDrag) {
              this.props.onDrag(this.getMoreProps(), e);
            }

            break;
          }

        case "dragend":
          {
            if (this.dragInProgress && this.props.onDragComplete) {
              this.props.onDragComplete(this.getMoreProps(), e);
            }

            this.dragInProgress = false;
            this.someDragInProgress = false;
            break;
          }

        case "dragcancel":
          {
            if (this.dragInProgress || this.iSetTheCursorClass) {
              var _setCursorClass = this.context.setCursorClass;

              _setCursorClass(null);
            }

            break;
          }
      }
    }
  }, {
    key: "isHover",
    value: function isHover(e) {
      return (0, _utils.isDefined)(this.props.isHover) ? this.props.isHover(this.getMoreProps(), e) : false;
    }
  }, {
    key: "getPanConditions",
    value: function getPanConditions() {
      var draggable = !!(this.props.selected && this.moreProps.hovering) || this.props.enableDragOnHover && this.moreProps.hovering;
      return {
        draggable: draggable,
        panEnabled: !this.props.disablePan
      };
    }
  }, {
    key: "draw",
    value: function draw() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        force: false
      },
          trigger = _ref.trigger,
          force = _ref.force;

      var type = aliases[trigger] || trigger;
      var proceed = this.props.drawOn.indexOf(type) > -1;

      if (proceed || this.props.selected
      /* this is to draw as soon as you select */
      || force) {
        var chartCanvasType = this.context.chartCanvasType;
        var canvasDraw = this.props.canvasDraw;

        if ((0, _utils.isNotDefined)(canvasDraw) || chartCanvasType === "svg") {
          var updateCount = this.state.updateCount;
          this.setState({
            updateCount: updateCount + 1
          });
        } else {
          this.drawOnCanvas();
        }
      }
    }
  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this$context2 = this.context,
          subscribe = _this$context2.subscribe,
          chartId = _this$context2.chartId;
      var _this$props = this.props,
          clip = _this$props.clip,
          edgeClip = _this$props.edgeClip;
      subscribe(this.suscriberId, {
        chartId: chartId,
        clip: clip,
        edgeClip: edgeClip,
        listener: this.listener,
        draw: this.draw,
        getPanConditions: this.getPanConditions
      });
      this.UNSAFE_componentWillReceiveProps(this.props, this.context);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var unsubscribe = this.context.unsubscribe;
      unsubscribe(this.suscriberId);

      if (this.iSetTheCursorClass) {
        var setCursorClass = this.context.setCursorClass;
        setCursorClass(null);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.componentDidUpdate(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var chartCanvasType = this.context.chartCanvasType;
      var _this$props2 = this.props,
          canvasDraw = _this$props2.canvasDraw,
          selected = _this$props2.selected,
          interactiveCursorClass = _this$props2.interactiveCursorClass;

      if (prevProps.selected !== selected) {
        var setCursorClass = this.context.setCursorClass;

        if (selected && this.moreProps.hovering) {
          this.iSetTheCursorClass = true;
          setCursorClass(interactiveCursorClass);
        } else {
          this.iSetTheCursorClass = false;
          setCursorClass(null);
        }
      }

      if ((0, _utils.isDefined)(canvasDraw) && !this.evaluationInProgress // && !(this.someDragInProgress && this.props.selected)

      /*
      prevent double draw of interactive elements
      during dragging / hover / click etc.
      */
      && chartCanvasType !== "svg") {
        this.updateMoreProps(this.moreProps);
        this.drawOnCanvas();
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
      var xScale = nextContext.xScale,
          plotData = nextContext.plotData,
          chartConfig = nextContext.chartConfig,
          getMutableState = nextContext.getMutableState;
      this.props.debug(nextContext);
      this.moreProps = _objectSpread(_objectSpread(_objectSpread({}, this.moreProps), getMutableState()), {}, {
        /*
        ^ this is so
        mouseXY, currentCharts, currentItem are available to
        newly created components like MouseHoverText which
        is created right after a new interactive object is drawn
        */
        xScale: xScale,
        plotData: plotData,
        chartConfig: chartConfig
      });
    }
  }, {
    key: "getMoreProps",
    value: function getMoreProps() {
      var _this$context3 = this.context,
          xScale = _this$context3.xScale,
          plotData = _this$context3.plotData,
          chartConfig = _this$context3.chartConfig,
          morePropsDecorator = _this$context3.morePropsDecorator,
          xAccessor = _this$context3.xAccessor,
          displayXAccessor = _this$context3.displayXAccessor,
          width = _this$context3.width,
          height = _this$context3.height;
      var _this$context4 = this.context,
          chartId = _this$context4.chartId,
          fullData = _this$context4.fullData;

      var moreProps = _objectSpread({
        xScale: xScale,
        plotData: plotData,
        chartConfig: chartConfig,
        xAccessor: xAccessor,
        displayXAccessor: displayXAccessor,
        width: width,
        height: height,
        chartId: chartId,
        fullData: fullData
      }, this.moreProps);

      return (morePropsDecorator || _utils.identity)(moreProps);
    }
  }, {
    key: "preCanvasDraw",
    value: function preCanvasDraw() {// do nothing
    }
  }, {
    key: "postCanvasDraw",
    value: function postCanvasDraw() {}
  }, {
    key: "drawOnCanvas",
    value: function drawOnCanvas() {
      var _this$props3 = this.props,
          canvasDraw = _this$props3.canvasDraw,
          canvasToDraw = _this$props3.canvasToDraw;
      var getCanvasContexts = this.context.getCanvasContexts;
      var moreProps = this.getMoreProps();
      var ctx = canvasToDraw(getCanvasContexts());
      this.preCanvasDraw(ctx, moreProps);
      canvasDraw(ctx, moreProps);
      this.postCanvasDraw(ctx, moreProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$context5 = this.context,
          chartCanvasType = _this$context5.chartCanvasType,
          chartId = _this$context5.chartId;
      var _this$props4 = this.props,
          canvasDraw = _this$props4.canvasDraw,
          clip = _this$props4.clip,
          svgDraw = _this$props4.svgDraw;

      if ((0, _utils.isDefined)(canvasDraw) && chartCanvasType !== "svg") {
        return null;
      }

      var suffix = (0, _utils.isDefined)(chartId) ? "-" + chartId : "";
      var style = clip ? {
        "clipPath": "url(#chart-area-clip".concat(suffix, ")")
      } : null;
      return /*#__PURE__*/_react["default"].createElement("g", {
        style: style
      }, svgDraw(this.getMoreProps()));
    }
  }]);

  return GenericComponent;
}(_react.Component);

GenericComponent.propTypes = {
  svgDraw: _propTypes["default"].func.isRequired,
  canvasDraw: _propTypes["default"].func,
  drawOn: _propTypes["default"].array.isRequired,
  clip: _propTypes["default"].bool.isRequired,
  edgeClip: _propTypes["default"].bool.isRequired,
  interactiveCursorClass: _propTypes["default"].string,
  selected: _propTypes["default"].bool.isRequired,
  enableDragOnHover: _propTypes["default"].bool.isRequired,
  disablePan: _propTypes["default"].bool.isRequired,
  canvasToDraw: _propTypes["default"].func.isRequired,
  isHover: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onClickWhenHover: _propTypes["default"].func,
  onClickOutside: _propTypes["default"].func,
  onPan: _propTypes["default"].func,
  onPanEnd: _propTypes["default"].func,
  onDragStart: _propTypes["default"].func,
  onDrag: _propTypes["default"].func,
  onDragComplete: _propTypes["default"].func,
  onDoubleClick: _propTypes["default"].func,
  onDoubleClickWhenHover: _propTypes["default"].func,
  onContextMenu: _propTypes["default"].func,
  onContextMenuWhenHover: _propTypes["default"].func,
  onMouseMove: _propTypes["default"].func,
  onMouseDown: _propTypes["default"].func,
  onHover: _propTypes["default"].func,
  onUnHover: _propTypes["default"].func,
  debug: _propTypes["default"].func // owner: PropTypes.string.isRequired,

};
GenericComponent.defaultProps = {
  svgDraw: (0, _utils.functor)(null),
  draw: [],
  canvasToDraw: function canvasToDraw(contexts) {
    return contexts.mouseCoord;
  },
  clip: true,
  edgeClip: false,
  selected: false,
  disablePan: false,
  enableDragOnHover: false,
  onClickWhenHover: _utils.noop,
  onClickOutside: _utils.noop,
  onDragStart: _utils.noop,
  onMouseMove: _utils.noop,
  onMouseDown: _utils.noop,
  debug: _utils.noop
};
GenericComponent.contextTypes = {
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  margin: _propTypes["default"].object.isRequired,
  chartId: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  getCanvasContexts: _propTypes["default"].func,
  chartCanvasType: _propTypes["default"].string,
  xScale: _propTypes["default"].func.isRequired,
  xAccessor: _propTypes["default"].func.isRequired,
  displayXAccessor: _propTypes["default"].func.isRequired,
  plotData: _propTypes["default"].array.isRequired,
  fullData: _propTypes["default"].array.isRequired,
  chartConfig: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object]).isRequired,
  morePropsDecorator: _propTypes["default"].func,
  generateSubscriptionId: _propTypes["default"].func,
  getMutableState: _propTypes["default"].func.isRequired,
  amIOnTop: _propTypes["default"].func.isRequired,
  subscribe: _propTypes["default"].func.isRequired,
  unsubscribe: _propTypes["default"].func.isRequired,
  setCursorClass: _propTypes["default"].func.isRequired
};
var _default = GenericComponent;
exports["default"] = _default;

function getAxisCanvas(contexts) {
  return contexts.axes;
}

function getMouseCanvas(contexts) {
  return contexts.mouseCoord;
}
//# sourceMappingURL=GenericComponent.js.map