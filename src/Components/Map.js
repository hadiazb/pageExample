import React, { useState } from 'react';
import {
	GoogleMap,
	withGoogleMap,
	withScriptjs,
	Marker,
	InfoWindow,
} from 'react-google-maps';
import mapStyle from '../assets/mapStyle';

const Map = ({ zoom, lat, lng, loading }) => {
	if (loading) return <h1>Cargando...</h1>;

	const options = {
		styles: mapStyle,
		disableDefaultUI: true,
		zoomControl: true,
	};

	return (
		<GoogleMap
			defaultZoom={zoom ? zoom : 4}
			defaultCenter={{
				lng: lng ? lng : -99.1686937,
				lat: lat ? lat : 19.4270206,
			}}
			options={options}
		>
			<Marker
				position={{
					lat: 20.71413,
					lng: -103.3042,
				}}
			/>
		</GoogleMap>
	);
};

export default withScriptjs(withGoogleMap(Map));
