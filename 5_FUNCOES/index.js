"use strict";
// 1 - void
function withoutReturn() {
    console.log("esta funcao nao tem retorno");
}
withoutReturn();
// 2 - callback com argumento
function greeting(name) {
    return `Ola ${name}`;
}
function preGreeting(f, userName) {
    console.log("preparando a funcao");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "george");
preGreeting(greeting, "joao");
// 3 - generic function 
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
function mergeObject(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObject({ name: "matheus" }, { age: 30, job: "programer" });
console.log(newObject);
