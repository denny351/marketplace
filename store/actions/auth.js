import axios from 'axios';
import * as actionTypes from './actionTypes';

export function loginUser({ email, password }) {
	const request = axios.post('/api/login', { email, password })
    .then(response => response.data);

    console.log(email, password)
	return {
		type: 'USER_LOGIN',
		payload: request
	};
}
