// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const mongoString = process.env.DATABASE_URL;

// mongoose.connect(mongoString);
// const database = mongoose.connection;

// database.on("error", (error) => {
//   console.log(error);
// });

// database.once("connected", () => {
//   console.log("Database Connected");
// });

const url = process.env.DATABASE_URL;
// const express = require("express");
const mongoose = require("mongoose"); // new

// Connect to MongoDB database
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((connect) => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
