import Register from '../Containers/Register';
import Login from '../Containers/Login';
import Home from '../Containers/Home';

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
];

export default ROUTES;
