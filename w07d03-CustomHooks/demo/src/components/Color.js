import React from 'react'
import useColor from '../hooks/useColor'

const Color = function(props) {
    const {defaultColor, next, prev} = useColor(['salmon', 'darksalmon','blue', 'lime', 'red', 'yellow', 'purple']);
    return (
        <div style={{backgroundColor: defaultColor}}>
            <h4>Color Changer</h4>
            <button onClick={prev}>PREV</button>
            <button onClick={next}>NEXT</button>
        </div>
    )
}


export default Color;