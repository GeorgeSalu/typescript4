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