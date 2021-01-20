"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function auth(constructor) {
    console.log("Auth process!");
    console.log(constructor);
    console.log("Auth Done!");
    console.log("****************");
    console.log();
}
var User = (function () {
    function User(username) {
        this.age = 22;
        this.username = username;
        console.log("User created!");
    }
    User = __decorate([
        auth
    ], User);
    return User;
}());
console.log('------------------');
console.log('------------------');
console.log();
function authDec(constructor) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var rest = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                rest[_i] = arguments[_i];
            }
            var _this = _super.call(this, rest[0]) || this;
            _this.adress = "Bushehr";
            _this.age = 30;
            console.log("authDec final constructor triggered!");
            return _this;
        }
        return class_1;
    }(constructor));
}
var UserDec = (function () {
    function UserDec(username) {
        this.username = username;
    }
    UserDec = __decorate([
        authDec
    ], UserDec);
    return UserDec;
}());
var user1 = new UserDec("Hamidreza");
console.log(user1);
console.log("--------------- ");
var user2 = new UserDec("Masud");
console.log(user2);
console.log("--------------- ");
var user3 = new UserDec("Akbar");
console.log(user3);
console.log("--------------- ");
console.log('------------------');
console.log('------------------');
console.log();
function authDecFactory(value) {
    console.log("adf: " + value);
    return authDec;
}
var AnotherUser = (function () {
    function AnotherUser() {
        this.niceUsername = 'niceSadeghB97';
    }
    AnotherUser = __decorate([
        authDecFactory(false)
    ], AnotherUser);
    return AnotherUser;
}());
var user4 = new AnotherUser();
