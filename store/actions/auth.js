import axios from 'axios';
import * as actionTypes from './actionTypes';

export function loginUser({ email, password }) {
	const request = axios.post('/api/login', { email, password })
    .then(response => response.data);
	return {
		type: actionTypes.USER_LOGIN,
		payload: request
	};
}

export function registerUser(user) {
  const request = axios.post(`/api/register`, user)
    .then(response => response.data.success)

  return { 
    type: actionTypes.USER_REGISTER,
    payload: request 
  };
}

export function clearAuth() {
  return {
    type: actionTypes.CLEAR_AUTH,
    payload: {}
  }
}