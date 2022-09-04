"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  getLogger: true,
  sign: true,
  yes: true,
  path: true,
  functor: true,
  createVerticalLinearGradient: true,
  getClosestItemIndexes2: true,
  degrees: true,
  radians: true,
  getClosestValue: true,
  find: true,
  d3Window: true,
  MOUSEENTER: true,
  MOUSELEAVE: true,
  MOUSEMOVE: true,
  MOUSEUP: true,
  TOUCHMOVE: true,
  TOUCHEND: true,
  getTouchProps: true,
  getClosestItemIndexes: true,
  getClosestItem: true,
  overlayColors: true,
  head: true,
  tail: true,
  first: true,
  last: true,
  isDefined: true,
  isNotDefined: true,
  isObject: true,
  isArray: true,
  touchPosition: true,
  mousePosition: true,
  clearCanvas: true,
  capitalizeFirst: true,
  hexToRGBA: true,
  toObject: true,
  mapValue: true,
  mapObject: true,
  replaceAtIndex: true,
  forOwn: true,
  noop: true,
  identity: true,
  rebind: true,
  zipper: true,
  merge: true,
  slidingWindow: true,
  shallowEqual: true,
  mappedSlidingWindow: true,
  accumulatingWindow: true,
  PureComponent: true
};
exports.MOUSEUP = exports.MOUSEMOVE = exports.MOUSELEAVE = exports.MOUSEENTER = void 0;
Object.defineProperty(exports, "PureComponent", {
  enumerable: true,
  get: function get() {
    return _PureComponent["default"];
  }
});
exports.TOUCHMOVE = exports.TOUCHEND = void 0;
Object.defineProperty(exports, "accumulatingWindow", {
  enumerable: true,
  get: function get() {
    return _accumulatingWindow["default"];
  }
});
exports.capitalizeFirst = capitalizeFirst;
exports.clearCanvas = clearCanvas;
exports.createVerticalLinearGradient = createVerticalLinearGradient;
exports.d3Window = d3Window;
exports.degrees = degrees;
exports.find = find;
exports.first = void 0;
exports.forOwn = forOwn;
exports.functor = functor;
exports.getClosestItem = getClosestItem;
exports.getClosestItemIndexes = getClosestItemIndexes;
exports.getClosestItemIndexes2 = getClosestItemIndexes2;
exports.getClosestValue = getClosestValue;
exports.getLogger = getLogger;
exports.getTouchProps = getTouchProps;
exports.head = head;
exports.hexToRGBA = hexToRGBA;
Object.defineProperty(exports, "identity", {
  enumerable: true,
  get: function get() {
    return _identity["default"];
  }
});
exports.isArray = void 0;
exports.isDefined = isDefined;
exports.isNotDefined = isNotDefined;
exports.isObject = isObject;
exports.last = last;
exports.mapObject = mapObject;
exports.mapValue = mapValue;
Object.defineProperty(exports, "mappedSlidingWindow", {
  enumerable: true,
  get: function get() {
    return _mappedSlidingWindow["default"];
  }
});
Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function get() {
    return _merge["default"];
  }
});
exports.mousePosition = mousePosition;
Object.defineProperty(exports, "noop", {
  enumerable: true,
  get: function get() {
    return _noop["default"];
  }
});
exports.overlayColors = void 0;
exports.path = path;
exports.radians = radians;
Object.defineProperty(exports, "rebind", {
  enumerable: true,
  get: function get() {
    return _rebind["default"];
  }
});
exports.replaceAtIndex = replaceAtIndex;
Object.defineProperty(exports, "shallowEqual", {
  enumerable: true,
  get: function get() {
    return _shallowEqual["default"];
  }
});
exports.sign = sign;
Object.defineProperty(exports, "slidingWindow", {
  enumerable: true,
  get: function get() {
    return _slidingWindow["default"];
  }
});
exports.tail = tail;
exports.toObject = toObject;
exports.touchPosition = touchPosition;
exports.yes = void 0;
Object.defineProperty(exports, "zipper", {
  enumerable: true,
  get: function get() {
    return _zipper["default"];
  }
});

var _d3Scale = require("d3-scale");

var _d3Array = require("d3-array");

var _noop = _interopRequireDefault(require("./noop"));

var _identity = _interopRequireDefault(require("./identity"));

var _rebind = _interopRequireDefault(require("./rebind"));

var _zipper = _interopRequireDefault(require("./zipper"));

var _merge = _interopRequireDefault(require("./merge"));

var _slidingWindow = _interopRequireDefault(require("./slidingWindow"));

var _shallowEqual = _interopRequireDefault(require("./shallowEqual"));

var _mappedSlidingWindow = _interopRequireDefault(require("./mappedSlidingWindow"));

var _accumulatingWindow = _interopRequireDefault(require("./accumulatingWindow"));

var _PureComponent = _interopRequireDefault(require("./PureComponent"));

var _barWidth = require("./barWidth");

Object.keys(_barWidth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _barWidth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _barWidth[key];
    }
  });
});

var _strokeDasharray = require("./strokeDasharray");

Object.keys(_strokeDasharray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _strokeDasharray[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _strokeDasharray[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function getLogger(prefix) {
  var logger = _noop["default"];

  if (process.env.NODE_ENV !== "production") {
    logger = require("debug")("react-stockcharts:" + prefix);
  }

  return logger;
}

function sign(x) {
  return (x > 0) - (x < 0);
}

var yes = function yes() {
  return true;
};

exports.yes = yes;

function path() {
  var loc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var key = Array.isArray(loc) ? loc : [loc];
  var length = key.length;
  return function (obj, defaultValue) {
    if (length === 0) return isDefined(obj) ? obj : defaultValue;
    var index = 0;

    while (obj != null && index < length) {
      obj = obj[key[index++]];
    }

    return index === length ? obj : defaultValue;
  };
}

function functor(v) {
  return typeof v === "function" ? v : function () {
    return v;
  };
}

function createVerticalLinearGradient(stops) {
  return function (moreProps, ctx) {
    var height = moreProps.chartConfig.height;
    var grd = ctx.createLinearGradient(0, height, 0, 0);
    stops.forEach(function (each) {
      grd.addColorStop(each.stop, each.color);
    });
    return grd;
  };
}

function getClosestItemIndexes2(array, value, accessor) {
  var left = (0, _d3Array.bisector)(accessor).left(array, value);
  left = Math.max(left - 1, 0);
  var right = Math.min(left + 1, array.length - 1);
  var item = accessor(array[left]);
  if (item >= value && item <= value) right = left;
  return {
    left: left,
    right: right
  };
}

function degrees(radians) {
  return radians * 180 / Math.PI;
}

function radians(degrees) {
  return degrees * Math.PI / 180;
}

function getClosestValue(inputValue, currentValue) {
  var values = isArray(inputValue) ? inputValue : [inputValue];
  var diff = values.map(function (each) {
    return each - currentValue;
  }).reduce(function (diff1, diff2) {
    return Math.abs(diff1) < Math.abs(diff2) ? diff1 : diff2;
  });
  return currentValue + diff;
}

function find(list, predicate) {
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

  for (var i = 0; i < list.length; ++i) {
    if (predicate.call(context, list[i], i, list)) {
      return list[i];
    }
  }

  return undefined;
}

function d3Window(node) {
  var d3win = node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
  return d3win;
}

var MOUSEENTER = "mouseenter.interaction";
exports.MOUSEENTER = MOUSEENTER;
var MOUSELEAVE = "mouseleave.interaction";
exports.MOUSELEAVE = MOUSELEAVE;
var MOUSEMOVE = "mousemove.pan";
exports.MOUSEMOVE = MOUSEMOVE;
var MOUSEUP = "mouseup.pan";
exports.MOUSEUP = MOUSEUP;
var TOUCHMOVE = "touchmove.pan";
exports.TOUCHMOVE = TOUCHMOVE;
var TOUCHEND = "touchend.pan touchcancel.pan";
exports.TOUCHEND = TOUCHEND;

function getTouchProps(touch) {
  if (!touch) return {};
  return {
    pageX: touch.pageX,
    pageY: touch.pageY,
    clientX: touch.clientX,
    clientY: touch.clientY
  };
}

function getClosestItemIndexes(array, value, accessor, log) {
  var lo = 0,
      hi = array.length - 1;

  while (hi - lo > 1) {
    var mid = Math.round((lo + hi) / 2);

    if (accessor(array[mid]) <= value) {
      lo = mid;
    } else {
      hi = mid;
    }
  } // for Date object === does not work, so using the <= in combination with >=
  // the same code works for both dates and numbers


  if (accessor(array[lo]).valueOf() === value.valueOf()) hi = lo;
  if (accessor(array[hi]).valueOf() === value.valueOf()) lo = hi;
  if (accessor(array[lo]) < value && accessor(array[hi]) < value) lo = hi;
  if (accessor(array[lo]) > value && accessor(array[hi]) > value) hi = lo;

  if (log) {// console.log(lo, accessor(array[lo]), value, accessor(array[hi]), hi);
    // console.log(accessor(array[lo]), lo, value, accessor(array[lo]) >= value);
    // console.log(value, hi, accessor(array[hi]), accessor(array[lo]) <= value);
  } // var left = value > accessor(array[lo]) ? lo : lo;
  // var right = gte(value, accessor(array[hi])) ? Math.min(hi + 1, array.length - 1) : hi;
  // console.log(value, accessor(array[left]), accessor(array[right]));


  return {
    left: lo,
    right: hi
  };
}

function getClosestItem(array, value, accessor, log) {
  var _getClosestItemIndexe = getClosestItemIndexes(array, value, accessor, log),
      left = _getClosestItemIndexe.left,
      right = _getClosestItemIndexe.right;

  if (left === right) {
    return array[left];
  }

  var closest = Math.abs(accessor(array[left]) - value) < Math.abs(accessor(array[right]) - value) ? array[left] : array[right];

  if (log) {
    console.log(array[left], array[right], closest, left, right);
  }

  return closest;
}

var overlayColors = (0, _d3Scale.scaleOrdinal)(_d3Scale.schemeCategory10);
exports.overlayColors = overlayColors;

function head(array, accessor) {
  if (accessor && array) {
    var value;

    for (var i = 0; i < array.length; i++) {
      value = array[i];
      if (isDefined(accessor(value))) return value;
    }

    return undefined;
  }

  return array ? array[0] : undefined;
}

function tail(array, accessor) {
  if (accessor && array) {
    return array.map(accessor).slice(1);
  }

  return array ? array.slice(1) : undefined;
}

var first = head;
exports.first = first;

function last(array, accessor) {
  if (accessor && array) {
    var value;

    for (var i = array.length - 1; i >= 0; i--) {
      value = array[i];
      if (isDefined(accessor(value))) return value;
    }

    return undefined;
  }

  var length = array ? array.length : 0;
  return length ? array[length - 1] : undefined;
}

function isDefined(d) {
  return d !== null && typeof d != "undefined";
}

function isNotDefined(d) {
  return !isDefined(d);
}

function isObject(d) {
  return isDefined(d) && _typeof(d) === "object" && !Array.isArray(d);
}

var isArray = Array.isArray;
exports.isArray = isArray;

function touchPosition(touch, e) {
  var container = e.target,
      rect = container.getBoundingClientRect(),
      x = touch.clientX - rect.left - container.clientLeft,
      y = touch.clientY - rect.top - container.clientTop,
      xy = [Math.round(x), Math.round(y)];
  return xy;
}

function mousePosition(e, defaultRect) {
  var container = e.currentTarget;
  var rect = defaultRect || container.getBoundingClientRect(),
      x = e.clientX - rect.left - container.clientLeft,
      y = e.clientY - rect.top - container.clientTop,
      xy = [Math.round(x), Math.round(y)];
  return xy;
}

function clearCanvas(canvasList, ratio) {
  canvasList.forEach(function (each) {
    each.setTransform(1, 0, 0, 1, 0, 0);
    each.clearRect(-1, -1, each.canvas.width + 2, each.canvas.height + 2);
    each.scale(ratio, ratio);
  });
}

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

function hexToRGBA(inputHex, opacity) {
  var hex = inputHex.replace("#", "");

  if (inputHex.indexOf("#") > -1 && (hex.length === 3 || hex.length === 6)) {
    var multiplier = hex.length === 3 ? 1 : 2;
    var r = parseInt(hex.substring(0, 1 * multiplier), 16);
    var g = parseInt(hex.substring(1 * multiplier, 2 * multiplier), 16);
    var b = parseInt(hex.substring(2 * multiplier, 3 * multiplier), 16);
    var result = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacity, ")");
    return result;
  }

  return inputHex;
}

function toObject(array) {
  var iteratee = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _identity["default"];
  return array.reduce(function (returnObj, a) {
    var _iteratee = iteratee(a),
        _iteratee2 = _slicedToArray(_iteratee, 2),
        key = _iteratee2[0],
        value = _iteratee2[1];

    return _objectSpread(_objectSpread({}, returnObj), {}, _defineProperty({}, key, value));
  }, {});
} // copied from https://github.com/lodash/lodash/blob/master/mapValue.js


function mapValue(object, iteratee) {
  object = Object(object); // eslint-disable-next-line prefer-const

  var result = {};
  Object.keys(object).forEach(function (key) {
    var mappedValue = iteratee(object[key], key, object);

    if (isDefined(mappedValue)) {
      result[key] = mappedValue;
    }
  });
  return result;
} // copied from https://github.com/lodash/lodash/blob/master/mapObject.js


function mapObject() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var iteratee = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _identity["default"];
  var props = Object.keys(object); // eslint-disable-next-line prefer-const

  var result = new Array(props.length);
  props.forEach(function (key, index) {
    result[index] = iteratee(object[key], key, object);
  });
  return result;
}

function replaceAtIndex(array, index, value) {
  if (isDefined(array) && array.length > index) {
    return array.slice(0, index).concat(value).concat(array.slice(index + 1));
  }

  return array;
} // copied from https://github.com/lodash/lodash/blob/master/forOwn.js


function forOwn(obj, iteratee) {
  var object = Object(obj);
  Object.keys(object).forEach(function (key) {
    return iteratee(object[key], key, object);
  });
}
//# sourceMappingURL=index.js.map