import {
	LOADING,
	ERROR,
	GET_CITY,
} from '../types/callCurrentByCityNameIdTypes';

const INITIAL_STATE = {
	city: [],
	loading: false,
	error: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_CITY:
			return {
				...state,
				city: action.payload,
				loading: false,
				error: '',
			};
		case LOADING:
			return { ...state, loading: true };

		case ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};