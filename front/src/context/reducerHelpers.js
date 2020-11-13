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
