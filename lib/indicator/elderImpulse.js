"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _utils = require("../utils");

var _defaultOptionsForAppearance = require("./defaultOptionsForAppearance");

var _baseIndicator = _interopRequireDefault(require("./baseIndicator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ALGORITHM_TYPE = "ElderImpulse";

function _default() {
  var macdSource, emaSource;
  var base = (0, _baseIndicator["default"])().type(ALGORITHM_TYPE) // .stroke(d => stroke[d.elderImpulse])
  .stroke(_defaultOptionsForAppearance.ElderImpulse.stroke).fill(undefined);
  var underlyingAlgorithm = (0, _utils.slidingWindow)().windowSize(2).undefinedValue("neutral").accumulator(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        prev = _ref2[0],
        curr = _ref2[1];

    if ((0, _utils.isNotDefined)(macdSource)) throw new Error("macdSource not defined for ".concat(ALGORITHM_TYPE, " calculator"));
    if ((0, _utils.isNotDefined)(emaSource)) throw new Error("emaSource not defined for ".concat(ALGORITHM_TYPE, " calculator"));

    if ((0, _utils.isDefined)(macdSource(prev)) && (0, _utils.isDefined)(emaSource(prev))) {
      var prevMACDDivergence = macdSource(prev).divergence;
      var currMACDDivergence = macdSource(curr).divergence;
      var prevEMA = emaSource(prev);
      var currEMA = emaSource(curr);
      if (currMACDDivergence >= prevMACDDivergence && currEMA >= prevEMA) return "up";
      if (currMACDDivergence <= prevMACDDivergence && currEMA <= prevEMA) return "down";
    }

    return "neutral";
  });
  var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
    datum.elderImpulse = indicator;
  }); // eslint-disable-next-line prefer-const

  var indicator = function indicator(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      merge: true
    };
    var newData = options.merge ? mergedAlgorithm(data) : underlyingAlgorithm(data);
    return newData;
  };

  indicator.macdSource = function (x) {
    if (!arguments.length) return macdSource;
    macdSource = x;
    return indicator;
  };

  indicator.emaSource = function (x) {
    if (!arguments.length) return emaSource;
    emaSource = x;
    return indicator;
  };

  (0, _utils.rebind)(indicator, base, "id", "echo", "type", "stroke"); // rebind(indicator, underlyingAlgorithm, "windowSize", "movingAverageType", "multiplier", "source");

  (0, _utils.rebind)(indicator, mergedAlgorithm, "merge", "skipUndefined");
  return indicator;
}
//# sourceMappingURL=elderImpulse.js.map