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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log("Hello Typescript!");
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
var ic = new IceCream();
console.log(ic.flavour);
var numVar = 24;
console.log(numVar);
var myVar = "Beep";
myVar = true;
console.log(myVar);
var myArray = [1, 2, 3];
console.log(myArray);
var secondArray = ['4', 7, 15];
console.log(secondArray);
var myTuple = ["ddd", 24];
myTuple = ["Sadegh", 30];
myTuple[0] = "Hamid";
myTuple[1] = 50;
console.log(myTuple);
var myStr = "A string var that can be null";
myStr = null;
console.log(myStr);
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
var Team;
(function (Team) {
    Team[Team["UNITED"] = 10] = "UNITED";
    Team["CHELSEA"] = "Chelsea";
    Team[Team["CITY"] = 25] = "CITY";
    Team[Team["LIVERPOOL"] = 26] = "LIVERPOOL";
})(Team || (Team = {}));
var dir = Direction.UP;
var team = Team.UNITED;
console.log(Direction);
console.log(Team);
console.log(dir);
console.log(team);
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
var Movie = (function () {
    function Movie(id, name, year) {
        this.id = id;
        this.name = name;
        this.year = year;
    }
    Movie.ACTION_MOVIE = 1;
    Movie.COMEDY_MOVIE = 2;
    return Movie;
}());
var IranMovie = (function (_super) {
    __extends(IranMovie, _super);
    function IranMovie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IranMovie.prototype.print = function () {
        console.log("Iran: " + this.name + " - " + this.year);
    };
    return IranMovie;
}(Movie));
var movie = new IranMovie(2510, "A Seperation", 2014);
movie.print();
console.log(Movie.ACTION_MOVIE);
console.log(Movie.COMEDY_MOVIE);
var ProjectSingleton = (function () {
    function ProjectSingleton() {
        this.value = Math.random();
    }
    ProjectSingleton.getInstance = function () {
        if (!this.instance)
            this.instance = new ProjectSingleton;
        return this.instance;
    };
    return ProjectSingleton;
}());
var firstInstance = ProjectSingleton.getInstance();
var secondInstance = ProjectSingleton.getInstance();
console.log(firstInstance === secondInstance);
console.log(firstInstance.value);
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
