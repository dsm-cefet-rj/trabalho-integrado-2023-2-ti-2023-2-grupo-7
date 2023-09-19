
/*import React from 'react';
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
            price="1199.99"
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

        </div>
      </Container>
    </div>
  );
}

export default Products;





// pages/Products.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux'; 
import Product from '../components/Product';

const products = [
  {
    id: 1,
    imageSrc: '/imagens/camisa_masc_01.jpg',
    alt: 'Produto 1',
    title: 'Camiseta Social Elegante',
    price: '199.99',
    stock: '5',
  },
  {
    id: 2,
    imageSrc: '/imagens/camisa_masc_02.jpg',
    alt: 'Produto 2',
    title: 'Camisa de Praia Social',
    price: '599.99',
    stock: '2',
  },
  {
    id: 3,
    imageSrc: '/imagens/bolsa_01.jpg',
    alt: 'Produto 3',
    title: 'Bolsa Moderna de Couro',
    price: '999.99',
    stock: '1',
  },
  {
    id: 4,
    imageSrc: '/imagens/camisa_femi_01.jpg',
    alt: 'Produto 4',
    title: 'Camisa Feminina',
    price: '2599.99',
    stock: '3',
  },
  {
    id: 5,
    imageSrc: '/imagens/terno_01.jpg',
    alt: 'Produto 5',
    title: 'Terno Masculino',
    price: '9999.99',
    stock: '5',
  },
  {
    id: 6,
    imageSrc: '/imagens/vestido_01.jpg',
    alt: 'Produto 6',
    title: 'Vestido Luxuoso',
    price: '9999.99',
    stock: '2',
  },
];

function Products({ cart, addToCart }) {
  return (
    <div className="main-content-products">
      <Container>
        <h1>Produtos de Grife</h1>
        <div className="product-list">
          {products.map((product, index) => (
            <Product
              key={index}
              imageSrc={product.imageSrc}
              alt={product.alt}
              title={product.title}
              price={product.price}
              stock={product.stock}
              addToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Products);


*/


import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux'; 
import Product from '../components/Product';
import { adicionarItemAoCarrinho } from '../Actions/CartActions';

const products = [
  {
    id: 1,
    imageSrc: '/imagens/camisa_masc_01.jpg',
    alt: 'Produto 1',
    title: 'Camiseta Social Elegante',
    price: '199.99',
    stock: '5',
  },
  {
    id: 2,
    imageSrc: '/imagens/camisa_masc_02.jpg',
    alt: 'Produto 2',
    title: 'Camisa de Praia Social',
    price: '599.99',
    stock: '2',
  },
  {
    id: 3,
    imageSrc: '/imagens/bolsa_01.jpg',
    alt: 'Produto 3',
    title: 'Bolsa Moderna de Couro',
    price: '999.99',
    stock: '1',
  },
  {
    id: 4,
    imageSrc: '/imagens/camisa_femi_01.jpg',
    alt: 'Produto 4',
    title: 'Camisa Feminina',
    price: '2599.99',
    stock: '3',
  },
  {
    id: 5,
    imageSrc: '/imagens/terno_01.jpg',
    alt: 'Produto 5',
    title: 'Terno Masculino',
    price: '9999.99',
    stock: '5',
  },
  {
    id: 6,
    imageSrc: '/imagens/vestido_01.jpg',
    alt: 'Produto 6',
    title: 'Vestido Luxuoso',
    price: '9999.99',
    stock: '2',
  },
];

function Products({ cart, adicionarItemAoCarrinho }) {
  return (
    <div className="main-content-products">
      <Container>
        <h1>Produtos de Grife</h1>
        <div className="product-list">
          {products.map((product) => (
            <Product
              key={product.id}
              imageSrc={product.imageSrc}
              alt={product.alt}
              title={product.title}
              price={product.price}
              stock={product.stock}
              addToCart={() => adicionarItemAoCarrinho(product)}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  adicionarItemAoCarrinho: (item) => dispatch(adicionarItemAoCarrinho(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);

