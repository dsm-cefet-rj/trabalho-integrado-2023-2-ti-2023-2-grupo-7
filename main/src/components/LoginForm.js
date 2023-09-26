import React, { useState } from 'react';
import { validateEmail } from './Validation';

function LoginForm() {
  const [email, setEmail] = useState(''); 
  const [emailError, setEmailError] = useState(''); 

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail); 
    setEmailError(validateEmail(newEmail));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
      <span className="error-message">{emailError}</span> 
      <label htmlFor="password">Senha:</label>
      <input type="password" id="password" name="password" minLength="8" required />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default LoginForm;

