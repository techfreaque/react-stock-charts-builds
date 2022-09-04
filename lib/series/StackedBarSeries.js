"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.drawOnCanvas2 = drawOnCanvas2;
exports.drawOnCanvasHelper = drawOnCanvasHelper;
exports.getBars = getBars;
exports.getBarsSVG2 = getBarsSVG2;
exports.identityStack = identityStack;
exports.rotateXY = void 0;
exports.svgHelper = svgHelper;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Collection = require("d3-collection");

var _d3Array = require("d3-array");

var _d3Shape = require("d3-shape");

var _GenericChartComponent = _interopRequireDefault(require("../GenericChartComponent"));

var _GenericComponent = require("../GenericComponent");

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

var StackedBarSeries = /*#__PURE__*/function (_Component) {
  _inherits(StackedBarSeries, _Component);

  var _super = _createSuper(StackedBarSeries);

  function StackedBarSeries(props) {
    var _this;

    _classCallCheck(this, StackedBarSeries);

    _this = _super.call(this, props);
    _this.renderSVG = _this.renderSVG.bind(_assertThisInitialized(_this));
    _this.drawOnCanvas = _this.drawOnCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(StackedBarSeries, [{
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx, moreProps) {
      var xAccessor = moreProps.xAccessor; // var { xScale, chartConfig: { yScale }, plotData } = moreProps;

      drawOnCanvasHelper(ctx, this.props, moreProps, xAccessor, _d3Shape.stack);
    }
  }, {
    key: "renderSVG",
    value: function renderSVG(moreProps) {
      var xAccessor = moreProps.xAccessor;
      return /*#__PURE__*/_react["default"].createElement("g", null, svgHelper(this.props, moreProps, xAccessor, _d3Shape.stack));
    }
  }, {
    key: "render",
    value: function render() {
      var clip = this.props.clip;
      return /*#__PURE__*/_react["default"].createElement(_GenericChartComponent["default"], {
        clip: clip,
        svgDraw: this.renderSVG,
        canvasDraw: this.drawOnCanvas,
        canvasToDraw: _GenericComponent.getAxisCanvas,
        drawOn: ["pan"]
      });
    }
  }]);

  return StackedBarSeries;
}(_react.Component);

StackedBarSeries.propTypes = {
  baseAt: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].func]).isRequired,
  direction: _propTypes["default"].oneOf(["up", "down"]).isRequired,
  stroke: _propTypes["default"].bool.isRequired,
  width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].func]).isRequired,
  opacity: _propTypes["default"].number.isRequired,
  fill: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]).isRequired,
  className: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]).isRequired,
  clip: _propTypes["default"].bool.isRequired
};
StackedBarSeries.defaultProps = {
  baseAt: function baseAt(xScale, yScale
  /* , d*/
  ) {
    return (0, _utils.head)(yScale.range());
  },
  direction: "up",
  className: "bar",
  stroke: true,
  fill: "#4682B4",
  opacity: 0.5,
  width: _utils.plotDataLengthBarWidth,
  widthRatio: 0.8,
  clip: true,
  swapScales: false
};

function identityStack() {
  var keys = [];

  function stack(data) {
    var response = keys.map(function (key, i) {
      // eslint-disable-next-line prefer-const
      var arrays = data.map(function (d) {
        // eslint-disable-next-line prefer-const
        var array = [0, d[key]];
        array.data = d;
        return array;
      });
      arrays.key = key;
      arrays.index = i;
      return arrays;
    });
    return response;
  }

  stack.keys = function (x) {
    if (!arguments.length) {
      return keys;
    }

    keys = x;
    return stack;
  };

  return stack;
}

function drawOnCanvasHelper(ctx, props, moreProps, xAccessor, stackFn) {
  var defaultPostAction = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _utils.identity;
  var postRotateAction = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : rotateXY;
  var xScale = moreProps.xScale,
      yScale = moreProps.chartConfig.yScale,
      plotData = moreProps.plotData;
  var bars = doStuff(props, xAccessor, plotData, xScale, yScale, stackFn, postRotateAction, defaultPostAction);
  drawOnCanvas2(props, ctx, bars);
}

function convertToArray(item) {
  return Array.isArray(item) ? item : [item];
}

function svgHelper(props, moreProps, xAccessor, stackFn) {
  var defaultPostAction = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _utils.identity;
  var postRotateAction = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : rotateXY;
  var xScale = moreProps.xScale,
      yScale = moreProps.chartConfig.yScale,
      plotData = moreProps.plotData;
  var bars = doStuff(props, xAccessor, plotData, xScale, yScale, stackFn, postRotateAction, defaultPostAction);
  return getBarsSVG2(props, bars);
}

function doStuff(props, xAccessor, plotData, xScale, yScale, stackFn, postRotateAction, defaultPostAction) {
  var yAccessor = props.yAccessor,
      swapScales = props.swapScales;
  var modifiedYAccessor = swapScales ? convertToArray(props.xAccessor) : convertToArray(yAccessor);
  var modifiedXAccessor = swapScales ? yAccessor : xAccessor;
  var modifiedXScale = swapScales ? yScale : xScale;
  var modifiedYScale = swapScales ? xScale : yScale;
  var postProcessor = swapScales ? postRotateAction : defaultPostAction;
  var bars = getBars(props, modifiedXAccessor, modifiedYAccessor, modifiedXScale, modifiedYScale, plotData, stackFn, postProcessor);
  return bars;
}

var rotateXY = function rotateXY(array) {
  return array.map(function (each) {
    return _objectSpread(_objectSpread({}, each), {}, {
      x: each.y,
      y: each.x,
      height: each.width,
      width: each.height
    });
  });
};

exports.rotateXY = rotateXY;

function getBarsSVG2(props, bars) {
  /* eslint-disable react/prop-types */
  var opacity = props.opacity;
  /* eslint-enable react/prop-types */

  return bars.map(function (d, idx) {
    if (d.width <= 1) {
      return /*#__PURE__*/_react["default"].createElement("line", {
        key: idx,
        className: d.className,
        stroke: d.fill,
        x1: d.x,
        y1: d.y,
        x2: d.x,
        y2: d.y + d.height
      });
    }

    return /*#__PURE__*/_react["default"].createElement("rect", {
      key: idx,
      className: d.className,
      stroke: d.stroke,
      fill: d.fill,
      x: d.x,
      y: d.y,
      width: d.width,
      fillOpacity: opacity,
      height: d.height
    });
  });
}

function drawOnCanvas2(props, ctx, bars) {
  var stroke = props.stroke;
  var nest = (0, _d3Collection.nest)().key(function (d) {
    return d.fill;
  }).entries(bars);
  nest.forEach(function (outer) {
    var key = outer.key,
        values = outer.values;

    if ((0, _utils.head)(values).width > 1) {
      ctx.strokeStyle = key;
    }

    var fillStyle = (0, _utils.head)(values).width <= 1 ? key : (0, _utils.hexToRGBA)(key, props.opacity);
    ctx.fillStyle = fillStyle;
    values.forEach(function (d) {
      if (d.width <= 1) {
        /* <line key={idx} className={d.className}
        			stroke={stroke}
        			fill={fill}
        			x1={d.x} y1={d.y}
        			x2={d.x} y2={d.y + d.height} />*/

        /*
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.height);
        ctx.stroke();
        */
        ctx.fillRect(d.x - 0.5, d.y, 1, d.height);
      } else {
        /* <rect key={idx} className={d.className}
        		stroke={stroke}
        		fill={fill}
        		x={d.x}
        		y={d.y}
        		width={d.width}
        		height={d.height} /> */

        /*
        ctx.beginPath();
        ctx.rect(d.x, d.y, d.width, d.height);
        ctx.fill();
        */
        ctx.fillRect(d.x, d.y, d.width, d.height);
        if (stroke) ctx.strokeRect(d.x, d.y, d.width, d.height);
      }
    });
  });
}

function getBars(props, xAccessor, yAccessor, xScale, yScale, plotData) {
  var stack = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : identityStack;
  var after = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : _utils.identity;
  var baseAt = props.baseAt,
      className = props.className,
      fill = props.fill,
      stroke = props.stroke,
      _props$spaceBetweenBa = props.spaceBetweenBar,
      spaceBetweenBar = _props$spaceBetweenBa === void 0 ? 0 : _props$spaceBetweenBa;
  var getClassName = (0, _utils.functor)(className);
  var getFill = (0, _utils.functor)(fill);
  var getBase = (0, _utils.functor)(baseAt);
  var widthFunctor = (0, _utils.functor)(props.width);
  var width = widthFunctor(props, {
    xScale: xScale,
    xAccessor: xAccessor,
    plotData: plotData
  });
  var barWidth = Math.round(width);
  var eachBarWidth = (barWidth - spaceBetweenBar * (yAccessor.length - 1)) / yAccessor.length;
  var offset = barWidth === 1 ? 0 : 0.5 * width;
  var ds = plotData.map(function (each) {
    // eslint-disable-next-line prefer-const
    var d = {
      appearance: {},
      x: xAccessor(each)
    };
    yAccessor.forEach(function (eachYAccessor, i) {
      var key = "y".concat(i);
      d[key] = eachYAccessor(each);
      var appearance = {
        className: getClassName(each, i),
        stroke: stroke ? getFill(each, i) : "none",
        fill: getFill(each, i)
      };
      d.appearance[key] = appearance;
    });
    return d;
  });
  var keys = yAccessor.map(function (_, i) {
    return "y".concat(i);
  }); // console.log(ds);

  var data = stack().keys(keys)(ds); // console.log(data);

  var newData = data.map(function (each, i) {
    var key = each.key;
    return each.map(function (d) {
      // eslint-disable-next-line prefer-const
      var array = [d[0], d[1]];
      array.data = {
        x: d.data.x,
        i: i,
        appearance: d.data.appearance[key]
      };
      return array;
    });
  }); // console.log(newData);
  // console.log(merge(newData));

  var bars = (0, _d3Array.merge)(newData) // .filter(d => isDefined(d.y))
  .map(function (d) {
    // let baseValue = yScale.invert(getBase(xScale, yScale, d.datum));
    var y = yScale(d[1]);
    /* let h = isDefined(d.y0) && d.y0 !== 0 && !isNaN(d.y0)
    		? yScale(d.y0) - y
    		: getBase(xScale, yScale, d.datum) - yScale(d.y)*/

    var h = getBase(xScale, yScale, d.data) - yScale(d[1] - d[0]); // console.log(d.y, yScale.domain(), yScale.range())
    // let h = ;
    // if (d.y < 0) h = -h;
    // console.log(d, y, h)

    if (h < 0) {
      y = y + h;
      h = -h;
    } // console.log(d.data.i, Math.round(offset - (d.data.i > 0 ? (eachBarWidth + spaceBetweenBar) * d.data.i : 0)))

    /* console.log(d.series, d.datum.date, d.x,
    		getBase(xScale, yScale, d.datum), `d.y=${d.y}, d.y0=${d.y0}, y=${y}, h=${h}`)*/


    return _objectSpread(_objectSpread({}, d.data.appearance), {}, {
      // series: d.series,
      // i: d.x,
      x: Math.round(xScale(d.data.x) - width / 2),
      y: y,
      groupOffset: Math.round(offset - (d.data.i > 0 ? (eachBarWidth + spaceBetweenBar) * d.data.i : 0)),
      groupWidth: Math.round(eachBarWidth),
      offset: Math.round(offset),
      height: h,
      width: barWidth
    });
  }).filter(function (bar) {
    return !isNaN(bar.y);
  });
  return after(bars);
}

var _default = StackedBarSeries;
exports["default"] = _default;
//# sourceMappingURL=StackedBarSeries.js.map