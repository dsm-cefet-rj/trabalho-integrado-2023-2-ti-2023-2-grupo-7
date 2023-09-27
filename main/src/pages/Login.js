import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupModal from '../components/SignupModal';

function Login() {
  const [signupModalIsOpen, setSignupModalIsOpen] = useState(false);

  const handleSignup = (userData) => {
    console.log('Dados de cadastro:', userData);
    setSignupModalIsOpen(false);
  };

  return (
    <section className="main-content-login">
      <h1>Login</h1>
      <LoginForm />
      <button onClick={() => setSignupModalIsOpen(true)}>Cadastrar</button>
      <SignupModal
        isOpen={signupModalIsOpen}
        onRequestClose={() => setSignupModalIsOpen(false)}
        onSignup={handleSignup}
      />
    </section>
  );
}

export default Login;
