// we gonna import React
import React from 'react';
import Item from '../Components/Item';

// We are going to use react-testing-library
// to render components in JSDOM and look at them, and see how they behave...
// for this i gotta import testing-library/react
import { render, prettyDOM, getByText } from '@testing-library/react';
import '@testing-library/jest-dom'


describe('Our first Test', () => {
    it('2 == 2 ?', () => {
        expect(2).toBe(2);
    })

    it('renders a component with no issues', () => {
      const { container } = render(<Item/>);
    //   console.log(prettyDOM(container));
    })

    it('renders a component with the word buy apples', () => {
      const { container } = render(<Item item={'Buy Apples'}/>);
    //   METHOD 1
    //   const text = getByText('buy apples');
    //   console.log(prettyDOM(text));
    //   expect(text).toBeInTheDocument();
    // METHOD 2
    const text = getByText(container, /Buy ApPles/i);
    expect(text).toBeInTheDocument();
    })

})