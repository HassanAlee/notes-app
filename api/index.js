const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  })
  .catch((error) => console.log(error));
