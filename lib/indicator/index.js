"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "atr", {
  enumerable: true,
  get: function get() {
    return _atr["default"];
  }
});
Object.defineProperty(exports, "bollingerBand", {
  enumerable: true,
  get: function get() {
    return _bollingerBand["default"];
  }
});
Object.defineProperty(exports, "change", {
  enumerable: true,
  get: function get() {
    return _change["default"];
  }
});
Object.defineProperty(exports, "compare", {
  enumerable: true,
  get: function get() {
    return _compare["default"];
  }
});
exports.defaultOptionsForComputation = exports.defaultOptionsForAppearance = void 0;
Object.defineProperty(exports, "elderImpulse", {
  enumerable: true,
  get: function get() {
    return _elderImpulse["default"];
  }
});
Object.defineProperty(exports, "elderRay", {
  enumerable: true,
  get: function get() {
    return _elderRay["default"];
  }
});
Object.defineProperty(exports, "ema", {
  enumerable: true,
  get: function get() {
    return _ema["default"];
  }
});
Object.defineProperty(exports, "forceIndex", {
  enumerable: true,
  get: function get() {
    return _forceIndex["default"];
  }
});
Object.defineProperty(exports, "heikinAshi", {
  enumerable: true,
  get: function get() {
    return _heikinAshi["default"];
  }
});
Object.defineProperty(exports, "kagi", {
  enumerable: true,
  get: function get() {
    return _kagi["default"];
  }
});
Object.defineProperty(exports, "macd", {
  enumerable: true,
  get: function get() {
    return _macd["default"];
  }
});
Object.defineProperty(exports, "pointAndFigure", {
  enumerable: true,
  get: function get() {
    return _pointAndFigure["default"];
  }
});
Object.defineProperty(exports, "renko", {
  enumerable: true,
  get: function get() {
    return _renko["default"];
  }
});
Object.defineProperty(exports, "rsi", {
  enumerable: true,
  get: function get() {
    return _rsi["default"];
  }
});
Object.defineProperty(exports, "sar", {
  enumerable: true,
  get: function get() {
    return _sar["default"];
  }
});
Object.defineProperty(exports, "sma", {
  enumerable: true,
  get: function get() {
    return _sma["default"];
  }
});
Object.defineProperty(exports, "stochasticOscillator", {
  enumerable: true,
  get: function get() {
    return _stochasticOscillator["default"];
  }
});
Object.defineProperty(exports, "tma", {
  enumerable: true,
  get: function get() {
    return _tma["default"];
  }
});
Object.defineProperty(exports, "wma", {
  enumerable: true,
  get: function get() {
    return _wma["default"];
  }
});

var _ema = _interopRequireDefault(require("./ema"));

var _sma = _interopRequireDefault(require("./sma"));

var _wma = _interopRequireDefault(require("./wma"));

var _tma = _interopRequireDefault(require("./tma"));

var _bollingerBand = _interopRequireDefault(require("./bollingerBand"));

var _heikinAshi = _interopRequireDefault(require("./heikinAshi"));

var _kagi = _interopRequireDefault(require("./kagi"));

var _pointAndFigure = _interopRequireDefault(require("./pointAndFigure"));

var _renko = _interopRequireDefault(require("./renko"));

var _macd = _interopRequireDefault(require("./macd"));

var _rsi = _interopRequireDefault(require("./rsi"));

var _atr = _interopRequireDefault(require("./atr"));

var _stochasticOscillator = _interopRequireDefault(require("./stochasticOscillator"));

var _forceIndex = _interopRequireDefault(require("./forceIndex"));

var _sar = _interopRequireDefault(require("./sar"));

var _elderRay = _interopRequireDefault(require("./elderRay"));

var _change = _interopRequireDefault(require("./change"));

var _elderImpulse = _interopRequireDefault(require("./elderImpulse"));

var _compare = _interopRequireDefault(require("./compare"));

var defaultOptionsForComputation = _interopRequireWildcard(require("../calculator/defaultOptionsForComputation"));

exports.defaultOptionsForComputation = defaultOptionsForComputation;

var defaultOptionsForAppearance = _interopRequireWildcard(require("./defaultOptionsForAppearance"));

exports.defaultOptionsForAppearance = defaultOptionsForAppearance;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//# sourceMappingURL=index.js.map