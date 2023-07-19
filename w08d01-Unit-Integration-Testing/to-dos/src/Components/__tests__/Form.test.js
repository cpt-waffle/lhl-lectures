import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

import Form from '../Form';


describe('Form Tests', () => {
  it('renders the form component', () => {
    const {container, debug, getByTestId} = render(<Form/>);
    const form = getByTestId('form');
    console.log(debug(form));
    expect(form).toHaveClass('addForm');
  })

  it('tries to submit a blank task', () => {
    const mockFunction = jest.fn();


    const {container, debug, getByTestId} = render(<Form addItem={mockFunction}/>);
    const form = getByTestId('form');
    const button = getByTestId('button');
    fireEvent.click(button);
    // console.log(debug(form));
    expect(container).toHaveTextContent('Cannot be Blank!');
  })


  it ('tries to submit a correct task', () => {
    const mockFunction = jest.fn();

    const {container, debug, getByTestId} = render(<Form addItem={mockFunction}/>);
    const form = getByTestId('form');
    const input = getByTestId('input');
    console.log(debug(input));
    fireEvent.change(input, {target: {value: 'buy milk'}})
    console.log(debug(form));
    const button = getByTestId('button');
    fireEvent.click(button);
    expect(mockFunction).toHaveBeenCalled();
  })
})