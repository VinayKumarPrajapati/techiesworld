const express = require("express");
const { router } = require("./routes/auth");
const { readFileSync } = require("fs");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connected"))
  .catch(() => console.log("db connected"));

app.use(morgan("dev"));
// app.use('/api',router);
readFileSync("./routes").map((r) => app.use("/api", require("./routes/${r}")));

const port = process.env.PORT || 800;

app.listen(port, () => console.log(`Connecting to techies at ${port}`));
