"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _utils = require("../utils");

var _defaultOptionsForComputation = require("./defaultOptionsForComputation");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _default() {
  var options = _defaultOptionsForComputation.EMA;

  function calculator(data) {
    var _options = options,
        windowSize = _options.windowSize,
        sourcePath = _options.sourcePath;
    var source = (0, _utils.path)(sourcePath);
    var alpha = 2 / (windowSize + 1);
    var previous;
    var initialAccumulator = 0;
    var skip = 0;
    return data.map(function (d, i) {
      var v = source(d, i);

      if ((0, _utils.isNotDefined)(previous) && (0, _utils.isNotDefined)(v)) {
        skip++;
        return undefined;
      } else if (i < windowSize + skip - 1) {
        initialAccumulator += v;
        return undefined;
      } else if (i === windowSize + skip - 1) {
        initialAccumulator += v;
        var initialValue = initialAccumulator / windowSize;
        previous = initialValue;
        return initialValue;
      } else {
        var nextValue = v * alpha + (1 - alpha) * previous;
        previous = nextValue;
        return nextValue;
      }
    });
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

    options = _objectSpread(_objectSpread({}, _defaultOptionsForComputation.EMA), x);
    return calculator;
  };

  return calculator;
}
//# sourceMappingURL=ema.js.map