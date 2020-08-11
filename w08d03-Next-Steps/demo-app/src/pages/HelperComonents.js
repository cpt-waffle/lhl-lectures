import React from 'react';
import styled from 'styled-components';

const AboutTitle = styled.h1`
    font-size: 25px;
    color: ${ props => props.color};
    margin: ${ props => props.margin};
`


export { AboutTitle };