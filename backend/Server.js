// server.js
const cartRoutes = require('./routes/CartRoutes');
const productRoutes = require('./routes/ProductRoutes');
const userRoutes = require('./routes/UserRoutes');
const orderRoutes = require('./routes/OrderRoutes'); // Importe as rotas de pedidos

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors({ origin: '*', credentials: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  'mongodb+srv://user:user@cluster0.mehdhep.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

app.use('/', cartRoutes);
app.use('/', productRoutes);
app.use('/', userRoutes);
app.use('/', orderRoutes); // Utilize as rotas de pedidos

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
