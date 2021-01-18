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
