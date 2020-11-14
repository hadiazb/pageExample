import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Routes/index';
import Layout from './Containers/Layout';
import Loading from './Components/Loading';

const App = () => {
	const [time, setTime] = useState(false);

	const loading = () => {
		setTimeout(() => {
			setTime(true);
		}, 3000);

		if (time) {
			return (
				<BrowserRouter>
					<Layout>
						<Router />
					</Layout>
				</BrowserRouter>
			);
		}

		return <Loading />;
	};

	return loading();
};

export default App;
