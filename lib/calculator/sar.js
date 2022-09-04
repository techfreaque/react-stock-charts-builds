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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function calc(prev, now) {
  var risingSar = prev.risingSar + prev.af * (prev.risingEp - prev.risingSar);
  var fallingSar = prev.fallingSar - prev.af * (prev.fallingSar - prev.fallingEp);
  var risingEp = Math.max(prev.risingEp, now.high);
  var fallingEp = Math.min(prev.fallingEp, now.low);
  return {
    risingSar: risingSar,
    fallingSar: fallingSar,
    risingEp: risingEp,
    fallingEp: fallingEp
  };
}

function _default() {
  var options = _defaultOptionsForComputation.SAR;

  function calculator(data) {
    var _options = options,
        accelerationFactor = _options.accelerationFactor,
        maxAccelerationFactor = _options.maxAccelerationFactor;
    var algorithm = (0, _utils.mappedSlidingWindow)().windowSize(2).undefinedValue(function (_ref) {
      var high = _ref.high,
          low = _ref.low;
      return {
        risingSar: low,
        risingEp: high,
        fallingSar: high,
        fallingEp: low,
        af: accelerationFactor
      };
    }).accumulator(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          prev = _ref3[0],
          now = _ref3[1];

      var _calc = calc(prev, now),
          risingSar = _calc.risingSar,
          fallingSar = _calc.fallingSar,
          risingEp = _calc.risingEp,
          fallingEp = _calc.fallingEp;

      if ((0, _utils.isNotDefined)(prev.use) && risingSar > now.low && fallingSar < now.high) {
        return {
          risingSar: risingSar,
          fallingSar: fallingSar,
          risingEp: risingEp,
          fallingEp: fallingEp
        };
      }

      var use = (0, _utils.isDefined)(prev.use) ? prev.use === "rising" ? risingSar > now.low ? "falling" : "rising" : fallingSar < now.high ? "rising" : "falling" : risingSar > now.low ? "falling" : "rising";
      var current = prev.use === use ? {
        af: Math.min(maxAccelerationFactor, prev.af + accelerationFactor),
        fallingEp: fallingEp,
        risingEp: risingEp,
        fallingSar: fallingSar,
        risingSar: risingSar
      } : {
        af: accelerationFactor,
        fallingEp: now.low,
        risingEp: now.high,
        fallingSar: Math.max(prev.risingEp, now.high),
        risingSar: Math.min(prev.fallingEp, now.low)
      };
      var date = now.date,
          high = now.high,
          low = now.low;
      return _objectSpread(_objectSpread({
        date: date,
        high: high,
        low: low
      }, current), {}, {
        use: use,
        sar: use === "falling" ? current.fallingSar : current.risingSar
      });
    });
    var calculatedData = algorithm(data).map(function (d) {
      return d.sar;
    }); // console.log(calculatedData);

    return calculatedData;
  }

  calculator.undefinedLength = function () {
    return 1;
  };

  calculator.options = function (x) {
    if (!arguments.length) {
      return options;
    }

    options = _objectSpread(_objectSpread({}, _defaultOptionsForComputation.SAR), x);
    return calculator;
  };

  return calculator;
}
//# sourceMappingURL=sar.js.map