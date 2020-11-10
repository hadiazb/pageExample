import React from 'react';
import '../Styles/Containers/Login.css';

const Login = () => {
	const handleLogin = (event) => {
		event.preventDefault();
	};

	return (
		<section className='login'>
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
		</section>
	);
};

export default Login;
