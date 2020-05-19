import React, { createContext, useState } from 'react';

// Step 1: make a context -- Which makes the DEFAULT sharable state!
const GlobalContext = createContext({count: 0});

//Step 2: The context that we created has a method, called Provider(Component).
// WRAP EVERYTHING YOU WANT TO SHARE with THIS PROVIDER!!!!!! 

export function GlobalContextProvider(props) {

    const [state, setState] = useState({count: 0});
    return (
        <GlobalContext.Provider value={[state, setState]}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;