const express = require('express');
const router = express.Router();
const CartItem = require('../Models/CartItemModel');

router.post('/cart', (req, res) => {
  const newItem = new CartItem(req.body);
  newItem.save((err, item) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(item);
    }
  });
});

module.exports = router;
