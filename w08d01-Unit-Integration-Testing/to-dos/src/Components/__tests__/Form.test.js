import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

import Form from '../Form';


describe('Form Tests', () => {
  it("tries to render the form",  () => {
    const {container, debug} = render(<Form/>);
    expect(container).toBeInTheDocument();
    console.log(debug());
  })

  it("renders form, presses add on empty item, and does not add",  () => {
    const mockAddItem = jest.fn();

    // expect(mockAddItem).toHaveBeenCalled();
    const {container, debug, getByTestId} = render(<Form addItem={mockAddItem}/>);
    const btn = getByTestId('add-btn');
    fireEvent.click(btn);
    expect(mockAddItem).not.toHaveBeenCalled();
  })

  it("renders form, types an item, presses add, and adds to list",  () => {
    const mockAddItem = jest.fn();

    // expect(mockAddItem).toHaveBeenCalled();
    const {container, debug, getByTestId} = render(<Form addItem={mockAddItem}/>);
    const btn = getByTestId('add-btn');
    const input = getByTestId('item-add')
    fireEvent.change(input, {target: {value: 'buy milk'}})
    fireEvent.click(btn);
    expect(mockAddItem).toHaveBeenCalled();
  })
})