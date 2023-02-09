const { Double, Decimal128 } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
  id_invoice: { type: String },
  id_user: { type: String },
  date: { type: Date },
  subtotal:{type:Number},
  iva_twelve:{type:Number},
  iva_ten:{type:Number},
});

module.exports = Invoice = mongoose.model("Invoices", InvoiceSchema);
