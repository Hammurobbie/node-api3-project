const express = require("express");

const server = express();

const userRouter = require("./users/userRouter");

const postRouter = require("./posts/postRouter");

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`<h2>Welcome to the LOTR API!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} }`);
  next();
}

server.use(logger);

server.use("/users", userRouter);

server.use("/posts", postRouter);

// server.use("/", userRouter, postRouter);

module.exports = server;
