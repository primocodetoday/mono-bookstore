import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const TopNavbar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="mb-5">
      <Navbar.Brand as={Link} to="/">
        <svg
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
          className="bi bi-book mr-3"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
          />
        </svg>
        <strong className="text-uppercase">Księgarnia</strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="ml-5">
          <Button variant="outline-success">Search</Button>
          <FormControl type="text" placeholder="Search" className="ml-sm-2" />
        </Form>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            Sklep
          </Nav.Link>
          <Nav.Link href="/basket">Koszyk</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
