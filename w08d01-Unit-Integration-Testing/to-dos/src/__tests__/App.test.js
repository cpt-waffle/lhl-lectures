import React from 'react';

import { render, getByText } from '@testing-library/react'; // this is to render
import '@testing-library/jest-dom'; // this is to have HTML expects/matchers
// import the component that i want to test...
import App from '../App';

describe('App tests', () => {
  it('checks if 2 + 2 is equal to 4', () => {
    expect(2+2).toBe(4);
  })

  it('Renders the App', () => {
    const { debug, container } = render(<App/>);
    const title = getByText(container, 'All Items to Be Done!');
    expect(title).toBeInTheDocument();
    // console.log(debug());
  })
})