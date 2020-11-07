import React from 'react';
import { Card, Button, Row, Col, Media } from 'react-bootstrap';

// author: 'M. Karpiński, M. Dobrowolska, M. Braun, J. Lech';
// cover_url: 'http://localhost:3001/static/cover/book/457.jpg';
// currency: 'PLN';
// id: 457;
// pages: 280;
// price: 3200;
// title: 'Matematyka 1. Podręcznik. Zakres podstawowy';

export const BookCard = ({ book }) => {
  return (
    <>
      <Card style={{ height: '20rem' }} className=" p-3 mx-auto mb-4 ">
        <Row xs={2} className="px-2">
          <Col xs={5}>
            <Media>
              <img
                className="img-fluid rounded border"
                src={book.cover_url}
                alt={book.title}
              />
            </Media>
          </Col>
          <Col xs={7}>
            <div>
              <p className="h6 mx-auto mb-2">{book.title}</p>
            </div>
            <p>
              Autorzy: <strong>{book.author}</strong>
            </p>
            <p>
              Liczba stron: <strong>{book.pages}</strong>
            </p>
            <Button variant="primary">Do koszyka</Button>
          </Col>
        </Row>
      </Card>
    </>
  );
};
