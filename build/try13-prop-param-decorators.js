"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Emoji(target, key) {
    var value = target.flavour;
    console.log("Emoji Decorator");
    Object.defineProperty(target, key, {
        get: function () { return value; },
        set: function (newVal) {
            value = "\uD83C\uDF68 " + newVal + " \uD83C\uDF68";
        },
        enumerable: true
    });
}
var IceCream = (function () {
    function IceCream() {
        this.flavour = "Vanilla";
    }
    __decorate([
        Emoji
    ], IceCream.prototype, "flavour", void 0);
    return IceCream;
}());
console.log(new IceCream().flavour);
console.log(new IceCream().flavour);
console.log(new IceCream().flavour);
var iceCream = new IceCream();
iceCream.flavour = "Blueberry";
console.log(iceCream.flavour);
console.log("-----------------");
function funnyLog(target, key, parameterIndex) {
    console.log(target);
    console.log(key);
    console.log(parameterIndex);
    console.log("FunnyLog decorator end");
}
var NiceIceCream = (function () {
    function NiceIceCream() {
        this.flavour = "Vanilla";
    }
    NiceIceCream.prototype.getFlavour = function (type) {
        console.log(type + ": " + this.flavour);
        console.log('***');
    };
    __decorate([
        __param(0, funnyLog)
    ], NiceIceCream.prototype, "getFlavour", null);
    return NiceIceCream;
}());
console.log("-----------------");
new NiceIceCream().getFlavour(1);
new NiceIceCream().getFlavour(2);
new NiceIceCream().getFlavour(3);
