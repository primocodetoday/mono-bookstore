import React from 'react';
import { Bookstore } from 'views/BookS';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopNavbar } from 'components/Navbar/TopNavbar';

const App = () => {
  return (
    <div>
      <TopNavbar />
      <Bookstore />
    </div>
  );
};

export default App;
