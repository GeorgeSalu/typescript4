// 1 - array
let numbers: number[] = [1,2,3]
numbers.push(5)
console.log(numbers)

const nomes: string[] = ["matheus", "george"]
console.log(nomes)

// 2 - outra sintaxe array
const nums: Array<number> = [100, 200, 300]
console.log(nums)


// 3 - any
const arr1: any = [1, "teste", true, [], {nome: "mateus"}]
console.log(arr1)
arr1.push([1,2,3])

// 4 - parametros tipados

function soma(a: number, b: number) {
  console.log(a + b)
}

soma(4,5)

// 5 - retorna de funcao

function greeting(name: string): string {
  return `Ola ${name}`
}

console.log(greeting("george"))
