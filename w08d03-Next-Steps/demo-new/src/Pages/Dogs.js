import React, { useContext } from 'react';
import GlobalContext from '../Context/GlobalContext';


export default function Dogs(props){
	const [state, setState] = useContext(GlobalContext);
	const clickDown = () => setState(prev => ({...prev, count: prev.count - 1}));
	return (
		<div>
			<h2>Dogs Page</h2>
			<h1>Count is: {state.count}</h1>
			<button onClick={clickDown}>click me</button>
		</div>
	)
} 