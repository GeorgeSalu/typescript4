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