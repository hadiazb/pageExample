import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthenticatedRoute = (props) => {
	const { component: Component, path, exact } = props;

	const logged = localStorage.getItem('logged')
		? localStorage.getItem('logged')
		: false;
	const authorized = localStorage.getItem('authorized')
		? localStorage.getItem('authorized')
		: false;

	if (
		(logged === true && authorized === true) ||
		(logged === 'true' && authorized === 'true')
	) {
		return (
			<Route component={Component} path={path} exact={exact} />
		);
	}

	if (logged === true && authorized === false) {
		return (
			<Route component={Component} path={path} exact={exact} />
		);
	}

	return <Redirect to='/' />;
};

/*
  AuthenticatedRoute
  should be used for routes which require authentication
*/

const mapStateToProps = (reducers) => {
	const { sesionReducer } = reducers;
	return { sesionReducer };
};

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthenticatedRoute);
