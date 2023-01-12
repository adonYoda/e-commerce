import { createTheme, ThemeOptions } from '@mui/material/styles';
declare module '@mui/material/styles' {
	interface Theme {
		Danger: string;
	}
	// allow configuration using `createTheme`
	interface Components {
		Danger?: string;
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
			primary: '#000000',
			secondary: 'rgba(0,0,0,0.8)',
			disabled: 'rgba(0,0,0,0.3)',
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
		h1: {
			fontWeight: 500,
			fontSize: 72,
		},
		h2: {
			fontSize: 64,
			fontWeight: 500,
		},
		fontSize: 16,
		htmlFontSize: 16,
		h3: {
			fontSize: 48,
			fontWeight: 500,
		},
		h4: {
			fontSize: 36,
			fontWeight: 500,
		},
		h5: {
			fontSize: 28,
			fontWeight: 500,
		},
		body1: {
			fontSize: 15,
		},
		body2: {
			fontSize: 17,
		},
		button: {
			fontSize: 16,
		},
		caption: {
			fontSize: 20,
			fontWeight: 500,
		},
	},

	shape: {
		borderRadius: 10,
	},
	components: {},
});

theme = createTheme(theme, {
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					boxShadow: 'none',
					textTransform: 'initial',
					padding: 0,
					minWidth: 'auto',
					'&:disabled': {
						color: theme.palette.text.disabled,
						background: theme.palette.action.disabledBackground,
						borderColor: theme.palette.grey['A200'],
					},
				},
				sizeSmall: {
					height: 40,
					padding: 14,
					fontSize: 16,
				},
				sizeMedium: {
					height: 50,
					padding: 18,
					fontSize: 18,
				},
				sizeLarge: {
					height: 60,
					padding: 22,
					fontSize: 20,
				},
				outlined: {
					borderColor: theme.palette.grey['A200'],
					color: theme.palette.text.primary,
					'&:hover': {
						background: theme.palette.grey['A100'],
						borderColor: theme.palette.grey['A200'],
					},
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					background: theme.palette.primary.main,
					'& *': {
						fill: theme.palette.common.white,
					},
					'&:hover': {
						background: theme.palette.primary.dark,
					},
				},
			},
		},
		MuiPagination: {
			styleOverrides: {
				root: {
					border: `1px solid ${theme.palette.grey['A200']}`,
					borderRadius: theme.shape.borderRadius,
					'& li div': {
						height: '100%',
					},
				},
			},
		},
		MuiPaginationItem: {
			styleOverrides: {
				root: {
					sizeSmall: {
						height: 40,
						width: 40,
					},
					sizeMedium: {
						height: 50,
						width: 50,
					},
					sizeLarge: {
						height: 60,
						width: 60,
					},
					color: theme.palette.text.disabled,
					fontSize: 18,
					borderRadius: 0,
					margin: 0,
				},
				sizeSmall: {
					height: 40,
					width: 40,
				},
				sizeMedium: {
					height: 50,
					width: 50,
				},
				sizeLarge: {
					height: 60,
					width: 60,
				},
			},
		},
		MuiSwitch: {
			defaultProps: {
				sx: {
					// width: 54,
					// height: 30,
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
						transition: theme.transitions.create(['background-color'], {
							duration: 500,
						}),
					},
				},
			},
		},
	},
});

export default theme;
