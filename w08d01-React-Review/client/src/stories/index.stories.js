import React from 'react';

import {storiesOf} from '@storybook/react';
import DemotivationalPoster from '../components/DemotivationalPoster';
import DemoPosterList from '../components/DemoPosterList';


storiesOf('default h1', module)
.add('h1 hello world 1', () => <h1>Hello World</h1>)
.add('h1 hello world 2', () => <h1>Hello World</h1>)
.add('h1 hello world 3', () => <h1>Hello World</h1>)
.add('h1 hello world 4', () => <h1>Hello World</h1>)

// DemotivationalPoster({title: ____, caption: _____, })
storiesOf('Demotivational Poster', module)
.add('default demotivational poster', () => <DemotivationalPoster/>)
.add('demo poster with props', () => 
  <DemotivationalPoster
    title={'DogeCoin'}
    caption={"I can't believe people bought this!"}
    image={'https://rlv.zcache.ca/dogecoin_doge_funny_face_dog_classic_round_sticker-r74f7bd2931ee439289adecf7a655e882_0ugmp_8byvr_736.jpg'}
  />
  )

const array = [
  {
    title: 'random title',
    caption: 'random caption',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
  },
  {
    title: 'motivation',
    caption: 'i have none on monday',
    image: 'https://gdb.voanews.com/096e0000-0a00-0242-bd5b-08da45926590_cx0_cy7_cw86_w1200_r1.jpg'
  },
]


storiesOf('DemotivationalPosterList', module)
.add('displays a bunch of stories', () => <DemoPosterList list={array}/>)

