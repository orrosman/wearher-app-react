const reducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_CITY':
			const tempCity = action.payload.city;
			return { ...state, city: tempCity };
		default:
			return state;
	}
};

export default reducer;
