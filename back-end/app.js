const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

const aptsController = require("./controllers/aptsController")

// ROUTES
app.use("/appointments", aptsController)

app.get("/", (req, res) => {
  res.send("Welcome to your appointments app!");
});

app.get("*", (req, res) => {
  res.status(404).send('Page not Found')
});

module.exports = app;
