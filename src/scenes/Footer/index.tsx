import { Container, Divider, IconButton, styled, Typography } from '@mui/material';
import React from 'react';
import SvgIcon from 'src/components/globals/SvgIcon';
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

const footerLists = [
	{
		header: 'Products',
		links: [{ title: 'Men' }, { title: 'Women' }, { title: 'Kids' }, { title: 'Sale' }, { title: 'Collections' }],
	},
	{
		header: 'Get help',
		links: [
			{ title: 'Order status' },
			{ title: 'Shipping and delovery' },
			{ title: 'Returns' },
			{ title: 'Payment options' },
		],
	},
	{
		header: 'Legals',
		links: [{ title: 'Terms of services' }, { title: 'Privacy policy' }],
	},
];

const socialIcons = [<FacebookIcon />, <InstagramIcon />, <TwitterIcon />];

const Footer = () => {
	return (
		<FooterContainer>
			<Container>
				<FooterContent>
					<FooterContentColumn>
						<FooterContentTitle>
							<SvgIcon width={60} icon={<LogoIcon />} />
						</FooterContentTitle>
					</FooterContentColumn>
					{footerLists.map((item) => (
						<FooterContentColumn>
							<FooterContentTitle>{item.header}</FooterContentTitle>
							{item.links.map((p) => (
								<FooterContentLink>{p.title}</FooterContentLink>
							))}
						</FooterContentColumn>
					))}
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
						{socialIcons.map((icon) => (
							<SocialIcon>{icon}</SocialIcon>
						))}
					</FooterBottomSocials>
				</FooterBottom>
			</Container>
		</FooterContainer>
	);
};

export default Footer;
