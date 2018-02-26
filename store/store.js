import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';

import reducers from './reducers';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;


const makeStore = () => {
	return createStore(
		reducers,
		composeEnhancers(applyMiddleware(promiseMiddleware, thunk))
	);
};

export default makeStore;