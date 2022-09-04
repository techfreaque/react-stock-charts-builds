"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themes = exports.MACD = exports.FullStochasticOscillator = exports.ElderImpulse = exports.BollingerBand = void 0;
var themes = {
  light: {
    BollingerBand: {
      stroke: {
        top: "#964B00",
        middle: "#000000",
        bottom: "#964B00"
      },
      fill: "#4682B4"
    },
    ElderImpulse: {
      stroke: {
        up: "#6BA583",
        down: "#FF0000",
        neutral: "#0000FF"
      }
    },
    MACD: {
      fill: {
        divergence: "#4682B4"
      },
      stroke: {
        macd: "#FF0000",
        signal: "#00F300"
      }
    },
    FullStochasticOscillator: {
      stroke: {
        top: "#37a600",
        middle: "#b8ab00",
        bottom: "#37a600",
        dLine: "#17becf",
        kLine: "#ff7f0e"
      }
    }
  },
  dark: {
    BollingerBand: {
      stroke: {
        top: "#964B00",
        middle: "#FF6600",
        bottom: "#964B00"
      },
      fill: "#4682B4"
    },
    ElderImpulse: {
      stroke: {
        up: "#6BA583",
        down: "#FF0000",
        neutral: "#0000FF"
      }
    },
    MACD: {
      fill: {
        divergence: "#FF6600"
      },
      stroke: {
        macd: "#ea2bff",
        signal: "#74d400"
      }
    },
    FullStochasticOscillator: {
      stroke: {
        top: "#37a600",
        middle: "#b8ab00",
        bottom: "#37a600",
        dLine: "#ea2bff",
        kLine: "#74d400"
      }
    }
  }
};
exports.themes = themes;
var BollingerBand = themes.light.BollingerBand;
exports.BollingerBand = BollingerBand;
var ElderImpulse = themes.light.ElderImpulse;
exports.ElderImpulse = ElderImpulse;
var MACD = themes.light.MACD;
exports.MACD = MACD;
var FullStochasticOscillator = themes.light.FullStochasticOscillator;
exports.FullStochasticOscillator = FullStochasticOscillator;
//# sourceMappingURL=defaultOptionsForAppearance.js.map