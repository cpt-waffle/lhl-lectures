import React from 'react';
import Item from '../Components/Item'

import { render, prettyDOM, getByText } from  '@testing-library/react';

describe('Tests for Item Component', () => {

  it("Renders on the screen", () => {

    const {container} = render(<Item item={'Buy Milk'} done={false}/>)
    // console.log(prettyDOM(container));
  })

  it("Item has 2 children!", () => {
    const {container} = render(<Item item={'Buy Milk'} done={false}/>)
    expect(container.firstChild.children.length).toBe(2);
  })

})