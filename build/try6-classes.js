"use strict";
var Employe = (function () {
    function Employe(id, fn, age) {
        this.salary = 5000000;
        this.id = id;
        this.fullname = fn;
        this.age = age;
    }
    Object.defineProperty(Employe.prototype, "salaryDolar", {
        get: function () {
            return this.salary / 25000;
        },
        enumerable: false,
        configurable: true
    });
    return Employe;
}());
var emp = new Employe(1100, "Hesam", 25);
console.log(emp);
console.log(emp.salaryDolar);
var OptimumEmploye = (function () {
    function OptimumEmploye(id, fullname, age) {
        this.id = id;
        this.fullname = fullname;
        this.age = age;
        this.salary = 5000000;
    }
    return OptimumEmploye;
}());
var opEmp = new OptimumEmploye(10, "Vahid", 32);
console.log(opEmp);
var Player = (function () {
    function Player(id, fullname, age) {
        this.id = id;
        this.fullname = fullname;
        this.age = age;
    }
    Object.defineProperty(Player.prototype, "playerToken", {
        get: function () {
            return "Token:" + this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "playerId", {
        set: function (v) {
            this.id = v;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
var player = new Player(20, "Ali Akarimi", 38);
console.log(player);
player.playerId = 2410;
console.log(player.playerToken);
