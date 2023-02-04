import { Divider, styled, Typography } from '@mui/material';

export const FooterContainer = styled('footer')`
	min-width: 100%;
	background-color: ${({ theme }) => theme.palette.background.default};
`;
export const FooterContent = styled('div')`
	display: flex;
	padding: 60px 0 calc(69px - 16px);
`;

export const FooterContentTitle = styled(Typography)`
	display: block;
	color: ${({ theme }) => theme.palette.text.primary};
	filter: invert(1);
	font-weight: 500;
	margin-bottom: 20px;
	cursor: pointer;
`;
FooterContentTitle.defaultProps = {
	variant: 'caption1',
};
export const FooterContentDescription: any = styled(Typography)`
	color: ${({ theme }) => theme.palette.text.extra};
	filter: invert(1);
	margin-bottom: 5px;
`;
FooterContentDescription.defaultProps = {
	variant: 'body15',
};
export const FooterContentLink = styled(Typography)`
	display: block;
	color: ${({ theme }) => theme.palette.text.extra};
	filter: invert(1);
	margin-bottom: 16px;
	font-weight: 500;
	transition: all 0.3s ease 0s;
	cursor: pointer;
	&:hover {
		color: ${({ theme }) => theme.palette.text.primary};
	}
`;
FooterContentLink.defaultProps = {
	variant: 'caption2',
};
export const FooterContentColumn = styled('div')`
	padding-left: 30px;
	flex: 0 1 190px;
	&:first-child {
		padding-left: 0;
	}
	&:last-child {
		flex: 1 1 190px;
	}
	&.footer-contacts {
		${FooterContentLink} {
			color: ${({ theme }) => theme.palette.text.primary};
		}
	}
`;
export const DividerStyled = styled(Divider)`
	filter: invert(1);
`;
export const FooterBottom = styled('div')`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 30px 0;
`;
export const FooterBottomAuthor = styled(Typography)`
	color: ${({ theme }) => theme.palette.text.secondary};
	filter: invert(1);
`;
FooterBottomAuthor.defaultProps = {
	variant: 'caption2',
};
export const FooterBottomSocials = styled('div')`
	display: flex;
	gap: 10px;
`;
export const SocialIcon = styled('button')`
	all: unset;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(225, 225, 225, 0.2);
	width: 50px;
	height: 50px;
	border-radius: 50%;
	& svg {
		width: 18.67px;
		height: 18.67px;
		& path {
			fill: ${({ theme }) => theme.palette.text.primary};
			filter: invert(1);
		}
	}
`;
