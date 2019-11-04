
// describe() <--- describes what component we will be testing
// test() .. test.skip()
// it() .. <----- xit()

import React from "react"
import { render, prettyDOM, fireEvent } from '@testing-library/react'
import Item from '../Components/Item'


describe('Testing Items Component' , () => {
  it('Actually renders on the screen!!!!', ()=> {
    render(<Item/>)
  })

  it('To have 2 children inside of it', ()=> {
    const {container} = render(<Item item="learn react testing" done={false}/>)
    // console.log(prettyDOM(container))
    expect(container.firstChild.children.length).toBe(1)
  })

  it('has a item with text to say "Buy Apples"', () => {
    const {container, getByText } = render(<Item item="BuY ApPLes" done={false}/>)
    // console.log(prettyDOM(container))
    expect(getByText("buy apples"));
  })

  it('checkmarks to true when clicked on the checkbox', () => {
    let done=false;
    console.log(done)

    const { container, getByText } = render(<Item item="BuY ApPLes" done={done} toggleDone={() => done = true}/>)
    fireEvent.click(container.firstChild.children[0])
    console.log(done)
    expect(done).toBe(true);
  })

})