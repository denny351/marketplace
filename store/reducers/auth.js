const initialState = {
	login: {
		isAuth: false,
		message: ''
	},
	registered: false
};

export default function(state = initialState, action) {
	switch (action.type) {
    case 'USER_AUTH':
      return { ...state, login: action.payload };
		case 'USER_LOGIN':
			return { ...state, login: action.payload };
		case 'USER_REGISTER':
			return { ...state, registered: action.payload };
		case 'CLEAR_AUTH':
			return { ...state, registered: false };
		default:
			return state;
	}
}
