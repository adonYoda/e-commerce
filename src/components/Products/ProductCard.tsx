import { Card, CardActionArea, CardContent, CardMedia, Chip, Rating, styled, Typography } from "@mui/material";
import React, { MouseEvent, MouseEventHandler, useState } from "react";
import { IProduct } from "src/types";
import { ReactComponent as ShoppingBagIcon } from "../../assets/icons/Base/shopping-bag.svg";
import { ReactComponent as HeartIcon } from "../../assets/icons/Base/heart.svg";
import { ReactComponent as HeartFullIcon } from "../../assets/icons/Base/heart-full.svg";
import { ReactComponent as StarIcon } from "../../assets/icons/Base/star.svg";
import { ReactComponent as StarFilledIcon } from "../../assets/icons/Base/star-filled.svg";
import { CheckboxCardIcon } from "../globals/MuiCheckboxCardIcon.styled";
import { currencyFormat } from "src/utils/constants/currency.constants";
import { Link } from "react-router-dom";
import { productCardSize } from "src/utils/constants/sizes.constants";
import useGetParams from "src/hooks/useGetParams";
import useGetLocation from "src/hooks/useGetLocation";
import { productsPath } from "src/utils/constants/routes.constants";
import { useDispatch } from "react-redux";
import { getProduct } from "src/strore_api/product/productSlice";
import { currencyFormated } from "src/services/currency.services";
import { prefixPathProductCode } from "src/utils/constants/product.constants";

const CardStyled = styled(Card)`
	border: none;
`;
const CardActionAreaStyled = styled(CardActionArea)`
	width: ${productCardSize.width};
	height: ${productCardSize.height};
	border-radius: ${({ theme }) => theme.shape.borderRadius}px;
	overflow: hidden;
	position: relative;
`;
const CheckboxCardIconStyled = styled(CheckboxCardIcon)`
	position: absolute;
	bottom: 10px;
	right: 10px;
	z-index: 7;
`;
const CardContentStyled = styled(CardContent)`
	display: flex;
	flex-direction: column;
	padding: 0 !important;
`;
const RatingStyled = styled(Rating)`
	margin: 10px 0;
`;
const TypographyProductCode = styled(Typography)`
	color: ${({ theme }) => theme.palette.text.secondary};
	margin-bottom: 4px;
`;
const ProductNamePrice = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: start;
	font-weight: 500;
`;
const ChipStyled = styled(Chip)`
	position: absolute;
	top: 10px;
	left: 10px;
`;

interface Props {
	product: IProduct;
}

const ProductCard: React.FC<Props> = ({ product }) => {
	const dispatch = useDispatch();
	const [isChecked, setIsChecked] = useState(false);
	const [productsParam, categoryParam, subcategoryParam, productCodeParam] = useGetLocation();

	const linkToProductItem = () => {
		const path = [];
		if (!!productCodeParam) {
			path.push("./../..");
			path.push(prefixPathProductCode + product.productCode);
			path.push(product.productName);
			return path.join("/");
		}
		productsParam !== productsPath && path.push(productsPath);
		!categoryParam && path.push(product.productAttributes.category);
		!subcategoryParam && path.push(product.productAttributes.subCategory.name);
		path.push(prefixPathProductCode + product.productCode);
		path.push(product.productName);
		return path.join("/");
	};

	const handleOnClickCard = () => {
		dispatch(getProduct(product));
	};
	const handleOnChangeToCart = () => {
		setIsChecked((prev) => !prev);
	};
	const isDiscounted = () => {
		return product.discount > 0;
	};

	return (
		<CardStyled variant='outlined'>
			<CardActionAreaStyled>
				{isDiscounted() && <ChipStyled color='info' label={`-${product.discount}%`} />}
				<Link to={linkToProductItem()} onClick={handleOnClickCard}>
					<CardMedia
						sx={{ objectFit: "cover", width: "100%", height: "100%" }}
						component='img'
						image={product.aboutProduct.mainImgUrl}
						alt={product.aboutProduct.description}
						loading='lazy'
					/>
				</Link>
				{!productCodeParam && (
					<CheckboxCardIconStyled
						onChange={handleOnChangeToCart}
						color='primary'
						icon={<ShoppingBagIcon />}
						checkedIcon={<ShoppingBagIcon />}
						checked={isChecked}
					/>
				)}
			</CardActionAreaStyled>
			<CardContentStyled>
				<RatingStyled
					icon={<StarFilledIcon />}
					emptyIcon={<StarIcon />}
					value={product.rating.totalRatingScore / product.rating.numberOfRated}
					readOnly
				/>
				<TypographyProductCode variant='caption3'>#{product.productCode}</TypographyProductCode>
				<ProductNamePrice>
					<Typography variant='caption3'>{product.productName}</Typography>
					<Typography variant='caption1'>
						{currencyFormated(currencyFormat, product.currency, product.price)}
					</Typography>
				</ProductNamePrice>
			</CardContentStyled>
		</CardStyled>
	);
};

export default ProductCard;
