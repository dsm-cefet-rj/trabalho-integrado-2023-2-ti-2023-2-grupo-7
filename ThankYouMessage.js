import React from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ThankYouMessage = () => {
  return (
    <div className="thank-you-message">
      <h2>Obrigado por sua compra!</h2>
      <p>Sua compra foi concluída com sucesso. Agradecemos por escolher nossa loja.</p>
      <Button
                  href="/orders"
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
                  > Ver Pedido </Button>
    </div>
  );
};

export default ThankYouMessage;