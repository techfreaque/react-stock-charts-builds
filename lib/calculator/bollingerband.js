"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _d3Array = require("d3-array");

var _ema = _interopRequireDefault(require("./ema"));

var _utils = require("../utils");

var _defaultOptionsForComputation = require("./defaultOptionsForComputation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _default() {
  var options = _defaultOptionsForComputation.BollingerBand;

  function calculator(data) {
    var _options = options,
        windowSize = _options.windowSize,
        multiplier = _options.multiplier,
        movingAverageType = _options.movingAverageType,
        sourcePath = _options.sourcePath;
    var source = (0, _utils.path)(sourcePath);
    var meanAlgorithm = movingAverageType === "ema" ? (0, _ema["default"])().options({
      windowSize: windowSize,
      sourcePath: sourcePath
    }) : (0, _utils.slidingWindow)().windowSize(windowSize).accumulator(function (values) {
      return (0, _d3Array.mean)(values);
    }).sourcePath(sourcePath);
    var bollingerBandAlgorithm = (0, _utils.slidingWindow)().windowSize(windowSize).accumulator(function (values) {
      var avg = (0, _utils.last)(values).mean;
      var stdDev = (0, _d3Array.deviation)(values, function (each) {
        return source(each.datum);
      });
      return {
        top: avg + multiplier * stdDev,
        middle: avg,
        bottom: avg - multiplier * stdDev
      };
    });
    var zip = (0, _utils.zipper)().combine(function (datum, mean) {
      return {
        datum: datum,
        mean: mean
      };
    });
    var tuples = zip(data, meanAlgorithm(data));
    return bollingerBandAlgorithm(tuples);
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

    options = _objectSpread(_objectSpread({}, _defaultOptionsForComputation.BollingerBand), x);
    return calculator;
  };

  return calculator;
}
//# sourceMappingURL=bollingerband.js.map