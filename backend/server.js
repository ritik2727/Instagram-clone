const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const { connectDB } = require("./config/db");
require("dotenv").config();


connectDB();
const app = express();

app.use(morgan);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("backend running");
});

const PORT = 5000;
app.listen(5000, () => {
  console.log(`Server listening on ${PORT}`.green.underline);
});
