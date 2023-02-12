import { Box, ImageList, ImageListItem, ImageListItemBar, Rating, Typography } from '@mui/material'
import React from 'react'
import { IAboutProduct, IProduct, IRating } from 'src/types'
import {ReactComponent as ShoppingBagIcon} from '../../assets/icons/Base/shopping-bag.svg'
import SvgIcon from '../globals/SvgIcon';
import { ProductList } from './ProductsCards.styled';

interface Props {
    // rating: IRating;
    // aboutProduct: IAboutProduct;
    // productId: number
    product: IProduct;
}

const ProductCard: React.FC<Props> = ({product}) => {
  return (
        <ImageListItem key={product.productId}>
            <img
            src= {product.aboutProduct.mainImgUrl}
            alt = {product.aboutProduct.description}
            loading="lazy"
            />
            <ImageListItemBar position="bottom" 
            actionIcon={<SvgIcon width={60} icon={<ShoppingBagIcon />} />}
            actionPosition="right" />
            <Box>
            <Rating name="read-only" value={(product.rating.totalRatingScore/product.rating.numberOfRated)} readOnly />
            <Box sx={{ ml: 2 }}>{product.rating.numberOfRated}</Box>
            </Box>
            <Box>
            <Typography>#{product.productId}</Typography>
            <Typography>{product.productName}{product.currency}{product.price}</Typography>
            </Box>
        </ImageListItem>
  )
}

export default ProductCard