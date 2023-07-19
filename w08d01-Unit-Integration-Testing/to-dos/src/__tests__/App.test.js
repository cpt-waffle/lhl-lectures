import React from 'react';
import App from '../App';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('app tests', () => {
  it('renders app', async () => {
    const {container, debug, findByText, getByPlaceholderText} = render(<App/>)
    // anytime you use find* commands, you will put "await" infront if it
    const item1 = await findByText('buy milk');
    console.log(debug(container));
    console.log(debug(item1));
    const input = getByPlaceholderText('enter todo');
    console.log(debug(input));

  })
})
