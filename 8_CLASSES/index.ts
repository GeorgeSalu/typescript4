// 1 - campos em classes
class User {
  name!: string
  age!: number
}

const matheus = new User()
console.log(matheus)
matheus.name="mateus"
console.log(matheus)

// 2 - constructor
class NewUser {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const joao = new NewUser("joao", 22)
console.log(joao)

// 3 - campo readonly
class Car {
  name
  readonly wheels = 4

  constructor(name: string) {
    this.name = name
  }
}

const fusca = new Car("fusca")
console.log(fusca)

// 4 - heranca e super
class Machine {
  name

  constructor(name: string) {
    this.name = name
  }
}

const trator = new Machine("trator")

class KillerMachine extends Machine {
  guns

  constructor(name: string, guns: number) {
    super(name)
    this.guns = guns
  }
}

const destroyer= new KillerMachine("Destroyer", 4)
console.log(destroyer)

// 5 - metodos
class Dwarf {
  name

  constructor(name: string) {
    this.name = name
  }

  greeting() {
    console.log("hey stranger")
  }
}

const jimy = new Dwarf("jimy")
jimy.greeting()
console.log(jimy)

// 6 - this
class Truck {
  model
  hp

  constructor(model: string, hp: number) {
    this.model = model
    this.hp = hp
  }

  showDetails() {
    console.log(`Caminhao do modelo : ${this.model}, que tem ${this.hp} cavalos de potencia`)
  }
}

const volvo = new Truck("volvo", 400)
volvo.showDetails()

// 7 - getters
class Person {
  name
  surname

  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }

  get fullName() {
    return this.name + " " + this.surname
  }
}

const george = new Person("george", "silva")
console.log(george.fullName)