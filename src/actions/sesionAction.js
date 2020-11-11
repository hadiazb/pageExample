import { GET_SESION } from '../types/sesionTypes';

export const getSesion = () => async (
	dispatch,
	getState
) => {
	const authorized = getState().sesionReducer.authorized
		? getState().sesionReducer.authorized
		: true;
	const logged = getState().sesionReducer.logged
		? getState().sesionReducer.logged
		: true;

	dispatch({
		type: GET_SESION,
		payload: { logged, authorized },
	});
};
