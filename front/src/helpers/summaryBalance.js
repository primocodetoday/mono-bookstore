export const summaryBalance = (arr) => {
  if (arr.length) {
    return arr.reduce((prev, acc) => prev + acc.price * acc.quantity, 0);
  }
  return 0;
};
