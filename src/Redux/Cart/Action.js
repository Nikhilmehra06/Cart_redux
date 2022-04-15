export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export const addingToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const deletingFromCart = (payload) => {
  return {
    type: DELETE_FROM_CART,
    payload,
  };
};
