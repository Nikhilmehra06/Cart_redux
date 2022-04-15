import { combineReducers } from 'redux';
import { cartReducer } from './Cart/Cart.reducer';
import { loginReducer } from './Login/Login.reducer';

export const rootReducer = combineReducers({
  loginReducer: loginReducer,
  cartReducer: cartReducer,
});
