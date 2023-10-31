const cartRoutes = require('./Routes/CartRoutes');
const productRoutes = require('./Routes/ProductsRoutes');
const UserRoutes = require('./Routes/UserRoutes');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
const cors = require("cors");

app.use(cors({origin: '*', credentials: false}));

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

mongoose.connect('mongodb+srv://user:user@cluster0.mehdhep.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

app.use('/', cartRoutes); 
app.use('/', productRoutes);
app.use('/', UserRoutes);


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
