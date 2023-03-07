import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	Chip,
	Divider,
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
	styled,
	Typography,
} from "@mui/material";
import React, { FC, memo, useMemo, useState } from "react";
import { currencyFormated } from "src/services/currency.services";
import { IColorSize, IProduct } from "src/types";
import { currencyFormat } from "src/utils/constants/currency.constants";
import { ReactComponent as ArrowDownIcon } from "../../../assets/icons/Navigation/angle-down.svg";
import { ReactComponent as BagIcon } from "../../../assets/icons/Base/shopping-bag.svg";
import SvgIcon from "src/components/globals/SvgIcon";
import theme from "src/utils/theme/theme";

const ProductItemSidebarContainer = styled("div")`
	flex: 0 1 360px;
`;
const MainInfo = styled("div")``;
const Choise = styled("div")`
	margin: 26px 0 34px;
`;
const AdditionalInfo = styled("div")``;
const TypographyDescription = styled(Typography)`
	color: ${({ theme }) => theme.palette.text.secondary};
`;
const Price = styled("div")`
	display: flex;
	align-items: baseline;
	margin-bottom: 24px;
	column-gap: 9px;
`;
const TypographyName = styled(Typography)`
	font-weight: 500;
	margin: 15px 0;
`;
const TypographyPrice = styled(Typography)`
	font-weight: 500;
`;
const TypographyOldPrice = styled(Typography)`
	position: relative;
	color: ${({ theme }) => theme.palette.text.placeholder};
	&::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 0;
		width: 100%;
		height: 1.5px;
		background-color: ${({ theme }) => theme.palette.secondary.main};
	}
`;
const DividerStyled = styled(Divider)`
	border-color: ${({ theme }) => theme.palette.grey["A200"]};
`;
const Colors = styled("div")``;
const TypographyColorsSizesTitle = styled(Typography)`
	display: block;
	color: ${({ theme }) => theme.palette.text.placeholder};
	font-weight: 500;
	margin-bottom: 21px;
	& span {
		color: ${({ theme }) => theme.palette.text.primary};
	}
`;
const TypographyColorsSizesGuide = styled(Typography)`
	color: ${({ theme }) => theme.palette.primary.main};
	font-weight: 500;
	cursor: pointer;
	&:hover {
		color: ${({ theme }) => theme.palette.primary.dark};
	}
`;
const ColorsImages = styled("div")`
	display: flex;
	column-gap: 10px;
	margin-bottom: 27px;
`;
const ColorsImage = styled("div")<{ selected?: string }>`
	position: relative;
	width: 80px;
	height: 80px;
	overflow: hidden;
	border: 1px solid;
	border-color: ${({ theme, selected }) => (selected ? theme.palette.primary.main : theme.palette.grey["A100"])};
	border-radius: ${({ theme }) => theme.shape.borderRadius}px;
	cursor: pointer;
	transition: all 0.3s ease 0s;
	& img {
		width: 100%;
		height: 100%;
		scale: 1.07;
	}
	&:hover {
		border-color: ${({ theme, selected }) => (selected ? theme.palette.primary.main : theme.palette.grey["A200"])};
	}
`;
const Sizes = styled("div")``;
const SizesHeader = styled("div")`
	display: flex;
	justify-content: space-between;
`;
const FormControlStyled = styled(FormControl)`
	margin-bottom: 25px;
`;
const ButtonStyled = styled(Button)`
	padding: 0 73.5px;
	& svg {
		& path {
			fill: ${({ theme }) => theme.palette.common.white};
		}
	}
`;
const SvgIconArrow = styled(SvgIcon)``;
SvgIconArrow.defaultProps = {
	color: theme.palette.text.placeholder,
};

interface Props {
	product: IProduct;
}

const ProductItemSidebar: FC<Props> = ({ product }) => {
	const { discount, productName, aboutProduct, price, currency } = product;

	const [selectedColor, setSelectedColor] = useState(aboutProduct.colorSizeQuantity[0].color);
	const [selectedSize, setSelectedSize] = useState(aboutProduct.colorSizeQuantity[0].size);

	const getDiscountedPrice = useMemo(() => price - price * (discount / 100), [price, discount]);
	const setOfColors = useMemo(
		() =>
			aboutProduct.colorSizeQuantity.filter(
				(color, index, self) => index === self.findIndex((c) => c.color === color.color)
			),
		[aboutProduct.colorSizeQuantity]
	);

	const sizesOfColor = useMemo(
		() => aboutProduct.colorSizeQuantity.filter((el) => el.color === selectedColor).map((el) => el.size),
		[selectedColor, aboutProduct.colorSizeQuantity]
	);

	const isDiscounted = () => {
		return discount > 0;
	};
	const isColorSelected = (el: IColorSize) => {
		return selectedColor === el.color ? "selected" : "";
	};
	const handleSelectColor = (el: IColorSize) => {
		setSelectedColor(el.color);
	};
	const handleSelectSize = (e: SelectChangeEvent) => {
		if (e.target.value) {
			setSelectedSize(e.target.value as string);
		} else {
			setSelectedSize(sizesOfColor[0]);
		}
	};

	return (
		<ProductItemSidebarContainer>
			<MainInfo>
				{isDiscounted() && <Chip color='info' label={`-${discount}%`} />}
				<TypographyName variant='h4'>{productName}</TypographyName>
				<TypographyDescription variant='body15'>{aboutProduct.description}</TypographyDescription>
				<Price>
					<TypographyPrice variant='h5'>
						{currencyFormated(currencyFormat, currency, getDiscountedPrice)}
					</TypographyPrice>
					<TypographyOldPrice variant='body21'>
						{currencyFormated(currencyFormat, currency, price)}
					</TypographyOldPrice>
				</Price>
			</MainInfo>
			<DividerStyled />
			<Choise>
				<Colors>
					<TypographyColorsSizesTitle variant='caption3'>
						Color: <span>{selectedColor}</span>
					</TypographyColorsSizesTitle>
					<ColorsImages>
						{setOfColors.map((el) => (
							<ColorsImage
								key={el.color}
								selected={isColorSelected(el)}
								onClick={() => handleSelectColor(el)}
							>
								<img src={el.iconUrl} alt={el.color} />
							</ColorsImage>
						))}
					</ColorsImages>
				</Colors>
				<Sizes>
					<SizesHeader>
						<TypographyColorsSizesTitle variant='caption3'>Choose size</TypographyColorsSizesTitle>
						<TypographyColorsSizesGuide variant='caption3'>Size guide</TypographyColorsSizesGuide>
					</SizesHeader>
					<FormControlStyled fullWidth>
						<Select
							value={sizesOfColor.includes(selectedSize) ? selectedSize : sizesOfColor[0]}
							onChange={handleSelectSize}
							IconComponent={ArrowDownIcon}
						>
							{sizesOfColor.map((el) => (
								<MenuItem key={el} value={el}>
									{el}
								</MenuItem>
							))}
						</Select>
					</FormControlStyled>
					<ButtonStyled size='large' variant='contained' startIcon={<BagIcon />}>
						Add to bag
					</ButtonStyled>
				</Sizes>
			</Choise>
			<AdditionalInfo>
				<Accordion>
					<AccordionSummary expandIcon={<SvgIconArrow icon={<ArrowDownIcon />} />}>
						<Typography variant='caption2'>Details</Typography>
					</AccordionSummary>
					<AccordionDetails>{aboutProduct.details}</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary expandIcon={<SvgIconArrow icon={<ArrowDownIcon />} />}>
						<Typography variant='caption2'>Shipping & Returns</Typography>
					</AccordionSummary>
					<AccordionDetails>{aboutProduct.details}</AccordionDetails>
				</Accordion>
			</AdditionalInfo>
			<DividerStyled />
		</ProductItemSidebarContainer>
	);
};

export default memo(ProductItemSidebar);
