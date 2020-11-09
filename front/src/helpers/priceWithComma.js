export function priceWithComma(num) {
  const str = num.toString();
  return `${str.slice(0, -2)},${str.slice(-2, -1)}0`;
}
