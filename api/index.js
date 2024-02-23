const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.routes.js");
const app = express();
const port = process.env.PORT;
// middlewares
app.use(express.json());
// db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  })
  .catch((error) => console.log(error));
// routes
app.use("/api/v1/user", userRoutes);
