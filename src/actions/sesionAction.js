import { GET_SESION, LEAVE_SESION } from '../types/sesionTypes';

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

export const leaveSesion = () => async (
	dispatch,
	getState
) => {
	const authorized = !getState().sesionReducer.authorized
		? getState().sesionReducer.authorized
		: false;
	const logged = getState().sesionReducer.logged
		? !getState().sesionReducer.logged
		: false;

	dispatch({
		type: LEAVE_SESION,
		payload: { logged, authorized },
	});
};
