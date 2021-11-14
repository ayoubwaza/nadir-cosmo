import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes";
const initialCartState = {
  products: [],
};
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      /* const existItem = state.cartItems.find((x) => x.product === item.product) */
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        products: state.products.filter((x) => x.id !== action.payload),
      };
    default:
     return state;
  }
};
export default cartReducer;