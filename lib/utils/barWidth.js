"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plotDataLengthBarWidth = plotDataLengthBarWidth;
exports.timeIntervalBarWidth = timeIntervalBarWidth;

var _utils = require("../utils");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Bar width is based on the amount of items in the plot data and the distance between the first and last of those
 * items.
 * @param props the props passed to the series.
 * @param moreProps an object holding the xScale, xAccessor and plotData.
 * @return {number} the bar width.
 */
function plotDataLengthBarWidth(props, moreProps) {
  var widthRatio = props.widthRatio;
  var xScale = moreProps.xScale;

  var _xScale$range = xScale.range(),
      _xScale$range2 = _slicedToArray(_xScale$range, 2),
      l = _xScale$range2[0],
      r = _xScale$range2[1];

  var totalWidth = Math.abs(r - l);

  if (xScale.invert != null) {
    var _xScale$domain = xScale.domain(),
        _xScale$domain2 = _slicedToArray(_xScale$domain, 2),
        dl = _xScale$domain2[0],
        dr = _xScale$domain2[1];

    var width = totalWidth / Math.abs(dl - dr);
    return width * widthRatio;
  } else {
    var _width = totalWidth / xScale.domain().length;

    return _width * widthRatio;
  }
}
/**
 * Generates a width function that calculates the bar width based on the given time interval.
 * @param interval a d3-time time interval.
 * @return {Function} the width function.
 */


function timeIntervalBarWidth(interval) {
  return function (props, moreProps) {
    var widthRatio = props.widthRatio;
    var xScale = moreProps.xScale,
        xAccessor = moreProps.xAccessor,
        plotData = moreProps.plotData;
    var first = xAccessor((0, _utils.head)(plotData));
    return Math.abs(xScale(interval.offset(first, 1)) - xScale(first)) * widthRatio;
  };
}
//# sourceMappingURL=barWidth.js.map