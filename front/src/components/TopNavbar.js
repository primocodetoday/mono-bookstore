import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const TopNavbar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="mb-3">
      <Navbar.Brand as={NavLink} to="/">
        <i className="fas fa-book-open mr-3" />
        <strong className="text-uppercase">Księgarnia</strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="ml-5">
          <Button variant="outline-success">Search</Button>
          <FormControl type="text" placeholder="Search" className="ml-sm-2" />
        </Form>
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} exact to="/">
            Sklep
          </Nav.Link>
          <Nav.Link as={NavLink} to="/basket">
            Koszyk
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
