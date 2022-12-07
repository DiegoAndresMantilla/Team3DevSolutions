const { Double, Decimal128 } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
  id_invoice: { type: String },
  id_user: { type: String },
  date: { type: Date },
});

module.exports = Invoice = mongoose.model("Invoices", InvoiceSchema);
