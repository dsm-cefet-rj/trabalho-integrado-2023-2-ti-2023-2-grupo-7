import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'; 
function ContactPage() {
  return (
    <div>
      <section className="main-content-contact">
        <h1>Entre em Contato</h1>
        <div className="contact-info">
          <p><strong>Endereço:</strong> Rua Tucano do North</p>
          <p><strong>Cidade:</strong> Rio de Janeiro</p>
          <p><strong>CEP:</strong> 22500-001</p>
          <p><strong>Email:</strong> contato@northgrifefashion.com</p>
          <p><strong>Telefone:</strong>  (21) 5555-1234</p>
        </div>
        <div className="social-links">
            <a href="https://wa.me/seu-numero-de-telefone" className="social-link">
              <span className="custom-icon"><FaWhatsapp /></span>
            </a>
            <a href="https://www.facebook.com/seu-perfil" className="social-link">
              <span className="custom-icon"><FaFacebook /></span>
            </a>
            <a href="https://www.instagram.com/seu-perfil" className="social-link">
              <span className="custom-icon"><FaInstagram /></span>
            </a>
          </div>
      </section>
    </div>
  );
}

export default ContactPage;
