import React from 'react';
import {storiesOf} from '@storybook/react';

import Card from '../components/Card';

storiesOf('h1 component', module)
.add('default h1', () => <h1>hello world!</h1>)


const img = 'https://miro.medium.com/max/1024/0*xc9fvuF4Cwn5yRaH.jpg';
const name = 'Mr Woofs';
const title = 'Senior Nap Engineer';


storiesOf('Card', module)
.add('default card', () => <Card image={img} name={name} title={title}/>)
.add('nothing being passed', () => <Card />)