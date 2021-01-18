/* interface ha ra dar typescript ba keyworde new nemisazand. interface dar typescript mesle 
yek gharardad ast va zamani ke migueim vorudi yek object az interface Printable ast
yani bayad property ha method haye darune an ra bar asase interface piade karde bashad */
//nokte: bazi ozv hara optional ham mitavan kard
interface Printable {
  name: string
  price: number
  print() : void,

  /* yek var az jense Printable hatman bayad hamin 3 ozv ra dashte bashad na kamtar na bishtar
  agar mikhahim alave bar in 3 betavanad azaei digar ham dashte bashad mitavanim az yek signature 
  manade code paein estefade konim. in signature miguyad ozv haye object bayad kelide reshte ei va type
  az har jensi dashte bashad -> deghat konid in signature ba 3 ozve tarif shode dar khode interface 
  ham bayad motaghebat dashte bashad */
  [propName : string] : any
}

/* be jaye in piadesazi mitavan az interface estefade konim va yek function hamarz 
ba in tabe ijad konim */ 
function secondFunc(printable: {name: string, price: number, print: () => void}){
  console.log("secondFunc Trigerred!")
  printable.print()
}

function myFunc(printable: Printable){
  console.log("myFunc Trigerred!")
  printable.print()
}


myFunc({
  name: "The last of us: part 2",
  price: 60,
  year: 2020,
  
  print(){
    console.log(`${this.name}: ${this.price}$`)
  }
})

secondFunc({
  name: "The last of us: part 2",
  price: 60,
  //year: 2020, --> compile error
  
  print(){
    console.log(`${this.name}: ${this.price}$`)
  }
})


/* piade kardane yek class bar asase yek interface ba estefade az keyworde implements  */
interface Runnable {
  run() : void
}

class MyProcess implements Runnable {
  constructor(public processTitle: string){}
  
  run(){
    console.log(this.processTitle + ": Process executed!")
  }
}

let mp : Runnable = new MyProcess("My Specific Task")
mp.run()


/* interface baraye type tavabe */
interface Calculable {
  (x: number, y: number) : number
}

let calcFunc : Calculable = (x: number, y: number) => x + y
console.log(calcFunc(10, 5))