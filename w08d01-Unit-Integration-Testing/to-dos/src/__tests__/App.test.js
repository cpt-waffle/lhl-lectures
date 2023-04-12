import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('App Tests', () => {
  it(' renders', () => {
    const { debug, getByText } = render(<App/>);
    
    expect(getByText(/All items to be Done!/i)).toHaveClass('todo');
  })
})