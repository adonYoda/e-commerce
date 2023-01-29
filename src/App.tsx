import Header from './scenes/Header';
import Footer from './scenes/Footer';
import { useState } from 'react';
import { useWindowScrollPosition } from './hooks/useWindowScrollPosition';
import Main from './scenes/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
	const position = useWindowScrollPosition();

	return (
		<>
			<BrowserRouter>
				<Header dark={position > 570 ? false : true} />
				<Main />
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
