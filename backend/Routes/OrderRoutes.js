// routes/OrderRoutes.js
const express = require('express');
const router = express.Router();
const Order = require('../Models/OrderModel');

// Rota para listar todos os pedidos
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Erro ao obter pedidos:', error);
    res.status(500).json({ error: 'Erro ao obter pedidos' });
  }
});

// Rota para adicionar um novo pedido
router.post('/orders', async (req, res) => {
  try {
    const { number, date, status, items, total } = req.body;

    if (!number || !date || !status || !items || !total) {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
    }

    const newOrder = new Order({ number, date, status, items, total });
    const savedOrder = await newOrder.save();
    return res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Erro ao adicionar um pedido:', error);
    return res.status(500).json({ error: 'Erro ao adicionar um pedido' });
  }
});

// Rota para atualizar o status do pedido
router.put('/orders/:orderId', async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const { status } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
    if (!updatedOrder) {
      res.status(404).json({ error: 'Pedido não encontrado' });
    } else {
      res.json(updatedOrder);
    }
  } catch (error) {
    res.status(500).json({ error: 'Não foi possível atualizar o status do pedido' });
  }
});

// Rota para excluir um pedido
router.delete('/orders/:orderId', async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const deletedOrder = await Order.findByIdAndRemove(orderId);
    if (!deletedOrder) {
      res.status(404).json({ error: 'Pedido não encontrado' });
    } else {
      res.json(deletedOrder);
    }
  } catch (error) {
    res.status(500).json({ error: 'Não foi possível excluir o pedido' });
  }
});

module.exports = router;
