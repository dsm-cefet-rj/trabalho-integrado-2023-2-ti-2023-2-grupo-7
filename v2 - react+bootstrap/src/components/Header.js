import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Headerf() {
  return (
    <header >
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand  style={{marginLeft: 3 + 'vh'}} as={Link} to="/">Grife Fashion</Navbar.Brand> 
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Produtos</Nav.Link>
            <Nav.Link as={Link} to="/cart">Carrinho</Nav.Link>
            <Nav.Link as={Link} to="/orders">Pedidos</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/user">Usuário</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Headerf;
