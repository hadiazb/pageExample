import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
	AuthenticatedRoute,
	UnauthenticatedRoute,
} from './AuthRoutes';
import NotFound from '../Containers/NotFound';

import { connect } from 'react-redux';

const Router = (props) => {
	const { routesReducer } = props;
	const ROUTES = routesReducer.routes;
	const routes = ROUTES.map((route) => {
		if (route.path instanceof Array) {
			return route.path.map((path) => ({
				...route,
				path,
			}));
		}
		return route;
	}).flat();

	return (
		<Switch>
			{routes.map(
				({ auth, exact, key, path, redirect, component }) => {
					const AuthRoute = auth
						? AuthenticatedRoute
						: UnauthenticatedRoute;
					return (
						<AuthRoute
							key={key}
							exact={exact}
							component={component}
							path={path}
							redirect={redirect}
						/>
					);
				}
			)}
			<Route component={NotFound} />
		</Switch>
	);
};

const mapStateToProps = (reducers) => {
	const { routesReducer } = reducers;
	return { routesReducer };
};

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Router);
