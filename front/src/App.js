﻿import React from 'react';
import { Bookstore } from 'views/Bookstore/BookStore';
import { Basket } from 'views/Basket/Basket';
import { Order } from 'views/Order/Order';
import { Container } from 'react-bootstrap';
import { TopNav } from 'components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { OrderContextProvider } from 'context/OrderContext';
import { Page404 } from 'views/Page404/Page404';
import 'theme/siteTheme.scss';

const App = () => {
  return (
    <OrderContextProvider>
      <BrowserRouter>
        <TopNav />
        <Container as="main">
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
