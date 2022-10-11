import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

import Form from '../Form';

describe('form tests', () => {
  it(' renders', () => {
    const {container} = render(<Form/>);
    expect(container).toBeInTheDocument();
  })
  // how do we track state, or if something ran
  // -- nope, we cant track state

  // how to trigger events?
  it (' clicks the button of the form', () => {
    const mockAddItem = jest.fn()
    const {container, debug, getByTestId} = render(<Form addItem={mockAddItem}/>);
    const button = getByTestId('form-button');

    fireEvent.click(button);
    expect(mockAddItem).not.toHaveBeenCalled();
    // 
  })

  it (' fills out the form then clicks the button', () => {
    const mockAddItem = jest.fn()
    const {container, debug, getByTestId} = render(<Form addItem={mockAddItem}/>);
    // fill out the form....
    const input = getByTestId('input');
    fireEvent.change(input, {target:{ value: 'buy milk'}})
    ///////////////////////
    const button = getByTestId('form-button');
    fireEvent.click(button);
    expect(mockAddItem).toHaveBeenCalled();

  })


})