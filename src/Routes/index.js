import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';

import NotFound from '../Containers/NotFound';

import { connect } from 'react-redux';

const Router = (props) => {
	const { sesionReducer } = props;
	const ROUTES = sesionReducer.routes;
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
	const { sesionReducer } = reducers;
	return { sesionReducer };
};

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Router);
