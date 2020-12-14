import React from 'react';
// method 1 = using screen
// method 2 = directly importing it out
import { render, prettyDOM, screen, getByText } from '@testing-library/react';
import Item from '../Components/Item';
import '@testing-library/jest-dom';

// make a describe of what are we testing
// followed by a bunch of tests....
const isTwo = (num) => {
    return 2 === num;
}


describe('Item Tests', () => {
    it('our first test', () => {
        expect(isTwo(2)).toBe(true);
    })

    it('renders our Item component', () => {
        const { container } = render(<Item/>);
        // console.log(prettyDOM(container));
    })

    it('renders an Item with prop "buy apples"', () => {
        // directory destructuring it out of render()
        const { container, getByText } = render(<Item item="Buy Apples"/>);
        const apples = getByText(/buy apples/i);
        // console.log(prettyDOM(apples));
        expect(apples).toBeInTheDocument();
    })

    it('renders an Item with prop "BuY ApPlEs"', () => {
        const { container, getByText } = render(<Item item="BuY ApPlEs"/>);
        const apples = getByText("buy apples");
        expect(apples).toBeInTheDocument();
    })
    
    it('renders an Item, and an item has a class "todo-item"', () => {
        const { container } = render(<Item item="Buy Apples"/>);
        console.log(prettyDOM(container));
        expect(container.children[0]).toHaveClass('todo-item');
    })
})