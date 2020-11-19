import * as React from 'react';
import { orderReducer, TState } from 'context/reducers';
import { initialOrderState } from './reducers';
import { OrderActionTypes } from 'context/actions';

export interface Context {
  state: TState;
  dispatch: React.Dispatch<OrderActionTypes>;
}

export const OrderContext = React.createContext({} as Context);

export const OrderContextProvider: React.FC = ({ children, ...restProps }) => {
  const [state, dispatch] = React.useReducer(orderReducer, initialOrderState, () => {
    const storage = localStorage.getItem('order');
    return storage ? JSON.parse(storage) : initialOrderState;
  });

  React.useEffect(() => {
    localStorage.setItem('order', JSON.stringify(state));
  }, [state]);

  return (
    <OrderContext.Provider {...restProps} value={{ state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};
