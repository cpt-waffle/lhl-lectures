import { useState } from "react";
import useToggle from "../hooks/useToggle";

const Image = props => {
  const {toggle, onToggleClick} = useToggle(true);  

  const defaultImage = 'https://bookshelf.mml.ox.ac.uk/wp-uploads/2014/12/batman_silhouette_by_icedragon529.jpg';

  return (
    <div>
      {toggle ? <img className="img" src={props.img}/> : <img  className="img" src={defaultImage}/>}
      <button onClick={onToggleClick}>Hide</button>
    </div>
  )
}


export default Image;