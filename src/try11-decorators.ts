function auth(constructor: Function){
  console.log("Auth process!")
  console.log(constructor)
  console.log("Auth Done!")
  console.log("****************")
  console.log()
}

@auth
class User {
  age: number = 22
  username: string

  constructor(username: string){
    this.username = username
    console.log("User created!")
  }
}

/* deghat konid agar code haminja payan yabad pas az ejra 4 khate marbut be docoratore auth
ejra khahad shod. decoratore yek class mitavanad dar clase nahaei taghirati be vojud biavarad 
deghat konid taghirat dar clase nahaei be vojud mi ayad na har dar va dar object ha. decorator ha
faghat yek vorudi ba type function migirand */

console.log('------------------')
console.log('------------------')
console.log()



function authDec<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  /* baraye inke betavanim yek class az moteghayyere constructor ersbari konim
   type an nabayed functione mamuli bashad. */
  return class extends constructor {
    adress = "Bushehr"; //new property
    age = 30; //override

    constructor(...rest: any[]){
      super(rest[0])
      console.log("authDec final constructor triggered!")
    }
  };
}

@authDec
class UserDec {
  username: string

  constructor(username: string){
    this.username = username
  }
}

let user1: UserDec = new UserDec("Hamidreza")
console.log(user1)
console.log("--------------- ")

let user2: UserDec = new UserDec("Masud")
console.log(user2)
console.log("--------------- ")

let user3: UserDec = new UserDec("Akbar")
console.log(user3)
console.log("--------------- ")

console.log('------------------')
console.log('------------------')
console.log()



/* decorator factory: baraye pas dadane meghdar be decoratore class */
function authDecFactory(value: boolean){
  console.log("adf: " + value)
  return authDec
}

@authDecFactory(false)
class AnotherUser {
  niceUsername = 'niceSadeghB97'
}

let user4: AnotherUser = new AnotherUser()