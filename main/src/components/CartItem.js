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
