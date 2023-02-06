import { Container, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router';
import LastPostsBlog from 'src/components/Blog';
import Breadcrumbs from 'src/components/globals/Breadcrumbs';
import TopTitleBar from 'src/components/globals/TopTitleBar';
import Newsletter from 'src/components/Newsletter/Newsletter';
import useGetParams from 'src/hooks/useGetParams';
import { categories } from 'src/utils/constants/categories.constants';
import Products from './FakeProducts';
import Sidebar from './Sidebar/Sidebar';

const ProductsPageContainer = styled('div')`
	padding: 0px 0 48px;
`;
const ProductsPageHeader = styled('div')`
	/* margin-bottom: 30px; */
`;
const ProductsPageMain = styled('div')`
	display: flex;
`;

const names = ['By Price', 'By Name', 'Most Orders', 'Most Likes', 'Newest'];

const ProductsPage = () => {
	const [categoryParam, subcategoryParam] = useGetParams();
	const handleGetValue = (value: string) => {
		console.log(value);
	};
	return (
		<>
			<ProductsPageContainer>
				<Container>
					<TopTitleBar
						title={categoryParam}
						selectorList={names}
						handleGetValue={handleGetValue}
						selectorWidth='135px'
					/>
					<ProductsPageMain>
						<Sidebar categoryParam={categoryParam} />
						<Routes>
							<Route path='/' element={<Navigate to={categories[0].title} />} />
							<Route
								path={categoryParam}
								element={<Products categoryParam={categoryParam} subcategoryParam={subcategoryParam} />}
							>
								<Route
									path={subcategoryParam}
									element={
										<Products categoryParam={categoryParam} subcategoryParam={subcategoryParam} />
									}
								/>
							</Route>
						</Routes>
					</ProductsPageMain>
				</Container>
			</ProductsPageContainer>
			<Newsletter />
		</>
	);
};

export default ProductsPage;
