// src/App.js

import React from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos do Bootstrap
import './App.css'; // Importar o CSS personalizado

//rotas de páginas:
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Login from './pages/Login';
import UserPage from './pages/UserPage';
import ContactPage from './pages/ContactPage';

//rotas de componentes:
import Header from './components/Header';
import Footer from './components/Footer';


// início do app ===============================================================
function App() {
  return (
    <Router>
      <div>
        <Header id="header" />

        <Routes>
          <Route path="/" element={
            <main className="main-content-index">
              <Container className="my-5 text-center">
                <h1>Bem-vindo à Grife Fashion</h1>
                <p>Encontre as últimas tendências em roupas de grife.</p>
                <Button
                  href="/products"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#ff9900",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    textDecoration: "none",
                    transition: "background-color 0.3s",
                  }}
                  variant="primary"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#b36b00";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#ff9900"; 
                  }}
                >
                  Ver Produtos
              </Button>


              </Container>
            </main>
          } />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/UserPage" element={<UserPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>

        <Footer id="footer"/>
      </div>
    </Router>
  );
}


export default App;
