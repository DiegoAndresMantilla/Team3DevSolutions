const { Double, Decimal128 } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  id_product: { type: String },
  name_product: { type: String },
  brand: { type: String },
  model: { type: String },
  stock: { type: Number },
  dealerPrice: { type: Number },
  subtotal: { type: Number },
  total_iva: { type: Number },
  unit_profit: { type: Number },
  total_profit: { type: Number },
});

module.exports = Product = mongoose.model("Products", ProductSchema);
