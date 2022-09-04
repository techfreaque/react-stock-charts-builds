"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _utils = require("../utils");

var _calculator = require("../calculator");

var _baseIndicator = _interopRequireDefault(require("./baseIndicator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ALGORITHM_TYPE = "Kagi";

function _default() {
  var base = (0, _baseIndicator["default"])().type(ALGORITHM_TYPE);
  var underlyingAlgorithm = (0, _calculator.kagi)();
  var indicator = underlyingAlgorithm;
  (0, _utils.rebind)(indicator, base, "id", "stroke", "fill", "echo", "type");
  (0, _utils.rebind)(indicator, underlyingAlgorithm, "dateAccessor", "dateMutator");
  (0, _utils.rebind)(indicator, underlyingAlgorithm, "options");
  return indicator;
}
//# sourceMappingURL=kagi.js.map