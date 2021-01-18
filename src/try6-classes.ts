/* bahse class ha dar typescript pishrafte tar ast garche be khode js ham dar ayande 
baraye class ha mavarede jadid ehtemalan afzude mishavad */

/* har ozve class dar bala bayad tarif shavad va ya hamanja ya dar constructor bayad meghdardehi shavad */
// property haye class by default dar surate taein nakardane public hastand
/* encapsulation dar typescript ba zaban haye digar tafavoti nadarad va az 3 modifire 
public, protected va private mitavan estefade kard */

class Employe {
  private id : number
  fullname : string
  public age : number
  salary : number = 5000000

  constructor(id: number, fn: string, age: number){
    this.id = id
    this.fullname = fn
    this.age = age
  }

  get salaryDolar() : number {
    return this.salary / 25000
  }
}

//har class khod yek type mahsub mishavad
let emp : Employe = new Employe(1100, "Hesam", 25)
console.log(emp)
console.log(emp.salaryDolar)
//console.log(emp.id)


/* neveshtane kutah tare class ha ba estefade az modifire ha 
vaghti dar vorudie constructor az modifire estefade mikonim manaye khasi darad */
//clase paein taghriban ham arze clase balast 
class OptimumEmploye {
  salary: number = 5000000

  constructor(private id: number, public fullname: string, public age: number){}
}

let opEmp = new OptimumEmploye(10, "Vahid", 32)
console.log(opEmp)


/* estefade az setter va getter dar class ha 
in mafhum tafavote chandani ba mafahime es6 nadarad */
class Player {
  constructor(private id: number, public fullname: string, public age: number){}

  get playerToken() : string{
    return "Token:" + this.id
  }

  set playerId(v: number){
    //do something --> check kardane inke ide jadid tekrari nabashad
    this.id = v
  }
}

let player = new Player(20, "Ali Akarimi", 38)
console.log(player)

player.playerId = 2410
console.log(player.playerToken)



