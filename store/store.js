import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const makeStore = () => {
	return createStore(
		reducers,
		composeWithDevTools(applyMiddleware(promiseMiddleware, thunk))
	);
};

export default makeStore;