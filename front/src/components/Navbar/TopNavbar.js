import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export const TopNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-5">
      <Navbar.Brand href="#home">
        <strong>Księgarnia</strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="ml-5">
          <Button variant="outline-success">Search</Button>
          <FormControl type="text" placeholder="Search" className="ml-sm-2" />
        </Form>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Sklep</Nav.Link>
          <Nav.Link href="#link">Koszyk</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
