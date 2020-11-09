import React from 'react';
import { Header, OrderForm } from 'components';
import { OrderContext } from 'context/OrderContext';
import { Link } from 'react-router-dom';

export const Order = () => {
  const { state } = React.useContext(OrderContext);

  React.useEffect(() => {
    console.log('orderContext', state);
  }, [state]);

  return (
    <div>
      <Header>Zamówienie</Header>
      {state.order.length ? (
        <OrderForm />
      ) : (
        <p className="text-success">
          Twoje zamówienie zostało wysłane. <Link to="/shop/1">Wróc</Link> na stronę sklepu
        </p>
      )}
    </div>
  );
};
