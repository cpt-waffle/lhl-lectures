import React from 'react';
import Item from './Item';

const ListItem = props => {
  // const itemsHTML = [];
  // for (let item of props.items) {
  //   itemsHTML.push(<Item task={item.task} done={item.done}/>)
  // }

  // DOMJSONOBJECT = {
  //   div1129: {
  //     button11293414: {
  //       val: "add item"
  //     }
  //   }

  //   listItem--ul1235: {
  //     item--li-1130-0: {task, done},
  //     item--li-1130-2: {task, done},
  //     item--li-1130-1: {task, done},

  //   }

  // }



  const itemsHTML = props.items.map( item => <Item key={item.id} task={item.task} done={item.done}/>
  )
  return (
    <ul>
      {itemsHTML}
    </ul>
  )
}

export default ListItem;