// property decorator
function Emoji(target: IceCream, key: string | symbol){
  let value = target.flavour
  console.log("Emoji Decorator")
  
  Object.defineProperty(target, key, {
    get : () => value,
    set : (newVal) => {
      value = `🍨 ${newVal} 🍨`
    },
    enumerable: true
  })
}

class IceCream {
  @Emoji
  flavour: string = "Vanilla"
}

console.log(new IceCream().flavour)
console.log(new IceCream().flavour)
console.log(new IceCream().flavour)

let iceCream: IceCream = new IceCream()
iceCream.flavour = "Blueberry"
console.log(iceCream.flavour)
console.log("-----------------")


/* Parameter Dcorator */
function funnyLog(target: IceCream, key: string | symbol, parameterIndex: number){
  console.log(target)
  console.log(key)
  console.log(parameterIndex)
  console.log("FunnyLog decorator end")
}

class NiceIceCream {
  flavour: string = "Vanilla"

  getFlavour(@funnyLog type: number){
    console.log(`${type}: ${this.flavour}`)
    console.log('***')
  }
}

console.log("-----------------")
new NiceIceCream().getFlavour(1)
new NiceIceCream().getFlavour(2)
new NiceIceCream().getFlavour(3)