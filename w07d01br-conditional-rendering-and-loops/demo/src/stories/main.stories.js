import React from 'react';

import {storiesOf} from '@storybook/react';
import Circle from "../Circle"
import Button from '../Button'



storiesOf('Test')
  .add("random Test", () => <h1>Hello World!</h1>)

// Button()
// Butoon(type, textColor);
storiesOf('Conditional Rendering')
  .add('default render', () => <Button type={'primary'} textColor={'white'}/>)
  .add('more props', () => <Button type={'secondary'} textColor={'green'}/>)




storiesOf('Circle')
.add("default", () => <Circle/>)


