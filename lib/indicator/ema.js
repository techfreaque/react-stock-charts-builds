"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _utils = require("../utils");

var _calculator = require("../calculator");

var _baseIndicator = _interopRequireDefault(require("./baseIndicator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ALGORITHM_TYPE = "EMA";

function _default() {
  var base = (0, _baseIndicator["default"])().type(ALGORITHM_TYPE).accessor(function (d) {
    return d.ema;
  });
  var underlyingAlgorithm = (0, _calculator.ema)();
  var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
    datum.ema = indicator;
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

  (0, _utils.rebind)(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
  (0, _utils.rebind)(indicator, underlyingAlgorithm, "options", "undefinedLength");
  (0, _utils.rebind)(indicator, mergedAlgorithm, "merge", "skipUndefined");
  return indicator;
}
//# sourceMappingURL=ema.js.map