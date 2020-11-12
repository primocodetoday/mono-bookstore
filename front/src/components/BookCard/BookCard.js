import React from 'react';
import { Button, Row, Col, Media, Card } from 'react-bootstrap';
import { OrderContext } from 'context/OrderContext';
import { SnackBar } from 'components/SnackBar/SnackBar';
import { ADD_BOOK } from 'context/actionTypes';
import PropTypes from 'prop-types';

export const BookCard = ({ book }) => {
  const { dispatch } = React.useContext(OrderContext);
  const [isAdded, setIsAdded] = React.useState(false);

  const { id, title, cover_url: coverUrl, author, pages } = book;

  return (
    <Card className=" p-2 mx-auto d-flex align-items-stretch h-100">
      <Row xs={1} sm={2} className="px-2 ">
        <Col sm={5}>
          <Media>
            <img className="img-fluid rounded border mx-auto mb-3" src={coverUrl} alt={title} />
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
          dispatch({ type: ADD_BOOK, payload: { id, quantity: 1 } });
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

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cover_url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    pages: PropTypes.number.isRequired,
  }).isRequired,
};
