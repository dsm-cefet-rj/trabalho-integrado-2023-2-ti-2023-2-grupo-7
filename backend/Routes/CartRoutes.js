const express = require('express');
const router = express.Router();
const CartItem = require('../Models/CartItemModel');

router.get('/cart', async (req, res) => {
  try {
    const items = await CartItem.find();
    res.status(200).json(items);
  } catch (error) {
    console.error('Erro ao obter itens do carrinho:', error);
    res.status(500).json({ error: 'Erro ao obter itens do carrinho' });
  }
});

router.post('/cart', async (req, res) => {
  try {
    const { _id, imageSrc, alt, title, price, quantity } = req.body;

    if (!imageSrc || !alt || !title || !price || !quantity) {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
    }

    let existingItem = await CartItem.findOne({ _id });

    if (existingItem) {
      existingItem.quantity += 1;
      existingItem = await existingItem.save();
      return res.json(existingItem);
    } else {
      const newItem = new CartItem(req.body);
      const savedItem = await newItem.save();
      return res.status(201).json(savedItem);
    }
  } catch (error) {
    console.error('Erro ao adicionar item ao carrinho:', error);
    return res.status(500).json({ error: 'Erro ao adicionar item ao carrinho' });
  }
});

router.put('/cart/:itemId', async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const { quantity } = req.body; 

    const updatedItem = await CartItem.findByIdAndUpdate(itemId, { quantity }, { new: true });
    if (!updatedItem) {
      res.status(404).json({ error: 'Item não encontrado' });
    } else {
      res.json(updatedItem);
    }
  } catch (error) {
    res.status(500).json({ error: 'Não foi possível atualizar a quantidade do item' });
  }
});


router.delete('/cart/:itemId', async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const deletedItem = await CartItem.findByIdAndRemove(itemId);
    if (!deletedItem) {
      res.status(404).json({ error: 'Item não encontrado' });
    } else {
      res.json(deletedItem);
    }
  } catch (error) {
    res.status(500).json({ error: 'Não foi possível excluir o item do carrinho' });
  }
});

module.exports = router;
