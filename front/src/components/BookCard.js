import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';

// author: 'M. Karpiński, M. Dobrowolska, M. Braun, J. Lech';
// cover_url: 'http://localhost:3001/static/cover/book/457.jpg';
// currency: 'PLN';
// id: 457;
// pages: 280;
// price: 3200;
// title: 'Matematyka 1. Podręcznik. Zakres podstawowy';

export const BookCard = ({ book }) => {
  return (
    <Card style={{ width: '12rem' }}>
      <Card.Img
        style={{ height: 'auto' }}
        variant="top"
        src={book.cover_url}
        alt={book.title}
      />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>Autor: {book.author}</ListGroup.Item>
          <ListGroup.Item>Stron: {book.pages}</ListGroup.Item>
        </ListGroup>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
