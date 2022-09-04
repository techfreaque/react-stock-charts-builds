"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _d3Array = require("d3-array");

var _defaultOptionsForComputation = require("./defaultOptionsForComputation");

var _utils = require("../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _default() {
  var options = _defaultOptionsForComputation.ATR;

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
        windowSize = _options.windowSize;
    var trueRangeAlgorithm = (0, _utils.slidingWindow)().windowSize(2).source(source).undefinedValue(function (d) {
      return d.high - d.low;
    }) // the first TR value is simply the High minus the Low
    .accumulator(function (values) {
      var prev = values[0];
      var d = values[1];
      return Math.max(d.high - d.low, d.high - prev.close, d.low - prev.close);
    });
    var prevATR;
    var atrAlgorithm = (0, _utils.slidingWindow)().skipInitial(1) // trueRange starts from index 1 so ATR starts from 1
    .windowSize(windowSize).accumulator(function (values) {
      var tr = (0, _utils.last)(values);
      var atr = (0, _utils.isDefined)(prevATR) ? (prevATR * (windowSize - 1) + tr) / windowSize : (0, _d3Array.sum)(values) / windowSize;
      prevATR = atr;
      return atr;
    });
    var newData = atrAlgorithm(trueRangeAlgorithm(data));
    return newData;
  }

  calculator.undefinedLength = function () {
    var _options2 = options,
        windowSize = _options2.windowSize;
    return windowSize - 1;
  };

  calculator.options = function (x) {
    if (!arguments.length) {
      return options;
    }

    options = _objectSpread(_objectSpread({}, _defaultOptionsForComputation.ATR), x);
    return calculator;
  };

  calculator.source = function (x) {
    if (!arguments.length) {
      return source;
    }

    source = x;
    return calculator;
  };

  return calculator;
}
//# sourceMappingURL=atr.js.map