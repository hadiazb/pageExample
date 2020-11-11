import {
	LOADING,
	ERROR,
	GET_SESION,
} from '../types/sesionTypes';
import ROUTES from '../Routes/routes';

const INITIAL_STATE = {
	logged: false,
	authorized: false,
	routes: ROUTES,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_SESION:
			return {
				...state,
				logged: action.payload.logged,
				authorized: action.payload.authorized,
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
