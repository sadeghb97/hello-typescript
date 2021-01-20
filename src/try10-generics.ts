// estefade az generic dar tavabe
/* be jaye estefade az type any ya estefdae az pipe(|) baraye tarkibe
chand type mitavan az generic ham estefade kard. */

function printValue<T, U extends Number | Boolean>(x: T, value: U) : U{
  console.log(`(${x}): ${value}`)
  return value
}

let x = printValue<number, number>(20, 200)
console.log(x)
let y = printValue<string, boolean>('Accepted', true)
console.log(y)



function arrayToString<T extends number | string>(ar: T[]) : string{
  let out: string = ""
  ar.forEach((item) => {
    if(out) out += " | "
    out += item
  })
  return out
}

//let res = arrayToString([true, false, false]) --> compile error

/* zamane estefade niazi nist hatman type generic ra serahatan moshakhas konim. in kar be surate khodkar
ham anjam khahad shod */

let res = arrayToString(['ab', 'cd', 'ef']) // noe generic be surate khodkar string khahad shod
console.log(res + " --> " + res.length)

res = arrayToString<number>([1, 2, 3])
console.log(res + " --> " + res.length)



/* dar type tavabe ham mitavan az generic estefade kard */
type MyFuncType = <T, U extends number | boolean>(x: T, y: U) => U

interface MyFuncInterface {
  <T, U extends number | boolean>(x: T, y: U) : U
}

/* tabe haye ruberuye in do meteghayyer bayad az generic estefade karde bashand 
vagarna compile error migirim */
let func1: MyFuncType = printValue
let func2: MyFuncInterface = printValue



/* tafavote estefade az generic be jaye estefade mostaghim az type, any ya pipe chist?
estefade az generic be meghdare ziadi mitavanad baese khanaei code haye ma shavad
ham chenin az dide compiler vaghti az generic estefade mikonim mitavand be surate zemni
noe barkhi az var hara tashkhis dahad va editor ba autocomplete be ma komak khahad kard */

function firstReturner<T extends number | string>(x: T) : T {
  return x
}

function secReturner(x : number | string) : number | string {
  return x
}

console.log(firstReturner(25).toFixed(6)) // compiler be surate zemni midanad natije firstReturner yek number ast
//secReturner(50).toFixed(6) --> compile error



/* generic ha dar class ha */
class MyAdvancedArrayList<T>{
  constructor(public data: T[]){ // iname mishe: public data: Array<T>
  }

  getFirst() : T | null{
    return this.data.length > 0 ? this.data[0] : null
  }
}

//<number> aval ejbari va dovomi ekhtiarist
let ar: MyAdvancedArrayList<number> = new MyAdvancedArrayList<number>([44.748, 54.745])
console.log(ar.getFirst()?.toFixed(8))