import React, { useState } from 'react';
import {
	GoogleMap,
	withGoogleMap,
	withScriptjs,
	Marker,
	InfoWindow,
} from 'react-google-maps';
import mapStyle from '../assets/mapStyle';

const Map = ({ zoom, lat, lng, city }) => {
	const [flag, setFlag] = useState(null);
	const options = {
		styles: mapStyle,
		disableDefaultUI: true,
		zoomControl: true,
	};

	console.log(flag);

	return (
		<GoogleMap
			defaultZoom={zoom ? zoom : 8}
			defaultCenter={{
				lng: lng ? lng : -99.1686937,
				lat: lat ? lat : 19.4270206,
			}}
			options={options}
		>
			<Marker
				position={{
					lng: lng ? lng : -99.1686937,
					lat: lat ? lat : 19.4270206,
				}}
				onClick={() => {
					setFlag(city);
				}}
			/>
			{flag ? (
				<InfoWindow
					position={{
						lng: lng ? lng : -99.1686937,
						lat: lat ? lat : 19.4270206,
					}}
					onCloseClick={() => {
						setFlag(null);
					}}
				>
					<div className='detail'>
						<h4 className='detail__title'>Detalle</h4>
					</div>
				</InfoWindow>
			) : null}
		</GoogleMap>
	);
};

export default withScriptjs(withGoogleMap(Map));
