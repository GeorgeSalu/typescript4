"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1 - exemplo decorator
function myDecorator() {
    console.log("inicinando decorator");
    return function (target, propertKey, descriptor) {
        console.log("executando decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log("terminando a execução do metodo");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
// 2 - multiploes decorators
function a() {
    return function (target, propertKey, descriptor) {
        console.log("executando a");
    };
}
function b() {
    return function (target, propertKey, descriptor) {
        console.log("executando b");
    };
}
class MultiplesDecorators {
    testing() {
        console.log("terminando execução");
    }
}
__decorate([
    a(),
    b()
], MultiplesDecorators.prototype, "testing", null);
const multiple = new MultiplesDecorators();
multiple.testing();
// 3 - class decorator
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name === "User") {
        console.log("criando usuario");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const matheus = new User("matheus");
console.log(matheus);
// 4 - method decorator
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return `O nome da maquina é : ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("trator");
console.log(trator);
// 5 - acessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `nome do monstro : ${this.name}`;
    }
    get showAge() {
        return `idade do monstro : ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
const charmander = new Monster("chamander", 10);
console.log(charmander);
// 6 - property decorator
function formatNumber() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID("1");
console.log(newItem);
// 7 - exemplo real com class decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(12);
const newPen = new Pen(1);
console.log(newBook);
console.log(newPen);
// 8 - exemplo real method decorator
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("usuario ja postou");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`post do usuario : ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("meu primeiro post", newPost.alreadyPosted);
newPost.post("meu primeiro post", newPost.alreadyPosted);
