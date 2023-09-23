// src/pages/Cart.js
/*
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import CartItem from '../components/CartItem';

const Cart = () => {
  return (
    <div>
      <main className="main-content-cart">
        <Container>
          <h1>Seu Carrinho</h1>
          <div className="cart-items">
            <CartItem
              imageSrc="/imagens/camisa_masc_01.jpg"
              alt="Produto 1"
              title="Camiseta Elegante"
              price="199,99"
              quantity={2}
            />
            <CartItem
              imageSrc="/imagens/bolsa_01.jpg"
              alt="Produto 3"
              title="Bolsa Clássica"
              price="399,99"
              quantity={1}
            />
          </div>
          <div className="cart-total">
            <p>Total: R$ 799,97</p>
            <Button
                  style={{
                    display: "inline-block",
                    backgroundColor: "#ff9900",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "background-color 0.3s",
                  }}
                  variant="primary"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#b36b00"; // Mudança de cor ao passar o mouse
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#ff9900"; // Retorna à cor original ao tirar o mouse
                  }}
                >Finalizar Compra</Button>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Cart;




import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import ThankYouMessage from '../components/ThankYouMessage';

const Cart = () => {
  const { items, total } = useSelector((state) => state.cart);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  const handleFinalizarCompra = () => {
    setShowThankYouMessage(true);
  };

  return (
    <div>
      <main className="main-content-cart">
        <Container>
          <h1>Seu Carrinho</h1>
          <div className="cart-items">
            {items.map((item) => (
              <CartItem
                key={item.id}
                imageSrc={item.imageSrc}
                alt={item.alt}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                itemId={item.id}
              />
            ))}
          </div>
          <p className="cart-total">Total: R$ {total}</p>
          <Button variant="primary" onClick={handleFinalizarCompra}>Finalizar Compra</Button>
        </Container>
      </main>

      {showThankYouMessage && (
        <div className="thank-you-overlay">
          <div className="thank-you-message">
            <ThankYouMessage />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;


*/


import React, {useState} from 'react';
import { Container, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import ThankYouMessage from '../components/ThankYouMessage';

const Cart = () => {
  const { items, total } = useSelector((state) => state.cart);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  const handleFinalizarCompra = () => {
    setShowThankYouMessage(true);
  };

  return (
<div>
  <main className="main-content-cart">
    <Container className="mx-auto custom-center">
      <h1>Seu Carrinho</h1>
      <div className="row custom-center3">
        {items.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card h-100">
              <img
                src={item.imageSrc}
                alt={item.alt}

              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Price: R$ {item.price}</p>
                <p className="card-text">Quantity: {item.quantity}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="custom-center2" ></div>
      </div>
      <p className="cart-total">Total: R$ {total}</p>
      <button
        className="btn btn-primary"
        onClick={handleFinalizarCompra}
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
        Finalizar Compra
      </button>
    </Container>
  </main>

  {showThankYouMessage && (
    <div className="thank-you-overlay">
      <div className="thank-you-message">
        <ThankYouMessage />
      </div>
    </div>
  )}
</div>


  );  
};

export default Cart;