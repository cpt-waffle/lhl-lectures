import React from 'react';
import Item from '../Item';
import {render} from "@testing-library/react";
import "@testing-library/jest-dom";

describe('Item Component Tests', () => {
  it('renders the item component', () => {
    const {debug, container} = render(<Item/>);
    // console.log(debug(container));
  })

  it('renders the component and the component says, BUY MILK', () => {
    const {container, getByText, debug} = render(<Item item={"BUY Milk"}/>);
    expect(getByText(/Buy Milk/i)).toHaveTextContent(/Buy Milk/i)
  })

  it('renders component but we grab stuff with testID', () => {
    const {container, getByText, debug, getByTestId} = render(<Item item={"BUY Milk"}/>);
    // console.log(debug(container));
    // console.log(debug(getByTestId('todo-name')));
  })
})