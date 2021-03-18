import React from 'react';
import useColors from '../hooks/useColors'


function ColorChanger(props) {
    const {state, next, back} = useColors( ['salmon', 'firebrick', 'lime', 'green', 'red']);
    console.log(state, next)
    return (<div style={{backgroundColor: state.currentColor}}>
        <h1>I change Colors</h1>
        <button onClick={back}>prev</button>
        <button onClick={next}>next</button>

    </div>)

}

export default ColorChanger;