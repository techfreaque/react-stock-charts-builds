"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = financeDiscontinuousScale;

var _d3Collection = require("d3-collection");

var _d3Array = require("d3-array");

var _d3Scale = require("d3-scale");

var _utils = require("../utils");

var _levels = require("./levels");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MAX_LEVEL = _levels.levelDefinition.length - 1;

function financeDiscontinuousScale(index, futureProvider) {
  var backingLinearScale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _d3Scale.scaleLinear)();
  if ((0, _utils.isNotDefined)(index)) throw new Error("Use the discontinuousTimeScaleProvider to create financeDiscontinuousScale");

  function scale(x) {
    return backingLinearScale(x);
  }

  scale.invert = function (x) {
    var inverted = backingLinearScale.invert(x);
    return Math.round(inverted * 10000) / 10000;
  };

  scale.domain = function (x) {
    if (!arguments.length) return backingLinearScale.domain();
    backingLinearScale.domain(x);
    return scale;
  };

  scale.range = function (x) {
    if (!arguments.length) return backingLinearScale.range();
    backingLinearScale.range(x);
    return scale;
  };

  scale.rangeRound = function (x) {
    return backingLinearScale.range(x);
  };

  scale.clamp = function (x) {
    if (!arguments.length) return backingLinearScale.clamp();
    backingLinearScale.clamp(x);
    return scale;
  };

  scale.interpolate = function (x) {
    if (!arguments.length) return backingLinearScale.interpolate();
    backingLinearScale.interpolate(x);
    return scale;
  };

  scale.ticks = function (m, flexTicks) {
    var backingTicks = backingLinearScale.ticks(m);
    var ticksMap = (0, _d3Collection.map)();

    var _backingLinearScale$d = backingLinearScale.domain(),
        _backingLinearScale$d2 = _slicedToArray(_backingLinearScale$d, 2),
        domainStart = _backingLinearScale$d2[0],
        domainEnd = _backingLinearScale$d2[1];

    var start = Math.max(Math.ceil(domainStart), (0, _utils.head)(index).index) + Math.abs((0, _utils.head)(index).index);
    var end = Math.min(Math.floor(domainEnd), (0, _utils.last)(index).index) + Math.abs((0, _utils.head)(index).index);

    if (Math.floor(domainEnd) > end) {// console.log(end, domainEnd, index);
    }

    var desiredTickCount = Math.ceil((end - start) / (domainEnd - domainStart) * backingTicks.length);

    for (var i = MAX_LEVEL; i >= 0; i--) {
      var ticksAtLevel = ticksMap.get(i);
      var temp = (0, _utils.isNotDefined)(ticksAtLevel) ? [] : ticksAtLevel.slice();

      for (var j = start; j <= end; j++) {
        if (index[j].level === i) {
          temp.push(index[j]);
        }
      }

      ticksMap.set(i, temp);
    }

    var unsortedTicks = [];

    for (var _i2 = MAX_LEVEL; _i2 >= 0; _i2--) {
      if (ticksMap.get(_i2).length + unsortedTicks.length > desiredTickCount * 1.5) break;
      unsortedTicks = unsortedTicks.concat(ticksMap.get(_i2).map(function (d) {
        return d.index;
      }));
    }

    var ticks = unsortedTicks.sort(_d3Array.ascending); // console.log(backingTicks.length, desiredTickCount, ticks, ticksMap);

    if (!flexTicks && end - start > ticks.length) {
      var ticksSet = (0, _d3Collection.set)(ticks);
      var d = Math.abs((0, _utils.head)(index).index); // ignore ticks within this distance

      var distance = Math.ceil((backingTicks.length > 0 ? ((0, _utils.last)(backingTicks) - (0, _utils.head)(backingTicks)) / backingTicks.length / 4 : 1) * 1.5);

      for (var _i3 = 0; _i3 < ticks.length - 1; _i3++) {
        for (var _j = _i3 + 1; _j < ticks.length; _j++) {
          if (ticks[_j] - ticks[_i3] <= distance) {
            ticksSet.remove(index[ticks[_i3] + d].level >= index[ticks[_j] + d].level ? ticks[_j] : ticks[_i3]);
          }
        }
      }

      var tickValues = ticksSet.values().map(function (d) {
        return parseInt(d, 10);
      }); // console.log(ticks.length, tickValues, level);
      // console.log(ticks, tickValues, distance);

      return tickValues;
    }

    return ticks;
  };

  scale.tickFormat = function () {
    return function (x) {
      var d = Math.abs((0, _utils.head)(index).index);
      var _index$Math$floor = index[Math.floor(x + d)],
          format = _index$Math$floor.format,
          date = _index$Math$floor.date;
      return format(date);
    };
  };

  scale.value = function (x) {
    var d = Math.abs((0, _utils.head)(index).index);

    if ((0, _utils.isDefined)(index[Math.floor(x + d)])) {
      var date = index[Math.floor(x + d)].date;
      return date;
    }
  };

  scale.nice = function (m) {
    backingLinearScale.nice(m);
    return scale;
  };

  scale.index = function (x) {
    if (!arguments.length) return index;
    index = x;
    return scale;
  };

  scale.copy = function () {
    return financeDiscontinuousScale(index, futureProvider, backingLinearScale.copy());
  };

  return scale;
}
//# sourceMappingURL=financeDiscontinuousScale.js.map