import { ActionTypes } from './actions.interface';

export type ID = {
  id: number;
};

export interface IRemoveBook {
  type: typeof ActionTypes.REMOVE_BOOK;
  payload: ID;
}

export const removeBook = (id: number): IRemoveBook => {
  return {
    type: ActionTypes.REMOVE_BOOK,
    payload: { id },
  };
};

export interface IAddBook {
  type: typeof ActionTypes.ADD_BOOK;
  payload: ID;
}

export const addBook = (id: number): IAddBook => ({
  type: ActionTypes.ADD_BOOK,
  payload: { id },
});

export type Input = {
  [key: string]: string;
};

export interface IReceiverChange {
  type: typeof ActionTypes.RECEIVER_CHANGE;
  payload: Input;
}

export const receiverChange = (name: string, value: string): IReceiverChange => ({
  type: ActionTypes.RECEIVER_CHANGE,
  payload: { [name]: value },
});

export interface IResetOrder {
  type: typeof ActionTypes.RESET_ORDER;
}
export const resetOrder = (): IResetOrder => ({
  type: ActionTypes.RESET_ORDER,
});

export type OrderActionTypes = IRemoveBook | IAddBook | IReceiverChange | IResetOrder;
