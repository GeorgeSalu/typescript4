// i - importacao de arquivos
import importGreet from "./greet";

importGreet()

// 2 - import de variavel
import {x} from  "./variable"

console.log(x)

// 3 - multiplas importações
import { a, b, myFunction } from './multiple'

console.log(a)
console.log(b)
myFunction()

// 4 - alias
import { someName as name } from "./changename";

console.log(name)

// 5 - import all
import * as myNumbers from './numbers'

console.log(myNumbers)

// 6 - importando tipos
import { Human } from "./myType";

class USer implements Human {
  name: string;
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const joao = new USer("joao", 10)
console.log(joao)