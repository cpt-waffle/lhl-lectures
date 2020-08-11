import React, { useState, createContext } from 'react';

// Step 1 make a context which has a DEFAULT value (Shareable)
const GlobalContext = createContext({count: 0});


// not doing a default export, because we will need this only to be wrapped once
// in our main app. The default will be used for something else...
export function GlobalContextProvider(props) {
    const [state, setState] = useState({count: 0})

    // return a GlobalContext.Provider 

    // {props.children} to use as a wrap for components that will SHARE the state
    // GlobalContext.Provider NEEDS a prop called VALUE.. The VALUE will take the state and
    // the function that changes the state.
    return (
        <GlobalContext.Provider value={[state, setState]}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;