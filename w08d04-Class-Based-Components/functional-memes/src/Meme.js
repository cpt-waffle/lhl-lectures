import React, { useState } from 'react';

export default (props) => {
    const [count, setCount] = useState({count: 0, name:'Vasiliy'});
    console.log(props);
    return (
        <div>
            <h1>{count.name}</h1>
            <h4>count: {count.count}</h4>
            <button onClick={() => setCount(prev => ({...prev, count: count.count+ 1}))}>UP</button>
        </div>
    )
}