import React from 'react';
import { render, prettyDOM, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import Item from '../Components/Item';

describe('Our first tests', () => {
    xit('checks if 2 == 2 is true', () => {
        let answer = 2 === 2;
        console.log(answer);
        expect(answer).toBe(true);
    })

    xit('renders an Item component', () => {
        const { container } = render(<Item/>);
        // console.log(prettyDOM(container));
    })

    xit("renders an Item components and it says Buy Apples", () => {
        const { container } = render(<Item item="Buy Apples"/>);

        // getByText(/Buy Apples/i);
        // console.log(container);
        const text = getByText(container, /Buy Apples/i);
        // console.log(prettyDOM(container));

        // console.log(prettyDOM(text));
        expect(text).toBeInTheDocument();
        // expect(container.children[0]).toHaveClass('todo-item');
    })

    it('what is JEST FN?', () => {
        // jest.fn is a function that RETURNS a MOCK FUNCTION
        // i have to call it to get it....
        const randomFunc = jest.fn();
        randomFunc();
        randomFunc();

        randomFunc();


        // console.log(randomFunc)
        expect(randomFunc).toHaveBeenCalledTimes(3);

    })
})