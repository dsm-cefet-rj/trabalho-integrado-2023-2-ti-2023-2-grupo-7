import { combineReducers } from 'redux';
import cartReducer from './CartReducer';

const rootReducer = combineReducers({
  cart: cartReducer, 
});

export default rootReducer;
