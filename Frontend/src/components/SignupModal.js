import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { validateEmail } from './Validation';
import api from '../api/api';

function SignupModal({ isOpen, onRequestClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');
  const [error, setError] = useState('');


const handleSignup = async () => {
  const newUser = { name, email, password, role };

  try {
    const response = await api.post('/login', newUser, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Novo usuario adicionado:', response.data);
    console.log('Dados do usuário a serem enviados:', newUser)
    
    if (response.status === 201) {
      // Usuário criado com sucesso, você pode fechar o modal
      onRequestClose();
    } else {
      const data = await response.data;
      setError(data.error);
    }
  } catch (error) {
    console.error('Erro ao criar o usuário:', error);
  }
};

  

  return (
    <Modal show={isOpen} onHide={onRequestClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cadastro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <p className="text-danger">{error}</p>}
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formRole">
            <Form.Label>Papel</Form.Label>
            <Form.Control
              as="select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="client">Cliente</option>
              <option value="admin">Administrador</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onRequestClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={handleSignup}>
          Cadastrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SignupModal;
