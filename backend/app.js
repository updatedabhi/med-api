const express = require("express");
const medicineRouter = require("./routes/medicineRoute");
const app = express();

app.use(express.json());

app.use("/api-v1-medicines", medicineRouter);

module.exports = app;
