require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const errorHandlerMiddleware = require("./middleware/error-handler");

const imagesRouter = require("./routes/images");

app.use(express.json());

app.use("/api/v1/images", imagesRouter);

app.use(errorHandlerMiddleware);

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server is listening on ${port}.`));
