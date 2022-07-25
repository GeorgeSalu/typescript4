// 1 - generics
function showData<T>(arg: T): string {
  return `O dado é : ${arg}`
}

console.log(showData(5))
console.log(showData("testando generics")) 
console.log(showData(true))

// 2 - constraint em generci
function showProductName<T extends {name: string}>(obj: T) {
  return `O nome do produto é : ${obj.name}`
}

const myObj = {name: "porta", cor: "branca"}
const otherProduct = {name: "carro", wheels: 4, engine: 1.0}
const thirdObj = {price: 19.9, category: "roupa"}

console.log(showProductName(myObj))
console.log(showProductName(otherProduct))

// 3 - generics com interface
interface MyObject<T, U, Q> {
  name: string
  wheels: T
  engine: U
  color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = {name: "fusca", wheels: 4, engine: 1.0, color: "branco"}
const myPen: Pen = {name: "caneta bic", wheels: false, engine: false, color: "azul"}

console.log(myCar)
console.log(myPen)

// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, chave: K) {
  return `A chave esta presente no objeto e tem o valor de ${obj[chave]}`
}

const server = {
  hd: '2TB',
  ram: "32gb"
}

console.log(getSomeKey(server, "ram"))

// 5 - keyof type operator
type Character = {name: string, age: number, hasDriveLicense: boolean}
type C = keyof Character

function showCharName(obj: Character, name: C) : string {
  return `${obj[name]}`
}

const myChar: Character = {
  name: "mateus",
  age: 30,
  hasDriveLicense: true
}

console.log(showCharName(myCar, "name"))