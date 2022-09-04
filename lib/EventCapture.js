"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Selection = require("d3-selection");

var _utils = require("./utils");

var _ChartDataUtil = require("./utils/ChartDataUtil");

var _excluded = ["chartsToPan"],
    _excluded2 = ["chartsToPan"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

// import { clearTimeout, setTimeout } from "timers";
var EventCapture = /*#__PURE__*/function (_Component) {
  _inherits(EventCapture, _Component);

  var _super = _createSuper(EventCapture);

  function EventCapture(props) {
    var _this;

    _classCallCheck(this, EventCapture);

    _this = _super.call(this, props);
    _this.handleEnter = _this.handleEnter.bind(_assertThisInitialized(_this));
    _this.handleLeave = _this.handleLeave.bind(_assertThisInitialized(_this));
    _this.handleWheel = _this.handleWheel.bind(_assertThisInitialized(_this));
    _this.handleMouseMove = _this.handleMouseMove.bind(_assertThisInitialized(_this));
    _this.handleMouseDown = _this.handleMouseDown.bind(_assertThisInitialized(_this));
    _this.handlePanEnd = _this.handlePanEnd.bind(_assertThisInitialized(_this));
    _this.handlePan = _this.handlePan.bind(_assertThisInitialized(_this));
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_this));
    _this.handleTouchMove = _this.handleTouchMove.bind(_assertThisInitialized(_this));
    _this.handlePinchZoom = _this.handlePinchZoom.bind(_assertThisInitialized(_this));
    _this.handlePinchZoomEnd = _this.handlePinchZoomEnd.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleRightClick = _this.handleRightClick.bind(_assertThisInitialized(_this));
    _this.handleDrag = _this.handleDrag.bind(_assertThisInitialized(_this));
    _this.handleDragEnd = _this.handleDragEnd.bind(_assertThisInitialized(_this));
    _this.shouldPan = _this.shouldPan.bind(_assertThisInitialized(_this));
    _this.canPan = _this.canPan.bind(_assertThisInitialized(_this));
    _this.setCursorClass = _this.setCursorClass.bind(_assertThisInitialized(_this));
    _this.saveNode = _this.saveNode.bind(_assertThisInitialized(_this));
    _this.mouseInside = false;
    _this.mouseInteraction = true;
    _this.state = {
      panInProgress: false
    };
    return _this;
  }

  _createClass(EventCapture, [{
    key: "saveNode",
    value: function saveNode(node) {
      this.node = node;
    }
  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.focus = this.props.focus;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.node) {
        (0, _d3Selection.select)(this.node).on(_utils.MOUSEENTER, this.handleEnter).on(_utils.MOUSELEAVE, this.handleLeave);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.componentDidMount();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.node) {
        (0, _d3Selection.select)(this.node).on(_utils.MOUSEENTER, null).on(_utils.MOUSELEAVE, null);
        var win = (0, _utils.d3Window)(this.node);
        (0, _d3Selection.select)(win).on(_utils.MOUSEMOVE, null);
      }
    }
  }, {
    key: "handleEnter",
    value: function handleEnter() {
      var e = _d3Selection.event;
      var onMouseEnter = this.props.onMouseEnter;
      this.mouseInside = true;

      if (!this.state.panInProgress && !this.state.dragInProgress) {
        var win = (0, _utils.d3Window)(this.node);
        (0, _d3Selection.select)(win).on(_utils.MOUSEMOVE, this.handleMouseMove);
      }

      onMouseEnter(e);
    }
  }, {
    key: "handleLeave",
    value: function handleLeave(e) {
      var onMouseLeave = this.props.onMouseLeave;
      this.mouseInside = false;

      if (!this.state.panInProgress && !this.state.dragInProgress) {
        var win = (0, _utils.d3Window)(this.node);
        (0, _d3Selection.select)(win).on(_utils.MOUSEMOVE, null);
      }

      onMouseLeave(e);
    }
  }, {
    key: "handleWheel",
    value: function handleWheel(e) {
      var _this$props = this.props,
          zoom = _this$props.zoom,
          onZoom = _this$props.onZoom;
      var panInProgress = this.state.panInProgress;
      var yZoom = Math.abs(e.deltaY) > Math.abs(e.deltaX) && Math.abs(e.deltaY) > 0; // const xPan = Math.abs(e.deltaY) < Math.abs(e.deltaX) && Math.abs(e.deltaX) > 0;

      var mouseXY = (0, _utils.mousePosition)(e);
      e.preventDefault();

      if (zoom && this.focus && yZoom && !panInProgress) {
        var zoomDir = e.deltaY > 0 ? 1 : -1;
        onZoom(zoomDir, mouseXY, e);
      } else if (this.focus) {
        if (this.shouldPan()) {
          // console.log("Do pan now...")
          // pan already in progress
          var _this$state$panStart = this.state.panStart,
              panStartXScale = _this$state$panStart.panStartXScale,
              chartsToPan = _this$state$panStart.chartsToPan;
          this.lastNewPos = mouseXY;
          this.panHappened = true;
          this.dx += e.deltaX;
          this.dy += e.deltaY;
          var dxdy = {
            dx: this.dx,
            dy: this.dy
          };
          this.props.onPan(mouseXY, panStartXScale, dxdy, chartsToPan, e);
        } else {
          // console.log("Pan start...")
          // pan start
          var _this$props2 = this.props,
              xScale = _this$props2.xScale,
              chartConfig = _this$props2.chartConfig;
          var currentCharts = (0, _ChartDataUtil.getCurrentCharts)(chartConfig, mouseXY);
          this.dx = 0;
          this.dy = 0;
          this.setState({
            panInProgress: true,
            panStart: {
              panStartXScale: xScale,
              panOrigin: mouseXY,
              chartsToPan: currentCharts
            }
          });
        }

        this.queuePanEnd();
      }
    }
  }, {
    key: "queuePanEnd",
    value: function queuePanEnd() {
      var _this2 = this;

      if ((0, _utils.isDefined)(this.panEndTimeout)) {
        clearTimeout(this.panEndTimeout);
      }

      this.panEndTimeout = setTimeout(function () {
        _this2.handlePanEnd();
      }, 100);
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove() {
      var e = _d3Selection.event;
      var _this$props3 = this.props,
          onMouseMove = _this$props3.onMouseMove,
          mouseMove = _this$props3.mouseMove;

      if (this.mouseInteraction && mouseMove && !this.state.panInProgress) {
        var newPos = (0, _d3Selection.mouse)(this.node);
        onMouseMove(newPos, "mouse", e);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var _this3 = this;

      var mouseXY = (0, _utils.mousePosition)(e);
      var _this$props4 = this.props,
          onClick = _this$props4.onClick,
          onDoubleClick = _this$props4.onDoubleClick;

      if (!this.panHappened && !this.dragHappened) {
        if (this.clicked) {
          onDoubleClick(mouseXY, e);
          this.clicked = false;
        } else {
          onClick(mouseXY, e);
          this.clicked = true;
          setTimeout(function () {
            if (_this3.clicked) {
              _this3.clicked = false;
            }
          }, 400);
        }
      }
    }
  }, {
    key: "handleRightClick",
    value: function handleRightClick(e) {
      e.stopPropagation();
      e.preventDefault();
      var _this$props5 = this.props,
          onContextMenu = _this$props5.onContextMenu,
          onPanEnd = _this$props5.onPanEnd;
      var mouseXY = (0, _utils.mousePosition)(e, this.node.getBoundingClientRect());

      if ((0, _utils.isDefined)(this.state.panStart)) {
        var _this$state$panStart2 = this.state.panStart,
            panStartXScale = _this$state$panStart2.panStartXScale,
            panOrigin = _this$state$panStart2.panOrigin,
            chartsToPan = _this$state$panStart2.chartsToPan;

        if (this.panHappened) {
          onPanEnd(mouseXY, panStartXScale, panOrigin, chartsToPan, e);
        }

        var win = (0, _utils.d3Window)(this.node);
        (0, _d3Selection.select)(win).on(_utils.MOUSEMOVE, null).on(_utils.MOUSEUP, null);
        this.setState({
          panInProgress: false,
          panStart: null
        });
      }

      onContextMenu(mouseXY, e);
    }
  }, {
    key: "handleDrag",
    value: function handleDrag() {
      var e = _d3Selection.event;

      if (this.props.onDrag) {
        this.dragHappened = true;
        var mouseXY = (0, _d3Selection.mouse)(this.node);
        this.props.onDrag({
          startPos: this.state.dragStartPosition,
          mouseXY: mouseXY
        }, e);
      }
    }
  }, {
    key: "cancelDrag",
    value: function cancelDrag() {
      var win = (0, _utils.d3Window)(this.node);
      (0, _d3Selection.select)(win).on(_utils.MOUSEMOVE, this.mouseInside ? this.handleMouseMove : null).on(_utils.MOUSEUP, null);
      this.setState({
        dragInProgress: false
      });
      this.mouseInteraction = true;
    }
  }, {
    key: "handleDragEnd",
    value: function handleDragEnd() {
      var e = _d3Selection.event;
      var mouseXY = (0, _d3Selection.mouse)(this.node);
      var win = (0, _utils.d3Window)(this.node);
      (0, _d3Selection.select)(win).on(_utils.MOUSEMOVE, this.mouseInside ? this.handleMouseMove : null).on(_utils.MOUSEUP, null);

      if (this.dragHappened) {
        this.props.onDragComplete({
          mouseXY: mouseXY
        }, e);
      }

      this.setState({
        dragInProgress: false
      });
      this.mouseInteraction = true;
    }
  }, {
    key: "canPan",
    value: function canPan() {
      var getAllPanConditions = this.props.getAllPanConditions;
      var initialPanEnabled = this.props.pan;

      var _getAllPanConditions$ = getAllPanConditions().reduce(function (returnObj, a) {
        return {
          draggable: returnObj.draggable || a.draggable,
          panEnabled: returnObj.panEnabled && a.panEnabled
        };
      }, {
        draggable: false,
        panEnabled: initialPanEnabled
      }),
          panEnabled = _getAllPanConditions$.panEnabled,
          somethingSelected = _getAllPanConditions$.draggable;

      return {
        panEnabled: panEnabled,
        somethingSelected: somethingSelected
      };
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      if (e.button !== 0) {
        return;
      }

      var _this$props6 = this.props,
          xScale = _this$props6.xScale,
          chartConfig = _this$props6.chartConfig,
          onMouseDown = _this$props6.onMouseDown;
      this.panHappened = false;
      this.dragHappened = false;
      this.focus = true;

      if (!this.state.panInProgress && this.mouseInteraction) {
        var mouseXY = (0, _utils.mousePosition)(e);
        var currentCharts = (0, _ChartDataUtil.getCurrentCharts)(chartConfig, mouseXY);

        var _this$canPan = this.canPan(),
            panEnabled = _this$canPan.panEnabled,
            somethingSelected = _this$canPan.somethingSelected;

        var pan = panEnabled && !somethingSelected;

        if (pan) {
          this.setState({
            panInProgress: pan,
            panStart: {
              panStartXScale: xScale,
              panOrigin: mouseXY,
              chartsToPan: currentCharts
            }
          });
          var win = (0, _utils.d3Window)(this.node);
          (0, _d3Selection.select)(win).on(_utils.MOUSEMOVE, this.handlePan).on(_utils.MOUSEUP, this.handlePanEnd);
        } else if (somethingSelected) {
          this.setState({
            panInProgress: false,
            dragInProgress: true,
            panStart: null,
            dragStartPosition: mouseXY
          });
          this.props.onDragStart({
            startPos: mouseXY
          }, e); // this.mouseInteraction = false;

          var _win = (0, _utils.d3Window)(this.node);

          (0, _d3Selection.select)(_win).on(_utils.MOUSEMOVE, this.handleDrag).on(_utils.MOUSEUP, this.handleDragEnd);
        }

        onMouseDown(mouseXY, currentCharts, e);
      }

      e.preventDefault();
    }
  }, {
    key: "shouldPan",
    value: function shouldPan() {
      var _this$props7 = this.props,
          panEnabled = _this$props7.pan,
          onPan = _this$props7.onPan;
      return panEnabled && onPan && (0, _utils.isDefined)(this.state.panStart);
    }
  }, {
    key: "handlePan",
    value: function handlePan() {
      var e = _d3Selection.event;

      if (this.shouldPan()) {
        this.panHappened = true;
        var _this$state$panStart3 = this.state.panStart,
            panStartXScale = _this$state$panStart3.panStartXScale,
            panOrigin = _this$state$panStart3.panOrigin,
            chartsToPan = _this$state$panStart3.chartsToPan;
        var mouseXY = this.mouseInteraction ? (0, _d3Selection.mouse)(this.node) : (0, _d3Selection.touches)(this.node)[0];
        this.lastNewPos = mouseXY;
        var dx = mouseXY[0] - panOrigin[0];
        var dy = mouseXY[1] - panOrigin[1];
        this.dx = dx;
        this.dy = dy;
        this.props.onPan(mouseXY, panStartXScale, {
          dx: dx,
          dy: dy
        }, chartsToPan, e);
      }
    }
  }, {
    key: "handlePanEnd",
    value: function handlePanEnd() {
      var e = _d3Selection.event;
      var _this$props8 = this.props,
          panEnabled = _this$props8.pan,
          onPanEnd = _this$props8.onPanEnd;

      if ((0, _utils.isDefined)(this.state.panStart)) {
        var _this$state$panStart4 = this.state.panStart,
            panStartXScale = _this$state$panStart4.panStartXScale,
            chartsToPan = _this$state$panStart4.chartsToPan;
        var win = (0, _utils.d3Window)(this.node);
        (0, _d3Selection.select)(win).on(_utils.MOUSEMOVE, this.mouseInside ? this.handleMouseMove : null).on(_utils.MOUSEUP, null).on(_utils.TOUCHMOVE, null).on(_utils.TOUCHEND, null);

        if (this.panHappened // && !this.contextMenuClicked
        && panEnabled && onPanEnd) {
          var dx = this.dx,
              dy = this.dy; // console.log(dx, dy)

          delete this.dx;
          delete this.dy;
          onPanEnd(this.lastNewPos, panStartXScale, {
            dx: dx,
            dy: dy
          }, chartsToPan, e);
        }

        this.setState({
          panInProgress: false,
          panStart: null
        });
      }
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(e) {
      var onMouseMove = this.props.onMouseMove;
      var touchXY = (0, _utils.touchPosition)((0, _utils.getTouchProps)(e.touches[0]), e);
      onMouseMove(touchXY, "touch", e);
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(e) {
      this.mouseInteraction = false;
      var _this$props9 = this.props,
          panEnabled = _this$props9.pan,
          chartConfig = _this$props9.chartConfig,
          onMouseMove = _this$props9.onMouseMove;
      var _this$props10 = this.props,
          xScale = _this$props10.xScale,
          onPanEnd = _this$props10.onPanEnd;

      if (e.touches.length === 1) {
        this.panHappened = false;
        var touchXY = (0, _utils.touchPosition)((0, _utils.getTouchProps)(e.touches[0]), e);
        onMouseMove(touchXY, "touch", e);

        if (panEnabled) {
          var currentCharts = (0, _ChartDataUtil.getCurrentCharts)(chartConfig, touchXY);
          this.setState({
            panInProgress: true,
            panStart: {
              panStartXScale: xScale,
              panOrigin: touchXY,
              chartsToPan: currentCharts
            }
          });
          var win = (0, _utils.d3Window)(this.node);
          (0, _d3Selection.select)(win).on(_utils.TOUCHMOVE, this.handlePan, false).on(_utils.TOUCHEND, this.handlePanEnd, false);
        }
      } else if (e.touches.length === 2) {
        // pinch zoom begin
        // do nothing pinch zoom is handled in handleTouchMove
        var _this$state = this.state,
            panInProgress = _this$state.panInProgress,
            panStart = _this$state.panStart;

        if (panInProgress && panEnabled && onPanEnd) {
          var panStartXScale = panStart.panStartXScale,
              panOrigin = panStart.panOrigin,
              chartsToPan = panStart.chartsToPan;

          var _win2 = (0, _utils.d3Window)(this.node);

          (0, _d3Selection.select)(_win2).on(_utils.MOUSEMOVE, this.mouseInside ? this.handleMouseMove : null).on(_utils.MOUSEUP, null).on(_utils.TOUCHMOVE, this.handlePinchZoom, false).on(_utils.TOUCHEND, this.handlePinchZoomEnd, false);
          var touch1Pos = (0, _utils.touchPosition)((0, _utils.getTouchProps)(e.touches[0]), e);
          var touch2Pos = (0, _utils.touchPosition)((0, _utils.getTouchProps)(e.touches[1]), e);

          if (this.panHappened // && !this.contextMenuClicked
          && panEnabled && onPanEnd) {
            onPanEnd(this.lastNewPos, panStartXScale, panOrigin, chartsToPan, e);
          }

          this.setState({
            panInProgress: false,
            pinchZoomStart: {
              xScale: xScale,
              touch1Pos: touch1Pos,
              touch2Pos: touch2Pos,
              range: xScale.range(),
              chartsToPan: chartsToPan
            }
          });
        }
      }
    }
  }, {
    key: "handlePinchZoom",
    value: function handlePinchZoom() {
      var e = _d3Selection.event;

      var _touches = (0, _d3Selection.touches)(this.node),
          _touches2 = _slicedToArray(_touches, 2),
          touch1Pos = _touches2[0],
          touch2Pos = _touches2[1];

      var _this$props11 = this.props,
          xScale = _this$props11.xScale,
          zoomEnabled = _this$props11.zoom,
          onPinchZoom = _this$props11.onPinchZoom; // eslint-disable-next-line no-unused-vars

      var _this$state$pinchZoom = this.state.pinchZoomStart,
          chartsToPan = _this$state$pinchZoom.chartsToPan,
          initialPinch = _objectWithoutProperties(_this$state$pinchZoom, _excluded);

      if (zoomEnabled && onPinchZoom) {
        onPinchZoom(initialPinch, {
          touch1Pos: touch1Pos,
          touch2Pos: touch2Pos,
          xScale: xScale
        }, e);
      }
    }
  }, {
    key: "handlePinchZoomEnd",
    value: function handlePinchZoomEnd() {
      var e = _d3Selection.event;
      var win = (0, _utils.d3Window)(this.node);
      (0, _d3Selection.select)(win).on(_utils.TOUCHMOVE, null).on(_utils.TOUCHEND, null);
      var _this$props12 = this.props,
          zoomEnabled = _this$props12.zoom,
          onPinchZoomEnd = _this$props12.onPinchZoomEnd; // eslint-disable-next-line no-unused-vars

      var _this$state$pinchZoom2 = this.state.pinchZoomStart,
          chartsToPan = _this$state$pinchZoom2.chartsToPan,
          initialPinch = _objectWithoutProperties(_this$state$pinchZoom2, _excluded2);

      if (zoomEnabled && onPinchZoomEnd) {
        onPinchZoomEnd(initialPinch, e);
      }

      this.setState({
        pinchZoomStart: null
      });
    }
  }, {
    key: "setCursorClass",
    value: function setCursorClass(cursorOverrideClass) {
      if (cursorOverrideClass !== this.state.cursorOverrideClass) {
        this.setState({
          cursorOverrideClass: cursorOverrideClass
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props13 = this.props,
          height = _this$props13.height,
          width = _this$props13.width,
          disableInteraction = _this$props13.disableInteraction,
          useCrossHairStyleCursor = _this$props13.useCrossHairStyleCursor;
      var className = this.state.cursorOverrideClass != null ? this.state.cursorOverrideClass : !useCrossHairStyleCursor ? "" : this.state.panInProgress ? "react-stockcharts-grabbing-cursor" : "react-stockcharts-crosshair-cursor";
      var interactionProps = disableInteraction || {
        onWheel: this.handleWheel,
        onMouseDown: this.handleMouseDown,
        onClick: this.handleClick,
        onContextMenu: this.handleRightClick,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove
      };
      return /*#__PURE__*/_react["default"].createElement("rect", _extends({
        ref: this.saveNode,
        className: className,
        width: width,
        height: height,
        style: {
          opacity: 0
        }
      }, interactionProps));
    }
  }]);

  return EventCapture;
}(_react.Component); // 				onMouseEnter={this.handleEnter}
//				onMouseLeave={this.handleLeave}


EventCapture.propTypes = {
  mouseMove: _propTypes["default"].bool.isRequired,
  zoom: _propTypes["default"].bool.isRequired,
  pan: _propTypes["default"].bool.isRequired,
  panSpeedMultiplier: _propTypes["default"].number.isRequired,
  focus: _propTypes["default"].bool.isRequired,
  useCrossHairStyleCursor: _propTypes["default"].bool.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  chartConfig: _propTypes["default"].array,
  xScale: _propTypes["default"].func.isRequired,
  xAccessor: _propTypes["default"].func.isRequired,
  disableInteraction: _propTypes["default"].bool.isRequired,
  getAllPanConditions: _propTypes["default"].func.isRequired,
  onMouseMove: _propTypes["default"].func,
  onMouseEnter: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  onZoom: _propTypes["default"].func,
  onPinchZoom: _propTypes["default"].func,
  onPinchZoomEnd: _propTypes["default"].func.isRequired,
  onPan: _propTypes["default"].func,
  onPanEnd: _propTypes["default"].func,
  onDragStart: _propTypes["default"].func,
  onDrag: _propTypes["default"].func,
  onDragComplete: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onDoubleClick: _propTypes["default"].func,
  onContextMenu: _propTypes["default"].func,
  onMouseDown: _propTypes["default"].func,
  children: _propTypes["default"].node
};
EventCapture.defaultProps = {
  mouseMove: false,
  zoom: false,
  pan: false,
  panSpeedMultiplier: 1,
  focus: false,
  onDragComplete: _utils.noop,
  disableInteraction: false
};
var _default = EventCapture;
exports["default"] = _default;
//# sourceMappingURL=EventCapture.js.map