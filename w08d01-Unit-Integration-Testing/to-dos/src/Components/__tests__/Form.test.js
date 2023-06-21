import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";

import Form from '../Form';


describe('Form Tests', () => {
  it('renders the form component', () => {
    const {container, debug} = render(<Form/>);
    // console.log(debug(container));
  })

  it('renders the form, and we attempt to click the add button', () => {
    // let i = 0;
    // const fakeFunction = () => {
    //   console.log("FAKE!!!");
    //   i++;
    // }
    /// REPLACING ^^ with MOCK function
    const fakeFunction = jest.fn();

    const {container, debug, getByText} = render(<Form addItem={fakeFunction}/>);
    // debug(getByText('Add'));
    fireEvent.click(getByText('Add'))
    // console.log(debug(container));
    expect(fakeFunction).not.toHaveBeenCalled();
  })

  it('renders the form, we type in buy milk, and add it', () => {
    const fakeFunction = jest.fn();
    const {container, debug, getByText, getByTestId} = render(<Form addItem={fakeFunction}/>);
    fireEvent.change(getByTestId('form-input'), {target: {value: 'buy milk'}});
    fireEvent.click(getByText('Add'))
    expect(fakeFunction).toHaveBeenCalled();


  })
})