const express = require('express');
const router = express.Router();
const ProductsItem = require('../Models/ProductModel');

router.post('/products', async (req, res) => {
  console.log('Received a POST request at /products');

  try {
    console.log('Received product data:', req.body); // Add this line for debugging
    const newItem = new ProductsItem(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/products', async (req, res) => {
  try {
    const produtos = await ProductsItem.find({});
    res.json(produtos);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/products/:id', async (req, res) => {
  try {
    const productId = req.params.id; // Obtém o ID do produto a ser excluído da URL
    // Implemente a lógica para excluir o produto com o ID especificado
    // Use o método findByIdAndRemove ou findOneAndRemove do Mongoose para excluir o produto
    await ProductsItem.findByIdAndRemove(productId); // Isso excluirá o produto pelo ID
    res.json({ message: 'Produto excluído com sucesso' });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/products/:id', async (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;

  try {
    const product = await ProductsItem.findByIdAndUpdate(productId, updatedProduct, { new: true });

    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    return res.json(product);
  } catch (error) {
    console.error('Erro na atualização do produto:', error);
    return res.status(500).json({ error: 'Erro na atualização do produto' });
  }
});


module.exports = router;
