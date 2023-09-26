import React from 'react';

function UserForm({ userInfo, isEditing, validationErrors, handleInputChange, saveChanges, toggleEditMode }) {
  return (
    <div className="user-info">
      <strong>Nome:</strong>
      <p>{isEditing ? <input type="text" name="nome" value={userInfo.nome} onChange={handleInputChange} /> : userInfo.nome}</p>
      <strong>CPF:</strong>
      <p>
        {isEditing ? (
          <>
            <input type="text" name="cpf" value={userInfo.cpf} onChange={handleInputChange} />
            <span className="error-message">{validationErrors.cpf}</span> 
          </>
        ) : (
          userInfo.cpf
        )}
      </p>
      <strong>Email:</strong>
      <p>
        {isEditing ? (
          <>
            <input type="email" name="email" value={userInfo.email} onChange={handleInputChange} />
            <span className="error-message">{validationErrors.email}</span>
          </>
        ) : (
          userInfo.email
        )}
      </p>
      <strong>Endereço:</strong>
      <p>{isEditing ? <input type="text" name="endereco" value={userInfo.endereco} onChange={handleInputChange} /> : userInfo.endereco}</p>
      <strong>Cidade:</strong>
      <p>{isEditing ? <input type="text" name="cidade" value={userInfo.cidade} onChange={handleInputChange} /> : userInfo.cidade}</p>
      <strong>CEP:</strong>
      <p>
        {isEditing ? (
          <>
            <input type="text" name="cep" value={userInfo.cep} onChange={handleInputChange} />
            <span className="error-message">{validationErrors.cep}</span> 
          </>
        ) : (
          userInfo.cep
        )}
      </p>
      {isEditing ? (
        <button onClick={saveChanges}>Salvar</button>
      ) : (
        <button onClick={toggleEditMode}>Editar</button>
      )}
    </div>
  );
}

export default UserForm;
