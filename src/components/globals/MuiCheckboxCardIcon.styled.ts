import { Checkbox, styled } from '@mui/material';

export const CheckboxCardIcon = styled(Checkbox)<{ color: 'primary' | 'secondary' }>`
	border-radius: ${({ theme }) => theme.shape.borderRadius}px;
	transition: all 0.3s ease 0s;
	width: 40px;
	height: 40px;
	&:hover,
	&:has(input:checked) {
		& * {
			fill: ${({ theme }) => theme.palette.common.white};
		}
	}
	& * {
		fill: ${({ theme, color }) => theme.palette[color].main};
	}

	&:hover {
		background: ${({ theme, color }) => theme.palette[color].light};
	}
	&:has(input:checked) {
		background: ${({ theme, color }) => theme.palette[color].main};
		&:hover {
			background: ${({ theme, color }) => theme.palette[color].light};
		}
	}
`;
