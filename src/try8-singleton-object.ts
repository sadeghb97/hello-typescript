class ProjectSingleton {
  private static instance: ProjectSingleton
  public value: number

  //faghat avalin bar ejra khahad shod
  private constructor(){
    this.value = Math.random()
  }

  //har bar ke object ra darkhast mikonim ejra mishavim
  public static getInstance() : ProjectSingleton {
    if(!this.instance) this.instance = new ProjectSingleton
    return this.instance
  }
}


let firstInstance: ProjectSingleton = ProjectSingleton.getInstance()
let secondInstance: ProjectSingleton = ProjectSingleton.getInstance()
console.log(firstInstance === secondInstance)
console.log(firstInstance.value)