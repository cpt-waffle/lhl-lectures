import React from 'react';
import { render, prettyDOM } from '@testing-library/react';
import '@testing-library/jest-dom';
import Item from '../Item'

describe('Item tests', () => {
  it('renders item component', () => {
    const {container} = render(<Item/>)
    expect(container).toBeInTheDocument();
  })

  it('renders the buy milk component', () =>{
    const {container, getByTestId} = render(<Item item="Buy Milk"/>);
    const title = getByTestId('todo-name');
    console.log(prettyDOM(title));
    expect(title).toHaveTextContent('Buy Milk');
    expect(title).toHaveClass('todo-title');
  });

})

// getByText
// getByTestId