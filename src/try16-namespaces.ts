/*
baraye jologiri az hamnam shodane nam haye class ha, tavabe va moteghayyer ha mitavan az 
namespace estefade kard.
*/

namespace GlobalNamespace {
  //birune namespace be an dastresi nadarim chun export nashode
  let myVar = "Beeeep"

  //birune namespace be an dastresi darim chun export shode ast
  export function colorLog(message: string, color:string) : void {
    console.log(`%c ${message}`, `color:${color}`)
  }
}

GlobalNamespace.colorLog("Some purple log!", "purple")
