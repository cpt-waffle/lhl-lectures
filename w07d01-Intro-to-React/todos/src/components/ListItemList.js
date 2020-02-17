import React from 'react';
import ListItem from './ListItem'

function ListItemList(props) {

  const items = props.list ? props.list.map( name => <ListItem itemName={name}/>) : [];
  return (
    <div>
      {!props.list && <p>Nothing in the list</p>}
      <ul>
        {items}
      </ul>
    </div>
  );
}


export default ListItemList;