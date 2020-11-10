import {
	LOADING,
	ERROR,
	GET_ROUTES,
} from '../types/routesTypes';

const INITIAL_STATE = {
	user: [],
	routes: [],
	loading: false,
	error: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_ROUTES:
			return {
				...state,
				user: [],
				routes: [],
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
