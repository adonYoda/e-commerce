import {
  Box,
  CircularProgress,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";
import { useGetProductsQuery } from "src/strore_api/product/productApi";
import { IAboutProduct, IProduct, IRating } from "src/types";
import theme from "src/utils/theme/theme";
import ProductCard from "./ProductCard";
import { ProductList } from "./ProductsCards.styled";

interface Props {
  productData?: IProduct[];
  contained?: string | undefined;
}

const Products: FC<Props> = ({ contained }) => {
  const [page, setPage] = useState(1);
  const countPerPage = contained ? 12 : 9;
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  //=================Hook API========================
  const {
    data = [],
    isLoading,
    isFetching, //<== process this function!!!
    isError,
  } = useGetProductsQuery({ page, countPerPage });
  //================================================
  return (
    <Container sx={{ padding: `${contained ? "auto" : 0} !important` }}>
      {isError && (
        <>
          <Typography variant="h3" sx={{color: theme.palette.error.main}} >
            Oooooops... something went wrong...
          </Typography>
        </>
      )}
      {!isError && isLoading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
      {!isError && !isLoading && (
        <>
          <ProductList>
            {data.map((product: IProduct) => (
              <ProductCard key={product.productId} product={product} />
            ))}
          </ProductList>
          <Stack
            sx={{ margin: "0 auto", width: "fit-content", marginTop: "35px" }}
          >
            <Pagination
              count={10}
              size="large"
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </Stack>
        </>
      )}
    </Container>
  );
};

export default Products;
