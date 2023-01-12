import { Checkbox, Radio, Switch, ToggleButton } from '@mui/material';
import './App.css';
import { ReactComponent as VectorIcon } from './assets/Vector.svg';

function App() {
	return (
		<div className='app'>
			<Radio />
			<Switch size='medium' />
			<Switch size='small' />
		</div>
	);
}

export default App;
