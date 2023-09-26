import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
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
<div className='cart-items'>
  <main className="main-content-cart">
    <Container className="mx-auto custom-center">
      <h1>Seu Carrinho</h1>
      <div className="row custom-center3">


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

        
        <div className="custom-center2" ></div>
      </div><div>
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
};

export default Cart;
