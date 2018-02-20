const initialState = {
	key1: 'key1'
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'EXAMPLE': return {...state, data: action.payload}
    default: return state;
  }
}

export default reducer;