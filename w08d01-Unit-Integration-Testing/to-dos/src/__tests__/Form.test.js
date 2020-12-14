import React from 'react';
import { render, prettyDOM, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../Components/Form';


describe('Form Tests', () => {
    it('renders a form', () => {
        const { container } = render(<Form/>);
        // console.log(prettyDOM(container));
    })


    it('shows us how to mock a function', () => {
        const myMock = jest.fn();
        // console.log(myMock);
        expect(myMock).not.toHaveBeenCalled();
        myMock();
        expect(myMock).toHaveBeenCalled();
        myMock();
        myMock();
        expect(myMock).toHaveBeenCalledTimes(3);


    })

    // clicking 
    // mocking a function
    // checking if the function has been executed or not
    it('tries to add an empty item into the list with the form', () => {
        const addItemMock = jest.fn();
        const { container, getByText } = render(<Form addItem={addItemMock}/>);
        const btn = getByText(/add/i);
        fireEvent.click(btn);
        expect(addItemMock).not.toHaveBeenCalled();
    })
    it('tries to add an empty item into the list with the form, gets an error "Cannot be Blank"', () => {
        const addItemMock = jest.fn();
        const { container, getByText } = render(<Form addItem={addItemMock}/>);
        const btn = getByText(/add/i);
        fireEvent.click(btn);
        const err = getByText(/Cannot Be Blank/i);
        expect(err).toBeInTheDocument();
    })

    it('tries to add "add apples" through the form. Succeeds!', () => {
        const addItemMock = jest.fn();
        const { container, getByText, getByPlaceholderText } = render(<Form addItem={addItemMock}/>);
        const btn = getByText(/add/i);
        // ?????
        const input = getByPlaceholderText(/enter todo/i);
        //fireEvent.change(getByLabelText(/username/i), { target: { value: 'a' } })
        fireEvent.change(input, { target: { value: 'buy apples' }});
        fireEvent.click(btn);
        expect(addItemMock).toHaveBeenCalled();
        // type in the input field to add "Buy Apples"
    })
})