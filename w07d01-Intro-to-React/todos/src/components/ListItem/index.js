import React from 'react';

import "./ListItem.css"

function ListItem(props) {
  return (
    <li className="item"><b>{props.itemName}</b></li>
  );
};

export default ListItem;