import { Container, styled } from '@mui/material';
import React from 'react';
import { Route, RouterProvider, Routes } from 'react-router';
import Breadcrumbs from 'src/components/globals/Breadcrumbs';
import LandingPage from 'src/pages/LandingPage';
import ProductsPage from 'src/pages/ProductsPage';
import { homePath, productsNestPath } from 'src/utils/constants/routes.constants';
import { headerSize } from 'src/utils/constants/sizes.constants';

const MainContainer = styled('main')`
	padding-top: ${headerSize.height};
`;
const ContainerStyled = styled(Container)`
	padding-top: 30px;
	padding-bottom: 30px;
`;

const Main = () => {
	return (
		<MainContainer>
			<ContainerStyled>
				<Breadcrumbs />
			</ContainerStyled>
			<Routes>
				<Route path={homePath} element={<LandingPage />} />
				<Route path={productsNestPath} element={<ProductsPage />} />
			</Routes>
		</MainContainer>
	);
};

export default Main;
