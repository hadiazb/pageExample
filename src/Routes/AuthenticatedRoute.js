import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthenticatedRoute = (props) => {
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
