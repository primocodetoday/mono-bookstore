import React from 'react';
import { bookstoreAPI } from 'services/bookstoreAPI';
import { CardDeck, Col } from 'react-bootstrap';
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

  console.log(books);

  const booksArray = books.map((book) => {
    return (
      <Col xs={12} lg={6} key={book.id}>
        <BookCard book={book} />
      </Col>
    );
  });

  return (
    <div>{books.length ? <CardDeck>{booksArray}</CardDeck> : <Loader />}</div>
  );
};
