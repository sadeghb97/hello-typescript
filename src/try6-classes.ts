/* bahse class ha dar typescript pishrafte tar ast garche be khode js ham dar ayande 
baraye class ha mavarede jadid ehtemalan afzude mishavad */

/* har ozve class dar bala bayad tarif shavad va ya hamanja ya dar constructor bayad meghdardehi shavad */
// property haye class by default dar surate taein nakardane public hastand

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