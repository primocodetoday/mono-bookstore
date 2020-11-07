import React from 'react';
import { Bookstore } from 'views/BookStore';
import { Basket } from 'views/Basket';
import { Order } from 'views/Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { TopNavbar } from 'components/TopNavbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <TopNavbar />
        <Switch>
          <Route exact path="/" component={Bookstore} />
          <Route path="/basket" component={Basket} />
          <Route path="/order" component={Order} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default App;
