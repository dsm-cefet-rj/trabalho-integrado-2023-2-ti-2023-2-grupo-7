// models/OrderModel.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  number: String,
  date: String,
  status: String,
  items: [{ name: String, quantity: Number, price: Number }],
  total: Number,
});

module.exports = mongoose.model('Order', orderSchema);
