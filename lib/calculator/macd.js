"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _ema = _interopRequireDefault(require("./ema"));

var _utils = require("../utils");

var _defaultOptionsForComputation = require("./defaultOptionsForComputation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _default() {
  var options = _defaultOptionsForComputation.MACD;

  function calculator(data) {
    var _options = options,
        fast = _options.fast,
        slow = _options.slow,
        signal = _options.signal,
        sourcePath = _options.sourcePath;
    var fastEMA = (0, _ema["default"])().options({
      windowSize: fast,
      sourcePath: sourcePath
    });
    var slowEMA = (0, _ema["default"])().options({
      windowSize: slow,
      sourcePath: sourcePath
    });
    var signalEMA = (0, _ema["default"])().options({
      windowSize: signal,
      sourcePath: undefined
    });
    var macdCalculator = (0, _utils.zipper)().combine(function (fastEMA, slowEMA) {
      return (0, _utils.isDefined)(fastEMA) && (0, _utils.isDefined)(slowEMA) ? fastEMA - slowEMA : undefined;
    });
    var macdArray = macdCalculator(fastEMA(data), slowEMA(data));
    var undefinedArray = new Array(slow);
    var signalArray = undefinedArray.concat(signalEMA(macdArray.slice(slow)));
    var zip = (0, _utils.zipper)().combine(function (macd, signal) {
      return {
        macd: macd,
        signal: signal,
        divergence: (0, _utils.isDefined)(macd) && (0, _utils.isDefined)(signal) ? macd - signal : undefined
      };
    });
    var macd = zip(macdArray, signalArray);
    return macd;
  }

  calculator.undefinedLength = function () {
    var _options2 = options,
        slow = _options2.slow,
        signal = _options2.signal;
    return slow + signal - 1;
  };

  calculator.options = function (x) {
    if (!arguments.length) {
      return options;
    }

    options = _objectSpread(_objectSpread({}, _defaultOptionsForComputation.MACD), x);
    return calculator;
  };

  return calculator;
}
//# sourceMappingURL=macd.js.map