import React from 'react';
import App from '../App'

import { render, prettyDOM, fireEvent } from  '@testing-library/react';

describe('Tests for Item Component', () => {

  it("Renders on the screen", () => {

    const {container} = render(<App/>)
    // console.log(prettyDOM(container));
  })

  it('has 5 items inside of the list', () => {
    const {container} = render(<App/>)
    // console.log(container.firstChild.children[1].children.length);
  })

  it('App has a todo list', () => {
    const {container} = render(<App/>)
    // console.log(container.firstChild.children[1].className);
  })


  it('App has a button on screen', () => {
    const {container, getByText} = render(<App/>);
    // console.log(prettyDOM(getByText('Add')));
  })

  it('App has an item in the list with name "learn react"', () => {
    const {container, getByText} = render(<App/>);
    // console.log(prettyDOM(getByText('learn react')));
  })


  it("Clicks a button and an error occurs on the screen saying that: item connot be blank!!!", () => {
    const {container, getByText} = render(<App/>);
    const button = getByText("Add");
    // fireEvent.click(button);
    console.log(prettyDOM(container));
    expect(getByText('Item cannot be Blank!'))
  })


})