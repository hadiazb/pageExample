import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const UnauthenticatedRoute = (props) => {
	const {
		component: Component,
		path,
		exact,
		sesionReducer,
	} = props;

	const logged = sesionReducer.logged;
	const authorized = sesionReducer.authorized;

	if (logged && authorized) {
		return (
			<Route component={Component} path={path} exact={exact} />
		);
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
	const { sesionReducer } = reducers;
	return { sesionReducer };
};

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UnauthenticatedRoute);
