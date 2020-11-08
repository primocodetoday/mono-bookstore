import React from 'react';
import { Bookstore } from 'views/BookStore';
import { Basket } from 'views/Basket';
import { Order } from 'views/Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { TopNavbar } from 'components/TopNavbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { OrderContext } from 'context/OrderContext';
import { orderReducer } from 'reducers/orderReducer';

const initialOrderState = {
  order: [
    { id: 457, quantity: 1 },
    { id: 905, quantity: 5 },
  ],
  first_name: '',
  last_name: '',
  city: '',
  zip_code: '',
};

const App = () => {
  const [state, dispatch] = React.useReducer(orderReducer, initialOrderState);

  return (
    <Container>
      <OrderContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <TopNavbar />
          <Switch>
            <Route exact path="/" component={Bookstore} />
            <Route path="/basket" component={Basket} />
            <Route path="/order" component={Order} />
          </Switch>
        </BrowserRouter>
      </OrderContext.Provider>
    </Container>
  );
};

export default App;
