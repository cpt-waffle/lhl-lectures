import React, {useContext} from 'react';
import styled from 'styled-components';


const AcceptButton = styled.button`
    background-color: green;
    color:white;
    padding: 8px;
    box-shadow: 15px 4px 3px 4px;
`;

const DenyButton = styled.button`
    background-color: red;
    color:white;
    padding: 8px;
    box-shadow: 15px 4px 3px 4px;
`;

const DisabledButton = styled.button`
    background-color: gray;
    color:white;
    padding: 8px;
    box-shadow: 15px 4px 3px 4px;
`;

export {AcceptButton, DenyButton, DisabledButton}