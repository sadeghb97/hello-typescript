"use strict";
function secondFunc(printable) {
    console.log("secondFunc Trigerred!");
    printable.print();
}
function myFunc(printable) {
    console.log("myFunc Trigerred!");
    printable.print();
}
myFunc({
    name: "The last of us: part 2",
    price: 60,
    year: 2020,
    print: function () {
        console.log(this.name + ": " + this.price + "$");
    }
});
secondFunc({
    name: "The last of us: part 2",
    price: 60,
    print: function () {
        console.log(this.name + ": " + this.price + "$");
    }
});
var MyProcess = (function () {
    function MyProcess(processTitle) {
        this.processTitle = processTitle;
    }
    MyProcess.prototype.run = function () {
        console.log(this.processTitle + ": Process executed!");
    };
    return MyProcess;
}());
var mp = new MyProcess("My Specific Task");
mp.run();
var calcFunc = function (x, y) { return x + y; };
console.log(calcFunc(10, 5));
