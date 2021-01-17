"use strict";
var specVar = 25;
specVar = true;
console.log(specVar);
var firstObject = {
    fullname: "Sadegh",
    sayHello: function () { return console.log("Hello dude!"); }
};
var secondObject = {
    fullname: "HamidReza",
    sayHello: function () { return console.log("Hello bro!"); }
};
firstObject.sayHello();
secondObject.sayHello();
