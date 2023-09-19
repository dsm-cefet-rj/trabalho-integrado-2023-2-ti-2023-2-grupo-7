// src/components/CartItem.js
/*
import React from 'react';
import { Button } from 'react-bootstrap';

const CartItem = ({ imageSrc, alt, title, price, quantity }) => {
  return (
    <div className="cart-item">
      <img src={imageSrc} alt={alt} />
      <h2>{title}</h2>
      <p>R$ {price}</p>
      <label htmlFor="quantity">Quantidade:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        value={quantity}
      />
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
                  Remover
        </Button>
    </div>
  );
};

export default CartItem;


*/

import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removerItemDoCarrinho, atualizarQuantidadeDoItem } from '../Actions/CartActions';

const CartItem = ({ imageSrc, alt, title, price, quantity, itemId }) => {
  const dispatch = useDispatch();

  const handleRemoverItem = () => {
    dispatch(removerItemDoCarrinho(itemId));
  };

  const handleAtualizarQuantidade = (event) => {
    const novaQuantidade = parseInt(event.target.value);
    dispatch(atualizarQuantidadeDoItem(itemId, novaQuantidade));
  };

  return (
    <div className="cart-item" key={itemId}>
      <img src={imageSrc} alt={alt} />
      <h2>{title}</h2>
      <p>R$ {price}</p>
      <label htmlFor="quantity">Quantidade:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        value={quantity}
        onChange={handleAtualizarQuantidade}
      />
      <Button onClick={handleRemoverItem}>Remover</Button>
    </div>
  );
};

export default CartItem;
