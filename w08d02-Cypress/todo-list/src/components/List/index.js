import React from 'react';
import ListItem from './ListItem';

const List = ({list, handleComplete}) => {

  return (
    <ul className="list">
      {list.map((item, i) => <ListItem key={i} {...item} completed={() => handleComplete(i)}/>)}
    </ul>
  );
}

export default List;