import React from 'react';
import { format } from 'date-fns';
import '../Styles/Components/SearchByCityNameId.css';
import {
	FaTemperatureLow,
	FaTemperatureHigh,
} from 'react-icons/fa';
import {
	AiOutlinePlusCircle,
	AiOutlineMinusCircle,
} from 'react-icons/ai';

const SearchByCityNameId = ({ city }) => {
	return (
		<div className='city'>
			<div className='city__info'>
				<h6 className='city__info-date'>
					{format(new Date() - city.dt, 'PPPP')}
				</h6>
				<h6 className='city__info-temp'>
					{city.main.temp >= 25 ? (
						<FaTemperatureHigh />
					) : (
						<FaTemperatureLow />
					)}{' '}
					{Math.round(city.main.temp)} °C{' '}
				</h6>
				<h4 className='city__info-title'>
					Location:{' '}
					<span>
						{' '}
						{city.name} - {city.sys.country}
					</span>
				</h4>
				<img
					src={
						`http://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`
							? `http://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`
							: 'http://openweathermap.org/img/wn/10d@4x.png'
					}
					className='city__info-img'
					alt='Weather Img'
				/>
				<h6 className='city__info-subtitle'>
					Weather:{' '}
					<span>
						{city.weather[0].main} - {city.weather[0].description}{' '}
					</span>
				</h6>
				<h6 className='city__info-values'>Weather Values</h6>
				<h6 className='city__info-tempSubtitle'>
					<AiOutlineMinusCircle />
					{Math.round(city.main.temp_min)} °C{' '}
					<span> Temp Range </span> <AiOutlinePlusCircle />
					{Math.round(city.main.temp_max)} °C{' '}
				</h6>
				<ul className='city__info-boxInfo'>
					<li className='list'>
						<span className='list__props'>Feels Like</span>
						<span className='list__value'>
							{Math.round(city.main.feels_like)} °C
						</span>
					</li>
					<li className='list'>
						<span className='list__props'>Pressure</span>
						<span className='list__value'>
							{Math.round(city.main.pressure)} MPa
						</span>
					</li>
					<li className='list'>
						<span className='list__props'>Humidity</span>
						<span className='list__value'>
							{Math.round(city.main.humidity)} %
						</span>
					</li>
					<li className='list'>
						<span className='list__props'>Wind Speed</span>
						<span className='list__value'>
							{city.wind.speed} km/h
						</span>
					</li>
					<li className='list'>
						<span className='list__props'>Wind Deg</span>
						<span className='list__value'>
							{Math.round(city.wind.deg)} °
						</span>
					</li>
				</ul>
			</div>
			<div className='city__map'></div>
		</div>
	);
};

export default SearchByCityNameId;
