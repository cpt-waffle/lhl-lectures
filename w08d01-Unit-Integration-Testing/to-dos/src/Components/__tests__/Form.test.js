import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../Form';

describe('Form Tests', () => {
  it("renders", () => {
    const { container,debug } = render(<Form/>);
    expect(container).toBeInTheDocument();
  })

  it('clicks the button of the form, and tries to submit something that is empty', () => {
    const fn = jest.fn();
    const { container,debug, getByTestId } = render(<Form addItem={fn}/>);
    const button = getByTestId('form-button');
    fireEvent.click(button);
    expect(fn).not.toHaveBeenCalled();
  })

  it('writes a correct task, and attempts to submit it', () => {
    const fn = jest.fn();
    const { container,debug, getByTestId } = render(<Form addItem={fn}/>);
    const button = getByTestId('form-button');
    const input = getByTestId('form-input');
    fireEvent.change(input, {target:{value: 'Buy MilkZZZZZZZZZZZZzz'}});
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  })
})