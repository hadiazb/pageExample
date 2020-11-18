import { combineReducers } from 'redux';
import sesionReducer from './sesionReducer';
import callCurrentByCityNameIdReducer from './callCurrentByCityNameIdReducer';

export default combineReducers({
	sesionReducer,
	callCurrentByCityNameIdReducer,
});
