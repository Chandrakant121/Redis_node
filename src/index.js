const express = require('express')
const app = express()

// npm i redis
// npm i redis@3

app.use(express.json())

const todosController = require('../src/controller/todo.controllers')

app.use('/todos', todosController)

module.exports = app