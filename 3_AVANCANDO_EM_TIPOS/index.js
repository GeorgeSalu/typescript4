"use strict";
// 1 - array
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers);
const nomes = ["matheus", "george"];
console.log(nomes);
// 2 - outra sintaxe array
const nums = [100, 200, 300];
console.log(nums);
// 3 - any
const arr1 = [1, "teste", true, [], { nome: "mateus" }];
console.log(arr1);
arr1.push([1, 2, 3]);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// 5 - retorna de funcao
function greeting(name) {
    return `Ola ${name}`;
}
console.log(greeting("george"));
// 6 - funcao anonima
setTimeout(function () {
    const sallary = 1000;
    //console.log(parseFloat(sallary))
}, 200);
// 7 - tipos de objeto
function passCorrdinates(coord) {
    console.log("x coordinates: " + coord.x);
    console.log("x coordinates: " + coord.y);
}
const objCorrd = { x: 21, y: 22 };
passCorrdinates(objCorrd);
const pessoaObj = { nome: "george", surname: "silva" };
//8 - props opcionais
function showNumbers(a, b, c) {
    console.log("A : " + a);
    console.log("B : " + b);
    console.log("C : " + c);
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
// 9 - validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Ola, ${firstName} ${lastName}, tudo bem ?`;
    }
    return `Ola, ${firstName}, tudo bem ?`;
}
console.log(advancedGreeting("mateus", "battisti"));
console.log(advancedGreeting("joaquim"));
// 10 - union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$ ${balance}`);
}
showBalance(100);
showBalance("500");
const arr2 = [1, "teste", true];
// 11 - avancando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "usuario não aprovado";
    }
    return `A funcao do usuerio é : ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O Id é : ${id}`);
}
showId(1);
showId("200");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: "george", age: 12 };
console.log(somePerson);
// 15 - literal types
function showDirection(direction) {
    console.log(`A direcao é : ${direction}`);
}
showDirection("left");
// 16 - non null assertion operation 
const p = document.getElementById("some-p");
console.log(p.innerText);
// 17 - bigint
let n;
n = 1000n;
console.log(n);
console.log(typeof n);
// 18 - symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
