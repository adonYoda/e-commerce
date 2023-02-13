import { Box, CircularProgress, Container, Pagination, Stack } from "@mui/material";
import React, { useState } from "react";
import { useGetProductsQuery } from "src/strore_api/product/productApi";
import { IAboutProduct, IProduct, IRating } from "src/types";
import ProductCard from "./ProductCard";
import { ProductList } from "./ProductsCards.styled";

interface Props {
  productData: IProduct[];
}

const Product = () => {
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

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
      ) : (<>
        <ProductList>
          {data.map((product: IProduct) => (
            <ProductCard
              product={product}
            />
          ))}
        </ProductList>
        <Stack sx={{ margin: "0 auto", width: "50%"}}>
          <Pagination count={10} size="large" page={page} onChange={handleChange} color="primary" />
        </Stack>
        </>
      )}
    </Container>
  );
};

export default Product;
