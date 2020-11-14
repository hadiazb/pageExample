import React from 'react';
import '../Styles/Components/Loading.css';
import { WindMillLoading } from 'react-loadingg';

const Loading = () => {
	return (
		<div className='loading'>
			<div className='loading__icon'>
				<div className='loading__icon-item'>
					<WindMillLoading
						size='large'
						color='#ffffff'
						speed={5}
					/>
				</div>
				<div className='loading__icon-item'>
					<WindMillLoading
						size='large'
						color='#ffffff'
						speed={4}
					/>
				</div>
				<div className='loading__icon-item'>
					<WindMillLoading
						size='large'
						color='#ffffff'
						speed={3}
					/>
				</div>
				<div className='loading__icon-item'>
					<WindMillLoading
						size='large'
						color='#ffffff'
						speed={2}
					/>
				</div>
				<div className='loading__icon-item'>
					<WindMillLoading
						size='large'
						color='#ffffff'
						speed={1}
					/>
				</div>
			</div>
		</div>
	);
};

export default Loading;
