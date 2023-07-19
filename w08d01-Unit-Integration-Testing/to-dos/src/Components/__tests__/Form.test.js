import React from "react";
import Form from '../Form';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form Tests', () => {
  it('renders the form', () => {
    const {container, debug} = render(<Form/>);
    // console.log(debug(container));
  })

  it('tries to submit an empty task (should not be able to)', () => {
    const fakeFunction = jest.fn();

    const {container, debug, getByTestId } = render(<Form addItem={fakeFunction}/>);
    const button = getByTestId('button');
    fireEvent.click(button);
    expect(fakeFunction).not.toHaveBeenCalled();
  })


  it('tries to submit "buy milk" (should be able to)', () => {
    const fakeFunction = jest.fn();

    const {container, debug, getByTestId, getByPlaceholderText} = render(<Form addItem={fakeFunction}/>);
    const button = getByTestId('button');
    const input = getByPlaceholderText('enter todo');

    fireEvent.change(input, {target: {value: 'buy milk'}})
    // find the input field and type in it

    fireEvent.click(button);
    expect(fakeFunction).toHaveBeenCalled();

  })
})