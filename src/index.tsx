import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material';
import theme from './utils/theme/theme';
import { GlobalStyles } from './styles/GlobalStyles.styled';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
