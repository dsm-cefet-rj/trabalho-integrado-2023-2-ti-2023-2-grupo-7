import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { validateEmail, validatePassword, validateCep, validateCpf } from './Validation';
import api from '../api/api';

function SignupModal({ isOpen, onRequestClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('cliente');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [cep, setCep] = useState('');


  const [error, setError] = useState('');

  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [cpfError, setCpfError] = useState('');
  const [cepError, setCepError] = useState('');

  const handleSignup = async () => {
    if (name === '' || email === '' || password === '' || role === '') {
      setError('Todos os campos são obrigatórios');
      return;
    }

    if (cpfError || cepError) {
      setError('Corrija os erros nos campos.');
      return;
    }

    if (emailError || passwordError) {
      setError('Corrija os erros nos campos.');
      return;
    }

    const newUser = { name, email, password, role, cpf, address, city, cep };

    try {
      const response = await api.post('/signup', newUser);
      console.log('Novo usuário adicionado:', response.data);

      if (response.status === 201) {
        onRequestClose();
      } else {
        const data = response.data;
        setError(data.error);
      }
    } catch (error) {
      console.error('Erro ao criar o usuário:', error);
      setError('Erro ao criar o usuário');
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
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(validateEmail(e.target.value));
              }}
            />
            {emailError && <p className="text-danger">{emailError}</p>}
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(validatePassword(e.target.value));
              }}
            />
            {passwordError && <p className="text-danger">{passwordError}</p>}
          </Form.Group>
          <Form.Group controlId="formRole">
            <Form.Label>Papel</Form.Label>
            <Form.Control
              as="select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="cliente">Cliente</option>
              <option value="admin">Administrador</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formCpf">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => {
                setCpf(e.target.value);
                setCpfError(validateCpf(e.target.value));
              }}
            />
            {cpfError && <p className="text-danger">{cpfError}</p>}
          </Form.Group>
          <Form.Group controlId="formAddress">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="text"
              placeholder="Endereço"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formCity">
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formCep">
            <Form.Label>CEP</Form.Label>
            <Form.Control
              type="text"
              placeholder="CEP"
              value={cep}
              onChange={(e) => {
                setCep(e.target.value);
                setCepError(validateCep(e.target.value));
              }}
            />
            {cepError && <p className="text-danger">{cepError}</p>}
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
