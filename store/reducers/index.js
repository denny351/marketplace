import { combineReducers } from 'redux';
// import demo from './demo_reducer';
import auth from './auth';

const rootReducer = combineReducers({
	auth
});

export default rootReducer;
