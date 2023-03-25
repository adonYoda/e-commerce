import { Container, Divider, Skeleton, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Newsletter from "src/components/Newsletter/Newsletter";
import Products from "src/components/Products";
import Section from "src/components/Section/Section";
import useGetLocation from "src/hooks/useGetLocation";
import { useGetProductQuery } from "src/strore_api/product/productApi";
import { selectProduct } from "src/strore_api/product/productSlice";
import { IProduct } from "src/types";
import { productsPath } from "src/utils/constants/routes.constants";
import ProductItemGallery from "./ProductItemGallery/ProductItemGallery";
import ProductItemSidebar from "./ProductItemSidebar/ProductItemSidebar";

const ProductItemPageContainer = styled("div")``;
const ProductItem = styled("div")`
	display: flex;
	justify-content: space-between;
	column-gap: 77px;
	margin-bottom: 77.5px;
`;
const DividerStyled = styled(Divider)`
	border-color: ${({ theme }) => theme.palette.grey["A200"]};
`;
const ProductItemPage = () => {
	const [categoryParam, subcategoryParam, productCodeParam] = useGetLocation(productsPath);
	const productCode = productCodeParam.substring(productCodeParam.indexOf("=") + 1);

	const product = useSelector(selectProduct);

	const { data, isFetching, isSuccess } = useGetProductQuery(
		{ productCode },
		{ skip: +productCode === product.productCode }
	);

	const reducePhotos = (product: IProduct) => {
		const photosUrl = [...product!.aboutProduct.photos];
		photosUrl.unshift(product!.aboutProduct.mainImgUrl);
		return photosUrl;
	};

	return (
		<ProductItemPageContainer>
			<Container>
				{isFetching ? (
					<Skeleton
						key={product.productCode}
						variant='rectangular'
						width='100%'
						height='1273px'
						sx={{ borderRadius: "10px" }}
					/>
				) : (
					(+productCode === product.productCode || isSuccess) && (
						<ProductItem>
							<ProductItemGallery photosUrl={reducePhotos(data ?? product)} />
							<ProductItemSidebar product={data ?? product} />
						</ProductItem>
					)
				)}
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
