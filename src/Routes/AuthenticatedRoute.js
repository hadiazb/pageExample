import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthenticatedRoute = (props) => {
	const {
		component: Component,
		path,
		exact,
		routesReducer,
	} = props;

	const logged = routesReducer.logged;
	const authorized = routesReducer.authorized;

	if (logged && authorized) {
		return (
			<Route component={Component} path={path} exact={exact} />
		);
	}
	return <Redirect to='/no-auth' />;
};

/*
  AuthenticatedRoute
  should be used for routes which require authentication
*/

const mapStateToProps = (reducers) => {
	const { routesReducer } = reducers;
	return { routesReducer };
};

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthenticatedRoute);
