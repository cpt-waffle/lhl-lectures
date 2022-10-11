import React from 'react';
import App from '../App';
import {render, getByText} from '@testing-library/react';

describe("Our first React Tests with App!", () => {
  it(' renders', () => {
    const {debug, container} = render(<App/>);
    // debug to see what actually gets mounted
    // using getAllByText!
    const title = getByText(container, /all items to be done!/i);
    // console.log(debug(title));

  })
})