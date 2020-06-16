import React from 'react';

import styled from 'styled-components';

const DogDiv = styled.div`
    background-color: salmon;
    color: limegreen;
    border: 20px dotted brown;
    padding: 2px;
`


const DogImage = styled.img`
    width: 250px;
    object-fit: cover;
    border: 5px solid darkblue;
    margin: 4px;
`



function Dogs(props) {
    return (
        <DogDiv>
            <DogImage src={props.src}/>
        </DogDiv>
    )
}


export default Dogs;