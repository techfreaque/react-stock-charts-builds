"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rebind;

// copied from https://github.com/d3fc/d3fc-rebind/blob/master/src/rebind.js
function createReboundMethod(target, source, name) {
  var method = source[name];

  if (typeof method !== "function") {
    throw new Error("Attempt to rebind ".concat(name, " which isn't a function on the source object"));
  }

  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var value = method.apply(source, args);
    return value === source ? target : value;
  };
}

function rebind(target, source) {
  for (var _len2 = arguments.length, names = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    names[_key2 - 2] = arguments[_key2];
  }

  for (var _i = 0, _names = names; _i < _names.length; _i++) {
    var name = _names[_i];
    target[name] = createReboundMethod(target, source, name);
  }

  return target;
}
//# sourceMappingURL=rebind.js.map