import { IItem } from '../orderReducer';

export enum ActionTypes {
  REMOVE_BOOK = 'REMOVE_BOOK',
  ADD_BOOK = 'ADD_BOOK',
  RESET_ORDER = 'RESET_ORDER',
  RECEIVER_CHANGE = 'RECEIVER_CHANGE',
}

export interface IRemoveBook {
  type: typeof ActionTypes.REMOVE_BOOK;
  payload: IItem;
}
export interface IAddBook {
  type: typeof ActionTypes.ADD_BOOK;
  payload: IItem;
}

export type Input = {
  [key: string]: string;
};

export interface IReceiverChange {
  type: typeof ActionTypes.RECEIVER_CHANGE;
  payload: Input;
}

export interface IResetOrder {
  type: typeof ActionTypes.RESET_ORDER;
}

export type OrderActionTypes = IRemoveBook | IAddBook | IReceiverChange | IResetOrder;
