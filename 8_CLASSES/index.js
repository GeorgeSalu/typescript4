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
// 3 - campo readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("fusca");
console.log(fusca);
// 4 - heranca e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(destroyer);
// 5 - metodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("hey stranger");
    }
}
const jimy = new Dwarf("jimy");
jimy.greeting();
console.log(jimy);
// 6 - this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhao do modelo : ${this.model}, que tem ${this.hp} cavalos de potencia`);
    }
}
const volvo = new Truck("volvo", 400);
volvo.showDetails();
