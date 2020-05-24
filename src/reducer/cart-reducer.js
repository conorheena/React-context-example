const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    case 'REMOVE_FROM_CART':
      return state.filter((product) => {
        return product.id !== action.product.id 
      })
    default:
      return state;
  }
};

export default CartReducer;
