import { ActionTypes, IRemoveBook, IAddBook, IReceiverChange, IResetOrder } from './actions.interface';

export const removeBook = (id: number): IRemoveBook => {
  return {
    type: ActionTypes.REMOVE_BOOK,
    payload: { id },
  };
};

export const addBook = (id: number): IAddBook => ({
  type: ActionTypes.ADD_BOOK,
  payload: { id, quantity: 1 },
});

export const receiverChange = (name: string, value: string): IReceiverChange => ({
  type: ActionTypes.RECEIVER_CHANGE,
  payload: { [name]: value },
});

export const resetOrder = (): IResetOrder => ({
  type: ActionTypes.RESET_ORDER,
});
