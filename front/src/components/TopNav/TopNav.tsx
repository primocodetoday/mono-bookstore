import * as React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'routes';
import { useOrderContext } from 'hooks/useOrderContext';

export const TopNav = () => {
  const { state } = useOrderContext();

  const { order } = state;

  return (
    <Navbar bg="warning" variant="dark" expand="sm" className="mb-4 " sticky="top">
      <Navbar.Brand as={NavLink} to={ROUTES.HOME}>
        <i className="fas fa-book-open mr-3" />
        <strong className="text-uppercase">Księgarnia</strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto align-items-center h5">
          <Nav.Link
            className="text-light ml-auto mr-4 text-uppercase font-weight-bolder"
            as={NavLink}
            exact
            to={ROUTES.HOME}
          >
            Sklep
          </Nav.Link>
          <Nav.Link className="text-light ml-auto text-uppercase font-weight-bolder" as={NavLink} to={ROUTES.BASKET}>
            Koszyk
            <Badge className="ml-2 badge-success">{order ? order.length : '0'}</Badge>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
