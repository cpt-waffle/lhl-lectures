import React from 'react';
import { render, prettyDOM } from '@testing-library/react';
import '@testing-library/jest-dom';

import Item from '../Item';

describe('Item component Tests', () => {
  it('renders the Item component', () => {
    const { debug, getByTestId } = render(<Item item="Buy Milk"/>);
    // console.log(debug());
    const title = getByTestId('title');
    // console.log(prettyDOM(title));
    expect(title).toHaveTextContent(/Buy Milk/i);
    // i need to select the specific HTML element where "Buy Milk" lives
    // write an expect()
  })

  it('renders the Item component and everything lowercased', () => {
    const { debug, getByTestId } = render(<Item item="WaLk The DoG"/>);
    console.log(debug());
    const title = getByTestId('title');
    console.log(prettyDOM(title));
    expect(title).toHaveTextContent('walk the dog');
    // i need to select the specific HTML element where "Buy Milk" lives
    // write an expect()
  })

})