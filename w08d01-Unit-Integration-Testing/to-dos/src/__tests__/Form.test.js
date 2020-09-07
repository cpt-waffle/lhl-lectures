// first thing import react 
import React from 'react';
// import the component
import Form from '../Components/Form';
// import testing-library/react
import {render, prettyDOM, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


// describe block for our tests to be called!!
describe( 'Form Tests', () => {
    // write our first test
    it('Renders a form', () => {
        const { container, getByText } = render(<Form/>);
    })

    it('Tries to save an empty todo item!', () => {
        const addItem  = jest.fn();
        const { container, getByText } = render(<Form addItem={addItem}/>);
        const button = getByText('Add');
        fireEvent.click(button);
        // console.log(prettyDOM(container));
        expect(getByText(/cannot be blank/i)).toBeInTheDocument();
    })

    it('Does not call the submit function to be added to the list', () => {
        const addItem  = jest.fn();
        const { container, getByText } = render(<Form addItem={addItem}/>);
        const button = getByText('Add');
        fireEvent.click(button);
        // console.log(addItem);
        // console.log(prettyDOM(container));
        expect(addItem).not.toHaveBeenCalled();
    })
    // {item: ""}

    it('adds an item properly into the form and submits. The form passes.', () => {
        const addItem  = jest.fn();
        const { container, getByText, getByPlaceholderText } = render(<Form addItem={addItem}/>);
        const button = getByText('Add');
        // console.log(prettyDOM(container));
        const input = getByPlaceholderText("enter todo");
        fireEvent.change(input, { target: { value: 'Writing a complex test'}});
        // console.log(prettyDOM(input));
        fireEvent.click(button);
        console.log(prettyDOM(container));
        expect(input).toHaveValue('');
        expect(addItem).toHaveBeenCalled();
    })

})