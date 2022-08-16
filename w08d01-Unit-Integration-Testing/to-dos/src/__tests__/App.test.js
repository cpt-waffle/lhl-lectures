import React from 'react';

import '@testing-library/jest-dom'
import { render, getByText } from '@testing-library/react';
import App from '../App';

describe("Random Test", () => {
  it ('does nothing ', () => {
    const  {container, debug} = render(<App/>); // returns a container 
    const title = getByText(container, 'All Items to Be Done!');
    console.log(debug(title));
    expect(title).toBeInTheDocument()
  })
})