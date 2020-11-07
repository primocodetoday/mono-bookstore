import React from 'react';
import { bookstoreAPI } from 'services/bookstoreAPI';

const App = () => {
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

  const booksArray = books.map((book) => {
    return <p>{book.title}</p>;
  });

  return <div>{booksArray}</div>;
};

export default App;
