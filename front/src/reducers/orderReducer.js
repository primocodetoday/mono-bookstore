// initialOrderState = {
//   order: [{ id: 0, quantity: 0 }],
//   first_name: '',
//   last_name: '',
//   city: '',
//   zip_code: '',
// };

export const orderReducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_BOOK':
      console.log('Remove_Book success');
      return {
        ...state,
        order: [...state.order.filter((item) => item.id !== action.payload)],
      };
    default:
      throw new Error();
  }
};
