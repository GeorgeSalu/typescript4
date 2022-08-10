const sum = function sum(a, b) {
  return a + b
}

const arrowSum = (a, b) => a + b


console.log(sum(5, 5))
console.log(arrowSum(5,5))

const greeting = (name) => {
  if(name) {
    return `ola ${name} !`
  } else {
    return `ola`
  }
}

console.log(greeting('george'))
console.log(greeting())

const testeArrow = () => console.log('testou')

testeArrow()

const user = {
  name: 'theo',
  sayUserName() {
    setTimeout(function() {
      var self = this
      console.log(self)
      console.log(`username: ${self.name}`)
    }, 500)
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this)
      console.log(`username : ${this.name}`)
    }, 700)
  }
}

