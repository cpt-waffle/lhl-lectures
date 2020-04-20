import React from 'react';
import Item from '../Components/Item';
import { render, prettyDOM, fireEvent } from '@testing-library/react';

describe( 'Items Tests', () => {
    it('renders on the screen without issue', () => {
        render(<Item item={'test react'}/>);
    })

    it('renders on the screen but nothing was passed', () => {
        render(<Item/>);
    })

    it('renders, and should have "test react" in the item name', () => {
        const {container, getByText} = render(<Item item={'test react'}/>)
        // console.log(prettyDOM(getByText('test react')))
        // console.log(prettyDOM(container));
    })

    it('should have a classname "todo-item"', () => {
        const {container} = render(<Item item={'test react'}/>)
        expect(container.firstChild.className).toBe('todo-item')
    })


    it('should not be checked', () => {
        const {container} = render(<Item item={'test react'} />)
        expect(container.firstChild.children[1].checked).toBe(false)
        // expect(container.firstChild.className).toBe('todo-item')
    })


    it('should not be checked', () => {
        let status = false;
        const {container, getByTestId} = render(<Item item={'test react'} done={status} toggleDone={() => status = true}/>)
        expect(container.firstChild.children[1].checked).toBe(false)
        fireEvent.click(getByTestId('input'))
        expect(status).toBe(true);
        // expect(container.firstChild.className).toBe('todo-item')
    })
})