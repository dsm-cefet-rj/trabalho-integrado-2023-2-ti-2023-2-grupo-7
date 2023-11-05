export const validateCpf = (cpf) => {
    if (!cpf || cpf.length !== 14 || !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      return <span ClassName="error-message">CPF inválido</span>;
    }
    return '';
  };
  
  export const validateEmail = (email) => {
    if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return <span ClassName="error-message">Email inválido, Digite um email com @ e .</span>;
    }
    return '';
  };
  
  export const validateCep = (cep) => {
    const cleanedCep = cep.replace(/\s+/g, '').replace(/-+/g, '');
    if (!/^\d{8}$/.test(cleanedCep)) {
      return <span ClassName="error-message">CEP inválido</span>;
    }
    return '';
  };

  export const validatePassword = (password) => {
    if (!password || password.length < 8) {
      return <span className="error-message">A senha deve conter pelo menos 8 caracteres</span>;
    }
    return '';
  };
  