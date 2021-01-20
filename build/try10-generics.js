"use strict";
var _a;
function printValue(x, value) {
    console.log("(" + x + "): " + value);
    return value;
}
var x = printValue(20, 200);
console.log(x);
var y = printValue('Accepted', true);
console.log(y);
function arrayToString(ar) {
    var out = "";
    ar.forEach(function (item) {
        if (out)
            out += " | ";
        out += item;
    });
    return out;
}
var res = arrayToString(['ab', 'cd', 'ef']);
console.log(res + " --> " + res.length);
res = arrayToString([1, 2, 3]);
console.log(res + " --> " + res.length);
var func1 = printValue;
var func2 = printValue;
function firstReturner(x) {
    return x;
}
function secReturner(x) {
    return x;
}
console.log(firstReturner(25).toFixed(6));
var MyAdvancedArrayList = (function () {
    function MyAdvancedArrayList(data) {
        this.data = data;
    }
    MyAdvancedArrayList.prototype.getFirst = function () {
        return this.data.length > 0 ? this.data[0] : null;
    };
    return MyAdvancedArrayList;
}());
var ar = new MyAdvancedArrayList([44.748, 54.745]);
console.log((_a = ar.getFirst()) === null || _a === void 0 ? void 0 : _a.toFixed(8));
