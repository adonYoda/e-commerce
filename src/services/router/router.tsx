import { createBrowserRouter } from 'react-router-dom';
import LandingPage from 'src/pages/LandingPage';
import ProductsPage from 'src/pages/ProductsPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />,
	},
	{
		path: '/products',
		element: <ProductsPage />,
	},
]);
