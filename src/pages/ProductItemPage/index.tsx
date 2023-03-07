import { Container, Divider, styled } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Newsletter from "src/components/Newsletter/Newsletter";
import Products from "src/components/Products";
import Section from "src/components/Section/Section";
import { selectProduct } from "src/strore_api/product/productSlice";
import ProductItemGallery from "./ProductItemGallery/ProductItemGallery";
import ProductItemSidebar from "./ProductItemSidebar/ProductItemSidebar";

const ProductItemPageContainer = styled("div")``;
const ProductItem = styled("div")`
	display: flex;
	justify-content: space-between;
	column-gap: 77px;
	margin-bottom: 77.5px;
`;
const AlsoLike = styled("div")``;
const DividerStyled = styled(Divider)`
	border-color: ${({ theme }) => theme.palette.grey["A200"]};
`;
const ProductItemPage = () => {
	const product = useSelector(selectProduct);
	const photosUrl = [...product.aboutProduct.photos];
	photosUrl.unshift(product.aboutProduct.mainImgUrl);

	return (
		<ProductItemPageContainer>
			<Container>
				<ProductItem>
					<ProductItemGallery photosUrl={photosUrl} />
					<ProductItemSidebar product={product} />
				</ProductItem>
				{/* <AlsoLike></AlsoLike> */}
				<DividerStyled />
			</Container>
			<Section title='You might also like'>
				<Products />
			</Section>
			<Newsletter />
		</ProductItemPageContainer>
	);
};

export default ProductItemPage;
