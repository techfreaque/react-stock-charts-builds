"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _utils = require("../utils");

var i = 0;

function _default() {
  var id = i++,
      accessor,
      stroke,
      fill,
      echo,
      type;

  function baseIndicator() {}

  baseIndicator.id = function (x) {
    if (!arguments.length) return id;
    id = x;
    return baseIndicator;
  };

  baseIndicator.accessor = function (x) {
    if (!arguments.length) return accessor;
    accessor = x;
    return baseIndicator;
  };

  baseIndicator.stroke = function (x) {
    if (!arguments.length) return !stroke ? stroke = (0, _utils.overlayColors)(id) : stroke;
    stroke = x;
    return baseIndicator;
  };

  baseIndicator.fill = function (x) {
    if (!arguments.length) return !fill ? fill = (0, _utils.overlayColors)(id) : fill;
    fill = x;
    return baseIndicator;
  };

  baseIndicator.echo = function (x) {
    if (!arguments.length) return echo;
    echo = x;
    return baseIndicator;
  };

  baseIndicator.type = function (x) {
    if (!arguments.length) return type;
    type = x;
    return baseIndicator;
  };

  return baseIndicator;
}
//# sourceMappingURL=baseIndicator.js.map