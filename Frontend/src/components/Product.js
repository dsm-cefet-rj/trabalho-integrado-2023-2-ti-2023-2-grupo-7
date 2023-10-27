import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'; 
import { adicionarItemAoCarrinho } from '../Actions/CartActions';
import { atualizarQuantidadeDoItem } from '../Actions/CartActions'; 

function Product({ id, imageSrc, alt, title, price, stock }) {
  const [quantity = 1, setQuantity] = useState(); 
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  
  const handleAdicionarAoCarrinho = () => {
    const novoItem = {
      id,
      imageSrc,
      alt,
      title,
      price,
      quantity: 1,     
      stock: stock -1,

    };
    const itemExistente = cart.items.find((existingItem) => existingItem.id === novoItem.id);
  
    if (itemExistente) {
      dispatch(atualizarQuantidadeDoItem(itemExistente.id, itemExistente.quantity + 1));
    } else {
      dispatch(adicionarItemAoCarrinho(novoItem));
    }
  };

  
  return (
    <div className="product">
      <img src={imageSrc} alt={alt} />
      <div className='product_description'>
        <h2>{title}</h2>
        <p>R$ {price} / Em estoque: {stock} </p>

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


