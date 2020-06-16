import React, { createContext, useState } from 'react';
// Step 1: Make a context ( which basically means, use a hook from react library to add a default state)
const GlobalContext = createContext({count: 0});

// Step 2: 

export function GlobalContextProvider(props) {
    // Im defining state here that will be used as a global state
    const [state, setState] = useState({count: 0});
    return (
        <GlobalContext.Provider value={[state, setState]}>
            {props.children}
        </GlobalContext.Provider>
    )

}

export default GlobalContext;

// <Dogs> ... </Dogs>

// Step 3: Export Stuff