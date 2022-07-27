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

// 2 - multiploes decorators
function a() {
  return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
    console.log("executando a")
  }
}

function b() {
  return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
    console.log("executando b")
  }
}

class MultiplesDecorators {
  @a()
  @b()
  testing() {
    console.log("terminando execução")
  }
}

const multiple = new MultiplesDecorators()
multiple.testing()

// 3 - class decorator
function classDec(constructor: Function) {
  console.log(constructor)
  if(constructor.name === "User") {
    console.log("criando usuario")
  }
}

@classDec
class User {
  name

  constructor(name: string) {
    this.name = name
  }
}

const matheus = new User("matheus")
console.log(matheus)