import axios from 'axios';
import * as actionTypes from './actionTypes';

export function addItem(itemdata) {
  console.log(itemdata)
	const request = axios.post('/api/item', itemdata).then(response => response.data);

	return {
		type: actionTypes.ADD_ITEM,
		payload: request
	};
}