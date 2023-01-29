import Header from './scenes/Header';
import Footer from './scenes/Footer';
import { useState } from 'react';
import { useWindowScrollPosition } from './hooks/useWindowScrollPosition';
import Main from './scenes/Main';

function App() {
	const position = useWindowScrollPosition();

	return (
		<>
			<Header dark={position > 570 ? false : true} />
			<Main />
			<Footer />
		</>
	);
}

export default App;
