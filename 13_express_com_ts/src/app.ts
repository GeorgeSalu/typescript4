// 1 - iniciando projeto
//console.log("express + ts !!")

// 2 - init express
import express from 'express'

const app = express()

app.get("/", (req, res) => {
  return res.send("hello express")
})

app.listen(3000, () => {
  console.log("aplicação de ts + express funcionando")
})