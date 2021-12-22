const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_CITY':
			const tempCity = action.payload.city;
			return { ...state, city: tempCity };
		default:
			return state;
	}
};

const initialState = {
	city: { name: null, long: 0, lat: 0 },
};

export default reducer;
