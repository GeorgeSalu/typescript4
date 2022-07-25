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