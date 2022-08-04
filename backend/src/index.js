const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
dotEnv.config();
const router = require("./route");
const { MONGO_URL, PORT } = require("../env");

const server = express();
server.use(express.json());
router(server);
mongoose
  .connect(MONGO_URL)
  .then((conn) => server.listen(PORT, () => console.log(`server at ${PORT}`)))
  .catch((err) => console.log(err));