import * as actionTypes from './Action';

const initialState = {
  cartItem: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const Item = action.payload;
      const currentItem = state.cartItem.find((el) => {
        return el.id === Item.id;
      });

      if (currentItem) {
        return {
          ...state,
          cartItem: state.cartItem.map((elem) => {
            return elem.id === currentItem.id ? Item : elem;
          }),
        };
      } else {
        return {
          ...state,
          cartItem: [...state.cartItem, Item],
        };
      }
    }
    case actionTypes.DELETE_FROM_CART: {
      let updatedArr = [...state.cartItem];
      let update = updatedArr.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cartItem: update,
      };
    }

    default:
      return state;
  }
};
