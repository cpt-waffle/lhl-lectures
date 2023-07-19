import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';


describe("app test", () => {

  it('renders app', async () => {
    const {container, debug, findByText} = render(<App/>);
    // console.log(debug(container));
    const text = await findByText('buy milk');

    console.log(debug(container))
  })

})