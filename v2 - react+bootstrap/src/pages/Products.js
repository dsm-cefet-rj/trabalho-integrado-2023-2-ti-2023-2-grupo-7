// src/pages/Products.js

import React from 'react';
import { Container } from 'react-bootstrap';
import Product from '../components/Product';


function Products() {
  return (
    <div className="main-content-products">
      <Container >
        <h1>Produtos de Grife</h1>
        <div className="product-list">
          <Product
            imageSrc='/imagens/camisa_masc_01.jpg'
            alt="Produto 1"
            title="Camiseta Social Elegante"
            price="1199,99"
            stock={"5"}
          />
        
          <Product
            imageSrc='/imagens/camisa_masc_02.jpg'
            alt="Produto 2"
            title="Camisa de Praia Social"
            price="599,99"
            stock={"2"}
          />

        <Product
            imageSrc='/imagens/bolsa_01.jpg'
            alt="Produto 3"
            title="Bolsa Moderna de Couro"
            price="8999,99"
            stock={"1"}
          />

        <Product
            imageSrc='/imagens/camisa_femi_01.jpg'
            alt="Produto 4"
            title="Camisa Feminina"
            price="2599,99"
            stock={"3"}
          />

        <Product
            imageSrc='/imagens/terno_01.jpg'
            alt="Produto 5"
            title="Terno Masculino"
            price="9999,99"
            stock={"5"}
          />

        <Product
            imageSrc='/imagens/vestido_01.jpg'
            alt="Produto 6"
            title="Vestido Luxuoso"
            price="9999,99"
            stock={"2"}
          />

          {/* outros produtos */}
        </div>
      </Container>
    </div>
  );
}

export default Products;
