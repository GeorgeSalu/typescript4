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