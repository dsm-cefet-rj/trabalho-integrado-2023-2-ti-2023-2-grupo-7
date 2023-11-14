const express = require('express');
const router = express.Router();
const UserModel = require('../Models/UserModel');
const passport = require('passport');
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, role, cpf, address, city, cep } = req.body;

    if (!name || !email || !password || !role || !cpf || !address || !city || !cep) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email já registrado' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new UserModel({ name, email, password: hashedPassword, role, cpf, address, city, cep  });
    const savedUser = await newUser.save();

    res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (error) {
    console.error('Erro ao criar o usuário:', error);
    res.status(500).json({ error: 'Erro ao criar o usuário' });
  }
});

module.exports = router;
