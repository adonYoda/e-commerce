import { Box, CircularProgress, Container } from "@mui/material";
import React, { useState } from "react";
import { useGetProductsQuery } from "src/strore_api/product/productApi";
import { IAboutProduct, IProduct, IRating } from "src/types";
import ProductCard from "./ProductCard";
import { ProductList } from "./ProductsCards.styled";

interface Props {
  productData: IProduct[];
}

const Product = () => {
  const [page, setPage] = useState(0);

  const {
    data = [],
    isLoading,
    isFetching,
    isError,
  } = useGetProductsQuery(page);

  return (
    <Container>
      {isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <ProductList>
          {data.map((product: IProduct) => (
            <ProductCard
              //rating={product.rating} aboutProduct={product.aboutProduct} productId={product.productId}
              product={product}
            />
          ))}
        </ProductList>
      )}
    </Container>
  );
};

export default Product;
