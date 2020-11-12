import React from 'react';
import '../Styles/Containers/Profile.css';

const Profile = () => {
	const handleUpdate = (event) => {
		event.preventDefault();
	};

	return (
		<div className='profile'>
			<div className='profile__update'>
				<h4 className='profile__update-title'>
					Update Information
				</h4>
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
					<label className='label' htmlFor='date'>
						<span>Birthday</span>
					</label>
					<input className='input' type='date' name='date' />
					<input
						className='bottom'
						type='submit'
						value='Update'
					/>
				</form>
			</div>
		</div>
	);
};

export default Profile;
