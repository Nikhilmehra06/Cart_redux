import { combineReducers } from 'redux';
import { cartReducer } from './Cart/Reducer';
import { loginReducer } from './Login/Reducer';
export const rootReducer = combineReducers({
  loginReducer: loginReducer,
  cartReducer: cartReducer,
});
