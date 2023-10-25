import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ProductEditModal({ product, editModalVisible, handleCloseEditModal, onUpdate }) {
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  useEffect(() => {
    if (product) {
      setUpdatedProduct({ ...product });
    }
  }, [product]);

  const handleSaveChanges = () => {
    onUpdate(updatedProduct);
  };

  return (
    <Modal show={editModalVisible} onHide={handleCloseEditModal}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Produto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formImage">
            <Form.Label>Imagem do Produto</Form.Label>
            <Form.Control
              type="text"
              placeholder="URL da Imagem"
              value={updatedProduct.imageSrc || ''}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, imageSrc: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formAlt">
            <Form.Label>Texto Alternativo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Texto Alternativo"
              value={updatedProduct.alt || ''}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, alt: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formTitle">
            <Form.Label>Título do Produto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Título do Produto"
              value={updatedProduct.title || ''}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, title: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Preço do Produto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Preço do Produto"
              value={updatedProduct.price || ''}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, price: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formStock">
            <Form.Label>Estoque</Form.Label>
            <Form.Control
              type="text"
              placeholder="Estoque"
              value={updatedProduct.stock || ''}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, stock: e.target.value })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseEditModal}>
          Fechar
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Salvar Alterações
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductEditModal;
