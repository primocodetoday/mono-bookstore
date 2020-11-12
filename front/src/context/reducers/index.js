/* eslint-disable no-console */
import { initialOrderState } from 'context/OrderContext';
import { deepStateAdd, deepStateSub } from 'context/reducers/reducerHelpers';

export const orderReducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_BOOK':
      if (state.order.find((item) => item.id === action.payload.id && item.quantity > 1)) {
        console.log('Book in order, subtracting quantity');
        return { ...state, order: deepStateSub(state, action) };
      }
      console.log('Book deleted');
      return {
        ...state,
        order: [...state.order.filter((item) => item.id !== action.payload.id)],
      };
    case 'ADD_BOOK':
      if (state.order.find((item) => item.id === action.payload.id)) {
        console.log('Book in order, adding quantity');
        return { ...state, order: deepStateAdd(state, action) };
      }
      console.log('New Book added');
      return { ...state, order: [...state.order, action.payload] };
    case 'RECEIVER_CHANGE':
      return { ...state, ...action.payload };
    case 'RESET_ORDER':
      return { ...initialOrderState };
    default:
      throw new Error();
  }
};
