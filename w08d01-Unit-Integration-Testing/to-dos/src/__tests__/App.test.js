import React from 'react';
import { render, prettyDOM, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Tests!', () => {
    it('renderes the app!', () => {
        const {container} = render(<App/>);
    })

    it('renders out 6 items on the screen', () => {
        const {container} = render(<App/>);
        expect(container.firstChild.children[1].children.length).toBe(6);
    })


    it('Adds an item to the list', () => {
        const {container, getByText} = render(<App/>);
        expect(container.firstChild.children[1].children.length).toBe(6);
        const button = getByText('Add');
        const input = container.querySelector(`input[name="newItem"]`)
        fireEvent.click(button);
        getByText('CANNOT BE BLANK')
        expect(container.firstChild.children[1].children.length).toBe(6);
        fireEvent.change(input, { target: { value: 'learn some testing' }});
        fireEvent.click(button);
        console.log(prettyDOM(container));
        expect(container.firstChild.children[1].children.length).toBe(7);
    })
})