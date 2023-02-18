import { Card, CardActionArea, CardContent, CardMedia, Rating, styled, Typography } from "@mui/material";
import React from "react";
import { IProduct } from "src/types";
import { ReactComponent as ShoppingBagIcon } from "../../assets/icons/Base/shopping-bag.svg";
import { ReactComponent as StarIcon } from "../../assets/icons/Base/star.svg";
import { ReactComponent as StarFilledIcon } from "../../assets/icons/Base/star-filled.svg";
import { CheckboxCardIcon } from "../globals/MuiCheckboxCardIcon.styled";
import { currencyFormat } from "src/utils/constants/currency.constants";

const CardStyled = styled(Card)`
	border: none;
`;
const CardActionAreaStyled = styled(CardActionArea)`
	width: 300px;
	height: 365px;
	border-radius: ${({ theme }) => theme.shape.borderRadius}px;
	overflow: hidden;
	position: relative;
`;
const CheckboxCardIconStyled = styled(CheckboxCardIcon)`
	position: absolute;
	bottom: 10px;
	right: 10px;
	z-index: 5;
`;
const CardContentStyled = styled(CardContent)`
	display: flex;
	flex-direction: column;
	padding: 0 !important;
`;
const RatingStyled = styled(Rating)`
	margin: 10px 0;
`;
const TypographyProductId = styled(Typography)`
	color: ${({ theme }) => theme.palette.text.secondary};
	margin-bottom: 4px;
`;
const ProductNamePrice = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: start;
	font-weight: 500;
`;

interface Props {
	product: IProduct;
}

const ProductCard: React.FC<Props> = ({ product }) => {
	const currencyFormated = new Intl.NumberFormat(currencyFormat, {
		style: "currency",
		currency: product.currency,
		// maximumSignificantDigits: 6,
	});

	return (
		<CardStyled variant='outlined'>
			<CardActionAreaStyled>
				<CardMedia
					sx={{ objectFit: "cover", width: "100%", height: "100%" }}
					component='img'
					image={product.aboutProduct.mainImgUrl}
					alt={product.aboutProduct.description}
					loading='lazy'
				/>
				<CheckboxCardIconStyled color='primary' icon={<ShoppingBagIcon />} checkedIcon={<ShoppingBagIcon />} />
			</CardActionAreaStyled>
			<CardContentStyled>
				<RatingStyled
					icon={<StarFilledIcon />}
					emptyIcon={<StarIcon />}
					value={product.rating.totalRatingScore / product.rating.numberOfRated}
					readOnly
				/>
				<TypographyProductId variant='caption3'>#{product.productId}</TypographyProductId>
				<ProductNamePrice>
					<Typography variant='caption3'>{product.productName}</Typography>
					<Typography variant='caption1'>{currencyFormated.format(product.price)}</Typography>
				</ProductNamePrice>
			</CardContentStyled>
		</CardStyled>
	);
};

export default ProductCard;


