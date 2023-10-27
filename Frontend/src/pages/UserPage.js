import React, { useState } from 'react';
import UserForm from '../components/UserForm';
import { validateCpf, validateEmail, validateCep } from '../components/Validation';

function UserPage() {
  const initialUserInfo = {
    nome: 'Você da silva',
    cpf: '000.000.000-00',
    email: 'VoceD@Silva.com',
    endereco: 'Rua principal, 123',
    cidade: 'Rio de Janeiro',
    cep: '00000-000',
  };

  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [isEditing, setIsEditing] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    setValidationErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });

    const updatedErrors = { ...validationErrors };
    if (name === 'cpf') {
      updatedErrors.cpf = validateCpf(value);
    } else if (name === 'email') {
      updatedErrors.email = validateEmail(value);
    } else if (name === 'cep') {
      updatedErrors.cep = validateCep(value);
    }
    setValidationErrors(updatedErrors);
  };

  const saveChanges = () => {
    const updatedErrors = {
      cpf: validateCpf(userInfo.cpf),
      email: validateEmail(userInfo.email),
      cep: validateCep(userInfo.cep),
    };

    if (Object.values(updatedErrors).every((error) => !error)) {
      toggleEditMode();
    } else {
      setValidationErrors(updatedErrors);
    }
  };

  return (
    <section className={`main-content-user ${isEditing ? 'user-info-edit' : 'user-info-view'}`}>
      <h1>Informações do Usuário</h1>
      {isEditing && (
        <div className="validation-errors">
         <ul>
            {Object.values(validationErrors).map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <UserForm
        userInfo={userInfo}
        isEditing={isEditing}
        validationErrors={validationErrors}
        handleInputChange={handleInputChange}
        saveChanges={saveChanges}
        toggleEditMode={toggleEditMode}
      />
    </section>
  );
}

export default UserPage;



