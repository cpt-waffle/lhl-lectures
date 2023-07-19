import React from 'react';
import Item from '../Item';
import {render, prettyDOM} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Item Component Tests', () => {
  it('renders the item component', () => {
    const {container, debug} = render(<Item item={'Buy Milk'}/>);
    expect(container).toHaveTextContent('Buy Milk');
  })

  it('renders the item component and we play with some queries', () => {
    const {container, debug, getByText, getByTestId} = render(<Item item={'Buy Milk'}/>);
    const title = getByText('Buy Milk');
    const titleGrabbedByTestId = getByTestId('ttitle')
    console.log(debug(title));
    console.log('-----------------------------');
    console.log(debug(titleGrabbedByTestId));
    expect(title).toHaveClass('todo-title');
  })
})