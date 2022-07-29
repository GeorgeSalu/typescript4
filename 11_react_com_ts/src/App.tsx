import './App.css';

function App() {
  // 1 - variaveis
  const name: string = "george"
  const age: number = 30
  const isWorking: boolean = false

  // 2 - funcoes
  const userGreeting = (name: string): string => {
    return `Ola, ${name}`
  }

  return (
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
    </div>
  );
}

export default App;
