export const validateCpf = (cpf) => {
    if (!cpf || cpf.length !== 14 || !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      return <span ClassName="error-message">CPF inválido</span>;
    }
    return '';
  };
  
  export const validateEmail = (email) => {
    if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return <span ClassName="error-message">Email inválido</span>;
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
  