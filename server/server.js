const express = require('express');
const cookieParser =require("cookie-parser")
const authRouter = require("../auth-routers/authRouter")
const recipesRouter = require("../recipes-router/recipesRouter")

const server = express();

server.use(express.json());
server.use(cookieParser())

server.use("/api/auth", authRouter)
server.use("/api/recipes", recipesRouter)

server.use("/", (req, res) => {
    res.json("API is running, welcome!!")
})

module.exports = server;