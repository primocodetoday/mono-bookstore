import React from 'react';
import { Bookstore } from 'views/BookStore';
import { Basket } from 'views/Basket';
import { Order } from 'views/Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { TopNavbar } from 'components/TopNavbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { OrderContext } from 'context/OrderContext';

const App = () => {
  const [order, setOrder] = React.useState({
    message: 'hello im context and im everywhere',
  });

  return (
    <Container>
      <OrderContext.Provider value={{ order, setOrder }}>
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
