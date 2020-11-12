import React from 'react';
import '../Styles/Containers/Register.css';

const Register = () => {
	const handleRegister = (event) => {
		event.preventDefault();
	};
	return (
		<section className='register'>
			<div className='container'>
				<div className='audio'></div>
				<div className='camera'></div>
				<div className='bottom'></div>
				<form
					className='register__form'
					onSubmit={handleRegister}
				>
					<h5 className='register__form-title'>Register</h5>
					<input
						className='register__form-text'
						type='email'
						placeholder='Email...'
					/>
					<input
						className='register__form-text'
						type='username'
						placeholder='Username...'
					/>
					<input
						className='register__form-text'
						type='password'
						placeholder='Password...'
					/>
					<input
						className='register__form-text'
						type='email'
						placeholder='Repeat your password...'
					/>
					<input
						className='register__form-bottom'
						type='submit'
						value='Send'
					/>
				</form>
			</div>
		</section>
	);
};

export default Register;
