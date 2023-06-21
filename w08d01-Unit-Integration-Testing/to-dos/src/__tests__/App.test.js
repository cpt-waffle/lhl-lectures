import React from 'react';
import {render, fireEvent, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";

import App from '../App';

describe("App Tests", () => {
  it('renders app', async () => {
    const {container,debug, findByText, getByText} = render(<App/>);

    const item1 = await findByText(/AAAAAAAAAAAAAAAAAAAAA/i);
    console.log(debug(item1));
  })
})