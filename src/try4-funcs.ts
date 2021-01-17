//taeine type vorudi ha ejbari va taeine type khoruji ha ekhtiarist

function specificFunc(x : number, y: number) : number {
  return x + y
}

let fVar : (x : number, y : number) => number = specificFunc
//let fVar = specificFunc --> ham arze khate bala


//example ba arrow function | faghat bayad type hara ezafe konim
//type ra vared nakarde im pas khodkar taein mishavad
let sum = (x : number, y : number) : number => x + y

console.log(specificFunc(10, 20))
console.log(fVar(10, 20))
console.log(sum(10, 20))


/* alave bar default parametr dar ts mitavanim az optional parametr ham estefade konim */
function multiply (x: number, y: number = 20){
  return x * y
}

/* agar az optional parametr estefade kardim nabayad bedune check kardane inke meghdar darad ya na
az an estefade konim. ham chenin optional parametr ha bayad bad az default paramter ha biayand*/
// x?: number --hamarz--> x : number | undefined
function secondMultiply(x: number, y?: number){
  if(y) return x * y
  return x * 50
}

console.log(multiply(10))
console.log(secondMultiply(10))


/* zamani ke bekhahim tavabe ya arrow function ra darune yek moteghayyer berizim va mikhahim noe 
moteghayyer ra ham khodeman moshakhas konim bayad dar noe an default parametr va optional parametr
ra ham set konim vagarna nemitavan az an ha estefade kard va dar surati ke tamame parametr ha ra naferestim
compiler be ma error khahad dad. dar noe moteghayyer nemitavan default parametr ra gharar dad. ama
be jaye hardoe default parametr va optional parametr dar inja mitavan az alamate soal estefade kard*/

let mulVar : (x: number, y?:number) => number = multiply
let secMulVar : (x: number, y?:number) => number = secondMultiply
console.log(mulVar(10))
console.log(secMulVar(10))
