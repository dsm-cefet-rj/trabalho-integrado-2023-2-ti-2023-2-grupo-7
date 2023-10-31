const express = require('express');
const router = express.Router();
const Order = require('../Models/OrderModel');

router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Erro ao obter pedidos:', error);
    res.status(500).json({ error: 'Erro ao obter pedidos' });
  }
});

router.post('/orders', async (req, res) => {
  try {
    // Lógica para adicionar um novo pedido//////////////
    
  } catch (error) {
    console.error('Erro ao adicionar um pedido:', error);
    res.status(500).json({ error: 'Erro ao adicionar um pedido' });
  }
});

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
