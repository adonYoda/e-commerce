import { styled } from '@mui/material';
import { FC, ReactNode } from 'react';
import theme from 'src/utils/theme/theme';

const SvgIconContainer = styled('span')<{
	flex?: boolean;
	size?: number;
	width?: number;
	height?: number;
	color?: string;
	invertedColor?: boolean;
}>`
	display: ${({ flex }) => (flex ? 'flex' : 'contents')};
	& svg {
		width: ${({ size, width }) => (width ? `${width}px` : size ? `${size}px` : `auto`)};
		height: ${({ size, height }) => (height ? `${height}px` : size ? `${size}px` : `auto`)};
		& path {
			fill: ${({ theme, color }) => color ?? theme.palette.text.primary};
			filter: ${({ invertedColor }) => (invertedColor ? 'invert(1)' : 'invert(0)')};
		}
	}
`;

interface Props {
	flex?: boolean;
	size?: number;
	width?: number;
	height?: number;
	color?: string;
	invertedColor?: boolean;
	icon: ReactNode;
}

const SvgIcon: FC<Props> = ({ flex, size, width, height, color, invertedColor, icon }) => {
	return (
		<SvgIconContainer
			flex={flex}
			size={size}
			width={width}
			height={height}
			color={color}
			invertedColor={invertedColor}
		>
			{icon}
		</SvgIconContainer>
	);
};

export default SvgIcon;
