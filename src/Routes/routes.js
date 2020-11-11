import Register from '../Containers/Register';
import Login from '../Containers/Login';
import Home from '../Containers/Home';
import Result from '../Containers/Result';
import Report from '../Containers/Report';
import NoAuth from '../Containers/NoAuth';

const ROUTES = [
	{
		path: '/register',
		key: 'REGISTER',
		exact: true,
		component: Register,
		auth: false,
	},
	{
		path: '/login',
		key: 'LOGIN',
		exact: true,
		component: Login,
		auth: false,
	},
	{
		path: ['/home', '/'],
		key: 'HOME',
		exact: true,
		component: Home,
		auth: false,
	},
	{
		path: '/report',
		key: 'REPORT',
		exact: true,
		component: Report,
		auth: true,
	},
	{
		path: '/result',
		key: 'RESULT',
		exact: true,
		component: Result,
		auth: true,
	},
	{
		path: '/no-auth',
		key: 'NOAUTH',
		exact: true,
		component: NoAuth,
		auth: false,
	},
];

export default ROUTES;
