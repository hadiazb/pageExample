import React from 'react';
import '../Styles/Containers/Home.css';
import { connect } from 'react-redux';
import Data from '../assets/data/HomeData';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Home = () => {
	const handleIntro = () => {
		const app = localStorage.getItem('logged');
		if (app !== 'true') {
			Swal.fire({
				title: `<h6 style="color:  #ffffff">You must register</h6>`,
				background: '#27292d',
				timer: 20000,
				timerProgressBar: true,
				width: '320px',
				footer: '<h6 style="color: #ffffff">Weather App</h6>',
				padding: '5% 10px 20px',
			});
		}
	};
	return (
		<section className='home'>
			<div className='home__header'>
				<div className='home__header-content'>
					<h2 className='title'>Weather App</h2>
					<p className='text'>
						Access current weather data for any location on Earth
						including over 200,000 cities! We collect and process
						weather data from different sources such as global and
						local weather models, satellites, radars and vast
						network of weather stations.
					</p>
				</div>
			</div>
			<div className='home__main'>
				<h3 className='home__main-title'>Search Types</h3>
				<ul className='home__main-list'>
					{Data.map((item) => (
						<Link
							to={item.path}
							key={item.id}
							onClick={handleIntro}
						>
							<li className='item'>
								<h3 className='home__main-subtitle'>
									{item.title}
								</h3>
								<p className='home__main-text'>{item.text}</p>
								<i>{item.label}</i>
								<div className='home__main-star'>
									{item.icon.map((icon, index) => (
										<div key={index}>
											<span>{icon.one}</span>
											<span>{icon.two}</span>
											<span>{icon.three}</span>
											<span>{icon.four}</span>
											<span>{icon.five}</span>
										</div>
									))}
								</div>
							</li>
						</Link>
					))}
				</ul>
			</div>
		</section>
	);
};

const mapStateToProps = (reducers) => {
	const { sesionReducer } = reducers;
	return { sesionReducer };
};

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
