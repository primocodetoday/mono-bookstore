import React from 'react';
import { Bookstore } from 'views/BookStore';
import { Basket } from 'views/Basket/Basket';
import { Order } from 'views/Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { TopNavbar } from 'components/TopNavbar';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { OrderContext } from 'context/OrderContext';
import { orderReducer } from 'reducers/orderReducer';
import { initialOrderState } from 'context/initialOrderState';
import { Page404 } from 'views/Page404';

const App = () => {
  const [state, dispatch] = React.useReducer(orderReducer, initialOrderState);

  return (
    <OrderContext.Provider value={{ state, dispatch }}>
      <Container>
        <BrowserRouter>
          <TopNavbar />
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
        </BrowserRouter>
      </Container>
    </OrderContext.Provider>
  );
};

export default App;
