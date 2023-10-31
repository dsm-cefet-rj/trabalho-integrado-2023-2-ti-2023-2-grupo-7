import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import CartItem from '../components/CartItem';
import ThankYouMessage from '../components/ThankYouMessage';
import api from '../api/api';

const Cart  = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    try {
      const response = await api.get('/cart');
      if (response.status === 200) {
        setCartItems(response.data);
        const cartTotal = response.data.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(cartTotal);
      }
    } catch (error) {
      console.error('Erro ao obter itens do carrinho:', error);
    }
  };


  const handleFinalizarCompra = () => {
    setShowThankYouMessage(true);
  };

  
  return (
    <div className='cart-items'>
      <main className="main-content-cart">
        <Container className="mx-auto custom-center">
          <h1>Seu Carrinho</h1>
          <div className="row custom-center3">

          {cartItems.map((item) => (
  <CartItem key={item.id} itemId={item.id} {...item}  fetchCartData={fetchCartData} total={total}   setTotal={setTotal} />
))}


            <div className="custom-center2"></div>
          </div>
          <div>
            <p className="cart-total">Total: R$ {total}</p>
          </div>
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
      }
export default Cart;
