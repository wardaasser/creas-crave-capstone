const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors());
const bodyParser = require("body-parser");
server.use(bodyParser.json());

server.get(`/`, (req, res) => {
  res.send("Hello Code World the Creas Crave API is Running!");
});

server.listen(4400, () => {
  console.log(`Server Listening on Port 4400`);
});
