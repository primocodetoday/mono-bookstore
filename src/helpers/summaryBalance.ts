import { BasketItemProps } from 'components/BasketItem/BasketItem';

export const summaryBalance = (arr: BasketItemProps[]): number => {
  if (arr.length) {
    return arr.reduce((prev, acc) => prev + acc.price * acc.quantity, 0);
  }
  return 0;
};
