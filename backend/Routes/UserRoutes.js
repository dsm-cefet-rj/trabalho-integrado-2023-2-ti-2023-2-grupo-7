const express = require('express');
const router = express.Router();
const UserModel = require('../Models/UserModel');

router.post('/login', async (req, res) => {
  try {
    
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    
    const newUser = new UserModel({ name, email, password, role });

    
    const savedUser = await newUser.save();

    res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (error) {
    console.error('Erro ao criar o usuário:', error);
    res.status(500).json({ error: 'Erro ao criar o usuário' });
  }
});

module.exports = router;
