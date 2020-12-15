import { createContext, useState } from 'react';

// Step 1 make a contech which has default Value
const GlobalContext = createContext({count: 0, count2: 0});

// Step 2 make a provider
export function GlobalContextProvider(props) {
    const [state, setState] = useState({count: 0, count2: 0});
    // value, there needs to be a value in the GlobalContext.Provider, that will be
    // passed and shared...
    return (
        <GlobalContext.Provider value={[state, setState]}>
            {props.children}
        </GlobalContext.Provider>
    )
}

// Step 3 export both provider and context
export default GlobalContext;