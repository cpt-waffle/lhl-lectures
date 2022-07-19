import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

import Form from '../Form';

describe("Form Tests", () => {
  it('renders the Form component, and clicks add on an empty item', () => {
    const fn = jest.fn();

    const {debug, getByText} = render(<Form addItem={fn}/>);
    const button = getByText(/Add/i);
    // how to click a button in JEST?
    fireEvent.click(button);
    expect(fn).not.toHaveBeenCalled();
    // console.log(debug(button));
    // how to click a button in JEST?
    // what is a mock function?
  })



  it('renders the Form component, and clicks add on the correct item', () => {
    const fn = jest.fn();
    const {debug, getByText, getByPlaceholderText} = render(<Form addItem={fn}/>);
    const button = getByText(/Add/i);
    const input = getByPlaceholderText('enter todo');
    fireEvent.change(input, { target: { value: 'write a test'}})
    console.log(debug(input));
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
    // if i pass a function, and it runs, i assume the the item was 
    // being added to the state

    // if i pass a function and it does not run, i assume that the parameters
    // for the form were not correct
    // what is a mock function?
  })
})