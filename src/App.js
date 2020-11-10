import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Routes/index';
import Layout from './Containers/Layout';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Router />
			</Layout>
		</BrowserRouter>
	);
};

export default App;
