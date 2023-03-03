import { Box, CircularProgress, Container, Pagination, Skeleton, Stack } from "@mui/material";
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import useGetParams from "src/hooks/useGetParams";
import { useGetProductsQuery } from "src/strore_api/product/productApi";
import { IAboutProduct, IProduct, IRating } from "src/types";
import { productCardSize } from "src/utils/constants/sizes.constants";
import ProductCard from "./ProductCard";
import { ProductList } from "./ProductsCards.styled";

interface Props {
	productData?: IProduct[];
	contained?: string | undefined;
}

const Products: FC<Props> = ({ contained }) => {
	const [category, subcategory] = useGetParams();
	const [page, setPage] = useState(1);
	const countPerPage = contained ? 12 : 9;
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	const {
		data = [],
		isLoading,
		isFetching,
		isError,
	} = useGetProductsQuery({ page, countPerPage, category, subcategory, contained });

	return (
		<Container sx={{ padding: `${contained ? "auto" : 0} !important` }}>
			<>
				<ProductList>
					{data.map((product: IProduct) =>
						isFetching ? (
							<Skeleton
								key={product.productId}
								variant='rectangular'
								width={productCardSize.width}
								height={productCardSize.height}
								sx={{ borderRadius: "10px" }}
							/>
						) : (
							<ProductCard key={product.productId} product={product} />
						)
					)}
				</ProductList>
				<Stack sx={{ margin: "0 auto", width: "fit-content", marginTop: "35px" }}>
					<Pagination count={10} size='large' page={page} onChange={handleChange} color='primary' />
				</Stack>
			</>
		</Container>
	);
};

export default Products;
