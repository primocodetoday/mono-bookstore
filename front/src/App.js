import React from 'react';
import { Container } from 'react-bootstrap';
import { Loader, TopNav } from 'components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { OrderContextProvider } from 'context/OrderContext';
import 'theme/siteTheme.scss';

// Lazy import
const Bookstore = React.lazy(() => import('views/Bookstore/Bookstore'));
const Basket = React.lazy(() => import('views/Basket/Basket'));
const Order = React.lazy(() => import('views/Order/Order'));
const Page404 = React.lazy(() => import('views/Page404/Page404'));

const App = () => {
  return (
    <OrderContextProvider>
      <BrowserRouter>
        <TopNav />
        <Container as="main">
          <Switch>
            <Redirect exact from="/" to="/shop/1" />
            <React.Suspense fallback={<Loader />}>
              <Route exact path="/shop/">
                <Redirect to="/shop/1" />
              </Route>
              <Route path="/shop/:page" component={Bookstore} />
              <Route path="/basket" component={Basket} />
              <Route path="/order" component={Order} />
            </React.Suspense>
            <Route path="*" component={Page404} />
          </Switch>
        </Container>
      </BrowserRouter>
    </OrderContextProvider>
  );
};

export default App;
