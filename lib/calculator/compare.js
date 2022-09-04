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

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _default() {
  var options = _defaultOptionsForComputation.Change;

  function calculator(data) {
    var _options = options,
        basePath = _options.basePath,
        mainKeys = _options.mainKeys,
        compareKeys = _options.compareKeys;
    var base = (0, _utils.path)(basePath);
    var first = (0, _utils.head)(data);
    var b = base(first); // eslint-disable-next-line prefer-const

    var firsts = {};
    var compareData = data.map(function (d) {
      // eslint-disable-next-line prefer-const
      var result = {};
      mainKeys.forEach(function (key) {
        if (_typeof(d[key]) === "object") {
          result[key] = {};
          Object.keys(d[key]).forEach(function (subkey) {
            result[key][subkey] = (d[key][subkey] - b) / b;
          });
        } else {
          result[key] = (d[key] - b) / b;
        }
      });
      compareKeys.forEach(function (key) {
        if ((0, _utils.isDefined)(d[key]) && (0, _utils.isNotDefined)(firsts[key])) {
          firsts[key] = d[key];
        }

        if ((0, _utils.isDefined)(d[key]) && (0, _utils.isDefined)(firsts[key])) {
          result[key] = (d[key] - firsts[key]) / firsts[key];
        }
      });
      return result;
    }); // console.log(compareData[20]);

    return compareData;
  }

  calculator.options = function (x) {
    if (!arguments.length) {
      return options;
    }

    options = _objectSpread(_objectSpread({}, _defaultOptionsForComputation.Change), x);
    return calculator;
  };

  return calculator;
}
//# sourceMappingURL=compare.js.map