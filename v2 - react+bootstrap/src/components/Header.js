import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';

function Headerf() {
  return (
    <header >
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand  style={{marginLeft: 3 + 'vh'}} as={Link} to="/"><Image src="/Logo_North.png" alt="Logo" width={50} height={50} /></Navbar.Brand> 
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Produtos</Nav.Link>
            <Nav.Link as={Link} to="/cart">Carrinho</Nav.Link>
            <Nav.Link as={Link} to="/orders">Pedidos</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/userPage">Usuário</Nav.Link>
            <Nav.Link as={Link} to="/ContactPage">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Headerf;
