import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { IAboutProduct, IProduct, IRating } from "src/types";
import theme from "src/utils/theme/theme";
import { ReactComponent as ShoppingBagIcon } from "../../assets/icons/Base/shopping-bag.svg";
import SvgIcon from "../globals/SvgIcon";
import { ProductList } from "./ProductsCards.styled";

interface Props {
  // rating: IRating;
  // aboutProduct: IAboutProduct;
  // productId: number
  product: IProduct;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Card variant="outlined" sx={{border: "none"}} >
      <CardActionArea>
        <CardMedia
          component="img"
          image={product.aboutProduct.mainImgUrl}
          alt={product.aboutProduct.description}
          loading="lazy"
        />
        <SvgIcon width={35} icon={<ShoppingBagIcon />}/>
      </CardActionArea>
      <CardContent>
        <Rating
          value={product.rating.totalRatingScore / product.rating.numberOfRated}
          readOnly
        />
        <Typography>#{product.productId}</Typography>
        <Typography>
          {product.productName}
          {product.currency}
          {product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

{
  /* <ImageListItemBar position="bottom" 
actionIcon={<SvgIcon width={60} icon={<ShoppingBagIcon />} />}
actionPosition="right" />
<Box>
<Rating name="read-only" value={(product.rating.totalRatingScore/product.rating.numberOfRated)} readOnly />
<Box sx={{ ml: 2 }}>{product.rating.numberOfRated}</Box>
</Box>
<Box>
<Typography>#{product.productId}</Typography>
<Typography>{product.productName}{product.currency}{product.price}</Typography>
</Box> */
}
