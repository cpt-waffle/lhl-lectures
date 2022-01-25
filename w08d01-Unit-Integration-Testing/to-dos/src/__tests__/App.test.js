// We want to see if our component renders
// JEST itself, cannot do that, so we will need a help
// of some extra libraries
import React from 'react';
import { render, prettyDOM } from '@testing-library/react';
// We are testing components
// We should import them 
import App from '../App';

//describe()
// it()
describe('App Component', () => {
    it('renders ', () => {
        const { getByTestId, queryByTestId } = render(<App/>);
        const header = getByTestId('header');
        console.log(prettyDOM(header));
    })
})