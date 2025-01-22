const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  medicineImage: {
    type: String,
    required: [true, "Medicine must have image"],
  },
  name: {
    type: String,
    required: [true, "Medicine must have name"],
  },
  price: {
    type: Number,
    required: [true, "Medicine must have price"],
  },
  rating: {
    type: Number,
    default: 5.0,
  },
});

const Medicine = mongoose.model("Medicine", medicineSchema);

module.exports = Medicine;
