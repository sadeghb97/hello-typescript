"use strict";
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
