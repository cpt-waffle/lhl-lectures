import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import CartItem from '../Components/CartItem'


storiesOf("Example", module)
    .add('Random Example', () => <h1>Bruh</h1>)


// CartItem(3, 'toilet paper')
storiesOf('Shopping Cart Items', module)
    .add("Single Item", () =>  <CartItem num={3} name={'toilet paper'} banana={action("this is the mock banana function!")}/>)