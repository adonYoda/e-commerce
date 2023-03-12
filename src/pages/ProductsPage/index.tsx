import { Container, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import TopTitleBar from "src/components/globals/TopTitleBar";
import Newsletter from "src/components/Newsletter/Newsletter";
import Products from "src/components/Products";
import useGetLocation from "src/hooks/useGetLocation";
import useGetParams from "src/hooks/useGetParams";
import { categories } from "src/utils/constants/categories.constants";
import ProductItemPage from "../ProductItemPage";
import Sidebar from "./Sidebar/Sidebar";

const ProductsPageContainer = styled("div")`
	padding: 0px 0 48px;
`;
const ProductsPageHeader = styled("div")`
	/* margin-bottom: 30px; */
`;
const ProductsPageMain = styled("div")`
	display: flex;
`;

const names = ["By Price", "By Name", "Most Orders", "Most Likes", "Newest"];

const ProductsPage = () => {
	const [productsParam, categoryParam, subcategoryParam, productIdParam] = useGetLocation();
	const handleGetValue = (value: string) => {
		console.log(value);
	};

	return (
		<>
			<ProductsPageContainer>
				<Container>
					<TopTitleBar
						category={categoryParam}
						subcategory={subcategoryParam}
						selectorList={names}
						handleGetValue={handleGetValue}
						selectorWidth='135px'
					/>
					<ProductsPageMain>
						<Sidebar categoryParam={categoryParam} subcategoryParam={subcategoryParam} />
						<Routes>
							<Route path='/' element={<Navigate to={categories[0].title} />} />
							<Route
								path={`${categoryParam}/${subcategoryParam ? subcategoryParam : ""}`}
								element={<Products />}
							/>
						</Routes>
					</ProductsPageMain>
				</Container>
			</ProductsPageContainer>
			<Newsletter />
		</>
	);
};

export default ProductsPage;
