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

// 6 - property decorator
function formatNumber() {
  return function(target: Object, propertKey: string) {
    let value: string

    const getter = function() {
      return value
    };

    const setter = function(newVal: string) {
      value = newVal.padStart(5, "0")
    };

    Object.defineProperty(target, propertKey, {
      set: setter,
      get: getter,
    });

  }
}

class ID {
  @formatNumber()
  id;

  constructor(id: string) {
    this.id = id
  }
}

const newItem = new ID("1")
console.log(newItem)

// 7 - exemplo real com class decorator
function createdDate(created: Function) {
  created.prototype.createdAt = new Date()
}

@createdDate
class Book {
  id 

  constructor(id: number) {
    this.id = id
  }
}

@createdDate
class Pen {
  id 

  constructor(id: number) {
    this.id = id
  }
}

const newBook = new Book(12)
const newPen = new Pen(1)

console.log(newBook)
console.log(newPen)

// 8 - exemplo real method decorator
function checkIfUserPosted() {
  return function(target: Object, key: string | Symbol, descriptor: PropertyDescriptor) {
    const childFunction = descriptor.value
    console.log(childFunction)
    descriptor.value = function(...args: any[]) {
      if(args[1] === true) {
        console.log("usuario ja postou")
        return null
      } else {
        return childFunction.apply(this, args)
      }
    }
    return descriptor
  }
}

class Post {
  alreadyPosted = false

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true
    console.log(`post do usuario : ${content}`)
  }
}

const newPost = new Post()
newPost.post("meu primeiro post", newPost.alreadyPosted);
newPost.post("meu primeiro post", newPost.alreadyPosted);

// 9 - exemplo real property decorator
function Max(limit: number) {
  return function(target: Object, propertKey: string) {
    let value: string

    const getter = function() {
      return value
    }

    const setter = function(newVal: string) {
      if(newVal.length > limit) {
        console.log(`o valor deve ter no maximo ${limit} digitos`)
        return
      } else {
        value = newVal
      }
    }

    Object.defineProperty(target, propertKey, {
      get: getter,
      set: setter
    })
  }
}

class Admin {
  @Max(10)
  username;

  constructor(username: string) {
    this.username = username
  }
} 

let pedro = new Admin("pedroaddaasssssssasa")
console.log(pedro)