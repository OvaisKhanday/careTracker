import express from "express";
import "dotenv/config";
import home from "./routes/home.js";

const app = express();

// support JSON-encoded and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;

// https.createServer({...}, app).listen(port);

// listen to the server
app.listen(port, (req, res) => {
  app.use("/", home);
});

// app.use("/login", login);

// app.use("/driver", driver);
// var http = require('http') , https = require('https') , express = require('express') , app = express();

// http.createServer(app).listen(80); https.createServer({ ... }, app).listen(443);

// app.use("/parent", parent);
