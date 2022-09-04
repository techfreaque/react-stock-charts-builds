"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _identity = _interopRequireDefault(require("./identity"));

var _zipper = _interopRequireDefault(require("./zipper"));

var _noop = _interopRequireDefault(require("./noop"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
https://github.com/ScottLogic/d3fc/blob/master/src/indicator/algorithm/merge.js

The MIT License (MIT)

Copyright (c) 2014-2015 Scott Logic Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
// applies an algorithm to an array, merging the result back into
// the source array using the given merge function.
function _default() {
  var algorithm = _identity["default"],
      skipUndefined = true,
      merge = _noop["default"];

  function mergeCompute(data) {
    var zip = (0, _zipper["default"])().combine(function (datum, indicator) {
      var result = skipUndefined && (0, _index.isNotDefined)(indicator) ? datum : merge(datum, indicator);
      return (0, _index.isNotDefined)(result) ? datum : result;
    }); // console.log(data);

    return zip(data, algorithm(data));
  }

  mergeCompute.algorithm = function (x) {
    if (!arguments.length) {
      return algorithm;
    }

    algorithm = x;
    return mergeCompute;
  };

  mergeCompute.merge = function (x) {
    if (!arguments.length) {
      return merge;
    }

    merge = x;
    return mergeCompute;
  };

  mergeCompute.skipUndefined = function (x) {
    if (!arguments.length) {
      return skipUndefined;
    }

    skipUndefined = x;
    return mergeCompute;
  };

  return mergeCompute;
}
//# sourceMappingURL=merge.js.map