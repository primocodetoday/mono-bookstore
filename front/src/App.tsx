import * as React from 'react';
import { Container } from 'react-bootstrap';
import { Loader, TopNav } from 'components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { OrderContextProvider } from 'context/OrderContextProvider';
import 'theme/siteTheme.scss';
import { ROUTES } from 'routes';

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
            <Redirect exact from={ROUTES.HOME} to={ROUTES.SHOP_1} />
            <React.Suspense fallback={<Loader />}>
              <Route exact path={ROUTES.SHOP}>
                <Redirect to={ROUTES.SHOP_1} />
              </Route>
              <Route path={ROUTES.SHOP_PARAMS} component={Bookstore} />
              <Route path={ROUTES.BASKET} component={Basket} />
              <Route path={ROUTES.ORDER} component={Order} />
            </React.Suspense>
            <Route path="*" component={Page404} />
          </Switch>
        </Container>
      </BrowserRouter>
    </OrderContextProvider>
  );
};

export default App;
