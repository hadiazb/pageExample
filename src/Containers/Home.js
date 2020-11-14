import React from 'react';
import '../Styles/Containers/Home.css';
import { connect } from 'react-redux';

const Home = (props) => {
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
					<li className='item'>
						<h3 className='home__main-subtitle'>
							By city name or By city ID
						</h3>
						<p className='home__main-text'>
							You can call by city name, state code and country
							code. Please note that searching by states available
							only for the USA locations.
						</p>
						<i>Current Weather Data</i>
					</li>
					<li className='item'>
						<h3 className='home__main-subtitle'>
							By geographic coordinates
						</h3>
						<p className='home__main-text'>
							You can call by location and geographic coordinates.
						</p>
						<i>Current Weather Data</i>
					</li>
					<li className='item'>
						<h3 className='home__main-subtitle'>By ZIP code</h3>
						<p className='home__main-text'>
							Please note if country is not specified then the
							search works for USA as a default.
						</p>
						<i>Current Weather Data</i>
					</li>
					<li className='item'>
						<h3 className='home__main-subtitle'>
							Cities within a rectangle zone
						</h3>
						<p className='home__main-text'>
							API returns the data from cities within the defined
							rectangle specified by the geographic coordinates.
						</p>
						<i>Current Weather Data</i>
					</li>
					<li className='item'>
						<h3 className='home__main-subtitle'>
							Cities in circle
						</h3>
						<p className='home__main-text'>
							API returns data from cities laid within definite
							circle that is specified by center point (lat, lon)
							and expected number of cities (cnt) around this
							point.
						</p>
						<i>Current Weather Data</i>
					</li>
					<li className='item'>
						<h3 className='home__main-subtitle'>
							Call for several city IDs
						</h3>
						<p className='home__main-text'>
							There is a possibility to get current weather data
							for several cities by making one API call.
						</p>
						<i>Current Weather Data</i>
					</li>

					<li className='item'>
						<h3 className='home__main-subtitle'>
							By city name or By city ID
						</h3>
						<p className='home__main-text'>
							You can search weather forecast for 4 days (96 hours)
							with data every hour by city name. All weather data
							can be obtained in JSON and XML formats.
						</p>
						<i>Hourly Forecast 4 days</i>
					</li>
					<li className='item'>
						<h3 className='home__main-subtitle'>
							By geographic coordinates
						</h3>
						<p className='home__main-text'>
							You can search weather forecast for 4 days with data
							every hour by geographic coordinates.
						</p>
						<i>Hourly Forecast 4 days</i>
					</li>
					<li className='item'>
						<h3 className='home__main-subtitle'>By ZIP code</h3>
						<p className='home__main-text'>
							Please note if country is not specified then the
							search works for USA as a default.
						</p>
						<i>Hourly Forecast 4 days</i>
					</li>

					<li className='item'>
						<h3 className='home__main-subtitle'>
							By city name or By city ID
						</h3>
						<p className='home__main-text'>
							You can search 16 day weather forecast with daily
							average parameters by city name. All weather data can
							be obtained in JSON and XML formats.
						</p>
						<i>Daily Forecast 16 days</i>
					</li>
					<li className='item'>
						<h3 className='home__main-subtitle'>
							By geographic coordinates
						</h3>
						<p className='home__main-text'>
							You can seach 16 day weather forecast with daily
							average parameters by geographic coordinats. All
							weather data can be obtained in JSON and XML formats.
						</p>
						<i>Daily Forecast 16 days</i>
					</li>
					<li className='item'>
						<h3 className='home__main-subtitle'>By ZIP code</h3>
						<p className='home__main-text'>
							Please note if country is not specified then the
							search works for USA as a default.
						</p>
						<i>Daily Forecast 16 days</i>
					</li>

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
