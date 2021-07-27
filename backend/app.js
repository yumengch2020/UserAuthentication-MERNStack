const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");

const app = express();

mongoose
  .connect("<your credentials>")
  .then(() => {
    console.log("Connected to databse!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

// app.use((req, res, next) => {
//   console.log("First middleware");
//   next();
// });

app.use("/api/user", userRoutes);

app.use((req, res, next) => {
  res.send("Hello from express");
  next();
});

//export this app

module.exports = app;
