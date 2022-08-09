import React, { useState } from "react";

const Status = () => {
  // $(document).on('ready', () => {
  //     $('button').on('click', evt => {
  //       $('button').text();
  //       // increment the number....
  //       $('button').text(num);
  //     })
  // })
  /// make a function that will run when that event is triggered....
  const [dislikes, setDislikes] = useState(99);
  const [likes, setLikes] = useState(1000);

  // console.log(state);
  //  f(arg) = {
  //     state[0] = arg;
  //     // TELL REACT to RE-RENDER this entire
  //   }


  // let dislikes = 99;
  console.log("line 22")



  const onDislikeClick = () => {
    // always send a new value into the state change
    // never change state directly
    setDislikes(dislikes+1)
  }

  return (
    <div>
      <button onClick={() =>  setLikes(likes+1) }>Like {likes}</button>
      <button onClick={onDislikeClick}>Dislike {dislikes}</button>
    </div>
  )
}

export default Status;


////