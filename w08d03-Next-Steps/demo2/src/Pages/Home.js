import React, {useContext} from 'react';
import GlobalContext from '../Context/GlobalContext'
import styled from 'styled-components';
import {AcceptButton} from './Lib'

export default function Home(props) {
    const [state, setState] = useContext(GlobalContext);
    console.log(state)
    return (
        <div>
            <h4>Home Page</h4>
            <h4>THe counter is {state.count}</h4>
            <AcceptButton onClick={() => setState(prev => ({...prev, count: prev.count+1}))}>Click me</AcceptButton>
        </div>
    )
}