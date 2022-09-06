import React from 'react';
import './Avatar.css';

// properties
const Avatar = (props) => {
  const title = 'Senior Nap Engineer';
  const defaultIMG = 'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Fmobile%2F000%2F013%2F564%2Fdoge.jpg';
  return (
    <div>
      <img className="avatar" src={props.image || defaultIMG} />
    </div>
  )
}

export default Avatar;