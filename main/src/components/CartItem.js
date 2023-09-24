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

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removerItemDoCarrinho, atualizarQuantidadeDoItem } from '../Actions/CartActions';

const CartItem = ({ imageSrc, alt, title, price, quantity, itemId }) => {
  const dispatch = useDispatch();

  const handleRemoverItem = () => {
    dispatch(removerItemDoCarrinho(itemId));
  };

  const [novaQuantidade, setNovaQuantidade] = useState(quantity);

  const handleNovaQuantidadeChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setNovaQuantidade(newQuantity);
  
    // Aqui você pode despachar a ação para atualizar a quantidade diretamente,
    // caso necessário.
    dispatch(atualizarQuantidadeDoItem(itemId, newQuantity));
  };

  return (
<div className='row justify-content-center'>
<div className='cart-items'>
<div>
  <div   className='cart-item'>
    <img src={imageSrc} alt={alt} />
  </div>
  <div className='row'>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p className="card-text">R$ {price}</p>
      <label className="card-text" htmlFor="quantity">Quantidade:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        value={novaQuantidade}
        onChange={handleNovaQuantidadeChange}
      />
      </div>
    </div>
    <Button className='button-orange' onClick={handleRemoverItem}>Remover</Button>

  </div>
</div>
</div>
  );
};

export default CartItem;
/*

        <div className="card h-100"></div>


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

*/