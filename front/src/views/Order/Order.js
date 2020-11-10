import React from 'react';
import { Col } from 'react-bootstrap';
import { Header, OrderForm } from 'components';
import { OrderContext } from 'context/OrderContext';
import { Link } from 'react-router-dom';

export const Order = () => {
  const { state } = React.useContext(OrderContext);
  const [wasSubmitted, setWasSubmitted] = React.useState(false);

  const { order } = state;

  return (
    <Col xs={12} md={10} lg={6} className="px-1 mx-auto">
      <Header className="text-center">Zamówienie</Header>
      {wasSubmitted || order.length ? (
        <OrderForm setWasSubmitted={setWasSubmitted} />
      ) : (
        <p className="text-center">
          Ta strona jest niedostępna dla Ciebie dopóki nie dodasz pozycji do koszyka. <Link to="/shop/1">Wróc</Link> na
          stronę sklepu
        </p>
      )}
    </Col>
  );
};
