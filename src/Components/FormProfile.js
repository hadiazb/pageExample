import React from 'react';

const FormProfile = () => {
	const handleUpdate = (event) => {
		event.preventDefault();
	};
	return (
		<form
			className='profile__update-form'
			onSubmit={handleUpdate}
		>
			<input
				className='input'
				type='text'
				placeholder='Name...'
			/>
			<input
				className='input'
				type='text'
				placeholder='Username...'
			/>
			<input
				className='input'
				type='text'
				placeholder='Email...'
			/>
			<input
				className='input'
				type='text'
				placeholder='Phone...'
			/>
			<input
				className='input'
				type='text'
				placeholder='Country...'
			/>
			<input
				className='input'
				type='text'
				placeholder='State...'
			/>
			<input
				className='input'
				type='text'
				placeholder='City...'
			/>
			<input
				className='input'
				type='text'
				placeholder='Password...'
			/>
			<input
				className='input'
				type='text'
				placeholder='New Password...'
			/>
			<label className='label' htmlFor='birthday'>
				<span>Birthday</span>
			</label>
			<input className='input' type='date' name='birthday' />
			<input className='bottom' type='submit' value='Update' />
		</form>
	);
};

export default FormProfile;
