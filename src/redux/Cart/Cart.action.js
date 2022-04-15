export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const INC_QTY = 'INC_QTY';
export const DEC_QYT = 'DEC_QYT';

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

export const incQyt = (payload) => {
  return {
    type: INC_QTY,
    payload,
  };
};

export const decQyt = (payload) => {
  return {
    type: DEC_QYT,
    payload,
  };
};
