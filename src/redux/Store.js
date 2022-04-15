import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './RootReducer';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);
