import React from 'react';


function Title(props) {
    console.log(props);
    return (
        <h5>
            {props.children}
        </h5>
    )

}


export default Title;