import { FormControl, styled } from '@mui/material';

const iconSizes = {
	sm: 16.5,
	md: 18.3,
	lg: 22,
};
const calcPadding = (height: number = 50) => {
	switch (height) {
		case 40:
			return (40 - iconSizes.sm) / 2;
		case 50:
			return (50 - iconSizes.md) / 2;
		case 60:
			return (60 - iconSizes.lg) / 2;
		default:
			return;
	}
};
export const MuiFormControlStyled = styled(FormControl)<{ height?: 40 | 50 | 60 }>`
	&:has(input:focus, input:valid) {
		& .MuiFormLabel-root {
			top: 0;
			transform: ${({ height }) => `translate(${calcPadding(height!)}px, -9px) scale(0.75)`};
		}
	}
	&:has(input:focus) {
		& .MuiFormLabel-root {
			/* color: ${({ theme }) => theme.palette.primary.main}; */
		}
	}
	& .MuiFormLabel-root {
		transform: ${({ height }) => `translate(${calcPadding(height!)}px,
		calc(${height ?? 50}px / 2 - 16px / 2)) scale(1)`};
		font-size: ${({ height }) => (height === 40 ? 16 : height === 50 ? 18 : height === 60 ? 20 : 18)}px;
	}
	& .MuiOutlinedInput-root {
		& fieldset {
			border-color: ${({ theme }) => theme.palette.grey['A200']};
			transition: all 0.3s ease 0s;
		}
		&:not(:has(input:focus)):hover fieldset {
			border-color: ${({ theme }) => theme.palette.grey['400']};
		}
		&.Mui-focused fieldset {
		}
	}
	& .MuiInputBase-root {
		height: ${({ height }) => height ?? 50}px;
	}
	& .MuiIconButton-root {
		padding: ${({ height }) => calcPadding(height!)}px;
		& svg {
			width: ${({ height }) => (height === 40 ? 16.5 : height === 50 ? 18.3 : height === 60 ? 22 : 18.3)}px;
			height: ${({ height }) => (height === 40 ? 16.5 : height === 50 ? 18.3 : height === 60 ? 22 : 18.3)}px;
		}
	}
	& .MuiInputBase-input {
		padding: 0px ${({ height }) => calcPadding(height!)}px;
		font-weight: 400;
		line-height: 16px;
		font-size: ${({ height }) => (height === 40 ? 16 : height === 50 ? 18 : height === 60 ? 20 : 18)}px;
	}
`;
