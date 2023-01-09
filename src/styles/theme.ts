import { createTheme, ThemeOptions } from '@mui/material';

export const theme: ThemeOptions = createTheme({
	palette: {
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
			disabled: 'rgba(0,0,0,0.6)',
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
			fontSize: 17,
		},
		caption: {
			fontSize: 20,
			fontWeight: 500,
		},
	},
});
