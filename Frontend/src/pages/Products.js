import React, { useState, useEffect } from 'react';
import { Container, Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, connect } from 'react-redux';
import Product from '../components/Product';
import { adicionarItemAoCarrinho } from '../Actions/CartActions';
import { removerItemDoCarrinho } from '../Actions/CartActions';
import api from '../api/api';
import ProductEditModal from '../modal_edit/ProductEditModal'


function Products({ cart, adicionarItemAoCarrinho }) {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);


  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
  
    if (token) {
      api
        .get('http://localhost:3001/protected', {
          headers: {
            Authorization: token,
          },
        })
        .then(response => {
          const userRole = response.data.user.role;
          setIsAdmin(userRole === 'admin');
        })
        .catch(error => {
          console.error('Erro ao obter informações do usuário:', error);
        });
    }
  }, []);
  

  const [newProduct, setNewProduct] = useState({
    imageSrc: '',
    alt: '',
    title: '',
    price: '',
    stock: '',
  });

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
      }
    }
    fetchData();
  }, []);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddNewProduct = async () => {
    if (
      newProduct.imageSrc &&
      newProduct.alt &&
      newProduct.title &&
      newProduct.price &&
      newProduct.stock
    ) {
      const numericPrice = parseFloat(newProduct.price);
      const numericStock = parseInt(newProduct.stock, 10);

      if (!isNaN(numericPrice) && !isNaN(numericStock)) {
        const productToAdd = {
          imageSrc: newProduct.imageSrc,
          alt: newProduct.alt,
          title: newProduct.title,
          price: numericPrice,
          stock: numericStock,
        };

        try {
          const response = await api.post('/products', productToAdd, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log('Novo produto adicionado:', response.data);

          const updatedProductsResponse = await api.get('/products');
          const updatedProducts = updatedProductsResponse.data;
  
          setProducts(updatedProducts);

          setNewProduct({
            imageSrc: '',
            alt: '',
            title: '',
            price: '',
            stock: '',
          });

          setShowModal(false);
        } catch (error) {
          console.error('Erro ao adicionar novo produto:', error);
        }
      } else {
        console.error('Price ou stock não são números válidos.');
      }
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const confirmed = window.confirm('Tem certeza que deseja excluir este produto?');
  
      if (confirmed) {
        await api.delete(`/products/${productId}`);
        const updatedProducts = products.filter((product) => product._id !== productId);
        setProducts(updatedProducts);
        alert('Produto excluído com sucesso');
      } else {
        alert('Exclusão cancelada');
      }
    } catch (error) {
      console.error(`Erro ao excluir o produto com ID ${productId}:`, error);
    }
  };

  const handleOpenEditModal = (product) => {
    setEditingProduct(product);
    setEditModalVisible(true);
  };
  
  const handleCloseEditModal = () => {
    setEditingProduct(null);
    setEditModalVisible(false);
  };
  
  const handleUpdateProduct = async (updatedProduct) => {
    if (updatedProduct) {
      try {
        const response = await api.put(`/products/${updatedProduct._id}`, updatedProduct, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        const updatedProductData = response.data;
  
        const updatedProducts = products.map((product) =>
          product._id === updatedProductData._id ? updatedProductData : product
        );
  
        setProducts(updatedProducts);
  
        handleCloseEditModal();
      } catch (error) {
        console.error('Erro ao atualizar o produto:', error);
      }
    }
  };
    

  return (
    <div className="main-content-products">
      <Container>
        <h1>Produtos de Grife</h1>
        <div className="product-list">
          {products.map((product) => (
            <div key={product._id} className="product-item">
              <Product
                id={product._id}
                imageSrc={product.imageSrc}
                alt={product.alt}
                title={product.title}
                price={product.price}
                stock={product.stock}
                addToCart={() => adicionarItemAoCarrinho(product)}
                showAddToCartButton={!isAdmin}
              />
      {isAdmin && (
              <>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteProduct(product._id)}
                >
                  Excluir Produto
                </Button>

                <Button
                  variant="primary"
                  onClick={() => handleOpenEditModal(product)}
                >
                  Atualizar Item
                </Button>
              </>
            )}

            </div>
          ))}
        </div>
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

        <ProductEditModal
          product={editingProduct}
          editModalVisible={editModalVisible}
          handleCloseEditModal={handleCloseEditModal}
          onUpdate={handleUpdateProduct}
        />


        <div>
        {isAdmin && (
          <Button variant="success" className="marginTop" onClick={handleShowModal}>
            Inserir Novo Produto
          </Button>
        )}
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
