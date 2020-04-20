import React from 'react';
import Item from '../Components/Item';

import { render, prettyDOM, fireEvent } from '@testing-library/react';

// test() and it() ARE THE SAME THING
// xit() SKIPs your test

describe('Tests for Item Component', () => {
    it('renders on the screen!', () => {
      const { container } = render(<Item/>);
      // console.log(prettyDOM(container));
    })

    test('renders the component with name, and checkmarked', () => {
      const { container } = render(<Item item={'Buy Apples'} done={true}/>);
      // console.log(prettyDOM(container));
    })

    it('the component has "Buy Apples"', () => {
      const { container, getByText } = render(<Item item={'Buy Apples'} done={true}/>);
      // console.log(prettyDOM(container));
      expect( getByText('buy apples') );
    })

    it('the component has "Buy Apples", AND its lowercase', () => {
      const { container, getByText } = render(<Item item={'BuY ApPles'} done={true}/>);
      expect( getByText('buy apples') );
    })

    it('should have className "todo-item"', () => {
      const { container } = render(<Item item={'learn testing'} done={false}/>);
      expect(container.firstChild.className).toBe('todo-item');
    })

    it('should be unchecked', () => {
      const { container } = render(<Item item={'learn testing'} done={false}/>);
      expect(container.firstChild.children[1].checked).toBe(false);
      // expect()
    })

    it('should be unchecked. Then we click the input field, then it should be checked', () => {
      let checked = false;
      const { container } = render(<Item item={'learn testing'} done={checked} toggleDone={() => checked = true}/>);
      // console.log(prettyDOM(container.firstChild.children[1]));
      expect(checked).toBe(false);
      fireEvent.click(container.firstChild.children[1]);
      expect(checked).toBe(true);
    })
})
