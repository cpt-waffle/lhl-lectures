import React, { createContext, useState } from 'react';
// step 1: make a context -- which makes the default shareable state
const GlobalContext = createContext({count: 0});

// step 2: make a provider from the context we made. We need the provider, to
// WRAP around all of Components(Children) that may use this global state.
export function GlobalContextProvider(props) {
	// Step 3: add a state and pass it into the Provider value prop
	const [state, setState] = useState({count: 0});
	return (
		<GlobalContext.Provider value={[state, setState]}>
			{props.children}
		</GlobalContext.Provider>
	)
}

export default GlobalContext;