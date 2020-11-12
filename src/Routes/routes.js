import Register from '../Containers/Register';
import Login from '../Containers/Login';
import Home from '../Containers/Home';
import Result from '../Containers/Result';
import Report from '../Containers/Report';
import Logout from '../Containers/Logout';
import NoAuth from '../Containers/NoAuth';

const ROUTES = [
	{
		path: '/register',
		key: 'REGISTER',
		exact: true,
		component: Register,
		auth: false,  // Public Route
	},
	{
		path: '/login',
		key: 'LOGIN',
		exact: true,
		component: Login,
		auth: false, // Public Route
	},
	{
		path: ['/home', '/'],
		key: 'HOME',
		exact: true,
		component: Home,
		auth: false, // Public Route
	},
	{
		path: '/report',
		key: 'REPORT',
		exact: true,
		component: Report,
		auth: true, // Private Route
	},
	{
		path: '/result',
		key: 'RESULT',
		exact: true,
		component: Result,
		auth: true, // Private Route
	},
	{
		path: '/profile',
		key: 'PROFILE',
		exact: true,
		component: Result,
		auth: true, // Private Route
	},
	{
		path: '/logout',
		key: 'LOGOUT',
		exact: true,
		component: Logout,
		auth: true, // Private Route
	},
	{
		path: '/no-auth',
		key: 'NOAUTH',
		exact: true,
		component: NoAuth,
		auth: false, // Public Route
	},
];

export default ROUTES;
