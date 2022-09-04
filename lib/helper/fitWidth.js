"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = fitWidth;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function getDisplayName(Series) {
  var name = Series.displayName || Series.name || "Series";
  return name;
}

function fitWidth(WrappedComponent) {
  var withRef = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var minWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

  var ResponsiveComponent = /*#__PURE__*/function (_Component) {
    _inherits(ResponsiveComponent, _Component);

    var _super = _createSuper(ResponsiveComponent);

    function ResponsiveComponent(props) {
      var _this;

      _classCallCheck(this, ResponsiveComponent);

      _this = _super.call(this, props);
      _this.handleWindowResize = _this.handleWindowResize.bind(_assertThisInitialized(_this));
      _this.getWrappedInstance = _this.getWrappedInstance.bind(_assertThisInitialized(_this));
      _this.saveNode = _this.saveNode.bind(_assertThisInitialized(_this));
      _this.setTestCanvas = _this.setTestCanvas.bind(_assertThisInitialized(_this));
      _this.state = {};
      return _this;
    }

    _createClass(ResponsiveComponent, [{
      key: "saveNode",
      value: function saveNode(node) {
        this.node = node;
      }
    }, {
      key: "setTestCanvas",
      value: function setTestCanvas(node) {
        this.testCanvas = node;
      }
    }, {
      key: "getRatio",
      value: function getRatio() {
        if ((0, _utils.isDefined)(this.testCanvas)) {
          var context = this.testCanvas.getContext("2d");
          var devicePixelRatio = window.devicePixelRatio || 1;
          var backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
          var ratio = devicePixelRatio / backingStoreRatio; // console.log("ratio = ", ratio);

          return ratio;
        }

        return 1;
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        window.addEventListener("resize", this.handleWindowResize);
        this.handleWindowResize();
        /* eslint-disable react/no-did-mount-set-state */

        this.setState({
          ratio: this.getRatio()
        });
        /* eslint-enable react/no-did-mount-set-state */
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize);
      }
    }, {
      key: "handleWindowResize",
      value: function handleWindowResize() {
        var _this2 = this;

        this.setState({
          width: 0
        }, function () {
          var el = _this2.node;

          var _window$getComputedSt = window.getComputedStyle(el.parentNode),
              width = _window$getComputedSt.width,
              paddingLeft = _window$getComputedSt.paddingLeft,
              paddingRight = _window$getComputedSt.paddingRight;

          var w = parseFloat(width) - (parseFloat(paddingLeft) + parseFloat(paddingRight));

          _this2.setState({
            width: Math.round(Math.max(w, minWidth))
          });
        });
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        return this.node;
      }
    }, {
      key: "render",
      value: function render() {
        var ref = withRef ? {
          ref: this.saveNode
        } : {};

        if (this.state.width) {
          return /*#__PURE__*/_react["default"].createElement(WrappedComponent, _extends({
            width: this.state.width,
            ratio: this.state.ratio
          }, this.props, ref));
        } else {
          return /*#__PURE__*/_react["default"].createElement("div", ref, /*#__PURE__*/_react["default"].createElement("canvas", {
            ref: this.setTestCanvas
          }));
        }
      }
    }]);

    return ResponsiveComponent;
  }(_react.Component);

  ResponsiveComponent.displayName = "fitWidth(".concat(getDisplayName(WrappedComponent), ")");
  return ResponsiveComponent;
}
//# sourceMappingURL=fitWidth.js.map