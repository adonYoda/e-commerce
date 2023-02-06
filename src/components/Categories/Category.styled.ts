import { styled, Typography } from '@mui/material';
import { BgImage } from '../globals/BgImage.styled';

export const CategoryContent = styled('div')<{ large?: string }>`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: ${({ large }) => (large ? 'auto' : '100%')};
`;
export const Title = styled(Typography)<{ large?: string }>`
	margin-top: ${({ large }) => (large ? 20 : 40)}px;
	margin-bottom: 26px;
	text-transform: capitalize;
`;
export const CategoryButton = styled(Typography)`
	margin-bottom: 20px;
	& > a {
		display: inline-flex;
		cursor: pointer;
		transition: all 0.3s ease 0s;
		&:hover {
			translate: 5px 0;
		}
	}
`;
export const BgImageStyled = styled(BgImage)`
	transition: all 0.3s ease 0s;
`;
export const CategoryContainer = styled('div')<{ large?: string }>`
	position: relative;
	flex: 0 0 calc(50% - 15px);
	border-radius: ${({ theme }) => theme.shape.borderRadius}px;
	overflow: hidden;
	padding: ${({ large }) => (large ? 10 : 15)}px;
	transition: all 0.3s ease 0s;
	&:hover {
		${BgImageStyled} {
			width: 105%;
			height: 105%;
		}
	}
`;
