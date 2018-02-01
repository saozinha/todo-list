const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.use(allowCors) // trata as origens das requisicoes - cors

server.listen(port, function() {
    console.log(`Backend is running port ${port}. `)
})

module.exports = server