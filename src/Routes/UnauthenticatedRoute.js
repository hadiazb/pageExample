import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const UnauthenticatedRoute = (props) => {
	const {
		component: Component,
		path,
		exact
	} = props;

	const logged = localStorage.getItem('logged')
		? localStorage.getItem('logged')
		: false;
	const authorized = localStorage.getItem('authorized')
		? localStorage.getItem('authorized')
		: false;

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
