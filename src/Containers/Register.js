import React, { useState } from 'react';
import Swal from 'sweetalert2';
// import { Redirect } from 'react-router-dom';
import '../Styles/Containers/Register.css';

const Register = (props) => {
	const [register, setRegister] = useState({
		email: '',
		username: '',
		password: '',
		comparePassword: '',
	});

	const handleInputChange = (e) => {
		setRegister({
			...register,
			[e.target.name]: e.target.value,
		});
	};

	const handleRegister = (event) => {
		event.preventDefault();
		const url =
			'https://api-hadiazb-clima.herokuapp.com/api/users/signup';

		if (register.password === register.comparePassword) {
			fetch(url, {
				method: 'POST',
				body: JSON.stringify(register),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((res) => res.json())
				.catch((err) => console.error('Error: ', err))
				.then((response) => {
					response.status === 200
						? Swal.fire({
								title: '<h6>User Register</h6>',
								background: 'rgba(255, 255, 255, 1)',
								timer: 20000,
								timerProgressBar: true,
						  })
						: Swal.fire({
								title: `<h6>${response.body}</h6>`,
								background: 'rgba(255, 255, 255, 1)',
								timer: 20000,
								timerProgressBar: true,
						  });
				});
			document.getElementById('username').value = '';
			document.getElementById('email').value = '';
			document.getElementById('password').value = '';
			document.getElementById('comparePassword').value = '';

			props.history.push(`/login`);
		} else {
			Swal.fire({
				title: '<h6>Tu password no coincide</h6>',
				background: 'rgba(255, 255, 255, 1)',
				timer: 20000,
				timerProgressBar: true,
			});
		}
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
					<label htmlFor='email' className='label'>
						<input
							className='register__form-text'
							type='email'
							name='email'
							placeholder='Email...'
							onChange={handleInputChange}
							id='email'
						/>
					</label>
					<label htmlFor='username' className='label'>
						<input
							className='register__form-text'
							type='username'
							name='username'
							placeholder='Username...'
							onChange={handleInputChange}
							id='username'
						/>
					</label>
					<label htmlFor='password' className='label'>
						<input
							className='register__form-text'
							type='password'
							name='password'
							placeholder='Password...'
							onChange={handleInputChange}
							id='password'
						/>
					</label>
					<label htmlFor='comparePassword'>
						<input
							className='register__form-text'
							type='password'
							placeholder='Repeat your password...'
							name='comparePassword'
							onChange={handleInputChange}
							id='comparePassword'
						/>
					</label>
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
