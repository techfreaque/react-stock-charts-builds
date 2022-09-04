"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _d3Array = require("d3-array");

var _utils = require("../utils");

var _defaultOptionsForComputation = require("./defaultOptionsForComputation");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _default() {
  var options = _defaultOptionsForComputation.FullStochasticOscillator;

  var source = function source(d) {
    return {
      open: d.open,
      high: d.high,
      low: d.low,
      close: d.close
    };
  };

  function calculator(data) {
    var _options = options,
        windowSize = _options.windowSize,
        kWindowSize = _options.kWindowSize,
        dWindowSize = _options.dWindowSize;

    var high = function high(d) {
      return source(d).high;
    },
        low = function low(d) {
      return source(d).low;
    },
        close = function close(d) {
      return source(d).close;
    };

    var kWindow = (0, _utils.slidingWindow)().windowSize(windowSize).accumulator(function (values) {
      var highestHigh = (0, _d3Array.max)(values, high);
      var lowestLow = (0, _d3Array.min)(values, low);
      var currentClose = close((0, _utils.last)(values));
      var k = (currentClose - lowestLow) / (highestHigh - lowestLow) * 100;
      return k;
    });
    var kSmoothed = (0, _utils.slidingWindow)().skipInitial(windowSize - 1).windowSize(kWindowSize).accumulator(function (values) {
      return (0, _d3Array.mean)(values);
    });
    var dWindow = (0, _utils.slidingWindow)().skipInitial(windowSize - 1 + kWindowSize - 1).windowSize(dWindowSize).accumulator(function (values) {
      return (0, _d3Array.mean)(values);
    });
    var stoAlgorithm = (0, _utils.zipper)().combine(function (K, D) {
      return {
        K: K,
        D: D
      };
    });
    var kData = kSmoothed(kWindow(data));
    var dData = dWindow(kData);
    var indicatorData = stoAlgorithm(kData, dData);
    return indicatorData;
  }

  calculator.undefinedLength = function () {
    var _options2 = options,
        windowSize = _options2.windowSize,
        kWindowSize = _options2.kWindowSize,
        dWindowSize = _options2.dWindowSize;
    return windowSize + kWindowSize + dWindowSize;
  };

  calculator.source = function (x) {
    if (!arguments.length) {
      return source;
    }

    source = x;
    return calculator;
  };

  calculator.options = function (x) {
    if (!arguments.length) {
      return options;
    }

    options = _objectSpread(_objectSpread({}, _defaultOptionsForComputation.FullStochasticOscillator), x);
    return calculator;
  };

  return calculator;
}
//# sourceMappingURL=sto.js.map