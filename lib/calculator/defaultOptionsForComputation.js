"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WMA = exports.TMA = exports.SmoothedForceIndex = exports.SMA = exports.SAR = exports.Renko = exports.RSI = exports.PointAndFigure = exports.MACD = exports.Kagi = exports.FullStochasticOscillator = exports.ForceIndex = exports.ElderRay = exports.ElderImpulse = exports.EMA = exports.Compare = exports.Change = exports.BollingerBand = exports.ATR = void 0;
var BollingerBand = {
  windowSize: 20,
  // source: d => d.close, // "high", "low", "open", "close"
  sourcePath: "close",
  multiplier: 2,
  movingAverageType: "sma"
};
exports.BollingerBand = BollingerBand;
var ATR = {
  windowSize: 14
};
exports.ATR = ATR;
var ForceIndex = {
  sourcePath: "close",
  // "high", "low", "open", "close"
  volumePath: "volume"
};
exports.ForceIndex = ForceIndex;
var SmoothedForceIndex = {
  sourcePath: "close",
  // "high", "low", "open", "close"
  volumePath: "volume",
  smoothingType: "ema",
  smoothingWindow: 13
};
exports.SmoothedForceIndex = SmoothedForceIndex;
var Change = {
  sourcePath: "close" // "high", "low", "open", "close"

};
exports.Change = Change;
var Compare = {
  basePath: "close",
  mainKeys: ["open", "high", "low", "close"],
  compareKeys: []
};
exports.Compare = Compare;
var ElderRay = {
  windowSize: 13,
  // source: d => d.close, // "high", "low", "open", "close"
  sourcePath: "close",
  // "high", "low", "open", "close"
  movingAverageType: "sma"
};
exports.ElderRay = ElderRay;
var ElderImpulse = {
  sourcePath: "close" // "high", "low", "open", "close"

};
exports.ElderImpulse = ElderImpulse;
var SAR = {
  accelerationFactor: 0.02,
  maxAccelerationFactor: 0.2
};
exports.SAR = SAR;
var MACD = {
  fast: 12,
  slow: 26,
  signal: 9,
  // source: d => d.close, // "high", "low", "open", "close"
  sourcePath: "close"
};
exports.MACD = MACD;
var FullStochasticOscillator = {
  windowSize: 12,
  kWindowSize: 3,
  dWindowSize: 3
};
exports.FullStochasticOscillator = FullStochasticOscillator;
var RSI = {
  windowSize: 14,
  // source: d => d.close, // "high", "low", "open", "close"
  sourcePath: "close" // "high", "low", "open", "close"

};
exports.RSI = RSI;
var EMA = {
  // source: d => d.close, // "high", "low", "open", "close"
  sourcePath: "close",
  windowSize: 10
};
exports.EMA = EMA;
var SMA = {
  // source: d => d.close, // "high", "low", "open", "close"
  sourcePath: "close",
  windowSize: 10
};
exports.SMA = SMA;
var WMA = {
  // source: d => d.close, // "high", "low", "open", "close"
  sourcePath: "close",
  windowSize: 10
};
exports.WMA = WMA;
var TMA = {
  // source: d => d.close, // "high", "low", "open", "close"
  sourcePath: "close",
  windowSize: 10
};
exports.TMA = TMA;
var Kagi = {
  reversalType: "ATR",
  // "ATR", "FIXED"
  windowSize: 14,
  reversal: 2,
  sourcePath: "close" // "high", "low", "open", "close"

  /* dateAccessor: d => d.date,
  dateMutator: (d, date) => { d.date = date; }, */

};
exports.Kagi = Kagi;
var Renko = {
  reversalType: "ATR",
  // "ATR", "FIXED"
  windowSize: 14,
  fixedBrickSize: 2,
  sourcePath: "high/low" // "close", "high/low"

  /* source: d => ({ high: d.high, low: d.low }),
  dateAccessor: d => d.date,
  dateMutator: (d, date) => { d.date = date; }, */

};
exports.Renko = Renko;
var PointAndFigure = {
  boxSize: 0.5,
  reversal: 3,
  sourcePath: "high/low" // "close", "high/low"

  /* source: d => ({ high: d.high, low: d.low }), // "close", "hi/lo"
  dateAccessor: d => d.date,
  dateMutator: (d, date) => { d.date = date; }, */

};
exports.PointAndFigure = PointAndFigure;
//# sourceMappingURL=defaultOptionsForComputation.js.map