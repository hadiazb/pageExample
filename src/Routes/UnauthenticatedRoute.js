import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const UnauthenticatedRoute = (props) => {
	const {
		component: Component,
		path,
		exact,
		routesReducer,
	} = props;

	const logged = routesReducer.logged;
	const authorized = routesReducer.authorized;

	if (logged && authorized) {
		return <Redirect to='/dashboard' />;
	}
	return (
		<Route component={Component} path={path} exact={exact} />
	);
};

/*
  AuthenticatedRoute
  should be used for routes which not require authentication
*/

const mapStateToProps = (reducers) => {
	const { routesReducer } = reducers;
	return { routesReducer };
};

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UnauthenticatedRoute);
