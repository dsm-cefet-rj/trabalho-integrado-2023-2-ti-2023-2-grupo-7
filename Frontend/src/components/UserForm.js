import React, { useState } from 'react';
import { validateCep } from './Validation';


const UserInfo = ({ user, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const [cepError, setCepError] = useState('');


  const handleEditClick = () => {
    setIsEditing(true);
  };


  const handleSaveClick = () => {

       const cepValidation = validateCep(editedUser.cep);
       if (cepValidation) {
         setCepError(cepValidation);
         return; 
       }

    const userWithId = { ...editedUser, _id: user._id };

    console.log(userWithId);

    onSave(userWithId);
    setIsEditing(false);
    setCepError(''); 
  };  


  const handleInputChange = (e) => {
        
        if (e.target.name === 'cep') {
          setCepError('');
        }
        
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={styles.userInfoContainer}>
      <h2>Bem-vindo, {user.role} {user.name} !</h2>
      <h3><strong>Email:</strong> {user.email}</h3>
      <h3><strong>CPF:</strong> {user.cpf}</h3>
      {isEditing ? (
        <>
          <h3><strong>Endereço:</strong> <input type="text" name="address" value={editedUser.address} onChange={handleInputChange} /></h3>
          <h3><strong>Cidade:</strong> <input type="text" name="city" value={editedUser.city} onChange={handleInputChange} /></h3>
          <h3><strong>CEP:</strong> <input type="text" name="cep" value={editedUser.cep} onChange={handleInputChange} /></h3>
          {cepError && <p className="text-danger">{cepError}</p>}
          <button onClick={handleSaveClick}>Salvar</button>
        </>
      ) : (
        <>
          <h3><strong>Endereço:</strong> {user.address}</h3>
          <h3><strong>Cidade:</strong> {user.city}</h3>
          <h3><strong>CEP:</strong> {user.cep}</h3>
          <button onClick={handleEditClick} style={styles.button}>Editar</button>
        </>
      )}
    </div>
  );
};

const styles = {
  userInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
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

export default UserInfo;
