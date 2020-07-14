// using createContext to make a global "contenxt"/state
import React, {useState, createContext} from 'react';

// you need to declare context
const GlobalContext = createContext({count: 0});

// make a provider. A provider is the JSX that WRAPS around ALL components that YOU want to share
// the values with.


export function GlobalContextProvider(props) {
    const [state, setState] = useState({count: 0});
    // needs to return GlobalContext.Provider
    return (
        <GlobalContext.Provider value={[state, setState]}>
           {props.children} 
        </GlobalContext.Provider>
    )
}

export default GlobalContext;