import React from "react";
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import Item from "../Item";

describe('item tests', () => {
  it('renders item', () => {
    const {container, debug, getByText} = render(<Item item="buy milk"/>);
    console.log(debug());
    const title = getByText('buy milk');
    expect(title).toHaveClass('todo-title');
  })

  it('checks if container got mounted', () => {
    const {container} =  render(<Item item="buy milk"/>);
    expect(container).toBeInTheDocument();
  })
})