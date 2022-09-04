"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _utils = require("../utils");

var _atr = _interopRequireDefault(require("./atr"));

var _defaultOptionsForComputation = require("./defaultOptionsForComputation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _default() {
  var options = _defaultOptionsForComputation.Kagi;

  var dateAccessor = function dateAccessor(d) {
    return d.date;
  };

  var dateMutator = function dateMutator(d, date) {
    d.date = date;
  };

  function calculator(data) {
    var _options = options,
        reversalType = _options.reversalType,
        windowSize = _options.windowSize,
        reversal = _options.reversal,
        sourcePath = _options.sourcePath;
    var source = (0, _utils.path)(sourcePath);
    var reversalThreshold;

    if (reversalType === "ATR") {
      // calculateATR(rawData, period);
      var atrAlgorithm = (0, _atr["default"])().options({
        windowSize: windowSize
      });
      var atrCalculator = (0, _utils.merge)().algorithm(atrAlgorithm).merge(function (d, c) {
        d["atr" + windowSize] = c;
      });
      atrCalculator(data);

      reversalThreshold = function reversalThreshold(d) {
        return d["atr" + windowSize];
      };
    } else {
      reversalThreshold = (0, _utils.functor)(reversal);
    }

    var kagiData = [];
    var prevPeak, prevTrough, direction;
    var line = {};
    data.forEach(function (d) {
      if ((0, _utils.isNotDefined)(line.from)) {
        dateMutator(line, dateAccessor(d));
        line.from = dateAccessor(d);
        if (!line.open) line.open = d.open;
        line.high = d.high;
        line.low = d.low;
        if (!line.close) line.close = source(d);
        line.startOfYear = d.startOfYear;
        line.startOfQuarter = d.startOfQuarter;
        line.startOfMonth = d.startOfMonth;
        line.startOfWeek = d.startOfWeek;
      }

      if (!line.startOfYear) {
        line.startOfYear = d.startOfYear;

        if (line.startOfYear) {
          line.date = d.date; // line.displayDate = d.displayDate;
        }
      }

      if (!line.startOfQuarter) {
        line.startOfQuarter = d.startOfQuarter;

        if (line.startOfQuarter && !line.startOfYear) {
          line.date = d.date; // line.displayDate = d.displayDate;
        }
      }

      if (!line.startOfMonth) {
        line.startOfMonth = d.startOfMonth;

        if (line.startOfMonth && !line.startOfQuarter) {
          line.date = d.date; // line.displayDate = d.displayDate;
        }
      }

      if (!line.startOfWeek) {
        line.startOfWeek = d.startOfWeek;

        if (line.startOfWeek && !line.startOfMonth) {
          line.date = d.date; // line.displayDate = d.displayDate;
        }
      }

      line.volume = (line.volume || 0) + d.volume;
      line.high = Math.max(line.high, d.high);
      line.low = Math.min(line.low, d.low);
      line.to = dateAccessor(d);
      var priceMovement = source(d) - line.close; // console.log(source(d), priceMovement)

      if (line.close >= line.open
      /* going up */
      && priceMovement > 0
      /* and moving in same direction */
      || line.close < line.open
      /* going down */
      && priceMovement < 0
      /* and moving in same direction */
      ) {
        line.close = source(d);

        if (prevTrough && line.close < prevTrough) {
          // going below the prevTrough, so change from yang to yin
          // A yin line forms when a Kagi line breaks below the prior trough.
          line.changePoint = prevTrough;

          if (line.startAs !== "yin") {
            line.changeTo = "yin"; // line.startAs = "yang";
          }
        }

        if (prevPeak && line.close > prevPeak) {
          // going above the prevPeak, so change from yin to yang
          // A yang line forms when a Kagi line breaks above the prior peak
          line.changePoint = prevPeak;

          if (line.startAs !== "yang") {
            line.changeTo = "yang"; // line.startAs = "yin";
          }
        }
      } else if (line.close >= line.open
      /* going up */
      && priceMovement < 0
      /* and moving in other direction */
      && Math.abs(priceMovement) > reversalThreshold(d)
      /* and the movement is big enough for reversal */
      || line.close < line.open
      /* going down */
      && priceMovement > 0
      /* and moving in other direction */
      && Math.abs(priceMovement) > reversalThreshold(d)
      /* and the movement is big enough for reversal */
      ) {
        // reverse direction
        var nextLineOpen = line.close;
        direction = (line.close - line.open) / Math.abs(line.close - line.open);
        var nextChangePoint, nextChangeTo;

        if (direction < 0
        /* if direction so far has been -ve*/
        ) {
          // compare with line.close becomes prevTrough
          if ((0, _utils.isNotDefined)(prevPeak)) prevPeak = line.open;
          prevTrough = line.close;

          if (source(d) > prevPeak) {
            nextChangePoint = prevPeak;
            nextChangeTo = "yang";
          }
        } else {
          if ((0, _utils.isNotDefined)(prevTrough)) prevTrough = line.open;
          prevPeak = line.close;

          if (source(d) < prevTrough) {
            nextChangePoint = prevTrough;
            nextChangeTo = "yin";
          }
        }

        if ((0, _utils.isNotDefined)(line.startAs)) {
          line.startAs = direction > 0 ? "yang" : "yin";
        }

        var startAs = line.changeTo || line.startAs;
        line.added = true;
        kagiData.push(line);
        direction = -1 * direction; // direction is reversed

        line = _objectSpread({}, line);
        line.open = nextLineOpen;
        line.close = source(d);
        line.startAs = startAs;
        line.changePoint = nextChangePoint;
        line.changeTo = nextChangeTo;
        line.added = false;
        line.from = undefined;
        line.volume = 0;
      } else {// console.log("MOVING IN REV DIR BUT..", line.open, line.close, source(d));
      }

      line.current = source(d);
      var dir = line.close - line.open;
      dir = dir === 0 ? 1 : dir / Math.abs(dir);
      line.reverseAt = dir > 0 ? line.close - reversalThreshold(d) : line.open - reversalThreshold(d);
    });
    if (!line.added) kagiData.push(line);
    return kagiData;
  }

  calculator.options = function (x) {
    if (!arguments.length) {
      return options;
    }

    options = _objectSpread(_objectSpread({}, _defaultOptionsForComputation.Kagi), x);
    return calculator;
  };

  calculator.dateMutator = function (x) {
    if (!arguments.length) return dateMutator;
    dateMutator = x;
    return calculator;
  };

  calculator.dateAccessor = function (x) {
    if (!arguments.length) return dateAccessor;
    dateAccessor = x;
    return calculator;
  };

  return calculator;
}
//# sourceMappingURL=kagi.js.map