"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _calculator = require("../calculator");

var _baseIndicator = _interopRequireDefault(require("./baseIndicator"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ALGORITHM_TYPE = "HeikinAshi";

function _default() {
  var base = (0, _baseIndicator["default"])().type(ALGORITHM_TYPE).accessor(function (d) {
    return d.ha;
  });
  var underlyingAlgorithm = (0, _calculator.heikinAshi)();
  var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
    return _objectSpread(_objectSpread({}, datum), indicator);
  });

  var indicator = function indicator(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      merge: true
    };

    if (options.merge) {
      if (!base.accessor()) throw new Error("Set an accessor to ".concat(ALGORITHM_TYPE, " before calculating"));
      return mergedAlgorithm(data);
    }

    return underlyingAlgorithm(data);
  };

  (0, _utils.rebind)(indicator, base, "accessor", "stroke", "fill", "echo", "type"); // rebind(indicator, underlyingAlgorithm, "windowSize", "source");

  (0, _utils.rebind)(indicator, mergedAlgorithm, "merge");
  return indicator;
}
//# sourceMappingURL=heikinAshi.js.map