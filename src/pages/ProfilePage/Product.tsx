import { styled, Typography } from "@mui/material";
import React from "react";
import { IProductOrder } from "src/types";
import theme from "src/utils/theme/theme";

interface Props {
  product: IProductOrder;
}

const MyProduct = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: "20px",
  marginBottom: "30px",
}));

const ProductImage = styled("img")(({ theme }) => ({
  width: "90px",
  height: "110px",
  borderRadius: "10px",
  marginRight: "15px",
}));

const ProductDescription = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginRight: "65px",
  marginTop: "4px",
}));

const TypographyWrapper = styled('p')(({ theme }) => ({
  color: theme.palette.text.placeholder,
  margin: 0
}));

const Product: React.FC<Props> = ({ product }) => {
  return (
    <MyProduct>
      <ProductImage src={product.aboutProduct.mainImgUrl} />
      <ProductDescription>
        <Typography
          variant="caption4"
          sx={{
            fontWeight: 400,
            color: theme.palette.text.placeholder,
            cursor: "default",
          }}
        >
          #{product.productId}
        </Typography>
        <Typography
          variant="caption3"
          sx={{ fontWeight: 500, marginBottom: "9px", marginTop: "5px" }}
        >
          {product.productName}
        </Typography>
        <Typography
          variant="caption4"
          sx={{ display: "flex", flexDirection: "row", marginBottom: "5px" }}
        >
          <TypographyWrapper>Color:&nbsp;</TypographyWrapper>
          {product.aboutProduct.colorSizeQuantity.map((e) => e.color)}
        </Typography>
        <Typography
          variant="caption4"
          sx={{ display: "flex", flexDirection: "row", marginBottom: "5px" }}
        >
          <TypographyWrapper>Size:&nbsp;</TypographyWrapper>
          {product.aboutProduct.colorSizeQuantity.map((e) => e.size)}
        </Typography>
        <Typography
          variant="caption4"
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <TypographyWrapper>Quantity:&nbsp;</TypographyWrapper>
          {product.aboutProduct.colorSizeQuantity.map((e) => e.quantity)}
        </Typography>
      </ProductDescription>
    </MyProduct>
  );
};

export default Product;
