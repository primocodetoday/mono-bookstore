/* eslint-disable no-console */
// initialOrderState = {
//   order: [{ id: 0, quantity: 0 }],
//   first_name: '',
//   last_name: '',
//   city: '',
//   zip_code: '',
// };

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

    default:
      throw new Error();
  }
};
