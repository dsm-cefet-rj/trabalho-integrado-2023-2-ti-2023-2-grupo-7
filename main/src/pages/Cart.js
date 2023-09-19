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