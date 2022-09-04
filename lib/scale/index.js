"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultScaleProvider = defaultScaleProvider;
Object.defineProperty(exports, "discontinuousTimeScaleProvider", {
  enumerable: true,
  get: function get() {
    return _discontinuousTimeScaleProvider["default"];
  }
});
Object.defineProperty(exports, "discontinuousTimeScaleProviderBuilder", {
  enumerable: true,
  get: function get() {
    return _discontinuousTimeScaleProvider.discontinuousTimeScaleProviderBuilder;
  }
});
Object.defineProperty(exports, "financeDiscontinuousScale", {
  enumerable: true,
  get: function get() {
    return _financeDiscontinuousScale["default"];
  }
});

var _discontinuousTimeScaleProvider = _interopRequireWildcard(require("./discontinuousTimeScaleProvider"));

var _financeDiscontinuousScale = _interopRequireDefault(require("./financeDiscontinuousScale"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function defaultScaleProvider(xScale) {
  return function (data, xAccessor) {
    return {
      data: data,
      xScale: xScale,
      xAccessor: xAccessor,
      displayXAccessor: xAccessor
    };
  };
}
//# sourceMappingURL=index.js.map