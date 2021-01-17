enum Direction {
  UP, //def -> 0
  DOWN, //def -> 1
  LEFT, //def -> 2
  RIGHT //def -> 3
}

enum Team {
  UNITED = 10,
  CHELSEA = 'Chelsea',
  CITY = 25, // --> in hatman bayad meghdar dashte bashad chun bade yek ozve reshte ei umade
  LIVERPOOL // def --> 26
}

//yek enum mesle yek objecte readonly ast


let dir : Direction = Direction.UP
let team : Team = Team.UNITED
console.log(Direction)
console.log(Team)
console.log(dir)
console.log(team)
