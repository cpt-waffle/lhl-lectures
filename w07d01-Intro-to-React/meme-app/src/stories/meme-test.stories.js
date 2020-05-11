import React from 'react'; // GETTING INTO THIS SOON
import { storiesOf } from '@storybook/react';
// ^ to write stories

import MemeItem from '../Components/MemeItem';
import MemeList from '../Components/MemeList';


//

// <% include()

//PROPERTIES
// title = 'Fresh Meme of 2020'
// url = 'imgur.com/asdasdasdsdlfdghjlt45';
// memeItem(title, url)


storiesOf('Meme Item', module)
    .add('Default Obj', () => <MemeItem a="true" title="Fresh Meme 2020" url="https://preview.redd.it/ox31g6ju63y41.png?width=640&crop=smart&auto=webp&s=29735388f28365d90e23859b05854ec50be8e4ec"/>)
    .add('ANother meme', () => <MemeItem a="true" title="Test" url="https://preview.redd.it/3txb5ddfh2y41.jpg?width=640&crop=smart&auto=webp&s=6130ad8e225e1666ec5c9583ce7ff037292168fc"/>)
    .add("3rd meme", () => <MemeItem a="true" title="Fresh Meme 2020" url="https://preview.redd.it/bp6g76i3iyx41.jpg?width=640&crop=smart&auto=webp&s=781fd5c86c65d74554a3eba6acd1051befa67630"/>)
    .add("No params passed", () => <MemeItem />)


const memeList = [
    {title: "Adrian's fresh meme", url: 'https://preview.redd.it/ff3hhsds9ks41.jpg?width=960&crop=smart&auto=webp&s=bf75658ce17a530f610fdc49b772254e6356f145'},
    {title: "WFH", url: "https://cdn.facilityexecutive.com/wp-content/uploads/2020/03/working-from-home-meme-14-300x300-1.jpg"},
    {title: "Trojan Horse", url: "https://i.redd.it/rnxiz3cg5ls41.jpg"},
    {title: "Stack overflow halp", url: "https://preview.redd.it/jd25yqv8xsf31.jpg?width=640&crop=smart&auto=webp&s=9f146e09eed275511b156916db118ec9bb70a2da"},
];


storiesOf('Meme List', module)
    .add("A list of memes", () => <MemeList list ={memeList}/>)



// Add function lets us render multiple
// things on the page to see how they operate
