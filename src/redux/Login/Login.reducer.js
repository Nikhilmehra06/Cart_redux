import * as actionTypes from './Login.action';

const initialState = {
  user: {
    username: '',
    email: '',
    password: '',
  },
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN: {
      return {
        ...state,
        user: action.payload,
      };
    }

    default:
      return state;
  }
};
