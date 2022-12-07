const { Double, Decimal128 } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  id_order: { type: String },
  id_product: { type: String },
  id_user: { type: String },
  id_invoice: { type: String },
  amount: { type: String },
  total_order: { type: Number },
  apply_discount: { type: String },
  discount_value: { type: Number },
  discount_price: { type: Number },
});

module.exports = Order = mongoose.model("Orders", OrderSchema);
