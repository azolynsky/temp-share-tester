const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.static(path.join(__dirname, "build")));

app.get("/ping", function (req, res) {
  return res.send("pong");
});

// Replace this with the share endpoint. This will do a find-and-replace before serving.
app.get("/locker", function (req, res) {
  fs.readFile(path.join(__dirname, "build", "index.html"), (err, data) => {
    if (err) throw err;

    res.send(data.toString().replace("KindKatch", "Whatever I Want"));
  });
});

// This will catch and serve up any other endpoints
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);
