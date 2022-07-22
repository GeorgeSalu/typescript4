// 1 - generics
function showData<T>(arg: T): string {
  return `O dado é : ${arg}`
}

console.log(showData(5))
console.log(showData("testando generics")) 
console.log(showData(true))