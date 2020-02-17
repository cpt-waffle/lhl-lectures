import React, { Fragment }from 'react';
import ListItem from '../ListItem/index';

function List(props) {
  return (
    <Fragment>
      { props.items.length > 0 ?
        props.items.map( item => <ListItem itemName={item}/>) :
        <p>List is Empty!!</p>
      }
    </Fragment>
  );
};

export default List;