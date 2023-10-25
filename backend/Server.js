const cartRoutes = require('./Routes/cartRoutes');
const productRoutes = require('./Routes/ProductsRoutes');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
const cors = require("cors");

app.use(cors({origin: '*', credentials: false}));

// Apply bodyParser middleware before defining routes
app.use(bodyParser.json()); // Parse JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded requests

mongoose.connect('mongodb+srv://user:user@cluster0.mehdhep.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

// Define your routes after applying middleware
app.use('/api', cartRoutes); 
app.use('/', productRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
