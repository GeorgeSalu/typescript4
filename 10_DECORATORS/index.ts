// 1 - exemplo decorator
function myDecorator() {
  console.log("inicinando decorator")
  return function (target: any, propertKey: string, descriptor: PropertyDescriptor) {
    console.log("executando decorator")
    console.log(target)
    console.log(propertKey)
    console.log(descriptor)
  }
}

class myClass {
  @myDecorator()
  testing() {
    console.log("terminando a execução do metodo")
  }  
}

const myObj = new myClass();
myObj.testing()