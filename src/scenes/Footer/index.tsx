import { Container, Divider, IconButton, styled, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import SvgIcon from 'src/components/globals/SvgIcon';
import { categories } from 'src/utils/constants/categories.constants';
import { homePath, productsPath } from 'src/utils/constants/routes.constants';
import theme from 'src/utils/theme/theme';
import { ReactComponent as LogoIcon } from '../../assets/icons/Base/logo.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icons/Social/Facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/Social/Instagram.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/Social/Twitter.svg';
import {
	DividerStyled,
	FooterBottom,
	FooterBottomAuthor,
	FooterBottomSocials,
	FooterContainer,
	FooterContent,
	FooterContentColumn,
	FooterContentDescription,
	FooterContentLink,
	FooterContentTitle,
	SocialIcon,
} from './Footer.styled';

const products = {
	header: 'Products',
	links: categories,
};
const help = {
	header: 'Get help',
	links: [
		{ title: 'Order status' },
		{ title: 'Shipping and delivery' },
		{ title: 'Returns' },
		{ title: 'Payment options' },
	],
};
const legals = {
	header: 'Legals',
	links: [{ title: 'Terms of services' }, { title: 'Privacy policy' }],
};

const socialIcons = [<FacebookIcon />, <InstagramIcon />, <TwitterIcon />];

const Footer = () => {
	const navigate = useNavigate();
	return (
		<FooterContainer>
			<Container>
				<FooterContent>
					<FooterContentColumn>
						<FooterContentTitle onClick={() => navigate(homePath)}>
							<SvgIcon width={60} icon={<LogoIcon />} />
						</FooterContentTitle>
					</FooterContentColumn>
					<FooterContentColumn>
						<FooterContentTitle>{products.header}</FooterContentTitle>
						{products.links.map((p) => (
							<FooterContentLink key={p.title}>
								<Link to={productsPath + '/' + p.title}>{p.title}</Link>
							</FooterContentLink>
						))}
					</FooterContentColumn>
					<FooterContentColumn>
						<FooterContentTitle>{help.header}</FooterContentTitle>
						{help.links.map((p) => (
							<FooterContentLink key={p.title}>{p.title}</FooterContentLink>
						))}
					</FooterContentColumn>
					<FooterContentColumn>
						<FooterContentTitle>{legals.header}</FooterContentTitle>
						{legals.links.map((p) => (
							<FooterContentLink key={p.title}>{p.title}</FooterContentLink>
						))}
					</FooterContentColumn>
					<FooterContentColumn className='footer-contacts'>
						<FooterContentTitle>Contact</FooterContentTitle>
						<FooterContentDescription variant='body15'>Email</FooterContentDescription>
						<FooterContentLink variant='body17'>
							<a href='mailto:ecommerce@gmail.com'>ecommerce@gmail.com</a>
						</FooterContentLink>
						<FooterContentDescription variant='body15'>Phone</FooterContentDescription>
						<FooterContentLink variant='body17'>
							<a href='tel:+9727565550123'>972 756 555-0123</a>
						</FooterContentLink>
						<FooterContentDescription variant='body15'>Address</FooterContentDescription>
						<FooterContentLink variant='body17'>
							<a target='_blank' href='https://goo.gl/maps/pDiVoiDvN2UcHdSg8'>
								2464 Royal Ln. Mesa, New Jersey 45463
							</a>
						</FooterContentLink>
					</FooterContentColumn>
				</FooterContent>
				<DividerStyled />
				<FooterBottom>
					<FooterBottomAuthor>Tel Ran © 2022</FooterBottomAuthor>
					<FooterBottomSocials>
						{socialIcons.map((icon, i) => (
							<SocialIcon key={i}>{icon}</SocialIcon>
						))}
					</FooterBottomSocials>
				</FooterBottom>
			</Container>
		</FooterContainer>
	);
};

export default Footer;
