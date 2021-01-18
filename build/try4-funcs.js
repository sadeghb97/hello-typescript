"use strict";
function specificFunc(x, y) {
    return x + y;
}
var fVar = specificFunc;
var sum = function (x, y) { return x + y; };
console.log(specificFunc(10, 20));
console.log(fVar(10, 20));
console.log(sum(10, 20));
function multiply(x, y) {
    if (y === void 0) { y = 20; }
    return x * y;
}
function secondMultiply(x, y) {
    if (y)
        return x * y;
    return x * 50;
}
console.log(multiply(10));
console.log(secondMultiply(10));
var mulVar = multiply;
var secMulVar = secondMultiply;
console.log(mulVar(10));
console.log(secMulVar(10));
function niceCalc(a) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var restSum = 0;
    rest.forEach(function (item) { return restSum += item; });
    return restSum * a;
}
console.log(niceCalc(3, 4, 6, 10, 8, 2));
