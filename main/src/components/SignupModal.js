import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Define o elemento raiz do seu aplicativo

function SignupModal({ isOpen, onRequestClose, onSignup }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    // Realize a validação de dados aqui, por exemplo, verificando se os campos estão preenchidos corretamente
    if (!name || !email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Chame a função de cadastro passando os dados
    onSignup({ name, email, password });
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Cadastro</h2>
      {error && <p>{error}</p>}
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Cadastrar</button>
    </Modal>
  );
}

export default SignupModal;
