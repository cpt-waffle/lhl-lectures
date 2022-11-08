import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../Form';


describe("Form Tests", () => {
  it('renders on the page', () => {
    const { container } = render(<Form/>);
    expect(container).toBeInTheDocument();
  })

  it(' clicks the button of the form', () => {
    const fn = jest.fn();
    const { container, debug, getByTestId } = render(<Form addItem={fn}/>);
    const button = getByTestId('form-button');

    fireEvent.click(button);
    expect(fn).not.toHaveBeenCalled();
  })

  it( 'fills out the item to submit, presses the button, and it submits', () => {
    const fn = jest.fn();
    const { container, debug, getByTestId } = render(<Form addItem={fn}/>);
    const button = getByTestId("form-button");
    const input = getByTestId("form-input");
    fireEvent.change(input, {target: {value: 'buy milk'}});
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  })
})