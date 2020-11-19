import { TState, IItem } from './index';
import { IAddBook, IRemoveBook } from '../actions';

// TODO Refactor this functions
export const deepStateAdd = (state: TState, action: IAddBook): IItem[] => {
  return state.order.map((item) => {
    if (item.id === action.payload.id) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
};

export const deepStateSub = (state: TState, action: IRemoveBook): IItem[] => {
  return state.order.map((item) => {
    if (item.id === action.payload.id) {
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  });
};
