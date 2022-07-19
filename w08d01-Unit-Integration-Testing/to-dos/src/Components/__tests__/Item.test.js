import React from 'react';
import {render, debug} from '@testing-library/react';
import '@testing-library/jest-dom';

import Item from '../Item';

describe('Item Component', () => {
  it('tries to render an item component', () => {
    const { container, debug } = render(<Item item='Buy Milk' done={false}/>)
    console.log(debug());
  })

  it('renders the component with title Buy Milk', () => {
    const { debug, getByText, getByTestId } = render(<Item item='Buy Milk' done={false}/>)
    //we can select text by regular expression, ignorning upper or lowercase
    const title = getByText(/buy milk/i);
    const title2 = getByTestId('banana');
    expect(title2).toHaveClass('todo-title');
  })
})