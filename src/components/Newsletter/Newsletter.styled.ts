import { Button, FormControl, InputAdornment, styled, Typography } from '@mui/material';

export const NewsletterContainer = styled('div')`
	display: flex;
	overflow: hidden;
`;
export const NewsletterContent = styled('div')`
	flex: 0 0 100%;
	background-color: ${({ theme }) => theme.palette.primary.main};
`;
export const NewsletterBody = styled('div')`
	padding: 91px 50px 91px 0;
	width: 50%;
`;
export const NewsletterCaption = styled(Typography)`
	display: block;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.palette.text.extra};
	filter: invert(1);
`;
NewsletterCaption.defaultProps = {
	variant: 'lead',
};
export const NewsletterTitle = styled(Typography)`
	margin-bottom: 40px;
	filter: invert(1);
`;
NewsletterTitle.defaultProps = {
	variant: 'h3',
};
export const NewsletterForm = styled('div')``;
export const NewsletterImage = styled('div')`
	position: relative;
	flex: 0 0 50%;
	translate: -100% 0;
	& img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const FormControlStyled = styled(FormControl)`
	background-color: #fff;
	max-width: 280px;
	margin-right: 15px;
`;
export const ButtonStyled = styled(Button)`
	background-color: ${({ theme }) => theme.palette.background.default};
	color: ${({ theme }) => theme.palette.common.white};
	&:hover {
		background-color: ${({ theme }) => theme.palette.grey[900]};
	}
`;
