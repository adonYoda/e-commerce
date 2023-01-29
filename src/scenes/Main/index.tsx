import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from 'src/services/router/router';

const Main = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default Main;
