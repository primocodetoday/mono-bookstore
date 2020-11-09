/* eslint-disable no-console */
import { initialOrderState } from 'context/OrderContext';

export const deepStateAdd = (state, action) => {
  return state.order.map((item) => {
    if (item.id === action.payload.id) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
};

export const deepStateSub = (state, action) => {
  return state.order.map((item) => {
    if (item.id === action.payload.id) {
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  });
};

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
    case 'FIRST_NAME_CHANGE':
      return { ...state, first_name: action.payload };
    case 'LAST_NAME_CHANGE':
      return { ...state, last_name: action.payload };
    case 'CITY_CHANGE':
      return { ...state, city: action.payload };
    case 'ZIP_CODE_CHANGE':
      return { ...state, zip_code: action.payload };
    case 'RESET_ORDER':
      return { ...initialOrderState };
    default:
      throw new Error();
  }
};
