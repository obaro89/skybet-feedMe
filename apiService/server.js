const express = require("express");
const mongoose = require("mongoose");
const connectToDatabase = require("./database/database");
const Event = require("./models/event");

connectToDatabase();
const app = express();

app.get("/betfeeds", (req, res) => {
  res.json({
    message: "Hello express",
  });
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
