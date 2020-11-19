import { TState, IItem } from './index';
import { IAddBook, IRemoveBook, ActionTypes } from '../actions';

// TODO Hmm... This types and interfaces seem bad
export const deepStateChange = (state: TState, action: IRemoveBook | IAddBook): IItem[] => {
  return state.order.map((item) => {
    if (item.id === action.payload.id) {
      switch (action.type) {
        case ActionTypes.REMOVE_BOOK: {
          return { ...item, quantity: item.quantity - 1 };
        }
        case ActionTypes.ADD_BOOK: {
          return { ...item, quantity: item.quantity + 1 };
        }
      }
    }
    return item;
  });
};
