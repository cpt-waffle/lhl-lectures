import React from 'react';
import styled from 'styled-components';
import { VibeContainer } from './lib'

function Vibe(props) {

    return (
        <VibeContainer>
            <p>{props.name}</p>
            <img src={props.img}/>

        </VibeContainer>
    )
}

export default Vibe;