import React from 'react';
import { bookstoreAPI } from 'services/bookstoreAPI';
import { Col, Row } from 'react-bootstrap';
import { BookCard } from 'components/BookCard';
import Loader from 'components/Loader';

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
    // simulate delay
    setTimeout(() => {
      fetchBooks();
    }, 500);
  }, []);

  const booksArray = books.map((book) => {
    return (
      <Col xs={12} md={6} xl={4} className="mb-3" key={book.id}>
        <BookCard book={book} />
      </Col>
    );
  });

  return (
    <div>
      <h4 className="mb-4">Sklep</h4>
      {books.length ? <Row>{booksArray}</Row> : <Loader />}
    </div>
  );
};
