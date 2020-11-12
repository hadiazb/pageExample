import React from 'react';
import FormProfile from '../Components/FormProfile';
import '../Styles/Containers/Profile.css';

const Profile = () => {
	return (
		<div className='profile'>
			<div className='profile__update'>
				<h4 className='profile__update-title'>
					Update Information
				</h4>
				<FormProfile />
			</div>
			<div className='profile__card'>
				<div
					className='profile__card-header'
					style={{ backgroundColor: '#000000' }}
				></div>
			</div>
		</div>
	);
};

export default Profile;
