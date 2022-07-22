// 1 - void
function withoutReturn(): void {
  console.log("esta funcao nao tem retorno")
}

withoutReturn()

// 2 - callback com argumento
function greeting(name: string): string {
  return `Ola ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log("preparando a funcao")

  const greet = f(userName)

  console.log(greet)
}

preGreeting(greeting, "george")
preGreeting(greeting, "joao")

// 3 - generic function 
function firstElement<T>(arr: T[]): T {
  return arr[0]
}

console.log(firstElement([1,2,3]))
console.log(firstElement(["a","b","c"]))

function mergeObject<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2
  }
}

const newObject = mergeObject({ name: "matheus" }, {age: 30, job: "programer"})
console.log(newObject)

// 4 - constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T

  if(+a > +b) {
    biggest = a
  } else {
    biggest = b
  }

  return biggest
}

console.log(biggestNumber(5,3))
console.log(biggestNumber("12","5"))

// 5 - especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2)
}

console.log(mergeArrays([1,2,3,], [5,6]))
console.log(mergeArrays<number | string>([1,2,3,], ["teste","testando"]))

// 6 - parametros opcionais
function modernGreeting(name: string, greet?: string) {
  if(greet) {
    return `Ola ${greet} ${name}, tudo bem ?`
  }

  return `Ola ${name}, tudo bem`
}

console.log(modernGreeting("george"))

// 7 - paramentro default
function somaDefault(n: number, m = 10) {
  return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(10, 12))

// 8 - unknown
function doSomething(x: unknown) {
  if(Array.isArray(x)) {
    console.log(x[0])
  } else if(typeof x === "number") {
    console.log("x é um numero")
  }
}

doSomething([1,2,3])
doSomething(5)

// 9 - never
function showErrorMessage(msg: string): never {
  throw new Error(msg)
}

// 10 - rest operator
function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1,2,3,4,5))