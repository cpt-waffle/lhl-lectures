import React from 'react';
// Fire event to mimic the execution of a click
import { render, prettyDOM, fireEvent, getByPlaceholderText } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../Components/Form';

it('renders the Form component', () => {
    const { container } = render(<Form/>)
    // console.log(prettyDOM(container));
})

it('Tries to save an empty item to the list', () => {
    const mockAddItem = jest.fn();
    const { container, getByText } = render(<Form addItem={mockAddItem}/>);
    const button = getByText('Add');
    // console.log(prettyDOM(button));
    fireEvent.click(button)
    // console.log(mockAddItem());
    // console.log(mockAddItem);
    expect(mockAddItem).not.toHaveBeenCalled();
})

it('adds an item properly to list', () => {
    const mockAddItem = jest.fn();
    const { container, getByText, getByPlaceholderText } = render(<Form addItem={mockAddItem}/>);
    const button = getByText('Add');
    const input = getByPlaceholderText('enter todo');
    fireEvent.change(input, {target: {value: 'random test!'}});
    // console.log(prettyDOM(input));
    fireEvent.click(button);
    expect(mockAddItem).toHaveBeenCalled();
})

it('tries to save an empty item, doesnt save, and gets a warning', () => {
    const mockAddItem = jest.fn();
    const { container, getByText } = render(<Form addItem={mockAddItem}/>);
    const button = getByText('Add');
    // console.log(prettyDOM(button));
    fireEvent.click(button)
    // console.log(mockAddItem());
    // console.log(mockAddItem);
    expect(mockAddItem).not.toHaveBeenCalled();
    const error = getByText(/Cannot be Blank/i);
})