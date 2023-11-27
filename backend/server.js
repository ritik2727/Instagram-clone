const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const { connectDB } = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
require("dotenv").config();

connectDB();
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("backend running");
});

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = 5000;
app.listen(5000, () => {
  console.log(`Server listening on ${PORT}`.green.underline);
});
