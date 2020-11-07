import React from 'react';
import { bookstoreAPI } from 'services/bookstoreAPI';
import { Container, Row } from 'react-bootstrap';
import { BookCard } from 'components/BookCard';

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
    fetchBooks();
  }, []);

  console.log(books);

  const booksArray = books.map((book) => {
    return <BookCard key={book.id} book={book} />;
  });

  return (
    <Container>
      <Row>{booksArray}</Row>
    </Container>
  );
};
