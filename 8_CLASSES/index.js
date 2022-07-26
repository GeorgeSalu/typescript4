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
// 7 - getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const george = new Person("george", "silva");
console.log(george.fullName);
// 8 - setters
class Coords {
    set fillx(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("x inserido com sucesso");
    }
    set filly(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("y inserido com sucesso");
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillx = 15;
myCoords.filly = 10;
console.log(myCoords);
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do post é : ${this.title}`;
    }
}
const myPost = new blogPost("hello world");
console.log(myPost.itemTitle());
// 10 0 override de metodos
class Base {
    someMethod() {
        console.log("Alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("testando alguma coisa");
    }
}
const myObject = new Nova();
myObject.someMethod();
// 11 - public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance);
// 12 - protected
class E {
    constructor() {
        this.x = 13;
    }
}
class F extends E {
    showX() {
        console.log("x " + this.x);
    }
}
const fInstance = new F();
fInstance.showX();
// 13 - private
class PrivateClass {
    constructor() {
        this.name = "private";
    }
    showName() {
        return this.name;
    }
}
const pObj = new PrivateClass();
console.log(pObj.showName());
// 14 - static members
class StaticMembers {
    static staticMethod() {
        console.log("este é um metodo estatico");
    }
}
StaticMembers.prop = "Teste static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 - generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}
const newItem = new Item("Caixa", "supresa");
console.log(newItem);
// 16 - parameter properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qtd total : ${this.qty}`;
    }
    get showPrice() {
        return `Qtd total : ${this.price}`;
    }
}
const newShirt = new ParameterProperties("camisa", 5, 19.9);
console.log(newShirt);
console.log(newShirt.showPrice);
console.log(newShirt.showQty);
// 17 - class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("jones");
console.log(pessoa);
// 18 - abstract class
class AbstractClass {
}
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é : ${this.name}`);
    }
}
const newAbstractObject = new AbstractExample("josias");
newAbstractObject.showName();
