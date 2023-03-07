import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material';
import theme from './utils/theme/theme';
import { GlobalStyles } from './styles/GlobalStyles.styled';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, useAppSelector } from './strore_api/configureStore';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);


root.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</Provider>
);
