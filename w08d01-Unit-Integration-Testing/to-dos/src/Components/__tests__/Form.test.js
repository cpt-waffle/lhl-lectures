import React from 'react';

import {render, fireEvent, prettyDOM } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../Form';


describe("Form Tests", () => {
    it( "renders form", () => {
        const {debug} = render(<Form/>);
    })

    it("tries to click 'Add' button to sumbit into form", () => {
        const addItemMock = jest.fn();
        
        const {getByText, debug} = render(<Form addItem={addItemMock}/>);
        const button = getByText(/Add/i);
        // console.log(debug());
        // console.log("--------------------");
        fireEvent.click(button);
        const err = getByText("Cannot Be Blank");
        expect(addItemMock).not.toHaveBeenCalled();
    })

    it("writes a task in the input field, and presses submit", () => {
        const addItemMock = jest.fn();
        const {getByText, getByPlaceholderText, getByTestId,  debug } = render(<Form addItem={addItemMock}/>);
        const button = getByText(/Add/i);
        // const input = getByTestId('form-input');
        const input = getByPlaceholderText('enter todo');
        fireEvent.change(input, {target: {value: 'buy milk'}});
        console.log(prettyDOM(input));
        fireEvent.click(button);
        expect(addItemMock).toHaveBeenCalled();
    })
})
