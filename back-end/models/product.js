const mongoose = require("mongoose");

const productShema = new mongoose.Schema({
  name: { type: String, required: [true, `Name is required`] },
  color: { type: String, required: [true, `Color is required`] },
  image: String,
  size: { type: String, required: true },
  gender: { type: String, required: true },
  material: String,
  pirce: { type: Number, required: true }
});

module.exports = mongoose.model("product", productShema);
