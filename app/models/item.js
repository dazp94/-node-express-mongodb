const mongoose = require("mongoose");

const Item = mongoose.model(
  "Item",
  new mongoose.Schema({
    name: String,
    price: Number
  })
);

module.exports = Item;
