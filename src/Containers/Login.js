import React from 'react';
import '../Styles/Containers/Login.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getSesion } from '../actions/sesionAction';

const Login = (props) => {
	const { sesionReducer, getSesion } = props;

	const handleLogin = (event) => {
		event.preventDefault();
		getSesion();
		localStorage.setItem('logged', !sesionReducer.logged);
		localStorage.setItem(
			'authorized',
			!sesionReducer.authorized
		);
	};

	const logged = localStorage.getItem('logged');
	const authorized = localStorage.getItem('authorized');

	if (logged && authorized) {
		return <Redirect to='/' />;
	}

	return (
		<section className='login'>
			<div className='container'>
				<div className='audio'></div>
				<div className='camera'></div>
				<div className='bottom'></div>
				<form className='login__form' onSubmit={handleLogin}>
					<h5 className='login__form-title'>Login</h5>
					<input
						className='login__form-text'
						type='email'
						placeholder='Email...'
					/>
					<input
						className='login__form-text'
						type='password'
						placeholder='Password...'
					/>
					<input
						className='login__form-bottom'
						type='submit'
						value='Send'
					/>
				</form>
			</div>
		</section>
	);
};

const mapStateToProps = (reducers) => {
	const { sesionReducer } = reducers;
	return { sesionReducer };
};

const mapDispatchToProps = { getSesion };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
