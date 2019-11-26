import React from 'react'

export default function Profile (props) {

  return (
    <div className="profile">
      <img className="profile__img" src={props.profile}/>
      <h4>{props.children}</h4>
    </div>
  )

}