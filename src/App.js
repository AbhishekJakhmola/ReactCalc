import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
	const [ fnum, setFnum ] = useState('');
	const [ snum, setSnum ] = useState('');
	const [ result, setResult ] = useState(0);
	const addButton = () => {
		var a = fnum + snum;
		setResult(a);
	};
	const subButton = () => {
		var a = fnum - snum;
		setResult(a);
	};
	const multiButton = () => {
		var a = fnum * snum;
		setResult(a);
	};
	const divButton = () => {
		var a = fnum / snum;
		setResult(a);
	};
	const refershButton = () => {
		var a = 0;
		setResult(a);
		setFnum('');
		setSnum('');
	};
	return (
		<div className="App">
			<h1>Enter the two numbers.</h1>
			<label for="fnum">First:</label>
			<input
				type="number"
				onChange={(event) => {
					setFnum(Number(event.target.value));
				}}
				value={fnum}
			/>
			<label for="snum">Second:</label>
			<input type="number" onChange={(event) => setSnum(Number(event.target.value))} value={snum} />
			<br />
			<button onClick={addButton}>Addition</button>
			<button onClick={subButton}>Subtraction</button>
			<button onClick={multiButton}>Multiplication</button>
			<button onClick={divButton}>Division</button>
			<br />
			<button onClick={refershButton}>Refersh</button>
			Result:{result}
		</div>
	);
}

export default App;
