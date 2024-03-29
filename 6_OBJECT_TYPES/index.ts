// 1- tipo de objeto para funcao com interface
interface Product {
  name: string
  price: number
  isAvailable: true
}

function showProductDetails(product: Product) {
  console.log(`o nome do produto é ${product.name} e seu preco é ${product.price}`)
  if(product.isAvailable) {
    console.log(`O produto esta disponivel`)
  }
}

const shirt: Product = {
  name: "camisa",
  price: 19.99,
  isAvailable: true
}

showProductDetails(shirt)

// 2- propriedade opcional em interface
interface User {
  email: string,
  role?: string
}

function showUSerDetails(user: User) {
  console.log(`O usuario tem o e-mail : ${user.email}`)
  if(user.role) {
    console.log(`A funcao do usuario é : ${user.role}`)
  }
}

const u1: User = {email: "matues@gmail.com", role: "admin"}
const u2: User = {email: "joao@gmail.com"}

showUSerDetails(u1)
showUSerDetails(u2)

// 3 - readonly
interface Car {
  brand: string
  readonly wheels: number
}

const fusca: Car = {
  brand: "VW",
  wheels: 4
}

console.log(fusca)

// 4 - index signature
interface CoordObject {
  [index: string]: number
}

let coords: CoordObject = {
  x: 10
}

coords.y = 15
console.log(coords)

// 5 - extending interfaces
interface Human {
  name: string
  age: number
}

interface SuperHuman extends Human {
  superpowers: string[]
}

const matheus: Human = {
  name: "matheus",
  age: 30
}

console.log(matheus)

const goku: SuperHuman = {
  name: "Goku",
  age: 50,
  superpowers: ["hamehamera", "gemkidama"]
}

console.log(goku)

//6 - intersection types
interface Character {
  name: string
} 

interface Gun {
  type: string
  caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shortgun",
  caliber: 12
}

console.log(arnold)
console.log(arnold.caliber)

// 7 - readonly array
let myArray: ReadonlyArray<string> = ["maca", "laranja", "banana"]

//myArray[3] = "mamao"
console.log(myArray)
myArray.forEach((item) => {
  console.log("fruta : "+item)
})

// 8 - tuplas
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1,2,3,4,5]
//const myNumberArray2: fiveNumbers = [1,2,3,4,5,6]

// 9 - tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
  console.log(numbers[0])
  console.log(numbers[1])
}

showNumbers([1,2])