import React from 'react';
import Item from '../Components/Item';

import { render, prettyDOM } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Item tests', () => {
    it(' works (or renders) ', () => {
        render(<Item/>)
    })

    it('renders item with title', () => {
        const { container } = render(<Item item={'buy apples'}/>)
        // console.log(prettyDOM(container));
    })

    it('renders item and should have buy apples in the the item name', () => {
        const { getByText, container } = render(<Item item={'Buy ApPlEs'}/>);
        const title = getByText(/Buy Apples/i);
        // console.log(prettyDOM(container));
        expect(getByText(/Buy Apples/i)).toBeInTheDocument();
    })
})