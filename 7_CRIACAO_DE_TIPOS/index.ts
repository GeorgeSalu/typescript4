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