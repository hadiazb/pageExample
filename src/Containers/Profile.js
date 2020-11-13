import React from 'react';
import FormProfile from '../Components/FormProfile';
import { HiPhotograph } from 'react-icons/hi';
import { MdPhotoCamera } from 'react-icons/md';
import '../Styles/Containers/Profile.css';

const Profile = (props) => {
	const url =
		'https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FBackground%2FbackgroundCard.jpg?alt=media&token=3f10df12-defc-49c9-8b46-341f14a4d3e4';

	const photo =
		'https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FProfile%2FFotosHugo%2Fprofile.jpg?alt=media&token=7752a102-74bd-42d1-96d3-1445c426e499';

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
					style={{
						backgroundImage: `url(${url})`,
					}}
				>
					<img
						src={props.photo ? props.photo : photo}
						alt='foto'
						className='photo'
					/>
				</div>
				<div className='profile__card-header-input'>
					<div className='file'>
						<input type='file' className='file__input' />
						<HiPhotograph size='20' />
					</div>
				</div>
				<div className='profile__card-header-photo'>
					<div className='file'>
						<input type='file' className='file__input' />
						<MdPhotoCamera size='50' />
					</div>
				</div>
				<div className='profile__card-header-info'>
					<h4 className='title'>User Information</h4>
					<h5 className='props'>
						Username: <span>hadiazb</span>
					</h5>
					<h5 className='props'>
						Name: <span>Hugo Andres Diaz Bernal</span>{' '}
					</h5>
					<h5 className='props'>
						Email: <span>hugoandresdiazbernal@gmail.com</span>
					</h5>
				</div>
			</div>
		</div>
	);
};

export default Profile;
