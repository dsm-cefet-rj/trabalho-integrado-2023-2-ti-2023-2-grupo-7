// src/components/Product.js

import React from 'react';
import { Button } from 'react-bootstrap';

function Product({ imageSrc, alt, title, price, stock }) {
  return (
    <div className="product">
      <img src={imageSrc} alt={alt} />
      <div className='product_description'>
        <h2>{title}</h2>
        <p>R$ {price} / Qtd: {stock} </p>
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
                >
                  Adicionar ao Carrinho
          </Button>
      </div>
    </div>
  );
}

export default Product;
