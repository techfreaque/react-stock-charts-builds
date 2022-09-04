"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Annotate", {
  enumerable: true,
  get: function get() {
    return _Annotate["default"];
  }
});
Object.defineProperty(exports, "Label", {
  enumerable: true,
  get: function get() {
    return _Label["default"];
  }
});
Object.defineProperty(exports, "LabelAnnotation", {
  enumerable: true,
  get: function get() {
    return _LabelAnnotation["default"];
  }
});
Object.defineProperty(exports, "SvgPathAnnotation", {
  enumerable: true,
  get: function get() {
    return _SvgPathAnnotation["default"];
  }
});
exports.buyPath = buyPath;
exports.sellPath = sellPath;

var _Annotate = _interopRequireDefault(require("./Annotate"));

var _LabelAnnotation = _interopRequireDefault(require("./LabelAnnotation"));

var _SvgPathAnnotation = _interopRequireDefault(require("./SvgPathAnnotation"));

var _Label = _interopRequireDefault(require("./Label"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var halfWidth = 10;
var bottomWidth = 3;
var height = 20;

function buyPath(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return "M".concat(x, " ").concat(y, " ") + "L".concat(x + halfWidth, " ").concat(y + halfWidth, " ") + "L".concat(x + bottomWidth, " ").concat(y + halfWidth, " ") + "L".concat(x + bottomWidth, " ").concat(y + height, " ") + "L".concat(x - bottomWidth, " ").concat(y + height, " ") + "L".concat(x - bottomWidth, " ").concat(y + halfWidth, " ") + "L".concat(x - halfWidth, " ").concat(y + halfWidth, " ") + "Z";
}

function sellPath(_ref2) {
  var x = _ref2.x,
      y = _ref2.y;
  return "M".concat(x, " ").concat(y, " ") + "L".concat(x + halfWidth, " ").concat(y - halfWidth, " ") + "L".concat(x + bottomWidth, " ").concat(y - halfWidth, " ") + "L".concat(x + bottomWidth, " ").concat(y - height, " ") + "L".concat(x - bottomWidth, " ").concat(y - height, " ") + "L".concat(x - bottomWidth, " ").concat(y - halfWidth, " ") + "L".concat(x - halfWidth, " ").concat(y - halfWidth, " ") + "Z";
}
//# sourceMappingURL=index.js.map