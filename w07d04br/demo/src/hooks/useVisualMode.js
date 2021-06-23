import {useState} from 'react';

export default function useVisualMode(initial) {
    const [history, setHistory] = useState([initial]);
    // const [mode, setMode] = useState(initial);
    
    const transition = (newMode, replace) => {
        console.log("REPLACE --->", replace)
        if (replace) {
            // we have an array [ FIRST SECOND]
            // we have a mode THIRD
            // we need to remove the last element and PUT IN THIRD
            
            setHistory(prev => {
                const tempHistory = [...prev.slice(0, prev.length - 1)]; // this removes last item of the arr
                return [...tempHistory, newMode] // this adds one item to the back of the array.
            })
            // setMode(newMode);
        } else {            
            setHistory(prev => {
                return [...prev, newMode];
            })
            // setMode(newMode);
        }
        
    }

    const back = () => {
        if (!(history.length < 2)) {
            const index = history.length - 2;
            // setMode(history[index]);
            setHistory(prev => {
                return [...prev.slice(0, prev.length - 1)]
            })
        }
    }

    let mode =  history[history.length -1];
    return {mode, transition, back};
}