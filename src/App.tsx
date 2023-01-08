import React from 'react';
import styled from 'styled-components';
import './App.css';

const Comp = styled.div`
	width: 100%;
	height: 100%;
	background-color: red;
`;

function App() {
	return <Comp className='App'></Comp>;
}

export default App;
