"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// i - importacao de arquivos
const greet_1 = __importDefault(require("./greet"));
(0, greet_1.default)();
// 2 - import de variavel
const variable_1 = require("./variable");
console.log(variable_1.x);
// 3 - multiplas importações
const multiple_1 = require("./multiple");
console.log(multiple_1.a);
console.log(multiple_1.b);
(0, multiple_1.myFunction)();
// 4 - alias
const changename_1 = require("./changename");
console.log(changename_1.someName);
