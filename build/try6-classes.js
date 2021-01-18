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
