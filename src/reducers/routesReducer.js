import {
	LOADING,
	ERROR,
	GET_ROUTES,
} from '../types/routesTypes';
import ROUTES from '../Routes/routes';

const INITIAL_STATE = {
	logged: true,
	authorized: false,
	routes: ROUTES,
	loading: false,
	error: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_ROUTES:
			return {
				...state,
				logged: true,
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
