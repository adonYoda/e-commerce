import { styled } from '@mui/material';
import { FC, ReactNode } from 'react';
import theme from 'src/utils/theme/theme';

const SvgIconContainer = styled('span')<{ size?: number; color?: string }>`
	display: contents;
	& svg {
		width: ${({ size }) => `${size}px` ?? `24px`};
		height: ${({ size }) => `${size}px` ?? `24px`};
		& path {
			fill: ${({ theme, color }) => color ?? theme.palette.text.primary};
		}
	}
`;

interface Props {
	size?: number;
	color?: string;
	icon: ReactNode;
}

const SvgIcon: FC<Props> = ({ size, color, icon }) => {
	return (
		<SvgIconContainer size={size} color={color}>
			{icon}
		</SvgIconContainer>
	);
};

export default SvgIcon;
