import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

import Item from '../Item';

describe('Item Component', () => {
  it('tries to render the Item component', () => {
    const { container } = render(<Item/>);
    expect(container).toBeInTheDocument();
  })

  it('renders a component with "buy milk" text', () => {
    const { container, debug, getByText, getByTestId} = render(<Item item="Buy Milk"/>);
    const title = getByTestId('todo-title');
    expect(title).toHaveClass('todo-title')
  })
})
