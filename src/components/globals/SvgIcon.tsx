import { styled } from '@mui/material';
import { FC, ReactNode } from 'react';
import theme from 'src/utils/theme/theme';

const SvgIconContainer = styled('span')<{
	size?: number;
	width?: number;
	height?: number;
	color?: string;
	invertedColor?: boolean;
}>`
	display: contents;
	& svg {
		width: ${({ size, width }) => `${width}px` ?? `${size}px` ?? `24px`};
		height: ${({ size, height }) => `${height}px` ?? `${size}px` ?? `24px`};
		& path {
			fill: ${({ theme, color }) => color ?? theme.palette.text.primary};
			filter: ${({ invertedColor }) => (invertedColor ? 'invert(1)' : 'invert(0)')};
		}
	}
`;

interface Props {
	size?: number;
	width?: number;
	height?: number;
	color?: string;
	invertedColor?: boolean;
	icon: ReactNode;
}

const SvgIcon: FC<Props> = ({ size, width, height, color, invertedColor, icon }) => {
	return (
		<SvgIconContainer size={size} width={width} height={height} color={color} invertedColor={invertedColor}>
			{icon}
		</SvgIconContainer>
	);
};

export default SvgIcon;
