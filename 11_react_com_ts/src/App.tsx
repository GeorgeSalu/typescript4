import './App.css';

// 4 - importacao de componentes
import FirstComponent from './components/FirstComponent';

// 5 - desestruturando props
import SecondComponents from './components/SecondComponents';
import Destructuring from './components/Destruturing';

// 6 - useState
import State from './components/State';
import { Category } from './components/Destruturing';
import { createContext } from 'react';
import Context from './components/Context';

// 8 - type
type textOrNull = string | null

// 9 - context
interface IAppContext {
  language: string;
  framework: string;
  project: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  // 1 - variaveis
  const name: string = "george"
  const age: number = 30
  const isWorking: boolean = false

  // 2 - funcoes
  const userGreeting = (name: string): string => {
    return `Ola, ${name}`
  }

  // 8 - type
  const myText:textOrNull = "tem algum texto aqui"
  let mySecondText: textOrNull = null

  // 9 - context
  const contextValue: IAppContext = {
    language: "javascript",
    framework: "express",
    project: 5,
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>Typescript com react</h1>
        <h2>Nome: {name}</h2>
        <h2>Idade: {age}</h2>
        {isWorking && (
          <div>
            <p>Esta trabalhando</p>
          </div>
        )}
        <p>{userGreeting("maria")}</p>
        <FirstComponent />
        <SecondComponents name='george' />
        <Destructuring title='primeiro post' content='algum conteudo' commentsQty={10} tags={["js", "java"]} category={Category.TS} />
        <State />
        {myText}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
