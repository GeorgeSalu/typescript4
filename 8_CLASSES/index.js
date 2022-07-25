"use strict";
// 1 - campos em classes
class User {
}
const matheus = new User();
console.log(matheus);
matheus.name = "mateus";
console.log(matheus);
// 2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("joao", 22);
console.log(joao);
