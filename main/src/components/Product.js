// src/components/Product.js

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'; 
import { adicionarItemAoCarrinho } from '../Actions/CartActions';
import { atualizarQuantidadeDoItem } from '../Actions/CartActions'; 

function Product({ id, imageSrc, alt, title, price, stock }) {
  const [quantity = 1, setQuantity] = useState(); // Estado local para a quantidade

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAdicionarAoCarrinho = () => {
    const novoItem = {
      id,
      imageSrc,
      alt,
      title,
      price,
      quantity: 1,       // Defina a quantidade como 1 ao criar um novo item
      stock: stock -1,

    };
    const itemExistente = cart.items.find((existingItem) => existingItem.id === novoItem.id);
  
    if (itemExistente) {
      // O item já existe no carrinho, então atualize a quantidade
      dispatch(atualizarQuantidadeDoItem(itemExistente.id, itemExistente.quantity + 1));
    } else {
      // O item não existe no carrinho, então adicione-o
      dispatch(adicionarItemAoCarrinho(novoItem));
    }
  };

  const [inputBloqueado, setInputBloqueado] = useState(false);
    var i = 0;
  const bloquearInput = () => {

    if (i === 1){
    setInputBloqueado(false);
      i=0;
  } else{
    setInputBloqueado(true);
      ++i;
  }
  };



  return (
    <div className="product">
      <img src={imageSrc} alt={alt} />
      <div className='product_description'>
        <h2>{title}</h2>
        <p>R$ {price} / Em estoque: {stock = quantity} </p>
        <input
          type="number"
          min="1"
          max={99}
          value={quantity}
          disabled={inputBloqueado}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <Button
                  style={{
                  display: "inline-block",
                  backgroundColor: "#fede00",
                  color: "#00000",
                  textDecoration: "none",
                  transition: "background-color 0.3s",
                  }}
                  variant="primary"
                  onMouseOver={(e) => {
                  e.target.style.backgroundColor = "darkblue"; 
                  }}
                  onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#fede00";
                  }}
                  onClick={bloquearInput}
        >Atualizar Estoque</Button>

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




/*

import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { adicionarItemAoCarrinho } from '../Actions/CartActions';

function Product({id, imageSrc, alt, title, price, stock, addToCart, cartItems }) {
  const handleAddToCart = () => {
    const existingItem = cartItems && cartItems.find(item => item.id === id);

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1
      };
      addToCart(updatedItem);
    } else {
      const newItem = {
        id, // Use o ID do produto
        imageSrc,
        alt,
        title,
        price,
        stock,
        quantity: 1
      };
      addToCart(newItem);
    }
  };

  return (
    <div className="product">
      <img src={imageSrc} alt={alt} />
      <div className="product_description">
        <h2>{title}</h2>
        <p>R$ {price} / Em estoque: {stock} </p>
        <Button
          onClick={handleAddToCart}
          style={{
            display: "inline-block",
            backgroundColor: stock > 0 ? "#ff9900" : "#ccc",
            color: "#fff",
            textDecoration: "none",
            transition: "background-color 0.3s",
          }}
          variant="primary"
          onMouseOver={(e) => {
            if (stock > 0) {
              e.target.style.backgroundColor = "#b36b00";
            }
          }}
          onMouseOut={(e) => {
            if (stock > 0) {
              e.target.style.backgroundColor = "#ff9900";
            }
          }}
          disabled={stock === 0}
        >
          {stock > 0 ? "Adicionar ao Carrinho" : "Indisponível"}
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(adicionarItemAoCarrinho(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);




*/
