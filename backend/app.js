const express = require("express");
const app = express();
const medicineRouter = require("./routes/medicineRoute");
const userRouter = require("./routes/userRoute");

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/medicines", medicineRouter);

module.exports = app;
