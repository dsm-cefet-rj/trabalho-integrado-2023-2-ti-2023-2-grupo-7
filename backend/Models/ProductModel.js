const mongoose = require('mongoose');

const productItemSchema = new mongoose.Schema({
  imageSrc: String,
  alt: String,
  title: String,
  price: Number,
  stock: Number

});

module.exports = mongoose.model('ProductItem', productItemSchema);