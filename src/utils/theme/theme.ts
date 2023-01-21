import { createTheme, ThemeOptions } from '@mui/material/styles';
import React from 'react';
declare module '@mui/material/styles' {
	interface TypographyVariants {
		display: React.CSSProperties;
		lead: React.CSSProperties;
		body15: React.CSSProperties;
		body17: React.CSSProperties;
		body21: React.CSSProperties;
		caption1: React.CSSProperties;
		caption2: React.CSSProperties;
		caption3: React.CSSProperties;
		caption4: React.CSSProperties;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		display?: React.CSSProperties;
		lead?: React.CSSProperties;
		body15?: React.CSSProperties;
		body17?: React.CSSProperties;
		body21?: React.CSSProperties;
		caption1?: React.CSSProperties;
		caption2?: React.CSSProperties;
		caption3?: React.CSSProperties;
		caption4?: React.CSSProperties;
	}

	interface FormControlPropsSize {
		size: string;
	}
	interface FormControlPropsSizeOptions {
		size?: string;
	}
	interface TextFieldPropsSize {
		size: string;
	}
	interface TextFieldPropsSizeOptions {
		size?: string;
	}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		display: true;
		lead: true;
		body15: true;
		body17: true;
		body21: true;
		caption1: true;
		caption2: true;
		caption3: true;
		caption4: true;
	}
}
declare module '@mui/material/FormControl' {
	interface FormControlPropsSizeOverrides {
		large: true;
	}
}
declare module '@mui/material/TextField' {
	interface TextFieldPropsSizeOverrides {
		large: true;
	}
}
declare module '@mui/material/styles/createPalette' {
	interface Text {
		extra: string;
		placeholder: string;
	}
	interface TypeText {
		extra?: string;
		placeholder?: string;
	}
}

let theme = createTheme({
	palette: {
		grey: {
			A100: 'rgba(0,0,0,0.05)',
			A200: 'rgba(0,0,0,0.1)',
		},
		primary: {
			main: '#2D74FF',
			light: '#568FFF',
			dark: '#1156DB',
			contrastText: '#F1F4FA',
		},
		secondary: {
			main: '#FA4A69',
			dark: '#E31F43',
			light: '#FB6E87',
			contrastText: '#FEF3F5',
		},
		background: {
			default: '#000',
			paper: '#fff',
		},
		text: {
			primary: `#000000`,
			secondary: 'rgba(0, 0, 0, 0.6)',
			disabled: 'rgba(0, 0, 0, 0.3)',
			extra: 'rgba(0, 0, 0, 0.5)',
			placeholder: 'rgba(0, 0, 0, 0.3)',
		},
		success: {
			main: '#90DA1A',
		},
		warning: {
			main: '#FEB72F',
		},
		error: {
			main: '#FF4E4E',
		},
		action: {
			disabledBackground: 'rgba(0,0,0,0.05)',
		},
	},
	typography: {
		fontFamily: 'Inter',
		fontSize: 16,
		htmlFontSize: 16,
		display: {
			fontWeight: 500,
			fontSize: '120px',
			lineHeight: '120px',
			letterSpacing: '-6px',
		},
		lead: {
			fontSize: '24px',
			lineHeight: '30px',
			letterSpacing: '-1px',
		},
		body15: {
			fontSize: '15px',
			lineHeight: '23px',
			letterSpacing: '-0.6px',
		},
		body17: {
			fontSize: '17px',
			lineHeight: '25px',
			letterSpacing: '-0.7px',
		},
		body21: {
			fontSize: '21px',
			lineHeight: '30px',
			letterSpacing: '-0.8px',
		},
		caption1: {
			fontSize: '20px',
			lineHeight: '24px',
			letterSpacing: '-0.6px',
		},
		caption2: {
			fontSize: '18px',
			lineHeight: '20px',
			letterSpacing: '-0.3px',
		},
		caption3: {
			fontSize: '16px',
			lineHeight: '18px',
			letterSpacing: '-0.5px',
		},
		caption4: {
			fontSize: '13px',
			lineHeight: '15px',
			letterSpacing: '-0.2px',
		},
		h1: {
			fontWeight: 500,
			fontSize: '72px',
			lineHeight: '80px',
			letterSpacing: '-4.5px',
		},
		h2: {
			fontSize: '64px',
			fontWeight: 500,
			lineHeight: '70px',
			letterSpacing: '-3px',
		},
		h3: {
			fontSize: '48px',
			fontWeight: 500,
			lineHeight: '54px',
			letterSpacing: '-1.6px',
		},
		h4: {
			fontSize: '36px',
			fontWeight: 500,
			lineHeight: '44px',
			letterSpacing: '-1.2px',
		},
		h5: {
			fontSize: '28px',
			fontWeight: 500,
			lineHeight: '34px',
			letterSpacing: '-0.8px',
		},
		button: {
			fontSize: 16,
		},
	},
	shape: {
		borderRadius: 10,
	},
	components: {
		MuiDivider: {
			styleOverrides: {
				root: {
					borderColor: 'rgba(0, 0, 0, 0.2)',
				},
			},
		},
		MuiContainer: {
			styleOverrides: {
				maxWidthLg: {
					maxWidth: '1290px !important',
				},
			},
		},
		MuiFormControl: {
			variants: [
				{
					props: { size: 'large' },
					style: ({ theme }) => ({
						'& .MuiFormLabel-root': {
							transform: 'translate(calc((60px - 22px)/2), calc(60px / 2 - 16px / 2)) scale(1)',
							fontSize: '20px',
							'&[data-shrink="true"]': {
								transform: 'translate(12px, -9px) scale(0.75)',
							},
						},
						'& .MuiOutlinedInput-root': {
							'& fieldset': {
								borderColor: theme.palette.grey['A200'],
								transition: 'all 0.3s ease 0s',
							},
							'&:not(:has(input:focus)):hover fieldset': {
								borderColor: theme.palette.grey['400'],
							},
							'&.Mui-focused fieldset': {},
						},
						'& .MuiInputBase-root': {
							height: '60px',
						},
						'& .MuiIconButton-root': {
							padding: 'calc((60px - 22px)/2)',
							'& svg': {
								width: '22px',
								height: '22px',
							},
						},
						'& .MuiInputBase-input': {
							padding: '0px calc((60px - 22px)/2)',
							fontWeight: 400,
							lineHeight: '16px',
							fontSize: '20px',
						},
						'& .MuiInputAdornment-root': {
							'& svg': {
								'& path': {
									fill: theme.palette.text.placeholder,
								},
							},
						},
					}),
				},
				{
					props: { size: 'medium' },
					style: ({ theme }) => ({
						'& .MuiFormLabel-root': {
							transform: 'translate(calc((50px - 18.3px)/2), calc(50px / 2 - 16px / 2)) scale(1)',
							fontSize: '18px',
							'&[data-shrink="true"]': {
								transform: 'translate(14px, -9px) scale(0.75)',
							},
						},
						'& .MuiOutlinedInput-root': {
							'& fieldset': {
								borderColor: theme.palette.grey['A200'],
								transition: 'all 0.3s ease 0s',
							},
							'&:not(:has(input:focus)):hover fieldset': {
								borderColor: theme.palette.grey['400'],
							},
							'&.Mui-focused fieldset': {},
						},
						'& .MuiInputBase-root': {
							height: '50px',
						},
						'& .MuiIconButton-root': {
							padding: 'calc((50px - 18.3px)/2)',
							'& svg': {
								width: '18.3px',
								height: '18.3px',
							},
						},
						'& .MuiInputBase-input': {
							padding: '0px calc((50px - 18.3px)/2)',
							fontWeight: 400,
							lineHeight: '16px',
							fontSize: '18px',
						},
					}),
				},
				{
					props: { size: 'small' },
					style: ({ theme }) => ({
						'& .MuiFormLabel-root': {
							transform: 'translate(calc((40px - 16.5px)/2), calc(40px / 2 - 16px / 2)) scale(1)',
							fontSize: '16px',
							'&[data-shrink="true"]': {
								transform: 'translate(16px, -9px) scale(0.75)',
							},
						},
						'& .MuiOutlinedInput-root': {
							'& fieldset': {
								borderColor: theme.palette.grey['A200'],
								transition: 'all 0.3s ease 0s',
							},
							'&:not(:has(input:focus)):hover fieldset': {
								borderColor: theme.palette.grey['400'],
							},
							'&.Mui-focused fieldset': {},
						},
						'& .MuiInputBase-root': {
							height: '40px',
						},
						'& .MuiIconButton-root': {
							padding: 'calc((40px - 16.5px)/2)',
							'& svg': {
								width: '16.5px',
								height: '16.5px',
							},
						},
						'& .MuiInputBase-input': {
							padding: '0px calc((40px - 16.5px)/2)',
							fontWeight: 400,
							lineHeight: '16px',
							fontSize: '16px',
						},
					}),
				},
			],
			defaultProps: {
				size: 'medium',
			},
			styleOverrides: {
				root: ({ theme }) => ({
					borderRadius: theme.shape.borderRadius,
					'&:has(input:focus)': {
						'& .MuiFormLabel-root': {
							color: theme.palette.primary.main,
						},
					},
					'& .MuiFormLabel-root': {
						color: theme.palette.text.disabled,
						fontWeight: 400,
						lineHeight: '16px',
					},
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							borderColor: theme.palette.grey['A200'],
							transition: 'all 0.3s ease 0s',
						},
						'&:not(:has(input:focus)):hover fieldset': {
							borderColor: theme.palette.grey['400'],
						},
						'&.Mui-focused fieldset': {},
					},
					'& .MuiInputBase-input': {
						fontWeight: 400,
					},
				}),
			},
		},
		MuiTextField: {
			variants: [
				{
					props: { size: 'large' },
					style: ({ theme }) => ({
						'& .MuiFormLabel-root': {
							transform: 'translate(calc((60px - 22px)/2), calc(60px / 2 - 16px / 2)) scale(1)',
							fontSize: '20px',
							'&[data-shrink="true"]': {
								transform: 'translate(12px, -9px) scale(0.75)',
							},
						},
						'& .MuiOutlinedInput-root': {
							'& fieldset': {
								borderColor: theme.palette.grey['A200'],
								transition: 'all 0.3s ease 0s',
							},
							'&:not(:has(input:focus)):hover fieldset': {
								borderColor: theme.palette.grey['400'],
							},
							'&.Mui-focused fieldset': {},
						},
						'& .MuiInputBase-root': {
							height: '60px',
						},
						'& .MuiIconButton-root': {
							padding: 'calc((60px - 22px)/2)',
							'& svg': {
								width: '22px',
								height: '22px',
							},
						},
						'& .MuiInputBase-input': {
							padding: '0px calc((60px - 22px)/2)',
							fontWeight: 400,
							lineHeight: '16px',
							fontSize: '20px',
						},
					}),
				},
				{
					props: { size: 'medium' },
					style: ({ theme }) => ({
						'& .MuiFormLabel-root': {
							transform: 'translate(calc((50px - 18.3px)/2), calc(50px / 2 - 16px / 2)) scale(1)',
							fontSize: '18px',
							'&[data-shrink="true"]': {
								transform: 'translate(14px, -9px) scale(0.75)',
							},
						},
						'& .MuiOutlinedInput-root': {
							'& fieldset': {
								borderColor: theme.palette.grey['A200'],
								transition: 'all 0.3s ease 0s',
							},
							'&:not(:has(input:focus)):hover fieldset': {
								borderColor: theme.palette.grey['400'],
							},
							'&.Mui-focused fieldset': {},
						},
						'& .MuiInputBase-root': {
							height: '50px',
						},
						'& .MuiIconButton-root': {
							padding: 'calc((50px - 18.3px)/2)',
							'& svg': {
								width: '18.3px',
								height: '18.3px',
							},
						},
						'& .MuiInputBase-input': {
							padding: '0px calc((50px - 18.3px)/2)',
							fontWeight: 400,
							lineHeight: '16px',
							fontSize: '18px',
						},
					}),
				},
				{
					props: { size: 'small' },
					style: ({ theme }) => ({
						'& .MuiFormLabel-root': {
							transform: 'translate(calc((40px - 16.5px)/2), calc(40px / 2 - 16px / 2)) scale(1)',
							fontSize: '16px',
							'&[data-shrink="true"]': {
								transform: 'translate(16px, -9px) scale(0.75)',
							},
						},
						'& .MuiOutlinedInput-root': {
							'& fieldset': {
								borderColor: theme.palette.grey['A200'],
								transition: 'all 0.3s ease 0s',
							},
							'&:not(:has(input:focus)):hover fieldset': {
								borderColor: theme.palette.grey['400'],
							},
							'&.Mui-focused fieldset': {},
						},
						'& .MuiInputBase-root': {
							height: '40px',
						},
						'& .MuiIconButton-root': {
							padding: 'calc((40px - 16.5px)/2)',
							'& svg': {
								width: '16.5px',
								height: '16.5px',
							},
						},
						'& .MuiInputBase-input': {
							padding: '0px calc((40px - 16.5px)/2)',
							fontWeight: 400,
							lineHeight: '16px',
							fontSize: '16px',
						},
					}),
				},
			],
			defaultProps: {
				size: 'medium',
			},
			styleOverrides: {
				root: ({ theme }) => ({
					'&:has(input:focus)': {
						'& .MuiFormLabel-root': {
							color: theme.palette.primary.main,
						},
					},
					'& .MuiFormLabel-root': {
						color: theme.palette.text.disabled,
						fontWeight: 400,
						lineHeight: '16px',
					},
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							borderColor: theme.palette.grey['A200'],
							transition: 'all 0.3s ease 0s',
						},
						'&:not(:has(input:focus)):hover fieldset': {
							borderColor: theme.palette.grey['400'],
						},
						'&.Mui-focused fieldset': {},
					},
					'& .MuiInputBase-input': {
						fontWeight: 400,
					},
				}),
			},
		},
		MuiChip: {
			styleOverrides: {
				root: ({ theme }) => ({
					height: 24,
					background: `${theme.palette.secondary.light}33`,
					transition: 'all 0.3s ease 0s',
					'& .MuiChip-label': {
						padding: '0 10px',
						fontSize: theme.typography.body1,
					},
					'& .MuiChip-deleteIcon': {
						color: theme.palette.secondary.main,
						transition: 'all 0.3s ease 0s',
						'&:hover': {
							color: theme.palette.secondary.dark,
						},
					},
				}),
			},
		},
		MuiButton: {
			styleOverrides: {
				root: ({ theme }) => ({
					color: theme.palette.text.primary,
					boxShadow: 'none',
					textTransform: 'initial',
					padding: 0,
					minWidth: 'auto',
					'&:disabled': {
						color: theme.palette.text.disabled,
						background: theme.palette.action.disabledBackground,
						borderColor: theme.palette.grey['A200'],
					},
				}),
				sizeSmall: {
					height: 40,
					padding: 14,
					fontWeight: 500,
					fontSize: '16px',
					lineHeight: '18px',
					letterSpacing: '-0.5px',
				},
				sizeMedium: {
					height: 50,
					padding: 18,
					fontWeight: 500,
					fontSize: '18px',
					lineHeight: '20px',
					letterSpacing: '-0.3px',
				},
				sizeLarge: {
					height: 60,
					padding: 22,
					fontSize: '20px',
					lineHeight: '24px',
					letterSpacing: '-0.6px',
				},
				outlined: ({ theme }) => ({
					borderColor: theme.palette.grey['A200'],
					color: theme.palette.text.primary,
					'&:hover': {
						background: theme.palette.grey['A100'],
						borderColor: theme.palette.grey['A200'],
					},
				}),
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: ({ theme }) => ({
					'& svg path': {
						fill: theme.palette.text.disabled,
					},
				}),
				colorPrimary: ({ theme }) => ({
					background: theme.palette.primary.main,
					'& svg path': {
						fill: theme.palette.common.white,
					},
					'&:hover': {
						background: theme.palette.primary.dark,
					},
				}),
			},
		},
		MuiPagination: {
			styleOverrides: {
				root: ({ theme }) => ({
					border: `1px solid ${theme.palette.grey['A200']}`,
					borderRadius: theme.shape.borderRadius,
					'& li div': {
						height: '100%',
					},
				}),
			},
		},
		MuiPaginationItem: {
			styleOverrides: {
				root: ({ theme }) => ({
					color: theme.palette.text.disabled,
					fontSize: 18,
					borderRadius: 0,
					margin: 0,
				}),
				sizeSmall: {
					height: 40,
					width: 40,
				},
				sizeLarge: {
					height: 60,
					width: 60,
				},
			},
		},
		MuiSwitch: {
			styleOverrides: {
				sizeSmall: ({ theme }) => ({
					width: 54,
					height: 30,
					padding: 0,
					'& .MuiSwitch-switchBase': {
						padding: 0,
						margin: '2px',
						transitionDuration: '300ms',
						'&.Mui-checked': {
							transform: 'translateX(24px)',
							color: '#fff',
							'& + .MuiSwitch-track': {
								backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : theme.palette.primary.main,
								opacity: 1,
								border: 0,
							},
							'&.Mui-disabled + .MuiSwitch-track': {
								opacity: 0.5,
							},
						},
						'&.Mui-focusVisible .MuiSwitch-thumb': {
							color: '#33cf4d',
							border: '6px solid #fff',
						},
						'&.Mui-disabled .MuiSwitch-thumb': {
							color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
						},
						'&.Mui-disabled + .MuiSwitch-track': {
							opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
						},
					},
					'& .MuiSwitch-thumb': {
						boxSizing: 'border-box',
						width: 26,
						height: 26,
					},
					'& .MuiSwitch-track': {
						borderRadius: 26 / 2,
						backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
						opacity: 1,
						transition: theme.transitions.create(['background-color'], { duration: 500 }),
					},
				}),
				sizeMedium: ({ theme }) => ({
					width: 42,
					height: 24,
					padding: 0,
					'& .MuiSwitch-switchBase': {
						padding: 0,
						margin: '2px',
						transitionDuration: '300ms',
						'&.Mui-checked': {
							transform: 'translateX(18px)',
							color: '#fff',
							'& + .MuiSwitch-track': {
								backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : theme.palette.primary.main,
								opacity: 1,
								border: 0,
							},
							'&.Mui-disabled + .MuiSwitch-track': {
								opacity: 0.5,
							},
						},
						'&.Mui-focusVisible .MuiSwitch-thumb': {
							color: '#33cf4d',
							border: '6px solid #fff',
						},
						'&.Mui-disabled .MuiSwitch-thumb': {
							color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
						},
						'&.Mui-disabled + .MuiSwitch-track': {
							opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
						},
					},
					'& .MuiSwitch-thumb': {
						boxSizing: 'border-box',
						width: 20,
						height: 20,
					},
					'& .MuiSwitch-track': {
						borderRadius: 26 / 2,
						backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
						opacity: 1,
						transition: theme.transitions.create(['background-color'], { duration: 500 }),
					},
				}),
			},
		},
	},
});

export default theme;
