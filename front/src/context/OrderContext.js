import React, { useEffect } from 'react';
import { orderReducer } from 'reducers/orderReducer';

export const initialOrderState = {
  order: [],
  first_name: '',
  last_name: '',
  city: '',
  zip_code: '',
};

export const OrderContext = React.createContext();

export const OrderContextProvider = ({ children, ...restProps }) => {
  const [state, dispatch] = React.useReducer(orderReducer, initialOrderState, () => {
    const storage = localStorage.getItem('order');
    return storage ? JSON.parse(storage) : initialOrderState;
  });

  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(state));
  }, [state]);

  return (
    <OrderContext.Provider {...restProps} value={{ state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};
