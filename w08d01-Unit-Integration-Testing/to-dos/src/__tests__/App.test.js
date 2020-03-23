import React from 'react';
import App from '../App';
import { render, prettyDOM, fireEvent } from '@testing-library/react';

describe('App Tests', () => {
    it('Renders the App', () => {
        render(<App/>);
    })
    
    it('Renders the App', () => {
        const { container } = render(<App/>);
        expect(container.children[0].children[1].children.length).toBe(6);
    })


    it('has "learn react", unchecked. We then click the checkbox.. checkbox is now checked', () => {
        const { container, getByText } = render(<App/>);
        // console.log(prettyDOM(getByText('learn react').parentElement.children[1]))
        expect(getByText('learn react').parentElement.children[1].checked).toBe(false)
        fireEvent.click(getByText('learn react').parentElement.children[1])
        expect(getByText('learn react').parentElement.children[1].checked).toBe(true)
        // console.log(getByText('learn react').parentElement.children[1].checked);

    })

    it('Clicks the button "add", (without filling out the form), nothing gets added, and we get Error "Item Cannot be Blank!!!"', () => {
        const { container, getByText } = render(<App/>);
        expect(container.children[0].children[1].children.length).toBe(6);
        const button = getByText('Add');
        const input = container.querySelector('input[name="newItem"]')
        // console.log(prettyDOM(input))
        // console.log(prettyDOM(button));
        fireEvent.click(button);
        // console.log(prettyDOM(container));
        expect(getByText('Cannot Be Blank!'));
        fireEvent.change(input, { target: { value: 'panda' } })
        fireEvent.click(button);
        // console.log(prettyDOM(container))
        // console.log(prettyDOM(container))
        expect(container.children[0].children[1].children.length).toBe(7);

    })

})