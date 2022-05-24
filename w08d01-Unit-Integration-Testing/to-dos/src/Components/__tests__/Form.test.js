import React from 'react';
import { render, prettyDOM, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Form from '../Form';

describe('Form Tests', () => {
  it('renders the form', () => {
    const result = render(<Form/>)
  })

  it('tries to click a button to submit into the form, the entry is empty!', () => {
    // mock up function
    const addItemMock = jest.fn();
    const {getByText} = render(<Form addItem={addItemMock}/>);
    const button = getByText('Add');
    console.log(prettyDOM(button));
    // How do i Click the add button in JEST?
    fireEvent.click(button);
    console.log(addItemMock)
    expect(addItemMock).not.toHaveBeenCalled();
    const err = getByText('Cannot Be Blank');
  })

  it('tries to add a valid item into the list!', () => {
    const addItemMock = jest.fn();
    const {getByText, getByPlaceholderText} = render(<Form addItem={addItemMock}/>);
    const button = getByText('Add');
    const input = getByPlaceholderText('enter todo');
    // I need to type out an item to be added in!
    fireEvent.change(input, {target: { value: 'Buy Milk'}});
    console.log(prettyDOM(input));
    fireEvent.click(button);
    expect(addItemMock).toHaveBeenCalledTimes(1);
  }) 
})