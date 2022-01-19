// Optional for new react ver, but folder ones required import 
import React from 'react';
import Item from './Item'


// make a function same name as Component

const ItemList = (props) => {
    const htmlList = props.list.map((item) => {
        return <Item name={item}/>
      });

    return (
        <ul>
            {htmlList}
        </ul>
    )
}


// export default the function/Component
export default ItemList;