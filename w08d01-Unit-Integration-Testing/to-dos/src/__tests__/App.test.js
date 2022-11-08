import React from 'react';
import App from '../App';
import { render, getByText, prettyDOM} from '@testing-library/react'

describe('App Tests,', () => {
  it('renders', () => {
    const { container, debug } = render(<App/>);
    const title = getByText( container, /ALL items to be done!/i);
    console.log(prettyDOM(title));
  })
})