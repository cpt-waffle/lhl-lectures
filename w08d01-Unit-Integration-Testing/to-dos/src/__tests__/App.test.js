// Import React from react
import React from 'react'
import { render, debug, prettyDOM, getByText } from '@testing-library/react'; // Testing library lets us render items to test
import '@testing-library/jest-dom'; // <--- Jest DOM gives us a way to test DOM elements

// import our Component
import App from '../App';

describe('App Component Tests', () => {
  it('tries to render App Component', () => {
    const result = render(<App/>);
    // console.log(result.debug());
  })

  it('tries to render App component and find the header', () => {
    const { getByText, getByTestId } = render(<App/>);
    const header = getByTestId('header');
    expect(header).toHaveClass('todo');
  })
})