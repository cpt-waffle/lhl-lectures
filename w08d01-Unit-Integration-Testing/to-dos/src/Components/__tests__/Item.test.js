import React from 'react';
import { render, prettyDOM, getByText, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';

import Item from '../Item';

describe("Item Tests", () => {
  it('renders', () => {
    const { container } = render(<Item item="Buy Milk"/>);
    const text = getByText(container, 'Buy Milk');
    expect(getByTestId(container, 'todo-name')).toHaveTextContent('Buy Milk');
  })
})