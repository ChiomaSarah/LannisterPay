const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./db");
// connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const authRouter = require("./routes/auth");
const apiRouter = require("./routes/api");

// app.use("/auth/", authRouter);
app.use("/payload", apiRouter);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 2007;
app.listen(PORT, () => {
  console.log(`app started on port ${PORT}`);
});
