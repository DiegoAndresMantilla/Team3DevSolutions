const { Double, Decimal128 } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DistributorSchema = new Schema({
  id_distributor: {type:String},
  ruc_distributor: { type: String },
  name_distributor: { type: String },
  id_product: {type:String},
  dealerPrice: { type: Number },
  subtotal: { type: Number },
  unit_profit: {type:Number},
});

module.exports = Distributor = mongoose.model("Distributor", DistributorSchema);