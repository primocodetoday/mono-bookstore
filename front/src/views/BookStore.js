import React from 'react';
import { bookstoreAPI } from 'services/bookstoreAPI';
import { Col, Row, Pagination } from 'react-bootstrap';
import { BookCard } from 'components/BookCard';
import Loader from 'components/Loader';
import { useParams, useHistory } from 'react-router-dom';

export const Bookstore = () => {
  const [books, setBooks] = React.useState([]);
  const { page } = useParams();
  const [activePage, setActivePage] = React.useState(1);

  React.useEffect(() => {
    setBooks([]);
    async function fetchBooks() {
      await bookstoreAPI
        .get(`book?page=${page}`)
        .then((response) => {
          const { data } = response.data;
          setBooks(data);
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.error(err));
    }
    // simulate delay
    setTimeout(() => {
      fetchBooks();
    }, 500);
  }, [page]);

  const history = useHistory();

  const handlePagination = (nr) => {
    setActivePage(nr);
    history.push(`/shop/${nr}`);
  };

  const booksArray = books.map((book) => {
    return (
      <Col xs={12} md={6} xl={4} className="mb-3" key={book.id}>
        <BookCard book={book} />
      </Col>
    );
  });

  return (
    <>
      <div className="d-flex mb-2 mt-4">
        <h4 className="mb-4">Sklep</h4>
        <Pagination className="ml-auto">
          <Pagination.Item
            active={activePage === 1}
            onClick={() => handlePagination(1)}
          >
            {1}
          </Pagination.Item>
          <Pagination.Item
            active={activePage === 2}
            onClick={() => handlePagination(2)}
          >
            {2}
          </Pagination.Item>
        </Pagination>
      </div>

      {books.length ? <Row>{booksArray}</Row> : <Loader />}
    </>
  );
};
