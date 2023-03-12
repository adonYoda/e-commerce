import { Container, styled } from "@mui/material";
import React, { memo } from "react";
import { Route, Routes } from "react-router";
import Breadcrumbs from "src/components/globals/Breadcrumbs";
import ScrollToTop from "src/components/globals/ScrollToTop";
import useGetLocation from "src/hooks/useGetLocation";
import useGetParams from "src/hooks/useGetParams";
import AuthRecovery from "src/pages/AuthPage/AuthRecovery";
import AuthSignIn from "src/pages/AuthPage/AuthSignIn";
import AuthSignUp from "src/pages/AuthPage/AuthSignUp";
import LandingPage from "src/pages/LandingPage";
import ProductItemPage from "src/pages/ProductItemPage";
import ProductsPage from "src/pages/ProductsPage";
import {
	authRecoveryPath,
	authSignInPath,
	authSignUpPath,
	homePath,
	productsNestPath,
	productsPath,
} from "src/utils/constants/routes.constants";
import { headerSize } from "src/utils/constants/sizes.constants";

const MainContainer = styled("main")`
	padding-top: ${headerSize.height};
	flex: 1 0 100%;
	display: flex;
	flex-direction: column;
`;

const Main = () => {
	const [productsParam, cactegoryParam, subcategoryParam, productIdParam, productNameParam] = useGetLocation();
	return (
		<MainContainer>
			<Container>
				<Breadcrumbs />
			</Container>
			<ScrollToTop>
				<Routes>
					<Route path={homePath} element={<LandingPage />} />
					<Route path={productsNestPath} element={<ProductsPage />} />
					<>
						<Route path={authSignInPath} element={<AuthSignIn />} />
						<Route path={authSignUpPath} element={<AuthSignUp />} />
						<Route path={authRecoveryPath} element={<AuthRecovery />} />
					</>
					<Route
						path={`${productsPath}/${cactegoryParam}/${subcategoryParam}/${productIdParam}/${productNameParam}`}
						element={<ProductItemPage />}
					/>
				</Routes>
			</ScrollToTop>
		</MainContainer>
	);
};

export default memo(Main);
