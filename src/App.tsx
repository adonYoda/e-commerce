import Header from "./scenes/Header";
import Footer from "./scenes/Footer";
import { useWindowScrollPosition } from "./hooks/useWindowScrollPosition";
import Main from "./scenes/Main";
import useGetLocation from "./hooks/useGetLocation";

function App() {
	const position = useWindowScrollPosition();
	const location = useGetLocation();
	return (
		<>
			<Header dark={location[0] === "" && position < 570 ? "dark" : undefined} />
			<Main />
			<Footer />
		</>
	);
}

export default App;
