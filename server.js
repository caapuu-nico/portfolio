const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const formRoute = require("./src/routes/formRoute")

const server = express();

server.use(cors({
    origin: "http://localhost:3001",
    credentials: true
}))
server.use(express.json());
server.use(morgan("dev"));
server.use(formRoute);


module.exports = server;