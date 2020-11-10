/* eslint-disable camelcase */
import React from 'react';
import { Button, Row, Col, Media, Card } from 'react-bootstrap';
import { OrderContext } from 'context/OrderContext';
import { SnackBar } from 'components/SnackBar/SnackBar';

// author:
// cover_url: 'http://localhost:3001/static/cover/book/457.jpg';
// currency: 'PLN';
// id: 457;
// pages: 280;
// price:
// title: '

export const BookCard = ({ book }) => {
  const { dispatch } = React.useContext(OrderContext);
  const [isAdded, setIsAdded] = React.useState(false);

  const { id, title, cover_url, author, pages } = book;

  return (
    <Card className=" p-2 mx-auto d-flex align-items-stretch h-100">
      <Row xs={1} sm={2} className="px-2 ">
        <Col sm={5}>
          <Media>
            <img className="img-fluid rounded border mx-auto mb-3" src={cover_url} alt={title} />
          </Media>
        </Col>
        <Col sm={7} className="d-flex flex-column justify-content-between">
          <div>
            <p className="h6 mx-auto mb-2 text-uppercase">{book.title}</p>
          </div>
          <p>
            Autorzy: <strong>{author}</strong>
          </p>
          <p>
            Liczba stron: <strong>{pages}</strong>
          </p>
        </Col>
      </Row>
      <Button
        className="ml-auto mt-auto mb-2 mr-2 text-uppercase font-weight-bolder"
        variant="outline-warning"
        onClick={() => {
          dispatch({ type: 'ADD_BOOK', payload: { id, quantity: 1 } });
          setIsAdded(true);
        }}
      >
        Do koszyka
      </Button>
      <SnackBar toast={isAdded} setToast={setIsAdded} color="success">
        Pozycja została dodana
      </SnackBar>
    </Card>
  );
};
