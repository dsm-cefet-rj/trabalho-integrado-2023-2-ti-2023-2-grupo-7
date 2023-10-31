import React, { useState, useEffect } from 'react';
import api from '../api/api';

const CartItem = ({ imageSrc, alt, title, price, quantity,  _id, fetchCartData, total, setTotal }) => {
  const [novaQuantidade, setNovaQuantidade] = useState(quantity);
  const [itemId, setItemId] = useState(_id); 
  const [cartItems, setCartItems] = useState([]); 

  useEffect(() => {
    api.get('/cart')
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error('Erro ao obter itens do carrinho:', error);
      });
  }, []);
  
  const handleDeleteItem = async (updatedItems) => {
    try {
      console.log('Tentando excluir item com ID:', itemId); 
      const response = await api.delete(`/cart/${itemId}`);
      if (response.status === 200) {

        const newTotal = total - price * novaQuantidade;
        setTotal(newTotal); 
        setItemId(null);        
      setCartItems(updatedItems);

      }
    } catch (error) {
      console.error('Erro ao excluir o item:', error);
    }
  };

  const handleUpdateQuantity = async () => {
    try {
      const response = await api.put(`/cart/${itemId}`, { quantity: novaQuantidade });
      if (response.status === 200) {
        console.log('Quantidade atualizada com sucesso');
        fetchCartData(); 
      }
    } catch (error) {
      console.error('Erro ao atualizar a quantidade:', error);
    }
  };

  return (
    <div className='row justify-content-center'>
            {itemId !== null && (
      <div className='cart-items'>
        <div>
          <div className='cart-item'>
            <img src={imageSrc} alt={alt} />
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
                  onChange={(e) => setNovaQuantidade(e.target.value)}
                />
                          <button onClick={handleUpdateQuantity}>Atualizar Quantidade</button>
              </div>
            </div>
            <button onClick={handleDeleteItem}>Excluir</button>          </div>
        </div>
      </div>
            )}
    </div>
  );
};


export default CartItem;
