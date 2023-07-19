import React from 'react';
import Item from '../Item';
import {render} from '@testing-library/react';
import "@testing-library/jest-dom";


describe('Item Component Tests', () => {
  it('does something', () => {
    const {container, debug} = render(<Item item={"Buy Milk"}/>);

    expect(container).toHaveTextContent('Buy Milk');
  })

  it('renders Item component again', () => {
    const {container, getByText, debug, getByTestId} = render(<Item item={"Buy Milk"}/>)
    console.log(debug(getByText('Buy Milk')));
    console.log(debug(getByTestId('ttitle')));
  })
})