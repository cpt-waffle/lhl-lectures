import styled from 'styled-components';

const VibeContainer = styled.div`
    background-color: black;
    color: white;
`

const AmazingBtn = styled.button`
    background-color: ${props => props.color};
`

export { VibeContainer, AmazingBtn}