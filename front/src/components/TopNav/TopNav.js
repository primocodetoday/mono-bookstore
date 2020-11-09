import React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { OrderContext } from 'context/OrderContext';

export const TopNav = () => {
  const { state } = React.useContext(OrderContext);
  return (
    <Navbar bg="warning" variant="dark" expand="sm" className="mb-4" sticky="top">
      <Navbar.Brand as={NavLink} to="/">
        <i className="fas fa-book-open mr-3" />
        <strong className="text-uppercase">Księgarnia</strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="text-dark ml-auto" as={NavLink} exact to="/">
            Sklep
          </Nav.Link>
          <Nav.Link className="text-dark ml-auto" as={NavLink} to="/basket">
            Koszyk
            <Badge className="ml-2 badge-secondary">{state.order.length}</Badge>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
