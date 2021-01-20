"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Shape = (function () {
    function Shape(title) {
        this.color = "Orange";
        this.title = title;
    }
    Shape.prototype.getTitle = function () {
        return this.title;
    };
    return Shape;
}());
var shape = new Shape("Circle");
console.log(shape.getTitle());
shape.getTitle = function () { return "Unknown Shape!"; };
console.log(shape.getTitle());
function writable(value) {
    console.log("Writable Decorator!");
    return function (target, propertyKey, descriptor) {
        console.log(target);
        console.log(propertyKey);
        descriptor.writable = value;
    };
}
var AdvancedShape = (function () {
    function AdvancedShape(title) {
        this.color = "Black";
        this.title = title;
    }
    AdvancedShape.prototype.getTitle = function () {
        return this.title;
    };
    __decorate([
        writable(false)
    ], AdvancedShape.prototype, "getTitle", null);
    return AdvancedShape;
}());
var advancedShape = new AdvancedShape("Circle");
console.log(advancedShape.getTitle());
console.log(advancedShape.getTitle());
console.log(advancedShape.getTitle());
