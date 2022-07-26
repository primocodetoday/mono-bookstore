/* eslint-disable no-console */
import * as React from 'react';
import { bookstoreAPI as api } from 'services/bookstoreAPI';
import { Col, Row, Pagination } from 'react-bootstrap';
import { BookCard, Loader, Header } from 'components';
import { useParams, useHistory } from 'react-router-dom';
import './styles/bookstoreStyles.scss';

export interface ParamTypes {
  page: string;
}

export type Book = {
  _id: string;
  title: string;
  cover_url: string;
  author: string;
  pages: number;
};

const Bookstore = () => {
  const [books, setBooks] = React.useState<Book[]>([]);
  const { page } = useParams<ParamTypes>();
  const [activePage, setActivePage] = React.useState(1);

  React.useEffect(() => {
    // clear state before update
    setBooks(() => []);
    function fetchBooks() {
      api
        .get(`books?page=${page}`)
        .then((response) => {
          const { data } = response.data;
          setBooks((prevState) => {
            return [...prevState, ...data];
          });
          console.log('Data received', response.status);
        })
        .catch((err) => console.error('Server Error', err));
    }
    // simulate delay
    setTimeout(() => {
      fetchBooks();
    }, 250);
  }, [page]);

  const history = useHistory();

  const handlePagination = (nr: number) => {
    setActivePage(nr);
    history.push(`/shop/${nr}`);
  };

  const booksArray = books.map((book) => {
    return (
      <Col as="li" xs={12} md={6} lg={6} xl={4} className="mb-4" key={book._id}>
        <BookCard book={book} />
      </Col>
    );
  });

  return (
    <div className="mb-5">
      <Row className="d-flex mb-2 px-3">
        <Header>Sklep</Header>
        <Pagination className="ml-auto">
          <Pagination.Item active={activePage === 1} onClick={() => handlePagination(1)}>
            {1}
          </Pagination.Item>
          <Pagination.Item active={activePage === 2} onClick={() => handlePagination(2)}>
            {2}
          </Pagination.Item>
        </Pagination>
      </Row>

      {books.length ? <Row as="ul">{booksArray}</Row> : <Loader />}
    </div>
  );
};

export default Bookstore;
