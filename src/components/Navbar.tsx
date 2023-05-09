import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

const NavigationBar = () => {
  return (
    <Navbar bg="primary" expand="lg" className="d-flex justify-content-center">
      <Container>
        <Navbar.Brand href="/home" className="text-white">Reactowa Aplikacja</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto">
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link href="/city">Lekcja 1</Nav.Link>
            <Nav.Link href="/theme">Lekcja 2</Nav.Link>
            <NavDropdown title="Lekcja 3" id="basic-nav-dropdown" >
              <NavDropdown.Item href="/books/1">Książka 1</NavDropdown.Item>
              <NavDropdown.Item href="/books/2">Książka 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/books/">Wszystkie książki</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/customHook">Lekcja 4</Nav.Link>
            <Nav.Link href="/slowComponent">Lekcja 5</Nav.Link>
            <Nav.Link href="/data">Lekcja 6</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;