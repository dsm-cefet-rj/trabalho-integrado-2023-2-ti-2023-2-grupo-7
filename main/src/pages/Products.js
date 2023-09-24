
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

import React, { useState } from 'react';
import { Container, Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, connect } from 'react-redux'; 
import Product from '../components/Product';
import { adicionarItemAoCarrinho } from '../Actions/CartActions'; // Certifique-se de importar a ação correta
import { removerItemDoCarrinho } from '../Actions/CartActions'; // Importe as ações do carrinho corretamente


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

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: products.length + 1,
    imageSrc: '',
    alt: '',
    title: '',
    price: '',
    stock: '',
  });

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const handleAddNewProduct = () => {
    if (newProduct.imageSrc && newProduct.alt && newProduct.title && newProduct.price && newProduct.stock) {
      products.push(newProduct);
      setNewProduct({
        id: products.length + 1,
        imageSrc: '',
        alt: '',
        title: '',
        price: '',
        stock: '',
      });
      setShowModal(false);
    }
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    products.length = 0;
    Array.prototype.push.apply(products, updatedProducts);

    dispatch(removerItemDoCarrinho(productId));
  };


  return (
    <div className="main-content-products">
      <Container>
        <h1>Produtos de Grife</h1>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
            <Product
              key={product.id}
              imageSrc={product.imageSrc}
              alt={product.alt}
              title={product.title}
              price={product.price}
              stock={product.stock}
              addToCart={() => adicionarItemAoCarrinho(product)}
            />
              <Button
                variant="danger"
                onClick={() => handleDeleteProduct(product.id)}
              >Excluir Produto
              </Button>
          </div>
          ))}

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Inserir Novo Produto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formImage">
                <Form.Label>Imagem do Produto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="URL da Imagem"
                  value={newProduct.imageSrc}
                  onChange={(e) => setNewProduct({ ...newProduct, imageSrc: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="formAlt">
                <Form.Label>Texto Alternativo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Texto Alternativo"
                  value={newProduct.alt}
                  onChange={(e) => setNewProduct({ ...newProduct, alt: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="formTitle">
                <Form.Label>Título do Produto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Título do Produto"
                  value={newProduct.title}
                  onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="formPrice">
                <Form.Label>Preço do Produto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Preço do Produto"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="formStock">
                <Form.Label>Estoque</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Estoque"
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Fechar
            </Button>
            <Button variant="primary" onClick={handleAddNewProduct}>
              Adicionar Novo Produto
            </Button>
          </Modal.Footer>
        </Modal>


        
        </div>
        <div>
          <Button variant="success" className='marginTop' onClick={handleShowModal}>
          Inserir Novo Produto
        </Button>

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


