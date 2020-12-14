import React from 'react';
import { render, prettyDOM, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import Item from '../Components/Item';

describe('Items tests', () => {
    it('checks uf 2 == 2 is true', () => {
        let answer = 2 === 2;
        expect(answer).toBe(true);
    })

    it('renders a h1 tag', () => {
        const { container } = render(<h1>Hello World</h1>);
        // console.log(prettyDOM(container));
    })

    it('renders a component', () => {
        const { container } = render(<Item/>);
        // console.log(prettyDOM(container));
    })

    it('renders a component with item prop "buy apples" and it has to be lowercase', () => {
        const {container, getByText} = render(<Item item="Buy Apples"/>);
        // method 1, import getBy* from top the file, 
        // you will have to pass the container as the first argument!
        // const text = getByText(container, 'Buy Apples');
        const text = getByText('buy apples');
        // console.log(prettyDOM(text));
        expect(text).toBeInTheDocument();
    })

    it("renders a component with item prop 'buy apples' and has class 'todo-item'", () => {
        const {container, getByText} = render(<Item item="Buy Apples"/>);
        const li = container.children[0];
        // console.log(prettyDOM(li));
        expect(li).toHaveClass('todo-item');
    })

    it("renders a component with item prop 'buy apples' but prop had a bad case", () => {
        const {container, getByText} = render(<Item item="BuY APPlEs"/>);
        const text = getByText(/Buy Apples/i);
        console.log(prettyDOM(text));
        expect(text).toBeInTheDocument();
    })
})