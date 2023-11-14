const cartRoutes = require('./Routes/CartRoutes');
const productRoutes = require('./Routes/ProductsRoutes');
const UserRoutes = require('./Routes/UserRoutes');
const authRoutes = require('./Routes/authRoutes');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
const cors = require("cors");

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.use(cors({ origin: '*', credentials: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://user:user@cluster0.mehdhep.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

const UserModel = require('./Models/UserModel');

passport.use(new LocalStrategy(
  {
    usernameField: 'email', 
    passwordField: 'password', 
  },
  async (email, password, done) => {
    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        return done(null, false, { message: 'Credenciais do usuario inválidas' });
      }

      if (await user.comparePassword(password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Credenciais inválidas' }); 
      }
    } catch (error) {
      return done(error);
    }
  }
));

app.use(
  session({
    secret: '1234', 
    resave: false,
    saveUninitialized: false,  }
));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

app.use('/', cartRoutes);
app.use('/', productRoutes);
app.use('/', UserRoutes);
app.use('/', authRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
