import * as actionTypes from './Cart.action';

const initialState = {
  cartItem: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const Item = action.payload;
      Item.quantity = 1;
      const currentItem = state.cartItem.find((el) => {
        return el.id === Item.id;
      });

      if (currentItem) {
        return {
          ...state,
          cartItem: state.cartItem.map((elem) => {
            return elem.id === currentItem.id
              ? {
                  ...elem,
                  quantity: elem.quantity + 1,
                }
              : elem;
          }),
        };
      } else {
        return {
          ...state,
          cartItem: [...state.cartItem, Item],
        };
      }
    }

    case actionTypes.INC_QTY: {
      let incQyt = action.payload;
      let currentItem = state.cartItem.find((el) => {
        return el.id === incQyt.id;
      });

      return {
        ...state,
        cartItem: state.cartItem.map((elem) => {
          return elem.id === currentItem.id
            ? {
                ...elem,
                quantity: elem.quantity + 1,
              }
            : elem;
        }),
      };
    }

    case actionTypes.DEC_QYT: {
      let incQyt = action.payload;
      let currentItem = state.cartItem.find((el) => {
        return el.id === incQyt.id;
      });

      return {
        ...state,
        cartItem: state.cartItem
          .map((elem) => {
            return elem.id === currentItem.id
              ? {
                  ...elem,
                  quantity: elem.quantity - 1,
                }
              : elem;
          })
          .filter((element) => element.quantity !== 0),
      };
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
