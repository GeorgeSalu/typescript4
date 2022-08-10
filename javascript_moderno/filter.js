const arr = [1,2,3,4,5]

const hignNumbers = arr.filter((n) => {
  if(n >= 3) {
    return n
  }
})

console.log(hignNumbers)

const users = [
  { name: 'matheus', available: true },
  { name: 'pedro', available: false },
  { name: 'joao', available: false },
  { name: 'marcos', available: true }
]

const availableUsers = users.filter((user) => user.available)
console.log(availableUsers)