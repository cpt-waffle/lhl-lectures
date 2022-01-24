import React from 'react'
import Item from './Item'

const ItemList = (props) => {
    console.log(props);

    // const listHTML = [];
    // for (const item of props.list ) {
    //     listHTML.push(<Item key={item.id} id={item.id} task={item.task} done={item.done}/>);
    // }
    // map creates a new array and adds items in it (whatever the map returns)
    const listHTML = props.list.map(item => {
        return <Item key={item.id} id={item.id} task={item.task} done={item.done}/>
    });
    
    return (
        <div>
            ItemList!!!
            {listHTML}
        </div>
    )
}


export default ItemList;