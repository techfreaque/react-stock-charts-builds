"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ToolTipTSpanLabel(props) {
  return /*#__PURE__*/_react["default"].createElement("tspan", _extends({
    className: "react-stockcharts-tooltip-label"
  }, props), props.children);
}

ToolTipTSpanLabel.propTypes = {
  children: _propTypes["default"].node.isRequired,
  fill: _propTypes["default"].string.isRequired
};
ToolTipTSpanLabel.defaultProps = {
  fill: "#4682B4"
};
var _default = ToolTipTSpanLabel;
exports["default"] = _default;
//# sourceMappingURL=ToolTipTSpanLabel.js.map