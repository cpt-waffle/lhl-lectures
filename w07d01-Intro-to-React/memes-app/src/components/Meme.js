// 1 Import React from 'react' (in the newest ver of react, this step does not apply (optional))
import React from 'react';
// to add css simply import it!
import './Meme.css';

// 2 make a function that the same name as your component 

// Meme(img, title) {    img, title }
const Meme = function(props) {
    console.log('---------------- PROPS');
    console.log(props);

  // 4 Needs to return some HTML to render...
  let imageURL = 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9'
  if (props.img){
      imageURL = props.img
  }
  // Rules about writting components
  //  1 - your component can ONLY RETURN one parent of HTML so encapsulate everything into a div or li, or any other tag...
  // its not "class=" anymore, its "className=" 
  // ______   ?     _____       :    ______ 
//  statement ? if true do this : else do this 
  return (
    <div className="meme">
      <img className="meme-img"src={imageURL}/>
      <h1>{props.title ? props.title  : "Hang in There!"}</h1>
    </div>

  )
}

// 3 export default your function
export default Meme;