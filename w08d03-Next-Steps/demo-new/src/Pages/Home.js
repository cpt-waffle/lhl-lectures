import React, { useContext } from 'react';
import GlobalContext from '../Context/GlobalContext';

export default function Home(props){
	const [state, setState] = useContext(GlobalContext);
	const clickUp = () => setState(prev => ({...prev, count: prev.count + 1})) 

	return (
		<div>
			<h2>Home Page</h2>
			<h1>Clicked {state.count}</h1>
			<button onClick={clickUp}>Click Me</button>
		</div>
	)
} 