import React from 'react';
import { Row } from 'react-bootstrap';
import { OrderContext } from 'context/OrderContext';

export const Basket = () => {
  const { order } = React.useContext(OrderContext);

  console.log(order);

  return (
    <Row>
      <p>Hello Im Basket</p>
    </Row>
  );
};
