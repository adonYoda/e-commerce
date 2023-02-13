import { Container, styled } from "@mui/material";
import React from "react";
import { Route, RouterProvider, Routes } from "react-router";
import Breadcrumbs from "src/components/globals/Breadcrumbs";
import ScrollToTop from "src/components/globals/ScrollToTop";
import Newsletter from "src/components/Newsletter/Newsletter";
import AuthRecovery from "src/pages/AuthPage/AuthRecovery";
import AuthSignIn from "src/pages/AuthPage/AuthSignIn";
import AuthPage from "src/pages/AuthPage/AuthSignIn";
import AuthSignUp from "src/pages/AuthPage/AuthSignUp";
import LandingPage from "src/pages/LandingPage";
import ProductsPage from "src/pages/ProductsPage";
import {
	authRecoveryPath,
	authSignInPath,
	authSignUpPath,
	homePath,
	productsNestPath,
} from "src/utils/constants/routes.constants";
import { headerSize } from "src/utils/constants/sizes.constants";

const MainContainer = styled("main")`
	padding-top: ${headerSize.height};
	flex: 1 0 100%;
	display: flex;
	flex-direction: column;
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
			<ScrollToTop>
				<Routes>
					<Route path={homePath} element={<LandingPage />} />
					<Route path={productsNestPath} element={<ProductsPage />} />
					<>
						<Route path={authSignInPath} element={<AuthSignIn />} />
						<Route path={authSignUpPath} element={<AuthSignUp />} />
						<Route path={authRecoveryPath} element={<AuthRecovery />} />
					</>
				</Routes>
			</ScrollToTop>
		</MainContainer>
	);
};

export default Main;
