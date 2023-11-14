import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginMessage = () => {
  return (
    <div className="thank-you-message">
      <h2>Se logue para efetuar sua compra!</h2>
      <Button
                  href="/login"
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
                  > Fazer Login </Button>
    </div>
  );
};

export default LoginMessage;
