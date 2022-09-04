"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Array = require("d3-array");

var _utils = require("./utils");

var _zoomBehavior = require("./utils/zoomBehavior");

var _ChartDataUtil = require("./utils/ChartDataUtil");

var _EventCapture = _interopRequireDefault(require("./EventCapture"));

var _CanvasContainer = _interopRequireDefault(require("./CanvasContainer"));

var _evaluator2 = _interopRequireDefault(require("./scale/evaluator"));

var _excluded = ["fullData"],
    _excluded2 = ["fullData"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var log = (0, _utils.getLogger)("ChartCanvas");
var CANDIDATES_FOR_RESET = ["seriesName"
/* "data",*/

/* "xAccessor",*/
];

function shouldResetChart(thisProps, nextProps) {
  return !CANDIDATES_FOR_RESET.every(function (key) {
    var result = (0, _utils.shallowEqual)(thisProps[key], nextProps[key]); // console.log(key, result);

    return result;
  });
}

function getCursorStyle() {
  var tooltipStyle = "\n\t.react-stockcharts-grabbing-cursor {\n\t\tpointer-events: all;\n\t\tcursor: -moz-grabbing;\n\t\tcursor: -webkit-grabbing;\n\t\tcursor: grabbing;\n\t}\n\t.react-stockcharts-crosshair-cursor {\n\t\tpointer-events: all;\n\t\tcursor: crosshair;\n\t}\n\t.react-stockcharts-tooltip-hover {\n\t\tpointer-events: all;\n\t\tcursor: pointer;\n\t}\n\t.react-stockcharts-avoid-interaction {\n\t\tpointer-events: none;\n\t}\n\t.react-stockcharts-enable-interaction {\n\t\tpointer-events: all;\n\t}\n\t.react-stockcharts-tooltip {\n\t\tpointer-events: all;\n\t\tcursor: pointer;\n\t}\n\t.react-stockcharts-default-cursor {\n\t\tcursor: default;\n\t}\n\t.react-stockcharts-move-cursor {\n\t\tcursor: move;\n\t}\n\t.react-stockcharts-pointer-cursor {\n\t\tcursor: pointer;\n\t}\n\t.react-stockcharts-ns-resize-cursor {\n\t\tcursor: ns-resize;\n\t}\n\t.react-stockcharts-ew-resize-cursor {\n\t\tcursor: ew-resize;\n\t}";
  return /*#__PURE__*/_react["default"].createElement("style", {
    type: "text/css"
  }, tooltipStyle);
}

function getDimensions(props) {
  return {
    height: props.height - props.margin.top - props.margin.bottom,
    width: props.width - props.margin.left - props.margin.right
  };
}

function getXScaleDirection(flipXScale) {
  return flipXScale ? -1 : 1;
}

function calculateFullData(props) {
  var fullData = props.data,
      plotFull = props.plotFull,
      xScale = props.xScale,
      clamp = props.clamp,
      pointsPerPxThreshold = props.pointsPerPxThreshold,
      flipXScale = props.flipXScale;
  var xAccessor = props.xAccessor,
      displayXAccessor = props.displayXAccessor,
      minPointsPerPxThreshold = props.minPointsPerPxThreshold;
  var useWholeData = (0, _utils.isDefined)(plotFull) ? plotFull : xAccessor === _utils.identity;

  var _evaluator = (0, _evaluator2["default"])({
    xScale: xScale,
    useWholeData: useWholeData,
    clamp: clamp,
    pointsPerPxThreshold: pointsPerPxThreshold,
    minPointsPerPxThreshold: minPointsPerPxThreshold,
    flipXScale: flipXScale
  }),
      filterData = _evaluator.filterData;

  return {
    xAccessor: xAccessor,
    displayXAccessor: displayXAccessor || xAccessor,
    xScale: xScale.copy(),
    fullData: fullData,
    filterData: filterData
  };
}

function resetChart(props) {
  var firstCalculation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (process.env.NODE_ENV !== "production") {
    if (!firstCalculation) log("CHART RESET");
  }

  var state = calculateState(props);
  var xAccessor = state.xAccessor,
      displayXAccessor = state.displayXAccessor,
      fullData = state.fullData;
  var initialPlotData = state.plotData,
      xScale = state.xScale;
  var postCalculator = props.postCalculator,
      children = props.children;
  var plotData = postCalculator(initialPlotData);
  var dimensions = getDimensions(props);
  var chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)((0, _ChartDataUtil.getNewChartConfig)(dimensions, children), {
    plotData: plotData,
    xAccessor: xAccessor,
    displayXAccessor: displayXAccessor,
    fullData: fullData
  }, xScale.domain());
  return _objectSpread(_objectSpread({}, state), {}, {
    xScale: xScale,
    plotData: plotData,
    chartConfig: chartConfig
  });
}

function updateChart(newState, initialXScale, props, lastItemWasVisible, initialChartConfig) {
  var fullData = newState.fullData,
      xScale = newState.xScale,
      xAccessor = newState.xAccessor,
      displayXAccessor = newState.displayXAccessor,
      filterData = newState.filterData;
  var lastItem = (0, _utils.last)(fullData);

  var _initialXScale$domain = initialXScale.domain(),
      _initialXScale$domain2 = _slicedToArray(_initialXScale$domain, 2),
      start = _initialXScale$domain2[0],
      end = _initialXScale$domain2[1];

  if (process.env.NODE_ENV !== "production") {
    log("TRIVIAL CHANGE");
  }

  var postCalculator = props.postCalculator,
      children = props.children,
      padding = props.padding,
      flipXScale = props.flipXScale;
  var maintainPointsPerPixelOnResize = props.maintainPointsPerPixelOnResize;
  var direction = getXScaleDirection(flipXScale);
  var dimensions = getDimensions(props);
  var updatedXScale = setXRange(xScale, dimensions, padding, direction); // console.log("lastItemWasVisible =", lastItemWasVisible, end, xAccessor(lastItem), end >= xAccessor(lastItem));

  var initialPlotData;

  if (!lastItemWasVisible || end >= xAccessor(lastItem)) {
    // resize comes here...
    // get plotData between [start, end] and do not change the domain
    var _initialXScale$range = initialXScale.range(),
        _initialXScale$range2 = _slicedToArray(_initialXScale$range, 2),
        rangeStart = _initialXScale$range2[0],
        rangeEnd = _initialXScale$range2[1];

    var _updatedXScale$range = updatedXScale.range(),
        _updatedXScale$range2 = _slicedToArray(_updatedXScale$range, 2),
        newRangeStart = _updatedXScale$range2[0],
        newRangeEnd = _updatedXScale$range2[1];

    var newDomainExtent = (newRangeEnd - newRangeStart) / (rangeEnd - rangeStart) * (end - start);
    var newStart = maintainPointsPerPixelOnResize ? end - newDomainExtent : start;
    var lastItemX = initialXScale(xAccessor(lastItem)); // console.log("pointsPerPixel => ", newStart, start, end, updatedXScale(end));

    var response = filterData(fullData, [newStart, end], xAccessor, updatedXScale, {
      fallbackStart: start,
      fallbackEnd: {
        lastItem: lastItem,
        lastItemX: lastItemX
      }
    });
    initialPlotData = response.plotData;
    updatedXScale.domain(response.domain); // console.log("HERE!!!!!", start, end);
  } else if (lastItemWasVisible && end < xAccessor(lastItem)) {
    // this is when a new item is added and last item was visible
    // so slide over and show the new item also
    // get plotData between [xAccessor(l) - (end - start), xAccessor(l)] and DO change the domain
    var dx = initialXScale(xAccessor(lastItem)) - initialXScale.range()[1];

    var _initialXScale$range$ = initialXScale.range().map(function (x) {
      return x + dx;
    }).map(initialXScale.invert),
        _initialXScale$range$2 = _slicedToArray(_initialXScale$range$, 2),
        _newStart = _initialXScale$range$2[0],
        newEnd = _initialXScale$range$2[1];

    var _response = filterData(fullData, [_newStart, newEnd], xAccessor, updatedXScale);

    initialPlotData = _response.plotData;
    updatedXScale.domain(_response.domain); // if last item was visible, then shift
  } // plotData = getDataOfLength(fullData, showingInterval, plotData.length)


  var plotData = postCalculator(initialPlotData);
  var chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)((0, _ChartDataUtil.getNewChartConfig)(dimensions, children, initialChartConfig), {
    plotData: plotData,
    xAccessor: xAccessor,
    displayXAccessor: displayXAccessor,
    fullData: fullData
  }, updatedXScale.domain());
  return {
    xScale: updatedXScale,
    xAccessor: xAccessor,
    chartConfig: chartConfig,
    plotData: plotData,
    fullData: fullData,
    filterData: filterData
  };
}

function calculateState(props) {
  var inputXAccesor = props.xAccessor,
      xExtentsProp = props.xExtents,
      data = props.data,
      padding = props.padding,
      flipXScale = props.flipXScale;

  if (process.env.NODE_ENV !== "production" && (0, _utils.isDefined)(props.xScale.invert)) {
    for (var i = 1; i < data.length; i++) {
      var prev = data[i - 1];
      var curr = data[i];

      if (inputXAccesor(prev) > inputXAccesor(curr)) {
        throw new Error("'data' is not sorted on 'xAccessor', send 'data' sorted in ascending order of 'xAccessor'");
      }
    }
  }

  var direction = getXScaleDirection(flipXScale);
  var dimensions = getDimensions(props);
  var extent = typeof xExtentsProp === "function" ? xExtentsProp(data) : (0, _d3Array.extent)(xExtentsProp.map(function (d) {
    return (0, _utils.functor)(d);
  }).map(function (each) {
    return each(data, inputXAccesor);
  }));

  var _calculateFullData = calculateFullData(props),
      xAccessor = _calculateFullData.xAccessor,
      displayXAccessor = _calculateFullData.displayXAccessor,
      xScale = _calculateFullData.xScale,
      fullData = _calculateFullData.fullData,
      filterData = _calculateFullData.filterData;

  var updatedXScale = setXRange(xScale, dimensions, padding, direction);

  var _filterData = filterData(fullData, extent, inputXAccesor, updatedXScale),
      plotData = _filterData.plotData,
      domain = _filterData.domain;

  if (process.env.NODE_ENV !== "production" && plotData.length <= 1) {
    throw new Error("Showing ".concat(plotData.length, " datapoints, review the 'xExtents' prop of ChartCanvas"));
  }

  return {
    plotData: plotData,
    xScale: updatedXScale.domain(domain),
    xAccessor: xAccessor,
    displayXAccessor: displayXAccessor,
    fullData: fullData,
    filterData: filterData
  };
}

function setXRange(xScale, dimensions, padding) {
  var direction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  if (xScale.rangeRoundPoints) {
    if (isNaN(padding)) throw new Error("padding has to be a number for ordinal scale");
    xScale.rangeRoundPoints([0, dimensions.width], padding);
  } else if (xScale.padding) {
    if (isNaN(padding)) throw new Error("padding has to be a number for ordinal scale");
    xScale.range([0, dimensions.width]);
    xScale.padding(padding / 2);
  } else {
    var _ref = isNaN(padding) ? padding : {
      left: padding,
      right: padding
    },
        left = _ref.left,
        right = _ref.right;

    if (direction > 0) {
      xScale.range([left, dimensions.width - right]);
    } else {
      xScale.range([dimensions.width - right, left]);
    }
  }

  return xScale;
}

function pinchCoordinates(pinch) {
  var touch1Pos = pinch.touch1Pos,
      touch2Pos = pinch.touch2Pos;
  return {
    topLeft: [Math.min(touch1Pos[0], touch2Pos[0]), Math.min(touch1Pos[1], touch2Pos[1])],
    bottomRight: [Math.max(touch1Pos[0], touch2Pos[0]), Math.max(touch1Pos[1], touch2Pos[1])]
  };
}

var ChartCanvas = /*#__PURE__*/function (_Component) {
  _inherits(ChartCanvas, _Component);

  var _super = _createSuper(ChartCanvas);

  function ChartCanvas() {
    var _this;

    _classCallCheck(this, ChartCanvas);

    _this = _super.call(this);
    _this.getDataInfo = _this.getDataInfo.bind(_assertThisInitialized(_this));
    _this.getCanvasContexts = _this.getCanvasContexts.bind(_assertThisInitialized(_this));
    _this.handleMouseMove = _this.handleMouseMove.bind(_assertThisInitialized(_this));
    _this.handleMouseEnter = _this.handleMouseEnter.bind(_assertThisInitialized(_this));
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_assertThisInitialized(_this));
    _this.handleZoom = _this.handleZoom.bind(_assertThisInitialized(_this));
    _this.handlePinchZoom = _this.handlePinchZoom.bind(_assertThisInitialized(_this));
    _this.handlePinchZoomEnd = _this.handlePinchZoomEnd.bind(_assertThisInitialized(_this));
    _this.handlePan = _this.handlePan.bind(_assertThisInitialized(_this));
    _this.handlePanEnd = _this.handlePanEnd.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleMouseDown = _this.handleMouseDown.bind(_assertThisInitialized(_this));
    _this.handleDoubleClick = _this.handleDoubleClick.bind(_assertThisInitialized(_this));
    _this.handleContextMenu = _this.handleContextMenu.bind(_assertThisInitialized(_this));
    _this.handleDragStart = _this.handleDragStart.bind(_assertThisInitialized(_this));
    _this.handleDrag = _this.handleDrag.bind(_assertThisInitialized(_this));
    _this.handleDragEnd = _this.handleDragEnd.bind(_assertThisInitialized(_this));
    _this.panHelper = _this.panHelper.bind(_assertThisInitialized(_this));
    _this.pinchZoomHelper = _this.pinchZoomHelper.bind(_assertThisInitialized(_this));
    _this.xAxisZoom = _this.xAxisZoom.bind(_assertThisInitialized(_this));
    _this.yAxisZoom = _this.yAxisZoom.bind(_assertThisInitialized(_this));
    _this.resetYDomain = _this.resetYDomain.bind(_assertThisInitialized(_this));
    _this.calculateStateForDomain = _this.calculateStateForDomain.bind(_assertThisInitialized(_this));
    _this.generateSubscriptionId = _this.generateSubscriptionId.bind(_assertThisInitialized(_this));
    _this.draw = _this.draw.bind(_assertThisInitialized(_this));
    _this.redraw = _this.redraw.bind(_assertThisInitialized(_this));
    _this.getAllPanConditions = _this.getAllPanConditions.bind(_assertThisInitialized(_this));
    _this.subscriptions = [];
    _this.subscribe = _this.subscribe.bind(_assertThisInitialized(_this));
    _this.unsubscribe = _this.unsubscribe.bind(_assertThisInitialized(_this));
    _this.amIOnTop = _this.amIOnTop.bind(_assertThisInitialized(_this));
    _this.saveEventCaptureNode = _this.saveEventCaptureNode.bind(_assertThisInitialized(_this));
    _this.saveCanvasContainerNode = _this.saveCanvasContainerNode.bind(_assertThisInitialized(_this));
    _this.setCursorClass = _this.setCursorClass.bind(_assertThisInitialized(_this));
    _this.getMutableState = _this.getMutableState.bind(_assertThisInitialized(_this)); // this.canvasDrawCallbackList = [];

    _this.interactiveState = [];
    _this.panInProgress = false;
    _this.state = {};
    _this.mutableState = {};
    _this.lastSubscriptionId = 0;
    return _this;
  }

  _createClass(ChartCanvas, [{
    key: "saveEventCaptureNode",
    value: function saveEventCaptureNode(node) {
      this.eventCaptureNode = node;
    }
  }, {
    key: "saveCanvasContainerNode",
    value: function saveCanvasContainerNode(node) {
      this.canvasContainerNode = node;
    }
  }, {
    key: "getMutableState",
    value: function getMutableState() {
      return this.mutableState;
    }
  }, {
    key: "getDataInfo",
    value: function getDataInfo() {
      return _objectSpread(_objectSpread({}, this.state), {}, {
        fullData: this.fullData
      });
    }
  }, {
    key: "getCanvasContexts",
    value: function getCanvasContexts() {
      if (this.canvasContainerNode) {
        return this.canvasContainerNode.getCanvasContexts();
      }
    }
  }, {
    key: "generateSubscriptionId",
    value: function generateSubscriptionId() {
      this.lastSubscriptionId++;
      return this.lastSubscriptionId;
    }
  }, {
    key: "clearBothCanvas",
    value: function clearBothCanvas() {
      var canvases = this.getCanvasContexts();

      if (canvases && canvases.axes) {
        (0, _utils.clearCanvas)([canvases.axes, // canvases.hover,
        canvases.mouseCoord], this.props.ratio);
      }
    }
  }, {
    key: "clearMouseCanvas",
    value: function clearMouseCanvas() {
      var canvases = this.getCanvasContexts();

      if (canvases && canvases.mouseCoord) {
        (0, _utils.clearCanvas)([canvases.mouseCoord // canvases.hover,
        ], this.props.ratio);
      }
    }
  }, {
    key: "clearThreeCanvas",
    value: function clearThreeCanvas() {
      var canvases = this.getCanvasContexts();

      if (canvases && canvases.axes) {
        (0, _utils.clearCanvas)([canvases.axes, // canvases.hover,
        canvases.mouseCoord, canvases.bg], this.props.ratio);
      }
    }
  }, {
    key: "subscribe",
    value: function subscribe(id, rest) {
      var _rest$getPanCondition = rest.getPanConditions,
          getPanConditions = _rest$getPanCondition === void 0 ? (0, _utils.functor)({
        draggable: false,
        panEnabled: true
      }) : _rest$getPanCondition;
      this.subscriptions = this.subscriptions.concat(_objectSpread(_objectSpread({
        id: id
      }, rest), {}, {
        getPanConditions: getPanConditions
      }));
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(id) {
      this.subscriptions = this.subscriptions.filter(function (each) {
        return each.id !== id;
      });
    }
  }, {
    key: "getAllPanConditions",
    value: function getAllPanConditions() {
      return this.subscriptions.map(function (each) {
        return each.getPanConditions();
      });
    }
  }, {
    key: "setCursorClass",
    value: function setCursorClass(className) {
      if (this.eventCaptureNode != null) {
        this.eventCaptureNode.setCursorClass(className);
      }
    }
  }, {
    key: "amIOnTop",
    value: function amIOnTop(id) {
      var dragableComponents = this.subscriptions.filter(function (each) {
        return each.getPanConditions().draggable;
      });
      return dragableComponents.length > 0 && (0, _utils.last)(dragableComponents).id === id;
    }
  }, {
    key: "handleContextMenu",
    value: function handleContextMenu(mouseXY, e) {
      var _this$state = this.state,
          xAccessor = _this$state.xAccessor,
          chartConfig = _this$state.chartConfig,
          plotData = _this$state.plotData,
          xScale = _this$state.xScale;
      var currentCharts = (0, _ChartDataUtil.getCurrentCharts)(chartConfig, mouseXY);
      var currentItem = (0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, mouseXY, plotData);
      this.triggerEvent("contextmenu", {
        mouseXY: mouseXY,
        currentItem: currentItem,
        currentCharts: currentCharts
      }, e);
    }
  }, {
    key: "calculateStateForDomain",
    value: function calculateStateForDomain(newDomain) {
      var _this$state2 = this.state,
          xAccessor = _this$state2.xAccessor,
          displayXAccessor = _this$state2.displayXAccessor,
          initialXScale = _this$state2.xScale,
          initialChartConfig = _this$state2.chartConfig,
          initialPlotData = _this$state2.plotData;
      var filterData = this.state.filterData;
      var fullData = this.fullData;
      var postCalculator = this.props.postCalculator;

      var _filterData2 = filterData(fullData, newDomain, xAccessor, initialXScale, {
        currentPlotData: initialPlotData,
        currentDomain: initialXScale.domain()
      }),
          beforePlotData = _filterData2.plotData,
          domain = _filterData2.domain;

      var plotData = postCalculator(beforePlotData);
      var updatedScale = initialXScale.copy().domain(domain);
      var chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)(initialChartConfig, {
        plotData: plotData,
        xAccessor: xAccessor,
        displayXAccessor: displayXAccessor,
        fullData: fullData
      }, updatedScale.domain());
      return {
        xScale: updatedScale,
        plotData: plotData,
        chartConfig: chartConfig
      };
    }
  }, {
    key: "pinchZoomHelper",
    value: function pinchZoomHelper(initialPinch, finalPinch) {
      var initialPinchXScale = initialPinch.xScale;
      var _this$state3 = this.state,
          initialXScale = _this$state3.xScale,
          initialChartConfig = _this$state3.chartConfig,
          initialPlotData = _this$state3.plotData,
          xAccessor = _this$state3.xAccessor,
          displayXAccessor = _this$state3.displayXAccessor;
      var filterData = this.state.filterData;
      var fullData = this.fullData;
      var postCalculator = this.props.postCalculator;

      var _pinchCoordinates = pinchCoordinates(initialPinch),
          iTL = _pinchCoordinates.topLeft,
          iBR = _pinchCoordinates.bottomRight;

      var _pinchCoordinates2 = pinchCoordinates(finalPinch),
          fTL = _pinchCoordinates2.topLeft,
          fBR = _pinchCoordinates2.bottomRight;

      var e = initialPinchXScale.range()[1];
      var xDash = Math.round(-(iBR[0] * fTL[0] - iTL[0] * fBR[0]) / (iTL[0] - iBR[0]));
      var yDash = Math.round(e + ((e - iBR[0]) * (e - fTL[0]) - (e - iTL[0]) * (e - fBR[0])) / (e - iTL[0] - (e - iBR[0])));
      var x = Math.round(-xDash * iTL[0] / (-xDash + fTL[0]));
      var y = Math.round(e - (yDash - e) * (e - iTL[0]) / (yDash + (e - fTL[0])));
      var newDomain = [x, y].map(initialPinchXScale.invert); // var domainR = initial.right + right;

      var _filterData3 = filterData(fullData, newDomain, xAccessor, initialPinchXScale, {
        currentPlotData: initialPlotData,
        currentDomain: initialXScale.domain()
      }),
          beforePlotData = _filterData3.plotData,
          domain = _filterData3.domain;

      var plotData = postCalculator(beforePlotData);
      var updatedScale = initialXScale.copy().domain(domain);
      var mouseXY = finalPinch.touch1Pos;
      var chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)(initialChartConfig, {
        plotData: plotData,
        xAccessor: xAccessor,
        displayXAccessor: displayXAccessor,
        fullData: fullData
      }, updatedScale.domain());
      var currentItem = (0, _ChartDataUtil.getCurrentItem)(updatedScale, xAccessor, mouseXY, plotData);
      return {
        chartConfig: chartConfig,
        xScale: updatedScale,
        plotData: plotData,
        mouseXY: mouseXY,
        currentItem: currentItem
      };
    }
  }, {
    key: "cancelDrag",
    value: function cancelDrag() {
      this.eventCaptureNode.cancelDrag();
      this.triggerEvent("dragcancel");
    }
  }, {
    key: "handlePinchZoom",
    value: function handlePinchZoom(initialPinch, finalPinch, e) {
      var _this2 = this;

      if (!this.waitingForPinchZoomAnimationFrame) {
        this.waitingForPinchZoomAnimationFrame = true;
        var state = this.pinchZoomHelper(initialPinch, finalPinch);
        this.triggerEvent("pinchzoom", state, e);
        this.finalPinch = finalPinch;
        requestAnimationFrame(function () {
          _this2.clearBothCanvas();

          _this2.draw({
            trigger: "pinchzoom"
          });

          _this2.waitingForPinchZoomAnimationFrame = false;
        });
      }
    }
  }, {
    key: "handlePinchZoomEnd",
    value: function handlePinchZoomEnd(initialPinch, e) {
      var xAccessor = this.state.xAccessor;

      if (this.finalPinch) {
        var state = this.pinchZoomHelper(initialPinch, this.finalPinch);
        var xScale = state.xScale;
        this.triggerEvent("pinchzoom", state, e);
        this.finalPinch = null;
        this.clearThreeCanvas();
        var fullData = this.fullData;
        var firstItem = (0, _utils.head)(fullData);
        var start = (0, _utils.head)(xScale.domain());
        var end = xAccessor(firstItem);
        var onLoadMore = this.props.onLoadMore;
        this.setState(state, function () {
          if (start < end) {
            onLoadMore(start, end);
          }
        });
      }
    }
  }, {
    key: "handleZoom",
    value: function handleZoom(zoomDirection, mouseXY, e) {
      if (this.panInProgress) return; // console.log("zoomDirection ", zoomDirection, " mouseXY ", mouseXY);

      var _this$state4 = this.state,
          xAccessor = _this$state4.xAccessor,
          initialXScale = _this$state4.xScale,
          initialPlotData = _this$state4.plotData;
      var _this$props = this.props,
          zoomMultiplier = _this$props.zoomMultiplier,
          zoomAnchor = _this$props.zoomAnchor;
      var fullData = this.fullData;
      var item = zoomAnchor({
        xScale: initialXScale,
        xAccessor: xAccessor,
        mouseXY: mouseXY,
        plotData: initialPlotData,
        fullData: fullData
      });
      var cx = initialXScale(item);
      var c = zoomDirection > 0 ? 1 * zoomMultiplier : 1 / zoomMultiplier;
      var newDomain = initialXScale.range().map(function (x) {
        return cx + (x - cx) * c;
      }).map(initialXScale.invert);

      var _this$calculateStateF = this.calculateStateForDomain(newDomain),
          xScale = _this$calculateStateF.xScale,
          plotData = _this$calculateStateF.plotData,
          chartConfig = _this$calculateStateF.chartConfig;

      var currentItem = (0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, mouseXY, plotData);
      var currentCharts = (0, _ChartDataUtil.getCurrentCharts)(chartConfig, mouseXY);
      this.clearThreeCanvas();
      var firstItem = (0, _utils.head)(fullData);
      var start = (0, _utils.head)(xScale.domain());
      var end = xAccessor(firstItem);
      var onLoadMore = this.props.onLoadMore;
      this.mutableState = {
        mouseXY: mouseXY,
        currentItem: currentItem,
        currentCharts: currentCharts
      };
      this.triggerEvent("zoom", {
        xScale: xScale,
        plotData: plotData,
        chartConfig: chartConfig,
        mouseXY: mouseXY,
        currentCharts: currentCharts,
        currentItem: currentItem,
        show: true
      }, e);
      this.setState({
        xScale: xScale,
        plotData: plotData,
        chartConfig: chartConfig
      }, function () {
        if (start < end) {
          onLoadMore(start, end);
        }
      });
    }
  }, {
    key: "xAxisZoom",
    value: function xAxisZoom(newDomain) {
      var _this$calculateStateF2 = this.calculateStateForDomain(newDomain),
          xScale = _this$calculateStateF2.xScale,
          plotData = _this$calculateStateF2.plotData,
          chartConfig = _this$calculateStateF2.chartConfig;

      this.clearThreeCanvas();
      var xAccessor = this.state.xAccessor;
      var fullData = this.fullData;
      var firstItem = (0, _utils.head)(fullData);
      var start = (0, _utils.head)(xScale.domain());
      var end = xAccessor(firstItem);
      var onLoadMore = this.props.onLoadMore;
      this.setState({
        xScale: xScale,
        plotData: plotData,
        chartConfig: chartConfig
      }, function () {
        if (start < end) onLoadMore(start, end);
      });
    }
  }, {
    key: "yAxisZoom",
    value: function yAxisZoom(chartId, newDomain) {
      this.clearThreeCanvas();
      var initialChartConfig = this.state.chartConfig;
      var chartConfig = initialChartConfig.map(function (each) {
        if (each.id === chartId) {
          var yScale = each.yScale;
          return _objectSpread(_objectSpread({}, each), {}, {
            yScale: yScale.copy().domain(newDomain),
            yPanEnabled: true
          });
        } else {
          return each;
        }
      });
      this.setState({
        chartConfig: chartConfig
      });
    }
  }, {
    key: "triggerEvent",
    value: function triggerEvent(type, props, e) {
      var _this3 = this;

      // console.log("triggering ->", type);
      this.subscriptions.forEach(function (each) {
        var state = _objectSpread(_objectSpread({}, _this3.state), {}, {
          fullData: _this3.fullData,
          subscriptions: _this3.subscriptions
        });

        each.listener(type, props, state, e);
      });
    }
  }, {
    key: "draw",
    value: function draw(props) {
      this.subscriptions.forEach(function (each) {
        if ((0, _utils.isDefined)(each.draw)) each.draw(props);
      });
    }
  }, {
    key: "redraw",
    value: function redraw() {
      this.clearThreeCanvas();
      this.draw({
        force: true
      });
    }
  }, {
    key: "panHelper",
    value: function panHelper(mouseXY, initialXScale, _ref2, chartsToPan) {
      var dx = _ref2.dx,
          dy = _ref2.dy;
      var _this$state5 = this.state,
          xAccessor = _this$state5.xAccessor,
          displayXAccessor = _this$state5.displayXAccessor,
          initialChartConfig = _this$state5.chartConfig;
      var filterData = this.state.filterData;
      var fullData = this.fullData;
      var postCalculator = this.props.postCalculator; // console.log(dx, dy);

      if ((0, _utils.isNotDefined)(initialXScale.invert)) throw new Error("xScale provided does not have an invert() method." + "You are likely using an ordinal scale. This scale does not support zoom, pan");
      var newDomain = initialXScale.range().map(function (x) {
        return x - dx;
      }).map(initialXScale.invert);

      var _filterData4 = filterData(fullData, newDomain, xAccessor, initialXScale, {
        currentPlotData: this.hackyWayToStopPanBeyondBounds__plotData,
        currentDomain: this.hackyWayToStopPanBeyondBounds__domain
      }),
          beforePlotData = _filterData4.plotData,
          domain = _filterData4.domain;

      var updatedScale = initialXScale.copy().domain(domain);
      var plotData = postCalculator(beforePlotData); // console.log(last(plotData));

      var currentItem = (0, _ChartDataUtil.getCurrentItem)(updatedScale, xAccessor, mouseXY, plotData);
      var chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)(initialChartConfig, {
        plotData: plotData,
        xAccessor: xAccessor,
        displayXAccessor: displayXAccessor,
        fullData: fullData
      }, updatedScale.domain(), dy, chartsToPan);
      var currentCharts = (0, _ChartDataUtil.getCurrentCharts)(chartConfig, mouseXY); // console.log(initialXScale.domain(), newDomain, updatedScale.domain());

      return {
        xScale: updatedScale,
        plotData: plotData,
        chartConfig: chartConfig,
        mouseXY: mouseXY,
        currentCharts: currentCharts,
        currentItem: currentItem
      };
    }
  }, {
    key: "handlePan",
    value: function handlePan(mousePosition, panStartXScale, dxdy, chartsToPan, e) {
      var _this4 = this;

      if (!this.waitingForPanAnimationFrame) {
        this.waitingForPanAnimationFrame = true;
        this.hackyWayToStopPanBeyondBounds__plotData = this.hackyWayToStopPanBeyondBounds__plotData || this.state.plotData;
        this.hackyWayToStopPanBeyondBounds__domain = this.hackyWayToStopPanBeyondBounds__domain || this.state.xScale.domain();
        var state = this.panHelper(mousePosition, panStartXScale, dxdy, chartsToPan);
        this.hackyWayToStopPanBeyondBounds__plotData = state.plotData;
        this.hackyWayToStopPanBeyondBounds__domain = state.xScale.domain();
        this.panInProgress = true; // console.log(panStartXScale.domain(), state.xScale.domain());

        this.triggerEvent("pan", state, e);
        this.mutableState = {
          mouseXY: state.mouseXY,
          currentItem: state.currentItem,
          currentCharts: state.currentCharts
        };
        requestAnimationFrame(function () {
          _this4.waitingForPanAnimationFrame = false;

          _this4.clearBothCanvas();

          _this4.draw({
            trigger: "pan"
          });
        });
      }
    }
  }, {
    key: "handlePanEnd",
    value: function handlePanEnd(mousePosition, panStartXScale, dxdy, chartsToPan, e) {
      var _this5 = this;

      var state = this.panHelper(mousePosition, panStartXScale, dxdy, chartsToPan); // console.log(this.canvasDrawCallbackList.map(d => d.type));

      this.hackyWayToStopPanBeyondBounds__plotData = null;
      this.hackyWayToStopPanBeyondBounds__domain = null;
      this.panInProgress = false; // console.log("PANEND", panEnd++);

      var xScale = state.xScale,
          plotData = state.plotData,
          chartConfig = state.chartConfig;
      this.triggerEvent("panend", state, e);
      requestAnimationFrame(function () {
        var xAccessor = _this5.state.xAccessor;
        var fullData = _this5.fullData;
        var firstItem = (0, _utils.head)(fullData);
        var start = (0, _utils.head)(xScale.domain());
        var end = xAccessor(firstItem); // console.log(start, end, start < end ? "Load more" : "I have it");

        var onLoadMore = _this5.props.onLoadMore;

        _this5.clearThreeCanvas();

        _this5.setState({
          xScale: xScale,
          plotData: plotData,
          chartConfig: chartConfig
        }, function () {
          if (start < end) onLoadMore(start, end);
        });
      });
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(mousePosition, currentCharts, e) {
      this.triggerEvent("mousedown", this.mutableState, e);
    }
  }, {
    key: "handleMouseEnter",
    value: function handleMouseEnter(e) {
      this.triggerEvent("mouseenter", {
        show: true
      }, e);
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(mouseXY, inputType, e) {
      var _this6 = this;

      if (!this.waitingForMouseMoveAnimationFrame) {
        this.waitingForMouseMoveAnimationFrame = true;
        var _this$state6 = this.state,
            chartConfig = _this$state6.chartConfig,
            plotData = _this$state6.plotData,
            xScale = _this$state6.xScale,
            xAccessor = _this$state6.xAccessor;
        var currentCharts = (0, _ChartDataUtil.getCurrentCharts)(chartConfig, mouseXY);
        var currentItem = (0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, mouseXY, plotData);
        this.triggerEvent("mousemove", {
          show: true,
          mouseXY: mouseXY,
          // prevMouseXY is used in interactive components
          prevMouseXY: this.prevMouseXY,
          currentItem: currentItem,
          currentCharts: currentCharts
        }, e);
        this.prevMouseXY = mouseXY;
        this.mutableState = {
          mouseXY: mouseXY,
          currentItem: currentItem,
          currentCharts: currentCharts
        };
        requestAnimationFrame(function () {
          _this6.clearMouseCanvas();

          _this6.draw({
            trigger: "mousemove"
          });

          _this6.waitingForMouseMoveAnimationFrame = false;
        });
      }
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave(e) {
      this.triggerEvent("mouseleave", {
        show: false
      }, e);
      this.clearMouseCanvas();
      this.draw({
        trigger: "mouseleave"
      });
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart(_ref3, e) {
      var startPos = _ref3.startPos;
      this.triggerEvent("dragstart", {
        startPos: startPos
      }, e);
    }
  }, {
    key: "handleDrag",
    value: function handleDrag(_ref4, e) {
      var _this7 = this;

      var startPos = _ref4.startPos,
          mouseXY = _ref4.mouseXY;
      var _this$state7 = this.state,
          chartConfig = _this$state7.chartConfig,
          plotData = _this$state7.plotData,
          xScale = _this$state7.xScale,
          xAccessor = _this$state7.xAccessor;
      var currentCharts = (0, _ChartDataUtil.getCurrentCharts)(chartConfig, mouseXY);
      var currentItem = (0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, mouseXY, plotData);
      this.triggerEvent("drag", {
        startPos: startPos,
        mouseXY: mouseXY,
        currentItem: currentItem,
        currentCharts: currentCharts
      }, e);
      this.mutableState = {
        mouseXY: mouseXY,
        currentItem: currentItem,
        currentCharts: currentCharts
      };
      requestAnimationFrame(function () {
        _this7.clearMouseCanvas();

        _this7.draw({
          trigger: "drag"
        });
      });
    }
  }, {
    key: "handleDragEnd",
    value: function handleDragEnd(_ref5, e) {
      var _this8 = this;

      var mouseXY = _ref5.mouseXY;
      this.triggerEvent("dragend", {
        mouseXY: mouseXY
      }, e);
      requestAnimationFrame(function () {
        _this8.clearMouseCanvas();

        _this8.draw({
          trigger: "dragend"
        });
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(mousePosition, e) {
      var _this9 = this;

      this.triggerEvent("click", this.mutableState, e);
      requestAnimationFrame(function () {
        _this9.clearMouseCanvas();

        _this9.draw({
          trigger: "click"
        });
      });
    }
  }, {
    key: "handleDoubleClick",
    value: function handleDoubleClick(mousePosition, e) {
      this.triggerEvent("dblclick", {}, e);
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      var dimensions = getDimensions(this.props);
      return {
        fullData: this.fullData,
        plotData: this.state.plotData,
        width: dimensions.width,
        height: dimensions.height,
        chartConfig: this.state.chartConfig,
        xScale: this.state.xScale,
        xAccessor: this.state.xAccessor,
        displayXAccessor: this.state.displayXAccessor,
        chartCanvasType: this.props.type,
        margin: this.props.margin,
        ratio: this.props.ratio,
        xAxisZoom: this.xAxisZoom,
        yAxisZoom: this.yAxisZoom,
        getCanvasContexts: this.getCanvasContexts,
        redraw: this.redraw,
        subscribe: this.subscribe,
        unsubscribe: this.unsubscribe,
        generateSubscriptionId: this.generateSubscriptionId,
        getMutableState: this.getMutableState,
        amIOnTop: this.amIOnTop,
        setCursorClass: this.setCursorClass
      };
    }
  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _resetChart = resetChart(this.props, true),
          fullData = _resetChart.fullData,
          state = _objectWithoutProperties(_resetChart, _excluded);

      this.setState(state);
      this.fullData = fullData;
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var reset = shouldResetChart(this.props, nextProps);
      var interaction = isInteractionEnabled(this.state.xScale, this.state.xAccessor, this.state.plotData);
      var initialChartConfig = this.state.chartConfig;
      var newState;

      if (!interaction || reset || !(0, _utils.shallowEqual)(this.props.xExtents, nextProps.xExtents)) {
        if (process.env.NODE_ENV !== "production") {
          if (!interaction) log("RESET CHART, changes to a non interactive chart");else if (reset) log("RESET CHART, one or more of these props changed", CANDIDATES_FOR_RESET);else log("xExtents changed");
        } // do reset


        newState = resetChart(nextProps);
        this.mutableState = {};
      } else {
        var _this$state$xScale$do = this.state.xScale.domain(),
            _this$state$xScale$do2 = _slicedToArray(_this$state$xScale$do, 2),
            start = _this$state$xScale$do2[0],
            end = _this$state$xScale$do2[1];

        var prevLastItem = (0, _utils.last)(this.fullData);
        var calculatedState = calculateFullData(nextProps);
        var xAccessor = calculatedState.xAccessor;
        var lastItemWasVisible = xAccessor(prevLastItem) <= end && xAccessor(prevLastItem) >= start;

        if (process.env.NODE_ENV !== "production") {
          if (this.props.data !== nextProps.data) log("data is changed but seriesName did not, change the seriesName if you wish to reset the chart and lastItemWasVisible = ", lastItemWasVisible);else log("Trivial change, may be width/height or type changed, but that does not matter");
        }

        newState = updateChart(calculatedState, this.state.xScale, nextProps, lastItemWasVisible, initialChartConfig);
      }

      var _newState = newState,
          fullData = _newState.fullData,
          state = _objectWithoutProperties(_newState, _excluded2);

      if (this.panInProgress) {
        if (process.env.NODE_ENV !== "production") {
          log("Pan is in progress");
        }
      } else {
        /*
        if (!reset) {
        	state.chartConfig
        		.forEach((each) => {
        			// const sourceChartConfig = initialChartConfig.filter(d => d.id === each.id);
        			const prevChartConfig = find(initialChartConfig, d => d.id === each.id);
        			if (isDefined(prevChartConfig) && prevChartConfig.yPanEnabled) {
        				each.yScale.domain(prevChartConfig.yScale.domain());
        				each.yPanEnabled = prevChartConfig.yPanEnabled;
        			}
        		});
        }
        */
        this.clearThreeCanvas();
        this.setState(state);
      }

      this.fullData = fullData;
    }
    /*
    componentDidUpdate(prevProps, prevState) {
    	console.error(this.state.chartConfig, this.state.chartConfig.map(d => d.yScale.domain()));
    }
    */

  }, {
    key: "resetYDomain",
    value: function resetYDomain(chartId) {
      var chartConfig = this.state.chartConfig;
      var changed = false;
      var newChartConfig = chartConfig.map(function (each) {
        if (((0, _utils.isNotDefined)(chartId) || each.id === chartId) && !(0, _utils.shallowEqual)(each.yScale.domain(), each.realYDomain)) {
          changed = true;
          return _objectSpread(_objectSpread({}, each), {}, {
            yScale: each.yScale.domain(each.realYDomain),
            yPanEnabled: false
          });
        }

        return each;
      });

      if (changed) {
        this.clearThreeCanvas();
        this.setState({
          chartConfig: newChartConfig
        });
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      // console.log("Happneing.....", !this.panInProgress)
      return !this.panInProgress;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          type = _this$props2.type,
          height = _this$props2.height,
          width = _this$props2.width,
          margin = _this$props2.margin,
          className = _this$props2.className,
          zIndex = _this$props2.zIndex,
          defaultFocus = _this$props2.defaultFocus,
          ratio = _this$props2.ratio,
          mouseMoveEvent = _this$props2.mouseMoveEvent,
          panEvent = _this$props2.panEvent,
          zoomEvent = _this$props2.zoomEvent;
      var _this$props3 = this.props,
          useCrossHairStyleCursor = _this$props3.useCrossHairStyleCursor,
          onSelect = _this$props3.onSelect;
      var _this$state8 = this.state,
          plotData = _this$state8.plotData,
          xScale = _this$state8.xScale,
          xAccessor = _this$state8.xAccessor,
          chartConfig = _this$state8.chartConfig;
      var dimensions = getDimensions(this.props);
      var interaction = isInteractionEnabled(xScale, xAccessor, plotData);
      var cursorStyle = useCrossHairStyleCursor && interaction;
      var cursor = getCursorStyle();
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          position: "relative",
          width: width,
          height: height
        },
        className: className,
        onClick: onSelect
      }, /*#__PURE__*/_react["default"].createElement(_CanvasContainer["default"], {
        ref: this.saveCanvasContainerNode,
        type: type,
        ratio: ratio,
        width: width,
        height: height,
        zIndex: zIndex
      }), /*#__PURE__*/_react["default"].createElement("svg", {
        className: className,
        width: width,
        height: height,
        style: {
          position: "absolute",
          zIndex: zIndex + 5
        }
      }, cursor, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("clipPath", {
        id: "chart-area-clip"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        x: "0",
        y: "0",
        width: dimensions.width,
        height: dimensions.height
      })), chartConfig.map(function (each, idx) {
        return /*#__PURE__*/_react["default"].createElement("clipPath", {
          key: idx,
          id: "chart-area-clip-".concat(each.id)
        }, /*#__PURE__*/_react["default"].createElement("rect", {
          x: "0",
          y: "0",
          width: each.width,
          height: each.height
        }));
      })), /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(".concat(margin.left + 0.5, ", ").concat(margin.top + 0.5, ")")
      }, /*#__PURE__*/_react["default"].createElement(_EventCapture["default"], {
        ref: this.saveEventCaptureNode,
        useCrossHairStyleCursor: cursorStyle,
        mouseMove: mouseMoveEvent && interaction,
        zoom: zoomEvent && interaction,
        pan: panEvent && interaction,
        width: dimensions.width,
        height: dimensions.height,
        chartConfig: chartConfig,
        xScale: xScale,
        xAccessor: xAccessor,
        focus: defaultFocus,
        disableInteraction: this.props.disableInteraction,
        getAllPanConditions: this.getAllPanConditions,
        onContextMenu: this.handleContextMenu,
        onClick: this.handleClick,
        onDoubleClick: this.handleDoubleClick,
        onMouseDown: this.handleMouseDown,
        onMouseMove: this.handleMouseMove,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onDragStart: this.handleDragStart,
        onDrag: this.handleDrag,
        onDragComplete: this.handleDragEnd,
        onZoom: this.handleZoom,
        onPinchZoom: this.handlePinchZoom,
        onPinchZoomEnd: this.handlePinchZoomEnd,
        onPan: this.handlePan,
        onPanEnd: this.handlePanEnd
      }), /*#__PURE__*/_react["default"].createElement("g", {
        className: "react-stockcharts-avoid-interaction"
      }, this.props.children))));
    }
  }]);

  return ChartCanvas;
}(_react.Component);

function isInteractionEnabled(xScale, xAccessor, data) {
  var interaction = !isNaN(xScale(xAccessor((0, _utils.head)(data)))) && (0, _utils.isDefined)(xScale.invert);
  return interaction;
}

ChartCanvas.propTypes = {
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  margin: _propTypes["default"].object,
  ratio: _propTypes["default"].number.isRequired,
  // interval: PropTypes.oneOf(["D", "W", "M"]), // ,"m1", "m5", "m15", "W", "M"
  type: _propTypes["default"].oneOf(["svg", "hybrid"]),
  pointsPerPxThreshold: _propTypes["default"].number,
  minPointsPerPxThreshold: _propTypes["default"].number,
  data: _propTypes["default"].array.isRequired,
  // initialDisplay: PropTypes.number,
  xAccessor: _propTypes["default"].func,
  xExtents: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].func]),
  zoomAnchor: _propTypes["default"].func,
  className: _propTypes["default"].string,
  seriesName: _propTypes["default"].string.isRequired,
  zIndex: _propTypes["default"].number,
  children: _propTypes["default"].node.isRequired,
  xScale: _propTypes["default"].func.isRequired,
  postCalculator: _propTypes["default"].func,
  flipXScale: _propTypes["default"].bool,
  useCrossHairStyleCursor: _propTypes["default"].bool,
  padding: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].shape({
    left: _propTypes["default"].number,
    right: _propTypes["default"].number
  })]),
  defaultFocus: _propTypes["default"].bool,
  zoomMultiplier: _propTypes["default"].number,
  onLoadMore: _propTypes["default"].func,
  displayXAccessor: function displayXAccessor(props, propName
  /* , componentName */
  ) {
    if ((0, _utils.isNotDefined)(props[propName])) {
      console.warn("`displayXAccessor` is not defined," + " will use the value from `xAccessor` as `displayXAccessor`." + " This might be ok if you do not use a discontinuous scale" + " but if you do, provide a `displayXAccessor` prop to `ChartCanvas`");
    } else if (typeof props[propName] !== "function") {
      return new Error("displayXAccessor has to be a function");
    }
  },
  mouseMoveEvent: _propTypes["default"].bool,
  panEvent: _propTypes["default"].bool,
  clamp: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool, _propTypes["default"].func]),
  zoomEvent: _propTypes["default"].bool,
  onSelect: _propTypes["default"].func,
  maintainPointsPerPixelOnResize: _propTypes["default"].bool,
  disableInteraction: _propTypes["default"].bool
};
ChartCanvas.defaultProps = {
  margin: {
    top: 20,
    right: 30,
    bottom: 30,
    left: 80
  },
  type: "hybrid",
  pointsPerPxThreshold: 2,
  minPointsPerPxThreshold: 1 / 100,
  className: "react-stockchart",
  zIndex: 1,
  xExtents: [_d3Array.min, _d3Array.max],
  postCalculator: _utils.identity,
  padding: 0,
  xAccessor: _utils.identity,
  flipXScale: false,
  useCrossHairStyleCursor: true,
  defaultFocus: true,
  onLoadMore: _utils.noop,
  onSelect: _utils.noop,
  mouseMoveEvent: true,
  panEvent: true,
  zoomEvent: true,
  zoomMultiplier: 1.1,
  clamp: false,
  zoomAnchor: _zoomBehavior.mouseBasedZoomAnchor,
  maintainPointsPerPixelOnResize: true,
  // ratio: 2,
  disableInteraction: false
};
ChartCanvas.childContextTypes = {
  plotData: _propTypes["default"].array,
  fullData: _propTypes["default"].array,
  chartConfig: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
    origin: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    padding: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].shape({
      top: _propTypes["default"].number,
      bottom: _propTypes["default"].number
    })]),
    yExtents: _propTypes["default"].arrayOf(_propTypes["default"].func),
    yExtentsProvider: _propTypes["default"].func,
    yScale: _propTypes["default"].func.isRequired,
    mouseCoordinates: _propTypes["default"].shape({
      at: _propTypes["default"].string,
      format: _propTypes["default"].func
    }),
    width: _propTypes["default"].number.isRequired,
    height: _propTypes["default"].number.isRequired
  })).isRequired,
  xScale: _propTypes["default"].func.isRequired,
  xAccessor: _propTypes["default"].func.isRequired,
  displayXAccessor: _propTypes["default"].func.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  chartCanvasType: _propTypes["default"].oneOf(["svg", "hybrid"]).isRequired,
  margin: _propTypes["default"].object.isRequired,
  ratio: _propTypes["default"].number.isRequired,
  getCanvasContexts: _propTypes["default"].func,
  xAxisZoom: _propTypes["default"].func,
  yAxisZoom: _propTypes["default"].func,
  amIOnTop: _propTypes["default"].func,
  redraw: _propTypes["default"].func,
  subscribe: _propTypes["default"].func,
  unsubscribe: _propTypes["default"].func,
  setCursorClass: _propTypes["default"].func,
  generateSubscriptionId: _propTypes["default"].func,
  getMutableState: _propTypes["default"].func
};

ChartCanvas.ohlcv = function (d) {
  return {
    date: d.date,
    open: d.open,
    high: d.high,
    low: d.low,
    close: d.close,
    volume: d.volume
  };
};

var _default = ChartCanvas;
exports["default"] = _default;
//# sourceMappingURL=ChartCanvas.js.map