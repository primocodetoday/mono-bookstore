import React from 'react';
import { Bookstore } from 'views/Bookstore/BookStore';
import { Basket } from 'views/Basket/Basket';
import { Order } from 'views/Order/Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { TopNav } from 'components/TopNav/TopNav';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { OrderContextProvider } from 'context/OrderContext';
import { Page404 } from 'views/Page404/Page404';

const App = () => {
  return (
    <OrderContextProvider>
      <BrowserRouter>
        <TopNav />
        <Container>
          <Switch>
            <Redirect exact from="/" to="/shop/1" />
            <Route exact path="/shop/">
              <Redirect to="/shop/1" />
            </Route>
            <Route path="/shop/:page" component={Bookstore} />
            <Route path="/basket" component={Basket} />
            <Route path="/order" component={Order} />
            <Route path="*" component={Page404} />
          </Switch>
        </Container>
      </BrowserRouter>
    </OrderContextProvider>
  );
};

export default App;
