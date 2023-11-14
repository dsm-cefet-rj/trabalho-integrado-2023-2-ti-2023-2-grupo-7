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

router.put('/update/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, password, role, cpf, address, city, cep  } = req.body;
console.log("aaaaaaaaaaa");
console.log(userId);

    if (!name || !role || !address || !city || !cep) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const user = await UserModel.findById(userId);
    if (!user) {
      console.log("não encontrado")
      return res.status(404).json({ error: 'Usuário não encontrado' });

    }

    user.name = name;
    user.role = role;
    user.email = email;
    user.address = address;
    user.city = city;
    user.cep = cep;
    user.cpf = cpf;
    user.password = password;
    const updatedUser = await user.save();
    console.log('Parabéns! Informações do usuário atualizadas com sucesso.');

    res.status(200).json({ message: 'Informações do usuário atualizadas com sucesso', user: updatedUser });
  } catch (error) {
    console.error('Erro ao atualizar informações do usuário:', error);
    console.log('Ops, deu ruim! Erro interno:', error.message);
    res.status(500).json({ error: 'Erro ao atualizar informações do usuário' });
  }
});

module.exports = router;
