// 1 - iniciando projeto
//console.log("express + ts !!")

// 2 - init express
import express, {Request, Response} from 'express'
import { read } from 'fs'

const app = express()

// 3 - rota com post
app.use(express.json())

app.get("/", (req, res) => {
  return res.send("hello express")
})

// 3 - rota com post
app.post("/api/product", (req, res) => {
  console.log(req.body);

  return res.send("produto adicionado")
})

// 4 - rota para todos os verbos
app.all("/api/product/check", (req, res) => {
  if(req.method === "POST") {
    return res.send("inseriu algum registro")
  } else if(req.method === "GET") {
    return res.send("leu algum registro")
  } else {
    return res.send("nao podemos realizar esta operacao")
  }
})

// 5 - interface do express
app.get("/api/interfaces", (req: Request, res: Response) => {
  return res.send("utilizando as interfaces")
})

// 6 - enviando json
app.get("/api/json", (req: Request, res: Response) => {
  return res.json({
    nome: "shirt",
    price: 30.99,
    color: "blue",
    sizes: [1,2,3]
  })
})

app.listen(3000, () => {
  console.log("aplicação de ts + express funcionando")
})