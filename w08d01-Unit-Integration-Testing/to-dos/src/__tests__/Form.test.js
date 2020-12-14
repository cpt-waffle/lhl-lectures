import Item from "../Components/Item"
import React from 'react';
import {render, prettyDOM, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../Components/Form';


describe('Form Tests', () => {
    it(' renders a form', () => {
        const { container } = render(<Form/>);
    })

    it('how to use mock function', () => {
        const mockAddItem = jest.fn();
        expect(mockAddItem).not.toHaveBeenCalled();
        mockAddItem();
        expect(mockAddItem).toHaveBeenCalled();
        mockAddItem();
        mockAddItem();
        expect(mockAddItem).toHaveBeenCalledTimes(3);
    })

    it('tries to submit a form that is blank', () => {
        const mockAddItem = jest.fn();
        const { container, getByText } = render(<Form addItem={mockAddItem}/>);
        const buttonAdd = getByText('Add');
        fireEvent.click(buttonAdd);
        // console.log(prettyDOM(buttonAdd));
        expect(mockAddItem).not.toHaveBeenCalled();
        const error = getByText(/cannot be blank/i);
        // console.log(prettyDOM(container));
        expect(error).toBeInTheDocument();
    })

    it('tries to submit a form that has correct value', () => {
        const mockAddItem = jest.fn();
        const { container, getByText, getByPlaceholderText } = render(<Form addItem={mockAddItem}/>);
        const input = getByPlaceholderText('enter todo');
        fireEvent.change(input, { target: { value: 'buy apples' } });
        const buttonAdd = getByText('Add');
        fireEvent.click(buttonAdd);
        expect(mockAddItem).toHaveBeenCalled();
        // console.log(prettyDOM(input));
    }) 
})