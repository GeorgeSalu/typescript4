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

// 4 - method decorator
function enumerable(value: boolean) {
  return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value
  }
}

class Machine {
  name

  constructor(name: string) {
    this.name = name
  }

  @enumerable(false)
  showName() {
    return `O nome da maquina é : ${this.name}`
  }
}

const trator = new Machine("trator")
console.log(trator)

// 5 - acessor decorator
class Monster {
  name?;
  age?;

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  @enumerable(true)
  get showName() {
    return `nome do monstro : ${this.name}`
  }

  @enumerable(false)
  get showAge() {
    return `idade do monstro : ${this.age}`
  }
}

const charmander = new Monster("chamander", 10)
console.log(charmander)