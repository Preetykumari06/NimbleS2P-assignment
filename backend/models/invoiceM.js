const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  alternatePayee1: String,
  alternatePayee2: String,
  country: String,
  bankKey: String,
  bankAccNo: String,
  reference: String,
  lineItems: Array,
  city: String,
  street: String,
});

module.exports = mongoose.model('Invoice', invoiceSchema);
