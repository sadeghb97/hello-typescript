class Shape {
  public color: string = "Orange"
  private title: string

  constructor(title: string){
    this.title = title
  }

  getTitle(){
    return this.title
  }
}

let shape: Shape = new Shape("Circle")
console.log(shape.getTitle())

shape.getTitle = () => "Unknown Shape!"
console.log(shape.getTitle())



/* decorator baraye method ha */

function writable(value: boolean) {
  console.log("Writable Decorator!")
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(target)
    console.log(propertyKey)
    descriptor.writable = value;
  };
}

class AdvancedShape {
  public color: string = "Black"
  private title: string

  constructor(title: string){
    this.title = title
  }

  @writable(false)
  getTitle(){
    return this.title
  }
}

let advancedShape: AdvancedShape = new AdvancedShape("Circle")
console.log(advancedShape.getTitle())

//advancedShape.getTitle = () => "Unknown Shape!" -> runtime error
console.log(advancedShape.getTitle())
console.log(advancedShape.getTitle())