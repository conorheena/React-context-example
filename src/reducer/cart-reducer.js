const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    case 'REMOVE_FROM_CART':
      return state.filter((product) => product.id !== action.id)
    default:
      return state;
  }
};

export default CartReducer;
