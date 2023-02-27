import React from 'react';
import DemotivationalPoster from './DemotivationalPoster';


const DemoPosterList = props => {
  return (
    <div>
      {props.list.map(poster => {
        return <DemotivationalPoster 
        image={poster.image} 
        title={poster.title} 
        caption={poster.caption}
        />
      })}
    </div>
  )
}

export default DemoPosterList;