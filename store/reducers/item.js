const initialState = {};

export default function(state = initialState, action) {
	switch (action.type) {
		case 'ADD_ITEM':
			return { ...state, newItem: action.payload };
		default:
			return state;
	}
}
