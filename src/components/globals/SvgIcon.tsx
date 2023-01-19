import { styled } from '@mui/material';
import { FC, ReactNode } from 'react';
import theme from 'src/utils/theme/theme';

const SvgIconContainer = styled('span')<{ size?: number; color?: string; invertedColor?: boolean }>`
	display: contents;
	& svg {
		width: ${({ size }) => `${size}px` ?? `24px`};
		height: ${({ size }) => `${size}px` ?? `24px`};
		& path {
			fill: ${({ theme, color, invertedColor }) => color ?? theme.palette.text.primary};
			filter: ${({ invertedColor }) => (invertedColor ? 'invert(1)' : 'none')};
		}
	}
`;

interface Props {
	size?: number;
	color?: string;
	invertedColor?: boolean;
	icon: ReactNode;
}

const SvgIcon: FC<Props> = ({ size, color, invertedColor, icon }) => {
	return (
		<SvgIconContainer size={size} color={color} invertedColor={invertedColor}>
			{icon}
		</SvgIconContainer>
	);
};

export default SvgIcon;
