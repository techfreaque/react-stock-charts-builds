"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BackgroundText", {
  enumerable: true,
  get: function get() {
    return _BackgroundText["default"];
  }
});
Object.defineProperty(exports, "Chart", {
  enumerable: true,
  get: function get() {
    return _Chart["default"];
  }
});
Object.defineProperty(exports, "ChartCanvas", {
  enumerable: true,
  get: function get() {
    return _ChartCanvas["default"];
  }
});
Object.defineProperty(exports, "GenericChartComponent", {
  enumerable: true,
  get: function get() {
    return _GenericChartComponent["default"];
  }
});
Object.defineProperty(exports, "GenericComponent", {
  enumerable: true,
  get: function get() {
    return _GenericComponent["default"];
  }
});
Object.defineProperty(exports, "ZoomButtons", {
  enumerable: true,
  get: function get() {
    return _ZoomButtons["default"];
  }
});
exports.version = void 0;

var _ChartCanvas = _interopRequireDefault(require("./lib/ChartCanvas"));

var _Chart = _interopRequireDefault(require("./lib/Chart"));

var _GenericChartComponent = _interopRequireDefault(require("./lib/GenericChartComponent"));

var _GenericComponent = _interopRequireDefault(require("./lib/GenericComponent"));

var _BackgroundText = _interopRequireDefault(require("./lib/BackgroundText"));

var _ZoomButtons = _interopRequireDefault(require("./lib/ZoomButtons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// common components
var version = "0.8.0";
/*
// chart types & Series
import * as series from "./lib/series";
import * as scale from "./lib/scale";

import * as coordinates from "./lib/coordinates";
import * as indicator from "./lib/indicator";
import * as algorithm from "./lib/algorithm";

import * as annotation from "./lib/annotation";

import * as axes from "./lib/axes";
import * as tooltip from "./lib/tooltip";
import * as helper from "./lib/helper";

import * as interactive from "./lib/interactive";
import * as utils from "./lib/utils";

*/

exports.version = version;
//# sourceMappingURL=index.js.map