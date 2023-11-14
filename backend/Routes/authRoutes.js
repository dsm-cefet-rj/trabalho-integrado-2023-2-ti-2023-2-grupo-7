const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const UserModel = require('../Models/UserModel');

router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({ message: 'Falha na autenticação', user });
    }

    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }

      const token = jwt.sign({ _id: user._id, user }, '1234');
      return res.json({ user, token });
    });
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.json({ message: 'Logout bem-sucedido' });
});

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Token não fornecido' });
  }

  jwt.verify(token, '1234', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    req.user = decoded.user;
    req.userId = decoded._id;
    next();
  });
};

router.get('/protected', verifyToken, (req, res) => {
  const { _id,password, name, role, email, cpf, address, city, cep  } = req.user;
  res.json({ message: 'Rota protegida acessada com sucesso', user: { _id, password, name, role, email, cpf, address, city, cep  } });
});

module.exports = router;
