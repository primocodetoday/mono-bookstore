import React from 'react';
import { Button, Row, Col, Media } from 'react-bootstrap';

// author: 'M. Karpiński, M. Dobrowolska, M. Braun, J. Lech';
// cover_url: 'http://localhost:3001/static/cover/book/457.jpg';
// currency: 'PLN';
// id: 457;
// pages: 280;
// price: 3200;
// title: 'Matematyka 1. Podręcznik. Zakres podstawowy';

export const BookCard = ({ book }) => {
  return (
    <div className=" card p-3 mx-auto mb-3 d-flex align-items-stretch ">
      <Row xs={1} sm={2} className="px-2 ">
        <Col sm={5}>
          <Media>
            <img
              className="img-fluid rounded border mx-auto mb-3"
              src={book.cover_url}
              alt={book.title}
            />
          </Media>
        </Col>
        <Col sm={7} className="d-flex flex-column justify-content-between">
          <div>
            <p className="h6 mx-auto mb-2 text-uppercase">{book.title}</p>
          </div>
          <p>
            Autorzy: <strong>{book.author}</strong>
          </p>
          <p>
            Liczba stron: <strong>{book.pages}</strong>
          </p>
        </Col>
      </Row>
      <Button className="ml-auto mt-auto" variant="outline-primary">
        Do koszyka
      </Button>
    </div>
  );
};
