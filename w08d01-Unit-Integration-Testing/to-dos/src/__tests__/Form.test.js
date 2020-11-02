import React from 'react';
import { prettyDOM, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../Components/Form';

describe('Form Tests', () => {
    it('renders a form', () => {
        const { container } = render(<Form/>);
        // console.log(prettyDOM(container));
    })

    it(' adds an item to the list (correctly)', () => {
        const mockAddItem = jest.fn();
        const { container, getByPlaceholderText, getByText } = render(<Form addItem={mockAddItem}/>);
        const input = getByPlaceholderText('enter todo');
        // console.log(prettyDOM(input));
        // console.log(prettyDOM(container));
        const btn = getByText(/Add/i);
        fireEvent.change(input, { target: { value: 'Buy Some Apples!!!!!!' } });
        console.log(prettyDOM(input));
        console.log(prettyDOM(btn));
        fireEvent.click(btn);
        expect(mockAddItem).toHaveBeenCalled();
    })

    it(' tried to add item but does not (empty string in form)', () => {
        const mockAddItem = jest.fn();
        const { container, getByPlaceholderText, getByText } = render(<Form addItem={mockAddItem}/>);
        const input = getByPlaceholderText('enter todo');
        const btn = getByText(/Add/i);
        fireEvent.click(btn);
        expect(mockAddItem).not.toHaveBeenCalled();
    })

    it(' tries to submit an empty item, but gets error "cannot be blank"', () => {
        const mockAddItem = jest.fn();
        const { container, getByPlaceholderText, getByText } = render(<Form addItem={mockAddItem}/>);
        const input = getByPlaceholderText('enter todo');
        const btn = getByText(/Add/i);
        fireEvent.click(btn);
        expect(mockAddItem).not.toHaveBeenCalled();
        const error = getByText(/Cannot be Blank/i);
        console.log(prettyDOM(error));
        expect(error).toBeInTheDocument();
    })
})