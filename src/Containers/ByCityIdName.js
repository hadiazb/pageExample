import React, { useState } from 'react';
import '../Styles/Containers/ByCityNameId.css';
import { connect } from 'react-redux';
import * as callCurrentByCityNameIdActions from '../actions/callCurrentByCityNameIdActions';
import { FiSearch } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { MeteorRainLoading } from 'react-loadingg';
import SearchByCityNameId from '../Components/SearchByCityNameId';

const ByCityNameId = (props) => {
	const {
		getCityByName,
		callCurrentByCityNameIdReducer: { loading },
		callCurrentByCityNameIdReducer: { city },
		callCurrentByCityNameIdReducer: { error },
	} = props;
	const [cityName, setCityName] = useState({
		name: '',
		img: '',
	});

	const handleClick = async () => {
		if (cityName.name === '') {
			Swal.fire({
				title: `<h6 style="color:  #ffffff">You must enter city name</h6>`,
				background: '#27292d',
				timer: 20000,
				timerProgressBar: true,
				width: '320px',
				footer: '<h6 style="color: #ffffff">Weather App</h6>',
				padding: '5% 10px 20px',
			});
		}
		if (cityName.name !== '') {
			await getCityByName(cityName.name);
			clear();
		}
	};

	const handleEnter = async (event) => {
		const keycode = event.which;
		if (keycode === 13) {
			handleClick();
		}
	};

	const handleInputChange = (e) => {
		setCityName({
			...cityName,
			name: e.target.value,
		});
	};

	const clear = () => {
		document.getElementById('search').value = '';
	};

	const putContent = () => {
		if (loading) {
			return (
				<div className='loadingContainer'>
					<MeteorRainLoading
						size='large'
						color='#fbfdff'
						speed={0.5}
					/>
				</div>
			);
		}

		if (error) {
			return (
				<div className='errorContainer'>
					<h4 className='errorContainer__message'>
						There are a error: {error}
					</h4>
				</div>
			);
		}

		if (city.length === 0) {
			return (
				<div className='previewContainer'>
					<h4 className='previewContainer__message'>
						You must to do request
					</h4>
				</div>
			);
		}

		return <SearchByCityNameId city={city} />;
	};

	return (
		<div className='byCityName'>
			<div className='byCityName__header'>
				<h4 className='byCityName__header-title'>
					Search by city name
				</h4>
				<div className='byCityName__header-form'>
					<div className='button'>
						<input
							className='input'
							type='text'
							placeholder='Entry city...'
							onChange={handleInputChange}
							onKeyPress={handleEnter}
							id='search'
						/>
						<span onClick={handleClick}>
							<FiSearch size='20' />
						</span>
					</div>
				</div>
			</div>
			{putContent()}
		</div>
	);
};

const mapStateToProps = (reducers) => {
	const { callCurrentByCityNameIdReducer } = reducers;
	return { callCurrentByCityNameIdReducer };
};

const mapDispatchToProps = {
	...callCurrentByCityNameIdActions,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ByCityNameId);
