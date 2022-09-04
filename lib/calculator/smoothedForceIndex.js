"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _forceIndex = _interopRequireDefault(require("./forceIndex"));

var _ema = _interopRequireDefault(require("./ema"));

var _sma = _interopRequireDefault(require("./sma"));

var _utils = require("../utils");

var _defaultOptionsForComputation = require("./defaultOptionsForComputation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _default() {
  var underlyingAlgorithm = (0, _forceIndex["default"])();
  var merge = (0, _utils.zipper)().combine(function (force, smoothed) {
    return {
      force: force,
      smoothed: smoothed
    };
  });
  var options = _defaultOptionsForComputation.SmoothedForceIndex;

  function calculator(data) {
    var _options = options,
        smoothingType = _options.smoothingType,
        smoothingWindow = _options.smoothingWindow;
    var _options2 = options,
        sourcePath = _options2.sourcePath,
        volumePath = _options2.volumePath;
    var algo = underlyingAlgorithm.options({
      sourcePath: sourcePath,
      volumePath: volumePath
    });
    var force = algo(data);
    var ma = smoothingType === "ema" ? (0, _ema["default"])() : (0, _sma["default"])();
    var forceMA = ma.options({
      windowSize: smoothingWindow,
      sourcePath: undefined
    });
    var smoothed = forceMA(force);
    return merge(force, smoothed);
  }

  calculator.undefinedLength = function () {
    var _options3 = options,
        smoothingWindow = _options3.smoothingWindow;
    return underlyingAlgorithm.undefinedLength() + smoothingWindow - 1;
  };

  calculator.options = function (x) {
    if (!arguments.length) {
      return options;
    }

    options = _objectSpread(_objectSpread({}, _defaultOptionsForComputation.SmoothedForceIndex), x);
    return calculator;
  };

  return calculator;
}
//# sourceMappingURL=smoothedForceIndex.js.map