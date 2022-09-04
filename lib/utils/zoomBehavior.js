"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lastVisibleItemBasedZoomAnchor = lastVisibleItemBasedZoomAnchor;
exports.mouseBasedZoomAnchor = mouseBasedZoomAnchor;
exports.rightDomainBasedZoomAnchor = rightDomainBasedZoomAnchor;

var _ChartDataUtil = require("./ChartDataUtil");

var _index = require("./index");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-unused-vars */
function mouseBasedZoomAnchor(_ref) {
  var xScale = _ref.xScale,
      xAccessor = _ref.xAccessor,
      mouseXY = _ref.mouseXY,
      plotData = _ref.plotData,
      fullData = _ref.fullData;
  var currentItem = (0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, mouseXY, plotData);
  return xAccessor(currentItem);
}

function lastVisibleItemBasedZoomAnchor(_ref2) {
  var xScale = _ref2.xScale,
      xAccessor = _ref2.xAccessor,
      mouseXY = _ref2.mouseXY,
      plotData = _ref2.plotData,
      fullData = _ref2.fullData;
  var lastItem = (0, _index.last)(plotData);
  return xAccessor(lastItem);
}

function rightDomainBasedZoomAnchor(_ref3) {
  var xScale = _ref3.xScale,
      xAccessor = _ref3.xAccessor,
      mouseXY = _ref3.mouseXY,
      plotData = _ref3.plotData,
      fullData = _ref3.fullData;

  var _xScale$domain = xScale.domain(),
      _xScale$domain2 = _slicedToArray(_xScale$domain, 2),
      end = _xScale$domain2[1];

  return end;
}
/* eslint-enable no-unused-vars */
//# sourceMappingURL=zoomBehavior.js.map