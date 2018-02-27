import { combineReducers } from 'redux';
import auth from './auth';
import item from './item';

const rootReducer = combineReducers({
  auth,
  item
});

export default rootReducer;
