"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMorePropsForChart = getMorePropsForChart;
exports.getSelected = getSelected;
exports.getValueFromOverride = getValueFromOverride;
exports.isHover = isHover;
exports.isHoverForInteractiveType = isHoverForInteractiveType;
exports.saveNodeType = saveNodeType;
exports.terminate = terminate;

var _utils = require("../utils");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getValueFromOverride(override, index, key, defaultValue) {
  if ((0, _utils.isDefined)(override) && override.index === index) return override[key];
  return defaultValue;
}

function terminate() {
  this.setState({
    current: null,
    override: null
  });
}

function saveNodeType(type) {
  var _this = this;

  return function (node) {
    if ((0, _utils.isNotDefined)(node) && (0, _utils.isDefined)(_this.nodes[type])) {
      delete _this.nodes[type];
    } else {
      _this.nodes[type] = node;
    } // console.error(this.nodes)

  };
}

function isHoverForInteractiveType(interactiveType) {
  return function (moreProps) {
    // this has to be function as it is bound to this
    if ((0, _utils.isDefined)(this.nodes)) {
      var selecedNodes = this.nodes.map(function (node) {
        return node.isHover(moreProps);
      });
      var interactive = this.props[interactiveType].map(function (t, idx) {
        return _objectSpread(_objectSpread({}, t), {}, {
          selected: selecedNodes[idx]
        });
      });
      return interactive;
    }
  };
}

function isHover(moreProps) {
  var hovering = (0, _utils.mapObject)(this.nodes, function (node) {
    return node.isHover(moreProps);
  }).reduce(function (a, b) {
    return a || b;
  });
  return hovering;
}

function getMouseXY(moreProps, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      ox = _ref2[0],
      oy = _ref2[1];

  if (Array.isArray(moreProps.mouseXY)) {
    var _moreProps$mouseXY = _slicedToArray(moreProps.mouseXY, 2),
        x = _moreProps$mouseXY[0],
        y = _moreProps$mouseXY[1];

    var mouseXY = [x - ox, y - oy];
    return mouseXY;
  }

  return moreProps.mouseXY;
}

function getMorePropsForChart(moreProps, chartId) {
  var chartConfigList = moreProps.chartConfig;
  var chartConfig = (0, _utils.find)(chartConfigList, function (each) {
    return each.id === chartId;
  });
  var origin = chartConfig.origin;
  var mouseXY = getMouseXY(moreProps, origin);
  return _objectSpread(_objectSpread({}, moreProps), {}, {
    chartConfig: chartConfig,
    mouseXY: mouseXY
  });
}

function getSelected(interactives) {
  var selected = interactives.map(function (each) {
    var objects = each.objects.filter(function (obj) {
      return obj.selected;
    });
    return _objectSpread(_objectSpread({}, each), {}, {
      objects: objects
    });
  }).filter(function (each) {
    return each.objects.length > 0;
  });
  return selected;
}
//# sourceMappingURL=utils.js.map