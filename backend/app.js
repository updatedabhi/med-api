const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("Hello World");
});

app.get("/api-v1-getAllMedicine", (req, res) => {
  res.end("Work is under construction..");
});

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
