import express from "express";
import http from "http";
import https from "https";
import "dotenv/config";
import fs from "fs";
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

// https
//   .createServer(
//     // Provide the private and public key to the server by reading each
//     // file's content with the readFileSync() method.
//     {
//       key: fs.readFileSync("key.pem"),
//       cert: fs.readFileSync("cert.pem"),
//     },
//     app
//   )
//   .listen(port, (req, res, next) => {
//     app.use("/", home);
//   });
