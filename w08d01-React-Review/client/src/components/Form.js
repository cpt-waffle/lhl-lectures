import React, { useState} from 'react';

const Form = props => {

  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');

  const onCaptionChange = (evt) => {
    setCaption(evt.target.value);
  }
  
  
  const onSubmit = evt => {
    evt.preventDefault();
    console.log(evt.target.image.value);
    console.log(title);
    console.log(caption);
    props.addPoster(evt.target.image.value, title, caption);
  }



  return (
    <form onSubmit={onSubmit}>
      <p>Image: <input type="text" name="image"/></p>
      <p>Title: 
        <input 
          type="text"
          value={title}
          onChange={evt => setTitle(evt.target.value)}
          name="title"
        />
      </p>
      <p>Caption: <input type="text" value={caption} onChange={onCaptionChange} name="caption"/></p>
      <button>Save a Poster!</button>
    </form>
  )

}

export default Form;