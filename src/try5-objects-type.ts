/* ba tavajoh be inke dar type script gahi type ha ham tulani mishavand va mitavanand
baese tekrare ziade code ha shavand mitavan ba keyworde type yek type jadid tarif kard 
va zamane tarife moteghayyer az anha estefade kard */

type MySpecificType = number | boolean
let specVar : MySpecificType = 25
specVar = true
console.log(specVar)

/* agar bekhahim dar yek var object berizim mitavanim type fild haye an ra ham moshakhas konim. agar
type ra moshakhas konim hata filde ezafi ham darune object nabayad bashad */

type MyObjectType = {
  fullname : string,
  sayHello : () => void
}

//let firstObject : MyObjectType = {} --> compile error
let firstObject : MyObjectType = {
  fullname : "Sadegh",
  //age: 24, --> compile error
  sayHello : () => console.log("Hello dude!")
}

let secondObject : MyObjectType = {
  fullname : "HamidReza",
  sayHello : () => console.log("Hello bro!")
}

firstObject.sayHello()
secondObject.sayHello()