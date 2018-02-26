const initialState = {
  login: {
    isAuth: false,
    message: ''
  }  
}

export default function(state = initialState, action) {
	switch (action.type) {
		case 'USER_LOGIN':
      return { ...state, login: action.payload };
		default:
			return state;
	}
}
