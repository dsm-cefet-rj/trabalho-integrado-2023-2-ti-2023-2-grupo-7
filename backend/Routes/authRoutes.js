const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserModel = require('../Models/UserModel');

router.post('/users', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error('Erro ao autenticar:', err);
      return next(err);
    }
    if (!user) {
      console.error('Falha na autenticação:', info.message);
      return res.redirect('/produtos'); 
    }
    req.logIn(user, (err) => {
      if (err) {
        console.error('Erro ao fazer login:', err);
        return next(err);
      }
      console.log('Login bem-sucedido:', user);
      return res.status(200).json({ message: 'Login bem-sucedido' });    });
  })(req, res, next);
});

router.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.json(users);
  } catch (err) {
    console.error('Erro ao buscar usuários:', err);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error('Erro ao fazer logout:', err);
      res.status(500).json({ error: 'Erro ao fazer logout' });
    } else {
      res.status(200).json({ message: 'Logout bem-sucedido' });
    }
  });
});





module.exports = router;
