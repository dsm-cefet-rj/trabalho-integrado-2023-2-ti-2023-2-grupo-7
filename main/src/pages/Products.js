
import React, { useState, useEffect } from 'react';
import { Container, Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, connect } from 'react-redux';
import Product from '../components/Product';
import { adicionarItemAoCarrinho } from '../Actions/CartActions';
import { removerItemDoCarrinho } from '../Actions/CartActions';
import dbData from '../db.json';

function Products({ cart, adicionarItemAoCarrinho }) {
    const [products, setProducts] = useState([]);
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



  useEffect(() => {
    setProducts(dbData.products);
  }, []); 


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
              id={product.id}
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


