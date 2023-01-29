import { Button, Container, styled, Typography } from '@mui/material';
import React, { FC, Ref } from 'react';
import Slider from 'react-slick';
import nike from '../../assets/Images/Nike.png';
import SvgIcon from '../globals/SvgIcon';
import { ReactComponent as ArrowNextIcon } from '../../assets/icons/Navigation/angle-right-b.svg';
import { ReactComponent as ArrowPrevIcon } from '../../assets/icons/Navigation/angle-left-b.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/icons/Navigation/arrow-right.svg';
import theme from 'src/utils/theme/theme';

const BannerContainer = styled('div')`
	background-color: #17181f;
	height: 650px;
`;
const SliderItem = styled('div')`
	position: relative;
`;
const TextWrapper = styled('div')`
	position: absolute;
	z-index: 5;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	filter: invert(1);
	& .banner-slider-text {
		&__title {
			margin-top: 85px;
			margin-bottom: 16px;
		}
		&__description {
		}
	}
`;
const Image = styled('img')`
	margin: 0 auto;
`;
const Buttons = styled('div')`
	position: absolute;
	bottom: 48px;
	left: 24px;
`;
const ButtonStyled = styled(Button)`
	color: ${({ theme }) => theme.palette.grey[50]} !important;
	&:first-child {
		margin-right: 10px;
	}
`;

function SampleNextArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<SvgIcon
			size={50}
			color={theme.palette.grey[50]}
			icon={<ArrowNextIcon className={className} style={{ ...style, right: '-60px' }} onClick={onClick} />}
		/>
	);
}

function SamplePrevArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<SvgIcon
			size={50}
			color={theme.palette.grey[50]}
			icon={<ArrowPrevIcon className={className} style={{ ...style, left: '-60px' }} onClick={onClick} />}
		/>
	);
}

interface Props {}

const Banner: FC<Props> = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<BannerContainer>
			<Container>
				<Slider {...settings}>
					<SliderItem>
						<TextWrapper>
							<Typography className='banner-slider-text__title' variant='h1'>
								AIR Beyond Compare
							</Typography>
							<Typography className='banner-slider-text__description' variant='lead'>
								Explore the best Air Max for fall & beyond
							</Typography>
						</TextWrapper>
						<Image src={nike} alt='' />
					</SliderItem>
					<SliderItem>
						<Image src={nike} alt='' />
						{/* <h3>2</h3> */}
					</SliderItem>
					<SliderItem>
						<Image src={nike} alt='' />
						{/* <h3>3</h3> */}
					</SliderItem>
					<SliderItem>
						<Image src={nike} alt='' />
						{/* <h3>4</h3> */}
					</SliderItem>
					<SliderItem>
						<Image src={nike} alt='' />
						{/* <h3>5</h3> */}
					</SliderItem>
					<SliderItem>
						<Image src={nike} alt='' />
						{/* <h3>6</h3> */}
					</SliderItem>
				</Slider>
				<Buttons>
					<ButtonStyled size='small' variant='contained'>
						Buy Now
					</ButtonStyled>
					<ButtonStyled size='small' variant='text'>
						Explore
						<SvgIcon color={theme.palette.grey[50]} icon={<ArrowRightIcon />} />
					</ButtonStyled>
				</Buttons>
			</Container>
		</BannerContainer>
	);
};

export default Banner;
