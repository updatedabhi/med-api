const app = require("./app.js");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "config.env") });

const DB = process.env.DATABASE_LOCAL;

mongoose
  .connect(DB)
  .then((con) => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
