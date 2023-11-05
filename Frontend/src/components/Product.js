import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'; 
import api from '../api/api';


function Product({ id, imageSrc, alt, title, price, stock }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
;
  
  const [quantity, setQuantity] = useState(1);

  const handleAdicionarAoCarrinho = () => {
    const novoItem = {
      id,
      imageSrc,
      alt,
      title,
      price,
      quantity,
    };

    adicionarItemAoCarrinho(novoItem);
    
    setQuantity(1);
  };

  const adicionarItemAoCarrinho = async (item) => {
    try {
      const response = await api.post('/cart', item);

      if (response.status === 201) {
      } else {
        const errorData = response.data;
        console.error('Erro ao adicionar item ao carrinho:', errorData);
      }
    } catch (error) {
      console.error('Erro ao adicionar item ao carrinho:', error);
    }
  };
  
  
  return (
    <div className="product">
      <img src={imageSrc} alt={alt} />
      <div className='product_description'>
        <h2>{title}</h2>
        <p>R$ {price} / Em estoque: {stock} </p>
        <div className="quantity-selector">
        </div>
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
            e.target.style.backgroundColor = "#b36b00";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#ff9900";
          }}
          onClick={handleAdicionarAoCarrinho}
        >
          Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  );
}

export default Product;
