const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  imageSrc: String,
  alt: String,
  title: String,
  price: Number,
  quantity: Number,
});

module.exports = mongoose.model('CartItem', cartItemSchema);