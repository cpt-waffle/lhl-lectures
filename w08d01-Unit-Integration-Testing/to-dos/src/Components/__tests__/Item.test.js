import React from 'react';

import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import Item from '../Item';

describe('Item Tests', () => {
    it('renders the item component', () => {
        const {debug} = render(<Item item="Buy Milk"/>);
    })

    it('renders the item component and checks if item has class todo-item', () =>{
        const { getByTestId } = render(<Item item="buy milk"/>);
        const itemHTML = getByTestId('item');
        expect(itemHTML).toHaveClass('todo-item');
    })
    

    // PULL REQUSEST --->
    // you push a branch to github and you say 
    // that you want to merge all the commits in that 
    // branch into master/main/etc
    // AN ACTUAL PERSON CHECKS YOUR WORK
})