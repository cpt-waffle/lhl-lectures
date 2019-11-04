import React from "react"
import { render, prettyDOM, fireEvent } from '@testing-library/react'
import App from '../App'


describe('App tests', () => {
  it('renders with no issue', () => {
    expect(render(<App/>))
  })

  it('has a list Item with 6 items in it', () => {
    const {container} = render(<App/>);
    expect(container.firstChild.children[1].children.length).toBe(5)
  })
  it('it has item with do some testing', () => {
    const {container, getByText } = render(<App/>);
    expect(getByText('do some testing'));
  })

  it('Pressing Enter when empty', () => {
    const { container , getByText } = render(<App/>);
    fireEvent.click(getByText('Add'));
    expect(getByText("Item cannot be Blank!"))
  });
})