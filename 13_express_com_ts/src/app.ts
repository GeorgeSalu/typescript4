// 1 - iniciando projeto
//console.log("express + ts !!")

// 2 - init express
import express from 'express'

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

app.listen(3000, () => {
  console.log("aplicação de ts + express funcionando")
})