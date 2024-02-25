require("dotenv").config();
const express = require("express");
const app = express();

// const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/twitter", (req, res) => {
  res.send("<h1>Welcome To Twitter</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page..</h1> <button>Login</button>");
});

app.listen(process.env.PORT, () => {
  console.log(`Express is running on PORT ${process.env.PORT}`);
});
