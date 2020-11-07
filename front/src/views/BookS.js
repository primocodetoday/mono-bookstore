import React from 'react';
import { bookstoreAPI } from 'services/bookstoreAPI';
import { Container, CardDeck, Col, Spinner } from 'react-bootstrap';
import { BookCard } from 'components/BookCard/BookCard';

export const Bookstore = () => {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    async function fetchBooks() {
      await bookstoreAPI
        .get('book')
        .then((response) => {
          const { data } = response.data;
          setBooks(data);
        })
        .catch((err) => console.error(err));
    }
    setTimeout(() => {
      fetchBooks();
    }, 500);
  }, []);

  console.log(books);

  const booksArray = books.map((book) => {
    return (
      <Col xs={12} lg={6} key={book.id}>
        <BookCard book={book} />
      </Col>
    );
  });

  return (
    <Container style={{ minHeight: '80vh' }}>
      {books.length ? (
        <CardDeck>{booksArray}</CardDeck>
      ) : (
        // change to loader
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </Container>
  );
};
