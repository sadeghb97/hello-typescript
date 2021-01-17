//nahve taeine type

//let numVar = 24
let numVar : number = 24
/* do khate code bala ba ham ham arzand agar dar zamane tarife moteghayyer meghdar dehi anjam
 shavad type be surate khodkar nesbat dade mishavad vali agar meghdar dahi anjam nashavad 
 va type ra ham moshakhas nakarde bashim type an any khahad shod */

 //numVar = true --> compile error
 console.log(numVar)

 /* type any */
 let myVar : any = "Beep" // ham arz ba let myVar va dar khate bad meghdar dehie an
myVar = true
console.log(myVar)


/* type araye ha */
let myArray : number[] = [1, 2, 3]
console.log(myArray)

let secondArray : any[] = ['4', 7, 15]
console.log(secondArray)

/* tuples 
araye ei ke tule an sabet ast. type haye khane haye an ba ham yeki nist. ama type har khane
dar edame nemitavanad taghir konad.
*/

let myTuple : [string, number] = ["ddd", 24]
myTuple = ["Sadegh", 30]
myTuple[0] = "Hamid"
myTuple[1] = 50
console.log(myTuple)

//myTuple = [20, "rrr"] -> compile error
//myTuple[0] = true -> compile error


/* agar niaz dashte bashim yek moteghayyer do type be khosus ra ghabul konad az alamate | 
matavanim estefade konim. masalan agar bekhahil type yek moteghayyer string ya null bashad
dar halate mamul agar type ra string gharar dahim hata null ham darune an nemitavan rikht
*/

let myStr : string | null = "A string var that can be null"
myStr = null
console.log(myStr)
//myStr = false --> compile error

