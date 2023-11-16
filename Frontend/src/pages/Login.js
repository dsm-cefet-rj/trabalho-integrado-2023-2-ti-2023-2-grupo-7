import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SignupModal from '../components/SignupModal';
import UserInfo from '../components/UserForm';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [signupModalIsOpen, setSignupModalIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showUpdateMessage, setShowUpdateMessage] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem('token');


    if (token) {
      axios.get('http://localhost:3001/protected', {
        headers: {
          Authorization: token,
        },
      })
      .then(response => {
        setUser(response.data.user);
      })
      .catch(error => {
        console.error('Erro ao verificar autenticação:', error);
      });
    }
  }, []);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


 
  const recarregarAPagina = () =>{
    window.location.reload();
}


  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await axios.post('http://localhost:3001/login', formData);
      const { user, token } = response.data;


      localStorage.setItem('token', token);


      recarregarAPagina();


      setUser(user);


      console.log('Usuário logado:', user);
    } catch (error) {
      setError('Credenciais inválidas');
      console.error('Erro no login:', error);
    }
  };


  const handleSignup = (userData) => {
    console.log('Dados de cadastro:', userData);
    setSignupModalIsOpen(false);
  };


  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setShowUpdateMessage(false);
    recarregarAPagina();
  };




const handleSaveChanges = async (editedUser) => {
  try {
    const response = await axios.put(`http://localhost:3001/update/${user._id}`, editedUser, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });


    const { user: updatedUser } = response.data;
    setUser(updatedUser);
    setIsEditing(false);
   
    if (response.data.message === 'Informações do usuário atualizadas com sucesso') {
      setShowUpdateMessage(true);
      console.log('Parabéns! Alterações salvas com sucesso!');
    } else {
      console.log('Ops, deu ruim! A resposta do servidor não foi a esperada.');
    }
  } catch (error) {
    console.error('Erro ao salvar alterações:', error);
  }
};


  if (user) {
    return (
      <div style={styles.container}>
       <UserInfo user={user} onSave={handleSaveChanges} isEditing={isEditing} />
      <button onClick={handleLogout} style={styles.button}>Logout</button>


      {showUpdateMessage && <p style={{ color: 'red' }}>Você fez alterações que requerem autenticação. Faça login novamente para aplicar as alterações.</p>}
    </div>
    );
  }


  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} style={styles.input} required />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
     
      <div>
        <button onClick={() => setSignupModalIsOpen(true)} style={styles.button}>Cadastrar</button>
        <SignupModal
          isOpen={signupModalIsOpen}
          onRequestClose={() => setSignupModalIsOpen(false)}
          onSignup={handleSignup}
        />
      </div>
    </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f2f2f2',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    overflow: 'hidden',
    padding: '50px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(200, 200, 200, 0.8)',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '300px',
    margin: '0 auto',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#b36b00',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Login;
