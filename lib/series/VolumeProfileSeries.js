"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Array = require("d3-array");

var _d3Collection = require("d3-collection");

var _d3Scale = require("d3-scale");

var _GenericChartComponent = _interopRequireDefault(require("../GenericChartComponent"));

var _GenericComponent = require("../GenericComponent");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var VolumeProfileSeries = /*#__PURE__*/function (_Component) {
  _inherits(VolumeProfileSeries, _Component);

  var _super = _createSuper(VolumeProfileSeries);

  function VolumeProfileSeries(props) {
    var _this;

    _classCallCheck(this, VolumeProfileSeries);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(VolumeProfileSeries, [{
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var xAccessor = moreProps.xAccessor,
          width = moreProps.width;

      var _helper = helper(this.props, moreProps, xAccessor, width),
          rects = _helper.rects,
          sessionBg = _helper.sessionBg;

      _drawOnCanvas(ctx, this.props, rects, sessionBg);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        svgDraw: this.renderSVG,
        canvasDraw: this.drawOnCanvas,
        canvasToDraw: _GenericComponent.getAxisCanvas,
        drawOn: ["pan"]
      });
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var _this$props = this.props,
          className = _this$props.className,
          opacity = _this$props.opacity;
      var _this$props2 = this.props,
          showSessionBackground = _this$props2.showSessionBackground,
          sessionBackGround = _this$props2.sessionBackGround,
          sessionBackGroundOpacity = _this$props2.sessionBackGroundOpacity;
      var xAccessor = moreProps.xAccessor,
          width = moreProps.width;

      var _helper2 = helper(this.props, moreProps, xAccessor, width),
          rects = _helper2.rects,
          sessionBg = _helper2.sessionBg;

      var sessionBgSvg = showSessionBackground ? sessionBg.map(function (d, idx) {
        return /*#__PURE__*/_react["default"].createElement("rect", _extends({
          key: idx
        }, d, {
          opacity: sessionBackGroundOpacity,
          fill: sessionBackGround
        }));
      }) : null;
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: className
      }, sessionBgSvg, rects.map(function (d, i) {
        return /*#__PURE__*/_react["default"].createElement("g", {
          key: i
        }, /*#__PURE__*/_react["default"].createElement("rect", {
          x: d.x,
          y: d.y,
          width: d.w1,
          height: d.height,
          fill: d.fill1,
          stroke: d.stroke1,
          fillOpacity: opacity
        }), /*#__PURE__*/_react["default"].createElement("rect", {
          x: d.x + d.w1,
          y: d.y,
          width: d.w2,
          height: d.height,
          fill: d.fill2,
          stroke: d.stroke2,
          fillOpacity: opacity
        }));
      }));
    }
  }]);

  return VolumeProfileSeries;
}(_react.Component);

VolumeProfileSeries.propTypes = {
  className: _propTypes["default"].string,
  opacity: _propTypes["default"].number,
  showSessionBackground: _propTypes["default"].bool,
  sessionBackGround: _propTypes["default"].string,
  sessionBackGroundOpacity: _propTypes["default"].number
};
VolumeProfileSeries.defaultProps = {
  className: "line ",
  bins: 20,
  opacity: 0.5,
  maxProfileWidthPercent: 50,
  fill: function fill(_ref) {
    var type = _ref.type;
    return type === "up" ? "#6BA583" : "#FF0000";
  },
  stroke: "#FFFFFF",
  showSessionBackground: false,
  sessionBackGround: "#4682B4",
  sessionBackGroundOpacity: 0.3,
  source: function source(d) {
    return d.close;
  },
  volume: function volume(d) {
    return d.volume;
  },
  absoluteChange: function absoluteChange(d) {
    return d.absoluteChange;
  },
  bySession: false,

  /* eslint-disable no-unused-vars */
  sessionStart: function sessionStart(_ref2) {
    var d = _ref2.d,
        i = _ref2.i,
        plotData = _ref2.plotData;
    return i > 0 && plotData[i - 1].date.getMonth() !== d.date.getMonth();
  },

  /* eslint-enable no-unused-vars */
  orient: "left",
  // // fill: ({ type }) => { var c = type === "up" ? "#6BA583" : "#FF0000"; console.log(type, c); return c },
  // stroke: ({ type }) =>  type === "up" ? "#6BA583" : "#FF0000",
  // stroke: "none",
  partialStartOK: true,
  partialEndOK: true
};

function helper(props, moreProps, xAccessor, width) {
  var realXScale = moreProps.xScale,
      yScale = moreProps.chartConfig.yScale,
      plotData = moreProps.plotData;
  var sessionStart = props.sessionStart,
      bySession = props.bySession,
      partialStartOK = props.partialStartOK,
      partialEndOK = props.partialEndOK;
  var bins = props.bins,
      maxProfileWidthPercent = props.maxProfileWidthPercent,
      source = props.source,
      volume = props.volume,
      absoluteChange = props.absoluteChange,
      orient = props.orient,
      fill = props.fill,
      stroke = props.stroke;
  var sessionBuilder = (0, _utils.accumulatingWindow)().discardTillStart(!partialStartOK).discardTillEnd(!partialEndOK).accumulateTill(function (d, i) {
    return sessionStart(_objectSpread({
      d: d,
      i: i
    }, moreProps));
  }).accumulator(_utils.identity);
  var dx = plotData.length > 1 ? realXScale(xAccessor(plotData[1])) - realXScale(xAccessor((0, _utils.head)(plotData))) : 0;
  var sessions = bySession ? sessionBuilder(plotData) : [plotData];
  var allRects = sessions.map(function (session) {
    var begin = bySession ? realXScale(xAccessor((0, _utils.head)(session))) : 0;
    var finish = bySession ? realXScale(xAccessor((0, _utils.last)(session))) : width;
    var sessionWidth = finish - begin + dx; // console.log(session)

    /* var histogram = d3.layout.histogram()
    		.value(source)
    		.bins(bins);*/

    var histogram2 = (0, _d3Array.histogram)() // .domain(xScale.domain())
    .value(source).thresholds(bins); // console.log(bins, histogram(session))
    // console.log(bins, histogram2(session))

    var rollup = (0, _d3Collection.nest)().key(function (d) {
      return d.direction;
    }).sortKeys(orient === "right" ? _d3Array.descending : _d3Array.ascending).rollup(function (leaves) {
      return (0, _d3Array.sum)(leaves, function (d) {
        return d.volume;
      });
    });
    var values = histogram2(session); // console.log("values", values)

    var volumeInBins = values.map(function (arr) {
      return arr.map(function (d) {
        return absoluteChange(d) > 0 ? {
          direction: "up",
          volume: volume(d)
        } : {
          direction: "down",
          volume: volume(d)
        };
      });
    }).map(function (arr) {
      return rollup.entries(arr);
    }); // console.log("volumeInBins", volumeInBins)

    var volumeValues = volumeInBins.map(function (each) {
      return (0, _d3Array.sum)(each.map(function (d) {
        return d.value;
      }));
    }); // console.log("volumeValues", volumeValues)

    var base = function base(xScale) {
      return (0, _utils.head)(xScale.range());
    };

    var _ref3 = orient === "right" ? [begin, begin + sessionWidth * maxProfileWidthPercent / 100] : [finish, finish - sessionWidth * (100 - maxProfileWidthPercent) / 100],
        _ref4 = _slicedToArray(_ref3, 2),
        start = _ref4[0],
        end = _ref4[1];

    var xScale = (0, _d3Scale.scaleLinear)().domain([0, (0, _d3Array.max)(volumeValues)]).range([start, end]); // console.log(xScale.domain())

    var totalVolumes = volumeInBins.map(function (volumes) {
      var totalVolume = (0, _d3Array.sum)(volumes, function (d) {
        return d.value;
      });
      var totalVolumeX = xScale(totalVolume);
      var width = base(xScale) - totalVolumeX;
      var x = width < 0 ? totalVolumeX + width : totalVolumeX;
      var ws = volumes.map(function (d) {
        return {
          type: d.key,
          width: d.value * Math.abs(width) / totalVolume
        };
      });
      return {
        x: x,
        ws: ws,
        totalVolumeX: totalVolumeX
      };
    }); // console.log("totalVolumes", totalVolumes)

    var rects = (0, _d3Array.zip)(values, totalVolumes).map(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
          d = _ref6[0],
          _ref6$ = _ref6[1],
          x = _ref6$.x,
          ws = _ref6$.ws;

      var w1 = ws[0] || {
        type: "up",
        width: 0
      };
      var w2 = ws[1] || {
        type: "down",
        width: 0
      };
      return {
        // y: yScale(d.x + d.dx),
        y: yScale(d.x1),
        // height: yScale(d.x - d.dx) - yScale(d.x),
        height: yScale(d.x1) - yScale(d.x0),
        x: x,
        width: width,
        w1: w1.width,
        w2: w2.width,
        stroke1: (0, _utils.functor)(stroke)(w1),
        stroke2: (0, _utils.functor)(stroke)(w2),
        fill1: (0, _utils.functor)(fill)(w1),
        fill2: (0, _utils.functor)(fill)(w2)
      };
    }); // console.log("rects", rects)

    var sessionBg = {
      x: begin,
      y: (0, _utils.last)(rects).y,
      height: (0, _utils.head)(rects).y - (0, _utils.last)(rects).y + (0, _utils.head)(rects).height,
      width: sessionWidth
    };
    return {
      rects: rects,
      sessionBg: sessionBg
    };
  });
  return {
    rects: (0, _d3Array.merge)(allRects.map(function (d) {
      return d.rects;
    })),
    sessionBg: allRects.map(function (d) {
      return d.sessionBg;
    })
  };
}

function _drawOnCanvas(ctx, props, rects, sessionBg) {
  var opacity = props.opacity,
      sessionBackGround = props.sessionBackGround,
      sessionBackGroundOpacity = props.sessionBackGroundOpacity,
      showSessionBackground = props.showSessionBackground; // var { rects, sessionBg } = helper(props, xScale, yScale, plotData);

  if (showSessionBackground) {
    ctx.fillStyle = (0, _utils.hexToRGBA)(sessionBackGround, sessionBackGroundOpacity);
    sessionBg.forEach(function (each) {
      var x = each.x,
          y = each.y,
          height = each.height,
          width = each.width;
      ctx.beginPath();
      ctx.rect(x, y, width, height);
      ctx.closePath();
      ctx.fill();
    });
  }

  rects.forEach(function (each) {
    var x = each.x,
        y = each.y,
        height = each.height,
        w1 = each.w1,
        w2 = each.w2,
        stroke1 = each.stroke1,
        stroke2 = each.stroke2,
        fill1 = each.fill1,
        fill2 = each.fill2;

    if (w1 > 0) {
      ctx.fillStyle = (0, _utils.hexToRGBA)(fill1, opacity);
      if (stroke1 !== "none") ctx.strokeStyle = stroke1;
      ctx.beginPath();
      ctx.rect(x, y, w1, height);
      ctx.closePath();
      ctx.fill();
      if (stroke1 !== "none") ctx.stroke();
    }

    if (w2 > 0) {
      ctx.fillStyle = (0, _utils.hexToRGBA)(fill2, opacity);
      if (stroke2 !== "none") ctx.strokeStyle = stroke2;
      ctx.beginPath();
      ctx.rect(x + w1, y, w2, height);
      ctx.closePath();
      ctx.fill();
      if (stroke2 !== "none") ctx.stroke();
    }
  });
}

var _default = VolumeProfileSeries;
exports["default"] = _default;
//# sourceMappingURL=VolumeProfileSeries.js.map