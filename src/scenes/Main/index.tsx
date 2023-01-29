import React from 'react';
import { Route, RouterProvider, Routes } from 'react-router';
import LandingPage from 'src/pages/LandingPage';
import ProductsPage from 'src/pages/ProductsPage';
import { homePath, productsPath } from 'src/utils/constants/routes.constants';

const Main = () => {
	return (
		<>
			<Routes>
				<Route path={homePath} element={<LandingPage />} />
				<Route path={productsPath} element={<ProductsPage />} />
			</Routes>
		</>
	);
};

export default Main;
