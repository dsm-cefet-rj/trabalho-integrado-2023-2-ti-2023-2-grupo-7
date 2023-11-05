import React, { useState, useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import SignupModal from '../components/SignupModal';
import api from '../api/api';
import Cookies from 'js-cookie';


function Login() {
  const [signupModalIsOpen, setSignupModalIsOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false); 

  useEffect(() => {
    const userIsLoggedIn = Cookies.get('userLoggedIn') === 'true';
    setUserLoggedIn(userIsLoggedIn);
  }, []);

  const handleSignup = (userData) => {
    console.log('Dados de cadastro:', userData);
    setSignupModalIsOpen(false);
  };

  const handleLogin = () => {
    setUserLoggedIn(true);
    Cookies.set('userLoggedIn', true, { expires: 7 });
  };

    const handleLogout = () => {

      api.get('/logout') 
        .then((response) => {
          if (response.status === 200) {
            setUserLoggedIn(false);
            Cookies.set('userLoggedIn', false);
          } else {
            console.log("se lascou");          }
        })
        .catch((error) => {
          console.log("se lascou muito", error);
        });
    };
  

  return (
    <section className="main-content-login">
      <h1>Login</h1>
      {userLoggedIn ? (
        <>
        <p>Você está logado!</p>
        <button onClick={handleLogout}>Logout</button>
      </>
      ) : (
        <>
          <LoginForm onLogin={handleLogin} />
          <button onClick={() => setSignupModalIsOpen(true)}>Cadastrar</button>
          <SignupModal
            isOpen={signupModalIsOpen}
            onRequestClose={() => setSignupModalIsOpen(false)}
            onSignup={handleSignup}
          />
        </>
      )}
    </section>
  );
}

export default Login;
