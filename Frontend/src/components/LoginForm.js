import React, { useState } from 'react';
import { validateEmail } from './Validation';
import api from '../api/api'; 

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [error, setError] = useState('');


  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(validateEmail(newEmail));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setError('Preencha todos os campos.');
      return;
    }

    if (emailError) {
      setError('Corrija os erros nos campos.');
      return;
    }

    try {
      const response = await api.post('/users', { email, password });
      if (response.status === 200) {
        onLogin(); 
      } else {
        const data = response.data;
        setError(data.error);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('E-mail ou senha inválidos!');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
      <span className="error-message">{emailError}</span>
      <label htmlFor="password">Senha:</label>
      <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <span className="error-message">{error}</span> 
      <button type="submit">Entrar</button>
    </form>
  );
}

export default LoginForm;
