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

// 6 - funcao anonima
setTimeout(function() {
  const sallary: number = 1000

  //console.log(parseFloat(sallary))
}, 200)

// 7 - tipos de objeto
function passCorrdinates(coord: {x:number, y:number}) {
  console.log("x coordinates: "+coord.x)
  console.log("x coordinates: "+coord.y)
}

const objCorrd = {x : 21, y: 22}

passCorrdinates(objCorrd)

const pessoaObj: {nome: string, surname: string} = {nome: "george", surname: "silva"}

//8 - props opcionais
function showNumbers(a: number, b: number, c?: number) {
  console.log("A : "+a)
  console.log("B : "+b)
  console.log("C : "+c)
}

showNumbers(1,2,3)
showNumbers(1,2)

// 9 - validando argumento opcional
function advancedGreeting(firstName: string, lastName?: string) {
  if(lastName !== undefined) {
    return `Ola, ${firstName} ${lastName}, tudo bem ?`
  }
  return `Ola, ${firstName}, tudo bem ?`
}

console.log(advancedGreeting("mateus", "battisti"))
console.log(advancedGreeting("joaquim"))
